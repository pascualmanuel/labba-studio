import React from "react";
import { useEffect } from "react";
import "../Styles/App.css";
import Works from "../Components/Works";
import Pruebas from "../Components/Pruebas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css"; // Asegúrate de tener
import HomeHero from "../Components/HomeHero";
import Services from "../Components/Services";
import Process from "../Components/Process";
function Home() {
  // Use useEffect to ensure the component is mounted before running JavaScript
  useEffect(() => {
    const ellipseShadow = document.getElementById("ellipse-shadow");

    if (!ellipseShadow) {
      // Check if the element exists to prevent errors
      return;
    }

    // Get half of the ellipse's width and height
    const ellipseWidth = 1167; // Replace with the actual width of your ellipse
    const ellipseHeight = 1167; // Replace with the actual height of your ellipse
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    // Update the ellipse's position based on the cursor's coordinates
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX - halfWidth; // Center horizontally
      const y = e.clientY - halfHeight; // Center vertically

      // Set the position of the ellipse
      ellipseShadow.style.left = x + "px";
      ellipseShadow.style.top = y + "px";
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  //   useEffect(() => {
  //     const ellipseShadow = document.getElementById("ellipse-shadow");

  //     if (!ellipseShadow) {
  //       return;
  //     }

  //     const ellipseWidth = 1167; // Replace with the actual width of your ellipse
  //     const ellipseHeight = 1167; // Replace with the actual height of your ellipse
  //     const halfWidth = ellipseWidth / 2;
  //     const halfHeight = ellipseHeight / 2;

  //     let currentX = 0;
  //     let currentY = 0;

  //     const dampingFactor = 0.1; // Adjust this value for the desired delay and smoothness

  //     const updatePosition = (e) => {
  //       // Define 'e' as a parameter here
  //       const deltaX = e.clientX - halfWidth - currentX;
  //       const deltaY = e.clientY - halfHeight - currentY;

  //       // Apply easing or damping
  //       currentX += deltaX * dampingFactor;
  //       currentY += deltaY * dampingFactor;

  //       // Set the position of the ellipse
  //       ellipseShadow.style.left = currentX + "px";
  //       ellipseShadow.style.top = currentY + "px";

  //       requestAnimationFrame(updatePosition);
  //     };

  //     document.addEventListener("mousemove", (e) => {
  //       updatePosition(e); // Pass 'e' to the updatePosition function
  //     });
  //   }, []);

  //

  useEffect(() => {
    // let hola = ".parallax";
    const section = document.querySelector(".parallax");

    if (!section) {
      return;
    }

    const initialScale = 0.5;
    const maxScale = 1.0; // Maximum scale value when the section is full width
    const scaleMultiplier = 0.001; // Adjust this value to control the scaling speed

    const updateSectionScale = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Verificar si la transformación ya es igual a 1
      if (section.style.transform === "scale(1)") {
        // Si ya es igual a 1, no hagas nada
        return;
      }

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElement = document.querySelector(".claim");

    gsap.to(textElement, {
      x: () => -(textElement.offsetWidth - window.innerWidth),
      // duration: 0, // Aumenta la duración para hacer la animación más lenta (por ejemplo, 1 segundo)
      ease: "linear",
      scrollTrigger: {
        trigger: textElement,
        start: "top center+=200px",
        end: "bottom center",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          textElement.style.transform = `translateX(${progress * -95}%)`;
        },
      },
    });
  }, []);

  return (
    <>
      <div id="ellipse-shadow"></div>
      <div className="grain"></div>
      <div className="homecont" style={{ height: "100vh" }}>
        <HomeHero />
      </div>

      {/* <div> */}
      <div className="second-section parallax">
        <div className="work"></div>
      </div>
      <Works />
      <div
        className="third-section"
        style={{ color: "red", height: "430px" }}
      ></div>
      <div className="fourth-section"></div>

      <div className="claim-cont">
        <div className="text">
          <p
            className="h2-desk claim"
            style={{
              whiteSpace: "nowrap",
              // overflowX: "hidden",
              transform: "translateX(100%)", // Inicialmente oculta la frase
            }}
          >
            At <span style={{ color: "white" }}> Labba,</span> we craft digital
            products that balance users and business needs.
          </p>
        </div>
      </div>

      <div style={{ height: "80vh" }}>
        <Services />
      </div>
      <Process />
      <div style={{ height: "100vh", background: " #ECECEC" }}>
        <div className="w-1/2 ml-36 ">
          <h3 className="b1-desk pt-72">We love our clients</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
