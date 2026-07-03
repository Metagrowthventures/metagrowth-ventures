import { svgIconCss, buildSprite } from './icons';

export const nav = () => `
<header class="site-header" id="site-header">
  <div class="header-inner">

    <!-- Logo -->
    <a href="/" class="logo logo-img-link">
      <img src="/static/logo.webp" alt="MetaGrowth Ventures" class="site-logo-img" width="160" height="38" fetchpriority="high" />
    </a>

    <!-- Desktop nav -->
    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <ul class="nav-list">

        <li><a href="/" class="nav-link">Home</a></li>

        <!-- SOLUTIONS -->
        <li class="has-megadrop" id="nav-solutions">
          <button class="nav-link nav-btn" aria-expanded="false" aria-controls="mega-solutions">
            Solutions <span class="chevron">&#8964;</span>
          </button>
          <div class="megadrop" id="mega-solutions" role="region">
            <div class="megadrop-inner">
              <p class="megadrop-headline">How We Help Companies Grow Revenue</p>
              <div class="megadrop-cards">

                <a href="/solutions/growth-os" class="mdc">
                  <div class="mdc-icon"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si36" xlink:href="#si36"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">Generate Pipeline</span>
                    <span class="mdc-desc">Outbound prospecting, lead generation, messaging, targeting, appointment setting, and pipeline creation.</span>
                    <span class="mdc-cta">Learn More <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

                <a href="/solutions/managed-sales-pods" class="mdc">
                  <div class="mdc-icon"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si5" xlink:href="#si5"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">Build a Sales Team</span>
                    <span class="mdc-desc">Recruiting, onboarding, management, coaching, accountability, and sales team development.</span>
                    <span class="mdc-cta">Learn More <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

                <a href="/solutions/revenue-os" class="mdc">
                  <div class="mdc-icon"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si4" xlink:href="#si4"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">Scale Revenue</span>
                    <span class="mdc-desc">Revenue operations, forecasting, leadership, sales infrastructure, process optimization, and growth strategy.</span>
                    <span class="mdc-cta">Learn More <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

              </div>
              <div class="megadrop-footer">
                <span>Not sure which solution fits?</span>
                <a href="/assessment" class="megadrop-footer-link">Take the Revenue Assessment <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></a>
              </div>
            </div>
          </div>
        </li>

        <!-- PLATFORM -->
        <li class="has-megadrop" id="nav-platform">
          <button class="nav-link nav-btn" aria-expanded="false" aria-controls="mega-platform">
            Platform <span class="chevron">&#8964;</span>
          </button>
          <div class="megadrop megadrop--narrow" id="mega-platform" role="region">
            <div class="megadrop-inner">
              <p class="megadrop-headline">The MetaGrowth Platform</p>
              <div class="megadrop-cards megadrop-cards--2col">

                <a href="/command-center" class="mdc mdc--featured">
                  <div class="mdc-icon mdc-icon--gold"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si10" xlink:href="#si10"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">MetaGrowth Command Center™</span>
                    <span class="mdc-desc">Complete visibility into pipeline, recruiting, performance, meetings, agreements, and weekly updates.</span>
                    <span class="mdc-cta">Explore Command Center <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

                <a href="/assessment" class="mdc">
                  <div class="mdc-icon"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si6" xlink:href="#si6"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">Revenue Assessment</span>
                    <span class="mdc-desc">Identify bottlenecks, growth constraints, and the fastest path toward predictable revenue.</span>
                    <span class="mdc-cta">Start Assessment <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

              </div>
              <div class="megadrop-footer">
                <span>Every engagement includes the MetaGrowth Command Center™</span>
              </div>
            </div>
          </div>
        </li>

        <!-- PROOF -->
        <li class="has-megadrop" id="nav-proof">
          <button class="nav-link nav-btn" aria-expanded="false" aria-controls="mega-proof">
            Proof <span class="chevron">&#8964;</span>
          </button>
          <div class="megadrop" id="mega-proof" role="region">
            <div class="megadrop-inner">
              <p class="megadrop-headline">See The Results</p>
              <div class="megadrop-cards">

                <a href="/case-studies" class="mdc">
                  <div class="mdc-icon"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si26" xlink:href="#si26"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">Case Studies</span>
                    <span class="mdc-desc">Real client outcomes, pipeline growth, revenue impact, and success stories.</span>
                    <span class="mdc-cta">View Case Studies <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

                <a href="/industries" class="mdc">
                  <div class="mdc-icon"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si27" xlink:href="#si27"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">Industries</span>
                    <span class="mdc-desc">See the industries and business models we serve.</span>
                    <span class="mdc-cta">Explore Industries <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

                <a href="/how-we-work#promise" class="mdc">
                  <div class="mdc-icon"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si7" xlink:href="#si7"/></svg></div>
                  <div class="mdc-body">
                    <span class="mdc-title">The 10X Pipeline Promise™</span>
                    <span class="mdc-desc">Learn how our performance-based guarantee works.</span>
                    <span class="mdc-cta">View Promise <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si1" xlink:href="#si1"/></svg></span>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </li>

        <li><a href="/resources" class="nav-link">Resources</a></li>
        <li><a href="/contact" class="nav-link">Contact</a></li>

      </ul>
    </nav>

    <!-- Right-side CTAs -->
    <div class="header-right">
      <a href="/portal" class="header-login-link"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si9" xlink:href="#si9"/></svg> Client Login</a>
      <a href="/assessment" class="btn btn-primary header-cta-btn">Free Assessment</a>
    </div>

    <!-- Hamburger -->
    <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

  </div>
</header>

<!-- Mobile drawer -->
<div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
  <nav aria-label="Mobile navigation">
    <ul class="mobile-nav-list">
      <li><a href="/" class="mobile-nav-link">Home</a></li>

      <li class="mobile-accordion">
        <button class="mobile-acc-btn" aria-expanded="false">
          Solutions <span class="mobile-chevron">&#8964;</span>
        </button>
        <ul class="mobile-acc-panel">
          <li><a href="/solutions/growth-os"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si36" xlink:href="#si36"/></svg> Generate Pipeline</a></li>
          <li><a href="/solutions/managed-sales-pods"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si5" xlink:href="#si5"/></svg> Build a Sales Team</a></li>
          <li><a href="/solutions/revenue-os"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si4" xlink:href="#si4"/></svg> Scale Revenue</a></li>
        </ul>
      </li>

      <li class="mobile-accordion">
        <button class="mobile-acc-btn" aria-expanded="false">
          Platform <span class="mobile-chevron">&#8964;</span>
        </button>
        <ul class="mobile-acc-panel">
          <li><a href="/command-center"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si10" xlink:href="#si10"/></svg> Command Center™</a></li>
          <li><a href="/assessment"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si6" xlink:href="#si6"/></svg> Revenue Assessment</a></li>
        </ul>
      </li>

      <li class="mobile-accordion">
        <button class="mobile-acc-btn" aria-expanded="false">
          Proof <span class="mobile-chevron">&#8964;</span>
        </button>
        <ul class="mobile-acc-panel">
          <li><a href="/case-studies"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si26" xlink:href="#si26"/></svg> Case Studies</a></li>
          <li><a href="/industries"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si27" xlink:href="#si27"/></svg> Industries</a></li>
          <li><a href="/how-we-work"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si7" xlink:href="#si7"/></svg> The 10X Pipeline Promise™</a></li>
        </ul>
      </li>

      <li><a href="/resources" class="mobile-nav-link">Resources</a></li>
      <li><a href="/contact" class="mobile-nav-link">Contact</a></li>
    </ul>

    <div class="mobile-drawer-ctas">
      <a href="/assessment" class="btn btn-primary" style="width:100%;justify-content:center;">Free Assessment</a>
      <a href="/portal" class="mobile-login-link"><svg class="si" aria-hidden="true" fill="currentColor"><use href="#si9" xlink:href="#si9"/></svg> Client Login</a>
    </div>
  </nav>
</div>
<div class="mobile-overlay" id="mobile-overlay"></div>
`

export const footer = () => `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="logo footer-logo logo-img-link">
        <img src="/static/logo.webp" alt="MetaGrowth Ventures" class="footer-logo-img" width="300" height="110" loading="lazy" />
      </a>
      <p class="footer-tagline">Revenue Infrastructure &amp; Executive Growth Firm</p>
      <p class="footer-statement">Building systems. Installing accountability. Deploying talent.</p>
      <a href="https://www.linkedin.com/company/metagrowth-ventures" target="_blank" class="footer-linkedin" aria-label="LinkedIn">
        <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si50" xlink:href="#si50"/></svg>
      </a>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="/solutions/growth-os">Generate Pipeline</a></li>
          <li><a href="/solutions/managed-sales-pods">Build a Sales Team</a></li>
          <li><a href="/solutions/revenue-os">Scale Revenue</a></li>
          <li><a href="/solutions/commission-only">Commission-Only Sales Team</a></li>
          <li><a href="/solutions/fractional-cro">Fractional CRO</a></li>
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
          <li><a href="https://meetings.hubspot.com/josh549/revenue-audit?redirectUrl=https%3A%2F%2Fmetagrowth.ventures%2Fmeeting-confirmed%3Fmeeting_booked%3D1%26source%3Drevenue_audit" target="_blank" rel="noopener noreferrer" onclick="if(typeof gtag!=='undefined')gtag('event','calendar_open',{page_location:window.location.href,page_title:document.title,cta_label:'Book a Strategy Call'})">Book a Strategy Call</a></li>
          <li><a href="/assessment">Take the Assessment</a></li>
          <li><a href="/resources">Download Ecosystem Guide</a></li>
          <li><a href="/contact">Request a Revenue Review</a></li>
          <li><a href="/portal">Client Login</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-ecosystem">
    <span class="footer-ecosystem-label">Part of the MetaGrowth Ecosystem</span>
    <a href="https://metagrowthrevenueos.com" target="_blank" rel="noopener noreferrer" class="footer-ecosystem-link">metagrowthrevenueos.com <svg class="si" aria-hidden="true" fill="currentColor"><use href="#si51" xlink:href="#si51"/></svg></a>
  </div>
  <div class="footer-bottom">
    <p>&copy; ${new Date().getFullYear()} MetaGrowth Ventures. All rights reserved.</p>
  </div>
</footer>

<!-- ------------------------------------------------------------------
     PDF GATE MODAL — injected globally via footer()
     Intercepts all PDF download links with data-pdf-gate attribute
     ------------------------------------------------------------------ -->
<div id="pdf-gate-overlay" role="dialog" aria-modal="true" aria-labelledby="pdf-gate-title" style="display:none;">
  <div id="pdf-gate-modal">
    <button id="pdf-gate-close" aria-label="Close">&times;</button>
    <div id="pdf-gate-header">
      <div id="pdf-gate-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:1.4em;height:1.4em;vertical-align:middle;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm0 1.5L13.5 6H9V1.5zM5.5 11.5V8H7v3.5h1.5V8H10v1.5c0 .9-.7 1.5-1.6 1.5H7v1H5.5zm4-7.5h1.5v4H11v1.5h-1.5V4zM3.5 8H5v4H3.5V8z"/></svg>
      </div>
      <h2 id="pdf-gate-title">Get the Full Resource</h2>
      <p id="pdf-gate-subtitle">Enter your information below and we'll send you the resource instantly.</p>
      <div id="pdf-gate-pdf-name-badge"></div>
    </div>

    <form id="pdf-gate-form" novalidate>
      <input type="hidden" id="pgf-pdf-name" name="pdf_name" value="">
      <input type="hidden" id="pgf-pdf-url"  name="pdf_url"  value="">

      <div class="pgf-row">
        <div class="pgf-field">
          <label for="pgf-first-name">First Name <span class="pgf-req">*</span></label>
          <input type="text" id="pgf-first-name" name="first_name" placeholder="Jane" autocomplete="given-name" required>
        </div>
        <div class="pgf-field">
          <label for="pgf-last-name">Last Name <span class="pgf-req">*</span></label>
          <input type="text" id="pgf-last-name" name="last_name" placeholder="Smith" autocomplete="family-name" required>
        </div>
      </div>

      <div class="pgf-field">
        <label for="pgf-email">Work Email <span class="pgf-req">*</span></label>
        <input type="email" id="pgf-email" name="email" placeholder="jane@company.com" autocomplete="email" required>
      </div>

      <div class="pgf-row">
        <div class="pgf-field">
          <label for="pgf-company">Company <span class="pgf-req">*</span></label>
          <input type="text" id="pgf-company" name="company" placeholder="Acme Corp" autocomplete="organization" required>
        </div>
        <div class="pgf-field">
          <label for="pgf-website">Website</label>
          <input type="text" id="pgf-website" name="website" placeholder="acmecorp.com" autocomplete="url">
        </div>
      </div>

      <div class="pgf-field">
        <label for="pgf-role">Role / Title <span class="pgf-req">*</span></label>
        <input type="text" id="pgf-role" name="role" placeholder="CEO, VP of Sales, Founder..." autocomplete="organization-title" required>
      </div>

      <div class="pgf-field">
        <label for="pgf-goal">What are you trying to improve? <span class="pgf-opt">(optional)</span></label>
        <select id="pgf-goal" name="goal">
          <option value="">Select one...</option>
          <option value="Generate more pipeline">Generate more pipeline</option>
          <option value="Build a stronger sales team">Build a stronger sales team</option>
          <option value="Improve close rates">Improve close rates</option>
          <option value="Create better revenue systems">Create better revenue systems</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div id="pgf-error" style="display:none;"></div>

      <button type="submit" id="pgf-submit">
        <span id="pgf-submit-text">Send Me the PDF</span>
        <span id="pgf-submit-spinner" style="display:none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:1em;height:1em;animation:pgf-spin 0.8s linear infinite;vertical-align:middle;"><path d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2z" opacity=".3"/><path d="M8 0a8 8 0 018 8h-2A6 6 0 008 2V0z"/></svg>
          Sending...
        </span>
      </button>

      <p class="pgf-privacy">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:0.8em;height:0.8em;vertical-align:middle;margin-right:4px;"><path d="M8 0l6 3v5c0 4-2.5 6.5-6 8C2.5 14.5 0 12 0 8V3l8-3z"/></svg>
        We'll only use this to send the resource and relevant follow-up.
      </p>
    </form>

    <div id="pgf-success" style="display:none;">
      <div id="pgf-success-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:1.6em;height:1.6em;"><path d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.5 5.5l-4.5 4.5-2-2-1 1 3 3 5.5-5.5-1-1z"/></svg>
      </div>
      <h3>Resource sent!</h3>
      <p>Check your inbox — we've emailed you a direct link to <strong id="pgf-success-name"></strong>. Opening it now...</p>
    </div>
  </div>
</div>

<style>
/* -- PDF Gate Modal ---------------------------------------------- */
#pdf-gate-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,0.72);
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  backdrop-filter: blur(4px);
  animation: pgf-fadein 0.2s ease;
}
@keyframes pgf-fadein { from { opacity:0 } to { opacity:1 } }
@keyframes pgf-slidein { from { transform:translateY(20px);opacity:0 } to { transform:translateY(0);opacity:1 } }
@keyframes pgf-spin { to { transform:rotate(360deg) } }
#pdf-gate-modal {
  background: #111; color: #fff;
  border-radius: 16px; max-width: 520px; width: 100%;
  max-height: 90vh; overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(173,120,5,0.2);
  position: relative;
  animation: pgf-slidein 0.25s ease;
}
#pdf-gate-close {
  position: absolute; top: 14px; right: 16px;
  background: rgba(255,255,255,0.08); border: none;
  color: rgba(255,255,255,0.6); font-size: 20px; line-height: 1;
  width: 32px; height: 32px; border-radius: 50%; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, color 0.15s;
}
#pdf-gate-close:hover { background: rgba(255,255,255,0.15); color: #fff; }
#pdf-gate-header {
  padding: 32px 32px 0;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  padding-bottom: 24px;
  margin-bottom: 24px;
}
#pdf-gate-icon {
  width: 56px; height: 56px; border-radius: 50%;
  background: rgba(173,120,5,0.12); border: 1px solid rgba(173,120,5,0.3);
  color: #ad7805;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px; font-size: 1.4rem;
}
#pdf-gate-title {
  font-size: 1.45rem; font-weight: 800; color: #fff;
  margin-bottom: 8px; line-height: 1.2;
}
#pdf-gate-subtitle {
  font-size: 0.9rem; color: rgba(255,255,255,0.55); margin-bottom: 12px;
}
#pdf-gate-pdf-name-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.25);
  border-radius: 20px; padding: 5px 14px;
  font-size: 0.78rem; font-weight: 700; color: #ad7805;
  text-transform: uppercase; letter-spacing: 0.06em;
  margin-top: 4px;
}
#pdf-gate-form { padding: 0 32px 32px; }
.pgf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.pgf-field { margin-bottom: 14px; }
.pgf-field label {
  display: block; font-size: 0.8rem; font-weight: 600;
  color: rgba(255,255,255,0.7); margin-bottom: 6px; letter-spacing: 0.02em;
}
.pgf-req { color: #ad7805; }
.pgf-opt { color: rgba(255,255,255,0.35); font-weight: 400; }
.pgf-field input, .pgf-field select {
  width: 100%; padding: 10px 14px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px; color: #fff; font-size: 0.9rem;
  outline: none; transition: border-color 0.15s, background 0.15s;
  appearance: none;
}
.pgf-field input::placeholder { color: rgba(255,255,255,0.28); }
.pgf-field input:focus, .pgf-field select:focus {
  border-color: rgba(173,120,5,0.6); background: rgba(173,120,5,0.06);
}
.pgf-field select option { background: #1a1a1a; color: #fff; }
#pgf-error {
  background: rgba(220,38,38,0.1); border: 1px solid rgba(220,38,38,0.3);
  border-radius: 8px; padding: 10px 14px;
  font-size: 0.85rem; color: #fca5a5; margin-bottom: 14px;
}
#pgf-submit {
  width: 100%; padding: 14px 24px;
  background: #ad7805; color: #fff; border: none;
  border-radius: 10px; font-size: 1rem; font-weight: 700;
  cursor: pointer; transition: background 0.15s, transform 0.1s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  letter-spacing: 0.02em;
}
#pgf-submit:hover { background: #c99220; }
#pgf-submit:active { transform: scale(0.98); }
#pgf-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.pgf-privacy {
  text-align: center; font-size: 0.75rem; color: rgba(255,255,255,0.3);
  margin-top: 12px;
}
#pgf-success {
  padding: 48px 32px; text-align: center;
}
#pgf-success-icon {
  width: 64px; height: 64px; border-radius: 50%;
  background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3);
  color: #22c55e;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px; font-size: 1.6rem;
}
#pgf-success h3 { font-size: 1.3rem; font-weight: 800; margin-bottom: 10px; }
#pgf-success p { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
@media (max-width: 480px) {
  #pdf-gate-modal { border-radius: 12px; }
  #pdf-gate-header { padding: 24px 20px 20px; }
  #pdf-gate-form { padding: 0 20px 24px; }
  .pgf-row { grid-template-columns: 1fr; gap: 0; }
  #pgf-success { padding: 36px 20px; }
}
</style>

<script>
(function() {
  'use strict';

  // -- Cookie/localStorage helpers -------------------------------
  var GATE_KEY = 'mgc_pdf_gated';
  var GATE_TTL = 30 * 24 * 60 * 60 * 1000; // 30 days in ms

  function isGateCleared() {
    try {
      var val = localStorage.getItem(GATE_KEY);
      if (!val) return false;
      var data = JSON.parse(val);
      return data.cleared && (Date.now() - data.ts) < GATE_TTL;
    } catch(e) { return false; }
  }

  function markGateCleared() {
    try {
      localStorage.setItem(GATE_KEY, JSON.stringify({ cleared: true, ts: Date.now() }));
    } catch(e) {}
  }

  // -- UTM helpers -----------------------------------------------
  function getUtmData() {
    try { return JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) { return {}; }
  }

  // -- GA4 event helper ------------------------------------------
  function track(eventName, params) {
    try {
      if (typeof gtag === 'function') {
        gtag('event', eventName, params);
      }
    } catch(e) {}
  }

  // -- State -----------------------------------------------------
  var pendingPdfUrl  = '';
  var pendingPdfName = '';

  // -- Modal elements --------------------------------------------
  var overlay   = document.getElementById('pdf-gate-overlay');
  var modal     = document.getElementById('pdf-gate-modal');
  var closeBtn  = document.getElementById('pdf-gate-close');
  var form      = document.getElementById('pdf-gate-form');
  var submitBtn = document.getElementById('pgf-submit');
  var submitTxt = document.getElementById('pgf-submit-text');
  var spinner   = document.getElementById('pgf-submit-spinner');
  var errBox    = document.getElementById('pgf-error');
  var successEl = document.getElementById('pgf-success');
  var nameBadge = document.getElementById('pdf-gate-pdf-name-badge');

  // -- Open modal ------------------------------------------------
  function openGate(pdfUrl, pdfName) {
    pendingPdfUrl  = pdfUrl;
    pendingPdfName = pdfName;

    // Update badge
    if (nameBadge) nameBadge.textContent = pdfName;
    document.getElementById('pgf-pdf-name').value = pdfName;
    document.getElementById('pgf-pdf-url').value  = pdfUrl;

    // Reset form state
    form.style.display = '';
    successEl.style.display = 'none';
    errBox.style.display = 'none';
    errBox.textContent = '';
    submitBtn.disabled = false;
    submitTxt.style.display = '';
    spinner.style.display = 'none';

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Focus first input
    var firstInput = form.querySelector('input[type="text"]');
    if (firstInput) setTimeout(function() { firstInput.focus(); }, 120);

    // Track GA4 attempt
    var utm = getUtmData();
    track('pdf_download_attempt', {
      pdf_name: pdfName,
      page_url: window.location.href,
      utm_source:   utm.utm_source   || '',
      utm_medium:   utm.utm_medium   || '',
      utm_campaign: utm.utm_campaign || '',
      referrer:     utm.referrer     || '',
    });
  }

  function closeGate() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  // -- Track repeat downloads (bypass gate, still track) ---------
  function trackRepeat(pdfUrl, pdfName) {
    var utm = getUtmData();
    track('pdf_download_complete', {
      pdf_name:     pdfName,
      page_url:     window.location.href,
      utm_source:   utm.utm_source   || '',
      utm_medium:   utm.utm_medium   || '',
      utm_campaign: utm.utm_campaign || '',
      referrer:     utm.referrer     || '',
      repeat:       true,
    });
    // Open PDF directly
    window.open(pdfUrl, '_blank', 'noopener');
  }

  // -- Intercept all PDF gate links ------------------------------
  document.addEventListener('click', function(e) {
    var el = e.target;
    // Walk up to find the anchor
    while (el && el !== document.body) {
      if (el.tagName === 'A' && el.hasAttribute('data-pdf-gate')) {
        e.preventDefault();
        var pdfUrl  = el.getAttribute('data-pdf-url')  || el.getAttribute('href');
        var pdfName = el.getAttribute('data-pdf-name') || 'Resource';

        if (isGateCleared()) {
          trackRepeat(pdfUrl, pdfName);
        } else {
          openGate(pdfUrl, pdfName);
        }
        return;
      }
      el = el.parentElement;
    }
  }, true);

  // -- Close handlers --------------------------------------------
  if (closeBtn) closeBtn.addEventListener('click', closeGate);
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeGate();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay && overlay.style.display !== 'none') closeGate();
  });

  // -- Form submission -------------------------------------------
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation
      var firstName = document.getElementById('pgf-first-name').value.trim();
      var lastName  = document.getElementById('pgf-last-name').value.trim();
      var email     = document.getElementById('pgf-email').value.trim();
      var company   = document.getElementById('pgf-company').value.trim();
      var role      = document.getElementById('pgf-role').value.trim();

      if (!firstName || !lastName || !email || !company || !role) {
        errBox.textContent = 'Please fill in all required fields.';
        errBox.style.display = 'block';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errBox.textContent = 'Please enter a valid email address.';
        errBox.style.display = 'block';
        return;
      }

      errBox.style.display = 'none';
      submitBtn.disabled = true;
      submitTxt.style.display = 'none';
      spinner.style.display = '';

      var website = document.getElementById('pgf-website').value.trim();
      var goal    = document.getElementById('pgf-goal').value;
      var pdfName = document.getElementById('pgf-pdf-name').value;
      var pdfUrl  = document.getElementById('pgf-pdf-url').value;
      var utm     = getUtmData();
      var emailDomain = email.includes('@') ? email.split('@')[1] : '';

      // Track GA4 submit
      track('pdf_lead_submit', {
        pdf_name:     pdfName,
        page_url:     window.location.href,
        email_domain: emailDomain,
        company:      company,
        utm_source:   utm.utm_source   || '',
        utm_medium:   utm.utm_medium   || '',
        utm_campaign: utm.utm_campaign || '',
        referrer:     utm.referrer     || '',
      });

      var payload = {
        first_name:   firstName,
        last_name:    lastName,
        email:        email,
        company:      company,
        website:      website,
        role:         role,
        goal:         goal,
        pdf_name:     pdfName,
        pdf_url:      pdfUrl,
        page_url:     window.location.href,
        utm_source:   utm.utm_source   || '',
        utm_medium:   utm.utm_medium   || '',
        utm_campaign: utm.utm_campaign || '',
        utm_term:     utm.utm_term     || '',
        utm_content:  utm.utm_content  || '',
        referrer:     utm.referrer     || '',
        landing_page: utm.landing_page || '',
      };

      fetch('/api/pdf-gate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        // Mark gate cleared for 30 days
        markGateCleared();

        // Show success state
        form.style.display = 'none';
        successEl.style.display = 'block';
        var snEl = document.getElementById('pgf-success-name');
        if (snEl) snEl.textContent = pdfName;

        // Track GA4 complete
        track('pdf_download_complete', {
          pdf_name:     pdfName,
          page_url:     window.location.href,
          email_domain: emailDomain,
          company:      company,
          utm_source:   utm.utm_source   || '',
          utm_medium:   utm.utm_medium   || '',
          utm_campaign: utm.utm_campaign || '',
          referrer:     utm.referrer     || '',
          repeat:       false,
        });

        // Open PDF after short delay (show success state first)
        setTimeout(function() {
          window.open(pdfUrl, '_blank', 'noopener');
          // Close modal after PDF opens
          setTimeout(closeGate, 1800);
        }, 900);
      })
      .catch(function() {
        // On API failure, still open PDF — never block the download
        markGateCleared();
        window.open(pdfUrl, '_blank', 'noopener');
        closeGate();
      });
    });
  }

})();
</script>
`

export const globalStyles = () => `
<style>
  /* SVG icon system — replaces Font Awesome CDN */
  ${svgIconCss}
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
  [id] { scroll-margin-top: 88px; }
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

  /* --- HEADER ------------------------------------------------ */
  .site-header {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    background: rgba(13,13,13,0.97);
    backdrop-filter: blur(16px) saturate(1.4);
    border-bottom: 1px solid rgba(173,120,5,0.18);
    transition: all var(--transition);
  }
  .header-inner {
    max-width: 1400px; margin: 0 auto;
    padding: 0 32px; height: 68px;
    display: flex; align-items: center; gap: 0;
  }
  .logo-img-link { display: flex; align-items: center; flex-shrink: 0; margin-right: 32px; }
  .site-logo-img {
    height: 36px; width: auto; max-width: 152px;
    display: block; object-fit: contain; object-position: left center;
    transition: opacity var(--transition);
  }
  .site-logo-img:hover { opacity: 0.80; }
  .footer-logo-img {
    height: 110px; width: auto; max-width: 300px;
    display: block; object-fit: contain; object-position: left center;
    margin-bottom: 8px;
  }

  /* --- DESKTOP NAV ----------------------------------------- */
  .main-nav { flex: 1; min-width: 0; overflow: visible; }
  .nav-list { display: flex; align-items: center; gap: 0; list-style: none; flex-wrap: nowrap; }
  .nav-list > li { position: relative; flex-shrink: 0; }
  .nav-link {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 6px 13px; color: rgba(255,255,255,0.72);
    font-size: 0.865rem; font-weight: 500; letter-spacing: 0.01em;
    border-radius: var(--radius); transition: all var(--transition);
    white-space: nowrap; background: none; border: none; cursor: pointer;
    font-family: var(--font-body);
  }
  .nav-link:hover, .nav-btn:hover { color: var(--white); background: rgba(255,255,255,0.07); }
  .nav-btn { /* same as nav-link but it's a <button> */ }
  .chevron { font-size: 0.68rem; opacity: 0.6; transition: transform 0.2s ease; }
  .has-megadrop.open .chevron { transform: rotate(180deg); opacity: 1; }

  /* --- MEGA DROPDOWN --------------------------------------- */
  .has-megadrop { position: static; }
  /* Invisible bridge fills the gap between nav item and dropdown panel */
  .has-megadrop::after {
    content: ''; position: fixed;
    top: 60px; left: 0; right: 0; height: 16px;
    z-index: 899; display: none;
  }
  .has-megadrop.open::after { display: block; }
  .megadrop {
    position: fixed;
    top: 68px; left: 50%;
    width: min(1140px, 96vw);
    background: #14151A;
    border: 1px solid rgba(173,120,5,0.18);
    border-radius: 18px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04);
    padding: 0;
    opacity: 0; visibility: hidden;
    transform: translateX(-50%) translateY(-6px);
    transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
    z-index: 900;
    pointer-events: none;
  }
  .megadrop--narrow { width: min(760px, 96vw); }
  .has-megadrop.open .megadrop {
    opacity: 1; visibility: visible;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }
  .megadrop-inner { padding: 28px 28px 0; }
  .megadrop-headline {
    font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.14em; color: rgba(255,255,255,0.35);
    margin-bottom: 18px;
  }

  /* Cards inside mega dropdown */
  .megadrop-cards {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
    margin-bottom: 0;
  }
  .megadrop-cards--2col { grid-template-columns: repeat(2, 1fr); }
  .mdc {
    display: flex; flex-direction: column; gap: 0;
    padding: 20px 20px 22px; border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.02);
    transition: all 0.18s ease; text-decoration: none;
  }
  .mdc:hover {
    background: rgba(173,120,5,0.08);
    border-color: rgba(173,120,5,0.3);
  }
  .mdc--featured {
    border-color: rgba(173,120,5,0.22);
    background: rgba(173,120,5,0.05);
  }
  .mdc--featured:hover { background: rgba(173,120,5,0.12); border-color: rgba(173,120,5,0.45); }
  .mdc-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: rgba(173,120,5,0.12);
    display: flex; align-items: center; justify-content: center;
    color: var(--green); font-size: 1rem; margin-bottom: 14px;
    transition: background 0.18s;
  }
  .mdc-icon--gold { background: rgba(173,120,5,0.2); }
  .mdc:hover .mdc-icon { background: rgba(173,120,5,0.22); }
  .mdc-body { display: flex; flex-direction: column; gap: 6px; }
  .mdc-title {
    font-size: 0.925rem; font-weight: 700; color: var(--white);
    line-height: 1.3; letter-spacing: -0.01em;
    transition: color 0.18s;
  }
  .mdc:hover .mdc-title { color: var(--green); }
  .mdc-desc {
    font-size: 0.8rem; color: rgba(255,255,255,0.42);
    line-height: 1.55; font-weight: 400;
  }
  .mdc-cta {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.78rem; font-weight: 700; color: var(--green);
    margin-top: 10px; opacity: 0; transform: translateX(-4px);
    transition: opacity 0.18s, transform 0.18s;
    text-transform: uppercase; letter-spacing: 0.06em;
  }
  .mdc:hover .mdc-cta { opacity: 1; transform: translateX(0); }
  .mdc-cta i { font-size: 0.65rem; }

  /* Mega footer bar */
  .megadrop-footer {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 14px 20px; margin-top: 16px;
    font-size: 0.8rem; color: rgba(255,255,255,0.35);
    border-radius: 0 0 18px 18px;
  }
  .megadrop-footer-link {
    color: var(--green); font-weight: 600;
    display: inline-flex; align-items: center; gap: 5px;
    transition: opacity 0.18s;
  }
  .megadrop-footer-link:hover { opacity: 0.8; }
  .megadrop-footer-link i { font-size: 0.65rem; }

  /* --- HEADER RIGHT ----------------------------------------- */
  .header-right {
    display: flex; align-items: center; gap: 12px;
    flex-shrink: 0; margin-left: 16px;
  }
  .header-login-link {
    display: none; align-items: center; gap: 6px;
    color: rgba(255,255,255,0.5); font-size: 0.8rem; font-weight: 500;
    transition: color 0.18s; white-space: nowrap;
  }
  .header-login-link i { font-size: 0.72rem; }
  .header-login-link:hover { color: var(--green); }
  .header-cta-btn {
    display: none;
    background: var(--green); color: #000 !important;
    border-color: var(--green); font-size: 0.83rem; font-weight: 700;
    padding: 10px 22px; border-radius: 8px; white-space: nowrap;
    transition: all 0.18s;
  }
  .header-cta-btn:hover {
    background: var(--green-light); border-color: var(--green-light);
    transform: translateY(-1px); box-shadow: 0 6px 20px rgba(173,120,5,0.4);
  }
  @media (min-width: 1060px) {
    .header-login-link { display: inline-flex; }
    .header-cta-btn { display: inline-flex; }
  }

  /* --- HAMBURGER -------------------------------------------- */
  .hamburger {
    display: flex; flex-direction: column; justify-content: center; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 8px;
    margin-left: 8px; flex-shrink: 0;
  }
  .hamburger span {
    display: block; width: 22px; height: 2px;
    background: rgba(255,255,255,0.8); border-radius: 2px;
    transition: all 0.22s ease; transform-origin: center;
  }
  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  @media (min-width: 1060px) { .hamburger { display: none; } }

  /* --- MOBILE DRAWER --------------------------------------- */
  .mobile-drawer {
    position: fixed; inset: 68px 0 0 0;
    background: #0E0F13;
    border-top: 1px solid rgba(173,120,5,0.15);
    z-index: 998; overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
    padding: 20px 20px 40px;
  }
  .mobile-drawer.open { transform: translateX(0); }
  .mobile-overlay {
    position: fixed; inset: 68px 0 0 0; background: rgba(0,0,0,0.6);
    z-index: 997; opacity: 0; pointer-events: none;
    transition: opacity 0.28s ease;
  }
  .mobile-overlay.open { opacity: 1; pointer-events: auto; }

  .mobile-nav-list { display: flex; flex-direction: column; gap: 2px; list-style: none; }
  .mobile-nav-link {
    display: block; padding: 14px 16px;
    color: rgba(255,255,255,0.75); font-size: 1rem; font-weight: 500;
    border-radius: 10px; transition: all 0.18s;
  }
  .mobile-nav-link:hover { background: rgba(255,255,255,0.06); color: var(--white); }

  /* Mobile accordion */
  .mobile-accordion { border-radius: 10px; overflow: hidden; }
  .mobile-acc-btn {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 14px 16px; background: none; border: none; cursor: pointer;
    color: rgba(255,255,255,0.75); font-size: 1rem; font-weight: 500;
    font-family: var(--font-body); border-radius: 10px;
    transition: all 0.18s;
  }
  .mobile-acc-btn:hover { background: rgba(255,255,255,0.06); color: var(--white); }
  .mobile-acc-btn.open { background: rgba(255,255,255,0.06); color: var(--white); }
  .mobile-chevron { font-size: 0.72rem; opacity: 0.5; transition: transform 0.2s; }
  .mobile-acc-btn.open .mobile-chevron { transform: rotate(180deg); opacity: 1; }
  .mobile-acc-panel {
    display: none; list-style: none;
    padding: 4px 8px 8px 8px; background: rgba(255,255,255,0.03);
    border-radius: 0 0 10px 10px;
  }
  .mobile-acc-panel.open { display: block; }
  .mobile-acc-panel li a {
    display: flex; align-items: center; gap: 10px;
    padding: 11px 14px; color: rgba(255,255,255,0.6);
    font-size: 0.92rem; font-weight: 500; border-radius: 8px;
    transition: all 0.18s;
  }
  .mobile-acc-panel li a i { color: var(--green); font-size: 0.85rem; width: 16px; text-align: center; }
  .mobile-acc-panel li a:hover { background: rgba(173,120,5,0.10); color: var(--white); }

  .mobile-drawer-ctas {
    margin-top: 28px; padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex; flex-direction: column; gap: 12px;
  }
  .mobile-login-link {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    color: rgba(255,255,255,0.45); font-size: 0.875rem;
    padding: 10px; transition: color 0.18s;
  }
  .mobile-login-link:hover { color: var(--green); }

  /* Hide desktop nav on mobile */
  @media (max-width: 1059px) {
    .main-nav { display: none; }
    .megadrop { display: none !important; }
  }

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
  .hero-title { color: var(--white); margin-bottom: 22px; max-width: 820px; }
  .hero-title .accent { color: var(--green); }
  .hero-sub { font-size: 1.2rem; color: rgba(255,255,255,0.72); max-width: 600px; margin-bottom: 40px; }
  .hero-promise-box {
    border: 1px solid rgba(255,107,0,0.4);
    border-radius: 12px;
    padding: 20px 24px;
    background: rgba(255,107,0,0.06);
    max-width: 720px;
    margin-bottom: 32px;
  }
  .hero-promise-label {
    color: #ff6b00;
    font-size: 0.82rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .hero-promise-text { color: rgba(255,255,255,0.78); font-size: 1rem; line-height: 1.75; margin: 0; }
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
  .footer-ecosystem { background: rgba(255,255,255,0.04); border-top: 1px solid rgba(255,255,255,0.08); padding: 14px 40px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
  .footer-ecosystem-label { color: rgba(255,255,255,0.35); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; }
  .footer-ecosystem-link { color: var(--green); font-size: 0.82rem; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 6px; }
  .footer-ecosystem-link:hover { text-decoration: underline; }
  .footer-ecosystem-link i { font-size: 0.7rem; }
  .footer-bottom {
    max-width: var(--max-w); margin: 0 auto; padding: 28px 24px;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin-top: 64px;
  }
  .footer-bottom p { color: rgba(255,255,255,0.35); font-size: 0.8rem; }

  /* Responsive grid/footer collapsing */
  @media (max-width: 1059px) {
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
  // -- Mega-dropdown: JS hover with close-delay (fixes the gap problem) -----
  const CLOSE_DELAY = 120; // ms — enough to cross the gap without snapping shut
  let closeTimers = new WeakMap();

  function openMega(item) {
    // Cancel any pending close for this item
    clearTimeout(closeTimers.get(item));
    // Close all other open megas
    document.querySelectorAll('.has-megadrop.open').forEach(el => {
      if (el !== item) {
        el.classList.remove('open');
        const b = el.querySelector('.nav-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
    item.classList.add('open');
    const btn = item.querySelector('.nav-btn');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }

  function closeMega(item, delay) {
    clearTimeout(closeTimers.get(item));
    const t = setTimeout(() => {
      item.classList.remove('open');
      const btn = item.querySelector('.nav-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }, delay ?? CLOSE_DELAY);
    closeTimers.set(item, t);
  }

  document.querySelectorAll('.has-megadrop').forEach(item => {
    const panel = item.querySelector('.megadrop');
    const btn = item.querySelector('.nav-btn');

    // Mouse enters the trigger button area → open immediately
    item.addEventListener('mouseenter', () => openMega(item));
    // Mouse leaves the trigger button area → start close timer
    item.addEventListener('mouseleave', () => closeMega(item));

    // Mouse enters the dropdown panel → cancel close
    if (panel) {
      panel.addEventListener('mouseenter', () => {
        clearTimeout(closeTimers.get(item));
      });
      // Mouse leaves the dropdown panel → close with delay
      panel.addEventListener('mouseleave', () => closeMega(item));
    }

    // Keyboard support
    if (btn) {
      btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.classList.contains('open') ? closeMega(item, 0) : openMega(item);
        }
        if (e.key === 'Escape') closeMega(item, 0);
      });
    }
  });

  // Click outside → close all
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-megadrop')) {
      document.querySelectorAll('.has-megadrop.open').forEach(el => closeMega(el, 0));
    }
  });

  // -- Mobile drawer toggle -------------------------------------------------
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  function closeDrawer() {
    hamburger?.classList.remove('open');
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    drawer?.setAttribute('aria-hidden', 'true');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) { closeDrawer(); }
      else {
        hamburger.classList.add('open');
        drawer.classList.add('open');
        overlay?.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });
    overlay?.addEventListener('click', closeDrawer);
  }

  // -- Mobile accordion -----------------------------------------------------
  document.querySelectorAll('.mobile-acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      // close all
      document.querySelectorAll('.mobile-acc-btn.open').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel?.classList.add('open');
      }
    });
  });

  // -- Sticky header scroll -------------------------------------------------
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

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

const PAGE_DESCRIPTIONS: Record<string, string> = {
  'Build a Predictable B2B Revenue Engine': 'MetaGrowth Ventures diagnoses your revenue engine and builds the infrastructure B2B founders and CEOs need to grow predictably. Free assessment included.',
  'About': 'MetaGrowth Ventures is a revenue infrastructure firm helping B2B founders at $3M–$50M scale predictably — through systems, sales leadership, and execution.',
  'Case Studies': 'See how MetaGrowth Ventures helped B2B companies generate $100M+ in pipeline, book 14,500+ meetings, and add 1,320+ new clients across industries.',
  'How We Work': 'Our four-phase engagement — Diagnose, Design, Deploy, Optimize — builds durable revenue systems backed by the 10X Pipeline Promise™.',
  'Industries': 'MetaGrowth Ventures serves B2B SaaS, professional services, consulting, tech, and services firms ready to build predictable, scalable revenue.',
  'Resources': 'Free B2B revenue guides, frameworks, and diagnostics from MetaGrowth Ventures — built for founders and sales leaders scaling past $3M ARR.',
  'Contact': 'Contact MetaGrowth Ventures to discuss your revenue growth challenges. Request a Revenue Review or book a strategy call with our team.',
  'Solutions': 'MetaGrowth Ventures offers outbound pipeline generation, managed sales pods, fractional CRO, commission-only teams, and revenue OS for B2B companies.',
  'HyperLaunch Sales System': 'HyperLaunch by MetaGrowth Ventures builds your complete B2B sales infrastructure in 90 days — ICP, process, CRM, messaging, and KPIs.',
  'Managed Sales Pods': 'Get a fully deployed outbound sales team without the overhead. MetaGrowth Ventures Managed Sales Pods handle recruiting, training, and execution.',
  'Commission-Only Infrastructure': 'Scale B2B sales with zero base salary risk. MetaGrowth Ventures builds commission-only sales teams with performance-based compensation structures.',
  'Recruiting Services': 'MetaGrowth Ventures recruits high-performance B2B sales talent — SDRs, AEs, and sales leaders — using behavioral assessment and structured hiring.',
  'Fractional CRO': 'Get senior revenue leadership without a full-time hire. MetaGrowth Ventures Fractional CRO drives strategy, accountability, and execution for B2B teams.',
  'Precision Engagements': 'MetaGrowth Ventures Precision Engagements deliver targeted playbooks, outreach cadences, and scripts to launch B2B sales fast.',
  'Revenue System Audit': 'Run the MetaGrowth Revenue System Audit — a free 5–7 minute diagnostic that pinpoints exactly where your B2B pipeline is leaking.',
  'Assessment': 'Take the free MetaGrowth Revenue Assessment. Identify your biggest growth bottleneck and get a personalized action plan in under 5 minutes.',
  'Growth OS™ — Revenue Infrastructure For Modern Sales Teams': 'Growth OS™ by MetaGrowth Ventures builds your complete outbound revenue system — ICP, cadences, CRM, messaging, and pipeline infrastructure for B2B teams.',
  'Revenue OS™ — AI-Powered Revenue Infrastructure': 'Revenue OS™ delivers AI-powered revenue infrastructure for B2B companies — outbound systems, pipeline visibility, and sales execution in one integrated platform.',
  'MetaGrowth Command Center™ | Revenue Visibility & Accountability': 'MetaGrowth Command Center™ gives clients real-time visibility into pipeline, recruiting, performance, and weekly updates — all in one secure client portal.',
}

export const page = (title: string, content: string, extraHead = '', description = '', preloadImage = '', canonicalPath = '') => {
  const metaDesc = description || PAGE_DESCRIPTIONS[title] || 'MetaGrowth Ventures — Revenue Infrastructure &amp; Executive Growth Firm. We build systems, install accountability, and deploy talent for B2B companies ready to scale.'
  const base = 'https://metagrowth.ventures'
  const canonicalUrl = canonicalPath ? `${base}${canonicalPath}` : base
  const ogImage = `${base}/static/og-image.webp`
  const fullTitle = `${title} | MetaGrowth Ventures`
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fullTitle}</title>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EY6ZN6M9F"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9EY6ZN6M9F', { send_page_view: true });
  </script>
  <!-- Microsoft Clarity — deferred 3s after load -->
  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, 'clarity', 'script', 'xbls14o22c');
      }, 3000);
    });
  </script>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="${canonicalUrl}">
  <!-- Open Graph / LinkedIn / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="MetaGrowth Ventures">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${metaDesc}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="MetaGrowth Ventures — Revenue Infrastructure & Executive Growth Firm">
  <meta property="og:locale" content="en_US">
  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@metagrowth">
  <meta name="twitter:title" content="${fullTitle}">
  <meta name="twitter:description" content="${metaDesc}">
  <meta name="twitter:image" content="${ogImage}">
  <link rel="icon" type="image/png" href="/static/logo.png">
  <!-- Fonts: preconnect first, then non-blocking load —
       Inter subset: only weights actually used (400/600/700/800/900) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"></noscript>
  <!-- FontAwesome replaced with inline SVGs — no CDN request needed -->
  ${preloadImage ? `<link rel="preload" as="image" href="${preloadImage}" fetchpriority="high">` : ''}
  ${globalStyles()}
  ${extraHead}
  <!-- Organization Schema — tells Google all MetaGrowth properties belong to one brand -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MetaGrowth Ventures",
    "url": "https://metagrowth.ventures",
    "logo": "https://metagrowth.ventures/static/logo.png",
    "description": "Revenue Infrastructure & Executive Growth Firm. We build systems, install accountability, and deploy sales talent for B2B companies ready to scale predictably.",
    "email": "sales@metagrowth.ventures",
    "areaServed": "US",
    "knowsAbout": ["Revenue Operations", "Sales Infrastructure", "Outbound Sales", "CRM Implementation", "Sales Recruiting", "Fractional CRO"],
    "sameAs": [
      "https://metagrowthrevenueos.com",
      "https://www.linkedin.com/company/metagrowth-ventures"
    ],
    "subOrganization": { "@type": "Organization", "name": "Revenue OS by MetaGrowth", "url": "https://metagrowthrevenueos.com" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MetaGrowth Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth OS™", "url": "https://metagrowth.ventures/solutions/growth-os" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revenue OS™", "url": "https://metagrowth.ventures/solutions/revenue-os" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "W2 Sales Teams", "url": "https://metagrowth.ventures/solutions/managed-sales-pods" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "1099 Sales Teams", "url": "https://metagrowth.ventures/solutions/commission-only" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fractional CRO", "url": "https://metagrowth.ventures/solutions/fractional-cro" } }
      ]
    }
  }
  </script>
</head>
<body>
  ${buildSprite()}
  ${nav()}
  ${content}
  ${footer()}
  ${globalScript()}

  <!-- Floating Chat CTA — commented out
  <div id="chat-float-cta" style="position:fixed;bottom:100px;right:24px;z-index:9998;display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
    <div id="chat-float-label" style="background:var(--navy,#0d1526);color:#fff;font-size:0.78rem;font-weight:600;padding:6px 14px;border-radius:100px;border:1px solid rgba(173,120,5,0.4);white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,0.25);cursor:pointer;transition:opacity 0.3s;">Ask a Question</div>
  </div>
  <style>
    #chat-float-cta { animation: chatFadeIn 1s ease 2s both; }
    @keyframes chatFadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
    @media (max-width:640px) { #chat-float-cta { bottom:80px; right:16px; } }
  </style>
  <script>
    document.getElementById('chat-float-label').addEventListener('click', function() { openTawkChat(); });
  </script>
  -->

  <!--Start of Tawk.to Script-->
  <script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

  // -- GA4 Tawk chat callbacks --------------------------------------------------------
  // Helper: read UTM attribution from sessionStorage and fire a GA4 event.
  // Shared by both callbacks below so params are always consistent.
  function _tawkGA4(eventName, extraKey) {
    try {
      if (typeof gtag !== 'function') return;
      var _u = {};
      try { _u = JSON.parse(sessionStorage.getItem('mgc_utm') || '{}'); } catch(e) {}
      var params = {
        page_location: window.location.href,
        page_title:    document.title,
        utm_source:    _u.utm_source   || '',
        utm_medium:    _u.utm_medium   || '',
        utm_campaign:  _u.utm_campaign || '',
        landing_page:  _u.landing_page || ''
      };
      if (extraKey) params[extraKey] = true;
      console.log('[MGC GA4] Firing', eventName, params);
      gtag('event', eventName, params);
    } catch(e) { console.error('[MGC GA4] Error firing', eventName, e); }
  }

  // chat_widget_open: visitor maximises/opens the chat widget.
  // Deduped per session so open → close → reopen only counts once.
  Tawk_API.onChatMaximized = function() {
    try {
      var _key = 'mgc_ga4_chat_open';
      if (sessionStorage.getItem(_key)) return;
      sessionStorage.setItem(_key, '1');
      _tawkGA4('chat_widget_open');
    } catch(e) {}
  };

  // chat_started: visitor sent their first message in this session.
  // Tawk fires onChatStarted when a visitor submits their first message
  // (pre-chat form submitted or first message in the widget).
  // Not deduped — each genuine conversation start should be counted.
  Tawk_API.onChatStarted = function() {
    _tawkGA4('chat_started');
  };

  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6a346361d0dd3e1d406c67c3/1jrtg44fu';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  </script>
  <!--End of Tawk.to Script-->
  <script>
  function openTawkChat() {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      window.Tawk_API.showWidget();
      window.Tawk_API.maximize();
    } else {
      // Tawk not ready yet — poll until available
      var attempts = 0;
      var interval = setInterval(function() {
        attempts++;
        if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
          clearInterval(interval);
          window.Tawk_API.showWidget();
          window.Tawk_API.maximize();
        }
        if (attempts > 40) clearInterval(interval);
      }, 250);
    }
  }
  </script>
</body>
</html>
`
}
