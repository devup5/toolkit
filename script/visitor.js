/* ================================================================
   visitor.js — 访客模式脚本（仅在 blog/index.html 中引用）
   功能：右键禁止、快捷键禁止、顶部悬浮窗、侧边栏点击拦截
   ================================================================ */

(function () {
  'use strict';

  /* ---------- 顶部悬浮窗 ---------- */
  var toastTimer = null;

  function showToast(msg, duration) {
    var existing = document.getElementById('visitorToast');
    if (existing) existing.remove();
    if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }

    var toast = document.createElement('div');
    toast.id = 'visitorToast';
    toast.className = 'visitor-toast';
    toast.innerHTML = '<svg class="visitor-toast-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg><span class="visitor-toast-msg">' + msg + '</span>';
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('show');
    });

    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 400);
    }, duration || 3000);
  }

  window.visitorToast = showToast;

  /* ---------- 右键禁止 ---------- */
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, true);

  /* ---------- 快捷键禁止 ---------- */
  var BLOCKED_KEYS = {
    'F12': true,
    'Ctrl+U': true,
    'Ctrl+Shift+I': true,
    'Ctrl+Shift+J': true,
    'Ctrl+Shift+C': true,
    'Ctrl+S': true
  };

  document.addEventListener('keydown', function (e) {
    var key = e.key;
    var combo = '';
    if (e.ctrlKey || e.metaKey) combo += 'Ctrl+';
    if (e.shiftKey) combo += 'Shift+';
    combo += key;

    if (BLOCKED_KEYS[key] || BLOCKED_KEYS[combo]) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);

  /* ---------- 侧边栏点击拦截 ---------- */
  function interceptSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    sidebar.classList.add('visitor-sidebar-disabled');

    sidebar.addEventListener('click', function (e) {
      var target = e.target.closest('[data-nav]');
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();
      showToast('请<a href="//devup5.github.io/toolkit/home">返回主页</a>后重试', 3000);
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', interceptSidebar);
  } else {
    interceptSidebar();
  }
})();
