/* ================================================================
   sidebar.js — 侧边栏构建、导航、下拉菜单
   ================================================================ */

const PAGE_PATHS = {
  '': { nav: 'home', label: '首页' },
  '': { nav: 'tool', label: '工具' },
};

const HOME_HASHES = {
  'home': { nav: 'home' },
  'about': { nav: 'about' },
  'changelog': { nav: 'changelog' },
};

const TOOL_HASHES = {
  'python': { nav: 'python', parent: 'compile' },
  'php': { nav: 'php', parent: 'compile' },
  'typescript': { nav: 'typescript', parent: 'compile' },
  'html': { nav: 'html', parent: 'editor' },
  'css': { nav: 'css', parent: 'editor' },
  'javascript': { nav: 'javascript', parent: 'editor' },
  'markdown': { nav: 'markdown', parent: 'editor' },
  'css-fmt': { nav: 'css-fmt', parent: 'frontend' },
  'base64': { nav: 'base64', parent: 'frontend' },
  'color': { nav: 'color', parent: 'frontend' },
};

function currentFileName() {
  const p = window.location.pathname;
  return p.substring(p.lastIndexOf('/') + 1) || '';
}

function siteBase() {
  return '';
}

/* ---------- 生成 Sidebar ---------- */
function buildSidebar() {
  const cur = currentFileName();
  const hash = (cur === '' || cur === '') ? window.location.hash.slice(1) : '';
  let info;
  if (cur === 'tool' && hash && TOOL_HASHES[hash]) {
    info = TOOL_HASHES[hash];
  } else if (cur === '' && hash && HOME_HASHES[hash]) {
    info = HOME_HASHES[hash];
  } else {
    info = PAGE_PATHS[cur] || {};
  }
  const base = siteBase();
  const isNav = (name) => info.nav === name ? 'active' : '';
  const isParent = (name) => info.parent === name ? 'active' : '';

  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-top">
        <button type="button" class="sidebar-logo" data-nav="#home">
          <span class="logo-mark">&lt;/&gt;</span>
          <span class="logo-name">Portfolio</span>
        </button>
      </div>
      <nav class="sidebar-nav">
        <button type="button" class="sidebar-link ${isNav('home')}" data-nav="#home">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          <span>首页</span>
        </button>
        <button type="button" class="sidebar-link ${isNav('about')}" data-nav="#about">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span>关于</span>
        </button>
        <button type="button" class="sidebar-link ${isNav('changelog')}" data-nav="#changelog">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
          <span>更新日志</span>
        </button>
        <div class="sidebar-dropdown open" id="dropdownCompile">
          <button type="button" class="sidebar-link sidebar-dropdown-toggle ${isParent('compile')}" data-dropdown="compile">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 4H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4"/><path d="M18 2l4 4-4 4"/><path d="M22 6H10"/><path d="M12 14v6M9 17h6"/></svg>
            <span>编译工具</span>
            <svg class="dropdown-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="sidebar-dropdown-menu">
            <button type="button" class="sidebar-sublink ${isNav('php')}" data-nav="//devup5.github.io/tools#php">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="5"/><path d="M7 12a2 2 0 012-2h2"/></svg>
              <span>PHP 运行</span>
            </button>
            <button type="button" class="sidebar-sublink ${isNav('typescript')}" data-nav="//devup5.github.io/tools#typescript">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V8H7M13 17c.5.5 2 .5 2.5 0M9 12h5"/></svg>
              <span>TypeScript 运行</span>
            </button>
            <button type="button" class="sidebar-sublink ${isNav('python')}" data-nav="//devup5.github.io/tools#python">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 8c0-1.5 1.5-2 3-2s3 .5 3 2-1 2-3 2-3-.5-3-2z"/><path d="M10 14c1.5 0 3-.5 3-2s-1.5-2-3-2-3 .5-3 2 1.5 2 3 2z"/></svg>
              <span>Python 运行</span>
            </button>
          </div>
        </div>
        <div class="sidebar-dropdown open" id="dropdownEditor">
          <button type="button" class="sidebar-link sidebar-dropdown-toggle ${isParent('editor')}" data-dropdown="editor">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            <span>前端编辑器</span>
            <svg class="dropdown-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="sidebar-dropdown-menu">
            <button type="button" class="sidebar-sublink ${isNav('html')}" data-nav="//devup5.github.io/tools#html">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <span>HTML</span>
            </button>
            <button type="button" class="sidebar-sublink ${isNav('css')}" data-nav="//devup5.github.io/tools#css">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="
            <button type="button" class="sidebar-sublink ${isNav('javascript')}" data-nav="//devup5.github.io/tools#javascript">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7v10c0 5.52 4.48 10 10 10s10-4.48 10-10V7L12 2z"/></svg>
              <span>JavaScript</span>
            </button>
            <button type="button" class="sidebar-sublink ${isNav('markdown')}" data-nav="//devup5.github.io/tools#markdown">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM7 15l3-3 2 2 3-4 2 5"/></svg>
              <span>Markdown</span>
            </button>
          </div>
        </div>
        <div class="sidebar-dropdown open" id="dropdownFrontend">
          <button type="button" class="sidebar-link sidebar-dropdown-toggle ${isParent('frontend')}" data-dropdown="frontend">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
            <span>前端工具</span>
            <svg class="dropdown-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="sidebar-dropdown-menu">
            <button type="button" class="sidebar-sublink ${isNav('css-fmt')}" data-nav="//devup5.github.io/tools#css-fmt">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h16"/></svg>
              <span>CSS 格式化/压缩</span>
            </button>
            <button type="button" class="sidebar-sublink ${isNav('base64')}" data-nav="//devup5.github.io/tools#base64">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z"/><path d="M7 7h.01M7 13h.01M7 19h.01"/></svg>
              <span>Base64 编码/解码</span>
            </button>
          </div>
        </div>
      </nav>
      <div class="sidebar-bottom">
        <div class="sidebar-links">
          <button class="sidebar-icon-btn sidebar-theme" id="themeBtn" aria-label="切换主题" title="切换主题">
            <svg class="ic-sun" viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="5" fill="currentColor"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <svg class="ic-moon" viewBox="0 0 24 24" width="18" height="18"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>
          </button>
          <button type="button" class="sidebar-icon-btn" id="footerSettings" title="设置">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          </button>
          <button type="button" class="sidebar-icon-btn" data-nav="//devup5.github.io/home#about" title="关于我">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </button>
        </div>
        <p class="sidebar-copy">© 2026 devup5.github.io</p>
      </div>
      <button class="sidebar-burger" id="burger" aria-label="关闭菜单">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </aside>
    <button class="sidebar-open-btn" id="sidebarOpen" aria-label="打开菜单">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
    </button>`;
}

/* ---------- 导航 ---------- */
function initNavigation() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const path = el.dataset.nav;
      if (path) navigateTo(path);
    });
  });
}

function navigateTo(path) {
  // If on tool.html and switching to another tool, just change the hash
  var hashPos = path.indexOf('#');
  if (hashPos > 0) {
    var basePart = path.substring(0, hashPos);
    var hashPart = path.substring(hashPos + 1);
    if (currentFileName() === basePart) {
      window.location.hash = hashPart;
      return;
    }
  }

  const base = siteBase();
  const url = base + path;

  var bar = document.getElementById('loadingBar');
  var progress = bar ? bar.querySelector('.loading-bar-progress') : null;
  if (bar && progress) {
    bar.classList.remove('done');
    progress.style.transition = 'none';
    progress.style.width = '0%';
    requestAnimationFrame(function() {
      progress.style.transition = 'width 0.6s ease';
      progress.style.width = '90%';
    });
  }

  var settled = false;
  function go() {
    if (settled) return;
    settled = true;
    if (progress) {
      progress.style.width = '100%';
      setTimeout(function() { if (bar) bar.classList.add('done'); }, 200);
    }
    window.location.href = url;
  }

  setTimeout(go, 8000);

  try {
    fetch(url).then(go, go);
  } catch(e) {
    go();
  }
}

/* ---------- 侧边栏开关 ---------- */
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const burger = document.getElementById('burger');
  const openBtn = document.getElementById('sidebarOpen');
  if (burger) burger.addEventListener('click', () => sidebar.classList.remove('open'));
  if (openBtn) openBtn.addEventListener('click', () => sidebar.classList.add('open'));
}

/* ---------- 下拉菜单 ---------- */
function initDropdowns() {
  document.querySelectorAll('.sidebar-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dropdown = toggle.closest('.sidebar-dropdown');
      dropdown.classList.toggle('open');
    });
  });
}

/* ---------- 首页 hash 变化时更新侧边栏高亮 ---------- */
function initHomeSidebarSync() {
  if (currentFileName() !== '//devup5.github.io/home') return;
  window.addEventListener('hashchange', function() {
    var hash = window.location.hash.slice(1);
    var nav = HOME_HASHES[hash] ? HOME_HASHES[hash].nav : 'home';
    document.querySelectorAll('.sidebar-link, .sidebar-sublink, .sidebar-dropdown-toggle').forEach(function(el) {
      el.classList.remove('active');
    });
    var link = document.querySelector('.sidebar-link[data-nav="//devup5.github.io/home#' + nav + '"]');
    if (link) link.classList.add('active');
  });
}
