import { page } from '../layout'

export const homePage = () => page({
  path: '/',
  title: 'Build a Predictable Revenue Engine',
  llm: {
    pageType: 'home',
    summary:
      'MetaGrowth Ventures is a Revenue Infrastructure & Executive Growth Firm. The company helps B2B founders, CEOs, and sales leaders install the systems, structure, talent, and leadership needed to scale revenue. Founded 2018 by CEO Josh Hirsch and co-founder Joe Arioto.',
    audience:
      'B2B founders, CEOs, and sales leaders running $1M–$50M ARR companies stuck in founder-led selling, missing quota, struggling to hire sales talent, or unable to forecast pipeline reliably.',
    outcomes: [
      'Move out of founder-led selling',
      'Install a documented, repeatable sales operating system',
      'Hire and ramp sales talent that actually produces',
      'Forecast pipeline with confidence',
    ],
    keywords: [
      'revenue infrastructure',
      'sales operating system',
      'fractional CRO',
      'B2B sales consulting',
      'founder-led sales',
      'sales recruiting',
    ],
    primaryCta: { label: 'Book a 30-min Strategy Call', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    secondaryCta: { label: 'Take the free Revenue Engine Assessment', url: 'https://metagrowth.ventures/assessment' },
  },
  content: `

<!-- HERO -->
<section class="home-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-glow"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-eyebrow">
        <span>Revenue Infrastructure &amp; Executive Growth Firm</span>
      </div>
      <h1 class="hero-title">
        Build a <span class="accent">Predictable</span><br>Revenue Engine
      </h1>
      <p class="hero-sub">
        MetaGrowth helps founders, CEOs, and sales leaders install the systems, structure, talent, and leadership needed to scale revenue with more control and less chaos.
      </p>
      <div class="hero-cta-row">
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary hero-cta-btn">
          <i class="fas fa-calendar-check"></i> Book a Strategy Call
        </a>
        <a href="/assessment" class="btn btn-secondary hero-cta-btn">
          Take Your Revenue Assessment
        </a>
        <a href="/solutions" class="btn btn-secondary hero-cta-btn">
          Explore Solutions
        </a>
      </div>
      <div class="hero-bullets">
        <div class="bullet-item"><span class="bullet-dot"></span>Revenue Architecture</div>
        <span class="bullet-divider">|</span>
        <div class="bullet-item"><span class="bullet-dot"></span>Talent Acquisition</div>
        <span class="bullet-divider">|</span>
        <div class="bullet-item"><span class="bullet-dot"></span>Sales Execution</div>
        <span class="bullet-divider">|</span>
        <div class="bullet-item"><span class="bullet-dot"></span>Executive Leadership</div>
      </div>
      <div class="hero-proof-bar">
        <div class="proof-item"><span class="proof-dot"></span><span class="proof-text">Trusted by growth-oriented B2B companies</span></div>
        <div class="proof-item"><span class="proof-dot"></span><span class="proof-text">Built sales infrastructure across multiple industries</span></div>
        <div class="proof-item"><span class="proof-dot"></span><span class="proof-text">Flexible support from system build to full execution</span></div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: THE PROBLEM -->
<section class="section section-gray" id="problem">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">The Problem We Solve</span>
      <h2 class="section-title">Most growth problems are not<br>demand problems.<br><span class="green">They are infrastructure problems.</span></h2>
      <p class="section-subtitle">Inconsistent revenue, missed quotas, and stalled growth usually trace back to broken sales infrastructure — not a lack of leads or market demand.</p>
    </div>
    <div class="pain-grid fade-in">
      <div class="pain-card">
        <div class="pain-icon"><i class="fas fa-user-tie"></i></div>
        <h3>Founder-Led Revenue</h3>
        <p>Every deal runs through you. Revenue is inconsistent, unpredictable, and impossible to scale without burning yourself out.</p>
        <div class="pain-result">Result: No system, no pipeline without you.</div>
      </div>
      <div class="pain-card">
        <div class="pain-icon"><i class="fas fa-chart-line"></i></div>
        <h3>Team Underperformance</h3>
        <p>You've hired salespeople who looked great in interviews but aren't producing. Coaching feels reactive. Accountability is missing.</p>
        <div class="pain-result">Result: Wasted payroll, missed targets.</div>
      </div>
      <div class="pain-card">
        <div class="pain-icon"><i class="fas fa-users"></i></div>
        <h3>Hiring &amp; Talent Issues</h3>
        <p>Finding and keeping high-performing SDRs, AEs, and sales leaders is expensive, time-consuming, and unreliable.</p>
        <div class="pain-result">Result: Constant turnover, slow ramp.</div>
      </div>
      <div class="pain-card">
        <div class="pain-icon"><i class="fas fa-random"></i></div>
        <h3>Pipeline Unpredictability</h3>
        <p>You can't accurately forecast revenue. Some months are great, others are terrible. Leadership decisions are based on guesswork.</p>
        <div class="pain-result">Result: Poor decisions, cash flow pressure.</div>
      </div>
    </div>
    <div class="text-center" style="margin-top:48px;">
      <a href="#decision-tree" class="btn btn-outline btn-lg">Diagnose Your Revenue Gap</a>
    </div>
  </div>
</section>

<!-- SECTION 3: DECISION TREE -->
<section class="section section-dark" id="decision-tree">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Sales Decision Tree</span>
      <h2 class="section-title" style="color:var(--white)">Find the right growth path<br>based on your current stage</h2>
      <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">Select your current revenue stage and we'll show you the MetaGrowth solution designed for your exact situation.</p>
    </div>
    <div class="dt-stages fade-in">
      <button class="dt-stage-btn active" data-stage="s1">
        <div class="dt-stage-range">Under $1M</div>
        <div class="dt-stage-label">Founder-led, no structure</div>
      </button>
      <button class="dt-stage-btn" data-stage="s2">
        <div class="dt-stage-range">$1M – $3M</div>
        <div class="dt-stage-label">1–3 reps, inconsistent</div>
      </button>
      <button class="dt-stage-btn" data-stage="s3">
        <div class="dt-stage-range">$3M – $10M</div>
        <div class="dt-stage-label">System gaps, scaling issues</div>
      </button>
      <button class="dt-stage-btn" data-stage="s4">
        <div class="dt-stage-range">$10M – $40M</div>
        <div class="dt-stage-label">Leadership complexity</div>
      </button>
    </div>
    <div class="dt-result-panel">
      <div data-result="s1" style="display:block;">
        <div class="dt-result-inner">
          <div class="dt-result-left">
            <div class="tag">Your Stage</div>
            <h3 style="color:var(--white);margin-top:16px;">You're the primary sales driver</h3>
            <p style="color:rgba(255,255,255,0.65);margin:12px 0 24px;">Revenue depends entirely on you. There's no repeatable process, no pipeline visibility, and scaling means working more hours — not smarter.</p>
            <h4 style="color:var(--white);margin-bottom:14px;">Your Core Challenges</h4>
            <ul class="check-list dark-list" style="margin-bottom:28px;">
              <li>No scalable sales process or playbook</li>
              <li>Inconsistent outreach and pipeline generation</li>
              <li>No ICP definition or messaging framework</li>
              <li>Unable to delegate or hand off sales</li>
            </ul>
            <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary">Get My Recommended Path</a>
          </div>
          <div class="dt-result-right">
            <div class="dt-rec-label">Recommended Solutions</div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-rocket"></i> HyperLaunch Sales System</div>
              <div class="dt-rec-desc">90-day infrastructure build — ICP, process, CRM, messaging, KPIs</div>
              <a href="/solutions/hyperlaunch" class="dt-rec-link">Explore HyperLaunch →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-crosshairs"></i> Precision Engagements</div>
              <div class="dt-rec-desc">Targeted playbook, scripts, and outreach cadence to launch fast</div>
              <a href="/solutions/precision-engagements" class="dt-rec-link">Explore Precision Engagements →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-flask"></i> CEO Growth Lab</div>
              <div class="dt-rec-desc">Strategic clarity, peer network, and quarterly deep dives</div>
              <a href="/solutions/ceo-growth-lab" class="dt-rec-link">Explore CEO Growth Lab →</a>
            </div>
          </div>
        </div>
      </div>
      <div data-result="s2" style="display:none;">
        <div class="dt-result-inner">
          <div class="dt-result-left">
            <div class="tag">Your Stage</div>
            <h3 style="color:var(--white);margin-top:16px;">Early team, inconsistent execution</h3>
            <p style="color:rgba(255,255,255,0.65);margin:12px 0 24px;">You have a small team but performance is uneven. Some months are great, others are terrible. No real accountability or forecasting system exists.</p>
            <h4 style="color:var(--white);margin-bottom:14px;">Your Core Challenges</h4>
            <ul class="check-list dark-list" style="margin-bottom:28px;">
              <li>Inconsistent rep performance</li>
              <li>No defined sales process or accountability</li>
              <li>Weak pipeline visibility and forecasting</li>
              <li>Ramp time too slow, turnover too high</li>
            </ul>
            <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary">Get My Recommended Path</a>
          </div>
          <div class="dt-result-right">
            <div class="dt-rec-label">Recommended Solutions</div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-chart-bar"></i> Sales Growth Lab</div>
              <div class="dt-rec-desc">Sales OS installation, accountability rhythm, and advisory</div>
              <a href="/solutions/sales-growth-lab" class="dt-rec-link">Explore Sales Growth Lab →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-rocket"></i> HyperLaunch Sales System</div>
              <div class="dt-rec-desc">Build the infrastructure your team needs to execute consistently</div>
              <a href="/solutions/hyperlaunch" class="dt-rec-link">Explore HyperLaunch →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-search"></i> Recruiting Services</div>
              <div class="dt-rec-desc">Structured vetting to upgrade your sales talent density</div>
              <a href="/solutions/recruiting" class="dt-rec-link">Explore Recruiting Services →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-percentage"></i> Commission-Only Infrastructure</div>
              <div class="dt-rec-desc">Add 1099 reps with zero base risk — full systems, training, and oversight included</div>
              <a href="/solutions/commission-only" class="dt-rec-link">Explore Commission-Only →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-cogs"></i> Managed Sales Pods</div>
              <div class="dt-rec-desc">A fully managed, embedded sales team that executes inside your business</div>
              <a href="/solutions/managed-sales-pods" class="dt-rec-link">Explore Managed Sales Pods →</a>
            </div>
          </div>
        </div>
      </div>
      <div data-result="s3" style="display:none;">
        <div class="dt-result-inner">
          <div class="dt-result-left">
            <div class="tag">Your Stage</div>
            <h3 style="color:var(--white);margin-top:16px;">Growing team, serious system gaps</h3>
            <p style="color:rgba(255,255,255,0.65);margin:12px 0 24px;">Revenue is real but growth is inconsistent. Your team is larger but the infrastructure beneath it is cracking. You need execution infrastructure, not more strategy decks.</p>
            <h4 style="color:var(--white);margin-bottom:14px;">Your Core Challenges</h4>
            <ul class="check-list dark-list" style="margin-bottom:28px;">
              <li>CRM not used consistently or configured properly</li>
              <li>No forecast discipline or pipeline stages</li>
              <li>Coaching is reactive, not structured</li>
              <li>Difficulty hiring and ramping new reps quickly</li>
            </ul>
            <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary">Get My Recommended Path</a>
          </div>
          <div class="dt-result-right">
            <div class="dt-rec-label">Recommended Solutions</div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-cogs"></i> Managed Sales Pods</div>
              <div class="dt-rec-desc">Full revenue engine — recruit, onboard, coach, manage, track</div>
              <a href="/solutions/managed-sales-pods" class="dt-rec-link">Explore Managed Sales Pods →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-percentage"></i> Commission-Only Infrastructure</div>
              <div class="dt-rec-desc">Scale with 1099 reps supported by full systems and training</div>
              <a href="/solutions/commission-only" class="dt-rec-link">Explore Commission-Only →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-chart-bar"></i> Sales Growth Lab</div>
              <div class="dt-rec-desc">Structured accountability and sales OS for your leadership</div>
              <a href="/solutions/sales-growth-lab" class="dt-rec-link">Explore Sales Growth Lab →</a>
            </div>
            <div class="dt-rec-card dt-rec-card--highlight">
              <div class="dt-rec-badge">New Program</div>
              <div class="dt-rec-name"><i class="fas fa-handshake"></i> Rev Share Only Program</div>
              <div class="dt-rec-desc">Zero upfront cost. We embed a full sales team and only get paid when you close revenue — pure performance alignment.</div>
              <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="dt-rec-link">Apply to the Program →</a>
            </div>
          </div>
        </div>
      </div>
      <div data-result="s4" style="display:none;">
        <div class="dt-result-inner">
          <div class="dt-result-left">
            <div class="tag">Your Stage</div>
            <h3 style="color:var(--white);margin-top:16px;">At scale, leadership complexity</h3>
            <p style="color:rgba(255,255,255,0.65);margin:12px 0 24px;">You have real revenue but execution is inconsistent at the leadership level. You need experienced revenue leadership that can own outcomes, not just report on them.</p>
            <h4 style="color:var(--white);margin-bottom:14px;">Your Core Challenges</h4>
            <ul class="check-list dark-list" style="margin-bottom:28px;">
              <li>VP/CRO gap or leadership turnover</li>
              <li>Forecast accuracy is poor at scale</li>
              <li>Need someone to own revenue, not just advise</li>
              <li>Sales team lacks executive direction and accountability</li>
            </ul>
            <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary">Get My Recommended Path</a>
          </div>
          <div class="dt-result-right">
            <div class="dt-rec-label">Recommended Solutions</div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-crown"></i> Fractional CRO</div>
              <div class="dt-rec-desc">Executive revenue leadership without full-time C-suite cost</div>
              <a href="/solutions/fractional-cro" class="dt-rec-link">Explore Fractional CRO →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-cogs"></i> Managed Sales Pods</div>
              <div class="dt-rec-desc">Done-for-you execution layer with full oversight and KPI tracking</div>
              <a href="/solutions/managed-sales-pods" class="dt-rec-link">Explore Managed Sales Pods →</a>
            </div>
            <div class="dt-rec-card">
              <div class="dt-rec-name"><i class="fas fa-flask"></i> CEO Growth Lab</div>
              <div class="dt-rec-desc">Strategic peer network and quarterly deep-dive sessions for CEOs</div>
              <a href="/solutions/ceo-growth-lab" class="dt-rec-link">Explore CEO Growth Lab →</a>
            </div>
            <div class="dt-rec-card dt-rec-card--highlight">
              <div class="dt-rec-badge">New Program</div>
              <div class="dt-rec-name"><i class="fas fa-handshake"></i> Rev Share Only Program</div>
              <div class="dt-rec-desc">Zero upfront cost. We embed a full sales team and only get paid when you close revenue — pure performance alignment at scale.</div>
              <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="dt-rec-link">Apply to the Program →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 4: SOLUTIONS OVERVIEW -->
<section class="section" id="solutions">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Complete Revenue Ecosystem</span>
      <h2 class="section-title">A complete revenue ecosystem<br>for every stage of growth</h2>
      <p class="section-subtitle">Whether you need to build infrastructure, install leadership, recruit talent, or run full execution — MetaGrowth has a solution for your stage.</p>
    </div>
    <div class="solutions-grid fade-in">
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-flask"></i></div>
        <div class="sol-tag">For CEOs</div>
        <h3>CEO Growth Lab</h3>
        <p>Strategic clarity, peer accountability, and quarterly deep dives for growth-oriented CEOs.</p>
        <a href="/solutions/ceo-growth-lab" class="sol-link">Explore CEO Growth Lab <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-chart-bar"></i></div>
        <div class="sol-tag">For Sales Leaders</div>
        <h3>Sales Growth Lab</h3>
        <p>Structured execution, Sales OS installation, and weekly accountability for revenue leaders.</p>
        <a href="/solutions/sales-growth-lab" class="sol-link">Explore Sales Growth Lab <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-rocket"></i></div>
        <div class="sol-tag">Infrastructure Build</div>
        <h3>HyperLaunch Sales System</h3>
        <p>90-day build of your complete sales operating system — process, CRM, KPIs, messaging, and onboarding.</p>
        <a href="/solutions/hyperlaunch" class="sol-link">Explore HyperLaunch <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-cogs"></i></div>
        <div class="sol-tag">Done-For-You</div>
        <h3>Managed Sales Pods</h3>
        <p>We build, recruit, train, and manage your complete revenue execution engine.</p>
        <a href="/solutions/managed-sales-pods" class="sol-link">Explore Managed Sales Pods <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-percentage"></i></div>
        <div class="sol-tag">Performance-Based</div>
        <h3>Commission-Only Infrastructure</h3>
        <p>Scale with 1099 reps supported by training, CRM, commission modeling, and system infrastructure.</p>
        <a href="/solutions/commission-only" class="sol-link">Explore Commission-Only <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-search"></i></div>
        <div class="sol-tag">Talent Acquisition</div>
        <h3>Recruiting Services</h3>
        <p>Deep vetting, behavioral assessment, and structured screening to hire producers, not just presenters.</p>
        <a href="/solutions/recruiting" class="sol-link">Explore Recruiting Services <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-crown"></i></div>
        <div class="sol-tag">Executive Leadership</div>
        <h3>Fractional CRO</h3>
        <p>Revenue leadership that takes ownership — strategy, accountability, hiring, forecasting, and performance management.</p>
        <a href="/solutions/fractional-cro" class="sol-link">Explore Fractional CRO <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="sol-tile">
        <div class="sol-icon"><i class="fas fa-crosshairs"></i></div>
        <div class="sol-tag">Targeted Projects</div>
        <h3>Precision Engagements</h3>
        <p>Focused interventions for specific bottlenecks — playbooks, comp plans, CRM audits, and outreach sequences.</p>
        <a href="/solutions/precision-engagements" class="sol-link">Explore Precision Engagements <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
    <div class="text-center" style="margin-top:52px;">
      <a href="/solutions" class="btn btn-outline btn-lg">View All Solutions</a>
    </div>
  </div>
</section>

<!-- SECTION 5: THE METAGROWTH DIFFERENCE -->
<section class="section section-dark">
  <div class="container">
    <div class="diff-layout fade-in">
      <div class="diff-left">
        <span class="section-label">The MetaGrowth Difference</span>
        <h2 style="color:var(--white);margin-bottom:20px;">We move beyond advice<br>to <span style="color:var(--green)">installed infrastructure</span></h2>
        <p style="color:rgba(255,255,255,0.65);margin-bottom:36px;font-size:1.1rem;">MetaGrowth is not a consulting firm that hands over strategy decks. We build systems, install accountability, and stay until the infrastructure is working.</p>
        <div class="micro-list">
          <div class="micro-item"><span class="micro-arrow">→</span> We build systems</div>
          <div class="micro-item"><span class="micro-arrow">→</span> We install accountability</div>
          <div class="micro-item"><span class="micro-arrow">→</span> We deploy talent</div>
          <div class="micro-item"><span class="micro-arrow">→</span> We lead revenue</div>
        </div>
        <a href="/how-we-work" class="btn btn-primary" style="margin-top:36px;">See How We Work</a>
      </div>
      <div class="diff-right">
        <div class="pillar-card">
          <div class="pillar-num">01</div>
          <h4>Execution-First</h4>
          <p>We don't stop at recommendations. We roll up our sleeves and install what your revenue engine needs to work.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-num">02</div>
          <h4>Measurable ROI</h4>
          <p>Every engagement is anchored to specific, trackable outcomes — pipeline, revenue, hiring, and forecast accuracy.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-num">03</div>
          <h4>Disciplined Systems</h4>
          <p>We create repeatable, documented processes that survive leadership changes and scale with your team.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-num">04</div>
          <h4>Leadership That Owns Outcomes</h4>
          <p>Our team takes accountability for results — not just deliverables. We measure success in revenue, not activity.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 6: HOW WE WORK -->
<section class="section section-gray">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">How We Work</span>
      <h2 class="section-title">Strategy, architecture, talent,<br>and execution under one roof</h2>
      <p class="section-subtitle">A proven four-step deployment model that takes you from diagnosis to optimized revenue infrastructure.</p>
    </div>
    <div class="how-steps fade-in">
      <div class="how-step">
        <div class="how-step-num">01</div>
        <div class="how-step-content">
          <div class="how-step-icon"><i class="fas fa-microscope"></i></div>
          <h3>Discovery</h3>
          <p>We assess your current infrastructure, identify bottlenecks, and map your revenue goals to your current setup. No generic templates — deep diagnosis only.</p>
        </div>
      </div>
      <div class="how-step">
        <div class="how-step-num">02</div>
        <div class="how-step-content">
          <div class="how-step-icon"><i class="fas fa-map"></i></div>
          <h3>Action Plan</h3>
          <p>We recommend the right model, define the roadmap, scope, and priorities — then align on exactly what will be built and when.</p>
        </div>
      </div>
      <div class="how-step">
        <div class="how-step-num">03</div>
        <div class="how-step-content">
          <div class="how-step-icon"><i class="fas fa-tools"></i></div>
          <h3>Installation / Deployment</h3>
          <p>Systems, CRM, process, recruiting, coaching, and leadership implementation. We don't just advise — we build and deploy.</p>
        </div>
      </div>
      <div class="how-step">
        <div class="how-step-num">04</div>
        <div class="how-step-content">
          <div class="how-step-icon"><i class="fas fa-chart-line"></i></div>
          <h3>Optimization</h3>
          <p>KPI tracking, weekly coaching, forecast discipline, and continuous refinement. We stay until the engine is running predictably.</p>
        </div>
      </div>
    </div>
    <div class="text-center" style="margin-top:52px;">
      <a href="/how-we-work" class="btn btn-outline btn-lg">See How We Work in Detail</a>
    </div>
  </div>
</section>

<!-- SECTION 7: METRICS -->
<section class="section section-dark">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Outcomes &amp; Proof</span>
      <h2 style="color:var(--white);margin-bottom:16px;">Revenue growth backed by execution</h2>
      <p style="color:rgba(255,255,255,0.65);max-width:580px;margin:0 auto 64px;font-size:1.1rem;">Real results from real companies that trusted MetaGrowth to install what works.</p>
    </div>
    <div class="metrics-grid fade-in">
      <div class="metric-card">
        <div class="metric-number">$100M+</div>
        <div class="metric-label">Pipeline Generated</div>
      </div>
      <div class="metric-card">
        <div class="metric-number">75,000+</div>
        <div class="metric-label">Prospecting Outreaches</div>
      </div>
      <div class="metric-card">
        <div class="metric-number">11,000+</div>
        <div class="metric-label">Booked Meetings</div>
      </div>
      <div class="metric-card">
        <div class="metric-number">$16M+</div>
        <div class="metric-label">Revenue Added</div>
      </div>
      <div class="metric-card">
        <div class="metric-number">320+</div>
        <div class="metric-label">Clients Added</div>
      </div>
      <div class="metric-card">
        <div class="metric-number">$16M+</div>
        <div class="metric-label">In Revenue Added</div>
      </div>
    </div>
    <div class="text-center" style="margin-top:52px;">
      <a href="/case-studies" class="btn btn-primary btn-lg">View Case Studies</a>
    </div>
  </div>
</section>

<!-- SECTION 8: CASE STUDIES -->
<section class="section">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Featured Case Studies</span>
      <h2 class="section-title">See what installed infrastructure<br>actually delivers</h2>
    </div>
    <div class="cs-grid fade-in">
      <div class="cs-card">
        <div class="cs-industry">Technology &middot; Professional Services</div>
        <h3>Azul Arc</h3>
        <div class="cs-challenge">
          <strong>Challenge:</strong> Lacked a structured prospecting engine and sales direction. Revenue was entirely founder-dependent with no repeatable process.
        </div>
        <div class="cs-solution">
          <strong>Solution:</strong> Complete sales operating system + leveraged prospecting support + team structure
        </div>
        <div class="cs-results">
          <div class="cs-result-item"><span class="cs-result-num">$100M+</span> Pipeline</div>
          <div class="cs-result-item"><span class="cs-result-num">21K+</span> Outreaches</div>
          <div class="cs-result-item"><span class="cs-result-num">11,000+</span> Booked Meetings</div>
        </div>
        <a href="/case-studies#azul-arc" class="btn btn-outline btn-sm" style="margin-top:20px;">Read Full Story</a>
      </div>
      <div class="cs-card">
        <div class="cs-industry">Events &middot; Professional Development</div>
        <h3>Speakeasy</h3>
        <div class="cs-challenge">
          <strong>Challenge:</strong> Needed sales leadership and accountability without the cost of a full-time executive hire.
        </div>
        <div class="cs-solution">
          <strong>Solution:</strong> Custom leadership oversight, recruiting, coaching, and revenue strategy
        </div>
        <div class="cs-results">
          <div class="cs-result-item"><span style="color:var(--green);font-weight:700;">✓</span> Strategic Oversight</div>
          <div class="cs-result-item"><span style="color:var(--green);font-weight:700;">✓</span> Talent Upgrade</div>
          <div class="cs-result-item"><span style="color:var(--green);font-weight:700;">✓</span> Accountability</div>
        </div>
        <a href="/case-studies#speakeasy" class="btn btn-outline btn-sm" style="margin-top:20px;">Read Full Story</a>
      </div>
      <div class="cs-card">
        <div class="cs-industry">B2B Services &middot; Private Client</div>
        <h3>Private Client</h3>
        <div class="cs-challenge">
          <strong>Challenge:</strong> Needed scalable outreach strategy without adding fixed overhead or internal sales staff.
        </div>
        <div class="cs-solution">
          <strong>Solution:</strong> Commission-only model + automation + multi-channel outreach infrastructure
        </div>
        <div class="cs-results">
          <div class="cs-result-item"><span class="cs-result-num">$16M+</span> Revenue Added</div>
          <div class="cs-result-item"><span class="cs-result-num">320+</span> Clients Added</div>
          <div class="cs-result-item"><span class="cs-result-num">75,000+</span> Outreaches</div>
        </div>
        <a href="/case-studies#private" class="btn btn-outline btn-sm" style="margin-top:20px;">Read Full Story</a>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 9: CLIENT LOGOS -->
<section class="section-sm section-gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom:40px;">
      <span class="section-label">Companies &amp; Leadership Teams We've Supported</span>
      <p style="color:var(--gray-600);margin-top:8px;">Across technology, consulting, professional services, manufacturing, and growth-stage B2B environments.</p>
    </div>
  </div>
  <!-- Scrolling marquee logo band -->
  <div class="logo-marquee-wrap fade-in">
    <div class="logo-marquee-track">
      <div class="logo-tile logo-tile--img"><img src="/static/clients/bonzo.png" alt="Bonzo" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/azularc.png" alt="Azul Arc" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/contentbacon.png" alt="Content Bacon" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/seek.png" alt="Seek" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/thinglogix.png" alt="ThingLogix" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/xceleran.png" alt="Xceleran" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/cityblast.png" alt="CityBlast" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/zentap.png" alt="Zentap" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kievanos.png" alt="Kievanos" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/earthvisionz.png" alt="EarthVisionz" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kloudrac.png" alt="KloudRac" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/dcube.png" alt="D·Cube" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/admazing.png" alt="AdMazing.co" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/centsai.png" alt="CentSai One" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/mobilize-comms.png" alt="Mobilize Comms" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/qlientology.png" alt="Qlientology" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/speakeasy.png" alt="Speakeasy" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/veztek.png" alt="VezTek USA" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/rehash-leads.png" alt="RehashLeads" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/net-activity.png" alt="Net Activity" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/plus-delta-314.png" alt="Plus Delta 314" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/mastermind.png" alt="Mastermind" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/smb-agency.png" alt="SMB Agency" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/upward-insights.png" alt="Upward Insights" class="logo-img" width="120" height="40" loading="lazy"></div>
      <!-- Duplicate set for seamless infinite loop -->
      <div class="logo-tile logo-tile--img"><img src="/static/clients/bonzo.png" alt="Bonzo" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/azularc.png" alt="Azul Arc" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/contentbacon.png" alt="Content Bacon" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/seek.png" alt="Seek" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/thinglogix.png" alt="ThingLogix" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/xceleran.png" alt="Xceleran" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/cityblast.png" alt="CityBlast" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/zentap.png" alt="Zentap" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kievanos.png" alt="Kievanos" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/earthvisionz.png" alt="EarthVisionz" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kloudrac.png" alt="KloudRac" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/dcube.png" alt="D·Cube" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/admazing.png" alt="AdMazing.co" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/centsai.png" alt="CentSai One" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/mobilize-comms.png" alt="Mobilize Comms" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/qlientology.png" alt="Qlientology" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/speakeasy.png" alt="Speakeasy" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/veztek.png" alt="VezTek USA" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/rehash-leads.png" alt="RehashLeads" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/net-activity.png" alt="Net Activity" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/plus-delta-314.png" alt="Plus Delta 314" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/mastermind.png" alt="Mastermind" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/smb-agency.png" alt="SMB Agency" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/upward-insights.png" alt="Upward Insights" class="logo-img" width="120" height="40" loading="lazy"></div>
    </div>
  </div>
</section>

<!-- SECTION 10: TESTIMONIALS -->
<section class="section">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Client Testimonials</span>
      <h2 class="section-title">What clients say when<br>structure starts working</h2>
    </div>
    <div class="testimonials-grid fade-in">
      <div class="testimonial-card">
        <p class="testimonial-text">MetaGrowth didn't just give us a strategy — they installed it. Within 90 days we had a real pipeline, a working CRM, and reps who knew exactly what to do every day.</p>
        <div class="testimonial-author">
          <div class="author-avatar">JR</div>
          <div>
            <div class="author-name">Jason R.</div>
            <div class="author-title">CEO, Technology Firm</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">We had tried two other agencies before MetaGrowth. The difference was that they actually understood sales infrastructure — not just tactics. Our forecast accuracy improved dramatically.</p>
        <div class="testimonial-author">
          <div class="author-avatar">SK</div>
          <div>
            <div class="author-name">Sarah K.</div>
            <div class="author-title">VP Sales, B2B Services</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">The recruiting process was unlike anything I'd experienced. They found candidates who could actually sell, not just interview well. Three hires later, all three are hitting quota.</p>
        <div class="testimonial-author">
          <div class="author-avatar">MP</div>
          <div>
            <div class="author-name">Michael P.</div>
            <div class="author-title">Founder, Consulting Firm</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 11: LEAD MAGNET -->
<section class="section section-dark" style="background:#0A0A0A;">
  <div class="container">
    <div style="text-align:center;margin-bottom:48px;">
      <span class="section-label" style="color:var(--green);">Not Sure Where to Start?</span>
      <h2 style="color:#fff;margin-top:10px;margin-bottom:12px;">Find your revenue growth path<br>in under 5 minutes</h2>
      <p style="color:rgba(255,255,255,0.5);max-width:480px;margin:0 auto;font-size:1rem;">Choose the path that fits where you are right now.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:960px;margin:0 auto;">

      <!-- Card 1 -->
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(173,120,5,0.35);border-radius:16px;padding:32px 28px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:48px;height:48px;background:rgba(173,120,5,0.15);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#ad7805;">
          <i class="fas fa-file-arrow-down" style="font-size:1.25rem;"></i>
        </div>
        <div style="font-size:1.05rem;font-weight:700;color:#fff;font-family:Inter,sans-serif;">Download the Guide</div>
        <div style="font-size:0.875rem;color:rgba(255,255,255,0.55);line-height:1.6;flex:1;">Get the Revenue System Blueprint — a free executive framework for building predictable B2B revenue.</div>
        <a href="/resources" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:8px;padding:12px 20px;background:#ad7805;color:#0A0A0A;border-radius:999px;font-size:0.875rem;font-weight:700;text-align:center;text-decoration:none;letter-spacing:0.02em;"><i class="fas fa-download"></i> Download Free</a>
      </div>

      <!-- Card 2 -->
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:32px 28px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:48px;height:48px;background:rgba(173,120,5,0.15);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#ad7805;">
          <i class="fas fa-calendar-check" style="font-size:1.25rem;"></i>
        </div>
        <div style="font-size:1.05rem;font-weight:700;color:#fff;font-family:Inter,sans-serif;">Request a Revenue Review</div>
        <div style="font-size:0.875rem;color:rgba(255,255,255,0.55);line-height:1.6;flex:1;">Book a strategy call and get a personalized revenue architecture recommendation for your exact situation.</div>
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:8px;padding:12px 20px;background:transparent;color:#ad7805;border:1.5px solid #ad7805;border-radius:999px;font-size:0.875rem;font-weight:700;text-align:center;text-decoration:none;letter-spacing:0.02em;"><i class="fas fa-calendar-check"></i> Book a Call</a>
      </div>

      <!-- Card 3 -->
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:32px 28px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:48px;height:48px;background:rgba(173,120,5,0.15);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#ad7805;">
          <i class="fas fa-chart-bar" style="font-size:1.25rem;"></i>
        </div>
        <div style="font-size:1.05rem;font-weight:700;color:#fff;font-family:Inter,sans-serif;">Take the Assessment</div>
        <div style="font-size:0.875rem;color:rgba(255,255,255,0.55);line-height:1.6;flex:1;">Run the Revenue System Audit&#8482; — a 5–7 minute diagnostic that reveals exactly where your pipeline is leaking.</div>
        <a href="/assessment" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:8px;padding:12px 20px;background:transparent;color:#ad7805;border:1.5px solid #ad7805;border-radius:999px;font-size:0.875rem;font-weight:700;text-align:center;text-decoration:none;letter-spacing:0.02em;"><i class="fas fa-arrow-right"></i> Run the Audit</a>
      </div>

    </div>
  </div>
</section>

<!-- SECTION 12: FINAL CTA -->
<section class="cta-section">
  <div class="container">
    <h2>Let's build revenue the right way.</h2>
    <p>Whether you need a sales operating system, recruiting engine, leadership support, or full execution — we can help you identify the right path and deploy it with discipline.</p>
    <div class="cta-row">
      <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn btn-primary btn-lg">
        <i class="fas fa-calendar-check"></i> Book a Strategy Call
      </a>
      <a href="/contact" class="btn btn-secondary btn-lg">Contact MetaGrowth</a>
    </div>
  </div>
</section>

<style>
/* Hero CTA row */
.hero-cta-row { display: flex; flex-wrap: nowrap; gap: 12px; margin-top: 32px; align-items: center; }
.hero-cta-btn { padding: 14px 22px; font-size: 0.95rem; white-space: nowrap; flex: 1; text-align: center; }
@media (max-width: 640px) {
  .hero-cta-row { flex-wrap: wrap; }
  .hero-cta-btn { flex: 1 1 100%; }
}

/* Hero */
.home-hero {
  min-height: calc(100vh - 72px);
  display: flex; align-items: center;
  position: relative; overflow: hidden;
  padding: 100px 0 80px;
  background-color: #111111;
  background-image: url('/static/hero-texture.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.hero-bg-grid {
  position: absolute; inset: 0; z-index: 0;
  /* Subtle dark veil to keep it consistent edge-to-edge */
  background: rgba(0, 0, 0, 0.30);
}
.hero-glow {
  position: absolute; right: -100px; top: 50%; z-index: 1;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(173,120,5,0.10) 0%, transparent 70%);
  transform: translateY(-50%);
  pointer-events: none;
}
.hero-content { position: relative; z-index: 2; max-width: 780px; }
.hero-bullets {
  display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; margin-top: 28px;
  padding: 14px 20px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius);
  width: fit-content;
}
.bullet-item {
  display: flex; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.7); font-size: 0.88rem; font-weight: 500;
}
.bullet-dot { width: 7px; height: 7px; background: var(--green); border-radius: 50%; flex-shrink: 0; }
.bullet-divider { color: rgba(255,255,255,0.15); font-size: 0.85rem; line-height: 1; }

/* Pain grid */
.pain-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  margin-top: 56px;
}
.pain-card {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 32px 28px; border: 1px solid var(--gray-200);
  transition: all var(--transition);
}
.pain-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--green); }
.pain-icon {
  width: 52px; height: 52px; border-radius: 12px;
  background: rgba(173,120,5,0.09);
  display: flex; align-items: center; justify-content: center;
  color: var(--green); font-size: 1.3rem; margin-bottom: 18px;
}
.pain-card h3 { font-size: 1.1rem; margin-bottom: 10px; color: var(--gray-800); }
.pain-card p { font-size: 0.9rem; color: var(--gray-600); margin-bottom: 16px; }
.pain-result {
  font-size: 0.82rem; color: var(--green); font-weight: 700;
  background: rgba(173,120,5,0.08); padding: 8px 12px;
  border-radius: 6px; border-left: 3px solid var(--green);
}

/* Decision Tree */
.dt-stages {
  display: flex; gap: 12px; justify-content: center;
  margin: 48px 0 32px; flex-wrap: wrap;
}
.dt-stage-btn {
  background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-lg); padding: 20px 28px;
  cursor: pointer; text-align: center; transition: all var(--transition);
  min-width: 200px;
}
.dt-stage-btn:hover, .dt-stage-btn.active {
  background: rgba(173,120,5,0.10); border-color: var(--green);
}
.dt-stage-range { font-size: 1.4rem; font-weight: 800; color: var(--white); margin-bottom: 6px; }
.dt-stage-label { font-size: 0.82rem; color: rgba(255,255,255,0.55); }
.dt-stage-btn.active .dt-stage-range { color: var(--green); }

.dt-result-panel { margin-top: 16px; }
.dt-result-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-lg); padding: 44px;
}
.dt-rec-label {
  font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--green); font-weight: 700; margin-bottom: 20px;
}
.dt-rec-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius); padding: 20px; margin-bottom: 14px;
  transition: all var(--transition);
}
.dt-rec-card:hover { border-color: var(--green); }
.dt-rec-name {
  color: var(--white); font-weight: 700; font-size: 0.95rem;
  margin-bottom: 6px; display: flex; align-items: center; gap: 10px;
}
.dt-rec-name i { color: var(--green); }
.dt-rec-desc { color: rgba(255,255,255,0.55); font-size: 0.85rem; margin-bottom: 10px; }
.dt-rec-link { color: var(--green); font-size: 0.85rem; font-weight: 600; }
.dt-rec-link:hover { text-decoration: underline; }
.dt-rec-card--highlight {
  background: rgba(173,120,5,0.08); border-color: rgba(173,120,5,0.35);
  position: relative;
}
.dt-rec-card--highlight:hover { border-color: var(--green); background: rgba(173,120,5,0.13); }
.dt-rec-badge {
  display: inline-block; font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  background: var(--green); color: var(--navy);
  padding: 3px 8px; border-radius: 4px; margin-bottom: 10px;
}

/* Solutions grid */
.solutions-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  margin-top: 56px;
}
.sol-tile {
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg); padding: 32px 26px;
  transition: all var(--transition);
}
.sol-tile:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--green); }
.sol-icon {
  width: 48px; height: 48px; border-radius: 10px;
  background: rgba(173,120,5,0.10);
  display: flex; align-items: center; justify-content: center;
  color: var(--green); font-size: 1.2rem; margin-bottom: 14px;
}
.sol-tag { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 10px; }
.sol-tile h3 { font-size: 1rem; margin-bottom: 10px; color: var(--gray-800); }
.sol-tile p { font-size: 0.875rem; color: var(--gray-600); margin-bottom: 20px; }
.sol-link { color: var(--gray-800); font-size: 0.875rem; font-weight: 700; display: flex; align-items: center; gap: 6px; transition: gap var(--transition); }
.sol-link:hover { color: var(--green); gap: 10px; }

/* Difference section */
.diff-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
.micro-list { display: flex; flex-direction: column; gap: 14px; }
.micro-item { color: rgba(255,255,255,0.75); font-size: 1.05rem; font-weight: 500; display: flex; align-items: center; gap: 12px; }
.micro-arrow { color: var(--green); font-weight: 800; }
.pillar-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius); padding: 24px; margin-bottom: 16px;
  transition: all var(--transition);
}
.pillar-card:hover { border-color: var(--green); }
.pillar-num { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--green); font-weight: 700; margin-bottom: 8px; }
.pillar-card h4 { color: var(--white); margin-bottom: 8px; }
.pillar-card p { font-size: 0.875rem; color: rgba(255,255,255,0.55); }

/* How steps */
.how-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-top: 56px; }
.how-step { position: relative; }
.how-step-num {
  font-size: 5rem; font-weight: 900; color: rgba(173,120,5,0.08);
  line-height: 1; margin-bottom: -20px; font-family: var(--font-head);
}
.how-step-content {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 28px 24px; border: 1px solid var(--gray-200);
  transition: all var(--transition);
}
.how-step:hover .how-step-content { border-color: var(--green); box-shadow: var(--shadow); }
.how-step-icon {
  width: 48px; height: 48px; border-radius: 10px;
  background: rgba(173,120,5,0.10);
  display: flex; align-items: center; justify-content: center;
  color: var(--green); font-size: 1.2rem; margin-bottom: 16px;
}
.how-step-content h3 { font-size: 1rem; margin-bottom: 10px; color: var(--gray-800); }
.how-step-content p { font-size: 0.875rem; color: var(--gray-600); }

/* Metrics */
.metrics-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
@media (max-width: 1100px) { .metrics-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .metrics-grid { grid-template-columns: repeat(2, 1fr); } }

/* Case Studies */
.cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 52px; }
.cs-card {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 36px 32px; border: 1px solid var(--gray-200);
  transition: all var(--transition);
}
.cs-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--green); }
.cs-industry { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); font-weight: 700; margin-bottom: 10px; }
.cs-card h3 { font-size: 1.4rem; color: var(--gray-800); margin-bottom: 20px; }
.cs-challenge, .cs-solution {
  font-size: 0.875rem; color: var(--gray-600); margin-bottom: 12px; line-height: 1.6;
}
.cs-results {
  display: flex; gap: 12px; flex-wrap: wrap;
  background: var(--gray-50); border-radius: var(--radius);
  padding: 16px; margin-top: 16px;
}
.cs-result-item { font-size: 0.82rem; color: var(--gray-600); display: flex; align-items: center; gap: 6px; }
.cs-result-num { color: var(--green); font-weight: 800; font-size: 1rem; }

/* Logo marquee */
.logo-marquee-wrap {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 8px 0;
  min-height: 88px; /* reserve space to prevent CLS */
  contain: layout;
}
.logo-marquee-wrap::before,
.logo-marquee-wrap::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}
.logo-marquee-wrap::before {
  left: 0;
  background: linear-gradient(to right, var(--gray-50) 0%, transparent 100%);
}
.logo-marquee-wrap::after {
  right: 0;
  background: linear-gradient(to left, var(--gray-50) 0%, transparent 100%);
}
.logo-marquee-track {
  display: flex;
  align-items: center;
  gap: 20px;
  width: max-content;
  animation: marquee-scroll 38s linear infinite;
  will-change: transform;
}
.logo-marquee-track:hover { animation-play-state: paused; }
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.logo-tile {
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  height: 72px;
  padding: 0 28px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  transition: border-color var(--transition), box-shadow var(--transition);
  cursor: default;
}
.logo-tile:hover {
  border-color: var(--green);
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.logo-tile--img {
  padding: 10px 18px;
  min-width: 160px;
}
.logo-img {
  height: 44px;
  width: auto;
  max-width: 180px;
  object-fit: contain;
  filter: grayscale(100%) contrast(0.7) brightness(1.1);
  transition: filter var(--transition);
}
.logo-tile--img:hover .logo-img {
  filter: grayscale(0%) contrast(1) brightness(1);
}
.logo-text {
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gray-400);
  white-space: nowrap;
  transition: color var(--transition);
}
.logo-tile:hover .logo-text { color: var(--gray-800); }

/* Testimonials */
.testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 52px; }

/* Lead magnet */
.lead-mag-box {
  background: linear-gradient(135deg, #0A0A0A 0%, #111111 100%);
  border-radius: var(--radius-lg); padding: 64px 56px;
  text-align: center;
}
.lead-mag-box h2 { color: var(--white); margin-bottom: 12px; }
.lead-mag-box > div > p { color: rgba(255,255,255,0.55); max-width: 480px; margin: 0 auto 40px; font-size: 1rem; }
.lmb-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; margin-top: 8px; }
.lmb-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 28px 26px 24px;
  display: flex; flex-direction: column; gap: 10px;
  transition: border-color 0.2s, background 0.2s;
}
.lmb-card:hover { border-color: var(--green); background: rgba(173,120,5,0.06); }
.lmb-icon { width: 44px; height: 44px; background: rgba(173,120,5,0.12); border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--green); font-size: 1.1rem; flex-shrink: 0; }
.lmb-title { font-size: 1rem; font-weight: 700; color: var(--white); line-height: 1.3; }
.lmb-desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; flex: 1; }
.lmb-btn {
  display: inline-block; margin-top: 6px; padding: 10px 18px;
  border-radius: 999px; font-size: 0.85rem; font-weight: 700;
  text-decoration: none; text-align: center; transition: all 0.2s;
}
.lmb-btn-primary { background: var(--green); color: #0A0A0A; }
.lmb-btn-primary:hover { background: var(--green-dark); color: #0A0A0A; }
.lmb-btn-outline { background: transparent; color: var(--green); border: 1.5px solid var(--green); }
.lmb-btn-outline:hover { background: var(--green); color: #0A0A0A; }
@media (max-width: 900px) { .lmb-cards { grid-template-columns: 1fr; } }

/* Responsive */
@media (max-width: 1100px) {
  .pain-grid { grid-template-columns: repeat(2, 1fr); }
  .solutions-grid { grid-template-columns: repeat(2, 1fr); }
  .how-steps { grid-template-columns: repeat(2, 1fr); }
  .diff-layout { grid-template-columns: 1fr; gap: 40px; }
  .cs-grid { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
  .dt-result-inner { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .pain-grid { grid-template-columns: 1fr; }
  .solutions-grid { grid-template-columns: 1fr; }
  .how-steps { grid-template-columns: 1fr; }
  .dt-stages { flex-direction: column; }
  .dt-stage-btn { min-width: unset; width: 100%; }
  .lead-mag-box { padding: 36px 24px; }
}
</style>
`,
  extraHead: `
<style>
.site-header.scrolled { background: rgba(13,13,13,0.99); border-bottom-color: rgba(173,120,5,0.22); }
</style>
<link rel="preload" as="image" href="/static/hero-texture.jpg" fetchpriority="high">
<link rel="preload" as="font" type="font/woff2" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/webfonts/fa-solid-900.woff2" crossorigin>
`,
  description: 'MetaGrowth Ventures builds revenue systems, installs accountability, and deploys sales talent for B2B companies ready to scale predictably.',
})
