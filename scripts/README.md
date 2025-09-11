# Meta Tags Dinámicos para Static Site

Este script genera páginas HTML estáticas con meta tags dinámicos para mejorar el SEO y la experiencia de compartir en redes sociales.

## 🚀 Cómo funciona

El script `generate-meta.js` crea páginas HTML estáticas que:

1. **Detectan bots de redes sociales** (Facebook, Twitter, LinkedIn, etc.)
2. **Muestran meta tags específicos** para cada página
3. **Redirigen a usuarios normales** a la página real de la SPA

## 📁 Estructura generada

```
build/
├── index.html (Home - home-og.jpg)
├── about/
│   └── index.html (About - about-og.jpg)
├── contact/
│   └── index.html (Contact - contact-og.jpg)
├── work/
│   └── index.html (Work - work-og.jpg)
├── services/
│   └── index.html (Services - services-og.jpg)
├── blog/
│   ├── index.html (Blog - blog-og.jpg)
│   ├── mi-post/
│   │   └── index.html (Post específico - coverUrl del post)
│   └── otro-post/
│       └── index.html (Post específico - coverUrl del post)
└── og/
    ├── home-og.jpg
    ├── about-og.jpg
    ├── contact-og.jpg
    ├── work-og.jpg
    ├── services-og.jpg
    └── blog-og.jpg
```

## 🛠️ Comandos disponibles

```bash
# Build completo (React + Meta tags)
npm run build

# Solo build de React
npm run build:react

# Solo generar meta tags
npm run generate-meta

# Build de staging
npm run build:staging
```

## 📋 Configuración

### Rutas principales

Las rutas principales están configuradas en el script:

- `/` → `home-og.jpg`
- `/about` → `about-og.jpg`
- `/contact` → `contact-og.jpg`
- `/work` → `work-og.jpg`
- `/services` → `services-og.jpg`
- `/blog` → `blog-og.jpg`

### Posts de blog

Los posts se generan automáticamente desde `backend/data/blogs.json`:

- Usa el `coverUrl` del post si existe
- Fallback a `blog-og.jpg` si no hay cover
- Solo genera posts con `published: true`

## 🚀 Deploy

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `build/` a tu hosting
3. Configura tu servidor para servir `index.html` para rutas no encontradas (SPA fallback)

## ✅ Resultado

- ✅ **Bots de redes sociales** ven los meta tags correctos
- ✅ **Usuarios normales** son redirigidos a la SPA
- ✅ **SEO mejorado** con meta tags específicos
- ✅ **Compartir en redes** muestra la imagen correcta
- ✅ **Static site puro** - no necesitas servidor

## 🔧 Personalización

Para modificar las rutas o meta tags, edita el array `routes` en `scripts/generate-meta.js`.
