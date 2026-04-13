import { Hono } from 'hono'
import { assessmentPage } from './pages/assessment'
import { homePage } from './pages/home'
import {
  solutionsPage,
  ceoGrowthLabPage,
  salesGrowthLabPage,
  hyperlaunchPage,
  managedSalesPodsPage,
  commissionOnlyPage,
  recruitingPage,
  fractionalCROPage,
  precisionEngagementsPage,
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
}

const app = new Hono<{ Bindings: Bindings }>()

// ── Contact form API ───────────────────────────────────────────────────────────
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const {
      first_name = '',
      last_name = '',
      email = '',
      company = '',
      revenue = '',
      team_size = '',
      solution = '',
      challenge = '',
    } = body

    const name = `${first_name} ${last_name}`.trim()
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

    // ── 1. Slack notification ────────────────────────────────────────────────
    const slackWebhook = c.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      const slackPayload = {
        text: '🚀 *New Lead — MetaGrowth Contact Form*',
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🚀 New Lead — MetaGrowth Contact Form' },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${name || '—'}` },
              { type: 'mrkdwn', text: `*Email:*\n${email || '—'}` },
              { type: 'mrkdwn', text: `*Company:*\n${company || '—'}` },
              { type: 'mrkdwn', text: `*Revenue Stage:*\n${revenue || '—'}` },
              { type: 'mrkdwn', text: `*Team Size:*\n${team_size || '—'}` },
              { type: 'mrkdwn', text: `*Solution Interest:*\n${solution || '—'}` },
            ],
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: `*Challenge:*\n${challenge || '—'}` },
          },
          {
            type: 'context',
            elements: [{ type: 'mrkdwn', text: `Submitted ${timestamp} ET` }],
          },
          {
            type: 'actions',
            elements: [
              {
                type: 'button',
                text: { type: 'plain_text', text: '📧 Reply to Lead' },
                url: `mailto:${email}`,
                style: 'primary',
              },
            ],
          },
        ],
      }
      await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackPayload),
      })
    }

    // ── 2. Email via Resend ──────────────────────────────────────────────────
    const resendKey = c.env.RESEND_API_KEY
    if (resendKey) {
      const emailBody = `
New lead from the MetaGrowth contact form.

Name:             ${name}
Email:            ${email}
Company:          ${company}
Revenue Stage:    ${revenue}
Team Size:        ${team_size}
Solution Interest: ${solution}

Challenge:
${challenge}

---
Submitted ${timestamp} ET
      `.trim()

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'MetaGrowth Site <noreply@metagrowth.ventures>',
          to: ['sales@metagrowth.ventures'],
          reply_to: email,
          subject: `New Lead: ${name} — ${company}`,
          text: emailBody,
        }),
      })
    }

    return c.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return c.json({ ok: false, error: 'Server error' }, 500)
  }
})

// ── Home ──────────────────────────────────────────────────────────────────────
app.get('/', (c) => c.html(homePage()))

// ── Assessment ────────────────────────────────────────────────────────────────
app.get('/assessment', (c) => c.html(assessmentPage()))

// ── Solutions ─────────────────────────────────────────────────────────────────
app.get('/solutions', (c) => c.html(solutionsPage()))
app.get('/solutions/ceo-growth-lab', (c) => c.html(ceoGrowthLabPage()))
app.get('/solutions/sales-growth-lab', (c) => c.html(salesGrowthLabPage()))
app.get('/solutions/hyperlaunch', (c) => c.html(hyperlaunchPage()))
app.get('/solutions/managed-sales-pods', (c) => c.html(managedSalesPodsPage()))
app.get('/solutions/commission-only', (c) => c.html(commissionOnlyPage()))
app.get('/solutions/recruiting', (c) => c.html(recruitingPage()))
app.get('/solutions/fractional-cro', (c) => c.html(fractionalCROPage()))
app.get('/solutions/precision-engagements', (c) => c.html(precisionEngagementsPage()))

// ── Secondary pages ───────────────────────────────────────────────────────────
app.get('/about', (c) => c.html(aboutPage()))
app.get('/case-studies', (c) => c.html(caseStudiesPage()))
app.get('/how-we-work', (c) => c.html(howWeWorkPage()))
app.get('/industries', (c) => c.html(industriesPage()))
app.get('/resources', (c) => c.html(resourcesPage()))
app.get('/contact', (c) => c.html(contactPage()))
app.get('/revenue-system-audit', (c) => c.html(revenueSystemAuditPage()))

export default app
