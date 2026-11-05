import { Hono } from 'hono'
import {
  portalLoginPage,
  portalDashboardPage,
  portalCallsPage,
  portalAgreementsPage,
  portalCandidatesPage,
  portalAuditPage,
  portalBriefingPage,
  portalCommunicationsPage,
} from './pages/portal'
import { portalCampaignBuilderPage } from './pages/campaign-builder'
import { internalDashboardPage } from './pages/internal-dashboard'
import { leadsDashboardPage } from './pages/leads-dashboard'
import { assessmentPage } from './pages/assessment'
import { assessmentReportPage } from './pages/assessment-report'
import { assessmentPreviewPage } from './pages/assessment-preview'
import { meetingConfirmedPage } from './pages/meeting-confirmed'
import { commandCenterPage } from './pages/command-center'
import { homePage } from './pages/home'
import { growthEngineXRayPage } from './pages/xray'
import { foundersCouncilPage } from './pages/founders-council'
import {
  solutionsPage,
  revenueOSPage,
  managedSalesPodsPage,
  commissionOnlyPage,
  fractionalCROPage,
  growthOSPage,
} from './pages/solutions'
import {
  aboutPage,
  caseStudiesPage,
  howWeWorkPage,
  industriesPage,
  resourcesPage,
  contactPage,
  revenueSystemAuditPage,
} from './pages/secondary'

type Bindings = {
  SLACK_WEBHOOK_URL: string
  RESEND_API_KEY: string
  GMAIL_CLIENT_ID: string
  GMAIL_CLIENT_SECRET: string
  GMAIL_REFRESH_TOKEN: string
  GMAIL_SERVICE_ACCOUNT_EMAIL: string
  GMAIL_SERVICE_ACCOUNT_KEY_ID: string
  GMAIL_PRIVATE_KEY: string
  LEADS: KVNamespace
  LEADS_API_KEY: string
  YOUTUBE_API_KEY: string
  GA4_SERVICE_ACCOUNT_JSON: string
  GA4_PROPERTY_ID: string
}

// -- KV Lead Storage helper ----------------------------------------------------
async function saveLead(kv: KVNamespace, source: string, data: Record<string, unknown>) {
  try {
    const id  = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    const key = `lead:${id}`
    const record = { id, source, captured_at: new Date().toISOString(), ...data }
    // Store for 180 days (TTL in seconds) — plenty of time for HubSpot to pull
    await kv.put(key, JSON.stringify(record), { expirationTtl: 180 * 24 * 60 * 60 })
  } catch (e) {
    console.error('KV saveLead error:', e)
  }
}

// -- Gmail API helper (Service Account JWT) ------------------------------------
async function sendViaGmail(
  env: Bindings,
  opts: { to: string; subject: string; html: string; replyTo?: string }
): Promise<{ ok: boolean; error?: string }> {
  try {
    const serviceEmail = env.GMAIL_SERVICE_ACCOUNT_EMAIL
    const keyId = env.GMAIL_SERVICE_ACCOUNT_KEY_ID
    const privateKeyPem = env.GMAIL_PRIVATE_KEY.replace(/\\n/g, '\n')
    const impersonateAs = 'josh@metagrowth.ventures'

    // 1. Build JWT for service account
    const now = Math.floor(Date.now() / 1000)
    const jwtHeader = { alg: 'RS256', typ: 'JWT', kid: keyId }
    const jwtClaim = {
      iss: serviceEmail,
      sub: impersonateAs,
      scope: 'https://mail.google.com/',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    }

    const b64url = (obj: unknown) =>
      btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    const signingInput = `${b64url(jwtHeader)}.${b64url(jwtClaim)}`

    // 2. Import RSA private key and sign
    const pemBody = privateKeyPem
      .replace('-----BEGIN PRIVATE KEY-----', '')
      .replace('-----END PRIVATE KEY-----', '')
      .replace(/\s/g, '')
    const keyBytes = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0))
    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8', keyBytes.buffer,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false, ['sign']
    )
    const sigBytes = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5', cryptoKey,
      new TextEncoder().encode(signingInput)
    )
    const sig = btoa(String.fromCharCode(...new Uint8Array(sigBytes)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    const jwt = `${signingInput}.${sig}`

    // 3. Exchange JWT for access token
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    })
    const tokenData = await tokenRes.json() as { access_token?: string; error?: string; error_description?: string }
    if (!tokenData.access_token) {
      return { ok: false, error: `Token error: ${JSON.stringify(tokenData)}` }
    }

    // 4. Build RFC 2822 email
    const replyToLine = opts.replyTo ? `Reply-To: ${opts.replyTo}\r\n` : ''
    const rawEmail = [
      `From: MetaGrowth Ventures <${impersonateAs}>`,
      `To: ${opts.to}`,
      `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(opts.subject)))}?=`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      replyToLine.trim(),
      '',
      opts.html,
    ].filter(l => l !== undefined).join('\r\n')

    // 5. Base64url encode and send
    const encoded = btoa(unescape(encodeURIComponent(rawEmail)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    const sendRes = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/${impersonateAs}/messages/send`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw: encoded }),
      }
    )
    if (!sendRes.ok) {
      const err = await sendRes.text()
      return { ok: false, error: `Gmail send error ${sendRes.status}: ${err}` }
    }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: String(e) }
  }
}

const app = new Hono<{ Bindings: Bindings }>()

// -- Contact form API -----------------------------------------------------------
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()

    // -- Detect source — council application vs standard contact form ----------
    const isCouncil = body.source === 'founders-revenue-council'

    // -- Field normalisation — handle both form shapes -------------------------
    const name      = isCouncil
      ? (body.name || '').trim()
      : `${body.first_name || ''} ${body.last_name || ''}`.trim()
    const email     = (body.email || '').trim()
    const company   = (body.company || '').trim()
    const revenue   = (body.revenue || '').trim()
    const teamSize  = (body.team || body.team_size || '').trim()
    const title     = (body.title || '').trim()
    const phone     = (body.phone || '').trim()
    const solution  = (body.solution || '').trim()
    const challenge = (body.challenge || '').trim()
    const why       = (body.why || '').trim()
    const contribute = (body.contribute || '').trim()

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

    // -- 1. Slack notification ------------------------------------------------
    const slackWebhook = c.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      const slackPayload = isCouncil ? {
        text: `🛡️ *New Council Application — ${name} (${company})*`,
        blocks: [
          { type: 'header', text: { type: 'plain_text', text: `🛡️ Council Application — ${name}` } },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${name || '—'}` },
              { type: 'mrkdwn', text: `*Title:*\n${title || '—'}` },
              { type: 'mrkdwn', text: `*Email:*\n${email || '—'}` },
              { type: 'mrkdwn', text: `*Phone:*\n${phone || '—'}` },
              { type: 'mrkdwn', text: `*Company:*\n${company || '—'}` },
              { type: 'mrkdwn', text: `*Revenue Range:*\n${revenue || '—'}` },
              { type: 'mrkdwn', text: `*Sales Team Size:*\n${teamSize || '—'}` },
            ],
          },
          { type: 'section', text: { type: 'mrkdwn', text: `*Biggest Revenue Challenge:*\n${challenge || '—'}` } },
          { type: 'section', text: { type: 'mrkdwn', text: `*Why They Want To Join:*\n${why || '—'}` } },
          { type: 'section', text: { type: 'mrkdwn', text: `*What They Can Contribute:*\n${contribute || '—'}` } },
          { type: 'context', elements: [{ type: 'mrkdwn', text: `Submitted ${timestamp} ET` }] },
          { type: 'actions', elements: [{ type: 'button', text: { type: 'plain_text', text: '📧 Reply to Applicant' }, url: `mailto:${email}`, style: 'primary' }] },
        ],
      } : {
        text: '🚀 *New Lead — MetaGrowth Contact Form*',
        blocks: [
          { type: 'header', text: { type: 'plain_text', text: '🚀 New Lead — MetaGrowth Contact Form' } },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${name || '—'}` },
              { type: 'mrkdwn', text: `*Email:*\n${email || '—'}` },
              { type: 'mrkdwn', text: `*Company:*\n${company || '—'}` },
              { type: 'mrkdwn', text: `*Revenue Stage:*\n${revenue || '—'}` },
              { type: 'mrkdwn', text: `*Team Size:*\n${teamSize || '—'}` },
              { type: 'mrkdwn', text: `*Solution Interest:*\n${solution || '—'}` },
            ],
          },
          { type: 'section', text: { type: 'mrkdwn', text: `*Challenge:*\n${challenge || '—'}` } },
          { type: 'context', elements: [{ type: 'mrkdwn', text: `Submitted ${timestamp} ET` }] },
          { type: 'actions', elements: [{ type: 'button', text: { type: 'plain_text', text: '📧 Reply to Lead' }, url: `mailto:${email}`, style: 'primary' }] },
        ],
      }
      await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackPayload),
      })
    }

    // -- 2. Email via Gmail API -----------------------------------------------
    if (c.env.GMAIL_SERVICE_ACCOUNT_EMAIL) {

      const row = (label: string, value: string, alt = false) =>
        `<tr style="background:${alt ? '#f9fafb' : '#fff'};"><td style="padding:10px 16px;font-size:13px;color:#6b7280;font-weight:600;width:160px;border-bottom:1px solid #e2e8f0;">${label}</td><td style="padding:10px 16px;font-size:13px;color:#111;font-weight:${label === 'Email' ? '400' : '700'};border-bottom:1px solid #e2e8f0;">${label === 'Email' ? `<a href="mailto:${value}" style="color:#ad7805;">${value || '—'}</a>` : (value || '—')}</td></tr>`

      const textBlock = (heading: string, content: string) =>
        `<div style="background:#fafafa;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:16px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:8px;">${heading}</div>
          <div style="font-size:14px;color:#333;line-height:1.7;">${content || '—'}</div>
        </div>`

      const emailSubject = isCouncil
        ? `Council Application: ${name} - ${company}`
        : `New Contact Lead: ${name} - ${company}`

      const emailHeading = isCouncil
        ? `Founder's Revenue Council™ — New Application`
        : `New Contact Form Lead`

      const tableRows = isCouncil
        ? [
            row('Name',        name,     true),
            row('Title',       title,    false),
            row('Email',       email,    true),
            row('Phone',       phone,    false),
            row('Company',     company,  true),
            row('Revenue',     revenue,  false),
            row('Team Size',   teamSize, true),
          ].join('')
        : [
            row('Name',        name,     true),
            row('Email',       email,    false),
            row('Company',     company,  true),
            row('Revenue',     revenue,  false),
            row('Team Size',   teamSize, true),
            row('Solution',    solution, false),
          ].join('')

      const textBlocks = isCouncil
        ? textBlock('Biggest Revenue Challenge', challenge)
          + textBlock('Why They Want To Join', why)
          + textBlock('What They Can Contribute', contribute)
        : textBlock('Challenge', challenge)

      const contactHtml = `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f5f7;padding:24px;">
<div style="background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
  <div style="background:#1a1a1a;padding:20px 28px;">
    <div style="font-size:13px;font-weight:700;color:#ad7805;text-transform:uppercase;letter-spacing:1px;">MetaGrowth Ventures</div>
    <div style="font-size:18px;font-weight:800;color:#fff;margin-top:4px;">${emailHeading}</div>
  </div>
  <div style="padding:24px 28px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;border-collapse:separate;margin-bottom:20px;">
      ${tableRows}
    </table>
    ${textBlocks}
    <a href="mailto:${email}" style="display:inline-block;background:#ad7805;color:#000;padding:12px 24px;border-radius:6px;font-weight:800;text-decoration:none;font-size:14px;">Reply to ${name || 'Applicant'} &rarr;</a>
    <div style="margin-top:16px;font-size:12px;color:#9ca3af;">Submitted ${timestamp} ET</div>
  </div>
</div></body></html>`

      // -- Internal notification → josh@metagrowth.ventures ------------------
      const gmailResult = await sendViaGmail(c.env, {
        to: 'josh@metagrowth.ventures',
        subject: emailSubject,
        html: contactHtml,
        replyTo: email,
      })
      if (!gmailResult.ok) console.error('Gmail contact error:', gmailResult.error)

      // -- Applicant confirmation email ----------------------------------------
      if (email) {
        const confirmSubject = isCouncil
          ? `Your Founders' Revenue Council™ Application — MetaGrowth Ventures`
          : `We received your message — MetaGrowth Ventures`

        const confirmHtml = isCouncil ? `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f5f7;padding:24px;">
<div style="background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
  <div style="background:#1a1a1a;padding:20px 28px;">
    <div style="font-size:13px;font-weight:700;color:#ad7805;text-transform:uppercase;letter-spacing:1px;">MetaGrowth Ventures</div>
    <div style="font-size:18px;font-weight:800;color:#fff;margin-top:4px;">Application Received</div>
  </div>
  <div style="padding:28px;">
    <p style="font-size:15px;color:#111;margin:0 0 16px;">Hi ${name || 'there'},</p>
    <p style="font-size:15px;color:#333;line-height:1.7;margin:0 0 16px;">Thank you for applying to the <strong>Founders' Revenue Council™</strong>. We've received your application and will review it personally.</p>
    <p style="font-size:15px;color:#333;line-height:1.7;margin:0 0 16px;">If your profile is a strong fit, Josh will reach out directly within a few business days to discuss next steps.</p>
    <p style="font-size:15px;color:#333;line-height:1.7;margin:0 0 24px;">In the meantime, if you have any questions, reply to this email or reach us at <a href="mailto:josh@metagrowth.ventures" style="color:#ad7805;">josh@metagrowth.ventures</a>.</p>
    <p style="font-size:15px;color:#333;margin:0;">— The MetaGrowth Ventures Team</p>
    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:12px;color:#9ca3af;">MetaGrowth Ventures · <a href="https://metagrowth.ventures" style="color:#ad7805;text-decoration:none;">metagrowth.ventures</a></div>
  </div>
</div></body></html>` : `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f5f7;padding:24px;">
<div style="background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
  <div style="background:#1a1a1a;padding:20px 28px;">
    <div style="font-size:13px;font-weight:700;color:#ad7805;text-transform:uppercase;letter-spacing:1px;">MetaGrowth Ventures</div>
    <div style="font-size:18px;font-weight:800;color:#fff;margin-top:4px;">Message Received</div>
  </div>
  <div style="padding:28px;">
    <p style="font-size:15px;color:#111;margin:0 0 16px;">Hi ${name || 'there'},</p>
    <p style="font-size:15px;color:#333;line-height:1.7;margin:0 0 16px;">Thanks for reaching out to MetaGrowth Ventures. We've received your message and someone from our team will be in touch shortly.</p>
    <p style="font-size:15px;color:#333;line-height:1.7;margin:0 0 24px;">If you have anything to add, just reply to this email.</p>
    <p style="font-size:15px;color:#333;margin:0;">— The MetaGrowth Ventures Team</p>
    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:12px;color:#9ca3af;">MetaGrowth Ventures · <a href="https://metagrowth.ventures" style="color:#ad7805;text-decoration:none;">metagrowth.ventures</a></div>
  </div>
</div></body></html>`

        const confirmResult = await sendViaGmail(c.env, {
          to: email,
          subject: confirmSubject,
          html: confirmHtml,
          replyTo: 'josh@metagrowth.ventures',
        })
        if (!confirmResult.ok) console.error('Gmail confirm error:', confirmResult.error)
      }
    }

    // -- KV: persist lead for HubSpot pull -----------------------------------
    if (c.env.LEADS) {
      await saveLead(c.env.LEADS, isCouncil ? 'founders-council' : 'contact-form', {
        name, email, company, title, phone, revenue,
        team_size: teamSize, solution, challenge, why, contribute,
        submitted_at: timestamp,
      })
    }

    return c.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return c.json({ ok: false, error: 'Server error' }, 500)
  }
})

// -- Assessment submission notification ----------------------------------------
app.post('/api/assessment', async (c) => {
  try {
    const body = await c.req.json()
    const {
      firstName = '', lastName = '', company = '', role = '',
      email = '', phone = '', score = 0,
      scores = {} as Record<string, number>,
      stageBadge = '', stageTitle = '',
      diagTitle = '', diagBody = '',
      bottlenecks = [] as Array<{title:string,feeling:string,resolved:string,actions:string[]}>,
      // UTM attribution
      utm_source = '', utm_medium = '', utm_campaign = '',
      utm_term = '', utm_content = '',
      referrer = '', landing_page = '', source_url = '',
    } = body

    const name = `${firstName} ${lastName}`.trim()
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short'
    })
    const errors: string[] = []

    // -- Bottleneck blocks (light — used in both emails) -----------------------
    const bottleneckEmailBlocks = bottlenecks.map((bn, i) => {
      const bnActions: string[] = Array.isArray(bn.actions) ? bn.actions : []
      const bnFeeling  = bn.feeling  || ''
      const bnResolved = bn.resolved || ''
      return `
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;border-collapse:separate;">
  <tr>
    <td style="background:#f8f4ed;padding:14px 20px;border-bottom:1px solid #e2d9c5;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92680a;margin-bottom:4px;">Bottleneck ${i+1} of ${bottlenecks.length}</div>
      <div style="font-size:16px;font-weight:800;color:#1a1a1a;margin:0;">${bn.title}</div>
    </td>
  </tr>
  <tr>
    <td style="padding:20px;background:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${bnFeeling ? `<tr>
          <td style="padding-bottom:14px;">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#b91c1c;margin-bottom:6px;">What They Are Experiencing Now</div>
            <div style="font-size:14px;color:#444;line-height:1.7;margin:0;">${bnFeeling}</div>
          </td>
        </tr>` : ''}
        ${bnResolved ? `<tr>
          <td style="padding-bottom:14px;">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#15803d;margin-bottom:6px;">What It Looks Like When Fixed</div>
            <div style="font-size:14px;color:#444;line-height:1.7;margin:0;">${bnResolved}</div>
          </td>
        </tr>` : ''}
        ${bnActions.length ? `<tr>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#fdf8ee;border:1px solid #e6d4a3;border-radius:6px;">
              <tr><td style="padding:14px 16px;">
                <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#7a5500;margin-bottom:10px;">${bnActions.length}-Step Action Plan</div>
                ${bnActions.map((a,ai) => `<table cellpadding="0" cellspacing="0" style="margin-bottom:8px;width:100%;"><tr><td style="width:28px;vertical-align:top;padding-top:1px;"><div style="background:#f5f0e8;color:#7a5500;font-weight:800;font-size:11px;width:22px;height:22px;border-radius:4px;text-align:center;line-height:22px;">${ai+1}</div></td><td style="font-size:13px;color:#333;line-height:1.6;padding-left:8px;">${a}</td></tr></table>`).join('')}
              </td></tr>
            </table>
          </td>
        </tr>` : ''}
      </table>
    </td>
  </tr>
</table>`}).join('')

    // Lead email uses the same clean light blocks
    const bottleneckEmailBlocksLight = bottleneckEmailBlocks

    // -- Emails via Gmail API (guard matches contact form pattern) ---------
    if (c.env.GMAIL_SERVICE_ACCOUNT_EMAIL) {

    // -- Internal notification email (to MetaGrowth team) ------------------
      const internalHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Assessment</title></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- Header -->
      <tr><td style="background:#1a1a1a;border-radius:8px 8px 0 0;padding:24px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <div style="font-size:13px;font-weight:700;color:#ad7805;text-transform:uppercase;letter-spacing:1px;">MetaGrowth Ventures</div>
              <div style="font-size:20px;font-weight:800;color:#ffffff;margin-top:4px;">New Assessment Completed</div>
            </td>
            <td align="right">
              <div style="background:#ad7805;border-radius:6px;padding:8px 14px;display:inline-block;">
                <div style="font-size:28px;font-weight:900;color:#000;line-height:1;">${score}</div>
                <div style="font-size:10px;font-weight:700;color:rgba(0,0,0,0.6);text-transform:uppercase;letter-spacing:1px;">/ 100</div>
              </div>
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Lead Info -->
      <tr><td style="background:#ffffff;padding:28px 32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:14px;">Lead Information</div>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;border-collapse:separate;">
          <tr style="background:#f9fafb;">
            <td style="padding:10px 16px;font-size:13px;color:#6b7280;font-weight:600;width:140px;border-bottom:1px solid #e2e8f0;">Name</td>
            <td style="padding:10px 16px;font-size:13px;color:#111;font-weight:700;border-bottom:1px solid #e2e8f0;">${name || '—'}</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-size:13px;color:#6b7280;font-weight:600;border-bottom:1px solid #e2e8f0;">Company</td>
            <td style="padding:10px 16px;font-size:13px;color:#111;font-weight:700;border-bottom:1px solid #e2e8f0;">${company || '—'}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:10px 16px;font-size:13px;color:#6b7280;font-weight:600;border-bottom:1px solid #e2e8f0;">Role</td>
            <td style="padding:10px 16px;font-size:13px;color:#111;border-bottom:1px solid #e2e8f0;">${role || '—'}</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-size:13px;color:#6b7280;font-weight:600;border-bottom:1px solid #e2e8f0;">Email</td>
            <td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${email}" style="color:#ad7805;font-weight:600;text-decoration:none;">${email || '—'}</a></td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:10px 16px;font-size:13px;color:#6b7280;font-weight:600;">Phone</td>
            <td style="padding:10px 16px;font-size:13px;"><a href="tel:${phone}" style="color:#ad7805;font-weight:600;text-decoration:none;">${phone || '—'}</a></td>
          </tr>
        </table>
      </td></tr>

      <!-- Score Breakdown -->
      <tr><td style="background:#ffffff;padding:0 32px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="background:#f8f4ed;border:1px solid #e6d4a3;border-radius:8px;padding:20px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92680a;margin-bottom:2px;">Revenue Engine Score</div>
                <div style="font-size:32px;font-weight:900;color:#ad7805;line-height:1.1;">${score}<span style="font-size:16px;color:#92680a;font-weight:400;"> / 100</span></div>
              </td>
              <td align="right" style="vertical-align:top;">
                <div style="font-size:13px;font-weight:800;color:#1a1a1a;">${stageBadge}</div>
                <div style="font-size:12px;color:#555;margin-top:4px;">${stageTitle}</div>
              </td>
            </tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
            <tr><td style="padding:7px 0;font-size:13px;color:#555;border-bottom:1px solid #e6d4a3;">Revenue Stage</td><td style="padding:7px 0;font-size:14px;font-weight:700;color:#ad7805;text-align:right;border-bottom:1px solid #e6d4a3;">${scores.rs ?? '—'}</td></tr>
            <tr><td style="padding:7px 0;font-size:13px;color:#555;border-bottom:1px solid #e6d4a3;">Pipeline Maturity</td><td style="padding:7px 0;font-size:14px;font-weight:700;color:#ad7805;text-align:right;border-bottom:1px solid #e6d4a3;">${scores.pm ?? '—'}</td></tr>
            <tr><td style="padding:7px 0;font-size:13px;color:#555;border-bottom:1px solid #e6d4a3;">Sales Infrastructure</td><td style="padding:7px 0;font-size:14px;font-weight:700;color:#ad7805;text-align:right;border-bottom:1px solid #e6d4a3;">${scores.si ?? '—'}</td></tr>
            <tr><td style="padding:7px 0;font-size:13px;color:#555;border-bottom:1px solid #e6d4a3;">Talent &amp; Team</td><td style="padding:7px 0;font-size:14px;font-weight:700;color:#ad7805;text-align:right;border-bottom:1px solid #e6d4a3;">${scores.tt ?? '—'}</td></tr>
            <tr><td style="padding:7px 0;font-size:13px;color:#555;">Leadership &amp; Execution</td><td style="padding:7px 0;font-size:14px;font-weight:700;color:#ad7805;text-align:right;">${scores.le ?? '—'}</td></tr>
          </table>
        </div>
      </td></tr>

      ${diagTitle ? `
      <!-- Diagnosis -->
      <tr><td style="background:#ffffff;padding:0 32px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="border-left:4px solid #ad7805;padding:16px 20px;background:#fafafa;border-radius:0 6px 6px 0;">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92680a;margin-bottom:6px;">Diagnosis</div>
          <div style="font-size:16px;font-weight:800;color:#111;margin-bottom:8px;">${diagTitle}</div>
          <div style="font-size:13px;color:#555;line-height:1.7;">${diagBody}</div>
        </div>
      </td></tr>` : ''}

      ${bottlenecks.length ? `
      <!-- Bottleneck Analysis -->
      <tr><td style="background:#ffffff;padding:0 32px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:16px;">Bottleneck Analysis — ${bottlenecks.length} Identified</div>
        ${bottleneckEmailBlocks}
      </td></tr>` : ''}

      <!-- CTA -->
      <tr><td style="background:#ffffff;padding:0 32px 32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;border-radius:0 0 8px 8px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;">
          <tr><td>
            <a href="mailto:${email}?subject=Your%20MetaGrowth%20Revenue%20Assessment%20Results" style="display:inline-block;background:#ad7805;color:#000000;padding:13px 28px;border-radius:6px;font-weight:800;text-decoration:none;font-size:14px;">Reply to ${firstName || 'Lead'} &rarr;</a>
            <div style="margin-top:14px;font-size:12px;color:#9ca3af;">Submitted ${timestamp} ET &middot; metagrowth.ventures/assessment</div>
            ${(utm_source || utm_medium || utm_campaign || referrer || landing_page) ? `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;border:1px solid #e2e8f0;border-radius:6px;border-collapse:separate;">
              <tr><td colspan="2" style="padding:8px 14px 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;">UTM Attribution</td></tr>
              ${utm_source   ? `<tr style="background:#f9fafb;"><td style="padding:6px 14px;font-size:12px;color:#6b7280;width:130px;">utm_source</td><td style="padding:6px 14px;font-size:12px;color:#111;">${utm_source}</td></tr>` : ''}
              ${utm_medium   ? `<tr><td style="padding:6px 14px;font-size:12px;color:#6b7280;">utm_medium</td><td style="padding:6px 14px;font-size:12px;color:#111;">${utm_medium}</td></tr>` : ''}
              ${utm_campaign ? `<tr style="background:#f9fafb;"><td style="padding:6px 14px;font-size:12px;color:#6b7280;">utm_campaign</td><td style="padding:6px 14px;font-size:12px;color:#111;">${utm_campaign}</td></tr>` : ''}
              ${utm_term     ? `<tr><td style="padding:6px 14px;font-size:12px;color:#6b7280;">utm_term</td><td style="padding:6px 14px;font-size:12px;color:#111;">${utm_term}</td></tr>` : ''}
              ${utm_content  ? `<tr style="background:#f9fafb;"><td style="padding:6px 14px;font-size:12px;color:#6b7280;">utm_content</td><td style="padding:6px 14px;font-size:12px;color:#111;">${utm_content}</td></tr>` : ''}
              ${referrer     ? `<tr><td style="padding:6px 14px;font-size:12px;color:#6b7280;">Referrer</td><td style="padding:6px 14px;font-size:12px;color:#111;">${referrer}</td></tr>` : ''}
              ${landing_page ? `<tr style="background:#f9fafb;"><td style="padding:6px 14px;font-size:12px;color:#6b7280;">Landing Page</td><td style="padding:6px 14px;font-size:12px;color:#111;word-break:break-all;">${landing_page}</td></tr>` : ''}
            </table>` : ''}
          </td></tr>
        </table>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`

      const internalResult = await sendViaGmail(c.env, {
        to: 'josh@metagrowth.ventures',
        subject: `New Assessment: ${name} (${company}) - Score ${score}/100`,
        html: internalHtml,
        replyTo: email || undefined,
      })
      if (!internalResult.ok) {
        errors.push(`Internal email failed: ${internalResult.error}`)
        console.error('Gmail internal error:', internalResult.error)
      }

      // -- Confirmation email to the lead -------------------------------------
      if (email) {
        const leadHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Your Revenue Assessment</title></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- Header -->
      <tr><td style="background:#1a1a1a;border-radius:8px 8px 0 0;padding:24px 32px;">
        <div style="font-size:13px;font-weight:700;color:#ad7805;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">MetaGrowth Ventures</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);">Revenue Engine Assessment</div>
      </td></tr>

      <!-- Hero score -->
      <tr><td style="background:#ffffff;padding:32px 32px 24px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="font-size:22px;font-weight:800;color:#1a1a1a;margin-bottom:6px;">Your report is ready, ${firstName || 'there'}.</div>
        <div style="font-size:15px;color:#555;line-height:1.6;margin-bottom:24px;">Here is a summary of your Revenue Engine Assessment and your personalised action plan.</div>

        <!-- Score card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f4ed;border:1px solid #e6d4a3;border-radius:8px;margin-bottom:24px;">
          <tr>
            <td style="padding:20px 24px;">
              <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92680a;margin-bottom:6px;">Revenue Engine Score</div>
              <div style="font-size:48px;font-weight:900;color:#ad7805;line-height:1;margin-bottom:4px;">${score}<span style="font-size:20px;color:#92680a;font-weight:400;"> / 100</span></div>
              <div style="font-size:14px;font-weight:700;color:#1a1a1a;margin-top:8px;">${stageBadge}</div>
              <div style="font-size:13px;color:#666;margin-top:2px;">${stageTitle}</div>
            </td>
            <td style="padding:20px 24px;vertical-align:top;border-left:1px solid #e6d4a3;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="font-size:12px;color:#7a5500;padding:4px 0;border-bottom:1px solid #e6d4a3;">Revenue Stage</td><td style="font-size:13px;font-weight:700;color:#ad7805;text-align:right;padding:4px 0;border-bottom:1px solid #e6d4a3;">${scores.rs ?? '—'}</td></tr>
                <tr><td style="font-size:12px;color:#7a5500;padding:4px 0;border-bottom:1px solid #e6d4a3;">Pipeline Maturity</td><td style="font-size:13px;font-weight:700;color:#ad7805;text-align:right;padding:4px 0;border-bottom:1px solid #e6d4a3;">${scores.pm ?? '—'}</td></tr>
                <tr><td style="font-size:12px;color:#7a5500;padding:4px 0;border-bottom:1px solid #e6d4a3;">Sales Infrastructure</td><td style="font-size:13px;font-weight:700;color:#ad7805;text-align:right;padding:4px 0;border-bottom:1px solid #e6d4a3;">${scores.si ?? '—'}</td></tr>
                <tr><td style="font-size:12px;color:#7a5500;padding:4px 0;border-bottom:1px solid #e6d4a3;">Talent &amp; Team</td><td style="font-size:13px;font-weight:700;color:#ad7805;text-align:right;padding:4px 0;border-bottom:1px solid #e6d4a3;">${scores.tt ?? '—'}</td></tr>
                <tr><td style="font-size:12px;color:#7a5500;padding:4px 0;">Leadership &amp; Exec</td><td style="font-size:13px;font-weight:700;color:#ad7805;text-align:right;padding:4px 0;">${scores.le ?? '—'}</td></tr>
              </table>
            </td>
          </tr>
        </table>

        ${diagTitle ? `
        <!-- Diagnosis -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="border-left:4px solid #ad7805;padding:16px 20px;background:#fafafa;border-radius:0 6px 6px 0;">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#92680a;margin-bottom:6px;">Your Diagnosis</div>
            <div style="font-size:16px;font-weight:800;color:#111;margin-bottom:8px;">${diagTitle}</div>
            <div style="font-size:13px;color:#555;line-height:1.7;">${diagBody}</div>
          </td></tr>
        </table>` : ''}

        <!-- CTA button -->
        <a href="https://metagrowth.ventures/assessment/report" style="display:inline-block;background:#ad7805;color:#000000;padding:14px 32px;border-radius:6px;font-weight:800;text-decoration:none;font-size:15px;margin-bottom:8px;">View Your Full Interactive Report &rarr;</a>
        <div style="font-size:12px;color:#9ca3af;margin-bottom:0;">metagrowth.ventures/assessment/report</div>
      </td></tr>

      ${bottlenecks.length ? `
      <!-- Bottleneck Analysis -->
      <tr><td style="background:#ffffff;padding:0 32px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="border-top:1px solid #e2e8f0;margin-bottom:24px;padding-top:24px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;margin-bottom:4px;">Bottleneck Analysis</div>
          <div style="font-size:18px;font-weight:800;color:#111;margin-bottom:6px;">Your ${bottlenecks.length} Growth Constraints</div>
          <div style="font-size:13px;color:#555;line-height:1.6;">Each bottleneck below includes what it feels like now, what it looks like when resolved, and a concrete step-by-step action plan.</div>
        </div>
        ${bottleneckEmailBlocksLight}
      </td></tr>` : ''}

      <!-- Book a call -->
      <tr><td style="background:#1a1a1a;padding:28px 32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#ad7805;margin-bottom:8px;">Ready to Fix This?</div>
        <div style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:10px;">Book a Complimentary Revenue Review</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.65);line-height:1.7;margin-bottom:20px;">Our Revenue Strategy Team reviews every assessment personally. In 30 minutes we will walk through your results, identify your highest-impact bottlenecks, and map the fastest path to predictable pipeline.</div>
        <a href="https://meetings.hubspot.com/josh549/revenue-audit" style="display:inline-block;background:#ad7805;color:#000000;padding:13px 28px;border-radius:6px;font-weight:800;text-decoration:none;font-size:14px;">Book a Revenue Review &rarr;</a>
      </td></tr>

      <!-- Footer -->
      <tr><td style="background:#f4f5f7;padding:20px 32px;border-radius:0 0 8px 8px;">
        <div style="font-size:11px;color:#9ca3af;text-align:center;line-height:1.7;">
          MetaGrowth Ventures &middot; <a href="https://metagrowth.ventures" style="color:#9ca3af;text-decoration:none;">metagrowth.ventures</a><br>
          You received this because you completed the Revenue Engine Assessment.
        </div>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`

        const leadResult = await sendViaGmail(c.env, {
          to: email,
          subject: `Your Revenue Assessment Results - Score ${score}/100`,
          html: leadHtml,
          replyTo: 'josh@metagrowth.ventures',
        })
        if (!leadResult.ok) {
          errors.push(`Lead email failed: ${leadResult.error}`)
          console.error('Gmail lead error:', leadResult.error)
        }
      }

    } // end if (c.env.GMAIL_SERVICE_ACCOUNT_EMAIL)

    // -- Slack notification --------------------------------------------------
    const slackWebhook = c.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      const slackRes = await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🎯 New Assessment Completed`,
          blocks: [
            {
              type: 'header',
              text: { type: 'plain_text', text: '🎯 New Revenue Assessment Completed' },
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*Name:*\n${name || '—'}` },
                { type: 'mrkdwn', text: `*Company:*\n${company || '—'}` },
                { type: 'mrkdwn', text: `*Email:*\n${email || '—'}` },
                { type: 'mrkdwn', text: `*Phone:*\n${phone || '—'}` },
                { type: 'mrkdwn', text: `*Score:*\n*${score}/100*` },
                { type: 'mrkdwn', text: `*Stage:*\n${stageBadge || '—'}` },
              ],
            },
            {
              type: 'context',
              elements: [{ type: 'mrkdwn', text: `Submitted ${timestamp} ET` }],
            },
            ...(utm_source || utm_medium || utm_campaign || referrer ? [{
              type: 'section',
              text: { type: 'mrkdwn', text: [
                `*Attribution:*`,
                utm_source   ? `utm_source: \`${utm_source}\`` : '',
                utm_medium   ? `utm_medium: \`${utm_medium}\`` : '',
                utm_campaign ? `utm_campaign: \`${utm_campaign}\`` : '',
                referrer     ? `referrer: ${referrer}` : '',
                landing_page ? `landing: ${landing_page}` : '',
              ].filter(Boolean).join(' · ') }
            }] : []),
            {
              type: 'actions',
              elements: [
                { type: 'button', text: { type: 'plain_text', text: '📧 Reply to Lead' }, url: `mailto:${email}`, style: 'primary' },
              ],
            },
          ],
        }),
      })
      if (!slackRes.ok) {
        const err = await slackRes.text()
        errors.push(`Slack failed: ${slackRes.status} ${err}`)
        console.error('Slack error:', slackRes.status, err)
      }
    }

    // -- KV: persist lead for HubSpot pull -----------------------------------
    if (c.env.LEADS) {
      await saveLead(c.env.LEADS, 'assessment', {
        name, first_name: firstName, last_name: lastName,
        email, phone, company, role,
        score, stage_badge: stageBadge, stage_title: stageTitle,
        bottleneck_count: bottlenecks.length,
        bottleneck_titles: bottlenecks.map(b => b.title),
        utm_source, utm_medium, utm_campaign, utm_term, utm_content,
        referrer, landing_page, source_url,
        submitted_at: timestamp,
      })
    }

    return c.json({ ok: errors.length === 0, errors })
  } catch (err) {
    console.error('Assessment notification error:', err)
    return c.json({ ok: false, error: String(err) }, 500)
  }
})

// -- PDF Gate — lead capture before download -----------------------------------
app.post('/api/pdf-gate', async (c) => {
  try {
    const body = await c.req.json() as Record<string, string>

    const firstName   = (body.first_name   || '').trim()
    const lastName    = (body.last_name    || '').trim()
    const email       = (body.email        || '').trim()
    const company     = (body.company      || '').trim()
    const website     = (body.website      || '').trim()
    const role        = (body.role         || '').trim()
    const goal        = (body.goal         || '').trim()
    const pdfName     = (body.pdf_name     || '').trim()
    const pdfUrl      = (body.pdf_url      || '').trim()
    const pageUrl     = (body.page_url     || '').trim()
    const utmSource   = (body.utm_source   || '').trim()
    const utmMedium   = (body.utm_medium   || '').trim()
    const utmCampaign = (body.utm_campaign || '').trim()
    const utmTerm     = (body.utm_term     || '').trim()
    const utmContent  = (body.utm_content  || '').trim()
    const referrer    = (body.referrer     || '').trim()
    const landingPage = (body.landing_page || '').trim()

    const name      = `${firstName} ${lastName}`.trim()
    const emailDomain = email.includes('@') ? email.split('@')[1] : ''
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

    const errors: string[] = []

    // -- 1. Slack notification ------------------------------------------------
    const slackWebhook = c.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      const slackPayload = {
        text: `📄 *New PDF Download — ${pdfName}*`,
        blocks: [
          { type: 'header', text: { type: 'plain_text', text: `📄 PDF Download Gate — ${pdfName}` } },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${name || '—'}` },
              { type: 'mrkdwn', text: `*Email:*\n${email || '—'}` },
              { type: 'mrkdwn', text: `*Company:*\n${company || '—'}` },
              { type: 'mrkdwn', text: `*Website:*\n${website || '—'}` },
              { type: 'mrkdwn', text: `*Role / Title:*\n${role || '—'}` },
              { type: 'mrkdwn', text: `*Goal:*\n${goal || '—'}` },
            ],
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*PDF Downloaded:*\n${pdfName}` },
              { type: 'mrkdwn', text: `*Download Page:*\n${pageUrl || '—'}` },
            ],
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: [
              `*Traffic Source:*`,
              `utm_source: \`${utmSource || '(none)'}\``,
              `utm_medium: \`${utmMedium || '(none)'}\``,
              utmCampaign ? `utm_campaign: \`${utmCampaign}\`` : '',
              utmTerm     ? `utm_term: \`${utmTerm}\``         : '',
              utmContent  ? `utm_content: \`${utmContent}\``   : '',
              referrer    ? `referrer: ${referrer}`             : '',
              landingPage && landingPage !== pageUrl ? `landed on: ${landingPage}` : '',
            ].filter(Boolean).join('\n') }
          },
          { type: 'context', elements: [{ type: 'mrkdwn', text: `Submitted ${timestamp} ET` }] },
          { type: 'actions', elements: [
            { type: 'button', text: { type: 'plain_text', text: '✉️ Reply to Lead' }, url: `mailto:${email}`, style: 'primary' },
            { type: 'button', text: { type: 'plain_text', text: '➕ Add to HubSpot' }, url: `https://app.hubspot.com/contacts/new?email=${encodeURIComponent(email)}&firstname=${encodeURIComponent(firstName)}&lastname=${encodeURIComponent(lastName)}&company=${encodeURIComponent(company)}` },
          ]},
        ],
      }
      const slackRes = await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackPayload),
      })
      if (!slackRes.ok) {
        const err = await slackRes.text()
        errors.push(`Slack failed: ${slackRes.status} ${err}`)
      }
    }

    // -- 2. Internal email notification to Josh --------------------------------
    if (c.env.GMAIL_SERVICE_ACCOUNT_EMAIL) {
      // Build attribution string for quick scan
      const attrParts = [
        utmSource   ? `source: ${utmSource}`     : '',
        utmMedium   ? `medium: ${utmMedium}`     : '',
        utmCampaign ? `campaign: ${utmCampaign}` : '',
        utmTerm     ? `term: ${utmTerm}`         : '',
        utmContent  ? `content: ${utmContent}`   : '',
        referrer    ? `referrer: ${referrer}`     : '',
        landingPage && landingPage !== pageUrl ? `landed: ${landingPage}` : '',
      ].filter(Boolean)
      const attrStr = attrParts.length ? attrParts.join(' · ') : 'Direct / unknown'

      // HubSpot manual-add URL (pre-fills contact create form)
      const hsEmail    = encodeURIComponent(email)
      const hsFirst    = encodeURIComponent(firstName)
      const hsLast     = encodeURIComponent(lastName)
      const hsCompany  = encodeURIComponent(company)
      const hsWebsite  = encodeURIComponent(website.startsWith('http') ? website : (website ? `https://${website}` : ''))
      const hubspotAddUrl = `https://app.hubspot.com/contacts/new?email=${hsEmail}&firstname=${hsFirst}&lastname=${hsLast}&company=${hsCompany}&website=${hsWebsite}`

      const rowBase = (label: string, value: string, alt = false, link?: string) => {
        const tdStyle = `padding:10px 16px;font-size:13px;border-bottom:1px solid #e2e8f0;`
        const valHtml = link
          ? `<a href="${link}" style="color:#ad7805;text-decoration:none;">${value || '—'}</a>`
          : `<span style="color:#111;font-weight:600;">${value || '—'}</span>`
        return `<tr style="background:${alt ? '#f9fafb' : '#fff'};">
          <td style="${tdStyle}color:#6b7280;font-weight:600;width:150px;">${label}</td>
          <td style="${tdStyle}">${valHtml}</td>
        </tr>`
      }

      const internalHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head><body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f5f7;">
<div style="max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0A0A0A 0%,#1a1a1a 100%);padding:28px 36px;">
    <div style="font-size:26px;margin-bottom:6px;">📄</div>
    <h1 style="margin:0;font-size:21px;font-weight:700;color:#fff;">New PDF Download Lead</h1>
    <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.55);">${pdfName} · ${timestamp} ET</p>
  </div>

  <div style="padding:28px 36px;">

    <!-- Lead details -->
    <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;font-weight:700;">Lead Details</h2>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;margin-bottom:24px;">
      ${rowBase('Name',    name,    true,  `mailto:${email}?subject=Re: Your ${pdfName} Download`)}
      ${rowBase('Email',   email,   false, `mailto:${email}?subject=Re: Your ${pdfName} Download`)}
      ${rowBase('Company', company, true,  website ? (website.startsWith('http') ? website : `https://${website}`) : undefined)}
      ${rowBase('Website', website || '—', false)}
      ${rowBase('Role',    role    || '—', true)}
      ${rowBase('Goal',    goal    || '—', false)}
    </table>

    <!-- PDF + Page -->
    <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;font-weight:700;">What They Downloaded</h2>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;margin-bottom:24px;">
      ${rowBase('PDF',  pdfName, true,  `https://metagrowth.ventures${pdfUrl}`)}
      ${rowBase('Page', pageUrl, false, pageUrl)}
      ${rowBase('Time', timestamp, true)}
    </table>

    <!-- Attribution -->
    <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;font-weight:700;">Traffic Source</h2>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;margin-bottom:24px;">
      ${rowBase('UTM Source',   utmSource   || '(none)', true)}
      ${rowBase('UTM Medium',   utmMedium   || '(none)', false)}
      ${rowBase('UTM Campaign', utmCampaign || '(none)', true)}
      ${rowBase('UTM Term',     utmTerm     || '(none)', false)}
      ${rowBase('UTM Content',  utmContent  || '(none)', true)}
      ${rowBase('Referrer',     referrer    || '(direct)', false, referrer || undefined)}
      ${rowBase('Landing Page', landingPage || '(unknown)', true, landingPage || undefined)}
      ${rowBase('Download Page', pageUrl,  false, pageUrl)}
    </table>

    <!-- Action buttons -->
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px;">
      <a href="mailto:${email}?subject=Re:%20Your%20${encodeURIComponent(pdfName)}%20Download" style="display:inline-block;background:#ad7805;color:#fff;padding:11px 20px;border-radius:7px;text-decoration:none;font-weight:700;font-size:13px;">✉️ Reply to ${firstName || name}</a>
      <a href="${hubspotAddUrl}" target="_blank" style="display:inline-block;background:#ff7a59;color:#fff;padding:11px 20px;border-radius:7px;text-decoration:none;font-weight:700;font-size:13px;">➕ Add to HubSpot</a>
      <a href="https://metagrowth.ventures${pdfUrl}" target="_blank" style="display:inline-block;background:#1a1a1a;color:#fff;padding:11px 20px;border-radius:7px;text-decoration:none;font-weight:700;font-size:13px;">📄 View PDF</a>
    </div>
    <p style="margin:16px 0 0;font-size:11px;color:#9ca3af;">Attribution: ${attrStr}</p>
  </div>
</div>
</body></html>`

      const internalResult = await sendViaGmail(c.env, {
        to: 'josh@metagrowth.ventures',
        subject: `PDF Lead: ${name}${role ? ` · ${role}` : ''} @ ${company || emailDomain} — ${pdfName}`,
        html: internalHtml,
        replyTo: email,
      })
      if (!internalResult.ok) errors.push(`Internal email failed: ${internalResult.error}`)

      // -- 3. Confirmation email to the lead with download link --------------
      if (email) {
        const pdfFullUrl = `https://metagrowth.ventures${pdfUrl}`
        const leadHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head><body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f5f7;">
<div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.1);">
  <div style="background:linear-gradient(135deg,#0A0A0A 0%,#1a1a1a 100%);padding:32px 40px;text-align:center;">
    <img src="https://metagrowth.ventures/static/logo.webp" alt="MetaGrowth Ventures" style="height:36px;margin-bottom:20px;" />
    <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">Your resource is ready</h1>
    <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.65);">Click below to download your copy of <strong style="color:#ad7805;">${pdfName}</strong></p>
  </div>
  <div style="padding:40px;text-align:center;">
    <p style="font-size:15px;color:#333;margin-bottom:28px;">Hi ${firstName || 'there'},<br><br>Here's your copy of <strong>${pdfName}</strong>. We hope you find it useful — it's packed with frameworks our team uses with clients every day.</p>
    <a href="${pdfFullUrl}" style="display:inline-block;background:#ad7805;color:#fff;padding:16px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px;margin-bottom:32px;">📄 Download ${pdfName}</a>
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0;">
    <p style="font-size:13px;color:#6b7280;margin-bottom:16px;">Want to talk through what you're building? Our team works with B2B founders and revenue leaders to diagnose constraints and install scalable sales infrastructure.</p>
    <a href="https://meetings.hubspot.com/josh549/revenue-audit" style="display:inline-block;background:#0A0A0A;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Book a Free Revenue Review</a>
    <p style="font-size:11px;color:#9ca3af;margin-top:32px;">MetaGrowth Ventures · <a href="https://metagrowth.ventures" style="color:#9ca3af;">metagrowth.ventures</a></p>
  </div>
</div>
</body></html>`

        const leadResult = await sendViaGmail(c.env, {
          to: email,
          subject: `Your resource: ${pdfName}`,
          html: leadHtml,
        })
        if (!leadResult.ok) errors.push(`Lead email failed: ${leadResult.error}`)
      }
    }

    // -- KV: persist lead for HubSpot pull -----------------------------------
    if (c.env.LEADS) {
      await saveLead(c.env.LEADS, 'pdf-gate', {
        name, first_name: firstName, last_name: lastName,
        email, company, website, role, goal,
        pdf_name: pdfName, pdf_url: pdfUrl, page_url: pageUrl,
        utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign,
        utm_term: utmTerm, utm_content: utmContent,
        referrer, landing_page: landingPage,
        submitted_at: timestamp,
      })
    }

    return c.json({ ok: errors.length === 0, errors, pdfUrl })
  } catch (err) {
    console.error('PDF gate error:', err)
    return c.json({ ok: false, error: String(err) }, 500)
  }
})

// -- Leads export — authenticated pull endpoint for HubSpot / internal use -----
// Usage: GET /api/leads?key=YOUR_KEY&source=assessment&limit=100&cursor=CURSOR
// Returns: { leads: [...], next_cursor: "..." | null, total: N }
app.get('/api/leads', async (c) => {
  // Auth check
  const key = c.req.query('key') || ''
  if (!c.env.LEADS_API_KEY || key !== c.env.LEADS_API_KEY) {
    return c.json({ ok: false, error: 'Unauthorized' }, 401)
  }

  try {
    const source  = c.req.query('source')  || ''   // filter by source (optional)
    const limit   = Math.min(parseInt(c.req.query('limit') || '100'), 500)
    const cursor  = c.req.query('cursor')  || undefined

    // List all lead keys from KV
    const listResult = await c.env.LEADS.list({ prefix: 'lead:', limit, cursor })

    const leads: unknown[] = []
    await Promise.all(
      listResult.keys.map(async (k) => {
        const raw = await c.env.LEADS.get(k.name)
        if (!raw) return
        try {
          const record = JSON.parse(raw)
          if (!source || record.source === source) leads.push(record)
        } catch { /* skip malformed */ }
      })
    )

    // Sort newest first
    leads.sort((a: any, b: any) =>
      new Date(b.captured_at).getTime() - new Date(a.captured_at).getTime()
    )

    return c.json({
      ok: true,
      leads,
      count: leads.length,
      next_cursor: listResult.list_complete ? null : listResult.cursor,
    })
  } catch (err) {
    console.error('Leads export error:', err)
    return c.json({ ok: false, error: String(err) }, 500)
  }
})

// -- YouTube channel stats — cached 1 hour in KV ------------------------------
// GET /api/youtube  →  { subscribers, views, videos, cached_at }
app.get('/api/youtube', async (c) => {
  const CHANNEL_ID = 'UCify9FU2y6Gz78eaxvggMnw' // MetaGrowth Ventures
  const CACHE_KEY  = 'yt:channel:stats'
  const CACHE_TTL  = 3600 // 1 hour

  try {
    // Try KV cache first
    if (c.env.LEADS) {
      const cached = await c.env.LEADS.get(CACHE_KEY)
      if (cached) {
        return c.json(JSON.parse(cached))
      }
    }

    if (!c.env.YOUTUBE_API_KEY) {
      return c.json({ error: 'YOUTUBE_API_KEY not configured' }, 503)
    }

    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${c.env.YOUTUBE_API_KEY}`
    const res  = await fetch(url)
    if (!res.ok) {
      return c.json({ error: `YouTube API error ${res.status}` }, 502)
    }
    const data = await res.json() as any
    const item = data.items?.[0]
    if (!item) {
      return c.json({ error: 'Channel not found' }, 404)
    }
    const stats = item.statistics ?? {}
    const payload = {
      subscribers:  stats.subscriberCount  ?? '0',
      views:        stats.viewCount         ?? '0',
      videos:       stats.videoCount        ?? '0',
      channel_name: item.snippet?.title     ?? 'MetaGrowth Ventures',
      cached_at:    new Date().toISOString(),
    }

    // Cache in KV
    if (c.env.LEADS) {
      await c.env.LEADS.put(CACHE_KEY, JSON.stringify(payload), { expirationTtl: CACHE_TTL })
    }

    return c.json(payload)
  } catch (err) {
    console.error('YouTube API error:', err)
    return c.json({ error: String(err) }, 500)
  }
})

// -- GA4 daily stats — Service Account JWT, cached 1 hour in KV --------------
// GET /api/ga4  →  { sessions, users, pageviews, bounce_rate, date, cached_at }
app.get('/api/ga4', async (c) => {
  const CACHE_KEY = 'ga4:daily:stats'
  const CACHE_TTL = 3600 // 1 hour

  try {
    // Try KV cache first
    if (c.env.LEADS) {
      const cached = await c.env.LEADS.get(CACHE_KEY)
      if (cached) {
        return c.json(JSON.parse(cached))
      }
    }

    if (!c.env.GA4_SERVICE_ACCOUNT_JSON || !c.env.GA4_PROPERTY_ID) {
      return c.json({ error: 'GA4 credentials not configured' }, 503)
    }

    // Parse service account JSON
    let sa: any
    try {
      sa = JSON.parse(c.env.GA4_SERVICE_ACCOUNT_JSON)
    } catch {
      return c.json({ error: 'Invalid GA4_SERVICE_ACCOUNT_JSON' }, 503)
    }

    // Build JWT for Google OAuth2 (service account)
    const now = Math.floor(Date.now() / 1000)
    const jwtHeader = { alg: 'RS256', typ: 'JWT' }
    const jwtClaim  = {
      iss:   sa.client_email,
      scope: 'https://www.googleapis.com/auth/analytics.readonly',
      aud:   'https://oauth2.googleapis.com/token',
      iat:   now,
      exp:   now + 3600,
    }

    const b64url = (obj: unknown) =>
      btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    const signingInput = `${b64url(jwtHeader)}.${b64url(jwtClaim)}`

    const pemBody = sa.private_key
      .replace(/-----BEGIN PRIVATE KEY-----/g, '')
      .replace(/-----END PRIVATE KEY-----/g, '')
      .replace(/\s/g, '')
    const keyBytes  = Uint8Array.from(atob(pemBody), (ch) => ch.charCodeAt(0))
    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8', keyBytes.buffer,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false, ['sign']
    )
    const sigBytes = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5', cryptoKey,
      new TextEncoder().encode(signingInput)
    )
    const sig = btoa(String.fromCharCode(...new Uint8Array(sigBytes)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    const jwt = `${signingInput}.${sig}`

    // Exchange JWT for access token
    const tokenRes  = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion:  jwt,
      }),
    })
    const tokenData = await tokenRes.json() as any
    if (!tokenData.access_token) {
      return c.json({ error: `GA4 token error: ${JSON.stringify(tokenData)}` }, 502)
    }

    // Call GA4 Data API — yesterday's data
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const dateStr = yesterday.toISOString().split('T')[0].replace(/-/g, '')
    const reportDate = `${dateStr.slice(0,4)}-${dateStr.slice(4,6)}-${dateStr.slice(6,8)}`

    const ga4Res = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${c.env.GA4_PROPERTY_ID}:runReport`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'Content-Type':  'application/json',
        },
        body: JSON.stringify({
          dateRanges:  [{ startDate: 'yesterday', endDate: 'yesterday' }],
          metrics: [
            { name: 'sessions' },
            { name: 'totalUsers' },
            { name: 'screenPageViews' },
            { name: 'bounceRate' },
          ],
        }),
      }
    )
    if (!ga4Res.ok) {
      const errTxt = await ga4Res.text()
      return c.json({ error: `GA4 report error ${ga4Res.status}: ${errTxt}` }, 502)
    }
    const ga4Data = await ga4Res.json() as any
    const row = ga4Data.rows?.[0]?.metricValues ?? []

    const payload = {
      date:        reportDate,
      sessions:    row[0]?.value ?? '0',
      users:       row[1]?.value ?? '0',
      pageviews:   row[2]?.value ?? '0',
      bounce_rate: row[3]?.value ? (parseFloat(row[3].value) * 100).toFixed(1) + '%' : '—',
      cached_at:   new Date().toISOString(),
    }

    // Cache in KV
    if (c.env.LEADS) {
      await c.env.LEADS.put(CACHE_KEY, JSON.stringify(payload), { expirationTtl: CACHE_TTL })
    }

    return c.json(payload)
  } catch (err) {
    console.error('GA4 API error:', err)
    return c.json({ error: String(err) }, 500)
  }
})

// -- Home ----------------------------------------------------------------------
app.get('/', (c) => c.html(homePage()))

// -- Assessment ----------------------------------------------------------------
app.get('/assessment', (c) => c.html(assessmentPage()))
app.get('/assessment/preview', (c) => c.html(assessmentPreviewPage()))
app.get('/assessment/report', (c) => c.html(assessmentReportPage()))
app.get('/meeting-confirmed', (c) => c.html(meetingConfirmedPage()))

// -- Command Center ------------------------------------------------------------
app.get('/command-center', (c) => c.html(commandCenterPage()))

// -- Solutions -----------------------------------------------------------------
// Legacy/alias redirects
app.get('/solutions/recruiting', (c) => c.redirect('/solutions/managed-sales-pods', 301))
app.get('/xray', (c) => c.redirect('/growth-engine-xray', 301))
app.get('/founders-council', (c) => c.redirect('/founders-revenue-council', 301))
app.get('/blog', (c) => c.redirect('/resources', 301))

app.get('/solutions', (c) => c.html(solutionsPage()))
app.get('/solutions/revenue-os', (c) => c.html(revenueOSPage()))
app.get('/solutions/managed-sales-pods', (c) => c.html(managedSalesPodsPage()))
app.get('/solutions/commission-only', (c) => c.html(commissionOnlyPage()))
app.get('/solutions/fractional-cro', (c) => c.html(fractionalCROPage()))
app.get('/solutions/growth-os', (c) => c.html(growthOSPage()))

// -- Command Center Portal ----------------------------------------------------
app.get('/portal', (c) => c.html(portalLoginPage()))
app.get('/portal/dashboard', (c) => c.html(portalDashboardPage()))
app.get('/portal/calls', (c) => c.html(portalCallsPage()))
app.get('/portal/agreements', (c) => c.html(portalAgreementsPage()))
app.get('/portal/candidates', (c) => c.html(portalCandidatesPage()))
app.get('/portal/audit', (c) => c.html(portalAuditPage()))
app.get('/portal/briefing', (c) => c.html(portalBriefingPage()))
app.get('/portal/communications', (c) => c.html(portalCommunicationsPage()))
app.get('/portal/campaign-builder', (c) => c.html(portalCampaignBuilderPage()))

// -- Internal CEO Dashboard (hidden, password-protected, never in sitemap) ----
app.get('/internal', (c) => c.html(internalDashboardPage()))
app.get('/internal/leads', (c) => c.html(leadsDashboardPage()))

// -- Secondary pages -----------------------------------------------------------
app.get('/about', (c) => c.html(aboutPage()))
app.get('/case-studies', (c) => c.html(caseStudiesPage()))
app.get('/how-we-work', (c) => c.html(howWeWorkPage()))
app.get('/industries', (c) => c.html(industriesPage()))
app.get('/resources', (c) => c.html(resourcesPage()))
app.get('/contact', (c) => c.html(contactPage()))
app.get('/revenue-system-audit', (c) => c.html(revenueSystemAuditPage()))
app.get('/growth-engine-xray', (c) => c.html(growthEngineXRayPage()))
app.get('/founders-revenue-council', (c) => c.html(foundersCouncilPage()))

// -- Sitemap -------------------------------------------------------------------
app.get('/sitemap.xml', (c) => {
  const base = 'https://metagrowth.ventures'
  const today = new Date().toISOString().split('T')[0]

  const urls = [
    // Core pages — highest priority
    { loc: '/',                              priority: '1.0', changefreq: 'weekly'  },
    { loc: '/solutions',                     priority: '0.9', changefreq: 'weekly'  },
    // Solution pages
    { loc: '/solutions/growth-os',           priority: '0.9', changefreq: 'weekly'  },
    { loc: '/solutions/revenue-os',          priority: '0.9', changefreq: 'weekly'  },
    { loc: '/solutions/managed-sales-pods',  priority: '0.8', changefreq: 'monthly' },
    { loc: '/solutions/commission-only',     priority: '0.8', changefreq: 'monthly' },
    { loc: '/solutions/fractional-cro',      priority: '0.8', changefreq: 'monthly' },
    // Secondary pages
    { loc: '/about',                         priority: '0.7', changefreq: 'monthly' },
    { loc: '/how-we-work',                   priority: '0.7', changefreq: 'monthly' },
    { loc: '/case-studies',                  priority: '0.7', changefreq: 'weekly'  },
    { loc: '/industries',                    priority: '0.7', changefreq: 'monthly' },
    { loc: '/resources',                     priority: '0.6', changefreq: 'weekly'  },
    { loc: '/contact',                       priority: '0.8', changefreq: 'monthly' },
    { loc: '/assessment',                    priority: '0.8', changefreq: 'monthly' },
    { loc: '/command-center',               priority: '0.9', changefreq: 'monthly' },
    { loc: '/revenue-system-audit',          priority: '0.7', changefreq: 'monthly' },
    { loc: '/growth-engine-xray',            priority: '0.7', changefreq: 'monthly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(u => `  <url>
    <loc>${base}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return c.text(xml, 200, { 'Content-Type': 'application/xml; charset=utf-8' })
})

// -- Robots.txt ----------------------------------------------------------------
app.get('/robots.txt', (c) => {
  const txt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://metagrowth.ventures/sitemap.xml

# Block non-public paths
Disallow: /api/
Disallow: /_worker.js
`
  return c.text(txt, 200, { 'Content-Type': 'text/plain' })
})

export default app
