# Alterna Medios - Portal Multimedia

Un sitio web profesional, moderno y responsivo que funciona como portal central para **Alterna Radio** y **Alterna TV**.

## 📋 Contenido

- **index.html** - Estructura HTML del sitio
- **style.css** - Estilos CSS modernos y responsivos
- **app.js** - Interactividad y animaciones
- **favicon.png** - Icono del sitio

## 🎨 Características

### Diseño
- ✅ Interfaz dark mode profesional
- ✅ Animaciones suaves y elegantes
- ✅ Fondo decorativo con gradientes retro traslúcidos
- ✅ Completamente responsivo (mobile-first)
- ✅ Accesible (WCAG 2.1)

### Secciones

1. **Header Sticky**
   - Logo Alterna con gradiente
   - Navegación clara y limpia
   - Diseño responsive con transiciones

2. **Hero Section**
   - Títulos grandes y atractivos
   - Grid de plataformas (Radio & TV)
   - Iconos SVG personalizados
   - CTA (Call To Action) prominente

3. **About Section**
   - Cards con información de Radio y TV
   - Descripción detallada del proyecto
   - Footer con misión y valores

4. **Contact Section**
   - Información de ubicación
   - Enlaces a redes sociales
   - Diseño limpio y profesional

5. **Footer**
   - Copyright y datos de ubicación
   - Enlaces a redes

## 🚀 Cómo usar

### Instalación

1. Coloca los archivos en tu servidor web:
   ```bash
   /alterna-medios/
   ├── index.html
   ├── style.css
   ├── app.js
   ├── favicon.png (opcional)
   └── README.md
   ```

2. Abre `index.html` en tu navegador o sirve desde un servidor web local.

### Configuración

#### Enlaces externos
- Edita las URLs en `index.html`:
  - `https://radio.alterna.ar` (línea de "Alterna Radio")
  - `https://tv.alterna.ar` (línea de "Alterna TV")

#### Redes sociales
- En la sección de contacto, actualiza los `href="#"` con tus URLs:
  ```html
  <a href="https://facebook.com/alternamedios" class="social-link">...</a>
  <a href="https://instagram.com/alternamedios" class="social-link">...</a>
  <a href="https://twitter.com/alternamedios" class="social-link">...</a>
  ```

#### Favicon
- Reemplaza `favicon.png` con tu propio icono
- Soporta: `.ico`, `.png`, `.svg`, `.gif`, `.webp`

#### Colores personalizados
- En `style.css`, modifica las variables CSS:
  ```css
  :root {
    --accent-primary: #d20000;    /* Rojo principal */
    --accent-secondary: #ff3b30;  /* Rojo secundario */
    --bg: #0a0a0a;              /* Fondo oscuro */
    --text: rgba(255, 255, 255, 0.95);  /* Texto */
  }
  ```

## 💻 Compatibilidad

- ✅ Chrome/Chromium (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Breakpoints Responsivos

- **Desktop**: 1200px+
- **Tablet**: 769px - 1199px
- **Mobile**: 480px - 768px
- **Mobile pequeño**: < 480px

## 🎬 Animaciones

- Fade-in al scroll
- Hover effects en cards
- Transiciones suaves
- Efecto de perspectiva 3D sutil en cards
- Gradientes animados

## 🔧 Personalización

### Añadir más plataformas

En `index.html`, duplica un `.platform-card`:

```html
<a href="https://nueva-plataforma.ar" class="platform-card nueva-card">
  <div class="platform-icon nueva-icon">
    <!-- Tu SVG aquí -->
  </div>
  <div class="platform-info">
    <h2 class="platform-name">Nueva Plataforma</h2>
    <p class="platform-desc">Descripción</p>
    <p class="platform-text">Detalles</p>
  </div>
  <div class="platform-arrow">
    <!-- SVG flecha -->
  </div>
</a>
```

Luego añade estilos en `style.css`:

```css
.platform-card.nueva-card .platform-icon {
  background: rgba(0, 0, 0, 0.12);
  border: 2px solid rgba(0, 0, 0, 0.25);
  color: #tu-color;
}

.platform-card.nueva-card .platform-desc {
  color: #tu-color;
}
```

## 📊 Performance

- Optimizado para Core Web Vitals
- CSS minificable
- JS sin dependencias externas
- Imágenes SVG optimizadas
- Lazy loading soportado

## 📝 Contenido por actualizar

1. **Logos**
   - Agregar logos de Alterna Radio y Alterna TV en el hero
   - Actualizar favicon.png

2. **Imágenes de fondo**
   - Puede agregar imágenes retro de TV/Radio en formato WebP
   - Aplicar filtro de opacidad en CSS

3. **Información de contacto**
   - Email
   - Teléfono
   - Dirección exacta

## 🎯 SEO

- Estructura HTML semántica
- Meta tags actualizados
- Headings correctamente jerarquizados
- Alt text en imágenes

## 📄 Licencia

Proyecto de Alterna Medios. Todos los derechos reservados © 2026.

## 🤝 Soporte

Para cambios o personalizaciones, contacta con el equipo de desarrollo.

---

**Creado con ❤️ para Alterna Medios**

