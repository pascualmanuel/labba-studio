import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
  "Mobile",
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
    span: "half", // 50%
    href: "/works/inmobiliare",
  },
  {
    id: "flora-plus",
    title: "Flora Plus",
    desc: "Offering a powerful tool to manage experiences, streamline operations, and enhance the journey for both providers and travelers.",
    image: Work2,
    tags: ["Digital products", "AI"],
    span: "half", // 50%
    href: "/works/ephimero",
  },
  {
    id: "morgenstern",
    title: "Morgenstern",
    desc: "A creative and playful website for a creative and playful illustrated project.",
    image: Work5,
    tags: ["Website"],
    span: "full", // 100% (fila única)
    href: "/works/morgenstern",
  },
  {
    id: "hyundai",
    title: "Hyundai",
    desc: "Showcasing models, promotions, and services while improving user experience and digital presence of Hyundai Costa Rica.",
    image: Work1,
    tags: ["Website", "Ecommerce"],
    span: "half", // 50%
    href: "/works/inmobiliare",
  },

  {
    id: "dbs",
    title: "De Blas Serrano",
    desc: "Elegant and functional ecommerce for a winery in Spain, enhancing the shopping experience and reflecting the premium character of its products.",
    image: Work3,
    tags: ["Website", "Ecommerce"],
    span: "half", // 50%
    href: "/works/dbs",
  },
  {
    id: "galangal",
    title: "Galangal Travel",
    desc: "Luxury travel experiences rooted in local culture, crafted with elegance, authenticity, and exceptional service.",
    image: Work6,
    tags: ["Website"],
    span: "full", // 50%
    href: "/works/galangal",
  },
  {
    id: "inmobiliare",
    title: "Inmobiliare",
    desc: "Redesigning the experience of the largest real estate news portal in Mexico.",
    image: Work7,
    tags: ["Website", "Ecommerce"],
    span: "half", // 50%
    href: "/works/inmobiliare",
  },
  {
    id: "ephimero",
    title: "Ephimero",
    desc: "Candles ecommerce with ethics & aesthetics",
    image: Work8,
    tags: ["Ecommerce"],
    span: "half", // 50%
    href: "/works/ephimero",
  },
  {
    id: "trebol",
    title: "Trebol",
    desc: "With Trebol, users can join various lotteries and keep tabs on the winning numbers, all without the need to visit a physical store.",
    image: Work9,
    tags: ["Mobile App", "AI"],
    span: "full", // 50%
    href: "/works/trebol",
  },
  {
    id: "daewoo",
    title: "Daewoo",
    desc: "Explore and find your perfect home appliance.",
    image: Work10,
    tags: ["Ecommerce"],
    span: "half", // 50%
    href: "/works/daewoo",
  },
  {
    id: "manno",
    title: "Manno",
    desc: "A trusted community app that connects people who need to outsource tasks and find local services, with people looking to earn money and ready to work.",
    image: Work11,
    tags: ["Mobile App", "AI"],
    span: "half", // 50%
    href: "/works/manno",
  },
];

function chunkByRows(items) {
  const rows = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    if (it.span === "full") {
      rows.push([it]);
      continue;
    }
    const next = items[i + 1];
    if (next && next.span !== "full") {
      rows.push([it, next]); // dos half en la misma fila
      i += 1;
    } else {
      rows.push([it]); // half suelto
    }
  }
  return rows;
}

const Works = () => {
  const [active, setActive] = useState("All work");

  const filtered = useMemo(() => {
    if (active === "All work") return worksData;
    return worksData.filter((w) => w.tags.includes(active));
  }, [active]);

  const rows = useMemo(() => chunkByRows(filtered), [filtered]);

  const renderCard = (w, isFullRow) => {
    const base = "work-item item-sq relative rounded-lg bg-cover bg-center";
    const size = isFullRow
      ? "h-[268px] md:h-[580px]" // full fila
      : "h-[268px] sm:aspect-square md:aspect-auto md:h-[590px]"; // half

    return (
      <>
        <div id={shadowOn}></div>
        <Link to={w.href} key={w.id} rel="noopener noreferrer">
          <div
            className={`${base} ${size}`}
            style={{ backgroundImage: w.image ? `url(${w.image})` : undefined }}
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
      </>
    );
  };

  let shadowOn = "ellipse-shadow";

  useEffect(() => {
    const ellipseShadow = document.getElementById(shadowOn);

    if (!ellipseShadow) {
      return;
    }

    const ellipseWidth = 1167;
    const ellipseHeight = 1167;
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    // Posiciona la sombra en el centro de la pantalla al cargar
    const initialX = window.innerWidth / 2 + 360 - halfWidth;
    const initialY = window.innerHeight / 2 - 50 - halfHeight;

    ellipseShadow.style.left = `${initialX}px`;
    ellipseShadow.style.top = `${initialY}px`;

    // Luego, mueve la sombra con el cursor
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX - halfWidth;
      const y = e.clientY - halfHeight;

      ellipseShadow.style.left = `${x}px`;
      ellipseShadow.style.top = `${y}px`;
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", (e) => {
        const x = e.clientX - halfWidth;
        const y = e.clientY - halfHeight;

        ellipseShadow.style.left = `${x}px`;
        ellipseShadow.style.top = `${y}px`;
      });
    };
  }, []);

  return (
    <section className="works-section px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[130px]">
      {/* Header + filtros */}
      <div className="flex flex-col md:flex-col md:items-start md:justify-between">
        <h1 className="h2 max-w-[855px] mb-10">
          We turn your ideas into real-world impact.
        </h1>

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

      {/* Filas: la primera 30px debajo del H1; espacio uniforme entre filas */}
      <div className="mt-[30px] space-y-[24px]">
        {rows.map((row, idx) => {
          const isFullRow = row.length === 1 && row[0].span === "full";
          return (
            <div
              key={`row-${idx}`}
              className={`grid grid-cols-1 ${
                isFullRow ? "md:grid-cols-1" : "md:grid-cols-2"
              } gap-[24px]`}
            >
              {row.map((w) => renderCard(w, isFullRow))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
