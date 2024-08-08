import React, { useState, useEffect } from "react";
import "../Styles/Prueba.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((progress) => {
          const newProgress = progress < 50 ? progress + 2 : progress + 0.5;
          return Math.min(newProgress, 100);
        });
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 350);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (!loading) {
      const loader = document.querySelector(".loader-wrapper");
      loader.addEventListener("animationend", () => {
        loader.remove();

        document.body.style.overflow = "auto";
      });
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [loading]);

  return (
    <>
      <div
        className={`loader-wrapper ${loading ? "" : "fade-out"} cursor-none `}
      >
        <div className="grain-2"></div>
        <div className={`loader ${loading ? "loading" : ""}`}>
          <div className="progress-bar" style={{ cursor: "none" }}>
            <div
              className="progress "
              style={{ width: `${progress}%`, cursor: "none" }}
            ></div>
          </div>
        </div>
        <h3 className="number-loader">{Math.round(progress)}%</h3>
      </div>
    </>
  );
};

export default Loader;
