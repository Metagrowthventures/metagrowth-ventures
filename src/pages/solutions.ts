import { page } from '../layout'

export const solutionsPage = () => page({
  path: '/solutions',
  title: 'Solutions',
  llm: {
    pageType: 'collection',
    summary: 'MetaGrowth Ventures offers eight distinct revenue solutions: CEO Growth Lab, Sales Growth Lab, HyperLaunch Sales System, Managed Sales Pods, Commission-Only Infrastructure, Recruiting Services, Fractional CRO, and Precision Engagements. Engagement is matched to company stage, team, and bottleneck.',
    audience: 'B2B founders, CEOs, and sales leaders evaluating which engagement fits their stage and bottleneck.',
    outcomes: ['Pick the right MetaGrowth engagement for your stage', 'See all eight solution lines in one place', 'Move from analysis to a strategy call'],
    keywords: ['B2B sales solutions', 'fractional CRO', 'sales recruiting', 'managed sales pod', 'commission-only sales'],
    primaryCta: { label: 'Book a 30-min Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  content: `
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
      <a href="/solutions/ceo-growth-lab" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-flask"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">For CEOs</div>
          <h3>CEO Growth Lab</h3>
          <p>Precision peer network with monthly coaching, quarterly strategy sessions, and executive accountability for growth-oriented CEOs.</p>
          <div class="fsol-outcome">Key Outcome: Strategic clarity and peer accountability</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/sales-growth-lab" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-chart-bar"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">For Sales Leaders</div>
          <h3>Sales Growth Lab</h3>
          <p>Move from reactive sales management to disciplined revenue leadership with a full Sales OS and accountability rhythm.</p>
          <div class="fsol-outcome">Key Outcome: Structured execution and measurable performance</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/hyperlaunch" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-rocket"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">Infrastructure Build</div>
          <h3>HyperLaunch Sales System</h3>
          <p>90-day sales operating system build — ICP, process, CRM, messaging, commission modeling, KPI dashboards, and onboarding.</p>
          <div class="fsol-outcome">Key Outcome: Complete sales infrastructure deployed in 90 days</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/managed-sales-pods" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-cogs"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">Done-For-You</div>
          <h3>Managed Sales Pods</h3>
          <p>Full-service revenue execution — we recruit, onboard, train, manage, and optimize your sales pod so you can focus on the business.</p>
          <div class="fsol-outcome">Key Outcome: Fully managed revenue engine with KPI enforcement</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/commission-only" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-percentage"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">Performance-Based</div>
          <h3>Commission-Only Infrastructure</h3>
          <p>Scale your sales team without fixed salary overhead using a fully supported 1099 rep model with training, CRM, and systems.</p>
          <div class="fsol-outcome">Key Outcome: Scalable revenue without fixed payroll risk</div>
        </div>
        <div class="fsol-arrow"><i class="fas fa-arrow-right"></i></div>
      </a>
      <a href="/solutions/recruiting" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-search"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">Talent Acquisition</div>
          <h3>Recruiting Services</h3>
          <p>Structured screening, behavioral assessments, and deep vetting to hire SDRs, AEs, and sales leaders who actually produce.</p>
          <div class="fsol-outcome">Key Outcome: Better talent density through disciplined vetting</div>
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
      <a href="/solutions/precision-engagements" class="full-sol-card">
        <div class="fsol-icon"><i class="fas fa-crosshairs"></i></div>
        <div class="fsol-body">
          <div class="fsol-tag">Targeted Projects</div>
          <h3>Precision Engagements</h3>
          <p>Focused, fast interventions for specific revenue bottlenecks — playbooks, comp plans, CRM audits, outreach sequences, and more.</p>
          <div class="fsol-outcome">Key Outcome: Specific bottleneck solved fast without a retainer</div>
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
` })

// CEO Growth Lab
export const ceoGrowthLabPage = () => page({
  path: '/solutions/ceo-growth-lab',
  title: 'CEO Growth Lab',
  llm: {
    pageType: 'solution',
    summary: 'A precision peer network for growth-oriented B2B CEOs combining monthly 1:1 coaching, group labs, and quarterly deep-dive strategy sessions.',
    audience: 'B2B CEOs and founders running growth-stage companies who need executive accountability and a peer cohort of comparable-stage operators.',
    outcomes: ['Strategic clarity at the CEO level', 'Executive accountability and a peer cohort', 'Quarterly deep-dive strategy resets'],
    bestFit: 'Founders professionalizing how they lead, not just how they sell.',
    pricing: 'Quoted after diagnostic strategy call. Membership-based engagement.',
    keywords: ['CEO peer group', 'CEO mastermind alternative', 'CEO coaching B2B', 'executive accountability'],
    primaryCta: { label: 'Apply / Book Intro Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  service: {
    name: 'CEO Growth Lab',
    description: 'Precision peer network with monthly coaching and quarterly strategy sessions for growth-oriented B2B CEOs.',
    serviceType: 'Executive Peer Group & Coaching',
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">For CEOs</div>
    <h1 class="hero-title">Precision Peer Network for <span class="accent">Growth-Oriented CEOs</span></h1>
    <p class="hero-sub">Strategic clarity, systems review, and leadership calibration for CEOs seeking control, consistency, and scale.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Apply for CEO Growth Lab</a>
      <a href="/contact" class="btn btn-secondary btn-lg">Contact MetaGrowth</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sol-detail-grid fade-in">
      <div class="sol-detail-main">
        <span class="section-label">Who This Is For</span>
        <h2 class="section-title">Built for CEOs who refuse to grow alone</h2>
        <p style="font-size:1.1rem;color:var(--gray-600);margin-bottom:28px;">The CEO Growth Lab is a structured peer accountability and advisory program for founders and chief executives who want more than a mastermind group. You get strategic guidance, peer-level accountability, and a network that challenges you to grow at the systems level — not just the tactical level.</p>
        <div class="fit-grid">
          <div class="fit-card green-border">
            <h4>This IS for you if...</h4>
            <ul class="check-list" style="margin-top:14px;">
              <li>You're a founder or CEO of a growth-stage B2B company</li>
              <li>Revenue is between $1M and $40M and you want more control</li>
              <li>You want peer-level accountability, not just coaching</li>
              <li>You're ready to invest in leadership discipline and strategic clarity</li>
              <li>You feel isolated in decisions and want a trusted peer group</li>
            </ul>
          </div>
          <div class="fit-card gray-border">
            <h4>This is NOT for you if...</h4>
            <ul style="margin-top:14px;display:flex;flex-direction:column;gap:10px;">
              <li style="color:var(--gray-600);font-size:0.9rem;">✗ You want tactical support without strategic commitment</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✗ You're unwilling to share and be held accountable</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✗ You want a passive information program</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✗ You're not coachable or open to external perspective</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sol-detail-side">
        <div class="side-box">
          <h4>Quick Facts</h4>
          <div class="quick-fact"><span class="qf-label">Format</span><span>Monthly group + 1:1</span></div>
          <div class="quick-fact"><span class="qf-label">Commitment</span><span>12 months</span></div>
          <div class="quick-fact"><span class="qf-label">Group Size</span><span>8–12 CEOs</span></div>
          <div class="quick-fact"><span class="qf-label">Industry</span><span>B2B Focused</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Apply Now</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">What's Included</span>
      <h2 class="section-title">Everything you need to lead revenue with confidence</h2>
    </div>
    <div class="includes-grid fade-in">
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-user-circle"></i></div>
        <h4>Monthly 1:1 Coaching</h4>
        <p>Dedicated private coaching session focused on your specific challenges, decisions, and leadership priorities.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-users"></i></div>
        <h4>Monthly Group Growth Lab</h4>
        <p>Structured peer session with 8–12 CEOs. Hot seats, shared challenges, and collective problem-solving.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-map-marked-alt"></i></div>
        <h4>Quarterly Strategy Deep Dives</h4>
        <p>Half-day or full-day sessions focused on revenue architecture, growth planning, and systems review.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-microphone"></i></div>
        <h4>Guest Expert Sessions</h4>
        <p>Access to domain experts in sales systems, recruiting, finance, marketing, and operations.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-laptop"></i></div>
        <h4>Digital Growth Hub Access</h4>
        <p>Private member portal with templates, playbooks, assessments, and recorded sessions from previous labs.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-network-wired"></i></div>
        <h4>Peer Network</h4>
        <p>Vetted, non-competing CEO peer group for introductions, referrals, and ongoing accountability.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Quarterly Focus Framework</span>
      <h2 style="color:var(--white);margin-bottom:40px;">Four quarters. Four pillars. One operating rhythm.</h2>
    </div>
    <div class="quarter-grid fade-in">
      <div class="quarter-card">
        <div class="qtr">Q1</div>
        <h4>Revenue Architecture</h4>
        <p>Assess current infrastructure. Define ICP, pipeline stages, and accountability model.</p>
      </div>
      <div class="quarter-card">
        <div class="qtr">Q2</div>
        <h4>Talent &amp; Team</h4>
        <p>Recruiting model, team assessment, compensation design, and performance management.</p>
      </div>
      <div class="quarter-card">
        <div class="qtr">Q3</div>
        <h4>Execution &amp; Scale</h4>
        <p>CRM optimization, cadence systems, coaching rhythms, and process refinement.</p>
      </div>
      <div class="quarter-card">
        <div class="qtr">Q4</div>
        <h4>Leadership &amp; Vision</h4>
        <p>Strategic planning, leadership elevation, and roadmap for the next 12 months.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container" style="max-width:760px;">
    <div class="text-center fade-in"><span class="section-label">FAQ</span><h2 class="section-title">Frequently Asked Questions</h2></div>
    <div class="faq-list fade-in">
      ${faqItem('How is the CEO Growth Lab different from a mastermind?', 'Unlike typical masterminds, the CEO Growth Lab is structured around revenue infrastructure — not just networking or peer sharing. Every session has a defined framework, and 1:1 coaching ensures individual outcomes are tracked and delivered.', false)}
      ${faqItem('How are peer group members selected?', 'Members are vetted for stage, mindset, and coachability. Groups are intentionally non-competitive across industries to encourage open sharing.', false)}
      ${faqItem('How much time should I expect to invest?', 'Plan for 4–6 hours per month including the 1:1 session, group lab, and prep. Deep-dive quarters require an additional half or full day.', false)}
      ${faqItem('What happens if it\'s not the right fit?', 'We work hard on fit before acceptance. If the Lab isn\'t meeting expectations after Q1, we\'ll work with you to reassign to a different format or solution.', false)}
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready to lead revenue with structure?</h2>
    <p>Apply for the next CEO Growth Lab cohort and get clarity, accountability, and a peer network built for scale.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Apply for CEO Growth Lab</a>
      <a href="/contact" class="btn btn-secondary btn-lg">Ask a Question</a>
    </div>
  </div>
</section>
${solDetailStyles()}
` })

// Sales Growth Lab
export const salesGrowthLabPage = () => page({
  path: '/solutions/sales-growth-lab',
  title: 'Sales Growth Lab',
  llm: {
    pageType: 'solution',
    summary: 'A full Sales Operating System install plus accountability rhythm — weekly cadence, monthly reviews, quarterly resets — for B2B sales leaders moving from reactive management to disciplined revenue leadership.',
    audience: 'VPs of Sales and revenue leaders running existing sales teams that lack forecasting, pipeline discipline, or accountability rhythm.',
    outcomes: ['Sales OS installed and adopted', 'Predictable pipeline and forecast accuracy', 'Coaching and accountability rhythm running on its own'],
    bestFit: 'Sales leaders running a team but missing process, accountability, or forecasting infrastructure.',
    pricing: 'Engagements run 6 or 12 months. Quoted after diagnostic.',
    keywords: ['sales operating system', 'sales leadership coaching', 'pipeline accountability'],
    primaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Run the Revenue System Audit', url: 'https://metagrowth.ventures/revenue-system-audit' },
  },
  service: {
    name: 'Sales Growth Lab',
    description: 'Full Sales Operating System install with weekly accountability rhythm for B2B sales leaders.',
    serviceType: 'Sales Operating System & Leadership Coaching',
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">For Sales Leaders</div>
    <h1 class="hero-title">Structured Execution for <span class="accent">Sales Leaders</span></h1>
    <p class="hero-sub">Move from reactive management to disciplined revenue leadership with a Sales Operating System and real accountability.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Book a Sales Growth Lab Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">View All Solutions</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sol-detail-grid fade-in">
      <div class="sol-detail-main">
        <span class="section-label">Who This Is For</span>
        <h2 class="section-title">For sales leaders who are done being reactive</h2>
        <p style="font-size:1.1rem;color:var(--gray-600);margin-bottom:28px;">The Sales Growth Lab installs a Sales Operating System and accountability structure into your leadership practice. Whether you're a VP of Sales, a Director, or a founder running a small team — this program converts reactive, inconsistent leadership into a disciplined, data-driven revenue function.</p>
        <div class="fit-grid">
          <div class="fit-card green-border">
            <h4>Ideal Fit</h4>
            <ul class="check-list" style="margin-top:14px;">
              <li>VP or Director of Sales managing 2–15 reps</li>
              <li>Founders who are still the primary sales driver</li>
              <li>Sales leaders who lack a formal OS or cadence</li>
              <li>Leaders whose team underperforms despite quota setting</li>
              <li>Anyone who wants to move from managing to leading</li>
            </ul>
          </div>
          <div class="fit-card gray-border">
            <h4>Who Should NOT Join</h4>
            <ul style="margin-top:14px;display:flex;flex-direction:column;gap:10px;">
              <li style="color:var(--gray-600);font-size:0.9rem;">✗ Leaders who don't want to be held accountable</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✗ Those looking for tactical tips, not system change</li>
              <li style="color:var(--gray-600);font-size:0.9rem;">✗ Organizations unwilling to implement what's installed</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sol-detail-side">
        <div class="side-box">
          <h4>Quick Facts</h4>
          <div class="quick-fact"><span class="qf-label">Format</span><span>1:1 + Group</span></div>
          <div class="quick-fact"><span class="qf-label">Cadence</span><span>Weekly touchpoints</span></div>
          <div class="quick-fact"><span class="qf-label">Reporting</span><span>Monthly traction reports</span></div>
          <div class="quick-fact"><span class="qf-label">Includes</span><span>Sales OS Installation</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">What's Included</span><h2 class="section-title">Full-stack support for revenue leaders</h2></div>
    <div class="includes-grid fade-in">
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-user-tie"></i></div>
        <h4>1:1 Advisory Sessions</h4>
        <p>Private coaching and advisory focused on your specific pipeline, team, and leadership challenges.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-layer-group"></i></div>
        <h4>Sales OS Installation</h4>
        <p>We build and deploy a Sales Operating System tailored to your team — stages, KPIs, cadence, CRM, and accountability.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-sync"></i></div>
        <h4>Weekly Accountability Rhythm</h4>
        <p>Structured check-ins, pipeline reviews, and performance tracking to keep execution consistent and accountable.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-chalkboard-teacher"></i></div>
        <h4>SME Sessions</h4>
        <p>Subject matter expert access for recruiting, compensation design, messaging, and CRM optimization.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-file-alt"></i></div>
        <h4>Monthly Traction Reports</h4>
        <p>Structured reporting on KPIs, pipeline health, rep performance, and progress against goals.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-graduation-cap"></i></div>
        <h4>Coaching Frameworks</h4>
        <p>Templates, scorecards, and coaching playbooks your leaders can use to coach their reps effectively.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">Transformation Outcomes</span><h2 style="color:var(--white);margin-bottom:48px;">What changes when structure is installed</h2></div>
    <div class="transform-grid fade-in">
      <div class="transform-card">
        <div class="transform-before">BEFORE</div>
        <div class="transform-item">Reactive pipeline reviews</div>
        <div class="transform-arrow">→</div>
        <div class="transform-after">AFTER</div>
        <div class="transform-item after">Structured weekly pipeline discipline</div>
      </div>
      <div class="transform-card">
        <div class="transform-before">BEFORE</div>
        <div class="transform-item">Guesswork on forecast</div>
        <div class="transform-arrow">→</div>
        <div class="transform-after">AFTER</div>
        <div class="transform-item after">Stage-based forecast accuracy</div>
      </div>
      <div class="transform-card">
        <div class="transform-before">BEFORE</div>
        <div class="transform-item">No coaching cadence</div>
        <div class="transform-arrow">→</div>
        <div class="transform-after">AFTER</div>
        <div class="transform-item after">Defined rep coaching rhythm</div>
      </div>
      <div class="transform-card">
        <div class="transform-before">BEFORE</div>
        <div class="transform-item">Unclear rep expectations</div>
        <div class="transform-arrow">→</div>
        <div class="transform-after">AFTER</div>
        <div class="transform-item after">KPI-driven performance management</div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container" style="max-width:760px;">
    <div class="text-center fade-in"><span class="section-label">FAQ</span><h2 class="section-title">Common Questions</h2></div>
    <div class="faq-list fade-in">
      ${faqItem('How long does the Sales Growth Lab run?', 'Engagements are structured in 6 or 12-month commitments depending on your current state and goals.', false)}
      ${faqItem('Do I need a specific CRM to participate?', 'No. We work with your existing CRM or help you select and configure the right tool for your team size and stage.', false)}
      ${faqItem('How quickly will I see results?', 'Most clients see structural improvements within 30–45 days. Measurable pipeline and performance changes typically emerge by month 2 or 3.', false)}
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready to lead with discipline?</h2>
    <p>Book a call and we'll assess where your sales leadership is today and what structure would unlock the most growth.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Book a Sales Growth Lab Call</a>
    </div>
  </div>
</section>
${solDetailStyles()}
` })

// HyperLaunch
export const hyperlaunchPage = () => page({
  path: '/solutions/hyperlaunch',
  title: 'HyperLaunch Sales System',
  llm: {
    pageType: 'solution',
    summary: '90-day sales operating system build covering ICP definition, sales process, CRM configuration, messaging, commission modeling, KPI dashboards, and rep onboarding.',
    audience: 'Founder-led B2B companies graduating into a true sales team for the first time, or companies rebuilding a broken stack.',
    outcomes: ['Complete sales infrastructure deployed in 90 days', 'Documented, hireable, repeatable sales motion', 'CRM, KPIs, comp model, and onboarding all live'],
    bestFit: 'Founders moving out of founder-led sales who need infrastructure deployed fast.',
    pricing: '90-day fixed-scope build. Quoted after diagnostic.',
    keywords: ['90 day sales build', 'sales infrastructure', 'CRM setup B2B', 'commission modeling', 'sales onboarding'],
    primaryCta: { label: 'Book a HyperLaunch Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  service: {
    name: 'HyperLaunch Sales System',
    description: '90-day complete sales operating system build — ICP, process, CRM, messaging, commission, KPIs, onboarding.',
    serviceType: 'Sales Infrastructure Build',
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Infrastructure Build</div>
    <h1 class="hero-title">90-Day Sales <span class="accent">Operating System</span> Build</h1>
    <p class="hero-sub">We install the systems, process, messaging, KPIs, and CRM architecture needed to scale beyond founder-led sales — in 90 days.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Build My Sales System</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Compare Solutions</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sol-detail-grid fade-in">
      <div class="sol-detail-main">
        <span class="section-label">What HyperLaunch Delivers</span>
        <h2 class="section-title">Everything your sales engine needs to run without you</h2>
        <p style="font-size:1.1rem;color:var(--gray-600);margin-bottom:36px;">HyperLaunch is a 90-day intensive build of your complete Sales Operating System. We don't hand you a strategy deck — we install everything from ICP definition to CRM configuration and walk away with a system your team can run independently.</p>
        <div class="deliverables-grid">
          ${deliverable('fas fa-bullseye', 'ICP & Positioning', 'Ideal Customer Profile definition, segment prioritization, and competitive positioning framework.')}
          ${deliverable('fas fa-route', 'Sales Process Architecture', 'Stage-by-stage sales process with entry/exit criteria, objection handling, and conversion benchmarks.')}
          ${deliverable('fas fa-chart-pie', 'Forecast Framework', 'Pipeline staging, forecast model, and dashboard configuration tied to real revenue targets.')}
          ${deliverable('fas fa-dollar-sign', 'Commission Modeling', 'Rep compensation model aligned to business margins and growth-stage incentive strategy.')}
          ${deliverable('fas fa-comment-dots', 'Messaging & Scripts', 'ICP-specific outreach sequences, cold scripts, email cadences, and objection-handling frameworks.')}
          ${deliverable('fas fa-database', 'CRM Configuration', 'CRM setup, custom fields, pipeline stages, activity tracking, and reporting dashboards.')}
          ${deliverable('fas fa-tachometer-alt', 'KPI Dashboards', 'Leading and lagging indicator tracking — activity, conversion, pipeline velocity, and revenue metrics.')}
          ${deliverable('fas fa-user-check', 'Onboarding Systems', 'Rep ramp guide, first 30/60/90 day plan, product knowledge framework, and training sequence.')}
        </div>
      </div>
      <div class="sol-detail-side">
        <div class="side-box">
          <h4>HyperLaunch at a Glance</h4>
          <div class="quick-fact"><span class="qf-label">Duration</span><span>90 Days</span></div>
          <div class="quick-fact"><span class="qf-label">Format</span><span>Done-With-You</span></div>
          <div class="quick-fact"><span class="qf-label">Best For</span><span>$0–$5M Revenue</span></div>
          <div class="quick-fact"><span class="qf-label">Output</span><span>Full Sales OS</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Start the Build</a>
        </div>
        <div class="side-box" style="margin-top:20px;">
          <h4>Who HyperLaunch Is For</h4>
          <ul class="check-list" style="margin-top:14px;">
            <li>Founders ready to exit founder-led sales</li>
            <li>Companies hiring their first sales reps</li>
            <li>Teams without a defined sales process</li>
            <li>Companies whose CRM is unused or misconfigured</li>
            <li>Leaders who've hired without onboarding infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">The 90-Day Journey</span><h2 class="section-title">What your 90 days look like</h2></div>
    <div class="timeline fade-in">
      <div class="tl-item">
        <div class="tl-phase">Days 1–30</div>
        <div class="tl-content">
          <h4>Discovery &amp; Architecture</h4>
          <p>Deep diagnostic on your current revenue motion. ICP definition, positioning workshop, CRM audit, and process mapping. We identify every gap before we build anything.</p>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-phase">Days 31–60</div>
        <div class="tl-content">
          <h4>Build &amp; Installation</h4>
          <p>Sales process build, CRM configuration, messaging development, commission model design, and KPI framework installation. Every component gets built and documented.</p>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-phase">Days 61–90</div>
        <div class="tl-content">
          <h4>Activation &amp; Handoff</h4>
          <p>Team training, rep onboarding system delivery, live pipeline review, forecast calibration, and handoff with full documentation and playbooks.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">Before vs. After</span><h2 style="color:var(--white);margin-bottom:48px;">What changes after HyperLaunch</h2></div>
    <div class="ba-table-wrap fade-in">
      <table class="ba-table">
        <thead>
          <tr><th>Area</th><th>Before HyperLaunch</th><th>After HyperLaunch</th></tr>
        </thead>
        <tbody>
          <tr><td>Sales Process</td><td class="ba-before">Ad hoc, rep-dependent</td><td class="ba-after">Documented, stage-by-stage</td></tr>
          <tr><td>Pipeline Visibility</td><td class="ba-before">Gut feel or spreadsheets</td><td class="ba-after">CRM-driven, stage-weighted</td></tr>
          <tr><td>Messaging</td><td class="ba-before">Inconsistent, improvised</td><td class="ba-after">ICP-specific, scripted sequences</td></tr>
          <tr><td>Rep Ramp</td><td class="ba-before">Months of trial and error</td><td class="ba-after">30/60/90 day onboarding system</td></tr>
          <tr><td>Forecast</td><td class="ba-before">Optimistic guesswork</td><td class="ba-after">Stage-based probability model</td></tr>
          <tr><td>KPIs</td><td class="ba-before">Revenue only, reactive</td><td class="ba-after">Leading + lagging indicators tracked</td></tr>
          <tr><td>Compensation</td><td class="ba-before">Inconsistent, ad hoc</td><td class="ba-after">Margin-aligned commission model</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Build your sales system in 90 days.</h2>
    <p>Stop patching a broken process. Let's build the infrastructure your growth requires — in 90 focused days.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Build My Sales System</a>
      <a href="/case-studies" class="btn btn-secondary btn-lg">See Results</a>
    </div>
  </div>
</section>
${solDetailStyles()}
<style>
.deliverables-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 16px; }
.deliv-item {
  display: flex; gap: 16px; align-items: flex-start;
  background: var(--gray-50); border-radius: var(--radius);
  padding: 20px; border: 1px solid var(--gray-200);
  transition: all var(--transition);
}
.deliv-item:hover { border-color: var(--green); }
.deliv-icon { color: var(--green); font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; }
.deliv-item h4 { font-size: 0.95rem; color: var(--gray-800); margin-bottom: 4px; }
.deliv-item p { font-size: 0.825rem; color: var(--gray-600); }
.timeline { display: flex; flex-direction: column; gap: 0; margin-top: 48px; position: relative; }
.timeline::before { content:''; position:absolute; left:120px; top:0; bottom:0; width:2px; background:var(--green); opacity:0.2; }
.tl-item { display: flex; gap: 40px; align-items: flex-start; padding: 36px 0; border-bottom: 1px solid var(--gray-200); }
.tl-item:last-child { border-bottom: none; }
.tl-phase { flex-shrink:0; width:120px; font-weight:800; font-size:0.85rem; color:var(--green); text-transform:uppercase; letter-spacing:0.06em; padding-top:4px; }
.tl-content h4 { font-size:1.1rem; color:var(--gray-800); margin-bottom:8px; }
.tl-content p { color:var(--gray-600); font-size:0.95rem; }
.ba-table-wrap { overflow-x:auto; }
.ba-table { width:100%; border-collapse:collapse; }
.ba-table th { padding:14px 20px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.12); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.5); }
.ba-table td { padding:16px 20px; border-bottom:1px solid rgba(255,255,255,0.06); }
.ba-table td:first-child { color:rgba(255,255,255,0.85); font-weight:600; }
.ba-before { color:rgba(255,255,255,0.4); font-size:0.9rem; }
.ba-after { color:var(--green); font-size:0.9rem; font-weight:600; }
@media (max-width:768px) { .deliverables-grid { grid-template-columns:1fr; } .timeline::before { display:none; } .tl-item { flex-direction:column; gap:8px; } }
</style>
` })

// Managed Sales Pods
export const managedSalesPodsPage = () => page({
  path: '/solutions/managed-sales-pods',
  title: 'Managed Sales Pods',
  llm: {
    pageType: 'solution',
    summary: 'Full-service revenue execution. MetaGrowth recruits, onboards, trains, manages, and optimizes the sales pod. KPI enforcement is owned by MetaGrowth.',
    audience: 'B2B founders who do not want to build or manage a sales team in-house but need predictable pipeline and revenue.',
    outcomes: ['Fully managed revenue engine', 'No internal sales-management overhead', 'KPI accountability owned by MetaGrowth'],
    bestFit: 'Companies that want sales execution outsourced, not just advised.',
    pricing: 'Monthly retainer scaled to pod size. Quoted after diagnostic.',
    keywords: ['outsourced sales team', 'managed SDR pod', 'done-for-you sales', 'B2B sales as a service'],
    primaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  service: {
    name: 'Managed Sales Pods',
    description: 'Done-for-you sales execution — recruit, onboard, train, manage, and optimize a full sales pod.',
    serviceType: 'Outsourced Sales Team',
  },
  content: `
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
` })

// Commission Only
export const commissionOnlyPage = () => page({
  path: '/solutions/commission-only',
  title: 'Commission-Only Infrastructure',
  llm: {
    pageType: 'solution',
    summary: 'A fully supported 1099 commission-only rep model with training, CRM, scripts, and systems so B2B companies can scale sales without fixed payroll risk.',
    audience: 'Service firms, agencies, and product companies with healthy margins per deal that can sustain commission-only economics.',
    outcomes: ['Scalable revenue capacity without fixed payroll risk', 'Performance-based rep network with full infrastructure', 'Pay-for-results sales motion'],
    bestFit: 'Companies that want sales capacity but not the salary overhead — and that have margin per deal to fund attractive commissions.',
    pricing: 'Performance-based. System build fee plus rep commission structure quoted after diagnostic.',
    keywords: ['commission only sales', '1099 sales reps', 'performance based sales', 'sales without payroll'],
    primaryCta: { label: 'Book a Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  service: {
    name: 'Commission-Only Infrastructure',
    description: 'Performance-based 1099 sales rep network with full training, CRM, and system support.',
    serviceType: 'Commission-Only Sales Program',
  },
  content: `
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
` })

// Recruiting
export const recruitingPage = () => page({
  path: '/solutions/recruiting',
  title: 'Recruiting Services',
  llm: {
    pageType: 'solution',
    summary: 'Structured screening, behavioral assessments, and deep vetting to hire SDRs, AEs, and sales leaders who actually produce.',
    audience: 'B2B companies hiring sales talent who have been burned by mis-hires or lack a structured interview process.',
    outcomes: ['Better talent density through disciplined hiring', 'Fewer mis-hires and faster ramp', 'Structured interview process and behavioral fit'],
    bestFit: 'Companies hiring sales roles who do not have an internal recruiting function or want a more rigorous vetting process.',
    pricing: 'Per-role engagement. Quoted by role type.',
    keywords: ['B2B sales recruiting', 'SDR hiring', 'AE hiring', 'sales leadership recruiting', 'behavioral assessment sales'],
    primaryCta: { label: 'Book a Recruiting Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Download the Sales Team Diagnostic', url: 'https://metagrowth.ventures/static/sales-team-diagnostic.pdf' },
  },
  service: {
    name: 'MetaGrowth Recruiting Services',
    description: 'Structured screening and behavioral assessments for B2B sales hires — SDRs, AEs, and sales leaders.',
    serviceType: 'Sales Recruiting',
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Talent Acquisition</div>
    <h1 class="hero-title">Structured Screening. Deep Vetting.<br><span class="accent">Better Sales Hires.</span></h1>
    <p class="hero-sub">Hire SDRs, AEs, and sales leaders through a process designed to identify producers, not just polished interviewees.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Start a Search</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Compare Solutions</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">Roles We Recruit For</span>
      <h2 class="section-title">Sales talent acquisition built on process, not luck</h2>
      <p class="section-subtitle">Most hiring processes reward great interviewers. Ours rewards producers. We screen for the behaviors, mindsets, and track records that predict success in your specific environment.</p>
    </div>
    <div class="roles-grid fade-in">
      <div class="role-card"><i class="fas fa-phone-alt"></i><h4>Sales Development Reps (SDRs)</h4><p>Outbound prospectors and pipeline generators who can execute cadences and book quality meetings.</p></div>
      <div class="role-card"><i class="fas fa-handshake"></i><h4>Account Executives (AEs)</h4><p>Closers who can run a full sales cycle, manage complex stakeholders, and maintain disciplined pipeline hygiene.</p></div>
      <div class="role-card"><i class="fas fa-crown"></i><h4>Sales Leaders</h4><p>VP Sales, Directors, and Player-Coaches who can build culture, install process, and own revenue numbers.</p></div>
      <div class="role-card"><i class="fas fa-user-tie"></i><h4>Sales Managers</h4><p>Front-line managers who can coach reps, run productive pipeline reviews, and maintain accountability.</p></div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">The Recruiting Process</span><h2 class="section-title">Six stages of structured evaluation</h2></div>
    <div class="recruit-process fade-in">
      <div class="rp-step"><div class="rp-num">01</div><div class="rp-body"><h4>Resume Appraisal</h4><p>Detailed review of tenure, quota attainment, industry experience, and red flag identification against your specific role requirements.</p></div></div>
      <div class="rp-step"><div class="rp-num">02</div><div class="rp-body"><h4>Behavioral Assessment</h4><p>Validated assessment tool measuring drive, coachability, resilience, and sales-specific behavioral patterns that predict performance.</p></div></div>
      <div class="rp-step"><div class="rp-num">03</div><div class="rp-body"><h4>Phone Screening</h4><p>Structured screening call evaluating communication quality, career narrative, and basic qualification against role criteria.</p></div></div>
      <div class="rp-step"><div class="rp-num">04</div><div class="rp-body"><h4>Video Evaluation</h4><p>Recorded or live video interview assessing presence, professionalism, articulation, and role-play performance under pressure.</p></div></div>
      <div class="rp-step"><div class="rp-num">05</div><div class="rp-body"><h4>Leadership Interview</h4><p>Deep-dive interview with MetaGrowth leadership evaluating culture alignment, career motivation, and realistic expectations.</p></div></div>
      <div class="rp-step"><div class="rp-num">06</div><div class="rp-body"><h4>Finalist Presentation</h4><p>Curated shortlist of 2–3 vetted finalists presented to your team with full assessment summaries and our recommendation.</p></div></div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in"><span class="section-label">What Clients Receive</span><h2 style="color:var(--white);margin-bottom:48px;">Everything you need to hire confidently</h2></div>
    <div class="grid-3 fade-in" style="gap:20px;">
      <div class="card card-dark"><div class="icon-box"><i class="fas fa-file-alt"></i></div><h4>Full Candidate Package</h4><p>Resume, assessment results, interview notes, and our written recommendation for each finalist.</p></div>
      <div class="card card-dark"><div class="icon-box"><i class="fas fa-clipboard-check"></i></div><h4>Interview Scorecard</h4><p>Structured scorecard for your team to evaluate finalists consistently using the same criteria.</p></div>
      <div class="card card-dark"><div class="icon-box"><i class="fas fa-shield-alt"></i></div><h4>Replacement Guarantee</h4><p>If a placed candidate doesn't meet expectations within the guarantee period, we re-recruit at no additional charge.</p></div>
      <div class="card card-dark"><div class="icon-box"><i class="fas fa-user-graduate"></i></div><h4>Onboarding Framework</h4><p>30/60/90 day onboarding guide customized for the role and your specific environment.</p></div>
      <div class="card card-dark"><div class="icon-box"><i class="fas fa-check-double"></i></div><h4>Reference Check Summary</h4><p>Professional reference checks with structured questions and written summary of responses.</p></div>
      <div class="card card-dark"><div class="icon-box"><i class="fas fa-comments"></i></div><h4>Debrief Session</h4><p>Post-hire debrief to align on onboarding, early expectations, and first-30-day success criteria.</p></div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Stop hiring based on interviews alone.</h2>
    <p>Start a search with MetaGrowth Recruiting and get candidates who are evaluated on what actually predicts sales performance.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Start a Search</a>
      <a href="/contact" class="btn btn-secondary btn-lg">Ask About Roles</a>
    </div>
  </div>
</section>
${solDetailStyles()}
<style>
.roles-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.role-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 26px; text-align: center; transition: all var(--transition); }
.role-card:hover { border-color: var(--green); transform: translateY(-4px); box-shadow: var(--shadow); }
.role-card i { font-size: 2rem; color: var(--green); margin-bottom: 16px; display: block; }
.role-card h4 { color: var(--gray-800); margin-bottom: 10px; }
.role-card p { font-size: 0.875rem; color: var(--gray-600); }
.recruit-process { display: flex; flex-direction: column; gap: 0; margin-top: 48px; }
.rp-step { display: flex; gap: 32px; align-items: flex-start; padding: 32px 0; border-bottom: 1px solid var(--gray-200); }
.rp-step:last-child { border-bottom: none; }
.rp-num { font-size: 3rem; font-weight: 900; color: rgba(173,120,5,0.20); line-height: 1; flex-shrink: 0; min-width: 64px; }
.rp-body h4 { color: var(--gray-800); margin-bottom: 8px; }
.rp-body p { color: var(--gray-600); font-size: 0.95rem; }
@media (max-width: 900px) { .roles-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .roles-grid { grid-template-columns: 1fr; } }
</style>
` })

// Fractional CRO
export const fractionalCROPage = () => page({
  path: '/solutions/fractional-cro',
  title: 'Fractional CRO',
  llm: {
    pageType: 'solution',
    summary: 'Fractional Chief Revenue Officer engagement covering strategy ownership, accountability, hiring roadmap, forecasting, and performance management — without the cost of a full-time CRO.',
    audience: 'B2B companies between roughly $2M and $20M ARR where the founder is the de facto CRO and the role needs to be professionalized.',
    outcomes: ['Senior revenue ownership without full-time cost', 'Hiring roadmap and forecasting in place', 'Accountability and performance management systemized'],
    bestFit: 'Founders who are still doing the CRO job themselves and need a senior operator to take it over.',
    pricing: 'Monthly engagement fee. Quoted after diagnostic.',
    keywords: ['fractional CRO', 'fractional chief revenue officer', 'B2B revenue leadership'],
    primaryCta: { label: 'Book a Fractional CRO Discovery Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  service: {
    name: 'Fractional CRO',
    description: 'Senior revenue leadership and execution ownership without the full-time executive cost.',
    serviceType: 'Fractional Executive',
  },
  content: `
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
` })

// Precision Engagements
export const precisionEngagementsPage = () => page({
  path: '/solutions/precision-engagements',
  title: 'Precision Engagements',
  llm: {
    pageType: 'solution',
    summary: 'Targeted, fast interventions for specific revenue bottlenecks — playbook builds, comp plan redesigns, CRM audits, outreach cadence builds, messaging projects.',
    audience: 'B2B companies with a specific, well-scoped revenue problem who do not want to commit to a long retainer.',
    outcomes: ['Specific bottleneck solved fast', 'No long-term retainer required', 'Surgical fix on one area without rebuilding the stack'],
    bestFit: 'Companies whose stack is mostly working but need a focused fix on one component.',
    pricing: 'Fixed-scope project pricing. Quoted per engagement.',
    keywords: ['sales playbook build', 'comp plan redesign', 'CRM audit', 'outreach cadence build', 'sales messaging project'],
    primaryCta: { label: 'Book a Scoping Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  service: {
    name: 'Precision Engagements',
    description: 'Targeted, fast interventions for specific revenue bottlenecks. Fixed-scope projects without a retainer.',
    serviceType: 'Sales Consulting Project',
  },
  content: `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Targeted Projects</div>
    <h1 class="hero-title">Solve Specific Revenue <span class="accent">Bottlenecks Fast</span></h1>
    <p class="hero-sub">Targeted projects for companies that need a focused intervention without a long-term retainer commitment.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Request a Targeted Engagement</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">View All Solutions</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">Engagement Examples</span>
      <h2 class="section-title">Fast, focused, and outcome-specific</h2>
      <p class="section-subtitle">Precision Engagements are scoped, time-bound projects designed to solve a specific bottleneck — not replace a comprehensive program.</p>
    </div>
    <div class="pe-grid fade-in">
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-book"></i></div><h4>Sales Playbook</h4><p>Complete sales playbook including ICP, process, objection handling, scripts, and rep expectations.</p><div class="pe-timeline">2–3 weeks</div></div>
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-dollar-sign"></i></div><h4>Commission Modeling</h4><p>Commission plan design aligned to your margins, average deal size, and rep performance expectations.</p><div class="pe-timeline">1–2 weeks</div></div>
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-database"></i></div><h4>CRM Audit</h4><p>Full audit of your current CRM setup with actionable recommendations and configuration fixes.</p><div class="pe-timeline">1–2 weeks</div></div>
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-file-invoice-dollar"></i></div><h4>Comp Plan Redesign</h4><p>Redesign of your compensation plan to fix misaligned incentives and improve rep motivation and retention.</p><div class="pe-timeline">2 weeks</div></div>
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-comment-dots"></i></div><h4>Scripts &amp; Sequences</h4><p>ICP-specific cold outreach scripts, email sequences, LinkedIn messages, and call talk tracks.</p><div class="pe-timeline">1–2 weeks</div></div>
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-calendar-alt"></i></div><h4>Prospecting Cadence</h4><p>Multi-touch, multi-channel prospecting cadence with step-by-step outreach instructions for your team.</p><div class="pe-timeline">1 week</div></div>
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-user-tie"></i></div><h4>Founder Intensive</h4><p>One or two-day working session with a MetaGrowth advisor to diagnose and solve your most pressing revenue bottleneck.</p><div class="pe-timeline">1–2 days</div></div>
      <div class="pe-card"><div class="pe-icon"><i class="fas fa-search-plus"></i></div><h4>Revenue Audit</h4><p>Comprehensive audit of your revenue motion — process, team, pipeline, CRM, and messaging — with a written report and recommendations.</p><div class="pe-timeline">2–3 weeks</div></div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="grid-2 fade-in" style="gap:64px;align-items:center;">
      <div>
        <span class="section-label">Best Use Cases</span>
        <h2 style="color:var(--white);margin-bottom:20px;">When a Precision Engagement makes sense</h2>
        <ul class="check-list dark-list" style="margin-bottom:28px;">
          <li>You have a specific bottleneck that's blocking growth</li>
          <li>You're not ready for a full retainer but need expert help now</li>
          <li>You need something built fast — in days or weeks, not months</li>
          <li>You want to test MetaGrowth's approach before a larger commitment</li>
          <li>You have internal capability but need a specific component filled</li>
        </ul>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary">Request an Engagement</a>
      </div>
      <div>
        <span class="section-label">Project Formats</span>
        <h2 style="color:var(--white);margin-bottom:20px;">Flexible formats for every situation</h2>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div class="pillar-card"><h4>Fixed-Scope Deliverable</h4><p>Defined output, agreed scope, clear timeline. Ideal for playbooks, scripts, and comp plans.</p></div>
          <div class="pillar-card"><h4>Advisory Day</h4><p>Structured working session with a MetaGrowth advisor focused entirely on your challenge.</p></div>
          <div class="pillar-card"><h4>Audit + Report</h4><p>Diagnostic review with a written findings report and prioritized recommendations.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Have a specific bottleneck in mind?</h2>
    <p>Tell us what's blocking your growth and we'll scope the right targeted engagement — usually deliverable within 2–3 weeks.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Request a Targeted Engagement</a>
      <a href="/contact" class="btn btn-secondary btn-lg">Ask a Question</a>
    </div>
  </div>
</section>
${solDetailStyles()}
<style>
.pe-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.pe-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 28px 24px; transition: all var(--transition); }
.pe-card:hover { border-color: var(--green); transform: translateY(-4px); box-shadow: var(--shadow); }
.pe-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(173,120,5,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.2rem; margin-bottom: 14px; }
.pe-card h4 { color: var(--gray-800); margin-bottom: 8px; font-size: 1rem; }
.pe-card p { font-size: 0.85rem; color: var(--gray-600); margin-bottom: 14px; }
.pe-timeline { font-size: 0.78rem; font-weight: 700; color: var(--green); background: rgba(173,120,5,0.10); padding: 4px 12px; border-radius: 100px; display: inline-block; }
@media (max-width: 1100px) { .pe-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .pe-grid { grid-template-columns: 1fr; } }
</style>
` })

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
