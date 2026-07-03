export const growthEngineXRayPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Growth Engine X-Ray™ | MetaGrowth Ventures</title>
  <meta name="description" content="Growth Engine X-Ray™ finds hidden bottlenecks in your sales process, pipeline, CRM, and lead gen. From $497. 100% credited toward any MetaGrowth engagement.">
  <link rel="canonical" href="https://metagrowth.ventures/growth-engine-xray">
  <link rel="icon" type="image/png" href="/static/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EY6ZN6M9F"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9EY6ZN6M9F', { send_page_view: true });
    gtag('event', 'xray_page_view', { page_location: window.location.href, page_title: document.title });
  </script>
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script","xbls14o22c");
  </script>

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:       #0A0A0A;
      --bg-mid:   #111111;
      --bg-card:  #141414;
      --gold:     #ad7805;
      --gold-lt:  #c99220;
      --gold-dim: rgba(173,120,5,0.12);
      --gold-bdr: rgba(173,120,5,0.28);
      --white:    #ffffff;
      --muted:    rgba(255,255,255,0.55);
      --subtle:   rgba(255,255,255,0.08);
      --font:     'Inter', system-ui, -apple-system, sans-serif;
      --radius:   10px;
      --max:      860px;
      --max-wide: 1040px;
    }
    html { scroll-behavior: smooth; overflow-x: hidden; }
    body { font-family: var(--font); background: var(--bg); color: var(--white); -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }
    .container { max-width: var(--max); margin: 0 auto; padding: 0 28px; }
    .container--wide { max-width: var(--max-wide); margin: 0 auto; padding: 0 28px; }
    .section-pad { padding: 96px 0; }
    .section-label {
      display: inline-block;
      font-size: 0.7rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.15em; color: var(--gold);
      margin-bottom: 16px;
    }
    .section-headline {
      font-size: clamp(1.7rem, 3.5vw, 2.4rem);
      font-weight: 900; letter-spacing: -0.025em;
      color: var(--white); line-height: 1.15;
      margin-bottom: 20px;
    }
    .section-intro {
      font-size: 1.05rem; color: var(--muted); line-height: 1.75;
      max-width: 640px; margin-bottom: 16px;
    }

    /* -- NAV -- */
    .xr-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      background: rgba(10,10,10,0.96);
      border-bottom: 1px solid var(--gold-bdr);
      backdrop-filter: blur(12px);
      height: 64px;
      display: flex; align-items: center;
    }
    .xr-nav-inner {
      width: 100%; max-width: var(--max-wide);
      margin: 0 auto; padding: 0 28px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .xr-nav-logo {
      display: flex; align-items: center; gap: 10px;
      font-size: 0.85rem; font-weight: 700; letter-spacing: 0.01em;
      color: rgba(255,255,255,0.5);
    }
    .xr-nav-logo img { height: 28px; width: auto; }
    .xr-nav-logo .brand-name { color: var(--white); }
    .xr-nav-actions { display: flex; align-items: center; gap: 12px; }
    .nav-talk-btn {
      display: inline-flex; align-items: center; gap: 7px;
      font-size: 0.82rem; font-weight: 600; color: var(--muted);
      padding: 8px 16px; border-radius: 7px;
      border: 1px solid var(--subtle);
      transition: all 0.2s;
    }
    .nav-talk-btn:hover { color: var(--white); border-color: rgba(255,255,255,0.2); }
    .nav-cta-btn {
      display: inline-flex; align-items: center; gap: 7px;
      font-size: 0.85rem; font-weight: 700; color: #0A0A0A;
      background: var(--gold);
      padding: 9px 20px; border-radius: 7px;
      transition: all 0.2s;
    }
    .nav-cta-btn:hover { background: var(--gold-lt); transform: translateY(-1px); }

    /* -- HERO -- */
    .xr-hero {
      padding: 140px 0 96px;
      position: relative; overflow: hidden;
    }
    .xr-hero-grid {
      position: absolute; inset: 0; z-index: 0;
      background-image:
        linear-gradient(rgba(173,120,5,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(173,120,5,0.06) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 100%);
    }
    .xr-hero-glow {
      position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
      width: 1000px; height: 600px; z-index: 0;
      background: radial-gradient(ellipse at center, rgba(173,120,5,0.14) 0%, transparent 65%);
      pointer-events: none;
    }
    .xr-hero-content {
      position: relative; z-index: 1;
      text-align: center;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em;
      color: var(--gold);
      background: var(--gold-dim); border: 1px solid var(--gold-bdr);
      border-radius: 20px; padding: 7px 18px;
      margin-bottom: 32px;
    }
    .xr-headline {
      font-size: clamp(2.6rem, 5.5vw, 4rem);
      font-weight: 900; letter-spacing: -0.03em; line-height: 1.08;
      margin-bottom: 28px;
    }
    .xr-headline em { font-style: normal; color: var(--gold); }
    .xr-sub {
      font-size: clamp(1rem, 2vw, 1.18rem);
      color: var(--muted); line-height: 1.75;
      max-width: 600px; margin: 0 auto 36px;
    }
    .xr-sub strong { color: rgba(255,255,255,0.88); font-weight: 700; }
    .hero-credit-note {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.88rem; color: var(--muted);
      background: var(--gold-dim); border: 1px solid var(--gold-bdr);
      border-radius: 8px; padding: 11px 20px;
      margin-bottom: 48px;
    }
    .hero-credit-note i { color: var(--gold); }
    .hero-cta-group {
      display: flex; flex-wrap: wrap; gap: 14px;
      justify-content: center;
    }

    /* -- BUTTONS -- */
    .btn-primary {
      display: inline-flex; align-items: center; gap: 9px;
      background: var(--gold); color: #0A0A0A;
      font-weight: 800; font-size: 1rem;
      padding: 16px 32px; border-radius: var(--radius);
      transition: all 0.2s; white-space: nowrap;
    }
    .btn-primary:hover { background: var(--gold-lt); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(173,120,5,0.35); }
    .btn-primary.btn-lg { padding: 18px 38px; font-size: 1.05rem; }
    .btn-talk {
      display: inline-flex; align-items: center; gap: 9px;
      background: transparent; color: rgba(255,255,255,0.7);
      border: 1.5px solid rgba(255,255,255,0.18);
      font-weight: 600; font-size: 1rem;
      padding: 16px 28px; border-radius: var(--radius);
      transition: all 0.2s; white-space: nowrap;
    }
    .btn-talk:hover { border-color: rgba(255,255,255,0.45); color: var(--white); transform: translateY(-2px); }
    .btn-outline {
      display: inline-flex; align-items: center; gap: 9px;
      background: transparent; color: rgba(255,255,255,0.7);
      border: 1.5px solid rgba(255,255,255,0.18);
      font-weight: 600; font-size: 0.9rem;
      padding: 13px 24px; border-radius: var(--radius);
      transition: all 0.2s;
    }
    .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
    .btn-block { width: 100%; justify-content: center; }

    /* -- PROBLEM -- */
    .problem-grid {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
      max-width: 680px; margin: 32px auto 36px;
    }
    .problem-item {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.03); border: 1px solid var(--subtle);
      border-radius: 8px; padding: 14px 18px;
      font-size: 0.9rem; color: rgba(255,255,255,0.75);
    }
    .problem-item i { color: #ef4444; font-size: 0.85rem; flex-shrink: 0; }
    .problem-cta-box {
      max-width: 640px; margin: 0 auto;
      background: var(--gold-dim); border: 1px solid var(--gold-bdr);
      border-radius: var(--radius); padding: 22px 28px;
      font-size: 1rem; color: var(--muted); line-height: 1.7; text-align: center;
    }
    .problem-cta-box strong { color: var(--white); }

    /* -- WHAT IT IS -- */
    .not-a-pitch-row {
      display: grid; grid-template-columns: 1fr 1fr 1.4fr; gap: 14px;
      margin-top: 36px;
    }
    .nap-card {
      border-radius: var(--radius); padding: 22px 20px;
      display: flex; align-items: flex-start; gap: 14px;
      font-size: 0.9rem; line-height: 1.65;
    }
    .nap-card.no {
      background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.18);
      color: rgba(255,255,255,0.6);
    }
    .nap-card.no i { color: #ef4444; margin-top: 2px; flex-shrink: 0; }
    .nap-card.yes {
      background: var(--gold-dim); border: 1px solid var(--gold-bdr);
      color: rgba(255,255,255,0.75);
    }
    .nap-card.yes i { color: var(--gold); margin-top: 2px; flex-shrink: 0; }
    .nap-card strong { color: var(--white); }

    /* -- PRICING -- */
    .pricing-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
      max-width: 780px; margin: 48px auto 0;
    }
    .pricing-card {
      background: var(--bg-card); border: 1px solid var(--subtle);
      border-radius: 16px; overflow: hidden;
      display: flex; flex-direction: column;
      transition: transform 0.2s;
    }
    .pricing-card:hover { transform: translateY(-4px); }
    .pricing-card--featured {
      border-color: var(--gold-bdr);
      background: linear-gradient(160deg, rgba(173,120,5,0.07) 0%, var(--bg-card) 60%);
    }
    .card-top { padding: 32px 28px 24px; }
    .card-badge {
      display: inline-block;
      font-size: 0.67rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
      padding: 4px 10px; border-radius: 4px; margin-bottom: 16px;
      background: var(--subtle); color: rgba(255,255,255,0.45);
    }
    .pricing-card--featured .card-badge {
      background: var(--gold); color: #0A0A0A;
    }
    .card-title { font-size: 1.2rem; font-weight: 800; margin-bottom: 10px; }
    .card-price {
      font-size: 2.8rem; font-weight: 900; color: var(--gold);
      line-height: 1; margin-bottom: 14px;
    }
    .card-price .price-dollar { font-size: 1.4rem; vertical-align: top; margin-top: 8px; display: inline-block; }
    .card-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.65; }
    .card-body { padding: 0 28px 24px; flex: 1; }
    .card-section-label {
      font-size: 0.65rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.12em; color: var(--gold);
      margin: 20px 0 12px;
    }
    .card-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
    .card-list li {
      display: flex; align-items: center; gap: 10px;
      font-size: 0.875rem; color: rgba(255,255,255,0.75); line-height: 1.45;
    }
    .card-list li i { color: var(--gold); font-size: 0.75rem; flex-shrink: 0; }
    .card-list.card-list-for li i { color: rgba(255,255,255,0.35); }
    .card-footer { padding: 0 28px 28px; }
    .card-stripe-note {
      font-size: 0.72rem; color: rgba(255,255,255,0.22);
      text-align: center; margin-top: 10px;
      display: flex; align-items: center; justify-content: center; gap: 6px;
    }

    /* -- WHAT GETS X-RAYED -- */
    .xray-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
      margin-top: 40px;
    }
    .xray-item {
      background: rgba(255,255,255,0.03); border: 1px solid var(--subtle);
      border-radius: var(--radius); padding: 24px 18px;
      text-align: center; transition: all 0.2s;
    }
    .xray-item:hover { border-color: var(--gold-bdr); background: var(--gold-dim); }
    .xray-item-icon { font-size: 1.5rem; color: var(--gold); margin-bottom: 12px; }
    .xray-item-title { font-size: 0.88rem; font-weight: 700; color: var(--white); margin-bottom: 6px; }
    .xray-item-desc { font-size: 0.78rem; color: var(--muted); line-height: 1.5; }

    /* -- SCORE OUTPUT -- */
    .score-output-wrap {
      display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
      margin-top: 40px;
    }
    .score-col-card {
      background: var(--bg-card); border: 1px solid var(--subtle);
      border-radius: var(--radius); padding: 28px;
    }
    .score-col-card h4 {
      font-size: 0.7rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.12em; color: var(--gold);
      margin-bottom: 18px;
    }
    .score-cat-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .score-cat-list li {
      display: flex; align-items: center; gap: 10px;
      font-size: 0.88rem; color: rgba(255,255,255,0.75);
    }
    .score-cat-list li i { color: var(--gold); font-size: 0.8rem; flex-shrink: 0; }
    .score-range-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .score-range-item {
      display: flex; align-items: center; justify-content: space-between;
      padding: 9px 14px; border-radius: 7px;
      font-size: 0.84rem;
    }
    .score-range-item .range-label { font-weight: 600; color: var(--white); }
    .score-range-item .range-tag {
      font-size: 0.7rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.08em; padding: 3px 9px; border-radius: 4px;
    }
    .range-elite   { background: rgba(34,197,94,0.12);  } .range-elite   .range-tag { background: rgba(34,197,94,0.2);  color: #4ade80; }
    .range-strong  { background: rgba(59,130,246,0.10); } .range-strong  .range-tag { background: rgba(59,130,246,0.2); color: #60a5fa; }
    .range-stable  { background: rgba(173,120,5,0.10);  } .range-stable  .range-tag { background: rgba(173,120,5,0.2);  color: var(--gold-lt); }
    .range-risk    { background: rgba(249,115,22,0.10); } .range-risk    .range-tag { background: rgba(249,115,22,0.2); color: #fb923c; }
    .range-crit    { background: rgba(239,68,68,0.10);  } .range-crit    .range-tag { background: rgba(239,68,68,0.2);  color: #f87171; }

    /* -- GUARANTEE / PHILOSOPHY SECTIONS -- */
    .highlight-box {
      background: var(--gold-dim); border: 1px solid var(--gold-bdr);
      border-radius: 16px; padding: 48px 48px;
      text-align: center;
    }
    .highlight-box p { font-size: 1rem; color: var(--muted); line-height: 1.75; max-width: 620px; margin: 0 auto 20px; }
    .highlight-box strong { color: var(--white); }
    .highlight-box .disclaimer {
      font-size: 0.78rem; color: rgba(255,255,255,0.3); line-height: 1.65;
      border-top: 1px solid rgba(255,255,255,0.07); margin-top: 24px; padding-top: 20px;
      text-align: left; max-width: 620px; margin-left: auto; margin-right: auto;
    }
    .refund-box {
      background: rgba(255,255,255,0.03); border: 1px solid var(--subtle);
      border-radius: 16px; padding: 48px 48px;
      text-align: center;
    }
    .refund-box p { font-size: 1rem; color: var(--muted); line-height: 1.75; max-width: 620px; margin: 0 auto 12px; }
    .refund-box strong { color: var(--white); }
    .refund-box .disclaimer {
      font-size: 0.78rem; color: rgba(255,255,255,0.3); line-height: 1.65;
      border-top: 1px solid rgba(255,255,255,0.07); margin-top: 24px; padding-top: 20px;
      text-align: left; max-width: 620px; margin-left: auto; margin-right: auto;
    }
    .badge-large {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;
      color: var(--gold); background: var(--gold-dim); border: 1px solid var(--gold-bdr);
      border-radius: 20px; padding: 7px 18px; margin-bottom: 24px;
    }

    /* -- PHILOSOPHY -- */
    .philosophy-cols {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
      margin: 36px 0 40px;
    }
    .phil-card {
      background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15);
      border-radius: var(--radius); padding: 22px 20px;
    }
    .phil-card-label {
      font-size: 0.68rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.1em; color: #f87171; margin-bottom: 10px;
    }
    .phil-card p { font-size: 0.875rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
    .phil-card strong { color: rgba(255,255,255,0.85); }
    .philosophy-statement {
      background: var(--gold-dim); border: 1px solid var(--gold-bdr);
      border-radius: var(--radius); padding: 24px 28px;
      font-size: 1.05rem; font-weight: 600; color: var(--white);
      line-height: 1.65; text-align: center;
    }
    .philosophy-statement em { font-style: italic; color: var(--gold); }

    /* -- COMMON FINDINGS -- */
    .findings-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
      margin-top: 40px;
    }
    .finding-card {
      background: var(--bg-card); border: 1px solid var(--subtle);
      border-radius: var(--radius); padding: 22px 20px;
      transition: all 0.2s;
    }
    .finding-card:hover { border-color: var(--gold-bdr); }
    .finding-assumption {
      font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.08em; color: rgba(255,255,255,0.35);
      margin-bottom: 8px;
    }
    .finding-label {
      font-size: 0.9rem; font-weight: 600; color: rgba(255,255,255,0.55);
      margin-bottom: 10px;
    }
    .finding-arrow { color: var(--gold); font-size: 0.8rem; margin: 6px 0; }
    .finding-real {
      font-size: 0.88rem; font-weight: 700; color: var(--white);
    }
    .finding-real em { font-style: normal; color: var(--gold); }

    /* -- FINAL CTA -- */
    .final-cta {
      background: linear-gradient(160deg, rgba(173,120,5,0.1) 0%, transparent 60%);
      border: 1px solid var(--gold-bdr);
      border-radius: 20px; padding: 72px 48px;
      text-align: center;
    }
    .final-cta h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900; letter-spacing: -0.025em; margin-bottom: 18px; }
    .final-cta p { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 540px; margin: 0 auto 32px; }
    .final-cta-btns { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-bottom: 20px; }
    .final-credit-note { font-size: 0.82rem; color: rgba(255,255,255,0.3); }
    .final-credit-note i { color: var(--gold); margin-right: 5px; }

    /* -- FOOTER -- */
    .xr-footer {
      border-top: 1px solid var(--subtle);
      padding: 36px 28px; text-align: center;
      font-size: 0.8rem; color: rgba(255,255,255,0.2);
    }
    .xr-footer a { color: rgba(255,255,255,0.38); transition: color 0.2s; }
    .xr-footer a:hover { color: var(--gold); }
    .xr-footer .footer-sep { margin: 0 10px; opacity: 0.3; }

    /* -- RESPONSIVE -- */
    @media (max-width: 860px) {
      .pricing-grid { grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
      .xray-grid { grid-template-columns: repeat(2, 1fr); }
      .findings-grid { grid-template-columns: repeat(2, 1fr); }
      .philosophy-cols { grid-template-columns: 1fr; }
      .not-a-pitch-row { grid-template-columns: 1fr; }
      .score-output-wrap { grid-template-columns: 1fr; }
      .highlight-box, .refund-box, .final-cta { padding: 40px 28px; }
      .xr-nav-actions .nav-talk-btn { display: none; }
      .section-pad { padding: 72px 0; }
    }
    @media (max-width: 560px) {
      .problem-grid { grid-template-columns: 1fr; }
      .xray-grid { grid-template-columns: repeat(2, 1fr); }
      .findings-grid { grid-template-columns: 1fr; }
      .hero-cta-group { flex-direction: column; align-items: stretch; }
      .hero-cta-group .btn-primary, .hero-cta-group .btn-talk { justify-content: center; }
      .final-cta-btns { flex-direction: column; align-items: stretch; }
      .final-cta-btns a { justify-content: center; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav class="xr-nav" id="xr-nav">
    <div class="xr-nav-inner">
      <a href="#hero" class="xr-nav-logo">
        <img src="/static/logo.png" alt="MetaGrowth Ventures">
        <span class="brand-name">Growth Engine X-Ray™</span>
      </a>
      <div class="xr-nav-actions">
        <a href="https://meetings.hubspot.com/josh549/growth-engine-xray-learn-more?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Dxray" target="_blank" rel="noopener" class="nav-talk-btn"
           onclick="if(typeof gtag!=='undefined')gtag('event','calendar_open',{page_location:window.location.href,page_title:document.title,cta_label:'Not Sure? Talk to Us'})">
          <i class="fas fa-comments"></i> Not Sure? Talk to Us
        </a>
        <a href="#pricing" class="nav-cta-btn">
          Get My X-Ray
        </a>
      </div>
    </div>
  </nav>

  <!-- ===== HERO ===== -->
  <section class="xr-hero" id="hero">
    <div class="xr-hero-grid"></div>
    <div class="xr-hero-glow"></div>
    <div class="container xr-hero-content">
      <div class="hero-badge">
        <i class="fas fa-crosshairs"></i> Revenue Diagnostic
      </div>
      <h1 class="xr-headline">
        See What's <em>Really</em> Limiting<br class="d-none-sm"> Your Growth
      </h1>
      <p class="xr-sub">
        Most companies don't know where revenue is breaking down. The <strong>Growth Engine X-Ray™</strong>
        identifies the hidden bottlenecks in your sales process, pipeline, team, CRM, and lead generation system.
      </p>
      <div class="hero-credit-note">
        <i class="fas fa-check-circle"></i>
        Starting at $497 &nbsp;·&nbsp; 100% credited toward any future MetaGrowth engagement within 90 days.
      </div>
      <div class="hero-cta-group">
        <a href="#pricing" class="btn-primary btn-lg">
          Get My Growth Engine X-Ray <i class="fas fa-arrow-right"></i>
        </a>
        <a href="https://meetings.hubspot.com/josh549/growth-engine-xray-learn-more?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Dxray" target="_blank" rel="noopener" class="btn-talk btn-lg"
           onclick="if(typeof gtag!=='undefined')gtag('event','calendar_open',{page_location:window.location.href,page_title:document.title,cta_label:'Not Sure? Talk to Our Team'})">
          <i class="fas fa-comments"></i> Not sure? Talk to our team
        </a>
      </div>
    </div>
    <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;opacity:0.3;animation:heroScroll 2s ease-in-out infinite;">
      <div style="width:1px;height:36px;background:linear-gradient(to bottom,transparent,rgba(173,120,5,0.8));"></div>
    </div>
  </section>
  <style>@keyframes heroScroll{0%,100%{opacity:0.3;transform:translateX(-50%) translateY(0)}50%{opacity:0.6;transform:translateX(-50%) translateY(6px)}}</style>

  <!-- ===== PROBLEM ===== -->
  <section class="section-pad" id="problem" style="background:var(--bg-mid);">
    <div class="container">
      <div class="section-label">The Problem</div>
      <h2 class="section-headline">Revenue Problems Are<br> Usually Misdiagnosed</h2>
      <p class="section-intro">Most companies assume they need more leads, another salesperson, better software, or more sales training.</p>
      <p class="section-intro">But often, the real issue is hidden somewhere deeper:</p>
      <div class="problem-grid">
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>Weak qualification</span></div>
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>Poor follow-up</span></div>
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>Bad pipeline visibility</span></div>
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>CRM data nobody trusts</span></div>
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>Salespeople without enough accountability</span></div>
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>Outbound messaging that isn't converting</span></div>
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>Deals stalling without leadership knowing why</span></div>
        <div class="problem-item"><i class="fas fa-times-circle"></i><span>Revenue depending on one or two key people</span></div>
      </div>
      <div class="problem-cta-box">
        <p>Before you spend more money trying to fix growth, <strong>you need to know what is actually broken.</strong></p>
      </div>
    </div>
  </section>

  <!-- ===== WHAT IT IS ===== -->
  <section class="section-pad" id="what-it-is">
    <div class="container">
      <div class="section-label">What It Is</div>
      <h2 class="section-headline">What Is the Growth Engine X-Ray™?</h2>
      <p class="section-intro">The Growth Engine X-Ray™ is a <strong>structured diagnostic review of your revenue engine.</strong></p>
      <p class="section-intro">We evaluate your sales process, lead generation, outbound strategy, CRM, pipeline, team performance, and leadership rhythm to identify the biggest constraints preventing predictable revenue growth.</p>
      <div class="not-a-pitch-row">
        <div class="nap-card no">
          <i class="fas fa-ban"></i>
          <span>This is <strong>not</strong> a sales pitch.</span>
        </div>
        <div class="nap-card no">
          <i class="fas fa-ban"></i>
          <span>This is <strong>not</strong> a disguised consultation.</span>
        </div>
        <div class="nap-card yes">
          <i class="fas fa-check-circle"></i>
          <span>This is a <strong>paid diagnostic</strong> designed to give you clarity, recommendations, and a practical path forward.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PRICING ===== -->
  <section class="section-pad" id="pricing" style="background:var(--bg-mid);">
    <div class="container">
      <div class="section-label">Choose Your Diagnostic</div>
      <h2 class="section-headline">Two Ways to Get the Clarity You Need</h2>
      <div class="pricing-grid">

        <!-- Card 1: Revenue Snapshot -->
        <article class="pricing-card" id="card-snapshot">
          <div class="card-top">
            <div class="card-badge">Entry Option</div>
            <h3 class="card-title">Revenue Snapshot™</h3>
            <div class="card-price"><span class="price-dollar">$</span>497</div>
            <p class="card-desc">A focused 60-minute review for founders and small teams who want quick clarity on where revenue is breaking down.</p>
          </div>
          <div class="card-body">
            <div class="card-section-label">Includes</div>
            <ul class="card-list">
              <li><i class="fas fa-check"></i>60-minute diagnostic session</li>
              <li><i class="fas fa-check"></i>Sales process review</li>
              <li><i class="fas fa-check"></i>Lead generation review</li>
              <li><i class="fas fa-check"></i>Pipeline health check</li>
              <li><i class="fas fa-check"></i>Team performance discussion</li>
              <li><i class="fas fa-check"></i>Top 5 findings</li>
              <li><i class="fas fa-check"></i>Written recommendations</li>
            </ul>
            <div class="card-section-label">Best For</div>
            <ul class="card-list card-list-for">
              <li><i class="fas fa-user"></i>Founder-led sales</li>
              <li><i class="fas fa-users"></i>Smaller teams</li>
              <li><i class="fas fa-seedling"></i>Early-stage companies</li>
              <li><i class="fas fa-lightbulb"></i>Companies that want a second opinion</li>
            </ul>
          </div>
          <div class="card-footer">
            <a href="https://buy.stripe.com/eVq6oGfmn3oV6MXeFz14408" target="_blank" rel="noopener"
               class="btn-outline btn-block"
               onclick="if(typeof gtag!=='undefined')gtag('event','revenue_review_click',{page_location:window.location.href,page_title:document.title,cta_label:'Book Revenue Snapshot',value:497})">
              Book Revenue Snapshot <i class="fas fa-arrow-right"></i>
            </a>
            <p class="card-stripe-note"><i class="fab fa-stripe"></i> Secure checkout &middot; Stripe</p>
          </div>
        </article>

        <!-- Card 2: Full X-Ray -->
        <article class="pricing-card pricing-card--featured" id="card-xray">
          <div class="card-top">
            <div class="card-badge">Most Comprehensive</div>
            <h3 class="card-title">Growth Engine X-Ray™</h3>
            <div class="card-price"><span class="price-dollar">$</span>997</div>
            <p class="card-desc">A deeper 90-minute diagnostic workshop for companies serious about improving sales performance and building predictable growth.</p>
          </div>
          <div class="card-body">
            <div class="card-section-label">Includes</div>
            <ul class="card-list">
              <li><i class="fas fa-check"></i>90-minute diagnostic workshop</li>
              <li><i class="fas fa-check"></i>CRM review</li>
              <li><i class="fas fa-check"></i>Pipeline analysis</li>
              <li><i class="fas fa-check"></i>Outbound assessment</li>
              <li><i class="fas fa-check"></i>Sales process review</li>
              <li><i class="fas fa-check"></i>Sales team evaluation</li>
              <li><i class="fas fa-check"></i>KPI and reporting review</li>
              <li><i class="fas fa-check"></i>Leadership review</li>
              <li><i class="fas fa-check"></i>Written findings report</li>
              <li><i class="fas fa-check"></i>30-60-90 day action plan</li>
            </ul>
            <div class="card-section-label">Best For</div>
            <ul class="card-list card-list-for">
              <li><i class="fas fa-building"></i>Companies with sales teams</li>
              <li><i class="fas fa-chart-line"></i>Businesses preparing to scale</li>
              <li><i class="fas fa-sync-alt"></i>Organizations with inconsistent revenue</li>
              <li><i class="fas fa-eye"></i>Leaders who need better visibility</li>
            </ul>
          </div>
          <div class="card-footer">
            <a href="https://buy.stripe.com/14A6oGgqrf7D6MX9lf1440a" target="_blank" rel="noopener"
               class="btn-primary btn-block"
               onclick="if(typeof gtag!=='undefined')gtag('event','revenue_review_click',{page_location:window.location.href,page_title:document.title,cta_label:'Book Full X-Ray',value:997})">
              Book Full X-Ray <i class="fas fa-arrow-right"></i>
            </a>
            <p class="card-stripe-note"><i class="fab fa-stripe"></i> Secure checkout &middot; Stripe</p>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- ===== WHAT GETS X-RAYED ===== -->
  <section class="section-pad" id="diagnostic">
    <div class="container--wide">
      <div style="text-align:center;">
        <div class="section-label">The Diagnostic</div>
        <h2 class="section-headline">What Gets X-Rayed</h2>
      </div>
      <div class="xray-grid">
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-filter"></i></div>
          <div class="xray-item-title">Lead Generation</div>
          <div class="xray-item-desc">Are enough qualified opportunities entering the system?</div>
        </div>
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-paper-plane"></i></div>
          <div class="xray-item-title">Outbound</div>
          <div class="xray-item-desc">Are your targeting, messaging, email, LinkedIn, calls, and follow-up converting?</div>
        </div>
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-route"></i></div>
          <div class="xray-item-title">Sales Process</div>
          <div class="xray-item-desc">Are prospects being qualified, advanced, followed up with, and closed effectively?</div>
        </div>
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-stream"></i></div>
          <div class="xray-item-title">Pipeline</div>
          <div class="xray-item-desc">Where are deals stalling, leaking, or being misforecasted?</div>
        </div>
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-users"></i></div>
          <div class="xray-item-title">Sales Team</div>
          <div class="xray-item-desc">Can your current team realistically hit your revenue goals?</div>
        </div>
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-database"></i></div>
          <div class="xray-item-title">CRM</div>
          <div class="xray-item-desc">Can leadership trust the data, dashboards, pipeline, and reporting?</div>
        </div>
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-chart-bar"></i></div>
          <div class="xray-item-title">KPIs &amp; Reporting</div>
          <div class="xray-item-desc">Are the right metrics tracked, reviewed, and acted on consistently?</div>
        </div>
        <div class="xray-item">
          <div class="xray-item-icon"><i class="fas fa-chess-king"></i></div>
          <div class="xray-item-title">Leadership</div>
          <div class="xray-item-desc">Is there a clear rhythm for accountability, coaching, forecasting, and performance improvement?</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== SCORE OUTPUT ===== -->
  <section class="section-pad" style="background:var(--bg-mid);" id="score">
    <div class="container">
      <div class="section-label">The Output</div>
      <h2 class="section-headline">Receive Your Growth Engine Score™</h2>
      <p class="section-intro">Every diagnostic includes a score across the core areas of your revenue engine.</p>
      <div class="score-output-wrap">
        <div class="score-col-card">
          <h4>Scored Categories</h4>
          <ul class="score-cat-list">
            <li><i class="fas fa-check-circle"></i>Lead Generation</li>
            <li><i class="fas fa-check-circle"></i>Outbound</li>
            <li><i class="fas fa-check-circle"></i>Sales Process</li>
            <li><i class="fas fa-check-circle"></i>Pipeline Health</li>
            <li><i class="fas fa-check-circle"></i>Sales Team</li>
            <li><i class="fas fa-check-circle"></i>CRM &amp; Reporting</li>
            <li><i class="fas fa-check-circle"></i>Leadership &amp; Accountability</li>
          </ul>
        </div>
        <div class="score-col-card">
          <h4>Score Ranges</h4>
          <ul class="score-range-list">
            <li class="score-range-item range-elite"><span class="range-label">90–100</span><span class="range-tag">Elite</span></li>
            <li class="score-range-item range-strong"><span class="range-label">80–89</span><span class="range-tag">Strong</span></li>
            <li class="score-range-item range-stable"><span class="range-label">70–79</span><span class="range-tag">Stable</span></li>
            <li class="score-range-item range-risk"><span class="range-label">60–69</span><span class="range-tag">At Risk</span></li>
            <li class="score-range-item range-crit"><span class="range-label">Below 60</span><span class="range-tag">Critical</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CREDIT GUARANTEE ===== -->
  <section class="section-pad" id="credit">
    <div class="container">
      <div class="section-label">Credit Guarantee</div>
      <h2 class="section-headline">Your Diagnostic Fee Is Credited If We Work Together</h2>
      <div class="highlight-box">
        <div class="badge-large"><i class="fas fa-shield-alt"></i> 100% Credit Guarantee</div>
        <p>If you choose to engage MetaGrowth Ventures within 90 days of completing your Growth Engine X-Ray™, <strong>100% of your diagnostic investment will be credited</strong> toward your onboarding fee or first month's investment.</p>
        <p>That means your diagnostic effectively becomes <strong>free</strong> if we move forward together.</p>
        <p style="color:rgba(255,255,255,0.4);font-size:0.88rem;">No pressure. No obligation.</p>
      </div>
    </div>
  </section>

  <!-- ===== MONEY-BACK ===== -->
  <section class="section-pad" style="background:var(--bg-mid);" id="guarantee">
    <div class="container">
      <div class="section-label">100% Money-Back</div>
      <h2 class="section-headline">Our Promise</h2>
      <p class="section-intro" style="margin-bottom:32px;">If It's Not Valuable, You Don't Pay</p>
      <div class="refund-box">
        <div class="badge-large" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.12);color:rgba(255,255,255,0.6);"><i class="fas fa-hand-holding-usd"></i> Full Refund Guarantee</div>
        <p>We stand behind the quality of every Growth Engine X-Ray™. If you complete your diagnostic and genuinely feel you didn't receive meaningful, actionable insights — <strong>we will refund your investment in full.</strong> No hard feelings, no runaround.</p>
        <p>We're confident in what we deliver. This guarantee exists because we believe you should be too.</p>
        <div class="disclaimer">
          <strong>Refund Disclaimer:</strong> Refund requests must be submitted within <strong>10 days</strong> of the completed diagnostic session. Upon refund, all Growth Engine X-Ray™ findings, written reports, scores, recommendations, and any associated materials must be deleted and may not be retained, referenced, or acted upon by the client. Refunds are not available for clients who have already initiated or engaged a MetaGrowth Ventures service agreement.
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PHILOSOPHY ===== -->
  <section class="section-pad" id="philosophy">
    <div class="container">
      <div class="section-label">Our Philosophy</div>
      <h2 class="section-headline">Diagnose Before You Prescribe</h2>
      <div class="philosophy-cols">
        <div class="phil-card">
          <div class="phil-card-label">Most Agencies</div>
          <p>Sell services <strong>before they understand the problem.</strong></p>
        </div>
        <div class="phil-card">
          <div class="phil-card-label">Most Consultants</div>
          <p>Give <strong>generic recommendations</strong> based on pattern-matching, not your specific situation.</p>
        </div>
        <div class="phil-card">
          <div class="phil-card-label">Most Sales Trainers</div>
          <p>Assume <strong>training is the answer</strong> — regardless of whether the problem is process, people, or leadership.</p>
        </div>
      </div>
      <div class="philosophy-statement">
        We believe growth problems should be <em>diagnosed</em> before anyone recommends a solution.<br>
        <span style="font-size:0.9rem;font-weight:400;color:var(--muted);margin-top:10px;display:block;">The Growth Engine X-Ray™ gives you the clarity to make smarter decisions before investing more time, money, or resources.</span>
      </div>
    </div>
  </section>

  <!-- ===== COMMON FINDINGS ===== -->
  <section class="section-pad" style="background:var(--bg-mid);" id="findings">
    <div class="container--wide">
      <div style="text-align:center; margin-bottom:12px;">
        <div class="section-label">Common Findings</div>
        <h2 class="section-headline">What Companies Often Discover</h2>
        <p style="color:var(--muted);font-size:1rem;margin-top:8px;">You may not have the problem you think you have.</p>
      </div>
      <div class="findings-grid">
        <div class="finding-card">
          <div class="finding-assumption">You think it's a</div>
          <div class="finding-label">Lead problem</div>
          <div class="finding-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="finding-real">It's actually a <em>conversion problem</em></div>
        </div>
        <div class="finding-card">
          <div class="finding-assumption">You think it's a</div>
          <div class="finding-label">CRM problem</div>
          <div class="finding-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="finding-real">It's actually a <em>process problem</em></div>
        </div>
        <div class="finding-card">
          <div class="finding-assumption">You think it's a</div>
          <div class="finding-label">Salesperson problem</div>
          <div class="finding-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="finding-real">It's actually a <em>management problem</em></div>
        </div>
        <div class="finding-card">
          <div class="finding-assumption">You think it's a</div>
          <div class="finding-label">Pipeline problem</div>
          <div class="finding-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="finding-real">It's actually a <em>qualification problem</em></div>
        </div>
        <div class="finding-card">
          <div class="finding-assumption">You think it's a</div>
          <div class="finding-label">Strategy problem</div>
          <div class="finding-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="finding-real">It's actually an <em>execution problem</em></div>
        </div>
        <div class="finding-card">
          <div class="finding-assumption">You think it's a</div>
          <div class="finding-label">Headcount problem</div>
          <div class="finding-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="finding-real">It's actually a <em>systems problem</em></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== FINAL CTA ===== -->
  <section class="section-pad" id="get-started">
    <div class="container">
      <div class="final-cta">
        <div class="badge-large"><i class="fas fa-crosshairs"></i> Get Started</div>
        <h2>Know Exactly Where Growth Is Breaking Down</h2>
        <p>Stop guessing. Get a clear diagnosis of your revenue engine and a practical plan to improve performance.</p>
        <div class="final-cta-btns">
          <a href="https://buy.stripe.com/14A6oGgqrf7D6MX9lf1440a" target="_blank" rel="noopener"
             class="btn-primary btn-lg"
             onclick="if(typeof gtag!=='undefined')gtag('event','revenue_review_click',{page_location:window.location.href,page_title:document.title,cta_label:'Book Full X-Ray — Final CTA',value:997})">
            Book Full X-Ray &mdash; $997 <i class="fas fa-arrow-right"></i>
          </a>
          <a href="https://buy.stripe.com/eVq6oGfmn3oV6MXeFz14408" target="_blank" rel="noopener"
             class="btn-outline"
             onclick="if(typeof gtag!=='undefined')gtag('event','revenue_review_click',{page_location:window.location.href,page_title:document.title,cta_label:'Book Revenue Snapshot — Final CTA',value:497})">
            Start with Snapshot &mdash; $497 <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <p class="final-credit-note">
          <i class="fas fa-check-circle"></i>
          100% credited toward a future MetaGrowth engagement within 90 days. &nbsp;·&nbsp; Secure checkout powered by Stripe.
        </p>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer class="xr-footer">
    <p>
      &copy; ${new Date().getFullYear()} MetaGrowth Ventures
      <span class="footer-sep">&middot;</span>
      <a href="https://metagrowth.ventures">metagrowth.ventures</a>
      <span class="footer-sep">&middot;</span>
      <a href="https://metagrowth.ventures/privacy">Privacy Policy</a>
    </p>
  </footer>

  <script>
    // Sticky nav shadow on scroll
    window.addEventListener('scroll', function() {
      var nav = document.getElementById('xr-nav');
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  </script>

</body>
</html>
`
