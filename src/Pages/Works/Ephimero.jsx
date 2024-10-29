import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ephiHero from "../../Assets/work/Ephimero/hero_ephi.jpg";
import ephiHeroMob from "../../Assets/work/Ephimero/hero-principal-mob.webp";

import Inmo2 from "../../Assets/work/Inmobiliare/Inmo2.png";
import Work1 from "../../Assets/work/work-morgenstern.webp";
import Morgenstern from "../../Assets/work/work-morgenstern.webp";
import Work2 from "../../Assets/work/work-inmobiliare.webp";
import EphiMob1 from "../../Assets/work/Ephimero/ephi-mob1.jpg";
import EphiMob2 from "../../Assets/work/Ephimero/ephi-mob2.webp";
import EphiMob3 from "../../Assets/work/Ephimero/ephi-mob3.jpg";
import EphiMob4 from "../../Assets/work/Ephimero/ephi-mob4.jpg";
import EphiMob5 from "../../Assets/work/Ephimero/ephi-mob5.jpg";
import EphiMob6 from "../../Assets/work/Ephimero/ephi-mob6.jpg";
import EphiGroup from "../../Assets/work/Ephimero/ephi-desk-group-2.webp";

import Work6 from "../../Assets/work/work-manno.webp";

import LabbaLogo from "../../Assets/labba/labba-iso.svg";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import Footer from "../../Components/Footer";

const Ephimero = () => {
  let isDesktop = window.innerWidth > 1024;

  let ephiBg = ephiHeroMob;

  if (isDesktop) {
    ephiBg = ephiHero;
  }

  useEffect(() => {
    document.title = "Ephimero - Labba Studio";
  }, []);

  return (
    <>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center mt-[-77px] md:mt-[-8rem]"
        style={{ backgroundImage: `url(${ephiBg})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Ephimero
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Ephimero</h2>
        <p className="work-p">
          The challenge was to create a seamless eCommerce experience that would
          appeal to both design enthusiasts and consumers looking for premium
          home decor.
        </p>
        <p className="work-p mt-8">
          We focused on creating an elegant and minimalist design that
          emphasized the quality and aesthetic of Ephimero's candles. The
          website was built with a mobile-first approach, ensuring that
          customers could easily browse and purchase products on any device.
        </p>

        <div className="mt-8 ssm:flex ssm:flex-row ssm:justify-between">
          <div className="w-[] ">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">Services</p>
            <p className=" text-lg sm:text-2xl ">UX/UI Design </p>
            <p className=" text-lg sm:text-2xl ">Development</p>
            <p className=" text-lg sm:text-2xl ">Product renders</p>
            <p className=" text-lg sm:text-2xl ">Growth</p>
          </div>
          <div className="hidden ssm:block">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
            <p className=" text-lg sm:text-2xl ">2023</p>
          </div>
          <div className="hidden ssm:block">
            <Link to={"https://ephimero.com/"} target="_blank">
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
              <p className=" text-lg sm:text-2xl underline">website</p>
            </Link>
          </div>

          <div className="flex justify-between mt-8 ssm:hidden">
            <div>
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
              <p className=" text-lg sm:text-2xl ">2023 </p>
            </div>
            <div className="mr-14">
              <Link to={"https://ephimero.com/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:h-[710px] w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{ backgroundColor: `#DBD9C5` }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:px-6 flex items-center">
          <div className="w-full h-[80%]  overflow-hidden flex justify-around  space-x-3">
            <img src={EphiMob1} className="w-1/3 h-auto object-contain" />
            <img src={EphiMob2} className="w-1/3 h-auto object-contain" />
            <img src={EphiMob3} className="w-1/3 h-auto object-contain" />
          </div>
        </div>
      </div>

      <div
        className="md:h-[710px] w-[100vw] bg-cover bg-center mt-6 md:mt-6 flex justify-center"
        style={{
          background: `linear-gradient(76.23deg, #DBD9C5 -0.93%, #CCBDA2 100%)`,
        }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:p-6">
          <div className="w-full md:h-full overflow-hidden">
            <img
              src={EphiGroup}
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
          background: `linear-gradient(76.23deg, #DBD9C5 -0.93%, #CCBDA2 100%)`,
        }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:px-6 flex items-center">
          <div className="w-full h-[80%]  overflow-hidden flex justify-around  space-x-3">
            <img src={EphiMob4} className="w-1/3 h-auto object-contain" />
            <img src={EphiMob5} className="w-1/3 h-auto object-contain" />
            <img src={EphiMob6} className="w-1/3 h-auto object-contain" />
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
          <Link to="/works/manno">
            <div
              className="work-item relative mb-2 cursor-none sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px] mt-6  "
              style={{ backgroundImage: `url(${Work6})` }}
              id="pasando"
            >
              <div className="project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
                <div className="flex flex-row justify-between">
                  <div>
                    <p
                      className="l-desk text-[#ECECEC]"
                      style={{ fontWeight: 500 }}
                    >
                      Manno
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="tags p-12 mr-[6px]">Design</p>
                    <p className="tags p-12">Development</p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="b4-desk text-[#ECECEC]">
                    A trusted community app that connects people who need to
                    outsource tasks and find local services, with people looking
                    to earn money and ready to work.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* Segunda fila de trabajos - Dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-[24px]">
            <Link to="/works/morgenstern" rel="noopener noreferrer">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Morgenstern})` }}
                id="pasando"
              >
                <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p
                        className="l-desk text-[#ECECEC]"
                        style={{ fontWeight: 500 }}
                      >
                        Morgenstern
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 mr-[6px]">Design</p>
                      <p className="tags p-12">Development</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      A creative and playful website for a creative and playful
                      illustrated project.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

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

            {/* 
            Work  */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Ephimero;
