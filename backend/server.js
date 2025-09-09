const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
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
    .replace(/['"]/g, "")
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

// Health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Blog backend listening on port ${PORT}`);
});
