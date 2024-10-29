import React, { useState, useEffect, useRef } from "react"; // Asegúrate de importar el CSS
import { ReactSVG } from "react-svg";
import { Player } from "@lottiefiles/react-lottie-player";
import dotAnimation from "../Assets/icons/dot-animation.json"; // Make
import Calendar from "../Assets/icons/calendar.svg";
import MagneticButton from "./MagenticButton";
import NewWorks from "../Components/NewWork";
import StaggeredText from "../Hooks/StaggeredText";
const HomeHero = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [isStickyTwo, setIsStickyTwo] = useState(true);
  const [showDelayedElement, setShowDelayedElement] = useState(false);
  const [showRevealText, setShowRevealText] = useState(false);

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
    if (window.location.hash !== "#home") {
      const delay = setTimeout(() => {
        setShowDelayedElement(true);
        setShowRevealText(true);

        const hideDelay = setTimeout(() => {
          setShowRevealText(false);
        }, 2600); // Ocultar después de 1500 ms

        return () => clearTimeout(hideDelay);
      }, 4400); // Mostrar después de 4400 ms

      return () => clearTimeout(delay);
    } else {
      const delay = setTimeout(() => {
        setShowDelayedElement(true);
        setShowRevealText(true);

        const hideDelay = setTimeout(() => {
          setShowRevealText(false);
        }, 1600); // Ocultar después de 1500 ms

        return () => clearTimeout(hideDelay);
      }, 200); // Mostrar después de 4400 ms

      return () => clearTimeout(delay);
    }
  }, []);

  let textLines =
    window.innerWidth < 380
      ? ["Empowering", "startups", "through design", "& technology."]
      : window.innerWidth < 450
      ? ["Empowering", "startups through", "design &", "technology."]
      : ["Empowering startups", "through design &", "technology."];

  return (
    <>
      <div
        className="h-[] sm:h-[100vh] max-w-[1500px] sm:px-[53px] lg:px-[150px] center"
        style={{ minHeight: "800px", maxHeight: "920px" }}
      >
        {showDelayedElement && (
          <>
            <span ref={spanRef} className="fixed top-28 sm:top-32"></span>

            <div className={` margin-hero ${isSticky ? "fixed" : "hidden"} `}>
              <div className={showRevealText ? "reveal-text-span" : ""}>
                <span className={showRevealText ? "reveal-span" : ""}>
                  <div className="flex font-normal leading-4 text-sm mb-6 ml-5 sm:ml-0">
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
                  </div>
                </span>
              </div>

              <div className={`mx-auto `}>
                <div className=" lg:w-[900px] xl:w-[1024px] px-6 sm:px-0">
                  <h2
                    className=" text-[45px] sm:text-[60px] ms:text-[65px] lm:text-[80px]
               lg:text-[80px] xl:text-[90px] font-medium leading-[109%] sm:leading-[99%] tracking-tight"
                  >
                    <div className="hero-container">
                      {textLines.map((line, index) => (
                        <StaggeredText key={index} text={line} />
                      ))}
                    </div>
                  </h2>
                  <span ref={h3Ref}></span>
                  <h3
                    className={` mt-10 font-light b2-desk mr-[50px] ${
                      isStickyTwo ? "" : "hidden"
                    }`}
                  >
                    <span className={showRevealText ? "reveal-text" : ""}>
                      <span>
                        Full stack digital studio focused on generate impactful
                        online presence.
                      </span>
                    </span>
                  </h3>
                  <div
                    className={` flex mt-10 w-[170px] ${
                      isStickyTwo ? "" : "hidden"
                    }`}
                  >
                    <span className={showRevealText ? "reveal-text" : ""}>
                      <a
                        href="https://cal.com/labbastudio/discovery-call"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <MagneticButton
                            text={"Schedule a call"}
                            // link="https://cal.com/labbastudio/discovery-call"
                          />
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="" ref={blackDivRef}></div>
    </>
  );
};

export default HomeHero;
