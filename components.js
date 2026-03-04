/* ==========================================
   The AI Minimalist — Components
   ========================================== */

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

    if (overlayClose) {
      overlayClose.addEventListener('click', closeOverlay);
    }

    overlayLinks.forEach(link => {
      link.addEventListener('click', closeOverlay);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeOverlay();
      }
    });
  }

  // Mark active nav link
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-links a');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile ||
        (currentFile === '' && href === 'index.html') ||
        (currentFile === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── FORMS ──
function initForms() {
  const forms = document.querySelectorAll('[data-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value.trim() : '';
      const formId = form.getAttribute('data-form');
      const confirmEl = document.getElementById(formId + '-confirm');
      const formEl = document.getElementById(formId + '-form');

      if (!email) return;

      // Copy email to clipboard for manual CRM entry
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).catch(() => {});
      }

      // Fade out form, show confirmation
      const target = formEl || form;
      target.style.opacity = '0';
      target.style.transition = 'opacity 200ms ease';

      setTimeout(() => {
        target.style.display = 'none';
        if (confirmEl) {
          confirmEl.classList.add('visible');
          confirmEl.style.opacity = '0';
          confirmEl.style.transition = 'opacity 200ms ease';
          requestAnimationFrame(() => {
            confirmEl.style.opacity = '1';
          });
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

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  if (qualifierForm) {
    qualifierForm.addEventListener('submit', (e) => {
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
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 24;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initForms();
  initQualifier();
  initScrollAnchors();
});
