import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Imágenes temporales reutilizando assets existentes
import ImgHyundai from "../Assets/work/Hyundai/hyundai-site.webp";
import ImgFlora from "../Assets/work/Flora/flora-app.webp";
import ImgDbs from "../Assets/work/Dbs/dbs-site.webp";
import ImgScouting from "../Assets/work/Scouting/scounting-site.webp";
import ImgMorgenstern from "../Assets/work/Morgenstern/work-morgenstern.webp";
import ImgGalangal from "../Assets/work/Galangal/galangal-website.webp";
import ImgInmobiliare from "../Assets/work/Inmobiliare/inmobiliare-site.webp";
import ImgEphimero from "../Assets/work/Ephimero/ephimero-site.webp";

const FILTERS = ["All Posts", "Design", "Technology", "Guides", "News", "AI"];

const postsData = [
  {
    id: "post-hyundai-design-system",
    title: "Building a scalable design system for Hyundai",
    excerpt:
      "How we aligned components, tokens, and motion to improve delivery speed.",
    image: ImgHyundai,
    tags: ["Design", "Technology"],
    date: "2024-06-12",
    href: "/blog/hyundai-design-system",
  },
  {
    id: "post-flora-ai-recommendations",
    title: "AI trip recommendations: lessons learned from Flora Plus",
    excerpt:
      "From prompt design to evaluation metrics, what actually worked in prod.",
    image: ImgFlora,
    tags: ["AI", "Guides"],
    date: "2024-07-01",
    href: "/blog/flora-ai-recommendations",
  },
  {
    id: "post-dbs-checkout-guide",
    title: "A practical guide to frictionless ecommerce checkouts",
    excerpt: "Patterns that reduce drop‑off and increase AOV without dark UX.",
    image: ImgDbs,
    tags: ["Guides", "Design"],
    date: "2024-05-18",
    href: "/blog/dbs-checkout-guide",
  },
  {
    id: "post-ai-scouting-news",
    title: "What AI means for sports analytics in 2025",
    excerpt:
      "Signal over noise: separating hype from real improvements on the field.",
    image: ImgScouting,
    tags: ["AI", "News"],
    date: "2024-08-22",
    href: "/blog/ai-scouting-2025",
  },
  {
    id: "post-morgenstern-webgl",
    title: "Micro‑interactions with WebGL that don’t hurt performance",
    excerpt:
      "A lightweight approach to delightful visuals that remains accessible.",
    image: ImgMorgenstern,
    tags: ["Technology", "Design"],
    date: "2024-04-30",
    href: "/blog/morgenstern-webgl",
  },
  {
    id: "post-galangal-brand-guide",
    title: "From brand to product: a cohesive visual language",
    excerpt:
      "Translating high‑end travel branding into UI patterns and content.",
    image: ImgGalangal,
    tags: ["Guides", "Design"],
    date: "2024-03-11",
    href: "/blog/galangal-brand-to-product",
  },
  {
    id: "post-inmobiliare-cdn",
    title: "Ship faster pages: our image CDN and caching checklist",
    excerpt:
      "Real‑world tips to bring LCP under 2s across markets and devices.",
    image: ImgInmobiliare,
    tags: ["Technology", "Guides"],
    date: "2024-09-02",
    href: "/blog/image-cdn-checklist",
  },
  {
    id: "post-ephimero-content",
    title: "Editorial systems that scale with your content team",
    excerpt:
      "Schemas, workflows, and governance that unlock velocity without chaos.",
    image: ImgEphimero,
    tags: ["News", "Technology"],
    date: "2024-01-22",
    href: "/blog/editorial-systems",
  },
];

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

  const filtered = useMemo(() => {
    if (active === "All Posts") return postsData;
    return postsData.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section className="works-section px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
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
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Link to={p.href} rel="noopener noreferrer">
                  <article className="max-w-[440px] h-[480px]  flex flex-col overflow-hidden">
                    <div className="relative h-[260px] rounded-[16px] overflow-hidden bg-[#1A1A1A]">
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                          loading="lazy"
                          draggable={false}
                        />
                      )}

                      {/* overlay más suave y blureado */}
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
                          {formatDate(p.date)} <span className="mx-1">•</span>{" "}
                          {p.readTime || "10 min read"}
                        </div>

                        <div className="flex items-center justify-end gap-2 flex-wrap max-w-[55%]">
                          {p.tags?.map((t) => (
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

                      {/* Fila 3: excerpt  |  CTA */}
                      <div className="mt-1 flex items-end justify-between gap-6">
                        <p className="text-[#B5B5B5] text-[14px] leading-snug line-clamp-2 max-w-[100%]">
                          {p.excerpt}
                        </p>

                        {/* El card entero ya es Link: esto es solo visual */}
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
