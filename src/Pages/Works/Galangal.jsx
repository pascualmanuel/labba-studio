import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MorgensternImg from "../../Assets/work/work-morgenstern.webp";

import Work2 from "../../Assets/work/work-inmobiliare.webp";
import Work3 from "../../Assets/work/work-ephimero.webp";

import Work6 from "../../Assets/work/work-manno.webp";
import BgGalangal from "../../Assets/work/Galangal/galangal-website.webp";
import BgGalangal2 from "../../Assets/work/Galangal/bg-orange2.webp";
import Video1 from "../../Assets/work/Galangal/galangal-v-1.mp4";
import Video2 from "../../Assets/work/Galangal/galangal-v-2.mp4";
import Video3 from "../../Assets/work/Morgenstern/Comunidad3.mp4";
import Footer from "../../Components/Footer";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import WorksGrid from "../../Components/WorksGrid";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";

const Morgenstern = () => {
  let isDesktop = window.innerWidth > 1024;

  return (
    <>
      <Helmet>
        <title>Galangal Travel — Case Study | Labba Studio</title>
        <meta
          name="description"
          content="Luxury travel experiences rooted in local culture, crafted with elegance, authenticity, and exceptional service."
        />
        <link rel="canonical" href="https://labba.studio/works/galangal" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://labba.studio/works/galangal"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/works/galangal"
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta
          property="og:title"
          content="Galangal Travel — Case Study | Labba Studio"
        />
        <meta
          property="og:description"
          content="Luxury travel experiences rooted in local culture, crafted with elegance, authenticity, and exceptional service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/works/galangal" />
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
            name: "Galangal Travel",
            url: "https://labba.studio/works/galangal",
            image: "https://labba.studio/og/works-og.jpg",
            description:
              "Luxury travel experiences rooted in local culture, crafted with elegance, authenticity, and exceptional service.",
            author: { "@type": "Organization", name: "Labba Studio" },
            datePublished: "2025",
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
                name: "Galangal Travel",
                item: "https://labba.studio/works/galangal",
              },
            ],
          })}
        </script>
      </Helmet>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center "
        style={{ backgroundImage: `url(${BgGalangal})` }}
        role="img"
        aria-label="Galangal Travel hero image"
      ></div>
      <h1 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Galangal
      </h1>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h1 className="work-title mt-8 mb-12 md:hidden">Galangal</h1>
        <p className="work-p">
          We crafted a refined, immersive website for Galangal, a luxury travel
          company deeply connected to local culture and nature. The design
          focuses on storytelling through high-impact visuals, elegant layouts,
          and intuitive navigation, allowing visitors to explore tailor-made
          journeys that blend exclusivity with authentic cultural experiences.
        </p>{" "}
        <p className="work-p mt-8">
          Every detail, color palette, typography, and photography, was curated
          to evoke a sense of sophistication and discovery. The platform not
          only inspires travelers but also communicates Galangal's expertise,
          exceptional service, and unique understanding of each destination.
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
            <Link to={"https://galangal.travel/"} target="_blank">
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
              <Link to={"https://galangal.travel/"} target="_blank">
                <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
                <p className=" text-lg sm:text-2xl underline">website</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{ backgroundImage: `url(${BgGalangal2})` }}
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
          The website incorporates immersive destination pages with cinematic
          imagery, interactive maps, and curated itinerary examples. Smooth
          scrolling effects and subtle transitions create a sense of luxury and
          flow, while the CMS allows Galangal to easily update content and add
          new travel experiences. The design adapts flawlessly to all devices,
          ensuring the brand's elegance is preserved everywhere.
        </p>
      </div>

      <div className="w-[100vw] bg-cover bg-center mt-1 sm:mt-10 flex justify-center mb-[80px] lg:mb-[150px] ">
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

      <div className="works-section relative mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] flex flex-col mb-[150px]">
        <h2 className="text-[30px] sm:text-[45px] font-bold leading-tight mb-10">
          Other work
        </h2>
        <WorksGrid works={getWorksByIds(getWorksConfig("galangal"))} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Morgenstern;
