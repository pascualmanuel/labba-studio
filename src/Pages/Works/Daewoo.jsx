import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Work1 from "../../Assets/work/work-morgenstern.webp";
import Work2 from "../../Assets/work/work-inmobiliare.webp";
import Work3 from "../../Assets/work/work-ephimero.webp";
import Work4 from "../../Assets/work/work-trebol.webp";
import Work5 from "../../Assets/work/work-daewoo.webp";
import Work6 from "../../Assets/work/work-manno.webp";
import BgDaewoo from "../../Assets/work/Daewoo/Daewoo-bg.jpg";
import DaewooMov from "../../Assets/work/Daewoo/daewoo-product-mov.mp4";

import Video1 from "../../Assets/work/Morgenstern/Home1.mp4";
import Video2 from "../../Assets/work/Morgenstern/About2.mp4";
import Video3 from "../../Assets/work/Morgenstern/Comunidad3.mp4";
import Footer from "../../Components/Footer";
import LabbaWhiteLogo from "../../Assets/labba/labba-iso-white.svg";
import { ReactSVG } from "react-svg";
import WorksGrid from "../../Components/WorksGrid";
import { getWorksByIds } from "../../data/worksData";
import { getWorksConfig } from "../../data/worksConfig";

const Daewoo = () => {
  let isDesktop = window.innerWidth > 1024;

  return (
    <>
      <Helmet>
        <title>Daewoo — Case Study | Labba Studio</title>
        <meta
          name="description"
          content="Explore and find your perfect home appliance through a clear and modern ecommerce experience."
        />
        <link rel="canonical" href="https://labba.studio/works/daewoo" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://labba.studio/works/daewoo"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/works/daewoo"
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta
          property="og:title"
          content="Daewoo — Case Study | Labba Studio"
        />
        <meta
          property="og:description"
          content="Explore and find your perfect home appliance through a clear and modern ecommerce experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/works/daewoo" />
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
            name: "Daewoo",
            url: "https://labba.studio/works/daewoo",
            image: "https://labba.studio/og/projects/daewoo-1200x630.jpg",
            description:
              "Explore and find your perfect home appliance through a clear and modern ecommerce experience.",
            author: { "@type": "Organization", name: "Labba Studio" },
            datePublished: "2022",
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
                name: "Daewoo",
                item: "https://labba.studio/works/daewoo",
              },
            ],
          })}
        </script>
      </Helmet>
      <div
        className="h-[590px] w-[100vw] sm:h-[680px] bg-cover bg-center "
        style={{ backgroundImage: `url(${Work5})` }}
        role="img"
        aria-label="Daewoo hero image"
      ></div>
      <h1 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Daewoo
      </h1>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h1 className="work-title mt-8 mb-12 md:hidden">Daewoo</h1>
        <p className="work-p">
          Daewoo Chile is a renowned global brand recognized for its innovative
          and reliable household appliances. With a strong presence in the
          Chilean market, Daewoo offers a wide range of products, from
          refrigerators to washing machines, designed to simplify daily life
          with cutting-edge technology and user-friendly features.
        </p>
        <p className="work-p mt-8">
          We designed a digital experience that reflects the brand’s commitment
          to quality, combining contemporary design with an intuitive and smooth
          browsing experience, allowing customers to explore, compare, and
          purchase Daewoo’s products with ease.
        </p>
        <div className="mt-8 ssm:flex ssm:flex-row ssm:justify-between">
          <div className="w-[] ">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">Services</p>
            <p className=" text-lg sm:text-2xl ">UX/UI Design </p>
            <p className=" text-lg sm:text-2xl ">Development</p>
            <p className=" text-lg sm:text-2xl ">SEO</p>
            <p className=" text-lg sm:text-2xl ">Growth</p>
          </div>
          <div className="hidden ssm:block">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
            <p className=" text-lg sm:text-2xl ">2022 </p>
          </div>
          <div className="hidden ssm:block">
            <Link to={"https://daewoostore.site/"} target="_blank">
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
              <Link to={"https://daewoostore.site/"} target="_blank">
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
          background: `linear-gradient(78.38deg, #201C33 -0.96%, #2B2944 107.05%)`,
        }}
      >
        <div className="w-full px-6 sm:px-[53px] lg:px-16 max-w-[1500px] py-[72px]">
          <div className="w-full md:h-full rounded-[8px] overflow-hidden">
            <video
              src={DaewooMov}
              muted
              autoPlay
              loop
              playsInline
              className="w-full md:h-full"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[500px] sm:max-w-[768px] center py-24 px-4 sm:px-6">
        <p className="work-p">
          Our approach was to create a website that showcases their extensive
          product range, emphasizing clarity and functionality, ensuring that
          visitors can easily navigate through the site and find detailed
          product information, promotions, and customer support.
        </p>
      </div>

      <div
        className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[690px] w-[100vw] bg-cover bg-center  flex justify-center "
        style={{ backgroundImage: `url(${BgDaewoo})` }}
      ></div>

      <div className="works-section relative mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] flex flex-col my-[100px] md:my-[150px]">
        <h2 className="text-[30px] sm:text-[45px] font-bold leading-tight mb-10">
          Other work
        </h2>
        <WorksGrid works={getWorksByIds(getWorksConfig("daewoo"))} />
      </div>
    </>
  );
};

export default Daewoo;
