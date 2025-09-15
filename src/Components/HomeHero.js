import React, { useState, useEffect, useRef } from "react"; // Asegúrate de importar el CSS
import { ReactSVG } from "react-svg";
import { Player } from "@lottiefiles/react-lottie-player";
import dotAnimation from "../Assets/icons/dot-animation.json"; // Make
import Calendar from "../Assets/icons/calendar.svg";
import MagneticButton from "./MagenticButton";

// import StaggeredText from "../Hooks/StaggeredText";
const HomeHero = () => {
  // margin: 0 auto;
  return (
    <>
      <div className=" max-w-[1500px] sm:px-[53px] lg:px-16 pt-[120px] md:pt-[140px] mx-auto">
        <div className={`mx-auto `}>
          <div className="px-6 sm:px-0">
            <h2
              className="text-[54px] sm:text-[60px] ms:text-[65px] lm:text-[120px]
                        lg:text-[85px] xl:text-[100px] xxl:text-[120px] font-bold leading-[109%] sm:leading-[99%] tracking-tight"
            >
              Fluid minds, <br />
              solid digital experiences.
            </h2>

            <h3
              className={` mt-10 font-light  text-[18px] leading-[21px] sm:text-[24px] sm:leading-[32px] text-[#B5B5B5] }`}
            >
              Labba is a design and dev studio that partners with startups and
              enterprises worldwide.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
