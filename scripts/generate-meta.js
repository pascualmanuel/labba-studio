const fs = require("fs");
const path = require("path");

const generateMetaPages = () => {
  console.log("🚀 Generando meta tags dinámicos...");

  // Configuración de rutas principales y sus OG images
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

  // Función para generar HTML con meta tags
  const generateMetaHtml = (route, isPost = false, post = null) => {
    const baseUrl = "https://labba.studio";
    const title = isPost ? `${post.title} - Labba Studio` : route.title;
    const description = isPost ? post.excerpt : route.description;
    const ogImage = isPost
      ? post.coverUrl || `${baseUrl}/og/blog-og.jpg`
      : `${baseUrl}${route.ogImage}`;
    const url = isPost
      ? `${baseUrl}/blog/${post.slug}`
      : `${baseUrl}${route.path}`;
    const ogType = isPost ? "article" : "website";
    const redirectPath = isPost ? `/blog/${post.slug}` : route.path;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:site_name" content="Labba Studio">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${url}">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${description}">
  <meta property="twitter:image" content="${ogImage}">
  
  <!-- Additional SEO -->
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${url}">
  
  <script>
    // Redirect to actual page
    window.location.href = '${redirectPath}';
  </script>
</head>
<body>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
    <div style="text-align: center;">
      <h1>Redirecting...</h1>
      <p>Taking you to <a href="${redirectPath}">${title}</a></p>
    </div>
  </div>
</body>
</html>`;
  };

  // Generar meta tags para rutas principales
  console.log("📄 Generando meta tags para rutas principales...");
  routes.forEach((route) => {
    const metaHtml = generateMetaHtml(route);

    // Crear directorio si no existe
    const dir = route.path === "/" ? "build" : `build${route.path}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Escribir archivo
    fs.writeFileSync(`${dir}/index.html`, metaHtml);
    console.log(`✅ Generado: ${route.path} -> ${route.ogImage}`);
  });

  // Generar meta tags para posts de blog individuales
  console.log("📝 Generando meta tags para posts de blog...");
  try {
    const posts = JSON.parse(
      fs.readFileSync("backend/data/blogs.json", "utf-8")
    );

    posts.forEach((post) => {
      if (post.published !== false) {
        // Solo posts publicados
        const metaHtml = generateMetaHtml(null, true, post);

        // Crear directorio para el post
        const dir = `build/blog/${post.slug}`;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        // Escribir archivo
        fs.writeFileSync(`${dir}/index.html`, metaHtml);
        console.log(
          `✅ Generado: /blog/${post.slug} -> ${
            post.coverUrl || "/og/blog-og.jpg"
          }`
        );
      }
    });
  } catch (error) {
    console.log(
      "⚠️ No se encontró el archivo de blogs, saltando posts individuales"
    );
    console.log("   Asegúrate de que backend/data/blogs.json existe");
  }

  console.log("🎉 Meta tags generados exitosamente!");
  console.log("📁 Archivos generados en la carpeta build/");
  console.log("🚀 Listo para deploy!");
};

// Ejecutar si se llama directamente
if (require.main === module) {
  generateMetaPages();
}

module.exports = generateMetaPages;
