import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MannoHero from "../../Assets/work/Manno/MannoHero.webp";
import ephiHeroMob from "../../Assets/work/Ephimero/hero-principal-mob.webp";

import Inmo2 from "../../Assets/work/Inmobiliare/Inmo2.png";
import Work1 from "../../Assets/work/work-morgenstern.webp";
import Work4 from "../../Assets/work/work-trebol.webp";
import Work2 from "../../Assets/work/work-inmobiliare.webp";
import MannoMob1 from "../../Assets/work/Manno/MannoMob1.webp";
import MannoMob2 from "../../Assets/work/Manno/MannoMob2.webp";
import MannoMob3 from "../../Assets/work/Manno/MannoMob3.webp";
import MannoMob4 from "../../Assets/work/Manno/MannoMob4.webp";

import MannoGroup from "../../Assets/work/Manno/MannoScreens.webp";

import Work5 from "../../Assets/work/work-daewoo.webp";

import LabbaLogo from "../../Assets/labba/labba-iso.svg";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import Footer from "../../Components/Footer";
import WorksGrid from "../../Components/WorksGrid";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";

const Manno = () => {
  let isDesktop = window.innerWidth > 1024;

  let MannoBg = MannoHero;

  if (isDesktop) {
    MannoBg = MannoHero;
  }

  useEffect(() => {
    document.title = "Manno - Labba Studio";
  }, []);

  return (
    <>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center lg:bg-[100%_25%]
"
        style={{ backgroundImage: `url(${MannoBg})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Manno
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Manno</h2>
        <p className="work-p">
          The main goal was to refresh the website and align Manno’s digital
          presence with their vision of innovation and excellence.
        </p>
        <p className="work-p mt-8">
          To achieve this, we designed a modern and functional website that
          highlights Manno’s visual identity and simplifies navigation. Our
          focus was on creating a clean, accessible interface that allows users
          to engage with content intuitively and directly.{" "}
        </p>

        <div className="mt-8 ssm:flex ssm:flex-row ssm:justify-between">
          <div className="w-[] ">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">Services</p>
            <p className=" text-lg sm:text-2xl ">UX/UI Design </p>
            <p className=" text-lg sm:text-2xl ">Development</p>
            <p className=" text-lg sm:text-2xl ">Growth</p>
          </div>
          <div className="hidden ssm:block">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
            <p className=" text-lg sm:text-2xl ">2021</p>
          </div>
          <div className="hidden ssm:block">
            <Link to={"https://mannoapp.com/"} target="_blank">
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
              <p className=" text-lg sm:text-2xl underline">website</p>
            </Link>
          </div>

          <div className="flex justify-between mt-8 ssm:hidden">
            <div>
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
              <p className=" text-lg sm:text-2xl ">2021 </p>
            </div>
            <div className="mr-14">
              <Link to={"https://mannoapp.com/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{
          background: `linear-gradient(180deg, #26233C 0%, #675FA2 100%)`,
        }}
      >
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px] py-16">
          <div className="w-full md:h-full  overflow-hidden">
            <img
              src={MannoGroup}
              className="w-full md:h-full"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6 py-24">
          <p className="work-p">
            High-quality imagery, product storytelling, and an intuitive
            interface were key elements of the design. We also incorporated
            features like product reviews, scent descriptions, and recommended
            pairings to enhance the shopping experience.
          </p>
        </div>
      </div>

      <div
        className="h-[280px] md:h-[800px] w-[100vw] bg-cover bg-center flex justify-center  mt-10"
        style={{
          background: `linear-gradient(78.38deg, #201C33 -0.96%, #2B2944 107.05%)`,
        }}
      >
        <div className="w-full max-w-[1500px] px-6 sm:px-[53px] lg:px-16  flex items-center">
          <div className="w-full  overflow-hidden flex justify-between">
            {[MannoMob1, MannoMob2, MannoMob3, MannoMob4].map((src, i) => (
              <div key={i} className="w-[22%] rounded-lg overflow-hidden">
                <img
                  src={src}
                  className="w-full h-auto object-contain rounded-lg object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="works-section relative mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] flex flex-col my-[100px] md:my-[150px]">
        <h2 className="text-[30px] sm:text-[45px] font-bold leading-tight mb-10">
          Other work
        </h2>
        <WorksGrid works={getWorksByIds(getWorksConfig("manno"))} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Manno;
