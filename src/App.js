import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import CustomCursor from "./Hooks/CustomCursor";
import Contact from "./Pages/Contact";
import { LanguageProvider } from "./Hooks/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TweenLite } from "gsap/gsap-core";
import SmoothScroll from "./Hooks/SmoothScroll";
import Pruebas from "./Components/Pruebas";
import PruebaPage from "./Pages/PruebaPage";
import Cursor from "./Hooks/Cursor";
import Loader from "./Components/Loader";
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [scrollXEnabled, setScrollXEnabled] = useState(true);

  const cursorRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Add your conditions for enabling/disabling horizontal scroll
      if (window.innerWidth > 1 && window.innerHeight < 10000) {
        setScrollXEnabled(false);
      } else {
        setScrollXEnabled(true);
      }
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const svgCode = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3137 0.686267L0.686292 23.3137M23.3137 0.686267H0.686292M23.3137 0.686267V23.3137" stroke="#ECECEC"/>
  </svg>
`;

  const svgPlus = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_b_2501_3)">
  <path d="M19 10L3.57628e-07 10" stroke="#212121"/>
  </g>
  <g filter="url(#filter1_b_2501_3)">
  <path d="M9.5 19.5L9.5 0.5" stroke="#212121"/>
  </g>
  <defs>
  <filter id="filter0_b_2501_3" x="-4" y="5.5" width="27" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
  </filter>
  <filter id="filter1_b_2501_3" x="5" y="-3.5" width="9" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
  </filter>
  </defs>
  </svg>  
`;

  useEffect(() => {
    const circleCursor = document.getElementById("circleCursor");

    if (!circleCursor) {
      // Check if the element exists to prevent errors
      return;
    }

    const cursorWidth = 20;
    const cursorHeight = 20;
    const mitiWidth = cursorWidth / 2;
    const mitiHeight = cursorHeight / 2;

    let targetX = 0;
    let targetY = 0;
    let isMoving = false;

    // Update the ellipse's position based on the cursor's coordinates
    document.addEventListener("mousemove", (e) => {
      targetX = e.clientX - mitiWidth; // Center horizontally
      targetY = e.clientY - mitiHeight; // Center vertically

      if (!isMoving) {
        isMoving = true;
        updateCursor();
      }
    });

    function isCursorOverLink(element) {
      return element.id === "pasando";
    }

    function isCursorOverLinkTwo(element) {
      return element.id === "pasando2";
    }
    function updateCursorStyle(isOverLink, isOverLinkTwo) {
      const transitionDuration = "0.5s"; // You can adjust the duration as needed
      const transitionDuration2 = "0.2s"; // You can adjust the duration as needed

      if (isOverLink) {
        // Modify the cursor style when over "pasando" element
        circleCursor.style.width = "100px";
        circleCursor.style.height = "100px";
        circleCursor.style.fontSize = "50px";
        circleCursor.style.fontWeight = "400";
        circleCursor.style.transition = `width ${transitionDuration}, height ${transitionDuration}`;
        circleCursor.style.setProperty(
          "--before-content",
          `url('data:image/svg+xml,${encodeURIComponent(svgCode)}')`
        );
        circleCursor.style.setProperty("--before-margin-top", "-7px");

        // Add other style modifications as needed
      } else if (isOverLinkTwo) {
        // Modify the cursor style when over "pasando2" element
        // Modify the cursor style when over "pasando" element
        circleCursor.style.width = "56px";
        circleCursor.style.height = "56px";
        circleCursor.style.fontSize = "50px";
        circleCursor.style.fontWeight = "400";
        circleCursor.style.transition = `width ${transitionDuration2}, height ${transitionDuration2}`;
        circleCursor.style.setProperty(
          "--before-content",
          `url('data:image/svg+xml,${encodeURIComponent(svgPlus)}')`
        );
        circleCursor.style.setProperty("--before-margin-top", "-7px");
      } else {
        // Reset the cursor style when not over a link
        circleCursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        circleCursor.style.width = "35px";
        circleCursor.style.height = "35px";
        circleCursor.style.transition = `width ${transitionDuration}, height ${transitionDuration}`;
        circleCursor.style.setProperty("--before-content", "''"); // Use a custom property
      }
    }

    function updateCursor() {
      // Calculate the current cursor position
      const currentX = parseFloat(circleCursor.style.left) || 0;
      const currentY = parseFloat(circleCursor.style.top) || 0;

      // Calculate the distance to move in this frame
      const deltaX = Math.round((targetX - currentX) * 0.1); // Round the position values
      const deltaY = Math.round((targetY - currentY) * 0.1); // Round the position values

      // Update the cursor position
      circleCursor.style.left = Math.round(currentX + deltaX) + "px";
      circleCursor.style.top = Math.round(currentY + deltaY) + "px";

      const isOverLink = isCursorOverLink(
        document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
      );

      const isOverLinkTwo = isCursorOverLinkTwo(
        document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
      );

      // Update the cursor style
      updateCursorStyle(isOverLink, isOverLinkTwo);
      // Check if the cursor has reached the target
      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        // Continue updating in the next animation frame
        requestAnimationFrame(updateCursor);
      } else {
        isMoving = false;
      }
    }
  }, []); //

  return (
    <>
      <Loader />
      <BrowserRouter>
        <LanguageProvider>
          <div id="circleCursor" className="hidden sm:block"></div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <div style={{ overflowX: scrollXEnabled ? "auto" : "hidden" }}> */}
                  <ScrollToTop />
                  <Home />
                  {/* </div> */}
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prueba" element={<Pruebas />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
