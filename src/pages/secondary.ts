import { page, nav, footer, globalStyles, aiVisibilityHead } from '../layout'

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const aboutPage = () => page({
  path: '/about',
  title: 'About',
  llm: {
    pageType: 'about',
    summary: 'MetaGrowth Ventures is a Revenue Infrastructure & Executive Growth Firm founded in 2018 by Josh Hirsch (CEO) and Joe Arioto. The firm builds the system, installs the accountability, and deploys the talent rather than handing over reports.',
    audience: 'B2B founders, CEOs, and operators evaluating MetaGrowth as a revenue partner.',
    outcomes: ['Understand the MetaGrowth philosophy', 'See the track record: $100M+ pipeline, 21K+ outreaches, $16M+ revenue, 320+ clients', 'Decide whether to book a strategy call'],
    keywords: ['MetaGrowth Ventures about', 'MetaGrowth founders', 'Josh Hirsch CEO MetaGrowth', 'Joe Arioto MetaGrowth'],
    primaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">About MetaGrowth Ventures</div>
    <h1 class="hero-title">Revenue infrastructure built for companies <span class="accent">ready to scale</span></h1>
    <p class="hero-sub">MetaGrowth Ventures helps B2B companies install the systems, leadership, and execution discipline needed to grow with more predictability.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="about-layout fade-in">
      <div class="about-main">
        <span class="section-label">Our Philosophy</span>
        <h2 class="section-title">We don't hand over theory.<br>We <span class="green">install what works</span>.</h2>
        <p style="font-size:1.1rem;color:var(--gray-600);margin-bottom:24px;">MetaGrowth was founded on a simple but frustrated belief: most B2B companies struggling to grow are not short on strategy. They are short on infrastructure. The process isn't documented. The CRM isn't used. The team isn't accountable. The forecast is a guess.</p>
        <p style="color:var(--gray-600);margin-bottom:24px;">Traditional consultants diagnose the problem and hand you a report. Agencies run campaigns without touching the underlying sales system. Recruiters place people into broken environments and wonder why they don't perform.</p>
        <p style="color:var(--gray-600);margin-bottom:36px;">MetaGrowth does something different. We build the system. We install the accountability. We deploy the talent. And we measure success in revenue — not deliverables.</p>
        <div class="accent-bar"></div>
        <h3 style="margin-bottom:16px;">Why MetaGrowth Exists</h3>
        <p style="color:var(--gray-600);">We exist because founders deserve to exit founder-led sales. Because sales leaders deserve real infrastructure, not just goals. Because companies ready to scale shouldn't have to choose between half-measures and overhead they can't afford. MetaGrowth is the revenue partner that builds, deploys, and leads — without the full-time cost.</p>
      </div>
      <div class="about-side">
        <div class="about-stat-box">
          <div class="about-stat"><span class="as-num">$100M+</span><span class="as-label">Pipeline Generated</span></div>
          <div class="about-stat"><span class="as-num">21K+</span><span class="as-label">Prospecting Outreaches</span></div>
          <div class="about-stat"><span class="as-num">$16M+</span><span class="as-label">Revenue Added</span></div>
          <div class="about-stat"><span class="as-num">320+</span><span class="as-label">Clients Added</span></div>
          <div class="about-stat"><span class="as-num">8</span><span class="as-label">Solution Offerings</span></div>
          <div class="about-stat"><span class="as-num">Multiple</span><span class="as-label">Industries Served</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">What Makes Us Different</span>
      <h2 style="color:var(--white);margin-bottom:16px;">Not consultants. Not an agency. Not a recruiter.</h2>
      <p style="color:rgba(255,255,255,0.65);max-width:620px;margin:0 auto 56px;font-size:1.05rem;">MetaGrowth sits at the intersection of revenue strategy, sales infrastructure, talent acquisition, and execution — all under one roof, all tied to one outcome: predictable revenue growth.</p>
    </div>
    <div class="diff-compare-grid fade-in">
      <div class="diff-compare-card">
        <div class="dcc-label not-us">Traditional Consultants</div>
        <ul>
          <li>✗ Strategy decks and frameworks</li>
          <li>✗ Advice without implementation</li>
          <li>✗ No accountability for outcomes</li>
          <li>✗ Expensive retainers, limited execution</li>
        </ul>
      </div>
      <div class="diff-compare-card highlight-card">
        <div class="dcc-label us">MetaGrowth Ventures</div>
        <ul>
          <li>✓ Strategy + full deployment</li>
          <li>✓ Systems installed, not just described</li>
          <li>✓ Owned by outcome metrics</li>
          <li>✓ Talent acquisition included</li>
          <li>✓ Execution leadership embedded</li>
          <li>✓ Flexible engagement models</li>
        </ul>
      </div>
      <div class="diff-compare-card">
        <div class="dcc-label not-us">Traditional Agencies</div>
        <ul>
          <li>✗ Marketing-first, sales-second</li>
          <li>✗ Activities without pipeline accountability</li>
          <li>✗ Siloed from sales infrastructure</li>
          <li>✗ Revenue attribution is unclear</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Core Principles</span>
      <h2 class="section-title">Four principles behind every engagement</h2>
    </div>
    <div class="principles-grid fade-in">
      <div class="principle-card">
        <div class="pr-icon"><i class="fas fa-eye"></i></div>
        <h3>Clarity</h3>
        <p>Every engagement starts with clear diagnosis. We don't assume we know the problem — we uncover it through structured discovery before prescribing any solution.</p>
      </div>
      <div class="principle-card">
        <div class="pr-icon"><i class="fas fa-check-square"></i></div>
        <h3>Discipline</h3>
        <p>Revenue systems require consistent execution. We install the rhythms, cadences, and reporting structures that make discipline the default — not the exception.</p>
      </div>
      <div class="principle-card">
        <div class="pr-icon"><i class="fas fa-shield-alt"></i></div>
        <h3>Accountability</h3>
        <p>We are accountable to outcomes, not activities. If the infrastructure we build doesn't produce results, we diagnose and adjust until it does.</p>
      </div>
      <div class="principle-card">
        <div class="pr-icon"><i class="fas fa-chart-line"></i></div>
        <h3>Measurable Outcomes</h3>
        <p>Everything we deploy is tied to a measurable KPI — pipeline, revenue, conversion, hiring velocity, or forecast accuracy. We don't do work that can't be measured.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">The MetaGrowth Ecosystem</span>
      <h2 class="section-title">Strategy, infrastructure, talent, and execution — connected</h2>
      <p class="section-subtitle">Every MetaGrowth solution connects to the same revenue ecosystem. Whether you engage at the strategy level or the full execution level, the components reinforce each other.</p>
    </div>
    <div class="ecosystem-diagram fade-in">
      <div class="eco-center">Revenue<br>Ecosystem</div>
      <div class="eco-items">
        <div class="eco-item"><i class="fas fa-chess"></i><span>Revenue Strategy</span></div>
        <div class="eco-item"><i class="fas fa-layer-group"></i><span>Sales Infrastructure</span></div>
        <div class="eco-item"><i class="fas fa-search"></i><span>Talent Acquisition</span></div>
        <div class="eco-item"><i class="fas fa-crown"></i><span>Executive Leadership</span></div>
        <div class="eco-item"><i class="fas fa-cogs"></i><span>Sales Execution</span></div>
        <div class="eco-item"><i class="fas fa-chart-bar"></i><span>Accountability &amp; KPIs</span></div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready to work with MetaGrowth?</h2>
    <p>Book a strategy call and let's identify the right engagement for your company's stage and goals.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Explore Solutions</a>
    </div>
  </div>
</section>

<style>
.about-layout { display: grid; grid-template-columns: 1fr 340px; gap: 64px; align-items: start; }
.about-stat-box { background: var(--navy); border-radius: var(--radius-lg); padding: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
.about-stat { padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.about-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.06); }
.as-num { display: block; font-size: 1.8rem; font-weight: 800; color: var(--green); line-height: 1; margin-bottom: 6px; }
.as-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em; }
.diff-compare-grid { display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 24px; }
.diff-compare-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 32px; }
.diff-compare-card.highlight-card { background: rgba(173,120,5,0.08); border-color: rgba(173,120,5,0.3); }
.dcc-label { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px; }
.dcc-label.not-us { color: rgba(255,255,255,0.4); }
.dcc-label.us { color: var(--green); }
.diff-compare-card ul { display: flex; flex-direction: column; gap: 10px; }
.diff-compare-card ul li { font-size: 0.875rem; color: rgba(255,255,255,0.55); }
.diff-compare-card.highlight-card ul li { color: rgba(255,255,255,0.8); }
.principles-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 52px; }
.principle-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 26px; transition: all var(--transition); }
.principle-card:hover { border-color: var(--green); transform: translateY(-4px); box-shadow: var(--shadow); }
.pr-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.3rem; margin-bottom: 18px; }
.principle-card h3 { font-size: 1.1rem; color: var(--gray-800); margin-bottom: 10px; }
.principle-card p { font-size: 0.875rem; color: var(--gray-600); }
.ecosystem-diagram { display: flex; align-items: center; gap: 48px; margin-top: 56px; justify-content: center; }
.eco-center { width: 160px; height: 160px; border-radius: 50%; background: var(--navy); color: var(--white); display: flex; align-items: center; justify-content: center; text-align: center; font-weight: 800; font-size: 1rem; line-height: 1.3; flex-shrink: 0; border: 4px solid var(--green); }
.eco-items { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.eco-item { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; transition: all var(--transition); }
.eco-item:hover { border-color: var(--green); }
.eco-item i { color: var(--green); font-size: 1.3rem; }
.eco-item span { font-size: 0.85rem; font-weight: 600; color: var(--gray-800); }
@media (max-width: 1100px) { .about-layout { grid-template-columns: 1fr; } .diff-compare-grid { grid-template-columns: 1fr; } .principles-grid { grid-template-columns: repeat(2, 1fr); } .ecosystem-diagram { flex-direction: column; } .eco-items { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .principles-grid { grid-template-columns: 1fr; } .about-stat-box { grid-template-columns: 1fr; } .about-stat:nth-child(odd) { border-right: none; } }
</style>
` })

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
export const caseStudiesPage = () => page({
  path: '/case-studies',
  title: 'Case Studies',
  llm: {
    pageType: 'collection',
    summary: 'Real-client revenue outcomes across MetaGrowth engagements: $100M+ pipeline generated, 21,000+ prospecting outreaches, $16M+ revenue added, 320+ clients added across 8 solutions and multiple industries.',
    audience: 'B2B founders and revenue leaders evaluating MetaGrowth and looking for proof of outcomes.',
    outcomes: ['See verified client outcomes', 'Understand the engagement-to-revenue path', 'Build conviction before booking a call'],
    keywords: ['MetaGrowth case studies', 'B2B sales case studies', 'sales infrastructure results'],
    primaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Explore Solutions', url: 'https://metagrowth.ventures/solutions' },
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Case Studies</div>
    <h1 class="hero-title">Real growth comes from <span class="accent">installed systems</span>, not isolated tactics</h1>
    <p class="hero-sub">Explore how MetaGrowth has helped B2B companies diagnose infrastructure gaps and deploy solutions that move the revenue needle.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cs-filters fade-in">
      <button class="csf-btn active" data-filter="all">All Case Studies</button>
      <button class="csf-btn" data-filter="infrastructure">Infrastructure Build</button>
      <button class="csf-btn" data-filter="leadership">Leadership</button>
      <button class="csf-btn" data-filter="commission">Commission-Only</button>
    </div>

    <!-- Azul Arc -->
    <div class="cs-full-card fade-in" id="azul-arc">
      <div class="csf-header">
        <div class="csf-meta">
          <div class="csf-industry">Technology &middot; Professional Services</div>
          <div class="csf-tags"><span class="tag">HyperLaunch</span> <span class="tag">Sales OS</span> <span class="tag">Prospecting</span></div>
        </div>
        <div class="csf-badge">infrastructure</div>
      </div>
      <div class="csf-body">
        <div class="csf-left">
          <h2>Azul Arc</h2>
          <div class="csf-section"><h4>The Challenge</h4><p>Azul Arc lacked a structured prospecting engine and sales direction. Revenue was entirely founder-dependent with no repeatable process, no CRM discipline, and no defined ICP. Every deal required the founder's direct involvement and the pipeline was essentially invisible.</p></div>
          <div class="csf-section"><h4>The Solution</h4><p>MetaGrowth deployed a complete sales operating system — defining the ICP, building the prospecting infrastructure, configuring CRM, installing outreach sequences, and launching a leveraged prospecting support function that generated pipeline at scale.</p></div>
          <div class="csf-section"><h4>Services Deployed</h4><div class="pill-row"><span class="pill">Sales OS Build</span><span class="pill">Prospecting Infrastructure</span><span class="pill">CRM Configuration</span><span class="pill">Outreach Sequences</span></div></div>
        </div>
        <div class="csf-right">
          <div class="csf-results-box">
            <div class="csf-result-label">Results</div>
            <div class="big-metric"><span class="bm-num">$100M+</span><span class="bm-label">Pipeline Generated</span></div>
            <div class="big-metric"><span class="bm-num">75,000+</span><span class="bm-label">Prospecting Outreaches Executed</span></div>
            <div class="big-metric"><span class="bm-num">11,000+</span><span class="bm-label">Booked Meetings</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Speakeasy -->
    <div class="cs-full-card fade-in" id="speakeasy">
      <div class="csf-header">
        <div class="csf-meta">
          <div class="csf-industry">Events &middot; Professional Development</div>
          <div class="csf-tags"><span class="tag">Fractional Leadership</span> <span class="tag">Recruiting</span> <span class="tag">Coaching</span></div>
        </div>
        <div class="csf-badge">leadership</div>
      </div>
      <div class="csf-body">
        <div class="csf-left">
          <h2>Speakeasy</h2>
          <div class="csf-section"><h4>The Challenge</h4><p>Speakeasy needed sales leadership and accountability infrastructure without the cost and risk of a full-time executive hire. The sales team had capacity but lacked direction, coaching, and a performance management system that created real accountability.</p></div>
          <div class="csf-section"><h4>The Solution</h4><p>MetaGrowth deployed custom leadership oversight including structured coaching sessions, a recruiting engagement to upgrade team talent, and a strategic advisory layer that gave leadership the visibility and clarity needed to make better revenue decisions.</p></div>
          <div class="csf-section"><h4>Services Deployed</h4><div class="pill-row"><span class="pill">Leadership Oversight</span><span class="pill">Team Coaching</span><span class="pill">Recruiting</span><span class="pill">Revenue Strategy</span></div></div>
        </div>
        <div class="csf-right">
          <div class="csf-results-box">
            <div class="csf-result-label">Results</div>
            <div class="outcome-item"><i class="fas fa-check-circle"></i> Strategic oversight installed with clear revenue cadence</div>
            <div class="outcome-item"><i class="fas fa-check-circle"></i> Talent upgrade through structured recruiting and vetting</div>
            <div class="outcome-item"><i class="fas fa-check-circle"></i> Accountability framework with weekly performance visibility</div>
            <div class="outcome-item"><i class="fas fa-check-circle"></i> Sales team direction and motivation significantly improved</div>
            <div class="outcome-item"><i class="fas fa-check-circle"></i> Leadership gained reliable forecast and pipeline visibility</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Private Client -->
    <div class="cs-full-card fade-in" id="private">
      <div class="csf-header">
        <div class="csf-meta">
          <div class="csf-industry">B2B Services &middot; Private Client</div>
          <div class="csf-tags"><span class="tag">Commission-Only</span> <span class="tag">Automation</span> <span class="tag">Multi-Channel</span></div>
        </div>
        <div class="csf-badge">commission</div>
      </div>
      <div class="csf-body">
        <div class="csf-left">
          <h2>Private Client</h2>
          <div class="csf-section"><h4>The Challenge</h4><p>This client needed a scalable outreach and sales strategy without adding fixed salary overhead or building an internal sales team. They had a proven service offering but lacked the infrastructure to create consistent, scalable new business development.</p></div>
          <div class="csf-section"><h4>The Solution</h4><p>MetaGrowth deployed a commission-only infrastructure model — building the system, designing the commission structure, recruiting and training 1099 reps, and layering in automation and multi-channel outreach to amplify reach without adding overhead.</p></div>
          <div class="csf-section"><h4>Services Deployed</h4><div class="pill-row"><span class="pill">Commission-Only Infrastructure</span><span class="pill">System Build</span><span class="pill">1099 Recruiting</span><span class="pill">Outreach Automation</span></div></div>
        </div>
        <div class="csf-right">
          <div class="csf-results-box">
            <div class="csf-result-label">Results</div>
            <div class="big-metric"><span class="bm-num">$16M+</span><span class="bm-label">Revenue Added</span></div>
            <div class="big-metric"><span class="bm-num">320+</span><span class="bm-label">Clients Added</span></div>
            <div class="big-metric"><span class="bm-num">75,000+</span><span class="bm-label">Prospecting Outreaches</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready to write your own case study?</h2>
    <p>Book a strategy call and let's identify the right solution to create measurable results for your revenue function.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Explore Solutions</a>
    </div>
  </div>
</section>

<style>
.cs-filters { display: flex; gap: 12px; margin-bottom: 48px; flex-wrap: wrap; }
.csf-btn { background: var(--gray-100); border: 1px solid var(--gray-200); border-radius: 100px; padding: 10px 22px; font-size: 0.875rem; font-weight: 600; color: var(--gray-600); cursor: pointer; transition: all var(--transition); }
.csf-btn.active, .csf-btn:hover { background: var(--navy); color: var(--white); border-color: var(--gray-800); }
.cs-full-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); margin-bottom: 32px; overflow: hidden; transition: all var(--transition); }
.cs-full-card:hover { border-color: var(--green); box-shadow: var(--shadow-lg); }
.csf-header { display: flex; align-items: center; justify-content: space-between; padding: 24px 36px; background: var(--gray-50); border-bottom: 1px solid var(--gray-200); }
.csf-industry { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 8px; }
.csf-tags { display: flex; gap: 8px; }
.csf-badge { background: var(--navy); color: var(--white); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 6px 14px; border-radius: 100px; }
.csf-body { display: grid; grid-template-columns: 1fr 380px; gap: 0; }
.csf-left { padding: 40px 36px; }
.csf-left h2 { font-size: 2rem; color: var(--gray-800); margin-bottom: 28px; }
.csf-section { margin-bottom: 24px; }
.csf-section h4 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 8px; }
.csf-section p { color: var(--gray-600); font-size: 0.95rem; line-height: 1.7; }
.csf-right { background: var(--navy); padding: 40px 32px; }
.csf-results-box { }
.csf-result-label { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--green); font-weight: 700; margin-bottom: 28px; }
.big-metric { margin-bottom: 28px; padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.big-metric:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.bm-num { display: block; font-size: 2.5rem; font-weight: 800; color: var(--green); line-height: 1; margin-bottom: 6px; }
.bm-label { font-size: 0.875rem; color: rgba(255,255,255,0.55); }
.outcome-item { display: flex; align-items: flex-start; gap: 12px; color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 16px; line-height: 1.5; }
.outcome-item i { color: var(--green); flex-shrink: 0; margin-top: 2px; }
@media (max-width: 900px) { .csf-body { grid-template-columns: 1fr; } .csf-right { padding: 32px 36px; } }
@media (max-width: 640px) { .csf-left { padding: 28px 24px; } .csf-header { flex-direction: column; align-items: flex-start; gap: 12px; padding: 20px 24px; } }
</style>
<script>
const csfBtns = document.querySelectorAll('.csf-btn');
const csfCards = document.querySelectorAll('.cs-full-card');
csfBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    csfBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    csfCards.forEach(card => {
      const badge = card.querySelector('.csf-badge');
      if (filter === 'all' || badge?.textContent?.trim() === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
</script>
` })

// ─── HOW WE WORK ──────────────────────────────────────────────────────────────
export const howWeWorkPage = () => page({
  path: '/how-we-work',
  title: 'How We Work',
  llm: {
    pageType: 'about',
    summary: 'The MetaGrowth engagement methodology: Diagnose, Design, Deploy, Drive. A four-stage cycle that begins with a diagnostic, designs the right system for the company stage, deploys the system and talent, then drives accountability rhythm until outcomes are sustained.',
    audience: 'Buyers evaluating how MetaGrowth actually delivers an engagement.',
    outcomes: ['Understand the four engagement phases', 'See how diagnostics feed engagement scope', 'See accountability/cadence model'],
    keywords: ['MetaGrowth methodology', 'sales engagement model', 'diagnose design deploy drive'],
    primaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Run the Revenue System Audit', url: 'https://metagrowth.ventures/revenue-system-audit' },
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">How We Work</div>
    <h1 class="hero-title">We don't hand over theory.<br>We <span class="accent">install the operating system</span>.</h1>
    <p class="hero-sub">MetaGrowth's deployment model is built around real implementation — not recommendations that gather dust in a shared folder.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Book a Strategy Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">See Which Engagement Fits</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:72px;">
      <span class="section-label">Our Process</span>
      <h2 class="section-title">Six phases of revenue infrastructure deployment</h2>
      <p class="section-subtitle">Every MetaGrowth engagement follows a proven deployment framework — tailored to your stage, adjusted to your goals, and anchored to measurable outcomes.</p>
    </div>
    <div class="hww-phases fade-in">
      <div class="hww-phase">
        <div class="hww-num">01</div>
        <div class="hww-content">
          <div class="hww-icon"><i class="fas fa-microscope"></i></div>
          <h3>Discovery &amp; Diagnosis</h3>
          <p>We start with a structured diagnostic — not assumptions. We map your current revenue motion, identify infrastructure gaps, assess team performance, and document the bottlenecks that are blocking growth.</p>
          <div class="hww-details">
            <div class="hww-detail-item">Current state revenue assessment</div>
            <div class="hww-detail-item">Sales infrastructure gap analysis</div>
            <div class="hww-detail-item">Team performance review</div>
            <div class="hww-detail-item">CRM and pipeline audit</div>
            <div class="hww-detail-item">Revenue goal alignment</div>
          </div>
        </div>
      </div>
      <div class="hww-phase">
        <div class="hww-num">02</div>
        <div class="hww-content">
          <div class="hww-icon"><i class="fas fa-drafting-compass"></i></div>
          <h3>Revenue Architecture</h3>
          <p>Based on discovery, we design the right revenue infrastructure for your stage. This includes ICP definition, sales process design, compensation modeling, and technology selection — all before anything is built.</p>
          <div class="hww-details">
            <div class="hww-detail-item">ICP and segment definition</div>
            <div class="hww-detail-item">Sales process architecture</div>
            <div class="hww-detail-item">Compensation and incentive design</div>
            <div class="hww-detail-item">Technology and CRM selection</div>
            <div class="hww-detail-item">KPI framework design</div>
          </div>
        </div>
      </div>
      <div class="hww-phase">
        <div class="hww-num">03</div>
        <div class="hww-content">
          <div class="hww-icon"><i class="fas fa-users"></i></div>
          <h3>Recruiting &amp; Talent Deployment</h3>
          <p>If your engagement includes talent acquisition, we launch a structured recruiting process — behavioral assessments, deep vetting, structured interviews, and finalist presentation — to find producers, not just candidates.</p>
          <div class="hww-details">
            <div class="hww-detail-item">Role definition and scorecard</div>
            <div class="hww-detail-item">Sourcing and outreach</div>
            <div class="hww-detail-item">Behavioral assessment screening</div>
            <div class="hww-detail-item">Structured interview process</div>
            <div class="hww-detail-item">Finalist package and placement</div>
          </div>
        </div>
      </div>
      <div class="hww-phase">
        <div class="hww-num">04</div>
        <div class="hww-content">
          <div class="hww-icon"><i class="fas fa-graduation-cap"></i></div>
          <h3>Training &amp; Coaching System</h3>
          <p>We build and run the training systems that ramp new hires faster and keep existing reps improving consistently — product knowledge, sales process certification, call coaching, and ongoing skill development.</p>
          <div class="hww-details">
            <div class="hww-detail-item">Onboarding program development</div>
            <div class="hww-detail-item">Sales process certification</div>
            <div class="hww-detail-item">Call coaching and feedback</div>
            <div class="hww-detail-item">Rep development roadmaps</div>
            <div class="hww-detail-item">Manager coaching frameworks</div>
          </div>
        </div>
      </div>
      <div class="hww-phase">
        <div class="hww-num">05</div>
        <div class="hww-content">
          <div class="hww-icon"><i class="fas fa-chart-line"></i></div>
          <h3>Accountability &amp; Forecasting</h3>
          <p>We install the operating rhythm that keeps your team accountable and your leadership informed — weekly pipeline reviews, activity tracking, forecast discipline, and performance management.</p>
          <div class="hww-details">
            <div class="hww-detail-item">Weekly pipeline review cadence</div>
            <div class="hww-detail-item">KPI tracking and dashboards</div>
            <div class="hww-detail-item">Stage-weighted forecast model</div>
            <div class="hww-detail-item">Rep performance management</div>
            <div class="hww-detail-item">Monthly traction reporting</div>
          </div>
        </div>
      </div>
      <div class="hww-phase">
        <div class="hww-num">06</div>
        <div class="hww-content">
          <div class="hww-icon"><i class="fas fa-sync-alt"></i></div>
          <h3>Ongoing Optimization</h3>
          <p>Revenue infrastructure isn't a one-time build — it needs continuous refinement. We monitor, adjust, and improve based on real performance data so your system gets better over time.</p>
          <div class="hww-details">
            <div class="hww-detail-item">Monthly performance review</div>
            <div class="hww-detail-item">Message and sequence optimization</div>
            <div class="hww-detail-item">Process refinement based on data</div>
            <div class="hww-detail-item">Quarterly strategic recalibration</div>
            <div class="hww-detail-item">Growth planning for next phase</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">What Clients Should Expect</span>
      <h2 style="color:var(--white);margin-bottom:48px;">What working with MetaGrowth actually looks like</h2>
    </div>
    <div class="expect-grid fade-in">
      <div class="expect-card">
        <div class="exp-icon"><i class="fas fa-user-cog"></i></div>
        <h4>Level of Involvement</h4>
        <p>You'll be involved at key decision points — discovery, architecture review, candidate selection, and monthly strategy. Day-to-day execution is handled by MetaGrowth.</p>
      </div>
      <div class="expect-card">
        <div class="exp-icon"><i class="fas fa-calendar-alt"></i></div>
        <h4>Communication Cadence</h4>
        <p>Weekly status updates (async or live), monthly reporting, and quarterly strategy reviews. You always know what's happening and why.</p>
      </div>
      <div class="expect-card">
        <div class="exp-icon"><i class="fas fa-flag-checkered"></i></div>
        <h4>Decision Points</h4>
        <p>We present options and recommendations at major milestones — not just updates. You stay in control of direction; we handle execution.</p>
      </div>
      <div class="expect-card">
        <div class="exp-icon"><i class="fas fa-file-chart-line"></i></div>
        <h4>Reporting Structure</h4>
        <p>Monthly performance reports tied to agreed KPIs — pipeline, activity, conversion, revenue, and hiring. No vanity metrics, only what moves the needle.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>See which engagement fits your situation.</h2>
    <p>Book a strategy call and we'll walk you through the right deployment model for your company's stage, team, and goals.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Explore Solutions</a>
    </div>
  </div>
</section>

<style>
.hww-phases { display: flex; flex-direction: column; gap: 0; }
.hww-phase { display: grid; grid-template-columns: 80px 1fr; gap: 40px; align-items: start; padding: 56px 0; border-bottom: 1px solid var(--gray-200); }
.hww-phase:last-child { border-bottom: none; }
.hww-num { font-size: 4rem; font-weight: 900; color: rgba(173,120,5,0.12); line-height: 1; text-align: center; padding-top: 8px; }
.hww-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.3rem; margin-bottom: 16px; }
.hww-content h3 { font-size: 1.4rem; color: var(--gray-800); margin-bottom: 12px; }
.hww-content > p { color: var(--gray-600); font-size: 1rem; margin-bottom: 20px; line-height: 1.7; }
.hww-details { display: flex; flex-wrap: wrap; gap: 10px; }
.hww-detail-item { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 100px; padding: 6px 16px; font-size: 0.82rem; color: var(--gray-600); font-weight: 500; }
.expect-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.expect-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 28px 24px; transition: all var(--transition); }
.expect-card:hover { border-color: var(--green); }
.exp-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.2rem; margin-bottom: 16px; }
.expect-card h4 { color: var(--white); margin-bottom: 10px; }
.expect-card p { color: rgba(255,255,255,0.55); font-size: 0.875rem; }
@media (max-width: 900px) { .hww-phase { grid-template-columns: 1fr; gap: 16px; } .hww-num { font-size: 2.5rem; } .expect-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .expect-grid { grid-template-columns: 1fr; } }
</style>
` })

// ─── INDUSTRIES ───────────────────────────────────────────────────────────────
export const industriesPage = () => page({
  path: '/industries',
  title: 'Industries',
  llm: {
    pageType: 'industry',
    summary: 'Industry-specific bottleneck patterns and MetaGrowth solution mappings across Software/SaaS, Consulting & Coaching, Professional Services, Manufacturing, Technical Services, Agencies, and Growth-Stage B2B.',
    audience: 'B2B operators looking for industry-specific framing of their revenue infrastructure problems.',
    outcomes: ['See your industry bottleneck pattern', 'Get the MetaGrowth solution mapping for your industry', 'Decide whether to book a strategy call'],
    keywords: ['B2B SaaS sales consulting', 'manufacturing inside sales', 'professional services prospecting', 'agency new business development', 'technical services sales'],
    primaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Explore Solutions', url: 'https://metagrowth.ventures/solutions' },
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Industries</div>
    <h1 class="hero-title">Revenue systems built for complex <span class="accent">B2B growth environments</span></h1>
    <p class="hero-sub">MetaGrowth works across industries — because revenue infrastructure problems are not industry-specific. The systems, accountability, and talent challenges are universal.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:60px;">
      <span class="section-label">Industries We Serve</span>
      <h2 class="section-title">Flexible enough for any B2B environment</h2>
      <p class="section-subtitle">We don't specialize in one industry — we specialize in revenue infrastructure. These are the B2B environments where we deploy most frequently.</p>
    </div>
    <div class="industries-list fade-in">
      ${industryCard('fas fa-laptop-code', 'Software / SaaS', 'The Bottleneck', 'Long sales cycles, demo-heavy processes, and high customer acquisition costs without a repeatable GTM motion.', 'Why MetaGrowth Fits', 'We build the outbound engine, install CRM discipline, and create the coaching cadence that SaaS teams need to grow predictably.', ['HyperLaunch System', 'Sales Growth Lab', 'Fractional CRO'])}
      ${industryCard('fas fa-briefcase', 'Consulting &amp; Coaching', 'The Bottleneck', 'Founder-dependent rainmaking, no scalable outreach, and an inability to transition from referral-only growth.', 'Why MetaGrowth Fits', 'We build the outbound infrastructure, define the ICP, and install the systems that let consulting firms scale without the founder.', ['HyperLaunch System', 'CEO Growth Lab', 'Precision Engagements'])}
      ${industryCard('fas fa-handshake', 'Professional Services', 'The Bottleneck', 'Relationship-based selling with no structured prospecting, inconsistent pipeline, and no CRM accountability.', 'Why MetaGrowth Fits', 'We install systematic prospecting, build pipeline discipline, and create the accountability rhythm that professional service firms are typically missing.', ['Sales Growth Lab', 'Managed Sales Pods', 'Recruiting Services'])}
      ${industryCard('fas fa-industry', 'Manufacturing', 'The Bottleneck', 'Field-heavy, rep-dependent sales with no inside sales infrastructure and limited digital outreach capability.', 'Why MetaGrowth Fits', 'We build the inside sales layer, create CRM and pipeline visibility, and install outreach systems that complement your field sales motion.', ['HyperLaunch System', 'Commission-Only Infra', 'Recruiting Services'])}
      ${industryCard('fas fa-cogs', 'Technical Services', 'The Bottleneck', 'Complex technical solutions that are difficult to sell without a strong process, ICP clarity, and effective messaging.', 'Why MetaGrowth Fits', 'We translate technical value into compelling sales narratives, build the outreach infrastructure, and install the process that gets technical sellers to quota.', ['HyperLaunch System', 'Precision Engagements', 'Sales Growth Lab'])}
      ${industryCard('fas fa-paint-brush', 'Agency &amp; Service Firms', 'The Bottleneck', 'New business development is inconsistent, referral-dependent, and usually falls to leadership who has too many other priorities.', 'Why MetaGrowth Fits', 'We build the prospecting engine, install a repeatable new business process, and in many cases run a commission-only model that generates pipeline without fixed cost.', ['Commission-Only Infra', 'HyperLaunch System', 'CEO Growth Lab'])}
      ${industryCard('fas fa-rocket', 'Growth-Stage B2B', 'The Bottleneck', 'Revenue is real but inconsistent. Infrastructure is cracking under growth pressure. Leadership is stretched thin and can\'t build systems while running the business.', 'Why MetaGrowth Fits', 'MetaGrowth is built for this exact stage — we bring executive leadership, system infrastructure, and talent acquisition under one roof so growth-stage companies can scale without guessing.', ['Fractional CRO', 'Managed Sales Pods', 'HyperLaunch System'])}
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Your industry. Our infrastructure.</h2>
    <p>Book a strategy call and let's discuss the specific revenue bottlenecks you're facing — and the right MetaGrowth solution to solve them.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Explore Solutions</a>
    </div>
  </div>
</section>

<style>
.industries-list { display: flex; flex-direction: column; gap: 24px; }
.industry-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 40px; transition: all var(--transition); }
.industry-card:hover { border-color: var(--green); box-shadow: var(--shadow-lg); }
.ind-header { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; }
.ind-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.4rem; flex-shrink: 0; }
.ind-header h3 { font-size: 1.3rem; color: var(--gray-800); }
.ind-body { display: grid; grid-template-columns: 1fr 1fr 260px; gap: 32px; }
.ind-section h5 { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 8px; }
.ind-section p { font-size: 0.9rem; color: var(--gray-600); line-height: 1.6; }
.ind-services { display: flex; flex-direction: column; gap: 8px; }
.ind-service-link { display: flex; align-items: center; gap: 10px; font-size: 0.875rem; font-weight: 600; color: var(--gray-800); transition: color var(--transition); }
.ind-service-link::before { content: '→'; color: var(--green); }
.ind-service-link:hover { color: var(--green); }
@media (max-width: 900px) { .ind-body { grid-template-columns: 1fr; gap: 20px; } }
</style>
` })

// ─── RESOURCES ────────────────────────────────────────────────────────────────
export const resourcesPage = () => page({
  path: '/resources',
  title: 'Resources',
  llm: {
    pageType: 'resource',
    summary: "Free, ungated resources: The Founder's Growth Guide, The Revenue System Blueprint, the Sales Team Performance Diagnostic, the AI Stack Guide 2026, plus the live Revenue System Audit and Revenue Engine Assessment.",
    audience: 'B2B founders and sales leaders looking for frameworks before committing to an engagement.',
    outcomes: ["Download the Founder's Growth Guide", 'Run the Revenue System Audit', 'Use the Revenue System Blueprint as an internal framework'],
    keywords: ['B2B revenue resources', 'sales team diagnostic', 'revenue system blueprint', 'founder growth guide', 'AI stack for sales'],
    primaryCta: { label: 'Run the Revenue System Audit', url: 'https://metagrowth.ventures/revenue-system-audit' },
    secondaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Resources</div>
    <h1 class="hero-title">Revenue growth starts with <span class="accent">the right frameworks</span></h1>
    <p class="hero-sub">Guides, templates, and tools built to help founders, CEOs, and sales leaders diagnose infrastructure gaps and build scalable revenue systems.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:60px;">
      <span class="section-label">Lead Magnets</span>
      <h2 class="section-title">Start with these essential resources</h2>
    </div>
    <div class="lead-magnets-grid fade-in">
      <div class="lm-card featured" style="margin-top:0;">
        <div class="lm-badge">New</div>
        <div class="lm-icon"><i class="fas fa-search-dollar"></i></div>
        <div>
          <h3>Revenue System Audit™</h3>
          <p>Identify where revenue is leaking inside your sales process. Most businesses assume stalled growth is a lead problem — this diagnostic reveals where opportunities are slipping, which parts of your sales process are underperforming, and what those gaps may be costing each month.</p>
          <div class="lm-details">
            <span><i class="fas fa-clock"></i> 5–7 min</span>
            <span><i class="fas fa-clipboard-check"></i> Executive Diagnostic</span>
            <span><i class="fas fa-mobile-alt"></i> Mobile-friendly</span>
          </div>
        </div>
        <a href="/revenue-system-audit" class="btn btn-primary">Run the Audit</a>
      </div>
      <div class="lm-card featured">
        <div class="lm-badge">New</div>
        <div class="lm-icon"><i class="fas fa-chart-bar"></i></div>
        <div>
          <h3>Sales Team Performance Diagnostic</h3>
          <p>An execution review framework for founders and revenue leaders. Score your sales team across outreach, pipeline creation, messaging, and process discipline — identify structural constraints and get clear recommendations to fix them.</p>
          <div class="lm-details">
            <span><i class="fas fa-file-pdf"></i> PDF Framework</span>
            <span><i class="fas fa-clock"></i> 15 min audit</span>
            <span><i class="fas fa-list-ol"></i> Scored Diagnostic</span>
          </div>
        </div>
        <a href="/static/sales-team-diagnostic.pdf" target="_blank" class="btn btn-primary" download>Download Free</a>
      </div>
      <div class="lm-card featured" style="margin-top:0;">
        <div class="lm-badge">Free Guide</div>
        <div class="lm-icon"><i class="fas fa-book-open"></i></div>
        <div>
          <h3>The Founder's Growth Guide</h3>
          <p>How MetaGrowth thinks about scaling revenue systems — and where most businesses break. Covers the founder bottleneck, pipeline problems, sales process gaps, the recruiting trap, data blind spots, and what actually scales. Essential reading for any B2B founder serious about building a predictable revenue engine.</p>
          <div class="lm-details">
            <span><i class="fas fa-file-pdf"></i> PDF Guide</span>
            <span><i class="fas fa-clock"></i> 30 min read</span>
            <span><i class="fas fa-list"></i> 10 Sections</span>
          </div>
        </div>
        <a href="/static/founders-growth-guide.pdf" target="_blank" class="btn btn-primary" download>Download Free</a>
      </div>
      <div class="lm-card featured" style="margin-top:0;">
        <div class="lm-badge">Free Guide</div>
        <div class="lm-icon"><i class="fas fa-sitemap"></i></div>
        <div>
          <h3>The Revenue System Blueprint™</h3>
          <p>A high-level executive framework mapping the 7 stages every B2B company must master to build a predictable, scalable, and defensible revenue engine. Covers Market & ICP Clarity, Messaging, Pipeline Generation, Qualification, Execution, Pipeline Management, and Optimization.</p>
          <div class="lm-details">
            <span><i class="fas fa-file-pdf"></i> PDF Guide</span>
            <span><i class="fas fa-clock"></i> 20 min read</span>
            <span><i class="fas fa-layer-group"></i> 7-Stage Framework</span>
          </div>
        </div>
        <a href="/static/revenue-system-blueprint.pdf" target="_blank" class="btn btn-primary" download>Download Free</a>
      </div>
      <div class="lm-card featured" style="margin-top:0;">
        <div class="lm-badge">Free Guide</div>
        <div class="lm-icon"><i class="fas fa-robot"></i></div>
        <div>
          <h3>2026 B2B Team AI Stack Guide</h3>
          <p>An executive-level framework for identifying which AI tools actually belong in a B2B revenue stack — and in what order to implement them. Covers internal Q&A, workflow automation, customer service bots, revenue intelligence, CRM-native agents, ROI modeling, and a practical implementation roadmap.</p>
          <div class="lm-details">
            <span><i class="fas fa-file-pdf"></i> PDF Guide</span>
            <span><i class="fas fa-clock"></i> 25 min read</span>
            <span><i class="fas fa-layer-group"></i> 5-Layer Framework</span>
          </div>
        </div>
        <a href="/static/ai-stack-guide-2026.pdf" target="_blank" class="btn btn-primary" download>Download Free</a>
      </div>

    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:52px;">
      <span class="section-label">Content Library</span>
      <h2 class="section-title">Revenue growth knowledge base</h2>
    </div>
    <div class="resource-cats fade-in">
      ${resourceCat('fas fa-layer-group', 'Sales Operating System', ['Building a repeatable sales process', 'CRM configuration best practices', 'KPI framework setup', 'Pipeline stage design'])}
      ${resourceCat('fas fa-search', 'Recruiting &amp; Hiring', ['Interview scorecard templates', 'Behavioral assessment overview', 'SDR vs AE hiring differences', 'Onboarding 30/60/90 frameworks'])}
      ${resourceCat('fas fa-dollar-sign', 'Compensation Design', ['Commission plan structures', 'Draw vs at-risk models', 'Accelerator and kicker design', 'Margin-safe comp planning'])}
      ${resourceCat('fas fa-database', 'CRM &amp; KPIs', ['CRM selection guide', 'Pipeline velocity tracking', 'Leading vs lagging indicators', 'Forecast accuracy methods'])}
      ${resourceCat('fas fa-comment-dots', 'Outreach &amp; Messaging', ['Cold email frameworks', 'LinkedIn outreach sequences', 'Call script templates', 'Objection handling guides'])}
      ${resourceCat('fas fa-chart-line', 'Revenue Growth', ['Stage-based growth strategy', 'From $1M to $10M playbook', 'Founder-to-CEO sales transition', 'Scaling without overhead'])}
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Want a custom resource for your situation?</h2>
    <p>Book a strategy call and get a personalized revenue architecture recommendation — not a generic template.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/assessment" class="btn btn-secondary btn-lg">Take the Assessment</a>
    </div>
  </div>
</section>

<style>
.lead-magnets-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.lm-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 36px 32px; position: relative; transition: all var(--transition); }
.lm-card:hover { border-color: var(--green); box-shadow: var(--shadow-lg); transform: translateY(-4px); }
.lm-card.featured { border-color: var(--green); background: linear-gradient(135deg, rgba(173,120,5,0.04) 0%, var(--white) 100%); display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 32px; }
.lm-badge { position: absolute; top: -12px; left: 24px; background: var(--green); color: var(--gray-800); font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 14px; border-radius: 100px; }
.lm-icon { width: 64px; height: 64px; border-radius: 16px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.6rem; flex-shrink: 0; }
.lm-card.featured .lm-icon { width: 80px; height: 80px; font-size: 2rem; }
.lm-card h3 { font-size: 1.2rem; color: var(--gray-800); margin-bottom: 10px; margin-top: 16px; }
.lm-card.featured h3 { margin-top: 0; }
.lm-card p { font-size: 0.9rem; color: var(--gray-600); margin-bottom: 16px; }
.lm-details { display: flex; gap: 16px; margin-bottom: 20px; }
.lm-details span { font-size: 0.8rem; color: var(--gray-400); display: flex; align-items: center; gap: 6px; }
.resource-cats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.res-cat { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 28px; transition: all var(--transition); }
.res-cat:hover { border-color: var(--green); box-shadow: var(--shadow); }
.res-cat-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.2rem; margin-bottom: 16px; }
.res-cat h4 { color: var(--gray-800); margin-bottom: 16px; }
.res-cat ul { display: flex; flex-direction: column; gap: 8px; }
.res-cat ul li { font-size: 0.875rem; color: var(--gray-600); padding-left: 14px; position: relative; }
.res-cat ul li::before { content: '–'; position: absolute; left: 0; color: var(--green); font-weight: 700; }
@media (max-width: 900px) { .lead-magnets-grid { grid-template-columns: 1fr; } .lm-card.featured { grid-template-columns: 1fr; } .resource-cats { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .resource-cats { grid-template-columns: 1fr; } }
</style>
` })

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const contactPage = () => page({
  path: '/contact',
  title: 'Contact',
  llm: {
    pageType: 'contact',
    summary: 'Contact MetaGrowth Ventures. Email sales@metagrowth.ventures or book a 30-minute strategy call directly with Lance Hengst on the MetaGrowth team.',
    audience: 'Anyone trying to reach MetaGrowth Ventures for a sales conversation, partnership, or general inquiry.',
    outcomes: ['Reach MetaGrowth via email', 'Book a 30-min strategy call', 'Get a response within one business day'],
    keywords: ['contact MetaGrowth Ventures', 'book strategy call MetaGrowth', 'sales@metagrowth.ventures'],
    primaryCta: { label: 'Book a 30-min Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Email sales@metagrowth.ventures', url: 'mailto:sales@metagrowth.ventures' },
  },
  content: `
<section class="page-hero" style="padding-bottom:60px;">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Get In Touch</div>
    <h1 class="hero-title">Let's identify your <span class="accent">revenue growth path</span></h1>
    <p class="hero-sub">Whether you're ready to book a call, have a specific question, or want to explore the right engagement for your company — we'd love to hear from you.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="contact-layout fade-in">
      <div class="contact-form-col">
        <div id="book">
          <span class="section-label">Book a Strategy Call</span>
          <h2 style="margin-bottom:8px;">Talk to the MetaGrowth team</h2>
          <p style="color:var(--gray-600);margin-bottom:36px;">Fill out the form below and a member of the MetaGrowth team will reach out within one business day to schedule your strategy call.</p>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>First Name *</label>
              <input type="text" name="first_name" placeholder="John" required>
            </div>
            <div class="form-group">
              <label>Last Name *</label>
              <input type="text" name="last_name" placeholder="Smith" required>
            </div>
          </div>
          <div class="form-group">
            <label>Work Email *</label>
            <input type="email" name="email" placeholder="john@company.com" required>
          </div>
          <div class="form-group">
            <label>Company *</label>
            <input type="text" name="company" placeholder="Acme Inc." required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Current Annual Revenue</label>
              <select name="revenue">
                <option value="">Select range</option>
                <option>Under $1M</option>
                <option>$1M – $3M</option>
                <option>$3M – $10M</option>
                <option>$10M – $40M</option>
                <option>$40M+</option>
              </select>
            </div>
            <div class="form-group">
              <label>Team Size</label>
              <select name="team_size">
                <option value="">Select size</option>
                <option>Just me (founder)</option>
                <option>2–5 people</option>
                <option>6–20 people</option>
                <option>21–100 people</option>
                <option>100+ people</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Which solution interests you most?</label>
            <select name="solution">
              <option value="">Select a solution</option>
              <option>CEO Growth Lab</option>
              <option>Sales Growth Lab</option>
              <option>HyperLaunch Sales System</option>
              <option>Managed Sales Pods</option>
              <option>Commission-Only Infrastructure</option>
              <option>Recruiting Services</option>
              <option>Fractional CRO</option>
              <option>Precision Engagements</option>
              <option>Not sure — need guidance</option>
            </select>
          </div>
          <div class="form-group">
            <label>Briefly describe your biggest revenue challenge</label>
            <textarea name="challenge" rows="4" placeholder="Tell us what's blocking your revenue growth — founder-led sales, inconsistent pipeline, hiring struggles, etc."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">
            <i class="fas fa-calendar-check"></i> Request a Strategy Call
          </button>
          <p style="font-size:0.8rem;color:var(--gray-400);text-align:center;margin-top:12px;">We'll respond within 1 business day.</p>
          <div id="form-error" style="display:none;background:rgba(220,38,38,0.08);border:1px solid rgba(220,38,38,0.3);border-radius:var(--radius);padding:14px 18px;text-align:center;color:#dc2626;font-size:0.9rem;">
            <i class="fas fa-exclamation-circle"></i> Something went wrong — please try again or email us directly at <a href="mailto:sales@metagrowth.ventures" style="color:#dc2626;font-weight:600;">sales@metagrowth.ventures</a>
          </div>
        </form>
        <div id="form-success" style="display:none;background:rgba(173,120,5,0.08);border:1px solid rgba(173,120,5,0.3);border-radius:var(--radius-lg);padding:36px;text-align:center;margin-top:24px;">
          <i class="fas fa-check-circle" style="color:var(--green);font-size:2.5rem;margin-bottom:16px;display:block;"></i>
          <h3 style="color:var(--navy);margin-bottom:10px;">Thank you! We'll be in touch soon.</h3>
          <p style="color:var(--gray-600);">A MetaGrowth team member will reach out within 1 business day to schedule your strategy call.</p>
        </div>
      </div>
      <div class="contact-info-col">
        <div class="contact-info-box">
          <h4>What to expect on your strategy call</h4>
          <ul class="check-list" style="margin-top:16px;margin-bottom:32px;">
            <li>30–45 minutes with a MetaGrowth advisor</li>
            <li>Honest assessment of your current revenue infrastructure</li>
            <li>Identification of your top 2–3 growth bottlenecks</li>
            <li>Recommended solution path based on your stage</li>
            <li>No pressure. No generic pitch.</li>
          </ul>
          <div class="divider"></div>
          <h4 style="margin-top:0;">Other ways to engage</h4>
          <div class="other-engagements">
            <a href="/assessment" class="oe-item">
              <div class="oe-icon"><i class="fas fa-sitemap"></i></div>
              <div><strong>Take the Assessment</strong><span>Find your recommended solution in 2 minutes</span></div>
            </a>
            <a href="/resources" class="oe-item">
              <div class="oe-icon"><i class="fas fa-download"></i></div>
              <div><strong>Download the Ecosystem Guide</strong><span>Understand every MetaGrowth solution</span></div>
            </a>
            <a href="/case-studies" class="oe-item">
              <div class="oe-icon"><i class="fas fa-chart-bar"></i></div>
              <div><strong>Review Case Studies</strong><span>See real results from real clients</span></div>
            </a>
          </div>
        </div>
        <div class="contact-proof-box">
          <div class="cp-metric"><span class="cp-num">$100M+</span><span class="cp-label">Pipeline Generated</span></div>
          <div class="cp-metric"><span class="cp-num">$16M+</span><span class="cp-label">Revenue Added</span></div>
          <div class="cp-metric"><span class="cp-num">320+</span><span class="cp-label">Clients Added</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');
const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
const errorMsg = document.getElementById('form-error');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Button loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }
    if (errorMsg) errorMsg.style.display = 'none';

    // Gather form data
    const data = {};
    new FormData(form).forEach((val, key) => { data[key] = val; });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-calendar-check"></i> Request a Strategy Call';
      }
      if (errorMsg) errorMsg.style.display = 'block';
    }
  });
}
</script>

<style>
.contact-layout { display: grid; grid-template-columns: 1fr 380px; gap: 64px; align-items: start; }
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 0.875rem; font-weight: 600; color: var(--gray-800); }
.form-group input, .form-group select, .form-group textarea {
  border: 1px solid var(--gray-200); border-radius: var(--radius);
  padding: 12px 16px; font-size: 0.95rem; font-family: var(--font-body);
  color: var(--gray-800); background: var(--white);
  transition: border-color var(--transition); outline: none;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--green); box-shadow: 0 0 0 3px rgba(173,120,5,0.12); }
.form-group textarea { resize: vertical; min-height: 100px; }
.contact-info-box { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 20px; }
.contact-info-box h4 { color: var(--gray-800); margin-bottom: 4px; }
.other-engagements { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
.oe-item { display: flex; align-items: center; gap: 14px; padding: 14px; border: 1px solid var(--gray-200); border-radius: var(--radius); background: var(--white); transition: all var(--transition); }
.oe-item:hover { border-color: var(--green); }
.oe-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1rem; flex-shrink: 0; }
.oe-item div { display: flex; flex-direction: column; gap: 2px; }
.oe-item strong { font-size: 0.875rem; color: var(--gray-800); }
.oe-item span { font-size: 0.78rem; color: var(--gray-400); }
.contact-proof-box { background: var(--navy); border-radius: var(--radius-lg); padding: 28px; display: grid; grid-template-columns: 1fr; gap: 0; }
.cp-metric { padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.08); text-align: center; }
.cp-metric:last-child { border-bottom: none; }
.cp-num { display: block; font-size: 2rem; font-weight: 800; color: var(--green); line-height: 1; margin-bottom: 4px; }
.cp-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em; }
@media (max-width: 1100px) { .contact-layout { grid-template-columns: 1fr; } .contact-info-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; } .contact-proof-box { grid-template-columns: repeat(3, 1fr); } .cp-metric { border-bottom: none; border-right: 1px solid rgba(255,255,255,0.08); } .cp-metric:last-child { border-right: none; } }
@media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } .contact-info-col { grid-template-columns: 1fr; } .contact-proof-box { grid-template-columns: 1fr; } .cp-metric { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; } .cp-metric:last-child { border-bottom: none !important; } }
</style>
` })

// Helpers
function industryCard(icon: string, name: string, bottleneckLabel: string, bottleneck: string, fitLabel: string, fit: string, solutions: string[]) {
  return `<div class="industry-card">
    <div class="ind-header"><div class="ind-icon"><i class="${icon}"></i></div><h3>${name}</h3></div>
    <div class="ind-body">
      <div class="ind-section"><h5>${bottleneckLabel}</h5><p>${bottleneck}</p></div>
      <div class="ind-section"><h5>${fitLabel}</h5><p>${fit}</p></div>
      <div class="ind-services"><h5>Recommended Solutions</h5>${solutions.map(s => `<a href="/solutions" class="ind-service-link">${s}</a>`).join('')}</div>
    </div>
  </div>`
}

// ─── REVENUE SYSTEM AUDIT ─────────────────────────────────────────────────────
export const revenueSystemAuditPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Revenue System Audit™ | MetaGrowth Ventures</title>
  ${aiVisibilityHead({
    path: '/revenue-system-audit',
    title: 'Revenue System Audit',
    description: 'Identify where revenue is leaking inside your sales process. A free 5–7 minute executive diagnostic from MetaGrowth Ventures.',
    llm: {
      pageType: 'diagnostic',
      summary: 'A free 5–7 minute Revenue System Audit™ that identifies where revenue is leaking across the seven stages of a B2B revenue engine: Market & ICP Clarity, Messaging, Pipeline Generation, Qualification, Execution, Pipeline Management, and Optimization.',
      audience: 'B2B founders and revenue leaders who want a quick scored diagnostic before booking a strategy call.',
      outcomes: ['Score your revenue engine across 7 stages', 'See where pipeline is leaking', 'Get a recommended MetaGrowth solution match'],
      keywords: ['revenue system audit', 'sales process audit', 'pipeline diagnostic', 'B2B revenue audit'],
      primaryCta: { label: 'Run the Audit (free, 5–7 minutes)', url: 'https://metagrowth.ventures/revenue-system-audit' },
      secondaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    },
  })}
  <link rel="icon" type="image/png" href="/static/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  ${globalStyles()}
  <style>
    body { background: var(--navy); color: var(--white); padding-top: 68px; }

    /* ── Intro section ── */
    .rsa-intro-section {
      padding: 72px 24px 48px;
      background: linear-gradient(180deg, #0A0A0A 0%, var(--navy) 100%);
      border-bottom: 1px solid rgba(173,120,5,0.12);
      position: relative;
      overflow: hidden;
    }
    .rsa-intro-section::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 800px 400px at 50% 0%, rgba(173,120,5,0.07) 0%, transparent 70%);
      pointer-events: none;
    }
    .rsa-intro-container { max-width: 1120px; margin: 0 auto; position: relative; }
    .rsa-intro-eyebrow {
      display: inline-flex; align-items: center;
      padding: 6px 16px; border-radius: 999px;
      border: 1px solid rgba(173,120,5,0.3);
      color: var(--green); font-size: 0.75rem; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 24px;
    }
    .rsa-intro-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.9fr);
      gap: 48px; align-items: start;
    }
    .rsa-intro-heading {
      margin: 0 0 16px;
      color: var(--white);
      font-size: clamp(2.2rem, 5vw, 3.6rem);
      font-weight: 800; line-height: 1.05; letter-spacing: -0.04em;
    }
    .rsa-intro-heading span { color: var(--green); }
    .rsa-intro-subhead {
      margin: 0 0 20px; color: rgba(255,255,255,0.75);
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      font-weight: 500; line-height: 1.5;
    }
    .rsa-intro-text {
      margin: 0; color: rgba(255,255,255,0.55);
      font-size: 1rem; line-height: 1.8;
    }
    .rsa-intro-text + .rsa-intro-text { margin-top: 14px; }
    .rsa-intro-actions {
      display: flex; align-items: center; gap: 16px;
      flex-wrap: wrap; margin-top: 32px;
    }
    .rsa-intro-meta {
      color: rgba(255,255,255,0.35); font-size: 0.85rem;
    }
    .rsa-intro-panel {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(173,120,5,0.2);
      border-radius: 20px; padding: 28px;
    }
    .rsa-intro-panel-title {
      margin: 0 0 16px; color: var(--green);
      font-size: 0.72rem; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase;
    }
    .rsa-intro-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
    .rsa-intro-list li {
      position: relative; padding-left: 20px;
      color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.6;
    }
    .rsa-intro-list li::before {
      content: ''; position: absolute; left: 0; top: 9px;
      width: 7px; height: 7px; border-radius: 50%; background: var(--green);
    }
    @media (max-width: 900px) {
      .rsa-intro-grid { grid-template-columns: 1fr; gap: 28px; }
    }
    @media (max-width: 640px) {
      .rsa-intro-section { padding: 48px 16px 36px; }
      .rsa-intro-heading { font-size: 2rem; }
    }

    /* ── Assessment styles (same as /assessment) ── */
    .assess-benefits {
      background: var(--navy-mid);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 28px 24px;
    }
    .assess-benefits-inner {
      max-width: 900px; margin: 0 auto;
      display: flex; align-items: center; justify-content: center;
      gap: 36px; flex-wrap: wrap;
    }
    .assess-benefit {
      display: flex; align-items: center; gap: 10px;
      font-size: 0.88rem; color: rgba(255,255,255,0.7); font-weight: 500;
    }
    .assess-benefit i { color: var(--green); }
    .assess-shell { max-width: 780px; margin: 0 auto; padding: 56px 24px 80px; }
    .progress-wrap { margin-bottom: 40px; }
    .progress-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .progress-label { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.45); }
    .progress-step-count { font-size: 0.8rem; color: rgba(255,255,255,0.35); }
    .progress-track { height: 4px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
    .progress-fill { height: 100%; background: var(--green); border-radius: 4px; transition: width 0.4s ease; }
    .progress-steps { display: flex; gap: 6px; margin-top: 14px; }
    .progress-dot { flex: 1; height: 3px; border-radius: 3px; background: rgba(255,255,255,0.1); transition: background 0.3s ease; }
    .progress-dot.done { background: var(--green); }
    .progress-dot.active { background: rgba(173,120,5,0.5); }
    .assess-step { display: none; }
    .assess-step.active { display: block; animation: stepIn 0.3s ease; }
    @keyframes stepIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
    .step-header { margin-bottom: 32px; }
    .step-category { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--green); margin-bottom: 10px; }
    .step-header h2 { font-size: clamp(1.4rem, 3vw, 2rem); color: var(--white); line-height: 1.25; }
    .step-header p { font-size: 0.95rem; color: rgba(255,255,255,0.5); margin-top: 8px; }
    .question-block { margin-bottom: 32px; }
    .question-label { font-size: 1rem; font-weight: 600; color: var(--white); margin-bottom: 14px; line-height: 1.4; }
    .question-label span { display: inline-block; width: 22px; height: 22px; background: rgba(173,120,5,0.15); border: 1px solid rgba(173,120,5,0.3); border-radius: 50%; font-size: 0.72rem; font-weight: 700; color: var(--green); text-align: center; line-height: 22px; margin-right: 8px; }
    .options-grid { display: grid; gap: 10px; }
    .options-grid.cols-2 { grid-template-columns: 1fr 1fr; }
    .option-card { display: flex; align-items: flex-start; gap: 14px; padding: 16px 18px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius); cursor: pointer; transition: all 0.2s ease; position: relative; }
    .option-card:hover { border-color: rgba(173,120,5,0.4); background: rgba(173,120,5,0.05); }
    .option-card.selected { border-color: var(--green); background: rgba(173,120,5,0.1); }
    .option-card input[type="radio"] { position: absolute; opacity: 0; width: 0; height: 0; }
    .option-radio { width: 18px; height: 18px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; }
    .option-card.selected .option-radio { border-color: var(--green); background: var(--green); }
    .option-card.selected .option-radio::after { content: ''; width: 6px; height: 6px; background: var(--navy); border-radius: 50%; }
    .option-text { flex: 1; }
    .option-title { font-size: 0.92rem; font-weight: 600; color: var(--white); line-height: 1.3; }
    .option-sub { font-size: 0.8rem; color: rgba(255,255,255,0.4); margin-top: 2px; line-height: 1.4; }
    .field-group { margin-bottom: 20px; }
    .field-label { display: block; font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.7); margin-bottom: 8px; }
    .field-label .req { color: var(--green); margin-left: 2px; }
    .field-input { width: 100%; padding: 13px 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius); color: var(--white); font-size: 0.95rem; font-family: inherit; transition: border-color 0.2s ease; }
    .field-input:focus { outline: none; border-color: var(--green); background: rgba(173,120,5,0.05); }
    .field-input::placeholder { color: rgba(255,255,255,0.25); }
    .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .checkbox-grid { display: grid; gap: 10px; }
    .checkbox-card { display: flex; align-items: center; gap: 14px; padding: 14px 18px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius); cursor: pointer; transition: all 0.2s ease; }
    .checkbox-card:hover { border-color: rgba(173,120,5,0.4); }
    .checkbox-card.selected { border-color: var(--green); background: rgba(173,120,5,0.08); }
    .checkbox-card input { display: none; }
    .checkbox-box { width: 18px; height: 18px; border-radius: 4px; border: 2px solid rgba(255,255,255,0.2); flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; }
    .checkbox-card.selected .checkbox-box { background: var(--green); border-color: var(--green); }
    .checkbox-card.selected .checkbox-box::after { content: '✓'; font-size: 11px; color: var(--navy); font-weight: 800; }
    .checkbox-text { font-size: 0.92rem; font-weight: 500; color: var(--white); }
    .step-nav { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.07); }
    .btn-back { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: var(--radius); background: transparent; border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: all 0.2s ease; font-family: inherit; }
    .btn-back:hover { border-color: rgba(255,255,255,0.3); color: var(--white); }
    .btn-next { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; border-radius: var(--radius); background: var(--green); color: var(--navy); font-size: 0.95rem; font-weight: 700; cursor: pointer; border: none; font-family: inherit; transition: all 0.2s ease; text-decoration: none; }
    .btn-next:hover { background: var(--green-light); transform: translateY(-1px); }
    .btn-submit { display: inline-flex; align-items: center; gap: 10px; padding: 16px 36px; border-radius: var(--radius); background: var(--green); color: var(--navy); font-size: 1rem; font-weight: 800; cursor: pointer; border: none; font-family: inherit; transition: all 0.2s ease; }
    .btn-submit:hover { background: var(--green-light); transform: translateY(-2px); }
    .validation-msg { font-size: 0.8rem; color: #e05c5c; margin-top: 8px; display: none; }
    .validation-msg.show { display: block; }
    #results-panel { display: none; }
    #results-panel.show { display: block; animation: stepIn 0.5s ease; }
    .results-score-ring { display: flex; flex-direction: column; align-items: center; margin-bottom: 48px; padding: 48px 24px; background: var(--navy-mid); border: 1px solid rgba(173,120,5,0.15); border-radius: var(--radius-lg); text-align: center; }
    .score-ring-wrap { position: relative; width: 160px; height: 160px; margin-bottom: 24px; }
    .score-ring-svg { transform: rotate(-90deg); }
    .score-ring-bg { fill: none; stroke: rgba(255,255,255,0.07); stroke-width: 10; }
    .score-ring-fill { fill: none; stroke: var(--green); stroke-width: 10; stroke-linecap: round; stroke-dasharray: 440; stroke-dashoffset: 440; transition: stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1); }
    .score-ring-inner { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .score-number { font-size: 2.8rem; font-weight: 900; color: var(--white); line-height: 1; }
    .score-label-sm { font-size: 0.75rem; color: rgba(255,255,255,0.4); letter-spacing: 0.08em; text-transform: uppercase; }
    .results-stage-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: 20px; background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.3); font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--green); margin-bottom: 16px; }
    .results-stage-title { font-size: clamp(1.5rem, 3vw, 2rem); color: var(--white); font-weight: 800; margin-bottom: 12px; }
    .results-stage-sub { font-size: 0.95rem; color: rgba(255,255,255,0.55); max-width: 520px; margin: 0 auto; }
    .score-breakdown { background: var(--navy-light); border: 1px solid rgba(255,255,255,0.06); border-radius: var(--radius-lg); padding: 28px; margin-bottom: 28px; }
    .score-breakdown h3 { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
    .score-bar-row { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .score-bar-label { font-size: 0.82rem; font-weight: 600; color: rgba(255,255,255,0.7); width: 160px; flex-shrink: 0; }
    .score-bar-track { flex: 1; height: 6px; background: rgba(255,255,255,0.07); border-radius: 6px; overflow: hidden; }
    .score-bar-fill { height: 100%; border-radius: 6px; background: var(--green); transition: width 1s ease 0.3s; }
    .score-bar-val { font-size: 0.8rem; font-weight: 700; color: var(--green); width: 32px; text-align: right; flex-shrink: 0; }
    .results-section { background: var(--navy-light); border: 1px solid rgba(255,255,255,0.06); border-radius: var(--radius-lg); padding: 28px; margin-bottom: 20px; }
    .results-section-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--green); margin-bottom: 12px; }
    .results-section h3 { font-size: 1.15rem; font-weight: 700; color: var(--white); margin-bottom: 10px; }
    .results-section p { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.7; }
    .gaps-list { list-style: none; margin-top: 14px; }
    .gaps-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: rgba(255,255,255,0.65); padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .gaps-list li:last-child { border-bottom: none; }
    .gaps-list li::before { content: '⚠'; font-size: 0.8rem; color: #e09a3a; flex-shrink: 0; margin-top: 2px; }
    .rec-path-grid { display: grid; gap: 12px; margin-top: 14px; }
    .rec-path-card { display: flex; align-items: flex-start; gap: 16px; padding: 18px; background: rgba(173,120,5,0.05); border: 1px solid rgba(173,120,5,0.2); border-radius: var(--radius); transition: all 0.2s ease; text-decoration: none; }
    .rec-path-card:hover { border-color: var(--green); background: rgba(173,120,5,0.1); transform: translateX(4px); }
    .rec-path-icon { width: 36px; height: 36px; border-radius: var(--radius); background: rgba(173,120,5,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .rec-path-icon i { color: var(--green); font-size: 0.9rem; }
    .rec-path-body { flex: 1; }
    .rec-path-name { font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 3px; }
    .rec-path-desc { font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.4; }
    .rec-path-arrow { color: var(--green); font-size: 0.85rem; margin-top: 4px; }
    .rec-primary-badge { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: var(--green); color: var(--navy); padding: 2px 7px; border-radius: 4px; margin-left: 8px; vertical-align: middle; }
    .results-cta-block { text-align: center; padding: 48px 32px; background: linear-gradient(135deg, #0A0A0A 0%, #1a1410 100%); border: 1px solid rgba(173,120,5,0.2); border-radius: var(--radius-lg); margin-top: 32px; }
    .results-cta-block h2 { color: var(--white); font-size: clamp(1.4rem, 3vw, 2rem); margin-bottom: 12px; }
    .results-cta-block p { color: rgba(255,255,255,0.55); max-width: 480px; margin: 0 auto 28px; font-size: 0.95rem; }
    .results-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-outline-gold { display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: var(--radius); border: 1px solid rgba(173,120,5,0.4); color: var(--green); font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease; background: transparent; font-family: inherit; text-decoration: none; }
    .btn-outline-gold:hover { background: rgba(173,120,5,0.08); border-color: var(--green); }
    .btn-restart { display: inline-flex; align-items: center; gap: 6px; font-size: 0.82rem; color: rgba(255,255,255,0.3); background: none; border: none; cursor: pointer; font-family: inherit; margin-top: 20px; transition: color 0.2s ease; }
    .btn-restart:hover { color: rgba(255,255,255,0.6); }
    .proof-strip { background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 28px 24px; }
    .proof-strip-inner { max-width: 900px; margin: 0 auto; display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; }
    .proof-metric { text-align: center; }
    .proof-metric strong { display: block; font-size: 1.6rem; font-weight: 900; color: var(--green); line-height: 1; }
    .proof-metric span { font-size: 0.75rem; color: rgba(255,255,255,0.35); letter-spacing: 0.05em; margin-top: 4px; display: block; }
    @media (max-width: 640px) {
      .field-row { grid-template-columns: 1fr; }
      .options-grid.cols-2 { grid-template-columns: 1fr; }
      .step-nav { flex-direction: column-reverse; gap: 12px; }
      .btn-back, .btn-next, .btn-submit { width: 100%; justify-content: center; }
      .score-bar-label { width: 110px; font-size: 0.75rem; }
      .results-cta-btns { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>
${nav()}

<!-- INTRO SECTION -->
<section class="rsa-intro-section">
  <div class="rsa-intro-container">
    <div class="rsa-intro-eyebrow"><i class="fas fa-search-dollar" style="margin-right:6px;"></i> MetaGrowth Ventures</div>
    <div class="rsa-intro-grid">
      <div>
        <h1 class="rsa-intro-heading">Revenue System<br><span>Audit™</span></h1>
        <p class="rsa-intro-subhead">Identify where revenue is leaking inside your sales process.</p>
        <p class="rsa-intro-text">Most businesses assume stalled growth is a lead problem. In reality, revenue is often being lost inside the system long before more leads, more marketing, or more headcount will solve it.</p>
        <p class="rsa-intro-text">This assessment helps you identify where opportunities are slipping, which parts of the sales process are underperforming, and what those gaps may be costing the business each month.</p>
        <div class="rsa-intro-actions">
          <button class="btn-next" onclick="document.getElementById('assessment-anchor').scrollIntoView({behavior:'smooth',block:'start'})">
            Run the Revenue System Audit <i class="fas fa-arrow-down"></i>
          </button>
          <div class="rsa-intro-meta">5–7 minutes &nbsp;·&nbsp; Executive diagnostic &nbsp;·&nbsp; Mobile-friendly</div>
        </div>
      </div>
      <div class="rsa-intro-panel">
        <div class="rsa-intro-panel-title">What this assesses</div>
        <ul class="rsa-intro-list">
          <li>Lead flow consistency</li>
          <li>Conversion performance</li>
          <li>Sales cycle efficiency</li>
          <li>Follow-up discipline</li>
          <li>CRM and process integrity</li>
          <li>Team execution and accountability</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- BENEFITS STRIP -->
<div class="assess-benefits">
  <div class="assess-benefits-inner">
    <div class="assess-benefit"><i class="fas fa-check-circle"></i> Clear diagnosis of your sales system</div>
    <div class="assess-benefit"><i class="fas fa-check-circle"></i> Identification of your biggest bottleneck</div>
    <div class="assess-benefit"><i class="fas fa-check-circle"></i> Recommended growth path</div>
    <div class="assess-benefit"><i class="fas fa-check-circle"></i> Strategic next steps — no sales pressure</div>
  </div>
</div>

<!-- ASSESSMENT SHELL -->
<div class="assess-shell" id="assessment-anchor">
  <div class="progress-wrap" id="progress-wrap">
    <div class="progress-meta">
      <span class="progress-label" id="progress-label">Company Profile</span>
      <span class="progress-step-count" id="progress-count">Step 1 of 6</span>
    </div>
    <div class="progress-track"><div class="progress-fill" id="progress-fill" style="width:16.66%"></div></div>
    <div class="progress-steps" id="progress-dots"></div>
  </div>

  <!-- STEP 1 -->
  <div class="assess-step active" id="step-1">
    <div class="step-header">
      <div class="step-category">Section 1 of 6 — Company Profile</div>
      <h2>Let's start with the basics</h2>
      <p>This helps us calibrate your results to your actual situation.</p>
    </div>
    <div class="field-row">
      <div class="field-group"><label class="field-label">First Name <span class="req">*</span></label><input type="text" class="field-input" id="q-first-name" placeholder="Your first name"></div>
      <div class="field-group"><label class="field-label">Last Name <span class="req">*</span></label><input type="text" class="field-input" id="q-last-name" placeholder="Your last name"></div>
    </div>
    <div class="field-row">
      <div class="field-group"><label class="field-label">Company Name <span class="req">*</span></label><input type="text" class="field-input" id="q-company" placeholder="Your company"></div>
      <div class="field-group"><label class="field-label">Your Role <span class="req">*</span></label><input type="text" class="field-input" id="q-role" placeholder="CEO, VP Sales, Founder…"></div>
    </div>
    <div class="field-group"><label class="field-label">Email <span class="req">*</span></label><input type="email" class="field-input" id="q-email" placeholder="you@company.com"></div>
    <div class="question-block" style="margin-top:28px;">
      <div class="question-label"><span>1</span> What is your current annual revenue?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="rs"><input type="radio" name="rs" value="10"><div class="option-radio"></div><div class="option-text"><div class="option-title">Under $1M</div><div class="option-sub">Pre-revenue or early-stage</div></div></label>
        <label class="option-card" data-group="rs"><input type="radio" name="rs" value="25"><div class="option-radio"></div><div class="option-text"><div class="option-title">$1M – $3M</div><div class="option-sub">Early traction, growing team</div></div></label>
        <label class="option-card" data-group="rs"><input type="radio" name="rs" value="60"><div class="option-radio"></div><div class="option-text"><div class="option-title">$3M – $10M</div><div class="option-sub">Established, scaling challenges</div></div></label>
        <label class="option-card" data-group="rs"><input type="radio" name="rs" value="90"><div class="option-radio"></div><div class="option-text"><div class="option-title">$10M – $40M+</div><div class="option-sub">Scale-stage, leadership complexity</div></div></label>
      </div>
    </div>
    <div class="validation-msg" id="val-1">Please fill out all required fields and select your revenue range.</div>
    <div class="step-nav"><div></div><button class="btn-next" onclick="nextStep(1)">Continue <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 2 -->
  <div class="assess-step" id="step-2">
    <div class="step-header">
      <div class="step-category">Section 2 of 6 — Pipeline Maturity</div>
      <h2>How predictable is your pipeline?</h2>
      <p>Pipeline visibility is often the first signal of infrastructure health.</p>
    </div>
    <div class="question-block">
      <div class="question-label"><span>2</span> How would you describe your current pipeline?</div>
      <div class="options-grid">
        <label class="option-card" data-group="pm"><input type="radio" name="pm" value="10"><div class="option-radio"></div><div class="option-text"><div class="option-title">Inconsistent — feast or famine</div><div class="option-sub">Revenue varies wildly month to month</div></div></label>
        <label class="option-card" data-group="pm"><input type="radio" name="pm" value="40"><div class="option-radio"></div><div class="option-text"><div class="option-title">Somewhat consistent</div><div class="option-sub">Some months are strong but I can't reliably predict the next 90 days</div></div></label>
        <label class="option-card" data-group="pm"><input type="radio" name="pm" value="70"><div class="option-radio"></div><div class="option-text"><div class="option-title">Mostly predictable</div><div class="option-sub">I have a reasonable sense of what's coming but forecasting isn't airtight</div></div></label>
        <label class="option-card" data-group="pm"><input type="radio" name="pm" value="90"><div class="option-radio"></div><div class="option-text"><div class="option-title">Highly predictable</div><div class="option-sub">Strong pipeline visibility and disciplined stage-by-stage forecasting</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>3</span> How do most new clients come in today?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="pipeline-source"><input type="radio" name="pipeline-source" value="referral"><div class="option-radio"></div><div class="option-text"><div class="option-title">Referrals only</div></div></label>
        <label class="option-card" data-group="pipeline-source"><input type="radio" name="pipeline-source" value="outbound"><div class="option-radio"></div><div class="option-text"><div class="option-title">Outbound prospecting</div></div></label>
        <label class="option-card" data-group="pipeline-source"><input type="radio" name="pipeline-source" value="inbound"><div class="option-radio"></div><div class="option-text"><div class="option-title">Inbound / marketing</div></div></label>
        <label class="option-card" data-group="pipeline-source"><input type="radio" name="pipeline-source" value="mixed"><div class="option-radio"></div><div class="option-text"><div class="option-title">Mix of channels</div></div></label>
      </div>
    </div>
    <div class="validation-msg" id="val-2">Please answer both questions before continuing.</div>
    <div class="step-nav"><button class="btn-back" onclick="prevStep(2)"><i class="fas fa-arrow-left"></i> Back</button><button class="btn-next" onclick="nextStep(2)">Continue <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 3 -->
  <div class="assess-step" id="step-3">
    <div class="step-header">
      <div class="step-category">Section 3 of 6 — Sales Infrastructure</div>
      <h2>What's under the hood of your sales operation?</h2>
      <p>Infrastructure gaps are the most common — and most fixable — root cause of inconsistent growth.</p>
    </div>
    <div class="question-block">
      <div class="question-label"><span>4</span> How would you describe your current sales process?</div>
      <div class="options-grid">
        <label class="option-card" data-group="si"><input type="radio" name="si" value="10"><div class="option-radio"></div><div class="option-text"><div class="option-title">No defined process</div><div class="option-sub">Every deal is handled differently</div></div></label>
        <label class="option-card" data-group="si"><input type="radio" name="si" value="35"><div class="option-radio"></div><div class="option-text"><div class="option-title">Informal / partially documented</div><div class="option-sub">Some steps are understood but no written playbook</div></div></label>
        <label class="option-card" data-group="si"><input type="radio" name="si" value="65"><div class="option-radio"></div><div class="option-text"><div class="option-title">Documented but inconsistently followed</div><div class="option-sub">A process exists but reps don't consistently follow it</div></div></label>
        <label class="option-card" data-group="si"><input type="radio" name="si" value="90"><div class="option-radio"></div><div class="option-text"><div class="option-title">Fully defined and enforced</div><div class="option-sub">Clear stages, KPIs, and accountability built into CRM</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>5</span> How is your CRM currently used?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="crm"><input type="radio" name="crm" value="none"><div class="option-radio"></div><div class="option-text"><div class="option-title">We don't use one</div></div></label>
        <label class="option-card" data-group="crm"><input type="radio" name="crm" value="basic"><div class="option-radio"></div><div class="option-text"><div class="option-title">Basic contact storage only</div></div></label>
        <label class="option-card" data-group="crm"><input type="radio" name="crm" value="partial"><div class="option-radio"></div><div class="option-text"><div class="option-title">Some reps use it, some don't</div></div></label>
        <label class="option-card" data-group="crm"><input type="radio" name="crm" value="full"><div class="option-radio"></div><div class="option-text"><div class="option-title">Full pipeline tracking + reporting</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>6</span> Do you have defined KPIs and rep accountability metrics?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="kpi"><input type="radio" name="kpi" value="none"><div class="option-radio"></div><div class="option-text"><div class="option-title">No — we track revenue only</div></div></label>
        <label class="option-card" data-group="kpi"><input type="radio" name="kpi" value="informal"><div class="option-radio"></div><div class="option-text"><div class="option-title">Informal targets exist</div></div></label>
        <label class="option-card" data-group="kpi"><input type="radio" name="kpi" value="partial"><div class="option-radio"></div><div class="option-text"><div class="option-title">Some KPIs, inconsistently reviewed</div></div></label>
        <label class="option-card" data-group="kpi"><input type="radio" name="kpi" value="full"><div class="option-radio"></div><div class="option-text"><div class="option-title">Full KPI dashboard, reviewed weekly</div></div></label>
      </div>
    </div>
    <div class="validation-msg" id="val-3">Please answer all questions in this section.</div>
    <div class="step-nav"><button class="btn-back" onclick="prevStep(3)"><i class="fas fa-arrow-left"></i> Back</button><button class="btn-next" onclick="nextStep(3)">Continue <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 4 -->
  <div class="assess-step" id="step-4">
    <div class="step-header">
      <div class="step-category">Section 4 of 6 — Talent &amp; Team</div>
      <h2>Tell us about your sales team</h2>
      <p>Talent density and hiring quality directly determine your execution ceiling.</p>
    </div>
    <div class="question-block">
      <div class="question-label"><span>7</span> How many dedicated salespeople do you currently have?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="team-size"><input type="radio" name="team-size" value="0"><div class="option-radio"></div><div class="option-text"><div class="option-title">None — it's just me</div><div class="option-sub">Founder-led sales</div></div></label>
        <label class="option-card" data-group="team-size"><input type="radio" name="team-size" value="1-3"><div class="option-radio"></div><div class="option-text"><div class="option-title">1–3 reps</div><div class="option-sub">Small early team</div></div></label>
        <label class="option-card" data-group="team-size"><input type="radio" name="team-size" value="4-10"><div class="option-radio"></div><div class="option-text"><div class="option-title">4–10 reps</div><div class="option-sub">Growing team</div></div></label>
        <label class="option-card" data-group="team-size"><input type="radio" name="team-size" value="10+"><div class="option-radio"></div><div class="option-text"><div class="option-title">10+ reps</div><div class="option-sub">Established team</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>8</span> How would you rate your overall sales hiring success?</div>
      <div class="options-grid">
        <label class="option-card" data-group="tt"><input type="radio" name="tt" value="10"><div class="option-radio"></div><div class="option-text"><div class="option-title">Mostly failed hires</div><div class="option-sub">High turnover, underperforming reps, expensive mistakes</div></div></label>
        <label class="option-card" data-group="tt"><input type="radio" name="tt" value="40"><div class="option-radio"></div><div class="option-text"><div class="option-title">Mixed results</div><div class="option-sub">Some good hires, some bad — inconsistent vetting</div></div></label>
        <label class="option-card" data-group="tt"><input type="radio" name="tt" value="65"><div class="option-radio"></div><div class="option-text"><div class="option-title">Mostly solid hires</div><div class="option-sub">More hits than misses but ramp could be stronger</div></div></label>
        <label class="option-card" data-group="tt"><input type="radio" name="tt" value="90"><div class="option-radio"></div><div class="option-text"><div class="option-title">Strong hiring track record</div><div class="option-sub">Structured vetting, fast ramp, high retention</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>9</span> Are you currently trying to hire salespeople or planning to in the next 90 days?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="hiring-flag"><input type="radio" name="hiring-flag" value="yes-now"><div class="option-radio"></div><div class="option-text"><div class="option-title">Yes — actively hiring now</div></div></label>
        <label class="option-card" data-group="hiring-flag"><input type="radio" name="hiring-flag" value="yes-soon"><div class="option-radio"></div><div class="option-text"><div class="option-title">Yes — planning in next 90 days</div></div></label>
        <label class="option-card" data-group="hiring-flag"><input type="radio" name="hiring-flag" value="maybe"><div class="option-radio"></div><div class="option-text"><div class="option-title">Maybe — depends on results</div></div></label>
        <label class="option-card" data-group="hiring-flag"><input type="radio" name="hiring-flag" value="no"><div class="option-radio"></div><div class="option-text"><div class="option-title">No — not right now</div></div></label>
      </div>
    </div>
    <div class="validation-msg" id="val-4">Please answer all questions in this section.</div>
    <div class="step-nav"><button class="btn-back" onclick="prevStep(4)"><i class="fas fa-arrow-left"></i> Back</button><button class="btn-next" onclick="nextStep(4)">Continue <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 5 -->
  <div class="assess-step" id="step-5">
    <div class="step-header">
      <div class="step-category">Section 5 of 6 — Leadership &amp; Execution</div>
      <h2>Who owns revenue in your business?</h2>
      <p>Leadership structure is the single biggest driver of forecast accuracy and execution quality.</p>
    </div>
    <div class="question-block">
      <div class="question-label"><span>10</span> Who currently leads your sales effort?</div>
      <div class="options-grid">
        <label class="option-card" data-group="le"><input type="radio" name="le" value="15"><div class="option-radio"></div><div class="option-text"><div class="option-title">Founder / CEO — it's mostly me</div><div class="option-sub">Revenue depends on my personal relationships and involvement</div></div></label>
        <label class="option-card" data-group="le"><input type="radio" name="le" value="40"><div class="option-radio"></div><div class="option-text"><div class="option-title">Shared between founders and a few reps</div><div class="option-sub">No single owner — accountability is distributed and fuzzy</div></div></label>
        <label class="option-card" data-group="le"><input type="radio" name="le" value="65"><div class="option-radio"></div><div class="option-text"><div class="option-title">Sales manager or team lead</div><div class="option-sub">Someone manages but lacks VP/CRO-level strategic authority</div></div></label>
        <label class="option-card" data-group="le"><input type="radio" name="le" value="90"><div class="option-radio"></div><div class="option-text"><div class="option-title">VP of Sales or CRO</div><div class="option-sub">Dedicated revenue executive with full ownership</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>11</span> How often does your team meet for structured sales reviews?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="cadence"><input type="radio" name="cadence" value="never"><div class="option-radio"></div><div class="option-text"><div class="option-title">Rarely or never</div></div></label>
        <label class="option-card" data-group="cadence"><input type="radio" name="cadence" value="monthly"><div class="option-radio"></div><div class="option-text"><div class="option-title">Monthly</div></div></label>
        <label class="option-card" data-group="cadence"><input type="radio" name="cadence" value="weekly"><div class="option-radio"></div><div class="option-text"><div class="option-title">Weekly</div></div></label>
        <label class="option-card" data-group="cadence"><input type="radio" name="cadence" value="daily"><div class="option-radio"></div><div class="option-text"><div class="option-title">Daily / multiple times a week</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>12</span> Do you feel bandwidth constraints are limiting growth?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="bandwidth-flag"><input type="radio" name="bandwidth-flag" value="yes-major"><div class="option-radio"></div><div class="option-text"><div class="option-title">Yes — major bandwidth constraint</div><div class="option-sub">We need execution support urgently</div></div></label>
        <label class="option-card" data-group="bandwidth-flag"><input type="radio" name="bandwidth-flag" value="yes-some"><div class="option-radio"></div><div class="option-text"><div class="option-title">Somewhat — stretched thin</div><div class="option-sub">Managing but not sustainable</div></div></label>
        <label class="option-card" data-group="bandwidth-flag"><input type="radio" name="bandwidth-flag" value="no"><div class="option-radio"></div><div class="option-text"><div class="option-title">No — capacity isn't the issue</div><div class="option-sub">The issue is quality, not volume</div></div></label>
        <label class="option-card" data-group="bandwidth-flag"><input type="radio" name="bandwidth-flag" value="unsure"><div class="option-radio"></div><div class="option-text"><div class="option-title">Not sure — hard to tell</div></div></label>
      </div>
    </div>
    <div class="validation-msg" id="val-5">Please answer all questions in this section.</div>
    <div class="step-nav"><button class="btn-back" onclick="prevStep(5)"><i class="fas fa-arrow-left"></i> Back</button><button class="btn-next" onclick="nextStep(5)">Continue <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 6 -->
  <div class="assess-step" id="step-6">
    <div class="step-header">
      <div class="step-category">Section 6 of 6 — Goals &amp; Priorities</div>
      <h2>What does success look like for you?</h2>
      <p>Tell us what you're trying to fix and we'll match you to the right path.</p>
    </div>
    <div class="question-block">
      <div class="question-label"><span>13</span> What is your primary growth goal over the next 12 months?</div>
      <div class="options-grid">
        <label class="option-card" data-group="goal"><input type="radio" name="goal" value="pipeline"><div class="option-radio"></div><div class="option-text"><div class="option-title">Build a reliable, predictable pipeline</div><div class="option-sub">Stop relying on referrals and word of mouth</div></div></label>
        <label class="option-card" data-group="goal"><input type="radio" name="goal" value="system"><div class="option-radio"></div><div class="option-text"><div class="option-title">Install a proper sales operating system</div><div class="option-sub">Process, CRM, KPIs, forecasting, accountability</div></div></label>
        <label class="option-card" data-group="goal"><input type="radio" name="goal" value="team"><div class="option-radio"></div><div class="option-text"><div class="option-title">Build and scale the right sales team</div><div class="option-sub">Hire better, ramp faster, retain longer</div></div></label>
        <label class="option-card" data-group="goal"><input type="radio" name="goal" value="leadership"><div class="option-radio"></div><div class="option-text"><div class="option-title">Install revenue leadership</div><div class="option-sub">Someone who owns outcomes, not just reports on them</div></div></label>
        <label class="option-card" data-group="goal"><input type="radio" name="goal" value="execution"><div class="option-radio"></div><div class="option-text"><div class="option-title">Outsource or augment execution</div><div class="option-sub">Done-for-you sales motion without building everything internally</div></div></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>14</span> What is your biggest obstacle to growth right now? <em style="color:rgba(255,255,255,0.3);font-weight:400;font-style:normal;">(select all that apply)</em></div>
      <div class="checkbox-grid">
        <label class="checkbox-card"><input type="checkbox" name="obstacles" value="no-process"><div class="checkbox-box"></div><span class="checkbox-text">No repeatable sales process or playbook</span></label>
        <label class="checkbox-card"><input type="checkbox" name="obstacles" value="bad-hires"><div class="checkbox-box"></div><span class="checkbox-text">Failed or underperforming sales hires</span></label>
        <label class="checkbox-card"><input type="checkbox" name="obstacles" value="founder-dep"><div class="checkbox-box"></div><span class="checkbox-text">Revenue depends too heavily on me (founder dependency)</span></label>
        <label class="checkbox-card"><input type="checkbox" name="obstacles" value="no-pipeline"><div class="checkbox-box"></div><span class="checkbox-text">Inconsistent pipeline — can't forecast revenue</span></label>
        <label class="checkbox-card"><input type="checkbox" name="obstacles" value="no-leadership"><div class="checkbox-box"></div><span class="checkbox-text">No dedicated sales leadership or accountability structure</span></label>
        <label class="checkbox-card"><input type="checkbox" name="obstacles" value="bandwidth"><div class="checkbox-box"></div><span class="checkbox-text">Not enough bandwidth to execute consistently</span></label>
        <label class="checkbox-card"><input type="checkbox" name="obstacles" value="crm-mess"><div class="checkbox-box"></div><span class="checkbox-text">CRM and reporting not set up or being used</span></label>
      </div>
    </div>
    <div class="question-block">
      <div class="question-label"><span>15</span> How quickly are you looking to make a change?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="urgency"><input type="radio" name="urgency" value="now"><div class="option-radio"></div><div class="option-text"><div class="option-title">Now — this is urgent</div></div></label>
        <label class="option-card" data-group="urgency"><input type="radio" name="urgency" value="90days"><div class="option-radio"></div><div class="option-text"><div class="option-title">Within the next 90 days</div></div></label>
        <label class="option-card" data-group="urgency"><input type="radio" name="urgency" value="planning"><div class="option-radio"></div><div class="option-text"><div class="option-title">Planning for next quarter</div></div></label>
        <label class="option-card" data-group="urgency"><input type="radio" name="urgency" value="exploring"><div class="option-radio"></div><div class="option-text"><div class="option-title">Exploring options right now</div></div></label>
      </div>
    </div>
    <div class="validation-msg" id="val-6">Please answer all required questions.</div>
    <div class="step-nav"><button class="btn-back" onclick="prevStep(6)"><i class="fas fa-arrow-left"></i> Back</button><button class="btn-submit" onclick="submitAssessment()"><i class="fas fa-chart-bar"></i> Get My Results</button></div>
  </div>

  <!-- RESULTS -->
  <div id="results-panel">
    <div class="results-score-ring">
      <div class="score-ring-wrap">
        <svg class="score-ring-svg" width="160" height="160" viewBox="0 0 160 160">
          <circle class="score-ring-bg" cx="80" cy="80" r="70"/>
          <circle class="score-ring-fill" id="score-ring-fill" cx="80" cy="80" r="70"/>
        </svg>
        <div class="score-ring-inner"><div class="score-number" id="score-display">0</div><div class="score-label-sm">out of 100</div></div>
      </div>
      <div class="results-stage-badge" id="results-badge"><i class="fas fa-map-marker-alt"></i> Calculating…</div>
      <div class="results-stage-title" id="results-stage-title">–</div>
      <div class="results-stage-sub" id="results-stage-sub">–</div>
    </div>
    <div class="score-breakdown">
      <h3>Score Breakdown by Category</h3>
      <div class="score-bar-row"><div class="score-bar-label">Revenue Stage</div><div class="score-bar-track"><div class="score-bar-fill" id="bar-rs" style="width:0%"></div></div><div class="score-bar-val" id="val-rs">–</div></div>
      <div class="score-bar-row"><div class="score-bar-label">Pipeline Maturity</div><div class="score-bar-track"><div class="score-bar-fill" id="bar-pm" style="width:0%"></div></div><div class="score-bar-val" id="val-pm">–</div></div>
      <div class="score-bar-row"><div class="score-bar-label">Sales Infrastructure</div><div class="score-bar-track"><div class="score-bar-fill" id="bar-si" style="width:0%"></div></div><div class="score-bar-val" id="val-si">–</div></div>
      <div class="score-bar-row"><div class="score-bar-label">Talent &amp; Team</div><div class="score-bar-track"><div class="score-bar-fill" id="bar-tt" style="width:0%"></div></div><div class="score-bar-val" id="val-tt">–</div></div>
      <div class="score-bar-row"><div class="score-bar-label">Leadership &amp; Execution</div><div class="score-bar-track"><div class="score-bar-fill" id="bar-le" style="width:0%"></div></div><div class="score-bar-val" id="val-le">–</div></div>
    </div>
    <div class="results-section"><div class="results-section-label">Your Diagnosis</div><h3 id="results-diagnosis-title">–</h3><p id="results-diagnosis-body">–</p></div>
    <div class="results-section"><div class="results-section-label">Key Gaps Identified</div><ul class="gaps-list" id="results-gaps"></ul></div>
    <div class="results-section"><div class="results-section-label">Your Recommended Growth Path</div><h3 style="margin-bottom:6px;" id="results-path-title">–</h3><p style="margin-bottom:16px;" id="results-path-body">–</p><div class="rec-path-grid" id="results-rec-cards"></div></div>
    <div class="results-cta-block">
      <h2>Ready to fix this?</h2>
      <p id="results-cta-body">Book a strategy call and we'll walk through your results together and map the exact path forward.</p>
      <div class="results-cta-btns">
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn-next" style="text-decoration:none;"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
        <a href="/solutions" class="btn-outline-gold">Explore Solutions <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
    <div style="text-align:center;"><button class="btn-restart" onclick="restartAssessment()"><i class="fas fa-redo"></i> Retake the Assessment</button></div>
  </div>
</div>

<div class="proof-strip">
  <div class="proof-strip-inner">
    <div class="proof-metric"><strong>$100M+</strong><span>Pipeline Generated</span></div>
    <div class="proof-metric"><strong>11,000+</strong><span>Booked Meetings</span></div>
    <div class="proof-metric"><strong>320+</strong><span>Clients Added</span></div>
    <div class="proof-metric"><strong>75,000+</strong><span>Outreaches</span></div>
    <div class="proof-metric"><strong>$16M+</strong><span>Revenue Added</span></div>
  </div>
</div>

${footer()}

<script>
let currentStep=1;const totalSteps=6;const stepLabels=['Company Profile','Pipeline Maturity','Sales Infrastructure','Talent & Team','Leadership & Execution','Goals & Priorities'];
document.addEventListener('DOMContentLoaded',()=>{buildProgressDots();updateProgress(1);initOptionCards();initCheckboxCards();});
function buildProgressDots(){const c=document.getElementById('progress-dots');c.innerHTML='';for(let i=1;i<=totalSteps;i++){const d=document.createElement('div');d.className='progress-dot';d.id='dot-'+i;c.appendChild(d);}}
function updateProgress(step){const pct=(step/totalSteps)*100;document.getElementById('progress-fill').style.width=pct+'%';document.getElementById('progress-label').textContent=stepLabels[step-1];document.getElementById('progress-count').textContent='Step '+step+' of '+totalSteps;for(let i=1;i<=totalSteps;i++){const d=document.getElementById('dot-'+i);d.className='progress-dot'+(i<step?' done':i===step?' active':'');}}
function initOptionCards(){document.querySelectorAll('.option-card input[type="radio"]').forEach(r=>{r.addEventListener('change',()=>{document.querySelectorAll('.option-card input[name="'+r.name+'"]').forEach(x=>x.closest('.option-card').classList.remove('selected'));r.closest('.option-card').classList.add('selected');});});document.querySelectorAll('.option-card').forEach(card=>{card.addEventListener('click',(e)=>{const r=card.querySelector('input[type="radio"]');if(!r||e.target===r)return;r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}));});});}
function initCheckboxCards(){document.querySelectorAll('.checkbox-card input[type="checkbox"]').forEach(cb=>{cb.addEventListener('change',()=>{cb.closest('.checkbox-card').classList.toggle('selected',cb.checked);});});document.querySelectorAll('.checkbox-card').forEach(card=>{card.addEventListener('click',(e)=>{const cb=card.querySelector('input[type="checkbox"]');if(!cb||e.target===cb)return;cb.checked=!cb.checked;cb.dispatchEvent(new Event('change',{bubbles:true}));});});}
function validateStep(step){if(step===1){const fn=document.getElementById('q-first-name').value.trim(),ln=document.getElementById('q-last-name').value.trim(),co=document.getElementById('q-company').value.trim(),ro=document.getElementById('q-role').value.trim(),em=document.getElementById('q-email').value.trim(),rs=document.querySelector('input[name="rs"]:checked');if(!fn||!ln||!co||!ro||!em||!rs){document.getElementById('val-1').classList.add('show');return false;}document.getElementById('val-1').classList.remove('show');return true;}if(step===2){const pm=document.querySelector('input[name="pm"]:checked'),ps=document.querySelector('input[name="pipeline-source"]:checked');if(!pm||!ps){document.getElementById('val-2').classList.add('show');return false;}document.getElementById('val-2').classList.remove('show');return true;}if(step===3){const si=document.querySelector('input[name="si"]:checked'),crm=document.querySelector('input[name="crm"]:checked'),kpi=document.querySelector('input[name="kpi"]:checked');if(!si||!crm||!kpi){document.getElementById('val-3').classList.add('show');return false;}document.getElementById('val-3').classList.remove('show');return true;}if(step===4){const ts=document.querySelector('input[name="team-size"]:checked'),tt=document.querySelector('input[name="tt"]:checked'),hf=document.querySelector('input[name="hiring-flag"]:checked');if(!ts||!tt||!hf){document.getElementById('val-4').classList.add('show');return false;}document.getElementById('val-4').classList.remove('show');return true;}if(step===5){const le=document.querySelector('input[name="le"]:checked'),ca=document.querySelector('input[name="cadence"]:checked'),bw=document.querySelector('input[name="bandwidth-flag"]:checked');if(!le||!ca||!bw){document.getElementById('val-5').classList.add('show');return false;}document.getElementById('val-5').classList.remove('show');return true;}if(step===6){const goal=document.querySelector('input[name="goal"]:checked'),urg=document.querySelector('input[name="urgency"]:checked');if(!goal||!urg){document.getElementById('val-6').classList.add('show');return false;}document.getElementById('val-6').classList.remove('show');return true;}return true;}
function nextStep(from){if(!validateStep(from))return;document.getElementById('step-'+from).classList.remove('active');currentStep=from+1;document.getElementById('step-'+currentStep).classList.add('active');updateProgress(currentStep);window.scrollTo({top:document.getElementById('assessment-anchor').offsetTop-80,behavior:'smooth'});}
function prevStep(from){document.getElementById('step-'+from).classList.remove('active');currentStep=from-1;document.getElementById('step-'+currentStep).classList.add('active');updateProgress(currentStep);window.scrollTo({top:document.getElementById('assessment-anchor').offsetTop-80,behavior:'smooth'});}
function getScore(name){const el=document.querySelector('input[name="'+name+'"]:checked');return el?parseInt(el.value)||0:0;}
function getVal(name){const el=document.querySelector('input[name="'+name+'"]:checked');return el?el.value:'';}
function getChecked(name){return Array.from(document.querySelectorAll('input[name="'+name+'"]:checked')).map(el=>el.value);}
function calculateScore(){const rs=getScore('rs'),pm=getScore('pm'),si=getScore('si'),tt=getScore('tt'),le=getScore('le');const weighted=(rs*0.15)+(pm*0.20)+(si*0.25)+(tt*0.20)+(le*0.20);const final=Math.round(weighted);const hiringFlag=getVal('hiring-flag'),bandwidthFlag=getVal('bandwidth-flag'),obstacles=getChecked('obstacles'),goal=getVal('goal');const hiringOverride=['yes-now','yes-soon'].includes(hiringFlag)||obstacles.includes('bad-hires');const bandwidthOverride=['yes-major','yes-some'].includes(bandwidthFlag)||obstacles.includes('bandwidth');return{final,rs,pm,si,tt,le,hiringOverride,bandwidthOverride,goal,obstacles};}
const outcomes={stage0:{badge:'Stage: Founder-Led / No Infrastructure',title:'Revenue is entirely dependent on you',sub:'No system exists beneath the sales effort. Growth means working more hours — not smarter infrastructure.',diagTitle:'Founder Dependency Bottleneck',diagBody:'Your revenue engine is running on personal relationships and raw hustle. That is not a scalable system — it is a ceiling. Every dollar of growth requires more of your time, and the business cannot operate, hire into, or forecast without you at the center of every deal.',gaps:['No repeatable sales process or playbook — every deal is ad hoc','No CRM discipline or pipeline visibility','ICP and messaging are undefined or inconsistent','Cannot delegate or transition any part of the sales motion','Revenue stalls when your capacity does'],pathTitle:'Build the infrastructure first.',pathBody:'Before hiring, before scaling outreach — you need a system. MetaGrowth will architect the process, define the ICP, configure the CRM, build the messaging, and install the KPI framework.',recs:[{icon:'fa-rocket',name:'HyperLaunch Sales System',desc:'90-day infrastructure build — ICP, process, CRM, messaging, and KPIs installed end-to-end',link:'/solutions/hyperlaunch',primary:true},{icon:'fa-crosshairs',name:'Precision Engagements',desc:'Focused intervention to solve a specific bottleneck fast',link:'/solutions/precision-engagements'},{icon:'fa-flask',name:'CEO Growth Lab',desc:'Strategic clarity and peer network for founders building toward scale',link:'/solutions/ceo-growth-lab'}],ctaBody:"The fastest path forward is a 90-day infrastructure build. Book a call and we'll walk through exactly what needs to be installed first."},stage1:{badge:'Stage: Early Team / Inconsistent Execution',title:"The team exists. The system doesn't.",sub:'You have reps but performance is uneven, accountability is loose, and forecasting is more hope than data.',diagTitle:'Execution Without Infrastructure',diagBody:"You've made the first hires, but the system beneath them is not strong enough to produce consistent output. The reps are not the problem — the missing operating system is.",gaps:['No enforced sales process — reps operate by instinct','Pipeline stages are unclear or not consistently updated','Ramp time is too slow and early turnover is high','No defined accountability rhythm or performance metrics','Forecasting is guesswork at best'],pathTitle:'Install the operating system your team needs to execute.',pathBody:'The solution is not more reps. It is a structured Sales OS — clear stages, KPIs, weekly rhythm, and a coaching framework that enforces performance.',recs:[{icon:'fa-chart-bar',name:'Sales Growth Lab',desc:'Sales OS installation, accountability rhythm, weekly advisory, and monthly traction reporting',link:'/solutions/sales-growth-lab',primary:true},{icon:'fa-rocket',name:'HyperLaunch Sales System',desc:'Full infrastructure build — process, CRM, messaging, forecasting framework, and KPI dashboards',link:'/solutions/hyperlaunch'},{icon:'fa-search',name:'Recruiting Services',desc:'Upgrade your talent density with structured vetting and deep behavioral assessment',link:'/solutions/recruiting'},{icon:'fa-percentage',name:'Commission-Only Infrastructure',desc:'Add 1099 reps with zero base risk — full systems, training, and oversight included',link:'/solutions/commission-only'},{icon:'fa-cogs',name:'Managed Sales Pods',desc:'A fully managed, embedded sales team that executes inside your business',link:'/solutions/managed-sales-pods'}],ctaBody:"Inconsistent performance is a system problem, not a people problem. Let's walk through your specific situation on a strategy call."},stage2:{badge:'Stage: System Gaps / Underperformance',title:'Real revenue, but the cracks are showing.',sub:'Growth is real but infrastructure is not keeping pace. System gaps are creating execution drag at every level.',diagTitle:'Infrastructure Falling Behind Growth',diagBody:'You have revenue and a real team, but the infrastructure beneath them is not scaling with the business. CRM adoption is spotty. Coaching is reactive. Forecasting is unreliable.',gaps:['CRM not consistently used or properly configured for forecasting','Coaching is reactive, not systematic','New rep ramp time is too long and inconsistent','No reliable forecast discipline or pipeline stage enforcement','Leadership bandwidth is stretched across execution and strategy'],pathTitle:'Upgrade the infrastructure. Stabilize execution.',pathBody:'You need a full revenue operating system — not advice, not another strategy deck. MetaGrowth deploys the system, enforces the cadence, and installs the leadership rhythm.',recs:[{icon:'fa-cogs',name:'Managed Sales Pods',desc:'Full-service execution — recruiting, onboarding, coaching, KPI enforcement, and weekly oversight',link:'/solutions/managed-sales-pods',primary:true},{icon:'fa-percentage',name:'Commission-Only Infrastructure',desc:'Scale without fixed overhead — 1099 rep infrastructure with full systems and CRM enforcement',link:'/solutions/commission-only'},{icon:'fa-chart-bar',name:'Sales Growth Lab',desc:'Structured accountability and Sales OS for your leadership layer',link:'/solutions/sales-growth-lab'},{icon:'fa-handshake',name:'Rev Share Only Program',desc:'Zero upfront cost — we embed execution and only get paid when you close revenue',link:'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session'}],ctaBody:"The gap between where you are and where you need to be is an infrastructure problem. Let's diagnose it together on a strategy call."},stage3:{badge:'Stage: Scaling / Leadership Gap',title:'At scale — but leadership complexity is limiting upside.',sub:"The revenue is there. The execution is not keeping pace because there's no one truly owning it at the revenue leadership level.",diagTitle:'Leadership Ceiling at Scale',diagBody:'You have built something real. But at this stage, the constraint is not tactics — it is revenue leadership. Someone needs to own forecast accuracy, drive the performance culture, and hold the entire revenue function accountable.',gaps:['No dedicated revenue executive who truly owns outcomes','Forecast accuracy degrades as deal volume grows','Sales leadership is managing activity, not leading strategy','VP or CRO turnover is disrupting execution rhythm','Team performance is uneven without clear ownership at the top'],pathTitle:'Install executive-level revenue ownership.',pathBody:'The highest-leverage move at your stage is not more reps or more technology — it is getting the right revenue leadership in place.',recs:[{icon:'fa-crown',name:'Fractional CRO',desc:'Executive revenue leadership — strategy, accountability, hiring roadmap, and performance management',link:'/solutions/fractional-cro',primary:true},{icon:'fa-cogs',name:'Managed Sales Pods',desc:'Done-for-you execution layer with full oversight, KPI tracking, and weekly performance management',link:'/solutions/managed-sales-pods'},{icon:'fa-flask',name:'CEO Growth Lab',desc:'Strategic peer network and quarterly deep-dive sessions for CEOs navigating scale-stage complexity',link:'/solutions/ceo-growth-lab'},{icon:'fa-handshake',name:'Rev Share Only Program',desc:'Full sales team embedded at scale — performance-only model with zero upfront investment',link:'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session'}],ctaBody:"At your stage, the right revenue leadership changes everything. Let's talk about what that looks like for your business."}};
const recruitingRec={icon:'fa-search',name:'Recruiting Services',desc:'Structured screening, deep vetting, and behavioral assessment to identify producers',link:'/solutions/recruiting',primary:true};
const podsRec={icon:'fa-cogs',name:'Managed Sales Pods',desc:'A fully managed, embedded sales team — MetaGrowth recruits, onboards, coaches, and manages the entire function',link:'/solutions/managed-sales-pods',primary:true};
function submitAssessment(){if(!validateStep(6))return;const{final,rs,pm,si,tt,le,hiringOverride,bandwidthOverride}=calculateScore();let outcome;if(final<=30)outcome={...outcomes.stage0};else if(final<=50)outcome={...outcomes.stage1};else if(final<=70)outcome={...outcomes.stage2};else outcome={...outcomes.stage3};outcome.recs=outcome.recs.map(r=>({...r}));if(hiringOverride){if(!outcome.recs.find(r=>r.name===recruitingRec.name))outcome.recs.unshift({...recruitingRec});else outcome.recs.find(r=>r.name===recruitingRec.name).primary=true;outcome.recs.forEach((r,i)=>{if(i>0)r.primary=false;});}if(bandwidthOverride&&!hiringOverride){if(!outcome.recs.find(r=>r.name===podsRec.name))outcome.recs.unshift({...podsRec});else outcome.recs.find(r=>r.name===podsRec.name).primary=true;outcome.recs.forEach((r,i)=>{if(i>0)r.primary=false;});}
document.getElementById('progress-wrap').style.display='none';for(let i=1;i<=6;i++)document.getElementById('step-'+i).style.display='none';const panel=document.getElementById('results-panel');panel.classList.add('show');window.scrollTo({top:document.getElementById('assessment-anchor').offsetTop-80,behavior:'smooth'});
const circumference=2*Math.PI*70;const offset=circumference-(final/100)*circumference;setTimeout(()=>{document.getElementById('score-ring-fill').style.strokeDashoffset=offset;},200);animateCount('score-display',0,final,1000);
document.getElementById('results-badge').innerHTML='<i class="fas fa-map-marker-alt"></i> '+outcome.badge;document.getElementById('results-stage-title').textContent=outcome.title;document.getElementById('results-stage-sub').textContent=outcome.sub;
animateBar('bar-rs','val-rs',rs);animateBar('bar-pm','val-pm',pm);animateBar('bar-si','val-si',si);animateBar('bar-tt','val-tt',tt);animateBar('bar-le','val-le',le);
document.getElementById('results-diagnosis-title').textContent=outcome.diagTitle;document.getElementById('results-diagnosis-body').textContent=outcome.diagBody;
const gapsList=document.getElementById('results-gaps');gapsList.innerHTML='';outcome.gaps.forEach(gap=>{const li=document.createElement('li');li.textContent=gap;gapsList.appendChild(li);});
document.getElementById('results-path-title').textContent=outcome.pathTitle;document.getElementById('results-path-body').textContent=outcome.pathBody;
const recContainer=document.getElementById('results-rec-cards');recContainer.innerHTML='';outcome.recs.forEach(rec=>{const a=document.createElement('a');a.href=rec.link;a.className='rec-path-card';a.innerHTML='<div class="rec-path-icon"><i class="fas '+rec.icon+'"></i></div><div class="rec-path-body"><div class="rec-path-name">'+rec.name+(rec.primary?'<span class="rec-primary-badge">Best Fit</span>':'')+'</div><div class="rec-path-desc">'+rec.desc+'</div></div><div class="rec-path-arrow"><i class="fas fa-arrow-right"></i></div>';recContainer.appendChild(a);});
document.getElementById('results-cta-body').textContent=outcome.ctaBody;}
function animateCount(id,from,to,duration){const el=document.getElementById(id);const start=performance.now();function tick(now){const progress=Math.min((now-start)/duration,1);const ease=1-Math.pow(1-progress,3);el.textContent=Math.round(from+(to-from)*ease);if(progress<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);}
function animateBar(barId,valId,score){setTimeout(()=>{document.getElementById(barId).style.width=score+'%';document.getElementById(valId).textContent=score;},300);}
function restartAssessment(){document.querySelectorAll('input[type="radio"]').forEach(r=>r.checked=false);document.querySelectorAll('input[type="checkbox"]').forEach(c=>c.checked=false);document.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected'));document.querySelectorAll('.checkbox-card').forEach(c=>c.classList.remove('selected'));['q-first-name','q-last-name','q-company','q-role','q-email'].forEach(id=>{document.getElementById(id).value='';});document.getElementById('results-panel').classList.remove('show');document.getElementById('progress-wrap').style.display='block';for(let i=1;i<=6;i++){const step=document.getElementById('step-'+i);step.style.display='';step.classList.remove('active');}document.getElementById('step-1').classList.add('active');currentStep=1;updateProgress(1);window.scrollTo({top:document.getElementById('assessment-anchor').offsetTop-80,behavior:'smooth'});}
</script>
</body>
</html>
`

function resourceCat(icon: string, title: string, items: string[]) {
  return `<div class="res-cat">
    <div class="res-cat-icon"><i class="${icon}"></i></div>
    <h4>${title}</h4>
    <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>`
}
