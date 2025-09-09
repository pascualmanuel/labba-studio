import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import BgFloraPlus from "../../Assets/work/Flora/flora-app.webp";
import BgFloraPlus2 from "../../Assets/work/Flora/flora-plusbg.webp";
import Image1 from "../../Assets/work/Flora/product-1.webp";
import Image2 from "../../Assets/work/Flora/product-2.webp";

import WorksGrid from "../../Components/WorksGrid";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";

const FloraPlus = () => {
  let isDesktop = window.innerWidth > 1024;
  useEffect(() => {
    document.title = "Flora Plus - Labba Studio";
  }, []);

  return (
    <>
      <Helmet>
        <title>Flora Plus — Labba Studio</title>
        <meta
          name="description"
          content="A powerful platform to manage experiences, streamline operations, and enhance journeys for providers and travelers."
        />
        <link rel="canonical" href="https://labba.studio/works/flora-plus" />
        <meta property="og:title" content="Flora Plus — Labba Studio" />
        <meta
          property="og:description"
          content="A powerful platform to manage experiences, streamline operations, and enhance journeys for providers and travelers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://labba.studio/works/flora-plus"
        />
      </Helmet>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center "
        style={{ backgroundImage: `url(${BgFloraPlus})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Flora Plus
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Flora Plus</h2>
        <p className="work-p">
          Cutting-edge SaaS designed for the tourism sector. We developed an
          intuitive and visually appealing product that helps businesses manage
          bookings, organize activities, and offer tailored experiences to
          travelers.
        </p>{" "}
        <p className="work-p mt-8">
          The interface was designed to be user-friendly for both tour operators
          and end customers, allowing for smooth navigation and efficient
          operations. By integrating technology and thoughtful design, Flora
          Plus enhances the connection between tourism operators and their
          audiences, making travel experiences more seamless and memorable.
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
            <Link to={"https://getfloraplus.com/"} target="_blank">
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
              <Link to={"https://getfloraplus.com/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{ backgroundImage: `url(${BgFloraPlus2})` }}
      >
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px] py-[72px]">
          <div className="w-full md:h-full overflow-hidden">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
              <img
                src={Image1}
                alt="Flora Plus"
                className="w-full lg:w-[48%] h-full rounded-[8px] "
              />
              <img
                src={Image2}
                alt="Flora Plus"
                className="w-full lg:w-[48%] h-full rounded-[8px] "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[500px] sm:max-w-[768px] center py-20 md:py-40 px-4 sm:px-6">
        <p className="work-p">
          The platform features a centralized dashboard for booking management,
          real-time availability updates, and secure payment integration. It
          also supports multi-language content and dynamic pricing options. A
          clear, friendly interface ensures providers can easily manage their
          offerings, while travelers enjoy a frictionless path from discovery to
          booking.
        </p>
      </div>

      <div className="works-section relative mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] flex flex-col mb-[150px]">
        <h2 className="text-[30px] sm:text-[45px] font-bold leading-tight mb-10">
          Other work
        </h2>
        <WorksGrid works={getWorksByIds(getWorksConfig("flora-plus"))} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default FloraPlus;
