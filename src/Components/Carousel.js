import React, { useEffect, useRef } from "react";
// ⚠️ Poné tu camino real a la tira (la que adjuntaste)
import Strip from "../Assets/clientes/brand-strip.png";

export default function BrandStripMarquee({ speed = 60, height = 42 }) {
  const trackRef = useRef(null);
  const firstRef = useRef(null);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const accRef = useRef(0);
  const widthRef = useRef(1);

  useEffect(() => {
    const track = trackRef.current;
    const first = firstRef.current;
    if (!track || !first) return;

    const measure = () => {
      widthRef.current = first.offsetWidth || 1;
    };

    const ro = new ResizeObserver(measure);
    ro.observe(first);

    if (!first.complete)
      first.addEventListener("load", measure, { once: true });
    measure();

    // Respeta reduced motion
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const step = (t) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = (t - lastRef.current) / 1750;
      lastRef.current = t;

      accRef.current -= speed * dt;
      const w = widthRef.current;
      if (accRef.current <= -w) accRef.current += w; // loop perfecto

      track.style.transform = `translate3d(${accRef.current}px,0,0)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="brand-strip w-max" aria-hidden="true">
        <div
          className="brand-strip__track "
          ref={trackRef}
          style={{ "--h": `${height}px` }}
        >
          {/* Repetimos la MISMA tira 3 veces */}
          <img ref={firstRef} src={Strip} alt="" draggable="false" />
          <img src={Strip} className="" alt="" draggable="false" />
          <img src={Strip} alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
}
