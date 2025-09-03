import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MorgensternImg from "../../Assets/work/work-morgenstern.webp";

import Work2 from "../../Assets/work/work-inmobiliare.webp";
import Work3 from "../../Assets/work/work-ephimero.webp";

import Work6 from "../../Assets/work/work-manno.webp";
import BgDbs from "../../Assets/work/Dbs/dbs-site.webp";
import BgDbsVideo from "../../Assets/work/Dbs/bg-dbs-video.webp";
import Video1 from "../../Assets/work/Dbs/Dbs-video-1.mp4";
import Video2 from "../../Assets/work/Dbs/Dbs-video-2.mp4";
import Video3 from "../../Assets/work/Dbs/Dbs-video-3.mp4";

import Footer from "../../Components/Footer";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import WorksGrid from "../../Components/WorksGrid";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";

const Dbs = () => {
  let isDesktop = window.innerWidth > 1024;
  useEffect(() => {
    document.title = "DBS - Labba Studio";
  }, []);

  return (
    <>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center "
        style={{ backgroundImage: `url(${BgDbs})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Bodegas de Blas Serrano
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">
          Bodegas de Blas Serrano
        </h2>
        <p className="work-p">
          We designed and developed an elegant and functional ecommerce platform
          for Bodegas De Blas Serrano, a renowned Spanish winery. The website
          highlights the brand’s premium essence through a clean, sophisticated
          interface that enhances the wine shopping experience. It features
          intuitive navigation, high-quality product imagery, and a seamless
          checkout process, ensuring customers can easily explore and purchase
          from their exclusive collection.
        </p>{" "}
        <p className="work-p mt-8">
          Every detail was crafted to reflect the tradition, quality, and
          refinement of the brand.
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
            <Link to={"https://bodegasdeblasserrano.com/"} target="_blank">
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
              <Link to={"https://bodegasdeblasserrano.com/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{ backgroundImage: `url(${BgDbsVideo})` }}
      >
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px] py-[72px]">
          <div className="w-full md:h-full rounded-[8px] overflow-hidden">
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
      <div className="max-w-[500px] sm:max-w-[768px] center py-20 md:py-40 px-4 sm:px-6">
        <p className="work-p">
          The platform integrates advanced filtering options by wine type, grape
          variety, and vintage, making product discovery effortless. Secure
          payment gateways, multilingual support, and a responsive design ensure
          a seamless experience across all devices. The aesthetic reflects the
          winery’s heritage while embracing modern ecommerce trends, resulting
          in a perfect balance between tradition and innovation.
        </p>
      </div>

      <div className="w-[100vw] bg-cover bg-center mt-1  flex justify-center mb-[80px] lg:mb-[150px] ">
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px]">
          <div className="sm:w-full h-full rounded-[8px] overflow-hidden">
            <video
              src={Video2}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-[102%]"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-[100vw] bg-cover bg-center mt-1 sm:mt-10 flex justify-center mb-[80px] lg:mb-[150px] ">
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px]">
          <div className="sm:w-full h-full rounded-[8px] overflow-hidden">
            <video
              src={Video3}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-[102%]"
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
        <WorksGrid works={getWorksByIds(getWorksConfig("dbs"))} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dbs;
