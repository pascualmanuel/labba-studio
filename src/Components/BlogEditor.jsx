import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveBlog } from "../api/blogs";
import { uploadImageToCloudinary } from "../api/cloudinary";

/* ==== helpers ==== */
const toSlug = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/["']/g, "")
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

export default function BlogEditor() {
  /* form state */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [subtitle, setSubtitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("Design");
  const [tagsInput, setTagsInput] = useState(""); // "tag1, tag2"
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [published, setPublished] = useState(true);
  const [coverUploading, setCoverUploading] = useState(false);

  /* preview state */
  const [split, setSplit] = useState(false); // vista dividida Editor | Preview
  const contentRef = useRef(null);
  const quillRef = useRef(null);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const quill = quillRef.current?.getEditor?.();
    if (!quill) return;

    // Toolbar image handler
    const toolbar = quill.getModule("toolbar");
    if (toolbar) {
      toolbar.addHandler("image", async () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async () => {
          const file = input.files?.[0];
          if (!file) return;
          try {
            const url = await uploadImageToCloudinary(file);
            const range = quill.getSelection(true);
            quill.insertEmbed(range ? range.index : 0, "image", url, "user");
            quill.setSelection((range ? range.index : 0) + 1, 0);
          } catch (e) {
            console.error(e);
            setError(e.message || "Error al subir imagen");
          }
        };
        input.click();
      });
    }

    // Paste handler: if an image blob is pasted, upload and insert URL
    function handlePaste(e) {
      if (!e.clipboardData) return;
      const items = Array.from(e.clipboardData.items || []);
      const imageItem = items.find((it) => it.type?.startsWith("image/"));
      if (!imageItem) return;
      const file = imageItem.getAsFile?.();
      if (!file) return;
      e.preventDefault();
      (async () => {
        try {
          const url = await uploadImageToCloudinary(file);
          const range = quill.getSelection(true);
          quill.insertEmbed(range ? range.index : 0, "image", url, "user");
          quill.setSelection((range ? range.index : 0) + 1, 0);
        } catch (err) {
          console.error(err);
          setError(err.message || "Error al subir imagen pegada");
        }
      })();
    }

    // Drag & drop handler: upload each image file
    function handleDrop(e) {
      const dt = e.dataTransfer;
      if (!dt || !dt.files || dt.files.length === 0) return;
      const imageFiles = Array.from(dt.files).filter((f) =>
        f.type?.startsWith("image/")
      );
      if (imageFiles.length === 0) return;
      e.preventDefault();
      (async () => {
        try {
          for (const file of imageFiles) {
            const url = await uploadImageToCloudinary(file);
            const range = quill.getSelection(true);
            quill.insertEmbed(range ? range.index : 0, "image", url, "user");
            quill.setSelection((range ? range.index : 0) + 1, 0);
          }
        } catch (err) {
          console.error(err);
          setError(err.message || "Error al subir imagen arrastrada");
        }
      })();
    }

    const editorEl = quill.root;
    editorEl.addEventListener("paste", handlePaste);
    editorEl.addEventListener("drop", handleDrop);

    return () => {
      editorEl.removeEventListener("paste", handlePaste);
      editorEl.removeEventListener("drop", handleDrop);
    };
  }, [quillRef.current]);

  const readTime = useMemo(() => calcReadTime(content), [content]);
  const tags = useMemo(
    () =>
      tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    [tagsInput]
  );
  const createdAtISO = useMemo(
    () => (date ? new Date(date).toISOString() : new Date().toISOString()),
    [date]
  );

  /* genera TOC en la preview (asigna IDs a h2) */
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const items = [];
    const used = new Set();
    root.querySelectorAll("h2").forEach((h) => {
      const text = (h.textContent || "").trim();
      let id = h.id || slugify(text || "section");
      while (used.has(id)) id = `${id}-1`;
      used.add(id);
      if (!h.id) h.id = id;
      h.style.scrollMarginTop = "120px";
      items.push({ id, text: text || "Section" });
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
      const nowIso = new Date().toISOString();
      const payload = {
        id: Date.now().toString(),
        slug: toSlug(title),
        title: title.trim(),
        subtitle: subtitle.trim() || undefined,
        excerpt: (excerpt || htmlToText(content).slice(0, 180)).trim(),
        content,
        coverUrl: coverUrl.trim() || undefined,
        category,
        tags,
        readTime,
        createdAt: createdAtISO,
        updatedAt: nowIso,
        published,
      };
      await saveBlog(payload);
      setSuccess(true);

      // limpiar
      setTitle("");
      setSubtitle("");
      setExcerpt("");
      setContent("");
      setCoverUrl("");
      setCategory("Design");
      setTagsInput("");
      setDate("");
      setPublished(true);
    } catch (e) {
      setError(e.message || "Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  const handleCoverFile = async (file) => {
    if (!file) return;
    try {
      setCoverUploading(true);
      const url = await uploadImageToCloudinary(file);
      setCoverUrl(url);
    } catch (e) {
      console.error(e);
      setError(e.message || "Error al subir la portada");
    } finally {
      setCoverUploading(false);
    }
  };

  return (
    <div className="px-4 pt-[150px] pb-24">
      {/* Toggle vista */}
      <div className="max-w-[1400px] mx-auto mb-4 flex items-center justify-between">
        <h1 className="text-white text-xl">Crear nuevo blog</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSplit((v) => !v)}
            className="px-3 py-1 rounded border border-[#303030] text-[#D6D6D6] hover:text-white hover:border-[#505050]"
          >
            {split ? "Vista: Sólo editor" : "Vista: Editor + Preview"}
          </button>
        </div>
      </div>

      {/* Layout: Editor | Preview */}
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
            placeholder="Subtítulo "
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
          />
          <div className="w-full mb-3 flex gap-2 items-center">
            <input
              type="url"
              placeholder="URL de portada (opcional)"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              className="flex-1 px-3 py-2 rounded bg-[#0B0B0B] border border-[#1E1E1E] text-white"
            />
            <label className="px-3 py-2 rounded bg-white/10 text-white cursor-pointer hover:bg-white/20 border border-[#1E1E1E]">
              Subir portada
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleCoverFile(e.target.files?.[0])}
                className="hidden"
              />
            </label>
            {coverUploading && (
              <span className="text-[#B5B5B5] text-sm">Subiendo…</span>
            )}
          </div>
          <div className="mb-3">
            <ReactQuill
              ref={quillRef}
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
            <span>Slug: /blog/{toSlug(title) || "…"}</span>
          </div>

          <button
            onClick={handleSave}
            disabled={saving || !title.trim() || !content.trim()}
            className="px-4 py-2 rounded bg_white/10 bg-white/10 text-white hover:bg-white/20 disabled:opacity-50"
          >
            {saving ? "Guardando..." : "Guardar"}
          </button>
          {error && <p className="mt-2 text-red-400">{error}</p>}
          {success && (
            <p className="mt-2 text-green-400">Guardado correctamente</p>
          )}
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
                  Subtítulo
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

          {/* DEBAJO: bulletpoints — noticia — about */}
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
                {toc.length > 0 ? (
                  <ul className="space-y-3">
                    {toc.map((item) => (
                      <li key={item.id} className="leading-snug">
                        <span className="inline-flex items-start gap-2">
                          <span className="mt-[6px] inline-block h-[6px] w-[6px] rounded-full bg-[#777]" />
                          <span className="text-[14px]">{item.text}</span>
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

            {/* Contenido centro (tipografía del front) */}
            <article>
              {/* meta */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="text-[14px] text-[#D6D6D6]">
                  {new Date(createdAtISO).toLocaleDateString(undefined, {
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
                    '<p style="color:#666">Escribí contenido en el editor…</p>',
                }}
              />
            </article>

            {/* About der */}
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
