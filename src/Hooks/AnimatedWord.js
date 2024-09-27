import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../Styles/TextAnimated.css";

const TextAnimated = React.forwardRef(
  ({ firstWord = "", secondWord = "" }, ref) => {
    const wordsRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
      const items = wordsRef.current;

      if (items) {
        const singleChart1Elements = items.querySelectorAll(".single-chart1");
        const singleChart2Elements = items.querySelectorAll(".single-chart2");

        const timeline = gsap.timeline({ paused: true });
        timelineRef.current = timeline;

        timeline
          .to(singleChart1Elements, {
            yPercent: -100,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.in",
          })
          .fromTo(
            singleChart2Elements,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 0.4,
              stagger: 0.04,
              ease: "power1.in",
            },
            "<0.001"
          );
      }
    }, []);

    // Expón funciones para controlar la animación
    React.useImperativeHandle(ref, () => ({
      playAnimation() {
        timelineRef.current && timelineRef.current.play();
      },
      reverseAnimation() {
        timelineRef.current && timelineRef.current.reverse();
      },
    }));

    const splitText = (text, className) => {
      if (!text) return []; // Retorna un array vacío si text es undefined o null
      return text.split("").map((char, index) => (
        <div key={index} className={className}>
          {char === " " ? "\u00A0" : char}{" "}
          {/* Usar un espacio no rompible para los espacios */}
        </div>
      ));
    };

    return (
      <div className="words top-[-20px]" ref={wordsRef}>
        <div className="first-word">
          <div className="single-word uno uppercase weight font-medium text-[18px] lg:text-[24px]">
            {splitText(firstWord, "single-chart1")}
          </div>
        </div>
        <div className="second-word">
          <div className="single-word dos uppercase weight font-medium text-[18px] lg:text-[24px]">
            {splitText(secondWord, "single-chart2")}
          </div>
        </div>
      </div>
    );
  }
);

export default TextAnimated;
