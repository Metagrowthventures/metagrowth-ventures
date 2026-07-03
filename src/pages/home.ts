import { page } from '../layout'

export const homePage = () => page('Build a Predictable B2B Revenue Engine', `

<!-- =======================================================
     SECTION 1 — HERO
     Answer: What, Who, Why, What next.
     Primary CTA: Assessment. Secondary: Revenue Review.
======================================================= -->
<section class="home-hero" id="hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-glow"></div>
  <div class="container">
    <div class="hero-content">

      <div class="hero-eyebrow">
        <span>&#128200; Revenue Diagnostic for B2B Founders &amp; CEOs &bull; $3M&ndash;$50M Companies</span>
      </div>

      <h1 class="hero-title">
        Your revenue is stuck.<br>
        <span class="accent">Find out exactly why&mdash;<br>in 3 minutes.</span>
      </h1>

      <p class="hero-subheadline">
        MetaGrowth builds the revenue infrastructure that makes growth predictable&mdash;without you carrying every deal. Start with a free diagnostic that identifies exactly what&rsquo;s holding your business back.
      </p>

      <div class="hero-cta-row">
        <a href="/assessment"
           class="btn btn-primary hero-cta-primary"
           id="hero-primary-cta"
           onclick="mgcHomeTrack('hero_cta_click','Take the Revenue Assessment','hero');">
          Take the Revenue Assessment &rarr;
        </a>
        <a href="https://meetings.hubspot.com/josh549/revenue-audit?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Drevenue_audit"
           target="_blank" rel="noopener noreferrer"
           class="btn btn-secondary hero-cta-secondary"
           onclick="mgcHomeTrack('revenue_review_click','Book a Revenue Review','hero');mgcHomeTrack('calendar_open','Book a Revenue Review','hero');">
          Already Know What&rsquo;s Broken? Book a Review
        </a>
      </div>
      <p class="hero-cta-microcopy">Free &nbsp;&bull;&nbsp; 3 Minutes &nbsp;&bull;&nbsp; Personalized Score &amp; Action Plan &nbsp;&bull;&nbsp; No Sales Call Required</p>

      <div class="hero-trust-bar">
        <div class="hero-trust-item">&#10003; $110M+ Pipeline Created</div>
        <div class="hero-trust-divider"></div>
        <div class="hero-trust-item">&#10003; 112+ Sales Teams Built</div>
        <div class="hero-trust-divider"></div>
        <div class="hero-trust-item">&#10003; 10X Pipeline Promise&trade;</div>
      </div>

    </div>
  </div>
</section>

<!-- =======================================================
     CLIENT LOGOS — passive social proof, zero friction
======================================================= -->
<section class="logos-section" id="clients">
  <div class="container">
    <p class="logos-label">Companies &amp; Leadership Teams We&rsquo;ve Supported</p>
  </div>
  <div class="logo-marquee-wrap">
    <div class="logo-marquee-track">
      <div class="logo-tile logo-tile--img"><img src="/static/clients/bonzo.webp" alt="Bonzo" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/azularc.webp" alt="Azul Arc" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/contentbacon.webp" alt="Content Bacon" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/seek.webp" alt="Seek" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/thinglogix.webp" alt="ThingLogix" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/xceleran.webp" alt="Xceleran" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/cityblast.webp" alt="CityBlast" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/zentap.webp" alt="Zentap" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kievanos.webp" alt="Kievanos" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/earthvisionz.webp" alt="EarthVisionz" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kloudrac.webp" alt="KloudRac" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/dcube.webp" alt="D&middot;Cube" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/admazing.webp" alt="AdMazing.co" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/speakeasy.webp" alt="Speakeasy" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/veztek.webp" alt="VezTek USA" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/net-activity.webp" alt="Net Activity" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/mastermind.webp" alt="Mastermind" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/smb-agency.webp" alt="SMB Agency" class="logo-img" width="120" height="40" loading="lazy"></div>
      <!-- Duplicate for seamless loop -->
      <div class="logo-tile logo-tile--img"><img src="/static/clients/bonzo.webp" alt="Bonzo" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/azularc.webp" alt="Azul Arc" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/contentbacon.webp" alt="Content Bacon" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/seek.webp" alt="Seek" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/thinglogix.webp" alt="ThingLogix" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/xceleran.webp" alt="Xceleran" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/cityblast.webp" alt="CityBlast" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/zentap.webp" alt="Zentap" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kievanos.webp" alt="Kievanos" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/earthvisionz.webp" alt="EarthVisionz" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/kloudrac.webp" alt="KloudRac" class="logo-img" width="120" height="40" loading="lazy"></div>
      <div class="logo-tile logo-tile--img"><img src="/static/clients/smb-agency.webp" alt="SMB Agency" class="logo-img" width="120" height="40" loading="lazy"></div>
    </div>
  </div>
</section>

<!-- =======================================================
     SECTION 2 — THE PROBLEM
     CHANGE #1: Already directly below hero. Confirmed.
     Visitor must think: "That's my company."
     Assessment CTA at bottom.
======================================================= -->
<section class="problem-section" id="problem">
  <div class="container">
    <div class="problem-header fade-in">
      <span class="section-label">Why Revenue Stalls</span>
      <h2 class="section-title">Most growth problems aren&rsquo;t<br><span class="green">demand problems.</span></h2>
      <p class="section-subtitle">You have leads. You have a product. You may even have a sales team.<br>But revenue is still unpredictable. Here&rsquo;s the truth most consultants won&rsquo;t tell you.</p>
    </div>

    <div class="problem-grid fade-in">

      <div class="problem-card">
        <div class="problem-icon">&#128100;</div>
        <h3>You&rsquo;re Still Carrying Every Deal</h3>
        <p>Every important conversation goes through you. Every close requires your involvement. Your company&rsquo;s revenue ceiling is your personal bandwidth&mdash;and you know it. Vacations feel like liabilities. Growth means working harder, not smarter.</p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">&#128200;</div>
        <h3>Pipeline Is a Monthly Guessing Game</h3>
        <p>Some months are strong. Others are dry. You can&rsquo;t reliably predict next quarter&rsquo;s revenue. There&rsquo;s no systematic engine filling the top of the funnel. Everything is reactive. Forecasting feels like fiction.</p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">&#128101;</div>
        <h3>Your Sales Team Isn&rsquo;t Performing</h3>
        <p>Reps aren&rsquo;t being coached. Deals stall at the same stages repeatedly. No one&rsquo;s surfacing problems before they become losses. You&rsquo;re running weekly meetings that produce activity reports, not accountability. Payroll runs regardless of output.</p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">&#128203;</div>
        <h3>Hiring Keeps Failing</h3>
        <p>You&rsquo;ve hired salespeople who interviewed well and couldn&rsquo;t sell. Each mistake costs $80K&ndash;$150K by the time you factor in salary, ramp time, and lost opportunity. The 90-day cycle repeats. The pipeline gap widens.</p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">&#128202;</div>
        <h3>There&rsquo;s No Real Operating System</h3>
        <p>Activity happens but nothing compounds. No documented playbook, no stage-exit criteria, no KPI framework that drives behavior. You have a CRM but no one uses it correctly. Effort doesn&rsquo;t translate into momentum. Good months feel like luck.</p>
      </div>

      <div class="problem-card problem-card--highlight">
        <div class="problem-icon">&#9881;</div>
        <h3>The Real Problem Is Infrastructure</h3>
        <p>These aren&rsquo;t isolated issues&mdash;they share a single root cause: <strong>missing revenue infrastructure.</strong> You can&rsquo;t hire your way out. You can&rsquo;t motivate your way out. When the system isn&rsquo;t built, nothing sticks.</p>
        <p class="problem-card-secondary">The first step is knowing exactly what&rsquo;s broken.</p>
        <a href="/assessment"
           class="problem-cta-link"
           onclick="mgcHomeTrack('hero_cta_click','Diagnose your infrastructure gaps','problem_section');">
          Diagnose your infrastructure gaps &rarr;
        </a>
      </div>

    </div>

  </div>
</section>

<!-- =======================================================
     SECTION 3 — REVENUE ASSESSMENT DETAIL
     Full breakdown of what they get.
======================================================= -->
<section class="assessment-section" id="assessment">
  <div class="container">
    <div class="assessment-inner fade-in">

      <div class="assessment-left">
        <span class="section-label" style="color:var(--green);">Free &bull; 3 Minutes &bull; Instant Results</span>
        <h2 class="assessment-headline">Find Out Exactly What&rsquo;s<br>Holding Your Revenue Back</h2>
        <p class="assessment-body">Answer 20 questions about your revenue engine. Get a personalized score, a stage diagnosis, your top 3 bottlenecks, and specific next steps&mdash;in under 3 minutes. No fluff. No generic advice. No sales call required.</p>

        <ul class="assessment-checklist">
          <li>&#10003; Your Revenue Engine Score (0&ndash;100)</li>
          <li>&#10003; Growth stage diagnosis (which phase you&rsquo;re in)</li>
          <li>&#10003; Top 3 bottlenecks slowing your growth</li>
          <li>&#10003; Specific recommended next steps for each gap</li>
        </ul>

        <a href="/assessment"
           class="btn btn-primary assessment-cta-btn"
           id="assessment-section-cta"
           onclick="mgcHomeTrack('hero_cta_click','Take the Revenue Assessment','assessment_section');">
          Take the Revenue Assessment &rarr;
        </a>
        <p class="assessment-microcopy">Free &nbsp;&bull;&nbsp; No sales call required &nbsp;&bull;&nbsp; Results in under 3 minutes</p>
      </div>

      <div class="assessment-right" aria-hidden="true">
        <div class="assessment-score-preview">
          <div class="asp-label">Revenue Engine Score</div>
          <div class="asp-score">73<span>/100</span></div>
          <div class="asp-stage">&#128992; Growth Ready</div>
          <div class="asp-divider"></div>
          <div class="asp-rows">
            <div class="asp-row"><span>Revenue Stage</span><span class="asp-val">13</span></div>
            <div class="asp-row"><span>Pipeline Maturity</span><span class="asp-val">15</span></div>
            <div class="asp-row"><span>Sales Infrastructure</span><span class="asp-val">14</span></div>
            <div class="asp-row"><span>Talent &amp; Team</span><span class="asp-val">16</span></div>
            <div class="asp-row"><span>Leadership &amp; Execution</span><span class="asp-val">15</span></div>
          </div>
          <div class="asp-divider"></div>
          <div class="asp-bottleneck">
            <div class="asp-bn-label">Top Bottleneck</div>
            <div class="asp-bn-title">Mid-Funnel Deal Velocity</div>
            <div class="asp-bn-desc">Deals entering pipeline but stalling before close. A stage-exit playbook improves velocity 30&ndash;40%.</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- =======================================================
     CHANGE #3 — WHO WE HELP
     Positioned after Assessment so visitors know their problem
     before they check if MetaGrowth is the right fit.
======================================================= -->
<section class="who-section" id="who-we-help">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Who We Help</span>
      <h2 class="section-title">Built for B2B founders<br><span class="green">at the growth inflection point.</span></h2>
      <p class="section-subtitle">MetaGrowth works with companies between $3M and $50M who have product-market fit but can&rsquo;t scale revenue predictably without the founder carrying every deal.</p>
    </div>

    <div class="who-grid fade-in">

      <div class="who-card">
        <div class="who-icon">&#128100;</div>
        <h3>Founder-Led Revenue</h3>
        <p>You&rsquo;re still closing every significant deal. Revenue depends on your involvement. You need a system that works without you in every call.</p>
      </div>

      <div class="who-card">
        <div class="who-icon">&#128101;</div>
        <h3>Underperforming Sales Team</h3>
        <p>You have reps but results are inconsistent. No real process, no accountability infrastructure, and coaching that isn&rsquo;t moving numbers.</p>
      </div>

      <div class="who-card">
        <div class="who-icon">&#128202;</div>
        <h3>Unpredictable Pipeline</h3>
        <p>Top-of-funnel activity is inconsistent. Some months are full, others are dry. There&rsquo;s no systematic outreach engine running in the background.</p>
      </div>

      <div class="who-card">
        <div class="who-icon">&#127945;</div>
        <h3>Ready to Scale</h3>
        <p>You have a proven offer and real customers. Now you need the infrastructure to grow headcount, revenue, and predictability without adding chaos.</p>
      </div>

    </div>

    <div class="who-cta-row fade-in">
      <p class="who-cta-text">Sound familiar? The assessment tells you exactly where your gaps are.</p>
      <a href="/assessment"
         class="btn btn-primary who-cta-btn"
         onclick="mgcHomeTrack('hero_cta_click','Take the Revenue Assessment','who_section');">
        Take the Revenue Assessment &rarr;
      </a>
    </div>

  </div>
</section>

<!-- =======================================================
     SECTION 4 — WHAT WE DO
     CHANGE #4: Text reduced ~20%, outcome-focused, scannable.
     Generate Pipeline / Build a Sales Team / Scale Revenue
======================================================= -->
<section class="services-section" id="services">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">What MetaGrowth Does</span>
      <h2 class="section-title">Three outcomes.<br><span class="green">One integrated system.</span></h2>
      <p class="section-subtitle">Most revenue problems stem from one of three gaps. We identify yours&mdash;then build the infrastructure to close it.</p>
    </div>

    <div class="services-grid fade-in">

      <div class="service-card">
        <div class="service-icon-wrap">
          <div class="service-icon">&#128200;</div>
        </div>
        <h3 class="service-title">Generate Pipeline</h3>
        <p class="service-desc">A systematic outbound engine that fills your calendar with qualified conversations&mdash;without founder involvement. ICP targeting, sequence infrastructure, and booking flows built and managed for you.</p>
        <ul class="service-outcomes">
          <li>Consistent top-of-funnel activity</li>
          <li>Qualified meeting volume on autopilot</li>
          <li>No founder involvement required</li>
        </ul>
        <a href="/assessment" class="service-cta-link"
           onclick="mgcHomeTrack('hero_cta_click','Assess My Pipeline Gap','services_pipeline');">
          Assess my pipeline gap &rarr;
        </a>
      </div>

      <div class="service-card service-card--featured">
        <div class="service-card-badge">Most Common Gap</div>
        <div class="service-icon-wrap">
          <div class="service-icon">&#128101;</div>
        </div>
        <h3 class="service-title">Build a Sales Team</h3>
        <p class="service-desc">Hire, onboard, and activate SDRs and AEs who can actually sell. We run recruiting, assess candidates for real-world performance, and deploy them into a system with accountability built in from day one.</p>
        <ul class="service-outcomes">
          <li>Vetted candidates, not just resume screens</li>
          <li>Structured onboarding and ramp plan</li>
          <li>Team accountable to metrics from week one</li>
        </ul>
        <a href="/assessment" class="service-cta-link"
           onclick="mgcHomeTrack('hero_cta_click','Assess My Team Gap','services_team');">
          Assess my team gap &rarr;
        </a>
      </div>

      <div class="service-card">
        <div class="service-icon-wrap">
          <div class="service-icon">&#127945;</div>
        </div>
        <h3 class="service-title">Scale Revenue</h3>
        <p class="service-desc">Fractional sales leadership that runs your revenue function end-to-end. Pipeline reviews, rep coaching, and accountability systems&mdash;without adding a $250K VP of Sales to payroll.</p>
        <ul class="service-outcomes">
          <li>Weekly coaching and pipeline accountability</li>
          <li>Reporting and KPI infrastructure</li>
          <li>Executive visibility without status meetings</li>
        </ul>
        <a href="/assessment" class="service-cta-link"
           onclick="mgcHomeTrack('hero_cta_click','Assess My Scale Gap','services_scale');">
          Assess my scale gap &rarr;
        </a>
      </div>

    </div>

    <div class="services-assessment-bridge fade-in">
      <p class="sab-text">Not sure which applies to your situation? <a href="/solutions" class="sab-link">Explore all solutions &rarr;</a></p>
    </div>

  </div>
</section>

<!-- =======================================================
     SECTION 5 — METAGROWTH FORMULA
     Five pillars. Plain language. No jargon.
======================================================= -->
<section class="formula-section" id="formula">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">The MetaGrowth Formula</span>
      <h2 class="section-title">Five pillars.<br><span class="green">One outcome: predictable revenue.</span></h2>
      <p class="section-subtitle">Revenue becomes predictable when all five pillars are in place and working together. Most companies are missing two or three. The assessment tells you which ones.</p>
    </div>
    <div class="formula-pillars fade-in">

      <div class="pillar-card">
        <div class="pillar-num">01</div>
        <div class="pillar-icon">&#128100;</div>
        <h3>People</h3>
        <p>The right SDRs, AEs, and leaders&mdash;hired for actual selling ability, not interview performance. Placed into a proven structure with real accountability.</p>
      </div>

      <div class="pillar-connector" aria-hidden="true">&rarr;</div>

      <div class="pillar-card">
        <div class="pillar-num">02</div>
        <div class="pillar-icon">&#128196;</div>
        <h3>Process</h3>
        <p>A repeatable, documented sales motion. ICP definition, messaging, stage-exit criteria, CRM workflows, and objection playbooks that reps actually use.</p>
      </div>

      <div class="pillar-connector" aria-hidden="true">&rarr;</div>

      <div class="pillar-card pillar-card--center">
        <div class="pillar-num">03</div>
        <div class="pillar-icon">&#128202;</div>
        <h3>Pipeline</h3>
        <p>A consistent outreach engine that fills the top of the funnel with qualified conversations&mdash;without founder involvement in every campaign.</p>
      </div>

      <div class="pillar-connector" aria-hidden="true">&rarr;</div>

      <div class="pillar-card">
        <div class="pillar-num">04</div>
        <div class="pillar-icon">&#127945;</div>
        <h3>Performance</h3>
        <p>Weekly coaching. Pipeline reviews. Scorecards. Clear accountability at every level. Metrics that drive behavior, not just reporting that describes it.</p>
      </div>

      <div class="pillar-connector" aria-hidden="true">&rarr;</div>

      <div class="pillar-card pillar-card--end">
        <div class="pillar-num">05</div>
        <div class="pillar-icon">&#128200;</div>
        <h3>Predictability</h3>
        <p>When all four pillars are running, revenue stops being a monthly surprise. You forecast accurately, hire confidently, and scale without adding chaos.</p>
      </div>

    </div>
  </div>
</section>

<!-- =======================================================
     SECTION 6 — PROOF
     Metrics, testimonials, case studies. Strongest only.
     Moved before Command Center per buyer journey brief:
     Proof (#6) → Command Center (#7)
======================================================= -->
<section class="proof-section section-dark" id="proof">
  <div class="container">
    <div class="text-center fade-in">
      <span class="section-label">Results &amp; Proof</span>
      <h2 style="color:var(--white);margin-bottom:16px;">Numbers don&rsquo;t lie.</h2>
      <p style="color:rgba(255,255,255,0.45);font-size:0.97rem;max-width:520px;margin:0 auto 48px;">Across 112+ sales teams built for founders and revenue leaders at B2B companies between $3M and $50M — including 50+ custom deployments.</p>
    </div>

    <div class="proof-metrics fade-in">
      <div class="proof-metric-card">
        <div class="proof-metric-num">$110M+</div>
        <div class="proof-metric-label">Pipeline Created</div>
      </div>
      <div class="proof-metric-card">
        <div class="proof-metric-num">$24M+</div>
        <div class="proof-metric-label">Revenue Produced</div>
      </div>
      <div class="proof-metric-card">
        <div class="proof-metric-num">14,500+</div>
        <div class="proof-metric-label">Meetings Booked</div>
      </div>
      <div class="proof-metric-card">
        <div class="proof-metric-num">1,320+</div>
        <div class="proof-metric-label">Clients Added</div>
      </div>
      <div class="proof-metric-card">
        <div class="proof-metric-num">112+</div>
        <div class="proof-metric-label">Sales Teams Built</div>
      </div>
    </div>

    <div class="proof-testimonials fade-in">

      <div class="proof-quote">
        <div class="proof-quote-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="proof-quote-text">&ldquo;MetaGrowth didn&rsquo;t just give us a strategy&mdash;they installed it. Within 90 days we had a real pipeline, a working CRM, and reps who knew exactly what to do every day.&rdquo;</p>
        <div class="proof-quote-author">
          <div class="proof-quote-avatar">JR</div>
          <div>
            <div class="proof-quote-name">Jason R.</div>
            <div class="proof-quote-title">CEO &bull; B2B Technology &bull; $8M ARR</div>
          </div>
        </div>
      </div>

      <div class="proof-quote">
        <div class="proof-quote-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="proof-quote-text">&ldquo;We tried two other agencies before MetaGrowth. The difference was they actually understood sales infrastructure&mdash;not just tactics. Our forecast accuracy improved dramatically.&rdquo;</p>
        <div class="proof-quote-author">
          <div class="proof-quote-avatar">SK</div>
          <div>
            <div class="proof-quote-name">Sarah K.</div>
            <div class="proof-quote-title">VP Sales &bull; Professional Services &bull; $14M Revenue</div>
          </div>
        </div>
      </div>

      <div class="proof-quote">
        <div class="proof-quote-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="proof-quote-text">&ldquo;The recruiting process was unlike anything I&rsquo;d experienced. They found candidates who could actually sell. Three hires later, all three are hitting quota.&rdquo;</p>
        <div class="proof-quote-author">
          <div class="proof-quote-avatar">MP</div>
          <div>
            <div class="proof-quote-name">Michael P.</div>
            <div class="proof-quote-title">Founder &bull; Consulting Firm &bull; 22 Employees</div>
          </div>
        </div>
      </div>

    </div>

    <div class="proof-cases fade-in">
      <div class="proof-case">
        <div class="proof-case-co">Azul Arc</div>
        <div class="proof-case-challenge">Founder-dependent revenue, no structured prospecting engine.</div>
        <div class="proof-case-results">
          <span>$100M+ Pipeline</span>
          <span>11,000+ Meetings</span>
          <span>21K+ Outreaches</span>
        </div>
        <a href="/case-studies#azul-arc" class="proof-case-link">Read the full story &rarr;</a>
      </div>
      <div class="proof-case">
        <div class="proof-case-co">Private Client &mdash; B2B Services</div>
        <div class="proof-case-challenge">Needed scalable outreach without adding fixed overhead.</div>
        <div class="proof-case-results">
          <span>$16M+ Revenue Added</span>
          <span>320+ Clients</span>
          <span>75,000+ Outreaches</span>
        </div>
        <a href="/case-studies#private" class="proof-case-link">Read the full story &rarr;</a>
      </div>
      <div class="proof-case">
        <div class="proof-case-co">Speakeasy</div>
        <div class="proof-case-challenge">Needed sales leadership and accountability without a full-time hire.</div>
        <div class="proof-case-results">
          <span>&#10003; Strategic Oversight</span>
          <span>&#10003; Team Upgraded</span>
          <span>&#10003; Accountability Built</span>
        </div>
        <a href="/case-studies#speakeasy" class="proof-case-link">Read the full story &rarr;</a>
      </div>
    </div>

    <div class="proof-assessment-bridge fade-in">
      <p class="pab-text">Ready to find out where your revenue engine ranks?</p>
      <a href="/assessment"
         class="btn btn-primary pab-cta"
         onclick="mgcHomeTrack('hero_cta_click','Take the Revenue Assessment','proof_bridge');">
        Take the Revenue Assessment &rarr;
      </a>
    </div>

  </div>
</section>

<!-- =======================================================
     SECTION 7 — COMMAND CENTER
     Major differentiator. Visibility + accountability focus.
     Moved after Proof per buyer journey brief:
     Proof (#6) → Command Center (#7)
======================================================= -->
<section class="cc-section" id="command-center">
  <div class="container">
    <div class="cc-inner fade-in">

      <div class="cc-left">
        <span class="cc-eyebrow">MetaGrowth Command Center&trade;</span>
        <h2 class="cc-headline">Complete visibility.<br>No status meetings required.</h2>
        <p class="cc-body">Every engagement includes a centralized operating system. Real-time pipeline data, rep performance, recruiting status, and executive briefings&mdash;all in one place. You see everything without asking for anything.</p>

        <ul class="cc-list">
          <li>
            <span class="cc-list-icon">&#128200;</span>
            <div>
              <strong>Real-Time KPI Dashboard</strong>
              <span>Pipeline, meetings, revenue, outreach, and rep performance in one view.</span>
            </div>
          </li>
          <li>
            <span class="cc-list-icon">&#128196;</span>
            <div>
              <strong>Weekly Executive Briefings</strong>
              <span>Written summaries and video updates delivered to you&mdash;no calendar required.</span>
            </div>
          </li>
          <li>
            <span class="cc-list-icon">&#128100;</span>
            <div>
              <strong>Recruiting &amp; Performance Transparency</strong>
              <span>Candidate scorecards, call recordings, coaching sessions, and rep performance on demand.</span>
            </div>
          </li>
          <li>
            <span class="cc-list-icon">&#128202;</span>
            <div>
              <strong>Accountability at Every Level</strong>
              <span>KPIs tracked weekly. Performance gaps surfaced immediately. No guessing, no surprises.</span>
            </div>
          </li>
        </ul>

        <p class="cc-included">Included with every engagement &mdash; at no additional cost.</p>
        <a href="/how-we-work"
           class="btn btn-secondary cc-cta"
           onclick="mgcHomeTrack('command_center_click','See How We Work','command_center');">
          See How It Works &rarr;
        </a>
      </div>

      <div class="cc-right">
        <div class="cc-mockup-wrap">
          <div class="cc-mockup-bar">
            <div class="cc-mockup-dots"><span></span><span></span><span></span></div>
            <div class="cc-mockup-url">metagrowth.ventures/portal/dashboard</div>
          </div>
          <div class="cc-mockup-screen">
            <img src="/static/command-center-dashboard.webp"
                 alt="MetaGrowth Command Center dashboard"
                 loading="lazy" width="1024" height="768">
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- =======================================================
     SECTION 8 — REVENUE REVIEW
     CHANGE #5: btn-secondary + new two-line copy.
     For visitors who already know they need help.
     Always below the assessment.
======================================================= -->
<section class="review-section" id="book">
  <div class="container">
    <div class="review-inner fade-in">
      <div class="review-content">
        <span class="section-label" style="color:var(--green);">Already Know You Need Help?</span>
        <h2 class="review-headline">Book a Complimentary<br>Revenue Review</h2>
        <p class="review-body">For founders and revenue leaders who want a direct conversation about their situation. 30 minutes. No pitch. Walk away with three actionable next steps specific to your company.</p>
        <ul class="review-list">
          <li>&#10003; Personalized to your revenue stage and model</li>
          <li>&#10003; Straight diagnosis&mdash;no generic advice</li>
          <li>&#10003; Clear path forward within 30 minutes</li>
        </ul>
        <!-- CHANGE #5: btn-secondary + new copy -->
        <a href="https://meetings.hubspot.com/josh549/revenue-audit?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Drevenue_audit"
           target="_blank" rel="noopener noreferrer"
           class="btn btn-secondary review-cta-btn"
           onclick="mgcHomeTrack('revenue_review_click','Book a Revenue Review','final_cta');mgcHomeTrack('calendar_open','Book a Revenue Review','final_cta');">
          Already Know What&rsquo;s Broken?&nbsp; Book a Revenue Review &rarr;
        </a>
        <p class="review-microcopy">Prefer to start with the self-service diagnostic? <a href="/assessment" class="review-micro-link" onclick="mgcHomeTrack('hero_cta_click','Take Assessment Instead','final_cta');">Take the 3-minute assessment instead &rarr;</a></p>
      </div>

      <div class="review-promise">
        <div class="review-promise-inner">
          <div class="review-promise-badge">10X Pipeline Promise&trade;</div>
          <p class="review-promise-text">For every dollar you invest with MetaGrowth, we generate at least <strong>ten dollars in qualified pipeline.</strong></p>
          <p class="review-promise-text">If we don&rsquo;t hit 10X, we keep working at <strong>no management fee</strong> until we do.</p>
          <a href="#faq" class="review-promise-link">How this works &darr;</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- =======================================================
     FAQ — objection handling before bounce
======================================================= -->
<section class="faq-section" id="faq">
  <div class="container">
    <div class="faq-header fade-in">
      <span class="section-label" style="color:var(--green);">Due Diligence</span>
      <h2 class="faq-headline">Questions Founders Ask<br>Before Hiring MetaGrowth</h2>
    </div>

    <div class="faq-list fade-in" id="faq-list">

      <div class="faq-item faq-item--open">
        <button class="faq-trigger" aria-expanded="true" aria-controls="faq-a1">
          <span class="faq-q">How quickly will we begin generating revenue?</span>
          <span class="faq-icon" aria-hidden="true">
            <svg class="si faq-icon-plus" fill="currentColor"><use href="#si79" xlink:href="#si79"/></svg>
            <svg class="si faq-icon-minus" fill="currentColor"><use href="#si78" xlink:href="#si78"/></svg>
          </span>
        </button>
        <div class="faq-answer" id="faq-a1" role="region">
          <div class="faq-answer-inner">
            <p>Most clients begin seeing meaningful pipeline activity within the first 30&ndash;60 days. Infrastructure is built in week one, outreach begins in week two, and early conversations are typically happening before the end of the first month.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-a2">
          <span class="faq-q">What does a typical engagement cost?</span>
          <span class="faq-icon" aria-hidden="true">
            <svg class="si faq-icon-plus" fill="currentColor"><use href="#si79" xlink:href="#si79"/></svg>
            <svg class="si faq-icon-minus" fill="currentColor"><use href="#si78" xlink:href="#si78"/></svg>
          </span>
        </button>
        <div class="faq-answer" id="faq-a2" role="region">
          <div class="faq-answer-inner">
            <p>Engagements range from $2,500 to $15,000 per month depending on scope and service model. Some models include performance-based components. We are transparent about pricing on the first call&mdash;you will know the investment before any commitment is made.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-a3">
          <span class="faq-q">What is the MetaGrowth 10X Pipeline Promise&trade;?</span>
          <span class="faq-icon" aria-hidden="true">
            <svg class="si faq-icon-plus" fill="currentColor"><use href="#si79" xlink:href="#si79"/></svg>
            <svg class="si faq-icon-minus" fill="currentColor"><use href="#si78" xlink:href="#si78"/></svg>
          </span>
        </button>
        <div class="faq-answer" id="faq-a3" role="region">
          <div class="faq-answer-inner">
            <p>For every dollar you invest with MetaGrowth, we generate at least ten dollars in qualified pipeline value. It covers outreach infrastructure, volume, targeting, and qualified conversations booked. If we don&rsquo;t hit 10X, we keep working at no management fee until we do.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-a4">
          <span class="faq-q">How long are your agreements?</span>
          <span class="faq-icon" aria-hidden="true">
            <svg class="si faq-icon-plus" fill="currentColor"><use href="#si79" xlink:href="#si79"/></svg>
            <svg class="si faq-icon-minus" fill="currentColor"><use href="#si78" xlink:href="#si78"/></svg>
          </span>
        </button>
        <div class="faq-answer" id="faq-a4" role="region">
          <div class="faq-answer-inner">
            <p>Most engagements begin with a 90-day foundation period. After that, clients continue month-to-month or extended retainer. We do not trap clients in multi-year contracts. If we are not producing results, you should not stay.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-a5">
          <span class="faq-q">Why wouldn&rsquo;t I just hire a salesperson?</span>
          <span class="faq-icon" aria-hidden="true">
            <svg class="si faq-icon-plus" fill="currentColor"><use href="#si79" xlink:href="#si79"/></svg>
            <svg class="si faq-icon-minus" fill="currentColor"><use href="#si78" xlink:href="#si78"/></svg>
          </span>
        </button>
        <div class="faq-answer" id="faq-a5" role="region">
          <div class="faq-answer-inner">
            <p>A single salesperson without a system is one of the most expensive mistakes a founder can make. They spend their first 90 days building their own process while you pay salary and wait. MetaGrowth builds the system first, then deploys talent into a proven environment.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-a6">
          <span class="faq-q">Do I need an existing sales team?</span>
          <span class="faq-icon" aria-hidden="true">
            <svg class="si faq-icon-plus" fill="currentColor"><use href="#si79" xlink:href="#si79"/></svg>
            <svg class="si faq-icon-minus" fill="currentColor"><use href="#si78" xlink:href="#si78"/></svg>
          </span>
        </button>
        <div class="faq-answer" id="faq-a6" role="region">
          <div class="faq-answer-inner">
            <p>No. The majority of clients come with no sales team, an underperforming one, or a founder personally carrying the entire sales function. We assess where you are and build or augment from there.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
/* =========================================================
   HERO
========================================================= */
.home-hero {
  min-height: calc(100vh - 68px);
  display: flex; align-items: center;
  position: relative; overflow: hidden;
  padding: 80px 0 64px;
  background-color: #111111;
  background-image: url('/static/hero-texture.webp');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.hero-bg-grid {
  position: absolute; inset: 0; z-index: 0;
  background: rgba(0,0,0,0.30);
}
.hero-glow {
  position: absolute; right: -100px; top: 50%; z-index: 1;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(173,120,5,0.10) 0%, transparent 70%);
  transform: translateY(-50%); pointer-events: none;
}
.hero-content { position: relative; z-index: 2; max-width: 820px; }
.hero-eyebrow {
  display: inline-flex; align-items: center;
  background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.28);
  border-radius: 20px; padding: 6px 16px;
  font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: rgba(173,120,5,0.9); margin-bottom: 24px;
}
.hero-title {
  font-size: clamp(2.4rem, 5.5vw, 3.8rem);
  font-weight: 900; line-height: 1.08;
  letter-spacing: -0.03em; color: var(--white); margin-bottom: 22px;
}
.hero-title .accent { color: var(--green); display: block; }
.hero-subheadline {
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  color: rgba(255,255,255,0.75); font-weight: 500;
  line-height: 1.6; max-width: 680px; margin-bottom: 36px;
}
.hero-cta-row {
  display: flex; flex-wrap: wrap; gap: 12px;
  align-items: center; margin-bottom: 12px;
}
.hero-cta-primary {
  padding: 17px 32px; font-size: 1.05rem; font-weight: 800;
  letter-spacing: 0.01em; white-space: nowrap;
}
.hero-cta-secondary {
  padding: 15px 28px; font-size: 0.97rem; white-space: nowrap;
}
@media (max-width: 640px) {
  .hero-cta-primary, .hero-cta-secondary { width: 100%; justify-content: center; }
}
.hero-cta-microcopy {
  font-size: 0.78rem; color: rgba(255,255,255,0.4);
  font-weight: 600; letter-spacing: 0.04em;
  margin: 0 0 28px;
}
.hero-trust-bar {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: 8px 0; padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.hero-trust-item {
  color: rgba(255,255,255,0.55); font-size: 0.85rem;
  font-weight: 500; padding: 0 20px;
}
.hero-trust-item:first-child { padding-left: 0; }
.hero-trust-divider {
  width: 1px; height: 16px;
  background: rgba(255,255,255,0.15); flex-shrink: 0;
}
@media (max-width: 640px) {
  .hero-trust-bar { gap: 8px; }
  .hero-trust-divider { display: none; }
  .hero-trust-item { padding: 0; width: 100%; }
}

/* =========================================================
   LOGO MARQUEE
========================================================= */
.logos-section {
  background: var(--gray-50); padding: 36px 0;
  border-top: 1px solid var(--gray-200);
  border-bottom: 1px solid var(--gray-200);
}
.logos-label {
  text-align: center; font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--gray-400); margin-bottom: 24px;
}
.logo-marquee-wrap {
  overflow: hidden; position: relative; width: 100%;
  padding: 8px 0; min-height: 88px; contain: layout;
}
.logo-marquee-wrap::before, .logo-marquee-wrap::after {
  content: ''; position: absolute; top: 0; bottom: 0;
  width: 120px; z-index: 2; pointer-events: none;
}
.logo-marquee-wrap::before { left: 0; background: linear-gradient(to right, var(--gray-50) 0%, transparent 100%); }
.logo-marquee-wrap::after  { right: 0; background: linear-gradient(to left, var(--gray-50) 0%, transparent 100%); }
.logo-marquee-track {
  display: flex; align-items: center; gap: 20px;
  width: max-content;
  animation: marquee-scroll 40s linear infinite; will-change: transform;
}
.logo-marquee-track:hover { animation-play-state: paused; }
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.logo-tile {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  height: 72px; padding: 0 28px;
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: var(--radius); transition: border-color var(--transition);
}
.logo-tile--img { padding: 10px 18px; min-width: 160px; }
.logo-img {
  height: 44px; width: auto; max-width: 180px; object-fit: contain;
  filter: grayscale(100%) contrast(0.7) brightness(1.1);
  transition: filter var(--transition);
}
.logo-tile--img:hover .logo-img { filter: grayscale(0%) contrast(1) brightness(1); }

/* =========================================================
   SECTION 2 — PROBLEM
========================================================= */
.problem-section { padding: 100px 0; background: var(--white); }
.problem-header { text-align: center; margin-bottom: 56px; }
.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 0;
}
@media (max-width: 1100px) { .problem-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .problem-grid { grid-template-columns: 1fr; } }
.problem-card {
  background: var(--gray-50); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg); padding: 32px 28px;
  transition: all var(--transition);
}
.problem-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); border-color: rgba(173,120,5,0.3); }
.problem-icon { font-size: 2rem; margin-bottom: 14px; }
.problem-card h3 { font-size: 1rem; font-weight: 800; color: var(--gray-800); margin-bottom: 10px; }
.problem-card p { font-size: 0.88rem; color: var(--gray-600); line-height: 1.75; margin: 0; }
.problem-card p + p { margin-top: 10px; }
.problem-card--highlight {
  background: linear-gradient(145deg, #0D0D0F 0%, #1a1405 100%);
  border-color: rgba(173,120,5,0.3);
}
.problem-card--highlight h3 { color: var(--white); }
.problem-card--highlight p { color: rgba(255,255,255,0.65); }
.problem-card--highlight p strong { color: var(--green); }
.problem-card-secondary { font-size: 0.88rem; color: rgba(255,255,255,0.5) !important; font-style: italic; }
.problem-cta-link {
  display: inline-block; margin-top: 18px;
  font-size: 0.88rem; font-weight: 700;
  color: var(--green); text-decoration: none;
  transition: opacity var(--transition);
}
.problem-cta-link:hover { opacity: 0.8; }

/* =========================================================
   CHANGE #2 — ASSESSMENT INTERSTITIAL
========================================================= */
.assessment-interstitial {
  background: linear-gradient(135deg, #0A0A0A 0%, #111111 100%);
  padding: 80px 0;
  border-top: 1px solid rgba(173,120,5,0.15);
  border-bottom: 1px solid rgba(173,120,5,0.15);
  position: relative; overflow: hidden;
}
.assessment-interstitial::before {
  content: ''; position: absolute; top: -80px; right: -150px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(173,120,5,0.08) 0%, transparent 65%);
  pointer-events: none;
}
.ait-inner {
  display: grid; grid-template-columns: 1fr 380px;
  gap: 64px; align-items: center; position: relative;
}
@media (max-width: 1100px) { .ait-inner { grid-template-columns: 1fr; gap: 40px; } .ait-steps { display: none; } }
.ait-headline {
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 900;
  color: var(--white); line-height: 1.1;
  letter-spacing: -0.03em; margin: 14px 0 18px;
}
.ait-subhead {
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255,255,255,0.65); line-height: 1.7;
  max-width: 560px; margin-bottom: 32px; font-weight: 500;
}
.ait-cta {
  font-size: 1.1rem; font-weight: 800;
  padding: 18px 40px; letter-spacing: 0.01em;
}
.ait-microcopy {
  margin-top: 14px; font-size: 0.8rem;
  color: rgba(255,255,255,0.3); font-weight: 500;
}
.ait-steps {
  display: flex; flex-direction: column; gap: 0;
}
.ait-step {
  display: flex; align-items: flex-start; gap: 16px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px; padding: 20px 22px;
  transition: border-color var(--transition);
}
.ait-step:hover { border-color: rgba(173,120,5,0.3); }
.ait-step-num {
  font-size: 1.5rem; font-weight: 900; color: var(--green);
  line-height: 1; flex-shrink: 0; min-width: 32px;
}
.ait-step-text { display: flex; flex-direction: column; gap: 4px; }
.ait-step-text strong { font-size: 0.95rem; color: var(--white); font-weight: 700; }
.ait-step-text span { font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.5; }
.ait-step-arrow {
  text-align: center; color: rgba(173,120,5,0.4); font-size: 1rem;
  padding: 6px 0;
}

/* =========================================================
   SECTION 3 — ASSESSMENT
========================================================= */
.assessment-section {
  background: linear-gradient(135deg, #0A0A0A 0%, #111111 100%);
  padding: 100px 0; position: relative; overflow: hidden;
}
.assessment-section::before {
  content: ''; position: absolute; top: -100px; right: -200px;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(173,120,5,0.09) 0%, transparent 65%);
  pointer-events: none;
}
.assessment-inner {
  display: grid; grid-template-columns: 1fr 400px;
  gap: 72px; align-items: center;
}
@media (max-width: 1100px) { .assessment-inner { grid-template-columns: 1fr; } .assessment-right { display: none; } }
.assessment-headline {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900;
  color: var(--white); line-height: 1.15; margin: 12px 0 18px;
}
.assessment-body {
  font-size: 1rem; color: rgba(255,255,255,0.65);
  line-height: 1.75; margin-bottom: 28px;
}
.assessment-checklist {
  list-style: none; display: flex; flex-direction: column;
  gap: 10px; margin-bottom: 36px;
}
.assessment-checklist li {
  font-size: 0.97rem; color: rgba(255,255,255,0.75);
  font-weight: 500; display: flex; align-items: center; gap: 10px;
}
.assessment-cta-btn {
  font-size: 1.05rem; font-weight: 800;
  padding: 18px 36px; letter-spacing: 0.01em;
}
.assessment-microcopy {
  margin-top: 12px; font-size: 0.8rem;
  color: rgba(255,255,255,0.3); font-weight: 500;
}
.assessment-score-preview {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(173,120,5,0.3);
  border-radius: 16px; padding: 32px 28px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(173,120,5,0.08);
}
.asp-label { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(255,255,255,0.3); margin-bottom: 10px; }
.asp-score { font-size: 4rem; font-weight: 900; color: var(--green); line-height: 1; margin-bottom: 8px; }
.asp-score span { font-size: 1.4rem; color: rgba(255,255,255,0.3); font-weight: 400; }
.asp-stage { font-size: 0.9rem; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
.asp-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 18px 0; }
.asp-rows { display: flex; flex-direction: column; gap: 10px; }
.asp-row { display: flex; justify-content: space-between; font-size: 0.83rem; color: rgba(255,255,255,0.5); }
.asp-val { font-weight: 800; color: var(--green); }
.asp-bn-label { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); margin-bottom: 6px; }
.asp-bn-title { font-size: 0.95rem; font-weight: 800; color: var(--white); margin-bottom: 6px; }
.asp-bn-desc { font-size: 0.8rem; color: rgba(255,255,255,0.45); line-height: 1.6; }

/* =========================================================
   CHANGE #3 — WHO WE HELP
========================================================= */
.who-section { padding: 100px 0; background: var(--gray-50); }
.who-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 20px; margin: 48px 0 0;
}
@media (max-width: 1100px) { .who-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .who-grid { grid-template-columns: 1fr; } }
.who-card {
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg); padding: 28px 24px;
  transition: all var(--transition);
}
.who-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); border-color: rgba(173,120,5,0.3); }
.who-icon { font-size: 1.8rem; margin-bottom: 12px; }
.who-card h3 { font-size: 0.97rem; font-weight: 800; color: var(--gray-800); margin-bottom: 8px; }
.who-card p { font-size: 0.85rem; color: var(--gray-600); line-height: 1.7; margin: 0; }
.who-cta-row {
  text-align: center; margin-top: 48px; padding: 36px 32px;
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
}
.who-cta-text {
  font-size: 1.05rem; font-weight: 600; color: var(--gray-700);
  margin-bottom: 20px;
}
.who-cta-btn { font-size: 1rem; font-weight: 800; padding: 16px 32px; }

/* =========================================================
   SECTION 4 — SERVICES
========================================================= */
.services-section { padding: 100px 0; background: var(--white); }
.services-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 28px; margin: 56px 0 0;
}
@media (max-width: 1100px) { .services-grid { grid-template-columns: 1fr; } }
.service-card {
  background: var(--gray-50); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg); padding: 36px 32px;
  transition: all var(--transition); position: relative;
}
.service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: rgba(173,120,5,0.3); }
.service-card--featured {
  background: linear-gradient(160deg, #fffdf5 0%, var(--white) 70%);
  border-color: rgba(173,120,5,0.35);
  box-shadow: 0 4px 24px rgba(173,120,5,0.08);
}
.service-card-badge {
  display: inline-block; font-size: 0.68rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--green); background: rgba(173,120,5,0.1);
  border: 1px solid rgba(173,120,5,0.25);
  border-radius: 20px; padding: 4px 12px; margin-bottom: 18px;
}
.service-icon-wrap { margin-bottom: 18px; }
.service-icon {
  font-size: 2.2rem; display: inline-block;
  width: 56px; height: 56px; border-radius: 14px;
  background: rgba(173,120,5,0.08); border: 1px solid rgba(173,120,5,0.18);
  display: flex; align-items: center; justify-content: center;
}
.service-title {
  font-size: 1.2rem; font-weight: 900; color: var(--gray-800);
  margin-bottom: 12px; letter-spacing: -0.01em;
}
.service-desc {
  font-size: 0.9rem; color: var(--gray-600);
  line-height: 1.75; margin-bottom: 20px;
}
.service-outcomes {
  list-style: none; display: flex; flex-direction: column;
  gap: 8px; margin-bottom: 24px;
}
.service-outcomes li {
  font-size: 0.85rem; color: var(--gray-700); font-weight: 600;
  padding-left: 18px; position: relative;
}
.service-outcomes li::before {
  content: "✓"; position: absolute; left: 0;
  color: var(--green); font-weight: 900;
}
.service-cta-link {
  font-size: 0.88rem; font-weight: 800; color: var(--green);
  text-decoration: none; transition: opacity var(--transition);
  display: inline-flex; align-items: center; gap: 4px;
}
.service-cta-link:hover { opacity: 0.75; }
.services-assessment-bridge {
  text-align: center; margin-top: 56px; padding: 40px 32px;
  background: var(--gray-50); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
}
.sab-text {
  font-size: 1.1rem; font-weight: 600; color: var(--gray-700);
  margin-bottom: 20px;
}
.sab-cta { font-size: 1rem; font-weight: 800; padding: 16px 32px; }

/* =========================================================
   SECTION 5 — FORMULA
========================================================= */
.formula-section { padding: 100px 0; background: var(--gray-50); }
.formula-pillars {
  display: flex; align-items: stretch;
  gap: 0; margin-top: 56px; flex-wrap: wrap;
}
.pillar-card {
  flex: 1; min-width: 160px;
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg); padding: 32px 24px;
  text-align: center; transition: all var(--transition);
  position: relative;
}
.pillar-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--green); }
.pillar-card--center { border-color: rgba(173,120,5,0.35); background: linear-gradient(160deg,#fffdf5 0%,#fff 70%); }
.pillar-card--end { border-left: none; border-radius: 0 var(--radius-lg) var(--radius-lg) 0; }
.pillar-card:first-child { border-radius: var(--radius-lg) 0 0 var(--radius-lg); }
.pillar-num {
  font-size: 3.5rem; font-weight: 900;
  color: rgba(173,120,5,0.07); line-height: 1;
  margin-bottom: -10px; font-family: var(--font-head);
}
.pillar-icon { font-size: 1.8rem; margin-bottom: 12px; }
.pillar-card h3 { font-size: 1rem; font-weight: 800; color: var(--gray-800); margin-bottom: 10px; }
.pillar-card p { font-size: 0.82rem; color: var(--gray-600); line-height: 1.65; margin: 0; }
.pillar-connector {
  display: flex; align-items: center; padding: 0 4px;
  font-size: 1.4rem; color: rgba(173,120,5,0.4); font-weight: 300;
  align-self: center; flex-shrink: 0;
}
@media (max-width: 1100px) {
  .formula-pillars { gap: 16px; }
  .pillar-card, .pillar-card:first-child, .pillar-card--end { border-radius: var(--radius-lg); border: 1px solid var(--gray-200); }
  .pillar-connector { display: none; }
}
@media (max-width: 640px) { .pillar-card { min-width: 100%; } }

/* =========================================================
   SECTION 6 — COMMAND CENTER
========================================================= */
.cc-section {
  background: #0D0D0F; padding: 100px 0;
  border-top: 1px solid rgba(173,120,5,0.1);
  border-bottom: 1px solid rgba(173,120,5,0.1);
}
.cc-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 72px; align-items: center;
}
@media (max-width: 1100px) { .cc-inner { grid-template-columns: 1fr; gap: 40px; } .cc-right { order: -1; } }
.cc-eyebrow {
  display: inline-block; font-size: 0.72rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.14em; color: var(--green);
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.22);
  border-radius: 20px; padding: 5px 14px; margin-bottom: 20px;
}
.cc-headline {
  font-size: clamp(1.7rem, 3vw, 2.3rem); font-weight: 900; color: #fff;
  line-height: 1.15; letter-spacing: -0.025em; margin-bottom: 16px;
}
.cc-body { font-size: 0.97rem; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 28px; }
.cc-list {
  list-style: none; display: flex; flex-direction: column;
  gap: 18px; margin-bottom: 24px;
}
.cc-list li { display: flex; align-items: flex-start; gap: 14px; }
.cc-list-icon {
  font-size: 1.2rem; flex-shrink: 0;
  width: 38px; height: 38px; border-radius: 10px;
  background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.2);
  display: flex; align-items: center; justify-content: center;
}
.cc-list li > div { display: flex; flex-direction: column; gap: 3px; }
.cc-list li strong { font-size: 0.93rem; color: #fff; }
.cc-list li span { font-size: 0.85rem; color: rgba(255,255,255,0.5); line-height: 1.5; }
.cc-included { font-size: 0.82rem; font-weight: 700; color: var(--green); margin-bottom: 22px; }
.cc-cta { display: inline-flex; align-items: center; gap: 8px; }
.cc-mockup-wrap {
  border-radius: 12px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 0 1px rgba(173,120,5,0.2), 0 40px 120px rgba(0,0,0,0.7), 0 0 80px rgba(173,120,5,0.10);
}
.cc-mockup-bar {
  background: #16171b; border-bottom: 1px solid rgba(255,255,255,0.07);
  padding: 11px 18px; display: flex; align-items: center; gap: 12px;
}
.cc-mockup-dots { display: flex; gap: 6px; flex-shrink: 0; }
.cc-mockup-dots span { width: 11px; height: 11px; border-radius: 50%; }
.cc-mockup-dots span:nth-child(1) { background: #ff5f57; }
.cc-mockup-dots span:nth-child(2) { background: #febc2e; }
.cc-mockup-dots span:nth-child(3) { background: #28c840; }
.cc-mockup-url {
  flex: 1; background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07); border-radius: 5px;
  padding: 4px 14px; font-size: 0.72rem; color: rgba(255,255,255,0.3);
  text-align: center; letter-spacing: 0.02em;
}
.cc-mockup-screen img { display: block; width: 100%; height: auto; }

/* =========================================================
   SECTION 7 — PROOF
========================================================= */
.proof-section { padding: 100px 0; }
.proof-metrics {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 24px; margin-bottom: 72px;
}
.proof-metric-card {
  text-align: center; padding: 28px 32px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-lg); min-width: 160px;
  transition: border-color var(--transition);
}
.proof-metric-card:hover { border-color: rgba(173,120,5,0.3); }
.proof-metric-num {
  font-size: 2.2rem; font-weight: 900; color: var(--green);
  line-height: 1; margin-bottom: 6px;
}
.proof-metric-label { font-size: 0.8rem; color: rgba(255,255,255,0.45); font-weight: 500; }
.proof-testimonials {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 24px; margin-bottom: 64px;
}
@media (max-width: 1100px) { .proof-testimonials { grid-template-columns: 1fr; } }
.proof-quote {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-lg); padding: 32px 28px;
  transition: border-color var(--transition);
}
.proof-quote:hover { border-color: rgba(173,120,5,0.3); }
.proof-quote-stars { color: #ad7805; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 14px; }
.proof-quote-text {
  font-size: 0.95rem; color: rgba(255,255,255,0.72);
  line-height: 1.75; font-style: italic; margin-bottom: 24px;
}
.proof-quote-author { display: flex; align-items: center; gap: 12px; }
.proof-quote-avatar {
  width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
  background: rgba(173,120,5,0.2); border: 2px solid rgba(173,120,5,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 800; color: var(--green);
}
.proof-quote-name { font-weight: 700; color: var(--white); font-size: 0.92rem; }
.proof-quote-title { font-size: 0.78rem; color: rgba(255,255,255,0.4); margin-top: 2px; }
.proof-cases {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
@media (max-width: 1100px) { .proof-cases { grid-template-columns: 1fr; } }
.proof-case {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius-lg); padding: 28px 24px;
  transition: border-color var(--transition);
}
.proof-case:hover { border-color: rgba(173,120,5,0.3); }
.proof-case-co { font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 8px; }
.proof-case-challenge { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-bottom: 16px; line-height: 1.6; }
.proof-case-results {
  display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;
}
.proof-case-results span {
  font-size: 0.78rem; font-weight: 700; color: var(--green);
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.2);
  padding: 4px 10px; border-radius: 20px;
}
.proof-case-link {
  font-size: 0.85rem; font-weight: 700; color: var(--green);
  text-decoration: none; transition: opacity var(--transition);
}
.proof-case-link:hover { opacity: 0.75; }
.proof-assessment-bridge {
  text-align: center; margin-top: 64px; padding: 40px 32px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius-lg);
}
.pab-text {
  font-size: 1.1rem; font-weight: 600; color: rgba(255,255,255,0.7);
  margin-bottom: 20px;
}
.pab-cta { font-size: 1rem; font-weight: 800; padding: 16px 32px; }

/* =========================================================
   SECTION 8 — REVENUE REVIEW
========================================================= */
.review-section {
  background: #0A0A0A; padding: 100px 0;
  border-top: 1px solid rgba(173,120,5,0.15);
}
.review-inner {
  display: grid; grid-template-columns: 1fr 380px;
  gap: 72px; align-items: center;
}
@media (max-width: 1100px) { .review-inner { grid-template-columns: 1fr; } }
.review-headline {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 900;
  color: var(--white); line-height: 1.15; margin: 12px 0 16px;
}
.review-body {
  font-size: 1rem; color: rgba(255,255,255,0.65);
  line-height: 1.75; margin-bottom: 24px;
}
.review-list {
  list-style: none; display: flex; flex-direction: column;
  gap: 10px; margin-bottom: 36px;
}
.review-list li { font-size: 0.97rem; color: rgba(255,255,255,0.65); font-weight: 500; }
.review-cta-btn { font-size: 1rem; font-weight: 800; padding: 17px 32px; }
.review-microcopy { margin-top: 18px; font-size: 0.85rem; color: rgba(255,255,255,0.3); }
.review-micro-link { color: rgba(173,120,5,0.7); font-weight: 600; }
.review-micro-link:hover { color: var(--green); }
.review-promise {
  background: rgba(173,120,5,0.07); border: 1px solid rgba(173,120,5,0.25);
  border-radius: var(--radius-lg); padding: 36px 32px;
}
.review-promise-badge {
  display: inline-block; font-size: 0.72rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--green); border: 1px solid rgba(173,120,5,0.3);
  border-radius: 20px; padding: 4px 12px; margin-bottom: 16px;
}
.review-promise-text {
  font-size: 0.92rem; color: rgba(255,255,255,0.65);
  line-height: 1.7; margin-bottom: 12px;
}
.review-promise-text strong { color: var(--green); }
.review-promise-link {
  font-size: 0.85rem; font-weight: 700; color: rgba(173,120,5,0.7);
}
.review-promise-link:hover { color: var(--green); }

/* =========================================================
   FAQ
========================================================= */
.faq-section {
  background: #0D0D0F; padding: 100px 0 96px;
  border-top: 1px solid rgba(173,120,5,0.12);
}
.faq-header { text-align: center; max-width: 680px; margin: 0 auto 64px; }
.faq-headline {
  font-size: clamp(1.9rem, 3.5vw, 2.75rem); font-weight: 800;
  color: #fff; line-height: 1.15; letter-spacing: -0.025em; margin: 12px 0;
}
.faq-list {
  max-width: 820px; margin: 0 auto;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px; overflow: hidden;
}
.faq-item { border-bottom: 1px solid rgba(255,255,255,0.07); transition: background 0.2s; }
.faq-item:last-child { border-bottom: none; }
.faq-item--open { background: rgba(173,120,5,0.05); }
.faq-trigger {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 20px; padding: 26px 32px; background: none; border: none; cursor: pointer; text-align: left;
}
.faq-trigger:focus-visible { outline: 2px solid #ad7805; outline-offset: -2px; }
.faq-q { font-size: 1.05rem; font-weight: 700; color: #fff; line-height: 1.4; font-family: var(--font-head); letter-spacing: -0.01em; }
.faq-item--open .faq-q, .faq-trigger:hover .faq-q { color: #c9920a; }
.faq-icon {
  flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
  border: 1.5px solid rgba(173,120,5,0.4);
  display: flex; align-items: center; justify-content: center;
  color: #ad7805;
}
.faq-item--open .faq-icon { background: rgba(173,120,5,0.15); border-color: rgba(173,120,5,0.6); }
.faq-icon .si { font-size: 0.65rem; width: 0.65em; height: 0.65em; }
.faq-icon-minus { display: none; }
.faq-item--open .faq-icon-plus { display: none; }
.faq-item--open .faq-icon-minus { display: inline-block; }
.faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.32s cubic-bezier(0.4,0,0.2,1); }
.faq-item--open .faq-answer { grid-template-rows: 1fr; }
.faq-answer-inner { overflow: hidden; padding: 0 32px; }
.faq-item--open .faq-answer-inner { padding: 0 32px 28px; }
.faq-answer-inner p { font-size: 0.97rem; color: rgba(255,255,255,0.62); line-height: 1.78; margin: 0; }
@media (max-width: 768px) {
  .faq-section { padding: 72px 0 68px; }
  .faq-trigger { padding: 22px 20px; }
  .faq-answer-inner { padding: 0 20px; }
  .faq-item--open .faq-answer-inner { padding: 0 20px 22px; }
  .faq-q { font-size: 0.97rem; }
}

/* =========================================================
   SCROLL POPUP
========================================================= */
#mgc-scroll-popup-overlay {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,0.72); z-index: 99990;
  backdrop-filter: blur(4px);
  align-items: center; justify-content: center;
}
#mgc-scroll-popup-overlay.mgc-sp-show { display: flex; }
#mgc-scroll-popup {
  background: #1a1a1a; border: 1px solid rgba(173,120,5,0.35);
  border-radius: 16px; max-width: 560px; width: calc(100% - 40px);
  padding: 40px 36px 32px; position: relative;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  animation: mgcSpSlide 0.32s ease;
}
@keyframes mgcSpSlide {
  from { opacity:0; transform:translateY(-20px) scale(0.97); }
  to   { opacity:1; transform:translateY(0) scale(1); }
}
#mgc-scroll-popup::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #ad7805 0%, #d4a017 50%, #ad7805 100%);
  border-radius: 16px 16px 0 0;
}
.mgc-sp-close {
  position: absolute; top: 14px; right: 16px;
  background: none; border: none; cursor: pointer;
  color: rgba(255,255,255,0.4); font-size: 1.4rem; line-height: 1; padding: 4px 8px;
  transition: color 0.2s;
}
.mgc-sp-close:hover { color: #fff; }
.mgc-sp-eyebrow {
  font-size: 0.7rem; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.14em; color: #ad7805; margin-bottom: 14px;
}
.mgc-sp-headline {
  font-size: 1.55rem; font-weight: 900; color: #fff;
  line-height: 1.2; margin-bottom: 10px;
}
.mgc-sp-subhead {
  font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.85); margin-bottom: 6px;
}
.mgc-sp-body {
  font-size: 0.88rem; color: rgba(255,255,255,0.55);
  line-height: 1.68; margin-bottom: 10px;
}
.mgc-sp-guarantee {
  font-size: 0.82rem; font-weight: 700; color: var(--green);
  background: rgba(173,120,5,0.08); border: 1px solid rgba(173,120,5,0.2);
  border-radius: 6px; padding: 8px 12px; margin-bottom: 24px;
}
.mgc-sp-cta {
  display: block; width: 100%; background: #ad7805; color: #000;
  text-align: center; padding: 16px 24px; border-radius: 8px;
  font-weight: 900; font-size: 1rem; text-decoration: none;
  letter-spacing: 0.01em; transition: background 0.2s, transform 0.15s;
  margin-bottom: 12px;
}
.mgc-sp-cta:hover { background: #c48c06; transform: translateY(-1px); }
.mgc-sp-secondary {
  display: block; text-align: center; background: none; border: none;
  color: rgba(255,255,255,0.4); font-size: 0.85rem; cursor: pointer;
  font-family: inherit; padding: 4px; width: 100%;
  transition: color 0.2s;
}
.mgc-sp-secondary:hover { color: rgba(255,255,255,0.7); }
@media (max-width: 540px) {
  #mgc-scroll-popup { padding: 32px 20px 26px; }
  .mgc-sp-headline { font-size: 1.3rem; }
}

/* Scrolled header */
.site-header.scrolled { background: rgba(13,13,13,0.99); border-bottom-color: rgba(173,120,5,0.22); }
</style>

<!-- =======================================================
     35% SCROLL DEPTH POPUP (Revenue Engine X-Ray)
======================================================= -->
<div id="mgc-scroll-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="mgc-sp-headline-id">
  <div id="mgc-scroll-popup">
    <button class="mgc-sp-close" id="mgc-sp-close-btn" aria-label="Close">&times;</button>
    <div class="mgc-sp-eyebrow">Revenue Engine X-Ray</div>
    <h2 class="mgc-sp-headline" id="mgc-sp-headline-id">This Assessment Is a Great Start.<br>But It Only Reveals Part Of The Story.</h2>
    <p class="mgc-sp-subhead">Your assessment identifies symptoms.</p>
    <p class="mgc-sp-body">The Revenue Engine X-Ray identifies causes. We analyze your pipeline, conversion, hiring, accountability, team structure, revenue leaks, and missed opportunities&mdash;specific to your business, not generic categories.</p>
    <p class="mgc-sp-guarantee">&#10003; 100% Risk-Free: If the X-Ray isn&rsquo;t valuable within 3 business days, we refund 100% of the investment.</p>
    <a href="/growth-engine-xray"
       class="mgc-sp-cta"
       id="mgc-sp-cta-btn">
      Get My Revenue Engine X-Ray &rarr;
    </a>
    <button class="mgc-sp-secondary" id="mgc-sp-dismiss-btn">Continue Reading</button>
  </div>
</div>

<script>
(function(){

  // -- UTM ATTRIBUTION
  (function() {
    try {
      var params = new URLSearchParams(window.location.search);
      var existing = {};
      try { existing = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e2) {}
      var merged = Object.assign({}, existing);
      var src = params.get('utm_source'); var med = params.get('utm_medium');
      var cam = params.get('utm_campaign'); var trm = params.get('utm_term'); var cnt = params.get('utm_content');
      if (src) merged.utm_source   = src;
      if (med) merged.utm_medium   = med;
      if (cam) merged.utm_campaign = cam;
      if (trm) merged.utm_term     = trm;
      if (cnt) merged.utm_content  = cnt;
      if (!merged.referrer)     merged.referrer     = document.referrer || '';
      if (!merged.landing_page) merged.landing_page = window.location.href;
      sessionStorage.setItem('mgc_utm', JSON.stringify(merged));
    } catch(e) {}
  })();

  // -- GA4 DISPATCHER
  window.mgcHomeTrack = function(eventName, label, location) {
    var params = {
      page_location: window.location.href,
      page_title:    document.title,
      cta_label:     label || '',
      page_section:  location || ''
    };
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, params);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: eventName }, params));
    }
  };

  // -- 35% SCROLL POPUP (Revenue Engine X-Ray)
  var POPUP_COOKIE   = 'mgc_sp_seen';
  var COOLDOWN_DAYS  = 30;
  var SCROLL_TRIGGER = 0.35;
  var popupFired = false;

  function spGetCookie(name) {
    var m = document.cookie.match('(^|;)\s*' + name + '\s*=\s*([^;]+)');
    return m ? m.pop() : '';
  }
  function spSetCookie(name, value, days) {
    var exp = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + value + '; expires=' + exp + '; path=/; SameSite=Lax';
  }
  function hasSeenPopup() { return !!spGetCookie(POPUP_COOKIE); }

  var overlay    = document.getElementById('mgc-scroll-popup-overlay');
  var closeBtn   = document.getElementById('mgc-sp-close-btn');
  var dismissBtn = document.getElementById('mgc-sp-dismiss-btn');
  var ctaBtn     = document.getElementById('mgc-sp-cta-btn');

  function showScrollPopup() {
    if (popupFired || !overlay) return;
    if (hasSeenPopup()) return;
    popupFired = true;
    spSetCookie(POPUP_COOKIE, '1', COOLDOWN_DAYS);
    overlay.classList.add('mgc-sp-show');
    document.body.style.overflow = 'hidden';
    mgcHomeTrack('xray_popup_view', 'Revenue Engine X-Ray Popup', 'scroll_popup');
  }
  function closeScrollPopup() {
    if (!overlay) return;
    overlay.classList.remove('mgc-sp-show');
    document.body.style.overflow = '';
  }

  window.addEventListener('scroll', function() {
    if (popupFired) return;
    var scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (scrolled >= SCROLL_TRIGGER) showScrollPopup();
  }, { passive: true });

  if (closeBtn)   closeBtn.addEventListener('click', closeScrollPopup);
  if (dismissBtn) dismissBtn.addEventListener('click', function() {
    mgcHomeTrack('xray_popup_dismiss', 'Continue Reading', 'scroll_popup');
    closeScrollPopup();
  });
  if (overlay)    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeScrollPopup(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeScrollPopup(); });
  if (ctaBtn) ctaBtn.addEventListener('click', function() {
    mgcHomeTrack('xray_popup_click', 'Get My Revenue Engine X-Ray', 'scroll_popup');
    mgcHomeTrack('xray_request',     'Get My Revenue Engine X-Ray', 'scroll_popup');
  });

  // -- FAQ ACCORDION
  var faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.addEventListener('click', function(e) {
      var btn = e.target.closest('.faq-trigger');
      if (!btn) return;
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('faq-item--open');
      faqList.querySelectorAll('.faq-item--open').forEach(function(el) {
        el.classList.remove('faq-item--open');
        el.querySelector('.faq-trigger').setAttribute('aria-expanded','false');
      });
      if (!isOpen) {
        item.classList.add('faq-item--open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  }

  // -- FADE-IN ON SCROLL
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-in').forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      io.observe(el);
    });
  }

})();
</script>

`, `
<link rel="preload" as="image" href="/static/hero-texture.webp" fetchpriority="high">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MetaGrowth Ventures",
  "url": "https://metagrowth.ventures",
  "logo": "https://metagrowth.ventures/static/logo.png",
  "description": "Revenue infrastructure and sales execution firm. We build systems, install accountability, and deploy sales talent for B2B companies ready to scale predictably.",
  "email": "sales@metagrowth.ventures",
  "areaServed": "US",
  "priceRange": "$$$$",
  "sameAs": [
    "https://metagrowthrevenueos.com",
    "https://www.linkedin.com/company/metagrowth-ventures"
  ]
}
</script>`, 'MetaGrowth Ventures diagnoses your revenue engine and builds the infrastructure to make growth predictable for B2B founders and CEOs.', '/')
