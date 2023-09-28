import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Works() {
  useEffect(() => {
    const section = document.querySelector(".parallax");

    if (!section) {
      return;
    }

    const initialScale = 0.5;
    const maxScale = 1.0; // Maximum scale value when the section is full width
    const scaleMultiplier = 0.001; // Adjust this value to control the scaling speed

    const updateSectionScale = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      let newScale = initialScale + scrollY * scaleMultiplier;

      // Ensure the scale doesn't exceed the maximum scale value
      newScale = Math.min(newScale, maxScale);

      section.style.transform = `scale(${newScale})`;
    };

    window.addEventListener("scroll", updateSectionScale);

    return () => {
      window.removeEventListener("scroll", updateSectionScale);
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".second-section", {
    scrollTrigger: {
      trigger: ".work",
      start: "10px",
      end: "bottom",
      markers: true,
    },
  });

  return (
    <>
      <div
        className="second-section parallax"
        style={{
          //   position: "relative",
          height: "fit-content",
          transform: "scale(0.1)",
          background: "#121212",
          zIndex: 1,
        }}
      >
        <div className="work"></div>
        <div className="projects-container">
          <div className="project">
            <p style={{ color: "white" }}>Proyecto 1 </p>
          </div>
          <div className="project">
            <p style={{ color: "white" }}>Proyecto 2 </p>
          </div>
          <div className="project">
            <p style={{ color: "white" }}>Proyecto 3 </p>
          </div>
          <div className="project">
            <p style={{ color: "white" }}>Proyecto 4 </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
