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
  const isMobile = window.innerWidth <= 768;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [videoShouldPlay, setVideoShouldPlay] = useState(false);

  useEffect(() => {
    document.title = "Labba Studio — Design & Code for Digital Experiences";
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

    if (!ellipseShadow) {
      return;
    }

    const ellipseWidth = 1167;
    const ellipseHeight = 1167;
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    // Posiciona la sombra en el centro de la pantalla al cargar
    const initialX = window.innerWidth / 2 + 360 - halfWidth;
    const initialY = window.innerHeight / 2 - 50 - halfHeight;

    ellipseShadow.style.left = `${initialX}px`;
    ellipseShadow.style.top = `${initialY}px`;

    // Luego, mueve la sombra con el cursor
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX - halfWidth;
      const y = e.clientY - halfHeight;

      ellipseShadow.style.left = `${x}px`;
      ellipseShadow.style.top = `${y}px`;
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", (e) => {
        const x = e.clientX - halfWidth;
        const y = e.clientY - halfHeight;

        ellipseShadow.style.left = `${x}px`;
        ellipseShadow.style.top = `${y}px`;
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Labba Studio — Design & Code for Digital Experiences</title>
        <meta
          name="description"
          content="Labba Studio diseña y desarrolla productos digitales, sitios web y marcas. Creamos experiencias creativas que convierten."
        />
        <link rel="canonical" href="https://labba.studio/" />
        <meta
          property="og:title"
          content="Labba Studio — Design & Code for Digital Experiences"
        />
        <meta
          property="og:description"
          content="Labba Studio diseña y desarrolla productos digitales, sitios web y marcas. Creamos experiencias creativas que convierten."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/" />
        <meta property="og:image" content="https://labba.studio/logo275.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Labba Studio — Design & Code for Digital Experiences"
        />
        <meta
          name="twitter:description"
          content="Labba Studio diseña y desarrolla productos digitales, sitios web y marcas."
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
        <section aria-label="Featured work" data-nosnippet>
          <WorksGrid works={getWorksByIds(getWorksConfig("home"))} />
        </section>
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
