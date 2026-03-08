# Alterna Medios - Guía de Deployment

## 🌐 Deployment en varios servidores

### 1. **Hostinger / Namecheap / GoDaddy**

#### Pasos:
1. Accede al Panel de Control (cPanel)
2. Ve a "File Manager" o usa FTP
3. Sube los archivos a la carpeta `public_html`
4. Asegúrate de que `index.html` esté en la raíz

#### FTP con FileZilla:
```
Host: ftp.tudominio.com
Usuario: tu_usuario
Contraseña: tu_contraseña
Puerto: 21
Ruta: /public_html/
```

### 2. **Vercel (Recomendado para estática)**

```bash
# 1. Instala Vercel CLI
npm i -g vercel

# 2. Ve a la carpeta del proyecto
cd alterna-medios

# 3. Deploy
vercel
```

**O conecta tu repositorio de GitHub:**
- Ve a vercel.com
- Importa tu repositorio
- Configura el dominio
- Deploy automático en cada push

### 3. **Netlify**

```bash
# Instala Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**O mediante GUI:**
- Arrastra la carpeta a netlify.com
- O conecta tu repo de GitHub

### 4. **GitHub Pages**

Crea un repositorio llamado `alterna-medios`:

```bash
# Inicializa git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tunombre/alterna-medios.git
git push -u origin main
```

Ve a Settings → Pages y selecciona "Deploy from Branch" (main)

### 5. **Apache / Nginx (Servidor dedicado/VPS)**

#### Apache:

```bash
# Copiar archivos
sudo cp -r alterna-medios/* /var/www/html/

# Asegurar permisos
sudo chmod -R 755 /var/www/html/
sudo chown -R www-data:www-data /var/www/html/

# Restart Apache
sudo systemctl restart apache2
```

#### Nginx:

```bash
# Copiar archivos
sudo cp -r alterna-medios/* /usr/share/nginx/html/

# Asegurar permisos
sudo chmod -R 755 /usr/share/nginx/html/
sudo chown -R nginx:nginx /usr/share/nginx/html/

# Restart Nginx
sudo systemctl restart nginx
```

### 6. **AWS S3 + CloudFront**

```bash
# Instala AWS CLI
pip install awscli

# Configura AWS
aws configure

# Crea un bucket
aws s3 mb s3://alterna-medios

# Sube los archivos
aws s3 sync . s3://alterna-medios --acl public-read

# Habilita hosting estático en S3
aws s3api put-bucket-website \
  --bucket alterna-medios \
  --website-configuration IndexDocument={Suffix=index.html}
```

## 🔐 HTTPS/SSL

### Vercel, Netlify, GitHub Pages
✅ **Automático** - SSL incluido

### Hostinger/Namecheap
- Usa **Let's Encrypt** (gratis)
- O compra un certificado SSL
- Configura en el Panel de Control

### Servidor dedicado:
```bash
# Certbot (Let's Encrypt)
sudo certbot certonly --standalone -d alterna.ar
sudo certbot certonly --standalone -d tv.alterna.ar
sudo certbot certonly --standalone -d radio.alterna.ar
```

## 📋 Configuración de DNS

Para que `alterna.ar` apunte a tu sitio:

1. Accede al registrador de dominio (Namecheap, etc.)
2. Ve a "Manage DNS"
3. Crea registros A:

```
Registro A: alterna.ar → IP_DE_TU_SERVIDOR
Registro A: www.alterna.ar → IP_DE_TU_SERVIDOR
Registro A: radio.alterna.ar → IP_RADIO
Registro A: tv.alterna.ar → IP_TV
```

Para **Vercel/Netlify** en lugar de IP, usa CNAME:
```
CNAME: alterna.ar → cname.vercel.app
CNAME: www → cname.vercel.app
```

## ⚙️ Configuración recomendada

### Headers HTTP (para mejor seguridad)

En Vercel/Netlify, crea `vercel.json` o `netlify.toml`:

**vercel.json:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

**netlify.toml:**
```toml
[[headers]]
for = "/*"
[headers.values]
X-Content-Type-Options = "nosniff"
X-Frame-Options = "DENY"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "strict-origin-when-cross-origin"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

## 🚀 Optimizaciones Post-Deploy

### 1. Minificar CSS
```bash
# Instala cssnano
npm install -g cssnano-cli

# Minifica
cssnano style.css > style.min.css
```

### 2. Minificar JS
```bash
# Instala terser
npm install -g terser

# Minifica
terser app.js -c -m -o app.min.js
```

### 3. Optimizar imágenes
```bash
# Instala ImageOptim (macOS) o ImageMagick
brew install imagemagick

# Convertir a WebP
convert image.png -quality 80 image.webp
```

### 4. Caché
Configura en tu servidor:
```
# .htaccess (Apache)
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

## 📊 Testing pre-deploy

```bash
# Validar HTML
npm install -g html-validate
html-validate index.html

# Validar CSS
npm install -g stylelint
stylelint style.css

# Lighthouse (Chrome)
# Abre DevTools → Lighthouse → Analizar
```

## ✅ Checklist pre-launch

- [ ] Actualizar URLs de radio.alterna.ar y tv.alterna.ar
- [ ] Personalizar colores en style.css
- [ ] Agregar favicon.png
- [ ] Actualizar enlaces de redes sociales
- [ ] Revisar contenido (textos, descripciones)
- [ ] Probar en móvil
- [ ] Probar en navegadores diferentes
- [ ] Verificar enlaces (CTA buttons)
- [ ] HTTPS habilitado
- [ ] DNS configurado
- [ ] Sitemap.xml (si es necesario)
- [ ] robots.txt (si es necesario)

## 🔗 Recursos útiles

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Let's Encrypt](https://letsencrypt.org)
- [Web.dev - Performance](https://web.dev/performance/)
- [MDN - Best Practices](https://developer.mozilla.org/)

---

**¿Preguntas? Contacta al equipo de desarrollo.**

