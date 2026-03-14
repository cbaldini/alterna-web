/**
 * Alternamedia - App.js
 * Maneja interactividad y animaciones del sitio
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    setupScrollAnimations();
    setupSmoothScroll();
    setupNavigation();
    setupPlatformCards();
    setupLazyLoading();
  });

  /**
   * Configura animaciones que se disparan al hacer scroll
   */
  function setupScrollAnimations() {
    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.about-card, .about-footer, .contact-item').forEach(function (element) {
        element.style.opacity = '1';
        element.style.transform = 'none';
        element.style.transition = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observar cards del About
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(function (card, index) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 600ms ease ' + (index * 100) + 'ms, transform 600ms ease ' + (index * 100) + 'ms';
      observer.observe(card);
    });

    // Observar el footer del about
    const aboutFooter = document.querySelector('.about-footer');
    if (aboutFooter) {
      aboutFooter.style.opacity = '0';
      aboutFooter.style.transform = 'translateY(30px)';
      aboutFooter.style.transition = 'opacity 600ms ease 300ms, transform 600ms ease 300ms';
      observer.observe(aboutFooter);
    }

    // Observar items de contacto
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(function (item, index) {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 500ms ease ' + (index * 80) + 'ms, transform 500ms ease ' + (index * 80) + 'ms';
      observer.observe(item);
    });
  }

  /**
   * Configura scroll suave para links internos
   */
  function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
        });
      });
    });
  }

  /**
   * Configura interactividad de navegación
   */
  function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (navLinks.length === 0 || sections.length === 0) return;

    let ticking = false;

    function updateActiveNav() {
      const scrollPosition = window.scrollY + 220;
      let current = '';

      sections.forEach(function (section) {
        if (scrollPosition >= section.offsetTop) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(function (link) {
        const isActive = link.getAttribute('href') === '#' + current;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveNav);
        ticking = true;
      }
    }, { passive: true });

    updateActiveNav();
  }

  /**
   * Añadir soporte para animaciones de movimiento del mouse en platform cards
   */
  function setupPlatformCards() {
    if (prefersReducedMotion.matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cards = document.querySelectorAll('.platform-card');

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 18;
        const rotateY = (centerX - x) / 18;

        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });

      card.addEventListener('blur', function () {
        card.style.transform = '';
      });
    });
  }

  /**
   * Performance: Lazy loading de imágenes
   */
  function setupLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    const lazyImages = document.querySelectorAll('img.lazy[data-src]');
    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function (img) {
      imageObserver.observe(img);
    });
  }
})();
