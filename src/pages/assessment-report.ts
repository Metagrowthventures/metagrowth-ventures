import { nav, footer, globalStyles, globalScript } from '../layout'
import { buildSprite } from '../icons'

export const assessmentReportPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Revenue Assessment Report | MetaGrowth Ventures</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" type="image/png" href="/static/command-center-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"></noscript>
  <!-- Google tag (gtag.js) — loaded immediately so custom events fire reliably -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EY6ZN6M9F"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9EY6ZN6M9F', {
      page_title: 'Your Revenue Assessment Report',
      page_location: 'https://metagrowth.ventures/assessment/report',
      send_page_view: true
    });
  </script>
  <!-- Microsoft Clarity -->
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xbls14o22c");
  </script>
  ${globalStyles()}
</head>
<body>
${buildSprite()}
${nav()}

<!-- --- REPORT SHELL ------------------------------------------------------- -->
<div id="report-shell" style="min-height:100vh;background:#0A0A0C;">

  <!-- No-data fallback — shown when sessionStorage has no report data -->
  <div id="no-data-msg" style="display:none;">
    <style>
      .ndf-wrap {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 80px 24px;
        background: #0A0A0C;
      }
      .ndf-card {
        background: #111113;
        border: 1px solid rgba(173,120,5,0.18);
        border-radius: 20px;
        padding: 56px 48px 52px;
        max-width: 560px;
        width: 100%;
        text-align: center;
        box-shadow: 0 24px 64px rgba(0,0,0,0.45);
        position: relative;
        overflow: hidden;
      }
      .ndf-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 20px;
        background: radial-gradient(ellipse 70% 40% at 50% 0%, rgba(173,120,5,0.08) 0%, transparent 70%);
        pointer-events: none;
      }
      .ndf-icon-ring {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: rgba(173,120,5,0.10);
        border: 1.5px solid rgba(173,120,5,0.28);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 28px;
        color: #ad7805;
        font-size: 1.75rem;
      }
      .ndf-eyebrow {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #ad7805;
        margin-bottom: 14px;
      }
      .ndf-headline {
        font-size: 1.55rem;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.25;
        margin-bottom: 0;
      }
      .ndf-score-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(173,120,5,0.12);
        border: 1px solid rgba(173,120,5,0.3);
        border-radius: 100px;
        padding: 6px 18px;
        margin: 20px auto 0;
        font-size: 0.88rem;
        color: rgba(255,255,255,0.85);
      }
      .ndf-score-pill strong {
        color: #e0a820;
        font-weight: 700;
      }
      .ndf-divider {
        width: 48px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(173,120,5,0.5), transparent);
        margin: 28px auto;
      }
      .ndf-body {
        font-size: 0.975rem;
        color: rgba(255,255,255,0.55);
        line-height: 1.75;
        margin-bottom: 0;
      }
      .ndf-body strong {
        color: rgba(255,255,255,0.75);
        font-weight: 600;
      }
      .ndf-timer-note {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.82rem;
        color: rgba(255,255,255,0.38);
        margin-top: 10px;
      }
      .ndf-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 36px;
      }
      .ndf-btn-primary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: linear-gradient(135deg, #c99220 0%, #ad7805 100%);
        color: #000;
        font-weight: 800;
        font-size: 0.92rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border-radius: 10px;
        padding: 16px 28px;
        text-decoration: none;
        transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
        box-shadow: 0 4px 20px rgba(173,120,5,0.35);
      }
      .ndf-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(173,120,5,0.45);
        opacity: 0.93;
      }
      .ndf-btn-secondary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: transparent;
        color: rgba(255,255,255,0.7);
        font-weight: 600;
        font-size: 0.9rem;
        border: 1px solid rgba(255,255,255,0.14);
        border-radius: 10px;
        padding: 15px 28px;
        text-decoration: none;
        transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
      }
      .ndf-btn-secondary:hover {
        border-color: rgba(173,120,5,0.45);
        color: #e0a820;
        background: rgba(173,120,5,0.06);
      }
      .ndf-btn-secondary svg,
      .ndf-btn-primary svg {
        flex-shrink: 0;
      }
      .ndf-footer-note {
        margin-top: 28px;
        font-size: 0.77rem;
        color: rgba(255,255,255,0.25);
        line-height: 1.6;
      }
      @media (max-width: 600px) {
        .ndf-card { padding: 40px 24px 36px; }
        .ndf-headline { font-size: 1.3rem; }
      }
    </style>

    <div class="ndf-wrap">
      <div class="ndf-card">

        <!-- Icon -->
        <div class="ndf-icon-ring">
          <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si80" xlink:href="#si80"/></svg>
        </div>

        <!-- Meeting booked confirmation (shown when ?meeting_booked=1 redirects here) -->
        <div id="ndf-booked-banner" style="display:none;background:rgba(22,163,74,0.12);border:1px solid rgba(22,163,74,0.35);border-radius:10px;padding:14px 20px;margin-bottom:20px;text-align:left;">
          <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#4ade80;margin-bottom:4px;">&#10003; Meeting Confirmed</div>
          <div style="font-size:0.92rem;color:rgba(255,255,255,0.8);line-height:1.5;">Your Revenue Review has been scheduled. Josh will review your assessment before the call. Check your email for a calendar invitation.</div>
        </div>

        <!-- Eyebrow -->
        <p class="ndf-eyebrow">Revenue X-Ray™ Assessment</p>

        <!-- Headline -->
        <h1 class="ndf-headline" id="ndf-headline">Your Assessment Results<br>Are No Longer Available</h1>

        <!-- Score pill — shown only if ?score= is in URL -->
        <div id="ndf-score-pill" class="ndf-score-pill" style="display:none;">
          <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si4" xlink:href="#si4"/></svg>
          Your previous assessment score was <strong id="ndf-score-val"></strong>.
        </div>

        <div class="ndf-divider"></div>

        <!-- Body -->
        <p class="ndf-body">
          For privacy and performance reasons, assessment results are stored only within your browser session.<br><br>
          If you've returned later, switched devices, opened a bookmarked link, or clicked a shared URL, your previous results may no longer be available.<br><br>
          <strong>The good news is that the Revenue X-Ray takes less than 3 minutes to complete.</strong>
        </p>

        <div class="ndf-timer-note">
          <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si8" xlink:href="#si8"/></svg>
          Takes less than 3 minutes &nbsp;·&nbsp; Free &nbsp;·&nbsp; No obligation
        </div>

        <!-- CTAs -->
        <div class="ndf-actions">
          <a href="/assessment" class="ndf-btn-primary">
            <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si1" xlink:href="#si1"/></svg>
            Take The Assessment Again
          </a>
          <a href="https://meetings.hubspot.com/josh549/meet-with-josh?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Dassessment_report" target="_blank" rel="noopener" class="ndf-btn-secondary" onclick="mgcTrack('calendar_open','Book A Revenue Review','ndf_screen');">
            <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si3" xlink:href="#si3"/></svg>
            Book A Revenue Review
          </a>
        </div>

        <!-- Footer trust note -->
        <p class="ndf-footer-note">
          All Revenue Reviews are conducted personally by Josh.<br>
          30 minutes · No pitch · No obligation.
        </p>

      </div>
    </div>

    <script>
      (function() {
        // Read ?score= from URL and personalise if present
        var params = new URLSearchParams(window.location.search);
        var score = parseInt(params.get('score'), 10);
        if (!isNaN(score) && score >= 0 && score <= 100) {
          document.getElementById('ndf-score-val').textContent = score + '/100';
          document.getElementById('ndf-score-pill').style.display = 'inline-flex';
        }
      })();
    </script>
  </div>

  <!-- --- REPORT CONTENT --------------------------------------------------- -->
  <div id="report-content" style="display:none;">

    <!-- Print-only logo header -->
    <div class="rpt-print-header">
      <img src="/static/metagrowth-logo-black.webp" alt="MetaGrowth Ventures" class="rpt-print-logo">
      <div class="rpt-print-header-right">
        <div class="rpt-print-doc-title">Revenue Assessment Report</div>
        <div class="rpt-print-date" id="rpt-print-date"></div>
      </div>
    </div>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 1 — SCORE SUMMARY                                           -->
    <!-- -------------------------------------------------------------------- -->
    <section class="rpt-hero">
      <div class="rpt-hero-glow"></div>
      <div class="container">
        <div class="rpt-hero-inner">

          <div class="rpt-eyebrow"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si7" xlink:href="#si7"/></svg> MetaGrowth Revenue Assessment™</div>
          <h1 class="rpt-hero-title">Your Revenue Infrastructure<br>Diagnosis Is Ready<span id="rpt-name-suffix">, <span id="rpt-first-name"></span></span></h1>
          <p class="rpt-hero-sub">We've analyzed your responses across 5 revenue dimensions. Below is your complete diagnosis — and the fastest path to fixing what's broken.</p>

          <!-- Score + Stage row -->
          <div class="rpt-score-row">
            <div class="rpt-score-ring-wrap">
              <svg class="rpt-ring-svg" width="160" height="160" viewBox="0 0 160 160">
                <circle class="rpt-ring-bg" cx="80" cy="80" r="68"/>
                <circle class="rpt-ring-fill" id="rpt-ring-fill" cx="80" cy="80" r="68"/>
              </svg>
              <div class="rpt-ring-inner">
                <div class="rpt-score-num" id="rpt-score-num">0</div>
                <div class="rpt-score-label">/ 100</div>
              </div>
            </div>
            <div class="rpt-stage-info">
              <div class="rpt-stage-badge" id="rpt-stage-badge"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si18" xlink:href="#si18"/></svg> —</div>
              <div class="rpt-stage-title" id="rpt-stage-title">—</div>
              <div class="rpt-stage-sub" id="rpt-stage-sub">—</div>
            </div>
          </div>

          <!-- Score breakdown bars (inline under hero) -->
          <div class="rpt-bars-hero" id="rpt-bars"><!-- populated by JS --></div>

        </div>
      </div>

      <!-- "What This Typically Costs Companies" — populated by JS based on stage -->
      <div id="rpt-costs-section" class="rpt-costs-section" style="display:none;">
        <div class="container">
          <div class="rpt-costs-inner">
            <div class="rpt-costs-label">What This Typically Costs Companies</div>
            <ul class="rpt-costs-list" id="rpt-costs-list"></ul>
          </div>
        </div>
      </div>

    </section>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 2 — WHAT THIS SCORE REALLY MEANS                           -->
    <!-- -------------------------------------------------------------------- -->
    <section class="rpt-meaning">
      <div class="rpt-meaning-glow"></div>
      <div class="container">
        <div class="rpt-section-eyebrow"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si20" xlink:href="#si20"/></svg> Revenue Diagnosis</div>
        <h2 class="rpt-meaning-title">What Your Score Is Really Telling You</h2>
        <div class="rpt-meaning-intro">
          <p>Most companies do not have a lead problem.</p>
          <p>They have an <strong>infrastructure problem.</strong></p>
          <p class="rpt-meaning-body-copy">Your assessment suggests that revenue generation is currently dependent on individual effort, tribal knowledge, inconsistent execution, or founder involvement — rather than a repeatable operating system.</p>
        </div>
        <p class="rpt-meaning-consequence">This often creates:</p>
        <div class="rpt-symptoms-grid">
          <div class="rpt-symptom-card">
            <div class="rpt-symptom-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si81" xlink:href="#si81"/></svg></div>
            <div class="rpt-symptom-label">Unpredictable Revenue</div>
            <div class="rpt-symptom-desc">Revenue swings make planning impossible and leadership reactive instead of strategic.</div>
          </div>
          <div class="rpt-symptom-card">
            <div class="rpt-symptom-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si82" xlink:href="#si82"/></svg></div>
            <div class="rpt-symptom-label">Inconsistent Sales Performance</div>
            <div class="rpt-symptom-desc">Top reps carry the load while others underperform — and you lack the systems to close the gap.</div>
          </div>
          <div class="rpt-symptom-card">
            <div class="rpt-symptom-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si83" xlink:href="#si83"/></svg></div>
            <div class="rpt-symptom-label">Leadership Blind Spots</div>
            <div class="rpt-symptom-desc">You can't see what's happening in the pipeline until it's too late to course-correct.</div>
          </div>
          <div class="rpt-symptom-card">
            <div class="rpt-symptom-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si84" xlink:href="#si84"/></svg></div>
            <div class="rpt-symptom-label">Difficult Hiring Decisions</div>
            <div class="rpt-symptom-desc">Without defined roles, metrics, and systems, every new hire is a gamble rather than a calculated investment.</div>
          </div>
          <div class="rpt-symptom-card">
            <div class="rpt-symptom-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si85" xlink:href="#si85"/></svg></div>
            <div class="rpt-symptom-label">Poor Forecasting Accuracy</div>
            <div class="rpt-symptom-desc">Forecasts are guesses. Leadership can't commit to board projections or make confident growth investments.</div>
          </div>
          <div class="rpt-symptom-card">
            <div class="rpt-symptom-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si86" xlink:href="#si86"/></svg></div>
            <div class="rpt-symptom-label">Key-Person Dependency</div>
            <div class="rpt-symptom-desc">Revenue lives or dies based on one or two individuals. The business is not scalable in its current form.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 3 — RECOMMENDED NEXT STEP (primary CTA #1)                 -->
    <!-- -------------------------------------------------------------------- -->
    <section class="rpt-rx-section">
      <div class="container">
        <div class="rpt-rx-card">
          <div class="rpt-rx-glow"></div>
          <div class="rpt-rx-inner">

            <!-- Left column -->
            <div class="rpt-rx-left">
              <div class="rpt-rx-eyebrow"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si87" xlink:href="#si87"/></svg> Your Recommended Next Step</div>
              <h2 class="rpt-rx-title">Your Revenue Engine Doesn't Need More Advice.<br>It Needs Infrastructure.</h2>
              <p class="rpt-rx-body">Based on your assessment, the fastest path forward is a complimentary Revenue Review — a focused 30-minute session where we map exactly what's broken and what to do first.</p>

              <div class="rpt-rx-review-list">
                <div class="rpt-rx-review-label"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si43" xlink:href="#si43"/></svg> We'll Review Together:</div>
                <ul class="rpt-rx-bullets">
                  <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si16" xlink:href="#si16"/></svg> Your full score breakdown by dimension</li>
                  <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si16" xlink:href="#si16"/></svg> Revenue bottlenecks and root causes</li>
                  <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si16" xlink:href="#si16"/></svg> Leadership and accountability gaps</li>
                  <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si16" xlink:href="#si16"/></svg> Hiring and talent requirements</li>
                  <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si16" xlink:href="#si16"/></svg> Pipeline generation constraints</li>
                  <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si16" xlink:href="#si16"/></svg> Recommended implementation path</li>
                </ul>
              </div>

              <div class="rpt-rx-actions">
                <a href="https://meetings.hubspot.com/josh549/meet-with-josh?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Dassessment_report" target="_blank" rel="noopener" class="rpt-rx-cta-primary" onclick="mgcTrack('discuss_report_click','Book Revenue Review','section_1_rx');mgcTrack('calendar_open','Book Revenue Review','section_1_rx');">
                  <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si3" xlink:href="#si3"/></svg>
                  <span>BOOK REVENUE REVIEW</span>
                  <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si1" xlink:href="#si1"/></svg>
                </a>
                <a href="/command-center" class="rpt-rx-cta-secondary" onclick="mgcTrack('discuss_report_click','Explore Command Center','section_1_rx');">
                  <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si10" xlink:href="#si10"/></svg> Explore the Command Center™
                </a>
              </div>

              <div class="rpt-rx-meta-row">
                <span class="rpt-rx-meta-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si8" xlink:href="#si8"/></svg> 30 minutes</span>
                <span class="rpt-rx-meta-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si17" xlink:href="#si17"/></svg> Zoom or phone</span>
                <span class="rpt-rx-meta-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si9" xlink:href="#si9"/></svg> No obligation</span>
                <span class="rpt-rx-avail"><span class="rpt-rx-avail-dot"></span> Revenue Strategy Team Available</span>
              </div>
            </div>

            <!-- Right column — score recap -->
            <div class="rpt-rx-right">
              <div class="rpt-rx-score-card">
                <div class="rpt-rx-score-header">
                  <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si11" xlink:href="#si11"/></svg> Your Score Summary
                </div>
                <div class="rpt-rx-score-display">
                  <div class="rpt-rx-big-score" id="rpt-rx-score">—</div>
                  <div class="rpt-rx-score-sub">Revenue Infrastructure Score</div>
                </div>
                <div class="rpt-rx-mini-bars" id="rpt-rx-mini-bars"><!-- populated by JS --></div>
                <div class="rpt-rx-diag-label">
                  <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si46" xlink:href="#si46"/></svg>
                  <span id="rpt-rx-diag-snippet">Key gaps identified in your revenue infrastructure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 4 — SEE THE SYSTEM (Command Center)                        -->
    <!-- -------------------------------------------------------------------- -->
    <section class="rpt-system-section">
      <div class="container">
        <div class="rpt-section-eyebrow rpt-eyebrow-center"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si10" xlink:href="#si10"/></svg> The MetaGrowth Command Center™</div>
        <h2 class="rpt-system-title">What Clients Gain Access To</h2>
        <p class="rpt-system-sub">MetaGrowth does not hand over recommendations and disappear. We build, install, manage, and optimize the infrastructure required to create predictable revenue growth — and you see every part of it in real time.</p>

        <!-- Command Center mockup -->
        <div class="rpt-cc-mockup">
          <div class="rpt-cc-chrome">
            <div class="rpt-cc-chrome-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="rpt-cc-chrome-url">
              <svg class="si" fill="currentColor" aria-hidden="true" style="font-size:0.65rem;color:rgba(255,255,255,0.3)"><use href="#si9" xlink:href="#si9"/></svg>
              app.metagrowth.ventures / command-center
            </div>
          </div>
          <div class="rpt-cc-screen">
            <div class="rpt-cc-sidebar">
              <div class="rpt-cc-sidebar-logo"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si19" xlink:href="#si19"/></svg> MetaGrowth</div>
              <nav class="rpt-cc-nav">
                <div class="rpt-cc-nav-item rpt-cc-nav-active"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si11" xlink:href="#si11"/></svg> KPI Dashboard</div>
                <div class="rpt-cc-nav-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si32" xlink:href="#si32"/></svg> Pipeline Tracking</div>
                <div class="rpt-cc-nav-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si17" xlink:href="#si17"/></svg> Weekly Updates</div>
                <div class="rpt-cc-nav-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si47" xlink:href="#si47"/></svg> Recorded Calls</div>
                <div class="rpt-cc-nav-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si5" xlink:href="#si5"/></svg> Recruiting</div>
                <div class="rpt-cc-nav-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si14" xlink:href="#si14"/></svg> AI Briefings</div>
                <div class="rpt-cc-nav-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si48" xlink:href="#si48"/></svg> Agreements</div>
                <div class="rpt-cc-nav-item"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si4" xlink:href="#si4"/></svg> Reporting</div>
              </nav>
            </div>
            <div class="rpt-cc-main">
              <div class="rpt-cc-topbar">
                <span class="rpt-cc-page-title">KPI Dashboard</span>
                <span class="rpt-cc-live-badge"><span class="rpt-cc-live-dot"></span> Live Data</span>
              </div>
              <div class="rpt-cc-kpi-row">
                <div class="rpt-cc-kpi">
                  <div class="rpt-cc-kpi-val">$2.4M</div>
                  <div class="rpt-cc-kpi-label">Pipeline Value</div>
                  <div class="rpt-cc-kpi-delta up"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si33" xlink:href="#si33"/></svg> +34%</div>
                </div>
                <div class="rpt-cc-kpi">
                  <div class="rpt-cc-kpi-val">47</div>
                  <div class="rpt-cc-kpi-label">Active Opportunities</div>
                  <div class="rpt-cc-kpi-delta up"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si33" xlink:href="#si33"/></svg> +12</div>
                </div>
                <div class="rpt-cc-kpi">
                  <div class="rpt-cc-kpi-val">68%</div>
                  <div class="rpt-cc-kpi-label">Forecast Accuracy</div>
                  <div class="rpt-cc-kpi-delta up"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si33" xlink:href="#si33"/></svg> +18pt</div>
                </div>
                <div class="rpt-cc-kpi">
                  <div class="rpt-cc-kpi-val">22d</div>
                  <div class="rpt-cc-kpi-label">Avg Sales Cycle</div>
                  <div class="rpt-cc-kpi-delta down"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si45" xlink:href="#si45"/></svg> -8d</div>
                </div>
              </div>
              <div class="rpt-cc-chart-row">
                <div class="rpt-cc-chart-block">
                  <div class="rpt-cc-chart-title">Pipeline by Stage</div>
                  <div class="rpt-cc-bar-chart">
                    <div class="rpt-cc-bar-group">
                      <div class="rpt-cc-bar" style="height:52%"></div>
                      <div class="rpt-cc-bar-label">Prospect</div>
                    </div>
                    <div class="rpt-cc-bar-group">
                      <div class="rpt-cc-bar" style="height:78%"></div>
                      <div class="rpt-cc-bar-label">Qualify</div>
                    </div>
                    <div class="rpt-cc-bar-group">
                      <div class="rpt-cc-bar" style="height:65%"></div>
                      <div class="rpt-cc-bar-label">Propose</div>
                    </div>
                    <div class="rpt-cc-bar-group">
                      <div class="rpt-cc-bar" style="height:40%"></div>
                      <div class="rpt-cc-bar-label">Negotiate</div>
                    </div>
                    <div class="rpt-cc-bar-group">
                      <div class="rpt-cc-bar rpt-cc-bar-gold" style="height:28%"></div>
                      <div class="rpt-cc-bar-label">Close</div>
                    </div>
                  </div>
                </div>
                <div class="rpt-cc-activity-block">
                  <div class="rpt-cc-chart-title">Recent Activity</div>
                  <div class="rpt-cc-activity-list">
                    <div class="rpt-cc-activity-item"><span class="rpt-cc-activity-dot gold"></span><span>New opportunity added — $85K</span></div>
                    <div class="rpt-cc-activity-item"><span class="rpt-cc-activity-dot green"></span><span>Weekly update posted by Josh</span></div>
                    <div class="rpt-cc-activity-item"><span class="rpt-cc-activity-dot blue"></span><span>AI Briefing generated</span></div>
                    <div class="rpt-cc-activity-item"><span class="rpt-cc-activity-dot gold"></span><span>Candidate profile submitted</span></div>
                    <div class="rpt-cc-activity-item"><span class="rpt-cc-activity-dot green"></span><span>Call recording available</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature grid -->
        <div class="rpt-cc-features">
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si11" xlink:href="#si11"/></svg></div>
            <div class="rpt-cc-feature-name">KPI Dashboard</div>
            <div class="rpt-cc-feature-desc">Real-time pipeline, activity, and revenue metrics — always visible, never a surprise.</div>
          </div>
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si32" xlink:href="#si32"/></svg></div>
            <div class="rpt-cc-feature-name">Pipeline Tracking</div>
            <div class="rpt-cc-feature-desc">Every opportunity logged, staged, and reviewed. Nothing falls through the cracks.</div>
          </div>
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si17" xlink:href="#si17"/></svg></div>
            <div class="rpt-cc-feature-name">Weekly Video Updates</div>
            <div class="rpt-cc-feature-desc">Josh records a personal video briefing every week — no status calls required.</div>
          </div>
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si47" xlink:href="#si47"/></svg></div>
            <div class="rpt-cc-feature-name">Recorded Calls</div>
            <div class="rpt-cc-feature-desc">Every sales conversation captured, stored, and accessible for coaching and review.</div>
          </div>
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si5" xlink:href="#si5"/></svg></div>
            <div class="rpt-cc-feature-name">Recruiting Progress</div>
            <div class="rpt-cc-feature-desc">Candidate pipeline tracked live — from sourcing through hire, fully transparent.</div>
          </div>
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si14" xlink:href="#si14"/></svg></div>
            <div class="rpt-cc-feature-name">AI Briefings</div>
            <div class="rpt-cc-feature-desc">Automated intelligence summaries surfacing insights you would otherwise miss.</div>
          </div>
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si48" xlink:href="#si48"/></svg></div>
            <div class="rpt-cc-feature-name">Agreements & Documentation</div>
            <div class="rpt-cc-feature-desc">All contracts, SOPs, and playbooks stored centrally — no digging through email.</div>
          </div>
          <div class="rpt-cc-feature">
            <div class="rpt-cc-feature-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si4" xlink:href="#si4"/></svg></div>
            <div class="rpt-cc-feature-name">Stakeholder Reporting</div>
            <div class="rpt-cc-feature-desc">Board-ready reports generated automatically. Impress investors and leadership teams.</div>
          </div>
        </div>

        <div class="rpt-system-cta">
          <a href="/command-center" class="btn btn-secondary btn-lg">
            <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si10" xlink:href="#si10"/></svg> EXPLORE COMMAND CENTER™
          </a>
        </div>
      </div>
    </section>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 5 — THE METAGROWTH FORMULA                                 -->
    <!-- -------------------------------------------------------------------- -->
    <section class="rpt-formula-section">
      <div class="rpt-formula-glow"></div>
      <div class="container">
        <div class="rpt-section-eyebrow rpt-eyebrow-center"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si13" xlink:href="#si13"/></svg> How We Work</div>
        <h2 class="rpt-formula-title">The MetaGrowth Formula</h2>
        <p class="rpt-formula-sub">Three phases. One system. Predictable, scalable revenue.</p>

        <div class="rpt-formula-steps">

          <div class="rpt-formula-step">
            <div class="rpt-formula-connector rpt-formula-connector--right"></div>
            <div class="rpt-formula-step-inner">
              <div class="rpt-formula-step-num">01</div>
              <div class="rpt-formula-step-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si20" xlink:href="#si20"/></svg></div>
              <div class="rpt-formula-step-name">ASSESS</div>
              <div class="rpt-formula-step-tagline">Diagnose Before Prescribing</div>
              <p class="rpt-formula-step-desc">Identify bottlenecks, constraints, and revenue risks across all five dimensions of your revenue infrastructure — before recommending any solution.</p>
              <ul class="rpt-formula-step-list">
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Revenue infrastructure audit</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Pipeline maturity analysis</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Team and talent gap review</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Leadership accountability map</li>
              </ul>
            </div>
          </div>

          <div class="rpt-formula-step rpt-formula-step--center">
            <div class="rpt-formula-connector rpt-formula-connector--left"></div>
            <div class="rpt-formula-connector rpt-formula-connector--right"></div>
            <div class="rpt-formula-step-inner rpt-formula-step-inner--gold">
              <div class="rpt-formula-step-num">02</div>
              <div class="rpt-formula-step-icon rpt-formula-step-icon--gold"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si88" xlink:href="#si88"/></svg></div>
              <div class="rpt-formula-step-name">INSTALL</div>
              <div class="rpt-formula-step-tagline">Build the Operating System</div>
              <p class="rpt-formula-step-desc">Build systems, reporting frameworks, accountability structures, recruiting pipelines, leadership cadences, and the full revenue infrastructure required for scale.</p>
              <ul class="rpt-formula-step-list">
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Sales process + playbooks</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> CRM build + configuration</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Leadership cadence design</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> KPI frameworks + dashboards</li>
              </ul>
            </div>
          </div>

          <div class="rpt-formula-step">
            <div class="rpt-formula-connector rpt-formula-connector--left"></div>
            <div class="rpt-formula-step-inner">
              <div class="rpt-formula-step-num">03</div>
              <div class="rpt-formula-step-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si19" xlink:href="#si19"/></svg></div>
              <div class="rpt-formula-step-name">SCALE</div>
              <div class="rpt-formula-step-tagline">Deploy, Optimize, Grow</div>
              <p class="rpt-formula-step-desc">Deploy talent, optimize execution, increase predictability across the revenue team, and generate a qualified pipeline that compounds over time.</p>
              <ul class="rpt-formula-step-list">
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Sales team deployment</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Outbound system activation</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Performance optimization</li>
                <li><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si0" xlink:href="#si0"/></svg> Pipeline growth + reporting</li>
              </ul>
            </div>
          </div>

        </div>

        <!-- Mid-page Revenue Review CTA #2 -->
        <div class="rpt-formula-cta-block">
          <p class="rpt-formula-cta-copy">Ready to move from assessment to action?</p>
          <a href="https://meetings.hubspot.com/josh549/meet-with-josh?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Dassessment_report" target="_blank" rel="noopener" class="btn btn-primary btn-lg" onclick="mgcTrack('discuss_report_click','Book Revenue Review','section_5_formula');mgcTrack('calendar_open','Book Revenue Review','section_5_formula');">
            <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si3" xlink:href="#si3"/></svg> BOOK REVENUE REVIEW
          </a>
        </div>

      </div>
    </section>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 6 — PROOF                                                  -->
    <!-- -------------------------------------------------------------------- -->
    <section class="rpt-proof-section">
      <div class="container">
        <div class="rpt-section-eyebrow rpt-eyebrow-center"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si26" xlink:href="#si26"/></svg> Track Record</div>
        <h2 class="rpt-proof-title">Execution Backed By Results</h2>

        <!-- Metrics grid -->
        <div class="rpt-metrics-grid">
          <div class="rpt-metric-card">
            <div class="rpt-metric-num">$110M+</div>
            <div class="rpt-metric-label">Pipeline Created</div>
          </div>
          <div class="rpt-metric-card">
            <div class="rpt-metric-num">14,500+</div>
            <div class="rpt-metric-label">Meetings Booked</div>
          </div>
          <div class="rpt-metric-card">
            <div class="rpt-metric-num">112+</div>
            <div class="rpt-metric-label">Sales Teams Built</div>
          </div>
          <div class="rpt-metric-card">
            <div class="rpt-metric-num">1,320+</div>
            <div class="rpt-metric-label">Clients Added</div>
          </div>
        </div>

        <!-- 10X Promise banner -->
        <div class="rpt-promise-banner">
          <div class="rpt-promise-icon"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si7" xlink:href="#si7"/></svg></div>
          <div class="rpt-promise-content">
            <div class="rpt-promise-name">MetaGrowth 10X Pipeline Promise™</div>
            <div class="rpt-promise-copy">If we don't generate qualified pipeline worth 10x your investment, we keep working at no management fee until we do. Written into every agreement.</div>
          </div>
        </div>

        <!-- Azul Arc case study -->
        <div class="rpt-case-study">
          <div class="rpt-cs-label"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si89" xlink:href="#si89"/></svg> Featured Case Study</div>
          <div class="rpt-cs-card">
            <div class="rpt-cs-left">
              <div class="rpt-cs-company">Azul Arc</div>
              <div class="rpt-cs-industry">Technology / Digital Transformation</div>
              <blockquote class="rpt-cs-quote">
                "MetaGrowth didn't just advise us — they built the entire revenue engine. We went from inconsistent pipeline to a repeatable, measurable system in 90 days. The Command Center alone changed how our leadership team operates."
              </blockquote>
              <div class="rpt-cs-attribution">— CEO, Azul Arc</div>
            </div>
            <div class="rpt-cs-right">
              <div class="rpt-cs-result">
                <div class="rpt-cs-result-num">10X</div>
                <div class="rpt-cs-result-label">Pipeline Growth</div>
              </div>
              <div class="rpt-cs-result">
                <div class="rpt-cs-result-num">90</div>
                <div class="rpt-cs-result-label">Days to First System</div>
              </div>
              <div class="rpt-cs-result">
                <div class="rpt-cs-result-num">3X</div>
                <div class="rpt-cs-result-label">Forecast Accuracy</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 6.5 — REVENUE ENGINE X-RAY                                 -->
    <!-- -------------------------------------------------------------------- -->
    <section class="xray-section">
      <div class="xray-glow-top"></div>
      <div class="xray-glow-bottom"></div>
      <div class="container">
        <div class="xray-inner">

          <!-- Eyebrow + headline -->
          <div class="xray-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            Revenue Engine X-Ray
          </div>
          <h2 class="xray-headline">Want a <em>Deeper</em> Analysis?</h2>
          <p class="xray-subheadline">Your assessment provides a high-level diagnosis. Our Revenue Engine X-Ray™ goes significantly deeper.</p>

          <!-- Assessment vs X-Ray contrast -->
          <div class="xray-contrast">
            <div class="xray-contrast-card xray-contrast-card--dim">
              <div class="xray-contrast-label">&#9632;&nbsp; The Assessment</div>
              <div class="xray-contrast-text">Identifies potential gaps across your revenue engine</div>
            </div>
            <div class="xray-contrast-card xray-contrast-card--bright">
              <div class="xray-contrast-label">&#9650;&nbsp; The X-Ray</div>
              <div class="xray-contrast-text">Goes several levels deeper — directly with our team</div>
            </div>
          </div>

          <!-- Body copy -->
          <p class="xray-body">Working directly with our team, we'll analyze your business, sales process, pipeline, conversion rates, team structure, hiring strategy, accountability systems, technology stack, and growth constraints to identify the specific bottlenecks limiting revenue growth.</p>
          <p class="xray-body" style="margin-top:12px;">This is not a generic assessment. Every Revenue Engine X-Ray is customized to your company and includes strategic recommendations tailored to your business.</p>

          <!-- Main two-column grid -->
          <div class="xray-main-grid">

            <!-- Left: deliverables + insight -->
            <div class="xray-left">
              <div class="xray-deliverables-title">You'll Receive</div>
              <ul class="xray-checklist">
                <li><span class="xray-check">&#10003;</span>Executive Revenue Analysis</li>
                <li><span class="xray-check">&#10003;</span>Revenue Leak Identification</li>
                <li><span class="xray-check">&#10003;</span>Pipeline &amp; Conversion Review</li>
                <li><span class="xray-check">&#10003;</span>Sales Process Evaluation</li>
                <li><span class="xray-check">&#10003;</span>Team Structure Assessment</li>
                <li><span class="xray-check">&#10003;</span>Accountability &amp; Execution Audit</li>
                <li><span class="xray-check">&#10003;</span>Technology &amp; Systems Review</li>
                <li><span class="xray-check">&#10003;</span>Prioritized Growth Opportunities</li>
                <li><span class="xray-check">&#10003;</span>Clear Action Plan</li>
              </ul>
              <div class="xray-insight">
                Most companies believe they need <strong>more leads</strong>. In reality, they often have hidden issues in conversion, execution, accountability, positioning, process, or team performance. <strong>The Revenue Engine X-Ray uncovers those issues before they become expensive growth bottlenecks.</strong>
              </div>
            </div>

            <!-- Right: sticky steps card -->
            <div class="xray-steps-card">
              <div class="xray-steps-header">What Happens Next</div>
              <div class="xray-steps">

                <div class="xray-step">
                  <div class="xray-step-line"></div>
                  <div class="xray-step-num">1</div>
                  <div class="xray-step-body">
                    <div class="xray-step-title">Schedule a strategy call</div>
                    <div class="xray-step-desc">Brief call to confirm fit and gather initial context</div>
                  </div>
                </div>

                <div class="xray-step">
                  <div class="xray-step-line"></div>
                  <div class="xray-step-num">2</div>
                  <div class="xray-step-body">
                    <div class="xray-step-title">We gather your information</div>
                    <div class="xray-step-desc">Business model, process, pipeline, team, systems</div>
                  </div>
                </div>

                <div class="xray-step">
                  <div class="xray-step-line"></div>
                  <div class="xray-step-num">3</div>
                  <div class="xray-step-body">
                    <div class="xray-step-title">Customized X-Ray performed</div>
                    <div class="xray-step-desc">Our team performs a deep, personalized revenue analysis</div>
                  </div>
                </div>

                <div class="xray-step">
                  <div class="xray-step-line"></div>
                  <div class="xray-step-num">4</div>
                  <div class="xray-step-body">
                    <div class="xray-step-title">Receive your findings</div>
                    <div class="xray-step-desc">Detailed review of opportunities, constraints, and recommendations</div>
                  </div>
                </div>

              </div>

              <!-- Investment -->
              <div class="xray-investment">
                <div class="xray-investment-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <div class="xray-investment-label">Complimentary for Qualified Businesses</div>
                  <div class="xray-investment-sub">No obligation. No cost to qualified applicants.</div>
                </div>
              </div>
            </div>
          </div><!-- /xray-main-grid -->

          <!-- CTA strip -->
          <div class="xray-cta-strip">
            <div class="xray-cta-left">
              <div class="xray-cta-kicker">&#9650;&nbsp; Ready for Your X-Ray?</div>
              <div class="xray-cta-title">Get a Personalized Revenue Engine X-Ray</div>
              <div class="xray-cta-sub">Complimentary for qualified businesses. No generic advice — a custom analysis built around your specific situation.</div>
            </div>
            <div class="xray-cta-right">
              <a href="https://growthenginexray.com" class="xray-btn-primary"
                 onclick="mgcTrack('discuss_report_click','Get My Revenue Engine X-Ray','section_6_xray');mgcTrack('xray_cta_click','Get My Revenue Engine X-Ray','section_6_xray');">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                Get My Revenue Engine X-Ray™
              </a>
              <a href="https://meetings.hubspot.com/josh549/meet-with-josh?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Dassessment_report" target="_blank" rel="noopener" class="xray-btn-secondary"
                 onclick="mgcTrack('discuss_report_click','Prefer to Talk First — Book Revenue Review','section_6_xray');mgcTrack('calendar_open','Prefer to Talk First — Book Revenue Review','section_6_xray');">
                <i class="fa-solid fa-calendar-days"></i>
                Prefer to Talk First? Book a Revenue Review
              </a>
            </div>
          </div><!-- /xray-cta-strip -->

          <!-- Trust strip -->
          <div class="xray-trust-strip">
            <span class="xray-trust-item"><i class="fa-solid fa-shield-halved"></i> Confidential &amp; Secure</span>
            <span class="xray-trust-item"><i class="fa-solid fa-user-tie"></i> Senior Advisor-Led</span>
            <span class="xray-trust-item"><i class="fa-solid fa-clock"></i> Typical Turnaround 5–7 Days</span>
            <span class="xray-trust-item"><i class="fa-solid fa-ban"></i> No Sales Pressure</span>
          </div>

        </div><!-- /xray-inner -->
      </div><!-- /container -->
    </section>

    <!-- -------------------------------------------------------------------- -->
    <!-- SECTION 7 — FINAL CTA                                              -->
    <!-- -------------------------------------------------------------------- -->
    <section class="rpt-final-section">
      <div class="rpt-final-glow"></div>
      <div class="container">
        <div class="rpt-final-inner">

          <div class="rpt-final-eyebrow"><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si7" xlink:href="#si7"/></svg> 10X Pipeline Promise™</div>
          <h2 class="rpt-final-title">You Now Know Where The Bottlenecks Are.</h2>
          <h2 class="rpt-final-title-sub">The Question Is What You Do Next.</h2>

          <div class="rpt-final-copy-block">
            <p>Most companies never identify their revenue constraints.</p>
            <p>You just did.</p>
            <p>Let's determine the fastest path to fixing them.</p>
          </div>

          <div class="rpt-final-ctas">
            <a href="https://meetings.hubspot.com/josh549/meet-with-josh?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Dassessment_report" target="_blank" rel="noopener" class="rpt-final-btn-primary" onclick="mgcTrack('discuss_report_click','Book Revenue Review','section_7_final');mgcTrack('calendar_open','Book Revenue Review','section_7_final');">
              <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si3" xlink:href="#si3"/></svg>
              <span>BOOK REVENUE REVIEW</span>
              <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si1" xlink:href="#si1"/></svg>
            </a>
            <a href="/" class="rpt-final-btn-secondary">
              <svg class="si" fill="currentColor" aria-hidden="true"><use href="#si90" xlink:href="#si90"/></svg> Return to Homepage
            </a>
          </div>

          <div class="rpt-final-meta">
            <span><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si8" xlink:href="#si8"/></svg> 30 minutes</span>
            <span><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si9" xlink:href="#si9"/></svg> No obligation</span>
            <span><svg class="si" fill="currentColor" aria-hidden="true"><use href="#si7" xlink:href="#si7"/></svg> 10X Pipeline Promise™</span>
          </div>

        </div>
      </div>
    </section>

    <!-- --- DIAGNOSIS (hidden detail, populated by JS for PDF) ------------ -->
    <div id="rpt-diag-title" style="display:none;"></div>
    <div id="rpt-diag-body" style="display:none;"></div>
    <ul id="rpt-gaps-list" style="display:none;"></ul>
    <div id="rpt-path-title" style="display:none;"></div>
    <div id="rpt-path-body" style="display:none;"></div>
    <div id="rpt-rec-grid" style="display:none;"></div>
    <div id="rpt-bn-list" style="display:none;"></div>

  </div>
  <!-- /report-content -->

</div>




<!-- --- REVENUE ENGINE X-RAY POPUP ------------------------------------------- -->
<div id="mgc-xray-overlay" class="mgc-xray-overlay" role="dialog" aria-modal="true" aria-labelledby="mgc-xray-headline" aria-hidden="true">
  <div class="mgc-xray-popup">
    <!-- Close button -->
    <button class="mgc-xray-close" id="mgc-xray-close" aria-label="Close">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>

    <!-- Left column -->
    <div class="mgc-xray-left">
      <div class="mgc-xray-eyebrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Revenue Engine X-Ray™
      </div>

      <h2 class="mgc-xray-headline" id="mgc-xray-headline">Your Score Is Only Part Of The Story</h2>
      <p class="mgc-xray-subheadline">Most companies never discover the specific bottlenecks actually limiting growth.</p>

      <p class="mgc-xray-intro">Your Revenue Assessment identified symptoms. The Revenue Engine X-Ray™ identifies causes.</p>

      <p class="mgc-xray-body-copy">While the assessment provides a high-level diagnosis, the Revenue Engine X-Ray is a customized executive analysis performed by our team. We review:</p>

      <ul class="mgc-xray-checklist">
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Pipeline Health</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Conversion Rates</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Sales Process</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Recruiting &amp; Hiring Strategy</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Revenue Infrastructure</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Accountability Systems</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Technology Stack</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Lead Generation Process</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Team Structure</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Missed Revenue Opportunities</li>
        <li><span class="mgc-xray-check-icon" aria-hidden="true">✓</span> Revenue Leaks</li>
      </ul>

      <p class="mgc-xray-closing">Then we provide a prioritized action plan tailored specifically to your business. This is not another automated report — it is a customized growth analysis designed to uncover the exact constraints preventing your company from scaling.</p>
    </div>

    <!-- Right column -->
    <div class="mgc-xray-right">

      <!-- Social proof -->
      <div class="mgc-xray-social-proof">
        <div class="mgc-xray-sp-stars" aria-label="Five stars">★★★★★</div>
        <p class="mgc-xray-sp-text">MetaGrowth has helped organizations generate more than <strong>$110M in pipeline</strong>, improve sales execution, hire stronger sales talent, and build scalable revenue systems.</p>
      </div>

      <!-- Guarantee -->
      <div class="mgc-xray-guarantee">
        <div class="mgc-xray-guarantee-badge">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <div class="mgc-xray-guarantee-text">
          <div class="mgc-xray-guarantee-title">100% Risk-Free</div>
          <div class="mgc-xray-guarantee-body">If you do not find the Revenue Engine X-Ray valuable within 3 business days of receiving it, we will refund your investment in full. No questions asked.</div>
        </div>
      </div>

      <!-- Primary CTA -->
      <a href="https://growthenginexray.com" class="mgc-xray-cta-primary" id="mgc-xray-cta-primary">
        Get My Revenue Engine X-Ray™
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>

      <!-- Secondary CTA -->
      <button class="mgc-xray-cta-secondary" id="mgc-xray-cta-secondary">
        Continue Reading My Report
      </button>

      <p class="mgc-xray-fine-print">Personalized executive analysis. Typically delivered within 2–3 business days.</p>
    </div>
  </div>
</div>

<!-- ---------------------------------------------------------------------------- -->
<!-- STYLES                                                                      -->
<!-- ---------------------------------------------------------------------------- -->
<style>
/* --- TOKENS --------------------------------------------------------------- */
:root {
  --rpt-bg: #0A0A0C;
  --rpt-bg-alt: #0D0D0F;
  --rpt-bg-card: #131418;
  --rpt-border: rgba(173,120,5,0.18);
  --rpt-border-strong: rgba(173,120,5,0.35);
  --rpt-gold: #ad7805;
  --rpt-gold-light: #c99220;
  --rpt-gold-glow: rgba(173,120,5,0.12);
}
body { background: var(--rpt-bg); }

/* --- PRINT HEADER -------------------------------------------------------- */
.rpt-print-header { display: none; }

/* --- SHARED EYEBROW ------------------------------------------------------ */
.rpt-section-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.28);
  color: var(--rpt-gold); padding: 6px 18px; border-radius: 100px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.14em; margin-bottom: 20px;
}
.rpt-eyebrow-center { display: flex; justify-content: center; width: fit-content; margin: 0 auto 20px; }

/* --- SECTION 1 HERO ------------------------------------------------------ */
.rpt-hero {
  background: var(--rpt-bg); padding: 120px 0 80px;
  position: relative; overflow: hidden;
}
.rpt-hero-glow {
  position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
  width: 1000px; height: 600px;
  background: radial-gradient(ellipse at center top, rgba(173,120,5,0.13) 0%, transparent 60%);
  pointer-events: none;
}
.rpt-hero-inner { position: relative; z-index: 2; max-width: 860px; }
.rpt-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.28);
  color: var(--rpt-gold); padding: 6px 18px; border-radius: 100px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.14em; margin-bottom: 28px;
}
.rpt-hero-title {
  font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900; color: #fff;
  line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 16px;
}
.rpt-hero-sub {
  font-size: 1.05rem; color: rgba(255,255,255,0.5); line-height: 1.75;
  max-width: 680px; margin-bottom: 48px;
}

/* Score ring */
.rpt-score-row { display: flex; align-items: center; gap: 40px; flex-wrap: wrap; margin-bottom: 56px; }
.rpt-score-ring-wrap { position: relative; flex-shrink: 0; }
.rpt-ring-svg { transform: rotate(-90deg); }
.rpt-ring-bg { fill: none; stroke: rgba(255,255,255,0.06); stroke-width: 11; }
.rpt-ring-fill {
  fill: none; stroke: var(--rpt-gold); stroke-width: 11;
  stroke-linecap: round;
  stroke-dasharray: 427.26;
  stroke-dashoffset: 427.26;
  transition: stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1);
}
.rpt-ring-inner {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
}
.rpt-score-num { font-size: 2.4rem; font-weight: 900; color: #fff; line-height: 1; }
.rpt-score-label { font-size: 0.72rem; color: rgba(255,255,255,0.3); margin-top: 3px; }
.rpt-stage-badge {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.3);
  color: var(--rpt-gold); padding: 5px 14px; border-radius: 100px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.1em; margin-bottom: 14px;
}
.rpt-stage-title { font-size: 1.4rem; font-weight: 800; color: #fff; margin-bottom: 10px; line-height: 1.25; }
.rpt-stage-sub { font-size: 0.92rem; color: rgba(255,255,255,0.48); line-height: 1.65; max-width: 520px; }

/* --- COSTS SECTION -------------------------------------------------------- */
.rpt-costs-section {
  background: linear-gradient(135deg, rgba(173,120,5,0.08) 0%, rgba(0,0,0,0) 100%);
  border-top: 1px solid rgba(173,120,5,0.22);
  border-bottom: 1px solid rgba(173,120,5,0.12);
  padding: 32px 0 28px;
}
.rpt-costs-inner {
  display: flex; align-items: flex-start; gap: 32px;
}
.rpt-costs-label {
  flex-shrink: 0; font-size: 0.7rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.14em;
  color: #c9920e; padding-top: 4px; min-width: 200px;
  border-right: 1px solid rgba(173,120,5,0.2); padding-right: 28px;
}
.rpt-costs-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-wrap: wrap; gap: 10px 28px;
}
.rpt-costs-list li {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.82rem; color: rgba(255,255,255,0.58); line-height: 1.5;
  min-width: 260px; max-width: 340px;
}
.rpt-costs-list li::before {
  content: "→"; color: rgba(173,120,5,0.7); flex-shrink: 0;
  margin-top: 1px; font-weight: 700;
}
@media (max-width: 680px) {
  .rpt-costs-inner { flex-direction: column; gap: 14px; }
  .rpt-costs-label { min-width: auto; border-right: none; padding-right: 0;
    border-bottom: 1px solid rgba(173,120,5,0.2); padding-bottom: 12px; }
  .rpt-costs-list li { min-width: auto; max-width: none; }
}

/* Score bars in hero */
.rpt-bars-hero { display: flex; flex-direction: column; gap: 14px; max-width: 680px; }
.rpt-bar-row { display: grid; grid-template-columns: 200px 1fr 42px; align-items: center; gap: 16px; }
.rpt-bar-label { font-size: 0.855rem; color: rgba(255,255,255,0.6); font-weight: 500; }
.rpt-bar-track { height: 8px; background: rgba(255,255,255,0.07); border-radius: 6px; overflow: hidden; }
.rpt-bar-fill { height: 100%; border-radius: 6px; width: 0%; transition: width 1.1s cubic-bezier(0.4,0,0.2,1); }
.rpt-bar-fill--high { background: linear-gradient(90deg, #22c55e, #16a34a); }
.rpt-bar-fill--mid  { background: linear-gradient(90deg, var(--rpt-gold), var(--rpt-gold-light)); }
.rpt-bar-fill--low  { background: linear-gradient(90deg, #ef4444, #b91c1c); }
.rpt-bar-val { font-size: 0.8rem; font-weight: 700; color: rgba(255,255,255,0.38); text-align: right; }

/* --- SECTION 2 WHAT THIS MEANS ------------------------------------------- */
.rpt-meaning {
  background: var(--rpt-bg-alt); padding: 96px 0;
  position: relative; overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.rpt-meaning-glow {
  position: absolute; bottom: 0; right: -200px;
  width: 700px; height: 500px;
  background: radial-gradient(ellipse at center, rgba(173,120,5,0.06) 0%, transparent 65%);
  pointer-events: none;
}
.rpt-meaning-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff;
  letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 36px; max-width: 800px;
}
.rpt-meaning-intro { margin-bottom: 12px; max-width: 720px; }
.rpt-meaning-intro p {
  font-size: 1.15rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 10px;
}
.rpt-meaning-intro p strong { color: #fff; }
.rpt-meaning-body-copy {
  font-size: 1.05rem !important; color: rgba(255,255,255,0.5) !important; margin-top: 6px !important;
}
.rpt-meaning-consequence {
  font-size: 0.85rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.1em; color: rgba(255,255,255,0.35);
  margin: 40px 0 24px;
}
.rpt-symptoms-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.rpt-symptom-card {
  background: var(--rpt-bg-card);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px; padding: 28px 24px;
  transition: all 0.25s ease;
}
.rpt-symptom-card:hover {
  border-color: var(--rpt-border-strong);
  background: rgba(173,120,5,0.05);
  transform: translateY(-3px);
}
.rpt-symptom-icon {
  width: 48px; height: 48px; border-radius: 12px;
  background: rgba(173,120,5,0.1); border: 1px solid var(--rpt-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--rpt-gold); font-size: 1.1rem; margin-bottom: 16px;
}
.rpt-symptom-label {
  font-size: 0.95rem; font-weight: 800; color: #fff; margin-bottom: 10px; line-height: 1.3;
}
.rpt-symptom-desc {
  font-size: 0.85rem; color: rgba(255,255,255,0.45); line-height: 1.65;
}

/* --- SECTION 3 RECOMMENDED NEXT STEP ------------------------------------ */
.rpt-rx-section {
  background: var(--rpt-bg); padding: 96px 0;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.rpt-rx-card {
  position: relative; overflow: hidden;
  background: var(--rpt-bg-card);
  border: 1.5px solid var(--rpt-border-strong);
  border-radius: 24px;
  box-shadow: 0 0 0 1px rgba(173,120,5,0.08), 0 32px 80px rgba(0,0,0,0.5), 0 0 80px rgba(173,120,5,0.08);
}
.rpt-rx-glow {
  position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
  width: 800px; height: 400px;
  background: radial-gradient(ellipse at center, rgba(173,120,5,0.1) 0%, transparent 60%);
  pointer-events: none; z-index: 0;
}
.rpt-rx-inner {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 380px;
  gap: 0;
}
.rpt-rx-left { padding: 56px 52px 56px 56px; }
.rpt-rx-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  color: var(--rpt-gold); font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 20px;
}
.rpt-rx-title {
  font-size: clamp(1.6rem, 2.8vw, 2.3rem); font-weight: 900; color: #fff;
  line-height: 1.2; letter-spacing: -0.025em; margin-bottom: 20px;
}
.rpt-rx-body {
  font-size: 1rem; color: rgba(255,255,255,0.55); line-height: 1.75; margin-bottom: 32px; max-width: 540px;
}
.rpt-rx-review-list { margin-bottom: 36px; }
.rpt-rx-review-label {
  display: flex; align-items: center; gap: 9px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.12em; color: var(--rpt-gold); margin-bottom: 16px;
}
.rpt-rx-bullets { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.rpt-rx-bullets li {
  display: flex; align-items: center; gap: 12px;
  font-size: 0.95rem; color: rgba(255,255,255,0.78); font-weight: 500;
}
.rpt-rx-bullets li i { color: var(--rpt-gold); font-size: 0.72rem; width: 14px; flex-shrink: 0; }
.rpt-rx-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 28px; }

/* Primary CTA button — large gold */
.rpt-rx-cta-primary {
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--rpt-gold); color: #000;
  padding: 16px 32px; border-radius: 10px;
  font-size: 0.9rem; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.08em; text-decoration: none;
  box-shadow: 0 8px 32px rgba(173,120,5,0.4);
  transition: all 0.2s ease;
}
.rpt-rx-cta-primary:hover {
  background: var(--rpt-gold-light);
  box-shadow: 0 12px 48px rgba(173,120,5,0.55);
  transform: translateY(-2px);
  color: #000;
}
.rpt-rx-arrow { transition: transform 0.2s ease; }
.rpt-rx-cta-primary:hover .rpt-rx-arrow { transform: translateX(4px); }

/* Secondary CTA */
.rpt-rx-cta-secondary {
  display: inline-flex; align-items: center; gap: 9px;
  border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);
  padding: 15px 24px; border-radius: 10px; font-size: 0.88rem;
  font-weight: 600; text-decoration: none; transition: all 0.2s ease;
}
.rpt-rx-cta-secondary:hover {
  border-color: rgba(255,255,255,0.35); color: #fff;
  background: rgba(255,255,255,0.04);
}

/* Meta row */
.rpt-rx-meta-row {
  display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
}
.rpt-rx-meta-item {
  display: flex; align-items: center; gap: 7px;
  font-size: 0.82rem; color: rgba(255,255,255,0.35); font-weight: 500;
}
.rpt-rx-meta-item i { color: var(--rpt-gold); font-size: 0.78rem; }
.rpt-rx-avail {
  display: flex; align-items: center; gap: 7px;
  font-size: 0.78rem; color: #22c55e; font-weight: 600;
}
.rpt-rx-avail-dot {
  width: 7px; height: 7px; border-radius: 50%; background: #22c55e;
  animation: pulse-green 2s ease-in-out infinite;
}
@keyframes pulse-green { 0%,100% { opacity:1; } 50% { opacity:0.4; } }

/* Score card right column */
.rpt-rx-right {
  background: rgba(0,0,0,0.25);
  border-left: 1px solid rgba(173,120,5,0.18);
  padding: 56px 40px;
  display: flex; align-items: flex-start;
}
.rpt-rx-score-card {
  background: var(--rpt-bg-alt); border: 1px solid var(--rpt-border);
  border-radius: 16px; padding: 28px 24px; width: 100%;
}
.rpt-rx-score-header {
  display: flex; align-items: center; gap: 9px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.12em; color: var(--rpt-gold); margin-bottom: 20px;
}
.rpt-rx-score-display { text-align: center; margin-bottom: 24px; }
.rpt-rx-big-score {
  font-size: 4rem; font-weight: 900; color: #fff; line-height: 1;
  margin-bottom: 6px; letter-spacing: -0.04em;
}
.rpt-rx-score-sub { font-size: 0.78rem; color: rgba(255,255,255,0.35); }
.rpt-rx-mini-bars { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
.rpt-rx-mini-bar-row { display: grid; grid-template-columns: 1fr 32px; align-items: center; gap: 10px; }
.rpt-rx-mini-label { font-size: 0.76rem; color: rgba(255,255,255,0.5); margin-bottom: 5px; }
.rpt-rx-mini-track { height: 5px; background: rgba(255,255,255,0.07); border-radius: 4px; overflow: hidden; margin-bottom: 0; }
.rpt-rx-mini-fill { height: 100%; border-radius: 4px; width: 0%; transition: width 1.2s cubic-bezier(0.4,0,0.2,1); }
.rpt-rx-mini-val { font-size: 0.72rem; font-weight: 700; color: rgba(255,255,255,0.35); text-align: right; }
.rpt-rx-diag-label {
  display: flex; align-items: flex-start; gap: 9px; padding: 12px 14px;
  background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.18);
  border-radius: 8px; font-size: 0.8rem; color: rgba(255,255,255,0.55); line-height: 1.5;
}
.rpt-rx-diag-label i { color: #ef4444; flex-shrink: 0; margin-top: 1px; }

/* --- SECTION 4 SYSTEM / COMMAND CENTER ----------------------------------- */
.rpt-system-section {
  background: var(--rpt-bg-alt); padding: 96px 0;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.rpt-system-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff;
  letter-spacing: -0.03em; text-align: center; margin-bottom: 16px;
}
.rpt-system-sub {
  font-size: 1rem; color: rgba(255,255,255,0.48); line-height: 1.75;
  text-align: center; max-width: 680px; margin: 0 auto 64px;
}

/* Command Center Mockup */
.rpt-cc-mockup {
  background: #0D0D0F; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.6); margin-bottom: 64px;
}
.rpt-cc-chrome {
  background: #1A1A1F; padding: 10px 16px;
  display: flex; align-items: center; gap: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.rpt-cc-chrome-dots { display: flex; gap: 6px; }
.rpt-cc-chrome-dots span {
  width: 11px; height: 11px; border-radius: 50%;
  background: rgba(255,255,255,0.12);
}
.rpt-cc-chrome-dots span:nth-child(1) { background: #ef4444; }
.rpt-cc-chrome-dots span:nth-child(2) { background: #f59e0b; }
.rpt-cc-chrome-dots span:nth-child(3) { background: #22c55e; }
.rpt-cc-chrome-url {
  flex: 1; background: rgba(255,255,255,0.05); border-radius: 6px;
  padding: 5px 12px; font-size: 0.72rem; color: rgba(255,255,255,0.3);
  display: flex; align-items: center; gap: 6px;
}
.rpt-cc-screen {
  display: grid; grid-template-columns: 200px 1fr; min-height: 380px;
}
.rpt-cc-sidebar {
  background: #111114; border-right: 1px solid rgba(255,255,255,0.06);
  padding: 20px 0;
}
.rpt-cc-sidebar-logo {
  padding: 0 20px 20px; font-size: 0.85rem; font-weight: 800;
  color: var(--rpt-gold); display: flex; align-items: center; gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 12px;
}
.rpt-cc-nav { display: flex; flex-direction: column; }
.rpt-cc-nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 20px; font-size: 0.78rem; color: rgba(255,255,255,0.4);
  cursor: pointer; transition: all 0.15s;
}
.rpt-cc-nav-item i { width: 14px; font-size: 0.78rem; }
.rpt-cc-nav-item:hover { color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.03); }
.rpt-cc-nav-active { color: var(--rpt-gold) !important; background: rgba(173,120,5,0.08) !important; }
.rpt-cc-main { padding: 20px; }
.rpt-cc-topbar {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px;
}
.rpt-cc-page-title { font-size: 0.9rem; font-weight: 700; color: #fff; }
.rpt-cc-live-badge {
  display: flex; align-items: center; gap: 6px;
  background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2);
  color: #22c55e; padding: 4px 10px; border-radius: 100px;
  font-size: 0.7rem; font-weight: 600;
}
.rpt-cc-live-dot {
  width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
  animation: pulse-green 2s ease-in-out infinite;
}
.rpt-cc-kpi-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 20px; }
.rpt-cc-kpi {
  background: #1A1A1F; border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px; padding: 14px;
}
.rpt-cc-kpi-val { font-size: 1.3rem; font-weight: 900; color: #fff; margin-bottom: 3px; }
.rpt-cc-kpi-label { font-size: 0.68rem; color: rgba(255,255,255,0.4); margin-bottom: 6px; }
.rpt-cc-kpi-delta { font-size: 0.7rem; font-weight: 700; display: flex; align-items: center; gap: 4px; }
.rpt-cc-kpi-delta.up { color: #22c55e; }
.rpt-cc-kpi-delta.down { color: var(--rpt-gold); }
.rpt-cc-chart-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.rpt-cc-chart-block, .rpt-cc-activity-block {
  background: #1A1A1F; border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px; padding: 16px;
}
.rpt-cc-chart-title { font-size: 0.74rem; font-weight: 700; color: rgba(255,255,255,0.5); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.08em; }
.rpt-cc-bar-chart { display: flex; align-items: flex-end; gap: 10px; height: 80px; padding-top: 8px; }
.rpt-cc-bar-group { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; }
.rpt-cc-bar { width: 100%; background: rgba(173,120,5,0.35); border-radius: 4px 4px 0 0; min-height: 6px; }
.rpt-cc-bar-gold { background: var(--rpt-gold) !important; }
.rpt-cc-bar-label { font-size: 0.6rem; color: rgba(255,255,255,0.3); white-space: nowrap; }
.rpt-cc-activity-list { display: flex; flex-direction: column; gap: 10px; }
.rpt-cc-activity-item { display: flex; align-items: center; gap: 10px; font-size: 0.75rem; color: rgba(255,255,255,0.55); }
.rpt-cc-activity-dot {
  width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
}
.rpt-cc-activity-dot.gold { background: var(--rpt-gold); }
.rpt-cc-activity-dot.green { background: #22c55e; }
.rpt-cc-activity-dot.blue { background: #3b82f6; }

/* Feature grid */
.rpt-cc-features {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 48px;
}
.rpt-cc-feature {
  background: var(--rpt-bg-card); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px; padding: 24px 20px;
  transition: all 0.25s ease;
}
.rpt-cc-feature:hover {
  border-color: var(--rpt-border-strong);
  background: rgba(173,120,5,0.04);
  transform: translateY(-3px);
}
.rpt-cc-feature-icon {
  width: 42px; height: 42px; border-radius: 10px;
  background: rgba(173,120,5,0.1); border: 1px solid var(--rpt-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--rpt-gold); font-size: 1rem; margin-bottom: 14px;
}
.rpt-cc-feature-name { font-size: 0.88rem; font-weight: 800; color: #fff; margin-bottom: 8px; }
.rpt-cc-feature-desc { font-size: 0.8rem; color: rgba(255,255,255,0.4); line-height: 1.6; }
.rpt-system-cta { text-align: center; }

/* --- SECTION 5 FORMULA --------------------------------------------------- */
.rpt-formula-section {
  background: var(--rpt-bg); padding: 96px 0;
  position: relative; overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.rpt-formula-glow {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 1000px; height: 400px;
  background: radial-gradient(ellipse at center top, rgba(173,120,5,0.08) 0%, transparent 60%);
  pointer-events: none;
}
.rpt-formula-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff;
  letter-spacing: -0.03em; text-align: center; margin-bottom: 12px;
}
.rpt-formula-sub {
  font-size: 1rem; color: rgba(255,255,255,0.45); text-align: center;
  margin-bottom: 64px;
}
.rpt-formula-steps {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 0; position: relative; margin-bottom: 64px;
}
.rpt-formula-step { position: relative; padding: 2px; }
.rpt-formula-connector {
  position: absolute; top: 60px; z-index: 10;
  width: 40px; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(173,120,5,0.5), transparent);
}
.rpt-formula-connector--right { right: -20px; }
.rpt-formula-connector--left { left: -20px; }
.rpt-formula-step-inner {
  background: var(--rpt-bg-card); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 36px 30px;
  height: 100%; transition: all 0.25s ease;
}
.rpt-formula-step-inner:hover {
  border-color: var(--rpt-border);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.3);
}
.rpt-formula-step-inner--gold {
  background: rgba(173,120,5,0.05);
  border-color: var(--rpt-border-strong) !important;
  box-shadow: 0 0 48px rgba(173,120,5,0.1);
}
.rpt-formula-step-num {
  font-size: 0.68rem; font-weight: 800; color: rgba(173,120,5,0.5);
  letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px;
}
.rpt-formula-step-icon {
  width: 56px; height: 56px; border-radius: 14px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.5); font-size: 1.3rem; margin-bottom: 20px;
}
.rpt-formula-step-icon--gold {
  background: rgba(173,120,5,0.15) !important;
  border-color: var(--rpt-border-strong) !important;
  color: var(--rpt-gold) !important;
}
.rpt-formula-step-name {
  font-size: 1.5rem; font-weight: 900; color: #fff;
  letter-spacing: -0.02em; margin-bottom: 8px;
}
.rpt-formula-step-tagline {
  font-size: 0.82rem; font-weight: 600; color: rgba(173,120,5,0.7);
  margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.08em;
}
.rpt-formula-step-desc {
  font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.7;
  margin-bottom: 24px;
}
.rpt-formula-step-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.rpt-formula-step-list li {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.85rem; color: rgba(255,255,255,0.65);
}
.rpt-formula-step-list li i { color: var(--rpt-gold); font-size: 0.72rem; flex-shrink: 0; }

.rpt-formula-cta-block {
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 20px; text-align: center;
}
.rpt-formula-cta-copy { font-size: 1rem; color: rgba(255,255,255,0.45); }

/* --- SECTION 6 PROOF ----------------------------------------------------- */
.rpt-proof-section {
  background: var(--rpt-bg-alt); padding: 96px 0;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.rpt-proof-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff;
  letter-spacing: -0.03em; text-align: center; margin-bottom: 56px;
}
.rpt-metrics-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-bottom: 40px;
}
.rpt-metric-card {
  background: var(--rpt-bg-card); border: 1px solid var(--rpt-border);
  border-radius: 16px; padding: 32px 24px; text-align: center;
  transition: all 0.25s ease;
}
.rpt-metric-card:hover {
  border-color: var(--rpt-border-strong);
  transform: translateY(-3px);
}
.rpt-metric-num {
  font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 900;
  color: var(--rpt-gold); letter-spacing: -0.04em; margin-bottom: 10px;
}
.rpt-metric-label {
  font-size: 0.82rem; color: rgba(255,255,255,0.5); font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
}

/* 10X Promise banner */
.rpt-promise-banner {
  display: flex; align-items: flex-start; gap: 24px;
  background: rgba(173,120,5,0.06); border: 1px solid var(--rpt-border-strong);
  border-radius: 16px; padding: 28px 32px; margin-bottom: 48px;
}
.rpt-promise-icon {
  width: 52px; height: 52px; border-radius: 12px; flex-shrink: 0;
  background: rgba(173,120,5,0.15); border: 1px solid var(--rpt-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--rpt-gold); font-size: 1.2rem;
}
.rpt-promise-name {
  font-size: 1rem; font-weight: 800; color: #fff; margin-bottom: 8px;
}
.rpt-promise-copy {
  font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.65;
}

/* Case study */
.rpt-case-study {}
.rpt-cs-label {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.12em; color: var(--rpt-gold); margin-bottom: 16px;
}
.rpt-cs-card {
  background: var(--rpt-bg-card); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; overflow: hidden;
  display: grid; grid-template-columns: 1fr 280px;
}
.rpt-cs-left { padding: 40px 44px; }
.rpt-cs-company { font-size: 1.4rem; font-weight: 900; color: #fff; margin-bottom: 4px; }
.rpt-cs-industry { font-size: 0.8rem; color: rgba(255,255,255,0.35); margin-bottom: 24px; }
.rpt-cs-quote {
  font-size: 1rem; color: rgba(255,255,255,0.68); line-height: 1.8;
  font-style: italic; border-left: 3px solid var(--rpt-gold);
  padding-left: 20px; margin: 0 0 20px;
}
.rpt-cs-attribution { font-size: 0.82rem; color: rgba(255,255,255,0.35); }
.rpt-cs-right {
  background: rgba(173,120,5,0.06); border-left: 1px solid var(--rpt-border);
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 32px; padding: 40px 32px;
}
.rpt-cs-result { text-align: center; }
.rpt-cs-result-num {
  font-size: 2.2rem; font-weight: 900; color: var(--rpt-gold);
  letter-spacing: -0.04em; margin-bottom: 6px;
}
.rpt-cs-result-label { font-size: 0.78rem; color: rgba(255,255,255,0.4); font-weight: 600; }

/* --- SECTION 7 FINAL CTA ------------------------------------------------- */
.rpt-final-section {
  background: var(--rpt-bg); padding: 120px 0;
  text-align: center; position: relative; overflow: hidden;
  border-top: 1px solid rgba(173,120,5,0.12);
}
.rpt-final-glow {
  position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
  width: 900px; height: 500px;
  background: radial-gradient(ellipse at center, rgba(173,120,5,0.14) 0%, transparent 60%);
  pointer-events: none;
}
.rpt-final-inner { position: relative; z-index: 2; max-width: 760px; margin: 0 auto; }
.rpt-final-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.28);
  color: var(--rpt-gold); padding: 6px 18px; border-radius: 100px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.14em; margin-bottom: 32px;
}
.rpt-final-title {
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: #fff;
  line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 4px;
}
.rpt-final-title-sub {
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 900;
  color: var(--rpt-gold);
  line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 48px;
}
.rpt-final-copy-block {
  margin-bottom: 48px;
}
.rpt-final-copy-block p {
  font-size: 1.15rem; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 6px;
}
.rpt-final-copy-block p:last-child { color: rgba(255,255,255,0.8); font-weight: 600; }
.rpt-final-ctas { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; }

/* Final primary CTA */
.rpt-final-btn-primary {
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--rpt-gold); color: #000;
  padding: 18px 40px; border-radius: 10px;
  font-size: 0.92rem; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.08em; text-decoration: none;
  box-shadow: 0 8px 40px rgba(173,120,5,0.45);
  transition: all 0.2s ease;
}
.rpt-final-btn-primary:hover {
  background: var(--rpt-gold-light);
  box-shadow: 0 14px 56px rgba(173,120,5,0.6);
  transform: translateY(-2px);
  color: #000;
}
.rpt-final-btn-secondary {
  display: inline-flex; align-items: center; gap: 9px;
  border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.55);
  padding: 17px 28px; border-radius: 10px; font-size: 0.88rem;
  font-weight: 600; text-decoration: none; transition: all 0.2s ease;
}
.rpt-final-btn-secondary:hover {
  border-color: rgba(255,255,255,0.35); color: #fff;
  background: rgba(255,255,255,0.04);
}
.rpt-final-meta {
  display: flex; align-items: center; justify-content: center;
  gap: 24px; flex-wrap: wrap;
}
.rpt-final-meta span {
  display: flex; align-items: center; gap: 7px;
  font-size: 0.8rem; color: rgba(255,255,255,0.28);
}
.rpt-final-meta i { color: rgba(173,120,5,0.5); }

/* --- RESPONSIVE ---------------------------------------------------------- */
@media (max-width: 1100px) {
  .rpt-cc-features { grid-template-columns: repeat(4,1fr); }
}
@media (max-width: 900px) {
  .rpt-symptoms-grid { grid-template-columns: repeat(2,1fr); }
  .rpt-rx-inner { grid-template-columns: 1fr; }
  .rpt-rx-right { border-left: none; border-top: 1px solid rgba(173,120,5,0.18); padding: 40px 40px; }
  .rpt-rx-left { padding: 44px 40px; }
  .rpt-formula-steps { grid-template-columns: 1fr; gap: 24px; }
  .rpt-formula-connector { display: none; }
  .rpt-metrics-grid { grid-template-columns: repeat(2,1fr); }
  .rpt-cc-features { grid-template-columns: repeat(2,1fr); }
  .rpt-cc-screen { grid-template-columns: 160px 1fr; }
  .rpt-cc-kpi-row { grid-template-columns: repeat(2,1fr); }
  .rpt-bar-row { grid-template-columns: 150px 1fr 36px; }
  .rpt-cs-card { grid-template-columns: 1fr; }
  .rpt-cs-right { flex-direction: row; padding: 28px 32px; border-left: none; border-top: 1px solid var(--rpt-border); }
}
@media (max-width: 680px) {
  .rpt-symptoms-grid { grid-template-columns: 1fr; }
  .rpt-metrics-grid { grid-template-columns: repeat(2,1fr); }
  .rpt-cc-features { grid-template-columns: 1fr 1fr; }
  .rpt-cc-screen { grid-template-columns: 1fr; }
  .rpt-cc-sidebar { display: none; }
  .rpt-cc-chart-row { grid-template-columns: 1fr; }
  .rpt-rx-left, .rpt-rx-right { padding: 32px 24px; }
  .rpt-score-row { flex-direction: column; align-items: flex-start; gap: 24px; }
  .rpt-bar-row { grid-template-columns: 120px 1fr 32px; }
  .rpt-cs-right { flex-direction: column; gap: 20px; text-align: center; }
}

/* --- SECTION 6.5 — REVENUE ENGINE X-RAY ---------------------------------- */
.xray-section {
  background: var(--rpt-bg-alt); padding: 96px 0;
  position: relative; overflow: hidden;
  border-top: 1px solid rgba(173,120,5,0.18);
}
.xray-glow-top {
  position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
  width: 900px; height: 420px;
  background: radial-gradient(ellipse at center top, rgba(173,120,5,0.09) 0%, transparent 65%);
  pointer-events: none;
}
.xray-glow-bottom {
  position: absolute; bottom: -60px; right: -100px;
  width: 600px; height: 400px;
  background: radial-gradient(ellipse at center, rgba(173,120,5,0.05) 0%, transparent 65%);
  pointer-events: none;
}
.xray-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; }
.xray-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.3);
  color: var(--rpt-gold); padding: 6px 18px; border-radius: 100px;
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.14em; margin-bottom: 28px;
}
.xray-headline {
  font-size: clamp(1.9rem, 3.8vw, 3rem); font-weight: 900; color: #fff;
  line-height: 1.12; letter-spacing: -0.03em; margin-bottom: 12px; max-width: 820px;
}
.xray-subheadline {
  font-size: 1.15rem; font-weight: 600; color: rgba(255,255,255,0.65);
  line-height: 1.5; margin-bottom: 24px; max-width: 680px;
}
.xray-headline em {
  font-style: normal;
  background: linear-gradient(135deg, var(--rpt-gold-light), var(--rpt-gold));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.xray-contrast {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
  margin: 36px 0 40px; max-width: 640px;
}
.xray-contrast-card {
  border-radius: 14px; padding: 20px 22px;
}
.xray-contrast-card--dim {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
}
.xray-contrast-card--bright {
  background: rgba(173,120,5,0.09); border: 1px solid rgba(173,120,5,0.28);
}
.xray-contrast-label {
  font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;
  margin-bottom: 7px;
}
.xray-contrast-card--dim .xray-contrast-label { color: rgba(255,255,255,0.28); }
.xray-contrast-card--bright .xray-contrast-label { color: var(--rpt-gold); }
.xray-contrast-text {
  font-size: 0.88rem; line-height: 1.55;
}
.xray-contrast-card--dim .xray-contrast-text { color: rgba(255,255,255,0.42); }
.xray-contrast-card--bright .xray-contrast-text { color: rgba(255,255,255,0.82); }
.xray-body {
  font-size: 1.05rem; color: rgba(255,255,255,0.58); line-height: 1.75;
  max-width: 780px; margin-bottom: 52px;
}
.xray-body strong { color: rgba(255,255,255,0.85); }
.xray-main-grid {
  display: grid; grid-template-columns: 1fr 400px; gap: 48px;
  align-items: start; margin-bottom: 60px;
}
.xray-deliverables-title {
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.13em;
  color: rgba(255,255,255,0.35); margin-bottom: 22px;
}
.xray-checklist {
  display: flex; flex-direction: column; gap: 13px;
  list-style: none; padding: 0; margin: 0 0 36px;
}
.xray-checklist li {
  display: flex; align-items: flex-start; gap: 13px;
  font-size: 0.97rem; color: rgba(255,255,255,0.75); line-height: 1.45;
}
.xray-check {
  flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
  background: rgba(173,120,5,0.14); border: 1px solid rgba(173,120,5,0.35);
  display: flex; align-items: center; justify-content: center;
  color: var(--rpt-gold); font-size: 0.68rem; margin-top: 1px;
}
.xray-insight {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  border-left: 3px solid rgba(173,120,5,0.5);
  border-radius: 0 14px 14px 0; padding: 22px 24px;
  font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.7;
  font-style: italic;
}
.xray-insight strong { color: rgba(255,255,255,0.8); font-style: normal; }
/* Steps card — right column */
.xray-steps-card {
  background: var(--rpt-bg-card); border: 1px solid rgba(173,120,5,0.2);
  border-radius: 20px; padding: 36px 32px; position: sticky; top: 24px;
}
.xray-steps-header {
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.13em;
  color: rgba(255,255,255,0.3); margin-bottom: 28px;
}
.xray-steps {
  display: flex; flex-direction: column; gap: 0; margin-bottom: 32px;
}
.xray-step {
  display: flex; gap: 16px; align-items: flex-start; padding-bottom: 24px; position: relative;
}
.xray-step:last-child { padding-bottom: 0; }
.xray-step-line {
  position: absolute; left: 16px; top: 34px;
  width: 1px; height: calc(100% - 10px);
  background: linear-gradient(to bottom, rgba(173,120,5,0.35), rgba(173,120,5,0.05));
}
.xray-step:last-child .xray-step-line { display: none; }
.xray-step-num {
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%;
  background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800; color: var(--rpt-gold); z-index: 1;
}
.xray-step-body { padding-top: 5px; }
.xray-step-title { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
.xray-step-desc { font-size: 0.8rem; color: rgba(255,255,255,0.4); line-height: 1.55; }
.xray-investment {
  border-top: 1px solid rgba(255,255,255,0.06); padding-top: 22px; margin-top: 4px;
  display: flex; align-items: center; gap: 10px;
}
.xray-investment-icon {
  width: 32px; height: 32px; border-radius: 8px;
  background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25);
  display: flex; align-items: center; justify-content: center;
  color: #22c55e; font-size: 0.82rem; flex-shrink: 0;
}
.xray-investment-label { font-size: 0.78rem; font-weight: 700; color: #fff; }
.xray-investment-sub { font-size: 0.72rem; color: rgba(255,255,255,0.35); margin-top: 2px; }
/* CTA strip */
.xray-cta-strip {
  background: linear-gradient(135deg, rgba(173,120,5,0.08) 0%, rgba(173,120,5,0.04) 100%);
  border: 1px solid rgba(173,120,5,0.22);
  border-radius: 20px; padding: 48px 52px;
  display: flex; align-items: center; justify-content: space-between; gap: 32px;
}
.xray-cta-left { flex: 1; }
.xray-cta-kicker {
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em;
  color: var(--rpt-gold); margin-bottom: 10px;
}
.xray-cta-title {
  font-size: clamp(1.35rem, 2.5vw, 1.75rem); font-weight: 900; color: #fff;
  letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 8px;
}
.xray-cta-sub {
  font-size: 0.92rem; color: rgba(255,255,255,0.45); line-height: 1.6;
}
.xray-cta-right {
  display: flex; flex-direction: column; align-items: center; gap: 14px; flex-shrink: 0;
}
.xray-btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  background: var(--rpt-gold); color: #000;
  padding: 18px 36px; border-radius: 11px;
  font-size: 0.9rem; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.07em; text-decoration: none; white-space: nowrap;
  box-shadow: 0 8px 40px rgba(173,120,5,0.45);
  transition: all 0.22s ease;
}
.xray-btn-primary:hover {
  background: var(--rpt-gold-light); color: #000;
  box-shadow: 0 14px 56px rgba(173,120,5,0.62);
  transform: translateY(-2px);
}
.xray-btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.45); font-size: 0.84rem; font-weight: 500;
  text-decoration: none; transition: color 0.2s ease;
  white-space: nowrap;
}
.xray-btn-secondary:hover { color: rgba(255,255,255,0.78); }
.xray-btn-secondary i { font-size: 0.78rem; }
/* Trust strip */
.xray-trust-strip {
  display: flex; align-items: center; justify-content: center; gap: 28px;
  flex-wrap: wrap; margin-top: 28px;
}
.xray-trust-item {
  display: flex; align-items: center; gap: 7px;
  font-size: 0.78rem; color: rgba(255,255,255,0.28);
}
.xray-trust-item i { color: rgba(173,120,5,0.55); }
/* Responsive */
@media (max-width: 1024px) {
  .xray-main-grid { grid-template-columns: 1fr; gap: 36px; }
  .xray-steps-card { position: static; }
}
@media (max-width: 900px) {
  .xray-contrast { grid-template-columns: 1fr; }
  .xray-cta-strip { flex-direction: column; padding: 36px 32px; align-items: flex-start; }
  .xray-cta-right { width: 100%; align-items: stretch; }
  .xray-btn-primary { text-align: center; }
}
@media (max-width: 680px) {
  .xray-section { padding: 72px 0; }
  .xray-cta-strip { padding: 28px 24px; }
  .xray-steps-card { padding: 28px 22px; }
}
</style>

/* --- X-RAY POPUP --------------------------------------------------------- */
.mgc-xray-overlay {
  position: fixed; inset: 0; z-index: 10000;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  opacity: 0; visibility: hidden;
  transition: opacity 0.35s ease, visibility 0.35s ease;
}
.mgc-xray-overlay.open {
  opacity: 1; visibility: visible;
}
.mgc-xray-popup {
  background: #0E0F14;
  border: 1px solid rgba(173,120,5,0.3);
  border-radius: 20px;
  box-shadow: 0 32px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(173,120,5,0.08);
  max-width: 900px; width: 100%;
  max-height: 90vh; overflow-y: auto;
  display: grid; grid-template-columns: 1fr 340px;
  position: relative;
  transform: translateY(24px) scale(0.97);
  transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
  scrollbar-width: thin; scrollbar-color: rgba(173,120,5,0.2) transparent;
}
.mgc-xray-overlay.open .mgc-xray-popup {
  transform: translateY(0) scale(1);
}
.mgc-xray-close {
  position: absolute; top: 18px; right: 18px;
  width: 36px; height: 36px; border-radius: 8px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.4); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; z-index: 2;
}
.mgc-xray-close:hover { background: rgba(255,255,255,0.12); color: #fff; }

/* Left column */
.mgc-xray-left {
  padding: 52px 44px 48px;
  border-right: 1px solid rgba(173,120,5,0.15);
}
.mgc-xray-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.28);
  color: #c9920e; border-radius: 100px;
  padding: 6px 14px; font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 22px;
}
.mgc-xray-headline {
  font-size: 1.75rem; font-weight: 900; color: #fff;
  line-height: 1.2; margin: 0 0 14px; letter-spacing: -0.02em;
}
.mgc-xray-subheadline {
  font-size: 1.02rem; color: rgba(255,255,255,0.55);
  line-height: 1.6; margin: 0 0 20px; font-weight: 400;
}
.mgc-xray-intro {
  font-size: 0.95rem; color: rgba(255,255,255,0.8);
  line-height: 1.65; margin: 0 0 8px; font-weight: 500;
}
.mgc-xray-body-copy {
  font-size: 0.88rem; color: rgba(255,255,255,0.5);
  line-height: 1.65; margin: 0 0 18px;
}
.mgc-xray-checklist {
  list-style: none; padding: 0; margin: 0 0 20px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 9px 16px;
}
.mgc-xray-checklist li {
  display: flex; align-items: center; gap: 9px;
  font-size: 0.84rem; color: rgba(255,255,255,0.72); font-weight: 500;
}
.mgc-xray-check-icon {
  flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%;
  background: rgba(173,120,5,0.15); border: 1px solid rgba(173,120,5,0.35);
  display: flex; align-items: center; justify-content: center;
  color: #c9920e; font-size: 0.65rem; font-weight: 900;
  line-height: 1;
}
.mgc-xray-closing {
  font-size: 0.85rem; color: rgba(255,255,255,0.42);
  line-height: 1.7; margin: 0; font-style: italic;
}

/* Right column */
.mgc-xray-right {
  padding: 52px 36px 48px;
  display: flex; flex-direction: column; gap: 24px;
  background: rgba(0,0,0,0.2);
  border-radius: 0 20px 20px 0;
}
.mgc-xray-social-proof {
  background: rgba(173,120,5,0.06); border: 1px solid rgba(173,120,5,0.15);
  border-radius: 12px; padding: 20px 22px;
}
.mgc-xray-sp-stars {
  color: #c9920e; font-size: 1rem; letter-spacing: 2px; margin-bottom: 10px;
}
.mgc-xray-sp-text {
  font-size: 0.82rem; color: rgba(255,255,255,0.55); line-height: 1.65; margin: 0;
}
.mgc-xray-sp-text strong { color: rgba(255,255,255,0.8); }
.mgc-xray-guarantee {
  display: flex; align-items: flex-start; gap: 14px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px; padding: 18px 20px;
}
.mgc-xray-guarantee-badge {
  flex-shrink: 0; width: 48px; height: 48px; border-radius: 12px;
  background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.28);
  display: flex; align-items: center; justify-content: center;
  color: #c9920e;
}
.mgc-xray-guarantee-title {
  font-size: 0.88rem; font-weight: 800; color: #fff; margin-bottom: 6px;
  letter-spacing: 0.02em;
}
.mgc-xray-guarantee-body {
  font-size: 0.78rem; color: rgba(255,255,255,0.48); line-height: 1.65;
}
.mgc-xray-cta-primary {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  background: linear-gradient(135deg, #c9920e, #ad7805);
  color: #000; font-weight: 800; font-size: 0.95rem;
  letter-spacing: 0.01em; text-decoration: none;
  padding: 18px 24px; border-radius: 12px;
  box-shadow: 0 8px 32px rgba(173,120,5,0.5), 0 0 0 1px rgba(173,120,5,0.4);
  transition: all 0.22s ease; text-align: center;
  font-family: var(--font-body);
}
.mgc-xray-cta-primary:hover {
  background: linear-gradient(135deg, #d9a21e, #c08a06);
  box-shadow: 0 12px 40px rgba(173,120,5,0.65);
  transform: translateY(-2px);
  color: #000;
}
.mgc-xray-cta-secondary {
  width: 100%; background: none; border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.45); font-size: 0.85rem; font-weight: 500;
  padding: 14px 20px; border-radius: 10px; cursor: pointer;
  transition: all 0.2s; font-family: var(--font-body);
  letter-spacing: 0.01em;
}
.mgc-xray-cta-secondary:hover {
  background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.7);
  border-color: rgba(255,255,255,0.22);
}
.mgc-xray-fine-print {
  font-size: 0.72rem; color: rgba(255,255,255,0.25);
  text-align: center; margin: 0; line-height: 1.5;
}

/* Popup responsive */
@media (max-width: 820px) {
  .mgc-xray-popup { grid-template-columns: 1fr; max-height: none; }
  .mgc-xray-left { padding: 44px 32px 32px; border-right: none; border-bottom: 1px solid rgba(173,120,5,0.15); }
  .mgc-xray-right { padding: 32px 32px 44px; border-radius: 0 0 20px 20px; }
  .mgc-xray-checklist { grid-template-columns: 1fr; }
  .mgc-xray-headline { font-size: 1.45rem; }
}
@media (max-width: 540px) {
  .mgc-xray-overlay { padding: 12px; align-items: flex-end; }
  .mgc-xray-popup { border-radius: 20px 20px 14px 14px; }
  .mgc-xray-left { padding: 36px 22px 24px; }
  .mgc-xray-right { padding: 24px 22px 36px; }
  .mgc-xray-headline { font-size: 1.25rem; }
  .mgc-xray-subheadline { font-size: 0.9rem; }
}

<!-- ------------------------------------------------------------------------ -->
<!-- JAVASCRIPT                                                               -->
<!-- ------------------------------------------------------------------------ -->
<script>
// -----------------------------------------------------------------------------
// MGC GA4 CENTRAL DISPATCHER — mgcTrack(event, label, location)
//
// Single function used by every CTA on this page. Handles:
//   • gtag() guard — safe when gtag.js hasn't loaded yet (queued via dataLayer)
//   • discuss_report_click dedup — fires at most once per report session
//     (sessionStorage key 'mgc_ga4_drc') so multi-click and page-scroll
//     revisits never duplicate the conversion event
//   • console logging for every event so DebugView can be verified locally
//
// Parameters:
//   event    — GA4 event name (string)
//   label    — cta_label dimension (string)
//   location — report_section dimension: where on the page the click happened
// -----------------------------------------------------------------------------
var MGC_DRC_KEY = 'mgc_ga4_drc'; // discuss_report_click fired this session?

// -- Module-level cache set by the report-data IIFE so mgcTrack() can always
// pass score/stage/utm params even from inline onclick handlers. ------------
var _mgcScore    = 0;
var _mgcStage    = '';
var _mgcUtmSrc   = '';
var _mgcUtmMed   = '';
var _mgcUtmCamp  = '';
var _mgcLandPage = '';

function mgcTrack(event, label, location) {
  if (typeof gtag === 'undefined') {
    console.warn('[MGC GA4] gtag not ready — event queued via dataLayer:', event, label);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: event, cta_label: label, report_section: location || '',
                            page_location: window.location.href });
    return;
  }

  // -- Dedup guard for discuss_report_click -----------------------------------
  // Fires once per session to mark the top-of-funnel conversion moment.
  // calendar_open and meeting_booked are NOT deduplicated — every booking
  // attempt should be counted independently.
  if (event === 'discuss_report_click') {
    if (sessionStorage.getItem(MGC_DRC_KEY)) {
      console.log('[MGC GA4] discuss_report_click already fired this session — skipping duplicate. label:', label);
      return;
    }
    sessionStorage.setItem(MGC_DRC_KEY, '1');
  }

  console.log('[MGC GA4] Firing', event, '| label:', label, '| section:', location || '—', '| score:', _mgcScore, '| stage:', _mgcStage);
  gtag('event', event, {
    page_location:  window.location.href,
    page_title:     document.title,
    cta_label:      label,
    report_section: location || '',
    score:          _mgcScore,
    stage:          _mgcStage,
    utm_source:     _mgcUtmSrc,
    utm_medium:     _mgcUtmMed,
    utm_campaign:   _mgcUtmCamp,
    landing_page:   _mgcLandPage
  });
}

// -----------------------------------------------------------------------------
// meeting_booked — HubSpot postMessage listener
//
// HubSpot embeds post messages to the parent window when a meeting is booked.
// We listen for two signals:
//   1. window.postMessage from the HubSpot meetings iframe (primary)
//   2. URL query param ?meeting_booked=1 on return navigation (fallback)
//      — used when HubSpot opens as a new tab and redirects back
//
// Dedup key: 'mgc_ga4_mb' — prevents double-firing if the user lands on
//   this page twice after a single booking (e.g. back button after redirect).
//
// HubSpot postMessage event spec (as of 2024):
//   { meetingBookSucceeded: true, ... }  (legacy format)
//   { type: 'hsFormCallback', eventName: 'onFormSubmit', ... }  (form embed variant)
//   Meetings iframe fires: { message: 'outboundLink', link: '...' } on slot click
//   and: { message: 'meetingBooked' } on confirmed booking — this is the one.
// -----------------------------------------------------------------------------
var MGC_MB_KEY = 'mgc_ga4_mb';

function _fireMeetingBooked(source) {
  if (sessionStorage.getItem(MGC_MB_KEY)) {
    console.log('[MGC GA4] meeting_booked already fired this session — skipping duplicate.');
    return;
  }
  sessionStorage.setItem(MGC_MB_KEY, '1');
  console.log('[MGC GA4] Firing meeting_booked | source:', source);
  if (typeof gtag !== 'undefined') {
    gtag('event', 'meeting_booked', {
      page_location:  window.location.href,
      page_title:     document.title,
      booking_source: source,
      transport_type: 'beacon',
      event_callback: function() {
        console.log('[MGC GA4] meeting_booked confirmed sent to GA4.');
      }
    });
  }
}

// Primary: postMessage from HubSpot meetings iframe
window.addEventListener('message', function(e) {
  if (!e.data || typeof e.data !== 'object') return;
  var d = e.data;

  // HubSpot Meetings embed — all confirmed signals:
  // Format A: { meetingBookSucceeded: true }
  if (d.meetingBookSucceeded === true) {
    _fireMeetingBooked('hubspot_postmessage_A');
    return;
  }
  // Format B: { type: 'hsFormCallback', eventName: 'onFormSubmit' }
  if (d.type === 'hsFormCallback' && d.eventName === 'onFormSubmit') {
    _fireMeetingBooked('hubspot_postmessage_B');
    return;
  }
  // Format C (Meetings embed 2023+): { message: 'meetingBooked' }
  if (d.message === 'meetingBooked') {
    _fireMeetingBooked('hubspot_postmessage_C');
    return;
  }
  // Format D (HubSpot JS API): { type: 'hsCallsToActionCompleted', ... }
  if (d.type === 'hsCallsToActionCompleted') {
    _fireMeetingBooked('hubspot_postmessage_D');
    return;
  }
});

// Fallback: URL param ?meeting_booked=1 (for new-tab HubSpot flows that redirect back)
// Also shows the booking confirmation banner if the report session data is gone.
(function() {
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get('meeting_booked') === '1') {
      _fireMeetingBooked('url_param_return');
      // Show confirmation banner on the NDF screen (if report data is unavailable)
      var banner = document.getElementById('ndf-booked-banner');
      var headline = document.getElementById('ndf-headline');
      if (banner) banner.style.display = 'block';
      if (headline) headline.textContent = 'Your Meeting Is Confirmed.';
      // Clean the URL without reloading (removes ?meeting_booked=1 from address bar)
      try {
        var clean = window.location.pathname;
        window.history.replaceState({}, document.title, clean);
      } catch(e2) {}
    }
  } catch(e) {}
})();

(function() {
  // -- Load report data -----------------------------------------------------
  let data;
  try { data = JSON.parse(localStorage.getItem('mgc_report') || sessionStorage.getItem('mgc_report') || ''); } catch(e) {}

  if (!data || typeof data.score === 'undefined') {
    document.getElementById('no-data-msg').style.display = 'block';
    return;
  }

  document.getElementById('report-content').style.display = 'block';

  // -- Show meeting confirmation toast if redirected back from HubSpot ----------
  (function() {
    try {
      var p = new URLSearchParams(window.location.search);
      if (p.get('meeting_booked') === '1') {
        var toast = document.createElement('div');
        toast.id = 'mgc-booked-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.style.cssText = [
          'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);z-index:9999',
          'background:#0f2d1c;border:1px solid #16a34a;border-radius:12px',
          'padding:14px 24px;display:flex;align-items:center;gap:12px',
          'box-shadow:0 8px 32px rgba(0,0,0,0.45);max-width:440px;width:calc(100% - 48px)'
        ].join(';');
        toast.innerHTML = [
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
          '<div>',
          '<div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#4ade80;margin-bottom:2px;">Meeting Confirmed</div>',
          '<div style="font-size:0.88rem;color:rgba(255,255,255,0.85);line-height:1.4;">Your Revenue Review is scheduled. Check your email for the invite.</div>',
          '</div>'
        ].join('');
        document.body.appendChild(toast);
        // Auto-dismiss after 8 seconds
        setTimeout(function() {
          toast.style.transition = 'opacity 0.5s ease';
          toast.style.opacity = '0';
          setTimeout(function() { toast.remove(); }, 500);
        }, 8000);
      }
    } catch(e) {}
  })();

  // -- GA4: assessment_complete -------------------------------------------------
  //
  // WHEN it fires:
  //   • Only when sessionStorage contains valid mgc_report data with a score
  //     (i.e. the user just completed the assessment — not a manual /assessment/report visit)
  //   • Only once per unique score per browser session (score-keyed dedup key)
  //     so two different users on the same browser each get their own event,
  //     and a page refresh / back-button never double-fires
  //
  // HOW it fires:
  //   • Wrapped in DOMContentLoaded so gtag.js async script has maximum time to
  //     load before the call is made
  //   • transport_type:'beacon' tells gtag to use navigator.sendBeacon() — the
  //     hit survives tab close / navigation unlike regular XHR
  //   • event_callback logs confirmation to console for debugging
  //
  var _reportScore  = data.score;
  var _reportScores = data.scores || {};

  // -- Populate module-level GA4 cache so mgcTrack() inline onclick handlers
  // always emit score/stage/utm without needing closure access. --------------
  _mgcScore = _reportScore;
  _mgcStage = _reportScore <= 30 ? 'stage0' : _reportScore <= 50 ? 'stage1' : _reportScore <= 70 ? 'stage2' : 'stage3';
  (function() {
    try {
      var _u = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}');
      _mgcUtmSrc   = _u.utm_source   || '';
      _mgcUtmMed   = _u.utm_medium   || '';
      _mgcUtmCamp  = _u.utm_campaign || '';
      _mgcLandPage = _u.landing_page || '';
    } catch(e) {}
  })();

  // Key includes the score so a second user (same session, different score) fires a fresh event
  var _completedKey = 'mgc_ga4_ac_' + _reportScore;

  function _fireAssessmentComplete() {
    if (sessionStorage.getItem(_completedKey)) {
      console.log('[MGC GA4] assessment_complete already fired this session (score=' + _reportScore + ') — skipping duplicate.');
      return;
    }
    sessionStorage.setItem(_completedKey, '1');
    console.log('[MGC GA4] Firing assessment_complete — score=' + _reportScore);
    var _utmData = {};
    try { _utmData = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e2) {}
    gtag('event', 'assessment_complete', {
      page_location:        window.location.href,
      page_title:           document.title,
      score:                _reportScore,
      stage:                _mgcStage,
      revenue_stage:        _reportScores.rs || 0,
      pipeline_maturity:    _reportScores.pm || 0,
      sales_infrastructure: _reportScores.si || 0,
      talent_team:          _reportScores.tt || 0,
      leadership_execution: _reportScores.le || 0,
      utm_source:           _utmData.utm_source   || '',
      utm_medium:           _utmData.utm_medium   || '',
      utm_campaign:         _utmData.utm_campaign || '',
      landing_page:         _mgcLandPage,
      transport_type:       'beacon',
      event_callback:       function() {
        console.log('[MGC GA4] assessment_complete confirmed sent to GA4.');
      }
    });
  }

  // Wait for DOMContentLoaded so the async gtag.js has the best chance of
  // being ready. If the DOM is already loaded (IIFE runs late), fire immediately.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _fireAssessmentComplete);
  } else {
    _fireAssessmentComplete();
  }

  // -- GA4: full_report_view -------------------------------------------------
  // Fires when the user arrives at the full report after completing the assessment.
  // Deduplicated per session per score.
  (function() {
    var _frvKey = 'mgc_ga4_frv_' + _reportScore;
    if (sessionStorage.getItem(_frvKey)) return;
    sessionStorage.setItem(_frvKey, '1');
    var _utmData = {};
    try { _utmData = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) {}
    var _reportData = {};
    try { _reportData = JSON.parse(localStorage.getItem('mgc_report') || sessionStorage.getItem('mgc_report') || '{}'); } catch(e) {}
    function _fireFullReportView() {
      if (typeof gtag !== 'function') return;
      gtag('event', 'full_report_view', {
        page_location:    window.location.href,
        page_title:       document.title,
        score:            _reportScore,
        stage:            _mgcStage,
        top_bottleneck:   (_reportData.outcome && _reportData.outcome.bottlenecks && _reportData.outcome.bottlenecks[0]) ? _reportData.outcome.bottlenecks[0].title : '',
        wants_review:     _reportData.wantsReview || false,
        utm_source:       _utmData.utm_source   || '',
        utm_medium:       _utmData.utm_medium   || '',
        utm_campaign:     _utmData.utm_campaign || '',
        landing_page:     _mgcLandPage,
        transport_type:   'beacon'
      });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _fireFullReportView);
    } else {
      _fireFullReportView();
    }
  })();

  // Print date
  document.getElementById('rpt-print-date').textContent =
    'Generated ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const { firstName, company, score, scores, outcome } = data;

  // -- Personalize name -----------------------------------------------------
  if (firstName) {
    document.getElementById('rpt-first-name').textContent = firstName;
  } else {
    document.getElementById('rpt-name-suffix').style.display = 'none';
  }

  // -- Score ring (updated circumference for r=68) -----------------------
  const circumference = 2 * Math.PI * 68; // 427.26
  const offset = circumference - (score / 100) * circumference;
  setTimeout(() => {
    const fill = document.getElementById('rpt-ring-fill');
    if (fill) fill.style.strokeDashoffset = offset;
  }, 300);

  // Animate counter
  const numEl = document.getElementById('rpt-score-num');
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / 1200, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    numEl.textContent = Math.round(score * ease);
    if (p < 1) requestAnimationFrame(tick);
  })(start);

  // Stage badge
  document.getElementById('rpt-stage-badge').innerHTML = '<svg class="si" fill="currentColor" aria-hidden="true"><use href="#si18" xlink:href="#si18"/></svg> ' + outcome.badge;
  document.getElementById('rpt-stage-title').textContent = outcome.title;
  document.getElementById('rpt-stage-sub').textContent = outcome.sub;

  // -- "What This Typically Costs Companies" — stage-specific urgency section --
  (function renderCostsSection() {
    var costsSection = document.getElementById('rpt-costs-section');
    var costsList    = document.getElementById('rpt-costs-list');
    if (!costsSection || !costsList) return;

    var stageCosts = {
      'Founder-Led': [
        'Founder becomes the bottleneck preventing scale',
        'Revenue becomes inconsistent and unpredictable',
        'Hiring fails to create leverage or momentum',
        'Growth stalls when leadership attention shifts',
        'Pipeline remains unpredictable quarter to quarter',
        'Scaling requires more effort instead of better systems'
      ],
      'No Infrastructure': [
        'Founder becomes the bottleneck preventing scale',
        'Revenue becomes inconsistent and unpredictable',
        'Hiring fails to create leverage or momentum',
        'Growth stalls when leadership attention shifts',
        'Pipeline remains unpredictable quarter to quarter',
        'Scaling requires more effort instead of better systems'
      ],
      'Emerging': [
        'Opportunities slip through the cracks undetected',
        'Sales execution becomes inconsistent across the team',
        'Reporting remains unreliable for forecasting decisions',
        'Hiring creates complexity instead of enabling growth',
        'Team accountability becomes increasingly difficult'
      ],
      'Scaling': [
        'Revenue leaks become hidden and compound over time',
        'Forecasting becomes inaccurate at critical decision points',
        'Team performance varies significantly across individuals',
        'Growth slows despite increased investment and headcount'
      ],
      'Advanced': [
        'Minor inefficiencies create major cumulative financial impact',
        'Scaling becomes harder than your infrastructure should allow',
        'Market opportunities are missed due to execution gaps',
        'Operational drag quietly reduces overall profitability'
      ]
    };

    // Match badge to stage key
    var badge = (outcome.badge || '').toString();
    var costs = null;
    var keys  = Object.keys(stageCosts);
    for (var i = 0; i < keys.length; i++) {
      if (badge.indexOf(keys[i]) !== -1) { costs = stageCosts[keys[i]]; break; }
    }
    // Fallback: match by score
    if (!costs) {
      if (score <= 29)      costs = stageCosts['Founder-Led'];
      else if (score <= 49) costs = stageCosts['Emerging'];
      else if (score <= 69) costs = stageCosts['Scaling'];
      else                  costs = stageCosts['Advanced'];
    }

    costsList.innerHTML = '';
    costs.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      costsList.appendChild(li);
    });
    costsSection.style.display = '';
  })();

  // Score in RX card
  const rxScoreEl = document.getElementById('rpt-rx-score');
  if (rxScoreEl) rxScoreEl.textContent = score + '/100';

  // Diag snippet in RX card
  const rxDiagEl = document.getElementById('rpt-rx-diag-snippet');
  if (rxDiagEl && outcome.gaps && outcome.gaps[0]) {
    rxDiagEl.textContent = outcome.gaps[0];
  }

  // -- Score bars in hero ---------------------------------------------------
  const barDefs = [
    { label: 'Revenue Stage',          key: 'rs' },
    { label: 'Pipeline Maturity',      key: 'pm' },
    { label: 'Sales Infrastructure',   key: 'si' },
    { label: 'Talent & Team',          key: 'tt' },
    { label: 'Leadership & Execution', key: 'le' },
  ];
  const barsEl = document.getElementById('rpt-bars');
  if (barsEl) {
    barsEl.innerHTML = '';
    barDefs.forEach(({ label, key }) => {
      const val = scores[key] || 0;
      const colorClass = val >= 70 ? 'rpt-bar-fill--high' : val >= 45 ? 'rpt-bar-fill--mid' : 'rpt-bar-fill--low';
      const row = document.createElement('div');
      row.className = 'rpt-bar-row';
      row.innerHTML =
        '<div class="rpt-bar-label">' + label + '</div>' +
        '<div class="rpt-bar-track"><div class="rpt-bar-fill ' + colorClass + '" id="rptbar-' + key + '" style="width:0%"></div></div>' +
        '<div class="rpt-bar-val">' + val + '</div>';
      barsEl.appendChild(row);
      setTimeout(() => {
        const el = document.getElementById('rptbar-' + key);
        if (el) el.style.width = val + '%';
      }, 500);
    });
  }

  // -- Mini bars in RX score card -------------------------------------------
  const miniEl = document.getElementById('rpt-rx-mini-bars');
  if (miniEl) {
    miniEl.innerHTML = '';
    barDefs.forEach(({ label, key }) => {
      const val = scores[key] || 0;
      const colorClass = val >= 70 ? 'rpt-bar-fill--high' : val >= 45 ? 'rpt-bar-fill--mid' : 'rpt-bar-fill--low';
      const row = document.createElement('div');
      row.innerHTML =
        '<div class="rpt-rx-mini-label">' + label + '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 32px;gap:8px;align-items:center;">' +
          '<div class="rpt-rx-mini-track"><div class="rpt-bar-fill ' + colorClass + '" id="rptmini-' + key + '" style="width:0%"></div></div>' +
          '<div class="rpt-rx-mini-val">' + val + '</div>' +
        '</div>';
      miniEl.appendChild(row);
      setTimeout(() => {
        const el = document.getElementById('rptmini-' + key);
        if (el) el.style.width = val + '%';
      }, 600);
    });
  }

  // -- Populate hidden legacy elements (keep JS integrity) ------------------
  const diagTitle = document.getElementById('rpt-diag-title');
  const diagBody  = document.getElementById('rpt-diag-body');
  const gapsList  = document.getElementById('rpt-gaps-list');
  const pathTitle = document.getElementById('rpt-path-title');
  const pathBody  = document.getElementById('rpt-path-body');

  if (diagTitle) diagTitle.textContent = outcome.diagTitle || '';
  if (diagBody)  diagBody.textContent  = outcome.diagBody  || '';
  if (pathTitle) pathTitle.textContent = outcome.pathTitle || '';
  if (pathBody)  pathBody.textContent  = outcome.pathBody  || '';
  if (gapsList) {
    gapsList.innerHTML = '';
    (outcome.gaps || []).forEach(gap => {
      const li = document.createElement('li');
      li.textContent = gap;
      gapsList.appendChild(li);
    });
  }


})();

// --- PDF Download ------------------------------------------------------------
function downloadPDF() {
  document.querySelectorAll('.rpt-bn-body').forEach(el => el.classList.add('open'));
  document.querySelectorAll('.rpt-bn-toggle').forEach(el => el.classList.add('open'));
  window.print();
}

// --- Bottleneck accordion toggle ---------------------------------------------
function bnToggle(header) {
  const body = header.nextElementSibling;
  const toggle = header.querySelector('.rpt-bn-toggle');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  toggle.classList.toggle('open', !isOpen);
}

// -----------------------------------------------------------------------------
// REVENUE ENGINE X-RAY POPUP
//
// Triggers:
//   1. User scrolls 35% down the page
//   2. User spends 30 seconds on the page
//   (whichever fires first)
//
// Cooldown: 30-day cookie 'mgc_xp_seen'
// Suppress: sessionStorage 'mgc_xray_submitted' (already requested X-Ray)
// GA4 events: xray_popup_view, xray_popup_click, xray_popup_close
// -----------------------------------------------------------------------------
(function() {
  var XRAY_COOKIE     = 'mgc_xp_seen';
  var XRAY_SUBMIT_KEY = 'mgc_xray_submitted';
  var XRAY_VIEW_KEY   = 'mgc_ga4_xpv';   // dedup: popup view event
  var POPUP_DAYS      = 30;

  var overlay  = document.getElementById('mgc-xray-overlay');
  var closeBtn = document.getElementById('mgc-xray-close');
  var ctaPrim  = document.getElementById('mgc-xray-cta-primary');
  var ctaSec   = document.getElementById('mgc-xray-cta-secondary');

  if (!overlay) return; // safety

  // -- Cookie helpers ---------------------------------------------------------
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  }
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  // -- Should we suppress the popup? -----------------------------------------
  function shouldSuppress() {
    if (getCookie(XRAY_COOKIE)) return true;            // shown in last 30 days
    if (sessionStorage.getItem(XRAY_SUBMIT_KEY)) return true; // already submitted
    return false;
  }

  // -- Show popup -------------------------------------------------------------
  var popupShown = false;
  function showXrayPopup() {
    if (popupShown) return;
    if (shouldSuppress()) return;
    popupShown = true;
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setCookie(XRAY_COOKIE, '1', POPUP_DAYS);
    // GA4: xray_popup_view (dedup)
    if (!sessionStorage.getItem(XRAY_VIEW_KEY)) {
      sessionStorage.setItem(XRAY_VIEW_KEY, '1');
      mgcTrack('xray_popup_view', 'X-Ray Popup', 'popup');
    }
  }

  // -- Close popup ------------------------------------------------------------
  function closeXrayPopup(source) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    mgcTrack('xray_popup_close', 'Close Popup — ' + (source || 'unknown'), 'popup');
  }

  // -- Trigger 1: 30-second timer ---------------------------------------------
  var timerFired = false;
  var timerHandle = setTimeout(function() {
    if (!timerFired) {
      timerFired = true;
      showXrayPopup();
    }
  }, 30000);

  // -- Trigger 2: 35% scroll depth --------------------------------------------
  // (also tracks 50% and 75% for GA4 scroll depth events)
  var scrollFired35 = false;
  var scrollFired50 = false;
  var scrollFired75 = false;
  var SCROLL35_KEY  = 'mgc_ga4_s35';
  var SCROLL50_KEY  = 'mgc_ga4_s50';
  var SCROLL75_KEY  = 'mgc_ga4_s75';

  function onScroll() {
    var scrollTop  = window.scrollY || document.documentElement.scrollTop;
    var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    var pct = (scrollTop / docHeight) * 100;

    if (!scrollFired35 && pct >= 35) {
      scrollFired35 = true;
      // Popup trigger
      if (!popupShown) {
        clearTimeout(timerHandle);
        showXrayPopup();
      }
      // GA4 scroll event
      if (!sessionStorage.getItem(SCROLL35_KEY)) {
        sessionStorage.setItem(SCROLL35_KEY, '1');
        mgcTrack('report_scroll_35', 'Scroll 35%', 'report_scroll');
      }
    }
    if (!scrollFired50 && pct >= 50) {
      scrollFired50 = true;
      if (!sessionStorage.getItem(SCROLL50_KEY)) {
        sessionStorage.setItem(SCROLL50_KEY, '1');
        mgcTrack('report_scroll_50', 'Scroll 50%', 'report_scroll');
      }
    }
    if (!scrollFired75 && pct >= 75) {
      scrollFired75 = true;
      if (!sessionStorage.getItem(SCROLL75_KEY)) {
        sessionStorage.setItem(SCROLL75_KEY, '1');
        mgcTrack('report_scroll_75', 'Scroll 75%', 'report_scroll');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // -- Event listeners --------------------------------------------------------
  // Close button
  if (closeBtn) closeBtn.addEventListener('click', function() { closeXrayPopup('close_btn'); });

  // Secondary CTA — "Continue Reading"
  if (ctaSec) ctaSec.addEventListener('click', function() { closeXrayPopup('continue_reading'); });

  // Primary CTA — X-Ray link
  if (ctaPrim) {
    ctaPrim.addEventListener('click', function(e) {
      mgcTrack('xray_popup_click', 'Get My Revenue Engine X-Ray™', 'popup');
      // -- GA4: xray_submit ----------------------------------------------------------
      // Fires when the user clicks the primary CTA on the X-Ray popup.
      // The click navigates to growthenginexray.com (external). We fire before
      // navigation using transport_type:'beacon' so the hit isn't lost.
      // Dedup key 'mgc_ga4_xsub' prevents double-fire if user clicks twice.
      (function() {
        try {
          var _xsubKey = 'mgc_ga4_xsub';
          if (sessionStorage.getItem(_xsubKey)) return;
          sessionStorage.setItem(_xsubKey, '1');
          if (typeof gtag !== 'function') return;
          console.log('[MGC GA4] Firing xray_submit — score=' + _mgcScore);
          gtag('event', 'xray_submit', {
            page_location:  window.location.href,
            page_title:     document.title,
            cta_label:      'Get My Revenue Engine X-Ray™',
            report_section: 'popup',
            score:          _mgcScore,
            stage:          _mgcStage,
            utm_source:     _mgcUtmSrc,
            utm_medium:     _mgcUtmMed,
            utm_campaign:   _mgcUtmCamp,
            landing_page:   _mgcLandPage,
            transport_type: 'beacon'
          });
        } catch(e) { console.error('[MGC GA4] Error firing xray_submit:', e); }
      })();
      sessionStorage.setItem(XRAY_SUBMIT_KEY, '1'); // suppress future popups
    });
  }

  // Overlay backdrop click
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeXrayPopup('backdrop');
  });

  // Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeXrayPopup('escape_key');
    }
  });

})();

</script>

<style media="print">
  .site-header, .mobile-drawer, .mobile-overlay,
  footer,
  #no-data-msg { display: none !important; }

  .rpt-print-header {
    display: flex !important; align-items: center;
    justify-content: space-between; padding: 0 0 20px;
    margin-bottom: 8px; border-bottom: 2px solid #111;
  }
  .rpt-print-logo { height: 52px; width: auto; }
  .rpt-print-header-right { text-align: right; }
  .rpt-print-doc-title { font-size: 11pt; font-weight: 700; color: #111; text-transform: uppercase; letter-spacing: 0.08em; }
  .rpt-print-date { font-size: 9pt; color: #777; margin-top: 3px; }

  body { background: #fff !important; color: #111 !important; }
  #report-shell { background: #fff !important; }
  .rpt-hero { background: #fff !important; padding: 24px 0 20px !important; border-bottom: 2px solid #ad7805; }
  .rpt-hero-glow, .rpt-meaning-glow, .rpt-formula-glow, .rpt-final-glow, .rpt-rx-glow { display: none; }
  .rpt-eyebrow { background: #f5f0e8 !important; border-color: #ad7805 !important; color: #7a5500 !important; }
  .rpt-hero-title { color: #111 !important; font-size: 1.8rem !important; }
  .rpt-hero-sub { color: #555 !important; }
  .rpt-ring-bg { stroke: #e5e5e5 !important; }
  .rpt-ring-fill { stroke: #ad7805 !important; }
  .rpt-score-num { color: #111 !important; }
  .rpt-stage-badge { background: #f5f0e8 !important; border-color: #ad7805 !important; color: #7a5500 !important; }
  .rpt-stage-title { color: #111 !important; }

  @page { margin: 18mm 16mm; size: A4; }
</style>

${footer()}
${globalScript()}
</body>
</html>
`
