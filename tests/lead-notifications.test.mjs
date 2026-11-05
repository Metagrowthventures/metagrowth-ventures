import assert from 'node:assert/strict'
import { generateKeyPairSync } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import worker from '../dist/_worker.js'

// Exercise the production bundle with local KV and HTTP doubles. No live leads or email.
const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 })
const gmail = {
  GMAIL_SERVICE_ACCOUNT_EMAIL: 'test@example.invalid',
  GMAIL_SERVICE_ACCOUNT_KEY_ID: 'test-key',
  GMAIL_PRIVATE_KEY: privateKey.export({ type: 'pkcs8', format: 'pem' }),
}
const leadEmail = 'lead@example.invalid'
const cases = [
  ['/api/contact', 'contact-form', { first_name: 'Test', last_name: 'Lead', email: leadEmail }],
  ['/api/contact', 'founders-council', { source: 'founders-revenue-council', name: 'Test Lead', email: leadEmail }],
  ['/api/assessment', 'assessment', { firstName: 'Test', lastName: 'Lead', email: leadEmail, score: 65 }],
  ['/api/pdf-gate', 'pdf-gate', { first_name: 'Test', last_name: 'Lead', email: leadEmail, pdf_name: 'Test Resource', pdf_url: '/static/test.pdf' }],
]

for (const [path, source, payload] of cases) {
  for (const delivery of ['success', 'failure', 'unconfigured']) {
    test(`${source}: ${delivery} email preserves lead and confirmation routing`, async (t) => {
      const records = []
      const messages = []
      t.mock.method(globalThis, 'fetch', async (url, init) => {
        assert.equal(records.length, 1, 'lead is stored before any outbound request')
        if (String(url) === 'https://oauth2.googleapis.com/token') {
          return Response.json({ access_token: 'local-test-token' })
        }
        assert.equal(String(url), 'https://gmail.googleapis.com/gmail/v1/users/josh@metagrowth.ventures/messages/send')
        const message = Buffer.from(JSON.parse(init.body).raw, 'base64url').toString('utf8')
        messages.push(message)
        return delivery === 'failure'
          ? new Response('Simulated delivery failure', { status: 503 })
          : Response.json({ id: 'local-message' })
      })
      t.mock.method(console, 'error', () => {})
      const env = {
        ...(delivery === 'unconfigured' ? {} : gmail),
        LEADS: { put: async (key, value, options) => records.push({ key, record: JSON.parse(value), options }) },
      }
      const response = await worker.fetch(new Request(`https://local.invalid${path}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      }), env, { waitUntil() {} })
      assert.equal(response.status, 200)
      assert.equal(records.length, 1)
      assert.equal(records[0].record.source, source)
      assert.equal(records[0].record.email, leadEmail)
      assert.equal(records[0].options.expirationTtl, 180 * 24 * 60 * 60)
      if (delivery === 'unconfigured') {
        assert.equal(messages.length, 0)
        return
      }
      assert.equal(messages.length, 2)
      assert.match(messages[0], /^To: josh@metagrowth\.ventures\r?$/m)
      assert.match(messages[0], /^Reply-To: lead@example\.invalid\r?$/m)
      assert.match(messages[1], /^To: lead@example\.invalid\r?$/m)
      assert.match(messages[1], /^From: MetaGrowth Ventures <josh@metagrowth\.ventures>\r?$/m)
      if (source !== 'pdf-gate') assert.match(messages[1], /^Reply-To: josh@metagrowth\.ventures\r?$/m)
      if (source === 'founders-council') assert.match(messages[1], /mailto:josh@metagrowth\.ventures/)
      if (source === 'assessment') assert.match(messages[1], /Score 65\/100|65/)
      if (source === 'pdf-gate') assert.match(messages[1], /https:\/\/metagrowth\.ventures\/static\/test\.pdf/)
    })
  }
}

for (const [path, source, payload] of cases) {
  test(`${source}: thrown notification error cannot prevent KV persistence`, async (t) => {
    const records = []
    t.mock.method(console, 'error', () => {})
    t.mock.method(globalThis, 'fetch', async () => {
      assert.equal(records.length, 1)
      throw new Error('Simulated network exception')
    })
    const response = await worker.fetch(new Request(`https://local.invalid${path}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
    }), {
      ...gmail,
      SLACK_WEBHOOK_URL: 'https://slack.invalid/webhook',
      LEADS: { put: async (key, value) => records.push(JSON.parse(value)) },
    }, { waitUntil() {} })
    // Existing handler error semantics remain unchanged; the lead survives the error.
    assert.equal(response.status, 500)
    assert.equal(records.length, 1)
    assert.equal(records[0].source, source)
    assert.equal(records[0].email, leadEmail)
  })
}

test('application source contains no obsolete mailbox', () => {
  assert.ok(!readFileSync(new URL('../src/index.tsx', import.meta.url), 'utf8').includes('info' + '@metagrowth.ventures'))
})
