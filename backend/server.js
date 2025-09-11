const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3001;
const RENDERTRON_URL =
  process.env.RENDERTRON_URL || "https://render-tron.appspot.com/render";
const FRONT_BUILD = path.resolve(__dirname, "..", "build");

// ===== Middleware
app.set("trust proxy", 1);
app.use(cors());
app.use(compression());
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

// ===== Bot Detection
const isBot = (userAgent) => {
  if (!userAgent) return false;
  const botPatterns = [
    "googlebot",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "slackbot",
    "whatsapp",
    "telegrambot",
    "bingbot",
    "yandexbot",
    "baiduspider",
    "duckduckbot",
    "applebot",
    "ia_archiver",
    "facebookcatalog",
    "pinterest",
    "discordbot",
    "skypeuripreview",
    "viberbot",
    "telegram",
  ];

  const ua = userAgent.toLowerCase();
  return botPatterns.some((pattern) => ua.includes(pattern));
};

// ===== Prerender for Social Bots
const prerenderForBot = async (req, res, next) => {
  const userAgent = req.get("User-Agent");
  const acceptHtml =
    req.get("Accept") && req.get("Accept").includes("text/html");

  if (req.method === "GET" && acceptHtml && isBot(userAgent)) {
    try {
      const protocol =
        req.get("X-Forwarded-Proto") || (req.secure ? "https" : "http");
      const host = req.get("Host") || req.get("X-Forwarded-Host");
      const fullUrl = `${protocol}://${host}${req.originalUrl}`;

      console.log(`🤖 Bot detected: ${userAgent}`);
      console.log(`🔗 Prerendering: ${fullUrl}`);

      const prerenderUrl = `${RENDERTRON_URL}/${encodeURIComponent(fullUrl)}`;
      const response = await fetch(prerenderUrl, {
        headers: {
          "User-Agent": userAgent,
        },
      });

      if (response.ok) {
        const html = await response.text();
        res.set({
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=600, s-maxage=600",
        });
        return res.send(html);
      } else {
        console.log(
          `⚠️ Prerender failed (${response.status}), falling back to SPA`
        );
      }
    } catch (error) {
      console.log(`❌ Prerender error: ${error.message}, falling back to SPA`);
    }
  }

  next();
};

// ===== API Routes
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
app.get("/health", (req, res) => {
  res.send("OK");
});

// ===== Static Files with Caching
// Static assets with long cache
app.use(
  "/static",
  express.static(path.join(FRONT_BUILD, "static"), {
    maxAge: "365d",
    immutable: true,
  })
);

// Assets with long cache
app.use(
  "/assets",
  express.static(path.join(FRONT_BUILD, "assets"), {
    maxAge: "365d",
    immutable: true,
  })
);

// OG images with 7 days cache
app.use(
  "/og",
  express.static(path.join(FRONT_BUILD, "og"), {
    maxAge: "7d",
  })
);

// ===== Prerender Middleware (before SPA fallback)
app.use(prerenderForBot);

// ===== SPA Fallback
app.get("*", (req, res) => {
  // Skip API routes
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  const indexPath = path.join(FRONT_BUILD, "index.html");

  if (fs.existsSync(indexPath)) {
    res.set({
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=60",
    });
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Build not found. Run "npm run build" first.');
  }
});

// ===== Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Frontend build path: ${FRONT_BUILD}`);
  console.log(`🤖 Rendertron URL: ${RENDERTRON_URL}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/health`);
});
