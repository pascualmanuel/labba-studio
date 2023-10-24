import React, { useEffect, useRef, useState } from "react";
import "../Styles/App.css";
import Works from "../Components/Works";
import Pruebas from "../Components/Pruebas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css"; // Asegúrate de tener
import HomeHero from "../Components/HomeHero";
import Services from "../Components/Services";
import Process from "../Components/Process";
import Carousel from "../Components/Carousel";
import { ReactSVG } from "react-svg";
import LabbaL from "../Assets/labba/labba-l.svg";
import LabbaA from "../Assets/labba/labba-a.svg";
import LabbaB from "../Assets/labba/labba-b.svg";
import CursorDrop from "../Assets/labba/drop-line.svg";
import Claim from "../Components/Claim";
import { useLanguage } from "../Hooks/LanguageContext";

function Home() {
  const { userLanguage, translateText } = useLanguage();

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

  useEffect(() => {
    // const handleScroll = (event) => {
    //   event.preventDefault();
    //   window.scrollTo(0, window.scrollY + event.deltaY * 0.5); // Adjust the factor to control scroll speed
    // };

    // window.addEventListener("wheel", handleScroll, { passive: false });

    // return () => {
    //   // Clean up the event listener when the component unmounts
    //   window.removeEventListener("wheel", handleScroll);
    // };

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
      // if (section.style.transform === "scale(1)") {
      //   // Si ya es igual a 1, no hagas nada
      //   return;
      // }

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
  const prefooterRef = useRef(null);
  const footerRef = useRef(null);
  const [shouldShrink, setShouldShrink] = useState(
    localStorage.getItem("shouldShrink") === "true"
  );
  useEffect(() => {
    const prefooter = document.querySelector(".prefooter");
    const footer = document.querySelector(".footer");

    if (!prefooter || !footer) {
      return;
    }

    const triggerHeight =
      footer.getBoundingClientRect().top - window.innerHeight;
    const minOpacity = 1; // Opacidad mínima cuando el prefooter está achicado

    const updatePrefooterStyles = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= triggerHeight) {
        prefooter.classList.add("shrink");
        prefooter.style.opacity = minOpacity; // Aplicar opacidad mínima
      } else {
        prefooter.classList.remove("shrink");
        prefooter.style.opacity = 1; // Restaurar la opacidad original (1)
      }
    };

    window.addEventListener("scroll", updatePrefooterStyles);

    return () => {
      window.removeEventListener("scroll", updatePrefooterStyles);
    };
  }, []);

  function copyToClipboard(textToCopy) {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  const email = "hello@labba.studio";
  const textToCopy = useRef(null);

  const handleCopyClick = () => {
    copyToClipboard(email);
    if (textToCopy.current) {
      textToCopy.current.textContent = "Copied!";
      setTimeout(() => {
        if (textToCopy.current) {
          textToCopy.current.textContent = "click to copy";
        }
      }, 1500); // Cambiar de vuelta a "click to copy" después de 1.5 segundos
    }
  };

  const [isMoving, setIsMoving] = useState(false);

  const cursorScaleElements = Array.from(
    document.querySelectorAll(".cursor-scale")
  );

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const footerCursor = document.querySelectorAll(".prefooter");

    const handleMouseEnter = () => {
      // Change cursor behavior when entering the plusCursor
      // For example, you can change the cursor style or add animations here

      // Set the custom cursor image
      if (cursor) {
        cursor.style.backgroundImage = `url(${CursorDrop})`;
        cursor.style.backgroundSize = "contain";
        cursor.style.backgroundRepeat = "no-repeat";
        cursor.style.backgroundPosition = "center";
        cursor.style.width = "300px";
        cursor.style.height = "77px";
        cursor.style.border = "none";
        cursor.style.backgroundColor = "transparent";
      }
    };

    const handleMouseLeave = () => {
      // Restore default cursor behavior when leaving the plusCursor

      // Reset the cursor's background image to none
      if (cursor) {
        cursor.style.backgroundImage = "none";
        cursor.style.zIndex = 9999;
        cursor.style.position = "fixed";
        cursor.style.width = "34px";
        cursor.style.height = "34px";
        cursor.style.border = "1px solid #000000";
        cursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      }
    };

    footerCursor.forEach((paragraph) => {
      paragraph.addEventListener("mouseenter", handleMouseEnter);
      paragraph.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      footerCursor.forEach((paragraph) => {
        paragraph.removeEventListener("mouseenter", handleMouseEnter);
        paragraph.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const isCursorOverElement = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    );
  };

  let mouseX = 0;
  let mouseY = 0;
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

      <Claim />

      <div style={{ height: "80vh" }}>
        <Services />
      </div>
      <Process />
      <div style={{ height: "100vh", background: " #ECECEC" }}>
        <div className="sm:w-1/2 w-full ml-11 sm:ml-36 ">
          <h3 className="b1-desk pt-36 sm:pt-72">We love our clients</h3>
        </div>
        <Carousel />
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <div
          className={`prefooter ${shouldShrink ? "shrink" : ""}`}
          ref={prefooterRef}
        >
          <div className={` cursor ${isMoving ? "is-moving" : ""}`}>
            <p className="b1-desk py-72	pl-56 text-white	">
              {translateText(
                " Let’s take your idea to the next level.",
                "Llevamos tu idea a otro level"
              )}
            </p>
          </div>
        </div>
        <div style={{ height: "200px" }}></div>
        <div className="footer" ref={footerRef}>
          <div className="ml-56">
            <div className="sayhi">Say hi</div>
            <div className="t-mail mt-3" onClick={handleCopyClick}>
              {email}
              <span
                className="ml-5"
                style={{ fontSize: "16px", fontWeight: "400" }}
                ref={textToCopy}
              >
                click to copy
              </span>
            </div>
          </div>

          <div className="labba-footer flex items-end justify-between mt-56 ml-2 mr-2">
            {/* <ReactSVG src={LabbaL} /> */}
            {/* <ReactSVG src={LabbaA} /> */}
            {/* <ReactSVG src={LabbaB} /> */}
            {/* <ReactSVG src={LabbaB} /> */}
            {/* <ReactSVG src={LabbaA} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
