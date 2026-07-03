// =
//  MetaGrowth Lead Dashboard — INTERNAL USE ONLY
//  Route: /internal/leads
//  Access: Password-protected (same code as /internal)
//  NEVER link publicly, never appear in nav or sitemaps
// =

export const leadsDashboardPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex,nofollow">
  <meta name="googlebot" content="noindex,nofollow">
  <title>Lead Capture Dashboard | MetaGrowth Ventures</title>
  <link rel="icon" type="image/png" href="/static/command-center-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#0A0A0C;--bg-1:#0F1012;--bg-2:#141417;
  --card:#18191E;--card-2:#1E1F25;
  --border:rgba(255,255,255,0.07);--border-2:rgba(255,255,255,0.12);
  --gold:#C4920A;--gold-light:#E0AF30;--gold-dim:rgba(196,146,10,0.15);
  --white:#FFFFFF;
  --g1:rgba(255,255,255,0.80);--g2:rgba(255,255,255,0.55);
  --g3:rgba(255,255,255,0.35);--g4:rgba(255,255,255,0.15);
  --g5:rgba(255,255,255,0.06);
  --green:#22C55E;--green-dim:rgba(34,197,94,0.12);
  --red:#EF4444;--red-dim:rgba(239,68,68,0.12);
  --blue:#3B82F6;--blue-dim:rgba(59,130,246,0.12);
  --purple:#A855F7;--purple-dim:rgba(168,85,247,0.12);
  --r:10px;
}
html,body{height:100%;font-family:'Inter',sans-serif;background:var(--bg);color:var(--white);-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}
button{font-family:inherit;cursor:pointer;border:none;background:none;}
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:4px;}

/* = Password Gate = */
#pw-gate{
  display:flex;align-items:center;justify-content:center;
  min-height:100vh;background:var(--bg);padding:24px;
}
.pw-box{
  background:var(--card);border:1px solid var(--border-2);border-radius:16px;
  padding:48px 40px;max-width:400px;width:100%;text-align:center;
}
.pw-logo{font-size:13px;font-weight:700;color:var(--gold);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;}
.pw-title{font-size:22px;font-weight:800;margin-bottom:6px;}
.pw-sub{font-size:14px;color:var(--g3);margin-bottom:32px;}
.pw-input{
  width:100%;background:var(--bg-2);border:1px solid var(--border-2);
  border-radius:8px;padding:12px 16px;color:var(--white);font-size:15px;
  text-align:center;letter-spacing:2px;margin-bottom:12px;outline:none;
}
.pw-input:focus{border-color:var(--gold);}
.pw-btn{
  width:100%;background:var(--gold);color:#000;font-weight:700;
  font-size:14px;padding:12px;border-radius:8px;cursor:pointer;
  transition:opacity 0.15s;
}
.pw-btn:hover{opacity:0.85;}
.pw-err{color:var(--red);font-size:13px;margin-top:10px;min-height:18px;}
.pw-notice{font-size:11px;color:var(--g3);margin-top:20px;line-height:1.6;}

/* = Dashboard Shell = */
#dashboard{display:none;flex-direction:column;min-height:100vh;}

/* = Topbar = */
.topbar{
  display:flex;align-items:center;justify-content:space-between;
  padding:0 24px;height:56px;background:var(--bg-1);
  border-bottom:1px solid var(--border);position:sticky;top:0;z-index:50;
}
.topbar-left{display:flex;align-items:center;gap:16px;}
.topbar-brand{font-size:13px;font-weight:700;color:var(--gold);letter-spacing:1px;text-transform:uppercase;}
.topbar-sep{color:var(--g4);}
.topbar-page{font-size:13px;color:var(--g2);font-weight:500;}
.topbar-right{display:flex;align-items:center;gap:10px;}
.topbar-nav-btn{
  font-size:12px;color:var(--g3);padding:6px 12px;
  border:1px solid var(--border);border-radius:6px;
  transition:color 0.15s,border-color 0.15s;
}
.topbar-nav-btn:hover{color:var(--white);border-color:var(--border-2);}
.topbar-lock{font-size:12px;color:var(--g3);padding:6px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;transition:color 0.15s,border-color 0.15s;}
.topbar-lock:hover{color:var(--white);border-color:var(--border-2);}

/* = Main Content = */
.main{flex:1;padding:28px 24px;max-width:1400px;width:100%;margin:0 auto;}

/* = Page Header = */
.page-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:16px;}
.page-title{font-size:22px;font-weight:800;}
.page-sub{font-size:13px;color:var(--g3);margin-top:3px;}
.header-actions{display:flex;align-items:center;gap:10px;}
.btn-refresh{
  background:var(--gold-dim);color:var(--gold-light);border:1px solid rgba(196,146,10,0.3);
  border-radius:8px;padding:8px 16px;font-size:13px;font-weight:600;cursor:pointer;
  transition:background 0.15s;display:flex;align-items:center;gap:6px;
}
.btn-refresh:hover{background:rgba(196,146,10,0.25);}
.btn-export{
  background:var(--g5);color:var(--g2);border:1px solid var(--border-2);
  border-radius:8px;padding:8px 16px;font-size:13px;font-weight:600;cursor:pointer;
  transition:background 0.15s;display:flex;align-items:center;gap:6px;
}
.btn-export:hover{background:rgba(255,255,255,0.08);}

/* = Stats Row = */
.stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:28px;}
.stat-card{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:18px 20px;}
.stat-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--g3);margin-bottom:6px;}
.stat-value{font-size:28px;font-weight:800;color:var(--white);}
.stat-sub{font-size:12px;color:var(--g3);margin-top:3px;}
.stat-card.gold .stat-value{color:var(--gold-light);}
.stat-card.green .stat-value{color:var(--green);}
.stat-card.blue .stat-value{color:var(--blue);}
.stat-card.purple .stat-value{color:var(--purple);}

/* = Filters = */
.filters{display:flex;align-items:center;gap:10px;margin-bottom:20px;flex-wrap:wrap;}
.filter-btn{
  font-size:12px;font-weight:600;padding:6px 14px;border-radius:20px;
  border:1px solid var(--border-2);color:var(--g3);cursor:pointer;
  transition:all 0.15s;background:transparent;
}
.filter-btn:hover{color:var(--white);border-color:var(--g4);}
.filter-btn.active{background:var(--gold);color:#000;border-color:var(--gold);}
.filter-search{
  margin-left:auto;background:var(--bg-2);border:1px solid var(--border-2);
  border-radius:8px;padding:7px 14px;color:var(--white);font-size:13px;
  outline:none;width:220px;
}
.filter-search:focus{border-color:var(--gold);}
.filter-search::placeholder{color:var(--g4);}

/* = Table = */
.table-wrap{background:var(--card);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;}
.table-scroll{overflow-x:auto;}
table{width:100%;border-collapse:collapse;}
thead tr{background:var(--bg-2);}
th{
  padding:11px 14px;font-size:11px;font-weight:700;text-transform:uppercase;
  letter-spacing:0.8px;color:var(--g3);text-align:left;
  border-bottom:1px solid var(--border);white-space:nowrap;cursor:pointer;
  user-select:none;
}
th:hover{color:var(--g1);}
th .sort-arrow{margin-left:4px;opacity:0.4;}
th.sorted .sort-arrow{opacity:1;color:var(--gold);}
tbody tr{border-bottom:1px solid var(--border);transition:background 0.1s;}
tbody tr:last-child{border-bottom:none;}
tbody tr:hover{background:var(--g5);}
td{padding:12px 14px;font-size:13px;color:var(--g1);vertical-align:middle;}
td.td-name{font-weight:600;color:var(--white);}
td.td-email a{color:var(--gold-light);text-decoration:none;}
td.td-email a:hover{text-decoration:underline;}
td.td-company{color:var(--g2);}
td.td-score{font-weight:700;text-align:center;}
td.td-source{text-align:center;}
td.td-date{color:var(--g3);white-space:nowrap;font-size:12px;}

/* = Source badges = */
.badge{display:inline-block;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:0.3px;white-space:nowrap;}
.badge-assessment{background:var(--gold-dim);color:var(--gold-light);}
.badge-contact{background:var(--blue-dim);color:var(--blue);}
.badge-pdf{background:var(--green-dim);color:var(--green);}
.badge-council{background:var(--purple-dim);color:var(--purple);}

/* = Score pill = */
.score-pill{
  display:inline-block;padding:3px 10px;border-radius:12px;
  font-size:12px;font-weight:800;min-width:36px;text-align:center;
}
.score-0{background:rgba(239,68,68,0.15);color:#EF4444;}
.score-1{background:rgba(234,179,8,0.15);color:#EAB308;}
.score-2{background:rgba(59,130,246,0.15);color:#3B82F6;}
.score-3{background:rgba(34,197,94,0.15);color:#22C55E;}

/* = Expanded row = */
.detail-row td{background:var(--bg-2);padding:0;}
.detail-row.hidden{display:none;}
.detail-inner{padding:16px 20px 20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;}
.detail-field{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 14px;}
.detail-field-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--g3);margin-bottom:4px;}
.detail-field-value{font-size:13px;color:var(--g1);word-break:break-all;line-height:1.5;}
.detail-field-value a{color:var(--gold-light);}
.detail-actions{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;grid-column:1/-1;}
.detail-btn{font-size:12px;font-weight:600;padding:7px 14px;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:opacity 0.15s;}
.detail-btn:hover{opacity:0.8;}
.detail-btn-email{background:#ad7805;color:#000;}
.detail-btn-hs{background:#ff7a59;color:#fff;}

/* = Empty / Loading states = */
.empty-state{text-align:center;padding:60px 20px;color:var(--g3);}
.empty-icon{font-size:40px;margin-bottom:12px;}
.empty-title{font-size:16px;font-weight:700;color:var(--g2);margin-bottom:6px;}
.empty-sub{font-size:13px;line-height:1.6;}
.loading-row td{text-align:center;padding:40px;color:var(--g3);font-size:13px;}
.spin{display:inline-block;animation:spin 1s linear infinite;margin-right:8px;}
@keyframes spin{to{transform:rotate(360deg);}}

/* = Table footer = */
.table-footer{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 16px;border-top:1px solid var(--border);
  font-size:12px;color:var(--g3);flex-wrap:wrap;gap:8px;
}
.expiry-note{font-size:11px;color:var(--g4);display:flex;align-items:center;gap:4px;}

/* = Toast = */
#toast{
  position:fixed;bottom:24px;right:24px;background:var(--card);
  border:1px solid var(--border-2);border-radius:10px;padding:12px 18px;
  font-size:13px;font-weight:600;color:var(--white);
  box-shadow:0 8px 32px rgba(0,0,0,0.4);
  transform:translateY(80px);opacity:0;transition:all 0.25s;z-index:999;
}
#toast.show{transform:translateY(0);opacity:1;}

@media(max-width:700px){
  .stats-row{grid-template-columns:1fr 1fr;}
  .filter-search{width:100%;}
  .topbar-nav-btn{display:none;}
  td.td-company,td.td-utm{display:none;}
}
</style>
</head>
<body>

<!-- = Password Gate = -->
<div id="pw-gate">
  <div class="pw-box">
    <div class="pw-logo">MetaGrowth Ventures</div>
    <div class="pw-title">Lead Dashboard</div>
    <div class="pw-sub">Internal access only</div>
    <input type="password" id="pw-input" class="pw-input" placeholder="Enter access code" autocomplete="off">
    <button class="pw-btn" onclick="checkPw()">Unlock →</button>
    <div class="pw-err" id="pw-err"></div>
    <div class="pw-notice">🔒 This page is not publicly accessible and is intended solely for MetaGrowth internal use.</div>
  </div>
</div>

<!-- = Dashboard = -->
<div id="dashboard">

  <!-- Topbar -->
  <div class="topbar">
    <div class="topbar-left">
      <span class="topbar-brand">MetaGrowth</span>
      <span class="topbar-sep">›</span>
      <span class="topbar-page">Lead Capture</span>
    </div>
    <div class="topbar-right">
      <a href="/internal" class="topbar-nav-btn">← CEO Dashboard</a>
      <button class="topbar-lock" onclick="lockDashboard()">🔒 Lock</button>
    </div>
  </div>

  <!-- Main -->
  <div class="main">

    <!-- Page header -->
    <div class="page-header">
      <div>
        <div class="page-title">Lead Capture</div>
        <div class="page-sub" id="last-updated">Loading…</div>
      </div>
      <div class="header-actions">
        <button class="btn-export" onclick="exportCSV()">⬇ Export CSV</button>
        <button class="btn-refresh" onclick="loadLeads()">↻ Refresh</button>
      </div>
    </div>

    <!-- Stats -->
    <div class="stats-row">
      <div class="stat-card gold">
        <div class="stat-label">Total Leads</div>
        <div class="stat-value" id="stat-total">—</div>
        <div class="stat-sub">All sources</div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">Assessments</div>
        <div class="stat-value" id="stat-assessment">—</div>
        <div class="stat-sub">With score</div>
      </div>
      <div class="stat-card blue">
        <div class="stat-label">Contact Forms</div>
        <div class="stat-value" id="stat-contact">—</div>
        <div class="stat-sub">+ Council apps</div>
      </div>
      <div class="stat-card green">
        <div class="stat-label">PDF Downloads</div>
        <div class="stat-value" id="stat-pdf">—</div>
        <div class="stat-sub">Gated resources</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Avg Score</div>
        <div class="stat-value" id="stat-avg-score">—</div>
        <div class="stat-sub">Assessment leads</div>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters">
      <button class="filter-btn active" onclick="setFilter('all',this)">All</button>
      <button class="filter-btn" onclick="setFilter('assessment',this)">Assessments</button>
      <button class="filter-btn" onclick="setFilter('contact-form',this)">Contact</button>
      <button class="filter-btn" onclick="setFilter('founders-council',this)">Council</button>
      <button class="filter-btn" onclick="setFilter('pdf-gate',this)">PDF Downloads</button>
      <input class="filter-search" id="search-input" type="text" placeholder="Search name, email, company…" oninput="renderTable()">
    </div>

    <!-- Table -->
    <div class="table-wrap">
      <div class="table-scroll">
        <table id="leads-table">
          <thead>
            <tr>
              <th onclick="sortBy('name')">Name <span class="sort-arrow">↕</span></th>
              <th onclick="sortBy('email')">Email <span class="sort-arrow">↕</span></th>
              <th onclick="sortBy('company')" class="td-company">Company <span class="sort-arrow">↕</span></th>
              <th onclick="sortBy('source')">Source <span class="sort-arrow">↕</span></th>
              <th onclick="sortBy('score')">Score <span class="sort-arrow">↕</span></th>
              <th onclick="sortBy('captured_at')">Date <span class="sort-arrow">↕</span></th>
              <th></th>
            </tr>
          </thead>
          <tbody id="leads-body">
            <tr class="loading-row"><td colspan="7"><span class="spin">⟳</span> Loading leads…</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-footer">
        <span id="table-count">—</span>
        <span class="expiry-note">⏱ Leads stored for 180 days · Export CSV before expiry</span>
      </div>
    </div>

  </div><!-- /main -->
</div><!-- /dashboard -->

<div id="toast"></div>

<script>
var PW       = 'METAGROWTH2026';
var AUTH_KEY = 'mgc_internal_auth';
var API_KEY  = 'mgLeads2024!xK9p';

var allLeads     = [];
var activeFilter = 'all';
var sortCol      = 'captured_at';
var sortDir      = -1; // -1 = newest first
var expandedId   = null;

// = Auth =
function checkPw() {
  var v = document.getElementById('pw-input').value.trim();
  if (v === PW) {
    localStorage.setItem(AUTH_KEY, '1');
    document.getElementById('pw-gate').style.display  = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    initDashboard();
  } else {
    document.getElementById('pw-err').textContent = 'Incorrect access code.';
    document.getElementById('pw-input').value = '';
  }
}
document.getElementById('pw-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') checkPw();
});
function lockDashboard() {
  localStorage.removeItem(AUTH_KEY);
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('pw-gate').style.display   = 'flex';
  document.getElementById('pw-input').value = '';
  document.getElementById('pw-err').textContent = '';
}

// = Init =
function initDashboard() {
  if (localStorage.getItem(AUTH_KEY) === '1') {
    document.getElementById('pw-gate').style.display  = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    loadLeads();
  }
}

// = Load leads from KV API =
async function loadLeads() {
  document.getElementById('leads-body').innerHTML =
    '<tr class="loading-row"><td colspan="7"><span class="spin">⟳</span> Loading leads…</td></tr>';
  try {
    var res  = await fetch('/api/leads?key=' + encodeURIComponent(API_KEY) + '&limit=500');
    var data = await res.json();
    if (!data.ok) throw new Error(data.error || 'API error');
    allLeads = data.leads || [];
    updateStats();
    renderTable();
    document.getElementById('last-updated').textContent =
      'Last refreshed ' + new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  } catch(e) {
    document.getElementById('leads-body').innerHTML =
      '<tr class="loading-row"><td colspan="7">⚠ Failed to load: ' + escH(String(e)) + '</td></tr>';
  }
}

// = Stats =
function updateStats() {
  var assessments = allLeads.filter(function(l){ return l.source === 'assessment'; });
  var contacts    = allLeads.filter(function(l){ return l.source === 'contact-form'; });
  var council     = allLeads.filter(function(l){ return l.source === 'founders-council'; });
  var pdfs        = allLeads.filter(function(l){ return l.source === 'pdf-gate'; });
  var scores      = assessments.map(function(l){ return Number(l.score); }).filter(function(s){ return s > 0; });
  var avg         = scores.length ? Math.round(scores.reduce(function(a,b){ return a+b; }, 0) / scores.length) : '—';

  document.getElementById('stat-total').textContent      = allLeads.length;
  document.getElementById('stat-assessment').textContent = assessments.length;
  document.getElementById('stat-contact').textContent    = contacts.length + council.length;
  document.getElementById('stat-pdf').textContent        = pdfs.length;
  document.getElementById('stat-avg-score').textContent  = avg + (typeof avg === 'number' ? '' : '');
}

// = Filter =
function setFilter(val, btn) {
  activeFilter = val;
  document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  expandedId = null;
  renderTable();
}

// = Sort =
function sortBy(col) {
  if (sortCol === col) { sortDir *= -1; }
  else { sortCol = col; sortDir = col === 'captured_at' ? -1 : 1; }
  document.querySelectorAll('th').forEach(function(th){ th.classList.remove('sorted'); });
  renderTable();
}

// = Render =
function renderTable() {
  var q = (document.getElementById('search-input').value || '').toLowerCase();

  var filtered = allLeads.filter(function(l) {
    if (activeFilter !== 'all' && l.source !== activeFilter) return false;
    if (!q) return true;
    return [l.name, l.email, l.company, l.first_name, l.last_name]
      .filter(Boolean).some(function(v){ return String(v).toLowerCase().includes(q); });
  });

  // Sort
  filtered.sort(function(a, b) {
    var av = a[sortCol] || '';
    var bv = b[sortCol] || '';
    if (sortCol === 'score') { av = Number(av) || 0; bv = Number(bv) || 0; }
    if (sortCol === 'captured_at') {
      av = new Date(av).getTime() || 0;
      bv = new Date(bv).getTime() || 0;
    }
    if (av < bv) return -1 * sortDir;
    if (av > bv) return  1 * sortDir;
    return 0;
  });

  document.getElementById('table-count').textContent =
    filtered.length + ' lead' + (filtered.length !== 1 ? 's' : '') +
    (activeFilter !== 'all' ? ' (' + activeFilter + ')' : '');

  if (!filtered.length) {
    document.getElementById('leads-body').innerHTML =
      '<tr><td colspan="7"><div class="empty-state">' +
      '<div class="empty-icon">📭</div>' +
      '<div class="empty-title">' + (allLeads.length ? 'No matches' : 'No leads yet') + '</div>' +
      '<div class="empty-sub">' + (allLeads.length ? 'Try clearing the search or filter.' : 'Leads will appear here as visitors submit forms.') + '</div>' +
      '</div></td></tr>';
    return;
  }

  var rows = '';
  filtered.forEach(function(lead) {
    var id      = lead.id || '';
    var name    = escH(lead.name || ((lead.first_name || '') + ' ' + (lead.last_name || '')).trim() || '—');
    var email   = escH(lead.email || '');
    var company = escH(lead.company || '—');
    var score   = lead.score ? Number(lead.score) : null;
    var date    = lead.captured_at ? formatDate(lead.captured_at) : (lead.submitted_at || '—');
    var isOpen  = expandedId === id;

    rows += '<tr onclick="toggleDetail(this.dataset.id)" data-id="' + escAttr(id) + '" style="cursor:pointer;">' +
      '<td class="td-name">' + name + '</td>' +
      '<td class="td-email">' + (email ? '<a href="mailto:' + email + '" onclick="event.stopPropagation()">' + email + '</a>' : '—') + '</td>' +
      '<td class="td-company">' + company + '</td>' +
      '<td class="td-source">' + sourceBadge(lead.source) + '</td>' +
      '<td class="td-score">' + (score !== null ? scorePill(score) : '<span style="color:var(--g4)">—</span>') + '</td>' +
      '<td class="td-date">' + date + '</td>' +
      '<td style="text-align:right;padding-right:16px;color:var(--g4);font-size:12px;">' + (isOpen ? '▲' : '▼') + '</td>' +
    '</tr>';

    // Detail row
    rows += '<tr class="detail-row' + (isOpen ? '' : ' hidden') + '" id="detail-' + escAttr(id) + '">' +
      '<td colspan="7"><div class="detail-inner">' +
      buildDetailFields(lead) +
      '</div></td></tr>';
  });

  document.getElementById('leads-body').innerHTML = rows;
}

function toggleDetail(id) {
  expandedId = (expandedId === id) ? null : id;
  renderTable();
}

// = Detail fields =
function buildDetailFields(l) {
  var fields = [];

  // Always show these
  if (l.email)   fields.push(['Email',   '<a href="mailto:' + escH(l.email) + '">' + escH(l.email) + '</a>']);
  if (l.phone)   fields.push(['Phone',   '<a href="tel:' + escH(l.phone) + '">' + escH(l.phone) + '</a>']);
  if (l.company) fields.push(['Company', escH(l.company)]);
  if (l.role)    fields.push(['Role',    escH(l.role)]);
  if (l.title)   fields.push(['Title',   escH(l.title)]);
  if (l.website) fields.push(['Website', '<a href="' + escH(l.website.startsWith('http') ? l.website : 'https://'+l.website) + '" target="_blank">' + escH(l.website) + '</a>']);

  // Assessment-specific
  if (l.score)           fields.push(['Score',          '<strong>' + escH(String(l.score)) + '</strong> / 100']);
  if (l.stage_badge)     fields.push(['Stage',          escH(l.stage_badge)]);
  if (l.bottleneck_count) fields.push(['Bottlenecks',   escH(String(l.bottleneck_count)) + ' identified']);
  if (l.bottleneck_titles && l.bottleneck_titles.length)
    fields.push(['Bottleneck Areas', l.bottleneck_titles.map(function(t){ return escH(t); }).join('<br>')]);

  // Council/contact
  if (l.revenue)     fields.push(['Revenue',     escH(l.revenue)]);
  if (l.team_size)   fields.push(['Team Size',   escH(l.team_size)]);
  if (l.solution)    fields.push(['Solution',    escH(l.solution)]);
  if (l.challenge)   fields.push(['Challenge',   escH(l.challenge)]);
  if (l.why)         fields.push(['Why Join',    escH(l.why)]);
  if (l.contribute)  fields.push(['Contribution',escH(l.contribute)]);

  // PDF gate
  if (l.pdf_name)    fields.push(['PDF',         escH(l.pdf_name)]);
  if (l.goal)        fields.push(['Goal',        escH(l.goal)]);

  // Attribution
  if (l.utm_source)   fields.push(['UTM Source',   escH(l.utm_source)]);
  if (l.utm_medium)   fields.push(['UTM Medium',   escH(l.utm_medium)]);
  if (l.utm_campaign) fields.push(['UTM Campaign', escH(l.utm_campaign)]);
  if (l.referrer)     fields.push(['Referrer',     escH(l.referrer)]);
  if (l.landing_page) fields.push(['Landing Page', escH(l.landing_page)]);

  // Source + date always last
  fields.push(['Source',    sourceBadge(l.source)]);
  fields.push(['Captured',  escH(l.captured_at ? new Date(l.captured_at).toLocaleString('en-US', {timeZone:'America/New_York',dateStyle:'medium',timeStyle:'short'}) + ' ET' : (l.submitted_at || '—'))]);

  var html = fields.map(function(f) {
    return '<div class="detail-field">' +
      '<div class="detail-field-label">' + f[0] + '</div>' +
      '<div class="detail-field-value">' + f[1] + '</div>' +
    '</div>';
  }).join('');

  // Action buttons
  var name = escH(l.name || ((l.first_name||'') + ' ' + (l.last_name||'')).trim() || '');
  var email = l.email || '';
  var company = l.company || '';
  var firstName = l.first_name || (l.name || '').split(' ')[0] || '';
  var lastName  = l.last_name  || (l.name || '').split(' ').slice(1).join(' ') || '';

  var hsUrl = 'https://app.hubspot.com/contacts/new?' +
    'email=' + encodeURIComponent(email) +
    '&firstname=' + encodeURIComponent(firstName) +
    '&lastname=' + encodeURIComponent(lastName) +
    '&company=' + encodeURIComponent(company);

  html += '<div class="detail-actions">' +
    (email ? '<a class="detail-btn detail-btn-email" href="mailto:' + escH(email) + '" onclick="event.stopPropagation()">✉ Reply to ' + escH(firstName || name) + '</a>' : '') +
    '<a class="detail-btn detail-btn-hs" href="' + escH(hsUrl) + '" target="_blank" onclick="event.stopPropagation()">➕ Add to HubSpot</a>' +
  '</div>';

  return html;
}

// = Export CSV =
function exportCSV() {
  if (!allLeads.length) { toast('No leads to export'); return; }
  var cols = ['id','source','captured_at','name','email','company','role','title',
              'phone','score','stage_badge','utm_source','utm_medium','utm_campaign',
              'referrer','landing_page','pdf_name','revenue','team_size'];
  var rows = [cols.join(',')];
  allLeads.forEach(function(l) {
    var n = l.name || ((l.first_name||'') + ' ' + (l.last_name||'')).trim();
    var r = cols.map(function(c) {
      var v = c === 'name' ? n : (l[c] !== undefined ? String(l[c]) : '');
      return '"' + v.replace(/"/g, '""') + '"';
    });
    rows.push(r.join(','));
  });
  var blob = new Blob([rows.join('\\n')], { type: 'text/csv' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href   = url;
  a.download = 'metagrowth-leads-' + new Date().toISOString().slice(0,10) + '.csv';
  a.click();
  URL.revokeObjectURL(url);
  toast('✓ CSV exported');
}

// = Helpers =
function sourceBadge(src) {
  var map = {
    'assessment':      ['badge-assessment', 'Assessment'],
    'contact-form':    ['badge-contact',    'Contact'],
    'founders-council':['badge-council',    'Council'],
    'pdf-gate':        ['badge-pdf',        'PDF Download'],
  };
  var m = map[src] || ['', src || '?'];
  return '<span class="badge ' + m[0] + '">' + m[1] + '</span>';
}

function scorePill(score) {
  var cls = score <= 30 ? 'score-0' : score <= 50 ? 'score-1' : score <= 70 ? 'score-2' : 'score-3';
  return '<span class="score-pill ' + cls + '">' + score + '</span>';
}

function formatDate(iso) {
  try {
    var d = new Date(iso);
    return d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
  } catch(e) { return iso; }
}

function escH(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(s) {
  return String(s||'').replace(/'/g,"\\'").replace(/"/g,'&quot;');
}

function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 3000);
}

// = Boot =
if (localStorage.getItem(AUTH_KEY) === '1') {
  initDashboard();
}
</script>
</body>
</html>`
