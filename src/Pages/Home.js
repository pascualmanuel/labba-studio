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
  let shrinkNumber = 170;
  if (isMobile) {
    shadowOn = "no";
    displayClaim = "none";
    shrinkNumber = 320;
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
    const prefooter = document.querySelector(".prefooter");
    const footer = document.querySelector(".footer");

    if (!prefooter || !footer) {
      return;
    }

    const triggerHeight =
      footer.getBoundingClientRect().top - window.innerHeight + shrinkNumber;
    const minOpacity = 1;

    const updatePrefooterStyles = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= triggerHeight) {
        prefooter.classList.add("shrink");
        prefooter.style.opacity = minOpacity;
      } else {
        prefooter.classList.remove("shrink");
        prefooter.style.opacity = 1;
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
      }, 1500);
    }
  };

  const [isMoving, setIsMoving] = useState(false);
  const [hovered, setHovered] = useState(false);

  const btnEmailCopyStyle = {
    position: "relative",
    width: "220px",
    height: "42px",
    overflow: "hidden",
    border: "none",
    cursor: "inherit",
  };

  const beforeAfterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "all 0.3s",
  };

  const beforeHover = {
    ...beforeAfterStyle,
    top: hovered ? "-60px" : "0",
  };

  const afterHover = {
    ...beforeAfterStyle,
    top: hovered ? "0" : "60px",
  };

  return (
    <>
      <div id={shadowOn}></div>
      <div className="background-mobile"></div>
      <div className="grain"></div>
      <div className="h-[64vh] sm:h-[74vh]" style={{ minHeight: "510px" }}>
        <HomeHero />
      </div>

      <>
        <div className="second-section parallax">
          <div className="work h-[420px] sm:h-[300px] mb-[-5px] sm:mb-[0px]"></div>
        </div>
        <Works />
      </>

      {/* <div className="mt-[-140px]" style={{ overflowX: "hidden" }}> */}
      <div className="mt-[-140px]" style={{ overflowX: "hidden" }}>
        <Claim />
      </div>

      <div className="services-cont pt-[20px]" style={{ overflow: "hidden" }}>
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
              } flex flex-row h-[100%] sm:items-center justify-center ml-[18px] sm:ml-0`}
            >
              <p className="b1-desk py-0 pb-[45px] sm:pb-[0px] 	pl-0 sm:pr-[100px] text-white	text-left">
                {translateText(
                  "Llevamos tu idea a otro level",
                  " Let’s take your idea to the next level."
                )}
              </p>
              {/* <ReactSVG src={CursorDrop} className="" /> */}

              <div
                type="submit"
                className="button-contact-submit button-font input-cursor coolBeans text-white"
              >
                Drop us a line
              </div>
            </div>
          </Link>
        </div>
        <div className="h-[45px] sm:h-[65px]"></div>
        <div className="footer" ref={footerRef}>
          <div className="flex flex-col sm:flex-row justify-between pb-[50px]">
            <div
              className="t-mail ml-[18px] sm:ml-[128px] mb-[15px] sm:mb-[0px]"
              onClick={handleCopyClick}
            >
              <p className="sayhi mb-3">Say hi</p>
              <div className="btn-floral-border" onClick={handleCopyClick}>
                {/* <div
                  class={`btn-floral-scent before:content-['hello@labba.studio'] after:content-['${classHello}'] `}
                  ref={textToCopy}
                ></div> */}
                <button
                  className=""
                  style={btnEmailCopyStyle}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className="b4-desk text-red" style={beforeHover}>
                    hello@labba.studio
                  </div>
                  <div
                    className="b4-desk text-red"
                    style={afterHover}
                    ref={textToCopy}
                  >
                    click to copy
                  </div>
                </button>
              </div>
            </div>

            <div className="ml-[18px] sm:ml-[0px] sm:mr-[128px] flex flex-col sm:flex-row">
              <div className="mr-0 sm:mr-[80px] mb-[15px] sm:mb-[0px]">
                <div>
                  <p className="sayhi mb-3">Argentina</p>
                  <a
                    href="https://wa.me/+5491151632960"
                    className="whatsapp-link"
                    target="_blank"
                  >
                    <div className="btn-floral-border">
                      <div class="btn-floral-scent b4-desk  before:content-['+54_9_11_5163_2960'] after:content-['Open_in_WhatsApp'] "></div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <p className="sayhi mb-3">Spain</p>
                <a
                  href="https://wa.me/+34634269453"
                  className="whatsapp-link"
                  target="_blank"
                >
                  <div className="btn-floral-border">
                    <div class="btn-floral-scent  b4-desk before:content-['+34_0634_0269_453'] after:content-['Open_in_WhatsApp'] "></div>
                  </div>
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
