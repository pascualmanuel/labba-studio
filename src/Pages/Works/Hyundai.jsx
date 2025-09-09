import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import HyundaiHero from "../../Assets/work/Hyundai/hyundai-site.webp";

import Work2 from "../../Assets/work/work-inmobiliare.webp";
import Work3 from "../../Assets/work/work-ephimero.webp";

import Work6 from "../../Assets/work/work-manno.webp";
import BgVideoHy from "../../Assets/fondo-contact.webp";
import Video1 from "../../Assets/work/Hyundai/hyundai_video.mp4";
import Video2 from "../../Assets/work/Scouting/scouting_video2.mp4";
import Image1 from "../../Assets/work/Hyundai/hyundai-phones.webp";
import Video3 from "../../Assets/work/Morgenstern/Comunidad3.mp4";
import Footer from "../../Components/Footer";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";
import WorksGrid from "../../Components/WorksGrid";

const Hyundai = () => {
  let isDesktop = window.innerWidth > 1024;
  useEffect(() => {
    document.title = "Hyundai - Labba Studio";
  }, []);

  return (
    <>
      <Helmet>
        <title>Hyundai — Labba Studio</title>
        <meta
          name="description"
          content="Showcasing models, promotions, and services while improving the digital experience for Hyundai Costa Rica."
        />
        <link rel="canonical" href="https://labba.studio/works/hyundai" />
        <meta property="og:title" content="Hyundai — Labba Studio" />
        <meta
          property="og:description"
          content="Showcasing models, promotions, and services while improving the digital experience for Hyundai Costa Rica."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/works/hyundai" />
      </Helmet>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center lg:bg-[100%_78%] "
        style={{ backgroundImage: `url(${HyundaiHero})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Hyundai
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Hyundai</h2>
        <p className="work-p">
          We created a modern, responsive website aimed at showcasing their full
          range of vehicles, promotions, and services. The design combines
          visual impact with intuitive usability, ensuring users can explore
          models, compare features, and connect with dealerships effortlessly.{" "}
        </p>{" "}
        <p className="work-p mt-8">
          The site was optimized for performance and mobile navigation,
          delivering a smooth and engaging digital experience. With a focus on
          brand consistency and innovation, the website strengthens Hyundai’s
          presence in the Costa Rican market.
        </p>
        <div className="mt-8 ssm:flex ssm:flex-row ssm:justify-between">
          <div className="w-[] ">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">Services</p>
            <p className=" text-lg sm:text-2xl ">UX/UI Design </p>
            <p className=" text-lg sm:text-2xl ">Development</p>
            <p className=" text-lg sm:text-2xl ">SEO</p>
          </div>
          <div className="hidden ssm:block">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
            <p className=" text-lg sm:text-2xl ">2025 </p>
          </div>
          <div className="hidden ssm:block">
            <Link to={"https://www.scoutinglabs.com/"} target="_blank">
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
              <p className=" text-lg sm:text-2xl underline">website</p>
            </Link>
          </div>

          <div className="flex justify-between mt-8 ssm:hidden">
            <div>
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
              <p className=" text-lg sm:text-2xl ">2025 </p>
            </div>
            <div className="mr-14">
              <Link to={"https://www.scoutinglabs.com/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{ backgroundImage: `url(${BgVideoHy})` }}
      >
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px] py-[72px]">
          <div className="w-full md:h-full rounded-[16px] overflow-hidden">
            <video
              src={Video1}
              muted
              autoPlay
              loop
              playsInline
              className="w-full md:h-full"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[500px] sm:max-w-[768px] center py-20 px-4 sm:px-6">
        <p className="work-p">
          The site includes a dynamic vehicle configurator, interactive
          comparison tools, and an optimized dealer locator. Pages are built
          with modular sections for easy content updates, while animations and
          microinteractions enhance the browsing experience. Performance-focused
          development ensures fast load times and smooth navigation, even on
          mobile data connections.
        </p>
      </div>

      <div className="w-[100vw] bg-cover bg-center mt-1 sm:mt-10 flex justify-center mb-[80px] lg:mb-[150px] ">
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px]">
          <div className="sm:w-full h-full rounded-[16px] overflow-hidden">
            <img
              src={Image1}
              className="w-full sm:h-[100%]"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="works-section relative mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] flex flex-col mb-[150px]">
        <h2 className="text-[30px] sm:text-[45px] font-bold leading-tight mb-10">
          Other work
        </h2>
        <WorksGrid works={getWorksByIds(getWorksConfig("scouting-labs"))} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Hyundai;
