import { nav, footer, globalStyles, aiVisibilityHead } from '../layout'

export const assessmentPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Revenue Engine Assessment | MetaGrowth Ventures</title>
  ${aiVisibilityHead({
    path: '/assessment',
    title: 'Revenue Engine Assessment',
    description: 'Diagnose your revenue engine in 3 minutes. Identify your biggest growth constraint and get a clear path to scale.',
    llm: {
      pageType: 'diagnostic',
      summary: 'A free 3–5 minute Revenue Engine Assessment from MetaGrowth Ventures that diagnoses the biggest revenue infrastructure constraint inside a B2B company and recommends the matching solution.',
      audience: 'B2B founders, CEOs, and sales leaders who want a quick read on where their revenue engine is breaking before booking a strategy call.',
      outcomes: ['Identify your biggest growth constraint', 'Get a recommended MetaGrowth solution match', 'Decide whether to book a strategy call'],
      keywords: ['revenue engine assessment', 'sales diagnostic', 'B2B sales audit', 'free sales assessment'],
      primaryCta: { label: 'Take the Assessment (free, ~5 minutes)', url: 'https://metagrowth.ventures/assessment' },
      secondaryCta: { label: 'Book a Strategy Call instead', url: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' },
    },
  })}
  <link rel="icon" type="image/png" href="/static/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  ${globalStyles()}
  <style>

    /* ── Assessment-specific overrides ── */
    body { background: var(--navy); color: var(--white); padding-top: 68px; }

    /* ── Hero ── */
    .assess-hero {
      text-align: center;
      padding: 72px 24px 56px;
      background: linear-gradient(180deg, #0A0A0A 0%, var(--navy) 100%);
      border-bottom: 1px solid rgba(173,120,5,0.12);
      position: relative;
      overflow: hidden;
    }
    .assess-hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 800px 400px at 50% 0%, rgba(173,120,5,0.07) 0%, transparent 70%);
      pointer-events: none;
    }
    .assess-hero-label {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--green);
      border: 1px solid rgba(173,120,5,0.3); border-radius: 20px;
      padding: 6px 16px; margin-bottom: 28px;
    }
    .assess-hero h1 {
      font-size: clamp(2rem, 4.5vw, 3.2rem);
      color: var(--white); margin-bottom: 20px; line-height: 1.15;
    }
    .assess-hero h1 span { color: var(--green); }
    .assess-hero p {
      font-size: 1.15rem; color: rgba(255,255,255,0.65);
      max-width: 560px; margin: 0 auto 36px;
    }
    .assess-hero-stats {
      display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;
      margin-top: 40px; padding-top: 36px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .assess-hero-stat { text-align: center; }
    .assess-hero-stat strong {
      display: block; font-size: 1.5rem; font-weight: 800;
      color: var(--green); line-height: 1;
    }
    .assess-hero-stat span {
      font-size: 0.8rem; color: rgba(255,255,255,0.45);
      letter-spacing: 0.04em; margin-top: 4px; display: block;
    }

    /* ── What you'll get strip ── */
    .assess-benefits {
      background: var(--navy-mid);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 32px 24px;
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
    .assess-benefit i { color: var(--green); font-size: 0.9rem; }

    /* ── Assessment shell ── */
    .assess-shell {
      max-width: 780px; margin: 0 auto;
      padding: 56px 24px 80px;
    }

    /* ── Progress bar ── */
    .progress-wrap { margin-bottom: 40px; }
    .progress-meta {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 10px;
    }
    .progress-label {
      font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em;
      text-transform: uppercase; color: rgba(255,255,255,0.45);
    }
    .progress-step-count {
      font-size: 0.8rem; color: rgba(255,255,255,0.35);
    }
    .progress-track {
      height: 4px; background: rgba(255,255,255,0.08);
      border-radius: 4px; overflow: hidden;
    }
    .progress-fill {
      height: 100%; background: var(--green);
      border-radius: 4px; transition: width 0.4s ease;
    }
    .progress-steps {
      display: flex; gap: 6px; margin-top: 14px;
    }
    .progress-dot {
      flex: 1; height: 3px; border-radius: 3px;
      background: rgba(255,255,255,0.1);
      transition: background 0.3s ease;
    }
    .progress-dot.done { background: var(--green); }
    .progress-dot.active { background: rgba(173,120,5,0.5); }

    /* ── Step cards ── */
    .assess-step { display: none; }
    .assess-step.active { display: block; animation: stepIn 0.3s ease; }
    @keyframes stepIn {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .step-header { margin-bottom: 32px; }
    .step-category {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--green);
      margin-bottom: 10px;
    }
    .step-header h2 {
      font-size: clamp(1.4rem, 3vw, 2rem);
      color: var(--white); line-height: 1.25;
    }
    .step-header p {
      font-size: 0.95rem; color: rgba(255,255,255,0.5);
      margin-top: 8px;
    }

    /* ── Questions ── */
    .question-block { margin-bottom: 32px; }
    .question-label {
      font-size: 1rem; font-weight: 600; color: var(--white);
      margin-bottom: 14px; line-height: 1.4;
    }
    .question-label span {
      display: inline-block; width: 22px; height: 22px;
      background: rgba(173,120,5,0.15); border: 1px solid rgba(173,120,5,0.3);
      border-radius: 50%; font-size: 0.72rem; font-weight: 700;
      color: var(--green); text-align: center; line-height: 22px;
      margin-right: 8px; flex-shrink: 0;
    }

    /* Radio option cards */
    .options-grid {
      display: grid; gap: 10px;
    }
    .options-grid.cols-2 { grid-template-columns: 1fr 1fr; }
    .option-card {
      display: flex; align-items: flex-start; gap: 14px;
      padding: 16px 18px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius); cursor: pointer;
      transition: all 0.2s ease; position: relative;
    }
    .option-card:hover {
      border-color: rgba(173,120,5,0.4);
      background: rgba(173,120,5,0.05);
    }
    .option-card.selected {
      border-color: var(--green);
      background: rgba(173,120,5,0.1);
    }
    .option-card input[type="radio"] {
      position: absolute; opacity: 0; width: 0; height: 0;
    }
    .option-radio {
      width: 18px; height: 18px; border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.2);
      flex-shrink: 0; margin-top: 2px;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s ease;
    }
    .option-card.selected .option-radio {
      border-color: var(--green); background: var(--green);
    }
    .option-card.selected .option-radio::after {
      content: ''; width: 6px; height: 6px;
      background: var(--navy); border-radius: 50%;
    }
    .option-text { flex: 1; }
    .option-title {
      font-size: 0.92rem; font-weight: 600; color: var(--white);
      line-height: 1.3;
    }
    .option-sub {
      font-size: 0.8rem; color: rgba(255,255,255,0.4);
      margin-top: 2px; line-height: 1.4;
    }

    /* Text/name inputs */
    .field-group { margin-bottom: 20px; }
    .field-label {
      display: block; font-size: 0.85rem; font-weight: 600;
      color: rgba(255,255,255,0.7); margin-bottom: 8px;
    }
    .field-label .req { color: var(--green); margin-left: 2px; }
    .field-input {
      width: 100%; padding: 13px 16px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: var(--radius); color: var(--white);
      font-size: 0.95rem; font-family: inherit;
      transition: border-color 0.2s ease;
    }
    .field-input:focus {
      outline: none; border-color: var(--green);
      background: rgba(173,120,5,0.05);
    }
    .field-input::placeholder { color: rgba(255,255,255,0.25); }
    .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

    /* Checkbox options */
    .checkbox-grid { display: grid; gap: 10px; }
    .checkbox-card {
      display: flex; align-items: center; gap: 14px;
      padding: 14px 18px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius); cursor: pointer;
      transition: all 0.2s ease;
    }
    .checkbox-card:hover { border-color: rgba(173,120,5,0.4); }
    .checkbox-card.selected {
      border-color: var(--green); background: rgba(173,120,5,0.08);
    }
    .checkbox-card input { display: none; }
    .checkbox-box {
      width: 18px; height: 18px; border-radius: 4px;
      border: 2px solid rgba(255,255,255,0.2); flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s ease;
    }
    .checkbox-card.selected .checkbox-box {
      background: var(--green); border-color: var(--green);
    }
    .checkbox-card.selected .checkbox-box::after {
      content: '✓'; font-size: 11px; color: var(--navy); font-weight: 800;
    }
    .checkbox-text { font-size: 0.92rem; font-weight: 500; color: var(--white); }

    /* Navigation */
    .step-nav {
      display: flex; align-items: center; justify-content: space-between;
      margin-top: 40px; padding-top: 28px;
      border-top: 1px solid rgba(255,255,255,0.07);
    }
    .btn-back {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 24px; border-radius: var(--radius);
      background: transparent; border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.6); font-size: 0.9rem; font-weight: 500;
      cursor: pointer; transition: all 0.2s ease; font-family: inherit;
    }
    .btn-back:hover { border-color: rgba(255,255,255,0.3); color: var(--white); }
    .btn-next {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 14px 32px; border-radius: var(--radius);
      background: var(--green); color: var(--navy);
      font-size: 0.95rem; font-weight: 700; cursor: pointer;
      border: none; font-family: inherit;
      transition: all 0.2s ease;
    }
    .btn-next:hover { background: var(--green-light); transform: translateY(-1px); }
    .btn-next:disabled {
      opacity: 0.4; cursor: not-allowed; transform: none;
    }
    .btn-submit {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 16px 36px; border-radius: var(--radius);
      background: var(--green); color: var(--navy);
      font-size: 1rem; font-weight: 800; cursor: pointer;
      border: none; font-family: inherit;
      transition: all 0.2s ease; letter-spacing: 0.02em;
    }
    .btn-submit:hover { background: var(--green-light); transform: translateY(-2px); }

    .validation-msg {
      font-size: 0.8rem; color: #e05c5c; margin-top: 8px;
      display: none;
    }
    .validation-msg.show { display: block; }

    /* ── Results page ── */
    #results-panel { display: none; }
    #results-panel.show {
      display: block; animation: stepIn 0.5s ease;
    }

    .results-score-ring {
      display: flex; flex-direction: column; align-items: center;
      margin-bottom: 48px; padding: 48px 24px;
      background: var(--navy-mid);
      border: 1px solid rgba(173,120,5,0.15);
      border-radius: var(--radius-lg);
      text-align: center;
    }
    .score-ring-wrap {
      position: relative; width: 160px; height: 160px;
      margin-bottom: 24px;
    }
    .score-ring-svg { transform: rotate(-90deg); }
    .score-ring-bg { fill: none; stroke: rgba(255,255,255,0.07); stroke-width: 10; }
    .score-ring-fill {
      fill: none; stroke: var(--green); stroke-width: 10;
      stroke-linecap: round;
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      transition: stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1);
    }
    .score-ring-inner {
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
    }
    .score-number {
      font-size: 2.8rem; font-weight: 900; color: var(--white);
      line-height: 1;
    }
    .score-label-sm {
      font-size: 0.75rem; color: rgba(255,255,255,0.4);
      letter-spacing: 0.08em; text-transform: uppercase;
    }
    .results-stage-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 20px; border-radius: 20px;
      background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.3);
      font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--green);
      margin-bottom: 16px;
    }
    .results-stage-title {
      font-size: clamp(1.5rem, 3vw, 2rem); color: var(--white);
      font-weight: 800; margin-bottom: 12px;
    }
    .results-stage-sub {
      font-size: 0.95rem; color: rgba(255,255,255,0.55);
      max-width: 520px; margin: 0 auto;
    }

    /* Score breakdown */
    .score-breakdown {
      background: var(--navy-light);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg); padding: 28px;
      margin-bottom: 28px;
    }
    .score-breakdown h3 {
      font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em;
      text-transform: uppercase; color: rgba(255,255,255,0.4);
      margin-bottom: 20px;
    }
    .score-bar-row {
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 14px;
    }
    .score-bar-label {
      font-size: 0.82rem; font-weight: 600; color: rgba(255,255,255,0.7);
      width: 160px; flex-shrink: 0;
    }
    .score-bar-track {
      flex: 1; height: 6px; background: rgba(255,255,255,0.07);
      border-radius: 6px; overflow: hidden;
    }
    .score-bar-fill {
      height: 100%; border-radius: 6px; background: var(--green);
      transition: width 1s ease 0.3s;
    }
    .score-bar-val {
      font-size: 0.8rem; font-weight: 700; color: var(--green);
      width: 32px; text-align: right; flex-shrink: 0;
    }

    /* Diagnosis block */
    .results-section {
      background: var(--navy-light);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg); padding: 28px;
      margin-bottom: 20px;
    }
    .results-section-label {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--green);
      margin-bottom: 12px;
    }
    .results-section h3 {
      font-size: 1.15rem; font-weight: 700; color: var(--white);
      margin-bottom: 10px;
    }
    .results-section p {
      font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.7;
    }
    .gaps-list { list-style: none; margin-top: 14px; }
    .gaps-list li {
      display: flex; align-items: flex-start; gap: 10px;
      font-size: 0.9rem; color: rgba(255,255,255,0.65);
      padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .gaps-list li:last-child { border-bottom: none; }
    .gaps-list li::before {
      content: '⚠'; font-size: 0.8rem;
      color: #e09a3a; flex-shrink: 0; margin-top: 2px;
    }

    /* Recommended path */
    .rec-path-grid { display: grid; gap: 12px; margin-top: 14px; }
    .rec-path-card {
      display: flex; align-items: flex-start; gap: 16px;
      padding: 18px; background: rgba(173,120,5,0.05);
      border: 1px solid rgba(173,120,5,0.2);
      border-radius: var(--radius); transition: all 0.2s ease;
      text-decoration: none;
    }
    .rec-path-card:hover {
      border-color: var(--green); background: rgba(173,120,5,0.1);
      transform: translateX(4px);
    }
    .rec-path-icon {
      width: 36px; height: 36px; border-radius: var(--radius);
      background: rgba(173,120,5,0.15);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .rec-path-icon i { color: var(--green); font-size: 0.9rem; }
    .rec-path-body { flex: 1; }
    .rec-path-name {
      font-size: 0.95rem; font-weight: 700; color: var(--white);
      margin-bottom: 3px;
    }
    .rec-path-desc {
      font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.4;
    }
    .rec-path-arrow { color: var(--green); font-size: 0.85rem; margin-top: 4px; }
    .rec-primary-badge {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; background: var(--green); color: var(--navy);
      padding: 2px 7px; border-radius: 4px; margin-left: 8px;
      vertical-align: middle;
    }

    /* Results CTA */
    .results-cta-block {
      text-align: center; padding: 48px 32px;
      background: linear-gradient(135deg, #0A0A0A 0%, #1a1410 100%);
      border: 1px solid rgba(173,120,5,0.2);
      border-radius: var(--radius-lg); margin-top: 32px;
    }
    .results-cta-block h2 {
      color: var(--white); font-size: clamp(1.4rem, 3vw, 2rem);
      margin-bottom: 12px;
    }
    .results-cta-block p {
      color: rgba(255,255,255,0.55); max-width: 480px;
      margin: 0 auto 28px; font-size: 0.95rem;
    }
    .results-cta-btns {
      display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
    }
    .btn-outline-gold {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 13px 26px; border-radius: var(--radius);
      border: 1px solid rgba(173,120,5,0.4); color: var(--green);
      font-size: 0.9rem; font-weight: 600; cursor: pointer;
      transition: all 0.2s ease; background: transparent;
      font-family: inherit; text-decoration: none;
    }
    .btn-outline-gold:hover {
      background: rgba(173,120,5,0.08); border-color: var(--green);
    }

    /* Restart */
    .btn-restart {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 0.82rem; color: rgba(255,255,255,0.3);
      background: none; border: none; cursor: pointer;
      font-family: inherit; margin-top: 20px;
      transition: color 0.2s ease;
    }
    .btn-restart:hover { color: rgba(255,255,255,0.6); }

    /* ── Social proof strip ── */
    .proof-strip {
      background: rgba(255,255,255,0.02);
      border-top: 1px solid rgba(255,255,255,0.06);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 28px 24px;
    }
    .proof-strip-inner {
      max-width: 900px; margin: 0 auto;
      display: flex; justify-content: center;
      gap: 48px; flex-wrap: wrap;
    }
    .proof-metric { text-align: center; }
    .proof-metric strong {
      display: block; font-size: 1.6rem; font-weight: 900;
      color: var(--green); line-height: 1;
    }
    .proof-metric span {
      font-size: 0.75rem; color: rgba(255,255,255,0.35);
      letter-spacing: 0.05em; margin-top: 4px; display: block;
    }

    /* Responsive */
    @media (max-width: 640px) {
      .field-row { grid-template-columns: 1fr; }
      .options-grid.cols-2 { grid-template-columns: 1fr; }
      .step-nav { flex-direction: column-reverse; gap: 12px; }
      .btn-back, .btn-next, .btn-submit { width: 100%; justify-content: center; }
      .score-bar-label { width: 110px; font-size: 0.75rem; }
      .results-cta-btns { flex-direction: column; align-items: center; }
      .proof-strip-inner { gap: 24px; }
    }

  </style>
</head>
<body>

${nav()}

<!-- HERO -->
<section class="assess-hero">
  <div class="assess-hero-label">
    <i class="fas fa-chart-line"></i>
    Free Revenue Assessment
  </div>
  <h1>Diagnose Your <span>Revenue Engine</span><br>in 3 Minutes</h1>
  <p>Identify your biggest growth constraint and get a personalized path to scale — no fluff, no generic advice.</p>
  <button class="btn-next" onclick="scrollToAssessment()" style="margin:0 auto;">
    Start the Assessment <i class="fas fa-arrow-right"></i>
  </button>
  <div class="assess-hero-stats">
    <div class="assess-hero-stat">
      <strong>$100M+</strong>
      <span>Pipeline Generated</span>
    </div>
    <div class="assess-hero-stat">
      <strong>75,000+</strong>
      <span>Outreaches Executed</span>
    </div>
    <div class="assess-hero-stat">
      <strong>$16M+</strong>
      <span>Revenue Increase</span>
    </div>
    <div class="assess-hero-stat">
      <strong>54</strong>
      <span>New Clients Closed</span>
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

  <!-- PROGRESS BAR -->
  <div class="progress-wrap" id="progress-wrap">
    <div class="progress-meta">
      <span class="progress-label" id="progress-label">Company Profile</span>
      <span class="progress-step-count" id="progress-count">Step 1 of 6</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" id="progress-fill" style="width:16.66%"></div>
    </div>
    <div class="progress-steps" id="progress-dots"></div>
  </div>

  <!-- ═══════════════════════════════════════════
       STEP 1 — Company Profile
  ═══════════════════════════════════════════ -->
  <div class="assess-step active" id="step-1">
    <div class="step-header">
      <div class="step-category">Section 1 of 6 — Company Profile</div>
      <h2>Let's start with the basics</h2>
      <p>This helps us calibrate your results to your actual situation.</p>
    </div>

    <div class="field-row">
      <div class="field-group">
        <label class="field-label">First Name <span class="req">*</span></label>
        <input type="text" class="field-input" id="q-first-name" placeholder="Your first name">
      </div>
      <div class="field-group">
        <label class="field-label">Last Name <span class="req">*</span></label>
        <input type="text" class="field-input" id="q-last-name" placeholder="Your last name">
      </div>
    </div>
    <div class="field-row">
      <div class="field-group">
        <label class="field-label">Company Name <span class="req">*</span></label>
        <input type="text" class="field-input" id="q-company" placeholder="Your company">
      </div>
      <div class="field-group">
        <label class="field-label">Your Role <span class="req">*</span></label>
        <input type="text" class="field-input" id="q-role" placeholder="CEO, VP Sales, Founder…">
      </div>
    </div>
    <div class="field-group">
      <label class="field-label">Email <span class="req">*</span></label>
      <input type="email" class="field-input" id="q-email" placeholder="you@company.com">
    </div>

    <div class="question-block" style="margin-top:28px;">
      <div class="question-label"><span>1</span> What is your current annual revenue?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="rs">
          <input type="radio" name="rs" value="10">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Under $1M</div>
            <div class="option-sub">Pre-revenue or early-stage</div>
          </div>
        </label>
        <label class="option-card" data-group="rs">
          <input type="radio" name="rs" value="25">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">$1M – $3M</div>
            <div class="option-sub">Early traction, growing team</div>
          </div>
        </label>
        <label class="option-card" data-group="rs">
          <input type="radio" name="rs" value="60">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">$3M – $10M</div>
            <div class="option-sub">Established, scaling challenges</div>
          </div>
        </label>
        <label class="option-card" data-group="rs">
          <input type="radio" name="rs" value="90">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">$10M – $40M+</div>
            <div class="option-sub">Scale-stage, leadership complexity</div>
          </div>
        </label>
      </div>
    </div>

    <div class="validation-msg" id="val-1">Please fill out all required fields and select your revenue range.</div>
    <div class="step-nav">
      <div></div>
      <button class="btn-next" onclick="nextStep(1)">
        Continue <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       STEP 2 — Pipeline Maturity
  ═══════════════════════════════════════════ -->
  <div class="assess-step" id="step-2">
    <div class="step-header">
      <div class="step-category">Section 2 of 6 — Pipeline Maturity</div>
      <h2>How predictable is your pipeline?</h2>
      <p>Pipeline visibility is often the first signal of infrastructure health.</p>
    </div>

    <div class="question-block">
      <div class="question-label"><span>2</span> How would you describe your current pipeline?</div>
      <div class="options-grid">
        <label class="option-card" data-group="pm">
          <input type="radio" name="pm" value="10">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Inconsistent — feast or famine</div>
            <div class="option-sub">Revenue varies wildly month to month with no real pattern</div>
          </div>
        </label>
        <label class="option-card" data-group="pm">
          <input type="radio" name="pm" value="40">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Somewhat consistent</div>
            <div class="option-sub">Some months are strong but I can't reliably predict the next 90 days</div>
          </div>
        </label>
        <label class="option-card" data-group="pm">
          <input type="radio" name="pm" value="70">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Mostly predictable</div>
            <div class="option-sub">I have a reasonable sense of what's coming but forecasting isn't airtight</div>
          </div>
        </label>
        <label class="option-card" data-group="pm">
          <input type="radio" name="pm" value="90">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Highly predictable</div>
            <div class="option-sub">Strong pipeline visibility and disciplined stage-by-stage forecasting</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>3</span> How do most new clients come in today?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="pipeline-source">
          <input type="radio" name="pipeline-source" value="referral">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Referrals only</div>
          </div>
        </label>
        <label class="option-card" data-group="pipeline-source">
          <input type="radio" name="pipeline-source" value="outbound">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Outbound prospecting</div>
          </div>
        </label>
        <label class="option-card" data-group="pipeline-source">
          <input type="radio" name="pipeline-source" value="inbound">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Inbound / marketing</div>
          </div>
        </label>
        <label class="option-card" data-group="pipeline-source">
          <input type="radio" name="pipeline-source" value="mixed">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Mix of channels</div>
          </div>
        </label>
      </div>
    </div>

    <div class="validation-msg" id="val-2">Please answer both questions before continuing.</div>
    <div class="step-nav">
      <button class="btn-back" onclick="prevStep(2)"><i class="fas fa-arrow-left"></i> Back</button>
      <button class="btn-next" onclick="nextStep(2)">Continue <i class="fas fa-arrow-right"></i></button>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       STEP 3 — Sales Infrastructure
  ═══════════════════════════════════════════ -->
  <div class="assess-step" id="step-3">
    <div class="step-header">
      <div class="step-category">Section 3 of 6 — Sales Infrastructure</div>
      <h2>What's under the hood of your sales operation?</h2>
      <p>Infrastructure gaps are the most common — and most fixable — root cause of inconsistent growth.</p>
    </div>

    <div class="question-block">
      <div class="question-label"><span>4</span> How would you describe your current sales process?</div>
      <div class="options-grid">
        <label class="option-card" data-group="si">
          <input type="radio" name="si" value="10">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">No defined process</div>
            <div class="option-sub">Every deal is handled differently — it's all in my head or relies on individual rep style</div>
          </div>
        </label>
        <label class="option-card" data-group="si">
          <input type="radio" name="si" value="35">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Informal / partially documented</div>
            <div class="option-sub">Some steps are understood but there's no written playbook or enforced methodology</div>
          </div>
        </label>
        <label class="option-card" data-group="si">
          <input type="radio" name="si" value="65">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Documented but inconsistently followed</div>
            <div class="option-sub">A process exists on paper but reps don't consistently follow it</div>
          </div>
        </label>
        <label class="option-card" data-group="si">
          <input type="radio" name="si" value="90">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Fully defined and enforced</div>
            <div class="option-sub">Clear stages, KPIs, and accountability built into CRM and daily rhythm</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>5</span> How is your CRM currently used?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="crm">
          <input type="radio" name="crm" value="none">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">We don't use one</div>
          </div>
        </label>
        <label class="option-card" data-group="crm">
          <input type="radio" name="crm" value="basic">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Basic contact storage only</div>
          </div>
        </label>
        <label class="option-card" data-group="crm">
          <input type="radio" name="crm" value="partial">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Some reps use it, some don't</div>
          </div>
        </label>
        <label class="option-card" data-group="crm">
          <input type="radio" name="crm" value="full">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Full pipeline tracking + reporting</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>6</span> Do you have defined KPIs and rep accountability metrics?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="kpi">
          <input type="radio" name="kpi" value="none">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">No — we track revenue only</div>
          </div>
        </label>
        <label class="option-card" data-group="kpi">
          <input type="radio" name="kpi" value="informal">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Informal targets exist</div>
          </div>
        </label>
        <label class="option-card" data-group="kpi">
          <input type="radio" name="kpi" value="partial">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Some KPIs, inconsistently reviewed</div>
          </div>
        </label>
        <label class="option-card" data-group="kpi">
          <input type="radio" name="kpi" value="full">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Full KPI dashboard, reviewed weekly</div>
          </div>
        </label>
      </div>
    </div>

    <div class="validation-msg" id="val-3">Please answer all questions in this section.</div>
    <div class="step-nav">
      <button class="btn-back" onclick="prevStep(3)"><i class="fas fa-arrow-left"></i> Back</button>
      <button class="btn-next" onclick="nextStep(3)">Continue <i class="fas fa-arrow-right"></i></button>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       STEP 4 — Talent & Team
  ═══════════════════════════════════════════ -->
  <div class="assess-step" id="step-4">
    <div class="step-header">
      <div class="step-category">Section 4 of 6 — Talent &amp; Team</div>
      <h2>Tell us about your sales team</h2>
      <p>Talent density and hiring quality directly determine your execution ceiling.</p>
    </div>

    <div class="question-block">
      <div class="question-label"><span>7</span> How many dedicated salespeople do you currently have?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="team-size">
          <input type="radio" name="team-size" value="0">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">None — it's just me</div>
            <div class="option-sub">Founder-led sales</div>
          </div>
        </label>
        <label class="option-card" data-group="team-size">
          <input type="radio" name="team-size" value="1-3">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">1–3 reps</div>
            <div class="option-sub">Small early team</div>
          </div>
        </label>
        <label class="option-card" data-group="team-size">
          <input type="radio" name="team-size" value="4-10">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">4–10 reps</div>
            <div class="option-sub">Growing team</div>
          </div>
        </label>
        <label class="option-card" data-group="team-size">
          <input type="radio" name="team-size" value="10+">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">10+ reps</div>
            <div class="option-sub">Established team</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>8</span> How would you rate your overall sales hiring success?</div>
      <div class="options-grid">
        <label class="option-card" data-group="tt">
          <input type="radio" name="tt" value="10">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Mostly failed hires</div>
            <div class="option-sub">High turnover, underperforming reps, expensive mistakes</div>
          </div>
        </label>
        <label class="option-card" data-group="tt">
          <input type="radio" name="tt" value="40">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Mixed results</div>
            <div class="option-sub">Some good hires, some bad — inconsistent vetting process</div>
          </div>
        </label>
        <label class="option-card" data-group="tt">
          <input type="radio" name="tt" value="65">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Mostly solid hires</div>
            <div class="option-sub">More hits than misses but ramp time and onboarding could be stronger</div>
          </div>
        </label>
        <label class="option-card" data-group="tt">
          <input type="radio" name="tt" value="90">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Strong hiring track record</div>
            <div class="option-sub">Structured vetting, fast ramp, and high retention</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>9</span> Are you currently trying to hire salespeople or planning to in the next 90 days?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="hiring-flag">
          <input type="radio" name="hiring-flag" value="yes-now">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Yes — actively hiring now</div>
          </div>
        </label>
        <label class="option-card" data-group="hiring-flag">
          <input type="radio" name="hiring-flag" value="yes-soon">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Yes — planning in next 90 days</div>
          </div>
        </label>
        <label class="option-card" data-group="hiring-flag">
          <input type="radio" name="hiring-flag" value="maybe">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Maybe — depends on results</div>
          </div>
        </label>
        <label class="option-card" data-group="hiring-flag">
          <input type="radio" name="hiring-flag" value="no">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">No — not right now</div>
          </div>
        </label>
      </div>
    </div>

    <div class="validation-msg" id="val-4">Please answer all questions in this section.</div>
    <div class="step-nav">
      <button class="btn-back" onclick="prevStep(4)"><i class="fas fa-arrow-left"></i> Back</button>
      <button class="btn-next" onclick="nextStep(4)">Continue <i class="fas fa-arrow-right"></i></button>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       STEP 5 — Leadership & Execution
  ═══════════════════════════════════════════ -->
  <div class="assess-step" id="step-5">
    <div class="step-header">
      <div class="step-category">Section 5 of 6 — Leadership &amp; Execution</div>
      <h2>Who owns revenue in your business?</h2>
      <p>Leadership structure is the single biggest driver of forecast accuracy and execution quality.</p>
    </div>

    <div class="question-block">
      <div class="question-label"><span>10</span> Who currently leads your sales effort?</div>
      <div class="options-grid">
        <label class="option-card" data-group="le">
          <input type="radio" name="le" value="15">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Founder / CEO — it's mostly me</div>
            <div class="option-sub">Revenue depends on my personal relationships and involvement</div>
          </div>
        </label>
        <label class="option-card" data-group="le">
          <input type="radio" name="le" value="40">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Shared between founders and a few reps</div>
            <div class="option-sub">No single owner — accountability is distributed and fuzzy</div>
          </div>
        </label>
        <label class="option-card" data-group="le">
          <input type="radio" name="le" value="65">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Sales manager or team lead</div>
            <div class="option-sub">Someone manages the team but lacks VP/CRO-level strategic authority</div>
          </div>
        </label>
        <label class="option-card" data-group="le">
          <input type="radio" name="le" value="90">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">VP of Sales or CRO</div>
            <div class="option-sub">Dedicated revenue executive with full ownership of strategy and execution</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>11</span> How often does your team meet for structured sales reviews?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="cadence">
          <input type="radio" name="cadence" value="never">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Rarely or never</div>
          </div>
        </label>
        <label class="option-card" data-group="cadence">
          <input type="radio" name="cadence" value="monthly">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Monthly</div>
          </div>
        </label>
        <label class="option-card" data-group="cadence">
          <input type="radio" name="cadence" value="weekly">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Weekly</div>
          </div>
        </label>
        <label class="option-card" data-group="cadence">
          <input type="radio" name="cadence" value="daily">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Daily / multiple times a week</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>12</span> Do you feel your team is operating at full capacity or are bandwidth constraints limiting growth?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="bandwidth-flag">
          <input type="radio" name="bandwidth-flag" value="yes-major">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Yes — major bandwidth constraint</div>
            <div class="option-sub">We need execution support urgently</div>
          </div>
        </label>
        <label class="option-card" data-group="bandwidth-flag">
          <input type="radio" name="bandwidth-flag" value="yes-some">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Somewhat — stretched thin</div>
            <div class="option-sub">We're managing but it's not sustainable</div>
          </div>
        </label>
        <label class="option-card" data-group="bandwidth-flag">
          <input type="radio" name="bandwidth-flag" value="no">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">No — capacity isn't the issue</div>
            <div class="option-sub">The issue is quality, not volume</div>
          </div>
        </label>
        <label class="option-card" data-group="bandwidth-flag">
          <input type="radio" name="bandwidth-flag" value="unsure">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Not sure — hard to tell</div>
          </div>
        </label>
      </div>
    </div>

    <div class="validation-msg" id="val-5">Please answer all questions in this section.</div>
    <div class="step-nav">
      <button class="btn-back" onclick="prevStep(5)"><i class="fas fa-arrow-left"></i> Back</button>
      <button class="btn-next" onclick="nextStep(5)">Continue <i class="fas fa-arrow-right"></i></button>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       STEP 6 — Goals
  ═══════════════════════════════════════════ -->
  <div class="assess-step" id="step-6">
    <div class="step-header">
      <div class="step-category">Section 6 of 6 — Goals &amp; Priorities</div>
      <h2>What does success look like for you?</h2>
      <p>The last step — tell us what you're trying to fix and we'll match you to the right path.</p>
    </div>

    <div class="question-block">
      <div class="question-label"><span>13</span> What is your primary growth goal over the next 12 months?</div>
      <div class="options-grid">
        <label class="option-card" data-group="goal">
          <input type="radio" name="goal" value="pipeline">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Build a reliable, predictable pipeline</div>
            <div class="option-sub">Stop relying on referrals and word of mouth</div>
          </div>
        </label>
        <label class="option-card" data-group="goal">
          <input type="radio" name="goal" value="system">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Install a proper sales operating system</div>
            <div class="option-sub">Process, CRM, KPIs, forecasting, accountability</div>
          </div>
        </label>
        <label class="option-card" data-group="goal">
          <input type="radio" name="goal" value="team">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Build and scale the right sales team</div>
            <div class="option-sub">Hire better, ramp faster, retain longer</div>
          </div>
        </label>
        <label class="option-card" data-group="goal">
          <input type="radio" name="goal" value="leadership">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Install revenue leadership</div>
            <div class="option-sub">Someone who owns outcomes, not just reports on them</div>
          </div>
        </label>
        <label class="option-card" data-group="goal">
          <input type="radio" name="goal" value="execution">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Outsource or augment execution</div>
            <div class="option-sub">Done-for-you sales motion without building everything internally</div>
          </div>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>14</span> What is your biggest obstacle to growth right now? <em style="color:rgba(255,255,255,0.3);font-weight:400;font-style:normal;">(select all that apply)</em></div>
      <div class="checkbox-grid">
        <label class="checkbox-card">
          <input type="checkbox" name="obstacles" value="no-process">
          <div class="checkbox-box"></div>
          <span class="checkbox-text">No repeatable sales process or playbook</span>
        </label>
        <label class="checkbox-card">
          <input type="checkbox" name="obstacles" value="bad-hires">
          <div class="checkbox-box"></div>
          <span class="checkbox-text">Failed or underperforming sales hires</span>
        </label>
        <label class="checkbox-card">
          <input type="checkbox" name="obstacles" value="founder-dep">
          <div class="checkbox-box"></div>
          <span class="checkbox-text">Revenue depends too heavily on me (founder dependency)</span>
        </label>
        <label class="checkbox-card">
          <input type="checkbox" name="obstacles" value="no-pipeline">
          <div class="checkbox-box"></div>
          <span class="checkbox-text">Inconsistent pipeline — can't forecast revenue</span>
        </label>
        <label class="checkbox-card">
          <input type="checkbox" name="obstacles" value="no-leadership">
          <div class="checkbox-box"></div>
          <span class="checkbox-text">No dedicated sales leadership or accountability structure</span>
        </label>
        <label class="checkbox-card">
          <input type="checkbox" name="obstacles" value="bandwidth">
          <div class="checkbox-box"></div>
          <span class="checkbox-text">Not enough bandwidth to execute consistently</span>
        </label>
        <label class="checkbox-card">
          <input type="checkbox" name="obstacles" value="crm-mess">
          <div class="checkbox-box"></div>
          <span class="checkbox-text">CRM and reporting not set up or being used</span>
        </label>
      </div>
    </div>

    <div class="question-block">
      <div class="question-label"><span>15</span> How quickly are you looking to make a change?</div>
      <div class="options-grid cols-2">
        <label class="option-card" data-group="urgency">
          <input type="radio" name="urgency" value="now">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Now — this is urgent</div>
          </div>
        </label>
        <label class="option-card" data-group="urgency">
          <input type="radio" name="urgency" value="90days">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Within the next 90 days</div>
          </div>
        </label>
        <label class="option-card" data-group="urgency">
          <input type="radio" name="urgency" value="planning">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Planning for next quarter</div>
          </div>
        </label>
        <label class="option-card" data-group="urgency">
          <input type="radio" name="urgency" value="exploring">
          <div class="option-radio"></div>
          <div class="option-text">
            <div class="option-title">Exploring options right now</div>
          </div>
        </label>
      </div>
    </div>

    <div class="validation-msg" id="val-6">Please answer all required questions.</div>
    <div class="step-nav">
      <button class="btn-back" onclick="prevStep(6)"><i class="fas fa-arrow-left"></i> Back</button>
      <button class="btn-submit" onclick="submitAssessment()">
        <i class="fas fa-chart-bar"></i> Get My Results
      </button>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       RESULTS PANEL
  ═══════════════════════════════════════════ -->
  <div id="results-panel">

    <!-- Score ring -->
    <div class="results-score-ring">
      <div class="score-ring-wrap">
        <svg class="score-ring-svg" width="160" height="160" viewBox="0 0 160 160">
          <circle class="score-ring-bg" cx="80" cy="80" r="70"/>
          <circle class="score-ring-fill" id="score-ring-fill" cx="80" cy="80" r="70"/>
        </svg>
        <div class="score-ring-inner">
          <div class="score-number" id="score-display">0</div>
          <div class="score-label-sm">out of 100</div>
        </div>
      </div>
      <div class="results-stage-badge" id="results-badge"><i class="fas fa-map-marker-alt"></i> Calculating…</div>
      <div class="results-stage-title" id="results-stage-title">–</div>
      <div class="results-stage-sub" id="results-stage-sub">–</div>
    </div>

    <!-- Score breakdown -->
    <div class="score-breakdown">
      <h3>Score Breakdown by Category</h3>
      <div class="score-bar-row">
        <div class="score-bar-label">Revenue Stage</div>
        <div class="score-bar-track"><div class="score-bar-fill" id="bar-rs" style="width:0%"></div></div>
        <div class="score-bar-val" id="val-rs">–</div>
      </div>
      <div class="score-bar-row">
        <div class="score-bar-label">Pipeline Maturity</div>
        <div class="score-bar-track"><div class="score-bar-fill" id="bar-pm" style="width:0%"></div></div>
        <div class="score-bar-val" id="val-pm">–</div>
      </div>
      <div class="score-bar-row">
        <div class="score-bar-label">Sales Infrastructure</div>
        <div class="score-bar-track"><div class="score-bar-fill" id="bar-si" style="width:0%"></div></div>
        <div class="score-bar-val" id="val-si">–</div>
      </div>
      <div class="score-bar-row">
        <div class="score-bar-label">Talent &amp; Team</div>
        <div class="score-bar-track"><div class="score-bar-fill" id="bar-tt" style="width:0%"></div></div>
        <div class="score-bar-val" id="val-tt">–</div>
      </div>
      <div class="score-bar-row">
        <div class="score-bar-label">Leadership &amp; Execution</div>
        <div class="score-bar-track"><div class="score-bar-fill" id="bar-le" style="width:0%"></div></div>
        <div class="score-bar-val" id="val-le">–</div>
      </div>
    </div>

    <!-- Diagnosis -->
    <div class="results-section">
      <div class="results-section-label">Your Diagnosis</div>
      <h3 id="results-diagnosis-title">–</h3>
      <p id="results-diagnosis-body">–</p>
    </div>

    <!-- Key Gaps -->
    <div class="results-section">
      <div class="results-section-label">Key Gaps Identified</div>
      <ul class="gaps-list" id="results-gaps"></ul>
    </div>

    <!-- Recommended Path -->
    <div class="results-section">
      <div class="results-section-label">Your Recommended Growth Path</div>
      <h3 style="margin-bottom:6px;" id="results-path-title">–</h3>
      <p style="margin-bottom:16px;" id="results-path-body">–</p>
      <div class="rec-path-grid" id="results-rec-cards"></div>
    </div>

    <!-- CTA block -->
    <div class="results-cta-block">
      <h2>Ready to fix this?</h2>
      <p id="results-cta-body">Book a strategy call and we'll walk through your results together and map the exact path forward.</p>
      <div class="results-cta-btns">
        <a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session" class="btn-next" style="text-decoration:none;">
          <i class="fas fa-calendar-check"></i> Book a Strategy Call
        </a>
        <a href="/solutions" class="btn-outline-gold">
          Explore Solutions <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <div style="text-align:center;">
      <button class="btn-restart" onclick="restartAssessment()">
        <i class="fas fa-redo"></i> Retake the Assessment
      </button>
    </div>

  </div>
  <!-- /results-panel -->

</div>
<!-- /assess-shell -->

<!-- PROOF STRIP -->
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
// ─────────────────────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────────────────────
let currentStep = 1;
const totalSteps = 6;
const stepLabels = [
  'Company Profile',
  'Pipeline Maturity',
  'Sales Infrastructure',
  'Talent & Team',
  'Leadership & Execution',
  'Goals & Priorities'
];

// ─────────────────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildProgressDots();
  updateProgress(1);
  initOptionCards();
  initCheckboxCards();
});

function scrollToAssessment() {
  document.getElementById('assessment-anchor').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─────────────────────────────────────────────────────────────
//  PROGRESS
// ─────────────────────────────────────────────────────────────
function buildProgressDots() {
  const container = document.getElementById('progress-dots');
  container.innerHTML = '';
  for (let i = 1; i <= totalSteps; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    dot.id = 'dot-' + i;
    container.appendChild(dot);
  }
}

function updateProgress(step) {
  const pct = (step / totalSteps) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = stepLabels[step - 1];
  document.getElementById('progress-count').textContent = 'Step ' + step + ' of ' + totalSteps;
  for (let i = 1; i <= totalSteps; i++) {
    const dot = document.getElementById('dot-' + i);
    dot.className = 'progress-dot' + (i < step ? ' done' : i === step ? ' active' : '');
  }
}

// ─────────────────────────────────────────────────────────────
//  OPTION CARDS (radio)
//  Listen on the <input> change event, not the <label> click,
//  to avoid the double-fire that occurs when a label wraps an input.
// ─────────────────────────────────────────────────────────────
function initOptionCards() {
  document.querySelectorAll('.option-card input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const group = radio.name;
      // Remove selected from all cards in this group
      document.querySelectorAll('.option-card input[name="' + group + '"]').forEach(r => {
        r.closest('.option-card').classList.remove('selected');
      });
      // Add selected to the chosen card
      radio.closest('.option-card').classList.add('selected');
    });
  });

  // Also handle clicks on the card body (anywhere that isn't the input)
  // to ensure the radio fires correctly in all browsers
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const radio = card.querySelector('input[type="radio"]');
      if (!radio) return;
      // Don't double-process if the click was directly on the input
      if (e.target === radio) return;
      radio.checked = true;
      radio.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
}

// ─────────────────────────────────────────────────────────────
//  CHECKBOX CARDS
//  Same fix: listen on input change, not label click.
// ─────────────────────────────────────────────────────────────
function initCheckboxCards() {
  document.querySelectorAll('.checkbox-card input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('.checkbox-card').classList.toggle('selected', cb.checked);
    });
  });

  document.querySelectorAll('.checkbox-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const cb = card.querySelector('input[type="checkbox"]');
      if (!cb) return;
      if (e.target === cb) return;
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
}

// ─────────────────────────────────────────────────────────────
//  VALIDATION
// ─────────────────────────────────────────────────────────────
function validateStep(step) {
  if (step === 1) {
    const fn = document.getElementById('q-first-name').value.trim();
    const ln = document.getElementById('q-last-name').value.trim();
    const co = document.getElementById('q-company').value.trim();
    const ro = document.getElementById('q-role').value.trim();
    const em = document.getElementById('q-email').value.trim();
    const rs = document.querySelector('input[name="rs"]:checked');
    if (!fn || !ln || !co || !ro || !em || !rs) {
      document.getElementById('val-1').classList.add('show');
      return false;
    }
    document.getElementById('val-1').classList.remove('show');
    return true;
  }
  if (step === 2) {
    const pm = document.querySelector('input[name="pm"]:checked');
    const ps = document.querySelector('input[name="pipeline-source"]:checked');
    if (!pm || !ps) { document.getElementById('val-2').classList.add('show'); return false; }
    document.getElementById('val-2').classList.remove('show');
    return true;
  }
  if (step === 3) {
    const si = document.querySelector('input[name="si"]:checked');
    const crm = document.querySelector('input[name="crm"]:checked');
    const kpi = document.querySelector('input[name="kpi"]:checked');
    if (!si || !crm || !kpi) { document.getElementById('val-3').classList.add('show'); return false; }
    document.getElementById('val-3').classList.remove('show');
    return true;
  }
  if (step === 4) {
    const ts = document.querySelector('input[name="team-size"]:checked');
    const tt = document.querySelector('input[name="tt"]:checked');
    const hf = document.querySelector('input[name="hiring-flag"]:checked');
    if (!ts || !tt || !hf) { document.getElementById('val-4').classList.add('show'); return false; }
    document.getElementById('val-4').classList.remove('show');
    return true;
  }
  if (step === 5) {
    const le = document.querySelector('input[name="le"]:checked');
    const ca = document.querySelector('input[name="cadence"]:checked');
    const bw = document.querySelector('input[name="bandwidth-flag"]:checked');
    if (!le || !ca || !bw) { document.getElementById('val-5').classList.add('show'); return false; }
    document.getElementById('val-5').classList.remove('show');
    return true;
  }
  if (step === 6) {
    const goal = document.querySelector('input[name="goal"]:checked');
    const urg  = document.querySelector('input[name="urgency"]:checked');
    if (!goal || !urg) { document.getElementById('val-6').classList.add('show'); return false; }
    document.getElementById('val-6').classList.remove('show');
    return true;
  }
  return true;
}

// ─────────────────────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────────────────────
function nextStep(from) {
  if (!validateStep(from)) return;
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from + 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
  window.scrollTo({ top: document.getElementById('assessment-anchor').offsetTop - 80, behavior: 'smooth' });
}

function prevStep(from) {
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from - 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
  window.scrollTo({ top: document.getElementById('assessment-anchor').offsetTop - 80, behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────
//  SCORING ENGINE
// ─────────────────────────────────────────────────────────────
function getScore(name) {
  const el = document.querySelector('input[name="' + name + '"]:checked');
  return el ? parseInt(el.value) || 0 : 0;
}
function getVal(name) {
  const el = document.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : '';
}
function getChecked(name) {
  return Array.from(document.querySelectorAll('input[name="' + name + '"]:checked')).map(el => el.value);
}

function calculateScore() {
  const rs = getScore('rs');
  const pm = getScore('pm');
  const si = getScore('si');
  const tt = getScore('tt');
  const le = getScore('le');

  const weighted = (rs * 0.15) + (pm * 0.20) + (si * 0.25) + (tt * 0.20) + (le * 0.20);
  const final = Math.round(weighted);

  // Override flags
  const hiringFlag = getVal('hiring-flag');
  const bandwidthFlag = getVal('bandwidth-flag');
  const obstacles = getChecked('obstacles');
  const goal = getVal('goal');

  const hiringOverride = ['yes-now', 'yes-soon'].includes(hiringFlag) || obstacles.includes('bad-hires');
  const bandwidthOverride = ['yes-major', 'yes-some'].includes(bandwidthFlag) || obstacles.includes('bandwidth');

  return { final, rs, pm, si, tt, le, hiringOverride, bandwidthOverride, goal, obstacles };
}

// ─────────────────────────────────────────────────────────────
//  OUTCOME DEFINITIONS
// ─────────────────────────────────────────────────────────────
const outcomes = {
  stage0: {
    badge: 'Stage: Founder-Led / No Infrastructure',
    title: 'Revenue is entirely dependent on you',
    sub: 'No system exists beneath the sales effort. Growth means working more hours  -  not smarter infrastructure.',
    diagTitle: 'Founder Dependency Bottleneck',
    diagBody: 'Your revenue engine is running on personal relationships and raw hustle. That is not a scalable system  -  it is a ceiling. Every dollar of growth requires more of your time, and the business cannot operate, hire into, or forecast without you at the center of every deal. The fix is not more outreach. It is infrastructure.',
    gaps: [
      'No repeatable sales process or playbook  -  every deal is ad hoc',
      'No CRM discipline or pipeline visibility',
      'ICP and messaging are undefined or inconsistent',
      'Cannot delegate or transition any part of the sales motion',
      'Revenue stalls when your capacity does'
    ],
    pathTitle: 'Build the infrastructure first.',
    pathBody: 'Before hiring, before scaling outreach  -  you need a system. MetaGrowth will architect the process, define the ICP, configure the CRM, build the messaging, and install the KPI framework that lets you grow beyond yourself.',
    recs: [
      { icon: 'fa-rocket', name: 'HyperLaunch Sales System', desc: '90-day infrastructure build  -  ICP, process, CRM, messaging, and KPIs installed end-to-end', link: '/solutions/hyperlaunch', primary: true },
      { icon: 'fa-crosshairs', name: 'Precision Engagements', desc: 'Focused intervention to solve a specific bottleneck fast  -  playbook, scripts, or prospecting cadence', link: '/solutions/precision-engagements' },
      { icon: 'fa-flask', name: 'CEO Growth Lab', desc: 'Strategic clarity, peer network, and quarterly deep dives for founders building toward scale', link: '/solutions/ceo-growth-lab' }
    ],
    ctaBody: "The fastest path forward is a 90-day infrastructure build. Book a call and we'll walk through exactly what needs to be installed first."
  },
  stage1: {
    badge: 'Stage: Early Team / Inconsistent Execution',
    title: "The team exists. The system doesn't.",
    sub: 'You have reps but performance is uneven, accountability is loose, and forecasting is more hope than data.',
    diagTitle: 'Execution Without Infrastructure',
    diagBody: "You've made the first hires, but the system beneath them is not strong enough to produce consistent output. Some months are good. Others are not. And you cannot pinpoint why. The reps are not the problem - the missing operating system is. Without defined process, enforced CRM habits, and a structured accountability cadence, performance will always be uneven.",
    gaps: [
      'No enforced sales process  -  reps operate by instinct',
      'Pipeline stages are unclear or not consistently updated',
      'Ramp time is too slow and early turnover is high',
      'No defined accountability rhythm or performance metrics',
      'Forecasting is guesswork at best'
    ],
    pathTitle: 'Install the operating system your team needs to execute.',
    pathBody: 'The solution is not more reps. It is a structured Sales OS  -  clear stages, KPIs, weekly rhythm, and a coaching framework that enforces performance. MetaGrowth installs this system and runs it with you until it holds on its own.',
    recs: [
      { icon: 'fa-chart-bar', name: 'Sales Growth Lab', desc: 'Sales OS installation, accountability rhythm, weekly advisory, and monthly traction reporting', link: '/solutions/sales-growth-lab', primary: true },
      { icon: 'fa-rocket', name: 'HyperLaunch Sales System', desc: 'Full infrastructure build  -  process, CRM, messaging, forecasting framework, and KPI dashboards', link: '/solutions/hyperlaunch' },
      { icon: 'fa-search', name: 'Recruiting Services', desc: 'Upgrade your talent density with structured vetting and deep behavioral assessment', link: '/solutions/recruiting' },
      { icon: 'fa-percentage', name: 'Commission-Only Infrastructure', desc: 'Add 1099 reps with zero base risk  -  full systems, training, and oversight included', link: '/solutions/commission-only' },
      { icon: 'fa-cogs', name: 'Managed Sales Pods', desc: 'A fully managed, embedded sales team that executes inside your business', link: '/solutions/managed-sales-pods' }
    ],
    ctaBody: "Inconsistent performance is a system problem, not a people problem. Let's walk through your specific situation on a strategy call."
  },
  stage2: {
    badge: 'Stage: System Gaps / Underperformance',
    title: 'Real revenue, but the cracks are showing.',
    sub: 'Growth is real but infrastructure is not keeping pace. System gaps are creating execution drag at every level.',
    diagTitle: 'Infrastructure Falling Behind Growth',
    diagBody: 'You have revenue and a real team, but the infrastructure beneath them is not scaling with the business. CRM adoption is spotty. Coaching is reactive. Forecasting is unreliable. New hires take too long to ramp. The system that got you here is not the system that will get you to the next stage  -  and the longer you operate without upgrading it, the more drag it creates.',
    gaps: [
      'CRM not consistently used or properly configured for forecasting',
      'Coaching is reactive, not systematic',
      'New rep ramp time is too long and inconsistent',
      'No reliable forecast discipline or pipeline stage enforcement',
      'Leadership bandwidth is stretched across execution and strategy'
    ],
    pathTitle: 'Upgrade the infrastructure. Stabilize execution.',
    pathBody: 'You need a full revenue operating system  -  not advice, not another strategy deck. MetaGrowth deploys the system, enforces the cadence, and installs the leadership rhythm that turns your existing team into a consistent revenue machine.',
    recs: [
      { icon: 'fa-cogs', name: 'Managed Sales Pods', desc: 'Full-service execution  -  recruiting, onboarding, coaching, KPI enforcement, and weekly oversight', link: '/solutions/managed-sales-pods', primary: true },
      { icon: 'fa-percentage', name: 'Commission-Only Infrastructure', desc: 'Scale without fixed overhead  -  1099 rep infrastructure with full systems, training, and CRM enforcement', link: '/solutions/commission-only' },
      { icon: 'fa-chart-bar', name: 'Sales Growth Lab', desc: 'Structured accountability and Sales OS for your leadership layer', link: '/solutions/sales-growth-lab' },
      { icon: 'fa-handshake', name: 'Rev Share Only Program', desc: 'Zero upfront cost  -  we embed execution and only get paid when you close revenue', link: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' }
    ],
    ctaBody: "The gap between where you are and where you need to be is an infrastructure problem. Let's diagnose it together on a strategy call."
  },
  stage3: {
    badge: 'Stage: Scaling / Leadership Gap',
    title: 'At scale  -  but leadership complexity is limiting upside.',
    sub: "The revenue is there. The execution is not keeping pace because there's no one truly owning it at the revenue leadership level.",
    diagTitle: 'Leadership Ceiling at Scale',
    diagBody: 'You have built something real. But at this stage, the constraint is not tactics  -  it is revenue leadership. Someone needs to own forecast accuracy, drive the performance culture, make the tough talent decisions, and hold the entire revenue function accountable. That gap at the top cascades down through the entire team and shows up in missed forecasts, inconsistent execution, and leadership turnover.',
    gaps: [
      'No dedicated revenue executive who truly owns outcomes',
      'Forecast accuracy degrades as deal volume grows',
      'Sales leadership is managing activity, not leading strategy',
      'VP or CRO turnover is disrupting execution rhythm',
      'Team performance is uneven without clear ownership at the top'
    ],
    pathTitle: 'Install executive-level revenue ownership.',
    pathBody: 'The highest-leverage move at your stage is not more reps or more technology  -  it is getting the right revenue leadership in place. MetaGrowth provides that leadership without the full-time C-suite overhead.',
    recs: [
      { icon: 'fa-crown', name: 'Fractional CRO', desc: 'Executive revenue leadership  -  strategy, accountability, hiring roadmap, and performance management without full-time cost', link: '/solutions/fractional-cro', primary: true },
      { icon: 'fa-cogs', name: 'Managed Sales Pods', desc: 'Done-for-you execution layer with full oversight, KPI tracking, and weekly performance management', link: '/solutions/managed-sales-pods' },
      { icon: 'fa-flask', name: 'CEO Growth Lab', desc: 'Strategic peer network and quarterly deep-dive sessions for CEOs navigating scale-stage complexity', link: '/solutions/ceo-growth-lab' },
      { icon: 'fa-handshake', name: 'Rev Share Only Program', desc: 'Full sales team embedded at scale  -  performance-only model with zero upfront investment', link: 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session' }
    ],
    ctaBody: "At your stage, the right revenue leadership changes everything. Let's talk about what that looks like for your business."
  }
};

// Override-specific content
const recruitingRec = { icon: 'fa-search', name: 'Recruiting Services', desc: 'Structured screening, deep vetting, and behavioral assessment to identify producers  -  not just polished interviewees', link: '/solutions/recruiting', primary: true };
const podsRec = { icon: 'fa-cogs', name: 'Managed Sales Pods', desc: 'A fully managed, embedded sales team  -  MetaGrowth recruits, onboards, coaches, and manages the entire function', link: '/solutions/managed-sales-pods', primary: true };
const commissionRec = { icon: 'fa-percentage', name: 'Commission-Only Infrastructure', desc: 'Scale without fixed salary overhead  -  unlimited 1099 rep infrastructure with full systems and training', link: '/solutions/commission-only' };

// ─────────────────────────────────────────────────────────────
//  SUBMIT & RENDER RESULTS
// ─────────────────────────────────────────────────────────────
function submitAssessment() {
  if (!validateStep(6)) return;

  const { final, rs, pm, si, tt, le, hiringOverride, bandwidthOverride, goal, obstacles } = calculateScore();

  // Determine outcome stage
  let outcome;
  if (final <= 30)      outcome = { ...outcomes.stage0 };
  else if (final <= 50) outcome = { ...outcomes.stage1 };
  else if (final <= 70) outcome = { ...outcomes.stage2 };
  else                  outcome = { ...outcomes.stage3 };

  // Deep copy recs so we can mutate
  outcome.recs = outcome.recs.map(r => ({ ...r }));

  // Apply overrides  -  prepend override rec if not already primary
  if (hiringOverride) {
    if (!outcome.recs.find(r => r.name === recruitingRec.name)) {
      outcome.recs.unshift({ ...recruitingRec });
    } else {
      outcome.recs.find(r => r.name === recruitingRec.name).primary = true;
    }
    // Clear other primaries
    outcome.recs.forEach((r, i) => { if (i > 0) r.primary = false; });
  }
  if (bandwidthOverride && !hiringOverride) {
    if (!outcome.recs.find(r => r.name === podsRec.name)) {
      outcome.recs.unshift({ ...podsRec });
    } else {
      outcome.recs.find(r => r.name === podsRec.name).primary = true;
    }
    outcome.recs.forEach((r, i) => { if (i > 0) r.primary = false; });
  }

  // Hide form, show results
  document.getElementById('progress-wrap').style.display = 'none';
  for (let i = 1; i <= 6; i++) document.getElementById('step-' + i).style.display = 'none';
  const panel = document.getElementById('results-panel');
  panel.classList.add('show');

  window.scrollTo({ top: document.getElementById('assessment-anchor').offsetTop - 80, behavior: 'smooth' });

  // Animate score ring
  const circumference = 2 * Math.PI * 70; // 439.8
  const offset = circumference - (final / 100) * circumference;
  setTimeout(() => {
    document.getElementById('score-ring-fill').style.strokeDashoffset = offset;
  }, 200);

  // Animate score counter
  animateCount('score-display', 0, final, 1000);

  // Populate header
  document.getElementById('results-badge').innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + outcome.badge;
  document.getElementById('results-stage-title').textContent = outcome.title;
  document.getElementById('results-stage-sub').textContent = outcome.sub;

  // Score bars
  animateBar('bar-rs', 'val-rs', rs);
  animateBar('bar-pm', 'val-pm', pm);
  animateBar('bar-si', 'val-si', si);
  animateBar('bar-tt', 'val-tt', tt);
  animateBar('bar-le', 'val-le', le);

  // Diagnosis
  document.getElementById('results-diagnosis-title').textContent = outcome.diagTitle;
  document.getElementById('results-diagnosis-body').textContent = outcome.diagBody;

  // Gaps
  const gapsList = document.getElementById('results-gaps');
  gapsList.innerHTML = '';
  outcome.gaps.forEach(gap => {
    const li = document.createElement('li');
    li.textContent = gap;
    gapsList.appendChild(li);
  });

  // Recommended path
  document.getElementById('results-path-title').textContent = outcome.pathTitle;
  document.getElementById('results-path-body').textContent = outcome.pathBody;

  const recContainer = document.getElementById('results-rec-cards');
  recContainer.innerHTML = '';
  outcome.recs.forEach(rec => {
    const a = document.createElement('a');
    a.href = rec.link;
    a.className = 'rec-path-card';
    a.innerHTML =
      '<div class="rec-path-icon"><i class="fas ' + rec.icon + '"></i></div>' +
      '<div class="rec-path-body">' +
        '<div class="rec-path-name">' + rec.name + (rec.primary ? '<span class="rec-primary-badge">Best Fit</span>' : '') + '</div>' +
        '<div class="rec-path-desc">' + rec.desc + '</div>' +
      '</div>' +
      '<div class="rec-path-arrow"><i class="fas fa-arrow-right"></i></div>';
    recContainer.appendChild(a);
  });

  // CTA
  document.getElementById('results-cta-body').textContent = outcome.ctaBody;
}

// ─────────────────────────────────────────────────────────────
//  ANIMATION HELPERS
// ─────────────────────────────────────────────────────────────
function animateCount(id, from, to, duration) {
  const el = document.getElementById(id);
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * ease);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function animateBar(barId, valId, score) {
  setTimeout(() => {
    document.getElementById(barId).style.width = score + '%';
    document.getElementById(valId).textContent = score;
  }, 300);
}

// ─────────────────────────────────────────────────────────────
//  RESTART
// ─────────────────────────────────────────────────────────────
function restartAssessment() {
  // Reset all radio/checkbox
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.checkbox-card').forEach(c => c.classList.remove('selected'));

  // Reset text inputs
  ['q-first-name','q-last-name','q-company','q-role','q-email'].forEach(id => {
    document.getElementById(id).value = '';
  });

  // Show form, hide results
  document.getElementById('results-panel').classList.remove('show');
  document.getElementById('progress-wrap').style.display = 'block';
  for (let i = 1; i <= 6; i++) {
    const step = document.getElementById('step-' + i);
    step.style.display = '';
    step.classList.remove('active');
  }
  document.getElementById('step-1').classList.add('active');
  currentStep = 1;
  updateProgress(1);

  window.scrollTo({ top: document.getElementById('assessment-anchor').offsetTop - 80, behavior: 'smooth' });
}

</script>
</body>
</html>
`
