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
import MannoHero from "../Assets/work/Manno/MannoHero.webp";

import ephiHero from "../Assets/work/Ephimero/hero_ephi.jpg";
import ephiHeroMob from "../Assets/work/Ephimero/hero-principal-mob.webp";
import WorkInmBg from "../Assets/work/Inmobiliare/inmobiliare_bg.webp";

import Work4 from "../Assets/work/work-trebol.webp";
import Work5 from "../Assets/work/work-manno.webp";
import Work6 from "../Assets/work/work-morgenstern.webp";

function Home() {
  const { userLanguage, translateText } = useLanguage();
  const isMobile = window.innerWidth <= 768;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.title = "Labba Studio";
  }, []);

  let shadowOn = "ellipse-shadow";
  // let displayClaim = "";
  // let shrinkNumber = 170;

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

  return (
    <>
      <div id={shadowOn}></div>
      <div className="background-mobile"></div>

      <HomeHero />

      <NewWorks />
      <div className="" style={{ overflow: "hidden" }}>
        <Claim />
      </div>

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
      <Footer />

      <img src={MannoHero} className="hidden" />

      <img src={ephiHero} className="hidden" />
      <img src={ephiHeroMob} className="hidden" />
      <img src={WorkInmBg} className="hidden" />
      <img src={Work4} className="hidden" />
      <img src={Work5} className="hidden" />
      <img src={Work6} className="hidden" />
    </>
  );
}

export default Home;
