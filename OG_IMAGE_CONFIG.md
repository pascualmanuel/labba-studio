# Configuración de Imágenes Open Graph (OG)

## Resumen

Esta configuración asegura que los bots de redes sociales (Twitter, Facebook, LinkedIn, WhatsApp, etc.) vean las imágenes OG correctas para cada sección del sitio, resolviendo el problema de que las SPAs (Single Page Applications) no ejecutan JavaScript en estos bots.

## Cómo funciona

### 1. Detección de Bots

El archivo `public/_redirects` detecta User-Agents de bots de redes sociales y los redirige a archivos HTML estáticos específicos.

### 2. Archivos HTML Estáticos

Cada ruta tiene su propio archivo HTML con metadatos específicos:

- `/about/index.html` → `og/about-og.jpg`
- `/contact/index.html` → `og/contact-og.jpg`
- `/work/index.html` → `og/works-og.jpg` (también para `/works/*`)
- `/services/index.html` → `og/services-og.jpg`
- `/blog/index.html` → `og/blog-og.jpg` (también para `/blog/*`)

### 3. Fallback

- **Home (`/`)**: Usa `index.html` principal con `og/home-og.jpg`
- **Rutas no definidas**: Usan `index.html` principal con `og/home-og.jpg`

## Reglas de Imágenes OG

| Ruta        | Imagen OG            | Descripción                                      |
| ----------- | -------------------- | ------------------------------------------------ |
| `/`         | `og/home-og.jpg`     | Fallback general, también para URLs no definidas |
| `/about`    | `og/about-og.jpg`    | Página About                                     |
| `/contact`  | `og/contact-og.jpg`  | Página Contact                                   |
| `/work`     | `og/works-og.jpg`    | Lista de proyectos                               |
| `/works/*`  | `og/works-og.jpg`    | Proyectos individuales (genérico)                |
| `/services` | `og/services-og.jpg` | Página Services                                  |
| `/blog`     | `og/blog-og.jpg`     | Lista de posts                                   |
| `/blog/*`   | `og/blog-og.jpg`     | Posts individuales y tags (genérico)             |

## User-Agents Detectados

Los siguientes User-Agents son redirigidos a los archivos HTML estáticos:

- `*bot*`, `*Bot*`
- `*crawler*`, `*Crawler*`
- `*spider*`, `*Spider*`
- `*facebook*`
- `*twitter*`
- `*linkedin*`
- `*whatsapp*`
- `*telegram*`
- `*slack*`
- `*discord*`
- `*pinterest*`

## Archivos Creados

### `public/_redirects`

Archivo de configuración de Netlify que maneja las redirecciones por User-Agent.

### Archivos HTML Estáticos

- `public/about/index.html`
- `public/contact/index.html`
- `public/work/index.html`
- `public/services/index.html`
- `public/blog/index.html`

## Características de los Archivos HTML

Cada archivo HTML estático incluye:

1. **Metadatos específicos** para la página
2. **Open Graph tags** con la imagen correcta
3. **Twitter Card tags** con la imagen correcta
4. **JSON-LD** estructurado
5. **Script de redirección** para usuarios normales (no bots)

## Testing

Para probar la configuración:

1. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Preview**: https://www.opengraph.xyz/

## Mantenimiento

- **Actualizar metadatos**: Editar los archivos HTML estáticos correspondientes
- **Cambiar imágenes OG**: Actualizar las referencias en los archivos HTML
- **Agregar nuevas rutas**: Crear nuevo directorio y archivo HTML, agregar reglas en `_redirects`

## Notas Importantes

- Los usuarios normales (no bots) son redirigidos automáticamente a la aplicación React
- Los bots ven los metadatos estáticos sin ejecutar JavaScript
- El fallback siempre es `og/home-og.jpg`, nunca `logo512.png`
- Todas las imágenes OG tienen dimensiones 1200×630 píxeles
