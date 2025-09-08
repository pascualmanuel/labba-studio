import React, { useEffect, useMemo, useRef } from "react";

import Cliente1 from "../Assets/clientes/marca-1.svg";
import Cliente2 from "../Assets/clientes/marca-2.svg";
import Cliente3 from "../Assets/clientes/marca-3.svg";
import Cliente4 from "../Assets/clientes/marca-4.svg";
import Cliente5 from "../Assets/clientes/marca-5.svg";
import Cliente6 from "../Assets/clientes/marca-6.svg";
import Cliente7 from "../Assets/clientes/marca-7.svg";

export default function LogoMarquee() {
  const base = useMemo(
    () => [
      Cliente1,
      Cliente2,
      Cliente5,
      Cliente3,
      Cliente4,
      Cliente6,
      Cliente7,
    ],
    []
  );

  // Duplicamos SOLO 2x (A y B). Medimos el ancho exacto de A con un marcador.
  const items = useMemo(() => [...base, "SPLIT", ...base], [base]);

  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const splitRef = useRef(null);
  const rafRef = useRef(0);
  const accRef = useRef(0);
  const lastRef = useRef(0);
  const widthRef = useRef(1);

  useEffect(() => {
    const track = trackRef.current;
    const split = splitRef.current;
    if (!track || !split) return;

    const measure = () => {
      // offsetLeft del marcador = ancho exacto del primer set (incluye gaps)
      widthRef.current = split.offsetLeft || 1;
    };

    // Recalcular cuando cambie el layout
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    Array.from(track.querySelectorAll("img")).forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", measure, { once: true });
    });
    measure();

    const speed = 60; // px/seg
    const step = (t) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = (t - lastRef.current) / 1000;
      lastRef.current = t;

      accRef.current -= speed * dt;
      const w = widthRef.current;
      // módulo exacto por el ancho del primer set
      if (accRef.current <= -w) accRef.current += w;

      track.style.transform = `translate3d(${accRef.current}px,0,0)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="lm" ref={wrapRef} role="presentation" aria-hidden="true">
      <div className="lm__track" ref={trackRef}>
        {items.map((src, i) =>
          src === "SPLIT" ? (
            <span key="split" ref={splitRef} className="lm__split" />
          ) : (
            <div className="lm__item" key={i}>
              <img src={src} alt="" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
