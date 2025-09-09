import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, getBlogs } from "../api/blogs";
import LabbaLogoBlack from "../Assets/blog/labba-logo-black.png";
import Redbg from "../Assets/blog/redbg.png";
import { motion, AnimatePresence } from "framer-motion";

const fmtDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

const htmlToText = (html) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return tmp.textContent || tmp.innerText || "";
};

const calcReadTime = (html) => {
  const words = htmlToText(html).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

const slugify = (s = "") =>
  s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function BlogArticle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // TOC
  const contentRef = useRef(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState("");

  // more articles
  const [morePosts, setMorePosts] = useState([]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setErr("");
    window.scrollTo(0, 0);

    getBlogBySlug(slug)
      .then((data) => {
        if (!active) return;
        setPost(data);
        document.title = `${data.title} — Blog`;
      })
      .catch((e) => active && setErr(e.message || "Not found"))
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, [slug]);

  // fetch more posts when we have the current one
  useEffect(() => {
    if (!post) return;
    let isMounted = true;
    getBlogs()
      .then((all) => {
        if (!isMounted) return;
        const others = (all || [])
          .filter((b) => b.slug !== post.slug)
          .sort(
            (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
          )
          .slice(0, 3);
        setMorePosts(others);
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, [post]);

  // Construir TOC a partir de H2 y observar sección activa
  useEffect(() => {
    if (!post) return;
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
      h.style.scrollMarginTop = "120px"; // no se tape con el header
      items.push({ id, text: text || "Section" });
    });
    setToc(items);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveId(en.target.id);
        });
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.1 }
    );
    root.querySelectorAll("h2").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [post]);

  if (loading) {
    return (
      <div className="max-w-[1900px] min-h-[100vh]">
        {/* <p className="text-[#D6D6D6]">Cargando artículo…</p> */}
      </div>
    );
  }

  if (err || !post) {
    return (
      <div className="max-w-[1900px] mx-auto px-4 py-24">
        <h1 className="text-white text-3xl mb-3">Artículo no encontrado</h1>
        <Link to="/blog" className="text-[#D6D6D6] hover:text-white">
          ← Volver al Blog
        </Link>
      </div>
    );
  }

  const readTime = post.readTime ?? calcReadTime(post.content);

  return (
    <section className="pt-[150px] pb-24">
      {/* ===== HERO FULL WIDTH: título + subtítulo + imagen ===== */}
      <div className="w-full">
        <div className="max-w-[1500px] mx-auto px-4 md:px-10 lg:px-16">
          <div className="flex items-center justify-start gap-4 mb-6 ">
            {(post.tags || []).map((t) => (
              <Link
                to={`/blog/tag/${encodeURIComponent(t)}`}
                key={t}
                className="px-3 py-1 rounded-full bg-[#1E1E1E] text-[#D6D6D6] text-[12px] hover:text-white"
              >
                {t}
              </Link>
            ))}
            <div className="text-[14px] text-[#D6D6D6]">
              {fmtDate(post.createdAt)} <span className="mx-1">•</span>{" "}
              {readTime} min read
            </div>
          </div>
          <h1 className="text-white font-semibold leading-[0.95] text-[48px] md:text-[56px] lg:text-[72px] max-w-[1200px]">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="mt-6 text-[#CFCFCF] text-[24px] leading-relaxed">
              {post.subtitle}
            </p>
          )}

          {post.coverUrl && (
            <div className="relative my-10 h-[420px] md:h-[520px] rounded-[20px] overflow-hidden bg-[#0F0F0F]">
              <img
                src={post.coverUrl}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                draggable={false}
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

      {/* ===== DEBAJO DEL HERO: bulletpoints — noticia — about ===== */}
      <div
        className="mx-auto max-w-[1400px] px-4 md:px-10 lg:px-4 gap-8 lg:grid"
        style={{ gridTemplateColumns: "215px minmax(0, 900px) 215px" }}
      >
        {/* Rail izquierdo: TOC */}
        <aside className="hidden lg:block">
          <nav
            className="sticky top-[120px] text-[#B5B5B5]"
            aria-label="On this page"
          >
            {toc.length > 0 && (
              <ul className="space-y-3">
                {toc.map((item) => {
                  const active = item.id === activeId;
                  return (
                    <li key={item.id} className="leading-snug">
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          window.history.replaceState(null, "", `#${item.id}`);
                        }}
                        className={`inline-flex items-start gap-2 transition-colors ${
                          active ? "text-white" : "hover:text-white"
                        }`}
                      >
                        <span
                          className={`mt-[6px] inline-block h-[6px] w-[6px] rounded-full ${
                            active ? "bg-white" : "bg-[#777]"
                          }`}
                        />
                        <span className="text-[14px]">{item.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </nav>
        </aside>

        {/* Contenido (con tipografía pedida) */}
        <article>
          {/* Meta superior dentro de la columna central */}

          {/* Contenido del editor.
              H2: 18px bold | P: 18px | márgenes coherentes */}
          <div
            ref={contentRef}
            className="
              max-w-[900px]
              [&_p]:text-[18px] [&_p]:leading-[115%] [&_p]:text-[#E7E7E7]
              [&_h2]:text-[18px] [&_h2]:font-bold [&_h2]:text-white
              [&_h2]:mt-8 [&_h2]:mb-3
              [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
              [&_img]:rounded-[12px] [&_img]:my-6
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12">
            <Link to="/blog" className="text-[#D6D6D6] hover:text-white">
              ← Volver al Blog
            </Link>
          </div>
        </article>

        {/* Rail derecho: About Labba (215×345) */}
        <aside className="hidden lg:block">
          <div className="sticky top-[120px] w-[215px] pb-5 rounded-[16px] ">
            <img src={Redbg} className="rounded-t-[16px]" />
            <div className="px-4 bg-[#181818] border border-[#1E1E1E] rounded-b-[16px] pb-5">
              <img
                src={LabbaLogoBlack}
                width={40}
                className="mt-[-20px] mb-2"
              />
              <h3 className="text-white text-[16px] font-semibold ">
                About Labba
              </h3>
              <p className=" text-[12px] leading-snug text-[#CFCFCF] ">
                Labba is a UX/UI and product design studio that partners with
                startups and companies to build meaningful digital experiences.
                We combine strategy, design, and technology to deliver products
                that grow with your business. Clients include Daewoo, Hyundai,
                Adidas, Scouting Labs, and more.
              </p>
              <Link
                to="/about"
                className="mt-2 inline-flex items-center gap-2 text-[14px] text-[#D6D6D6] hover:text-white"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
      {morePosts.length > 0 && (
        <div className="max-w-[1500px] mx-auto px-4 md:px-10 lg:px-16 mt-[130px]">
          <h2 className="h2 max-w-[855px] mb-6">More articles</h2>
          <div className="mt-[10px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-items-center">
              <AnimatePresence initial={false}>
                {morePosts.map((p) => (
                  <motion.div
                    key={p.id || p.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                  >
                    <Link to={`/blog/${p.slug}`} rel="noopener noreferrer">
                      <article className="max-w-[440px] h-[480px] flex flex-col overflow-hidden">
                        <div className="relative h-[260px] rounded-[16px] overflow-hidden bg-[#1A1A1A]">
                          {p.coverUrl ? (
                            <img
                              src={p.coverUrl}
                              alt={p.title}
                              className="absolute inset-0 w-full h-full object-cover object-center"
                              loading="lazy"
                              draggable={false}
                            />
                          ) : (
                            <div className="absolute inset-0 bg-[#151515]" />
                          )}
                          {/* overlay suave y blureado */}
                          <div
                            className="absolute -inset-4 pointer-events-none z-10 opacity-50 blur-[14px]"
                            style={{
                              background:
                                "radial-gradient(120% 120% at 0% 0%, rgba(255,106,61,0.35) 0%, rgba(90,16,32,0.28) 50%, rgba(0,0,0,0) 72%)",
                            }}
                          />
                        </div>

                        <div className="mt-5 px-1 flex flex-col gap-3">
                          {/* Fila 1: fecha • read time  |  tags */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-[13px] text-[#D6D6D6]">
                              {fmtDate(p.createdAt)}{" "}
                              <span className="mx-1">•</span>{" "}
                              {(p.readTime ?? "").toString() || "10"} min read
                            </div>

                            <div className="flex items-center justify-end gap-2 flex-wrap max-w-[55%]">
                              {(p.tags || []).map((t) => (
                                <Link
                                  to={`/blog/tag/${encodeURIComponent(t)}`}
                                  key={t}
                                  className="px-2 py-1 rounded-full bg-[#1E1E1E] text-[#D6D6D6] text-[12px] whitespace-nowrap hover:text-white"
                                >
                                  {t}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Fila 2: título */}
                          <h3 className="text-white text-[24px] font-semibold leading-tight line-clamp-2">
                            {p.title}
                          </h3>

                          {/* Fila 3: excerpt */}
                          <div className="mt-1 flex items-end justify-between gap-6">
                            <p className="text-[#B5B5B5] text-[14px] leading-snug line-clamp-2 max-w-[100%]">
                              {p.excerpt}
                            </p>
                          </div>

                          <span className="text-[#D6D6D6] hover:text-white transition-colors inline-flex items-center gap-2 shrink-0">
                            Read Article <span aria-hidden>→</span>
                          </span>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
