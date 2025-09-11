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

  // Generar el script de meta tags dinámicos
  const metaScript = `
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
        
        // Actualizar meta tags
        function updateMetaTag(property, content) {
          let meta = document.querySelector(\`meta[property="\${property}"]\`);
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
          }
          meta.setAttribute('content', content);
        }
        
        function updateMetaName(name, content) {
          let meta = document.querySelector(\`meta[name="\${name}"]\`);
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', name);
            document.head.appendChild(meta);
          }
          meta.setAttribute('content', content);
        }
        
        // Actualizar título
        document.title = currentRoute.title;
        
        // Actualizar meta description
        updateMetaName('description', currentRoute.description);
        
        // Actualizar Open Graph
        updateMetaTag('og:title', currentRoute.title);
        updateMetaTag('og:description', currentRoute.description);
        updateMetaTag('og:image', baseUrl + currentRoute.ogImage);
        updateMetaTag('og:url', baseUrl + currentPath);
        updateMetaTag('og:type', 'website');
        
        // Actualizar Twitter
        updateMetaName('twitter:card', 'summary_large_image');
        updateMetaName('twitter:title', currentRoute.title);
        updateMetaName('twitter:description', currentRoute.description);
        updateMetaName('twitter:image', baseUrl + currentRoute.ogImage);
        
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
