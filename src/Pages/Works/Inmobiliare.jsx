import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import WorkInmBg from "../../Assets/work/Inmobiliare/inmobiliare_bg.webp";
import Inmo2 from "../../Assets/work/Inmobiliare/Inmo2.png";
import InmoMob1 from "../../Assets/work/Inmobiliare/Inmo-Mob1.jpg";
import InmoMob2 from "../../Assets/work/Inmobiliare/Inmo-Mob2.webp";
import InmoMob3 from "../../Assets/work/Inmobiliare/Inmo-Mob3.jpg";
import InmoMob4 from "../../Assets/work/Inmobiliare/Inmo-Mob4.webp";

import Work2 from "../../Assets/work/work-inmobiliare.webp";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";
import WorksGrid from "../../Components/WorksGrid";

const Inmobiliare = () => {
  let isDesktop = window.innerWidth > 1024;

  let inmoBg = Work2;
  if (window.innerWidth > 900) {
    inmoBg = WorkInmBg;
  }

  return (
    <>
      <Helmet>
        <title>Inmobiliare — Case Study | Labba Studio</title>
        <meta
          name="description"
          content="Redesigning the experience of the largest real estate news portal in Mexico."
        />
        <link rel="canonical" href="https://labba.studio/works/inmobiliare" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://labba.studio/works/inmobiliare"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/works/inmobiliare"
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta
          property="og:title"
          content="Inmobiliare — Case Study | Labba Studio"
        />
        <meta
          property="og:description"
          content="Redesigning the experience of the largest real estate news portal in Mexico."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://labba.studio/works/inmobiliare"
        />
        <meta
          property="og:image"
          content="https://labba.studio/og/works-cover.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://labba.studio/og/works-cover.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Inmobiliare",
            url: "https://labba.studio/works/inmobiliare",
            image: "https://labba.studio/og/works-cover.jpg",
            description:
              "Redesigning the experience of the largest real estate news portal in Mexico.",
            author: { "@type": "Organization", name: "Labba Studio" },
            datePublished: "2024",
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
                name: "Inmobiliare",
                item: "https://labba.studio/works/inmobiliare",
              },
            ],
          })}
        </script>
      </Helmet>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center "
        style={{ backgroundImage: `url(${inmoBg})` }}
        role="img"
        aria-label="Inmobiliare hero image"
      ></div>
      <h1 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Inmobiliare
      </h1>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h1 className="work-title mt-8 mb-12 md:hidden">Inmobiliare</h1>
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
        className=" w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{
          background: `linear-gradient(140.77deg, #021F00 0%, #2E5B21 99.43%)`,
        }}
      >
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px] py-16">
          <div className="w-full md:h-full rounded-[16px] overflow-hidden">
            <img
              src={Inmo2}
              className="w-full md:h-full max-h-[750px] "
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="h-[280px] md:h-[800px] w-[100vw] bg-cover bg-center flex justify-center  mt-10"
        style={{
          background: `linear-gradient(140.77deg, #021F00 0%, #2E5B21 99.43%)`,
        }}
      >
        <div className="w-full max-w-[1500px] px-6 sm:px-[53px] lg:px-16  flex items-center">
          <div className="w-full  overflow-hidden flex justify-between">
            {[InmoMob1, InmoMob2, InmoMob3, InmoMob4].map((src, i) => (
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
        <WorksGrid works={getWorksByIds(getWorksConfig("inmobiliare"))} />
      </div>
    </>
  );
};

export default Inmobiliare;
