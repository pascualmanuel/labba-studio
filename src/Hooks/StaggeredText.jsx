import React, { useEffect, useRef } from "react";

const StaggeredText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const spans = textRef.current.querySelectorAll("span");
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = "translateY(0)";
      }, index * 70); // Retraso progresivo
    });
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        style={{
          opacity: 0,
          transform: "translateY(0px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
        className="mr-[1px] heroAnimation"
      >
        {char === " " ? "\u00A0" : char} {/* Mantiene espacios */}
      </span>
    ));
  };

  return (
    <h2 ref={textRef} className="hero-text">
      {splitText(text)}
    </h2>
  );
};

export default StaggeredText;
