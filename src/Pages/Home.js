import React, { useEffect, useRef, useState } from "react";
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
    document.title = "Labba Studio";
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
      <div id={shadowOn} className="hidden md:block"></div>
      <div className="background-mobile"></div>

      <HomeHero />

      <VideoSection shouldPlay={videoShouldPlay} />

      <div className="">
        <NewServices />
      </div>

      <div>
        <NewWorks />
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
