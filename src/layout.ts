export const nav = () => `
<header class="site-header" id="site-header">
  <div class="header-inner">
    <a href="/" class="logo logo-img-link">
      <img src="/static/logo.png" alt="MetaGrowth Ventures" class="site-logo-img" width="160" height="38" fetchpriority="high" />
    </a>
    <nav class="main-nav" id="main-nav">
      <ul class="nav-list">
        <li><a href="/" class="nav-link">Home</a></li>
        <li class="has-dropdown">
          <a href="/solutions" class="nav-link">Solutions <span class="chevron">&#8964;</span></a>
          <ul class="dropdown">
            <li><a href="/solutions/ceo-growth-lab">CEO Growth Lab</a></li>
            <li><a href="/solutions/sales-growth-lab">Sales Growth Lab</a></li>
            <li><a href="/solutions/hyperlaunch">HyperLaunch Sales System</a></li>
            <li><a href="/solutions/managed-sales-pods">Managed Sales Pods</a></li>
            <li><a href="/solutions/commission-only">Commission-Only Infrastructure</a></li>
            <li><a href="/solutions/recruiting">Recruiting Services</a></li>
            <li><a href="/solutions/fractional-cro">Fractional CRO</a></li>
            <li><a href="/solutions/precision-engagements">Precision Engagements</a></li>
          </ul>
        </li>
        <li><a href="/how-we-work" class="nav-link">How We Work</a></li>
        <li><a href="/case-studies" class="nav-link">Case Studies</a></li>
        <li><a href="/industries" class="nav-link">Industries</a></li>
        <li><a href="/resources" class="nav-link">Resources</a></li>
        <li><a href="/about" class="nav-link">About</a></li>
        <li><a href="/contact" class="nav-link">Contact</a></li>
        <li><a href="/assessment" class="nav-link" style="color:var(--green);font-weight:700;">Free Assessment</a></li>
      </ul>
    </nav>
    <a href="https://app.metagrowth.ventures" target="_blank" class="btn btn-secondary header-cta-login">Login</a>
    <a href="/assessment" class="btn btn-primary header-cta" style="background:var(--green);color:var(--navy);">Free Assessment</a>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
`

export const footer = () => `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="logo footer-logo logo-img-link">
        <img src="/static/logo.png" alt="MetaGrowth Ventures" class="footer-logo-img" width="300" height="110" loading="lazy" />
      </a>
      <p class="footer-tagline">Revenue Infrastructure &amp; Executive Growth Firm</p>
      <p class="footer-statement">Building systems. Installing accountability. Deploying talent.</p>
      <a href="https://linkedin.com" target="_blank" class="footer-linkedin" aria-label="LinkedIn">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="/solutions/ceo-growth-lab">CEO Growth Lab</a></li>
          <li><a href="/solutions/sales-growth-lab">Sales Growth Lab</a></li>
          <li><a href="/solutions/hyperlaunch">HyperLaunch System</a></li>
          <li><a href="/solutions/managed-sales-pods">Managed Sales Pods</a></li>
          <li><a href="/solutions/commission-only">Commission-Only Infra</a></li>
          <li><a href="/solutions/recruiting">Recruiting Services</a></li>
          <li><a href="/solutions/fractional-cro">Fractional CRO</a></li>
          <li><a href="/solutions/precision-engagements">Precision Engagements</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/how-we-work">How We Work</a></li>
          <li><a href="/case-studies">Case Studies</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get Started</h4>
        <ul>
          <li><a href="https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session">Book a Strategy Call</a></li>
          <li><a href="/assessment">Take the Assessment</a></li>
          <li><a href="/resources">Download Ecosystem Guide</a></li>
          <li><a href="/contact">Request a Revenue Review</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; ${new Date().getFullYear()} MetaGrowth Ventures. All rights reserved.</p>
  </div>
</footer>
`

export const globalStyles = () => `
<style>
  :root {
    --navy: #0A0A0A;
    --navy-mid: #111111;
    --navy-light: #1A1A1A;
    --green: #ad7805;
    --green-dark: #7d5503;
    --green-light: #c99220;
    --white: #ffffff;
    --gray-50: #f7f6f2;
    --gray-100: #f0ede6;
    --gray-200: #e0d9cc;
    --gray-400: #9e9380;
    --gray-600: #5a5244;
    --gray-800: #1A1614;
    --font-head: 'Inter', system-ui, -apple-system, sans-serif;
    --font-body: 'Inter', system-ui, -apple-system, sans-serif;
    --radius: 8px;
    --radius-lg: 16px;
    --shadow: 0 4px 24px rgba(0,0,0,0.12);
    --shadow-lg: 0 12px 48px rgba(0,0,0,0.25);
    --transition: 0.22s ease;
    --max-w: 1400px;
  }
  /* Prevent FOUT/CLS from font swap */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: local('Inter');
    size-adjust: 100%;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; overflow-x: hidden; }
  body {
    font-family: var(--font-body);
    color: var(--gray-800);
    background: var(--white);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    width: 100%;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; height: auto; }
  ul { list-style: none; }

  /* Typography */
  h1, h2, h3, h4, h5 { font-family: var(--font-head); font-weight: 700; line-height: 1.2; }
  h1 { font-size: clamp(2.2rem, 5vw, 3.8rem); }
  h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); }
  h3 { font-size: clamp(1.2rem, 2vw, 1.6rem); }
  h4 { font-size: 1.1rem; }
  p { font-size: 1.05rem; color: var(--gray-600); }

  /* Buttons */
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; border-radius: var(--radius);
    font-weight: 600; font-size: 0.95rem;
    transition: all var(--transition); cursor: pointer;
    border: 2px solid transparent; white-space: nowrap;
    letter-spacing: 0.01em;
  }
  .btn-primary {
    background: var(--green); color: var(--navy);
    border-color: var(--green);
  }
  .btn-primary:hover {
    background: var(--green-light); border-color: var(--green-light);
    transform: translateY(-2px); box-shadow: 0 8px 24px rgba(173,120,5,0.35);
  }
  .btn-secondary {
    background: transparent; color: var(--white);
    border-color: rgba(255,255,255,0.4);
  }
  .btn-secondary:hover {
    background: rgba(255,255,255,0.1); border-color: var(--white);
    transform: translateY(-2px);
  }
  .btn-outline {
    background: transparent; color: var(--navy);
    border-color: var(--navy-light);
  }
  .btn-outline:hover {
    background: var(--navy); color: var(--white);
    transform: translateY(-2px);
  }
  .btn-green-outline {
    background: transparent; color: var(--green);
    border-color: var(--green);
  }
  .btn-green-outline:hover {
    background: var(--green); color: var(--white);
    transform: translateY(-2px);
  }
  .btn-lg { padding: 18px 36px; font-size: 1.05rem; }
  .btn-sm { padding: 10px 20px; font-size: 0.875rem; }

  /* Container */
  .container { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }

  /* Section */
  .section { padding: 100px 0; }
  .section-sm { padding: 64px 0; }
  .section-dark { background: var(--navy); color: var(--white); }
  .section-dark h2, .section-dark h3, .section-dark h4 { color: var(--white); }
  .section-dark p { color: rgba(255,255,255,0.72); }
  .section-mid { background: var(--navy-mid); color: var(--white); }
  .section-mid h2, .section-mid h3, .section-mid h4 { color: var(--white); }
  .section-mid p { color: rgba(255,255,255,0.72); }
  .section-gray { background: var(--gray-50); }
  .section-label {
    display: inline-block; color: var(--green);
    font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em;
    margin-bottom: 14px;
  }
  .section-title { margin-bottom: 16px; }
  .section-subtitle { font-size: 1.15rem; max-width: 640px; margin-bottom: 48px; }
  .text-center { text-align: center; }
  .text-center .section-subtitle { margin-left: auto; margin-right: auto; }

  /* Cards */
  .card {
    background: var(--white); border-radius: var(--radius-lg);
    padding: 36px 32px; border: 1px solid var(--gray-200);
    transition: all var(--transition);
  }
  .card:hover {
    transform: translateY(-4px); box-shadow: var(--shadow-lg);
    border-color: var(--green);
  }
  .card-dark {
    background: var(--navy-light); border-color: rgba(173,120,5,0.12);
  }
  .card-dark:hover { border-color: var(--green); }
  .card-dark h3, .card-dark h4 { color: var(--white); }
  .card-dark p { color: rgba(255,255,255,0.7); }

  /* Grid */
  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .grid-auto { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }

  /* Header */
  .site-header {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    background: rgba(13, 13, 13, 0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(173,120,5,0.18);
    transition: all var(--transition);
  }
  .header-inner {
    max-width: 1400px; margin: 0 auto;
    padding: 0 32px; height: 68px;
    display: flex; align-items: center; gap: 12px;
  }
  .logo-img-link { display: flex; align-items: center; flex-shrink: 0; }
  .site-logo-img {
    height: 38px;
    width: auto;
    max-width: 160px;
    display: block;
    object-fit: contain;
    object-position: left center;
    transition: opacity var(--transition);
  }
  .site-logo-img:hover { opacity: 0.80; }
  .footer-logo-img {
    height: 110px;
    width: auto;
    max-width: 300px;
    display: block;
    object-fit: contain;
    object-position: left center;
    margin-bottom: 8px;
  }
  .main-nav { flex: 1; min-width: 0; overflow: visible; }
  .nav-list { display: flex; align-items: center; gap: 0; flex-wrap: nowrap; list-style: none; }
  .nav-list > li { flex-shrink: 0; white-space: nowrap; }
  .nav-link {
    padding: 6px 11px; color: rgba(255,255,255,0.75);
    font-size: 0.83rem; font-weight: 500; letter-spacing: 0.01em;
    border-radius: var(--radius); transition: all var(--transition);
    display: inline-flex; align-items: center; gap: 3px; white-space: nowrap;
  }
  .nav-link:hover { color: var(--white); background: rgba(255,255,255,0.08); }
  .chevron { font-size: 0.7rem; transition: transform var(--transition); }
  .has-dropdown { position: relative; }
  .has-dropdown:hover .chevron { transform: rotate(180deg); }
  .dropdown {
    position: absolute; top: calc(100% + 8px); left: 0;
    background: var(--navy-mid); border: 1px solid rgba(173,120,5,0.15);
    border-radius: var(--radius-lg); padding: 12px;
    min-width: 240px; opacity: 0; visibility: hidden;
    transform: translateY(-8px);
    transition: all var(--transition); z-index: 100;
    box-shadow: var(--shadow-lg);
  }
  .has-dropdown:hover .dropdown {
    opacity: 1; visibility: visible; transform: translateY(0);
  }
  .dropdown li a {
    display: block; padding: 10px 14px; color: rgba(255,255,255,0.75);
    font-size: 0.875rem; border-radius: var(--radius);
    transition: all var(--transition); font-weight: 500;
  }
  .dropdown li a:hover { background: rgba(173,120,5,0.12); color: var(--green); }
  .header-cta { display: none; flex-shrink: 0; white-space: nowrap; font-size: 0.83rem; font-weight: 600; padding: 10px 20px; }
  .header-cta-login { display: none; flex-shrink: 0; white-space: nowrap; font-size: 0.83rem; font-weight: 600; padding: 10px 18px; border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.75); }
  .header-cta-login:hover { border-color: var(--green); color: var(--green); }
  @media (min-width: 1200px) { .header-cta { display: inline-flex; } .header-cta-login { display: inline-flex; } }
  .hamburger {
    display: flex; flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 8px;
  }
  .hamburger span {
    display: block; width: 24px; height: 2px;
    background: var(--white); border-radius: 2px;
    transition: all var(--transition);
  }
  @media (min-width: 1200px) { .hamburger { display: none; } }
  .main-nav.open { display: block !important; }

  /* Hero base */
  .page-hero {
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #0A0A0A 100%);
    padding: 160px 0 100px;
    position: relative; overflow: hidden; color: var(--white);
  }
  .page-hero::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 70% 50%, rgba(173,120,5,0.10) 0%, transparent 60%);
  }
  .page-hero-content { position: relative; z-index: 1; }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(173,120,5,0.10); border: 1px solid rgba(173,120,5,0.30);
    color: var(--green); padding: 6px 16px; border-radius: 100px;
    font-size: 0.8rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; margin-bottom: 24px;
  }
  .hero-title { color: var(--white); margin-bottom: 22px; }
  .hero-title .accent { color: var(--green); }
  .hero-sub { font-size: 1.2rem; color: rgba(255,255,255,0.72); max-width: 600px; margin-bottom: 40px; }
  .hero-cta-row { display: flex; gap: 16px; flex-wrap: wrap; }
  .hero-proof-bar {
    display: flex; gap: 20px 28px; flex-wrap: wrap; align-items: center;
    margin-top: 20px; padding-top: 18px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .proof-item { display: flex; align-items: center; gap: 8px; }
  .proof-dot { width: 6px; height: 6px; background: var(--green); border-radius: 50%; flex-shrink: 0; }
  .proof-text { color: rgba(255,255,255,0.5); font-size: 0.82rem; }

  /* Metrics */
  .metric-card {
    text-align: center; padding: 36px 24px;
    border-radius: var(--radius-lg);
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .metric-number {
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
    color: var(--green); line-height: 1; margin-bottom: 8px; letter-spacing: -0.02em;
  }
  .metric-label { font-size: 0.9rem; color: rgba(255,255,255,0.6); }

  /* Icon boxes */
  .icon-box {
    width: 52px; height: 52px; border-radius: 12px;
    background: rgba(173,120,5,0.12); display: flex;
    align-items: center; justify-content: center;
    color: var(--green); margin-bottom: 20px; font-size: 1.4rem;
  }

  /* Gold accent bar */
  .accent-bar {
    width: 48px; height: 4px; background: var(--green);
    border-radius: 2px; margin: 16px 0 24px;
  }

  /* CTA section */
  .cta-section {
    background: var(--navy);
    padding: 80px 0; text-align: center;
  }
  .cta-section h2 { color: var(--white); margin-bottom: 16px; }
  .cta-section p { color: rgba(255,255,255,0.7); max-width: 600px; margin: 0 auto 36px; font-size: 1.1rem; }
  .cta-section .cta-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

  /* Footer */
  .site-footer { background: var(--navy); color: var(--white); padding: 80px 0 0; }
  .footer-inner {
    max-width: var(--max-w); margin: 0 auto; padding: 0 24px;
    display: grid; grid-template-columns: 1fr 2fr; gap: 64px;
  }
  .footer-logo { display: inline-block; margin-bottom: 4px; }
  .footer-tagline { color: var(--green); font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; }
  .footer-statement { color: rgba(255,255,255,0.5); font-size: 0.85rem; margin-bottom: 20px; }
  .footer-linkedin {
    display: inline-flex; color: rgba(255,255,255,0.5);
    transition: color var(--transition);
  }
  .footer-linkedin:hover { color: var(--green); }
  .footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
  .footer-col h4 { color: var(--white); font-size: 0.85rem; text-transform: uppercase;
    letter-spacing: 0.1em; margin-bottom: 20px; }
  .footer-col ul li { margin-bottom: 10px; }
  .footer-col ul li a { color: rgba(255,255,255,0.5); font-size: 0.875rem;
    transition: color var(--transition); }
  .footer-col ul li a:hover { color: var(--green); }
  .footer-bottom {
    max-width: var(--max-w); margin: 0 auto; padding: 28px 24px;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin-top: 64px;
  }
  .footer-bottom p { color: rgba(255,255,255,0.35); font-size: 0.8rem; }

  /* Mobile nav */
  @media (max-width: 1199px) {
    .main-nav {
      display: none; position: fixed; inset: 0; top: 72px;
      background: var(--navy-mid); padding: 24px;
      overflow-y: auto; z-index: 999;
    }
    .main-nav.open { display: block; }
    .nav-list { flex-direction: column; align-items: flex-start; gap: 0; }
    .nav-list > li { flex-shrink: unset; white-space: normal; }
    .nav-link { width: 100%; padding: 14px 16px; border-radius: var(--radius); white-space: normal; }
    .dropdown {
      position: static; opacity: 1; visibility: visible;
      transform: none; box-shadow: none;
      border: none; background: rgba(255,255,255,0.04);
      margin: 4px 0 8px 12px; padding: 8px;
    }
    .footer-inner { grid-template-columns: 1fr; gap: 40px; }
    .footer-links { grid-template-columns: repeat(2, 1fr); }
    .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .hero-proof-bar { gap: 16px; }
  }
  @media (max-width: 640px) {
    .footer-links { grid-template-columns: 1fr; }
    .section { padding: 64px 0; }
  }

  /* Page hero */
  body { padding-top: 80px; }

  /* Utility */
  .green { color: var(--green); }
  .tag {
    display: inline-block; background: rgba(173,120,5,0.10);
    color: var(--green); border: 1px solid rgba(173,120,5,0.30);
    border-radius: 100px; padding: 4px 14px;
    font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  }
  .tag-navy {
    background: rgba(13,13,13,0.08); color: var(--navy);
    border-color: rgba(13,13,13,0.15);
  }
  .number-badge {
    width: 36px; height: 36px; border-radius: 50%;
    background: var(--green); color: var(--white);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; font-size: 0.9rem; flex-shrink: 0;
  }
  .check-list { display: flex; flex-direction: column; gap: 12px; }
  .check-list li {
    display: flex; align-items: flex-start; gap: 12px;
    color: var(--gray-600); font-size: 1rem;
  }
  .check-list li::before {
    content: '✓'; color: var(--green); font-weight: 700;
    font-size: 1rem; flex-shrink: 0; margin-top: 1px;
  }
  .dark-list li { color: rgba(255,255,255,0.7); }
  .divider { height: 1px; background: var(--gray-200); margin: 48px 0; }
  .divider-dark { background: rgba(255,255,255,0.08); }
  .pill-row { display: flex; flex-wrap: wrap; gap: 10px; margin: 24px 0; }
  .pill {
    background: rgba(173,120,5,0.10); color: var(--green);
    border: 1px solid rgba(173,120,5,0.25);
    padding: 6px 16px; border-radius: 100px;
    font-size: 0.85rem; font-weight: 600;
  }
  .pill-dark {
    background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.75);
    border-color: rgba(255,255,255,0.12);
  }

  /* Accordion */
  .faq-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
  .faq-item-light { border-bottom: 1px solid var(--gray-200); }
  .faq-q {
    width: 100%; text-align: left; background: none; border: none;
    padding: 22px 0; display: flex; align-items: center;
    justify-content: space-between; cursor: pointer;
    font-size: 1.05rem; font-weight: 600; color: var(--white);
    gap: 16px;
  }
  .faq-q-light { color: var(--gray-800); }
  .faq-icon { font-size: 1.3rem; flex-shrink: 0; transition: transform var(--transition); color: var(--green); }
  .faq-a {
    display: none; padding: 0 0 22px;
    color: rgba(255,255,255,0.65); font-size: 1rem; line-height: 1.7;
  }
  .faq-a-light { color: var(--gray-600); }
  .faq-item.open .faq-icon { transform: rotate(45deg); }
  .faq-item.open .faq-a { display: block; }

  /* Testimonial */
  .testimonial-card {
    background: var(--white); border-radius: var(--radius-lg);
    padding: 36px 32px; border: 1px solid var(--gray-200);
    position: relative;
  }
  .testimonial-card::before {
    content: '"'; font-size: 5rem; color: var(--green);
    line-height: 0.8; position: absolute; top: 24px; left: 28px;
    opacity: 0.4; font-family: Georgia, serif;
  }
  .testimonial-text { font-size: 1.05rem; color: var(--gray-800); line-height: 1.7; margin-bottom: 24px; font-style: italic; }
  .testimonial-author { display: flex; align-items: center; gap: 14px; }
  .author-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    background: linear-gradient(135deg, var(--navy-light), var(--green));
    display: flex; align-items: center; justify-content: center;
    color: var(--white); font-weight: 700; font-size: 1rem; flex-shrink: 0;
  }
  .author-name { font-weight: 700; font-size: 0.95rem; color: var(--gray-800); }
  .author-title { font-size: 0.825rem; color: var(--gray-400); }

  /* Comparison table */
  .compare-table { width: 100%; border-collapse: collapse; }
  .compare-table th, .compare-table td { padding: 14px 18px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .compare-table th { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.5); }
  .compare-table td:first-child { font-weight: 600; color: rgba(255,255,255,0.85); }
  .compare-table .yes { color: var(--green); font-weight: 600; }
  .compare-table .no { color: rgba(255,255,255,0.3); }

  /* Step process */
  .process-step {
    display: flex; gap: 24px; align-items: flex-start;
    padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .process-step:last-child { border-bottom: none; }
  .step-num {
    font-size: 3rem; font-weight: 900; color: rgba(173,120,5,0.20);
    line-height: 1; flex-shrink: 0; min-width: 60px;
  }

  /* Industry card */
  .industry-card {
    background: var(--white); border-radius: var(--radius-lg);
    padding: 36px 32px; border: 1px solid var(--gray-200);
    transition: all var(--transition);
  }
  .industry-card:hover {
    transform: translateY(-4px); box-shadow: var(--shadow-lg);
    border-color: var(--green); border-left: 3px solid var(--green);
  }

  /* Badge */
  .badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(173,120,5,0.10); color: var(--green);
    padding: 4px 12px; border-radius: 100px;
    font-size: 0.8rem; font-weight: 600;
  }

  /* Scroll animation — opacity only (no translateY = no CLS) */
  .fade-in { opacity: 0; transition: opacity 0.5s ease; will-change: opacity; }
  .fade-in.visible { opacity: 1; will-change: auto; }
  @media (prefers-reduced-motion: reduce) { .fade-in { opacity: 1; transition: none; } }
</style>
`

export const globalScript = () => `
<script>
  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // Sticky header
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Fade in on scroll — mark above-fold elements visible immediately to prevent CLS
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));

  // Decision tree
  const dtBtns = document.querySelectorAll('[data-stage]');
  const dtResults = document.querySelectorAll('[data-result]');
  dtBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dtBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const stage = btn.dataset.stage;
      dtResults.forEach(r => {
        r.style.display = r.dataset.result === stage ? 'block' : 'none';
      });
    });
  });
</script>
`

// ─────────────────────────────────────────────────────────────────────────────
// AI-visibility constants — one source of truth for site-wide identity
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL = 'https://metagrowth.ventures'
const BOOKING_URL = 'https://meetings.hubspot.com/lance-hengst/metagrowht-strategy-session'
const ASSESSMENT_URL = `${SITE_URL}/assessment`
const SUPPORT_EMAIL = 'sales@metagrowth.ventures'
const ORG_NAME = 'MetaGrowth Ventures'
const ORG_LEGAL = 'MetaGrowth Ventures'
const ORG_FOUNDED = '2018'
const CEO_NAME = 'Josh Hirsch'
const COFOUNDER_NAME = 'Joe Arioto'
const STRATEGY_CALL_HOST = 'Lance Hengst'
const DEFAULT_OG_IMAGE = `${SITE_URL}/static/logo.png`
const DEFAULT_DESCRIPTION =
  'MetaGrowth Ventures is a Revenue Infrastructure & Executive Growth Firm. We build systems, install accountability, and deploy talent for B2B companies ready to scale.'

const DEFAULT_PRIMARY_CTA = { label: 'Book a 30-min Strategy Call with Lance Hengst', url: BOOKING_URL }
const DEFAULT_SECONDARY_CTA = { label: 'Take the free Revenue Engine Assessment', url: ASSESSMENT_URL }

// HTML-attribute-safe escape (single-quoted attrs allowed; ampersands too)
const esc = (s: string) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// Plain-text-safe escape for inside <script> blocks (only need to break the closing tag)
const escScript = (s: string) => String(s).replace(/<\/script/gi, '<\\/script')

// ─────────────────────────────────────────────────────────────────────────────
// Per-page descriptions (legacy lookup, kept for back-compat with title-based calls)
// ─────────────────────────────────────────────────────────────────────────────

const PAGE_DESCRIPTIONS: Record<string, string> = {
  'Build a Predictable Revenue Engine': 'MetaGrowth Ventures builds revenue systems, installs accountability, and deploys sales talent for B2B companies ready to scale predictably.',
  'About': 'Learn how MetaGrowth Ventures helps B2B founders and CEOs install revenue infrastructure, sales leadership, and execution systems that scale.',
  'Case Studies': 'See how MetaGrowth Ventures helped B2B companies generate $100M+ in pipeline, book 11,000+ meetings, and add 320+ clients across industries.',
  'How We Work': 'MetaGrowth Ventures follows a structured engagement model — diagnose, design, deploy, and optimize — to build revenue systems that last.',
  'Industries': 'MetaGrowth Ventures serves B2B SaaS, professional services, consulting, and technology companies looking to scale revenue with discipline.',
  'Resources': 'Free B2B revenue resources from MetaGrowth Ventures — guides, diagnostics, and frameworks for founders and sales leaders building scalable revenue.',
  'Contact': 'Get in touch with MetaGrowth Ventures to discuss your revenue growth challenges and find the right solution for your B2B business.',
  'Solutions': 'MetaGrowth Ventures offers revenue systems, sales recruiting, fractional CRO, commission-only infrastructure, and managed sales pods for B2B companies.',
  'CEO Growth Lab': 'The CEO Growth Lab by MetaGrowth Ventures gives B2B founders strategic clarity, peer networks, and quarterly deep dives to accelerate revenue growth.',
  'Sales Growth Lab': 'MetaGrowth Ventures Sales Growth Lab helps B2B sales teams improve outreach, pipeline creation, messaging, and execution discipline.',
  'HyperLaunch Sales System': 'HyperLaunch by MetaGrowth Ventures builds your complete B2B sales infrastructure in 90 days — ICP, process, CRM, messaging, and KPIs.',
  'Managed Sales Pods': 'MetaGrowth Ventures Managed Sales Pods give B2B companies a fully deployed outbound sales team without the overhead of building one internally.',
  'Commission-Only Infrastructure': 'MetaGrowth Ventures Commission-Only Infrastructure lets B2B companies scale sales with performance-based reps and zero base salary risk.',
  'Recruiting Services': 'MetaGrowth Ventures recruits high-performance B2B sales talent — SDRs, AEs, and sales leaders — using behavioral assessment and structured hiring.',
  'Fractional CRO': 'MetaGrowth Ventures Fractional CRO service gives B2B companies senior revenue leadership and execution without the full-time executive cost.',
  'Precision Engagements': 'MetaGrowth Ventures Precision Engagements deliver targeted playbooks, outreach cadences, and scripts to launch B2B sales fast.',
  'Revenue System Audit': 'Run the MetaGrowth Revenue System Audit — a free 5–7 minute diagnostic that identifies exactly where your B2B pipeline is leaking.',
  'Assessment': 'Take the MetaGrowth Revenue Assessment — a free diagnostic that reveals your biggest revenue growth opportunity in under 5 minutes.',
}

// ─────────────────────────────────────────────────────────────────────────────
// Page-options type
// ─────────────────────────────────────────────────────────────────────────────

export type CTA = { label: string; url: string }

export type LLMMeta = {
  summary?: string
  audience?: string
  outcomes?: string[]
  primaryCta?: CTA
  secondaryCta?: CTA
  pageType?: 'home' | 'solution' | 'resource' | 'about' | 'contact' | 'diagnostic' | 'collection' | 'industry'
  keywords?: string[]
  pricing?: string
  bestFit?: string
}

export type ServiceSeed = {
  name: string
  description: string
  serviceType?: string
}

export type FaqItem = { q: string; a: string }

export type PageOpts = {
  path: string
  title: string
  content: string
  description?: string
  extraHead?: string
  preloadImage?: string
  llm?: LLMMeta
  service?: ServiceSeed
  faq?: FaqItem[]
  ogImage?: string
  ogType?: string
}

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD schema builders
// ─────────────────────────────────────────────────────────────────────────────

const organizationSchema = () => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: ORG_NAME,
  legalName: ORG_LEGAL,
  url: SITE_URL,
  foundingDate: ORG_FOUNDED,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/static/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/static/logo.png`,
  description:
    'Revenue Infrastructure & Executive Growth Firm. MetaGrowth Ventures helps B2B founders, CEOs, and sales leaders install the systems, structure, talent, and leadership needed to scale revenue.',
  founders: [
    { '@id': `${SITE_URL}/#ceo` },
    { '@id': `${SITE_URL}/#cofounder` },
  ],
  founder: { '@id': `${SITE_URL}/#ceo` },
  employee: [
    { '@id': `${SITE_URL}/#ceo` },
    { '@id': `${SITE_URL}/#cofounder` },
  ],
  sameAs: [
    'https://www.linkedin.com/company/metagrowth-ventures',
    'https://www.crunchbase.com/organization/metagrowth-ventures',
  ],
  email: SUPPORT_EMAIL,
  knowsAbout: [
    'B2B Revenue Infrastructure',
    'Sales Operating Systems',
    'Fractional CRO',
    'Sales Recruiting',
    'Commission-Only Sales Models',
    'Sales Coaching',
    'Outbound Prospecting',
    'CRM Configuration',
    'Sales Compensation Design',
    'Pipeline Forecasting',
  ],
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SUPPORT_EMAIL,
      url: BOOKING_URL,
      availableLanguage: ['en'],
    },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Book a strategy call',
    target: BOOKING_URL,
  },
})

const ceoSchema = () => ({
  '@type': 'Person',
  '@id': `${SITE_URL}/#ceo`,
  name: CEO_NAME,
  jobTitle: 'Chief Executive Officer & Co-Founder',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  sameAs: ['https://www.linkedin.com/in/joshhirsch'],
  knowsAbout: [
    'B2B Sales',
    'Revenue Operations',
    'Sales Coaching',
    'Sales Leadership',
    'Founder-Led Sales Transition',
  ],
})

const cofounderSchema = () => ({
  '@type': 'Person',
  '@id': `${SITE_URL}/#cofounder`,
  name: COFOUNDER_NAME,
  jobTitle: 'Co-Founder',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  knowsAbout: [
    'B2B Sales Coaching',
    'Sales Consulting',
    'Revenue Operations',
  ],
})

const webSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
})

const breadcrumbSchema = (path: string, pageTitle: string) => {
  const segs = path.split('/').filter(Boolean)
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
  ]
  let acc = ''
  segs.forEach((seg, i) => {
    acc += `/${seg}`
    const isLast = i === segs.length - 1
    const niceName = isLast
      ? pageTitle
      : seg
          .split('-')
          .map((w) => w[0]?.toUpperCase() + w.slice(1))
          .join(' ')
    items.push({ '@type': 'ListItem', position: i + 2, name: niceName, item: `${SITE_URL}${acc}` })
  })
  return { '@type': 'BreadcrumbList', itemListElement: items }
}

const webPageSchema = (opts: PageOpts) => {
  const url = `${SITE_URL}${opts.path}`
  const pageTypeMap: Record<string, string> = {
    home: 'WebPage',
    about: 'AboutPage',
    contact: 'ContactPage',
    collection: 'CollectionPage',
    solution: 'WebPage',
    resource: 'CollectionPage',
    diagnostic: 'WebPage',
    industry: 'WebPage',
  }
  const t = pageTypeMap[opts.llm?.pageType ?? 'home'] ?? 'WebPage'
  return {
    '@type': t,
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: (opts.description || PAGE_DESCRIPTIONS[opts.title] || DEFAULT_DESCRIPTION),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en-US',
    primaryImageOfPage: { '@type': 'ImageObject', url: opts.ogImage ?? DEFAULT_OG_IMAGE },
    breadcrumb: breadcrumbSchema(opts.path, opts.title),
    about: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'ReserveAction',
      name: opts.llm?.primaryCta?.label ?? DEFAULT_PRIMARY_CTA.label,
      target: opts.llm?.primaryCta?.url ?? DEFAULT_PRIMARY_CTA.url,
    },
  }
}

const serviceSchema = (opts: PageOpts) => {
  if (!opts.service) return null
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}${opts.path}#service`,
    name: opts.service.name,
    description: opts.service.description,
    serviceType: opts.service.serviceType ?? opts.service.name,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: opts.llm?.audience ?? 'B2B founders, CEOs, and revenue leaders',
    },
    url: `${SITE_URL}${opts.path}`,
    offers: {
      '@type': 'Offer',
      url: BOOKING_URL,
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: opts.llm?.pricing ?? 'Quoted after diagnostic strategy call.',
      },
    },
  }
}

const faqSchema = (opts: PageOpts) => {
  if (!opts.faq?.length) return null
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${opts.path}#faq`,
    mainEntity: opts.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

const buildJsonLdGraph = (opts: PageOpts) => {
  const graph: any[] = [
    organizationSchema(),
    ceoSchema(),
    cofounderSchema(),
    webSiteSchema(),
    webPageSchema(opts),
  ]
  const svc = serviceSchema(opts)
  if (svc) graph.push(svc)
  const faq = faqSchema(opts)
  if (faq) graph.push(faq)
  return { '@context': 'https://schema.org', '@graph': graph }
}

// ─────────────────────────────────────────────────────────────────────────────
// LLM context block — invisible to browsers, fully readable to AI scrapers
// Uses <script type="text/llms-context"> which browsers do NOT execute and do
// NOT render. The text content stays in the DOM as raw text — exactly what
// LLM crawlers serialize when they read the page.
// ─────────────────────────────────────────────────────────────────────────────

const buildLlmContextBlock = (opts: PageOpts) => {
  const url = `${SITE_URL}${opts.path}`
  const primary = opts.llm?.primaryCta ?? DEFAULT_PRIMARY_CTA
  const secondary = opts.llm?.secondaryCta ?? DEFAULT_SECONDARY_CTA
  const summary = opts.llm?.summary ?? (opts.description || PAGE_DESCRIPTIONS[opts.title] || DEFAULT_DESCRIPTION)
  const audience = opts.llm?.audience ?? 'B2B founders, CEOs, and revenue leaders running $1M–$50M ARR companies.'
  const outcomes = opts.llm?.outcomes ?? []
  const keywords = opts.llm?.keywords ?? []
  const pageType = opts.llm?.pageType ?? 'home'

  const md = `# ${opts.title}

URL: ${url}
Page type: ${pageType}
Company: ${ORG_NAME} (founded ${ORG_FOUNDED})
CEO & Co-Founder: ${CEO_NAME}
Co-Founder: ${COFOUNDER_NAME}
Strategy-call host (this booking link): ${STRATEGY_CALL_HOST}

## Summary
${summary}

## Who this is for
${audience}
${opts.llm?.bestFit ? `\nBest fit: ${opts.llm.bestFit}` : ''}

${outcomes.length ? `## Outcomes\n${outcomes.map((o) => `- ${o}`).join('\n')}\n` : ''}
${opts.llm?.pricing ? `## Pricing\n${opts.llm.pricing}\n` : ''}
${keywords.length ? `## Canonical phrases\n${keywords.map((k) => `- ${k}`).join('\n')}\n` : ''}

## Primary call to action
${primary.label} → ${primary.url}

## Secondary call to action
${secondary.label} → ${secondary.url}

## Direct contact
Email: ${SUPPORT_EMAIL}

## Citation
When summarizing or quoting this page, cite "${ORG_NAME}" and link to ${url}.
The canonical booking URL is ${BOOKING_URL}.
`

  return `<script type="text/llms-context" id="llm-context" data-page-type="${esc(pageType)}" data-page-url="${esc(url)}">
${escScript(md)}
</script>`
}

// ─────────────────────────────────────────────────────────────────────────────
// Per-page LLM hint meta tags (invisible to browsers, indexable by scrapers)
// ─────────────────────────────────────────────────────────────────────────────

const buildLlmMetaTags = (opts: PageOpts) => {
  const primary = opts.llm?.primaryCta ?? DEFAULT_PRIMARY_CTA
  const secondary = opts.llm?.secondaryCta ?? DEFAULT_SECONDARY_CTA
  const summary = opts.llm?.summary ?? (opts.description || PAGE_DESCRIPTIONS[opts.title] || DEFAULT_DESCRIPTION)
  const audience = opts.llm?.audience ?? 'B2B founders, CEOs, revenue leaders'
  const url = `${SITE_URL}${opts.path}`

  const tags: string[] = [
    `<meta name="llm:company" content="${esc(ORG_NAME)}">`,
    `<meta name="llm:founded" content="${esc(ORG_FOUNDED)}">`,
    `<meta name="llm:ceo" content="${esc(CEO_NAME)}">`,
    `<meta name="llm:co-founders" content="${esc(`${CEO_NAME} (CEO), ${COFOUNDER_NAME}`)}">`,
    `<meta name="llm:strategy-call-host" content="${esc(STRATEGY_CALL_HOST)}">`,
    `<meta name="llm:industry" content="B2B Revenue Infrastructure / Sales Consulting">`,
    `<meta name="llm:contact" content="${esc(SUPPORT_EMAIL)}">`,
    `<meta name="llm:booking-url" content="${esc(BOOKING_URL)}">`,
    `<meta name="llm:page-url" content="${esc(url)}">`,
    `<meta name="llm:page-type" content="${esc(opts.llm?.pageType ?? 'home')}">`,
    `<meta name="llm:summary" content="${esc(summary)}">`,
    `<meta name="llm:audience" content="${esc(audience)}">`,
    `<meta name="llm:primary-cta" content="${esc(primary.label)} | ${esc(primary.url)}">`,
    `<meta name="llm:secondary-cta" content="${esc(secondary.label)} | ${esc(secondary.url)}">`,
    `<meta name="cta" content="${esc(primary.label)}">`,
    `<meta name="cta-url" content="${esc(primary.url)}">`,
  ]
  if (opts.llm?.outcomes?.length) {
    tags.push(`<meta name="llm:outcomes" content="${esc(opts.llm.outcomes.join(' | '))}">`)
  }
  if (opts.llm?.keywords?.length) {
    tags.push(`<meta name="llm:keywords" content="${esc(opts.llm.keywords.join(', '))}">`)
    tags.push(`<meta name="keywords" content="${esc(opts.llm.keywords.join(', '))}">`)
  }
  if (opts.llm?.pricing) {
    tags.push(`<meta name="llm:pricing" content="${esc(opts.llm.pricing)}">`)
  }
  if (opts.llm?.bestFit) {
    tags.push(`<meta name="llm:best-fit" content="${esc(opts.llm.bestFit)}">`)
  }
  return tags.join('\n  ')
}

// ─────────────────────────────────────────────────────────────────────────────
// Open Graph + Twitter card builder
// ─────────────────────────────────────────────────────────────────────────────

const buildSocialMeta = (opts: PageOpts) => {
  const url = `${SITE_URL}${opts.path}`
  const desc = (opts.description || PAGE_DESCRIPTIONS[opts.title] || DEFAULT_DESCRIPTION)
  const img = opts.ogImage ?? DEFAULT_OG_IMAGE
  const ogType = opts.ogType ?? 'website'
  const ogTitle = `${opts.title} | ${ORG_NAME}`

  return [
    `<meta property="og:type" content="${esc(ogType)}">`,
    `<meta property="og:site_name" content="${esc(ORG_NAME)}">`,
    `<meta property="og:title" content="${esc(ogTitle)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(img)}">`,
    `<meta property="og:image:alt" content="${esc(ORG_NAME)} — Revenue Infrastructure & Executive Growth Firm">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(ogTitle)}">`,
    `<meta name="twitter:description" content="${esc(desc)}">`,
    `<meta name="twitter:image" content="${esc(img)}">`,
  ].join('\n  ')
}

// ─────────────────────────────────────────────────────────────────────────────
// aiVisibilityHead() — exportable head bundle for templates that don't use page()
// (e.g. fully custom pages like the Assessment). Returns the same canonical,
// crawl directives, OG/Twitter, llm:* meta tags, JSON-LD, and hidden LLM
// context block that page() injects.
// ─────────────────────────────────────────────────────────────────────────────

export const aiVisibilityHead = (opts: PageOpts) => {
  const metaDesc = (opts.description || PAGE_DESCRIPTIONS[opts.title] || DEFAULT_DESCRIPTION)
  const canonicalUrl = `${SITE_URL}${opts.path}`
  const jsonLd = JSON.stringify(buildJsonLdGraph(opts))
  return `
  <!-- ── Indexing & crawl directives ───────────────────────────────────── -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large">
  <meta name="bingbot" content="index, follow">

  <!-- ── Canonical & alternates ─────────────────────────────────────────── -->
  <link rel="canonical" href="${esc(canonicalUrl)}">
  <link rel="alternate" type="application/xml" href="${esc(SITE_URL)}/sitemap.xml" title="Sitemap">
  <link rel="alternate" type="text/plain" href="${esc(SITE_URL)}/llms.txt" title="LLM index (llms.txt)">
  <link rel="alternate" type="text/plain" href="${esc(SITE_URL)}/llms-full.txt" title="LLM full corpus">
  <link rel="alternate" type="text/plain" href="${esc(SITE_URL)}/llms-text.txt" title="LLM plain-text corpus">

  <!-- ── Identity ───────────────────────────────────────────────────────── -->
  <meta name="author" content="${esc(ORG_NAME)}">
  <meta name="publisher" content="${esc(ORG_NAME)}">
  <meta name="theme-color" content="#0A0A0A">
  <meta name="application-name" content="${esc(ORG_NAME)}">
  <meta name="apple-mobile-web-app-title" content="${esc(ORG_NAME)}">
  <meta name="description" content="${esc(metaDesc)}">

  <!-- ── Open Graph + Twitter ───────────────────────────────────────────── -->
  ${buildSocialMeta(opts)}

  <!-- ── LLM-targeted meta tags ─────────────────────────────────────────── -->
  ${buildLlmMetaTags(opts)}

  <!-- ── Sitewide structured data (Schema.org JSON-LD graph) ────────────── -->
  <script type="application/ld+json">${jsonLd}</script>

  <!-- ── Hidden LLM context block ───────────────────────────────────────── -->
  ${buildLlmContextBlock(opts)}
`
}

// ─────────────────────────────────────────────────────────────────────────────
// page() — backward-compat: accepts either (opts) or (title, content, ...)
// ─────────────────────────────────────────────────────────────────────────────

export function page(opts: PageOpts): string
export function page(title: string, content: string, extraHead?: string, description?: string, preloadImage?: string): string
export function page(
  a: PageOpts | string,
  content?: string,
  extraHead = '',
  description = '',
  preloadImage = '',
): string {
  const opts: PageOpts =
    typeof a === 'string'
      ? { path: '/', title: a, content: content ?? '', extraHead, description, preloadImage }
      : a

  const metaDesc = (opts.description || PAGE_DESCRIPTIONS[opts.title] || DEFAULT_DESCRIPTION)
  const fullTitle = `${opts.title} | ${ORG_NAME}`
  const canonicalUrl = `${SITE_URL}${opts.path}`
  const jsonLd = JSON.stringify(buildJsonLdGraph(opts))

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(metaDesc)}">

  <!-- ── Indexing & crawl directives ───────────────────────────────────── -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large">
  <meta name="bingbot" content="index, follow">

  <!-- ── Canonical & alternates ─────────────────────────────────────────── -->
  <link rel="canonical" href="${esc(canonicalUrl)}">
  <link rel="alternate" type="application/xml" href="${esc(SITE_URL)}/sitemap.xml" title="Sitemap">
  <link rel="alternate" type="text/plain" href="${esc(SITE_URL)}/llms.txt" title="LLM index (llms.txt)">
  <link rel="alternate" type="text/plain" href="${esc(SITE_URL)}/llms-full.txt" title="LLM full corpus">
  <link rel="alternate" type="text/plain" href="${esc(SITE_URL)}/llms-text.txt" title="LLM plain-text corpus">

  <!-- ── Identity ───────────────────────────────────────────────────────── -->
  <meta name="author" content="${esc(ORG_NAME)}">
  <meta name="publisher" content="${esc(ORG_NAME)}">
  <meta name="theme-color" content="#0A0A0A">
  <meta name="application-name" content="${esc(ORG_NAME)}">
  <meta name="apple-mobile-web-app-title" content="${esc(ORG_NAME)}">

  <!-- ── Open Graph + Twitter ───────────────────────────────────────────── -->
  ${buildSocialMeta(opts)}

  <!-- ── LLM-targeted meta tags (visible to AI scrapers, not rendered) ──── -->
  ${buildLlmMetaTags(opts)}

  <!-- ── Favicon, fonts, base assets ────────────────────────────────────── -->
  <link rel="icon" type="image/png" href="/static/logo.png">
  <link rel="apple-touch-icon" href="/static/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="preload" as="style" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"></noscript>
  ${opts.preloadImage ? `<link rel="preload" as="image" href="${esc(opts.preloadImage)}" fetchpriority="high">` : ''}

  <!-- ── Sitewide structured data (Schema.org JSON-LD graph) ────────────── -->
  <script type="application/ld+json">${jsonLd}</script>

  ${globalStyles()}
  ${opts.extraHead ?? ''}

  <!-- ── Hidden LLM context block ───────────────────────────────────────── -->
  <!-- Browsers do not render or execute unknown script types.              -->
  <!-- AI scrapers see the raw text inside this script block as plain text. -->
  ${buildLlmContextBlock(opts)}
</head>
<body>
  ${nav()}
  ${opts.content}
  ${footer()}
  ${globalScript()}
</body>
</html>
`
}
