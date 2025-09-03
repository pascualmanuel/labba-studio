import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MorgensternImg from "../../Assets/work/work-morgenstern.webp";

import Work2 from "../../Assets/work/work-inmobiliare.webp";
import Work3 from "../../Assets/work/work-ephimero.webp";

import Work6 from "../../Assets/work/work-manno.webp";
import BgMorg from "../../Assets/work/Morgenstern/bg-morg.png";
import Video1 from "../../Assets/work/Morgenstern/Home1.mp4";
import Video2 from "../../Assets/work/Morgenstern/About2.mp4";
import Video3 from "../../Assets/work/Morgenstern/Comunidad3.mp4";
import Footer from "../../Components/Footer";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";
import WorksGrid from "../../Components/WorksGrid";

const Morgenstern = () => {
  let isDesktop = window.innerWidth > 1024;
  useEffect(() => {
    document.title = "Morgenstern - Labba Studio";
  }, []);

  return (
    <>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center "
        style={{ backgroundImage: `url(${MorgensternImg})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Morgenstern
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Morgenstern</h2>
        <p className="work-p">
          We designed a digital space for a transmedia project that blends
          various artistic mediums, including drawing, animation, sound, text,
          and interactive games. This project serves as an artistic essay that
          explores how we connect with others, the world, and the flow of
          information.
        </p>{" "}
        <p className="work-p mt-8">
          We created a visually dynamic and interactive website that allows
          users to engage with the character Morgenstern in different forms. The
          design was centered around immersing the audience in a fluid
          narrative, where Morgenstern evolves and takes on different shapes to
          address contemporary issues.
        </p>
        <div className="mt-8 ssm:flex ssm:flex-row ssm:justify-between">
          <div className="w-[] ">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">Services</p>
            <p className=" text-lg sm:text-2xl ">UX/UI Design </p>
            <p className=" text-lg sm:text-2xl ">SEO</p>
            <p className=" text-lg sm:text-2xl ">Development</p>
          </div>
          <div className="hidden ssm:block">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
            <p className=" text-lg sm:text-2xl ">2023 </p>
          </div>
          <div className="hidden ssm:block">
            <Link to={"https://holamorgenstern.com/"} target="_blank">
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
              <Link to={"https://holamorgenstern.com/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{ backgroundImage: `url(${BgMorg})` }}
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
          The site integrated multimedia elements, making the user experience
          both reflective and engaging. Animation, soundscapes, and interactive
          components were seamlessly woven into the storytelling, creating a
          unique and thought-provoking digital environment.
        </p>
      </div>
      <div className="w-[100vw] bg-cover bg-center mt-1 sm:mt-10 flex justify-center mb-[80px] lg:mb-[150px] ">
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px]">
          <div className="sm:w-full h-full rounded-[16px] overflow-hidden">
            <video
              src={Video3}
              muted
              autoPlay
              loop
              playsInline
              className="w-full sm:h-full"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-[100vw] bg-cover bg-center mt-1 sm:mt-10 flex justify-center mb-[80px] lg:mb-[150px] ">
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px]">
          <div className="sm:w-full h-full rounded-[16px] overflow-hidden">
            <video
              src={Video2}
              muted
              autoPlay
              loop
              playsInline
              className="w-full sm:h-full"
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
        <WorksGrid works={getWorksByIds(getWorksConfig("morgenstern"))} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Morgenstern;
