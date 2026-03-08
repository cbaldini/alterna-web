# 🚀 Guía Rápida - Alterna Medios

## Empezar en 2 minutos

### 1. Ejecutar localmente

**Opción A: Python (más fácil)**
```bash
cd alterna-medios
python3 -m http.server 8000
# Abre http://localhost:8000
```

**Opción B: Script incluido**
```bash
cd alterna-medios
chmod +x serve.sh
./serve.sh
```

**Opción C: Node.js**
```bash
npm install -g http-server
http-server -p 8080
```

### 2. Personalizar contenido

Abre `index.html` y actualiza:

```html
<!-- Línea 17-18: URLs de radio y TV -->
<a href="https://radio.alterna.ar" class="platform-card radio-card">
<a href="https://tv.alterna.ar" class="platform-card tv-card">

<!-- Línea 158-161: Redes sociales -->
<a href="https://facebook.com/alternamedios" class="social-link">
<a href="https://instagram.com/alternamedios" class="social-link">
```

### 3. Personalizar colores

Edita `style.css` líneas 8-17:

```css
:root {
  --accent-primary: #d20000;    /* Rojo - cambiar aquí */
  --accent-secondary: #ff3b30;  /* Naranja - cambiar aquí */
  --bg: #0a0a0a;              /* Fondo oscuro */
}
```

### 4. Añadir favicon

Reemplaza el archivo `favicon.png` con tu logo (recomendado 192x192px)

### 5. Desplegar online

**Vercel (Recomendado)**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy
```

**GitHub Pages**
```bash
git init
git add .
git commit -m "Initial"
git branch -M main
git remote add origin https://github.com/tu-usuario/alterna-medios
git push
# Habilita Pages en Settings
```

## 📁 Estructura de archivos

```
alterna-medios/
├── index.html              ← Página principal
├── style.css              ← Estilos (oscuro)
├── style-variants.css     ← Temas adicionales
├── app.js                 ← Interactividad
├── config.js              ← Configuración
├── favicon.png            ← Logo del sitio
├── package.json           ← Dependencias (npm)
├── vercel.json            ← Config Vercel
├── netlify.toml           ← Config Netlify
├── sitemap.xml            ← Para SEO
├── robots.txt             ← Para bots
├── README.md              ← Documentación completa
├── DEPLOYMENT.md          ← Guía de deployment
├── QUICK_START.md         ← Este archivo
└── ICONS_ALTERNATIVES.html ← Iconos alternativos
```

## 🎨 Cambios comunes

### Cambiar tema de color a azul
```css
:root {
  --accent-primary: #0d6efd;
  --accent-secondary: #0d6efd;
}
```

### Cambiar tema a claro
En `index.html` añade:
```html
<link rel="stylesheet" href="style-variants.css">
<script>
  document.body.classList.add('theme-light');
</script>
```

### Añadir más plataformas
Duplica en `index.html`:
```html
<a href="https://nueva.ar" class="platform-card nueva-card">
  <div class="platform-icon nueva-icon">
    <!-- SVG aquí -->
  </div>
  <div class="platform-info">
    <h2 class="platform-name">Nueva</h2>
    <p class="platform-desc">Descripción</p>
    <p class="platform-text">Detalles</p>
  </div>
  <div class="platform-arrow">...</div>
</a>
```

Y en `style.css`:
```css
.platform-card.nueva-card .platform-icon {
  background: rgba(0, 0, 0, 0.12);
  color: #tu-color;
}
```

### Animaciones adicionales
En `app.js` edita:
```javascript
function setupScrollAnimations() {
  // Cambiar 600ms a 1000ms para más lentitud
}
```

## 🔗 Enlaces importantes

- **Live demo**: https://alterna.ar
- **Radio**: https://radio.alterna.ar
- **TV**: https://tv.alterna.ar
- **Documentación**: Ver README.md
- **Deploy guide**: Ver DEPLOYMENT.md

## ✅ Checklist pre-publicar

- [ ] URLs de radio y TV actualizadas
- [ ] Favicon subido (192x192px mínimo)
- [ ] Colores personalizados en style.css
- [ ] Contenido de "Quiénes somos" actualizado
- [ ] Redes sociales configuradas
- [ ] Probado en móvil
- [ ] Probado en 3 navegadores diferentes
- [ ] HTTPS habilitado
- [ ] DNS configurado
- [ ] Sitemap.xml indexado

## 🆘 Troubleshooting

**¿No se ve el sitio?**
- Asegúrate de estar en la carpeta correcta
- Intenta con `python3 -m http.server 8080`

**¿Los estilos no cargan?**
- Verifica que `style.css` esté en la misma carpeta que `index.html`
- Limpia el caché (Ctrl+Shift+Delete)

**¿Las animaciones son lentas?**
- Edita el tiempo en `app.js` o desactiva en `style-variants.css`

**¿Problemas en móvil?**
- Abre DevTools (F12) → dispositivo móvil
- Verifica viewport en `index.html`

## 📞 Soporte

Para más info o cambios personalizados:
- Contacta al equipo de desarrollo
- Email: contacto@alterna.ar

---

**Hecho con ❤️ para Alterna Medios**

