const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const compression = require("compression");

const app = express();
app.set("trust proxy", 1);

const PORT = process.env.PORT || 3001;

// ===== Middleware
app.use(cors());
app.use(express.json({ limit: "2mb" }));

// ===== Storage (JSON en /data/blogs.json)
const dataDir = path.join(__dirname, "data");
const dataFilePath = path.join(dataDir, "blogs.json");

function ensureStorage() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2));
  }
}

function readBlogs() {
  ensureStorage();
  try {
    const content = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

function writeBlogs(blogs) {
  ensureStorage();
  fs.writeFileSync(dataFilePath, JSON.stringify(blogs, null, 2));
}

// ===== Helpers
const toSlug = (s = "") =>
  s
    .toLowerCase()
    .trim()
    .replace(/["']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const htmlToText = (html = "") => String(html).replace(/<[^>]*>/g, " ");

const calcReadTime = (html = "") => {
  const words = htmlToText(html).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200)); // ~200 wpm
};

const parseTags = (tags) => {
  if (Array.isArray(tags))
    return tags
      .map(String)
      .map((t) => t.trim())
      .filter(Boolean);
  if (typeof tags === "string")
    return tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  return [];
};

const uniqueSlug = (base, blogs) => {
  let s = base || "post";
  let i = 1;
  const exists = (x) => blogs.some((b) => b.slug === x);
  while (exists(s)) s = `${base}-${i++}`;
  return s;
};

// ===== Routes
// Listado
app.get("/api/blogs", (req, res) => {
  const blogs = readBlogs();
  res.json(blogs);
});

// Detalle por slug (public)
app.get("/api/blogs/:slug", (req, res) => {
  const blogs = readBlogs();
  const post = blogs.find((b) => b.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: "not found" });
  res.json(post);
});

// Detalle por id (privado para edición)
app.get("/api/blogs/id/:id", (req, res) => {
  const blogs = readBlogs();
  const post = blogs.find((b) => b.id === req.params.id);
  if (!post) return res.status(404).json({ error: "not found" });
  res.json(post);
});

// Crear post
app.post("/api/blogs", (req, res) => {
  const {
    title,
    content,
    coverUrl,
    subtitle,
    excerpt,
    category,
    tags,
    readTime,
    createdAt,
    published,
    slug,
  } = req.body || {};

  if (!title || !content) {
    return res.status(400).json({ error: "title and content are required" });
  }

  const blogs = readBlogs();
  const now = new Date().toISOString();
  const createdISO = createdAt ? new Date(createdAt).toISOString() : now;

  const rawSlug = slug && String(slug).trim() ? toSlug(slug) : toSlug(title);
  const finalSlug = uniqueSlug(rawSlug, blogs);

  const finalExcerpt =
    (excerpt && String(excerpt).trim()) ||
    htmlToText(content).trim().slice(0, 180);

  const newBlog = {
    id: Date.now().toString(),
    slug: finalSlug,
    title: String(title).trim(),
    subtitle: subtitle ? String(subtitle).trim() : null,
    excerpt: finalExcerpt,
    content, // HTML del editor
    coverUrl: coverUrl ? String(coverUrl).trim() : null,
    category: category ? String(category).trim() : null,
    tags: parseTags(tags),
    readTime:
      Number.isFinite(readTime) && readTime > 0
        ? Math.ceil(readTime)
        : calcReadTime(content),
    createdAt: createdISO,
    updatedAt: now,
    published: published === false ? false : true, // default true
  };

  // Insertar al inicio para tener orden "más reciente primero"
  blogs.unshift(newBlog);
  writeBlogs(blogs);

  res.status(201).json(newBlog);
});

// Actualizar por id
app.put("/api/blogs/id/:id", (req, res) => {
  const {
    title,
    content,
    coverUrl,
    subtitle,
    excerpt,
    category,
    tags,
    readTime,
    published,
    slug,
  } = req.body || {};

  const blogs = readBlogs();
  const idx = blogs.findIndex((b) => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "not found" });

  const current = blogs[idx];
  const now = new Date().toISOString();

  let finalSlug = current.slug;
  if (slug && String(slug).trim()) {
    const rawSlug = toSlug(slug);
    if (rawSlug !== current.slug) {
      // garantizar unicidad
      const exists = blogs.some((b, i) => i !== idx && b.slug === rawSlug);
      finalSlug = exists ? uniqueSlug(rawSlug, blogs) : rawSlug;
    }
  }

  const merged = {
    ...current,
    title: title !== undefined ? String(title).trim() : current.title,
    subtitle:
      subtitle !== undefined ? String(subtitle).trim() : current.subtitle,
    content: content !== undefined ? content : current.content,
    coverUrl:
      coverUrl !== undefined
        ? coverUrl
          ? String(coverUrl).trim()
          : null
        : current.coverUrl,
    excerpt:
      excerpt !== undefined
        ? String(excerpt).trim()
        : current.excerpt || htmlToText(current.content).trim().slice(0, 180),
    category:
      category !== undefined
        ? category
          ? String(category).trim()
          : null
        : current.category,
    tags: tags !== undefined ? parseTags(tags) : current.tags,
    readTime:
      readTime !== undefined && Number.isFinite(readTime) && readTime > 0
        ? Math.ceil(readTime)
        : current.readTime || calcReadTime(content || current.content),
    published: published !== undefined ? !!published : current.published,
    slug: finalSlug,
    updatedAt: now,
  };

  blogs[idx] = merged;
  writeBlogs(blogs);
  res.json(merged);
});

// Eliminar por id

app.delete("/api/blogs/id/:id", (req, res) => {
  const blogs = readBlogs();
  const idx = blogs.findIndex((b) => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "not found" });
  const removed = blogs.splice(idx, 1)[0];
  writeBlogs(blogs);
  res.json({ ok: true, removedId: removed.id });
});

// Health check

const FRONT_BUILD = path.resolve(__dirname, "..", "build");

// Rendertron / Prerender service (puede ser propio o el público)
const RENDERTRON_URL =
  process.env.RENDERTRON_URL || "https://labba-blog-api.onrender.com";

// Lista de bots que no ejecutan JS y necesitan HTML prerenderizado
const BOT_UA = [
  "googlebot",
  "bingbot",
  "yandex",
  "baiduspider",
  "duckduckbot",
  "twitterbot",
  "facebookexternalhit",
  "facebot",
  "linkedinbot",
  "slackbot",
  "whatsapp",
  "telegrambot",
  "pinterest",
  "discordbot",
  "quora link preview",
  "embedly",
  "vkShare",
  "W3C_Validator",
  "applebot",
  "redditbot",
];

// ──────────────────────────────────────────────────────────────
// Middlewares
// ──────────────────────────────────────────────────────────────
app.use(compression());

// Sirve estáticos del build (incluye /og/*)
// Ojo: no usamos "index: true" para que el fallback a SPA sea controlado
app.use(
  "/static",
  express.static(path.join(FRONT_BUILD, "static"), { maxAge: "365d" })
);
app.use(
  "/assets",
  express.static(path.join(FRONT_BUILD, "assets"), { maxAge: "365d" })
);
app.use("/og", express.static(path.join(FRONT_BUILD, "og"), { maxAge: "7d" }));
app.use(express.static(FRONT_BUILD, { maxAge: "1h", index: false }));

// Salud
app.get("/health", (_, res) => res.status(200).send("OK"));

// ──────────────────────────────────────────────────────────────
/**
 * Detecta si el UA es un bot social o crawler.
 */
function isBotRequest(req) {
  const ua = (req.headers["user-agent"] || "").toLowerCase();
  return BOT_UA.some((b) => ua.includes(b));
}

/**
 * Devuelve la URL pública original (respeta proxy) para pasar a Rendertron.
 */
function getPublicUrl(req) {
  const proto =
    (req.headers["x-forwarded-proto"] || "").split(",")[0] ||
    req.protocol ||
    "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}${req.originalUrl}`;
}

/**
 * Prerender para bots: pide HTML a Rendertron y lo devuelve tal cual.
 */
async function servePrerender(req, res, next) {
  try {
    if (req.method !== "GET") return next();

    // Solo HTML
    const accept = (req.headers.accept || "").toLowerCase();
    if (!accept.includes("text/html")) return next();

    if (!isBotRequest(req)) return next();

    const targetUrl = getPublicUrl(req);
    const prerenderUrl = `${RENDERTRON_URL}/${encodeURI(targetUrl)}`;

    // Node 18+ tiene fetch global
    const response = await fetch(prerenderUrl, {
      headers: {
        "User-Agent": req.headers["user-agent"] || "",
        "X-Forwarded-For": req.ip,
      },
      redirect: "follow",
    });

    if (!response.ok) {
      console.warn(
        `[prerender] ${response.status} ${response.statusText} for ${targetUrl}`
      );
      return next(); // fallback a SPA si falla
    }

    const html = await response.text();

    // Cache para bots (ajustá a gusto)
    res.setHeader("Cache-Control", "public, max-age=600, s-maxage=600");
    res.setHeader("Vary", "User-Agent, Accept");

    return res
      .status(200)
      .set("Content-Type", "text/html; charset=utf-8")
      .send(html);
  } catch (err) {
    console.error("[prerender] error:", err);
    return next(); // fallback a SPA si pasa algo
  }
}

// Hook de prerender ANTES del fallback a SPA
app.get("*", servePrerender);

// ──────────────────────────────────────────────────────────────
// Fallback SPA: devuelve el index.html del build para cualquier ruta
// (React Router se encarga del resto en el cliente)
// ──────────────────────────────────────────────────────────────
app.get("*", (req, res) => {
  const indexHtml = path.join(FRONT_BUILD, "index.html");
  if (!fs.existsSync(indexHtml)) {
    return res
      .status(500)
      .send("Build not found. Did you run `npm run build` on the frontend?");
  }

  // Cache moderada para HTML
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=60");
  res.sendFile(indexHtml);
});

// ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server ready on :${PORT}`);
  console.log(`   Serving FRONT_BUILD from: ${FRONT_BUILD}`);
  console.log(`   Rendertron: ${RENDERTRON_URL}`);
});
