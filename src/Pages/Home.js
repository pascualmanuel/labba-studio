import React, { useEffect, useRef, useState } from "react";
import "../Styles/App.css";
// import Works from "../Components/Works";
import "../Styles/Prueba.css";
import HomeHero from "../Components/HomeHero";
import Services from "../Components/OldComps/Services";
import Process from "../Components/Process";
import Carousel from "../Components/Carousel";
import Claim from "../Components/OldComps/Claim";
import { useLanguage } from "../Hooks/LanguageContext";
import { Link } from "react-router-dom";
import Rounded from "../Hooks/Rounded";
import NewWorks from "../Components/NewWork";
import NewServices from "../Components/NewServices";
import Footer from "../Components/Footer";

function Home() {
  const { userLanguage, translateText } = useLanguage();
  const isMobile = window.innerWidth <= 768;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  let shadowOn = "ellipse-shadow";
  // let displayClaim = "";
  // let shrinkNumber = 170;
  let widthButton = 247;
  let heightButton = 77;

  if (window.innerWidth <= 1040) {
    widthButton = 207;
    heightButton = 57;
  }
  if (isMobile) {
    shadowOn = "no";
    // displayClaim = "none";
    // shrinkNumber = 340;
    widthButton = 218;
  }
  const svgCode = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3137 0.686267L0.686292 23.3137M23.3137 0.686267H0.686292M23.3137 0.686267V23.3137" stroke="#ECECEC"/>
    </svg>
  `;
  useEffect(() => {
    const ellipseShadow = document.getElementById(shadowOn);

    if (!ellipseShadow) {
      return;
    }

    const ellipseWidth = 1167;
    const ellipseHeight = 1167;
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    document.addEventListener("mousemove", (e) => {
      const x = e.clientX - halfWidth;
      const y = e.clientY - halfHeight;

      ellipseShadow.style.left = x + "px";
      ellipseShadow.style.top = y + "px";
    });
  }, []);

  useEffect(() => {
    const section = document.querySelector(".parallax");

    if (!section) {
      return;
    }

    const initialScale = 0.8;
    const maxScale = 1.0;
    const scaleMultiplier = 0.001;

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
    function handleScroll() {
      const prefooter = document.querySelector(".prefooter");

      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      const bottomThreshold = 100; // 100px arriba del bottom
      const scrolledToThreshold =
        scrollTop + windowHeight >= documentHeight - bottomThreshold;

      if (scrolledToThreshold) {
        prefooter.classList.add("shrink");
      } else {
        prefooter.classList.remove("shrink");
        prefooter.style.opacity = 1;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMoving, setIsMoving] = useState(false);
  const [hovered, setHovered] = useState(false);
  // const [isCopied, setIsCopied] = useState(false);

  // function copyToClipboard(textToCopy) {
  //   const textArea = document.createElement("textarea");
  //   textArea.value = textToCopy;
  //   document.body.appendChild(textArea);
  //   textArea.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(textArea);
  //   setIsCopied(true); // Set isCopied to true when the text is copied
  // }

  // const email = "hello@labba.studio";
  // const textToCopy = useRef(null);

  // const handleCopyClick = () => {
  //   copyToClipboard(email);
  //   if (textToCopy.current) {
  //     textToCopy.current.textContent = "Copied!";
  //   }
  // };

  return (
    <>
      <div id={shadowOn}></div>
      <div className="background-mobile"></div>
      <div className="grain"></div>
      <HomeHero />
      {/* <>
        <Works />
      </> */}
      <NewWorks />
      <div className="" style={{ overflow: "hidden" }}>
        <Claim />
      </div>
      {/* <div
        className="services-cont pt-[20px] mt-[-300px]"
        style={{ overflow: "hidden" }}
      >
        <Services />
      </div> */}
      <div className=" mb-[200px] mt-[-150px] sm:mt-[-120px]">
        <NewServices />
      </div>

      <Process />
      <div className="sm:h-screen sm:pb-0  	" style={{ background: " #ECECEC" }}>
        <div className="  ">
          <h3 className="b1-desk ml-[23px] sm:ml-36 pt-24 sm:pt-72">
            We love our clients
          </h3>
        </div>
        <Carousel />
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <div className={`prefooter ${shouldShrink ? "shrink" : ""}`}>
          <Link to={"/contact"}>
            <div
              className={` cursor next-level ${
                isMoving ? "is-moving" : ""
              } flex flex-row h-[100%] sm:items-center justify-center  sm:ml-0`}
            >
              <p className="b1-desk py-0 pb-[45px] sm:pb-[0px] 	pl-0 sm:pr-[100px] text-white	text-center ls:text-left ">
                {translateText(
                  "Llevamos tu idea a otro level",
                  " Let’s take your idea to the next level."
                )}
              </p>

              <Rounded
                widthButton={widthButton}
                heightButton={heightButton}
                buttonBorderColor={"white"}
              >
                <p className="button-font" style={{ color: "white" }}>
                  Drop us a line
                </p>
              </Rounded>
            </div>
          </Link>
        </div>
        <div className="h-[45px] sm:h-[65px]"></div>
        <div className="footer" ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
