import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ⬇️ Tus imports reales
import Work1 from "../Assets/work/Hyundai/hyundai-site.webp";
import Work2 from "../Assets/work/Flora/flora-app.webp";
import Work3 from "../Assets/work/Dbs/dbs-site.webp";
import Work4 from "../Assets/work/Scouting/scounting-site.webp";
import Work5 from "../Assets/work/Morgenstern/work-morgenstern.webp";
import Work6 from "../Assets/work/Galangal/galangal-website.webp";
import Work7 from "../Assets/work/Inmobiliare/inmobiliare-site.webp";
import Work8 from "../Assets/work/Ephimero/ephimero-site.webp";
import Work9 from "../Assets/work/Trebol/trebol-site.webp";
import Work10 from "../Assets/work/Daewoo/daewoo-site.webp";
import Work11 from "../Assets/work/Manno/manno-site.webp";

const FILTERS = [
  "All work",
  "Website",
  "Mobile", // (mapeamos a "Mobile App" abajo)
  "Apps",
  "Ecommerce",
  "Digital products",
  "AI",
];

const worksData = [
  {
    id: "scouting-labs",
    title: "Scouting Labs",
    desc: "Connecting amateur sports passion with analysis technology, empowering player development and visibility in the sports world.",
    image: Work4,
    tags: ["Website", "AI"],
    span: "half",
    href: "/works/scouting-labs",
  },
  {
    id: "flora-plus",
    title: "Flora Plus",
    desc: "Offering a powerful tool to manage experiences, streamline operations, and enhance the journey for both providers and travelers.",
    image: Work2,
    tags: ["Digital products", "AI"],
    span: "half",
    href: "/works/flora-plus",
  },
  {
    id: "morgenstern",
    title: "Morgenstern",
    desc: "A creative and playful website for a creative and playful illustrated project.",
    image: Work5,
    tags: ["Website"],
    span: "full",
    href: "/works/morgenstern",
  },
  {
    id: "hyundai",
    title: "Hyundai",
    desc: "Showcasing models, promotions, and services while improving user experience and digital presence of Hyundai Costa Rica.",
    image: Work1,
    tags: ["Website"],
    span: "half",
    href: "/works/hyundai",
  },
  {
    id: "dbs",
    title: "De Blas Serrano",
    desc: "Elegant and functional ecommerce for a winery in Spain, enhancing the shopping experience and reflecting the premium character of its products.",
    image: Work3,
    tags: ["Website", "Ecommerce"],
    span: "half",
    href: "/works/dbs",
  },
  {
    id: "galangal",
    title: "Galangal Travel",
    desc: "Luxury travel experiences rooted in local culture, crafted with elegance, authenticity, and exceptional service.",
    image: Work6,
    tags: ["Website"],
    span: "full",
    href: "/works/galangal",
  },
  {
    id: "inmobiliare",
    title: "Inmobiliare",
    desc: "Redesigning the experience of the largest real estate news portal in Mexico.",
    image: Work7,
    tags: ["Website", "Ecommerce"],
    span: "half",
    href: "/works/inmobiliare",
  },
  {
    id: "ephimero",
    title: "Ephimero",
    desc: "Candles ecommerce with ethics & aesthetics",
    image: Work8,
    tags: ["Ecommerce"],
    span: "half",
    href: "/works/ephimero",
  },
  {
    id: "trebol",
    title: "Trebol",
    desc: "With Trebol, users can join various lotteries and keep tabs on the winning numbers, all without the need to visit a physical store.",
    image: Work9,
    tags: ["Mobile App", "AI"],
    span: "full",
    href: "/works/trebol",
  },
  {
    id: "daewoo",
    title: "Daewoo",
    desc: "Explore and find your perfect home appliance.",
    image: Work10,
    tags: ["Ecommerce"],
    span: "half",
    href: "/works/daewoo",
  },
  {
    id: "manno",
    title: "Manno",
    desc: "A trusted community app that connects people who need to outsource tasks and find local services, with people looking to earn money and ready to work.",
    image: Work11,
    tags: ["AI", "Mobile App"],
    span: "half",
    href: "/works/manno",
  },
];

// 🔧 Normaliza el filtro "Mobile" -> "Mobile App"
const normalizeFilter = (label) => (label === "Mobile" ? "Mobile App" : label);

// 🔧 Regla de layout: si hay HALF pendiente y aparece FULL, el FULL se convierte en HALF.
function resolveLayout(items) {
  const out = [];
  const total = items.length;
  let pendingHalf = false;

  for (let i = 0; i < total; i++) {
    const it = items[i];
    let resolved = it.span;

    if (total === 1) {
      // Un solo item → 50%
      resolved = "half";
    } else if (pendingHalf) {
      // Tenemos un hueco de 50% abierto → forzamos el siguiente a HALF
      if (resolved === "full") resolved = "half";
      pendingHalf = false;
    } else {
      // No hay hueco pendiente
      if (resolved === "half") {
        pendingHalf = true;
      }
    }

    out.push({ ...it, resolvedSpan: resolved });
  }

  return out;
}

const Works = () => {
  const [active, setActive] = useState("All work");
  const shadowOn = "ellipse-shadow";

  const filtered = useMemo(() => {
    if (active === "All work") return worksData;
    const tag = normalizeFilter(active);
    return worksData.filter((w) => w.tags.includes(tag));
  }, [active]);

  const items = useMemo(() => resolveLayout(filtered), [filtered]);

  const renderCard = (w, isFull) => {
    const base = "work-item item-sq relative rounded-lg bg-cover bg-center";
    const size = isFull
      ? "h-[268px] md:h-[580px]"
      : "h-[268px] sm:aspect-square md:aspect-auto md:h-[590px]";

    return (
      <Link to={w.href} rel="noopener noreferrer">
        <div
          className={`${base} ${size}`}
          style={{ backgroundImage: w.image ? `url(${w.image})` : undefined }}
          role="img"
          aria-label={`${w.title} — ${w.tags.join(", ")}`}
        >
          <div className="project-info w-[359px] md:w-[300px] mg:w-[359px] bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
            <div className="flex flex-row justify-between">
              <div>
                <p
                  className="l-desk text-[#ECECEC]"
                  style={{ fontWeight: 500 }}
                >
                  {w.title}
                </p>
              </div>
              <div className="flex flex-row flex-wrap justify-end">
                {w.tags.map((t, i) => (
                  <span
                    key={t}
                    className={`tags p-12 ${i === 0 ? "mr-[6px]" : ""}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-[10px]">
              <p className="b4-desk text-[#ECECEC]">{w.desc}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  useEffect(() => {
    const ellipseShadow = document.getElementById(shadowOn);
    if (!ellipseShadow) return;

    const ellipseWidth = 1167;
    const ellipseHeight = 1167;
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    const initialX = window.innerWidth / 2 + 360 - halfWidth;
    const initialY = window.innerHeight / 2 - 50 - halfHeight;

    ellipseShadow.style.left = `${initialX}px`;
    ellipseShadow.style.top = `${initialY}px`;

    const handler = (e) => {
      const x = e.clientX - halfWidth;
      const y = e.clientY - halfHeight;
      ellipseShadow.style.left = `${x}px`;
      ellipseShadow.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [shadowOn]);

  return (
    <section className="works-section px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
      <Helmet>
        <title>Projects — Labba Studio Portfolio</title>
        <meta
          name="description"
          content="Selected work from Labba Studio: websites, apps, and branding. Explore projects including Hyundai, Scouting Labs, Flora Plus, and more."
        />
        <link rel="canonical" href="https://labba.studio/work" />
        <meta property="og:site_name" content="Labba Studio" />
        <meta property="og:title" content="Projects — Labba Studio Portfolio" />
        <meta
          property="og:description"
          content="Selected work from Labba Studio: websites, apps, and branding. Explore projects including Hyundai, Scouting Labs, Flora Plus, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/work" />
        <meta
          property="og:image"
          content="https://labba.studio/og/works-cover.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://labba.studio/og/works-cover.jpg"
        />
        <link rel="alternate" hrefLang="en" href="https://labba.studio/work" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/work"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects — Labba Studio Portfolio",
            url: "https://labba.studio/work",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: worksData.map((w, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: w.title,
                url: `https://labba.studio${w.href}`,
              },
            })),
          })}
        </script>
      </Helmet>
      {/* 1 sola sombra global (evita IDs duplicados) */}
      <div id="ellipse-shadow" className="hidden md:block ellipse-shadow"></div>

      {/* Header + filtros */}
      <div className="flex flex-col md:flex-col md:items-start md:justify-between">
        <h1 className="h2 max-w-[855px] mb-10 sr-only">
          Projects — Labba Studio Portfolio
        </h1>
        <h2 className="h2 max-w-[855px] mb-10">
          We turn your ideas into real-world impact.
        </h2>

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

      {/* Grid único con 2 cols en md+. FULL = col-span-2; HALF = col normal.
          Si un HALF queda "solo" y el siguiente era FULL, lo convertimos a HALF y rellenamos. */}
      <div className="mt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <AnimatePresence initial={false}>
            {items.map((w) => {
              const isFull = w.resolvedSpan === "full";
              return (
                <motion.div
                  key={w.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className={isFull ? "md:col-span-2" : ""}
                >
                  {renderCard(w, isFull)}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Works;
