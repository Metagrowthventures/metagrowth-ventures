import { page } from '../layout'

export const solutionsPage = () => page('Solutions', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Our Services</div>
    <h1 class="hero-title">A Complete Revenue <span class="accent">Ecosystem</span></h1>
    <p class="hero-sub">From infrastructure build to full execution — MetaGrowth has the right engagement for your stage, team, and growth goals.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Book a Strategy Call</a>
      <a href="/assessment" class="btn btn-secondary btn-lg">Take the Assessment</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:64px;">
      <span class="section-label">All Solutions</span>
      <h2 class="section-title">Match your challenge to the right solution</h2>
      <p class="section-subtitle">Every MetaGrowth engagement is designed to deliver measurable outcomes — not just advice.</p>
    </div>
    <div class="full-sol-grid fade-in">
      <a href="/solutions/growth-os" class="full-sol-card" style="border-color:rgba(173,120,5,0.35);background:rgba(173,120,5,0.03);">
        <div class="fsol-icon" style="background:rgba(173,120,5,0.15);"><i class="fas fa-layer-group"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag" style="color:var(--green);">Revenue Infrastructure Platform</div>
          <h3>Growth OS™</h3>
          <p>Centralized outbound revenue infrastructure — CRM workflows, AI-assisted outreach, pipeline visibility, accountability systems, and revenue operations.</p>
          <div class="fsol-outcome">Key Outcome: Fully operationalized outbound revenue engine</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/revenue-os" class="full-sol-card" style="border-color:rgba(173,120,5,0.35);background:rgba(173,120,5,0.03);">
        <div class="fsol-icon" style="background:rgba(173,120,5,0.15);"><i class="fas fa-microchip"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag" style="color:var(--green);">AI-Powered Infrastructure</div>
          <h3>Revenue OS™</h3>
          <p>Done-for-you outbound infrastructure, AI signal systems, CRM workflows, and managed pipeline generation — live in 14 days.</p>
          <div class="fsol-outcome">Key Outcome: 10–30+ qualified meetings/month on autopilot</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/managed-sales-pods" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-users"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">W2 Sales Teams</div>
          <h3>W2 Sales Teams</h3>
          <p>Full-service revenue execution — we recruit, onboard, train, manage, and optimize your W2 sales team so you can focus on the business.</p>
          <div class="fsol-outcome">Key Outcome: Fully managed revenue engine with KPI enforcement</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/commission-only" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-percentage"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">1099 Sales Teams</div>
          <h3>1099 Sales Teams</h3>
          <p>Scale your sales team without fixed salary overhead using a fully supported 1099 rep model with training, CRM, and systems.</p>
          <div class="fsol-outcome">Key Outcome: Scalable revenue without fixed payroll risk</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/fractional-cro" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-crown"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">Executive Leadership</div>
          <h3>Fractional CRO</h3>
          <p>Revenue leadership that owns outcomes — strategy, accountability, hiring roadmap, forecasting, and performance management.</p>
          <div class="fsol-outcome">Key Outcome: Executive revenue ownership without full-time cost</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Not sure which solution fits?</h2>
    <p>Book a strategy call and we'll help you identify the right engagement for your stage, team, and growth goals — at no cost.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/assessment" class="btn btn-secondary btn-lg">Take the Assessment</a>
    </div>
  </div>
</section>

<style>
.full-sol-grid { display: flex; flex-direction: column; gap: 16px; }
.full-sol-card {
  display: grid; grid-template-columns: 72px 1fr 40px;
  align-items: center; gap: 28px;
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg); padding: 28px 32px;
  transition: all var(--transition); cursor: pointer;
}
.full-sol-card:hover { border-color: var(--green); transform: translateX(4px); box-shadow: var(--shadow); }
.fsol-icon {
  width: 60px; height: 60px; border-radius: 14px;
  background: rgba(173,120,5,0.10);
  display: flex; align-items: center; justify-content: center;
  color: var(--green); font-size: 1.4rem; flex-shrink: 0;
}
.fsol-tag { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 6px; }
.fsol-body h3 { font-size: 1.2rem; color: var(--gray-800); margin-bottom: 8px; }
.fsol-body p { font-size: 0.9rem; color: var(--gray-600); margin-bottom: 10px; }
.fsol-outcome { font-size: 0.82rem; color: var(--gray-800); font-weight: 600; background: var(--gray-50); padding: 6px 12px; border-radius: 6px; display: inline-block; }
.fsol-arrow { color: var(--gray-200); font-size: 1.1rem; transition: all var(--transition); }
.full-sol-card:hover .fsol-arrow { color: var(--green); }
@media (max-width: 640px) {
  .full-sol-card { grid-template-columns: 48px 1fr; }
  .fsol-arrow { display: none; }
  .fsol-icon { width: 48px; height: 48px; font-size: 1.1rem; }
}
</style>
`)


// Managed Sales Pods
export const managedSalesPodsPage = () => page('Managed Sales Pods', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Done-For-You</div>
    <h1 class="hero-title">We Build, Recruit, Coach,<br>and <span class="accent">Manage the Revenue Engine</span></h1>
    <p class="hero-sub">Full-service sales execution for companies that want results without managing every moving part internally.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Explore Managed Sales Pods</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Compare Solutions</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sol-detail-grid fade-in">
      <div class="sol-detail-main">
        <span class="section-label">Best For</span>
        <h2 class="section-title">The done-for-you revenue engine</h2>
        <p style="font-size:1.1rem;color:var(--gray-600);margin-bottom:28px;">Managed Sales Pods is MetaGrowth's most comprehensive execution service. We build the infrastructure, recruit the talent, run onboarding and training, manage daily activity, enforce KPIs, and report on results. You get a revenue engine without building, managing, or troubleshooting it yourself.</p>
        <ul class="check-list" style="margin-bottom:28px;">
          <li>Companies that have tried to build a sales team and struggled</li>
          <li>Founders who want to remove themselves from day-to-day sales</li>
          <li>Companies that need results but lack internal sales management bandwidth</li>
          <li>Growth-stage B2B companies between $3M–$40M revenue</li>
          <li>Organizations launching into a new market or segment</li>
        </ul>
      </div>
      <div class="sol-detail-side">
        <div class="side-box">
          <h4>Pod Snapshot</h4>
          <div class="quick-fact"><span class="qf-label">Team</span><span>SDR + AE + Oversight</span></div>
          <div class="quick-fact"><span class="qf-label">Management</span><span>MetaGrowth-owned</span></div>
          <div class="quick-fact"><span class="qf-label">KPIs</span><span>Weekly enforcement</span></div>
          <div class="quick-fact"><span class="qf-label">Contract</span><span>12-month roadmap</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">What's Included</span><h2 class="section-title">Everything inside a Managed Sales Pod</h2></div>
    <div class="includes-grid fade-in">
      <div class="include-card"><div class="inc-icon"><i class="fas fa-search"></i></div><h4>Recruiting</h4><p>Full recruiting process for SDRs, AEs, and team leads. Behavioral assessment, vetting, and finalist selection.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-user-graduate"></i></div><h4>Onboarding</h4><p>30/60/90 day ramp program, product knowledge training, and sales process certification.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-chalkboard-teacher"></i></div><h4>Coaching &amp; Training</h4><p>Weekly call coaching, skill development sessions, and performance improvement planning.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-users-cog"></i></div><h4>Dedicated SDR/AE Resources</h4><p>Your dedicated pod team working exclusively on your pipeline, messaging, and prospect outreach.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-database"></i></div><h4>CRM &amp; Pipeline Build</h4><p>CRM configuration, pipeline stage setup, activity tracking, and reporting automation.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-tachometer-alt"></i></div><h4>KPI Enforcement</h4><p>Weekly activity targets, conversion metrics, and performance management for every pod member.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-eye"></i></div><h4>Weekly Performance Oversight</h4><p>Dedicated pod manager running weekly reviews, call audits, and pipeline discipline.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-file-chart-line"></i></div><h4>Monthly Reporting</h4><p>Detailed performance reports with pipeline, activity, conversion, and revenue progress.</p></div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">12-Month Roadmap</span><h2 style="color:var(--white);margin-bottom:48px;">How your pod evolves over 12 months</h2></div>
    <div class="roadmap-grid fade-in">
      <div class="roadmap-phase"><div class="rp-months">Months 1–3</div><h4>Build &amp; Launch</h4><p>System build, CRM setup, recruiting, team onboarding, first outreach campaigns launched.</p></div>
      <div class="roadmap-phase"><div class="rp-months">Months 4–6</div><h4>Ramp &amp; Calibrate</h4><p>Pipeline filling, messaging optimization, rep performance coaching, initial deal velocity analysis.</p></div>
      <div class="roadmap-phase"><div class="rp-months">Months 7–9</div><h4>Optimize &amp; Scale</h4><p>Best-performing sequences amplified, underperformers upgraded or replaced, pipeline maturing.</p></div>
      <div class="roadmap-phase"><div class="rp-months">Months 10–12</div><h4>Stabilize &amp; Expand</h4><p>Consistent pipeline generation, team accountability fully established, plan for Year 2 growth.</p></div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready for a revenue engine that runs without you?</h2>
    <p>Book a strategy call and we'll scope a Managed Sales Pod deployment for your company's exact situation.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Explore Managed Sales Pods</a>
      <a href="/case-studies" class="btn btn-secondary btn-lg">See Results</a>
    </div>
  </div>
</section>
${solDetailStyles()}
<style>
.roadmap-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.roadmap-phase { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 28px; transition: all var(--transition); }
.roadmap-phase:hover { border-color: var(--green); }
.rp-months { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 12px; }
.roadmap-phase h4 { color: var(--white); margin-bottom: 10px; }
.roadmap-phase p { color: rgba(255,255,255,0.55); font-size: 0.875rem; }
@media (max-width: 900px) { .roadmap-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .roadmap-grid { grid-template-columns: 1fr; } }
</style>
`, serviceSchema('W2 Sales Teams', 'Managed Sales Execution', 'Full-service W2 sales team deployment — we recruit, onboard, train, manage, and optimize your sales pod with full KPI enforcement.', 'https://metagrowth.ventures/solutions/managed-sales-pods', 'B2B Founders, Growth-Stage Companies'))

// Commission Only
export const commissionOnlyPage = () => page('Commission-Only Infrastructure', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Performance-Based Scaling</div>
    <h1 class="hero-title">Scale Without Fixed <span class="accent">Salary Overhead</span></h1>
    <p class="hero-sub">Unlimited 1099 rep infrastructure supported by system build, commission modeling, training, and CRM enforcement.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">See If You Qualify</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Compare Solutions</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sol-detail-grid fade-in">
      <div class="sol-detail-main">
        <span class="section-label">What Is Commission-Only Infrastructure?</span>
        <h2 class="section-title">Scale your sales team without fixed payroll risk</h2>
        <p style="font-size:1.1rem;color:var(--gray-600);margin-bottom:28px;">Commission-Only Infrastructure is a performance-based model where we build the systems, recruit and train 1099 sales reps, configure CRM enforcement, and deploy outreach infrastructure — all without the company carrying a fixed salary burden. It's not just rep placement; it's a fully supported execution environment.</p>
        <div class="fit-grid">
          <div class="fit-card green-border">
            <h4>Ideal Company Profile</h4>
            <ul class="check-list" style="margin-top:14px;">
              <li>Strong product-market fit with proven deal velocity</li>
              <li>Average deal size that justifies commission structure</li>
              <li>Existing materials: pitch deck, pricing, case studies</li>
              <li>Clear ICP and ability to close deals when presented</li>
              <li>Willingness to offer competitive commission rates</li>
            </ul>
          </div>
          <div class="fit-card gray-border">
            <h4>Qualification Criteria</h4>
            <ul style="margin-top:14px;display:flex;flex-direction:column;gap:10px;">
              <li style="color:var(--gray-600);font-size:0.9rem;">✓ Proven product/service with market demand</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✓ ACV or deal size supports strong commission</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✓ Company leadership can close demos</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✓ Competitive advantage is clear and demonstrable</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sol-detail-side">
        <div class="side-box">
          <h4>Model Snapshot</h4>
          <div class="quick-fact"><span class="qf-label">Rep Type</span><span>1099 Contractors</span></div>
          <div class="quick-fact"><span class="qf-label">Overhead</span><span>No fixed salary</span></div>
          <div class="quick-fact"><span class="qf-label">Includes</span><span>Full system build</span></div>
          <div class="quick-fact"><span class="qf-label">Training</span><span>MetaGrowth managed</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Check Qualification</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">What's Included</span><h2 class="section-title">Full commission-only infrastructure — not just rep placement</h2></div>
    <div class="includes-grid fade-in">
      <div class="include-card"><div class="inc-icon"><i class="fas fa-layer-group"></i></div><h4>System Build</h4><p>Sales process, CRM, messaging, and outreach infrastructure built before reps are deployed.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-dollar-sign"></i></div><h4>Commission Modeling</h4><p>Commission structure designed to attract producers while protecting your margin and cash flow.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-user-check"></i></div><h4>Rep Recruiting &amp; Vetting</h4><p>We recruit, screen, and onboard 1099 reps who fit your product, market, and commission model.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-graduation-cap"></i></div><h4>Training Program</h4><p>Product knowledge, sales process certification, and outreach script training for every rep.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-database"></i></div><h4>CRM Enforcement</h4><p>CRM configured for 1099 activity tracking — pipeline, outreach, and revenue attribution.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-robot"></i></div><h4>Multi-Channel Outreach</h4><p>Automated sequences, email campaigns, and prospecting systems supporting your rep network.</p></div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container" style="max-width:760px;">
    <div class="text-center fade-in"><span class="section-label">FAQ</span><h2 style="color:var(--white);margin-bottom:40px;">Common Questions About Commission-Only</h2></div>
    <div class="faq-list fade-in">
      ${faqItem('What if a 1099 rep doesn\'t produce?', 'We actively manage rep performance. Non-producers are replaced through our ongoing recruiting pipeline — you\'re not locked into a non-performer.', true)}
      ${faqItem('What commission rates are typical?', 'Rates vary by deal size and sales cycle. We work with you to build a commission model that is both competitive and margin-safe.', true)}
      ${faqItem('How quickly can reps be deployed?', 'After the system build phase (typically 30 days), rep recruiting and onboarding typically takes another 30–45 days.', true)}
      ${faqItem('What happens if my deal cycle is long?', 'We design commission models with draw, milestone payments, or hybrid structures for complex or long-cycle sales environments.', true)}
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>See if you qualify for commission-only scaling.</h2>
    <p>Not every company is a fit — but for those that are, it's one of the highest-leverage growth models available.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">See If You Qualify</a>
    </div>
  </div>
</section>
${solDetailStyles()}
`, serviceSchema('1099 Sales Teams', 'Commission-Only Sales Infrastructure', 'Scale your sales team without fixed salary overhead using a fully supported 1099 rep model with training, CRM, and systems.', 'https://metagrowth.ventures/solutions/commission-only', 'B2B Companies, Performance-Focused Sales Organizations'))

// Fractional CRO
export const fractionalCROPage = () => page('Fractional CRO', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Executive Leadership</div>
    <h1 class="hero-title">Executive Revenue Leadership<br><span class="accent">Without Full-Time C-Suite Cost</span></h1>
    <p class="hero-sub">Strategy, accountability, hiring roadmap, forecasting, and performance management from a revenue leader who takes ownership.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Talk to a Fractional CRO</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Compare Solutions</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sol-detail-grid fade-in">
      <div class="sol-detail-main">
        <span class="section-label">When to Hire a Fractional CRO</span>
        <h2 class="section-title">The revenue leadership gap is expensive. This closes it.</h2>
        <p style="font-size:1.1rem;color:var(--gray-600);margin-bottom:28px;">A Fractional CRO isn't a consultant who advises from the sideline. It's a senior revenue executive embedded in your business who takes accountability for outcomes — strategy, team, forecasting, pipeline, and hiring — at a fraction of the cost of a full-time hire.</p>
        <ul class="check-list" style="margin-bottom:28px;">
          <li>VP of Sales left and you need leadership continuity</li>
          <li>Revenue growth has stalled and you can't diagnose why</li>
          <li>You're preparing to raise and need credible revenue leadership</li>
          <li>Your sales team has talent but lacks direction and accountability</li>
          <li>You need someone who can own the number — not just manage to it</li>
          <li>Full-time CRO cost ($250K+) is premature but leadership gap is real</li>
        </ul>
      </div>
      <div class="sol-detail-side">
        <div class="side-box">
          <h4>Engagement Overview</h4>
          <div class="quick-fact"><span class="qf-label">Commitment</span><span>Flexible / 6–12 months</span></div>
          <div class="quick-fact"><span class="qf-label">Ownership</span><span>Full revenue function</span></div>
          <div class="quick-fact"><span class="qf-label">Reporting</span><span>Direct to CEO</span></div>
          <div class="quick-fact"><span class="qf-label">Hours</span><span>Defined retainer model</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Talk to a Fractional CRO</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">Scope of Responsibility</span><h2 class="section-title">What your Fractional CRO owns</h2></div>
    <div class="includes-grid fade-in">
      <div class="include-card"><div class="inc-icon"><i class="fas fa-chess"></i></div><h4>Revenue Strategy</h4><p>GTM strategy, ICP refinement, segment prioritization, and annual revenue planning.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-users-cog"></i></div><h4>Team Leadership</h4><p>Direct leadership of your sales team — coaching, performance management, and culture.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-chart-line"></i></div><h4>Forecasting &amp; Reporting</h4><p>Accurate pipeline forecasting, board-level reporting, and revenue metric accountability.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-search"></i></div><h4>Hiring Roadmap</h4><p>Sales hiring plan, recruiter management, candidate evaluation, and onboarding execution.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-layer-group"></i></div><h4>Process &amp; Infrastructure</h4><p>Sales OS, CRM discipline, pipeline review cadence, and accountability framework.</p></div>
      <div class="include-card"><div class="inc-icon"><i class="fas fa-handshake"></i></div><h4>Cross-Functional Alignment</h4><p>Alignment between sales, marketing, product, and customer success for revenue continuity.</p></div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">Comparison</span><h2 style="color:var(--white);margin-bottom:48px;">Fractional CRO vs. Full-Time VP/CRO</h2></div>
    <div style="overflow-x:auto;" class="fade-in">
      <table class="compare-table" style="max-width:800px;margin:0 auto;">
        <thead><tr><th>Factor</th><th>Fractional CRO</th><th>Full-Time VP/CRO</th></tr></thead>
        <tbody>
          <tr><td>Cost</td><td class="yes">Retainer-based (fraction of full cost)</td><td class="no">$200K–$400K+ salary + equity</td></tr>
          <tr><td>Speed to Deploy</td><td class="yes">Weeks, not months</td><td class="no">3–6 month search + ramp</td></tr>
          <tr><td>Revenue Ownership</td><td class="yes">Full accountability</td><td class="yes">Full accountability</td></tr>
          <tr><td>Flexibility</td><td class="yes">Scalable engagement model</td><td class="no">Fixed, hard to unwind</td></tr>
          <tr><td>Experience Level</td><td class="yes">Senior, multi-company</td><td class="yes">Varies by hire</td></tr>
          <tr><td>Risk</td><td class="yes">Lower financial exposure</td><td class="no">High if wrong hire</td></tr>
          <tr><td>Best For</td><td class="yes">$5M–$40M revenue stage</td><td class="no">Post-Series B / $40M+</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Close the revenue leadership gap — this week.</h2>
    <p>Book a call with a MetaGrowth Fractional CRO and get an honest assessment of what your revenue function needs to scale.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Talk to a Fractional CRO</a>
    </div>
  </div>
</section>
${solDetailStyles()}
`, serviceSchema('Fractional CRO', 'Fractional Chief Revenue Officer', 'Revenue leadership that owns outcomes — strategy, accountability, hiring roadmap, forecasting, and performance management without full-time executive cost.', 'https://metagrowth.ventures/solutions/fractional-cro', 'B2B Companies, Founders, CEOs, PE-backed Organizations'))

// Growth OS
export const growthOSPage = () => page('Growth OS™ — Revenue Infrastructure For Modern Sales Teams', `

<!-- HERO -->
<section class="gos-hero">
  <div class="container gos-hero-inner">
    <div class="hero-eyebrow">Revenue Infrastructure Platform</div>
    <h1 class="gos-hero-title">Growth OS™<br><span class="accent">Revenue Infrastructure For Modern Sales Teams</span></h1>
    <p class="gos-hero-sub">Build, manage, and scale outbound sales with centralized systems, CRM workflows, AI-assisted outreach, pipeline visibility, and operational accountability.</p>
    <p class="gos-hero-sub2">Whether you run it internally or want expert oversight, Growth OS™ helps operationalize predictable revenue generation.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Demo</a>
      <a href="#how-it-works" class="btn btn-secondary btn-lg">See How It Works</a>
    </div>
  </div>
</section>

<!-- CALLOUT -->
<section class="gos-callout">
  <div class="container">
    <div class="gos-callout-box fade-in">
      <p class="gos-callout-lead">Most companies don't have a true revenue system.</p>
      <p class="gos-callout-body">They have disconnected tools, inconsistent follow up, weak CRM discipline, fragmented outbound efforts, and sales processes that live inside individual reps instead of scalable infrastructure.</p>
      <p class="gos-callout-cta-text"><strong>Growth OS™ centralizes and operationalizes outbound sales execution.</strong></p>
    </div>
  </div>
</section>

<!-- SECTION 2 — THE PROBLEM -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">The Problem</span>
      <h2 class="section-title">Why Most Revenue Systems Fail</h2>
    </div>
    <div class="gos-problem-grid fade-in">
      <div class="gos-problem-card">
        <div class="gos-prob-icon"><i class="fas fa-random"></i></div>
        <h4>Inconsistent Outbound</h4>
        <p>Salespeople prospect inconsistently, follow-up weakens over time, and pipeline activity becomes unpredictable.</p>
      </div>
      <div class="gos-problem-card">
        <div class="gos-prob-icon"><i class="fas fa-database"></i></div>
        <h4>CRM Chaos</h4>
        <p>Leads fall through cracks, pipelines become unreliable, and leadership loses visibility into actual performance.</p>
      </div>
      <div class="gos-problem-card">
        <div class="gos-prob-icon"><i class="fas fa-unlink"></i></div>
        <h4>Disconnected Tools</h4>
        <p>CRM, LinkedIn, email outreach, automations, reporting, and workflows rarely operate together cohesively.</p>
      </div>
      <div class="gos-problem-card">
        <div class="gos-prob-icon"><i class="fas fa-user-tie"></i></div>
        <h4>Founder Dependency</h4>
        <p>Too much revenue generation depends on leadership instead of scalable systems and process enforcement.</p>
      </div>
      <div class="gos-problem-card">
        <div class="gos-prob-icon"><i class="fas fa-exclamation-triangle"></i></div>
        <h4>Weak Accountability</h4>
        <p>Without KPI visibility and operational structure, activity and execution decline rapidly.</p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 3 — WHAT IS GROWTH OS -->
<section class="section">
  <div class="container">
    <div class="gos-what-grid fade-in">
      <div class="gos-what-main">
        <span class="section-label">What Is Growth OS™</span>
        <h2 class="section-title">Revenue Infrastructure Built For B2B Growth</h2>
        <p style="font-size:1.05rem;color:var(--gray-600);margin-bottom:28px;">Growth OS™ is a centralized outbound revenue infrastructure platform designed to operationalize:</p>
        <div class="gos-pill-grid">
          <span class="gos-pill">Prospecting</span>
          <span class="gos-pill">Follow-up</span>
          <span class="gos-pill">CRM Workflows</span>
          <span class="gos-pill">AI-Assisted Outreach</span>
          <span class="gos-pill">Pipeline Management</span>
          <span class="gos-pill">Reporting</span>
          <span class="gos-pill">Sales Accountability</span>
          <span class="gos-pill">Revenue Operations</span>
        </div>
        <div class="gos-not-crm">
          <p><strong>This is not "just another CRM."</strong></p>
          <p>Growth OS™ connects your outbound systems, workflows, messaging, accountability, and execution into one operational framework.</p>
        </div>
      </div>
      <div class="gos-what-side">
        <div class="side-box">
          <h4>Platform Snapshot</h4>
          <div class="quick-fact"><span class="qf-label">Focus</span><span>Outbound Revenue</span></div>
          <div class="quick-fact"><span class="qf-label">Best For</span><span>B2B Sales Teams</span></div>
          <div class="quick-fact"><span class="qf-label">Options</span><span>Self-Managed / Managed</span></div>
          <div class="quick-fact"><span class="qf-label">Setup</span><span>Infrastructure + Systems</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Book a Demo</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 4 — HOW IT WORKS -->
<section class="section section-dark" id="how-it-works">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">The Stack</span>
      <h2 style="color:var(--white);margin-bottom:0;">The Revenue Infrastructure Stack™</h2>
    </div>
    <div class="gos-stack-grid fade-in">
      <div class="gos-stack-card">
        <div class="gos-stack-icon"><i class="fas fa-bullhorn"></i></div>
        <h4>Outbound Infrastructure</h4>
        <ul>
          <li>LinkedIn outreach systems</li>
          <li>Email sequencing</li>
          <li>Domain &amp; inbox frameworks</li>
          <li>AI-assisted messaging</li>
          <li>Follow-up automation</li>
        </ul>
      </div>
      <div class="gos-stack-card">
        <div class="gos-stack-icon"><i class="fas fa-funnel-dollar"></i></div>
        <h4>CRM &amp; Pipeline Management</h4>
        <ul>
          <li>Pipeline stages</li>
          <li>Lead routing</li>
          <li>Automated workflows</li>
          <li>KPI tracking</li>
          <li>Opportunity management</li>
        </ul>
      </div>
      <div class="gos-stack-card">
        <div class="gos-stack-icon"><i class="fas fa-chart-line"></i></div>
        <h4>Reporting &amp; Visibility</h4>
        <ul>
          <li>Leadership dashboards</li>
          <li>Activity tracking</li>
          <li>Conversion visibility</li>
          <li>Pipeline reporting</li>
          <li>Revenue forecasting support</li>
        </ul>
      </div>
      <div class="gos-stack-card">
        <div class="gos-stack-icon"><i class="fas fa-tasks"></i></div>
        <h4>Operational Accountability</h4>
        <ul>
          <li>Rep scorecards</li>
          <li>Follow-up standards</li>
          <li>Activity benchmarks</li>
          <li>Workflow enforcement</li>
          <li>Pipeline hygiene systems</li>
        </ul>
      </div>
      <div class="gos-stack-card">
        <div class="gos-stack-icon"><i class="fas fa-robot"></i></div>
        <h4>AI &amp; Automation</h4>
        <ul>
          <li>AI prompt libraries</li>
          <li>Messaging assistance</li>
          <li>Prospect research workflows</li>
          <li>Personalization frameworks</li>
          <li>Automated operational workflows</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 5 — TWO OPTIONS -->
<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">Two Ways To Use Growth OS™</span>
      <h2 class="section-title">Choose the model that fits your team</h2>
    </div>
    <div class="gos-options-grid fade-in">

      <!-- Option 1 -->
      <div class="gos-option-card">
        <div class="gos-option-badge">Option 1</div>
        <h3>Growth OS™ Self-Managed</h3>
        <p class="gos-option-tagline">Build &amp; Run Your Revenue Infrastructure Internally</p>
        <p class="gos-option-desc">Ideal for companies that want the systems, workflows, templates, and infrastructure while managing execution internally.</p>
        <div class="gos-includes-block">
          <h5>Includes</h5>
          <ul>
            <li>CRM workflow systems</li>
            <li>LinkedIn outreach framework</li>
            <li>Email sequencing infrastructure</li>
            <li>Dashboarding &amp; KPI tracking</li>
            <li>AI-assisted messaging prompts</li>
            <li>SOP library</li>
            <li>Templates &amp; scripts</li>
            <li>Automation workflows</li>
            <li>Pipeline frameworks</li>
          </ul>
        </div>
        <div class="gos-best-for">
          <h5>Best For</h5>
          <ul>
            <li>Founder-led sales teams</li>
            <li>Small outbound teams</li>
            <li>Companies building internal SDR teams</li>
            <li>Businesses wanting more operational structure</li>
          </ul>
        </div>
        <div class="gos-pricing">
          <h5>Pricing — One-time onboarding fee applies</h5>
          <!-- Starter -->
          <div class="gos-tier-card">
            <div class="gos-tier-header">
              <div>
                <span class="gos-tier-name">Starter</span>
                <span class="gos-onboard-fee">+ $750 onboarding</span>
              </div>
              <span class="gos-price">$225<span>/mo</span></span>
            </div>
            <ul class="gos-tier-features">
              <li>Full system build — we build it for you</li>
              <li>1 active campaign with integrated data enrichment</li>
              <li>LinkedIn outreach framework</li>
              <li>Email sequencing infrastructure</li>
              <li>CRM workflows &amp; pipeline setup</li>
              <li>SOP library, templates &amp; scripts</li>
            </ul>
            <a href="https://buy.stripe.com/6oU14m3DF9Nj6MXdBv14401" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:14px;font-size:0.88rem;">Get Started</a>
          </div>
          <!-- Growth -->
          <div class="gos-tier-card">
            <div class="gos-tier-header">
              <div>
                <span class="gos-tier-name">Growth</span>
                <span class="gos-onboard-fee">+ $750 onboarding</span>
              </div>
              <span class="gos-price">$397<span>/mo</span></span>
            </div>
            <ul class="gos-tier-features">
              <li>Everything in Starter</li>
              <li>Management oversight &amp; optimization</li>
              <li>Bi-weekly customer success check-ins</li>
              <li>Up to 3 custom edits &amp; tweaks per month</li>
              <li>Up to 3 simultaneous campaigns</li>
              <li>Outsourced data sourcing when necessary</li>
            </ul>
            <a href="https://buy.stripe.com/8x2cN41vx9Nj0oz40V14402" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:14px;font-size:0.88rem;">Get Started</a>
          </div>
          <!-- Pro -->
          <div class="gos-tier-card gos-tier-pro">
            <div class="gos-tier-header">
              <div>
                <span class="gos-tier-name">Pro</span>
                <span class="gos-onboard-fee">+ $1,250 onboarding</span>
              </div>
              <span class="gos-price">$697<span>/mo</span></span>
            </div>
            <ul class="gos-tier-features">
              <li>Everything in Growth</li>
              <li>Unlimited updates (within reasonable scope)</li>
              <li>Up to 5 simultaneous campaigns</li>
              <li>Full managed oversight</li>
              <li>Appointment setting included</li>
              <li>Priority support &amp; optimization reviews</li>
            </ul>
            <a href="https://buy.stripe.com/bJe4gyb672kR2wH8hb14403" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:14px;font-size:0.88rem;">Get Started</a>
          </div>
        </div>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:28px;">Explore Self-Managed</a>
      </div>

      <!-- Option 2 -->
      <div class="gos-option-card gos-option-featured">
        <div class="gos-option-badge gos-badge-gold">Option 2</div>
        <h3>Growth OS™ Managed</h3>
        <p class="gos-option-tagline">Revenue Infrastructure + Operational Oversight</p>
        <p class="gos-option-desc">We help oversee, optimize, and operationalize your outbound revenue engine — infrastructure plus active management, optimization, response handling, and outbound oversight.</p>
        <div class="gos-includes-block">
          <h5>Includes Everything In Self-Managed Plus:</h5>
          <ul>
            <li>Inbox monitoring</li>
            <li>Response handling</li>
            <li>Appointment coordination</li>
            <li>Campaign optimization</li>
            <li>Deliverability oversight</li>
            <li>CRM enforcement</li>
            <li>KPI oversight</li>
            <li>Weekly optimization reviews</li>
            <li>Follow-up management</li>
            <li>Pipeline activity oversight</li>
          </ul>
        </div>
        <div class="gos-best-for">
          <h5>Best For</h5>
          <ul>
            <li>Companies lacking internal outbound management</li>
            <li>Teams wanting operational support</li>
            <li>Businesses needing accountability and consistency</li>
            <li>Organizations scaling outbound aggressively</li>
          </ul>
        </div>
        <div class="gos-pricing">
          <h5>Pricing</h5>
          <div class="gos-price-row"><span class="gos-tier">Starting at</span><span class="gos-price">$1,500<span>/mo</span></span></div>
        </div>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-gold" style="width:100%;justify-content:center;margin-top:28px;">Book A Strategy Call</a>
      </div>

    </div>
  </div>
</section>

<!-- SECTION 6 — DIFFERENTIATION -->
<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:48px;">
      <span class="section-label">What Makes Growth OS™ Different</span>
      <h2 style="color:var(--white);margin-bottom:16px;">Most Companies Buy Tools.<br>High-Growth Companies Build Revenue Infrastructure.</h2>
    </div>
    <div class="gos-diff-grid fade-in">
      <div class="gos-diff-fail">
        <h5 style="color:rgba(255,255,255,0.4);margin-bottom:18px;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;">Why Most Sales Systems Fail</h5>
        <ul>
          <li><i class="fas fa-times"></i> Nobody owns execution</li>
          <li><i class="fas fa-times"></i> Follow-up becomes inconsistent</li>
          <li><i class="fas fa-times"></i> CRM discipline disappears</li>
          <li><i class="fas fa-times"></i> Outbound weakens over time</li>
          <li><i class="fas fa-times"></i> Leadership loses visibility</li>
          <li><i class="fas fa-times"></i> Systems become fragmented</li>
        </ul>
      </div>
      <div class="gos-diff-arrow"><i class="fas fa-arrow-right"></i></div>
      <div class="gos-diff-win">
        <h5 style="color:var(--green);margin-bottom:18px;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;">Growth OS™ Operationalizes Consistency</h5>
        <ul>
          <li><i class="fas fa-check"></i> Centralized execution ownership</li>
          <li><i class="fas fa-check"></i> Systematic follow-up frameworks</li>
          <li><i class="fas fa-check"></i> Enforced CRM discipline</li>
          <li><i class="fas fa-check"></i> Always-on outbound infrastructure</li>
          <li><i class="fas fa-check"></i> Real-time leadership visibility</li>
          <li><i class="fas fa-check"></i> Unified revenue operations</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 7 — IDEAL CLIENTS -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:52px;">
      <span class="section-label">Who It's Built For</span>
      <h2 class="section-title">Growth OS™ Is Built For</h2>
    </div>
    <div class="gos-who-grid fade-in">
      <div class="gos-who-card">
        <div class="gos-who-icon"><i class="fas fa-building"></i></div>
        <h4>B2B Companies</h4>
        <p>With complex or consultative sales cycles that demand consistent, structured outbound.</p>
      </div>
      <div class="gos-who-card">
        <div class="gos-who-icon"><i class="fas fa-rocket"></i></div>
        <h4>Founder-Led Sales Teams</h4>
        <p>That need scalable infrastructure beyond founder involvement to maintain growth momentum.</p>
      </div>
      <div class="gos-who-card">
        <div class="gos-who-icon"><i class="fas fa-tasks"></i></div>
        <h4>Sales Teams Needing Accountability</h4>
        <p>Organizations struggling with consistency, follow-up, or CRM discipline across the team.</p>
      </div>
      <div class="gos-who-card">
        <div class="gos-who-icon"><i class="fas fa-chart-bar"></i></div>
        <h4>Companies Scaling Outbound</h4>
        <p>Businesses building predictable pipeline generation systems that don't break under scale.</p>
      </div>
      <div class="gos-who-card">
        <div class="gos-who-icon"><i class="fas fa-cogs"></i></div>
        <h4>Revenue Operations Leaders</h4>
        <p>Teams wanting centralized reporting, visibility, and operational workflows in one place.</p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 8 — OUTCOMES -->
<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:52px;">
      <span class="section-label">Expected Outcomes</span>
      <h2 class="section-title">What Companies Typically Improve</h2>
    </div>
    <div class="gos-outcomes-grid fade-in">
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>More consistent outbound activity</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Better pipeline visibility</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Faster speed-to-lead</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Improved follow-up consistency</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Cleaner CRM management</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Higher accountability across reps</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Stronger outbound systems</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Better leadership reporting</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>Reduced operational chaos</span></div>
      <div class="gos-outcome-item"><i class="fas fa-check-circle"></i><span>More predictable pipeline generation</span></div>
    </div>
  </div>
</section>

<!-- SECTION 9 — ADD-ONS -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:52px;">
      <span class="section-label">Optional Add-Ons</span>
      <h2 class="section-title">Additional Growth Infrastructure Services</h2>
    </div>
    <div class="gos-addons-grid fade-in">
      <div class="gos-addon"><i class="fas fa-database"></i><span>CRM Implementation</span></div>
      <div class="gos-addon"><i class="fas fa-hubspot" style="font-family:sans-serif;font-weight:700;font-style:normal;">HS</i><span>HubSpot Optimization</span></div>
      <div class="gos-addon"><i class="fas fa-envelope-open-text"></i><span>Domain &amp; Inbox Setup</span></div>
      <div class="gos-addon"><i class="fas fa-robot"></i><span>AI Sequence Development</span></div>
      <div class="gos-addon"><i class="fab fa-linkedin"></i><span>LinkedIn Profile Optimization</span></div>
      <div class="gos-addon"><i class="fas fa-search"></i><span>Sales Recruiting</span></div>
      <div class="gos-addon"><i class="fas fa-user-graduate"></i><span>SDR Onboarding</span></div>
      <div class="gos-addon"><i class="fas fa-tachometer-alt"></i><span>KPI Dashboard Customization</span></div>
      <div class="gos-addon"><i class="fas fa-sitemap"></i><span>Sales Process Development</span></div>
      <div class="gos-addon"><i class="fas fa-cogs"></i><span>Revenue Operations Consulting</span></div>
    </div>
  </div>
</section>

<!-- SECTION 10 — CTA -->
<section class="cta-section">
  <div class="container">
    <h2>Build A Revenue System That Actually Operates Consistently</h2>
    <p>Growth OS™ helps companies operationalize outbound sales through centralized infrastructure, workflows, accountability systems, and revenue operations.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book A Demo</a>
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-secondary btn-lg">Schedule A Strategy Call</a>
    </div>
    <p class="gos-footer-note">Growth OS™ is built and supported by MetaGrowth Ventures — specialists in outbound revenue systems, sales infrastructure, recruiting, and operational growth systems for B2B companies.</p>
  </div>
</section>

${solDetailStyles()}
<style>
/* ── Growth OS Hero CTA centering ───────────────────────────────────────── */
.gos-hero .hero-cta-row { justify-content: center; }
/* ── Growth OS Hero ──────────────────────────────────────────────────────── */
.gos-hero { min-height: calc(100vh - 72px); display: flex; align-items: center; justify-content: center; background: #111 url('/static/hero-texture.jpg') center/cover no-repeat; position: relative; padding: 100px 0 80px; }
.gos-hero::before { content:''; position:absolute; inset:0; background: linear-gradient(135deg,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.55) 100%); }
.gos-hero-inner { position: relative; z-index: 1; max-width: 820px; text-align: center; }
.gos-hero-title { font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 800; color: var(--white); line-height: 1.1; margin: 16px 0 28px; }
.gos-hero-sub { font-size: 1.15rem; color: rgba(255,255,255,0.78); max-width: 680px; margin: 0 auto 16px; line-height: 1.65; }
.gos-hero-sub2 { font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 580px; margin: 0 auto 36px; }
/* ── Callout ───────────────────────────────────────────────────────────── */
.gos-callout { background: var(--navy); padding: 64px 0; }
.gos-callout-box { max-width: 760px; margin: 0 auto; text-align: center; }
.gos-callout-lead { font-size: 1.5rem; font-weight: 700; color: var(--white); margin-bottom: 20px; }
.gos-callout-body { font-size: 1rem; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 20px; }
.gos-callout-cta-text { font-size: 1.05rem; color: var(--green); }
/* ── Problem grid ──────────────────────────────────────────────────────── */
.gos-problem-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.gos-problem-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 28px 22px; transition: all var(--transition); }
.gos-problem-card:hover { border-color: var(--green); transform: translateY(-3px); box-shadow: var(--shadow); }
.gos-prob-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(173,120,5,0.1); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.2rem; margin-bottom: 14px; }
.gos-problem-card h4 { font-size: 0.95rem; color: var(--gray-800); margin-bottom: 8px; }
.gos-problem-card p { font-size: 0.83rem; color: var(--gray-600); line-height: 1.5; }
/* ── What section ──────────────────────────────────────────────────────── */
.gos-what-grid { display: grid; grid-template-columns: 1fr 320px; gap: 56px; align-items: start; }
.gos-pill-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
.gos-pill { background: rgba(173,120,5,0.1); color: var(--green); border: 1px solid rgba(173,120,5,0.25); border-radius: 100px; padding: 6px 16px; font-size: 0.83rem; font-weight: 600; }
.gos-not-crm { background: var(--gray-50); border-left: 4px solid var(--green); border-radius: 0 var(--radius) var(--radius) 0; padding: 20px 24px; }
.gos-not-crm p { font-size: 0.95rem; color: var(--gray-600); line-height: 1.65; margin: 0; }
.gos-not-crm p + p { margin-top: 8px; }
/* ── Stack grid ────────────────────────────────────────────────────────── */
.gos-stack-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.gos-stack-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 28px 22px; transition: all var(--transition); }
.gos-stack-card:hover { border-color: var(--green); }
.gos-stack-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(173,120,5,0.12); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.2rem; margin-bottom: 14px; }
.gos-stack-card h4 { font-size: 0.9rem; color: var(--white); margin-bottom: 12px; }
.gos-stack-card ul { list-style: none; padding: 0; margin: 0; }
.gos-stack-card ul li { font-size: 0.8rem; color: rgba(255,255,255,0.55); padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.gos-stack-card ul li:last-child { border-bottom: none; }
/* ── Options grid ──────────────────────────────────────────────────────── */
.gos-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.gos-option-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 40px 36px; }
.gos-option-featured { border-color: var(--green); box-shadow: 0 0 0 1px var(--green), var(--shadow-lg); }
.gos-option-badge { display: inline-block; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; background: var(--gray-50); color: var(--gray-400); padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
.gos-badge-gold { background: rgba(173,120,5,0.12); color: var(--green); }
.gos-option-card h3 { font-size: 1.5rem; color: var(--gray-800); margin-bottom: 8px; }
.gos-option-tagline { font-size: 0.95rem; font-weight: 600; color: var(--green); margin-bottom: 12px; }
.gos-option-desc { font-size: 0.88rem; color: var(--gray-600); line-height: 1.65; margin-bottom: 24px; }
.gos-includes-block, .gos-best-for { margin-bottom: 20px; }
.gos-includes-block h5, .gos-best-for h5, .gos-pricing h5 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gray-400); font-weight: 700; margin-bottom: 10px; }
.gos-includes-block ul, .gos-best-for ul { list-style: none; padding: 0; margin: 0; }
.gos-includes-block ul li, .gos-best-for ul li { font-size: 0.85rem; color: var(--gray-600); padding: 5px 0 5px 20px; position: relative; border-bottom: 1px solid var(--gray-200); }
.gos-includes-block ul li:last-child, .gos-best-for ul li:last-child { border-bottom: none; }
.gos-includes-block ul li::before, .gos-best-for ul li::before { content: '✓'; position: absolute; left: 0; color: var(--green); font-weight: 700; }
.gos-pricing { border-top: 1px solid var(--gray-200); padding-top: 20px; margin-top: 4px; }
.gos-price-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--gray-200); }
.gos-price-row:last-child { border-bottom: none; }
.gos-tier { font-size: 0.85rem; font-weight: 600; color: var(--gray-600); }
.gos-price { font-size: 1.3rem; font-weight: 800; color: var(--gray-800); }
.gos-price span { font-size: 0.75rem; font-weight: 500; color: var(--gray-400); }
/* ── Tier cards ─────────────────────────────────────────────────────────── */
.gos-tier-card { border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 16px 18px; margin-bottom: 12px; background: var(--white); }
.gos-tier-card:last-of-type { margin-bottom: 0; }
.gos-tier-pro { border-color: rgba(173,120,5,0.4); background: rgba(173,120,5,0.03); }
.gos-tier-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
.gos-tier-name { display: block; font-size: 0.9rem; font-weight: 800; color: var(--gray-800); margin-bottom: 2px; }
.gos-onboard-fee { display: block; font-size: 0.72rem; color: var(--gray-400); font-weight: 500; }
.gos-tier-features { list-style: none; padding: 0; margin: 0; }
.gos-tier-features li { font-size: 0.8rem; color: var(--gray-600); padding: 4px 0 4px 18px; position: relative; border-bottom: 1px solid rgba(0,0,0,0.04); }
.gos-tier-features li:last-child { border-bottom: none; }
.gos-tier-features li::before { content: '✓'; position: absolute; left: 0; color: var(--green); font-weight: 700; font-size: 0.75rem; }
.btn-gold { background: var(--green) !important; color: #fff !important; }
/* ── Differentiation ───────────────────────────────────────────────────── */
.gos-diff-grid { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; align-items: center; max-width: 860px; margin: 0 auto; }
.gos-diff-fail ul, .gos-diff-win ul { list-style: none; padding: 0; margin: 0; }
.gos-diff-fail ul li, .gos-diff-win ul li { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; }
.gos-diff-fail ul li { color: rgba(255,255,255,0.45); }
.gos-diff-win ul li { color: var(--white); font-weight: 500; }
.gos-diff-fail ul li i { color: rgba(255,80,80,0.7); }
.gos-diff-win ul li i { color: var(--green); }
.gos-diff-arrow { display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: var(--green); }
/* ── Who grid ──────────────────────────────────────────────────────────── */
.gos-who-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.gos-who-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 28px 22px; text-align: center; transition: all var(--transition); }
.gos-who-card:hover { border-color: var(--green); transform: translateY(-3px); box-shadow: var(--shadow); }
.gos-who-icon { width: 52px; height: 52px; border-radius: 50%; background: rgba(173,120,5,0.1); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.3rem; margin: 0 auto 14px; }
.gos-who-card h4 { font-size: 0.9rem; color: var(--gray-800); margin-bottom: 8px; }
.gos-who-card p { font-size: 0.82rem; color: var(--gray-600); }
/* ── Outcomes ──────────────────────────────────────────────────────────── */
.gos-outcomes-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 760px; margin: 0 auto; }
.gos-outcome-item { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: var(--gray-50); border-radius: var(--radius); border: 1px solid var(--gray-200); font-size: 0.9rem; color: var(--gray-800); }
.gos-outcome-item i { color: var(--green); font-size: 1rem; flex-shrink: 0; }
/* ── Add-ons ───────────────────────────────────────────────────────────── */
.gos-addons-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
.gos-addon { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 20px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; transition: all var(--transition); }
.gos-addon:hover { border-color: var(--green); transform: translateY(-2px); }
.gos-addon i { color: var(--green); font-size: 1.3rem; }
.gos-addon span { font-size: 0.8rem; font-weight: 600; color: var(--gray-600); }
/* ── Footer note ───────────────────────────────────────────────────────── */
.gos-footer-note { font-size: 0.82rem; color: rgba(255,255,255,0.45); margin-top: 28px; max-width: 600px; margin-left: auto; margin-right: auto; }
/* ── Responsive ────────────────────────────────────────────────────────── */
@media (max-width: 1200px) {
  .gos-problem-grid, .gos-stack-grid, .gos-who-grid, .gos-addons-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 960px) {
  .gos-options-grid { grid-template-columns: 1fr; }
  .gos-what-grid { grid-template-columns: 1fr; }
  .gos-diff-grid { grid-template-columns: 1fr; gap: 32px; }
  .gos-diff-arrow { display: none; }
}
@media (max-width: 720px) {
  .gos-problem-grid, .gos-stack-grid, .gos-who-grid { grid-template-columns: repeat(2, 1fr); }
  .gos-addons-grid { grid-template-columns: repeat(2, 1fr); }
  .gos-outcomes-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .gos-problem-grid, .gos-stack-grid, .gos-who-grid, .gos-addons-grid { grid-template-columns: 1fr; }
}
</style>
`, serviceSchema('Growth OS™', 'Revenue Infrastructure Platform', 'Centralized outbound revenue infrastructure for B2B sales teams. CRM workflows, AI-assisted outreach, pipeline visibility, accountability systems, and revenue operations.', 'https://metagrowth.ventures/solutions/growth-os', 'B2B Sales Teams, Founders, Revenue Leaders')
, 'Growth OS™ — centralized outbound revenue infrastructure for B2B sales teams. CRM workflows, AI-assisted outreach, pipeline visibility, and operational accountability.')

// Revenue OS
export const revenueOSPage = () => page('Revenue OS™ — AI-Powered Revenue Infrastructure', `

<!-- HERO -->
<section class="ros-hero">
  <div class="container">
    <div class="ros-hero-inner">
      <div class="ros-hero-eyebrow"><i class="fas fa-microchip"></i> AI-Powered Revenue Infrastructure</div>
      <h1 class="ros-hero-title">Stop Guessing.<br><span class="accent">Build a Revenue Machine.</span></h1>
      <p class="ros-hero-sub">MetaGrowth Revenue OS™ deploys done-for-you outbound infrastructure, AI signal systems, CRM workflows, and managed pipeline generation — so your team closes deals instead of chasing leads.</p>
      <div class="ros-hero-stats">
        <div class="ros-stat"><div class="ros-stat-num">14 Days</div><div class="ros-stat-label">To Full Infrastructure</div></div>
        <div class="ros-stat"><div class="ros-stat-num">10–30+</div><div class="ros-stat-label">Meetings/Month</div></div>
        <div class="ros-stat"><div class="ros-stat-num">AI-First</div><div class="ros-stat-label">Signal Intelligence</div></div>
      </div>
      <div class="hero-cta-row" style="justify-content:center;margin-top:40px;">
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Book a Revenue Infrastructure Review</a>
        <a href="/assessment" class="btn btn-secondary btn-lg">Take the Assessment</a>
      </div>
    </div>
  </div>
</section>

<!-- NOT AN AGENCY -->
<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">The Platform</span>
      <h2 class="section-title">Not a Lead Gen Agency.<br>An Operating System.</h2>
      <p class="section-subtitle" style="max-width:700px;margin:0 auto;">Traditional lead gen agencies hand you contacts. Revenue OS™ builds the entire revenue engine inside your business — AI-powered targeting, automated outbound sequences, CRM orchestration, pipeline reporting, and managed appointment generation.</p>
    </div>
    <div class="ros-pillars fade-in">
      <div class="ros-pillar">
        <div class="ros-pillar-icon"><i class="fas fa-server"></i></div>
        <h4>Infrastructure Deployment</h4>
        <p>Complete CRM buildout, automated workflow installation, email domain configuration, mailbox setup, and deliverability architecture — live in 14 days.</p>
        <ul class="ros-pillar-list">
          <li>CRM Setup &amp; Configuration</li>
          <li>Automated Workflow Installation</li>
          <li>Lead Routing Systems</li>
          <li>Dashboarding &amp; Reporting</li>
        </ul>
      </div>
      <div class="ros-pillar ros-pillar-featured">
        <div class="ros-pillar-badge">Core Capability</div>
        <div class="ros-pillar-icon"><i class="fas fa-brain"></i></div>
        <h4>AI-Powered Outbound</h4>
        <p>Buyer signal detection, AI-driven personalization at scale, multi-touch email sequences, and video outreach — all running on autopilot.</p>
        <ul class="ros-pillar-list">
          <li>Buyer Signal Intelligence</li>
          <li>AI Personalization Engine</li>
          <li>Multi-Channel Sequencing</li>
          <li>Automated Follow-Up</li>
        </ul>
      </div>
      <div class="ros-pillar">
        <div class="ros-pillar-icon"><i class="fas fa-funnel-dollar"></i></div>
        <h4>Pipeline Generation</h4>
        <p>End-to-end outbound management from ICP targeting to qualified appointment booking and pipeline reporting.</p>
        <ul class="ros-pillar-list">
          <li>ICP Development</li>
          <li>Messaging Strategy</li>
          <li>Campaign Management</li>
          <li>Appointment Setting</li>
        </ul>
      </div>
      <div class="ros-pillar">
        <div class="ros-pillar-icon"><i class="fas fa-cogs"></i></div>
        <h4>RevOps Management</h4>
        <p>Ongoing campaign optimization, email deliverability management, AI data enrichment, lead nurture automation, and workflow maintenance.</p>
        <ul class="ros-pillar-list">
          <li>Deliverability Management</li>
          <li>AI Data Enrichment</li>
          <li>Nurture Automation</li>
          <li>KPI Reporting</li>
        </ul>
      </div>
      <div class="ros-pillar">
        <div class="ros-pillar-icon"><i class="fas fa-sitemap"></i></div>
        <h4>CRM + Workflow Automation</h4>
        <p>Team communication integrations, multi-step workflow automation, AI meeting intelligence, and full pipeline visibility across your entire team.</p>
        <ul class="ros-pillar-list">
          <li>Workflow Orchestration</li>
          <li>AI Meeting Intelligence</li>
          <li>Real-Time Pipeline Visibility</li>
          <li>Team Integrations</li>
        </ul>
      </div>
      <div class="ros-pillar">
        <div class="ros-pillar-icon"><i class="fas fa-users-cog"></i></div>
        <h4>Managed Execution</h4>
        <p>We don't hand you software and walk away. Our team actively runs your outbound system, manages campaigns, and optimizes performance every month.</p>
        <ul class="ros-pillar-list">
          <li>Dedicated RevOps Support</li>
          <li>Monthly Strategy Reviews</li>
          <li>Performance Optimization</li>
          <li>Ongoing System Maintenance</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- TIMELINE -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">How It Works</span>
      <h2 class="section-title">From Zero to Pipeline in 14 Days</h2>
    </div>
    <div class="ros-timeline fade-in">
      <div class="ros-tl-item">
        <div class="ros-tl-phase">Week 1–2</div>
        <div class="ros-tl-content">
          <h4>Infrastructure Buildout</h4>
          <p>Ideal customer profiling, CRM deployment, workflow setup, email domain configuration, mailbox warm-up, and campaign development.</p>
          <div class="ros-tl-tags"><span>CRM Setup</span><span>Domain Config</span><span>Signal Systems</span><span>ICP Refinement</span></div>
        </div>
      </div>
      <div class="ros-tl-item">
        <div class="ros-tl-phase">Week 2–4</div>
        <div class="ros-tl-content">
          <h4>Outbound Activation</h4>
          <p>Email campaigns live, LinkedIn outreach active, AI personalization running, video outreach launched, and first replies flowing in.</p>
          <div class="ros-tl-tags"><span>Email Live</span><span>LinkedIn Active</span><span>AI Personalization</span><span>First Replies</span></div>
        </div>
      </div>
      <div class="ros-tl-item">
        <div class="ros-tl-phase">Week 4–8</div>
        <div class="ros-tl-content">
          <h4>Pipeline Acceleration</h4>
          <p>Qualified meetings booked, pipeline building, nurture workflows compounding, multi-touch engagement hitting full stride.</p>
          <div class="ros-tl-tags"><span>Qualified Meetings</span><span>Pipeline Building</span><span>5–15 Meetings/Mo</span><span>Nurture Active</span></div>
        </div>
      </div>
      <div class="ros-tl-item">
        <div class="ros-tl-phase">Month 4+</div>
        <div class="ros-tl-content">
          <h4>Compounding Growth</h4>
          <p>10–30+ meetings per month, compounding nurture effects, improved targeting precision, and referral opportunities.</p>
          <div class="ros-tl-tags"><span>10–30+ Meetings/Mo</span><span>Compounding Nurture</span><span>Improved Targeting</span><span>Referral Engine</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">Pricing</span>
      <h2 style="color:var(--white);margin-bottom:16px;">Choose Your Revenue Infrastructure</h2>
      <p style="color:rgba(255,255,255,0.55);max-width:600px;margin:0 auto;">All engagements begin with a Revenue Infrastructure Review to identify the best-fit deployment model.</p>
    </div>
    <div class="ros-pricing-grid fade-in">
      <div class="ros-price-card">
        <div class="ros-price-tag-label">Revenue OS™ Foundation</div>
        <h3>Launch Your Outbound Infrastructure</h3>
        <p class="ros-price-ideal">Ideal for founder-led companies and small B2B teams ready to build a repeatable, scalable pipeline engine.</p>
        <div class="ros-price-row"><span class="ros-price-amount">$7,500</span><span class="ros-price-note">one-time setup</span></div>
        <div class="ros-price-row"><span class="ros-price-amount">$3,500</span><span class="ros-price-note">/month operations</span></div>
        <ul class="ros-price-includes">
          <li>CRM Infrastructure &amp; Pipeline Architecture</li>
          <li>Foundational &amp; Nurture Workflows</li>
          <li>Email + LinkedIn Outbound</li>
          <li>Deliverability Management</li>
          <li>Monthly Optimization</li>
          <li>Reporting Dashboard</li>
        </ul>
        <div class="ros-price-meta"><span>Best For:</span> &lt;$5M ARR · 6-Month Commitment</div>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Start Building Today</a>
      </div>
      <div class="ros-price-card ros-price-card-featured">
        <div class="ros-price-badge">Flagship Offer</div>
        <div class="ros-price-tag-label">HyperLaunch™ Growth Engine</div>
        <h3>AI-Powered Pipeline Acceleration</h3>
        <p class="ros-price-ideal">Designed for growth-stage B2B companies actively scaling sales who need predictable pipeline and advanced AI-powered targeting.</p>
        <div class="ros-price-row"><span class="ros-price-amount">$15,000</span><span class="ros-price-note">one-time setup</span></div>
        <div class="ros-price-row"><span class="ros-price-amount">$7,500</span><span class="ros-price-note">/month operations</span></div>
        <ul class="ros-price-includes">
          <li>Everything in Foundation</li>
          <li>Advanced Multi-Touch Workflows</li>
          <li>Multi-Channel Outbound + Orchestration</li>
          <li>AI-Powered Targeting &amp; Lead Scoring</li>
          <li>Buyer Intent &amp; Signal Tracking</li>
          <li>Website Visitor Workflows</li>
          <li>Personalized Outreach Systems</li>
          <li>Weekly Optimization Cadence</li>
        </ul>
        <div class="ros-price-meta"><span>Best For:</span> $3M–$25M+ ARR · 6–12 Month Commitment</div>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Accelerate My Pipeline</a>
      </div>
      <div class="ros-price-card">
        <div class="ros-price-tag-label">Enterprise Revenue Infrastructure™</div>
        <h3>Full Revenue Operating System</h3>
        <p class="ros-price-ideal">Built for enterprise organizations, PE-backed companies, and multi-team environments requiring full-scale revenue operations.</p>
        <div class="ros-price-row"><span class="ros-price-amount">$35,000</span><span class="ros-price-note">one-time setup</span></div>
        <div class="ros-price-row"><span class="ros-price-amount">$15,000</span><span class="ros-price-note">/month operations</span></div>
        <ul class="ros-price-includes">
          <li>Everything in Growth Engine</li>
          <li>Custom Enterprise Workflows</li>
          <li>Enterprise-Scale Outbound Orchestration</li>
          <li>Multi-Market / Multi-ICP</li>
          <li>Advanced Lead Scoring (Multi-Layered)</li>
          <li>Custom Integrations</li>
          <li>Strategic Revenue Consulting</li>
          <li>Embedded Strategic Support</li>
        </ul>
        <div class="ros-price-meta"><span>Best For:</span> $25M+ ARR · 12-Month Commitment</div>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Request Enterprise Consultation</a>
      </div>
    </div>
  </div>
</section>

<!-- VS TRADITIONAL -->
<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">Why Revenue OS™</span>
      <h2 class="section-title">The Old Way vs. Revenue OS™</h2>
    </div>
    <div class="ros-vs fade-in">
      <div class="ros-vs-col ros-vs-old">
        <h4>The Old Way</h4>
        <ul class="ros-vs-list ros-vs-list-bad">
          <li>SDR Salaries: $60–90k each</li>
          <li>RevOps Hires: $80–120k</li>
          <li>CRM Consultants: $20–50k</li>
          <li>Deliverability Setup: $10–30k</li>
          <li>Signal Intelligence Software: $800+/mo</li>
          <li>Email Sending Platform: $500+/mo</li>
          <li>Domains + Mailboxes: $500+/mo</li>
          <li>3–6 Month Ramp Time</li>
          <li>Constant Management Overhead</li>
          <li>High Hiring Risk</li>
        </ul>
      </div>
      <div class="ros-vs-divider"><span>VS</span></div>
      <div class="ros-vs-col ros-vs-new">
        <h4>Revenue OS™</h4>
        <ul class="ros-vs-list ros-vs-list-good">
          <li>Done-For-You Infrastructure</li>
          <li>AI Systems Deployed in 14 Days</li>
          <li>Full CRM + Workflow Suite</li>
          <li>Managed Outbound Execution</li>
          <li>Signal Intelligence Included</li>
          <li>Appointment Generation</li>
          <li>Nurture Automation</li>
          <li>Faster Time to Pipeline</li>
          <li>Lower Operational Burden</li>
          <li>No Hiring Risk</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ADD-ONS -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:48px;">
      <span class="section-label">Optional Add-Ons</span>
      <h2 class="section-title">Expand Your Revenue Infrastructure</h2>
    </div>
    <div class="ros-addons fade-in">
      <div class="ros-addon"><i class="fas fa-search"></i><span>Sales Recruiting Infrastructure</span></div>
      <div class="ros-addon"><i class="fas fa-chalkboard-teacher"></i><span>Sales Coaching &amp; Accountability</span></div>
      <div class="ros-addon"><i class="fas fa-database"></i><span>CRM Restructuring</span></div>
      <div class="ros-addon"><i class="fas fa-chart-line"></i><span>Advanced Reporting &amp; Forecasting</span></div>
      <div class="ros-addon"><i class="fas fa-route"></i><span>Inbound Lead Routing</span></div>
      <div class="ros-addon"><i class="fas fa-eye"></i><span>AI Visibility &amp; Market Positioning</span></div>
      <div class="ros-addon"><i class="fas fa-expand-arrows-alt"></i><span>Additional Markets or ICPs</span></div>
      <div class="ros-addon"><i class="fas fa-calendar-check"></i><span>Appointment Handling Support</span></div>
      <div class="ros-addon"><i class="fas fa-project-diagram"></i><span>Enterprise Workflow Customization</span></div>
    </div>
    <p class="text-center" style="color:var(--gray-600);margin-top:32px;font-size:0.9rem;">Pricing varies based on infrastructure complexity, outbound scale, number of campaigns, and customization requirements.</p>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="container">
    <h2>Build A Revenue Engine Designed To Scale.</h2>
    <p>Book your Revenue Infrastructure Review. We'll map out your pipeline requirements, identify bottlenecks, and show you exactly what it takes to hit your growth targets.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Book a Revenue Infrastructure Review</a>
      <a href="/assessment" class="btn btn-secondary btn-lg">Take the Assessment</a>
    </div>
    <div class="ros-commitment-badges">
      <span><i class="fas fa-check-circle"></i> 6-Month Initial Commitment</span>
      <span><i class="fas fa-check-circle"></i> Live in 14 Days</span>
      <span><i class="fas fa-check-circle"></i> Pipeline Reporting Included</span>
    </div>
  </div>
</section>

<style>
/* ── Revenue OS Hero ── */
.ros-hero { background: var(--navy); padding: 120px 0 80px; border-bottom: 1px solid rgba(173,120,5,0.15); }
.ros-hero-inner { text-align: center; max-width: 860px; margin: 0 auto; }
.ros-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(173,120,5,0.12); color: var(--green); border: 1px solid rgba(173,120,5,0.25); border-radius: 100px; padding: 6px 18px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 28px; }
.ros-hero-title { font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 900; color: var(--white); line-height: 1.1; margin-bottom: 24px; }
.ros-hero-sub { font-size: 1.15rem; color: rgba(255,255,255,0.65); max-width: 680px; margin: 0 auto 40px; line-height: 1.7; }
.ros-hero-stats { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; padding: 32px 0; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08); }
.ros-stat-num { font-size: 2rem; font-weight: 900; color: var(--green); line-height: 1; }
.ros-stat-label { font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; }

/* ── Pillars ── */
.ros-pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.ros-pillar { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 28px; transition: all var(--transition); position: relative; }
.ros-pillar:hover { border-color: var(--green); transform: translateY(-4px); box-shadow: var(--shadow); }
.ros-pillar-featured { border-color: rgba(173,120,5,0.4); background: rgba(173,120,5,0.02); }
.ros-pillar-badge { position: absolute; top: -12px; left: 24px; background: var(--green); color: var(--navy); font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 14px; border-radius: 100px; }
.ros-pillar-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.3rem; margin-bottom: 16px; }
.ros-pillar h4 { font-size: 1.05rem; color: var(--gray-800); margin-bottom: 10px; }
.ros-pillar p { font-size: 0.875rem; color: var(--gray-600); margin-bottom: 16px; line-height: 1.6; }
.ros-pillar-list { list-style: none; padding: 0; margin: 0; }
.ros-pillar-list li { font-size: 0.82rem; color: var(--gray-600); padding: 4px 0; padding-left: 16px; position: relative; }
.ros-pillar-list li::before { content: '→'; position: absolute; left: 0; color: var(--green); }

/* ── Timeline ── */
.ros-timeline { display: flex; flex-direction: column; gap: 0; position: relative; }
.ros-timeline::before { content:''; position:absolute; left:140px; top:0; bottom:0; width:2px; background:var(--green); opacity:0.2; }
.ros-tl-item { display: flex; gap: 48px; align-items: flex-start; padding: 36px 0; border-bottom: 1px solid var(--gray-200); }
.ros-tl-item:last-child { border-bottom: none; }
.ros-tl-phase { flex-shrink: 0; width: 140px; font-weight: 800; font-size: 0.85rem; color: var(--green); text-transform: uppercase; letter-spacing: 0.06em; padding-top: 4px; }
.ros-tl-content h4 { font-size: 1.1rem; color: var(--gray-800); margin-bottom: 8px; }
.ros-tl-content p { color: var(--gray-600); font-size: 0.95rem; margin-bottom: 14px; }
.ros-tl-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.ros-tl-tags span { font-size: 0.75rem; font-weight: 600; background: rgba(173,120,5,0.10); color: var(--green); border-radius: 100px; padding: 4px 12px; }

/* ── Pricing ── */
.ros-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
.ros-price-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 36px 30px; transition: all var(--transition); position: relative; }
.ros-price-card:hover { border-color: rgba(173,120,5,0.4); }
.ros-price-card-featured { border-color: rgba(173,120,5,0.5); background: rgba(173,120,5,0.05); }
.ros-price-badge { position: absolute; top: -12px; left: 24px; background: var(--green); color: var(--navy); font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 14px; border-radius: 100px; }
.ros-price-tag-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 8px; }
.ros-price-card h3 { color: var(--white); font-size: 1.15rem; margin-bottom: 12px; }
.ros-price-ideal { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-bottom: 24px; line-height: 1.6; }
.ros-price-row { display: flex; align-items: baseline; gap: 10px; margin-bottom: 8px; }
.ros-price-amount { font-size: 1.8rem; font-weight: 900; color: var(--white); }
.ros-price-note { font-size: 0.8rem; color: rgba(255,255,255,0.4); }
.ros-price-includes { list-style: none; padding: 0; margin: 20px 0 16px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; }
.ros-price-includes li { font-size: 0.875rem; color: rgba(255,255,255,0.7); padding: 6px 0; padding-left: 20px; position: relative; }
.ros-price-includes li::before { content: '✓'; position: absolute; left: 0; color: var(--green); font-weight: 700; }
.ros-price-meta { font-size: 0.78rem; color: rgba(255,255,255,0.35); border-top: 1px solid rgba(255,255,255,0.06); padding-top: 16px; margin-top: 16px; }
.ros-price-meta span { color: var(--green); font-weight: 700; }

/* ── VS ── */
.ros-vs { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; align-items: center; max-width: 860px; margin: 0 auto; }
.ros-vs-col { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 36px 32px; }
.ros-vs-col h4 { font-size: 1rem; font-weight: 800; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.08em; }
.ros-vs-old h4 { color: rgba(0,0,0,0.35); }
.ros-vs-new h4 { color: var(--green); }
.ros-vs-list { list-style: none; padding: 0; margin: 0; }
.ros-vs-list li { padding: 8px 0; padding-left: 24px; font-size: 0.9rem; position: relative; border-bottom: 1px solid var(--gray-100); }
.ros-vs-list li:last-child { border-bottom: none; }
.ros-vs-list-bad li { color: var(--gray-600); }
.ros-vs-list-bad li::before { content: '✗'; position: absolute; left: 0; color: rgba(0,0,0,0.2); font-weight: 700; }
.ros-vs-list-good li { color: var(--gray-800); font-weight: 600; }
.ros-vs-list-good li::before { content: '✓'; position: absolute; left: 0; color: var(--green); font-weight: 700; }
.ros-vs-divider { display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; color: var(--gray-400); }

/* ── Add-Ons ── */
.ros-addons { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.ros-addon { display: flex; align-items: center; gap: 12px; background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 16px 20px; font-size: 0.9rem; color: var(--gray-800); font-weight: 600; transition: all var(--transition); }
.ros-addon:hover { border-color: var(--green); }
.ros-addon i { color: var(--green); font-size: 1rem; flex-shrink: 0; }

/* ── Commitment Badges ── */
.ros-commitment-badges { display: flex; justify-content: center; gap: 32px; flex-wrap: wrap; margin-top: 24px; }
.ros-commitment-badges span { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); }
.ros-commitment-badges i { color: var(--green); }

/* ── Responsive ── */
@media (max-width: 1100px) {
  .ros-pillars { grid-template-columns: repeat(2, 1fr); }
  .ros-pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
@media (max-width: 768px) {
  .ros-pillars { grid-template-columns: 1fr; }
  .ros-vs { grid-template-columns: 1fr; }
  .ros-vs-divider { padding: 16px 0; }
  .ros-timeline::before { display: none; }
  .ros-tl-item { flex-direction: column; gap: 8px; }
  .ros-addons { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .ros-hero-stats { gap: 24px; }
  .ros-addons { grid-template-columns: 1fr; }
}
</style>
`, serviceSchema('Revenue OS™', 'AI-Powered Revenue Infrastructure', 'Done-for-you outbound infrastructure, AI signal systems, CRM workflows, and managed pipeline generation — live in 14 days.', 'https://metagrowth.ventures/solutions/revenue-os', 'B2B Companies, Growth-Stage Startups, Enterprise')
, 'Revenue OS™ — AI-powered revenue infrastructure for B2B companies. Done-for-you outbound, CRM workflows, AI signal systems, and managed pipeline generation. Live in 14 days.')

// Schema helper
function serviceSchema(name: string, serviceType: string, description: string, url: string, audience: string): string {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "${name}",
  "serviceType": "${serviceType}",
  "description": "${description}",
  "url": "${url}",
  "provider": { "@type": "Organization", "name": "MetaGrowth Ventures", "url": "https://metagrowth.ventures" },
  "areaServed": "US",
  "audience": { "@type": "Audience", "audienceType": "${audience}" }
}
<\/script>`
}

// Shared helpers
function faqItem(q: string, a: string, isDark: boolean) {
  return `
  <div class="faq-item ${isDark ? '' : 'faq-item-light'}">
    <button class="faq-q ${isDark ? '' : 'faq-q-light'}">${q} <span class="faq-icon">+</span></button>
    <div class="faq-a ${isDark ? '' : 'faq-a-light'}">${a}</div>
  </div>`
}

function deliverable(icon: string, title: string, desc: string) {
  return `<div class="deliv-item"><i class="${icon} deliv-icon"></i><div><h4>${title}</h4><p>${desc}</p></div></div>`
}

function solDetailStyles() {
  return `<style>
.sol-detail-grid { display: grid; grid-template-columns: 1fr 340px; gap: 56px; align-items: start; }
.side-box { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px; }
.side-box h4 { color: var(--gray-800); margin-bottom: 20px; font-size: 1rem; }
.quick-fact { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--gray-200); font-size: 0.9rem; }
.quick-fact:last-of-type { border-bottom: none; }
.qf-label { color: var(--gray-400); font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
.quick-fact span:last-child { color: var(--gray-800); font-weight: 600; }
.fit-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 28px; }
.fit-card { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 28px; }
.fit-card.green-border { border-color: rgba(173,120,5,0.35); background: rgba(173,120,5,0.04); }
.fit-card h4 { color: var(--gray-800); margin-bottom: 4px; }
.includes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
.include-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 26px; transition: all var(--transition); }
.include-card:hover { border-color: var(--green); transform: translateY(-3px); box-shadow: var(--shadow); }
.inc-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.3rem; margin-bottom: 16px; }
.include-card h4 { color: var(--gray-800); margin-bottom: 8px; }
.include-card p { font-size: 0.875rem; color: var(--gray-600); }
.quarter-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.quarter-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 28px; transition: all var(--transition); }
.quarter-card:hover { border-color: var(--green); }
.qtr { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--green); font-weight: 700; margin-bottom: 12px; }
.quarter-card h4 { color: var(--white); margin-bottom: 10px; }
.quarter-card p { color: rgba(255,255,255,0.55); font-size: 0.875rem; }
.faq-list { margin-top: 40px; }
.transform-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.transform-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius); padding: 24px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.transform-before, .transform-after { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; padding: 4px 10px; border-radius: 100px; }
.transform-before { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.4); }
.transform-after { background: rgba(173,120,5,0.15); color: var(--green); }
.transform-item { color: rgba(255,255,255,0.5); font-size: 0.9rem; }
.transform-item.after { color: var(--white); font-weight: 600; }
.transform-arrow { color: var(--green); font-weight: 700; }
@media (max-width: 1100px) { .sol-detail-grid { grid-template-columns: 1fr; } .sol-detail-side { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; } .includes-grid { grid-template-columns: repeat(2, 1fr); } .quarter-grid { grid-template-columns: repeat(2, 1fr); } .fit-grid { grid-template-columns: 1fr; } .transform-grid { grid-template-columns: 1fr; } }
@media (max-width: 640px) { .includes-grid { grid-template-columns: 1fr; } .quarter-grid { grid-template-columns: 1fr; } .sol-detail-side { grid-template-columns: 1fr; } }
</style>`
}
