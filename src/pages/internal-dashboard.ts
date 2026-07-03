// =
//  MetaGrowth CEO Dashboard — INTERNAL USE ONLY
//  Route: /internal
//  Access: Password-protected (Josh Hirsch only)
//  NEVER link publicly, never appear in nav or sitemaps
// =

export const internalDashboardPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex,nofollow">
  <meta name="googlebot" content="noindex,nofollow">
  <title>CEO Dashboard | MetaGrowth Ventures</title>
  <link rel="icon" type="image/png" href="/static/command-center-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"></noscript>
<style>
/* = Reset & Base = */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg:         #0A0A0C;
  --bg-1:       #0F1012;
  --bg-2:       #141417;
  --card:       #18191E;
  --card-2:     #1E1F25;
  --border:     rgba(255,255,255,0.07);
  --border-2:   rgba(255,255,255,0.12);
  --gold:       #C4920A;
  --gold-light: #E0AF30;
  --gold-dim:   rgba(196,146,10,0.15);
  --gold-dim2:  rgba(196,146,10,0.08);
  --white:      #FFFFFF;
  --g1:         rgba(255,255,255,0.80);
  --g2:         rgba(255,255,255,0.55);
  --g3:         rgba(255,255,255,0.35);
  --g4:         rgba(255,255,255,0.15);
  --g5:         rgba(255,255,255,0.06);
  --green:      #22C55E;
  --green-dim:  rgba(34,197,94,0.12);
  --red:        #EF4444;
  --red-dim:    rgba(239,68,68,0.12);
  --blue:       #3B82F6;
  --blue-dim:   rgba(59,130,246,0.12);
  --r:          10px;
  --r-lg:       14px;
  --r-xl:       18px;
}
html, body { height: 100%; }
body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--white); -webkit-font-smoothing: antialiased; }
a { text-decoration: none; color: inherit; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
input, textarea, select { font-family: inherit; }
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

/* = Password Gate = */
#pw-gate {
  position: fixed; inset: 0; z-index: 9999;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
}
.pw-box {
  width: 100%; max-width: 400px; padding: 40px;
  background: var(--card); border: 1px solid var(--border-2);
  border-radius: var(--r-xl); text-align: center;
}
.pw-logo {
  width: 48px; height: 48px; border-radius: 10px;
  overflow: hidden; margin: 0 auto 20px;
  border: 1px solid var(--border-2);
}
.pw-logo img { width: 100%; height: 100%; object-fit: cover; }
.pw-title { font-size: 1.25rem; font-weight: 800; margin-bottom: 6px; }
.pw-sub { font-size: 0.82rem; color: var(--g3); margin-bottom: 28px; }
.pw-input {
  width: 100%; padding: 12px 16px;
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--r); color: var(--white); font-size: 1rem;
  letter-spacing: 0.1em; text-align: center;
  outline: none; transition: border 0.2s;
  margin-bottom: 14px;
}
.pw-input:focus { border-color: var(--gold); }
.pw-btn {
  width: 100%; padding: 13px;
  background: var(--gold); color: #000;
  border-radius: var(--r); font-size: 0.9rem; font-weight: 700;
  cursor: pointer; border: none; transition: background 0.2s;
}
.pw-btn:hover { background: var(--gold-light); }
.pw-err { color: var(--red); font-size: 0.8rem; margin-top: 10px; min-height: 18px; }
.pw-notice { font-size: 0.72rem; color: var(--g3); margin-top: 16px; }

/* = Layout = */
#dashboard { display: none; flex-direction: column; min-height: 100vh; }

/* = Top Bar = */
.topbar {
  position: sticky; top: 0; z-index: 100;
  height: 56px; padding: 0 24px;
  background: var(--bg-1); border-bottom: 1px solid var(--border);
  display: flex; align-items: center; gap: 16px;
}
.topbar-brand { display: flex; align-items: center; gap: 10px; }
.topbar-logo { width: 28px; height: 28px; border-radius: 6px; overflow: hidden; }
.topbar-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.topbar-name { font-size: 0.85rem; font-weight: 800; color: var(--white); }
.topbar-badge {
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 3px 8px;
  background: var(--gold-dim); color: var(--gold);
  border: 1px solid rgba(196,146,10,0.25); border-radius: 20px;
}
.topbar-right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
.topbar-date { font-size: 0.78rem; color: var(--g3); }
.topbar-lock-btn {
  font-size: 0.75rem; font-weight: 600; color: var(--g3);
  padding: 6px 12px; border: 1px solid var(--border);
  border-radius: 6px; cursor: pointer; transition: all 0.2s;
}
.topbar-lock-btn:hover { color: var(--white); border-color: var(--border-2); }

/* = Tab Nav = */
.tab-nav {
  background: var(--bg-1); border-bottom: 1px solid var(--border);
  padding: 0 24px;
  display: flex; gap: 2px; overflow-x: auto;
  scrollbar-width: none;
}
.tab-nav::-webkit-scrollbar { display: none; }
.tab-nav-btn {
  padding: 12px 16px; font-size: 0.78rem; font-weight: 600;
  color: var(--g3); border-bottom: 2px solid transparent;
  cursor: pointer; white-space: nowrap; transition: all 0.2s;
  background: none; border-left: none; border-right: none; border-top: none;
}
.tab-nav-btn:hover { color: var(--g1); }
.tab-nav-btn.active { color: var(--gold); border-bottom-color: var(--gold); }

/* = Main Content = */
.dash-body { flex: 1; padding: 24px; max-width: 1600px; margin: 0 auto; width: 100%; }

/* Section header */
.section-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 16px;
}
.section-title {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--g3);
}
.section-action {
  font-size: 0.75rem; font-weight: 600; color: var(--gold);
  padding: 6px 12px; border: 1px solid rgba(196,146,10,0.3);
  border-radius: 6px; cursor: pointer; transition: all 0.2s;
  background: var(--gold-dim2);
}
.section-action:hover { background: var(--gold-dim); }

/* = KPI Grid = */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 28px;
}
.kpi-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 18px 20px;
  cursor: pointer; transition: border-color 0.2s, background 0.2s;
  position: relative;
}
.kpi-card:hover { border-color: var(--border-2); background: var(--card-2); }
.kpi-card.highlight { border-color: rgba(196,146,10,0.3); background: var(--gold-dim2); }
.kpi-label { font-size: 0.70rem; font-weight: 600; color: var(--g3); letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 10px; }
.kpi-value { font-size: 1.9rem; font-weight: 800; color: var(--white); line-height: 1; }
.kpi-sub { font-size: 0.72rem; color: var(--g3); margin-top: 6px; }
.kpi-delta {
  font-size: 0.70rem; font-weight: 600; margin-top: 6px;
  display: inline-flex; align-items: center; gap: 3px;
  padding: 2px 7px; border-radius: 20px;
}
.kpi-delta.up { background: var(--green-dim); color: var(--green); }
.kpi-delta.down { background: var(--red-dim); color: var(--red); }
.kpi-edit-icon {
  position: absolute; top: 10px; right: 10px;
  width: 20px; height: 20px; border-radius: 4px;
  background: var(--g5); color: var(--g3);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.65rem; opacity: 0; transition: opacity 0.2s;
}
.kpi-card:hover .kpi-edit-icon { opacity: 1; }
.clickable { cursor: pointer; }

/* = Two-col & Three-col grids = */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 28px; }
.grid-auto { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 28px; }

/* = Panel Card = */
.panel {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 20px 22px;
}
.panel-title {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--g2); margin-bottom: 16px;
  display: flex; align-items: center; gap: 8px;
}
.panel-title-icon {
  width: 22px; height: 22px; border-radius: 5px;
  background: var(--gold-dim); display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem;
}

/* = Pipeline = */
.pipeline-row {
  display: grid; grid-template-columns: 24px 1fr 90px 120px 80px 90px;
  gap: 12px; align-items: center; padding: 10px 0;
  border-bottom: 1px solid var(--border);
}
.pipeline-row:last-child { border-bottom: none; }
.pipeline-row.header { padding-bottom: 8px; }
.pipeline-row.header span { font-size: 0.68rem; font-weight: 600; color: var(--g3); text-transform: uppercase; letter-spacing: 0.05em; }
.pipe-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.pipe-stage-name { font-size: 0.88rem; font-weight: 600; color: var(--white); }
.pipe-count { font-size: 0.85rem; font-weight: 700; text-align: right; }
.pipe-value { font-size: 0.85rem; font-weight: 700; text-align: right; color: var(--gold); }
.pipe-age { font-size: 0.82rem; color: var(--g2); text-align: right; }
.pipe-bar-wrap { position: relative; height: 5px; background: var(--g5); border-radius: 3px; overflow: hidden; }
.pipe-bar { height: 100%; border-radius: 3px; transition: width 0.5s ease; }

/* Stage colours */
.stage-leads    { background: #6366F1; }
.stage-disc     { background: #3B82F6; }
.stage-prop     { background: #F59E0B; }
.stage-neg      { background: #F97316; }
.stage-won      { background: #22C55E; }
.stage-lost     { background: #EF4444; }

/* = Marketing stat grid = */
.mkt-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px; margin-bottom: 0;
}
.mkt-card {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--r); padding: 14px 16px;
  cursor: pointer; transition: border-color 0.2s;
}
.mkt-card:hover { border-color: var(--border-2); }
.mkt-card-label { font-size: 0.68rem; font-weight: 600; color: var(--g3); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px; }
.mkt-card-val { font-size: 1.3rem; font-weight: 800; color: var(--white); }
.mkt-card-sub { font-size: 0.7rem; color: var(--g3); margin-top: 3px; }

/* = Table = */
.dash-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.dash-table th {
  text-align: left; padding: 8px 12px;
  font-size: 0.67rem; font-weight: 700; color: var(--g3);
  text-transform: uppercase; letter-spacing: 0.05em;
  border-bottom: 1px solid var(--border);
}
.dash-table td { padding: 10px 12px; border-bottom: 1px solid var(--border); color: var(--g1); vertical-align: middle; }
.dash-table tr:last-child td { border-bottom: none; }
.dash-table tr:hover td { background: var(--g5); }

/* Status badge */
.badge {
  display: inline-block; padding: 2px 8px;
  border-radius: 20px; font-size: 0.67rem; font-weight: 700;
  letter-spacing: 0.03em;
}
.badge-draft  { background: var(--g5); color: var(--g2); }
.badge-sched  { background: var(--blue-dim); color: var(--blue); }
.badge-pub    { background: var(--green-dim); color: var(--green); }
.badge-review { background: rgba(245,158,11,0.12); color: #F59E0B; }

/* = Funnel = */
.funnel-wrap { display: flex; flex-direction: column; gap: 0; }
.funnel-stage {
  display: flex; align-items: center; gap: 14px; padding: 10px 0;
  border-bottom: 1px solid var(--border);
}
.funnel-stage:last-child { border-bottom: none; }
.funnel-label { flex: 1; font-size: 0.85rem; font-weight: 600; color: var(--g1); }
.funnel-bar-wrap { flex: 2; height: 8px; background: var(--g5); border-radius: 4px; overflow: hidden; position: relative; }
.funnel-bar { height: 100%; background: var(--gold); border-radius: 4px; transition: width 0.6s ease; }
.funnel-num { min-width: 60px; text-align: right; font-size: 0.88rem; font-weight: 700; color: var(--white); }
.funnel-input-val {
  width: 70px; background: var(--bg-2); border: 1px solid var(--border);
  border-radius: 6px; padding: 4px 8px; color: var(--white);
  font-size: 0.85rem; font-weight: 700; text-align: right; outline: none;
  transition: border-color 0.2s;
}
.funnel-input-val:focus { border-color: var(--gold); }
.funnel-arrow {
  display: flex; align-items: center; justify-content: center;
  padding: 2px 0; color: var(--g3); font-size: 0.75rem;
}
.funnel-conv {
  font-size: 0.72rem; font-weight: 600; padding: 2px 8px;
  background: var(--gold-dim2); color: var(--gold);
  border-radius: 10px; white-space: nowrap;
}

/* = Prospecting = */
.prosp-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px; margin-bottom: 16px;
}
.prosp-item {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--r); padding: 14px 16px;
}
.prosp-label { font-size: 0.70rem; font-weight: 600; color: var(--g3); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px; }
.prosp-input {
  width: 100%; background: none; border: none; border-bottom: 1px solid var(--border);
  color: var(--white); font-size: 1.5rem; font-weight: 800;
  padding: 4px 0; outline: none; transition: border-color 0.2s;
}
.prosp-input:focus { border-color: var(--gold); }
.prosp-weekly {
  font-size: 0.70rem; color: var(--g3); margin-top: 6px;
}
.prosp-weekly span { color: var(--gold); font-weight: 700; }

/* = Tasks = */
.tasks-list { margin-bottom: 16px; }
.task-item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 0; border-bottom: 1px solid var(--border);
}
.task-item:last-child { border-bottom: none; }
.task-check {
  width: 18px; height: 18px; border-radius: 4px;
  border: 1.5px solid var(--border-2); background: none;
  cursor: pointer; flex-shrink: 0; appearance: none;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; position: relative;
}
.task-check:checked {
  background: var(--gold); border-color: var(--gold);
}
.task-check:checked::after {
  content: '✓'; position: absolute;
  font-size: 0.65rem; font-weight: 700; color: #000;
}
.task-text {
  flex: 1; font-size: 0.85rem; color: var(--g1); background: none;
  border: none; outline: none; padding: 0;
}
.task-text.done { text-decoration: line-through; color: var(--g3); }
.task-del { color: var(--g3); font-size: 0.75rem; cursor: pointer; padding: 4px; transition: color 0.2s; }
.task-del:hover { color: var(--red); }
.add-task-row { display: flex; gap: 8px; margin-top: 8px; }
.add-task-input {
  flex: 1; background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--r); padding: 9px 14px; color: var(--white);
  font-size: 0.85rem; outline: none; transition: border-color 0.2s;
}
.add-task-input:focus { border-color: var(--gold); }
.add-task-btn {
  padding: 9px 16px; background: var(--gold); color: #000;
  border-radius: var(--r); font-size: 0.82rem; font-weight: 700;
  cursor: pointer; transition: background 0.2s;
}
.add-task-btn:hover { background: var(--gold-light); }

/* = Notes = */
.notes-area {
  width: 100%; min-height: 120px; background: var(--bg-2);
  border: 1px solid var(--border); border-radius: var(--r);
  padding: 14px 16px; color: var(--g1); font-size: 0.85rem;
  line-height: 1.6; outline: none; resize: vertical;
  transition: border-color 0.2s;
}
.notes-area:focus { border-color: var(--gold); }

/* = Weekly Review = */
.review-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}
.review-card {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--r); padding: 16px;
}
.review-card-label { font-size: 0.68rem; font-weight: 600; color: var(--g3); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 10px; }
.review-card-val { font-size: 1.6rem; font-weight: 800; }
.review-card-delta {
  font-size: 0.70rem; font-weight: 600; margin-top: 6px;
  display: inline-flex; align-items: center; gap: 3px;
  padding: 2px 7px; border-radius: 20px;
}
.review-card-delta.up { background: var(--green-dim); color: var(--green); }
.review-card-delta.down { background: var(--red-dim); color: var(--red); }
.review-card-delta.flat { background: var(--g5); color: var(--g3); }

/* = Clarity / Tawk Integration placeholder = */
.int-placeholder {
  border: 1px dashed var(--border-2); border-radius: var(--r-lg);
  padding: 28px 24px; text-align: center;
  background: var(--g5);
}
.int-placeholder-icon { font-size: 1.8rem; margin-bottom: 10px; }
.int-placeholder-title { font-size: 0.9rem; font-weight: 700; color: var(--g1); margin-bottom: 6px; }
.int-placeholder-sub { font-size: 0.78rem; color: var(--g3); line-height: 1.6; margin-bottom: 14px; }
.int-connect-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 18px; background: var(--gold-dim); color: var(--gold);
  border: 1px solid rgba(196,146,10,0.3); border-radius: 7px;
  font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: background 0.2s;
}
.int-connect-btn:hover { background: var(--gold-dim); filter: brightness(1.2); }

/* = Clarity sessions table = */
.clarity-sessions { display: flex; flex-direction: column; gap: 8px; }
.clarity-row {
  display: flex; align-items: center; gap: 12px;
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--r); padding: 12px 14px;
  cursor: pointer; transition: border-color 0.2s;
}
.clarity-row:hover { border-color: var(--border-2); }
.clarity-flag { font-size: 1rem; }
.clarity-info { flex: 1; }
.clarity-country { font-size: 0.82rem; font-weight: 600; color: var(--white); }
.clarity-meta { font-size: 0.72rem; color: var(--g3); margin-top: 2px; }
.clarity-dur { font-size: 0.82rem; font-weight: 700; color: var(--gold); white-space: nowrap; }
.clarity-link {
  font-size: 0.72rem; font-weight: 600; color: var(--blue);
  padding: 4px 10px; border: 1px solid rgba(59,130,246,0.2);
  border-radius: 5px; white-space: nowrap;
}

/* = Collapsible module = */
.mod-wrap { margin-bottom: 28px; }
.mod-head {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 20px;
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r-lg); cursor: pointer;
  transition: border-color 0.2s;
  user-select: none;
}
.mod-head.open { border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-bottom: 1px solid var(--border); }
.mod-head:hover { border-color: var(--border-2); }
.mod-head-num {
  width: 24px; height: 24px; border-radius: 6px;
  background: var(--gold-dim); color: var(--gold);
  font-size: 0.72rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.mod-head-title { flex: 1; font-size: 0.88rem; font-weight: 700; color: var(--white); }
.mod-head-sub { font-size: 0.72rem; color: var(--g3); }
.mod-chevron { color: var(--g3); font-size: 0.75rem; transition: transform 0.25s; }
.mod-head.open .mod-chevron { transform: rotate(180deg); }
.mod-body {
  background: var(--card);
  border: 1px solid var(--border); border-top: none;
  border-bottom-left-radius: var(--r-lg); border-bottom-right-radius: var(--r-lg);
  padding: 20px 22px;
  display: none;
}
.mod-body.open { display: block; }

/* = Save indicator = */
.save-toast {
  position: fixed; bottom: 20px; right: 20px; z-index: 9000;
  background: var(--green); color: #fff;
  padding: 10px 18px; border-radius: 8px;
  font-size: 0.8rem; font-weight: 700;
  opacity: 0; transition: opacity 0.3s; pointer-events: none;
}
.save-toast.show { opacity: 1; }

/* = Content Calendar modal = */
.modal-overlay {
  position: fixed; inset: 0; z-index: 8000;
  background: rgba(0,0,0,0.75); display: none;
  align-items: center; justify-content: center; padding: 20px;
}
.modal-overlay.show { display: flex; }
.modal-box {
  background: var(--card); border: 1px solid var(--border-2);
  border-radius: var(--r-xl); padding: 28px;
  width: 100%; max-width: 500px;
}
.modal-title { font-size: 1rem; font-weight: 800; margin-bottom: 20px; }
.modal-row { margin-bottom: 14px; }
.modal-label { font-size: 0.72rem; font-weight: 600; color: var(--g3); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 6px; }
.modal-input, .modal-select {
  width: 100%; background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--r); padding: 10px 14px; color: var(--white);
  font-size: 0.88rem; outline: none; transition: border-color 0.2s;
}
.modal-input:focus, .modal-select:focus { border-color: var(--gold); }
.modal-select option { background: #1E1F25; }
.modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px; }
.modal-cancel {
  padding: 10px 20px; border: 1px solid var(--border);
  border-radius: var(--r); font-size: 0.85rem; font-weight: 600; color: var(--g2);
  cursor: pointer; transition: all 0.2s;
}
.modal-cancel:hover { border-color: var(--border-2); color: var(--white); }
.modal-save {
  padding: 10px 22px; background: var(--gold); color: #000;
  border-radius: var(--r); font-size: 0.85rem; font-weight: 700;
  cursor: pointer; transition: background 0.2s;
}
.modal-save:hover { background: var(--gold-light); }

/* = GA4 sample = */
.ga4-stat-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border); }
.ga4-stat-row:last-child { border-bottom: none; }
.ga4-stat-label { flex: 1; font-size: 0.83rem; color: var(--g1); }
.ga4-stat-val { font-size: 0.88rem; font-weight: 700; color: var(--white); }
.ga4-stat-bar-wrap { width: 80px; height: 5px; background: var(--g5); border-radius: 3px; overflow: hidden; }
.ga4-stat-bar { height: 100%; background: var(--gold); border-radius: 3px; }

/* = Quick-Launch Bar = */
.quick-bar {
  background: var(--bg-1); border-bottom: 1px solid var(--border);
  padding: 8px 24px; display: flex; align-items: center; gap: 8px;
  overflow-x: auto; scrollbar-width: none;
}
.quick-bar::-webkit-scrollbar { display: none; }
.quick-bar-label { font-size: 0.65rem; font-weight: 700; color: var(--g3); text-transform: uppercase; letter-spacing: 0.08em; margin-right: 4px; white-space: nowrap; flex-shrink: 0; }
.qbtn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 11px; border-radius: 6px; font-size: 0.75rem; font-weight: 600;
  white-space: nowrap; flex-shrink: 0; text-decoration: none;
  border: 1px solid var(--border); color: var(--g2);
  background: var(--g5); transition: all 0.2s;
}
.qbtn:hover { border-color: var(--border-2); color: var(--white); background: var(--card-2); }
.qbtn.yt  { border-color: rgba(239,68,68,0.25); color: #f87171; background: rgba(239,68,68,0.06); }
.qbtn.yt:hover  { background: rgba(239,68,68,0.14); }
.qbtn.li  { border-color: rgba(10,102,194,0.35); color: #60a5fa; background: rgba(10,102,194,0.08); }
.qbtn.li:hover  { background: rgba(10,102,194,0.18); }
.qbtn.ga  { border-color: rgba(251,188,4,0.3); color: #fbbf24; background: rgba(251,188,4,0.07); }
.qbtn.ga:hover  { background: rgba(251,188,4,0.16); }
.qbtn.tw  { border-color: rgba(22,185,96,0.3); color: #4ade80; background: rgba(22,185,96,0.07); }
.qbtn.tw:hover  { background: rgba(22,185,96,0.16); }
.qbtn.hs  { border-color: rgba(255,122,0,0.3); color: #fb923c; background: rgba(255,122,0,0.07); }
.qbtn.hs:hover  { background: rgba(255,122,0,0.16); }
.qbtn.cl  { border-color: rgba(96,165,250,0.25); color: #93c5fd; background: rgba(96,165,250,0.07); }
.qbtn.cl:hover  { background: rgba(96,165,250,0.16); }
.qbtn.mg  { border-color: rgba(196,146,10,0.3); color: var(--gold); background: var(--gold-dim2); }
.qbtn.mg:hover  { background: var(--gold-dim); }
.qbtn-sep { width: 1px; height: 16px; background: var(--border); flex-shrink: 0; }

/* = Launch Panel (replaces broken iframes) = */
.launch-panel {
  display: flex; align-items: flex-start; gap: 18px;
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 22px 24px;
  transition: border-color 0.2s;
}
.launch-panel:hover { border-color: var(--border-2); }
.launch-panel-icon {
  width: 48px; height: 48px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
}
.launch-panel-body { flex: 1; }
.launch-panel-title { font-size: 0.95rem; font-weight: 800; color: var(--white); margin-bottom: 5px; }
.launch-panel-sub { font-size: 0.78rem; color: var(--g3); line-height: 1.5; margin-bottom: 14px; }
.launch-panel-links { display: flex; flex-wrap: wrap; gap: 8px; }
.launch-btn {
  display: inline-flex; align-items: center;
  padding: 7px 14px; border-radius: 7px; font-size: 0.78rem; font-weight: 600;
  border: 1px solid var(--border); color: var(--g2); background: var(--g5);
  text-decoration: none; transition: all 0.2s; white-space: nowrap;
}
.launch-btn:hover { border-color: var(--border-2); color: var(--white); background: var(--card-2); }
.launch-btn.primary { background: var(--gold-dim2); color: var(--gold); border-color: rgba(196,146,10,0.3); }
.launch-btn.primary:hover { background: var(--gold-dim); }

/* = YouTube Video Cards = */
.yt-vid-card { text-decoration: none; display: block; }
.yt-vid-inner {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r); overflow: hidden; transition: border-color 0.2s;
}
.yt-vid-card:hover .yt-vid-inner { border-color: var(--border-2); }
.yt-vid-thumb { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }
.yt-vid-nothumb {
  width: 100%; aspect-ratio: 16/9; background: var(--g5);
  display: flex; align-items: center; justify-content: center;
  color: var(--g3); font-size: 1.5rem;
}
.yt-vid-info { padding: 10px 12px; }
.yt-vid-title {
  font-size: 0.78rem; font-weight: 600; color: var(--white); line-height: 1.4;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.yt-vid-date { font-size: 0.68rem; color: var(--g3); margin-top: 5px; }

/* = Platform card grid = */
.platform-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px; margin-bottom: 20px;
}
.platform-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 18px 20px;
  display: flex; flex-direction: column; gap: 10px;
}
.platform-card-header { display: flex; align-items: center; gap: 10px; }
.platform-card-icon {
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.platform-card-name { font-size: 0.88rem; font-weight: 700; color: var(--white); }
.platform-card-sub { font-size: 0.72rem; color: var(--g3); }
.platform-card-links { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
.platform-card-link {
  font-size: 0.73rem; font-weight: 600; padding: 5px 12px;
  border-radius: 5px; border: 1px solid var(--border);
  color: var(--g2); background: var(--g5); text-decoration: none; transition: all 0.2s;
}
.platform-card-link:hover { color: var(--white); border-color: var(--border-2); background: var(--card-2); }
.platform-card-link.primary { background: var(--gold-dim2); color: var(--gold); border-color: rgba(196,146,10,0.3); }
.platform-card-link.primary:hover { background: var(--gold-dim); }

/* = Responsive = */
@media (max-width: 1200px) {
  .kpi-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 900px) {
  .kpi-grid { grid-template-columns: repeat(3, 1fr); }
  .grid-2 { grid-template-columns: 1fr; }
  .grid-3 { grid-template-columns: 1fr; }
  .pipeline-row { grid-template-columns: 20px 1fr 60px 90px 60px; }
}
@media (max-width: 600px) {
  .kpi-grid { grid-template-columns: repeat(2, 1fr); }
  .dash-body { padding: 14px; }
  .tab-nav-btn { padding: 10px 10px; font-size: 0.72rem; }
  .kpi-value { font-size: 1.5rem; }
}
</style>
</head>
<body>

<!-- = Password Gate = -->
<div id="pw-gate">
  <div class="pw-box">
    <div class="pw-logo">
      <img src="/static/command-center-icon.png" alt="MetaGrowth">
    </div>
    <div class="pw-title">CEO Dashboard</div>
    <div class="pw-sub">MetaGrowth Ventures — Internal Access Only</div>
    <input type="password" id="pw-input" class="pw-input" placeholder="Enter access code" autocomplete="off">
    <button class="pw-btn" onclick="checkPw()">Access Dashboard</button>
    <div class="pw-err" id="pw-err"></div>
    <div class="pw-notice">🔒 This page is not publicly accessible and is intended solely for MetaGrowth internal use.</div>
  </div>
</div>

<!-- = Dashboard = -->
<div id="dashboard">

  <!-- Top Bar -->
  <div class="topbar">
    <div class="topbar-brand">
      <div class="topbar-logo"><img src="/static/command-center-icon.png" alt="MG"></div>
      <span class="topbar-name">MetaGrowth CEO Dashboard</span>
    </div>
    <span class="topbar-badge">INTERNAL</span>
    <div class="topbar-right">
      <span class="topbar-date" id="topbar-date"></span>
      <button class="topbar-lock-btn" onclick="lockDashboard()">🔒 Lock</button>
    </div>
  </div>

  <!-- = Quick-Launch Platform Bar = -->
  <div class="quick-bar">
    <span class="quick-bar-label">Launch</span>
    <a href="https://www.youtube.com/@MetaGrowthVentures" target="_blank" class="qbtn yt">▶ YouTube</a>
    <a href="https://studio.youtube.com" target="_blank" class="qbtn yt">🎬 YT Studio</a>
    <div class="qbtn-sep"></div>
    <a href="https://www.linkedin.com/company/metagrowth-ventures" target="_blank" class="qbtn li">in LinkedIn</a>
    <a href="https://www.linkedin.com/in/joshuahirsch1" target="_blank" class="qbtn li">👤 Josh Profile</a>
    <a href="https://www.linkedin.com/analytics/creator/content" target="_blank" class="qbtn li">📊 LI Analytics</a>
    <div class="qbtn-sep"></div>
    <a href="https://analytics.google.com/analytics/web/#/p326723456" target="_blank" class="qbtn ga">📈 GA4</a>
    <a href="https://clarity.microsoft.com/projects/view/xbls14o22c" target="_blank" class="qbtn cl">👁 Clarity</a>
    <div class="qbtn-sep"></div>
    <a href="https://dashboard.tawk.to" target="_blank" class="qbtn tw">💬 Tawk</a>
    <div class="qbtn-sep"></div>
    <a href="https://app.hubspot.com/contacts/" target="_blank" class="qbtn hs">🟠 HubSpot CRM</a>
    <a href="https://meetings.hubspot.com/josh549/revenue-audit" target="_blank" class="qbtn hs">📅 My Calendar</a>
    <div class="qbtn-sep"></div>
    <a href="https://metagrowth.ventures" target="_blank" class="qbtn mg">🌐 Website</a>
    <a href="https://metagrowth.ventures/assessment" target="_blank" class="qbtn mg">📋 Assessment</a>
    <div class="qbtn-sep"></div>
    <a href="/internal/leads" class="qbtn mg" style="background:rgba(196,146,10,0.15);color:var(--gold-light);">🎯 Leads</a>
  </div>

  <!-- Tab Nav -->
    <button class="tab-nav-btn active" onclick="switchTab('content')">📅 Content</button>
    <button class="tab-nav-btn" onclick="switchTab('clarity')">👁 Clarity</button>
    <button class="tab-nav-btn" onclick="switchTab('ga4')">📈 GA4</button>
    <button class="tab-nav-btn" onclick="switchTab('tawk')">💬 Tawk</button>
    <button class="tab-nav-btn" onclick="switchTab('tasks')">✅ Tasks</button>
    <button class="tab-nav-btn" onclick="switchTab('leads')">🎯 Leads</button>

  <!-- = MAIN CONTENT = -->
  <div class="dash-body">
    <!-- = MODULE 4: CONTENT CALENDAR = -->
    <div id="tab-content" class="tab-pane" style="display:none">
      <div class="section-header">
        <span class="section-title">Content Calendar</span>
        <div style="display:flex;gap:8px;align-items:center">
          <a href="https://studio.youtube.com/channel/videos" target="_blank" class="section-action">▶ YT Studio ↗</a>
          <a href="https://www.linkedin.com/company/metagrowth-ventures/admin/" target="_blank" class="section-action">in LinkedIn ↗</a>
          <button class="section-action" onclick="openContentModal()">+ New Content</button>
        </div>
      </div>
      <!-- YouTube Channel Stats (live from /api/youtube) -->
      <div id="yt-stats-bar" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px">
        <div class="panel" style="text-align:center;padding:14px 10px">
          <div style="font-size:11px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Subscribers</div>
          <div id="yt-subs" style="font-size:1.6rem;font-weight:800;color:var(--white)">—</div>
        </div>
        <div class="panel" style="text-align:center;padding:14px 10px">
          <div style="font-size:11px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Total Views</div>
          <div id="yt-views" style="font-size:1.6rem;font-weight:800;color:var(--white)">—</div>
        </div>
        <div class="panel" style="text-align:center;padding:14px 10px">
          <div style="font-size:11px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Videos</div>
          <div id="yt-videos" style="font-size:1.6rem;font-weight:800;color:var(--white)">—</div>
        </div>
      </div>
      <div id="yt-stats-err" style="display:none;font-size:0.8rem;color:var(--g4);margin-bottom:10px;padding:8px 12px;background:var(--panel-bg);border-radius:6px"></div>

      <!-- YouTube Latest Videos via RSS (no API key needed) -->
      <div style="margin-bottom:20px">
        <div class="section-header" style="margin-bottom:12px">
          <span class="section-title">YouTube — Latest Published Videos</span>
          <a href="https://www.youtube.com/@MetaGrowthVentures/videos" target="_blank" class="section-action">▶ All Videos ↗</a>
        </div>
        <div id="yt-latest" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">
          <div style="color:var(--g3);font-size:0.82rem;padding:12px 0" id="yt-loading">Loading latest videos…</div>
        </div>
      </div>

    </div>
    <!-- = MODULE 8: CLARITY SESSIONS = -->
    <div id="tab-clarity" class="tab-pane" style="display:none">
      <div class="section-header">
        <span class="section-title">Microsoft Clarity — Session Recordings</span>
        <div style="display:flex;gap:8px;align-items:center">
          <a href="https://clarity.microsoft.com/projects/view/xbls14o22c/dashboard" target="_blank" class="section-action">📊 Dashboard ↗</a>
          <a href="https://clarity.microsoft.com/projects/view/xbls14o22c/recordings" target="_blank" class="section-action">👁 Recordings ↗</a>
        </div>
      </div>
      <!-- Clarity Launch Panel -->
      <div style="margin-bottom:20px">
        <div class="launch-panel">
          <div class="launch-panel-icon" style="background:rgba(96,165,250,0.1)">👁</div>
          <div class="launch-panel-body">
            <div class="launch-panel-title">Microsoft Clarity — Project xbls14o22c</div>
            <div class="launch-panel-sub">Watch session recordings, heatmaps, and user behaviour for metagrowth.ventures.</div>
            <div class="launch-panel-links">
              <a href="https://clarity.microsoft.com/projects/view/xbls14o22c/dashboard" target="_blank" class="launch-btn primary">Dashboard ↗</a>
              <a href="https://clarity.microsoft.com/projects/view/xbls14o22c/recordings" target="_blank" class="launch-btn">Recordings ↗</a>
              <a href="https://clarity.microsoft.com/projects/view/xbls14o22c/heatmaps" target="_blank" class="launch-btn">Heatmaps ↗</a>
              <a href="https://clarity.microsoft.com/projects/view/xbls14o22c/funnels" target="_blank" class="launch-btn">Funnels ↗</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Manual session log (kept as backup) -->
      <div style="margin-top:8px">
        <div class="section-header" style="margin-bottom:12px">
    </div>
    <div id="tab-ga4" class="tab-pane" style="display:none">
      <div class="section-header">
        <span class="section-title">Google Analytics — G-9EY6ZN6M9F</span>
        <div style="display:flex;gap:8px;align-items:center">
          <a href="https://analytics.google.com/analytics/web/#/report/content-pages" target="_blank" class="section-action">📄 Pages ↗</a>
          <a href="https://analytics.google.com/analytics/web/#/report/trafficsources-overview" target="_blank" class="section-action">🚦 Sources ↗</a>
          <a href="https://analytics.google.com" target="_blank" class="section-action">Open GA4 ↗</a>
        </div>
      </div>

      <!-- GA4 Live Stats (from /api/ga4) -->
      <div id="ga4-stats-bar" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px">
        <div class="panel" style="text-align:center;padding:14px 10px">
          <div style="font-size:11px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Sessions</div>
          <div id="ga4-sessions" style="font-size:1.6rem;font-weight:800;color:var(--white)">—</div>
          <div id="ga4-date" style="font-size:10px;color:var(--g4);margin-top:4px">yesterday</div>
        </div>
        <div class="panel" style="text-align:center;padding:14px 10px">
          <div style="font-size:11px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Users</div>
          <div id="ga4-users" style="font-size:1.6rem;font-weight:800;color:var(--white)">—</div>
        </div>
        <div class="panel" style="text-align:center;padding:14px 10px">
          <div style="font-size:11px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Pageviews</div>
          <div id="ga4-pageviews" style="font-size:1.6rem;font-weight:800;color:var(--white)">—</div>
        </div>
        <div class="panel" style="text-align:center;padding:14px 10px">
          <div style="font-size:11px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Bounce Rate</div>
          <div id="ga4-bounce" style="font-size:1.6rem;font-weight:800;color:var(--white)">—</div>
        </div>
      </div>
      <div id="ga4-stats-err" style="display:none;font-size:0.8rem;color:var(--g4);margin-bottom:10px;padding:8px 12px;background:var(--panel-bg);border-radius:6px"></div>

      <!-- GA4 Launch Panel -->
      <div style="margin-bottom:20px">
        <div class="launch-panel">
          <div class="launch-panel-icon" style="background:rgba(251,188,4,0.1)">📈</div>
          <div class="launch-panel-body">
            <div class="launch-panel-title">Google Analytics 4 — Property G-9EY6ZN6M9F</div>
            <div class="launch-panel-sub">Real-time visitors, traffic sources, top pages, and custom event data for metagrowth.ventures.</div>
            <div class="launch-panel-links">
              <a href="https://analytics.google.com" target="_blank" class="launch-btn primary">Open GA4 ↗</a>
              <a href="https://analytics.google.com/analytics/web/#/p326723456/reports/reportinghub" target="_blank" class="launch-btn">Reports ↗</a>
              <a href="https://analytics.google.com/analytics/web/#/p326723456/realtime" target="_blank" class="launch-btn">Real-Time ↗</a>
              <a href="https://analytics.google.com/analytics/web/#/p326723456/events" target="_blank" class="launch-btn">Events ↗</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div id="tab-tawk" class="tab-pane" style="display:none">
      <div class="section-header">
        <span class="section-title">Tawk.to — Live Chat Dashboard</span>
        <div style="display:flex;gap:8px;align-items:center">
          <a href="https://dashboard.tawk.to/#/chat" target="_blank" class="section-action">💬 Live Chat ↗</a>
          <a href="https://dashboard.tawk.to/#/analytics" target="_blank" class="section-action">📊 Analytics ↗</a>
          <a href="https://dashboard.tawk.to" target="_blank" class="section-action">Open Tawk ↗</a>
        </div>
      </div>
      <!-- Tawk Launch Panel -->
      <div style="margin-bottom:20px">
        <div class="launch-panel">
          <div class="launch-panel-icon" style="background:rgba(22,185,96,0.1)">💬</div>
          <div class="launch-panel-body">
            <div class="launch-panel-title">Tawk.to — Property 6a346361d0dd3e1d406c67c3</div>
            <div class="launch-panel-sub">Monitor live visitors, active chats, missed conversations, and response times.</div>
            <div class="launch-panel-links">
              <a href="https://dashboard.tawk.to" target="_blank" class="launch-btn primary">Open Dashboard ↗</a>
              <a href="https://dashboard.tawk.to/#/chat" target="_blank" class="launch-btn">Live Chat ↗</a>
              <a href="https://dashboard.tawk.to/#/analytics" target="_blank" class="launch-btn">Analytics ↗</a>
              <a href="https://dashboard.tawk.to/#/history" target="_blank" class="launch-btn">Chat History ↗</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Manual KPIs kept below -->
      <div class="panel" style="margin-top:8px">
    </div>
    <div id="tab-tasks" class="tab-pane" style="display:none">
      <div class="section-header">
        <span class="section-title">Today's Priorities</span>
        <span class="section-action" onclick="saveAll()">💾 Save</span>
      </div>
      <div class="grid-2">
        <div class="panel">
          <div class="panel-title"><div class="panel-title-icon">✅</div> Task List</div>
          <div class="tasks-list" id="tasks-list"><!-- Rendered by JS --></div>
          <div class="add-task-row">
            <input type="text" id="new-task-input" class="add-task-input" placeholder="Add a new task…" onkeydown="if(event.key==='Enter')addTask()">
            <button class="add-task-btn" onclick="addTask()">Add</button>
          </div>
        </div>
        <div class="panel">
          <div class="panel-title"><div class="panel-title-icon">📝</div> Notes & Focus</div>
          <textarea id="tasks-notes" class="notes-area" placeholder="Daily notes, focus areas, key decisions…" oninput="debounceSave()"></textarea>
          <div style="font-size:0.72rem;color:var(--g3);margin-top:8px">Auto-saved to localStorage</div>
        </div>
      </div>
    </div>

    <!-- = MODULE 12: WEEKLY CEO REVIEW = -->
    <div id="tab-leads" class="tab-pane" style="display:none">
      <div class="section-header">
        <span class="section-title">Lead Capture</span>
        <div style="display:flex;gap:8px;align-items:center">
          <span class="section-action" onclick="exportLeadsCSV()">⬇ Export CSV</span>
          <span class="section-action" onclick="loadLeadsTab()">↻ Refresh</span>
          <a href="/internal/leads" target="_blank" class="section-action">Full View ↗</a>
        </div>
      </div>

      <!-- Stats -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:20px;">
        <div class="kpi-card"><div class="kpi-label">📥 Total Leads</div><div class="kpi-value" id="lt-total">—</div></div>
        <div class="kpi-card"><div class="kpi-label">📋 Assessments</div><div class="kpi-value" id="lt-assess">—</div></div>
        <div class="kpi-card"><div class="kpi-label">📬 Contact / Council</div><div class="kpi-value" id="lt-contact">—</div></div>
        <div class="kpi-card"><div class="kpi-label">📄 PDF Downloads</div><div class="kpi-value" id="lt-pdf">—</div></div>
        <div class="kpi-card highlight"><div class="kpi-label">📊 Avg Score</div><div class="kpi-value" id="lt-avg">—</div></div>
      </div>

      <!-- Filters + Search -->
      <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center;">
        <button class="section-action lt-filter" style="border-radius:20px;background:var(--gold);color:#000;" onclick="setLtFilter('all',this)">All</button>
        <button class="section-action lt-filter" onclick="setLtFilter('assessment',this)">Assessments</button>
        <button class="section-action lt-filter" onclick="setLtFilter('contact-form',this)">Contact</button>
        <button class="section-action lt-filter" onclick="setLtFilter('founders-council',this)">Council</button>
        <button class="section-action lt-filter" onclick="setLtFilter('pdf-gate',this)">PDF</button>
        <input id="lt-search" type="text" placeholder="Search name, email, company…"
          style="margin-left:auto;background:var(--bg-2);border:1px solid var(--border-2);border-radius:8px;padding:6px 12px;color:var(--white);font-size:12px;outline:none;width:210px;font-family:inherit;"
          oninput="renderLeadsTab()">
      </div>

      <!-- Table -->
      <div class="panel" style="padding:0;overflow:hidden;">
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;">
            <thead>
              <tr style="background:var(--bg-2);">
                <th style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--g3);text-align:left;border-bottom:1px solid var(--border);white-space:nowrap;">Name</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--g3);text-align:left;border-bottom:1px solid var(--border);white-space:nowrap;">Email</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--g3);text-align:left;border-bottom:1px solid var(--border);white-space:nowrap;">Company</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--g3);text-align:center;border-bottom:1px solid var(--border);white-space:nowrap;">Source</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--g3);text-align:center;border-bottom:1px solid var(--border);white-space:nowrap;">Score</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--g3);text-align:left;border-bottom:1px solid var(--border);white-space:nowrap;">Date</th>
                <th style="padding:10px 14px;border-bottom:1px solid var(--border);"></th>
              </tr>
            </thead>
            <tbody id="lt-tbody">
              <tr><td colspan="7" style="text-align:center;padding:32px;color:var(--g3);font-size:13px;">Switch to this tab to load leads…</td></tr>
            </tbody>
          </table>
        </div>
        <div style="padding:10px 16px;border-top:1px solid var(--border);font-size:11px;color:var(--g4);display:flex;justify-content:space-between;">
          <span id="lt-count">—</span>
          <span>⏱ Stored 180 days · Export CSV before expiry</span>
        </div>
      </div>
    </div>

  </div><!-- end .dash-body -->
</div><!-- end #dashboard -->

<!-- = Content Calendar Modal = -->
<div class="modal-overlay" id="content-modal" onclick="closeContentModal(event)">
  <div class="modal-box" onclick="event.stopPropagation()">
    <div class="modal-title" id="content-modal-title">New Content</div>
    <div class="modal-row">
      <div class="modal-label">Date</div>
      <input type="date" id="cm-date" class="modal-input">
    </div>
    <div class="modal-row">
      <div class="modal-label">Platform</div>
      <select id="cm-platform" class="modal-select">
        <option>LinkedIn</option>
        <option>YouTube</option>
        <option>Website / Blog</option>
        <option>Email</option>
        <option>Twitter / X</option>
        <option>Podcast</option>
        <option>Instagram</option>
        <option>Other</option>
      </select>
    </div>
    <div class="modal-row">
      <div class="modal-label">Topic / Title</div>
      <input type="text" id="cm-topic" class="modal-input" placeholder="e.g. 5 Revenue Mistakes Founders Make">
    </div>
    <div class="modal-row">
      <div class="modal-label">Status</div>
      <select id="cm-status" class="modal-select">
        <option value="draft">Draft</option>
        <option value="review">In Review</option>
        <option value="sched">Scheduled</option>
        <option value="pub">Published</option>
      </select>
    </div>
    <div class="modal-row">
      <div class="modal-label">Published Date (if live)</div>
      <input type="date" id="cm-published" class="modal-input">
    </div>
    <div class="modal-row">
      <div class="modal-label">Link (URL)</div>
      <input type="url" id="cm-link" class="modal-input" placeholder="https://...">
    </div>
    <input type="hidden" id="cm-edit-idx" value="-1">
    <div class="modal-actions">
      <button class="modal-cancel" onclick="closeContentModal()">Cancel</button>
      <button class="modal-save" onclick="saveContentItem()">Save</button>
    </div>
  </div>
</div>

<!-- = Save Toast = -->
<div class="save-toast" id="save-toast">✓ Saved</div>

<script>
// =
//  CONSTANTS & HELPERS
// =
var PW = 'METAGROWTH2026';
var AUTH_KEY = 'mgc_internal_auth';
var DATA_KEY = 'mgc_internal_data';
var saveTimer = null;

function escH(s){ var r=String(s); r=r.split('&').join('&amp;'); r=r.split('<').join('&lt;'); r=r.split('>').join('&gt;'); r=r.split('"').join('&quot;'); return r; }

// =
//  DATE
// =
function setDate(){
  var d = new Date();
  var opts = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  document.getElementById('topbar-date').textContent = d.toLocaleDateString('en-US', opts);
}

// =
//  PASSWORD GATE
// =
function checkPw(){
  var v = document.getElementById('pw-input').value.trim();
  if(v === PW){
    localStorage.setItem(AUTH_KEY, '1');
    document.getElementById('pw-gate').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    document.getElementById('dashboard').style.flexDirection = 'column';
    initDashboard();
  } else {
    document.getElementById('pw-err').textContent = 'Incorrect access code. Please try again.';
    document.getElementById('pw-input').value = '';
  }
}
document.getElementById('pw-input').addEventListener('keydown', function(e){
  if(e.key === 'Enter') checkPw();
});
function lockDashboard(){
  localStorage.removeItem(AUTH_KEY);
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('pw-gate').style.display = 'flex';
  document.getElementById('pw-input').value = '';
  document.getElementById('pw-err').textContent = '';
}

// =
//  STORAGE
// =
function loadData(){
  try { return JSON.parse(localStorage.getItem(DATA_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveData(d){
  localStorage.setItem(DATA_KEY, JSON.stringify(d));
}
function debounceSave(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveAll, 800);
}
function saveAll(){
  var d = loadData();
  // Tasks notes
  var tn = document.getElementById('tasks-notes');
  if(tn) { if(!d.tasks_notes) d.tasks_notes = null; d.tasks_notes = tn.value; }
  saveData(d);
  showToast();
}
function showToast(){
  var t = document.getElementById('save-toast');
  if(!t) return;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 1800);
}

// =
//  TABS
// =
var currentTab = 'content';
function switchTab(id){
  document.querySelectorAll('.tab-pane').forEach(function(el){ el.style.display='none'; });
  document.querySelectorAll('.tab-nav-btn').forEach(function(b){ b.classList.remove('active'); });
  var pane = document.getElementById('tab-' + id);
  if(pane) pane.style.display = 'block';
  var btns = document.querySelectorAll('.tab-nav-btn');
  for(var i=0;i<btns.length;i++){
    if(btns[i].getAttribute('onclick') && btns[i].getAttribute('onclick').includes("'"+id+"'")){
      btns[i].classList.add('active'); break;
    }
  }
  currentTab = id;
  if(id==='leads' && !_ltLoaded) loadLeadsTab();
}

//  MODULE 4: CONTENT CALENDAR
// =
function renderContentTable(){
  var d = loadData();
  var items = d.content || [];
  var tbody = document.getElementById('content-tbody');
  if(items.length === 0){
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--g3);padding:28px">No content items yet. Click "New Content" to add one.</td></tr>';
    return;
  }
  tbody.innerHTML = items.map(function(it, idx){
    var statusMap = { draft:'badge-draft', review:'badge-review', sched:'badge-sched', pub:'badge-pub' };
    var statusLabel = { draft:'Draft', review:'In Review', sched:'Scheduled', pub:'Published' };
    var badgeClass = statusMap[it.status] || 'badge-draft';
    var sLabel = statusLabel[it.status] || 'Draft';
    return '<tr>'
      +'<td>'+escH(it.date||'—')+'</td>'
      +'<td>'+escH(it.platform||'—')+'</td>'
      +'<td style="max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+escH(it.topic||'—')+'</td>'
      +'<td><span class="badge '+badgeClass+'">'+sLabel+'</span></td>'
      +'<td>'+escH(it.published||'—')+'</td>'
      +'<td>'+(it.link?'<a href="'+escH(it.link)+'" target="_blank" style="color:var(--blue);font-size:0.78rem">View ↗</a>':'—')+'</td>'
      +'<td style="white-space:nowrap">'
        +'<button onclick="editContentItem('+idx+')" style="color:var(--g3);font-size:0.75rem;padding:4px 8px;border:1px solid var(--border);border-radius:5px;cursor:pointer;background:none;margin-right:4px">Edit</button>'
        +'<button onclick="deleteContentItem('+idx+')" style="color:var(--red);font-size:0.75rem;padding:4px 8px;border:1px solid rgba(239,68,68,0.2);border-radius:5px;cursor:pointer;background:none">Del</button>'
      +'</td>'
      +'</tr>';
  }).join('');
}

function openContentModal(){ document.getElementById('content-modal').classList.add('show'); }
function closeContentModal(e){
  if(!e || e.target===document.getElementById('content-modal')){
    document.getElementById('content-modal').classList.remove('show');
    document.getElementById('cm-edit-idx').value = '-1';
    ['cm-date','cm-topic','cm-published','cm-link'].forEach(function(id){ document.getElementById(id).value = ''; });
    document.getElementById('cm-status').value = 'draft';
    document.getElementById('cm-platform').value = 'LinkedIn';
    document.getElementById('content-modal-title').textContent = 'New Content';
  }
}
function editContentItem(idx){
  var d = loadData();
  var it = (d.content||[])[idx];
  if(!it) return;
  document.getElementById('cm-edit-idx').value = idx;
  document.getElementById('cm-date').value = it.date||'';
  document.getElementById('cm-platform').value = it.platform||'LinkedIn';
  document.getElementById('cm-topic').value = it.topic||'';
  document.getElementById('cm-status').value = it.status||'draft';
  document.getElementById('cm-published').value = it.published||'';
  document.getElementById('cm-link').value = it.link||'';
  document.getElementById('content-modal-title').textContent = 'Edit Content';
  openContentModal();
}
function saveContentItem(){
  var d = loadData();
  if(!d.content) d.content = [];
  var item = {
    date:      document.getElementById('cm-date').value,
    platform:  document.getElementById('cm-platform').value,
    topic:     document.getElementById('cm-topic').value,
    status:    document.getElementById('cm-status').value,
    published: document.getElementById('cm-published').value,
    link:      document.getElementById('cm-link').value
  };
  var idx = parseInt(document.getElementById('cm-edit-idx').value);
  if(idx >= 0) d.content[idx] = item;
  else d.content.unshift(item);
  saveData(d);
  renderContentTable();
  closeContentModal();
  showToast();
}
function deleteContentItem(idx){
  if(!confirm('Delete this content item?')) return;
  var d = loadData();
  if(d.content) d.content.splice(idx, 1);
  saveData(d);
  renderContentTable();
  showToast();
}

// =
//  MODULE 8: CLARITY SESSIONS (manual)
// =


// =
//  MODULE 9: GOOGLE ANALYTICS
// =



// =
//  MODULE 10: TAWK
// =

// =
//  MODULE 11: TASKS
// =
function renderTasks(){
  var d = loadData();
  var tasks = d.tasks || [];
  var el = document.getElementById('tasks-list');
  if(tasks.length === 0){
    el.innerHTML = '<div style="color:var(--g3);font-size:0.82rem;padding:8px 0">No tasks yet. Add your first priority below.</div>';
    return;
  }
  el.innerHTML = tasks.map(function(t, idx){
    return '<div class="task-item">'
      +'<input type="checkbox" class="task-check" '+(t.done?'checked':'')+' onchange="toggleTask('+idx+')">'
      +'<input type="text" class="task-text'+(t.done?' done':'')+'" value="'+escH(t.text||'')+'" onchange="updateTaskText('+idx+', this.value)" onblur="updateTaskText('+idx+', this.value)">'
      +'<span class="task-del" onclick="deleteTask('+idx+')">✕</span>'
      +'</div>';
  }).join('');
  // Notes
  var notes = document.getElementById('tasks-notes');
  if(notes) notes.value = d.tasks_notes || '';
  var weeklyNotes = document.getElementById('weekly-notes');
  if(weeklyNotes) weeklyNotes.value = d.weekly_notes || '';
}

function addTask(){
  var inp = document.getElementById('new-task-input');
  var text = inp ? inp.value.trim() : '';
  if(!text) return;
  var d = loadData();
  if(!d.tasks) d.tasks = [];
  d.tasks.push({ text:text, done:false });
  saveData(d);
  inp.value = '';
  renderTasks();
  showToast();
}
function toggleTask(idx){
  var d = loadData();
  if(d.tasks && d.tasks[idx]) d.tasks[idx].done = !d.tasks[idx].done;
  saveData(d);
  renderTasks();
  debounceSave();
}
function updateTaskText(idx, val){
  var d = loadData();
  if(d.tasks && d.tasks[idx]) d.tasks[idx].text = val;
  saveData(d);
  debounceSave();
}
function deleteTask(idx){
  var d = loadData();
  if(d.tasks) d.tasks.splice(idx, 1);
  saveData(d);
  renderTasks();
  showToast();
}

// =
// == LEADS TAB ==
var _ltLeads  = [];
var _ltFilter = 'all';
var _ltLoaded = false;
var LT_API_KEY = 'mgLeads2024!xK9p';

async function loadLeadsTab() {
  _ltLoaded = true;
  document.getElementById('lt-tbody').innerHTML =
    '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--g3);font-size:13px;">⟳ Loading…</td></tr>';
  try {
    var res  = await fetch('/api/leads?key=' + encodeURIComponent(LT_API_KEY) + '&limit=500');
    var data = await res.json();
    if (!data.ok) throw new Error(data.error || 'API error');
    _ltLeads = data.leads || [];
    updateLtStats();
    renderLeadsTab();
  } catch(e) {
    document.getElementById('lt-tbody').innerHTML =
      '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--red);font-size:13px;">⚠ ' + escH(String(e)) + '</td></tr>';
  }
}

function updateLtStats() {
  var a = _ltLeads.filter(function(l){ return l.source==='assessment'; });
  var c = _ltLeads.filter(function(l){ return l.source==='contact-form'||l.source==='founders-council'; });
  var p = _ltLeads.filter(function(l){ return l.source==='pdf-gate'; });
  var scores = a.map(function(l){ return Number(l.score)||0; }).filter(function(s){ return s>0; });
  var avg = scores.length ? Math.round(scores.reduce(function(a,b){ return a+b; },0)/scores.length) : '—';
  document.getElementById('lt-total').textContent   = _ltLeads.length;
  document.getElementById('lt-assess').textContent  = a.length;
  document.getElementById('lt-contact').textContent = c.length;
  document.getElementById('lt-pdf').textContent     = p.length;
  document.getElementById('lt-avg').textContent     = avg + (typeof avg==='number' ? '/100' : '');
}

function setLtFilter(val, btn) {
  _ltFilter = val;
  document.querySelectorAll('.lt-filter').forEach(function(b){
    b.style.background = ''; b.style.color = '';
  });
  btn.style.background = 'var(--gold)';
  btn.style.color = '#000';
  renderLeadsTab();
}

function renderLeadsTab() {
  var q = (document.getElementById('lt-search').value||'').toLowerCase();
  var list = _ltLeads.filter(function(l){
    if(_ltFilter!=='all' && l.source!==_ltFilter) return false;
    if(!q) return true;
    return [l.name,l.email,l.company,l.first_name,l.last_name]
      .filter(Boolean).some(function(v){ return String(v).toLowerCase().includes(q); });
  });
  list = list.slice().sort(function(a,b){
    return new Date(b.captured_at).getTime() - new Date(a.captured_at).getTime();
  });
  document.getElementById('lt-count').textContent = list.length + ' lead' + (list.length!==1?'s':'');
  if(!list.length){
    document.getElementById('lt-tbody').innerHTML =
      '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--g3);font-size:13px;">' +
      (_ltLeads.length ? 'No matches.' : 'No leads yet — form submissions will appear here.') + '</td></tr>';
    return;
  }
  var ltBadge = function(src){
    var map = { 'assessment':['rgba(196,146,10,0.15)','#E0AF30','Assessment'], 'contact-form':['rgba(59,130,246,0.12)','#3B82F6','Contact'], 'founders-council':['rgba(168,85,247,0.12)','#A855F7','Council'], 'pdf-gate':['rgba(34,197,94,0.12)','#22C55E','PDF'] };
    var m = map[src]||['var(--g5)','var(--g2)',src||'?'];
    return '<span style="display:inline-block;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700;background:'+m[0]+';color:'+m[1]+'">'+m[2]+'</span>';
  };
  var ltScore = function(score){
    var s=Number(score);
    var bg=s<=30?'rgba(239,68,68,0.15)':s<=50?'rgba(234,179,8,0.15)':s<=70?'rgba(59,130,246,0.15)':'rgba(34,197,94,0.15)';
    var c=s<=30?'#EF4444':s<=50?'#EAB308':s<=70?'#3B82F6':'#22C55E';
    return '<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:800;background:'+bg+';color:'+c+'">'+s+'</span>';
  };
  document.getElementById('lt-tbody').innerHTML = list.map(function(l){
    var name    = escH(l.name||((l.first_name||'')+' '+(l.last_name||'')).trim()||'—');
    var email   = escH(l.email||'');
    var company = escH(l.company||'—');
    var score   = l.score ? Number(l.score) : null;
    var date    = l.captured_at ? new Date(l.captured_at).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : (l.submitted_at||'—');
    var fn = l.first_name||(l.name||'').split(' ')[0]||'';
    var ln = l.last_name||(l.name||'').split(' ').slice(1).join(' ')||'';
    var hsUrl = 'https://app.hubspot.com/contacts/new?email='+encodeURIComponent(l.email||'')+'&firstname='+encodeURIComponent(fn)+'&lastname='+encodeURIComponent(ln)+'&company='+encodeURIComponent(l.company||'');
    return '<tr style="border-bottom:1px solid var(--border);">'+
      '<td style="padding:11px 14px;font-size:13px;font-weight:600;color:var(--white);">'+name+'</td>'+
      '<td style="padding:11px 14px;font-size:13px;">'+(l.email?'<a href="mailto:'+email+'" style="color:var(--gold-light);text-decoration:none;">'+email+'</a>':'—')+'</td>'+
      '<td style="padding:11px 14px;font-size:13px;color:var(--g2);">'+company+'</td>'+
      '<td style="padding:11px 14px;text-align:center;">'+ltBadge(l.source)+'</td>'+
      '<td style="padding:11px 14px;text-align:center;">'+(score!==null?ltScore(score):'<span style="color:var(--g4)">—</span>')+'</td>'+
      '<td style="padding:11px 14px;font-size:12px;color:var(--g3);white-space:nowrap;">'+escH(date)+'</td>'+
      '<td style="padding:11px 14px;text-align:right;white-space:nowrap;">'+
        (l.email?'<a href="mailto:'+email+'" style="font-size:11px;background:var(--gold-dim);color:var(--gold-light);padding:4px 10px;border-radius:6px;font-weight:600;text-decoration:none;margin-right:4px;">✉ Reply</a>':'')+
        '<a href="'+escH(hsUrl)+'" target="_blank" style="font-size:11px;background:rgba(255,122,89,0.15);color:#ff7a59;padding:4px 10px;border-radius:6px;font-weight:600;text-decoration:none;">+ HS</a>'+
      '</td>'+
    '</tr>';
  }).join('');
}

function exportLeadsCSV() {
  if(!_ltLeads.length){ alert('Switch to the Leads tab first to load data.'); return; }
  var cols = ['id','source','captured_at','name','email','company','role','title','phone','score','stage_badge','utm_source','utm_medium','utm_campaign','referrer','landing_page','pdf_name','revenue','team_size'];
  var rows = [cols.join(',')];
  _ltLeads.forEach(function(l){
    var n = l.name||((l.first_name||'')+' '+(l.last_name||'')).trim();
    rows.push(cols.map(function(c){ var v=c==='name'?n:(l[c]!==undefined?String(l[c]):''); return '"'+v.replace(/"/g,'""')+'"'; }).join(','));
  });
  var sep  = String.fromCharCode(10);
  var blob = new Blob([rows.join(sep)], {type:'text/csv'});
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href = url; a.download = 'metagrowth-leads-'+new Date().toISOString().slice(0,10)+'.csv'; a.click();
  URL.revokeObjectURL(url);
}

// YouTube channel stats from /api/youtube
function fmtNum(n){
  var v = parseInt(n, 10);
  if(isNaN(v)) return n;
  if(v >= 1000000) return (v/1000000).toFixed(1).replace(/\.0$/,'') + 'M';
  if(v >= 1000)    return (v/1000).toFixed(1).replace(/\.0$/,'') + 'K';
  return String(v);
}
async function loadYouTubeVideos(){
  var rssFeedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCify9FU2y6Gz78eaxvggMnw';
  var proxyUrl   = 'https://api.allorigins.win/get?url=' + encodeURIComponent(rssFeedUrl);
  try {
    var res = await fetch(proxyUrl);
    var d   = await res.json();
    var parser = new DOMParser();
    var xml = parser.parseFromString(d.contents, 'text/xml');
    var entries = Array.from(xml.querySelectorAll('entry')).slice(0, 6);
    var grid = document.getElementById('yt-latest');
    if(!grid) return;
    if(!entries.length){ grid.innerHTML = '<div style="color:var(--g3);font-size:0.82rem">No videos found.</div>'; return; }
    grid.innerHTML = entries.map(function(e){
      var title    = e.querySelector('title')?.textContent || '';
      var link     = e.querySelector('link')?.getAttribute('href') || '';
      var vid      = e.querySelector('videoId')?.textContent || (link.split('v=')[1]||'').split('&')[0];
      var thumb    = vid ? 'https://i.ytimg.com/vi/'+vid+'/mqdefault.jpg' : '';
      var pubDate  = e.querySelector('published')?.textContent || '';
      var dateStr  = pubDate ? new Date(pubDate).toLocaleDateString('en-US',{month:'short',day:'numeric'}) : '';
      return '<a href="'+link+'" target="_blank" rel="noopener" style="display:block;border-radius:8px;overflow:hidden;background:var(--panel-bg);border:1px solid var(--border);text-decoration:none;">'+
        (thumb?'<img src="'+thumb+'" alt="" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block">':'')+
        '<div style="padding:8px 10px">'+
          '<div style="font-size:12px;font-weight:600;color:var(--white);line-height:1.4;margin-bottom:4px">'+title+'</div>'+
          '<div style="font-size:11px;color:var(--g4)">'+dateStr+'</div>'+
        '</div>'+
      '</a>';
    }).join('');
  } catch(err) {
    var g = document.getElementById('yt-loading');
    if(g) g.textContent = 'Could not load videos.';
  }
  // Load channel stats separately from our /api/youtube
  try {
    var sr = await fetch('/api/youtube');
    if(sr.ok){
      var sd = await sr.json();
      var el;
      el = document.getElementById('yt-subs');   if(el) el.textContent = fmtNum(sd.subscribers||'0');
      el = document.getElementById('yt-views');  if(el) el.textContent = fmtNum(sd.views||'0');
      el = document.getElementById('yt-videos'); if(el) el.textContent = fmtNum(sd.videos||'0');
    } else {
      var errEl = document.getElementById('yt-stats-err');
      if(errEl){ errEl.style.display='block'; errEl.textContent='YouTube stats unavailable — API key not set yet.'; }
    }
  } catch(e2) {
    var errEl2 = document.getElementById('yt-stats-err');
    if(errEl2){ errEl2.style.display='block'; errEl2.textContent='YouTube stats unavailable — add YOUTUBE_API_KEY secret.'; }
  }
}

// GA4 daily stats from /api/ga4
async function loadGA4Stats(){
  try {
    var res = await fetch('/api/ga4');
    if(res.ok){
      var d = await res.json();
      var el;
      el = document.getElementById('ga4-sessions');  if(el) el.textContent = fmtNum(d.sessions||'0');
      el = document.getElementById('ga4-users');     if(el) el.textContent = fmtNum(d.users||'0');
      el = document.getElementById('ga4-pageviews'); if(el) el.textContent = fmtNum(d.pageviews||'0');
      el = document.getElementById('ga4-bounce');    if(el) el.textContent = d.bounce_rate||'—';
      el = document.getElementById('ga4-date');      if(el && d.date) el.textContent = d.date;
    } else {
      var errEl = document.getElementById('ga4-stats-err');
      if(errEl){ errEl.style.display='block'; errEl.textContent='GA4 stats unavailable — service account not configured yet.'; }
    }
  } catch(err) {
    var errEl2 = document.getElementById('ga4-stats-err');
    if(errEl2){ errEl2.style.display='block'; errEl2.textContent='GA4 stats unavailable — add GA4_SERVICE_ACCOUNT_JSON and GA4_PROPERTY_ID secrets.'; }
  }
}

function initDashboard(){
  setDate();
  renderContentTable();
  renderTasks();
  loadYouTubeVideos();
  loadGA4Stats();
}

// Auto-check auth on page load
(function(){
  if(localStorage.getItem(AUTH_KEY) === '1'){
    document.getElementById('pw-gate').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    document.getElementById('dashboard').style.flexDirection = 'column';
    initDashboard();
  }
})();

// Auto-save periodically
setInterval(saveAll, 60000);

// Keyboard shortcut: Escape to lock
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && localStorage.getItem(AUTH_KEY) === '1'){
    if(confirm('Lock the CEO Dashboard?')) lockDashboard();
  }
});
<\/script>
</body>
</html>`
