import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ephiHero from "../../Assets/work/Ephimero/hero_ephi.jpg";
import ephiHeroMob from "../../Assets/work/Ephimero/hero-principal-mob.webp";

import Inmo2 from "../../Assets/work/Inmobiliare/Inmo2.png";
import Work1 from "../../Assets/work/work-morgenstern.webp";
import Morgenstern from "../../Assets/work/work-morgenstern.webp";
import Work2 from "../../Assets/work/work-inmobiliare.webp";

import EphiMob1 from "../../Assets/work/Ephimero/ephimero-mob-1.png";
import EphiMob2 from "../../Assets/work/Ephimero/ephimero-mob-2.png";
import EphiMob3 from "../../Assets/work/Ephimero/ephimero-mob-3.png";
import EphiMob4 from "../../Assets/work/Ephimero/ephimero-mob-4.png";
import EphiMob5 from "../../Assets/work/Ephimero/ephimero-mob-5.png";
import EphiMob6 from "../../Assets/work/Ephimero/ephimero-mob-6.png";
import EphiMob7 from "../../Assets/work/Ephimero/ephimero-mob-7.png";
import EphiMob8 from "../../Assets/work/Ephimero/ephimero-mob-8.png";
import EphiGroup from "../../Assets/work/Ephimero/ephi-desk-group-2.webp";

import Work6 from "../../Assets/work/work-manno.webp";

import LabbaLogo from "../../Assets/labba/labba-iso.svg";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import Footer from "../../Components/Footer";
import WorksGrid from "../../Components/WorksGrid";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";

const Ephimero = () => {
  let isDesktop = window.innerWidth > 1024;

  let ephiBg = ephiHeroMob;

  if (isDesktop) {
    ephiBg = ephiHero;
  }

  return (
    <>
      <Helmet>
        <title>Ephimero — Case Study | Labba Studio</title>
        <meta
          name="description"
          content="Candles ecommerce with ethics & aesthetics."
        />
        <link rel="canonical" href="https://labba.studio/works/ephimero" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://labba.studio/works/ephimero"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/works/ephimero"
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta
          property="og:title"
          content="Ephimero — Case Study | Labba Studio"
        />
        <meta
          property="og:description"
          content="Candles ecommerce with ethics & aesthetics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/works/ephimero" />
        <meta
          property="og:image"
          content="https://labba.studio/og/works-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://labba.studio/og/works-og.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Ephimero",
            url: "https://labba.studio/works/ephimero",
            image: "https://labba.studio/og/works-og.jpg",
            description: "Candles ecommerce with ethics & aesthetics.",
            author: { "@type": "Organization", name: "Labba Studio" },
            datePublished: "2023",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://labba.studio/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Work",
                item: "https://labba.studio/work",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Ephimero",
                item: "https://labba.studio/works/ephimero",
              },
            ],
          })}
        </script>
      </Helmet>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center "
        style={{ backgroundImage: `url(${ephiBg})` }}
        role="img"
        aria-label="Ephimero hero image"
      ></div>
      <h1 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Ephimero
      </h1>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h1 className="work-title mt-8 mb-12 md:hidden">Ephimero</h1>
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
        className="h-[280px] md:h-[800px] w-[100vw] bg-cover bg-center flex justify-center  mt-10"
        style={{
          background: `#DBD9C5`,
        }}
      >
        <div className="w-full max-w-[1500px] px-6 sm:px-[53px] lg:px-16  flex items-center">
          <div className="w-full  overflow-hidden flex justify-between">
            {[EphiMob4, EphiMob3, EphiMob2, EphiMob1].map((src, i) => (
              <div key={i} className="w-[22%] rounded-lg overflow-hidden ">
                <img
                  src={src}
                  className="w-full h-auto object-cover rounded-lg object-top "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div
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
      </div> */}
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
        className="h-[280px] md:h-[800px] w-[100vw] bg-cover bg-center flex justify-center  mt-10"
        style={{
          background: `#DBD9C5`,
        }}
      >
        <div className="w-full max-w-[1500px] px-6 sm:px-[53px] lg:px-16  flex items-center">
          <div className="w-full  overflow-hidden flex justify-between">
            {[EphiMob6, EphiMob5, EphiMob8, EphiMob7].map((src, i) => (
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
        <WorksGrid works={getWorksByIds(getWorksConfig("ephimero"))} />
      </div>
    </>
  );
};

export default Ephimero;
