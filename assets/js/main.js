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

  // Expandable Image Lightbox Modal
  const modal = document.createElement('div');
  modal.className = 'image-modal-overlay';
  modal.innerHTML = `
    <button class="image-modal-close" aria-label="Close image popup">&times;</button>
    <img src="" alt="" class="image-modal-content">
    <div class="image-modal-caption"></div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.image-modal-content');
  const modalCaption = modal.querySelector('.image-modal-caption');
  const modalClose = modal.querySelector('.image-modal-close');

  const openModal = (src, alt, captionText) => {
    modalImg.src = src;
    modalImg.alt = alt || '';
    modalCaption.textContent = captionText || alt || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach click to all about images and gallery photos
  const clickableImgs = document.querySelectorAll('.about-img, .gallery-img, .facility-photo-img');
  clickableImgs.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      let caption = '';
      const parentCard = img.closest('.about-image-card, .gallery-item, .facility-photo-card');
      if (parentCard) {
        const capEl = parentCard.querySelector('.img-caption, .gallery-overlay, .facility-photo-caption');
        if (capEl) caption = capEl.innerText.trim();
      }
      openModal(img.src, img.alt, caption);
    });
  });
});
