/**
 * Alterna Medios - App.js
 * Maneja interactividad y animaciones del sitio
 */

(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    // ===== Animaciones de scroll =====
    setupScrollAnimations();

    // ===== Smooth scroll para links internos =====
    setupSmoothScroll();

    // ===== Interactividad de navegación =====
    setupNavigation();
  });

  /**
   * Configura animaciones que se disparan al hacer scroll
   */
  function setupScrollAnimations() {
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
      card.style.transition = `opacity 600ms ease ${index * 100}ms, transform 600ms ease ${index * 100}ms`;
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
      item.style.transition = `opacity 500ms ease ${index * 80}ms, transform 500ms ease ${index * 80}ms`;
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
          behavior: 'smooth'
        });
      });
    });
  }

  /**
   * Configura interactividad de navegación
   */
  function setupNavigation() {
    const nav = document.querySelector('.site-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!nav || navLinks.length === 0) return;

    // Highlight del link activo según scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function () {
      let current = '';

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });

    // Añadir estilos para el estado activo
    const style = document.createElement('style');
    style.textContent = `
      .nav-link.active {
        color: var(--text);
      }
      
      .nav-link.active::after {
        width: 100%;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Añadir soporte para animaciones de movimiento del mouse en platform cards
   */
  function setupPlatformCards() {
    const cards = document.querySelectorAll('.platform-card');

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        // Efecto de perspectiva sutil
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        // Aplicar transformación sutil
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  ready(function () {
    setupPlatformCards();
  });

  /**
   * Performance: Lazy loading de imágenes
   */
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img.lazy').forEach(function (img) {
        imageObserver.observe(img);
      });
    }
  }

  ready(function () {
    setupLazyLoading();
  });

})();

