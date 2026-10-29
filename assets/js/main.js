document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta-btn');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // Header scroll appearance
  const header = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
