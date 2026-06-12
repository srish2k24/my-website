// ─── ICONS ───────────────────────────────────────────────────────────────────
const icons = {
  mechanical: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
  electrical:  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  plc:         `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 7h2v4H7zM11 7h2v2h-2zM15 7h2v4h-2z"/></svg>`,
  instrument:  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  electronics: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12H2M22 12h-3M12 5V2M12 22v-3"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 2.1 2.1M16.9 16.9l2.1 2.1M19.1 4.9l-2.1 2.1M7.1 16.9l-2.1 2.1"/></svg>`,
  preEmp:      `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  postEmp:     `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 14 19.79 19.79 0 0 1 1.08 5.38 2 2 0 0 1 3.06 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  ecbs:        `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  soe:         `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  e4:          `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  request:     `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1c3144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  wip:         `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2e5077" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  content:     `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2e5077" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
};

const arrowRight = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
const arrowLeft  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;

// ─── ROUTE STATE ─────────────────────────────────────────────────────────────
let history = [];

function navigate(page) {
  history.push(page);
  render(page);
}

function goBack() {
  history.pop();
  const prev = history[history.length - 1] || 'home';
  history.pop();
  navigate(prev);
}

function goHome() {
  history = [];
  navigate('home');
}

// ─── PAGE LABEL MAP ───────────────────────────────────────────────────────────
const pageLabels = {
  home:        'Home',
  mechanical:  'Mechanical',
  electrical:  'Electrical',
  plc:         'PLC',
  instrument:  'Instrumentation',
  electronics: 'Electronics & Comm',
  preEmp:      'Pre Employment',
  postEmp:     'Post Employment',
  ecbs:        'ECBS',
  soe:         'SOE',
  e4:          'E4',
  request:     'Request',
};

// ─── BREADCRUMB ───────────────────────────────────────────────────────────────
const pagePaths = {
  home:        ['home'],
  mechanical:  ['home', 'mechanical'],
  electrical:  ['home', 'electrical'],
  plc:         ['home', 'electrical', 'plc'],
  instrument:  ['home', 'electrical', 'instrument'],
  electronics: ['home', 'electrical', 'electronics'],
  preEmp:      ['home', 'electrical', 'plc', 'preEmp'],
  postEmp:     ['home', 'electrical', 'plc', 'postEmp'],
  ecbs:        ['home', 'electrical', 'plc', 'postEmp', 'ecbs'],
  soe:         ['home', 'electrical', 'plc', 'postEmp', 'soe'],
  e4:          ['home', 'electrical', 'plc', 'postEmp', 'e4'],
  request:     ['home', 'electrical', 'plc', 'postEmp', 'request'],
};

function buildBreadcrumb(page) {
  const crumbs = pagePaths[page] || ['home'];
  return crumbs.map((p, i) => {
    const isLast = i === crumbs.length - 1;
    if (isLast) {
      return `<span class="breadcrumb-current">${pageLabels[p]}</span>`;
    }
    return `<span class="breadcrumb-item" onclick="navigate('${p}')">${pageLabels[p]}</span><span class="breadcrumb-sep">›</span>`;
  }).join('');
}

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
function hero(page, subtitle = '') {
  return `
    <div class="page-hero">
      <div class="page-hero-inner">
        <nav class="breadcrumb">${buildBreadcrumb(page)}</nav>
        <h1 class="page-title">${pageLabels[page]}</h1>
        ${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ''}
      </div>
    </div>`;
}

function backBtn(label = 'Back') {
  return `<button class="btn-back" onclick="goBack()">${arrowLeft} ${label}</button>`;
}

function card(page, iconKey, desc) {
  return `
    <div class="nav-card" onclick="navigate('${page}')">
      <div class="card-icon">${icons[iconKey]}</div>
      <div>
        <div class="card-label">${pageLabels[page]}</div>
        <div class="card-desc">${desc}</div>
      </div>
      <div class="card-arrow">Open ${arrowRight}</div>
    </div>`;
}

// ─── WIP PAGE TEMPLATE ────────────────────────────────────────────────────────
function wipPage(page, subtitle = '') {
  return `
    ${hero(page, subtitle)}
    <main class="main page-enter">
      ${backBtn()}
      <div class="content-card">
        <div class="wip-icon">${icons.wip}</div>
        <div class="wip-badge">⚙ Under Construction</div>
        <p class="wip-title">${pageLabels[page]}</p>
        <p class="wip-msg">This section is being developed. Check back soon for updated training materials and documentation.</p>
      </div>
    </main>`;
}

// ─── CONTENT PAGE TEMPLATE ────────────────────────────────────────────────────
function contentPage(page, subtitle = '') {
  return `
    ${hero(page, subtitle)}
    <main class="main page-enter">
      ${backBtn()}
      <div class="content-card">
        <div class="wip-icon">${icons.content}</div>
        <p class="wip-title">${pageLabels[page]}</p>
        <p class="wip-msg">Content will be added here.</p>
      </div>
    </main>`;
}

// ─── PAGE DEFINITIONS ─────────────────────────────────────────────────────────
const pages = {

  home: () => `
    <div class="page-hero" style="padding-bottom:2.5rem">
      <div class="page-hero-inner">
        <p class="page-subtitle" style="margin-bottom:.5rem">Operations Portal</p>
        <h1 class="page-title" style="font-size:clamp(2.5rem,7vw,4.2rem)">Maintenance</h1>
      </div>
    </div>
    <main class="main page-enter">
      <p class="section-label">Select Department</p>
      <div class="card-grid card-grid--2">
        ${card('mechanical', 'mechanical', 'Mechanical systems, equipment upkeep, and preventive maintenance workflows.')}
        ${card('electrical', 'electrical', 'Electrical systems, PLC programming, instrumentation, and control engineering.')}
      </div>
    </main>`,

  mechanical: () => wipPage('mechanical', 'Mechanical Systems'),

  electrical: () => `
    ${hero('electrical', 'Electrical Systems')}
    <main class="main page-enter">
      ${backBtn()}
      <p class="section-label" style="margin-top:1.5rem">Select Discipline</p>
      <div class="card-grid card-grid--3">
        ${card('plc',         'plc',         'Programmable Logic Controllers — training, configuration, and diagnostics.')}
        ${card('instrument',  'instrument',  'Process instrumentation, calibration, and measurement systems.')}
        ${card('electronics', 'electronics', 'Electronics & communication systems and signal engineering.')}
      </div>
    </main>`,

  plc: () => `
    ${hero('plc', 'Programmable Logic Controllers')}
    <main class="main page-enter">
      ${backBtn()}
      <p class="section-label" style="margin-top:1.5rem">Training Stage</p>
      <div class="card-grid card-grid--2">
        ${card('preEmp',  'preEmp',  'Foundation training for candidates preparing to join the department.')}
        ${card('postEmp', 'postEmp', 'Advanced modules and operational resources for current employees.')}
      </div>
    </main>`,

  instrument:  () => wipPage('instrument',  'Process Instrumentation'),
  electronics: () => wipPage('electronics', 'Electronics & Communication'),
  preEmp:      () => wipPage('preEmp',      'Foundation Training'),

  postEmp: () => `
    ${hero('postEmp', 'Advanced Operational Modules')}
    <main class="main page-enter">
      ${backBtn()}
      <p class="section-label" style="margin-top:1.5rem">Select Module</p>
      <div class="card-grid card-grid--4">
        ${card('ecbs',    'ecbs',    'Enterprise Control & Business Systems integration and reference.')}
        ${card('soe',     'soe',     'Sequence of Events logging, analysis, and reporting tools.')}
        ${card('e4',      'e4',      'E4 operational guidelines, schematics, and procedures.')}
        ${card('request', 'request', 'Submit and track maintenance service requests.')}
      </div>
    </main>`,

  ecbs:    () => contentPage('ecbs',    'Enterprise Control & Business Systems'),
  soe:     () => contentPage('soe',     'Sequence of Events'),
  e4:      () => contentPage('e4',      'E4 Module'),
  request: () => contentPage('request', 'Service Requests'),
};

// ─── RENDERER ─────────────────────────────────────────────────────────────────
function render(page) {
  const fn = pages[page] || pages.home;
  document.getElementById('view').innerHTML = fn();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
navigate('home');
