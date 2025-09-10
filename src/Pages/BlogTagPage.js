import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { getBlogs } from "../api/blogs";

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogTagPage() {
  const { tag = "" } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setErr("");
    window.scrollTo(0, 0);
    getBlogs()
      .then((data) => {
        if (!alive) return;
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
  }, [tag]);

  const filtered = useMemo(() => {
    const t = (tag || "").trim().toLowerCase();
    if (!t) return [];
    return posts.filter((p) =>
      (p.tags || []).some((x) => (x || "").trim().toLowerCase() === t)
    );
  }, [posts, tag]);

  if (loading) {
    return (
      <section className="px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
        <h1 className="h2 max-w-[855px] mb-6">#{tag}</h1>
        <p className="text-[#D6D6D6]">Cargando publicaciones…</p>
      </section>
    );
  }

  if (err) {
    return (
      <section className="px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
        <h1 className="h2 max-w-[855px] mb-6">#{tag}</h1>
        <p className="text-red-400">Error: {err}</p>
      </section>
    );
  }

  return (
    <section className="works-section px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
      <Helmet>
        <title>#{tag} — Blog — Labba Studio</title>
        <meta name="description" content={`Posts tagged #${tag}.`} />
        <link
          rel="canonical"
          href={`https://labba.studio/blog/tag/${encodeURIComponent(tag)}`}
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta property="og:title" content={`#${tag} — Blog — Labba Studio`} />
        <meta property="og:description" content={`Posts tagged #${tag}.`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://labba.studio/blog/tag/${encodeURIComponent(tag)}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `Blog — #${tag}`,
            url: `https://labba.studio/blog/tag/${encodeURIComponent(tag)}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: filtered.slice(0, 12).map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "BlogPosting",
                name: p.title,
                url: `https://labba.studio/blog/${p.slug}`,
                image: p.coverUrl || undefined,
              },
            })),
          })}
        </script>
      </Helmet>
      <div className="flex flex-col md:flex-col md:items-start md:justify-between">
        <h1 className="h2 max-w-[855px] mb-2">#{tag}</h1>
        <p className="text-[#B5B5B5] mb-8">
          {filtered.length} resultado{filtered.length === 1 ? "" : "s"}
        </p>
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
                      <div
                        className="absolute -inset-4 pointer-events-none z-10 opacity-50 blur-[14px]"
                        style={{
                          background:
                            "radial-gradient(120% 120% at 0% 0%, rgba(255,106,61,0.35) 0%, rgba(90,16,32,0.28) 50%, rgba(0,0,0,0) 72%)",
                        }}
                      />
                    </div>

                    <div className="mt-5 px-1 flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[13px] text-[#D6D6D6]">
                          {formatDate(p.createdAt)}{" "}
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

                      <h3 className="text-white text-[24px] font-semibold leading-tight line-clamp-2">
                        {p.title}
                      </h3>

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

            {!filtered.length && (
              <div className="col-span-full text-[#B5B5B5]">
                No hay posts con este tag.{" "}
                <Link className="hover:text-white" to="/blog">
                  Ver todos →
                </Link>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
