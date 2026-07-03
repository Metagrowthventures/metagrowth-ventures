export function assessmentPreviewPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Revenue Infrastructure Report | MetaGrowth Ventures</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" href="/static/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <!-- GA4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EY6ZN6M9F"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9EY6ZN6M9F', { send_page_view: false, debug_mode: true });
  </script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --gold:        #ad7805;
      --gold-light:  #d4a017;
      --gold-dim:    rgba(173,120,5,0.15);
      --gold-border: rgba(173,120,5,0.3);
      --bg:          #0a0a0a;
      --surface:     #111111;
      --surface2:    #1a1a1a;
      --border:      rgba(255,255,255,0.08);
      --text:        #ffffff;
      --text-muted:  rgba(255,255,255,0.55);
      --text-dim:    rgba(255,255,255,0.35);
      --red:         #ef4444;
      --red-dim:     rgba(239,68,68,0.15);
      --yellow:      #eab308;
      --yellow-dim:  rgba(234,179,8,0.15);
      --green:       #22c55e;
      --green-dim:   rgba(34,197,94,0.15);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* -- TOP BAR ----------------------------------------------- */
    .top-bar {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .top-bar-logo {
      font-size: 1rem;
      font-weight: 700;
      color: var(--gold);
      letter-spacing: 0.02em;
      text-decoration: none;
    }
    .top-bar-label {
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* -- LAYOUT ------------------------------------------------ */
    .page-wrap {
      max-width: 780px;
      margin: 0 auto;
      padding: 0 20px 80px;
    }

    /* -- SECTION SPACING --------------------------------------- */
    .section { margin-bottom: 40px; }

    /* -- HERO / SCORE SECTION ---------------------------------- */
    .score-hero {
      text-align: center;
      padding: 56px 24px 48px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 40px;
    }
    .score-eyebrow {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--gold);
      margin-bottom: 24px;
      font-weight: 600;
    }
    .score-ring-wrap {
      position: relative;
      width: 180px;
      height: 180px;
      margin: 0 auto 28px;
    }
    .score-ring-wrap svg {
      transform: rotate(-90deg);
      width: 180px;
      height: 180px;
    }
    .score-ring-bg {
      fill: none;
      stroke: rgba(255,255,255,0.07);
      stroke-width: 10;
    }
    .score-ring-fill {
      fill: none;
      stroke: var(--gold);
      stroke-width: 10;
      stroke-linecap: round;
      stroke-dasharray: 502.65;
      stroke-dashoffset: 502.65;
      transition: stroke-dashoffset 1.6s cubic-bezier(0.34,1.1,0.64,1);
    }
    .score-ring-fill.danger  { stroke: var(--red); }
    .score-ring-fill.warning { stroke: var(--yellow); }
    .score-ring-fill.good    { stroke: var(--green); }
    .score-center {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
    }
    .score-number {
      font-size: 3rem;
      font-weight: 800;
      color: var(--text);
      line-height: 1;
      display: block;
    }
    .score-denom {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 2px;
    }
    .score-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .score-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--gold-dim);
      border: 1px solid var(--gold-border);
      color: var(--gold);
      font-size: 0.8rem;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 100px;
      letter-spacing: 0.04em;
      margin-bottom: 20px;
    }
    .score-sub {
      font-size: 1rem;
      color: var(--text-muted);
      max-width: 520px;
      margin: 0 auto;
      line-height: 1.7;
    }

    /* -- DIMENSION BARS ---------------------------------------- */
    .dim-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 24px;
    }
    @media (max-width: 520px) { .dim-grid { grid-template-columns: 1fr; } }

    .dim-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 16px;
    }
    .dim-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--text-dim);
      margin-bottom: 8px;
      font-weight: 600;
    }
    .dim-bar-track {
      background: rgba(255,255,255,0.07);
      border-radius: 4px;
      height: 6px;
      overflow: hidden;
      margin-bottom: 6px;
    }
    .dim-bar-fill {
      height: 6px;
      border-radius: 4px;
      width: 0%;
      transition: width 1.4s cubic-bezier(0.34,1.1,0.64,1) 0.4s;
    }
    .dim-bar-fill.low  { background: var(--red); }
    .dim-bar-fill.mid  { background: var(--yellow); }
    .dim-bar-fill.high { background: var(--green); }
    .dim-score-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .dim-score-val {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text);
    }
    .dim-score-pct {
      font-size: 0.72rem;
      color: var(--text-dim);
    }

    /* -- CARD -------------------------------------------------- */
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px;
    }
    .card-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-title i {
      color: var(--gold);
      font-size: 1rem;
    }

    /* -- SECTION HEADING --------------------------------------- */
    .section-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--gold);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .section-heading {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 18px;
      line-height: 1.3;
    }

    /* -- EXECUTIVE SUMMARY ------------------------------------- */
    .summary-text {
      font-size: 1rem;
      color: var(--text-muted);
      line-height: 1.8;
    }
    .summary-text strong {
      color: var(--text);
      font-weight: 600;
    }

    /* -- BOTTLENECK ITEMS -------------------------------------- */
    .bottleneck-item {
      display: flex;
      gap: 16px;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
    }
    .bottleneck-item:last-child { border-bottom: none; padding-bottom: 0; }
    .bottleneck-item:first-child { padding-top: 0; }

    .bn-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 0.95rem;
    }
    .bn-icon.critical { background: var(--red-dim);    color: var(--red); }
    .bn-icon.high     { background: var(--red-dim);    color: var(--red); }
    .bn-icon.moderate { background: var(--yellow-dim); color: var(--yellow); }

    .bn-body {}
    .bn-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .bn-severity {
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 100px;
    }
    .bn-severity.critical { background: var(--red-dim);    color: var(--red); }
    .bn-severity.moderate { background: var(--yellow-dim); color: var(--yellow); }
    .bn-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      line-height: 1.7;
    }

    /* -- COST IMPACT ------------------------------------------- */
    .impact-list {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    @media (max-width: 520px) { .impact-list { grid-template-columns: 1fr; } }
    .impact-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 0.9rem;
      color: var(--text-muted);
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px 14px;
    }
    .impact-list li i {
      color: var(--red);
      font-size: 0.8rem;
      margin-top: 3px;
      flex-shrink: 0;
    }

    /* -- REPORT TEASER (LOCKED) -------------------------------- */
    .teaser-wrap {
      position: relative;
      border-radius: 14px;
      overflow: hidden;
    }
    .teaser-items {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .teaser-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--border);
      background: var(--surface);
      filter: blur(2px);
      user-select: none;
      pointer-events: none;
    }
    .teaser-item:last-child { border-bottom: none; border-radius: 0 0 14px 14px; }
    .teaser-item:first-child { border-radius: 14px 14px 0 0; }
    .teaser-item i.lock-i {
      color: var(--text-dim);
      font-size: 0.85rem;
      width: 18px;
      text-align: center;
      flex-shrink: 0;
    }
    .teaser-item-label {
      font-size: 0.875rem;
      color: var(--text-muted);
      flex: 1;
    }
    .teaser-item-badge {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--gold);
      background: var(--gold-dim);
      border: 1px solid var(--gold-border);
      border-radius: 100px;
      padding: 2px 8px;
      font-weight: 600;
    }
    .teaser-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 28px 24px 24px;
      border-radius: 14px;
    }
    .teaser-unlock-cta {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--gold);
      letter-spacing: 0.04em;
      text-align: center;
      margin-bottom: 8px;
    }
    .teaser-unlock-sub {
      font-size: 0.78rem;
      color: var(--text-muted);
      text-align: center;
    }

    /* -- LEAD FORM --------------------------------------------- */
    .form-section {
      background: var(--surface);
      border: 1px solid var(--gold-border);
      border-radius: 16px;
      padding: 36px 32px;
      position: relative;
      overflow: hidden;
    }
    .form-section::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--gold), var(--gold-light));
    }
    @media (max-width: 600px) { .form-section { padding: 28px 20px; } }

    .form-headline {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .form-sub {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin-bottom: 28px;
      line-height: 1.7;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    @media (max-width: 560px) { .form-grid { grid-template-columns: 1fr; } }
    .form-full { grid-column: 1 / -1; }

    .form-label {
      display: block;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.07em;
      margin-bottom: 6px;
    }
    .form-label .req {
      color: var(--gold);
      margin-left: 2px;
    }
    .form-input {
      width: 100%;
      background: var(--surface2);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 8px;
      padding: 11px 14px;
      font-size: 0.9rem;
      color: var(--text);
      outline: none;
      transition: border-color 0.2s;
      -webkit-appearance: none;
    }
    .form-input::placeholder { color: var(--text-dim); }
    .form-input:focus { border-color: var(--gold); }

    .form-checkbox-wrap {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--gold-dim);
      border: 1px solid var(--gold-border);
      border-radius: 10px;
      padding: 14px 16px;
      cursor: pointer;
    }
    .form-checkbox-wrap input[type="checkbox"] {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      margin-top: 1px;
      accent-color: var(--gold);
      cursor: pointer;
      flex-shrink: 0;
    }
    .form-checkbox-label {
      font-size: 0.875rem;
      color: var(--text-muted);
      line-height: 1.5;
      cursor: pointer;
    }
    .form-checkbox-label strong {
      color: var(--text);
      display: block;
      font-size: 0.9rem;
      margin-bottom: 3px;
    }

    .btn-unlock {
      width: 100%;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: #000;
      border: none;
      border-radius: 10px;
      padding: 16px 24px;
      font-size: 1rem;
      font-weight: 800;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: opacity 0.2s, transform 0.15s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .btn-unlock:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
    .btn-unlock:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

    .form-privacy {
      font-size: 0.72rem;
      color: var(--text-dim);
      text-align: center;
      margin-top: 12px;
      line-height: 1.5;
    }
    .form-privacy a { color: var(--text-dim); text-decoration: underline; }

    .form-error {
      font-size: 0.8rem;
      color: var(--red);
      margin-top: 10px;
      display: none;
      text-align: center;
    }

    /* -- NO DATA STATE ----------------------------------------- */
    #no-data-msg {
      display: none;
      text-align: center;
      padding: 80px 24px;
    }
    #no-data-msg h2 { font-size: 1.4rem; color: var(--text); margin-bottom: 12px; }
    #no-data-msg p  { color: var(--text-muted); margin-bottom: 28px; }
    .btn-retake {
      display: inline-block;
      background: var(--gold);
      color: #000;
      font-weight: 700;
      padding: 12px 28px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 0.95rem;
    }

    /* -- SECURITY BADGES --------------------------------------- */
    .security-strip {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid var(--border);
    }
    .security-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.72rem;
      color: var(--text-dim);
      font-weight: 500;
    }
    .security-item i { color: var(--text-dim); font-size: 0.75rem; }

    /* -- SPINNER ----------------------------------------------- */
    .spinner {
      display: none;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(0,0,0,0.2);
      border-top-color: #000;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* -- RESPONSIVE -------------------------------------------- */
    @media (max-width: 600px) {
      .score-hero  { padding: 40px 16px 36px; }
      .score-title { font-size: 1.3rem; }
      .card        { padding: 20px; }
      .section-heading { font-size: 1.15rem; }
    }
  </style>
</head>
<body>

  <!-- Top Bar -->
  <header class="top-bar">
    <a href="/" class="top-bar-logo">MetaGrowth Ventures</a>
    <span class="top-bar-label">Revenue Infrastructure Report</span>
  </header>

  <!-- No-data fallback -->
  <div id="no-data-msg">
    <h2>No assessment data found</h2>
    <p>It looks like your session expired or you arrived here directly.<br>Please retake the assessment to generate your report.</p>
    <a href="/assessment" class="btn-retake">Take the Assessment <i class="fas fa-arrow-right"></i></a>
  </div>

  <!-- Main Report Preview Content -->
  <div id="preview-content" style="display:none;">

    <!-- -- SECTION 1: SCORE -------------------------------------- -->
    <div class="score-hero">
      <div class="score-eyebrow">Revenue Infrastructure Assessment</div>

      <!-- Score Ring -->
      <div class="score-ring-wrap">
        <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <circle class="score-ring-bg"  cx="90" cy="90" r="80"/>
          <circle class="score-ring-fill" id="score-ring" cx="90" cy="90" r="80"/>
        </svg>
        <div class="score-center">
          <span class="score-number" id="score-display">—</span>
          <div class="score-denom">/ 100</div>
        </div>
      </div>

      <div class="score-badge" id="score-badge">
        <i class="fas fa-chart-bar"></i>
        <span id="score-badge-text">Calculating…</span>
      </div>
      <div class="score-title" id="score-title">–</div>
      <div class="score-sub" id="score-sub">–</div>

      <!-- Dimension Breakdown -->
      <div class="dim-grid" id="dim-grid" style="max-width:580px;margin:24px auto 0;"></div>

      <!-- X-Ray CTA — score hero placement -->
      <div style="margin-top:32px;text-align:center;">
        <a id="xray-handoff-hero" href="#" target="_blank" rel="noopener noreferrer"
           style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;border-radius:8px;border:1px solid rgba(173,120,5,0.45);color:#e8c84a;font-size:0.92rem;font-weight:600;text-decoration:none;font-family:inherit;transition:all 0.2s ease;background:rgba(173,120,5,0.06);"
           onmouseover="this.style.background='rgba(173,120,5,0.13)';this.style.borderColor='rgba(173,120,5,0.7)'"
           onmouseout="this.style.background='rgba(173,120,5,0.06)';this.style.borderColor='rgba(173,120,5,0.45)'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style="width:1em;height:1em;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          See Which Revenue Engine X-Ray Fits You
        </a>
        <div style="margin-top:10px;font-size:0.78rem;color:rgba(255,255,255,0.35);">Based on your score — takes 30 seconds</div>
      </div>
    </div>

    <div class="page-wrap">

      <!-- -- SECTION 2: EXECUTIVE SUMMARY ------------------------- -->
      <section class="section">
        <div class="section-label">Executive Summary</div>
        <div class="section-heading" id="summary-heading">Your Revenue Infrastructure Diagnosis</div>
        <div class="card">
          <div class="summary-text" id="summary-text">–</div>
        </div>
        <!-- X-Ray CTA — summary reinforcement -->
        <div style="margin-top:20px;text-align:center;">
          <a id="xray-handoff-summary" href="#" target="_blank" rel="noopener noreferrer"
             style="display:inline-flex;align-items:center;gap:8px;padding:11px 22px;border-radius:8px;border:1px solid rgba(173,120,5,0.3);color:rgba(232,200,74,0.8);font-size:0.85rem;font-weight:600;text-decoration:none;font-family:inherit;transition:all 0.2s ease;"
             onmouseover="this.style.background='rgba(173,120,5,0.1)';this.style.color='#e8c84a'"
             onmouseout="this.style.background='';this.style.color='rgba(232,200,74,0.8)'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style="width:0.9em;height:0.9em;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            See Which Revenue Engine X-Ray Fits Your Score
          </a>
        </div>
      </section>

      <!-- -- SECTION 3: TOP 3 BOTTLENECKS -------------------------- -->
      <section class="section">
        <div class="section-label">Primary Constraints</div>
        <div class="section-heading">Your Top Revenue Bottlenecks</div>
        <div class="card">
          <div id="bottlenecks-list"></div>
        </div>
      </section>

      <!-- -- SECTION 4: COST IMPACT --------------------------------- -->
      <section class="section">
        <div class="section-label">Business Impact</div>
        <div class="section-heading" id="impact-heading">What This Stage Typically Costs You</div>
        <div class="card">
          <ul class="impact-list" id="impact-list"></ul>
        </div>
      </section>

      <!-- -- SECTION 5: REPORT TEASER (LOCKED) ---------------------- -->
      <section class="section">
        <div class="section-label">Full Report</div>
        <div class="section-heading">Your Complete Revenue Diagnosis Is Ready</div>
        <div class="teaser-wrap">
          <div class="teaser-items" id="teaser-items">
            <div class="teaser-item">
              <i class="fas fa-lock lock-i"></i>
              <span class="teaser-item-label">Full Revenue Infrastructure Breakdown</span>
              <span class="teaser-item-badge">Included</span>
            </div>
            <div class="teaser-item">
              <i class="fas fa-lock lock-i"></i>
              <span class="teaser-item-label">Detailed Category Scores &amp; Gap Analysis</span>
              <span class="teaser-item-badge">Included</span>
            </div>
            <div class="teaser-item">
              <i class="fas fa-lock lock-i"></i>
              <span class="teaser-item-label">Priority Bottleneck Ranking with Action Plans</span>
              <span class="teaser-item-badge">Included</span>
            </div>
            <div class="teaser-item">
              <i class="fas fa-lock lock-i"></i>
              <span class="teaser-item-label">Immediate Revenue Opportunities</span>
              <span class="teaser-item-badge">Included</span>
            </div>
            <div class="teaser-item">
              <i class="fas fa-lock lock-i"></i>
              <span class="teaser-item-label">90-Day Revenue Improvement Plan</span>
              <span class="teaser-item-badge">Included</span>
            </div>
            <div class="teaser-item">
              <i class="fas fa-lock lock-i"></i>
              <span class="teaser-item-label">Personalized Recommendations</span>
              <span class="teaser-item-badge">Included</span>
            </div>
            <div class="teaser-item">
              <i class="fas fa-lock lock-i"></i>
              <span class="teaser-item-label">Revenue Engine X-Ray Eligibility Assessment</span>
              <span class="teaser-item-badge">Included</span>
            </div>
          </div>
          <div class="teaser-overlay">
            <div class="teaser-unlock-cta"><i class="fas fa-lock" style="margin-right:6px;"></i>Enter your details below to unlock your full report</div>
            <div class="teaser-unlock-sub">Free — no credit card required</div>
          </div>
        </div>
      </section>

      <!-- -- SECTION 6: LEAD CAPTURE FORM -------------------------- -->
      <section class="section" id="unlock-section">
        <div class="form-section">
          <div class="section-label" style="margin-bottom:12px;">Unlock Your Report</div>
          <div class="form-headline">Unlock Your Full Revenue Diagnosis</div>
          <div class="form-sub">
            Your assessment has identified specific growth constraints and opportunities unique to your business.
            Enter your information below to access your complete Revenue Infrastructure Report and personalized recommendations.
          </div>

          <form id="unlock-form" novalidate>
            <div class="form-grid">
              <!-- First Name -->
              <div>
                <label class="form-label" for="pv-first-name">First Name<span class="req">*</span></label>
                <input type="text" class="form-input" id="pv-first-name" name="first_name"
                       placeholder="First name" autocomplete="given-name" required>
              </div>
              <!-- Last Name -->
              <div>
                <label class="form-label" for="pv-last-name">Last Name<span class="req">*</span></label>
                <input type="text" class="form-input" id="pv-last-name" name="last_name"
                       placeholder="Last name" autocomplete="family-name" required>
              </div>
              <!-- Email -->
              <div class="form-full">
                <label class="form-label" for="pv-email">Work Email<span class="req">*</span></label>
                <input type="email" class="form-input" id="pv-email" name="email"
                       placeholder="you@company.com" autocomplete="email" required>
              </div>
              <!-- Company -->
              <div class="form-full">
                <label class="form-label" for="pv-company">Company<span class="req">*</span></label>
                <input type="text" class="form-input" id="pv-company" name="company"
                       placeholder="Company name" autocomplete="organization" required>
              </div>
              <!-- Phone (optional) -->
              <div>
                <label class="form-label" for="pv-phone">Phone <span style="font-weight:400;text-transform:none;letter-spacing:0;">(optional)</span></label>
                <input type="tel" class="form-input" id="pv-phone" name="phone"
                       placeholder="+1 (555) 000-0000" autocomplete="tel">
              </div>
              <!-- Website (optional) -->
              <div>
                <label class="form-label" for="pv-website">Website <span style="font-weight:400;text-transform:none;letter-spacing:0;">(optional)</span></label>
                <input type="url" class="form-input" id="pv-website" name="website"
                       placeholder="https://yourcompany.com" autocomplete="url">
              </div>

              <!-- Revenue Review checkbox -->
              <div class="form-full">
                <label class="form-checkbox-wrap" for="pv-review">
                  <input type="checkbox" id="pv-review" name="revenue_review">
                  <div class="form-checkbox-label">
                    <strong>I'd like a complimentary Revenue Review of my results.</strong>
                    A MetaGrowth strategist will walk through your report with you personally — at no cost.
                  </div>
                </label>
              </div>

              <!-- Submit -->
              <div class="form-full" style="margin-top:8px;">
                <button type="submit" class="btn-unlock" id="unlock-btn">
                  <span id="unlock-btn-text">Show My Full Report</span>
                  <div class="spinner" id="unlock-spinner"></div>
                  <i class="fas fa-arrow-right" id="unlock-btn-icon"></i>
                </button>
                <div class="form-error" id="form-error">Please fill in all required fields.</div>
              </div>
            </div>
          </form>

          <!-- Security strip -->
          <div class="security-strip">
            <div class="security-item"><i class="fas fa-shield-alt"></i> SSL Secured</div>
            <div class="security-item"><i class="fas fa-lock"></i> No credit card required</div>
            <div class="security-item"><i class="fas fa-user-secret"></i> Your data is private</div>
            <div class="security-item"><i class="fas fa-ban"></i> No spam, ever</div>
          </div>

          <div class="form-privacy">
            By submitting, you agree to our
            <a href="/privacy" target="_blank">Privacy Policy</a>.
            We respect your data and will never share or sell it.
          </div>
        </div>
      </section>

    </div><!-- /page-wrap -->
  </div><!-- /preview-content -->

<script>
(function() {
  'use strict';

  // -- Dimension metadata -----------------------------------------------------
  var DIMS = [
    { key: 'rs', label: 'Revenue System',      weight: 0.15 },
    { key: 'pm', label: 'Pipeline Management',  weight: 0.20 },
    { key: 'si', label: 'Sales Infrastructure', weight: 0.25 },
    { key: 'tt', label: 'Team & Talent',        weight: 0.20 },
    { key: 'le', label: 'Leadership & Execution', weight: 0.20 }
  ];

  // -- Stage-level copy -------------------------------------------------------
  var STAGE_COPY = {
    stage0: {
      badgeLabel: 'Stage: Founder-Led / No Infrastructure',
      summaryHeading: 'Your Revenue Infrastructure Diagnosis',
      summary: 'Based on your responses, your company appears to be generating revenue primarily through founder involvement, individual effort, and inconsistent processes rather than scalable infrastructure. While market demand appears to exist, growth is likely constrained by pipeline predictability, sales execution consistency, accountability systems, and a lack of documented revenue processes. Companies at this stage often experience periods of strong growth followed by stagnation — because revenue depends heavily on key individuals rather than repeatable systems. The path forward begins with building infrastructure, not adding headcount.',
      impactHeading: "What Founder-Led Revenue Typically Costs You",
      impacts: [
        'Revenue volatility and feast-or-famine cycles',
        'Founder dependency — every deal needs you',
        'Missed opportunities from pipeline blind spots',
        'Longer sales cycles due to inconsistent process',
        'Difficult hiring decisions without a clear system',
        'Poor forecasting accuracy — every quarter is a guess'
      ]
    },
    stage1: {
      badgeLabel: 'Stage: Early Team / Inconsistent Execution',
      summaryHeading: 'Your Revenue Infrastructure Diagnosis',
      summary: 'Based on your responses, your company has taken the first steps in building a sales team, but execution remains inconsistent. Individual rep performance varies widely, accountability is loose, and results are difficult to predict from month to month. The team exists — but the system beneath them does not. Without a defined sales operating system, enforced CRM discipline, and a structured performance rhythm, even strong reps will underperform against their potential. The constraint is not the people. It is the infrastructure they are operating within.',
      impactHeading: "What Inconsistent Execution Typically Costs You",
      impacts: [
        'Unpredictable revenue — strong months followed by misses',
        'High rep turnover from unclear expectations',
        'Wasted hiring investment with slow ramp times',
        'Missed quota from avoidable execution gaps',
        'Management bandwidth drained by individual issues',
        'Forecasting uncertainty eroding leadership confidence'
      ]
    },
    stage2: {
      badgeLabel: 'Stage: System Gaps / Underperformance',
      summaryHeading: 'Your Revenue Infrastructure Diagnosis',
      summary: 'Based on your responses, your company has real revenue and a functioning team — but infrastructure is not keeping pace with growth. CRM adoption is inconsistent, coaching is reactive rather than systematic, and forecasting relies more on judgment than data. The systems that enabled your early traction are now creating drag as you try to scale. Companies at this stage often see strong absolute numbers but deteriorating ratios — close rates slipping, ramp times growing, and forecast accuracy declining. The gap between where you are and where you should be is an infrastructure problem.',
      impactHeading: "What Infrastructure Gaps Typically Cost Growing Companies",
      impacts: [
        'Execution drag as team size increases',
        'Declining close rates from inconsistent process',
        'Forecasting inaccuracy eroding planning confidence',
        'Leadership bandwidth consumed by operational fires',
        'Competitive disadvantage from slower sales cycles',
        'VP/CRO turnover disrupting hard-won momentum'
      ]
    },
    stage3: {
      badgeLabel: 'Stage: Scaling / Leadership Gap',
      summaryHeading: 'Your Revenue Infrastructure Diagnosis',
      summary: 'Based on your responses, your company has built something substantial — real revenue, a real team, and market traction. The constraint at this stage is revenue leadership. As deal volume grows, forecast accuracy degrades. Execution rhythm requires active senior ownership. The performance culture needs someone who owns outcomes, not just reports on them. Companies at this stage often see the gap between their current execution and their full potential widen precisely because they lack the revenue leadership layer required to operate at scale. The next stage of growth requires a different kind of infrastructure at the top.',
      impactHeading: "What Leadership Gaps Typically Cost at Scale",
      impacts: [
        'Forecast misses increasing as complexity grows',
        'Execution inconsistency without senior ownership',
        'Sales leadership managing activity, not driving strategy',
        'VP/CRO turnover disrupting critical momentum',
        'Missed market windows from slow decision-making',
        'Team performance ceiling without clear accountability at the top'
      ]
    }
  };

  // -- Bottleneck severity labelling ------------------------------------------
  function getSeverity(idx) {
    if (idx === 0) return { cls: 'critical', label: 'Critical' };
    if (idx === 1) return { cls: 'high',     label: 'High Impact' };
    return               { cls: 'moderate',  label: 'Moderate' };
  }

  // -- Score ring circumference: r=80 → 2π×80 ≈ 502.65 ----------------------
  var CIRC = 502.65;

  function getDimClass(pct) {
    if (pct < 40) return 'low';
    if (pct < 65) return 'mid';
    return 'high';
  }

  // -- Load data --------------------------------------------------------------
  var data;
  try { data = JSON.parse(localStorage.getItem('mgc_report') || sessionStorage.getItem('mgc_report') || ''); } catch(e) {}

  if (!data || typeof data.score === 'undefined') {
    document.getElementById('no-data-msg').style.display = 'block';
    return;
  }

  // -- Show content -----------------------------------------------------------
  document.getElementById('preview-content').style.display = 'block';

  var score   = data.score || 0;
  var scores  = data.scores || {};
  var outcome = data.outcome || {};

  // Determine stage key
  var stageKey = score <= 30 ? 'stage0' : score <= 50 ? 'stage1' : score <= 70 ? 'stage2' : 'stage3';
  var stageCopy = STAGE_COPY[stageKey];

  // -- UTM data ---------------------------------------------------------------
  var utmData = {};
  try { utmData = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) {}

  // -- GA4 helper -------------------------------------------------------------
  function track(eventName, extra) {
    try {
      if (typeof gtag !== 'function') return;
      var params = Object.assign({
        score:          score,
        stage:          stageKey,
        top_bottleneck: (outcome.bottlenecks && outcome.bottlenecks[0]) ? outcome.bottlenecks[0].title : '',
        utm_source:     utmData.utm_source   || '',
        utm_medium:     utmData.utm_medium   || '',
        utm_campaign:   utmData.utm_campaign || '',
        landing_page:   utmData.landing_page || '',
        page_location:  window.location.href,
        page_title:     document.title
      }, extra || {});
      console.log('[MGC GA4] Firing', eventName, params);
      gtag('event', eventName, params);
    } catch(e) { console.error('[MGC GA4] Error firing', eventName, e); }
  }

  // -- SECTION 1: Score ring + badge + title ----------------------------------
  var ring = document.getElementById('score-ring');
  var ringClass = score <= 30 ? 'danger' : score <= 50 ? 'warning' : score <= 70 ? '' : 'good';
  if (ringClass) ring.classList.add(ringClass);

  document.getElementById('score-badge-text').textContent = stageCopy.badgeLabel;
  document.getElementById('score-title').textContent      = outcome.title || '';
  document.getElementById('score-sub').textContent        = outcome.sub   || '';

  // Animate score counter
  var scoreEl = document.getElementById('score-display');
  var start = performance.now();
  var dur   = 1400;
  function animScore(now) {
    var p = Math.min((now - start) / dur, 1);
    var e = 1 - Math.pow(1 - p, 3);
    scoreEl.textContent = Math.round(e * score);
    if (p < 1) requestAnimationFrame(animScore);
  }
  requestAnimationFrame(animScore);

  // Animate ring
  setTimeout(function() {
    ring.style.strokeDashoffset = CIRC - (score / 100) * CIRC;
  }, 80);

  // -- Dimension bars ----------------------------------------------------------
  var dimGrid = document.getElementById('dim-grid');
  DIMS.forEach(function(d) {
    var raw = scores[d.key] || 0;
    var pct = Math.round(raw);
    var cls = getDimClass(pct);
    var card = document.createElement('div');
    card.className = 'dim-card';
    card.innerHTML =
      '<div class="dim-label">' + d.label + '</div>' +
      '<div class="dim-bar-track"><div class="dim-bar-fill ' + cls + '" id="dim-' + d.key + '"></div></div>' +
      '<div class="dim-score-line">' +
        '<span class="dim-score-val">' + pct + '</span>' +
        '<span class="dim-score-pct">' + Math.round(d.weight * 100) + '% weight</span>' +
      '</div>';
    dimGrid.appendChild(card);
  });

  // Animate bars after paint
  setTimeout(function() {
    DIMS.forEach(function(d) {
      var el = document.getElementById('dim-' + d.key);
      if (el) el.style.width = Math.min(scores[d.key] || 0, 100) + '%';
    });
  }, 120);

  // -- Wire X-Ray handoff buttons with dynamic score URL -----------------------
  // score is already resolved at this point — use it directly, never recalculate
  var xrayUrl = 'https://growthenginexray.com/?score=' + score
    + '&utm_source=metagrowth_assessment&utm_medium=referral&utm_campaign=assessment_handoff';

  ['xray-handoff-hero', 'xray-handoff-summary'].forEach(function(id) {
    var btn = document.getElementById(id);
    if (!btn) return;
    btn.href = xrayUrl;
    btn.addEventListener('click', function() {
      track('xray_handoff_click', {
        assessment_score: score,
        cta_label:        'See Which Revenue Engine X-Ray Fits You'
      });
    });
  });

  // -- SECTION 2: Executive Summary -------------------------------------------
  document.getElementById('summary-heading').textContent = stageCopy.summaryHeading;

  // Build personalized summary — inject company name if available
  var company = (data.company || '').trim();
  var firstName = (data.firstName || '').trim();
  var summaryText = stageCopy.summary;
  if (company) {
    summaryText = summaryText.replace(
      'Based on your responses, your company',
      'Based on your responses, <strong>' + escHtml(company) + '</strong>'
    );
  }
  document.getElementById('summary-text').innerHTML = summaryText;

  // -- SECTION 3: Top 3 Bottlenecks ------------------------------------------
  var bottlenecks = (outcome.bottlenecks || []).slice(0, 3);
  var bnList = document.getElementById('bottlenecks-list');
  if (bottlenecks.length === 0) {
    bnList.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem;">No bottlenecks identified.</p>';
  } else {
    bottlenecks.forEach(function(bn, idx) {
      var sev = getSeverity(idx);
      var iconClass = bn.icon ? 'fa-' + bn.icon.replace('fa-','') : 'fa-exclamation-triangle';
      var item = document.createElement('div');
      item.className = 'bottleneck-item';
      item.innerHTML =
        '<div class="bn-icon ' + sev.cls + '"><i class="fas ' + escHtml(iconClass) + '"></i></div>' +
        '<div class="bn-body">' +
          '<div class="bn-title">' +
            escHtml(bn.title) +
            '<span class="bn-severity ' + sev.cls + '">' + sev.label + '</span>' +
          '</div>' +
          '<div class="bn-desc">' + escHtml(truncate(bn.feeling || '', 200)) + '</div>' +
        '</div>';
      bnList.appendChild(item);
    });
  }

  // -- SECTION 4: Cost Impact -------------------------------------------------
  document.getElementById('impact-heading').textContent = stageCopy.impactHeading;
  var impactList = document.getElementById('impact-list');
  stageCopy.impacts.forEach(function(txt) {
    var li = document.createElement('li');
    li.innerHTML = '<i class="fas fa-times-circle"></i>' + escHtml(txt);
    impactList.appendChild(li);
  });

  // -- Pre-fill form from sessionStorage -------------------------------------
  if (data.firstName) document.getElementById('pv-first-name').value = data.firstName;
  if (data.lastName)  document.getElementById('pv-last-name').value  = data.lastName;
  if (data.email)     document.getElementById('pv-email').value      = data.email;
  if (data.company)   document.getElementById('pv-company').value    = data.company;
  if (data.phone)     document.getElementById('pv-phone').value      = data.phone;

  // -- GA4 — report_preview_view ----------------------------------------------
  var previewViewFired = false;
  try {
    var pvKey = 'mgc_prev_view_' + score;
    if (!sessionStorage.getItem(pvKey)) {
      sessionStorage.setItem(pvKey, '1');
      previewViewFired = true;
    }
  } catch(e) {}
  if (previewViewFired) {
    setTimeout(function() { track('report_preview_view'); }, 600);
  }

  // -- GA4 — report_unlock_form_view (on scroll to form) ---------------------
  var formViewFired = false;
  var formSection = document.getElementById('unlock-section');
  if ('IntersectionObserver' in window && formSection) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !formViewFired) {
          formViewFired = true;
          track('report_unlock_form_view');
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(formSection);
  }

  // -- Form submission --------------------------------------------------------
  document.getElementById('unlock-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var firstName = document.getElementById('pv-first-name').value.trim();
    var lastName  = document.getElementById('pv-last-name').value.trim();
    var email     = document.getElementById('pv-email').value.trim();
    var company   = document.getElementById('pv-company').value.trim();
    var phone     = document.getElementById('pv-phone').value.trim();
    var website   = document.getElementById('pv-website').value.trim();
    var wantsReview = document.getElementById('pv-review').checked;

    var errEl = document.getElementById('form-error');
    errEl.style.display = 'none';

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
      errEl.textContent = 'Please fill in all required fields (First Name, Last Name, Email, Company).';
      errEl.style.display = 'block';
      return;
    }
    if (email.indexOf('@') < 1 || email.lastIndexOf('.') < email.indexOf('@') + 2 || email.lastIndexOf('.') >= email.length - 1) {
      errEl.textContent = 'Please enter a valid email address.';
      errEl.style.display = 'block';
      return;
    }

    // GA4 — report_unlock_submit
    track('report_unlock_submit', { wants_revenue_review: wantsReview });

    // Update sessionStorage with any new/edited contact data
    try {
      var updated = JSON.parse(localStorage.getItem('mgc_report') || sessionStorage.getItem('mgc_report') || '{}');
      updated.firstName     = firstName;
      updated.lastName      = lastName;
      updated.email         = email;
      updated.company       = company;
      updated.phone         = phone;
      updated.website       = website;
      updated.wantsReview   = wantsReview;
      updated.previewUnlocked = true;
      try { localStorage.setItem('mgc_report', JSON.stringify(updated)); } catch(e) { sessionStorage.setItem('mgc_report', JSON.stringify(updated)); }
    } catch(e) {}

    // Show loading state
    var btn = document.getElementById('unlock-btn');
    btn.disabled = true;
    document.getElementById('unlock-btn-text').textContent = 'Generating Your Report…';
    document.getElementById('unlock-spinner').style.display = 'block';
    document.getElementById('unlock-btn-icon').style.display = 'none';

    // If form has new data not previously sent (e.g. website, review checkbox),
    // fire a lightweight update call — but do not block navigation on it.
    // The /api/assessment call was already made by assessment.ts with core data.
    // We just navigate immediately after a brief UX moment.
    setTimeout(function() {
      window.location.href = '/assessment/report?score=' + score + '&unlocked=1';
    }, 900);
  });

  // -- Utilities --------------------------------------------------------------
  function escHtml(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function truncate(str, max) {
    if (!str || str.length <= max) return str;
    return str.slice(0, max).replace(/\\s+\\S*$/, '') + '…';
  }

})();
</script>

</body>
</html>`;
}
