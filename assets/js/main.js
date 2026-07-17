// Vardir — splash lifecycle, mobile menu, project toggle.

(function () {
  'use strict';

  // ── Splash ────────────────────────────────────────────────────────────────
  // The <html class="splash"> flag is set by an inline <head> script before
  // paint (once per session, skipped for reduced motion). Here we just end it:
  // fade out after the reveal finishes, or immediately on click/Escape.
  var splash = document.getElementById('splash');
  var html = document.documentElement;

  function endSplash() {
    if (!splash || splash.classList.contains('splash-out')) return;
    splash.classList.add('splash-out');
    setTimeout(function () {
      html.classList.remove('splash');
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 500);
  }

  if (html.classList.contains('splash') && splash) {
    var timer = setTimeout(endSplash, 2700);
    splash.addEventListener('click', function () { clearTimeout(timer); endSplash(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Enter') { clearTimeout(timer); endSplash(); }
    });
  } else if (splash && splash.parentNode) {
    splash.parentNode.removeChild(splash);
  }

  // ── Mobile menu ───────────────────────────────────────────────────────────
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 860) {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Show more projects ────────────────────────────────────────────────────
  var toggle = document.getElementById('projectsToggle');
  var more = document.getElementById('moreProjects');

  if (toggle && more) {
    toggle.addEventListener('click', function () {
      var open = more.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Vis færre prosjekter' : 'Vis flere prosjekter (6)';
    });
  }
})();
