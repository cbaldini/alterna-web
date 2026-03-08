# 🧪 Testing Checklist - Alterna Medios

## Antes de publicar, verifica todo esto

### 🖥️ Desktop (Chrome, Firefox, Safari)

#### Visual
- [ ] Header sticky funciona correctamente
- [ ] Logo Alterna se ve bien y tiene animación
- [ ] Navegación está alineada correctamente
- [ ] Hero section se ve centrado
- [ ] Títulos son legibles (no muy pequeños)
- [ ] Cards de plataforma tienen hover effect
- [ ] Fondo decorativo se ve sutil, no invasivo
- [ ] Colores se ven bien (contraste adecuado)
- [ ] Sección About cards tienen animación de entrada
- [ ] About footer se ve bien
- [ ] Contact section está bien organizada
- [ ] Footer es visible y legible

#### Funcionalidad
- [ ] Links de navegación funcionan (scroll suave)
- [ ] Links a radio.alterna.ar y tv.alterna.ar funcionan
- [ ] Links de redes sociales van al destino correcto
- [ ] Efecto hover en cards es suave
- [ ] Transiciones no son abruptas

#### Performance
- [ ] Carga rápido (< 3 segundos)
- [ ] No hay retrasos en las animaciones
- [ ] Scroll es suave (sin stuttering)
- [ ] Imágenes no se ven pixeladas

### 📱 Mobile (iPhone, Android)

#### Visual (375px ancho)
- [ ] Hamburguesa/nav responsive (si aplica)
- [ ] Títulos son legibles en pantalla pequeña
- [ ] Texto no está cortado
- [ ] Cards de plataforma se adaptan (stack vertical)
- [ ] Padding/margins son adecuados
- [ ] Footer no se superpone

#### Visual (768px ancho - Tablet)
- [ ] Layout se ve bien (no vacío ni muy apretado)
- [ ] Grid de cards se ve balanceado
- [ ] Navegación es accesible

#### Funcionalidad
- [ ] Todos los links funcionan en mobile
- [ ] Scroll suave funciona
- [ ] Botones son clickeables (mínimo 44x44px)
- [ ] No hay elementos fuera del viewport

#### Performance
- [ ] Carga en mobile (puede ser más lento)
- [ ] Animaciones no ralentizan el dispositivo
- [ ] Scroll es responsivo

### ♿ Accesibilidad (WCAG 2.1 AA)

#### Navegación por teclado
- [ ] Puedo navegar con Tab
- [ ] El orden es lógico
- [ ] Puedo ver el focus (outline)
- [ ] Puedo activar botones con Enter

#### Lectores de pantalla
- [ ] Headings están bien jerarquizados (H1 → H2 → H3)
- [ ] Imágenes tienen alt text descriptivo
- [ ] Links tienen texto claro
- [ ] Labels están asociados con inputs (si hay)
- [ ] Ratios de color tienen suficiente contraste

#### Semantic HTML
- [ ] `<header>`, `<main>`, `<footer>` están bien usados
- [ ] `<nav>` contiene la navegación
- [ ] `<section>` envuelve secciones lógicas
- [ ] `<a>` para links, no `<button>`

### 🌐 Cross-browser

#### Chrome/Chromium
- [ ] Funciona perfectamente
- [ ] DevTools mostrando todo bien

#### Firefox
- [ ] Funciona perfectamente
- [ ] Gradientes se ven igual
- [ ] Animaciones suaves

#### Safari (macOS)
- [ ] Funciona perfectamente
- [ ] Backdrop filters funcionan
- [ ] Scroll suave funciona

#### Safari (iOS)
- [ ] Funciona sin errores
- [ ] Touch funciona bien
- [ ] Viewport es correcto

#### Edge
- [ ] Funciona perfectamente
- [ ] Sin warnings en consola

### 🔍 SEO

#### Meta tags
- [ ] Title es descriptivo y único
- [ ] Meta description está presente
- [ ] Viewport meta tag existe
- [ ] Favicon se carga correctamente

#### Structure
- [ ] H1 existe y es único
- [ ] Headings están jerarquizados
- [ ] Imágenes tienen alt text
- [ ] sitemap.xml existe
- [ ] robots.txt existe

#### Performance
- [ ] Lighthouse score > 80
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms

### 🔐 Seguridad

#### General
- [ ] HTTPS está habilitado
- [ ] No hay mixed content (HTTP en HTTPS)
- [ ] No hay console errors o warnings
- [ ] No hay password en código fuente

#### Headers
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: DENY
- [ ] X-XSS-Protection presente
- [ ] Content-Security-Policy bien configurada

#### Terceros
- [ ] Solo scripts de confianza cargados
- [ ] Google Analytics no ralentiza (si está)
- [ ] Tipografías de Google Fonts cargan bien

### 📊 Herramientas para testing

```bash
# Lighthouse (en Chrome DevTools)
# F12 → Lighthouse → Analyze page load

# Wave (Accesibilidad)
# https://wave.webaim.org/

# GTmetrix (Performance)
# https://gtmetrix.com/

# Mobile-Friendly Test
# https://search.google.com/test/mobile-friendly
```

### 🐛 Console Check

Abre DevTools (F12) → Console y verifica:

```
[ ] Sin errores (rojo)
[ ] Sin warnings críticos (naranja)
[ ] Sin mensajes sobre recursos no encontrados
[ ] Sin CORS errors
```

### 📸 Screenshot Testing

- [ ] Captura de escritorio (1920x1080)
- [ ] Captura de tablet (768x1024)
- [ ] Captura de mobile (375x667)
- [ ] Compara con diseño original

### 🔗 Validación de Enlaces

```bash
# Verifica que todos los links funcionan
# Herramienta: https://www.broken-link-checker.com/
# O manualmente: Tab por cada link
```

### 🎨 Validación de CSS

```bash
# Valida CSS en línea
# https://jigsaw.w3.org/css-validator/
```

### 📝 Validación de HTML

```bash
# Valida HTML en línea
# https://validator.w3.org/
```

### 🚀 Pre-deploy Final

- [ ] Todo el contenido actualizado
- [ ] Enlaces verificados (ninguno roto)
- [ ] Imágenes optimizadas
- [ ] CSS minificado (opcional)
- [ ] JS minificado (opcional)
- [ ] Sitemap.xml actualizado
- [ ] robots.txt actualizado
- [ ] DNS apuntando correctamente
- [ ] SSL/HTTPS funcionando
- [ ] Email de contacto funciona

## 🎯 Estándares de calidad

| Métrica | Target | Aceptable |
|---------|--------|-----------|
| Lighthouse Performance | > 90 | > 80 |
| Lighthouse Accessibility | > 90 | > 85 |
| Lighthouse Best Practices | > 90 | > 85 |
| Lighthouse SEO | > 90 | > 85 |
| LCP | < 2.5s | < 4s |
| FID | < 100ms | < 300ms |
| CLS | < 0.1 | < 0.25 |

## 📋 Checklist Final

```
ANTES DE PUBLICAR:

Funcionalidad:
☐ Todos los links funcionan
☐ Formularios envían datos (si hay)
☐ Animaciones son suaves
☐ Sin errores en console
☐ Sin elementos rotos

Diseño:
☐ Se ve igual en todos los navegadores
☐ Se ve bien en mobile
☐ Colores son correctos
☐ Tipografía es legible
☐ Spacing es consistente

Contenido:
☐ Sin errores de tipografía
☐ URLs correctas
☐ Información actualizada
☐ Imágenes optimizadas
☐ Alt text en imágenes

SEO:
☐ Meta tags correctos
☐ Headings bien estructurados
☐ Sitemap.xml existe
☐ robots.txt existe
☐ Lighthouse score > 80

Seguridad:
☐ HTTPS habilitado
☐ Sin mixed content
☐ Headers de seguridad
☐ Sin datos sensibles expuestos
☐ Dependencias actualizadas
```

## 🆘 Bugs encontrados

Usa este formato para reportar bugs:

```
Tipo: [Visual / Funcional / Performance]
Navegador: [Chrome / Firefox / Safari / etc]
Dispositivo: [Desktop / Mobile / Tablet]
Pasos para reproducir:
1.
2.
3.

Resultado esperado:
Resultado actual:
Captura de pantalla: [URL]
```

---

**Recuerda: Un sitio bien testeado = Usuarios felices**

