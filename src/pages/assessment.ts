import { nav, footer, globalStyles } from '../layout'

export const assessmentPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Revenue Engine Assessment | MetaGrowth Ventures</title>
  <meta name="description" content="Diagnose your revenue engine in 3 minutes. Identify your biggest growth constraint and get a clear path to scale.">
  <link rel="canonical" href="https://metagrowth.ventures/assessment">
  <!-- Open Graph / LinkedIn / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://metagrowth.ventures/assessment">
  <meta property="og:site_name" content="MetaGrowth Ventures">
  <meta property="og:title" content="Revenue Engine Assessment | MetaGrowth Ventures">
  <meta property="og:description" content="Diagnose your revenue engine in 3 minutes. Identify your biggest growth constraint and get a clear path to scale.">
  <meta property="og:image" content="https://metagrowth.ventures/static/og-image.webp">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="MetaGrowth Ventures — Revenue Infrastructure & Executive Growth Firm">
  <meta property="og:locale" content="en_US">
  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@metagrowth">
  <meta name="twitter:title" content="Revenue Engine Assessment | MetaGrowth Ventures">
  <meta name="twitter:description" content="Diagnose your revenue engine in 3 minutes. Identify your biggest growth constraint and get a clear path to scale.">
  <meta name="twitter:image" content="https://metagrowth.ventures/static/og-image.webp">
  <link rel="icon" type="image/png" href="/static/logo.png">
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
      page_title: 'Revenue Engine Assessment',
      page_location: 'https://metagrowth.ventures/assessment',
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
  <style>

    /* -- Assessment-specific overrides -- */
    body { background: var(--navy); color: var(--white); padding-top: 68px; }

    /* -- Hero -- */
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

    /* -- What you'll get strip -- */
    .assess-benefits {
      background: var(--navy-mid);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 32px 24px;
    }
    .assess-benefits-inner {
      max-width: 1100px; margin: 0 auto;
      display: flex; align-items: center; justify-content: center;
      gap: 20px 40px; flex-wrap: wrap;
    }
    .assess-benefit {
      display: flex; align-items: center; gap: 10px;
      font-size: 0.88rem; color: rgba(255,255,255,0.7); font-weight: 500;
    }
    .assess-benefit i { color: var(--green); font-size: 0.9rem; }
    @media (max-width: 860px) {
      .assess-benefits-inner { gap: 16px 28px; max-width: 700px; }
      .assess-benefit { font-size: 0.82rem; }
    }
    @media (max-width: 560px) {
      .assess-benefits-inner { gap: 12px 20px; flex-direction: column; align-items: flex-start; max-width: 320px; }
    }

    /* -- What You'll Receive -- */
    .assess-wyr {
      background: rgba(255,255,255,0.03);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 40px 24px;
    }
    .assess-wyr-inner {
      max-width: 820px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr auto 1fr; gap: 40px; align-items: start;
    }
    .assess-wyr-heading {
      font-size: 0.82rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--green);
      display: flex; align-items: center; gap: 8px;
      margin-bottom: 18px;
    }
    .assess-wyr-list { display: flex; flex-direction: column; gap: 11px; list-style: none; padding: 0; margin: 0; }
    .assess-wyr-list li { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: rgba(255,255,255,0.75); }
    .assess-wyr-list li i { font-size: 0.75rem; color: var(--green); flex-shrink: 0; }
    .assess-wyr-divider { width: 1px; background: rgba(255,255,255,0.08); align-self: stretch; }
    .assess-wyr-time { margin-top: 20px; font-size: 0.82rem; color: rgba(255,255,255,0.45); display: flex; align-items: center; gap: 8px; }
    .assess-wyr-time i { color: var(--green); }
    .assess-wyr-time strong { color: rgba(255,255,255,0.7); }
    @media (max-width: 640px) {
      .assess-wyr-inner { grid-template-columns: 1fr; gap: 28px; }
      .assess-wyr-divider { width: 100%; height: 1px; }
    }

    /* -- Assessment shell -- */
    .assess-shell {
      max-width: 780px; margin: 0 auto;
      padding: 56px 24px 80px;
    }
    #assessment-anchor {
      scroll-margin-top: 88px;
    }

    /* -- Progress bar -- */
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

    /* -- Step cards -- */
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

    /* -- Questions -- */
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
    /* Report unlock box */
    .report-unlock-box {
      display: flex; align-items: flex-start; gap: 20px;
      background: rgba(173,120,5,0.06); border: 1px solid rgba(173,120,5,0.22);
      border-radius: 14px; padding: 24px 28px; margin-bottom: 32px;
    }
    .report-unlock-icon {
      width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0;
      background: rgba(173,120,5,0.15); display: flex; align-items: center;
      justify-content: center; color: var(--green); font-size: 1.2rem;
    }
    .report-unlock-text strong { color: var(--white); font-size: 0.95rem; display: block; margin-bottom: 12px; }
    .report-unlock-text ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .report-unlock-text ul li { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.65); font-size: 0.875rem; }
    .report-unlock-text ul li i { color: var(--green); font-size: 0.75rem; flex-shrink: 0; }
    .field-privacy {
      font-size: 0.78rem; color: rgba(255,255,255,0.3);
      display: flex; align-items: center; gap: 6px; margin-top: 4px; margin-bottom: 0;
    }
    .field-privacy i { font-size: 0.7rem; color: rgba(173,120,5,0.6); }

    .validation-msg {
      font-size: 0.8rem; color: #e05c5c; margin-top: 8px;
      display: none;
    }
    .validation-msg.show { display: block; }

    /* -- Results page -- */
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
    .rec-path-powered {
      font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em;
      text-transform: uppercase; color: rgba(173,120,5,0.8);
      margin: 3px 0 6px; display: flex; align-items: center; gap: 5px;
    }
    .rec-path-powered i { font-size: 0.65rem; }
    .rec-path-desc {
      font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.5;
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

    /* -- Social proof strip -- */
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
    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M16 3.5l-5 5-3-3-5 5L1.4 9 8 2.5l3 3L14.6 2 16 3.5zM0 14h16v2H0z"/></svg>
    Free Revenue Assessment
  </div>
  <h1>Diagnose Your <span>Revenue Engine</span><br>in 3 Minutes</h1>
  <p>Identify your biggest growth constraint and get a personalized path to scale — no fluff, no generic advice.</p>
  <button class="btn-next" onclick="scrollToAssessment()" style="margin:0 auto;">
    Start the Assessment <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg>
  </button>
  <div class="assess-hero-stats">
    <div class="assess-hero-stat">
      <strong>$110M+</strong>
      <span>Pipeline Created</span>
    </div>
    <div class="assess-hero-stat">
      <strong>14,500+</strong>
      <span>Meetings Booked</span>
    </div>
    <div class="assess-hero-stat">
      <strong>$24M+</strong>
      <span>Revenue Produced</span>
    </div>
    <div class="assess-hero-stat">
      <strong>1,320+</strong>
      <span>New Clients Closed
    </div>
  </div>
</section>

<!-- BENEFITS STRIP -->
<div class="assess-benefits">
  <div class="assess-benefits-inner">
    <div class="assess-benefit"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg> Clear diagnosis of your sales system</div>
    <div class="assess-benefit"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg> Identification of your biggest bottleneck</div>
    <div class="assess-benefit"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg> Recommended growth path</div>
    <div class="assess-benefit"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg> Strategic next steps — no sales pressure</div>
  </div>
</div>

<!-- WHAT YOU'LL RECEIVE -->
<div class="assess-wyr">
  <div class="assess-wyr-inner">
    <div class="assess-wyr-col">
      <div class="assess-wyr-heading"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M5 0h6a1 1 0 010 2h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h1a1 1 0 010-2zm1 2a1 1 0 002 0H6zM4 6v2h8V6H4zm0 3v2h8V9H4zm0 3v2h4v-2H4z"/></svg> In less than 3 minutes, we'll evaluate:</div>
      <ul class="assess-wyr-list">
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Pipeline generation effectiveness</li>
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Lead conversion bottlenecks</li>
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Sales process maturity</li>
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Team structure and accountability</li>
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Revenue forecasting accuracy</li>
      </ul>
    </div>
    <div class="assess-wyr-divider"></div>
    <div class="assess-wyr-col">
      <div class="assess-wyr-heading"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M14 5h-3a2 2 0 001.7-3A2 2 0 0010 3.5c0 .6.2 1.1.5 1.5H8.5C8.8 4.6 9 4.1 9 3.5A2 2 0 006 2a2 2 0 001.7 3H5a1 1 0 00-1 1v2h12V6a1 1 0 00-1-1zM4 9v7h3v-7H4zm5 0v7h3V9H9z"/></svg> Then we'll provide:</div>
      <ul class="assess-wyr-list">
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 1l2.06 4.17 4.6.67-3.33 3.24.79 4.58L8 11.25l-4.12 2.41.79-4.58L1.34 5.84l4.6-.67z"/></svg> Your Revenue Engine Score</li>
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 1l2.06 4.17 4.6.67-3.33 3.24.79 4.58L8 11.25l-4.12 2.41.79-4.58L1.34 5.84l4.6-.67z"/></svg> Top 3 Growth Constraints</li>
        <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 1l2.06 4.17 4.6.67-3.33 3.24.79 4.58L8 11.25l-4.12 2.41.79-4.58L1.34 5.84l4.6-.67z"/></svg> Recommended Next Steps</li>
      </ul>
      <div class="assess-wyr-time"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14a6 6 0 110-12 6 6 0 010 12zm.5-9H7v5l4.3 2.5.7-1.2-3.5-2V5z"/></svg> Estimated completion time: <strong>3 minutes</strong></div>
    </div>
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

  <!-- -------------------------------------------
       STEP 1 — Company Profile
  ------------------------------------------- -->
  <div class="assess-step active" id="step-1">
    <div class="step-header">
      <div class="step-category">Section 1 of 7 — Revenue Stage</div>
      <h2>Where are you right now?</h2>
      <p>Select the option that best describes your current annual revenue.</p>
    </div>

    <div class="question-block">
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

    <div class="validation-msg" id="val-1">Please select your revenue range.</div>
    <div class="step-nav">
      <div></div>
      <button class="btn-next" onclick="nextStep(1)">
        Continue <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg>
      </button>
    </div>
  </div>

  <!-- -------------------------------------------
       STEP 2 — Pipeline Maturity
  ------------------------------------------- -->
  <div class="assess-step" id="step-2">
    <div class="step-header">
      <div class="step-category">Section 2 of 7 — Pipeline Maturity</div>
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
      <button class="btn-back" onclick="prevStep(2)"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.4 1.4-5.6 5.6H16v2H3.8l5.6 5.6L8 16 0 8z"/></svg> Back</button>
      <button class="btn-next" onclick="nextStep(2)">Continue <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></button>
    </div>
  </div>

  <!-- -------------------------------------------
       STEP 3 — Sales Infrastructure
  ------------------------------------------- -->
  <div class="assess-step" id="step-3">
    <div class="step-header">
      <div class="step-category">Section 3 of 7 — Sales Infrastructure</div>
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
      <button class="btn-back" onclick="prevStep(3)"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.4 1.4-5.6 5.6H16v2H3.8l5.6 5.6L8 16 0 8z"/></svg> Back</button>
      <button class="btn-next" onclick="nextStep(3)">Continue <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></button>
    </div>
  </div>

  <!-- -------------------------------------------
       STEP 4 — Talent & Team
  ------------------------------------------- -->
  <div class="assess-step" id="step-4">
    <div class="step-header">
      <div class="step-category">Section 4 of 7 — Talent &amp; Team</div>
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
      <button class="btn-back" onclick="prevStep(4)"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.4 1.4-5.6 5.6H16v2H3.8l5.6 5.6L8 16 0 8z"/></svg> Back</button>
      <button class="btn-next" onclick="nextStep(4)">Continue <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></button>
    </div>
  </div>

  <!-- -------------------------------------------
       STEP 5 — Leadership & Execution
  ------------------------------------------- -->
  <div class="assess-step" id="step-5">
    <div class="step-header">
      <div class="step-category">Section 5 of 7 — Leadership &amp; Execution</div>
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
      <button class="btn-back" onclick="prevStep(5)"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.4 1.4-5.6 5.6H16v2H3.8l5.6 5.6L8 16 0 8z"/></svg> Back</button>
      <button class="btn-next" onclick="nextStep(5)">Continue <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></button>
    </div>
  </div>

  <!-- -------------------------------------------
       STEP 6 — Goals
  ------------------------------------------- -->
  <div class="assess-step" id="step-6">
    <div class="step-header">
      <div class="step-category">Section 6 of 7 — Goals &amp; Priorities</div>
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
      <button class="btn-back" onclick="prevStep(6)"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.4 1.4-5.6 5.6H16v2H3.8l5.6 5.6L8 16 0 8z"/></svg> Back</button>
      <button class="btn-next" onclick="nextStep(6)">Continue <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></button>
    </div>
  </div>

  <!-- -------------------------------------------
       STEP 7 — Contact Info (unlocks report)
  ------------------------------------------- -->
  <div class="assess-step" id="step-7">
    <div class="step-header">
      <div class="step-category">Section 7 of 7 — Your Report</div>
      <h2>Your personalized report is ready.</h2>
      <p>Enter your details below and we'll generate your full Revenue Assessment report — including your score, diagnosis, key gaps, and recommended path forward.</p>
    </div>

    <div class="report-unlock-box">
      <div class="report-unlock-icon"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg></div>
      <div class="report-unlock-text">
        <strong>What's inside your report:</strong>
        <ul>
          <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Revenue score across 5 dimensions</li>
          <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Your stage diagnosis + root cause analysis</li>
          <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Key gaps holding back your growth</li>
          <li><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Recommended path and solution match</li>
        </ul>
      </div>
    </div>

    <div class="field-row">
      <div class="field-group">
        <label class="field-label">First Name <span class="req">*</span></label>
        <input type="text" class="field-input" id="q-first-name" placeholder="Your first name" autocomplete="given-name">
      </div>
      <div class="field-group">
        <label class="field-label">Last Name <span class="req">*</span></label>
        <input type="text" class="field-input" id="q-last-name" placeholder="Your last name" autocomplete="family-name">
      </div>
    </div>
    <div class="field-row">
      <div class="field-group">
        <label class="field-label">Company Name <span class="req">*</span></label>
        <input type="text" class="field-input" id="q-company" placeholder="Your company" autocomplete="organization">
      </div>
      <div class="field-group">
        <label class="field-label">Your Role</label>
        <input type="text" class="field-input" id="q-role" placeholder="CEO, VP Sales, Founder…" autocomplete="organization-title">
      </div>
    </div>
    <div class="field-row">
      <div class="field-group">
        <label class="field-label">Email <span class="req">*</span></label>
        <input type="email" class="field-input" id="q-email" placeholder="you@company.com" autocomplete="email">
      </div>
      <div class="field-group">
        <label class="field-label">Phone <span class="req">*</span></label>
        <input type="tel" class="field-input" id="q-phone" placeholder="+1 (555) 000-0000" autocomplete="tel">
      </div>
    </div>

    <p class="field-privacy"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M12 6V4a4 4 0 00-8 0v2H2v10h12V6h-2zM6 4a2 2 0 014 0v2H6V4zm3 7.73V13H7v-1.27a2 2 0 111 .01V13z" fill-rule="evenodd"/></svg> Your information is never shared or sold. We use it only to send your report and follow up on your results.</p>

    <div class="validation-msg" id="val-7">Please fill out all required fields.</div>
    <div class="step-nav">
      <button class="btn-back" onclick="prevStep(7)"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.4 1.4-5.6 5.6H16v2H3.8l5.6 5.6L8 16 0 8z"/></svg> Back</button>
      <button class="btn-submit" onclick="submitAssessment()">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg> Get My Free Report
      </button>
    </div>
  </div>

  <!-- -------------------------------------------
       RESULTS PANEL
  ------------------------------------------- -->
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
      <div class="results-stage-badge" id="results-badge"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg> Calculating…</div>
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
        <a href="https://meetings.hubspot.com/josh549/revenue-audit?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Drevenue_audit" target="_blank" rel="noopener noreferrer" class="btn-next" style="text-decoration:none;" onclick="if(typeof gtag!=='undefined')gtag('event','calendar_open',{page_location:window.location.href,page_title:document.title,cta_label:'Book a Strategy Call',transport_type:'beacon'})">
          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M12 1V0h-2v1H6V0H4v1H0v15h16V1h-4zm2 13H2V6h12v8zm0-10H2V3h2v1h2V3h4v1h2V3h2v1zm-4.5 7l-2.5-2.5-1 1 3.5 3.5 5-5-1-1z"/></svg> Book a Strategy Call
        </a>
        <a id="xray-handoff-btn" href="#" target="_blank" rel="noopener noreferrer" class="btn-outline-gold"
           onclick="if(typeof gtag!=='undefined')gtag('event','xray_handoff_click',{page_location:window.location.href,page_title:document.title,assessment_score:parseInt(document.getElementById('score-display').textContent)||0,cta_label:'See Which Revenue Engine X-Ray Fits You'})">
          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          See Which Revenue Engine X-Ray Fits You
        </a>
        <a href="/solutions" class="btn-outline-gold">
          Explore Solutions <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg>
        </a>
      </div>
    </div>

    <div style="text-align:center;">
      <button class="btn-restart" onclick="restartAssessment()">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M11 2.3l2 4-4 2 1-1.7a5 5 0 102.2 4.4l2 .3A7 7 0 119.5 2.4l1.5-.1z"/></svg> Retake the Assessment
      </button>
    </div>

  </div>
  <!-- /results-panel -->

</div>
<!-- /assess-shell -->

<!-- PROOF STRIP -->
<div class="proof-strip">
  <div class="proof-strip-inner">
    <div class="proof-metric"><strong>$110M+</strong><span>Pipeline Created</span></div>
    <div class="proof-metric"><strong>14,500+</strong><span>Meetings Booked</span></div>
    <div class="proof-metric"><strong>1,320+</strong><span>Clients Added</span></div>
    <div class="proof-metric"><strong>75,000+</strong><span>Outreaches</span></div>
    <div class="proof-metric"><strong>$24M+</strong><span>Revenue Produced</span></div>
  </div>
</div>

${footer()}

<script>
// -------------------------------------------------------------
//  STATE
// -------------------------------------------------------------
let currentStep = 1;
const totalSteps = 7;
const stepLabels = [
  'Revenue Stage',
  'Pipeline Maturity',
  'Sales Infrastructure',
  'Talent & Team',
  'Leadership & Execution',
  'Goals & Priorities',
  'Your Report'
];

// -------------------------------------------------------------
//  INIT
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  buildProgressDots();
  updateProgress(1);
  initOptionCards();
  initCheckboxCards();

  // -- Capture & persist UTM attribution --------------------------------------
  (function() {
    try {
      var params = new URLSearchParams(window.location.search);
      var utm = {
        utm_source:   params.get('utm_source')   || '',
        utm_medium:   params.get('utm_medium')   || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term:     params.get('utm_term')     || '',
        utm_content:  params.get('utm_content')  || '',
        referrer:     document.referrer || '',
        source_url:   document.referrer || window.location.href,
        landing_page: window.location.href,
      };
      // Only overwrite if we have fresh UTM data (don't clobber existing with empty)
      var existing = {};
      try { existing = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) {}
      var merged = Object.assign({}, existing);
      if (utm.utm_source)   merged.utm_source   = utm.utm_source;
      if (utm.utm_medium)   merged.utm_medium   = utm.utm_medium;
      if (utm.utm_campaign) merged.utm_campaign = utm.utm_campaign;
      if (utm.utm_term)     merged.utm_term     = utm.utm_term;
      if (utm.utm_content)  merged.utm_content  = utm.utm_content;
      if (!merged.referrer) merged.referrer     = utm.referrer;
      if (!merged.landing_page) merged.landing_page = utm.landing_page;
      sessionStorage.setItem('mgc_utm', JSON.stringify(merged));
    } catch(e) {}
  })();

  // -- GA4: fire assessment_start when the assessment page loads -------------
  // gtag() is defined synchronously in <head> so it is always available here.
  // Guard added as belt-and-suspenders to prevent any possible ReferenceError.
  (function() {
    try {
      if (typeof gtag !== 'function') return;
      var utmData = {};
      try { utmData = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) {}
      console.log('[MGC GA4] Firing assessment_start', { utm_source: utmData.utm_source, landing_page: utmData.landing_page });
      gtag('event', 'assessment_start', {
        page_location: window.location.href,
        page_title:    document.title,
        utm_source:    utmData.utm_source   || '',
        utm_medium:    utmData.utm_medium   || '',
        utm_campaign:  utmData.utm_campaign || '',
        landing_page:  utmData.landing_page || '',
      });
    } catch(e) {}
  })();
});

function scrollToAssessment() {
  document.getElementById('assessment-anchor').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// -------------------------------------------------------------
//  PROGRESS
// -------------------------------------------------------------
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

// -------------------------------------------------------------
//  OPTION CARDS (radio)
//  Listen on the <input> change event, not the <label> click,
//  to avoid the double-fire that occurs when a label wraps an input.
// -------------------------------------------------------------
function initOptionCards() {
  // The card IS a <label> so clicking anywhere natively checks the radio.
  // We only need to mirror the checked state to the .selected class.
  document.querySelectorAll('.option-card input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const group = radio.name;
      document.querySelectorAll('.option-card input[name="' + group + '"]').forEach(r => {
        r.closest('.option-card').classList.remove('selected');
      });
      radio.closest('.option-card').classList.add('selected');
    });
  });
}

// -------------------------------------------------------------
//  CHECKBOX CARDS
//  Same fix: listen on input change, not label click.
// -------------------------------------------------------------
function initCheckboxCards() {
  // The card IS a <label> so clicking anywhere natively toggles the checkbox.
  // We only need to mirror the checked state to the .selected class.
  document.querySelectorAll('.checkbox-card input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('.checkbox-card').classList.toggle('selected', cb.checked);
    });
  });
}

// -------------------------------------------------------------
//  VALIDATION
// -------------------------------------------------------------
function validateStep(step) {
  if (step === 1) {
    const rs = document.querySelector('input[name="rs"]:checked');
    if (!rs) {
      document.getElementById('val-1').classList.add('show');
      return false;
    }
    document.getElementById('val-1').classList.remove('show');
    return true;
  }
  if (step === 7) {
    const fn = document.getElementById('q-first-name').value.trim();
    const ln = document.getElementById('q-last-name').value.trim();
    const co = document.getElementById('q-company').value.trim();
    const em = document.getElementById('q-email').value.trim();
    const ph = document.getElementById('q-phone').value.trim();
    if (!fn || !ln || !co || !em || !ph) {
      document.getElementById('val-7').classList.add('show');
      return false;
    }
    if (em.indexOf('@') < 1 || em.lastIndexOf('.') < em.indexOf('@') + 2 || em.lastIndexOf('.') >= em.length - 1) {
      document.getElementById('val-7').textContent = 'Please enter a valid email address.';
      document.getElementById('val-7').classList.add('show');
      return false;
    }
    document.getElementById('val-7').classList.remove('show');
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

// -------------------------------------------------------------
//  NAVIGATION
// -------------------------------------------------------------
function nextStep(from) {
  if (!validateStep(from)) return;
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from + 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
  window.scrollTo({ top: document.getElementById('assessment-anchor').offsetTop - 80, behavior: 'smooth' });

  // -- GA4: assessment_step_complete -----------------------------------------
  // Fires once per step transition per session to track funnel progression.
  // Dedup key 'mgc_ga4_step_N' prevents re-fire on back/forward navigation.
  (function(stepNum) {
    try {
      if (typeof gtag !== 'function') return;
      var _stepKey = 'mgc_ga4_step_' + stepNum;
      if (sessionStorage.getItem(_stepKey)) return; // already fired for this step
      sessionStorage.setItem(_stepKey, '1');
      var _stepNames = {
        1: 'Revenue Stage',
        2: 'Pipeline Maturity',
        3: 'Sales Infrastructure',
        4: 'Talent & Team',
        5: 'Leadership & Execution',
        6: 'Goals & Priorities'
      };
      var _stepName = _stepNames[stepNum] || 'Step ' + stepNum;
      var _utmD = {};
      try { _utmD = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) {}
      console.log('[MGC GA4] Firing assessment_step_complete — step_number=' + stepNum + ', step_name=' + _stepName);
      gtag('event', 'assessment_step_complete', {
        page_location: window.location.href,
        page_title:    document.title,
        step_number:   stepNum,
        step_name:     _stepName,
        utm_source:    _utmD.utm_source   || '',
        utm_medium:    _utmD.utm_medium   || '',
        utm_campaign:  _utmD.utm_campaign || '',
        landing_page:  _utmD.landing_page || '',
      });
    } catch(e) { console.error('[MGC GA4] Error firing assessment_step_complete:', e); }
  })(from);
}

function prevStep(from) {
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from - 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
  window.scrollTo({ top: document.getElementById('assessment-anchor').offsetTop - 80, behavior: 'smooth' });
}

// -------------------------------------------------------------
//  SCORING ENGINE
// -------------------------------------------------------------
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

// -------------------------------------------------------------
//  OUTCOME DEFINITIONS
// -------------------------------------------------------------
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
    bottlenecks: [
      {
        title: 'No Repeatable Sales Process',
        icon: 'fa-route',
        feeling: 'Right now, every deal feels like starting from scratch. You are crafting emails from memory, pitching differently each time, and relying on instinct to move conversations forward. Some deals close. Others just go quiet and you are not sure why. There is a low-grade anxiety under everything: the sense that you are winging it at a level that should already be systemized. Your best deals close because of you specifically — your relationships, your charisma, your persistence — not because of anything that could be replicated.',
        resolved: 'When this is fixed, your sales motion becomes a documented, repeatable playbook. Every prospect goes through the same structured journey. You have defined discovery questions, clear stage-exit criteria, and a proven pitch sequence. New team members can be handed the playbook and execute within weeks. Your win rate becomes predictable, not personality-dependent. You sleep better knowing that deals are moving through a system — not depending entirely on you to personally shepherd each one.',
        actions: [
          'Document your last 10 closed deals: map every step from first touch to close and identify the pattern',
          'Define 5-7 pipeline stages with explicit entry and exit criteria for each stage',
          'Build a master discovery question bank — 15-20 questions that consistently surface pain and urgency',
          'Create a one-page talk track for your top 3 objections with tested response frameworks',
          'Implement a weekly deal review ritual: every active opportunity gets a next action and a close date'
        ]
      },
      {
        title: 'No CRM Discipline or Pipeline Visibility',
        icon: 'fa-database',
        feeling: 'Your pipeline lives in your head, in a spreadsheet, or scattered across email threads and sticky notes. When someone asks how the quarter is looking, you estimate. When a deal slips, you find out too late. You have no way to look at your business and know with confidence what is real versus what is wishful thinking. The anxiety of not knowing what is actually in your pipeline — and what it is worth — is a constant low hum that never fully goes away.',
        resolved: 'With proper CRM discipline in place, you open your dashboard on Monday morning and know exactly what is real. You can see every active deal, its stage, its close probability, and its next action. You can forecast the next 30, 60, and 90 days with real data. Slippage gets caught early. Nothing falls through the cracks. You make decisions about hiring, marketing spend, and capacity based on actual pipeline data — not gut feel.',
        actions: [
          'Choose one CRM (HubSpot free tier is fine) and commit — migrate everything out of spreadsheets this week',
          'Set a non-negotiable rule: if it is not in the CRM, it does not exist — no exceptions',
          'Configure pipeline stages to match your actual sales process, not the CRM default',
          'Set up a weekly pipeline review reminder every Monday — spend 20 minutes updating every open deal',
          'Create a simple dashboard: total pipeline value, deals by stage, weighted forecast, and overdue next actions'
        ]
      },
      {
        title: 'ICP and Messaging Are Undefined',
        icon: 'fa-bullseye',
        feeling: 'You will sell to anyone who will buy. That sounds fine — until you realize it means your messaging resonates with no one specifically. Your outreach is generic. Your pitch shifts based on who you are talking to. You spend time on prospects who will never convert, and you are not targeting the buyers who would get the most value from what you do. There is a creeping feeling that you are working hard but not working on the right things.',
        resolved: 'When your ICP is locked and your messaging is built around it, every outreach is precise and intentional. You know exactly who to target, what they care about, what keeps them up at night, and how your solution maps directly to their pain. Your reply rates climb. Your close rates improve. You stop wasting hours on the wrong conversations and start spending all of your energy on prospects who were already primed to buy from someone like you.',
        actions: [
          'Analyze your top 5 existing clients: what do they have in common in terms of size, industry, role, and problem?',
          'Write a one-page ICP document: company firmographics, buyer role, top 3 pain points, trigger events that make them buy',
          'Rewrite your cold outreach around one specific pain point per message — not your solution, their problem',
          'Eliminate any prospect from your pipeline that does not match your ICP profile and stop chasing them',
          'Build a simple value proposition statement: "We help [ICP] who struggle with [pain] achieve [outcome] in [timeframe]"'
        ]
      },
      {
        title: 'Cannot Delegate the Sales Motion',
        icon: 'fa-user-lock',
        feeling: 'You have thought about bringing someone in to help with sales. But every time you get close, you realize you cannot explain what you do well enough for someone else to do it. The knowledge is locked in your head. You are the brand, the pitch, the relationship, the closer. That feels powerful until you realize it also means you are the bottleneck. Every revenue dollar requires your personal time. You cannot take a vacation without the pipeline drying up. You cannot get sick. You cannot grow beyond what you can personally execute.',
        resolved: 'When the sales motion is documented and systemized, it becomes transferable. You can hire a junior SDR and hand them a playbook. You can bring on a closer and walk them through your process in a week. The business can run sales conversations that you did not start and did not finish. Revenue stops being a reflection of your personal bandwidth and starts being a function of your team and your system.',
        actions: [
          'Record yourself doing a live sales call or demo — this becomes your training video for every future hire',
          'Write a one-page "How We Sell" document: ICP, first touch approach, discovery framework, pitch structure, close method',
          'Identify the one part of the sales process you hate or are worst at — that is your first hire or first delegation',
          'Create a simple onboarding checklist for a future sales hire: what they need to know in their first 30 days',
          'Shadow your own process for one week — document every action you take in sales with enough detail that someone else could replicate it'
        ]
      },
      {
        title: 'Revenue Stalls When Your Capacity Does',
        icon: 'fa-tachometer-alt',
        feeling: 'There is a ceiling on your revenue, and you can feel it. It is set by the number of hours you have available to sell each week. When you are busy delivering for existing clients, prospecting stops. When prospecting stops, pipeline dries up. When pipeline dries up, you scramble. It is a boom-and-bust cycle that you cannot escape because the entire revenue engine runs on you. There is a particular exhaustion that comes with knowing that growing the business means working more — and that there is a physical limit to how much more you can work.',
        resolved: 'When your revenue engine has infrastructure beneath it — process, CRM, messaging, and eventually people — growth is no longer capped by your personal hours. Pipeline gets generated while you are delivering. Deals move forward while you are on vacation. Revenue becomes a function of your system, not your stamina. You start to feel the shift when you realize you are working on the business instead of just in it.',
        actions: [
          'Block two non-negotiable 90-minute "prospecting windows" every week — protect them like client meetings',
          'Build a 30-day automated email nurture sequence for leads who are not ready to buy yet',
          'Create a referral system: identify your top 5 clients and ask each one for one specific introduction this month',
          'Set a monthly pipeline input goal: how many new conversations do you need to start to hit your close rate target?',
          'Begin hiring or partnering planning: map out what your first sales resource looks like and what they would own'
        ]
      }
    ],
    pathTitle: 'Build the infrastructure first.',
    pathBody: 'Before hiring, before scaling outreach  -  you need a system. MetaGrowth will architect the process, define the ICP, configure the CRM, build the messaging, and install the KPI framework that lets you grow beyond yourself.',
    recs: [
      { icon: 'fa-chart-line', name: 'Generate Pipeline Infrastructure', powered: 'Growth OS™', desc: 'Build a predictable outbound engine that consistently creates qualified sales opportunities through targeting, messaging, automation, and execution.', link: '/solutions/growth-os', primary: true },
      { icon: 'fa-brain', name: 'Scale Revenue Infrastructure', powered: 'Revenue OS™', desc: 'Implement the forecasting, reporting, accountability, management, and operational systems required for predictable revenue growth.', link: '/solutions/revenue-os' },
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
    bottlenecks: [
      {
        title: 'No Enforced Sales Process',
        icon: 'fa-random',
        feeling: 'Your reps are doing their own thing. One follows up three times. Another gives up after one email. One loves the phone. Another refuses to use it. Every deal is handled differently and you have no way to know what is working. When performance is down, you cannot diagnose it because there is no consistent baseline to compare against. Managing the team feels like herding cats — you are constantly reacting to individual behavior instead of managing a system.',
        resolved: 'When a defined process is enforced, every rep follows the same motion. Discovery calls have a standard framework. Proposals go out within 24 hours. Follow-up is automated and sequenced. You can look at any deal in the CRM and know exactly where it is, why it is there, and what should happen next. Coaching becomes specific and data-driven instead of anecdotal. When performance dips, you can identify exactly which step in the process is breaking down — and fix it.',
        actions: [
          'Run a process audit: have every rep walk you through their last 5 deals step by step — document what they actually do',
          'Design a single mandatory sales process: define every stage, required CRM fields, and activity minimum per stage',
          'Run a one-hour process training with the full team — walk through the new process deal by deal with real examples',
          'Create a weekly deal review template: for every active deal, require stage, next action, close date, and blocker',
          'Install a simple consequence: deals without updated CRM activity get removed from forecast — no exceptions'
        ]
      },
      {
        title: 'Pipeline Stages Are Unclear',
        icon: 'fa-stream',
        feeling: 'If you ask three reps what "Proposal Sent" means, you will get three different answers. Deals sit in the same stage for weeks with no movement and no one notices. Your pipeline report looks full but you cannot trust any of it. When a deal closes that you thought was early-stage, it is a nice surprise. When a deal you thought was closing slips by another quarter, it is a gut punch. The inability to trust your own data is one of the most frustrating feelings in sales leadership.',
        resolved: 'When pipeline stages have precise definitions with entry and exit criteria, your CRM becomes a real management tool instead of a digital filing cabinet. You can look at a deal in Stage 3 and know exactly what happened to get it there and exactly what needs to happen to advance it. Your forecast is real. Your reps know where every deal stands. Deal reviews become productive because everyone is working from the same map.',
        actions: [
          'Redefine every pipeline stage in one sentence: what has specifically happened for a deal to be in this stage?',
          'Assign exit criteria to each stage: what must be true before a deal can advance to the next stage?',
          'Add two mandatory CRM fields to every deal: "Next Action" and "Next Action Date" — both required to save',
          'Set up automated alerts for deals that have not moved in 14 days — every stale deal gets a review',
          'Run a monthly pipeline scrub: remove or downgrade every deal that does not have a clear, imminent next action'
        ]
      },
      {
        title: 'Ramp Time Is Too Slow',
        icon: 'fa-user-clock',
        feeling: 'Every new hire costs you four to six months before they are producing anything meaningful. In the meantime, you are paying salary, spending management time, and watching them make avoidable mistakes because no one ever built a real onboarding program. Some of them never figure it out. Some leave before they get there. And when you lose a rep, you are starting the clock over again. The churn of early-stage sales hires is expensive, demoralizing, and one of the biggest hidden drags on your revenue.',
        resolved: 'With a structured onboarding program, new reps know the product, the ICP, the process, and the pitch within 30 days. They are making real calls by week two. They are in the CRM with real pipeline by week four. They feel supported and set up to succeed — which dramatically reduces early turnover. You stop losing people who would have been great if they had been given the tools to succeed.',
        actions: [
          'Build a 30-60-90 day onboarding plan for all new sales hires: week-by-week milestones, activities, and goals',
          'Create a product knowledge test new hires must pass before their first prospect call',
          'Record 5 call recordings of your best performers — make them required listening in the first week',
          'Assign a "ramp buddy" — your top performer spends 30 minutes/week with each new hire for the first 90 days',
          'Set a clear ramp target: the number of qualified conversations a new rep should be having by day 30, 60, and 90'
        ]
      },
      {
        title: 'No Accountability Rhythm',
        icon: 'fa-clipboard-check',
        feeling: 'You have meetings, but they are status updates more than accountability sessions. Everyone reports what happened last week. No one is held to what they committed to. The same people miss their numbers month after month and the team has quietly accepted it as normal. The top performers are doing great on their own. The bottom performers are coasting. And you are burning bandwidth managing people individually instead of running a system that holds everyone to the same standard.',
        resolved: 'When you install a true accountability rhythm — weekly pipeline reviews, monthly performance scorecards, quarterly business reviews — the culture shifts. Commitments are made publicly and tracked publicly. Every rep knows exactly what they are accountable for and what the consequences of missing it are. The top performers accelerate because they have real targets to chase. The underperformers either level up or self-select out. You stop managing people and start managing outcomes.',
        actions: [
          'Implement a weekly "Monday metrics" meeting: each rep reports activity from last week and commits to activity for this week — in writing',
          'Define 3-5 KPIs per rep: calls, pipeline created, stage advances, proposals sent, close rate — track all of them weekly',
          'Build a monthly scorecard: each rep gets a one-page view of their performance vs. target across all KPIs',
          'Establish a clear performance improvement path: what happens when someone misses target for 30, 60, 90 days?',
          'Create a monthly one-on-one template: 15 minutes on performance data, 15 minutes on coaching, 15 minutes on blockers — same structure every time'
        ]
      },
      {
        title: 'Forecasting Is Guesswork',
        icon: 'fa-chart-line',
        feeling: 'At the end of every month, the final number surprises you — either up or down. You are making business decisions about hiring, marketing spend, and operations based on what you hope the quarter will look like, not what the data actually says. Your board asks for a forecast and you give them a range so wide it is almost meaningless. The psychological weight of not knowing what your revenue will be next quarter is one of the most stressful parts of running a business.',
        resolved: 'When your forecasting is grounded in real data — stage-weighted pipeline, historical close rates, average sales cycle — you can predict next-month revenue within 10-15% confidence. You make hiring decisions with clarity. You have a real answer for your board. You know three months out whether you are on track or whether you need to pour fuel on pipeline generation. That certainty is transformative — not just operationally, but for your own peace of mind.',
        actions: [
          'Calculate your historical close rate by stage: what percentage of deals that reach Stage 3 actually close?',
          'Apply stage-weighted probability to every deal in your CRM — let the math produce your forecast',
          'Set a minimum pipeline coverage ratio: you should have 3x your revenue target in qualified pipeline at all times',
          'Create a simple monthly forecast model: weighted pipeline + late-stage deals + renewal revenue = committed forecast',
          'Review forecast accuracy monthly — compare what you predicted to what actually closed and identify where you were wrong'
        ]
      }
    ],
    pathTitle: 'Install the operating system your team needs to execute.',
    pathBody: 'The solution is not more reps. It is a structured Sales OS  -  clear stages, KPIs, weekly rhythm, and a coaching framework that enforces performance. MetaGrowth installs this system and runs it with you until it holds on its own.',
    recs: [
      { icon: 'fa-chart-line', name: 'Generate Pipeline Infrastructure', powered: 'Growth OS™', primary: true, desc: 'Build a predictable outbound engine that consistently creates qualified sales opportunities through targeting, messaging, automation, and execution.', link: '/solutions/growth-os' },
      { icon: 'fa-search', name: 'Hire Proven Sales Talent', powered: 'Recruiting Services', desc: 'Stop cycling through bad hires. Structured vetting, deep behavioral assessment, and performance-profile matching to identify real producers.', link: '/solutions/managed-sales-pods' },
      { icon: 'fa-percentage', name: 'Add Reps Without Fixed Salary Risk', powered: 'Commission-Only Infrastructure', desc: 'Scale your sales headcount using 1099 reps — full systems, onboarding, training, and oversight included with zero base pay exposure.', link: '/solutions/commission-only' },
      { icon: 'fa-cogs', name: 'Fully Managed Sales Team', powered: 'Managed Sales Pods™', desc: 'Recruit, onboard, manage, coach, and hold salespeople accountable without requiring the founder to become a full-time sales manager.', link: '/solutions/managed-sales-pods' }
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
    bottlenecks: [
      {
        title: 'CRM Adoption and Configuration Gap',
        icon: 'fa-database',
        feeling: 'The CRM exists. Some reps use it religiously. Others treat it as optional. You cannot run a real pipeline meeting because half the data is stale, incomplete, or missing entirely. You have had conversations with reps about this. They agree to do better for a week, then drift back. You have tried making it mandatory. You have tried making it easy. Nothing has made it stick. You are making business-critical decisions based on pipeline data you know is unreliable — and that uncertainty compounds every week.',
        resolved: 'When CRM adoption reaches full compliance and the system is properly configured, your pipeline meeting looks completely different. Every deal is current. Every stage is accurate. You can run a real weighted forecast in five minutes. You can see which reps have full pipelines and which are running dry before it becomes a miss. You make resource decisions with confidence because your data actually reflects reality.',
        actions: [
          'Audit CRM data quality right now: how many open deals have a next action date? That percentage is your current adoption rate',
          'Remove every field that is not actively used in your sales process — CRM complexity is the primary adoption killer',
          'Make two fields non-negotiable on every deal: next action and close date — train the system to require them',
          'Tie the weekly pipeline meeting directly to CRM data — if it is not in the CRM, it does not get discussed',
          'Implement a monthly data quality score: each rep gets rated on their CRM completion percentage and it goes on their scorecard'
        ]
      },
      {
        title: 'Reactive, Not Systematic Coaching',
        icon: 'fa-chalkboard-teacher',
        feeling: 'Coaching happens when something goes wrong. A deal slips and you debrief it. A rep has a bad month and you have a performance conversation. But there is no proactive development happening. Your best reps are plateauing because no one is helping them get better. Your struggling reps are not getting consistent enough feedback to actually change. The people who would benefit most from a great coach are getting the least of your attention because the urgent always crowds out the important.',
        resolved: 'When coaching is systematic — weekly call reviews, structured feedback sessions, monthly skill assessments — your team compounds. Your top performers break through plateaus because they are getting specific, expert feedback. Your middle performers move up the curve faster. Your underperformers either get the support they need to turn it around or the clarity they need to recognize they are not the right fit. The entire team elevation effect is one of the highest-ROI investments a sales leader can make.',
        actions: [
          'Implement a weekly call review program: each rep submits one recorded call per week for structured feedback',
          'Create a coaching scorecard with 6-8 specific skills rated 1-5 — use it consistently for every rep every month',
          'Block 30 minutes per rep per week in your calendar as sacred coaching time — do not let it get cancelled',
          'Build a skills development library: record or curate resources for the top 5 skills your reps need to improve',
          'Set a 90-day coaching goal with each rep: one specific skill they will measurably improve in the next quarter'
        ]
      },
      {
        title: 'Ramp Time Is Long and Inconsistent',
        icon: 'fa-user-clock',
        feeling: 'You have made enough hires now to know that some reps hit the ground running and others never fully do. But you cannot identify why the difference exists before it is too late. By month four, you know if someone is going to make it. The problem is that month four is expensive. You have invested in training, management time, comp, and customer exposure in a rep who is not going to work out. And you have had to start the hiring process all over again while your pipeline suffers.',
        resolved: 'With a standardized ramp program, you know within 45 days whether a new hire has what it takes. The program has clear checkpoints: first call by day 10, first qualified opportunity by day 21, first close attempt by day 45. If someone is not hitting the milestones, you know it early and can intervene or make a change before the investment deepens. The reps who are going to succeed accelerate. The ones who are not get that clarity faster — which is better for everyone.',
        actions: [
          'Build a standardized 90-day ramp plan with weekly milestones: activity targets, knowledge gates, and revenue expectations by week',
          'Create a certification process before a new rep goes live on calls: product test, ICP test, pitch certification',
          'Assign a dedicated ramp manager or coach for the first 90 days — separate from the direct manager',
          'Implement "ramp reviews" at day 30, 60, and 90 with a clear go/no-go decision framework at each checkpoint',
          'Track and publish ramp metrics by hire cohort: time to first qualified opportunity, time to first close, ramp revenue by month'
        ]
      },
      {
        title: 'No Reliable Forecast Discipline',
        icon: 'fa-chart-bar',
        feeling: 'Your quarterly forecast feels like a negotiation between optimism and what you can defend. Reps pad their pipelines. Managers adjust upward for motivation and downward for sandbagging. By the time the number reaches you, it has been filtered through so many biases that it barely resembles reality. You have missed quarters you thought were locked. You have blown out quarters you thought were soft. The unpredictability makes it impossible to plan properly and erodes trust with your board and leadership team.',
        resolved: 'When forecast discipline is real — stage-gated pipeline, historical close rate modeling, mandatory deal-level reviews — your forecast becomes a number you can actually defend. You call 4.2M and you close 4.1M. Your board starts treating your forecast as a reliable planning input. You make hiring and investment decisions with confidence. The psychological relief of knowing your number and trusting it is enormous.',
        actions: [
          'Run a forecast accuracy retrospective: for the last 4 quarters, what did you forecast vs. what closed? Identify the pattern in your misses',
          'Implement commit vs. best case vs. pipeline categories for all forecasted deals — stop treating them the same',
          'Require deal-level evidence for anything in "commit" — a verbal yes is not enough; you need a clear path to close',
          'Calculate your stage-weighted close rates from the last 12 months and apply them mechanically to current pipeline',
          'Hold a Thursday afternoon forecast review every week — the number does not move without documented deal changes'
        ]
      },
      {
        title: 'Leadership Bandwidth Stretched Too Thin',
        icon: 'fa-expand-arrows-alt',
        feeling: 'You are simultaneously trying to be a sales manager, a strategist, a recruiter, a coach, an operator, and a closer — often on the same day. Strategic priorities get crowded out by urgent execution problems. Coaching gets cancelled when a deal needs attention. You are always putting out fires and never fully getting ahead of the operational debt that keeps creating new ones. There is a persistent feeling that you are working at full capacity and still not covering everything that matters.',
        resolved: 'When leadership bandwidth is properly allocated — clear separation between strategy and execution, delegated management responsibilities, a working rhythm that protects strategic time — you become a different kind of leader. You have the space to think about where the business is going instead of constantly reacting to where it is. Your team runs better because they have clearer ownership. You become the asset the business needs you to be rather than the bottleneck you have quietly become.',
        actions: [
          'Do a one-week time audit: categorize every hour as strategic, management, execution, or administrative — the split will be clarifying',
          'Identify the three management tasks that consume the most of your time — these are your first delegation targets',
          'Create a weekly operating rhythm: Monday metrics review, Wednesday coaching, Friday deal review — protect them as non-negotiable',
          'Define what "done well" looks like for each person on your team so you can delegate with clear standards',
          'Block two hours every week as protected strategic time — no calls, no Slack, just forward-looking thinking'
        ]
      }
    ],
    pathTitle: 'Upgrade the infrastructure. Stabilize execution.',
    pathBody: 'You need a full revenue operating system  -  not advice, not another strategy deck. MetaGrowth deploys the system, enforces the cadence, and installs the leadership rhythm that turns your existing team into a consistent revenue machine.',
    recs: [
      { icon: 'fa-cogs', name: 'Fully Managed Sales Team', powered: 'Managed Sales Pods™', desc: 'Recruit, onboard, manage, coach, and hold salespeople accountable without requiring the founder to become a full-time sales manager.', link: '/solutions/managed-sales-pods', primary: true },
      { icon: 'fa-percentage', name: 'Add Reps Without Fixed Salary Risk', powered: 'Commission-Only Infrastructure', desc: 'Scale your sales headcount using 1099 reps — full systems, onboarding, training, and oversight included with zero base pay exposure.', link: '/solutions/commission-only' },
      { icon: 'fa-handshake', name: 'Performance-Only Engagement', powered: 'Rev Share Program', desc: 'We embed execution inside your business and only get paid when you close revenue — zero upfront investment, zero fixed overhead.', link: 'https://meetings.hubspot.com/josh549/revenue-audit?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Drevenue_audit' }
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
    bottlenecks: [
      {
        title: 'No Dedicated Revenue Executive',
        icon: 'fa-crown',
        feeling: 'Revenue accountability is distributed — and diffused. Sales, marketing, and customer success are all partially owned by people who also own other things. No single person wakes up every morning with revenue as their one job. The result is that strategic revenue decisions get made slowly or not at all. Priorities conflict. Handoffs between teams are messy. And when the quarter comes up short, the accountability is murky because no one specifically owns the outcome.',
        resolved: 'When a dedicated revenue executive is in place — whether fractional or full-time — the entire function transforms. There is one person who owns the number, the culture, the hiring, the forecast, and the strategy. Decisions get made faster. Conflicts between teams get resolved with clear authority. The board has a single point of contact for revenue health. And the organization starts to behave like a growth machine instead of a collection of well-intentioned individuals all doing their best.',
        actions: [
          'Write the revenue leadership job scorecard: what does success look like at 30, 90, and 180 days? What decisions will this person own?',
          'Audit what is currently being done by whom across the revenue function — identify the gaps, redundancies, and ownership conflicts',
          'Evaluate whether you need a fractional CRO, a VP of Sales, or a full-time CRO based on ARR stage and complexity',
          'Define the relationship between the revenue executive and marketing and customer success — who do they influence, who do they own?',
          'Start the search immediately: great revenue executives have long lead times and short windows of availability'
        ]
      },
      {
        title: 'Forecast Accuracy Degrades at Scale',
        icon: 'fa-chart-bar',
        feeling: 'When you had 5 deals in your pipeline, forecasting was manageable. Now you have 50 — spread across multiple reps, multiple segments, and multiple stages — and your confidence in the number has dropped dramatically. Reps sandbag. Managers add buffer. By the time the forecast reaches you, you do not know whether you are looking at reality or a negotiated fiction. Missing the number has become normalized. Your board has stopped trusting your guidance. And that erosion of credibility is one of the most dangerous things that can happen at your stage.',
        resolved: 'At scale, accurate forecasting requires rigorous process, real CRM discipline, and a revenue leader who takes personal ownership of the number. When that is in place, your quarterly call is a confidence exercise rather than a guessing game. You know what is real. You know where the risk is. You can defend every number at the deal level. And when you say you are going to close 12M, you close 11.8M. That reliability becomes a strategic asset.',
        actions: [
          'Segment your forecast into committed, upside, and pipeline — never report a single blended number to your board',
          'Require deal-level review for every committed deal over $25K: who is the economic buyer, what is the decision process, what could kill it?',
          'Implement a structured "forecast call" every Thursday: each rep walks through their committed deals with evidence',
          'Calculate and publish the rolling 12-month close rate by stage for each rep — use it to mechanically weight the pipeline',
          'Create a forecast accuracy scoreboard: compare each manager predicted vs. actual close rate and keep it visible to the leadership team'
        ]
      },
      {
        title: 'Sales Leadership Managing Activity, Not Strategy',
        icon: 'fa-chess',
        feeling: 'Your sales managers are essentially senior reps with calendars full of deal reviews and performance check-ins. They are executing and managing, but no one is thinking strategically about territory design, compensation structure, team architecture, competitive positioning, or the next phase of growth. Strategy is happening in the background, or not at all, while everyone is focused on the current quarter number. The business is growing but the leadership function is not scaling with it.',
        resolved: 'When your sales leadership team has the right structure — clear separation between execution management and strategic leadership — you start to get leverage from the top. Your managers are developing their reps and running efficient deal reviews. Your revenue leader is designing the next chapter of your go-to-market. The work at every level is calibrated to the right altitude. You stop losing strategic ground because your leaders were too buried in day-to-day execution to see it.',
        actions: [
          'Map how your sales managers are spending their time: what percentage is strategic vs. execution vs. administrative?',
          'Define which decisions require strategic leadership and which can be delegated to front-line managers',
          'Create a strategic calendar for revenue leadership: quarterly go-to-market reviews, annual planning, compensation design, team architecture',
          'Evaluate whether your current sales managers have the skills and appetite for strategic leadership or are better suited for execution management',
          'Install a quarterly business review process where revenue leadership presents strategy, not just results'
        ]
      },
      {
        title: 'Leadership Turnover Disrupting Execution',
        icon: 'fa-user-times',
        feeling: 'You have been through one or two (or more) VPs of Sales. Each one came in with a plan. Changed some things. Did not deliver what they promised. Left — either voluntarily or not. And every transition cost you momentum, team morale, and months of execution rhythm. The team has learned not to get too attached to any particular way of doing things because it is likely to change. That instability has a name: it is a revenue leadership acquisition problem, not just a personnel problem.',
        resolved: 'When you hire the right revenue leader — defined by a clear scorecard, selected with rigorous process, onboarded with structure — the tenure and stability of that leadership improves dramatically. The team starts to build on a foundation instead of starting over. Culture stabilizes. Execution compounds. And the business starts to feel like it has real momentum rather than a series of restarts.',
        actions: [
          'Build a post-mortem on every VP of Sales departure: what was the real reason they failed or left? Document the pattern honestly',
          'Rewrite your revenue leadership job scorecard from scratch — what does this person need to achieve in 180 days to prove they are the right hire?',
          'Add a structured behavioral interview to your hiring process for all revenue leadership roles — past behavior predicts future performance',
          'Implement a 90-day revenue leadership onboarding plan: what they need to learn, who they need to meet, what they need to deliver',
          'Create a revenue leadership development plan: how will you invest in this person so they grow with the company rather than outgrow it?'
        ]
      },
      {
        title: 'Uneven Team Performance Without Clear Ownership',
        icon: 'fa-layer-group',
        feeling: 'You have a few strong performers, a big middle, and some people you are not sure about. The strong performers succeed largely on their own initiative. The middle is underinvested in and underperforming relative to their potential. The weak performers are hanging on because you do not have a clear performance management process that creates consequences. The overall result is a team that is delivering at 60-70% of its actual capacity — and you are paying 100% of the overhead to get there.',
        resolved: 'When clear ownership exists at the top and a real performance management culture is installed, the team starts performing at a different level. Your top performers get the investment and challenges they need to accelerate. Your middle performers get the coaching and accountability they need to move up the curve. Your underperformers either step up with support or exit cleanly with clarity. The average output per rep goes up. Your revenue per headcount metric becomes a number you are proud to report.',
        actions: [
          'Segment your team right now into top, middle, and low performers using objective data: pipeline creation, close rate, revenue vs. quota',
          'Build a differentiated investment plan: what specific actions will you take for each segment in the next 90 days?',
          'Install a performance improvement plan framework: what happens at 30, 60, and 90 days of underperformance?',
          'Create a recognition and reward system for top performers that is visible to the entire team',
          'Define the ideal rep profile for your team in writing — use it to evaluate existing talent and to hire better going forward'
        ]
      }
    ],
    pathTitle: 'Install executive-level revenue ownership.',
    pathBody: 'The highest-leverage move at your stage is not more reps or more technology  -  it is getting the right revenue leadership in place. MetaGrowth provides that leadership without the full-time C-suite overhead.',
    recs: [
      { icon: 'fa-crown', name: 'Install Executive Revenue Leadership', powered: 'Fractional CRO', desc: 'Get a dedicated revenue executive who owns forecast accuracy, performance culture, and strategic hiring — without the full-time C-suite cost.', link: '/solutions/fractional-cro', primary: true },
      { icon: 'fa-cogs', name: 'Fully Managed Sales Team', powered: 'Managed Sales Pods™', desc: 'Recruit, onboard, manage, coach, and hold salespeople accountable without requiring the founder to become a full-time sales manager.', link: '/solutions/managed-sales-pods' },
      { icon: 'fa-handshake', name: 'Performance-Only Engagement', powered: 'Rev Share Program', desc: 'We embed execution inside your business and only get paid when you close revenue — zero upfront investment, zero fixed overhead.', link: 'https://meetings.hubspot.com/josh549/revenue-audit?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Drevenue_audit' }
    ],
    ctaBody: "At your stage, the right revenue leadership changes everything. Let's talk about what that looks like for your business."
  }
};

// Override-specific content
const recruitingRec = { icon: 'fa-search', name: 'Hire Proven Sales Talent', powered: 'Recruiting Services', desc: 'Stop cycling through bad hires. Structured vetting, deep behavioral assessment, and performance-profile matching to identify real producers.', link: '/solutions/managed-sales-pods', primary: true };
const podsRec = { icon: 'fa-cogs', name: 'Fully Managed Sales Team', powered: 'Managed Sales Pods™', desc: 'Recruit, onboard, manage, coach, and hold salespeople accountable without requiring the founder to become a full-time sales manager.', link: '/solutions/managed-sales-pods', primary: true };
const commissionRec = { icon: 'fa-percentage', name: 'Add Reps Without Fixed Salary Risk', powered: 'Commission-Only Infrastructure', desc: 'Scale your sales headcount using 1099 reps — full systems, onboarding, training, and oversight included with zero base pay exposure.', link: '/solutions/commission-only' };

// -------------------------------------------------------------
//  SUBMIT & RENDER RESULTS
// -------------------------------------------------------------
function submitAssessment() {
  if (!validateStep(7)) return;

  const { final, rs, pm, si, tt, le, hiringOverride, bandwidthOverride, goal, obstacles } = calculateScore();

  // -- Wire up X-Ray handoff button with dynamic score URL ------------------
  // Set href now, right after calculateScore(), before panel.innerHTML overwrites
  // the DOM. The onclick GA4 event reads score-display text as a belt-and-suspenders
  // fallback, but the href is the authoritative score carrier.
  (function() {
    try {
      var xrayBtn = document.getElementById('xray-handoff-btn');
      if (xrayBtn) {
        xrayBtn.href = 'https://growthenginexray.com/?score=' + final
          + '&utm_source=metagrowth_assessment&utm_medium=referral&utm_campaign=assessment_handoff';
        // Override onclick to pass the exact final score (not DOM text) to GA4
        xrayBtn.onclick = function() {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'xray_handoff_click', {
              page_location:    window.location.href,
              page_title:       document.title,
              assessment_score: final,
              cta_label:        'See Which Revenue Engine X-Ray Fits You'
            });
          }
        };
      }
    } catch(e) {}
  })();

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

  // -- Store results in sessionStorage then redirect to report page ----------
  const firstName = document.getElementById('q-first-name').value.trim();
  const lastName  = document.getElementById('q-last-name').value.trim();
  const company   = document.getElementById('q-company').value.trim();
  const role      = document.getElementById('q-role').value.trim();
  const email     = document.getElementById('q-email').value.trim();
  const phone     = document.getElementById('q-phone').value.trim();

  // Load UTM attribution data captured on page load
  var utmData = {};
  try { utmData = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) {}

  const reportData = {
    firstName, lastName, company, role, email, phone,
    score: final,
    scores: { rs, pm, si, tt, le },
    outcome,
    // UTM attribution — preserved through entire funnel
    utm_source:   utmData.utm_source   || '',
    utm_medium:   utmData.utm_medium   || '',
    utm_campaign: utmData.utm_campaign || '',
    utm_term:     utmData.utm_term     || '',
    utm_content:  utmData.utm_content  || '',
    referrer:     utmData.referrer     || '',
    landing_page: utmData.landing_page || '',
  };

  try {
    localStorage.setItem('mgc_report', JSON.stringify(reportData));
  } catch(e) {
    // fallback to sessionStorage if localStorage unavailable
    try { sessionStorage.setItem('mgc_report', JSON.stringify(reportData)); } catch(e2) {}
  }

  // -- GA4 NOTE: assessment_complete is intentionally NOT fired here. ----------
  // Firing gtag() immediately before a page navigation is unreliable: the
  // async gtag.js script may not have flushed yet when window.location.href
  // changes 1.8s later, causing the event to be silently dropped.
  // assessment_complete is fired on /assessment/report after the page fully
  // loads and gtag.js is confirmed ready, gated by a sessionStorage key so
  // it fires exactly once per unique completed assessment.

  // Show "generating report" transition immediately while API call runs
  const panel = document.getElementById('results-panel');
  panel.classList.add('show');
  document.getElementById('progress-wrap').style.display = 'none';
  for (let i = 1; i <= 7; i++) document.getElementById('step-' + i).style.display = 'none';

  panel.innerHTML = '<div style="text-align:center;padding:80px 24px;">'
    + '<div style="width:72px;height:72px;border-radius:50%;background:rgba(173,120,5,0.12);border:2px solid rgba(173,120,5,0.3);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:1.8rem;color:#ad7805;">'
    + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="display:inline-block;width:1em;height:1em;fill:currentColor;"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg>'
    + '</div>'
    + '<h2 style="color:#fff;font-size:1.6rem;margin-bottom:12px;">Building Your Revenue Report\u2026</h2>'
    + '<p style="color:rgba(255,255,255,0.5);font-size:1rem;margin-bottom:32px;">Analyzing your responses and generating personalized recommendations.</p>'
    + '<div style="display:flex;gap:8px;justify-content:center;">'
    + '<div style="width:10px;height:10px;border-radius:50%;background:#ad7805;animation:dot-pulse 1.2s ease-in-out infinite;"></div>'
    + '<div style="width:10px;height:10px;border-radius:50%;background:#ad7805;animation:dot-pulse 1.2s ease-in-out 0.2s infinite;"></div>'
    + '<div style="width:10px;height:10px;border-radius:50%;background:#ad7805;animation:dot-pulse 1.2s ease-in-out 0.4s infinite;"></div>'
    + '</div>'
    + '<style>@keyframes dot-pulse{0%,80%,100%{opacity:.2;transform:scale(0.8)}40%{opacity:1;transform:scale(1)}}</style>'
    + '</div>';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Await the API call so the Worker has time to send both emails before
  // the page navigates away. Navigation was previously 1.8s which was
  // insufficient for the Gmail token exchange + two send calls to complete.
  var apiDone = false;
  fetch('/api/assessment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName, lastName, company, role, email, phone,
      score: final,
      scores: { rs, pm, si, tt, le },
      stageBadge: outcome.badge,
      stageTitle: outcome.title,
      diagTitle: outcome.diagTitle,
      diagBody: outcome.diagBody,
      bottlenecks: outcome.bottlenecks || [],
      // UTM attribution
      utm_source:   utmData.utm_source   || '',
      utm_medium:   utmData.utm_medium   || '',
      utm_campaign: utmData.utm_campaign || '',
      utm_term:     utmData.utm_term     || '',
      utm_content:  utmData.utm_content  || '',
      referrer:     utmData.referrer     || '',
      landing_page: utmData.landing_page || '',
      source_url:   window.location.href,
    }),
  }).catch(function() {}).finally(function() {
    apiDone = true;
    window.location.href = '/assessment/report';
  });

  // Safety fallback: navigate after 8s even if API hasn't responded
  setTimeout(function() {
    if (!apiDone) { window.location.href = '/assessment/report'; }
  }, 8000);
}

// -------------------------------------------------------------
//  ANIMATION HELPERS
// -------------------------------------------------------------
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

// -------------------------------------------------------------
//  RESTART
// -------------------------------------------------------------
function restartAssessment() {
  // Reset all radio/checkbox
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.checkbox-card').forEach(c => c.classList.remove('selected'));

  // Reset text inputs
  ['q-first-name','q-last-name','q-company','q-role','q-email','q-phone'].forEach(id => {
    document.getElementById(id).value = '';
  });

  // Show form, hide results
  document.getElementById('results-panel').classList.remove('show');
  document.getElementById('progress-wrap').style.display = 'block';
  for (let i = 1; i <= 7; i++) {
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
