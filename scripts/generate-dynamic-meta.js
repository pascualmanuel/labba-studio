const fs = require("fs");
const path = require("path");

const generateDynamicMeta = () => {
  console.log("🚀 Generando meta tags dinámicos en index.html...");

  // Leer el index.html principal
  const indexPath = path.join("build", "index.html");
  if (!fs.existsSync(indexPath)) {
    console.log(
      "❌ No se encontró build/index.html. Ejecuta 'npm run build' primero."
    );
    return;
  }

  let indexHtml = fs.readFileSync(indexPath, "utf-8");

  // Configuración de rutas y sus meta tags
  const routes = [
    {
      path: "/",
      title: "Labba Studio - Creative Digital Agency",
      description:
        "We create amazing digital experiences that connect brands with their audience through innovative design and technology.",
      ogImage: "/og/home-og.jpg",
    },
    {
      path: "/about",
      title: "About Us - Labba Studio",
      description:
        "Learn about our team, mission, and the creative process behind our digital solutions.",
      ogImage: "/og/about-og.jpg",
    },
    {
      path: "/contact",
      title: "Contact - Labba Studio",
      description:
        "Get in touch with us to discuss your next project and bring your ideas to life.",
      ogImage: "/og/contact-og.jpg",
    },
    {
      path: "/work",
      title: "Our Work - Labba Studio",
      description:
        "Explore our portfolio of successful digital projects and creative solutions.",
      ogImage: "/og/work-og.jpg",
    },
    {
      path: "/services",
      title: "Services - Labba Studio",
      description:
        "Discover our comprehensive digital services including web design, development, and branding.",
      ogImage: "/og/services-og.jpg",
    },
    {
      path: "/blog",
      title: "Blog - Labba Studio",
      description:
        "Latest insights, trends, and articles about digital design and technology.",
      ogImage: "/og/blog-og.jpg",
    },
  ];

  // Generar meta tags estáticos para todas las rutas
  const generateStaticMetaTags = () => {
    let metaTags = "";

    routes.forEach((route) => {
      const isHome = route.path === "/";
      const pathClass = isHome ? "home" : route.path.replace("/", "");

      // Solo mostrar los meta tags de home por defecto (para bots)
      const displayStyle = isHome ? "block" : "none";

      metaTags += `
    <!-- Meta tags for ${route.path} -->
    <meta class="meta-${pathClass}" property="og:title" content="${route.title}" style="display: ${displayStyle};">
    <meta class="meta-${pathClass}" property="og:description" content="${route.description}" style="display: ${displayStyle};">
    <meta class="meta-${pathClass}" property="og:image" content="https://labba.studio${route.ogImage}" style="display: ${displayStyle};">
    <meta class="meta-${pathClass}" property="og:url" content="https://labba.studio${route.path}" style="display: ${displayStyle};">
    <meta class="meta-${pathClass}" name="twitter:title" content="${route.title}" style="display: ${displayStyle};">
    <meta class="meta-${pathClass}" name="twitter:description" content="${route.description}" style="display: ${displayStyle};">
    <meta class="meta-${pathClass}" name="twitter:image" content="https://labba.studio${route.ogImage}" style="display: ${displayStyle};">
    <meta class="meta-${pathClass}" name="description" content="${route.description}" style="display: ${displayStyle};">`;
    });

    return metaTags;
  };

  // Generar el script de meta tags dinámicos
  const metaScript = `
    ${generateStaticMetaTags()}
    <script>
      // Meta tags dinámicos basados en la URL - SIN REDIRECTS
      (function() {
        const currentPath = window.location.pathname;
        const baseUrl = 'https://labba.studio';
        
        const routes = ${JSON.stringify(routes)};
        
        // Buscar la ruta actual
        let currentRoute = routes.find(route => route.path === currentPath);
        
        // Si no se encuentra la ruta exacta, usar la home
        if (!currentRoute) {
          currentRoute = routes[0]; // Home
        }
        
        // Ocultar todos los meta tags primero
        document.querySelectorAll('[class^="meta-"]').forEach(meta => {
          meta.style.display = 'none';
        });
        
        // Mostrar solo los meta tags de la ruta actual
        const pathClass = currentRoute.path === '/' ? 'home' : currentRoute.path.replace('/', '');
        document.querySelectorAll(\`.meta-\${pathClass}\`).forEach(meta => {
          meta.style.display = 'block';
        });
        
        // Actualizar título
        document.title = currentRoute.title;
        
        console.log('🎯 Meta tags actualizados para:', currentPath);
        
        // NO HACER REDIRECTS - Solo actualizar meta tags
        // La SPA de React se encarga de la navegación
      })();
    </script>`;

  // Insertar el script antes del cierre del head
  indexHtml = indexHtml.replace("</head>", `${metaScript}\n</head>`);

  // Escribir el archivo actualizado
  fs.writeFileSync(indexPath, indexHtml);

  console.log("✅ Meta tags dinámicos agregados al index.html principal");
  console.log("🚀 Listo para deploy!");
};

// Ejecutar si se llama directamente
if (require.main === module) {
  generateDynamicMeta();
}

module.exports = generateDynamicMeta;
