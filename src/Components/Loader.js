import React, { useState, useEffect } from "react";
import "../Styles/Prueba.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Bloquear scroll mientras el loader está montado
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow || "auto";
    };
  }, []);

  // Progreso (un solo intervalo)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const inc = prev < 50 ? 2 : 0.5; // 0→50 rápido, luego más lento
        return Math.min(prev + inc, 100);
      });
    }, 22);

    return () => clearInterval(interval);
  }, []);

  // Al llegar a 100%, esperamos un pelín y disparamos el fade-out
  useEffect(() => {
    if (progress < 100) return;
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [progress]);

  // Cuando termina el fade-out visual: avisamos a App y NO removemos el nodo a mano
  useEffect(() => {
    if (loading) return;

    const loaderEl = document.querySelector(".loader-wrapper");
    let fired = false;

    const finish = () => {
      if (fired) return;
      fired = true;

      // Avisar a App que el loader terminó visualmente
      try {
        window.dispatchEvent(new CustomEvent("home-loader-done"));
      } catch (e) {}

      // Restaurar scroll por si acaso (igual el cleanup lo asegura)
      document.body.style.overflow = "auto";
      // ❌ NO hacer loaderEl.remove() — React lo desmonta
    };

    // Usamos animationend del fade-out
    if (loaderEl)
      loaderEl.addEventListener("animationend", finish, { once: true });

    // Fallback por si no dispara la animación
    const safety = setTimeout(finish, 1200);

    return () => {
      if (loaderEl) loaderEl.removeEventListener("animationend", finish);
      clearTimeout(safety);
    };
  }, [loading]);

  return (
    <div className={`loader-wrapper ${loading ? "" : "fade-out"} cursor-none`}>
      <div className="grain-2"></div>

      <div className={`loader ${loading ? "loading" : ""}`}>
        <div className="progress-bar" style={{ cursor: "none" }}>
          <div
            className="progress"
            style={{ width: `${progress}%`, cursor: "none" }}
          />
        </div>
      </div>

      <h3 className="number-loader">{Math.round(progress)}%</h3>
    </div>
  );
};

export default Loader;
