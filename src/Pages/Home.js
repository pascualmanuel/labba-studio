import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../Styles/App.css";
// import Works from "../Components/Works";
import "../Styles/Prueba.css";
import HomeHero from "../Components/HomeHero";
// import Services from "../Components/OldComps/Services";
import Process from "../Components/Process";
import Carousel from "../Components/Carousel";
import Claim from "../Components/Claim";
import { useLanguage } from "../Hooks/LanguageContext";
import { Link } from "react-router-dom";
import NewWorks from "../Components/NewWork";
import NewServices from "../Components/NewServices";
import Footer from "../Components/Footer";
import MannoHero from "../Assets/work/Manno/MannoHero.webp";
import VideoSection from "../Components/VideoSection";
import WorksGrid from "../Components/WorksGrid";
import { getWorksByIds } from "../data/worksData";
import { getWorksConfig } from "../data/worksConfig";

import ephiHero from "../Assets/work/Ephimero/hero_ephi.jpg";
import ephiHeroMob from "../Assets/work/Ephimero/hero-principal-mob.webp";
import WorkInmBg from "../Assets/work/Inmobiliare/inmobiliare_bg.webp";

import Work4 from "../Assets/work/work-trebol.webp";
import Work5 from "../Assets/work/work-manno.webp";
import Work6 from "../Assets/work/work-morgenstern.webp";

function Home() {
  const { userLanguage, translateText } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [videoShouldPlay, setVideoShouldPlay] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    // si en esta sesión ya se mostró el loader, reproducir directo
    if (sessionStorage.getItem("homeLoaderShown") === "true") {
      setVideoShouldPlay(true);
      return;
    }

    const onDone = () => {
      // marcar que el loader ya se mostró en esta sesión
      sessionStorage.setItem("homeLoaderShown", "true");
      // abrir la compuerta del video
      setVideoShouldPlay(true);
    };

    // escuchar la señal global del loader (se dispara tras animationend)
    window.addEventListener("home-loader-done", onDone, { once: true });
    return () => window.removeEventListener("home-loader-done", onDone);
  }, []);

  let shadowOn = "ellipse-shadow";

  useEffect(() => {
    const ellipseShadow = document.getElementById(shadowOn);
    if (!ellipseShadow) return;

    const ellipseWidth = 1167;
    const ellipseHeight = 1167;
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    const initialX = window.innerWidth / 2 + 360 - halfWidth;
    const initialY = window.innerHeight / 2 - 50 - halfHeight;
    ellipseShadow.style.left = `${initialX}px`;
    ellipseShadow.style.top = `${initialY}px`;

    const handler = (e) => {
      const x = e.clientX - halfWidth;
      const y = e.clientY - halfHeight;
      ellipseShadow.style.left = `${x}px`;
      ellipseShadow.style.top = `${y}px`;
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Labba Studio — Design & Code for Digital Experiences",
            url: "https://labba.studio/",
            inLanguage: "en",
            isPartOf: {
              "@type": "WebSite",
              name: "Labba Studio",
              url: "https://labba.studio/",
            },
          })}
        </script>
        <title>Labba Studio — Design & Code for Digital Experiences</title>
        <meta
          name="description"
          content="Labba Studio designs and builds digital products, websites, and brands. We create creative, conversion‑driven experiences."
        />
        <link rel="canonical" href="https://labba.studio/" />
        <link rel="alternate" hrefLang="en" href="https://labba.studio/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/"
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta
          property="og:title"
          content="Labba Studio — Design & Code for Digital Experiences"
        />
        <meta
          property="og:description"
          content="Labba Studio designs and builds digital products, websites, and brands. We create creative, conversion‑driven experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/" />
        <meta
          property="og:image"
          content="https://labba.studio/og/home-cover.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://labba.studio/og/home-cover.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://labba.studio/og/home-cover.jpg"
        />
        <meta
          name="twitter:title"
          content="Labba Studio — Design & Code for Digital Experiences"
        />
        <meta
          name="twitter:description"
          content="Labba Studio designs and builds digital products, websites, and brands."
        />
      </Helmet>
      <div id={shadowOn} className="hidden md:block"></div>
      <div className="background-mobile"></div>

      <h1 className="sr-only">
        Labba Studio — Design & Code for Digital Experiences
      </h1>
      <HomeHero />

      <VideoSection shouldPlay={videoShouldPlay} />

      <div className="">
        <NewServices />
      </div>

      <div className="works-section relative mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] flex flex-col my-[100px] md:mb-[150px]">
        {/* <NewWorks /> */}
        <section aria-label="Featured work">
          <WorksGrid works={getWorksByIds(getWorksConfig("home"))} />
        </section>

        <div className="flex justify-center items-center mt-12 ">
          <Link
            to="/work"
            className="  z-[999] w-[147px] h-[46px] font-bold text-[16px] bg-[#FFFFFF1A] flex justify-center items-center"
            style={{
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
            }}
          >
            <span>View all work</span>
          </Link>
        </div>
      </div>

      {/* <Footer /> */}

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
