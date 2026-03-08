/**
 * CONFIG.JS - Configuración de Alterna Medios
 * Usa este archivo para personalizar fácilmente el sitio
 */

const ALTERNA_CONFIG = {
  // Información del sitio
  site: {
    title: 'Alterna Medios',
    description: 'Radio y TV Alternativa',
    url: 'https://alterna.ar',
    location: 'Miramar, Buenos Aires, Argentina'
  },

  // Plataformas
  platforms: [
    {
      id: 'radio',
      name: 'Alterna Radio',
      description: 'FM 88.1 MHz',
      text: 'Rock, cultura alternativa y actualidad en vivo',
      url: 'https://radio.alterna.ar',
      type: 'radio'
    },
    {
      id: 'tv',
      name: 'Alterna TV',
      description: 'Streaming en vivo',
      text: 'Cobertura multimedia de la actualidad alternativa',
      url: 'https://tv.alterna.ar',
      type: 'tv'
    }
  ],

  // Colores personalizados
  colors: {
    primary: '#d20000',    // Rojo principal (radio)
    secondary: '#ff3b30',  // Rojo secundario (tv)
    background: '#0a0a0a',
    text: 'rgba(255, 255, 255, 0.95)',
    textMuted: 'rgba(255, 255, 255, 0.65)',
    border: 'rgba(255, 255, 255, 0.08)'
  },

  // Redes sociales
  social: {
    facebook: 'https://facebook.com/alternamedios',
    instagram: 'https://instagram.com/alternamedios',
    twitter: 'https://twitter.com/alternamedios',
    youtube: 'https://youtube.com/@alternamedios',
    tiktok: 'https://tiktok.com/@alternamedios'
  },

  // Contenido personalizable
  content: {
    about: {
      radio: {
        title: 'Alterna Radio',
        description: 'Somos una radio comunitaria de rock y cultura alternativa. Transmitimos en FM 88.1 MHz desde Miramar, Buenos Aires, ofreciendo programación dedicada a la música alternativa, entrevistas y análisis de actualidad con una perspectiva crítica y diferente.'
      },
      tv: {
        title: 'Alterna TV',
        description: 'Nuestro canal de televisión ofrece cobertura multimedia de la actualidad alternativa. Desde documentales hasta programas especiales, transmitimos en vivo contenidos comprometidos con la cultura, el arte y el análisis crítico de la realidad social.'
      },
      mission: 'Alterna Medios es la convergencia de dos plataformas con un mismo objetivo: brindar una alternativa real a los medios convencionales. Creemos en el poder de la comunicación comunitaria, en la importancia de amplificar voces silenciadas y en la responsabilidad social de los medios.',
      values: 'Desde nuestra base en Miramar, Buenos Aires, trabajamos para ofrecer una programación de calidad que respete la inteligencia de nuestra audiencia y que se comprometa con la verdad y la justicia social.'
    }
  },

  // Contacto
  contact: {
    email: 'contacto@alterna.ar',
    phone: '+54 (XXX) XXXX-XXXX',
    location: 'Miramar, Buenos Aires, Argentina',
    timezone: 'America/Argentina/Buenos_Aires'
  },

  // Opciones de animación
  animation: {
    enabled: true,
    reduceMotion: false,
    duration: 300  // ms
  },

  // Analytics (opcional)
  analytics: {
    googleAnalyticsId: 'UA-XXXXXXXXX-X',
    hotjarId: null
  }
};

// Exportar para uso modular (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ALTERNA_CONFIG;
}

