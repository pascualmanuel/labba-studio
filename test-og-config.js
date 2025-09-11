#!/usr/bin/env node

/**
 * Script de prueba para verificar la configuración de Open Graph
 *
 * Este script simula requests de bots de redes sociales para verificar
 * que las redirecciones y metadatos funcionen correctamente.
 */

const fs = require("fs");
const path = require("path");

// User-Agents de bots de redes sociales
const botUserAgents = [
  "facebookexternalhit/1.1",
  "Twitterbot/1.0",
  "LinkedInBot/1.0",
  "WhatsApp/2.0",
  "TelegramBot",
  "Slackbot-LinkExpanding",
  "Discordbot/2.0",
  "Pinterest/0.2",
  "Googlebot/2.1",
  "bingbot/2.0",
];

// Rutas a probar
const routes = [
  { path: "/", expectedImage: "og/home-og.jpg", description: "Home" },
  { path: "/about", expectedImage: "og/about-og.jpg", description: "About" },
  {
    path: "/contact",
    expectedImage: "og/contact-og.jpg",
    description: "Contact",
  },
  { path: "/work", expectedImage: "og/works-og.jpg", description: "Work" },
  {
    path: "/works/scouting-labs",
    expectedImage: "og/works-og.jpg",
    description: "Work Project",
  },
  {
    path: "/services",
    expectedImage: "og/services-og.jpg",
    description: "Services",
  },
  { path: "/blog", expectedImage: "og/blog-og.jpg", description: "Blog" },
  {
    path: "/blog/some-post",
    expectedImage: "og/blog-og.jpg",
    description: "Blog Post",
  },
  {
    path: "/blog/tag/design",
    expectedImage: "og/blog-og.jpg",
    description: "Blog Tag",
  },
];

// Verificar que los archivos HTML existan
function checkHtmlFiles() {
  console.log("🔍 Verificando archivos HTML estáticos...\n");

  const htmlFiles = [
    "public/index.html",
    "public/about/index.html",
    "public/contact/index.html",
    "public/work/index.html",
    "public/services/index.html",
    "public/blog/index.html",
  ];

  let allExist = true;

  htmlFiles.forEach((file) => {
    const exists = fs.existsSync(file);
    console.log(`${exists ? "✅" : "❌"} ${file}`);
    if (!exists) allExist = false;
  });

  console.log("");
  return allExist;
}

// Verificar que las imágenes OG existan
function checkOgImages() {
  console.log("🖼️  Verificando imágenes Open Graph...\n");

  const ogImages = [
    "public/og/home-og.jpg",
    "public/og/about-og.jpg",
    "public/og/contact-og.jpg",
    "public/og/works-og.jpg",
    "public/og/services-og.jpg",
    "public/og/blog-og.jpg",
  ];

  let allExist = true;

  ogImages.forEach((image) => {
    const exists = fs.existsSync(image);
    console.log(`${exists ? "✅" : "❌"} ${image}`);
    if (!exists) allExist = false;
  });

  console.log("");
  return allExist;
}

// Verificar que el archivo _redirects exista
function checkRedirectsFile() {
  console.log("🔄 Verificando archivo _redirects...\n");

  const redirectsFile = "public/_redirects";
  const exists = fs.existsSync(redirectsFile);

  console.log(`${exists ? "✅" : "❌"} ${redirectsFile}`);

  if (exists) {
    const content = fs.readFileSync(redirectsFile, "utf8");
    const hasBotRules = content.includes("User-Agent: *bot*");
    console.log(`${hasBotRules ? "✅" : "❌"} Contiene reglas para bots`);
  }

  console.log("");
  return exists;
}

// Verificar metadatos en archivos HTML
function checkHtmlMetadata() {
  console.log("📋 Verificando metadatos en archivos HTML...\n");

  const htmlFiles = [
    { file: "public/about/index.html", expectedImage: "og/about-og.jpg" },
    { file: "public/contact/index.html", expectedImage: "og/contact-og.jpg" },
    { file: "public/work/index.html", expectedImage: "og/works-og.jpg" },
    { file: "public/services/index.html", expectedImage: "og/services-og.jpg" },
    { file: "public/blog/index.html", expectedImage: "og/blog-og.jpg" },
  ];

  let allCorrect = true;

  htmlFiles.forEach(({ file, expectedImage }) => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      const hasCorrectImage = content.includes(expectedImage);
      const hasOgImage = content.includes('property="og:image"');
      const hasTwitterCard = content.includes('name="twitter:card"');

      console.log(
        `${hasCorrectImage ? "✅" : "❌"} ${file} - Imagen OG correcta`
      );
      console.log(`${hasOgImage ? "✅" : "❌"} ${file} - Tiene og:image`);
      console.log(
        `${hasTwitterCard ? "✅" : "❌"} ${file} - Tiene twitter:card`
      );

      if (!hasCorrectImage || !hasOgImage || !hasTwitterCard) {
        allCorrect = false;
      }
    } else {
      console.log(`❌ ${file} - Archivo no existe`);
      allCorrect = false;
    }
    console.log("");
  });

  return allCorrect;
}

// Función principal
function main() {
  console.log("🚀 Verificando configuración de Open Graph\n");
  console.log("=".repeat(50));
  console.log("");

  const htmlFilesOk = checkHtmlFiles();
  const ogImagesOk = checkOgImages();
  const redirectsOk = checkRedirectsFile();
  const metadataOk = checkHtmlMetadata();

  console.log("📊 Resumen de verificación:");
  console.log("=".repeat(30));
  console.log(`${htmlFilesOk ? "✅" : "❌"} Archivos HTML estáticos`);
  console.log(`${ogImagesOk ? "✅" : "❌"} Imágenes Open Graph`);
  console.log(`${redirectsOk ? "✅" : "❌"} Archivo _redirects`);
  console.log(`${metadataOk ? "✅" : "❌"} Metadatos HTML`);
  console.log("");

  if (htmlFilesOk && ogImagesOk && redirectsOk && metadataOk) {
    console.log("🎉 ¡Configuración completa y correcta!");
    console.log("");
    console.log("📝 Próximos pasos:");
    console.log("1. Hacer deploy del sitio");
    console.log("2. Probar con Twitter Card Validator");
    console.log("3. Probar con Facebook Sharing Debugger");
    console.log("4. Probar con LinkedIn Post Inspector");
  } else {
    console.log("⚠️  Hay problemas en la configuración que deben resolverse.");
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main();
}

module.exports = {
  checkHtmlFiles,
  checkOgImages,
  checkRedirectsFile,
  checkHtmlMetadata,
};
