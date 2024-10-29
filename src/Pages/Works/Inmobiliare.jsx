import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import WorkInmBg from "../../Assets/work/Inmobiliare/inmobiliare_bg.webp";
import Inmo2 from "../../Assets/work/Inmobiliare/Inmo2.png";
import InmoMob1 from "../../Assets/work/Inmobiliare/Inmo-Mob1.jpg";
import InmoMob2 from "../../Assets/work/Inmobiliare/Inmo-Mob2.webp";
import InmoMob3 from "../../Assets/work/Inmobiliare/Inmo-Mob3.jpg";
import InmoMob4 from "../../Assets/work/Inmobiliare/Inmo-Mob4.webp";

import Work1 from "../../Assets/work/work-morgenstern.webp";
import Work2 from "../../Assets/work/work-inmobiliare.webp";
import Work3 from "../../Assets/work/work-ephimero.webp";
import Work4 from "../../Assets/work/work-trebol.webp";
import Work5 from "../../Assets/work/work-daewoo.webp";
import Work6 from "../../Assets/work/work-manno.webp";
import BgMorg from "../../Assets/work/Morgenstern/bg-morg.png";
import Video1 from "../../Assets/work/Morgenstern/Home1.mp4";
import Video2 from "../../Assets/work/Morgenstern/About2.mp4";
import Video3 from "../../Assets/work/Morgenstern/Comunidad3.mp4";
import NewWork from "../../Components/NewWork";
import LabbaLogo from "../../Assets/labba/labba-iso.svg";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import Footer from "../../Components/Footer";

const Inmobiliare = () => {
  let isDesktop = window.innerWidth > 1024;

  let inmoBg = Work2;
  if (window.innerWidth > 900) {
    inmoBg = WorkInmBg;
  }

  useEffect(() => {
    document.title = "Inmobiliare - Labba Studio";
  }, []);

  return (
    <>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center mt-[-77px] md:mt-[-8rem]"
        style={{ backgroundImage: `url(${inmoBg})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Inmobiliare
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Inmobiliare</h2>
        <p className="work-p">
          Inmobiliare approached us with the goal of redesigning inmobiliare’s
          website for users to explore real estate news. They wanted to provide
          an intuitive and visually appealing experience to their more than 500k
          users.
        </p>
        <p className="work-p mt-8">
          The challenge was to simplify the navigation and search process for
          users while showcasing news in an engaging way.
        </p>

        <p className="work-p mt-8">
          We started by analyzing the user journey and identifying pain points
          in the current real estate platforms. Through our UX/UI design
          process, we created an interface that prioritized ease of use,
          allowing users to quickly find properties that matched their needs. We
          incorporated dynamic filtering, high-quality images, and a clean
          layout to ensure users could explore properties with minimal friction.
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
            <p className=" text-lg sm:text-2xl ">2024 </p>
          </div>
          <div className="hidden ssm:block">
            <Link to={"https://inmobiliare.com/"} target="_blank">
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
              <Link to={"https://inmobiliare.com/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:h-[890px] w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center mb-6 lg:mb-[40px] "
        style={{ backgroundColor: `#021F00` }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:p-6">
          <div className="w-full md:h-full overflow-hidden">
            <img
              src={Inmo2}
              className="w-full md:h-full"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="h-[340px] md:h-[800px] w-[100vw] bg-cover bg-center flex justify-center lg:mb-[300px]"
        style={{ backgroundColor: `#021F00` }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:px-6 flex items-center">
          <div className="w-full h-[80%] overflow-hidden flex justify-between ">
            <img src={InmoMob1} className="w-[24%] h-auto object-contain" />
            <img src={InmoMob2} className="w-[24%] h-auto object-contain" />
            <img src={InmoMob3} className="w-[24%] h-auto object-contain" />
            <img src={InmoMob4} className="w-[24%] h-auto object-contain" />
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
          <Link to="/works/manno" target="" rel="noopener noreferrer">
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
            <Link to="/works/daewoo">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work5})` }}
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

            <Link to="/works/ephimero">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work3})` }}
                id="pasando"
              >
                <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p
                        className="l-desk text-[#ECECEC]"
                        style={{ fontWeight: 500 }}
                      >
                        Ephimero
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 mr-[6px]">Design</p>
                      <p className="tags p-12">Development</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      Candles ecommerce with ethics & aesthetics
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

export default Inmobiliare;
