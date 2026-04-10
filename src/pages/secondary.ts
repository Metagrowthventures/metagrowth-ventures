import { page } from '../layout'

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const aboutPage = () => page('About', `
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
          <div class="about-stat"><span class="as-num">$1.9M+</span><span class="as-label">Pipeline Generated</span></div>
          <div class="about-stat"><span class="as-num">21K+</span><span class="as-label">Prospecting Outreaches</span></div>
          <div class="about-stat"><span class="as-num">1000%+</span><span class="as-label">Revenue Growth Achieved</span></div>
          <div class="about-stat"><span class="as-num">$2M+</span><span class="as-label">Contracted Revenue</span></div>
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
      <a href="/contact#book" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
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
.diff-compare-card.highlight-card { background: rgba(201,168,76,0.08); border-color: rgba(201,168,76,0.3); }
.dcc-label { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px; }
.dcc-label.not-us { color: rgba(255,255,255,0.4); }
.dcc-label.us { color: var(--green); }
.diff-compare-card ul { display: flex; flex-direction: column; gap: 10px; }
.diff-compare-card ul li { font-size: 0.875rem; color: rgba(255,255,255,0.55); }
.diff-compare-card.highlight-card ul li { color: rgba(255,255,255,0.8); }
.principles-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 52px; }
.principle-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 26px; transition: all var(--transition); }
.principle-card:hover { border-color: var(--green); transform: translateY(-4px); box-shadow: var(--shadow); }
.pr-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(201,168,76,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.3rem; margin-bottom: 18px; }
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
`)

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
export const caseStudiesPage = () => page('Case Studies', `
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
            <div class="big-metric"><span class="bm-num">$1.9M+</span><span class="bm-label">Pipeline Generated</span></div>
            <div class="big-metric"><span class="bm-num">21,000+</span><span class="bm-label">Prospecting Outreaches Executed</span></div>
            <div class="big-metric"><span class="bm-num">380+</span><span class="bm-label">Discovery Meetings Booked</span></div>
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
            <div class="big-metric"><span class="bm-num">1000%+</span><span class="bm-label">Revenue Increase</span></div>
            <div class="big-metric"><span class="bm-num">54</span><span class="bm-label">New Clients Added</span></div>
            <div class="big-metric"><span class="bm-num">$2M+</span><span class="bm-label">Contracted Revenue Generated</span></div>
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
      <a href="/contact#book" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
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
`)

// ─── HOW WE WORK ──────────────────────────────────────────────────────────────
export const howWeWorkPage = () => page('How We Work', `
<section class="page-hero">
  <div class="container page-hero-content">
    <div class="hero-eyebrow">How We Work</div>
    <h1 class="hero-title">We don't hand over theory.<br>We <span class="accent">install the operating system</span>.</h1>
    <p class="hero-sub">MetaGrowth's deployment model is built around real implementation — not recommendations that gather dust in a shared folder.</p>
    <div class="hero-cta-row">
      <a href="/contact#book" class="btn btn-primary btn-lg">Book a Strategy Call</a>
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
      <a href="/contact#book" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Explore Solutions</a>
    </div>
  </div>
</section>

<style>
.hww-phases { display: flex; flex-direction: column; gap: 0; }
.hww-phase { display: grid; grid-template-columns: 80px 1fr; gap: 40px; align-items: start; padding: 56px 0; border-bottom: 1px solid var(--gray-200); }
.hww-phase:last-child { border-bottom: none; }
.hww-num { font-size: 4rem; font-weight: 900; color: rgba(201,168,76,0.12); line-height: 1; text-align: center; padding-top: 8px; }
.hww-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(201,168,76,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.3rem; margin-bottom: 16px; }
.hww-content h3 { font-size: 1.4rem; color: var(--gray-800); margin-bottom: 12px; }
.hww-content > p { color: var(--gray-600); font-size: 1rem; margin-bottom: 20px; line-height: 1.7; }
.hww-details { display: flex; flex-wrap: wrap; gap: 10px; }
.hww-detail-item { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 100px; padding: 6px 16px; font-size: 0.82rem; color: var(--gray-600); font-weight: 500; }
.expect-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.expect-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg); padding: 28px 24px; transition: all var(--transition); }
.expect-card:hover { border-color: var(--green); }
.exp-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(201,168,76,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.2rem; margin-bottom: 16px; }
.expect-card h4 { color: var(--white); margin-bottom: 10px; }
.expect-card p { color: rgba(255,255,255,0.55); font-size: 0.875rem; }
@media (max-width: 900px) { .hww-phase { grid-template-columns: 1fr; gap: 16px; } .hww-num { font-size: 2.5rem; } .expect-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .expect-grid { grid-template-columns: 1fr; } }
</style>
`)

// ─── INDUSTRIES ───────────────────────────────────────────────────────────────
export const industriesPage = () => page('Industries', `
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
      <a href="/contact#book" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/solutions" class="btn btn-secondary btn-lg">Explore Solutions</a>
    </div>
  </div>
</section>

<style>
.industries-list { display: flex; flex-direction: column; gap: 24px; }
.industry-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 40px; transition: all var(--transition); }
.industry-card:hover { border-color: var(--green); box-shadow: var(--shadow-lg); }
.ind-header { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; }
.ind-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(201,168,76,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.4rem; flex-shrink: 0; }
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
`)

// ─── RESOURCES ────────────────────────────────────────────────────────────────
export const resourcesPage = () => page('Resources', `
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
      <div class="lm-card featured">
        <div class="lm-badge">Most Popular</div>
        <div class="lm-icon"><i class="fas fa-compass"></i></div>
        <h3>MetaGrowth Ecosystem Guide</h3>
        <p>A complete overview of the MetaGrowth revenue ecosystem — every solution, how they connect, and which engagement fits which stage.</p>
        <div class="lm-details">
          <span><i class="fas fa-file-pdf"></i> PDF Download</span>
          <span><i class="fas fa-clock"></i> 20 min read</span>
        </div>
        <a href="/contact#book" class="btn btn-primary">Download Guide</a>
      </div>
      <div class="lm-card">
        <div class="lm-icon"><i class="fas fa-sitemap"></i></div>
        <h3>Sales Decision Tree PDF</h3>
        <p>The complete sales decision tree in printable format — map your stage to the right MetaGrowth solution in minutes.</p>
        <div class="lm-details">
          <span><i class="fas fa-file-pdf"></i> PDF Download</span>
          <span><i class="fas fa-clock"></i> 5 min review</span>
        </div>
        <a href="/contact#book" class="btn btn-outline">Download PDF</a>
      </div>
      <div class="lm-card">
        <div class="lm-icon"><i class="fas fa-clipboard-list"></i></div>
        <h3>Revenue Architecture Checklist</h3>
        <p>A step-by-step checklist to audit your current revenue infrastructure — process, CRM, team, pipeline, and accountability.</p>
        <div class="lm-details">
          <span><i class="fas fa-file-alt"></i> Checklist</span>
          <span><i class="fas fa-clock"></i> 15 min audit</span>
        </div>
        <a href="/contact#book" class="btn btn-outline">Get Checklist</a>
      </div>
      <div class="lm-card">
        <div class="lm-icon"><i class="fas fa-exchange-alt"></i></div>
        <h3>Founder-Led to Scalable Sales Guide</h3>
        <p>A practical guide for founders who are ready to exit the day-to-day sales role and install a team that can sell without them.</p>
        <div class="lm-details">
          <span><i class="fas fa-file-pdf"></i> PDF Guide</span>
          <span><i class="fas fa-clock"></i> 25 min read</span>
        </div>
        <a href="/contact#book" class="btn btn-outline">Download Guide</a>
      </div>
      <div class="lm-card">
        <div class="lm-icon"><i class="fas fa-user-graduate"></i></div>
        <h3>Hiring High-Performance Sales Talent</h3>
        <p>The MetaGrowth guide to identifying, vetting, and onboarding SDRs, AEs, and sales leaders who actually produce results.</p>
        <div class="lm-details">
          <span><i class="fas fa-file-pdf"></i> PDF Guide</span>
          <span><i class="fas fa-clock"></i> 20 min read</span>
        </div>
        <a href="/contact#book" class="btn btn-outline">Download Guide</a>
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
      <a href="/contact#book" class="btn btn-primary btn-lg"><i class="fas fa-calendar-check"></i> Book a Strategy Call</a>
      <a href="/#decision-tree" class="btn btn-secondary btn-lg">Take the Decision Tree</a>
    </div>
  </div>
</section>

<style>
.lead-magnets-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; grid-template-rows: auto auto; }
.lm-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 36px 32px; position: relative; transition: all var(--transition); }
.lm-card:hover { border-color: var(--green); box-shadow: var(--shadow-lg); transform: translateY(-4px); }
.lm-card.featured { border-color: var(--green); background: linear-gradient(135deg, rgba(201,168,76,0.04) 0%, var(--white) 100%); grid-column: 1 / -1; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 32px; }
.lm-badge { position: absolute; top: -12px; left: 24px; background: var(--green); color: var(--gray-800); font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 14px; border-radius: 100px; }
.lm-icon { width: 64px; height: 64px; border-radius: 16px; background: rgba(201,168,76,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.6rem; flex-shrink: 0; }
.lm-card.featured .lm-icon { width: 80px; height: 80px; font-size: 2rem; }
.lm-card h3 { font-size: 1.2rem; color: var(--gray-800); margin-bottom: 10px; margin-top: 16px; }
.lm-card.featured h3 { margin-top: 0; }
.lm-card p { font-size: 0.9rem; color: var(--gray-600); margin-bottom: 16px; }
.lm-details { display: flex; gap: 16px; margin-bottom: 20px; }
.lm-details span { font-size: 0.8rem; color: var(--gray-400); display: flex; align-items: center; gap: 6px; }
.resource-cats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.res-cat { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px 28px; transition: all var(--transition); }
.res-cat:hover { border-color: var(--green); box-shadow: var(--shadow); }
.res-cat-icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(201,168,76,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1.2rem; margin-bottom: 16px; }
.res-cat h4 { color: var(--gray-800); margin-bottom: 16px; }
.res-cat ul { display: flex; flex-direction: column; gap: 8px; }
.res-cat ul li { font-size: 0.875rem; color: var(--gray-600); padding-left: 14px; position: relative; }
.res-cat ul li::before { content: '–'; position: absolute; left: 0; color: var(--green); font-weight: 700; }
@media (max-width: 900px) { .lead-magnets-grid { grid-template-columns: 1fr; } .lm-card.featured { grid-template-columns: 1fr; } .resource-cats { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .resource-cats { grid-template-columns: 1fr; } }
</style>
`)

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const contactPage = () => page('Contact', `
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
        </form>
        <div id="form-success" style="display:none;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);border-radius:var(--radius-lg);padding:36px;text-align:center;margin-top:24px;">
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
            <a href="/#decision-tree" class="oe-item">
              <div class="oe-icon"><i class="fas fa-sitemap"></i></div>
              <div><strong>Take the Decision Tree</strong><span>Find your recommended solution in 2 minutes</span></div>
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
          <div class="cp-metric"><span class="cp-num">$1.9M+</span><span class="cp-label">Pipeline Generated</span></div>
          <div class="cp-metric"><span class="cp-num">1000%+</span><span class="cp-label">Revenue Increase Achieved</span></div>
          <div class="cp-metric"><span class="cp-num">$2M+</span><span class="cp-label">Contracted Revenue</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--green); box-shadow: 0 0 0 3px rgba(201,168,76,0.12); }
.form-group textarea { resize: vertical; min-height: 100px; }
.contact-info-box { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 20px; }
.contact-info-box h4 { color: var(--gray-800); margin-bottom: 4px; }
.other-engagements { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
.oe-item { display: flex; align-items: center; gap: 14px; padding: 14px; border: 1px solid var(--gray-200); border-radius: var(--radius); background: var(--white); transition: all var(--transition); }
.oe-item:hover { border-color: var(--green); }
.oe-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(201,168,76,0.10); display: flex; align-items: center; justify-content: center; color: var(--green); font-size: 1rem; flex-shrink: 0; }
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
`)

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

function resourceCat(icon: string, title: string, items: string[]) {
  return `<div class="res-cat">
    <div class="res-cat-icon"><i class="${icon}"></i></div>
    <h4>${title}</h4>
    <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>`
}
