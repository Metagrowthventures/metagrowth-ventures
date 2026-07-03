export function meetingConfirmedPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meeting Confirmed | MetaGrowth Ventures</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" href="/static/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <!-- GA4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EY6ZN6M9F"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9EY6ZN6M9F', { send_page_view: true });
  </script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --gold:       #ad7805;
      --gold-light: #d4a017;
      --bg:         #0a0a0a;
      --surface:    #111111;
      --surface2:   #1a1a1a;
      --border:     rgba(255,255,255,0.08);
      --text:       #ffffff;
      --text-muted: rgba(255,255,255,0.55);
      --green:      #22c55e;
      --green-dim:  rgba(34,197,94,0.12);
      --green-border: rgba(34,197,94,0.3);
    }
    html { scroll-behavior: smooth; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px 20px;
      -webkit-font-smoothing: antialiased;
    }

    .confirm-wrap {
      max-width: 560px;
      width: 100%;
      text-align: center;
    }

    /* Logo */
    .confirm-logo {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--gold);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      margin-bottom: 40px;
    }

    /* Check icon */
    .confirm-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: var(--green-dim);
      border: 2px solid var(--green-border);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 28px;
      font-size: 2rem;
      color: var(--green);
      animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    @keyframes pop-in {
      from { opacity: 0; transform: scale(0.6); }
      to   { opacity: 1; transform: scale(1); }
    }

    .confirm-eyebrow {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--green);
      margin-bottom: 12px;
    }

    .confirm-headline {
      font-size: 2rem;
      font-weight: 800;
      color: var(--text);
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .confirm-sub {
      font-size: 1rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 36px;
    }

    /* What to expect box */
    .confirm-expect {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px 28px;
      text-align: left;
      margin-bottom: 36px;
    }
    .confirm-expect-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 16px;
    }
    .confirm-expect-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 14px;
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.5;
    }
    .confirm-expect-item:last-child { margin-bottom: 0; }
    .confirm-expect-item i {
      color: var(--green);
      font-size: 0.85rem;
      margin-top: 2px;
      flex-shrink: 0;
    }
    .confirm-expect-item strong { color: var(--text); }

    /* CTA button */
    .confirm-btn {
      display: inline-block;
      background: var(--gold);
      color: #000;
      padding: 14px 32px;
      border-radius: 8px;
      font-weight: 800;
      font-size: 0.95rem;
      text-decoration: none;
      transition: opacity 0.2s, transform 0.15s;
      margin-bottom: 16px;
    }
    .confirm-btn:hover { opacity: 0.9; transform: translateY(-1px); }

    .confirm-home-link {
      display: block;
      font-size: 0.85rem;
      color: var(--text-muted);
      text-decoration: none;
      transition: color 0.2s;
    }
    .confirm-home-link:hover { color: var(--text); }

    /* Source badge (debug-friendly, hidden by default) */
    #confirm-source-badge {
      display: none;
      margin-top: 24px;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.2);
    }

    @media (max-width: 480px) {
      .confirm-headline { font-size: 1.6rem; }
      .confirm-expect { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="confirm-wrap">

    <a href="/" class="confirm-logo">MetaGrowth Ventures</a>

    <div class="confirm-icon">
      <i class="fas fa-check"></i>
    </div>

    <div class="confirm-eyebrow">Meeting Confirmed</div>
    <h1 class="confirm-headline">You're on the calendar.</h1>
    <p class="confirm-sub">
      Check your email for a calendar invitation. Josh reviews every call personally before it happens — come ready to talk revenue.
    </p>

    <div class="confirm-expect">
      <div class="confirm-expect-label">What happens next</div>
      <div class="confirm-expect-item">
        <i class="fas fa-envelope"></i>
        <span><strong>Confirmation email sent</strong> — check your inbox for the calendar invite and call details.</span>
      </div>
      <div class="confirm-expect-item">
        <i class="fas fa-search"></i>
        <span><strong>We'll review your situation</strong> — Josh looks at your business before every call so the 30 minutes count.</span>
      </div>
      <div class="confirm-expect-item">
        <i class="fas fa-road"></i>
        <span><strong>Come ready to discuss</strong> — your current revenue, biggest constraints, and what you want to fix first.</span>
      </div>
      <div class="confirm-expect-item">
        <i class="fas fa-ban"></i>
        <span><strong>No pitch, no pressure</strong> — this is a working session, not a sales call.</span>
      </div>
    </div>

    <a href="/" class="confirm-btn">
      <i class="fas fa-arrow-left" style="margin-right:8px;"></i> Back to MetaGrowth
    </a>
    <a href="/solutions" class="confirm-home-link">Explore our solutions while you wait →</a>

    <div id="confirm-source-badge"></div>

  </div>

<script>
(function() {
  'use strict';

  var MB_KEY = 'mgc_ga4_mb_confirmed';

  // -- Fire meeting_booked GA4 event ------------------------------------------
  // Only fires when ?meeting_booked=1 is present — meaning HubSpot redirected
  // here after a confirmed booking. Not on direct visits.
  function fireMeetingBooked(source) {
    if (sessionStorage.getItem(MB_KEY)) {
      console.log('[MGC GA4] meeting_booked already fired this session — skipping.');
      return;
    }
    sessionStorage.setItem(MB_KEY, '1');

    var utmData = {};
    try { utmData = JSON.parse(sessionStorage.getItem('mgc_utm') || localStorage.getItem('mgc_utm') || '{}'); } catch(e) {}

    console.log('[MGC GA4] Firing meeting_booked | source:', source);

    if (typeof gtag !== 'undefined') {
      gtag('event', 'meeting_booked', {
        page_location:  window.location.href,
        page_title:     document.title,
        booking_source: source,
        utm_source:     utmData.utm_source   || '',
        utm_medium:     utmData.utm_medium   || '',
        utm_campaign:   utmData.utm_campaign || '',
        landing_page:   utmData.landing_page || '',
        transport_type: 'beacon',
        event_callback: function() {
          console.log('[MGC GA4] meeting_booked confirmed sent to GA4.');
        }
      });
    }
  }

  // -- Check URL params -------------------------------------------------------
  var params = new URLSearchParams(window.location.search);
  var isConfirmed = params.get('meeting_booked') === '1';
  var source = params.get('source') || 'url_param_return';

  if (isConfirmed) {
    // Wait for gtag to be ready, then fire
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() { fireMeetingBooked(source); }, 500);
      });
    } else {
      setTimeout(function() { fireMeetingBooked(source); }, 500);
    }

    // Clean URL (remove ?meeting_booked=1 from address bar)
    try {
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch(e) {}
  }

  // -- Show source badge (dev only, invisible in prod) -----------------------
  var badge = document.getElementById('confirm-source-badge');
  if (badge && source) { badge.textContent = 'booking_source: ' + source; }

})();
</script>
</body>
</html>`;
}
