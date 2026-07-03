// -----------------------------------------------------------------------------
//  MetaGrowth Command Center™ — Campaign Link Builder
//  Route: /portal/campaign-builder
//  Purpose: Generate, save, and track UTM campaign links
// -----------------------------------------------------------------------------

// Shared portal constants (duplicated here to keep file self-contained)
const PORTAL_HEAD = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="/static/command-center-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"></noscript>
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xbls14o22c");
  </script>
`

const AUTH_GUARD = `
<script>
(function() {
  var KEY = 'mgc_auth';
  var SAMPLE_KEY = 'mgc_sample';
  var authed = localStorage.getItem(KEY) === '1' || localStorage.getItem(SAMPLE_KEY) === '1';
  if (!authed) {
    document.documentElement.style.display = 'none';
    window.location.replace('/portal');
    return;
  }
  window.isSample = localStorage.getItem(SAMPLE_KEY) === '1';
  window.mgcLogout = function() {
    localStorage.removeItem(KEY);
    localStorage.removeItem(SAMPLE_KEY);
    window.location.replace('/portal');
  };
})();
<\/script>
`

// -----------------------------------------------------------------------------
//  PAGE EXPORT
// -----------------------------------------------------------------------------
export const portalCampaignBuilderPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Campaign Link Builder | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --navy: #0D0D0F;
  --navy-mid: #111214;
  --navy-light: #18191D;
  --card: #1C1D22;
  --card-hover: #212228;
  --border: rgba(255,255,255,0.07);
  --border-hover: rgba(255,255,255,0.14);
  --green: #AD7805;
  --green-light: #C99A1A;
  --white: #FFFFFF;
  --gray-1: rgba(255,255,255,0.65);
  --gray-2: rgba(255,255,255,0.45);
  --gray-3: rgba(255,255,255,0.25);
  --gray-4: rgba(255,255,255,0.08);
  --radius: 10px;
  --radius-lg: 16px;
  --sidebar-w: 240px;
  --header-h: 60px;
}
html, body { height: 100%; }
body { font-family: 'Inter', sans-serif; background: var(--navy); color: var(--white); -webkit-font-smoothing: antialiased; }
a { text-decoration: none; color: inherit; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

/* -- Portal shell -- */
.portal-shell { display: flex; min-height: 100vh; }
.portal-sidebar {
  width: var(--sidebar-w); flex-shrink: 0;
  background: var(--navy-mid); border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0; z-index: 100; overflow-y: auto;
}
.sidebar-brand { padding: 20px 20px 16px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
.sidebar-logo-mark { width: 32px; height: 32px; border-radius: 7px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.sidebar-logo-mark img { width: 100%; height: 100%; object-fit: cover; border-radius: 7px; display: block; }
.sidebar-brand-text { flex: 1; min-width: 0; }
.sidebar-brand-name { font-size: 0.82rem; font-weight: 800; color: var(--white); line-height: 1.2; }
.sidebar-brand-sub { font-size: 0.65rem; color: var(--gray-3); letter-spacing: 0.04em; text-transform: uppercase; margin-top: 1px; }
.sidebar-client { padding: 16px 20px; border-bottom: 1px solid var(--border); background: rgba(173,120,5,0.04); }
.sidebar-client-name { font-size: 0.88rem; font-weight: 700; color: var(--white); margin-bottom: 2px; }
.sidebar-client-since { font-size: 0.72rem; color: var(--gray-3); }
.sidebar-health { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #4ade80; margin-top: 8px; }
.sidebar-health-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
.sidebar-nav { flex: 1; padding: 12px 0; }
.sidebar-section-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gray-3); padding: 12px 20px 6px; }
.sidebar-link { display: flex; align-items: center; gap: 10px; padding: 9px 20px; font-size: 0.84rem; font-weight: 500; color: var(--gray-2); transition: all 0.15s; border-left: 2px solid transparent; position: relative; }
.sidebar-link:hover { color: var(--white); background: rgba(255,255,255,0.04); }
.sidebar-link.active { color: var(--white); background: rgba(173,120,5,0.08); border-left-color: var(--green); font-weight: 600; }
.sidebar-link i { width: 16px; text-align: center; font-size: 0.82rem; }
.sidebar-link .badge { margin-left: auto; font-size: 0.62rem; font-weight: 700; background: var(--green); color: var(--navy); border-radius: 4px; padding: 1px 5px; }
.sidebar-bottom { padding: 16px 20px; border-top: 1px solid var(--border); }
.sidebar-logout { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--gray-3); transition: color 0.2s; }
.sidebar-logout:hover { color: var(--white); cursor: pointer; }
.svg-icon { display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor; }

/* -- Main -- */
.portal-main { margin-left: var(--sidebar-w); flex: 1; min-width: 0; display: flex; flex-direction: column; }
.portal-header { height: var(--header-h); background: var(--navy-mid); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 0 32px; position: sticky; top: 0; z-index: 50; }
.portal-page-title { font-size: 0.9rem; font-weight: 700; color: var(--white); display:flex;align-items:center;gap:8px; }
.portal-header-right { display: flex; align-items: center; gap: 16px; }
.portal-stage-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--green); background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.25); border-radius: 20px; padding: 4px 12px; }
.portal-content { flex: 1; padding: 32px; }

/* -- Section header -- */
.section-header { margin-bottom: 24px; }
.section-header h2 { font-size: 1.15rem; font-weight: 800; color: var(--white); margin-bottom: 4px; }
.section-header p { font-size: 0.84rem; color: var(--gray-3); }

/* -- Cards -- */
.p-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; }
.p-card-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--green); margin-bottom: 14px; display:flex;align-items:center;gap:6px; }

/* -- Tabs -- */
.tab-bar { display: flex; gap: 4px; border-bottom: 1px solid var(--border); margin-bottom: 28px; }
.tab-btn { padding: 10px 18px; font-size: 0.84rem; font-weight: 600; color: var(--gray-2); border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.15s; background: none; border-left: none; border-right: none; border-top: none; cursor:pointer; }
.tab-btn:hover { color: var(--white); }
.tab-btn.active { color: var(--white); border-bottom-color: var(--green); }
.tab-panel { display: none; }
.tab-panel.active { display: block; }

/* -- Builder form -- */
.builder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
.builder-field { display: flex; flex-direction: column; gap: 8px; }
.builder-field.full { grid-column: 1 / -1; }
.field-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gray-2); }
.field-label span { font-weight: 400; color: var(--gray-3); text-transform: none; letter-spacing: 0; margin-left: 4px; }
.field-select, .field-input {
  width: 100%; padding: 11px 14px; font-size: 0.9rem; font-family: inherit;
  background: rgba(255,255,255,0.04); border: 1px solid var(--border);
  border-radius: var(--radius); color: var(--white); outline: none;
  transition: border-color 0.2s, background 0.2s;
  appearance: none; -webkit-appearance: none;
}
.field-select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
.field-select:focus, .field-input:focus { border-color: var(--green); background: rgba(173,120,5,0.05); }
.field-select::placeholder, .field-input::placeholder { color: var(--gray-3); }
.field-select option { background: #1C1D22; color: #fff; }

/* -- Custom input appear/hide -- */
.custom-input-wrap { display: none; margin-top: 8px; }
.custom-input-wrap.visible { display: block; }

/* -- Generate button -- */
.btn-generate {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--green); color: var(--navy); font-size: 0.95rem; font-weight: 800;
  padding: 13px 28px; border-radius: var(--radius); transition: background 0.2s, transform 0.15s;
  letter-spacing: 0.01em;
}
.btn-generate:hover { background: var(--green-light); transform: translateY(-1px); }
.btn-generate:active { transform: translateY(0); }

/* -- Output box -- */
.output-box {
  background: rgba(173,120,5,0.05); border: 1px solid rgba(173,120,5,0.25);
  border-radius: var(--radius-lg); padding: 24px; margin-top: 24px; display: none;
}
.output-box.show { display: block; }
.output-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--green); margin-bottom: 12px; display:flex;align-items:center;gap:6px; }
.output-url {
  font-size: 0.88rem; color: var(--white); font-family: 'Courier New', monospace;
  background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius); padding: 14px 16px;
  word-break: break-all; line-height: 1.6; margin-bottom: 16px;
  user-select: all;
}
.output-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.btn-action {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 0.82rem; font-weight: 700; padding: 9px 18px; border-radius: var(--radius);
  transition: all 0.2s; cursor: pointer;
}
.btn-copy { background: var(--green); color: var(--navy); }
.btn-copy:hover { background: var(--green-light); }
.btn-copy.copied { background: #4ade80; color: #052e16; }
.btn-open { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--gray-1); }
.btn-open:hover { background: rgba(255,255,255,0.1); color: var(--white); }
.btn-save { background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.25); color: var(--green-light); }
.btn-save:hover { background: rgba(173,120,5,0.18); }
.btn-save.saved { background: rgba(74,222,128,0.1); border-color: rgba(74,222,128,0.25); color: #4ade80; }

/* -- UTM breakdown -- */
.utm-breakdown { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); }
.utm-chip {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.72rem; font-weight: 600; padding: 4px 10px; border-radius: 20px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
}
.utm-chip-key { color: var(--green-light); }
.utm-chip-val { color: var(--white); }

/* -- History table -- */
.hist-table { width: 100%; border-collapse: collapse; }
.hist-table th { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gray-3); text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--border); }
.hist-table td { padding: 12px 14px; font-size: 0.82rem; color: var(--gray-1); border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
.hist-table tr:hover td { background: rgba(255,255,255,0.02); }
.hist-table tr:last-child td { border-bottom: none; }
.hist-url { font-family: 'Courier New', monospace; font-size: 0.78rem; color: var(--green-light); max-width: 340px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.hist-url:hover { color: var(--white); text-decoration: underline; }
.hist-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; }
.hist-badge.fav { background: rgba(173,120,5,0.12); color: var(--green-light); border: 1px solid rgba(173,120,5,0.2); }
.hist-actions { display: flex; gap: 6px; }
.hist-btn { display: inline-flex; align-items: center; gap: 4px; font-size: 0.72rem; font-weight: 600; padding: 5px 10px; border-radius: 6px; transition: all 0.15s; cursor: pointer; }
.hist-btn.copy { background: rgba(173,120,5,0.1); color: var(--green-light); border: 1px solid rgba(173,120,5,0.2); }
.hist-btn.copy:hover { background: rgba(173,120,5,0.18); }
.hist-btn.open-link { background: rgba(255,255,255,0.05); color: var(--gray-1); border: 1px solid var(--border); }
.hist-btn.open-link:hover { background: rgba(255,255,255,0.1); }
.hist-btn.del { background: rgba(239,68,68,0.08); color: #f87171; border: 1px solid rgba(239,68,68,0.15); }
.hist-btn.del:hover { background: rgba(239,68,68,0.14); }
.hist-empty { text-align: center; padding: 48px 24px; color: var(--gray-3); }
.hist-empty-icon { font-size: 2rem; margin-bottom: 12px; opacity: 0.4; }
.hist-empty-text { font-size: 0.88rem; }

/* -- Dashboard stats -- */
.dash-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; margin-bottom: 24px; }
.dash-kpi { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px 20px; }
.dash-kpi-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gray-3); margin-bottom: 8px; }
.dash-kpi-value { font-size: 1.6rem; font-weight: 900; color: var(--white); line-height: 1; margin-bottom: 4px; }
.dash-kpi-value.gold { color: var(--green-light); }
.dash-kpi-value.green { color: #4ade80; }
.dash-kpi-sub { font-size: 0.7rem; color: var(--gray-3); }

/* -- Campaign table -- */
.camp-table { width: 100%; border-collapse: collapse; }
.camp-table th { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gray-3); text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--border); }
.camp-table td { padding: 13px 14px; font-size: 0.84rem; color: var(--gray-1); border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
.camp-table tr:hover td { background: rgba(255,255,255,0.02); }
.camp-table tr:last-child td { border-bottom: none; }
.camp-name { font-weight: 700; color: var(--white); }
.camp-bar-wrap { display: flex; align-items: center; gap: 10px; }
.camp-bar-track { flex: 1; height: 5px; background: rgba(255,255,255,0.07); border-radius: 4px; overflow: hidden; min-width: 60px; }
.camp-bar-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%); }
.camp-bar-val { font-size: 0.78rem; font-weight: 700; color: var(--white); min-width: 28px; text-align: right; }
.source-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 4px; }
.src-linkedin { background: rgba(10,102,194,0.2); color: #60a5fa; }
.src-email { background: rgba(59,130,246,0.15); color: #93c5fd; }
.src-youtube { background: rgba(239,68,68,0.15); color: #f87171; }
.src-google { background: rgba(74,222,128,0.12); color: #4ade80; }
.src-facebook { background: rgba(99,102,241,0.15); color: #a78bfa; }
.src-referral { background: rgba(173,120,5,0.15); color: var(--green-light); }
.src-direct { background: rgba(255,255,255,0.06); color: var(--gray-2); }
.src-other { background: rgba(255,255,255,0.06); color: var(--gray-2); }

/* -- Info alert -- */
.info-alert { background: rgba(173,120,5,0.07); border: 1px solid rgba(173,120,5,0.2); border-radius: var(--radius); padding: 14px 18px; font-size: 0.82rem; color: var(--gray-1); line-height: 1.6; margin-bottom: 24px; display:flex;align-items:flex-start;gap:10px; }
.info-alert-icon { color: var(--green-light); font-size: 1rem; flex-shrink: 0; margin-top:1px; }

/* -- Responsive -- */
@media (max-width: 900px) {
  .portal-sidebar { transform: translateX(-100%); transition: transform 0.3s; }
  .portal-sidebar.open { transform: translateX(0); }
  .portal-main { margin-left: 0; }
  .portal-content { padding: 20px 16px; }
  .builder-grid { grid-template-columns: 1fr; }
  .builder-field.full { grid-column: 1; }
  .dash-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
</head>
<body>
${AUTH_GUARD}

<div class="portal-shell">

  <!-- -- Sidebar -- -->
  <nav class="portal-sidebar" id="sidebar">
    <div class="sidebar-brand">
      <div class="sidebar-logo-mark"><img src="/static/command-center-icon.png" alt="MG" loading="lazy"></div>
      <div class="sidebar-brand-text">
        <div class="sidebar-brand-name">Command Center™</div>
        <div class="sidebar-brand-sub">MetaGrowth Ventures</div>
      </div>
    </div>
    <div class="sidebar-client">
      <div class="sidebar-client-name">Welcome, Josh</div>
      <div class="sidebar-client-since">Client since June 2026</div>
      <div class="sidebar-health"><span class="sidebar-health-dot"></span> Program Health: Green</div>
    </div>
    <nav class="sidebar-nav">
      <div class="sidebar-section-label">Overview</div>
      <a href="/portal/dashboard" class="sidebar-link">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg> Dashboard
      </a>
      <div class="sidebar-section-label">Program</div>
      <a href="/portal/calls" class="sidebar-link">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 3a2 2 0 00-2 2v6a2 2 0 002 2h9a2 2 0 002-2v-1.5l3 2V4.5l-3 2V5a2 2 0 00-2-2H2z"/></svg> Recorded Calls <span class="badge">14</span>
      </a>
      <a href="/portal/briefing" class="sidebar-link">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11 0H6L3 9h4l-2 7 9-10H9z"/></svg> AI Briefing
      </a>
      <a href="/portal/communications" class="sidebar-link">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 5v9a2 2 0 002 2h12a2 2 0 002-2V5L10.3 0H5.7L0 5zm10 7H6v-2H4l4-5 4 5h-2v2zm4-4H2L6 4h4l4 4z" fill-rule="evenodd"/></svg> Communications
      </a>
      <div class="sidebar-section-label">Documents</div>
      <a href="/portal/agreements" class="sidebar-link">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm0-4H4V4h5v2h3v.5zm-3-5V1l4 4h-4z"/></svg> Agreements
      </a>
      <a href="/portal/audit" class="sidebar-link">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9.4 8.6A3.4 3.4 0 005.5 2a3.4 3.4 0 00-1 6.6v.4h1v-.4A3.4 3.4 0 009.4 8.6zM5 6.5v.5H4v-.5c-.6-.2-1-.6-1-1.2h1c0 .2.2.4.5.4s.5-.1.5-.3c0-.2-.2-.3-.7-.5-.7-.2-1.3-.5-1.3-1.2 0-.5.4-1 1-1.1V2h1v.6c.6.2 1 .6 1 1.2H5c0-.2-.2-.4-.5-.4s-.5.1-.5.3c0 .2.2.3.7.5.7.2 1.3.5 1.3 1.2 0 .5-.4 1-1 1.1zm8.3 5.8l-3.3-3.3a5.5 5.5 0 10-1.1 1.1l3.3 3.3 1.1-1.1z"/></svg> Revenue Audit
      </a>
      <div class="sidebar-section-label">Recruiting</div>
      <a href="/portal/candidates" class="sidebar-link">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12 9c-1 0-2 .3-2.7.8A5 5 0 0112 14h4v-1a5 5 0 00-4-4zM6 8a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6zM6 9a5 5 0 00-5 4v1h10v-1a5 5 0 00-5-4z"/></svg> Candidate Center <span class="badge">3</span>
      </a>
      <div class="sidebar-section-label">Marketing</div>
      <a href="/portal/campaign-builder" class="sidebar-link active">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9 1a1 1 0 00-1 1v.17A4 4 0 005 6v3H3v2h10v-2h-2V6a4 4 0 00-3-3.83V2a1 1 0 00-1-1zM7 13a1 1 0 002 0H7zm7-8l1.5-1.5-1-1L13 4l-1.5-1.5-1 1L12 5l-1.5 1.5 1 1L13 6l1.5 1.5 1-1L14 5zm-11 0L1.5 3.5l-1 1L2 6 .5 7.5l1 1L3 7l1.5 1.5 1-1L4 6l1.5-1.5-1-1L3 5z"/></svg> Campaign Builder
      </a>
    </nav>
    <div class="sidebar-bottom">
      <div id="sample-banner" style="display:none;background:rgba(255,107,0,0.1);border:1px solid rgba(255,107,0,0.25);border-radius:8px;padding:10px 12px;margin-bottom:12px;">
        <div style="font-size:0.68rem;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#ff6b00;margin-bottom:3px;">Sample Account</div>
        <div style="font-size:0.72rem;color:rgba(255,255,255,0.45);line-height:1.4;">This is demo data for illustration.</div>
      </div>
      <div class="sidebar-logout" onclick="window.mgcLogout()">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6 2H2v12h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2zm7.5 5.5L11 5l-1 1 1.5 1.5H5v2h6.5L10 11l1 1 2.5-2.5L15 8l-1.5-.5z"/></svg> Exit Portal
      </div>
    </div>
  </nav>
  <script>if(window.isSample){var b=document.getElementById('sample-banner');if(b)b.style.display='block';}</script>

  <!-- -- Main content -- -->
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="color:var(--green);font-size:1rem;"><path d="M9 1a1 1 0 00-1 1v.17A4 4 0 005 6v3H3v2h10v-2h-2V6a4 4 0 00-3-3.83V2a1 1 0 00-1-1zM7 13a1 1 0 002 0H7zm7-8l1.5-1.5-1-1L13 4l-1.5-1.5-1 1L12 5l-1.5 1.5 1 1L13 6l1.5 1.5 1-1L14 5zm-11 0L1.5 3.5l-1 1L2 6 .5 7.5l1 1L3 7l1.5 1.5 1-1L4 6l1.5-1.5-1-1L3 5z"/></svg>
        Campaign Link Builder
      </div>
      <div class="portal-header-right">
        <div class="portal-stage-badge">
          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 3.5l-5 5-3-3-5 5L1.4 9 8 2.5l3 3L14.6 2 16 3.5zM0 14h16v2H0z"/></svg>
          UTM Tracking
        </div>
      </div>
    </header>

    <div class="portal-content">

      <div class="section-header">
        <h2>Campaign Link Builder</h2>
        <p>Generate standardized UTM tracking links for all MetaGrowth marketing campaigns.</p>
      </div>

      <!-- Tabs -->
      <div class="tab-bar">
        <button class="tab-btn active" onclick="switchTab('builder',this)">
          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="margin-right:6px;"><path d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM7 12H4V9h3v3zm0-5H4V4h3v3zm5 5h-3V9h3v3zm0-5h-3V4h3v3z"/></svg>
          Build Link
        </button>
        <button class="tab-btn" onclick="switchTab('history',this)">
          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="margin-right:6px;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14a6 6 0 110-12 6 6 0 010 12zm.5-9H7v5l4.3 2.5.7-1.2-3.5-2V5z"/></svg>
          History <span id="hist-count-badge" style="background:rgba(173,120,5,0.2);color:var(--green-light);font-size:0.65rem;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;"></span>
        </button>
        <button class="tab-btn" onclick="switchTab('dashboard',this)">
          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="margin-right:6px;"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg>
          Performance
        </button>
      </div>

      <!-- ------------ TAB: BUILD ------------ -->
      <div id="tab-builder" class="tab-panel active">

        <div class="info-alert">
          <span class="info-alert-icon">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 12H7v-2h2v2zm0-4H7V4h2v4z"/></svg>
          </span>
          <div>All generated links automatically point to <strong>metagrowth.ventures</strong>. Campaign names are lowercased and spaces replaced with underscores. Spaces in source/medium are replaced with hyphens for GA4 compatibility.</div>
        </div>

        <div class="p-card">
          <div class="p-card-label">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9 1a1 1 0 00-1 1v.17A4 4 0 005 6v3H3v2h10v-2h-2V6a4 4 0 00-3-3.83V2a1 1 0 00-1-1zM7 13a1 1 0 002 0H7zm7-8l1.5-1.5-1-1L13 4l-1.5-1.5-1 1L12 5l-1.5 1.5 1 1L13 6l1.5 1.5 1-1L14 5zm-11 0L1.5 3.5l-1 1L2 6 .5 7.5l1 1L3 7l1.5 1.5 1-1L4 6l1.5-1.5-1-1L3 5z"/></svg>
            Configure Campaign Parameters
          </div>

          <div class="builder-grid">

            <!-- Destination -->
            <div class="builder-field">
              <label class="field-label" for="f-destination">Destination Page <span>*required</span></label>
              <select class="field-select" id="f-destination" onchange="onDestinationChange()">
                <option value="">— Select Destination —</option>
                <option value="/">Homepage</option>
                <option value="/assessment">Revenue Assessment</option>
                <option value="/founders-council">Founders Revenue Council</option>
                <option value="/resources">Resources</option>
                <option value="/contact">Contact</option>
                <option value="custom">Custom URL…</option>
              </select>
              <div class="custom-input-wrap" id="custom-dest-wrap">
                <input class="field-input" id="f-custom-dest" type="url" placeholder="https://metagrowth.ventures/solutions/...">
              </div>
            </div>

            <!-- Source -->
            <div class="builder-field">
              <label class="field-label" for="f-source">Traffic Source <span>*required</span></label>
              <select class="field-select" id="f-source" onchange="onSourceChange()">
                <option value="">— Select Source —</option>
                <option value="linkedin">LinkedIn</option>
                <option value="youtube">YouTube</option>
                <option value="email">Email</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="referral">Referral</option>
                <option value="direct">Direct</option>
                <option value="other">Other (custom)</option>
              </select>
              <div class="custom-input-wrap" id="custom-source-wrap">
                <input class="field-input" id="f-custom-source" type="text" placeholder="e.g. instagram, twitter, podcast">
              </div>
            </div>

            <!-- Medium -->
            <div class="builder-field">
              <label class="field-label" for="f-medium">Medium <span>*required</span></label>
              <select class="field-select" id="f-medium" onchange="onMediumChange()">
                <option value="">— Select Medium —</option>
                <option value="organic">Organic</option>
                <option value="dm">DM</option>
                <option value="video">Video</option>
                <option value="short">Short</option>
                <option value="email">Email</option>
                <option value="cpc">CPC</option>
                <option value="referral">Referral</option>
                <option value="custom">Custom…</option>
              </select>
              <div class="custom-input-wrap" id="custom-medium-wrap">
                <input class="field-input" id="f-custom-medium" type="text" placeholder="e.g. story, reel, banner">
              </div>
            </div>

            <!-- Campaign Name -->
            <div class="builder-field">
              <label class="field-label" for="f-campaign">Campaign Name <span>*required</span></label>
              <input class="field-input" id="f-campaign" type="text" placeholder="e.g. Revenue Assessment Push, Q3 Outbound" oninput="livePreview()">
            </div>

            <!-- Content (optional) -->
            <div class="builder-field">
              <label class="field-label" for="f-content">Content <span>optional — ad/post variant identifier</span></label>
              <input class="field-input" id="f-content" type="text" placeholder="e.g. cta-button, hero-banner, post-1" oninput="livePreview()">
            </div>

            <!-- Term (optional) -->
            <div class="builder-field">
              <label class="field-label" for="f-term">Term <span>optional — keyword (paid search)</span></label>
              <input class="field-input" id="f-term" type="text" placeholder="e.g. fractional cro, sales consulting" oninput="livePreview()">
            </div>

          </div>

          <!-- Live preview label -->
          <div id="live-preview-wrap" style="display:none;margin-bottom:20px;">
            <div style="font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--gray-3);margin-bottom:8px;">Live Preview</div>
            <div id="live-preview-url" style="font-size:0.8rem;color:var(--gray-2);font-family:'Courier New',monospace;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:10px 14px;word-break:break-all;line-height:1.6;"></div>
          </div>

          <!-- Validation error -->
          <div id="form-error" style="display:none;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:8px;padding:10px 14px;font-size:0.82rem;color:#f87171;margin-bottom:16px;"></div>

          <button class="btn-generate" onclick="generateLink()">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM7 12H4V9h3v3zm0-5H4V4h3v3zm5 5h-3V9h3v3zm0-5h-3V4h3v3z"/></svg>
            Generate UTM Link
          </button>
        </div>

        <!-- Output -->
        <div class="output-box" id="output-box">
          <div class="output-label">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg>
            Generated UTM Link
          </div>
          <div class="output-url" id="output-url"></div>
          <div class="output-actions">
            <button class="btn-action btn-copy" id="btn-copy" onclick="copyLink()">
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 4v10h10V4H4zm9 9H5V5h8v8zM0 0v12h2V2h10V0H0z"/></svg>
              Copy to Clipboard
            </button>
            <button class="btn-action btn-open" onclick="openLink()">
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10 0v2h3.6L5.3 10.3l1.4 1.4L15 3.4V7h2V0h-7zM0 2v14h14v-6h-2v4H2V4h4V2H0z"/></svg>
              Open Link
            </button>
            <button class="btn-action btn-save" id="btn-save" onclick="saveToFavorites()">
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0L6 5H0l5 4-2 7 5-4 5 4-2-7 5-4h-6z"/></svg>
              Save to Favorites
            </button>
          </div>
          <div class="utm-breakdown" id="utm-breakdown"></div>
        </div>

      </div>

      <!-- ------------ TAB: HISTORY ------------ -->
      <div id="tab-history" class="tab-panel">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <div>
            <div style="font-size:1rem;font-weight:800;color:var(--white);margin-bottom:2px;">Link History</div>
            <div style="font-size:0.82rem;color:var(--gray-3);">All generated links are saved locally in your browser.</div>
          </div>
          <button onclick="clearHistory()" style="font-size:0.78rem;font-weight:600;color:#f87171;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.15);border-radius:8px;padding:7px 14px;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.background='rgba(239,68,68,0.14)'" onmouseout="this.style.background='rgba(239,68,68,0.08)'">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="margin-right:4px;"><path d="M5 0v1H1v2h14V1h-4V0H5zm-1.5 4L4 15a1 1 0 001 1h6a1 1 0 001-1l.5-11H3.5zM6 6h1v7H6V6zm3 0h1v7H9V6z"/></svg>
            Clear All
          </button>
        </div>

        <div class="p-card" style="padding:0;overflow:hidden;">
          <div id="hist-container">
            <div class="hist-empty" id="hist-empty">
              <div class="hist-empty-icon">
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="font-size:2.5rem;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14a6 6 0 110-12 6 6 0 010 12zm.5-9H7v5l4.3 2.5.7-1.2-3.5-2V5z"/></svg>
              </div>
              <div class="hist-empty-text">No links generated yet. Build your first campaign link above.</div>
            </div>
            <table class="hist-table" id="hist-table" style="display:none;">
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Source / Medium</th>
                  <th>URL</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="hist-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ------------ TAB: DASHBOARD ------------ -->
      <div id="tab-dashboard" class="tab-panel">

        <div class="info-alert" style="background:rgba(59,130,246,0.06);border-color:rgba(59,130,246,0.2);">
          <span class="info-alert-icon" style="color:#60a5fa;">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 12H7v-2h2v2zm0-4H7V4h2v4z"/></svg>
          </span>
          <div>
            <strong>Connect GA4 for live data.</strong> The performance dashboard below shows sample benchmark data. To pull live campaign metrics, connect your GA4 property (G-9EY6ZN6M9F) to a reporting integration or view UTM performance directly in <a href="https://analytics.google.com" target="_blank" rel="noopener" style="color:#60a5fa;text-decoration:underline;">Google Analytics → Reports → Acquisition → Traffic Acquisition</a>.
          </div>
        </div>

        <!-- KPI row -->
        <div class="dash-grid" style="margin-bottom:24px;">
          <div class="dash-kpi">
            <div class="dash-kpi-label">Total Campaigns</div>
            <div class="dash-kpi-value gold" id="dash-total-campaigns">0</div>
            <div class="dash-kpi-sub">Links generated</div>
          </div>
          <div class="dash-kpi">
            <div class="dash-kpi-label">Top Source</div>
            <div class="dash-kpi-value" id="dash-top-source" style="font-size:1.1rem;">—</div>
            <div class="dash-kpi-sub">By link count</div>
          </div>
          <div class="dash-kpi">
            <div class="dash-kpi-label">Top Medium</div>
            <div class="dash-kpi-value" id="dash-top-medium" style="font-size:1.1rem;">—</div>
            <div class="dash-kpi-sub">By link count</div>
          </div>
          <div class="dash-kpi">
            <div class="dash-kpi-label">Saved Favorites</div>
            <div class="dash-kpi-value green" id="dash-favorites">0</div>
            <div class="dash-kpi-sub">Pinned links</div>
          </div>
        </div>

        <!-- Campaign breakdown from history -->
        <div class="p-card" style="margin-bottom:24px;">
          <div class="p-card-label">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 3.5l-5 5-3-3-5 5L1.4 9 8 2.5l3 3L14.6 2 16 3.5zM0 14h16v2H0z"/></svg>
            Campaign Breakdown — Links by Source
          </div>
          <div id="source-breakdown-container">
            <div style="text-align:center;padding:32px;color:var(--gray-3);font-size:0.88rem;">Generate links above to see campaign breakdowns here.</div>
          </div>
        </div>

        <!-- Sample GA4 funnel benchmarks -->
        <div class="p-card">
          <div class="p-card-label">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg>
            GA4 Funnel Benchmarks — Sample Data
            <span style="font-size:0.65rem;font-weight:500;color:var(--gray-3);text-transform:none;letter-spacing:0;margin-left:6px;background:rgba(255,255,255,0.06);padding:2px 8px;border-radius:10px;">Sample</span>
          </div>
          <table class="camp-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Source</th>
                <th>Sessions</th>
                <th>Assessment Starts</th>
                <th>Completions</th>
                <th>Calendar Opens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div class="camp-name">revenue_assessment_push</div></td>
                <td><span class="source-chip src-linkedin">linkedin</span></td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:100%"></div></div>
                    <div class="camp-bar-val">312</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:74%"></div></div>
                    <div class="camp-bar-val">231</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:46%"></div></div>
                    <div class="camp-bar-val">144</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:28%"></div></div>
                    <div class="camp-bar-val">87</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><div class="camp-name">q3_outbound_loom</div></td>
                <td><span class="source-chip src-email">email</span></td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:72%"></div></div>
                    <div class="camp-bar-val">225</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:55%"></div></div>
                    <div class="camp-bar-val">172</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:38%"></div></div>
                    <div class="camp-bar-val">119</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:22%"></div></div>
                    <div class="camp-bar-val">68</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><div class="camp-name">founders_council_launch</div></td>
                <td><span class="source-chip src-youtube">youtube</span></td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:48%"></div></div>
                    <div class="camp-bar-val">151</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:33%"></div></div>
                    <div class="camp-bar-val">104</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:22%"></div></div>
                    <div class="camp-bar-val">69</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:14%"></div></div>
                    <div class="camp-bar-val">43</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><div class="camp-name">fractional_cro_ads</div></td>
                <td><span class="source-chip src-google">google</span></td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:36%"></div></div>
                    <div class="camp-bar-val">114</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:22%"></div></div>
                    <div class="camp-bar-val">70</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:14%"></div></div>
                    <div class="camp-bar-val">44</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:10%"></div></div>
                    <div class="camp-bar-val">31</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><div class="camp-name">partner_referral_program</div></td>
                <td><span class="source-chip src-referral">referral</span></td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:25%"></div></div>
                    <div class="camp-bar-val">79</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:20%"></div></div>
                    <div class="camp-bar-val">63</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:14%"></div></div>
                    <div class="camp-bar-val">44</div>
                  </div>
                </td>
                <td>
                  <div class="camp-bar-wrap">
                    <div class="camp-bar-track"><div class="camp-bar-fill" style="width:10%"></div></div>
                    <div class="camp-bar-val">29</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div><!-- /portal-content -->
  </div><!-- /portal-main -->
</div><!-- /portal-shell -->

<script>
// --- Storage key -----------------------------------------------------------
var STORAGE_KEY = 'mgc_campaign_links';
var currentUrl = '';

// --- Load history from localStorage -----------------------------------------
function loadHistory() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function saveHistory(arr) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch(e) {}
}

// --- Tab switching ------------------------------------------------------------
function switchTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
  if (name === 'history') renderHistory();
  if (name === 'dashboard') renderDashboard();
}

// --- Destination select -------------------------------------------------------
function onDestinationChange() {
  var val = document.getElementById('f-destination').value;
  var wrap = document.getElementById('custom-dest-wrap');
  wrap.classList.toggle('visible', val === 'custom');
  livePreview();
}

function onSourceChange() {
  var val = document.getElementById('f-source').value;
  var wrap = document.getElementById('custom-source-wrap');
  wrap.classList.toggle('visible', val === 'other');
  livePreview();
}

function onMediumChange() {
  var val = document.getElementById('f-medium').value;
  var wrap = document.getElementById('custom-medium-wrap');
  wrap.classList.toggle('visible', val === 'custom');
  livePreview();
}

// --- Normalise text for UTM params -------------------------------------------
function slugify(str) {
  return str.trim().toLowerCase()
    .replace(/[^a-z0-9\\s_-]/g, '')
    .replace(/\\s+/g, '_');
}

function hyphenate(str) {
  return str.trim().toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, '')
    .replace(/\\s+/g, '-');
}

// --- Gather form values -------------------------------------------------------
function getValues() {
  var dest = document.getElementById('f-destination').value;
  var destPath = dest === 'custom'
    ? (document.getElementById('f-custom-dest').value || '').trim()
    : dest;

  var source = document.getElementById('f-source').value;
  if (source === 'other') source = document.getElementById('f-custom-source').value || '';

  var medium = document.getElementById('f-medium').value;
  if (medium === 'custom') medium = document.getElementById('f-custom-medium').value || '';

  var campaign = document.getElementById('f-campaign').value || '';
  var content  = document.getElementById('f-content').value || '';
  var term     = document.getElementById('f-term').value || '';

  return { dest, destPath, source, medium, campaign, content, term };
}

// --- Build UTM URL ------------------------------------------------------------
function buildUrl(vals) {
  var BASE = 'https://metagrowth.ventures';
  var path = vals.destPath;

  // Custom URL might be a full URL already
  var base;
  if (path.startsWith('http')) {
    base = path;
  } else {
    base = BASE + (path.startsWith('/') ? path : '/' + path);
  }

  var params = new URLSearchParams();
  if (vals.source)   params.set('utm_source',   hyphenate(vals.source));
  if (vals.medium)   params.set('utm_medium',   hyphenate(vals.medium));
  if (vals.campaign) params.set('utm_campaign', slugify(vals.campaign));
  if (vals.content)  params.set('utm_content',  slugify(vals.content));
  if (vals.term)     params.set('utm_term',      slugify(vals.term));

  var qs = params.toString();
  return qs ? base + '?' + qs : base;
}

// --- Live preview -------------------------------------------------------------
function livePreview() {
  var vals = getValues();
  var wrap = document.getElementById('live-preview-wrap');
  var previewEl = document.getElementById('live-preview-url');

  if (!vals.destPath && vals.dest !== 'custom') {
    wrap.style.display = 'none'; return;
  }
  if (vals.dest === 'custom' && !vals.destPath) {
    wrap.style.display = 'none'; return;
  }
  if (!vals.source && !vals.medium && !vals.campaign) {
    wrap.style.display = 'none'; return;
  }

  wrap.style.display = 'block';
  previewEl.textContent = buildUrl(vals);
}

// --- Generate link (on button click) -----------------------------------------
function generateLink() {
  var errEl = document.getElementById('form-error');
  errEl.style.display = 'none';

  var vals = getValues();
  var errors = [];

  if (!vals.destPath) errors.push('Please select a destination page.');
  if (!vals.source)   errors.push('Please select a traffic source.');
  if (!vals.medium)   errors.push('Please select a medium.');
  if (!vals.campaign.trim()) errors.push('Please enter a campaign name.');

  if (errors.length) {
    errEl.textContent = errors.join(' ');
    errEl.style.display = 'block';
    return;
  }

  currentUrl = buildUrl(vals);

  // Show output
  var box = document.getElementById('output-box');
  document.getElementById('output-url').textContent = currentUrl;
  box.classList.add('show');

  // Reset button states
  var copyBtn = document.getElementById('btn-copy');
  var saveBtn = document.getElementById('btn-save');
  copyBtn.classList.remove('copied');
  copyBtn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 4v10h10V4H4zm9 9H5V5h8v8zM0 0v12h2V2h10V0H0z"/></svg> Copy to Clipboard';
  saveBtn.classList.remove('saved');
  saveBtn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0L6 5H0l5 4-2 7 5-4 5 4-2-7 5-4h-6z"/></svg> Save to Favorites';

  // UTM breakdown chips
  var params = new URLSearchParams(currentUrl.includes('?') ? currentUrl.split('?')[1] : '');
  var breakdown = document.getElementById('utm-breakdown');
  breakdown.innerHTML = '';
  var labels = {utm_source:'Source',utm_medium:'Medium',utm_campaign:'Campaign',utm_content:'Content',utm_term:'Term'};
  params.forEach(function(v, k) {
    if (labels[k]) {
      var chip = document.createElement('div');
      chip.className = 'utm-chip';
      chip.innerHTML = '<span class="utm-chip-key">' + labels[k] + '</span><span class="utm-chip-val">' + v + '</span>';
      breakdown.appendChild(chip);
    }
  });

  // Auto-save to history (non-favorite)
  autoSaveToHistory(vals, currentUrl, false);

  // Scroll to output
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// --- Copy to clipboard --------------------------------------------------------
function copyLink() {
  if (!currentUrl) return;
  navigator.clipboard.writeText(currentUrl).then(function() {
    var btn = document.getElementById('btn-copy');
    btn.classList.add('copied');
    btn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Copied!';
    setTimeout(function() {
      btn.classList.remove('copied');
      btn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 4v10h10V4H4zm9 9H5V5h8v8zM0 0v12h2V2h10V0H0z"/></svg> Copy to Clipboard';
    }, 2500);
  }).catch(function() {
    // Fallback for older browsers
    var ta = document.createElement('textarea');
    ta.value = currentUrl;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    var btn = document.getElementById('btn-copy');
    btn.classList.add('copied');
    btn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Copied!';
    setTimeout(function() {
      btn.classList.remove('copied');
      btn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 4v10h10V4H4zm9 9H5V5h8v8zM0 0v12h2V2h10V0H0z"/></svg> Copy to Clipboard';
    }, 2500);
  });
}

// --- Open link ----------------------------------------------------------------
function openLink() {
  if (!currentUrl) return;
  window.open(currentUrl, '_blank', 'noopener');
}

// --- Save to favorites --------------------------------------------------------
function saveToFavorites() {
  if (!currentUrl) return;
  var history = loadHistory();
  var idx = history.findIndex(function(h) { return h.url === currentUrl; });
  if (idx >= 0) {
    history[idx].favorite = true;
  }
  saveHistory(history);

  var btn = document.getElementById('btn-save');
  btn.classList.add('saved');
  btn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Saved to Favorites!';
  setTimeout(function() {
    btn.classList.remove('saved');
    btn.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0L6 5H0l5 4-2 7 5-4 5 4-2-7 5-4h-6z"/></svg> Save to Favorites';
  }, 2500);
  updateHistBadge();
}

// --- Auto-save to history -----------------------------------------------------
function autoSaveToHistory(vals, url, favorite) {
  var history = loadHistory();
  // Remove duplicate URL if it already exists
  history = history.filter(function(h) { return h.url !== url; });
  history.unshift({
    url: url,
    campaign: slugify(vals.campaign) || '—',
    source: hyphenate(vals.source) || '—',
    medium: hyphenate(vals.medium) || '—',
    destination: vals.destPath || '/',
    favorite: favorite,
    created: new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' })
  });
  // Keep last 100 entries
  if (history.length > 100) history = history.slice(0, 100);
  saveHistory(history);
  updateHistBadge();
}

// --- Render history tab -------------------------------------------------------
function renderHistory() {
  var history = loadHistory();
  var empty = document.getElementById('hist-empty');
  var table = document.getElementById('hist-table');
  var tbody = document.getElementById('hist-tbody');

  if (!history.length) {
    empty.style.display = 'block';
    table.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  table.style.display = 'table';
  tbody.innerHTML = '';

  history.forEach(function(item, i) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' +
        '<div style="font-weight:700;color:var(--white);font-size:0.84rem;">' + escHtml(item.campaign) + '</div>' +
        (item.favorite ? '<span class="hist-badge fav" style="margin-top:5px;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0L6 5H0l5 4-2 7 5-4 5 4-2-7 5-4h-6z"/></svg> Favorite</span>' : '') +
      '</td>' +
      '<td>' +
        '<span class="source-chip src-' + escHtml(item.source) + '" style="margin-bottom:4px;display:inline-block;">' + escHtml(item.source) + '</span>' +
        '<div style="font-size:0.75rem;color:var(--gray-3);margin-top:3px;">' + escHtml(item.medium) + '</div>' +
      '</td>' +
      '<td>' +
        '<div class="hist-url" onclick="copyHistLink(this.dataset.url,this)" data-url="' + escAttr(item.url) + '" title="Click to copy">' + escHtml(item.url) + '</div>' +
        '<div style="font-size:0.7rem;color:var(--gray-3);margin-top:3px;">→ ' + escHtml(item.destination) + '</div>' +
      '</td>' +
      '<td style="white-space:nowrap;font-size:0.78rem;color:var(--gray-3);">' + escHtml(item.created) + '</td>' +
      '<td>' +
        '<div class="hist-actions">' +
          '<button class="hist-btn copy" onclick="copyHistLink(this.dataset.url,this)" data-url="' + escAttr(item.url) + '">' +
            '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 4v10h10V4H4zm9 9H5V5h8v8zM0 0v12h2V2h10V0H0z"/></svg> Copy' +
          '</button>' +
          '<button class="hist-btn open-link" onclick="window.open(this.dataset.url,&apos;_blank&apos;,&apos;noopener&apos;)" data-url="' + escAttr(item.url) + '">' +
            '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10 0v2h3.6L5.3 10.3l1.4 1.4L15 3.4V7h2V0h-7zM0 2v14h14v-6h-2v4H2V4h4V2H0z"/></svg> Open' +
          '</button>' +
          (!item.favorite
            ? '<button class="hist-btn copy" onclick="favHistLink(' + i + ',this)" style="background:rgba(173,120,5,0.06);">' +
                '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0L6 5H0l5 4-2 7 5-4 5 4-2-7 5-4h-6z"/></svg> Star' +
              '</button>'
            : '') +
          '<button class="hist-btn del" onclick="deleteHistLink(' + i + ')">' +
            '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5 0v1H1v2h14V1h-4V0H5zm-1.5 4L4 15a1 1 0 001 1h6a1 1 0 001-1l.5-11H3.5z"/></svg>' +
          '</button>' +
        '</div>' +
      '</td>';
    tbody.appendChild(tr);
  });
}

function copyHistLink(url, el) {
  navigator.clipboard.writeText(url).then(function() {
    var orig = el.innerHTML;
    if (el.classList.contains('hist-url')) {
      el.style.color = '#4ade80';
      setTimeout(function() { el.style.color = ''; }, 1800);
    } else {
      el.innerHTML = '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg> Copied!';
      el.style.color = '#4ade80';
      setTimeout(function() { el.innerHTML = orig; el.style.color = ''; }, 1800);
    }
  }).catch(function() {
    var ta = document.createElement('textarea');
    ta.value = url;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

function favHistLink(i, btn) {
  var history = loadHistory();
  if (history[i]) { history[i].favorite = true; saveHistory(history); }
  renderHistory();
  updateHistBadge();
  renderDashboard();
}

function deleteHistLink(i) {
  var history = loadHistory();
  history.splice(i, 1);
  saveHistory(history);
  renderHistory();
  updateHistBadge();
  renderDashboard();
}

function clearHistory() {
  if (!confirm('Clear all ' + loadHistory().length + ' saved links? This cannot be undone.')) return;
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
  updateHistBadge();
  renderDashboard();
}

// --- Update history badge count -----------------------------------------------
function updateHistBadge() {
  var count = loadHistory().length;
  var badge = document.getElementById('hist-count-badge');
  badge.textContent = count > 0 ? count : '';
}

// --- Render dashboard ---------------------------------------------------------
function renderDashboard() {
  var history = loadHistory();
  document.getElementById('dash-total-campaigns').textContent = history.length;
  document.getElementById('dash-favorites').textContent = history.filter(function(h) { return h.favorite; }).length;

  // Top source
  var srcCounts = {};
  history.forEach(function(h) { srcCounts[h.source] = (srcCounts[h.source] || 0) + 1; });
  var topSrc = Object.entries(srcCounts).sort(function(a,b){return b[1]-a[1];})[0];
  document.getElementById('dash-top-source').textContent = topSrc ? topSrc[0] : '—';

  // Top medium
  var medCounts = {};
  history.forEach(function(h) { medCounts[h.medium] = (medCounts[h.medium] || 0) + 1; });
  var topMed = Object.entries(medCounts).sort(function(a,b){return b[1]-a[1];})[0];
  document.getElementById('dash-top-medium').textContent = topMed ? topMed[0] : '—';

  // Source breakdown bar chart
  var container = document.getElementById('source-breakdown-container');
  if (!history.length) {
    container.innerHTML = '<div style="text-align:center;padding:32px;color:var(--gray-3);font-size:0.88rem;">Generate links above to see campaign breakdowns here.</div>';
    return;
  }
  var maxCount = Math.max.apply(null, Object.values(srcCounts));
  var rows = Object.entries(srcCounts)
    .sort(function(a,b){return b[1]-a[1];})
    .map(function(entry) {
      var pct = Math.round((entry[1] / maxCount) * 100);
      return '<div style="display:grid;grid-template-columns:110px 1fr 80px;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04);">' +
        '<span class="source-chip src-' + escHtml(entry[0]) + '">' + escHtml(entry[0]) + '</span>' +
        '<div style="height:6px;background:rgba(255,255,255,0.07);border-radius:4px;overflow:hidden;">' +
          '<div style="height:100%;width:' + pct + '%;background:linear-gradient(90deg,#ad7805,#c99a1a);border-radius:4px;"></div>' +
        '</div>' +
        '<div style="font-size:0.82rem;font-weight:700;color:var(--white);text-align:right;">' + entry[1] + ' link' + (entry[1]!==1?'s':'') + '</div>' +
      '</div>';
    });
  container.innerHTML = '<div style="padding:16px 20px;">' + rows.join('') + '</div>';
}

// --- XSS helpers -------------------------------------------------------------
function escHtml(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(str) {
  return String(str||'').replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// --- Init ---------------------------------------------------------------------
updateHistBadge();
</script>

</body>
</html>`
