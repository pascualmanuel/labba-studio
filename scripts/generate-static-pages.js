const fs = require("fs");
const path = require("path");

const generateStaticPages = () => {
  console.log("🚀 Generando páginas estáticas con meta tags específicos...");

  // Leer el index.html principal
  const indexPath = path.join("build", "index.html");
  if (!fs.existsSync(indexPath)) {
    console.log(
      "❌ No se encontró build/index.html. Ejecuta 'npm run build' primero."
    );
    return;
  }

  let baseHtml = fs.readFileSync(indexPath, "utf-8");

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

  // Función para generar HTML con meta tags específicos
  const generatePageHtml = (route) => {
    const baseUrl = "https://labba.studio";

    // Reemplazar los meta tags existentes con los específicos de la ruta
    // Usar expresiones regulares más específicas para HTML minificado
    let pageHtml = baseHtml
      .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
      .replace(
        /<meta name="description" content="[^"]*"\/>/,
        `<meta name="description" content="${route.description}"/>`
      )
      .replace(
        /<meta property="og:title" content="[^"]*"\/>/,
        `<meta property="og:title" content="${route.title}"/>`
      )
      .replace(
        /<meta property="og:description" content="[^"]*"\/>/,
        `<meta property="og:description" content="${route.description}"/>`
      )
      .replace(
        /<meta property="og:image" content="[^"]*"\/>/,
        `<meta property="og:image" content="${baseUrl}${route.ogImage}"/>`
      )
      .replace(
        /<meta property="og:url" content="[^"]*"\/>/,
        `<meta property="og:url" content="${baseUrl}${route.path}"/>`
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*"\/>/,
        `<meta name="twitter:title" content="${route.title}"/>`
      )
      .replace(
        /<meta name="twitter:description" content="[^"]*"\/>/,
        `<meta name="twitter:description" content="${route.description}"/>`
      )
      .replace(
        /<meta name="twitter:image" content="[^"]*"\/>/,
        `<meta name="twitter:image" content="${baseUrl}${route.ogImage}"/>`
      );

    return pageHtml;
  };

  // Generar páginas para cada ruta
  routes.forEach((route) => {
    const pageHtml = generatePageHtml(route);

    if (route.path === "/") {
      // Para la home, sobrescribir el index.html principal
      fs.writeFileSync(indexPath, pageHtml);
      console.log(`✅ Generado: ${route.path} -> ${route.ogImage}`);
    } else {
      // Para otras rutas, crear archivos en subdirectorios
      const routeDir = path.join("build", route.path);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }

      const routeIndexPath = path.join(routeDir, "index.html");
      fs.writeFileSync(routeIndexPath, pageHtml);
      console.log(`✅ Generado: ${route.path} -> ${route.ogImage}`);
    }
  });

  console.log("🎉 Páginas estáticas generadas exitosamente!");
  console.log("📁 Cada ruta tiene su propio HTML con meta tags específicos");
  console.log("🚀 Listo para deploy!");
};

// Ejecutar si se llama directamente
if (require.main === module) {
  generateStaticPages();
}

module.exports = generateStaticPages;
