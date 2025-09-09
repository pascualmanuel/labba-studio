import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ScoutingLabsHero from "../../Assets/work/Scouting/scounting-site.webp";

import Work2 from "../../Assets/work/work-inmobiliare.webp";
import Work3 from "../../Assets/work/work-ephimero.webp";

import Work6 from "../../Assets/work/work-manno.webp";
import BgVideoSL from "../../Assets/mask/services-organge.webp";
import Video1 from "../../Assets/work/Scouting/scouting_video.mp4";
import Video2 from "../../Assets/work/Scouting/scouting_video2.mp4";
import Video3 from "../../Assets/work/Morgenstern/Comunidad3.mp4";
import Footer from "../../Components/Footer";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";
import WorksGrid from "../../Components/WorksGrid";

const ScoutingLabs = () => {
  let isDesktop = window.innerWidth > 1024;
  useEffect(() => {
    document.title = "Scouting Labs - Labba Studio";
  }, []);

  return (
    <>
      <Helmet>
        <title>Scouting Labs — Labba Studio</title>
        <meta
          name="description"
          content="Connecting amateur sports passion with analysis technology to empower player development and visibility."
        />
        <link rel="canonical" href="https://labba.studio/works/scouting-labs" />
        <meta property="og:title" content="Scouting Labs — Labba Studio" />
        <meta
          property="og:description"
          content="Connecting amateur sports passion with analysis technology to empower player development and visibility."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://labba.studio/works/scouting-labs"
        />
      </Helmet>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-bottom "
        style={{ backgroundImage: `url(${ScoutingLabsHero})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Scouting Labs
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Scouting Labs</h2>
        <p className="work-p">
          We designed a dynamic, modern website for Scouting Labs, a platform
          that brings professional-grade technology to the amateur sports world.
        </p>{" "}
        <p className="work-p mt-8">
          The site highlights their innovative tools for player performance
          analysis, event coverage, and scholarship opportunities. With a bold,
          urban-inspired design, it connects deeply with Latin American sports
          culture while maintaining a professional and tech-forward aesthetic.
          The result is a platform that not only informs but inspires athletes
          to dream big and elevate their game.
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
            <Link to={"https://www.scoutinglabs.com/"} target="_blank">
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
              <p className=" text-lg sm:text-2xl underline">website</p>
            </Link>
          </div>

          <div className="flex justify-between mt-8 ssm:hidden">
            <div>
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
              <p className=" text-lg sm:text-2xl ">2024 </p>
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
        style={{ backgroundImage: `url(${BgVideoSL})` }}
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
          Built with a bold visual identity, the site integrates video
          highlights, player statistics, and real-time event updates. An
          optimized structure allows users to quickly find services, explore
          scholarship opportunities, or connect with the team. Subtle animations
          and interactive components keep the experience engaging without
          sacrificing speed or usability.
        </p>
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
              className="w-full sm:h-[103%]"
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

export default ScoutingLabs;
