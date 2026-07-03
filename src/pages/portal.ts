// -----------------------------------------------------------------------------
//  MetaGrowth Command Center™  — Client Portal
//  Routes: /portal (login) | /portal/dashboard | /portal/calls |
//          /portal/agreements | /portal/candidates | /portal/audit |
//          /portal/briefing | /portal/communications
// -----------------------------------------------------------------------------

const PORTAL_HEAD = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="/static/command-center-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"></noscript>
  <!-- Microsoft Clarity -->
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xbls14o22c");
  </script>
`

const PORTAL_BASE_CSS = `
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
  --orange: #ff6b00;
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

/* -- Scrollbar -- */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

/* -- Auth gate -- */
.auth-wrap {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: radial-gradient(ellipse 900px 600px at 50% 0%, rgba(173,120,5,0.08) 0%, transparent 70%), var(--navy);
  padding: 24px;
}
.auth-card {
  width: 100%; max-width: 420px;
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 48px 40px;
  text-align: center;
}
.auth-logo { width: 72px; height: 72px; border-radius: 14px; overflow: hidden; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; }
.auth-logo img { width: 100%; height: 100%; object-fit: cover; border-radius: 14px; display: block; }
.auth-title { font-size: 1.4rem; font-weight: 800; color: var(--white); margin-bottom: 6px; }
.auth-sub { font-size: 0.88rem; color: var(--gray-2); margin-bottom: 36px; line-height: 1.5; }
.auth-label { display: block; text-align: left; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gray-2); margin-bottom: 8px; }
.auth-input {
  width: 100%; padding: 13px 16px; font-size: 1rem; font-family: inherit;
  background: rgba(255,255,255,0.04); border: 1px solid var(--border);
  border-radius: var(--radius); color: var(--white); outline: none;
  transition: border-color 0.2s; letter-spacing: 0.12em; text-align: center;
}
.auth-input:focus { border-color: var(--green); background: rgba(173,120,5,0.05); }
.auth-input::placeholder { letter-spacing: 0; color: var(--gray-3); }
.auth-btn {
  width: 100%; margin-top: 16px; padding: 14px; border-radius: var(--radius);
  background: var(--green); color: var(--navy); font-size: 0.95rem; font-weight: 700;
  transition: background 0.2s, transform 0.15s;
}
.auth-btn:hover { background: var(--green-light); transform: translateY(-1px); }
.auth-error { font-size: 0.82rem; color: #e05c5c; margin-top: 12px; display: none; }
.auth-error.show { display: block; }
.auth-divider { display: flex; align-items: center; gap: 12px; margin: 20px 0 16px; color: var(--gray-3); font-size: 0.75rem; }
.auth-divider::before, .auth-divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.auth-btn-sample {
  width: 100%; padding: 13px; border-radius: var(--radius);
  background: transparent; border: 1px solid var(--border);
  color: var(--gray-1); font-size: 0.9rem; font-weight: 600;
  transition: all 0.2s; cursor: pointer; font-family: inherit;
}
.auth-btn-sample:hover { border-color: rgba(255,107,0,0.4); color: #ff6b00; background: rgba(255,107,0,0.05); }
.auth-footer { margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border); font-size: 0.78rem; color: var(--gray-3); }

/* -- Portal shell (sidebar + main) -- */
.portal-shell { display: flex; min-height: 100vh; }

/* -- Sidebar -- */
.portal-sidebar {
  width: var(--sidebar-w); flex-shrink: 0;
  background: var(--navy-mid); border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0; z-index: 100;
  overflow-y: auto;
}
.sidebar-brand {
  padding: 20px 20px 16px; border-bottom: 1px solid var(--border);
  display: flex; align-items: center; gap: 10px;
}
.sidebar-logo-mark {
  width: 32px; height: 32px; border-radius: 7px; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.sidebar-logo-mark img { width: 100%; height: 100%; object-fit: cover; border-radius: 7px; display: block; }
.sidebar-brand-text { flex: 1; min-width: 0; }
.sidebar-brand-name { font-size: 0.82rem; font-weight: 800; color: var(--white); line-height: 1.2; }
.sidebar-brand-sub { font-size: 0.65rem; color: var(--gray-3); letter-spacing: 0.04em; text-transform: uppercase; margin-top: 1px; }

.sidebar-client {
  padding: 16px 20px; border-bottom: 1px solid var(--border);
  background: rgba(173,120,5,0.04);
}
.sidebar-client-name { font-size: 0.88rem; font-weight: 700; color: var(--white); margin-bottom: 2px; }
.sidebar-client-since { font-size: 0.72rem; color: var(--gray-3); }
.sidebar-health {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  color: #4ade80; margin-top: 8px;
}
.sidebar-health-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

.sidebar-nav { flex: 1; padding: 12px 0; }
.sidebar-section-label {
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--gray-3); padding: 12px 20px 6px;
}
.sidebar-link {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 20px; font-size: 0.84rem; font-weight: 500; color: var(--gray-2);
  transition: all 0.15s; border-left: 2px solid transparent; position: relative;
}
.sidebar-link:hover { color: var(--white); background: rgba(255,255,255,0.04); }
.sidebar-link.active { color: var(--white); background: rgba(173,120,5,0.08); border-left-color: var(--green); font-weight: 600; }
.sidebar-link i { width: 16px; text-align: center; font-size: 0.82rem; }
.sidebar-link .badge {
  margin-left: auto; font-size: 0.62rem; font-weight: 700;
  background: var(--green); color: var(--navy); border-radius: 4px; padding: 1px 5px;
}

.sidebar-bottom { padding: 16px 20px; border-top: 1px solid var(--border); }
.sidebar-logout {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.82rem; color: var(--gray-3); transition: color 0.2s;
}
.sidebar-logout:hover { color: var(--white); cursor: pointer; }

/* -- Main content area -- */
.portal-main {
  margin-left: var(--sidebar-w); flex: 1; min-width: 0;
  display: flex; flex-direction: column;
}
.portal-header {
  height: var(--header-h); background: var(--navy-mid);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 32px; position: sticky; top: 0; z-index: 50;
}
.portal-page-title { font-size: 0.9rem; font-weight: 700; color: var(--white); }
.portal-header-right { display: flex; align-items: center; gap: 16px; }
.portal-stage-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--green); background: rgba(173,120,5,0.1);
  border: 1px solid rgba(173,120,5,0.25); border-radius: 20px; padding: 4px 12px;
}
.portal-content { flex: 1; padding: 32px; max-width: 1100px; }

/* -- Cards -- */
.p-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 24px;
}
.p-card-label {
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--green); margin-bottom: 14px;
}
.p-card-title { font-size: 1.1rem; font-weight: 700; color: var(--white); margin-bottom: 6px; }
.p-card-body { font-size: 0.88rem; color: var(--gray-2); line-height: 1.6; }

/* -- KPI grid -- */
.kpi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 16px; margin-bottom: 28px; }
.kpi-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 20px 22px;
  transition: border-color 0.2s;
}
.kpi-card:hover { border-color: var(--border-hover); }
.kpi-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gray-3); margin-bottom: 10px; }
.kpi-value { font-size: 1.7rem; font-weight: 900; color: var(--white); line-height: 1; margin-bottom: 4px; }
.kpi-value.green { color: #4ade80; }
.kpi-value.gold { color: var(--green-light); }
.kpi-meta { font-size: 0.72rem; color: var(--gray-3); }
.kpi-trend { display: inline-flex; align-items: center; gap: 3px; font-size: 0.72rem; font-weight: 600; margin-top: 6px; }
.kpi-trend.up { color: #4ade80; }
.kpi-trend.flat { color: var(--gray-3); }

/* -- Goal progress bar -- */
.goal-bar-wrap { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 22px 24px; margin-bottom: 28px; }
.goal-bar-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px; }
.goal-bar-title { font-size: 0.82rem; font-weight: 700; color: var(--white); }
.goal-bar-pct { font-size: 1.2rem; font-weight: 900; color: var(--green-light); }
.goal-bar-track { height: 8px; background: rgba(255,255,255,0.07); border-radius: 8px; overflow: hidden; }
.goal-bar-fill { height: 100%; background: linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%); border-radius: 8px; transition: width 1s ease; }
.goal-bar-sub { font-size: 0.75rem; color: var(--gray-3); margin-top: 10px; }

/* -- Grid layouts -- */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
.main-aside { display: grid; grid-template-columns: 1fr 340px; gap: 20px; }

/* -- Weekly update card -- */
.update-week { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--green); margin-bottom: 14px; }
.update-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.update-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: var(--gray-1); }
.update-list li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green); flex-shrink: 0; margin-top: 6px; }
.update-view-btn {
  display: inline-flex; align-items: center; gap: 6px; margin-top: 18px;
  font-size: 0.8rem; font-weight: 600; color: var(--green); transition: gap 0.2s;
}
.update-view-btn:hover { gap: 10px; }

/* -- Loom embed placeholder -- */
.loom-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.loom-thumb {
  aspect-ratio: 16/9; background: #0A0A0A;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  position: relative; border-bottom: 1px solid var(--border);
}
.loom-play-btn {
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--green); display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; color: var(--navy); margin-bottom: 14px;
  cursor: pointer; transition: transform 0.2s, background 0.2s;
  box-shadow: 0 0 0 8px rgba(173,120,5,0.15);
}
.loom-play-btn:hover { transform: scale(1.08); background: var(--green-light); }
.loom-video-title { font-size: 0.88rem; font-weight: 600; color: var(--white); }
.loom-video-date { font-size: 0.72rem; color: var(--gray-3); margin-top: 4px; }
.loom-card-footer { padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; }
.loom-watch-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--green); color: var(--navy); font-size: 0.82rem; font-weight: 700;
  padding: 9px 18px; border-radius: var(--radius); transition: background 0.2s;
}
.loom-watch-btn:hover { background: var(--green-light); }
.loom-duration { font-size: 0.75rem; color: var(--gray-3); }

/* -- Tabs -- */
.tab-bar { display: flex; gap: 4px; border-bottom: 1px solid var(--border); margin-bottom: 24px; }
.tab-btn {
  padding: 10px 18px; font-size: 0.84rem; font-weight: 600; color: var(--gray-2);
  border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.15s;
  background: none; border-left: none; border-right: none; border-top: none;
}
.tab-btn:hover { color: var(--white); }
.tab-btn.active { color: var(--white); border-bottom-color: var(--green); }
.tab-panel { display: none; }
.tab-panel.active { display: block; }

/* -- Recordings table -- */
.rec-table { width: 100%; border-collapse: collapse; }
.rec-table th {
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--gray-3); text-align: left; padding: 10px 16px;
  border-bottom: 1px solid var(--border);
}
.rec-table td {
  padding: 14px 16px; font-size: 0.84rem; color: var(--gray-1);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  vertical-align: middle;
}
.rec-table tr:hover td { background: rgba(255,255,255,0.02); }
.rec-table tr:last-child td { border-bottom: none; }
.rec-type-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  padding: 3px 8px; border-radius: 4px;
}
.rec-type-badge.leadership { background: rgba(173,120,5,0.15); color: var(--green-light); }
.rec-type-badge.sales { background: rgba(74,222,128,0.1); color: #4ade80; }
.rec-type-badge.stakeholder { background: rgba(147,51,234,0.15); color: #a78bfa; }
.rec-type-badge.recruiting { background: rgba(59,130,246,0.15); color: #60a5fa; }
.rec-action-btns { display: flex; gap: 8px; align-items: center; }
.rec-btn {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.75rem; font-weight: 600; padding: 6px 12px;
  border-radius: 6px; transition: all 0.15s;
}
.rec-btn.watch { background: var(--green); color: var(--navy); }
.rec-btn.watch:hover { background: var(--green-light); }
.rec-btn.transcript { background: rgba(255,255,255,0.06); color: var(--gray-1); border: 1px solid var(--border); }
.rec-btn.transcript:hover { background: rgba(255,255,255,0.1); }
.rec-ai-summary {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.72rem; color: var(--green); cursor: pointer; margin-top: 4px;
}

/* -- Agreement cards -- */
.agreement-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 24px; margin-bottom: 16px;
  transition: border-color 0.2s;
}
.agreement-card:hover { border-color: var(--border-hover); }
.agreement-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 18px; }
.agreement-name { font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.agreement-status-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
  background: rgba(74,222,128,0.1); color: #4ade80;
  border: 1px solid rgba(74,222,128,0.2); border-radius: 4px; padding: 3px 8px;
}
.agreement-meta { display: flex; gap: 32px; flex-wrap: wrap; margin-bottom: 18px; }
.agreement-meta-item { }
.agreement-meta-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gray-3); margin-bottom: 4px; }
.agreement-meta-value { font-size: 0.88rem; font-weight: 600; color: var(--gray-1); }
.agreement-footer { display: flex; gap: 10px; align-items: center; padding-top: 16px; border-top: 1px solid var(--border); }
.btn-download {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(173,120,5,0.1); border: 1px solid rgba(173,120,5,0.25);
  color: var(--green-light); font-size: 0.8rem; font-weight: 600;
  padding: 8px 16px; border-radius: var(--radius); transition: all 0.2s;
}
.btn-download:hover { background: rgba(173,120,5,0.18); }
.amendment-tag {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.72rem; font-weight: 600; color: var(--gray-2);
  background: var(--gray-4); border-radius: 4px; padding: 4px 10px;
}

/* -- Candidate cards -- */
.candidate-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 20px 22px; margin-bottom: 12px;
  display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center;
  transition: border-color 0.2s;
}
.candidate-card:hover { border-color: var(--border-hover); }
.candidate-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(173,120,5,0.15); border: 1px solid rgba(173,120,5,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; font-weight: 800; color: var(--green-light);
}
.candidate-name { font-size: 0.92rem; font-weight: 700; color: var(--white); margin-bottom: 3px; }
.candidate-role { font-size: 0.78rem; color: var(--gray-3); margin-bottom: 6px; }
.candidate-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.candidate-tag {
  font-size: 0.68rem; font-weight: 600; padding: 2px 8px;
  border-radius: 4px; background: var(--gray-4); color: var(--gray-2);
}
.candidate-score {
  text-align: right;
}
.candidate-score-num { font-size: 1.4rem; font-weight: 900; color: var(--white); line-height: 1; }
.candidate-score-label { font-size: 0.65rem; color: var(--gray-3); text-transform: uppercase; letter-spacing: 0.06em; }
.candidate-status {
  display: inline-flex; align-items: center; gap: 5px; margin-top: 6px;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
  padding: 3px 8px; border-radius: 4px;
}
.status-interview { background: rgba(173,120,5,0.12); color: var(--green-light); }
.status-review { background: rgba(59,130,246,0.12); color: #60a5fa; }
.status-offer { background: rgba(74,222,128,0.12); color: #4ade80; }
.status-screen { background: rgba(255,255,255,0.06); color: var(--gray-2); }

/* -- Audit score ring -- */
.audit-grid { display: grid; grid-template-columns: 240px 1fr; gap: 28px; align-items: start; margin-bottom: 24px; }
.audit-ring-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 32px 24px; text-align: center;
}
.audit-score-big { font-size: 4rem; font-weight: 900; color: var(--white); line-height: 1; }
.audit-score-label { font-size: 0.72rem; color: var(--gray-3); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 4px; margin-bottom: 20px; }
.audit-score-grade {
  display: inline-block; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 4px 12px; border-radius: 6px;
  background: rgba(74,222,128,0.12); color: #4ade80; border: 1px solid rgba(74,222,128,0.2);
}
.audit-bars { display: flex; flex-direction: column; gap: 14px; }
.audit-bar-row { display: grid; grid-template-columns: 130px 1fr 36px; gap: 12px; align-items: center; }
.audit-bar-label { font-size: 0.8rem; font-weight: 600; color: var(--gray-1); }
.audit-bar-track { height: 6px; background: rgba(255,255,255,0.07); border-radius: 6px; overflow: hidden; }
.audit-bar-fill { height: 100%; border-radius: 6px; transition: width 1s ease 0.2s; }
.audit-bar-fill.great { background: #4ade80; }
.audit-bar-fill.good { background: var(--green-light); }
.audit-bar-fill.warn { background: #fb923c; }
.audit-bar-val { font-size: 0.78rem; font-weight: 700; color: var(--gray-2); text-align: right; }

/* -- Briefing card -- */
.briefing-header {
  background: linear-gradient(135deg, rgba(173,120,5,0.12) 0%, rgba(173,120,5,0.04) 100%);
  border: 1px solid rgba(173,120,5,0.2); border-radius: var(--radius-lg);
  padding: 28px 32px; margin-bottom: 24px;
  display: flex; justify-content: space-between; align-items: flex-start;
}
.briefing-week { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--green); margin-bottom: 6px; }
.briefing-title { font-size: 1.3rem; font-weight: 800; color: var(--white); margin-bottom: 4px; }
.briefing-sub { font-size: 0.84rem; color: var(--gray-2); }
.briefing-auto-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
  background: rgba(167,139,250,0.1); color: #a78bfa;
  border: 1px solid rgba(167,139,250,0.2); border-radius: 4px; padding: 5px 10px;
  flex-shrink: 0;
}
.briefing-kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }
.briefing-kpi {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px 18px;
}
.briefing-kpi-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--gray-3); margin-bottom: 8px; }
.briefing-kpi-value { font-size: 1.4rem; font-weight: 900; color: var(--white); line-height: 1; }
.briefing-insights { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.briefing-insight {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px 20px;
}
.briefing-insight-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
.briefing-insight-label.concern { color: #fb923c; }
.briefing-insight-label.focus { color: #60a5fa; }
.briefing-insight-value { font-size: 0.9rem; font-weight: 600; color: var(--white); }
.briefing-insight-body { font-size: 0.82rem; color: var(--gray-2); margin-top: 4px; line-height: 1.5; }

/* -- Comms timeline -- */
.comms-search {
  width: 100%; padding: 11px 16px; font-size: 0.88rem; font-family: inherit;
  background: rgba(255,255,255,0.04); border: 1px solid var(--border);
  border-radius: var(--radius); color: var(--white); outline: none;
  margin-bottom: 20px; transition: border-color 0.2s;
}
.comms-search:focus { border-color: var(--green); }
.comms-search::placeholder { color: var(--gray-3); }
.comms-item {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 18px 22px; margin-bottom: 10px;
  display: grid; grid-template-columns: 36px 1fr auto; gap: 14px; align-items: flex-start;
  transition: border-color 0.2s;
}
.comms-item:hover { border-color: var(--border-hover); }
.comms-icon-wrap {
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center; font-size: 0.85rem;
}
.comms-icon-wrap.email { background: rgba(59,130,246,0.12); color: #60a5fa; }
.comms-icon-wrap.loom { background: rgba(239,68,68,0.12); color: #f87171; }
.comms-icon-wrap.report { background: rgba(173,120,5,0.12); color: var(--green-light); }
.comms-icon-wrap.update { background: rgba(74,222,128,0.1); color: #4ade80; }
.comms-subject { font-size: 0.88rem; font-weight: 600; color: var(--white); margin-bottom: 3px; }
.comms-preview { font-size: 0.8rem; color: var(--gray-3); line-height: 1.4; }
.comms-date { font-size: 0.72rem; color: var(--gray-3); white-space: nowrap; }

/* -- Empty state -- */
.empty-state { text-align: center; padding: 64px 32px; color: var(--gray-3); }
.empty-state i { font-size: 2.5rem; margin-bottom: 16px; display: block; }
.empty-state p { font-size: 0.9rem; }

/* -- Section header -- */
.section-header { margin-bottom: 24px; }
.section-header h2 { font-size: 1.15rem; font-weight: 800; color: var(--white); margin-bottom: 4px; }
.section-header p { font-size: 0.84rem; color: var(--gray-3); }

/* -- Utility -- */
.mb-16 { margin-bottom: 16px; }
.mb-24 { margin-bottom: 24px; }
.mb-28 { margin-bottom: 28px; }
.flex-between { display: flex; justify-content: space-between; align-items: center; }
.text-green { color: var(--green-light); }
.text-muted { color: var(--gray-3); font-size: 0.82rem; }

/* -- Responsive -- */
@media (max-width: 900px) {
  .portal-sidebar { transform: translateX(-100%); transition: transform 0.3s; }
  .portal-sidebar.open { transform: translateX(0); }
  .portal-main { margin-left: 0; }
  .portal-content { padding: 20px 16px; }
  .two-col, .main-aside, .audit-grid { grid-template-columns: 1fr; }
  .briefing-kpi-row { grid-template-columns: 1fr 1fr; }
  .briefing-insights { grid-template-columns: 1fr; }
  .three-col { grid-template-columns: 1fr 1fr; }
  .kpi-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
`

// -----------------------------------------------------------------------------
//  AUTH GATE SCRIPT  (runs on every portal page)
// -----------------------------------------------------------------------------
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
//  SIDEBAR  (injected into every inner page)
// -----------------------------------------------------------------------------
const sidebar = (active: string) => `
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
    <a href="/portal/dashboard" class="sidebar-link ${active === 'dashboard' ? 'active' : ''}">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg> Dashboard
    </a>

    <div class="sidebar-section-label">Program</div>
    <a href="/portal/calls" class="sidebar-link ${active === 'calls' ? 'active' : ''}">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 3a2 2 0 00-2 2v6a2 2 0 002 2h9a2 2 0 002-2v-1.5l3 2V4.5l-3 2V5a2 2 0 00-2-2H0z" transform="translate(2,0)"/></svg> Recorded Calls <span class="badge">14</span>
    </a>
    <a href="/portal/briefing" class="sidebar-link ${active === 'briefing' ? 'active' : ''}">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M11 0H6L3 9h4l-2 7 9-10H9z"/></svg> AI Briefing
    </a>
    <a href="/portal/communications" class="sidebar-link ${active === 'communications' ? 'active' : ''}">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 5v9a2 2 0 002 2h12a2 2 0 002-2V5L10.3 0H5.7L0 5zm10 7H6v-2H4l4-5 4 5h-2v2zm4-4H2L6 4h4l4 4z" fill-rule="evenodd"/></svg> Communications
    </a>

    <div class="sidebar-section-label">Documents</div>
    <a href="/portal/agreements" class="sidebar-link ${active === 'agreements' ? 'active' : ''}">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm0-4H4V4h5v2h3v.5zm-3-5V1l4 4h-4z"/></svg> Agreements
    </a>
    <a href="/portal/audit" class="sidebar-link ${active === 'audit' ? 'active' : ''}">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9.4 8.6A3.4 3.4 0 005.5 2a3.4 3.4 0 00-1 6.6v.4h1v-.4A3.4 3.4 0 009.4 8.6zM5 6.5v.5H4v-.5c-.6-.2-1-.6-1-1.2h1c0 .2.2.4.5.4s.5-.1.5-.3c0-.2-.2-.3-.7-.5-.7-.2-1.3-.5-1.3-1.2 0-.5.4-1 1-1.1V2h1v.6c.6.2 1 .6 1 1.2H5c0-.2-.2-.4-.5-.4s-.5.1-.5.3c0 .2.2.3.7.5.7.2 1.3.5 1.3 1.2 0 .5-.4 1-1 1.1zm8.3 5.8l-3.3-3.3a5.5 5.5 0 10-1.1 1.1l3.3 3.3 1.1-1.1z"/></svg> Revenue Audit
    </a>

    <div class="sidebar-section-label">Recruiting</div>
    <a href="/portal/candidates" class="sidebar-link ${active === 'candidates' ? 'active' : ''}">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M12 9c-1 0-2 .3-2.7.8A5 5 0 0112 14h4v-1a5 5 0 00-4-4zM6 8a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6zM6 9a5 5 0 00-5 4v1h10v-1a5 5 0 00-5-4z"/></svg> Candidate Center <span class="badge">3</span>
    </a>
  </nav>
  <div class="sidebar-bottom">
    <div id="sample-banner" style="display:none;background:rgba(255,107,0,0.1);border:1px solid rgba(255,107,0,0.25);border-radius:8px;padding:10px 12px;margin-bottom:12px;">
      <div style="font-size:0.68rem;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#ff6b00;margin-bottom:3px;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:4px;"><path d="M8 3C4.5 3 1.5 5.5 0 8c1.5 2.5 4.5 5 8 5s6.5-2.5 8-5c-1.5-2.5-4.5-5-8-5zm0 8a3 3 0 110-6 3 3 0 010 6zm0-5a2 2 0 100 4 2 2 0 000-4z"/></svg> Sample Account</div>
      <div style="font-size:0.72rem;color:rgba(255,255,255,0.45);line-height:1.4;">This is demo data showing what your Command Center looks like.</div>
    </div>
    <div class="sidebar-logout" onclick="window.mgcLogout()">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M6 2H2v12h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2zm7.5 5.5L11 5l-1 1 1.5 1.5H5v2h6.5L10 11l1 1 2.5-2.5L15 8l-1.5-.5z"/></svg> Exit Portal
    </div>
  </div>
</nav>
<script>if(window.isSample){var b=document.getElementById('sample-banner');if(b)b.style.display='block';}</script>
`

// -----------------------------------------------------------------------------
//  LOGIN PAGE
// -----------------------------------------------------------------------------
export const portalLoginPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Client Login | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
<div class="auth-wrap">
  <div class="auth-card">
    <div class="auth-logo"><img src="/static/command-center-icon.png" alt="MetaGrowth Command Center" loading="lazy"></div>
    <div class="auth-title">MetaGrowth Command Center™</div>
    <div class="auth-sub">Your private revenue operations portal.<br>Enter your access code to continue.</div>
    <label class="auth-label">Access Code</label>
    <input class="auth-input" id="passcode" type="password" placeholder="Enter your access code" maxlength="20" autocomplete="off">
    <button class="auth-btn" onclick="doLogin()">Access My Portal <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-left:6px;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></button>
    <div class="auth-error" id="auth-error">Incorrect access code. Please try again.</div>
    <div class="auth-divider"><span>or</span></div>
    <button class="auth-btn-sample" onclick="viewSample()">
      <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;"><path d="M8 3C4.5 3 1.5 5.5 0 8c1.5 2.5 4.5 5 8 5s6.5-2.5 8-5c-1.5-2.5-4.5-5-8-5zm0 8a3 3 0 110-6 3 3 0 010 6zm0-5a2 2 0 100 4 2 2 0 000-4z"/></svg> View Sample Account
    </button>
    <div class="auth-footer">
      Have an account? Contact your MetaGrowth account manager for access.
    </div>
  </div>
</div>
<script>
var PASS = 'MGC2026';
var KEY  = 'mgc_auth';
var SAMPLE_KEY = 'mgc_sample';
// Already logged in — skip to dashboard
if (localStorage.getItem(KEY) === '1' || localStorage.getItem(SAMPLE_KEY) === '1') {
  window.location.replace('/portal/dashboard');
}
document.getElementById('passcode').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') doLogin();
});
document.getElementById('passcode').focus();
function doLogin() {
  var val = document.getElementById('passcode').value.trim();
  if (val === PASS) {
    localStorage.setItem(KEY, '1');
    localStorage.removeItem(SAMPLE_KEY);
    window.location.replace('/portal/dashboard');
  } else {
    document.getElementById('auth-error').classList.add('show');
    document.getElementById('passcode').value = '';
    document.getElementById('passcode').focus();
  }
}
function viewSample() {
  localStorage.setItem(SAMPLE_KEY, '1');
  localStorage.removeItem(KEY);
  window.location.replace('/portal/dashboard');
}
<\/script>
</body>
</html>`

// -----------------------------------------------------------------------------
//  PHASE 1 — DASHBOARD
// -----------------------------------------------------------------------------
export const portalDashboardPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Dashboard | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
${AUTH_GUARD}
<div class="portal-shell">
  ${sidebar('dashboard')}
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;color:var(--green);"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg> Dashboard</div>
      <div class="portal-header-right">
        <div class="portal-stage-badge"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M6.3 0L6 1.7a5 5 0 00-1.4.8L3 2l-1.7 3 1.3 1.1A5.1 5.1 0 002.5 8c0 .3 0 .6.1.9L1.3 10l1.7 3 1.6-.5c.4.3.9.6 1.4.8l.3 1.7h3.4l.3-1.7a5 5 0 001.4-.8l1.6.5 1.7-3-1.3-1.1c.1-.3.1-.6.1-.9s0-.6-.1-.9L14.7 7 13 4l-1.6.5A5 5 0 0010 3.7l-.3-1.7H6.3zM8 10.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg> Revenue Infrastructure Build</div>
      </div>
    </header>
    <div class="portal-content">

      <!-- Welcome -->
      <div class="section-header mb-28">
        <h2>Welcome back, Josh.</h2>
        <p>Here's a live snapshot of your MetaGrowth Formula program — week of June 16, 2026.</p>
      </div>

      <!-- KPI Snapshot -->
      <div class="p-card-label" style="margin-bottom:12px;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M16 3.5l-5 5-3-3-5 5L1.4 9 8 2.5l3 3L14.6 2 16 3.5zM0 14h16v2H0z"/></svg>Current Month KPIs</div>
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-label">Pipeline Generated</div>
          <div class="kpi-value gold">$147,500</div>
          <div class="kpi-trend up"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0L0 8l1.4 1.4L7 3.8V16h2V3.8l5.6 5.6L16 8z"/></svg> +$22K vs last month</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Meetings Booked</div>
          <div class="kpi-value">18</div>
          <div class="kpi-trend up"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0L0 8l1.4 1.4L7 3.8V16h2V3.8l5.6 5.6L16 8z"/></svg> +4 vs last month</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Opportunities Created</div>
          <div class="kpi-value">7</div>
          <div class="kpi-trend up"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0L0 8l1.4 1.4L7 3.8V16h2V3.8l5.6 5.6L16 8z"/></svg> +2 vs last month</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Closed Revenue</div>
          <div class="kpi-value green">$24,000</div>
          <div class="kpi-trend up"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0L0 8l1.4 1.4L7 3.8V16h2V3.8l5.6 5.6L16 8z"/></svg> 1 deal closed</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Active Reps</div>
          <div class="kpi-value">2</div>
          <div class="kpi-trend flat">SDR + AE deployed</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Outreaches Sent</div>
          <div class="kpi-value">1,240</div>
          <div class="kpi-trend up"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0L0 8l1.4 1.4L7 3.8V16h2V3.8l5.6 5.6L16 8z"/></svg> On pace</div>
        </div>
      </div>

      <!-- Goal Progress -->
      <div class="goal-bar-wrap mb-28">
        <div class="goal-bar-header">
          <div class="goal-bar-title">Month Goal Progress — Pipeline Target: $175,000</div>
          <div class="goal-bar-pct">83%</div>
        </div>
        <div class="goal-bar-track">
          <div class="goal-bar-fill" style="width:83%"></div>
        </div>
        <div class="goal-bar-sub">$147,500 of $175,000 generated · 10 days remaining in period</div>
      </div>

      <!-- Two column: updates + loom -->
      <div class="main-aside">

        <!-- Weekly Update -->
        <div class="p-card">
          <div class="update-week"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M12 1V0h-2v1H6V0H4v1H0v15h16V1h-4zm2 13H2V6h12v8zm0-10H2V3h2v1h2V3h4v1h2V3h2v1zM4 8h8v2H4V8z"/></svg>Week of June 16 — Weekly Update</div>
          <ul class="update-list">
            <li>1 new opportunity created — $18,500 value, mid-market SaaS</li>
            <li>12 meetings booked this week across both reps</li>
            <li>SDR onboarding completed — fully ramped and in sequence</li>
            <li>ICP refinement completed — targeting updated in HubSpot</li>
            <li>Pipeline review call completed with leadership team</li>
          </ul>
          <a href="/portal/communications" class="update-view-btn">View Full Update <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></a>
        </div>

        <!-- Latest Video -->
        <div class="loom-card">
          <div class="loom-thumb">
            <div class="loom-play-btn"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg></div>
            <div class="loom-video-title">Week 3 Client Update</div>
            <div class="loom-video-date">June 16, 2026 · 8 min</div>
          </div>
          <div class="loom-card-footer">
            <div>
              <div style="font-size:0.82rem;font-weight:700;color:var(--white);margin-bottom:2px;">Latest Video Update</div>
              <div class="loom-duration"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:4px;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14a6 6 0 110-12 6 6 0 010 12zm.5-9H7v5l4.3 2.5.7-1.2-3.5-2V5z"/></svg>8 min · Week 3 Review</div>
            </div>
            <a href="/portal/calls" class="loom-watch-btn"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch Now</a>
          </div>
        </div>

      </div>

      <!-- Program stats footer -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px;">
        <div class="p-card" style="text-align:center;">
          <div class="p-card-label">Program</div>
          <div style="font-size:1.2rem;font-weight:800;color:var(--white);">MetaGrowth Formula</div>
        </div>
        <div class="p-card" style="text-align:center;">
          <div class="p-card-label">Current Stage</div>
          <div style="font-size:1rem;font-weight:700;color:var(--green-light);">Revenue Infrastructure Build</div>
        </div>
        <div class="p-card" style="text-align:center;">
          <div class="p-card-label">Program Health</div>
          <div style="font-size:1rem;font-weight:800;color:#4ade80;display:flex;align-items:center;justify-content:center;gap:8px;"><span style="width:8px;height:8px;background:#4ade80;border-radius:50%;display:inline-block;"></span>Green</div>
        </div>
      </div>

    </div>
  </div>
</div>
</body>
</html>`

// -----------------------------------------------------------------------------
//  PHASE 2 — RECORDED CALLS LIBRARY
// -----------------------------------------------------------------------------
export const portalCallsPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Recorded Calls | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
${AUTH_GUARD}
<div class="portal-shell">
  ${sidebar('calls')}
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;color:var(--green);"><path d="M0 3a2 2 0 00-2 2v6a2 2 0 002 2h9a2 2 0 002-2v-1.5l3 2V4.5l-3 2V5a2 2 0 00-2-2H0z" transform="translate(2,0)"/></svg> Recorded Calls Library</div>
    </header>
    <div class="portal-content">

      <div class="section-header">
        <h2>Recorded Calls Library</h2>
        <p>Every meeting, training session, and stakeholder update — organized and searchable.</p>
      </div>

      <div class="tab-bar">
        <button class="tab-btn active" onclick="switchTab('leadership',this)">Leadership Meetings</button>
        <button class="tab-btn" onclick="switchTab('sales',this)">Sales Team</button>
        <button class="tab-btn" onclick="switchTab('stakeholder',this)">Stakeholder Updates</button>
        <button class="tab-btn" onclick="switchTab('recruiting',this)">Recruiting</button>
      </div>

      <div id="tab-leadership" class="tab-panel active">
        <table class="rec-table" style="width:100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Type</th>
              <th>Length</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-muted">Jun 16, 2026</td>
              <td>
                <div style="font-weight:600;color:var(--white);">Week 3 Leadership Review</div>
                <div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div>
              </td>
              <td><span class="rec-type-badge leadership">Weekly Review</span></td>
              <td class="text-muted">52 min</td>
              <td>
                <div class="rec-action-btns">
                  <a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a>
                  <a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">Jun 9, 2026</td>
              <td>
                <div style="font-weight:600;color:var(--white);">Week 2 Pipeline Review</div>
                <div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div>
              </td>
              <td><span class="rec-type-badge leadership">Weekly Review</span></td>
              <td class="text-muted">44 min</td>
              <td>
                <div class="rec-action-btns">
                  <a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a>
                  <a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-muted">Jun 2, 2026</td>
              <td>
                <div style="font-weight:600;color:var(--white);">Kickoff & Infrastructure Build Meeting</div>
                <div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div>
              </td>
              <td><span class="rec-type-badge leadership">Kickoff</span></td>
              <td class="text-muted">78 min</td>
              <td>
                <div class="rec-action-btns">
                  <a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a>
                  <a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="tab-sales" class="tab-panel">
        <table class="rec-table">
          <thead><tr><th>Date</th><th>Title</th><th>Type</th><th>Length</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="text-muted">Jun 17, 2026</td>
              <td><div style="font-weight:600;color:var(--white);">SDR Weekly Coaching — Objection Handling</div><div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div></td>
              <td><span class="rec-type-badge sales">Training</span></td>
              <td class="text-muted">38 min</td>
              <td><div class="rec-action-btns"><a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a><a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a></div></td>
            </tr>
            <tr>
              <td class="text-muted">Jun 14, 2026</td>
              <td><div style="font-weight:600;color:var(--white);">AE Deal Review — Q3 Opportunity Pipeline</div><div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div></td>
              <td><span class="rec-type-badge sales">Deal Review</span></td>
              <td class="text-muted">29 min</td>
              <td><div class="rec-action-btns"><a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a><a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a></div></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="tab-stakeholder" class="tab-panel">
        <table class="rec-table">
          <thead><tr><th>Date</th><th>Title</th><th>Type</th><th>Length</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="text-muted">Jun 16, 2026</td>
              <td><div style="font-weight:600;color:var(--white);">Week 3 Executive Summary (Loom)</div><div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div></td>
              <td><span class="rec-type-badge stakeholder">Executive Update</span></td>
              <td class="text-muted">8 min</td>
              <td><div class="rec-action-btns"><a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a><a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a></div></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="tab-recruiting" class="tab-panel">
        <table class="rec-table">
          <thead><tr><th>Date</th><th>Candidate</th><th>Type</th><th>Length</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="text-muted">Jun 15, 2026</td>
              <td><div style="font-weight:600;color:var(--white);">Marcus T. — AE Final Interview</div><div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div></td>
              <td><span class="rec-type-badge recruiting">Interview</span></td>
              <td class="text-muted">41 min</td>
              <td><div class="rec-action-btns"><a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a><a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a></div></td>
            </tr>
            <tr>
              <td class="text-muted">Jun 12, 2026</td>
              <td><div style="font-weight:600;color:var(--white);">Priya S. — SDR Screening Call</div><div class="rec-ai-summary"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> View AI Summary</div></td>
              <td><span class="rec-type-badge recruiting">Screening</span></td>
              <td class="text-muted">22 min</td>
              <td><div class="rec-action-btns"><a href="#" class="rec-btn watch"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M3 0v16l13-8L3 0z"/></svg> Watch</a><a href="#" class="rec-btn transcript"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm-3-5V1l4 4h-4z"/></svg> Transcript</a></div></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</div>
<script>
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}
<\/script>
</body>
</html>`

// -----------------------------------------------------------------------------
//  PHASE 3 — AGREEMENT CENTER
// -----------------------------------------------------------------------------
export const portalAgreementsPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Agreements | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
${AUTH_GUARD}
<div class="portal-shell">
  ${sidebar('agreements')}
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;color:var(--green);"><path d="M9 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5L9 0zm3 14H4v-2h8v2zm0-4H4V8h8v2zm0-4H4V4h5v2h3v.5zm-3-5V1l4 4h-4z"/></svg> Agreement Center</div>
    </header>
    <div class="portal-content">

      <div class="section-header">
        <h2>Agreement Center</h2>
        <p>All active agreements, amendments, and change orders in one place. No email searching.</p>
      </div>

      <div class="p-card-label mb-16"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;color:#4ade80;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg> Active Agreements</div>

      <div class="agreement-card">
        <div class="agreement-header">
          <div>
            <div class="agreement-name">MetaGrowth Formula Agreement</div>
            <div class="text-muted">Revenue Infrastructure & Managed Sales Program</div>
          </div>
          <div class="agreement-status-badge"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg> Active</div>
        </div>
        <div class="agreement-meta">
          <div class="agreement-meta-item">
            <div class="agreement-meta-label">Signed</div>
            <div class="agreement-meta-value">June 1, 2026</div>
          </div>
          <div class="agreement-meta-item">
            <div class="agreement-meta-label">Term</div>
            <div class="agreement-meta-value">12 Months</div>
          </div>
          <div class="agreement-meta-item">
            <div class="agreement-meta-label">Renewal Date</div>
            <div class="agreement-meta-value">May 31, 2027</div>
          </div>
          <div class="agreement-meta-item">
            <div class="agreement-meta-label">Guarantee</div>
            <div class="agreement-meta-value text-green">10X Pipeline Promise™</div>
          </div>
        </div>
        <div class="agreement-footer">
          <a href="#" class="btn-download"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 12L3 7h3V0h4v7h3L8 12zM0 14v2h16v-2H0z"/></svg> Download PDF</a>
          <span class="amendment-tag"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:4px;"><path d="M14.5 3a3.5 3.5 0 00-5 0L2 10.5A5.5 5.5 0 009.8 15l8.7-8.7-1.4-1.4L8.4 13.6a3.5 3.5 0 01-5-5L11 1l-1.4-1.4z"/></svg> 2 Amendments</span>
        </div>
      </div>

      <div class="p-card-label mb-16" style="margin-top:28px;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M11.5 0l4 4-9 9H3v-3.5l9-9zM2 13v1H0v-4l1 1v2h1zM3 2a2 2 0 000 4h1V4H3a1 1 0 010-2 1 1 0 011 1h1a2 2 0 00-2-2z"/></svg> Amendments & Change Orders</div>

      <div style="display:flex;flex-direction:column;gap:10px;">
        <div class="p-card" style="display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:center;">
          <div style="width:36px;height:36px;background:rgba(173,120,5,0.12);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--green);"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M12 9c-1 0-2 .3-2.7.8A5 5 0 0112 14h4v-1a5 5 0 00-4-4zM6 8a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6zM6 9a5 5 0 00-5 4v1h10v-1a5 5 0 00-5-4z"/></svg></div>
          <div>
            <div style="font-weight:600;color:var(--white);font-size:0.88rem;">Rep Addition — 1 Additional SDR</div>
            <div class="text-muted">Signed June 8, 2026 · Amendment #1</div>
          </div>
          <a href="#" class="btn-download"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 12L3 7h3V0h4v7h3L8 12zM0 14v2h16v-2H0z"/></svg> Download</a>
        </div>
        <div class="p-card" style="display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:center;">
          <div style="width:36px;height:36px;background:rgba(173,120,5,0.12);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--green);"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M1 0h7l8 8-8 8-8-8V1a1 1 0 011-1zm3 3a2 2 0 100 4 2 2 0 000-4z"/></svg></div>
          <div>
            <div style="font-weight:600;color:var(--white);font-size:0.88rem;">ICP Refinement Change Order</div>
            <div class="text-muted">Signed June 14, 2026 · Change Order #1</div>
          </div>
          <a href="#" class="btn-download"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 12L3 7h3V0h4v7h3L8 12zM0 14v2h16v-2H0z"/></svg> Download</a>
        </div>
      </div>

    </div>
  </div>
</div>
</body>
</html>`

// -----------------------------------------------------------------------------
//  PHASE 4 — CANDIDATE CENTER
// -----------------------------------------------------------------------------
export const portalCandidatesPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Candidate Center | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
${AUTH_GUARD}
<div class="portal-shell">
  ${sidebar('candidates')}
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;color:var(--green);"><path d="M12 9c-1 0-2 .3-2.7.8A5 5 0 0112 14h4v-1a5 5 0 00-4-4zM6 8a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6zM6 9a5 5 0 00-5 4v1h10v-1a5 5 0 00-5-4z"/></svg> Candidate Center</div>
    </header>
    <div class="portal-content">

      <div class="section-header">
        <h2>Candidate Center</h2>
        <p>Active searches, candidate pipeline, and recruiting progress — mirroring your process exactly.</p>
      </div>

      <!-- Open Searches -->
      <div class="p-card-label mb-16"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M15.7 14.3l-4-4a6 6 0 10-1.4 1.4l4 4 1.4-1.4zM6 10a4 4 0 110-8 4 4 0 010 8z"/></svg> Open Searches</div>
      <div class="three-col mb-28">
        <div class="p-card" style="text-align:center;">
          <div style="font-size:1.6rem;font-weight:900;color:var(--white);margin-bottom:4px;">AE</div>
          <div class="text-muted">Account Executive</div>
          <div style="margin-top:12px;font-size:0.75rem;font-weight:700;color:#4ade80;background:rgba(74,222,128,0.1);border-radius:4px;padding:4px 8px;display:inline-block;">Active</div>
        </div>
        <div class="p-card" style="text-align:center;">
          <div style="font-size:1.6rem;font-weight:900;color:var(--white);margin-bottom:4px;">SDR</div>
          <div class="text-muted">Sales Dev Rep</div>
          <div style="margin-top:12px;font-size:0.75rem;font-weight:700;color:var(--green-light);background:rgba(173,120,5,0.12);border-radius:4px;padding:4px 8px;display:inline-block;">In Progress</div>
        </div>
        <div class="p-card" style="text-align:center;">
          <div style="font-size:1.6rem;font-weight:900;color:var(--white);margin-bottom:4px;">SM</div>
          <div class="text-muted">Sales Manager</div>
          <div style="margin-top:12px;font-size:0.75rem;font-weight:700;color:var(--gray-2);background:var(--gray-4);border-radius:4px;padding:4px 8px;display:inline-block;">Pending Start</div>
        </div>
      </div>

      <!-- Candidate Pipeline -->
      <div class="p-card-label mb-16"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M10 8a4 4 0 10-8 0 4 4 0 008 0zm5-2l-1.4-1.4-3.1 3.1-1.1-1.1L8 7.9l2.5 2.5L15 6zm-9 3a5 5 0 00-5 5v1h12v-1a5 5 0 00-5-5H6z"/></svg> Candidate Pipeline</div>

      <div class="candidate-card">
        <div class="candidate-avatar">MT</div>
        <div>
          <div class="candidate-name">Marcus Thompson</div>
          <div class="candidate-role">Account Executive · 6 years B2B SaaS</div>
          <div class="candidate-tags">
            <span class="candidate-tag">DISC: D/I</span>
            <span class="candidate-tag">Interview Score: 91</span>
            <span class="candidate-tag">References ✓</span>
          </div>
        </div>
        <div class="candidate-score">
          <div class="candidate-score-num">91</div>
          <div class="candidate-score-label">Score</div>
          <div class="candidate-status status-offer"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M11 6H9.5L7 8.5 4.5 6H3L0 9v4h2v-3l1 1H5v2h6v-2h2l1-1v3h2V9l-3-3zM7 5h2l2-2H5L7 5z"/></svg> Offer Stage</div>
        </div>
      </div>

      <div class="candidate-card">
        <div class="candidate-avatar">PS</div>
        <div>
          <div class="candidate-name">Priya Sharma</div>
          <div class="candidate-role">SDR · 2 years outbound, SaaS</div>
          <div class="candidate-tags">
            <span class="candidate-tag">DISC: I/S</span>
            <span class="candidate-tag">Interview Score: 78</span>
            <span class="candidate-tag">References Pending</span>
          </div>
        </div>
        <div class="candidate-score">
          <div class="candidate-score-num">78</div>
          <div class="candidate-score-label">Score</div>
          <div class="candidate-status status-interview"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M12 1V0h-2v1H6V0H4v1H0v15h16V1h-4zm2 13H2V6h12v8zm0-10H2V3h2v1h2V3h4v1h2V3h2v1z"/></svg> Final Interview</div>
        </div>
      </div>

      <div class="candidate-card">
        <div class="candidate-avatar">JK</div>
        <div>
          <div class="candidate-name">Jordan Kim</div>
          <div class="candidate-role">SDR · 18 months outbound</div>
          <div class="candidate-tags">
            <span class="candidate-tag">DISC: D/C</span>
            <span class="candidate-tag">Interview Score: 72</span>
          </div>
        </div>
        <div class="candidate-score">
          <div class="candidate-score-num">72</div>
          <div class="candidate-score-label">Score</div>
          <div class="candidate-status status-review"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 3C4.5 3 1.5 5.5 0 8c1.5 2.5 4.5 5 8 5s6.5-2.5 8-5c-1.5-2.5-4.5-5-8-5zm0 8a3 3 0 110-6 3 3 0 010 6zm0-5a2 2 0 100 4 2 2 0 000-4z"/></svg> Under Review</div>
        </div>
      </div>

    </div>
  </div>
</div>
</body>
</html>`

// -----------------------------------------------------------------------------
//  PHASE 5 — REVENUE AUDIT RESULTS
// -----------------------------------------------------------------------------
export const portalAuditPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Revenue Audit | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
${AUTH_GUARD}
<div class="portal-shell">
  ${sidebar('audit')}
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;color:var(--green);"><path d="M9.4 8.6A3.4 3.4 0 005.5 2a3.4 3.4 0 00-1 6.6v.4h1v-.4A3.4 3.4 0 009.4 8.6zM5 6.5v.5H4v-.5c-.6-.2-1-.6-1-1.2h1c0 .2.2.4.5.4s.5-.1.5-.3c0-.2-.2-.3-.7-.5-.7-.2-1.3-.5-1.3-1.2 0-.5.4-1 1-1.1V2h1v.6c.6.2 1 .6 1 1.2H5c0-.2-.2-.4-.5-.4s-.5.1-.5.3c0 .2.2.3.7.5.7.2 1.3.5 1.3 1.2 0 .5-.4 1-1 1.1zm8.3 5.8l-3.3-3.3a5.5 5.5 0 10-1.1 1.1l3.3 3.3 1.1-1.1z"/></svg> Revenue Audit Results</div>
    </header>
    <div class="portal-content">

      <div class="section-header">
        <h2>Revenue Engine Health Score</h2>
        <p>Completed June 1, 2026 · MetaGrowth Ventures Revenue Audit™</p>
      </div>

      <div class="audit-grid mb-28">
        <div class="audit-ring-card">
          <div class="audit-score-big">82</div>
          <div class="audit-score-label">out of 100</div>
          <div class="audit-score-grade"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0L0 8l1.4 1.4L7 3.8V16h2V3.8l5.6 5.6L16 8z"/></svg> Strong Foundation</div>
        </div>
        <div class="p-card">
          <div class="p-card-label mb-16">Score Breakdown</div>
          <div class="audit-bars">
            <div class="audit-bar-row">
              <div class="audit-bar-label">Pipeline Generation</div>
              <div class="audit-bar-track"><div class="audit-bar-fill great" style="width:90%"></div></div>
              <div class="audit-bar-val">9/10</div>
            </div>
            <div class="audit-bar-row">
              <div class="audit-bar-label">People & Talent</div>
              <div class="audit-bar-track"><div class="audit-bar-fill good" style="width:60%"></div></div>
              <div class="audit-bar-val">6/10</div>
            </div>
            <div class="audit-bar-row">
              <div class="audit-bar-label">Sales Process</div>
              <div class="audit-bar-track"><div class="audit-bar-fill good" style="width:80%"></div></div>
              <div class="audit-bar-val">8/10</div>
            </div>
            <div class="audit-bar-row">
              <div class="audit-bar-label">Forecasting</div>
              <div class="audit-bar-track"><div class="audit-bar-fill warn" style="width:40%"></div></div>
              <div class="audit-bar-val">4/10</div>
            </div>
            <div class="audit-bar-row">
              <div class="audit-bar-label">Technology Stack</div>
              <div class="audit-bar-track"><div class="audit-bar-fill great" style="width:90%"></div></div>
              <div class="audit-bar-val">9/10</div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-card-label mb-16"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M8 0a5 5 0 00-5 5 5 5 0 003 4.6V11h4V9.6A5 5 0 0013 5a5 5 0 00-5-5zm-2 12h4v1H6v-1zm1 2h2v2H7v-2z"/></svg> Growth Recommendations</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
        <div class="p-card" style="display:flex;gap:14px;align-items:flex-start;">
          <div style="width:28px;height:28px;background:rgba(251,146,60,0.15);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fb923c;flex-shrink:0;font-size:0.8rem;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M7 0h2v10H7V0zm0 12h2v2H7v-2z"/></svg></div>
          <div><div style="font-weight:700;color:var(--white);font-size:0.88rem;margin-bottom:3px;">Forecasting Discipline — Priority Fix</div><div class="p-card-body">Pipeline stages lack enforcement discipline. Opportunities advance without defined exit criteria, making 90-day forecasts unreliable. Install stage-gate process and weekly pipeline hygiene review.</div></div>
        </div>
        <div class="p-card" style="display:flex;gap:14px;align-items:flex-start;">
          <div style="width:28px;height:28px;background:rgba(96,165,250,0.12);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#60a5fa;flex-shrink:0;font-size:0.8rem;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M12 9c-1 0-2 .3-2.7.8A5 5 0 0112 14h4v-1a5 5 0 00-4-4zM6 8a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6zM6 9a5 5 0 00-5 4v1h10v-1a5 5 0 00-5-4z"/></svg></div>
          <div><div style="font-weight:700;color:var(--white);font-size:0.88rem;margin-bottom:3px;">Talent Density — Add 1 AE</div><div class="p-card-body">Current rep-to-opportunity ratio is running hot. One additional AE will prevent pipeline bottleneck and support Q3 revenue target of $350K closed.</div></div>
        </div>
        <div class="p-card" style="display:flex;gap:14px;align-items:flex-start;">
          <div style="width:28px;height:28px;background:rgba(74,222,128,0.1);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#4ade80;flex-shrink:0;font-size:0.8rem;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z"/></svg></div>
          <div><div style="font-weight:700;color:var(--white);font-size:0.88rem;margin-bottom:3px;">ICP & Messaging — Strong</div><div class="p-card-body">Target profile is well-defined and message-market fit is validated. Maintain current vertical focus. Expand into fintech segment in Q4.</div></div>
        </div>
      </div>

      <div class="p-card-label mb-16"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M8 0a8 8 0 00-8 8h2a6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-4.2-1.7L5 9.5 0 10l.5-5-1.2 1.3A8 8 0 008 16a8 8 0 008-8 8 8 0 00-8-8zm.5 4H7v5l4 2.4.75-1.3L8.5 8V4z"/></svg> Historical Progress</div>
      <div class="p-card">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;text-align:center;">
          <div><div style="font-size:1.4rem;font-weight:900;color:#4ade80;">✓</div><div style="font-size:0.82rem;font-weight:600;color:var(--white);margin:6px 0 2px;">ICP Refinement</div><div class="text-muted">Completed Jun 14</div></div>
          <div><div style="font-size:1.4rem;font-weight:900;color:#4ade80;">✓</div><div style="font-size:0.82rem;font-weight:600;color:var(--white);margin:6px 0 2px;">SDR Onboarding</div><div class="text-muted">Completed Jun 12</div></div>
          <div><div style="font-size:1.4rem;font-weight:900;color:var(--green-light);">◷</div><div style="font-size:0.82rem;font-weight:600;color:var(--white);margin:6px 0 2px;">Forecasting System</div><div class="text-muted">In Progress — Jun 30</div></div>
        </div>
      </div>

    </div>
  </div>
</div>
</body>
</html>`

// -----------------------------------------------------------------------------
//  PHASE 6 — AI EXECUTIVE BRIEFING
// -----------------------------------------------------------------------------
export const portalBriefingPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>AI Briefing | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
${AUTH_GUARD}
<div class="portal-shell">
  ${sidebar('briefing')}
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;color:var(--green);"><path d="M11 0H6L3 9h4l-2 7 9-10H9z"/></svg> AI Executive Briefing</div>
    </header>
    <div class="portal-content">

      <div class="briefing-header">
        <div>
          <div class="briefing-week"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M12 1V0h-2v1H6V0H4v1H0v15h16V1h-4zm2 13H2V6h12v8zm0-10H2V3h2v1h2V3h4v1h2V3h2v1zM4 8h8v2H4V8z"/></svg> Week of June 16, 2026</div>
          <div class="briefing-title">Your Weekly Executive Briefing</div>
          <div class="briefing-sub">Auto-generated every Friday · No reports to read.</div>
        </div>
        <div class="briefing-auto-badge"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l1.5 5H15l-4.2 3.1 1.6 5L8 10l-4.4 3.1 1.6-5L1 5h5.5L8 0zM2 13l1 3H0l2-3zm12 0l2 3h-3l1-3z"/></svg> AI Generated</div>
      </div>

      <div class="briefing-kpi-row">
        <div class="briefing-kpi">
          <div class="briefing-kpi-label">Pipeline Generated</div>
          <div class="briefing-kpi-value">$42,500</div>
        </div>
        <div class="briefing-kpi">
          <div class="briefing-kpi-label">Meetings This Week</div>
          <div class="briefing-kpi-value">7</div>
        </div>
        <div class="briefing-kpi">
          <div class="briefing-kpi-label">New Opportunities</div>
          <div class="briefing-kpi-value">3</div>
        </div>
        <div class="briefing-kpi">
          <div class="briefing-kpi-label">Deals Won</div>
          <div class="briefing-kpi-value" style="color:#4ade80;">1</div>
        </div>
      </div>

      <div class="briefing-insights">
        <div class="briefing-insight">
          <div class="briefing-insight-label concern"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:5px;"><path d="M8.7.6L16 14H0L7.3.6a.8.8 0 011.4 0zM8 6H7v4h2V6H8zm0 5H7v2h2v-2H8z" fill-rule="evenodd"/></svg> This Week's Concern</div>
          <div class="briefing-insight-value">Forecasting Discipline</div>
          <div class="briefing-insight-body">3 opportunities moved stages without documented next steps. This pattern weakens 90-day forecast accuracy. Stage-gate enforcement needed by June 30.</div>
        </div>
        <div class="briefing-insight">
          <div class="briefing-insight-label focus"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:5px;"><path d="M7 0H9v3A5 5 0 0113 7h3v2h-3A5 5 0 019 13v3H7v-3A5 5 0 013 9H0V7h3A5 5 0 017 3V0zm1 6a2 2 0 100 4 2 2 0 000-4z"/></svg> Recommended Focus</div>
          <div class="briefing-insight-value">Opportunity Management</div>
          <div class="briefing-insight-body">AE has 7 open opportunities stalled past 14 days. Recommended: pipeline review call Monday, re-engage top 3 with fresh value prop and decision timeline.</div>
        </div>
      </div>

      <div class="p-card" style="margin-top:20px;">
        <div class="p-card-label mb-16"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M7 0h2v2.1A6 6 0 0114 8v5a3 3 0 01-3 3H5a3 3 0 01-3-3V8a6 6 0 014-5.9V0zM8 4a4 4 0 100 8 4 4 0 000-8zM6 7a1 1 0 112 0v2a1 1 0 11-2 0V7zm4 0a1 1 0 112 0v2a1 1 0 11-2 0V7z"/></svg> AI Summary Narrative</div>
        <p style="font-size:0.92rem;color:var(--gray-1);line-height:1.8;">
          Week 3 marks the strongest pipeline week of the engagement. The SDR onboarding is complete and both reps are operating at full sequence capacity. Outreach volume hit 1,240 this week — 18% above target. One deal closed at $24K, bringing closed revenue to 83% of monthly goal with 10 days remaining.
          <br><br>
          The primary risk entering Week 4 is opportunity stall in the AE pipeline. 7 of 12 open opportunities have not had documented activity in 7+ days. This is a forecasting and execution discipline gap, not a demand problem. Recommended intervention: structured pipeline review Monday with mandatory next-step documentation for every open opportunity.
          <br><br>
          Next week's priority: AE pipeline acceleration + finalize forecasting system installation ahead of June 30 deadline.
        </p>
      </div>

      <!-- Previous briefings -->
      <div class="p-card-label mb-16" style="margin-top:28px;"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:6px;"><path d="M8 0a8 8 0 00-8 8h2a6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-4.2-1.7L5 9.5 0 10l.5-5-1.2 1.3A8 8 0 008 16a8 8 0 008-8 8 8 0 00-8-8zm.5 4H7v5l4 2.4.75-1.3L8.5 8V4z"/></svg> Previous Briefings</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div class="p-card" style="display:flex;justify-content:space-between;align-items:center;padding:14px 20px;">
          <div><div style="font-weight:600;color:var(--white);font-size:0.88rem;">Week of June 9, 2026</div><div class="text-muted">$28,500 pipeline · 6 meetings · 2 opps</div></div>
          <a href="#" style="font-size:0.8rem;font-weight:600;color:var(--green);">View <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></a>
        </div>
        <div class="p-card" style="display:flex;justify-content:space-between;align-items:center;padding:14px 20px;">
          <div><div style="font-weight:600;color:var(--white);font-size:0.88rem;">Week of June 2, 2026 — Kickoff</div><div class="text-muted">Infrastructure build · Ramp week</div></div>
          <a href="#" style="font-size:0.8rem;font-weight:600;color:var(--green);">View <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0l-1.4 1.4 5.6 5.6H0v2h12.2l-5.6 5.6L8 16l8-8z"/></svg></a>
        </div>
      </div>

    </div>
  </div>
</div>
</body>
</html>`

// -----------------------------------------------------------------------------
//  PHASE 7 — COMMUNICATIONS CENTER
// -----------------------------------------------------------------------------
export const portalCommunicationsPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Communications | MetaGrowth Command Center™</title>
  ${PORTAL_HEAD}
  ${PORTAL_BASE_CSS}
</head>
<body>
${AUTH_GUARD}
<div class="portal-shell">
  ${sidebar('communications')}
  <div class="portal-main">
    <header class="portal-header">
      <div class="portal-page-title"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;margin-right:8px;color:var(--green);"><path d="M0 5v9a2 2 0 002 2h12a2 2 0 002-2V5L10.3 0H5.7L0 5zm10 7H6v-2H4l4-5 4 5h-2v2zm4-4H2L6 4h4l4 4z" fill-rule="evenodd"/></svg> Communications Center</div>
    </header>
    <div class="portal-content">

      <div class="section-header">
        <h2>Communications Center</h2>
        <p>Every email, update, Loom, and report — stored and searchable in one place.</p>
      </div>

      <input type="text" class="comms-search" placeholder="&#xf002;  Search communications..." id="comms-search" oninput="filterComms(this.value)">

      <div id="comms-list">
        <div class="comms-item" data-text="week 3 client update pipeline loom">
          <div class="comms-icon-wrap loom"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 3a2 2 0 00-2 2v6a2 2 0 002 2h9a2 2 0 002-2v-1.5l3 2V4.5l-3 2V5a2 2 0 00-2-2H0z" transform="translate(2,0)"/></svg></div>
          <div>
            <div class="comms-subject">Week 3 Client Update — Loom</div>
            <div class="comms-preview">Pipeline hits $147K. SDR fully ramped. 1 deal closed. Forecasting gap identified for Q3...</div>
          </div>
          <div class="comms-date">Jun 16, 2026</div>
        </div>
        <div class="comms-item" data-text="weekly report pipeline kpi summary">
          <div class="comms-icon-wrap report"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 16V0h2v14h2V6h2v8h2V3h2v11h2V8h2v6h2V1h-2V0h2v16z" fill-rule="evenodd"/></svg></div>
          <div>
            <div class="comms-subject">Weekly Performance Report — Week 3</div>
            <div class="comms-preview">18 meetings booked · 7 opportunities created · $42,500 pipeline generated this week...</div>
          </div>
          <div class="comms-date">Jun 16, 2026</div>
        </div>
        <div class="comms-item" data-text="icp refinement update target profile">
          <div class="comms-icon-wrap update"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg></div>
          <div>
            <div class="comms-subject">ICP Refinement Completed — Updated Profile</div>
            <div class="comms-preview">Final ICP targeting updated in HubSpot. Primary: B2B SaaS $3M-$20M ARR, 10-50 employees, founder-led sales...</div>
          </div>
          <div class="comms-date">Jun 14, 2026</div>
        </div>
        <div class="comms-item" data-text="sdr onboarding complete ramped">
          <div class="comms-icon-wrap update"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-1.5 11.5l-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06z"/></svg></div>
          <div>
            <div class="comms-subject">SDR Onboarding Complete — Fully Ramped</div>
            <div class="comms-preview">SDR onboarding finished ahead of schedule. Sequences activated. First 12 meetings booked this week...</div>
          </div>
          <div class="comms-date">Jun 12, 2026</div>
        </div>
        <div class="comms-item" data-text="marcus thompson offer letter ae">
          <div class="comms-icon-wrap email"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 3v10h16V3H0zm14.5 1.5L8 9.5 1.5 4.5h13zM2 11V6.3l6 4.3 6-4.3V11H2z"/></svg></div>
          <div>
            <div class="comms-subject">Marcus Thompson — Offer Sent (AE)</div>
            <div class="comms-preview">Offer letter sent to Marcus Thompson for Account Executive position. Base $72K + commission...</div>
          </div>
          <div class="comms-date">Jun 15, 2026</div>
        </div>
        <div class="comms-item" data-text="week 2 pipeline review update">
          <div class="comms-icon-wrap loom"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 3a2 2 0 00-2 2v6a2 2 0 002 2h9a2 2 0 002-2v-1.5l3 2V4.5l-3 2V5a2 2 0 00-2-2H0z" transform="translate(2,0)"/></svg></div>
          <div>
            <div class="comms-subject">Week 2 Pipeline Review — Loom</div>
            <div class="comms-preview">$28,500 pipeline generated. 6 meetings booked. 2 opportunities created. On track for month target...</div>
          </div>
          <div class="comms-date">Jun 9, 2026</div>
        </div>
        <div class="comms-item" data-text="kickoff agreement signed program launch">
          <div class="comms-icon-wrap email"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em;fill:currentColor;"><path d="M0 3v10h16V3H0zm14.5 1.5L8 9.5 1.5 4.5h13zM2 11V6.3l6 4.3 6-4.3V11H2z"/></svg></div>
          <div>
            <div class="comms-subject">Program Kickoff — Agreement Signed & Next Steps</div>
            <div class="comms-preview">Welcome to MetaGrowth Formula. Agreement signed June 1. Infrastructure build begins this week...</div>
          </div>
          <div class="comms-date">Jun 1, 2026</div>
        </div>
      </div>

    </div>
  </div>
</div>
<script>
function filterComms(query) {
  var q = query.toLowerCase();
  document.querySelectorAll('#comms-list .comms-item').forEach(function(item) {
    var text = (item.dataset.text || '') + ' ' + item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? '' : 'none';
  });
}
<\/script>
</body>
</html>`
