import React, { lazy, Suspense } from "react";
import { ReactSVG } from "react-svg";
import Marca1 from "../Assets/clientes/marca-1.svg";
import Marca2 from "../Assets/clientes/marca-2.svg";
import Marca3 from "../Assets/clientes/marca-3.svg";
import Marca4 from "../Assets/clientes/marca-4.svg";
import Marca5 from "../Assets/clientes/marca-5.svg";
import Marca6 from "../Assets/clientes/marca-6.svg";
import Marca7 from "../Assets/clientes/marca-7.svg";
import ServAccordion from "./ServAccordion";

// ⬇️ Carga diferida SOLO si se va a usar
const MobileCarousel = lazy(() => import("./Carousel"));

// SSR-safe media query
function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    // Safari <=13
    mql.addListener
      ? mql.addListener(onChange)
      : mql.addEventListener("change", onChange);
    return () => {
      mql.removeListener
        ? mql.removeListener(onChange)
        : mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return matches;
}

export default function NewServices() {
  const isBelowLg = useMediaQuery("(max-width: 1023.98px)");

  return (
    <>
      {/* Desktop (≥1024px): logos estáticos. No se monta el Carousel. */}
      {!isBelowLg && (
        <div className="marcas flex flex-row gap-4 justify-between mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] pt-[100px] items-center">
          <ReactSVG src={Marca1} />
          <ReactSVG src={Marca2} />
          <ReactSVG src={Marca3} />
          <ReactSVG src={Marca4} />
          <ReactSVG src={Marca5} />
          <ReactSVG src={Marca6} />
          <ReactSVG src={Marca7} />
        </div>
      )}

      {/* Mobile/Tablet (<1024px): se monta y carga el JS del Carousel recién acá */}
      {isBelowLg && (
        <div className="pt-[70px]">
          <Suspense fallback={null}>
            <MobileCarousel />
          </Suspense>
        </div>
      )}

      {/* termina carousel */}
      <section className="mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] my-[70px] md:py-[200px] ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-[30px] lg:w-[50%]">
            <h3 className="text-[20px] text-[#cacaca] font-light leading-[32px]   xl:text-[24px] mb-[30px] md:mb-[40px]">
              We are digital essence inspired by natural behavior of lava.
            </h3>
            <h3 className="text-[20px] text-[#cacaca] font-light leading-[32px]  xl:text-[24px]  md:mb-[20px] ">
              We flow. We are powerful. We are malleable <br className="hidden md:block" /> —
              <span className="font-bold text-white">
                {" "}
                shaping ideas into solid digital solutions.
              </span>
            </h3>
          </div>
          <div className="lg:w-[50%]">
            <ServAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
