# Alternamedia - Manual operativo

Portal multimedia estático para **Alterna Radio** y **Alterna TV**, con foco en presentación institucional, acceso rápido a las plataformas y despliegue simple en hosting estático.

## Tabla de contenido

- [Estado del proyecto](#estado-del-proyecto)
- [Resumen](#resumen)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Características](#características)
- [Inicio rápido](#inicio-rápido)
- [Personalización](#personalización)
- [Deployment](#deployment)
- [Testing y control de calidad](#testing-y-control-de-calidad)
- [SEO, seguridad y performance](#seo-seguridad-y-performance)
- [Estadísticas orientativas](#estadísticas-orientativas)
- [Checklist pre-lanzamiento](#checklist-pre-lanzamiento)
- [Próximos pasos](#próximos-pasos)
- [Troubleshooting](#troubleshooting)
- [Recursos útiles](#recursos-útiles)
- [Licencia y soporte](#licencia-y-soporte)

## Estado del proyecto

- Sitio listo para uso, revisión y despliegue.
- Documentación consolidada en este único `README.md`.
- Proyecto pensado para hosting estático y mantenimiento simple.
- Base técnica sin dependencias front-end externas obligatorias.

## Resumen

Este proyecto es un sitio web profesional, moderno y responsivo que funciona como portal central para:

- **Alterna Radio**
- **Alterna TV**

Su objetivo es centralizar la navegación hacia ambos medios y presentar la propuesta audiovisual de Alterna con una experiencia visual cuidada, mobile-first y accesible.

También está pensado como base reutilizable para:

- producción audiovisual institucional,
- portales multimedia,
- medios comunitarios o culturales,
- despliegues rápidos en infraestructura estática.

## Estructura del proyecto

```text
alterna-web/
├── index.html
├── style.css
├── style-variants.css
├── app.js
├── config.js
├── package.json
├── netlify.toml
├── vercel.json
├── robots.txt
├── sitemap.xml
├── README.md
├── ICONS_ALTERNATIVES.html
├── serve.sh
└── img/
    ├── logoalternatv.png
    └── logoradioplano.png
```

### Archivos principales

- `index.html`: estructura HTML del sitio.
- `style.css`: estilos principales, layout, responsive y tema base.
- `style-variants.css`: variantes o temas alternativos.
- `app.js`: interactividad y animaciones.
- `config.js`: configuración adicional del proyecto.
- `serve.sh`: helper para levantar un servidor local.
- `vercel.json` / `netlify.toml`: configuración de despliegue.
- `robots.txt` y `sitemap.xml`: soporte SEO.
- `ICONS_ALTERNATIVES.html`: alternativas visuales para iconografía.

### Qué conviene editar primero

1. `index.html`
   - URLs principales.
   - Textos institucionales.
   - Redes sociales.
2. `style.css`
   - Colores.
   - Tipografía.
   - Espaciados y responsive.
3. `app.js`
   - Tiempos y comportamiento de animaciones.

## Características

### Diseño

- Interfaz dark mode profesional.
- Animaciones suaves y elegantes.
- Fondo decorativo con gradientes retro translúcidos.
- Diseño completamente responsivo.
- Enfoque mobile-first.
- Base orientada a accesibilidad (WCAG 2.1).
- Iconografía personalizada para las plataformas.

### Secciones del sitio

1. **Header sticky**
   - Marca Alterna.
   - Navegación simple.
   - Diseño responsive.

2. **Hero**
   - Título principal.
   - Subtítulo descriptivo.
   - Grid de plataformas.
   - CTA hacia sección institucional.

3. **Quiénes somos**
   - Presentación de Alterna Radio.
   - Presentación de Alterna TV.
   - Descripción de la productora multimedia.

4. **Contacto**
   - Ubicación.
   - Redes sociales.
   - Canal de contacto principal.

5. **Footer**
   - Copyright.
   - Localización.

### Interactividad

- Scroll suave.
- Hover effects en cards.
- Animaciones de entrada al hacer scroll.
- Efectos visuales sutiles en elementos destacados.
- Navegación simple y clara.

### Compatibilidad

- Chrome / Chromium
- Firefox
- Safari
- Edge
- Navegadores móviles modernos

### Breakpoints

- **Desktop**: `1200px+`
- **Tablet**: `769px - 1199px`
- **Mobile**: `480px - 768px`
- **Mobile pequeño**: `< 480px`

## Inicio rápido

### Ejecutar localmente

#### Opción A: Python

```bash
cd /Users/cristianbaldini/alterna-web
python3 -m http.server 8000
```

Abrir en el navegador:

```text
http://localhost:8000
```

#### Opción B: script incluido

```bash
cd /Users/cristianbaldini/alterna-web
chmod +x serve.sh
./serve.sh
```

#### Opción C: Node.js

```bash
npm install -g http-server
cd /Users/cristianbaldini/alterna-web
http-server -p 8080
```

### Empezar en pocos pasos

1. Levantar el sitio localmente.
2. Verificar que carguen HTML, CSS, JS e imágenes.
3. Actualizar URLs de Radio y TV.
4. Actualizar redes sociales.
5. Revisar textos institucionales.
6. Probar antes de desplegar.

## Personalización

### 1. URLs principales

Editar en `index.html` los enlaces de las plataformas:

- `https://radio.alterna.ar`
- `https://tv.alterna.ar`

### 2. Redes sociales

En la sección de contacto, reemplazar los `href="#"` por URLs reales.

Ejemplo:

```html
<a href="https://facebook.com/alternamedios" class="social-link">...</a>
<a href="https://instagram.com/alternamedios" class="social-link">...</a>
<a href="https://twitter.com/alternamedios" class="social-link">...</a>
```

### 3. Favicon

Reemplazar `favicon.png` por el ícono institucional.

Formatos compatibles habituales:

- `.ico`
- `.png`
- `.svg`
- `.gif`
- `.webp`

### 4. Colores

Modificar variables CSS en `style.css`:

```css
:root {
  --accent-primary: #d20000;
  --accent-secondary: #ff3b30;
  --bg: #0a0a0a;
  --text: rgba(255, 255, 255, 0.95);
}
```

### 5. Cambios comunes

#### Tema azul

```css
:root {
  --accent-primary: #0d6efd;
  --accent-secondary: #0d6efd;
}
```

#### Tema púrpura

```css
:root {
  --accent-primary: #a855f7;
  --accent-secondary: #a855f7;
}
```

#### Tema verde

```css
:root {
  --accent-primary: #10b981;
  --accent-secondary: #10b981;
}
```

#### Tema claro

Agregar en `index.html`:

```html
<link rel="stylesheet" href="style-variants.css">
<script>
  document.body.classList.add('theme-light');
</script>
```

#### Añadir más plataformas

Duplicar una tarjeta `.platform-card` en `index.html`.

Ejemplo:

```html
<a href="https://nueva-plataforma.ar" class="platform-card nueva-card">
  <div class="platform-icon nueva-icon">
    <!-- SVG o logo -->
  </div>
  <div class="platform-info">
    <h2 class="platform-name">Nueva Plataforma</h2>
    <p class="platform-desc">Descripción</p>
    <p class="platform-text">Detalles</p>
  </div>
  <div class="platform-arrow">...</div>
</a>
```

Luego añadir estilos correspondientes en `style.css`.

#### Cambiar tipografía

Revisar la regla `font-family` en `style.css` y ajustar la fuente base del sitio.

#### Ajustar animaciones

Modificar timings o efectos en `app.js`.

#### Añadir logo en header

Se puede incorporar una etiqueta `<img>` dentro de `.logo-alterna` en `index.html` si se quiere reforzar la identidad visual.

#### Reordenar secciones

Mover bloques `<section>` en `index.html` para cambiar el orden del recorrido de la página.

## Deployment

### Opciones de despliegue

#### 1. Hosting tradicional (Hostinger / Namecheap / GoDaddy)

Pasos típicos:

1. Entrar al panel de control.
2. Abrir `File Manager` o conectar por FTP.
3. Subir los archivos a `public_html`.
4. Asegurarse de que `index.html` quede en la raíz pública.

#### FTP con FileZilla

```text
Host: ftp.tudominio.com
Usuario: tu_usuario
Contraseña: tu_contraseña
Puerto: 21
Ruta: /public_html/
```

#### 2. Vercel

```bash
npm i -g vercel
cd /Users/cristianbaldini/alterna-web
vercel
```

También se puede conectar el repositorio desde la web de Vercel para deploy automático por push.

#### 3. Netlify

```bash
npm install -g netlify-cli
cd /Users/cristianbaldini/alterna-web
netlify deploy --prod
```

También se puede usar la interfaz web o conectar GitHub.

#### 4. GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tunombre/alternamedia.git
git push -u origin main
```

Después, activar GitHub Pages en `Settings -> Pages`.

#### 5. Apache / Nginx

##### Apache

```bash
sudo cp -r /Users/cristianbaldini/alterna-web/* /var/www/html/
sudo chmod -R 755 /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
sudo systemctl restart apache2
```

##### Nginx

```bash
sudo cp -r /Users/cristianbaldini/alterna-web/* /usr/share/nginx/html/
sudo chmod -R 755 /usr/share/nginx/html/
sudo chown -R nginx:nginx /usr/share/nginx/html/
sudo systemctl restart nginx
```

#### 6. AWS S3 + CloudFront

```bash
pip install awscli
aws configure
aws s3 mb s3://alternamedia
aws s3 sync . s3://alternamedia --acl public-read
aws s3api put-bucket-website \
  --bucket alternamedia \
  --website-configuration IndexDocument={Suffix=index.html}
```

### HTTPS / SSL

- **Vercel, Netlify y GitHub Pages**: SSL incluido automáticamente.
- **Hosting tradicional**: usar Let's Encrypt desde panel o `certbot`.
- **Servidor dedicado**: configurar certificados para el dominio principal y subdominios.

Ejemplo:

```bash
sudo certbot certonly --standalone -d alterna.ar
sudo certbot certonly --standalone -d tv.alterna.ar
sudo certbot certonly --standalone -d radio.alterna.ar
```

### DNS

Ejemplo de registros:

```text
A      alterna.ar          -> IP_DE_TU_SERVIDOR
A      www.alterna.ar      -> IP_DE_TU_SERVIDOR
A      radio.alterna.ar    -> IP_RADIO
A      tv.alterna.ar       -> IP_TV
```

Para Vercel o Netlify, usar los CNAME indicados por la plataforma.

## Testing y control de calidad

### Validaciones funcionales

#### Desktop

- Header sticky visible y estable.
- Navegación alineada correctamente.
- Hero centrado y legible.
- Cards de plataformas con hover correcto.
- Secciones de contenido bien espaciadas.
- Footer visible y consistente.

#### Mobile y tablet

- Texto sin cortes.
- Cards apiladas correctamente.
- Sin elementos fuera del viewport.
- Botones clickeables o táctiles.
- Scroll fluido.

### Accesibilidad

- Navegación por teclado funcional.
- Orden lógico de foco.
- Focus visible.
- Headings jerarquizados.
- Imágenes con `alt` descriptivo.
- Contraste suficiente.
- Uso semántico de `header`, `main`, `footer`, `nav`, `section`, `a`.

### Cross-browser

Verificar en:

- Chrome
- Firefox
- Safari macOS
- Safari iOS
- Edge

### SEO

- `title` descriptivo y único.
- `meta description` presente.
- `viewport` presente.
- `favicon` cargando correctamente.
- Un solo `h1`.
- Jerarquía correcta de headings.
- `sitemap.xml` y `robots.txt` disponibles.

### Seguridad

- HTTPS habilitado.
- Sin mixed content.
- Sin errores críticos en consola.
- Sin datos sensibles en el código fuente.

### Herramientas útiles

```bash
npm install -g html-validate
html-validate index.html

npm install -g stylelint
stylelint style.css
```

Herramientas online recomendadas:

- WAVE: `https://wave.webaim.org/`
- GTmetrix: `https://gtmetrix.com/`
- Mobile-Friendly Test: `https://search.google.com/test/mobile-friendly`
- HTML Validator: `https://validator.w3.org/`
- CSS Validator: `https://jigsaw.w3.org/css-validator/`

### Estándares sugeridos

| Métrica | Target | Aceptable |
|---|---:|---:|
| Lighthouse Performance | > 90 | > 80 |
| Lighthouse Accessibility | > 90 | > 85 |
| Lighthouse Best Practices | > 90 | > 85 |
| Lighthouse SEO | > 90 | > 85 |
| LCP | < 2.5s | < 4s |
| FID | < 100ms | < 300ms |
| CLS | < 0.1 | < 0.25 |

## SEO, seguridad y performance

### Headers recomendados

Ejemplos útiles ya contemplados para despliegues estáticos:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Optimización post-deploy

#### Minificar CSS

```bash
npm install -g cssnano-cli
cssnano style.css > style.min.css
```

#### Minificar JavaScript

```bash
npm install -g terser
terser app.js -c -m -o app.min.js
```

#### Optimizar imágenes

En macOS, por ejemplo:

```bash
brew install imagemagick
convert image.png -quality 80 image.webp
```

#### Caché en Apache

```apache
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

### Tips operativos útiles

- Usar DevTools para revisar consola, responsive y métricas.
- Validar Lighthouse antes del despliegue.
- Mantener actualizadas URLs, redes y metadatos.
- Optimizar imágenes reales antes de producción.
- Si se integra analytics o chat, cargarlo al final del documento o con estrategia diferida.

## Estadísticas orientativas

Estas métricas provienen de documentación previa del proyecto y deben tomarse como referencia, no como garantía automática del estado actual.

### Alcance técnico estimado

- HTML: ~250 líneas
- CSS principal: ~700 líneas
- CSS variants: ~400 líneas
- JavaScript: ~300 líneas
- Total aproximado: ~1650 líneas

### Peso estimado

- HTML: ~10-20 KB
- CSS: ~35 KB
- JS: ~12 KB
- Total sin imágenes: ~67 KB

### Compatibilidad objetivo

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Navegadores móviles actuales

## Checklist pre-lanzamiento

- [ ] Actualizar URLs de `radio.alterna.ar` y `tv.alterna.ar`.
- [ ] Configurar redes sociales reales.
- [ ] Reemplazar `favicon.png`.
- [ ] Revisar textos y descripciones.
- [ ] Probar en móvil.
- [ ] Probar en distintos navegadores.
- [ ] Verificar enlaces internos y externos.
- [ ] Confirmar HTTPS.
- [ ] Confirmar DNS.
- [ ] Verificar `sitemap.xml`.
- [ ] Verificar `robots.txt`.
- [ ] Revisar consola sin errores críticos.
- [ ] Validar HTML y CSS.
- [ ] Ejecutar una revisión básica de accesibilidad.

## Próximos pasos

1. Ejecutar localmente y validar que el sitio cargue completo.
2. Corregir textos, enlaces y branding.
3. Configurar redes sociales y favicon.
4. Ejecutar testing funcional y visual.
5. Desplegar en la plataforma elegida.
6. Monitorear y ajustar según uso real.

## Troubleshooting

### No se ve el sitio

- Verificar que se esté sirviendo desde la carpeta correcta.
- Levantar un servidor local con Python.
- Confirmar que `index.html` esté en la raíz publicada.

### Los estilos no cargan

- Verificar que `style.css` esté en la misma carpeta que `index.html`.
- Limpiar caché del navegador.
- Confirmar rutas relativas de assets.

### Las animaciones son lentas

- Reducir tiempos en `app.js`.
- Probar desactivar efectos pesados.
- Validar rendimiento en mobile.

### Hay problemas en móvil

- Revisar en DevTools con emulación responsive.
- Confirmar `meta viewport`.
- Detectar overflow horizontal.

### El favicon no aparece

- Confirmar que el archivo exista y tenga el nombre esperado.
- Limpiar caché del navegador.
- Forzar recarga completa.

## Recursos útiles

- Vercel Docs: `https://vercel.com/docs`
- Netlify Docs: `https://docs.netlify.com`
- Let's Encrypt: `https://letsencrypt.org`
- Web.dev Performance: `https://web.dev/performance/`
- MDN Best Practices: `https://developer.mozilla.org/`

## Licencia y soporte

Proyecto de Alternamedia. Todos los derechos reservados © 2026.

Para cambios, mejoras o personalizaciones, contactar al equipo de desarrollo.

---

Manual consolidado a partir de la documentación previa del proyecto, incluyendo la antigua documentación Markdown y TXT.
