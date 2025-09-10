// src/pages/Blog.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getBlogs } from "../api/blogs";

const FILTERS = ["All Posts", "Design", "Technology", "Guides", "News", "AI"];

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Blog = () => {
  const [active, setActive] = useState("All Posts");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setErr("");
    getBlogs()
      .then((data) => {
        if (!alive) return;
        // Orden ya viene del backend (unshift newest), por las dudas ordenamos por createdAt desc
        const sorted = [...data].sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
        setPosts(sorted);
      })
      .catch((e) => alive && setErr(e.message || "Error al cargar"))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    if (active === "All Posts") return posts;
    return posts.filter((p) => (p.category || "").trim() === active);
  }, [active, posts]);

  if (loading) {
    return (
      <section className="px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px] min-h-[100vh]">
        <h1 className="h2 max-w-[855px] mb-6">Blog</h1>
        {/* <p className="text-[#D6D6D6]">Cargando publicaciones…</p> */}
      </section>
    );
  }

  if (err) {
    return (
      <section className="px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
        <h1 className="h2 max-w-[855px] mb-6">Blog</h1>
        <p className="text-red-400">Error: {err}</p>
      </section>
    );
  }

  return (
    <section className="works-section px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
      <Helmet>
        <title>Blog — Labba Studio</title>
        <meta
          name="description"
          content="Insights on design, development, and product strategy from the Labba Studio team."
        />
        <link rel="canonical" href="https://labba.studio/blog" />
        <link rel="alternate" hrefLang="en" href="https://labba.studio/blog" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/blog"
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta property="og:title" content="Blog — Labba Studio" />
        <meta
          property="og:description"
          content="Insights on design, development, and product strategy from the Labba Studio team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/blog" />
        <meta
          property="og:image"
          content="https://labba.studio/og/blog-cover.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://labba.studio/og/blog-cover.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Labba Studio Blog",
            url: "https://labba.studio/blog",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog",
            url: "https://labba.studio/blog",
          })}
        </script>
      </Helmet>
      <div className="flex flex-col md:flex-col md:items-start md:justify-between">
        <h1 className="h2 max-w-[855px] mb-10">Blog</h1>

        <div className="flex flex-wrap gap-4 mt-[16px] md:mt-0">
          {FILTERS.map((label) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                aria-pressed={isActive}
                className={[
                  "cta transition-colors",
                  isActive
                    ? "text-white font-bold"
                    : "text-[#B5B5B5] hover:text-white",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-items-center">
          <AnimatePresence initial={false}>
            {filtered.map((p) => (
              <motion.div
                key={p.id || p.slug}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
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
                          {formatDate(p.createdAt)}{" "}
                          <span className="mx-1">•</span>{" "}
                          {(p.readTime ?? "").toString() || "10"} min read
                        </div>

                        <div className="flex items-center justify-end gap-2 flex-wrap max-w-[55%]">
                          {(p.tags || []).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-1 rounded-full bg-[#1E1E1E] text-[#D6D6D6] text-[12px] whitespace-nowrap"
                            >
                              {t}
                            </span>
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
    </section>
  );
};

export default Blog;
