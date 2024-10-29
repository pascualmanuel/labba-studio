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
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center mt-[-77px] md:mt-[-8rem]"
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
        className="md:h-[710px] w-[100vw] bg-cover bg-center mb-6 md:mb-6  mt-28 md:mt-40 flex justify-center"
        style={{
          backgroundColor: `#26233C`,
        }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:p-6">
          <div className="w-full md:h-full overflow-hidden">
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
        className="md:h-[710px] w-[100vw] bg-cover bg-center mt-6 md:mt-6 flex justify-center lg:mb-[300px]"
        style={{
          background: `linear-gradient(78.38deg, #201C33 -0.96%, #2B2944 107.05%)`,
        }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:px-6 flex items-center">
          <div className="w-full h-[80%]  overflow-hidden flex justify-around  space-x-3">
            <img src={MannoMob1} className="w-[24%] h-auto object-contain" />
            <img src={MannoMob2} className="w-[24%] h-auto object-contain" />
            <img src={MannoMob3} className="w-[24%] h-auto object-contain" />
            <img src={MannoMob4} className="w-[24%] h-auto object-contain" />
          </div>
        </div>
      </div>

      {!isDesktop && (
        <p className=" text-xl font-light b-4 pl-6 pb-5 pt-20 text-[#b5b5b5]">
          Other work
        </p>
      )}
      <div>
        {isDesktop && (
          <span
            className="vertical-text text-xl font-light text-[#b5b5b5]"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              position: "sticky",
              top: "200px",
              left: "60px",
              zIndex: "10",
              translate: " 0px -110px",
            }}
          >
            Other work
          </span>
        )}
        <section className="works-section relative  mx-auto px-6 sm:px-[53px] lg:px-[150px] max-w-[1500px] flex flex-col-reverse  lg:mt-[-300px]">
          <Link to="/works/daewoo">
            <div
              className="work-item relative mb-2 cursor-none sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px] mt-6  "
              style={{ backgroundImage: `url(${Work5})` }}
              id="pasando"
            >
              <div className="project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
                <div className="flex flex-row justify-between">
                  <div>
                    <p
                      className="l-desk text-[#ECECEC]"
                      style={{ fontWeight: 500 }}
                    >
                      Daewoo
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="tags p-12 mr-[6px]">Design</p>
                    <p className="tags p-12">Development</p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="b4-desk text-[#ECECEC]">
                    Explore and find your perfect home appliance.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* Segunda fila de trabajos - Dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-[24px]">
            <Link to="/works/inmobiliare">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work2})` }}
                id="pasando"
              >
                <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                  {" "}
                  <div className="flex flex-row justify-between">
                    <div>
                      <p
                        className="l-desk text-[#ECECEC]"
                        style={{ fontWeight: 500 }}
                      >
                        Inmobiliare
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 mr-[6px]">Design</p>
                      <p className="tags p-12">Development</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      Redesigning the experience of the largest real estate news
                      portal in Mexico
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/works/trebol" rel="noopener noreferrer">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work4})` }}
                id="pasando"
              >
                <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p
                        className="l-desk text-[#ECECEC]"
                        style={{ fontWeight: 500 }}
                      >
                        Trebol
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 mr-[6px]">Design</p>
                      <p className="tags p-12">Development</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      With Trebol, users can join various lotteries and keep
                      tabs on the winning numbers, all without the need to visit
                      a physical store.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Manno;
