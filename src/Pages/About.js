import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  let shadowOn = "ellipse-shadow";

  useEffect(() => {
    const ellipseShadow = document.getElementById(shadowOn);
    if (!ellipseShadow) return;

    const ellipseWidth = 1167;
    const ellipseHeight = 1167;
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    const initialX = window.innerWidth / 2 + 360 - halfWidth;
    const initialY = window.innerHeight / 2 - 50 - halfHeight;
    ellipseShadow.style.left = `${initialX}px`;
    ellipseShadow.style.top = `${initialY}px`;

    const handler = (e) => {
      const x = e.clientX - halfWidth;
      const y = e.clientY - halfHeight;
      ellipseShadow.style.left = `${x}px`;
      ellipseShadow.style.top = `${y}px`;
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us — Labba Studio</title>
        <meta
          name="description"
          content="We are Labba Studio — a UX/UI and product design team building memorable digital experiences."
        />
        <link rel="canonical" href="https://labba.studio/about" />
        <link rel="alternate" hrefLang="en" href="https://labba.studio/about" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://labba.studio/about"
        />
        <meta property="og:site_name" content="Labba Studio" />
        <meta property="og:site_name" content="Labba Studio" />
        <meta property="og:title" content="About Us — Labba Studio" />
        <meta
          property="og:description"
          content="We are Labba Studio — a UX/UI and product design team building memorable digital experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://labba.studio/about" />
        <meta
          property="og:image"
          content="https://labba.studio/og/about-1200x630.jpg"
        />
      </Helmet>
      <div className="md:h-[1380px] h-[1200px]">
        {" "}
        <div id={shadowOn}></div>
        <div className="about-page flex items-center justify-center md:h-[780px] h-[500px]">
          <h1 className="md:text-[120px] text-[54px] md:leading-[108%] leading-[103%] md:tracking-[-0.03em] tracking-[-0.02em] text-[#FFFFFF] font-bold text-center md:text-left">
            People who <br /> think different, <br /> make different
          </h1>
        </div>
        <div
          className="backdrop-blur-[4px] md:backdrop-blur-[7px] md:h-[1380px] h-[1200px]"
          style={{
            width: "100vw",
            background: "rgba(255, 255, 255, 0.01)",

            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "0",
          }}
        ></div>
        <div className="flex items-center justify-center top-[400px] md:top-[670px] absolute w-screen z-10 px-6 ">
          <p className="text-[#E2E2E2] text-[16px] leading-[22px] md:text-[18px] md:leading-[22px] md:max-w-[575px]">
            Dear founder,
            <br />
            <br />
            At Labba, we're designers, thinkers, and makers—shaped by years of
            experience working with companies big and small, across industries
            and time zones. We started Labba because we love building brands and
            digital products that actually work, that matter, and that stick.
            <br />
            <br />
            We know what it's like to launch fast, iterate faster, and still
            keep the quality high. We've worked with early-stage startups
            chasing product-market fit, and with established companies needing
            clarity, design precision, and reliable execution. No matter the
            size or stage, we treat every project like it's our own—because
            that's how we build the best stuff.
            <br />
            <br />
            Our team is made up of creatives and strategists from all over the
            world. We've helped shape products and experiences in industries
            like fintech, SaaS, health, retail, AI, and more. We adapt like
            lava—moving with purpose, finding the best path forward, and never
            losing momentum.
            <br />
            <br />
            After six years and 300+ projects later, we're just getting started.
            If you're building something ambitious, we'd love to be part of it.
            <br />
            <br />
            Let's make it happen,
            <br />
            <br />
            The Labba Team
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
