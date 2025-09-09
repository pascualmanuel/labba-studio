// src/pages/BlogEdit.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getBlogById, updateBlogById } from "../api/blogs";

/* ==== helpers ==== */
const toSlug = (s) =>
  (s || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const htmlToText = (html) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return tmp.textContent || tmp.innerText || "";
};

const calcReadTime = (html) => {
  const words = htmlToText(html).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

const slugify = toSlug;

const quillModules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "blockquote", "code-block", "image"],
    ["clean"],
  ],
};
const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "blockquote",
  "code-block",
  "image",
];

export default function BlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // post fields
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Design");
  const [tagsInput, setTagsInput] = useState("");
  const [published, setPublished] = useState(true);
  const [date, setDate] = useState(""); // YYYY-MM-DD (createdAt)
  const [createdAtISO, setCreatedAtISO] = useState("");

  // preview controls
  const [split, setSplit] = useState(false);
  const contentRef = useRef(null);
  const [toc, setToc] = useState([]);

  // load
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const b = await getBlogById(id);
        if (!mounted) return;
        setSlug(b.slug || "");
        setTitle(b.title || "");
        setSubtitle(b.subtitle || "");
        setCoverUrl(b.coverUrl || "");
        setExcerpt(b.excerpt || "");
        setContent(b.content || "");
        setCategory(b.category || "Design");
        setTagsInput((b.tags || []).join(", "));
        setPublished(b.published !== false);
        const ci = b.createdAt || new Date().toISOString();
        setCreatedAtISO(ci);
        // para el input date:
        const d = new Date(ci);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        setDate(`${y}-${m}-${dd}`);
        setError("");
      } catch (e) {
        setError("No se pudo cargar el post");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  // preview derived
  const readTime = useMemo(() => calcReadTime(content), [content]);
  const tags = useMemo(
    () =>
      tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    [tagsInput]
  );
  const displayCreatedAtISO = useMemo(
    () =>
      date
        ? new Date(date).toISOString()
        : createdAtISO || new Date().toISOString(),
    [date, createdAtISO]
  );

  // TOC builder for preview
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const items = [];
    const used = new Set();
    root.querySelectorAll("h2").forEach((h) => {
      const text = (h.textContent || "").trim();
      let idH = h.id || slugify(text || "section");
      while (used.has(idH)) idH = `${idH}-1`;
      used.add(idH);
      if (!h.id) h.id = idH;
      h.style.scrollMarginTop = "120px";
      items.push({ id: idH, text: text || "Section" });
    });
    setToc(items);
  }, [content]);

  const handleSave = async () => {
    setError("");
    setSuccess(false);
    if (!title.trim() || !content.trim()) {
      setError("Título y contenido son obligatorios");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        title: title.trim(),
        subtitle: subtitle.trim() || null,
        coverUrl: coverUrl.trim() || null,
        excerpt: (excerpt || htmlToText(content).slice(0, 180)).trim(),
        content,
        category: category || null,
        tags, // array
        readTime, // actualizamos a partir del contenido
        createdAt: displayCreatedAtISO, // permitir editar fecha
        published,
        updatedAt: new Date().toISOString(),
        // Nota: NO cambiamos slug aquí para evitar romper URLs existentes.
      };
      const updated = await updateBlogById(id, payload);
      setSuccess(true);
      // opcional: navegar al artículo actualizado
      // navigate(`/blog/${updated.slug || slug}`);
    } catch (e) {
      setError(e.message || "Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p style={{ padding: 16 }}>Cargando…</p>;
  if (error) return <p style={{ padding: 16, color: "red" }}>{error}</p>;

  return (
    <div className="px-4 pt-[150px] pb-24">
      {/* encabezado */}
      <div className="max-w-[1400px] mx-auto mb-4 flex items-center justify-between">
        <h1 className="text-white text-xl">Editar blog</h1>
        <div className="flex items-center gap-3 text-[#B5B5B5]">
          <span className="hidden md:inline">Slug:</span>
          <code className="text-[#D6D6D6]">
            /blog/{slug || toSlug(title) || "…"}
          </code>
          <button
            onClick={() => setSplit((v) => !v)}
            className="ml-3 px-3 py-1 rounded border border-[#303030] text-[#D6D6D6] hover:text-white hover:border-[#505050]"
          >
            {split ? "Vista: Sólo editor" : "Vista: Editor + Preview"}
          </button>
        </div>
      </div>

      {/* layout: editor | preview */}
      <div
        className={`max-w-[1400px] mx-auto grid gap-8 ${
          split ? "lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {/* ==== EDITOR ==== */}
        <div className="rounded-[12px] border border-[#1E1E1E] p-4">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
          />
          <input
            type="text"
            placeholder="Subtítulo / copete (opcional)"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
          />
          <input
            type="url"
            placeholder="URL de portada (opcional)"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
          />

          <div className="mb-3">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={quillModules}
              formats={quillFormats}
            />
          </div>

          <input
            type="text"
            placeholder="Excerpt (opcional, 1–2 líneas)"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
          />

          <div className="flex gap-3 flex-wrap mb-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
            >
              {["Design", "Technology", "Guides", "News", "AI"].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Tags separadas por coma (ej: UX/UI, Research)"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="flex-1 min-w-[220px] px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
            />

            <label className="inline-flex items-center gap-2 text-[#D6D6D6]">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />
              Publicado
            </label>
          </div>

          <div className="flex items-center gap-3 mb-4 text-[#B5B5B5]">
            <span>Tiempo estimado: {readTime} min</span>
            <span>•</span>
            <span>Última edición: {new Date().toLocaleString()}</span>
          </div>

          <div className="flex gap-8 items-center">
            <button
              onClick={handleSave}
              disabled={saving || !title.trim() || !content.trim()}
              className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 disabled:opacity-50"
            >
              {saving ? "Guardando..." : "Guardar"}
            </button>
            {success && <span className="text-green-400">Guardado ✅</span>}
            {error && <span className="text-red-400">{error}</span>}
            <Link
              to={`/blog/${slug}`}
              className="text-[#D6D6D6] hover:text-white ml-auto"
            >
              Ver artículo →
            </Link>
          </div>
        </div>

        {/* ==== PREVIEW (idéntica al front) ==== */}
        <div className="rounded-[12px] border border-[#1E1E1E] p-0 overflow-hidden">
          {/* HERO FULL WIDTH */}
          <div className="w-full">
            <div className="mx-auto max-w-[1900px] px-4 pt-4">
              <h1 className="text-white font-semibold leading-[0.95] text-[48px] md:text-[56px] lg:text-[72px]">
                {title || "Tu título aparecerá aquí"}
              </h1>
              {subtitle ? (
                <p className="mt-3 text-[#CFCFCF] text-[24px] leading-relaxed">
                  {subtitle}
                </p>
              ) : (
                <p className="mt-3 text-[#666] text-[24px] leading-relaxed">
                  Subtítulo / copete…
                </p>
              )}

              {coverUrl && (
                <div className="relative my-6 h-[380px] md:h-[460px] rounded-[20px] overflow-hidden bg-[#0F0F0F]">
                  <img
                    src={coverUrl}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute -inset-6 pointer-events-none opacity-40 blur-[16px]"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 0% 0%, rgba(255,106,61,.25) 0%, rgba(90,16,32,.2) 55%, transparent 70%)",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Debajo: bulletpoints — noticia — about */}
          <div
            className="mx-auto max-w-[1400px] px-4 pb-8 gap-8 lg:grid"
            style={{ gridTemplateColumns: "215px minmax(0, 900px) 215px" }}
          >
            {/* TOC izq */}
            <aside className="hidden lg:block">
              <nav
                className="sticky top-[8px] text-[#B5B5B5]"
                aria-label="On this page"
              >
                {toc.length ? (
                  <ul className="space-y-3">
                    {toc.map((it) => (
                      <li key={it.id} className="leading-snug">
                        <span className="inline-flex items-start gap-2">
                          <span className="mt-[6px] inline-block h-[6px] w-[6px] rounded-full bg-[#777]" />
                          <span className="text-[14px]">{it.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[13px] text-[#666]">
                    Añadí H2 para ver el índice
                  </p>
                )}
              </nav>
            </aside>

            {/* contenido centro: tipografía del front */}
            <article>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="text-[14px] text-[#D6D6D6]">
                  {new Date(displayCreatedAtISO).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  <span className="mx-1">•</span> {readTime} min read
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  {tags.length ? (
                    tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-[#1E1E1E] text-[#D6D6D6] text-[12px]"
                      >
                        {t}
                      </span>
                    ))
                  ) : (
                    <span className="text-[#666] text-[12px]">Tags…</span>
                  )}
                </div>
              </div>

              <div
                ref={contentRef}
                className="
                  max-w-[900px]
                  [&_p]:text-[18px] [&_p]:leading-8 [&_p]:text-[#E7E7E7]
                  [&_h2]:text-[18px] [&_h2]:font-bold [&_h2]:text-white
                  [&_h2]:mt-8 [&_h2]:mb-3
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
                  [&_img]:rounded-[12px] [&_img]:my-6
                "
                dangerouslySetInnerHTML={{
                  __html:
                    content ||
                    '<p style="color:#666">Contenido del artículo…</p>',
                }}
              />
            </article>

            {/* about der */}
            <aside className="hidden lg:block">
              <div className="sticky top-[8px] w-[215px] h-[345px] rounded-[16px] border border-[#1E1E1E] bg-[#0B0B0B] p-4">
                <h3 className="text-white text-[16px] font-semibold">
                  About Labba
                </h3>
                <p className="mt-2 text-[13px] leading-snug text-[#CFCFCF]">
                  We design & build digital products with a long-term
                  mindset—scalable, usable, and delightful. From discovery to
                  delivery, we help teams move fast with confidence.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[14px] text-[#D6D6D6]">
                  Learn more →
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
