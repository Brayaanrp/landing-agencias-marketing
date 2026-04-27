// ===== EduKami — Radar de Oportunidad IA + UI Logic =====

(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const fmt = (n) => new Intl.NumberFormat('es-ES').format(Math.round(n));
  const fmtEur = (n) => fmt(n) + ' \u20AC';

  // --- Sector multipliers ---
  const SECTOR_MULT = {
    hosteleria: 0.95,
    retail: 1.00,
    profesionales: 1.18,
    inmobiliaria: 1.10,
    salud: 1.22,
    otros: 0.90,
  };

  // --- Contextual messages by result range ---
  const CONTEXT_MESSAGES = [
    { max: 50000, text: 'Incluso para agencias de tu tama\u00F1o, esta cifra puede cubrir varios meses de un empleado junior.' },
    { max: 150000, text: 'Esta cifra equivale a un empleado senior que no necesitas contratar.' },
    { max: Infinity, text: 'Tu agencia tiene un potencial de IA por encima de la media. Hablemos.' },
  ];

  // --- Animated number counter ---
  let animationFrame = null;
  let currentDisplayValue = 0;

  function animateValue(targetValue, duration) {
    if (animationFrame) cancelAnimationFrame(animationFrame);

    const startValue = currentDisplayValue;
    const range = targetValue - startValue;
    if (Math.abs(range) < 1) {
      currentDisplayValue = targetValue;
      $('result').textContent = fmtEur(targetValue);
      return;
    }

    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + range * eased);

      currentDisplayValue = current;
      $('result').textContent = fmtEur(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        currentDisplayValue = targetValue;
        $('result').textContent = fmtEur(targetValue);
        animationFrame = null;
      }
    }

    animationFrame = requestAnimationFrame(step);
  }

  // --- Slider fill (teal progress) ---
  function updateSliderFill(slider) {
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const pct = ((val - min) / (max - min)) * 100;
    slider.style.setProperty('--fill', pct + '%');
  }

  // --- Contextual message ---
  function updateContextMessage(value) {
    const msgEl = $('context-msg');
    if (!msgEl) return;

    const msg = CONTEXT_MESSAGES.find(m => value <= m.max);
    if (msg) {
      msgEl.textContent = msg.text;
      msgEl.classList.add('visible');
    }
  }

  // --- Main compute ---
  function compute() {
    const c = +$('clients').value;
    const t = +$('ticket').value;
    const sector = (document.querySelector('input[name=sector]:checked') || {}).value || 'retail';
    const mult = SECTOR_MULT[sector] || 1;

    // formula: clients x ticket x 0.25 x 12 x sector_multiplier
    const result = c * t * 0.25 * 12 * mult;

    // Update input displays
    $('clients-out').textContent = c;
    $('ticket-out').textContent = fmtEur(t);

    // Update breakdown
    $('b-clients').textContent = c;
    $('b-ticket').textContent = fmtEur(t);
    $('b-mult').textContent = mult.toFixed(2).replace(/\.?0+$/, '') + '\u00D7';

    // Animate result number
    animateValue(result, 500);

    // Contextual message
    updateContextMessage(result);

    // Update slider fills
    updateSliderFill($('clients'));
    updateSliderFill($('ticket'));

    // Persist state in URL hash
    updateURLState(c, t, sector);
  }

  // --- URL state persistence ---
  function updateURLState(c, t, s) {
    const params = new URLSearchParams({ c, t, s });
    const newHash = 'radar?' + params.toString();
    if (window.location.hash !== '#' + newHash) {
      history.replaceState(null, '', '#' + newHash);
    }
  }

  function restoreFromURL() {
    const hash = window.location.hash;
    if (!hash.startsWith('#radar?')) return false;

    try {
      const params = new URLSearchParams(hash.slice(7));
      const c = parseInt(params.get('c'));
      const t = parseInt(params.get('t'));
      const s = params.get('s');

      if (!isNaN(c) && c >= 5 && c <= 100) $('clients').value = c;
      if (!isNaN(t) && t >= 500 && t <= 5000) $('ticket').value = t;
      if (s && SECTOR_MULT[s]) {
        const radio = document.getElementById(
          { hosteleria: 's1', retail: 's2', profesionales: 's3', inmobiliaria: 's4', salud: 's5', otros: 's6' }[s]
        );
        if (radio) radio.checked = true;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  // --- Smooth scroll for anchor links ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        if (href === '#') return;
        var id = href.slice(1);
        // Strip query params if present (e.g. #radar?c=24...)
        var cleanId = id.split('?')[0];
        var el = document.getElementById(cleanId);
        if (!el) return;
        e.preventDefault();
        var top = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: top, behavior: 'smooth' });

        // Close mobile nav if open
        var navLinks = document.querySelector('.nav-links');
        var hamburger = document.querySelector('.nav-hamburger');
        var overlay = document.querySelector('.nav-overlay');
        if (navLinks) navLinks.classList.remove('open');
        if (hamburger) hamburger.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      });
    });
  }

  // --- Mobile hamburger menu ---
  function initMobileNav() {
    var hamburger = document.querySelector('.nav-hamburger');
    var navLinks = document.querySelector('.nav-links');
    var overlay = document.querySelector('.nav-overlay');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      if (overlay) overlay.classList.toggle('active', isOpen);
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    // Restore from URL if shared link
    restoreFromURL();

    // Bind calculator events
    ['clients', 'ticket'].forEach(function (id) {
      $(id).addEventListener('input', compute);
    });
    document.querySelectorAll('input[name=sector]').forEach(function (el) {
      el.addEventListener('change', compute);
    });

    // Initial compute (no animation for first load)
    var c = +$('clients').value;
    var t = +$('ticket').value;
    var sector = (document.querySelector('input[name=sector]:checked') || {}).value || 'retail';
    var mult = SECTOR_MULT[sector] || 1;
    var result = c * t * 0.25 * 12 * mult;
    currentDisplayValue = result;
    $('result').textContent = fmtEur(result);
    $('clients-out').textContent = c;
    $('ticket-out').textContent = fmtEur(t);
    $('b-clients').textContent = c;
    $('b-ticket').textContent = fmtEur(t);
    $('b-mult').textContent = mult.toFixed(2).replace(/\.?0+$/, '') + '\u00D7';
    updateSliderFill($('clients'));
    updateSliderFill($('ticket'));
    updateContextMessage(result);

    // Init UI
    initSmoothScroll();
    initMobileNav();
  });
})();
