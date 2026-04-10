import { Hono } from 'hono'
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
} from './pages/secondary'

const app = new Hono()

// ── Home ──────────────────────────────────────────────────────────────────────
app.get('/', (c) => c.html(homePage()))

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

export default app
