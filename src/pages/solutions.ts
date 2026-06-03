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

// CEO Growth Lab
export const ceoGrowthLabPage = () => page('CEO Growth Lab', `
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
`)

// Sales Growth Lab
export const salesGrowthLabPage = () => page('Sales Growth Lab', `
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
`)

// HyperLaunch
export const hyperlaunchPage = () => page('HyperLaunch Sales System', `
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
`)

// Managed W2 Sales Pods
export const managedSalesPodsPage = () => page('Managed W2 Sales Pods™', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Dedicated W2 Sales Team</div>
    <h1 class="hero-title">We Build, Recruit, Coach,<br>and <span class="accent">Manage Your W2 Sales Team</span></h1>
    <p class="hero-sub">Full-service W2 sales team buildout for companies that want dedicated employees, accountability, and results without managing every moving part internally.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Build My W2 Sales Team</a>
      <a href="/solutions/revenue-os" class="btn btn-secondary btn-lg">See Revenue OS First</a>
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
`)

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
`)

// Recruiting
export const recruitingPage = () => page('Recruiting Services', `
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
`)

// Fractional CRO
export const fractionalCROPage = () => page('Fractional Revenue Leadership™', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Fractional Revenue Leadership</div>
    <h1 class="hero-title">Fractional Revenue Leadership<br><span class="accent">Without Full-Time C-Suite Cost</span></h1>
    <p class="hero-sub">VP of Sales or CRO-level leadership embedded in your business — accountability, forecasting, team coaching, hiring guidance, and a disciplined revenue operating rhythm.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Add Revenue Leadership</a>
      <a href="/solutions/revenue-os" class="btn btn-secondary btn-lg">See Revenue OS First</a>
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
`)

// Precision Engagements
export const precisionEngagementsPage = () => page('Precision Engagements', `
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
`)

// Revenue OS
export const revenueOSPage = () => page('Revenue OS™ — AI-Powered Revenue Infrastructure', `

<!-- HERO -->
<section class="ros-hero">
  <div class="container ros-hero-inner">
    <div class="hero-eyebrow">AI-Powered Revenue Infrastructure</div>
    <h1 class="ros-hero-title">Stop Guessing.<br><span class="accent">Build a Revenue Machine.</span></h1>
    <p class="ros-hero-sub">MetaGrowth Revenue OS™ deploys done-for-you outbound infrastructure, AI signal systems, CRM workflows, and managed pipeline generation — so your team closes deals instead of chasing leads.</p>
    <div class="hero-cta-row" style="justify-content:center;margin-top:32px;">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Revenue Infrastructure Review</a>
      <a href="#pricing" class="btn btn-secondary btn-lg">See Pricing</a>
    </div>
    <div class="ros-trust-bar">
      <div class="ros-stat"><span class="ros-stat-num">14 Days</span><span class="ros-stat-label">To Full Infrastructure</span></div>
      <div class="ros-stat-divider"></div>
      <div class="ros-stat"><span class="ros-stat-num">10–30+</span><span class="ros-stat-label">Meetings/Month</span></div>
      <div class="ros-stat-divider"></div>
      <div class="ros-stat"><span class="ros-stat-num">AI-First</span><span class="ros-stat-label">Signal Intelligence</span></div>
    </div>
  </div>
</section>

<!-- NOT A LEAD GEN AGENCY -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">The Platform</span>
      <h2 class="section-title">Not a Lead Gen Agency.<br>An Operating System.</h2>
      <p class="section-subtitle">Traditional lead gen agencies hand you contacts. MetaGrowth Revenue OS™ builds the entire revenue engine inside your business — AI-powered targeting, automated outbound sequences, CRM orchestration, pipeline reporting, and managed appointment generation.</p>
      <p class="section-subtitle" style="margin-top:12px;">The infrastructure lives in our ecosystem — cloneable, template-driven, and built to compound operationally over time.</p>
    </div>
    <div class="ros-platform-grid fade-in">
      <div class="ros-platform-card ros-card-featured">
        <div class="ros-plat-icon"><i class="fas fa-server"></i></div>
        <div class="ros-plat-tag">Core Capability</div>
        <h4>Infrastructure Deployment</h4>
        <p>Complete CRM buildout, automated workflow installation, email domain configuration, mailbox setup, and deliverability architecture — live in 14 days.</p>
        <ul class="ros-plat-list">
          <li>CRM Setup &amp; Configuration</li>
          <li>Automated Workflow Installation</li>
          <li>Lead Routing Systems</li>
          <li>Dashboarding &amp; Reporting</li>
        </ul>
      </div>
      <div class="ros-platform-card">
        <div class="ros-plat-icon"><i class="fas fa-robot"></i></div>
        <h4>AI-Powered Outbound</h4>
        <p>Buyer signal detection, AI-driven personalization at scale, multi-touch email sequences, and video outreach — all running on autopilot.</p>
        <ul class="ros-plat-list">
          <li>Buyer Signal Intelligence</li>
          <li>AI Personalization Engine</li>
          <li>Multi-Channel Sequencing</li>
          <li>Automated Follow-Up</li>
        </ul>
      </div>
      <div class="ros-platform-card">
        <div class="ros-plat-icon"><i class="fas fa-funnel-dollar"></i></div>
        <h4>Pipeline Generation</h4>
        <p>End-to-end outbound management from ICP targeting to qualified appointment booking and pipeline reporting.</p>
        <ul class="ros-plat-list">
          <li>ICP Development</li>
          <li>Messaging Strategy</li>
          <li>Campaign Management</li>
          <li>Appointment Setting</li>
        </ul>
      </div>
      <div class="ros-platform-card">
        <div class="ros-plat-icon"><i class="fas fa-sync-alt"></i></div>
        <h4>RevOps Management</h4>
        <p>Ongoing campaign optimization, email deliverability management, AI data enrichment, lead nurture automation, and workflow maintenance.</p>
        <ul class="ros-plat-list">
          <li>Deliverability Management</li>
          <li>AI Data Enrichment</li>
          <li>Nurture Automation</li>
          <li>KPI Reporting</li>
        </ul>
      </div>
      <div class="ros-platform-card">
        <div class="ros-plat-icon"><i class="fas fa-project-diagram"></i></div>
        <h4>CRM + Workflow Automation</h4>
        <p>Team communication integrations, multi-step workflow automation, AI meeting intelligence, and full pipeline visibility.</p>
        <ul class="ros-plat-list">
          <li>Team Communication Integrations</li>
          <li>Automated Workflow Orchestration</li>
          <li>AI Meeting Intelligence</li>
          <li>Real-Time Pipeline Visibility</li>
        </ul>
      </div>
      <div class="ros-platform-card">
        <div class="ros-plat-icon"><i class="fas fa-users-cog"></i></div>
        <h4>Managed Execution</h4>
        <p>We don't hand you software and walk away. Our team actively runs your outbound system, manages campaigns, and optimizes performance every month.</p>
        <ul class="ros-plat-list">
          <li>Dedicated RevOps Support</li>
          <li>Monthly Strategy Reviews</li>
          <li>Performance Optimization</li>
          <li>Ongoing System Maintenance</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- LAUNCH TIMELINE -->
<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">Launch Timeline</span>
      <h2 style="color:var(--white);">From Zero to Pipeline in 8 Weeks</h2>
    </div>
    <div class="ros-timeline fade-in">
      <div class="ros-tl-item">
        <div class="ros-tl-week">Week 1–2</div>
        <div class="ros-tl-card">
          <h4>Infrastructure Buildout</h4>
          <p>Ideal customer profiling, CRM deployment, workflow setup, email domain configuration, mailbox warm-up, and campaign development.</p>
          <div class="ros-tl-tags"><span>CRM Setup</span><span>Domain Config</span><span>Signal Systems</span><span>ICP Refinement</span></div>
        </div>
      </div>
      <div class="ros-tl-item">
        <div class="ros-tl-week">Week 2–4</div>
        <div class="ros-tl-card">
          <h4>Outbound Activation</h4>
          <p>Email campaigns live, LinkedIn outreach active, AI personalization running, video outreach launched, and first replies flowing in.</p>
          <div class="ros-tl-tags"><span>Email Live</span><span>LinkedIn Active</span><span>AI Personalization</span><span>First Replies</span></div>
        </div>
      </div>
      <div class="ros-tl-item">
        <div class="ros-tl-week">Week 4–8</div>
        <div class="ros-tl-card">
          <h4>Pipeline Acceleration</h4>
          <p>Qualified meetings booked, pipeline building, nurture workflows compounding, multi-touch engagement hitting full stride.</p>
          <div class="ros-tl-tags"><span>Qualified Meetings</span><span>Pipeline Building</span><span>5–15 Meetings/Mo</span><span>Nurture Active</span></div>
        </div>
      </div>
      <div class="ros-tl-item">
        <div class="ros-tl-week">Month 4+</div>
        <div class="ros-tl-card ros-tl-gold">
          <h4>Compounding Growth</h4>
          <p>10–30+ meetings per month, compounding nurture effects, improved targeting precision, and referral opportunities.</p>
          <div class="ros-tl-tags ros-tl-tags-gold"><span>10–30+ Meetings/Mo</span><span>Compounding Nurture</span><span>Improved Targeting</span><span>Referral Engine</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="section" id="pricing">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:56px;">
      <span class="section-label">Pricing</span>
      <h2 class="section-title">Three Infrastructure Tiers</h2>
      <p class="section-subtitle">All engagements begin with a revenue infrastructure review to identify the best-fit deployment model.</p>
    </div>
    <div class="ros-pricing-grid fade-in">

      <!-- Tier 1 -->
      <div class="ros-price-card">
        <div class="ros-price-header">
          <div class="ros-price-tag">Revenue OS™ Foundation</div>
          <h3>Launch Your Outbound Infrastructure</h3>
          <p class="ros-price-desc">Ideal for founder-led companies and small B2B teams with little or no existing outbound infrastructure ready to build a repeatable, scalable pipeline engine.</p>
        </div>
        <div class="ros-price-amount">
          <div class="ros-price-row-main"><span class="ros-price-label">Infrastructure Deployment</span><span class="ros-price-val">$7,500<span class="ros-price-suffix"> one-time</span></span></div>
          <div class="ros-price-row-main"><span class="ros-price-label">Monthly Revenue Operations</span><span class="ros-price-val">$3,500<span class="ros-price-suffix">/mo</span></span></div>
        </div>
        <div class="ros-price-meta">
          <div class="ros-meta-item"><i class="fas fa-building"></i><span>Founder-led &amp; small B2B teams</span></div>
          <div class="ros-meta-item"><i class="fas fa-chart-line"></i><span>&lt;$5M ARR</span></div>
          <div class="ros-meta-item"><i class="fas fa-calendar-alt"></i><span>6-Month Initial Commitment</span></div>
          <div class="ros-meta-item"><i class="fas fa-rocket"></i><span>Live in 2–3 Weeks</span></div>
        </div>
        <a href="https://buy.stripe.com/6oU00ib671gNb3d7d714404" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Start Building Today</a>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="ros-not-sure">Not sure this is right for you? Book a call →</a>
      </div>

      <!-- Tier 2 FEATURED -->
      <div class="ros-price-card ros-price-featured">
        <div class="ros-price-badge">Flagship Offer</div>
        <div class="ros-price-header">
          <div class="ros-price-tag">HyperLaunch™ Growth Engine</div>
          <h3>AI-Powered Pipeline Acceleration</h3>
          <p class="ros-price-desc">Designed for growth-stage B2B companies actively scaling sales who need predictable pipeline, advanced AI-powered targeting, and a fully managed revenue infrastructure.</p>
        </div>
        <div class="ros-price-amount">
          <div class="ros-price-row-main"><span class="ros-price-label">Infrastructure Deployment</span><span class="ros-price-val">$15,000<span class="ros-price-suffix"> one-time</span></span></div>
          <div class="ros-price-row-main"><span class="ros-price-label">Monthly Revenue Operations</span><span class="ros-price-val">$7,500<span class="ros-price-suffix">/mo</span></span></div>
        </div>
        <div class="ros-price-meta">
          <div class="ros-meta-item"><i class="fas fa-building"></i><span>Growth-stage B2B companies</span></div>
          <div class="ros-meta-item"><i class="fas fa-chart-line"></i><span>$3M–$25M+ ARR</span></div>
          <div class="ros-meta-item"><i class="fas fa-calendar-alt"></i><span>6–12 Month Commitment</span></div>
          <div class="ros-meta-item"><i class="fas fa-rocket"></i><span>Live in 4–6 Weeks</span></div>
        </div>
        <a href="https://buy.stripe.com/3cI14m3DFf7Ddbl0OJ14405" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;background:var(--green);color:#fff;">Accelerate My Pipeline</a>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="ros-not-sure" style="color:rgba(255,255,255,0.5);">Not sure this is right for you? Book a call →</a>
      </div>

      <!-- Tier 3 -->
      <div class="ros-price-card">
        <div class="ros-price-header">
          <div class="ros-price-tag">Enterprise Revenue Infrastructure™</div>
          <h3>Full Revenue Operating System</h3>
          <p class="ros-price-desc">Built for enterprise organizations, PE-backed companies, and multi-team environments requiring full-scale revenue operations, strategic consulting, and white-glove deployment.</p>
        </div>
        <div class="ros-price-amount">
          <div class="ros-price-row-main"><span class="ros-price-label">Infrastructure Deployment</span><span class="ros-price-val">$35,000<span class="ros-price-suffix"> one-time</span></span></div>
          <div class="ros-price-row-main"><span class="ros-price-label">Monthly Revenue Operations</span><span class="ros-price-val">$15,000<span class="ros-price-suffix">/mo</span></span></div>
        </div>
        <div class="ros-price-meta">
          <div class="ros-meta-item"><i class="fas fa-building"></i><span>Enterprise &amp; PE-backed orgs</span></div>
          <div class="ros-meta-item"><i class="fas fa-chart-line"></i><span>$25M+ ARR</span></div>
          <div class="ros-meta-item"><i class="fas fa-calendar-alt"></i><span>12-Month Commitment</span></div>
          <div class="ros-meta-item"><i class="fas fa-rocket"></i><span>Live in 4–8 Weeks</span></div>
        </div>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Request Enterprise Consultation</a>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="ros-not-sure">Not sure this is right for you? Book a call →</a>
      </div>

    </div>
  </div>
</section>

<!-- COMPARISON TABLE -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:48px;">
      <span class="section-label">Feature Comparison</span>
      <h2 class="section-title">What's included at each tier</h2>
    </div>
    <div style="overflow-x:auto;" class="fade-in">
      <table class="compare-table ros-compare" style="max-width:900px;margin:0 auto;">
        <thead>
          <tr>
            <th>Features</th>
            <th>Foundation<br><span style="font-weight:400;font-size:0.75rem;color:rgba(255,255,255,0.5);">$7,500 + $3,500/mo</span></th>
            <th style="background:rgba(173,120,5,0.15);border-top:2px solid var(--green);">HyperLaunch™<br><span style="font-weight:400;font-size:0.75rem;color:var(--green);">$15,000 + $7,500/mo</span></th>
            <th>Enterprise<br><span style="font-weight:400;font-size:0.75rem;color:rgba(255,255,255,0.5);">$35,000 + $15,000/mo</span></th>
          </tr>
        </thead>
        <tbody>
          <tr class="compare-section-row"><td colspan="4">Core Infrastructure</td></tr>
          <tr><td>CRM Infrastructure</td><td class="yes">✓</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">✓</td></tr>
          <tr><td>Pipeline Architecture</td><td class="yes">✓</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">✓</td></tr>
          <tr><td>Reporting Dashboard</td><td class="yes">Included</td><td class="yes" style="background:rgba(173,120,5,0.06);">Advanced</td><td class="yes">Executive-Level</td></tr>
          <tr><td>Nurture Workflows</td><td class="yes">Included</td><td class="yes" style="background:rgba(173,120,5,0.06);">Advanced Multi-Touch</td><td class="yes">Enterprise Lifecycle</td></tr>
          <tr class="compare-section-row"><td colspan="4">Outbound Execution</td></tr>
          <tr><td>Email Outbound</td><td class="yes">✓</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">✓</td></tr>
          <tr><td>LinkedIn Outreach</td><td class="yes">✓</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">✓</td></tr>
          <tr><td>Multi-Channel Outbound</td><td class="no">—</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">✓</td></tr>
          <tr><td>Personalized Outreach Systems</td><td class="no">—</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">Fully Customized</td></tr>
          <tr><td>Deliverability Management</td><td class="yes">Included</td><td class="yes" style="background:rgba(173,120,5,0.06);">Advanced</td><td class="yes">Enterprise-Level</td></tr>
          <tr class="compare-section-row"><td colspan="4">AI &amp; Intelligence</td></tr>
          <tr><td>AI-Powered Targeting</td><td class="no">—</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">Enterprise-Level</td></tr>
          <tr><td>Buyer Intent &amp; Signal Tracking</td><td class="no">—</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">Advanced</td></tr>
          <tr><td>Lead Scoring</td><td class="no">—</td><td class="yes" style="background:rgba(173,120,5,0.06);">✓</td><td class="yes">Multi-Layered</td></tr>
          <tr class="compare-section-row"><td colspan="4">Support &amp; Optimization</td></tr>
          <tr><td>Monthly Optimization</td><td class="yes">Included</td><td class="yes" style="background:rgba(173,120,5,0.06);">Weekly Cadence</td><td class="yes">Embedded Strategic</td></tr>
          <tr><td>Strategic Revenue Consulting</td><td class="no">—</td><td class="yes" style="background:rgba(173,120,5,0.06);">Limited</td><td class="yes">✓</td></tr>
          <tr><td>Multi-Market / Multi-ICP</td><td class="no">—</td><td class="no" style="background:rgba(173,120,5,0.06);">—</td><td class="yes">✓</td></div></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- VS IN-HOUSE -->
<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:52px;">
      <span class="section-label">The Real Cost Comparison</span>
      <h2 style="color:var(--white);">Revenue OS™ vs. Building In-House</h2>
    </div>
    <div class="ros-vs-grid fade-in">
      <div class="ros-vs-col ros-vs-bad">
        <h5>Build In-House</h5>
        <ul>
          <li><i class="fas fa-times"></i> SDR Salaries: $60–90k each</li>
          <li><i class="fas fa-times"></i> RevOps Hires: $80–120k</li>
          <li><i class="fas fa-times"></i> CRM Consultants: $20–50k</li>
          <li><i class="fas fa-times"></i> Deliverability Setup: $10–30k</li>
          <li><i class="fas fa-times"></i> Signal Intelligence Software: $800+/mo</li>
          <li><i class="fas fa-times"></i> Email Sending Platform: $500+/mo</li>
          <li><i class="fas fa-times"></i> Domains + Mailboxes: $500+/mo</li>
          <li><i class="fas fa-times"></i> 3–6 Month Ramp Time</li>
          <li><i class="fas fa-times"></i> Constant Management Overhead</li>
          <li><i class="fas fa-times"></i> High Hiring Risk</li>
        </ul>
        <div class="ros-vs-total">$290,000–$600,000/yr</div>
      </div>
      <div class="ros-vs-arrow"><i class="fas fa-arrow-right"></i></div>
      <div class="ros-vs-col ros-vs-good">
        <h5>MetaGrowth Revenue OS™</h5>
        <ul>
          <li><i class="fas fa-check"></i> Done-For-You Infrastructure</li>
          <li><i class="fas fa-check"></i> AI Systems Deployed in 14 Days</li>
          <li><i class="fas fa-check"></i> Full CRM + Workflow Suite</li>
          <li><i class="fas fa-check"></i> Managed Outbound Execution</li>
          <li><i class="fas fa-check"></i> Signal Intelligence Included</li>
          <li><i class="fas fa-check"></i> Appointment Generation</li>
          <li><i class="fas fa-check"></i> Nurture Automation</li>
          <li><i class="fas fa-check"></i> Faster Time to Pipeline</li>
          <li><i class="fas fa-check"></i> Lower Operational Burden</li>
          <li><i class="fas fa-check"></i> No Hiring Risk</li>
        </ul>
        <div class="ros-vs-total ros-vs-total-good">$47,000–$135,000/yr</div>
      </div>
    </div>
    <p class="text-center" style="color:var(--green);font-weight:700;margin-top:32px;font-size:1.1rem;">Save $150k–$450k vs. in-house build</p>
  </div>
</section>

<!-- ADD-ONS -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:48px;">
      <span class="section-label">Optional Add-Ons</span>
      <h2 class="section-title">Additional Infrastructure Services</h2>
      <p class="section-subtitle">Pricing varies based on your specific requirements. All engagements begin with a revenue infrastructure review.</p>
    </div>
    <div class="gos-addons-grid fade-in">
      <div class="gos-addon"><i class="fas fa-search"></i><span>Sales Recruiting Infrastructure</span></div>
      <div class="gos-addon"><i class="fas fa-chalkboard-teacher"></i><span>Sales Coaching &amp; Accountability</span></div>
      <div class="gos-addon"><i class="fas fa-database"></i><span>CRM Restructuring</span></div>
      <div class="gos-addon"><i class="fas fa-chart-pie"></i><span>Advanced Reporting &amp; Forecasting</span></div>
      <div class="gos-addon"><i class="fas fa-filter"></i><span>Inbound Lead Routing</span></div>
      <div class="gos-addon"><i class="fas fa-eye"></i><span>AI Visibility &amp; Market Positioning</span></div>
      <div class="gos-addon"><i class="fas fa-expand-arrows-alt"></i><span>Additional Markets or ICPs</span></div>
      <div class="gos-addon"><i class="fas fa-calendar-check"></i><span>Appointment Handling Support</span></div>
      <div class="gos-addon"><i class="fas fa-cogs"></i><span>Enterprise Workflow Customization</span></div>
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section class="cta-section">
  <div class="container">
    <h2>Build A Revenue Engine Designed To Scale.</h2>
    <p>Deploy modern revenue infrastructure built to generate pipeline, improve operational efficiency, and support long-term growth.</p>
    <p style="margin-top:12px;opacity:0.8;">Book your Revenue Infrastructure Review. We'll map out your pipeline requirements, identify bottlenecks, and show you exactly what it takes to hit your growth targets.</p>
    <div class="ros-cta-badges">
      <span><i class="fas fa-check-circle"></i> 6-Month Initial Commitment</span>
      <span><i class="fas fa-check-circle"></i> Live in 14 Days</span>
      <span><i class="fas fa-check-circle"></i> Pipeline Reporting Included</span>
    </div>
    <div class="cta-row" style="margin-top:32px;">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Revenue Infrastructure Review</a>
      <a href="#pricing" class="btn btn-secondary btn-lg">See Pricing</a>
    </div>
  </div>
</section>

${solDetailStyles()}
<style>
/* ── Revenue OS Hero ─────────────────────────────────────────────────────── */
.ros-hero { min-height: calc(100vh - 72px); display: flex; align-items: center; justify-content: center; background: #0a0a0a url('/static/hero-texture.jpg') center/cover no-repeat; position: relative; padding: 100px 0 80px; }
.ros-hero::before { content:''; position:absolute; inset:0; background: linear-gradient(135deg,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.60) 100%); }
.ros-hero-inner { position:relative; z-index:1; max-width:820px; text-align:center; }
.ros-hero-title { font-size: clamp(2.6rem, 5.5vw, 4rem); font-weight: 800; color: var(--white); line-height: 1.1; margin: 16px 0 24px; }
.ros-hero-sub { font-size: 1.1rem; color: rgba(255,255,255,0.72); max-width: 680px; margin: 0 auto; line-height: 1.7; }
.ros-trust-bar { display: flex; align-items: center; justify-content: center; gap: 0; margin-top: 48px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.1); }
.ros-stat { text-align:center; padding: 0 36px; }
.ros-stat-num { display:block; font-size: 1.8rem; font-weight: 800; color: var(--green); line-height: 1.1; }
.ros-stat-label { display:block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.45); margin-top: 4px; }
.ros-stat-divider { width: 1px; height: 48px; background: rgba(255,255,255,0.12); }
/* ── Platform cards ──────────────────────────────────────────────────────── */
.ros-platform-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.ros-platform-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 28px 24px; transition: all var(--transition); }
.ros-platform-card:hover { border-color: var(--green); transform: translateY(-3px); box-shadow: var(--shadow); }
.ros-card-featured { border-color: var(--green); box-shadow: 0 0 0 1px var(--green); }
.ros-plat-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(173,120,5,0.1); display:flex; align-items:center; justify-content:center; color:var(--green); font-size:1.2rem; margin-bottom:12px; }
.ros-plat-tag { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: var(--green); margin-bottom: 6px; }
.ros-platform-card h4 { font-size: 0.95rem; color: var(--gray-800); margin-bottom: 10px; }
.ros-platform-card p { font-size: 0.82rem; color: var(--gray-600); line-height: 1.55; margin-bottom: 14px; }
.ros-plat-list { list-style: none; padding: 0; margin: 0; }
.ros-plat-list li { font-size: 0.78rem; color: var(--gray-600); padding: 4px 0 4px 16px; position:relative; border-bottom: 1px solid var(--gray-200); }
.ros-plat-list li:last-child { border-bottom: none; }
.ros-plat-list li::before { content:'✓'; position:absolute; left:0; color:var(--green); font-weight:700; font-size:0.72rem; }
/* ── Timeline ────────────────────────────────────────────────────────────── */
.ros-timeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.ros-tl-week { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); margin-bottom: 10px; }
.ros-tl-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 24px 20px; }
.ros-tl-gold { border-color: rgba(173,120,5,0.4); background: rgba(173,120,5,0.05); }
.ros-tl-card h4 { color: var(--white); font-size: 0.95rem; margin-bottom: 8px; }
.ros-tl-card p { color: rgba(255,255,255,0.55); font-size: 0.8rem; line-height: 1.55; margin-bottom: 14px; }
.ros-tl-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.ros-tl-tags span { font-size: 0.68rem; font-weight: 700; background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.5); border-radius: 100px; padding: 3px 10px; }
.ros-tl-tags-gold span { background: rgba(173,120,5,0.12); color: var(--green); }
/* ── Pricing ─────────────────────────────────────────────────────────────── */
.ros-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
.ros-price-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 28px; position: relative; }
.ros-price-featured { border-color: var(--green); box-shadow: 0 0 0 1px var(--green), var(--shadow-lg); background: var(--navy); }
.ros-price-badge { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:var(--green); color:var(--navy); font-size:0.7rem; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; padding:4px 16px; border-radius:100px; white-space:nowrap; }
.ros-price-tag { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); margin-bottom: 8px; }
.ros-price-card h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 10px; color: var(--gray-800); }
.ros-price-featured h3 { color: var(--white); }
.ros-price-desc { font-size: 0.82rem; color: var(--gray-600); line-height: 1.55; margin-bottom: 20px; }
.ros-price-featured .ros-price-desc { color: rgba(255,255,255,0.6); }
.ros-price-amount { border-top: 1px solid var(--gray-200); padding-top: 16px; margin-bottom: 16px; }
.ros-price-featured .ros-price-amount { border-color: rgba(255,255,255,0.12); }
.ros-price-row-main { display: flex; justify-content: space-between; align-items: baseline; padding: 8px 0; border-bottom: 1px solid var(--gray-200); }
.ros-price-featured .ros-price-row-main { border-color: rgba(255,255,255,0.08); }
.ros-price-row-main:last-child { border-bottom: none; }
.ros-price-label { font-size: 0.78rem; color: var(--gray-400); }
.ros-price-featured .ros-price-label { color: rgba(255,255,255,0.45); }
.ros-price-val { font-size: 1.1rem; font-weight: 800; color: var(--gray-800); }
.ros-price-featured .ros-price-val { color: var(--white); }
.ros-price-suffix { font-size: 0.72rem; font-weight: 500; color: var(--gray-400); }
.ros-price-featured .ros-price-suffix { color: rgba(255,255,255,0.4); }
.ros-price-meta { display: flex; flex-direction: column; gap: 8px; margin-bottom: 4px; }
.ros-meta-item { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--gray-600); }
.ros-price-featured .ros-meta-item { color: rgba(255,255,255,0.6); }
.ros-meta-item i { color: var(--green); width: 14px; }
.ros-not-sure { display:block; text-align:center; font-size:0.75rem; color:var(--gray-400); margin-top:12px; text-decoration:none; }
.ros-not-sure:hover { color:var(--green); }
/* ── Compare table section rows ─────────────────────────────────────────── */
.compare-section-row td { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.4); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; padding: 8px 16px; }
.ros-compare td:nth-child(3) { background: rgba(173,120,5,0.06); }
/* ── VS Section ──────────────────────────────────────────────────────────── */
.ros-vs-grid { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; align-items: center; max-width: 860px; margin: 0 auto; }
.ros-vs-col { border-radius: var(--radius-lg); padding: 32px 28px; }
.ros-vs-bad { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); }
.ros-vs-good { background: rgba(173,120,5,0.06); border: 1px solid rgba(173,120,5,0.3); }
.ros-vs-col h5 { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; color: rgba(255,255,255,0.4); }
.ros-vs-good h5 { color: var(--green); }
.ros-vs-col ul { list-style: none; padding: 0; margin: 0 0 20px; }
.ros-vs-col ul li { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.5); }
.ros-vs-good ul li { color: rgba(255,255,255,0.8); border-color: rgba(173,120,5,0.1); }
.ros-vs-bad ul li i { color: rgba(255,80,80,0.6); }
.ros-vs-good ul li i { color: var(--green); }
.ros-vs-total { font-size: 1.1rem; font-weight: 800; color: rgba(255,255,255,0.4); text-align: center; }
.ros-vs-total-good { color: var(--green); }
.ros-vs-arrow { display:flex; align-items:center; justify-content:center; font-size:1.8rem; color:var(--green); }
/* ── CTA badges ──────────────────────────────────────────────────────────── */
.ros-cta-badges { display:flex; flex-wrap:wrap; justify-content:center; gap:20px; margin-top:28px; }
.ros-cta-badges span { font-size:0.82rem; color:rgba(255,255,255,0.6); display:flex; align-items:center; gap:6px; }
.ros-cta-badges i { color:var(--green); }
/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width:1100px) { .ros-platform-grid { grid-template-columns: repeat(2,1fr); } .ros-pricing-grid { grid-template-columns: 1fr; } .ros-timeline { grid-template-columns: repeat(2,1fr); } }
@media (max-width:800px) { .ros-vs-grid { grid-template-columns:1fr; } .ros-vs-arrow { display:none; } .ros-trust-bar { flex-direction:column; gap:24px; } .ros-stat-divider { display:none; } }
@media (max-width:640px) { .ros-platform-grid { grid-template-columns:1fr; } .ros-timeline { grid-template-columns:1fr; } }
</style>
`)

// Managed 1099 Sales Teams
export const managed1099Page = () => page('Managed 1099 Sales Teams™', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">Flexible Sales Coverage</div>
    <h1 class="hero-title">Managed 1099 Sales Teams™<br><span class="accent">Scale Without the Payroll Risk</span></h1>
    <p class="hero-sub">MetaGrowth builds and manages a flexible 1099 sales force backed by Revenue OS infrastructure, outreach systems, CRM discipline, and performance management.</p>
    <div class="hero-cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Explore 1099 Sales Team Buildout</a>
      <a href="/solutions/revenue-os" class="btn btn-secondary btn-lg">See Revenue OS First</a>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <div class="sol-detail-grid fade-in">
      <div class="sol-detail-main">
        <span class="section-label">Why 1099 Sales Teams</span>
        <h2 class="section-title">More market coverage. Lower fixed-cost risk. Real execution.</h2>
        <p style="font-size:1.05rem;color:var(--gray-600);margin-bottom:24px;">A managed 1099 sales force gives you the ability to expand your sales capacity without adding fixed W2 payroll. It's an ideal model for companies testing new markets, building pipeline fast, or scaling before committing to full-time hires.</p>
        <ul class="check-list" style="margin-bottom:28px;">
          <li>Expand sales coverage without fixed salary overhead</li>
          <li>Test new markets or verticals before committing to W2 hires</li>
          <li>Generate pipeline faster with a trained, managed team</li>
          <li>Maintain performance standards through structured oversight</li>
          <li>Built on your Revenue OS so reps follow your process from day one</li>
        </ul>
      </div>
      <div class="sol-detail-side">
        <div class="side-box">
          <h4>Engagement Overview</h4>
          <div class="quick-fact"><span class="qf-label">Team Type</span><span>1099 Independent Reps</span></div>
          <div class="quick-fact"><span class="qf-label">Best For</span><span>$2M–$40M B2B</span></div>
          <div class="quick-fact"><span class="qf-label">Overhead</span><span>No fixed W2 payroll</span></div>
          <div class="quick-fact"><span class="qf-label">Management</span><span>MetaGrowth oversight</span></div>
          <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Book a Strategy Call</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:52px;">
      <span class="section-label">What's Included</span>
      <h2 class="section-title">Everything needed to build and run your 1099 sales team</h2>
    </div>
    <div class="includes-grid fade-in">
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-search"></i></div>
        <h4>1099 Rep Recruiting</h4>
        <p>We source, screen, and onboard independent sales reps who fit your product, market, and commission model.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-dollar-sign"></i></div>
        <h4>Commission Model Support</h4>
        <p>Commission plan design aligned to your margins, average deal size, and rep performance expectations.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-user-graduate"></i></div>
        <h4>Sales Onboarding</h4>
        <p>Structured onboarding so reps are productive quickly — process, messaging, CRM, and expectations.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-layer-group"></i></div>
        <h4>Growth OS™ Access</h4>
        <p>Reps operate within your Growth OS infrastructure — outreach systems, CRM workflows, and messaging frameworks.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-bullhorn"></i></div>
        <h4>Outreach Campaigns</h4>
        <p>LinkedIn and email outreach campaigns built and managed so reps have active pipeline from the start.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-chart-bar"></i></div>
        <h4>CRM Tracking &amp; Reporting</h4>
        <p>All activity tracked inside your CRM with dashboards for leadership visibility into rep performance.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-tasks"></i></div>
        <h4>Activity &amp; Performance Management</h4>
        <p>KPI benchmarks, weekly check-ins, and structured accountability to keep rep execution consistent.</p>
      </div>
      <div class="include-card">
        <div class="inc-icon"><i class="fas fa-sync-alt"></i></div>
        <h4>Ongoing Optimization</h4>
        <p>Continuous refinement of messaging, targeting, and process based on what's working in the field.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:52px;">
      <span class="section-label">W2 vs 1099 Comparison</span>
      <h2 style="color:var(--white);">Which model fits your situation?</h2>
    </div>
    <div style="overflow-x:auto;" class="fade-in">
      <table class="compare-table" style="max-width:800px;margin:0 auto;">
        <thead><tr><th>Factor</th><th>Managed W2 Sales Pods™</th><th>Managed 1099 Sales Teams™</th></tr></thead>
        <tbody>
          <tr><td>Employment Type</td><td class="yes">W2 Employee (on your payroll)</td><td class="yes">1099 Independent Contractor</td></tr>
          <tr><td>Fixed Payroll Cost</td><td class="no">Yes — base salary + benefits</td><td class="yes">No — commission-based only</td></tr>
          <tr><td>Speed to Deploy</td><td class="no">4–8 weeks (recruiting + onboarding)</td><td class="yes">2–4 weeks</td></tr>
          <tr><td>Best For</td><td class="yes">Committed headcount growth</td><td class="yes">Market testing, fast expansion</td></tr>
          <tr><td>Revenue OS Required</td><td class="yes">Yes (foundation first)</td><td class="yes">Yes (foundation first)</td></tr>
          <tr><td>MetaGrowth Management</td><td class="yes">Full oversight included</td><td class="yes">Full oversight included</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Build a flexible sales team without the full-time payroll risk.</h2>
    <p>Book a strategy call and we'll assess whether a 1099 model is the right fit for your current stage, market, and growth goals.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">Explore 1099 Sales Team Buildout</a>
      <a href="/solutions/managed-sales-pods" class="btn btn-secondary btn-lg">Compare W2 Sales Pods</a>
    </div>
  </div>
</section>
${solDetailStyles()}
`)

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
`, '', 'Growth OS™ — centralized outbound revenue infrastructure for B2B sales teams. CRM workflows, AI-assisted outreach, pipeline visibility, and operational accountability.')

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
