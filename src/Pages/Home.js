import React, { useEffect, useRef, useState } from "react";
import "../Styles/App.css";
import Works from "../Components/Works";

import "../Styles/Prueba.css"; // Asegúrate de tener
import HomeHero from "../Components/HomeHero";
import Services from "../Components/Services";
import Process from "../Components/Process";
import Carousel from "../Components/Carousel";

import Claim from "../Components/Claim";
import { useLanguage } from "../Hooks/LanguageContext";

import { Link } from "react-router-dom"; // Import Link from React Router

function Home() {
  const { userLanguage, translateText } = useLanguage();
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // console.log(viewportWidth);
  // console.log(viewportHeight);

  // Use useEffect to ensure the component is mounted before running JavaScript

  let shadowOn = "ellipse-shadow";
  let displayClaim = "";

  if (isMobile) {
    shadowOn = "no";
    displayClaim = "none";
  }
  const svgCode = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3137 0.686267L0.686292 23.3137M23.3137 0.686267H0.686292M23.3137 0.686267V23.3137" stroke="#ECECEC"/>
  </svg>
`;
  useEffect(() => {
    const ellipseShadow = document.getElementById(shadowOn);

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

    // const circleCursor = document.getElementById("circleCursor");

    // if (!circleCursor) {
    //   // Check if the element exists to prevent errors
    //   return;
    // }

    // const cursorWidth = 20;
    // const cursorHeight = 20;
    // const mitiWidth = cursorWidth / 2;
    // const mitiHeight = cursorHeight / 2;

    // let targetX = 0;
    // let targetY = 0;
    // let isMoving = false;

    // // Update the ellipse's position based on the cursor's coordinates
    // document.addEventListener("mousemove", (e) => {
    //   targetX = e.clientX - mitiWidth; // Center horizontally
    //   targetY = e.clientY - mitiHeight; // Center vertically

    //   if (!isMoving) {
    //     isMoving = true;
    //     updateCursor();
    //   }
    // });

    // function isCursorOverLink(element) {
    //   return element.id === "pasando";
    // }

    // // Update the cursor style based on whether it's over a link or not
    // function updateCursorStyle(isOverLink) {
    //   if (isOverLink) {
    //     // Modify the cursor style when over a link
    //     circleCursor.style.width = "100px";
    //     circleCursor.style.height = "100px";
    //     circleCursor.style.fontSize = "50px";
    //     circleCursor.style.fontWeight = "400";

    //     // circleCursor.style.setProperty("--before-content", "'+'"); // Use a custom property
    //     // circleCursor.style.setProperty("--before-content", `'${svgCode}'`);
    //     circleCursor.style.setProperty(
    //       "--before-content",
    //       `url('data:image/svg+xml,${encodeURIComponent(svgCode)}')`
    //     );

    //     // circleCursor.style.transition = "0.1s";

    //     // Add other style modifications as needed
    //   } else {
    //     // Reset the cursor style when not over a link
    //     circleCursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    //     circleCursor.style.width = "35px";
    //     circleCursor.style.height = "35px";
    //     // circleCursor.style.transition = "0.1s";
    //     circleCursor.style.setProperty("--before-content", "''"); // Use a custom property
    //   }
    // }

    // function updateCursor() {
    //   // Calculate the current cursor position
    //   const currentX = parseFloat(circleCursor.style.left) || 0;
    //   const currentY = parseFloat(circleCursor.style.top) || 0;

    //   // Calculate the distance to move in this frame
    //   const deltaX = Math.round((targetX - currentX) * 0.1); // Round the position values
    //   const deltaY = Math.round((targetY - currentY) * 0.1); // Round the position values

    //   // Update the cursor position
    //   circleCursor.style.left = Math.round(currentX + deltaX) + "px";
    //   circleCursor.style.top = Math.round(currentY + deltaY) + "px";

    //   const isOverLink = isCursorOverLink(
    //     document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
    //   );

    //   // Update the cursor style
    //   updateCursorStyle(isOverLink);
    //   // Check if the cursor has reached the target
    //   if (
    //     Math.abs(targetX - currentX) > 0.1 ||
    //     Math.abs(targetY - currentY) > 0.1
    //   ) {
    //     // Continue updating in the next animation frame
    //     requestAnimationFrame(updateCursor);
    //   } else {
    //     isMoving = false;
    //   }
    // }

    // er3eerjek932857483wkedskn
    // dsadjds
  }, []); // Empty dependency array to ensure useEffect runs only once

  useEffect(() => {
    const section = document.querySelector(".parallax");

    if (!section) {
      return;
    }

    const initialScale = 0.8;
    const maxScale = 1.0;
    const scaleMultiplier = 0.001;

    // Set the initial scale explicitly
    section.style.transform = `scale(${initialScale})`;

    const updateSectionScale = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      let newScale = initialScale + scrollY * scaleMultiplier;
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
    console.log(shouldShrink);
    const triggerHeight =
      footer.getBoundingClientRect().top - window.innerHeight + 170;
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

  return (
    <>
      <div id={shadowOn}></div>
      {/* <div id="circleCursor" className="hidden sm:block"></div> */}
      <div className="background-mobile"></div>
      <div className="grain"></div>
      <div className="homecont h-[64vh] sm:h-[74vh]">
        <HomeHero />
      </div>

      <>
        <div className="second-section parallax">
          <div className="work h-[420px] sm:h-[300px] mb-[-5px] sm:mb-[0px]"></div>
        </div>
        <Works />
      </>

      <div className="mt-[-140px]" style={{ overflowX: "hidden" }}>
        <Claim />
      </div>

      <div className="services-cont pt-[20px]">
        <Services />
      </div>
      <Process />
      <div className="sm:h-screen sm:pb-0  	" style={{ background: " #ECECEC" }}>
        <div className="  ">
          <h3 className="b1-desk ml-11 sm:ml-36 pt-24 sm:pt-72">
            We love our clients
          </h3>
        </div>
        <Carousel />
        {/* <PruebaPage /> */}
      </div>
      {/* <StackedCards /> */}
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <div
          className={`prefooter ${shouldShrink ? "shrink" : ""}`}
          // ref={prefooterRef}
        >
          <Link to={"/contact"}>
            <div
              className={` cursor next-level ${
                isMoving ? "is-moving" : ""
              } flex flex-row h-[100%] items-center justify-center`}
            >
              <p className="b1-desk py-0 pb-[45px] sm:pb-[0px] 	pl-0 sm:pr-[100px] text-white	">
                {translateText(
                  "Llevamos tu idea a otro level",
                  " Let’s take your idea to the next level."
                )}
              </p>
              {/* <ReactSVG src={CursorDrop} className="" /> */}
              <div className="drop-us b2-desk text-white">Drop us a line</div>
            </div>
          </Link>
        </div>
        <div className="h-[75px] sm:h-[65px]"></div>
        <div className="footer" ref={footerRef}>
          <div className="flex flex-col sm:flex-row justify-between pb-[50px]">
            <div
              className="t-mail ml-[18px] sm:ml-[128px] mb-[30px] sm:mb-[0px]"
              onClick={handleCopyClick}
            >
              <p className="sayhi mb-3">Say hi</p>
              <div className="flex flex-row sm:items-center">
                <p className="contacts-home">{email}</p>
                <span
                  className="ml-5 "
                  style={{ fontSize: "12px", fontWeight: "400" }}
                  ref={textToCopy}
                >
                  click to copy
                </span>
              </div>
            </div>
            <div className=" ml-[18px] sm:ml-[0px] sm:mr-[128px] flex flex-col sm:flex-row">
              <div className=" mr-[80px] mb-[30px] sm:mb-[0px]">
                <p className="sayhi mb-3">Argentina</p>
                <a href="https://wa.me/+5491151632960">
                  <p className="contacts-home">+54 9 11-5163-2960</p>
                </a>
              </div>
              <div>
                <p className="sayhi mb-3">Spain</p>
                <a href="https://wa.me/+34634269453">
                  <p className="contacts-home">+34 634 26 94 53</p>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t-gray  ">
            <p className="privacy-font">© 2024 LABBA STUDIO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
