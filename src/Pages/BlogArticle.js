import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../api/blogs";
import LabbaLogoBlack from "../Assets/blog/labba-logo-black.png";
import Redbg from "../Assets/blog/redbg.png";

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
      <div className="max-w-[1900px] mx-auto px-4 py-24">
        <p className="text-[#D6D6D6]">Cargando artículo…</p>
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
        <div className="max-w-[1500px] mx-auto px-16">
          <h1 className="text-white font-semibold leading-[0.95] text-[48px] md:text-[56px] lg:text-[72px]">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="mt-3 text-[#CFCFCF] text-[24px] leading-relaxed">
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
        className="mx-auto max-w-[1400px] px-4 gap-8 lg:grid"
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
          <div className="flex items-center justify-between gap-4 mb-4 ">
            <div className="text-[14px] text-[#D6D6D6]">
              {fmtDate(post.createdAt)} <span className="mx-1">•</span>{" "}
              {readTime} min read
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              {(post.tags || []).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-[#1E1E1E] text-[#D6D6D6] text-[12px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

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
    </section>
  );
}
