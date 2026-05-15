/* ==========================================
   The AI Minimalist — Components
   ========================================== */

// ── CURSOR ──
function initCursor() {
  if (window.matchMedia('(pointer:coarse)').matches) return;

  let dot = document.getElementById('cur');
  let ring = document.getElementById('cur-ring');

  if (!dot) {
    dot = document.createElement('div');
    dot.id = 'cur';
    document.body.prepend(dot);
  }
  if (!ring) {
    ring = document.createElement('div');
    ring.id = 'cur-ring';
    document.body.prepend(ring);
  }

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function tick() {
    dot.style.transform = `translate(${mx}px,${my}px)`;
    rx += (mx - rx) * 0.2;
    ry += (my - ry) * 0.2;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);

  document.querySelectorAll('a,button,[role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

// ── NAVIGATION ──
function initNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const overlay = document.querySelector('.nav-overlay');
  const overlayClose = document.querySelector('.nav-overlay-close');
  const overlayLinks = document.querySelectorAll('.nav-overlay a');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      hamburger.setAttribute('aria-expanded', 'true');
    });

    function closeOverlay() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }

    if (overlayClose) overlayClose.addEventListener('click', closeOverlay);

    overlayLinks.forEach(link => link.addEventListener('click', closeOverlay));

    overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeOverlay();
    });
  }

  // Sticky nav on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('stuck', window.scrollY > 60);
    }, { passive: true });
  }

  // Mark active nav link
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── SCROLL REVEALS ──
function initScrollReveals() {
  const els = document.querySelectorAll('.r');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

// ── HERO PARALLAX ──
function initHeroParallax() {
  const headline = document.querySelector('.hero-headline');
  if (!headline || window.matchMedia('(pointer:coarse)').matches) return;

  let tx = 0, ty = 0, cx = 0, cy = 0;
  let raf;

  document.addEventListener('mousemove', e => {
    const nx = (e.clientX / window.innerWidth - 0.5);
    const ny = (e.clientY / window.innerHeight - 0.5);
    tx = nx * 14;
    ty = ny * 8;
  });

  function tick() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    headline.style.transform = `translate(${cx}px,${cy}px)`;
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);
}

// ── DASHBOARD TILT ──
function initDashboardTilt() {
  const card = document.querySelector('.dash-card');
  if (!card || window.matchMedia('(pointer:coarse)').matches) return;

  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${nx * 6}deg) rotateX(${-ny * 4}deg) scale(1.015)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
}

// ── FORMS ──
function initForms() {
  const forms = document.querySelectorAll('[data-form]');

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value.trim() : '';
      const formId = form.getAttribute('data-form');
      const confirmEl = document.getElementById(formId + '-confirm');
      const formEl = document.getElementById(formId + '-form');

      if (!email) return;

      if (navigator.clipboard) navigator.clipboard.writeText(email).catch(() => {});

      const target = formEl || form;
      target.style.opacity = '0';
      target.style.transition = 'opacity 200ms ease';

      setTimeout(() => {
        target.style.display = 'none';
        if (confirmEl) {
          confirmEl.classList.add('visible');
          confirmEl.style.opacity = '0';
          confirmEl.style.transition = 'opacity 200ms ease';
          requestAnimationFrame(() => { confirmEl.style.opacity = '1'; });
        }
      }, 200);
    });
  });
}

// ── QUALIFIER MODAL ──
function initQualifier() {
  const trigger = document.querySelector('[data-qualifier-open]');
  const modal = document.getElementById('qualifier-modal');
  const closeBtn = document.querySelector('[data-qualifier-close]');
  const qualifierForm = document.getElementById('qualifier-form');

  if (!trigger || !modal) return;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  trigger.addEventListener('click', e => { e.preventDefault(); openModal(); });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  if (qualifierForm) {
    qualifierForm.addEventListener('submit', e => {
      e.preventDefault();
      const confirmEl = document.getElementById('qualifier-confirm');
      qualifierForm.style.display = 'none';
      if (confirmEl) confirmEl.classList.add('visible');
    });
  }
}

// ── SCROLL ANCHOR ──
function initScrollAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 24;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initScrollReveals();
  initHeroParallax();
  initDashboardTilt();
  initForms();
  initQualifier();
  initScrollAnchors();
});
