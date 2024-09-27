import React, { useState, useEffect, useRef } from "react"; // Asegúrate de importar el CSS
import { ReactSVG } from "react-svg";
import { Player } from "@lottiefiles/react-lottie-player";
import dotAnimation from "../Assets/icons/dot-animation.json"; // Make
import Calendar from "../Assets/icons/calendar.svg";
import MagneticButton from "./MagenticButton";
import NewWorks from "../Components/NewWork";

const HomeHero = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [isStickyTwo, setIsStickyTwo] = useState(true);
  const [showDelayedElement, setShowDelayedElement] = useState(false);

  const blackDivRef = useRef(null);
  const h3Ref = useRef(null);
  const spanRef = useRef(null);

  const checkOverlap = (element1, element2) => {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return rect1.bottom >= rect2.top;
  };

  useEffect(() => {
    const handleScroll = () => {
      const blackDiv = blackDivRef.current;
      const h3Element = h3Ref.current;
      const spanElement = spanRef.current;

      if (blackDiv && h3Element && spanElement) {
        const overlapWithSpan = checkOverlap(blackDiv, spanElement);
        const overlapWithH3 = checkOverlap(blackDiv, h3Element);

        if (isSticky !== overlapWithSpan) {
          setIsSticky(overlapWithSpan);
        }
        if (isStickyTwo !== overlapWithH3) {
          setIsStickyTwo(overlapWithH3);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky, isStickyTwo]);

  useEffect(() => {
    const delay = setTimeout(() => setShowDelayedElement(true), 3400);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div
        className="h-[] sm:h-[100vh] max-w-[1500px] sm:px-[53px] lg:px-[150px] center"
        style={{ minHeight: "720px" }}
      >
        <span ref={spanRef} className="fixed top-28 sm:top-32">
          {" "}
        </span>
        <div className={` margin-hero ${isSticky ? "fixed" : "hidden"} `}>
          <span className=" flex font-normal leading-4 text-sm mb-6 ml-5 sm:ml-0">
            <Player
              autoplay
              loop
              src={dotAnimation}
              style={{
                height: "16px",
                width: "16px",
                marginRight: "7px",
                marginLeft: "5px",
              }}
            />
            Available for new projects
          </span>

          <div className={`mx-auto `}>
            <div className="reveal-text lg:w-[900px] xl:w-[1024px] px-6 sm:px-0">
              <h2
                className=" text-[45px] sm:text-[60px] ms:text-[65px] lm:text-[80px]
               lg:text-[80px] xl:text-[90px] font-medium leading-[109%] sm:leading-[99%] tracking-tight"
              >
                Empowering startups through design & technology.
              </h2>
              <span ref={h3Ref}></span>
              <h3
                className={`mt-10 font-light b2-desk mr-[50px] ${
                  isStickyTwo ? "" : "hidden"
                }`}
              >
                Full stack digital studio focused on generate impactful online
                presence.
              </h3>
              <div className={`flex mt-10 ${isStickyTwo ? "" : "hidden"}`}>
                <a
                  href="https://cal.com/labbastudio/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagneticButton
                    text={
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={Calendar}
                          alt="Calendar icon"
                          style={{ marginRight: "8px" }}
                        />
                        Schedule a call
                      </span>
                    }
                    // link="https://cal.com/labbastudio/discovery-call"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" ref={blackDivRef}></div>
    </>
  );
};

export default HomeHero;
