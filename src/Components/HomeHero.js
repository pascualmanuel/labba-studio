import React, { useState, useEffect, useRef } from "react"; // Asegúrate de importar el CSS
import { ReactSVG } from "react-svg";
import { Player } from "@lottiefiles/react-lottie-player";
import dotAnimation from "../Assets/icons/dot-animation.json"; // Make
import Calendar from "../Assets/icons/calendar.svg";
import MagneticButton from "./MagenticButton";
import NewWorks from "../Components/NewWork";
// import StaggeredText from "../Hooks/StaggeredText";
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

    // Llama a handleScroll al montar el componente
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky, isStickyTwo]);

  // useEffect(() => {
  //   if (window.location.hash !== "#home") {
  //     const delay = setTimeout(() => {
  //       setShowDelayedElement(true);
  //       setShowRevealText(true);

  //       const hideDelay = setTimeout(() => {
  //         setShowRevealText(false);
  //       }, 2600); // Ocultar después de 1500 ms

  //       return () => clearTimeout(hideDelay);
  //     }, 4400); // Mostrar después de 4400 ms

  //     return () => clearTimeout(delay);
  //   } else {
  //     const delay = setTimeout(() => {
  //       setShowDelayedElement(true);
  //       setShowRevealText(true);

  //       const hideDelay = setTimeout(() => {
  //         setShowRevealText(false);
  //       }, 1600); // Ocultar después de 1500 ms

  //       return () => clearTimeout(hideDelay);
  //     }, 200); // Mostrar después de 4400 ms

  //     return () => clearTimeout(delay);
  //   }
  // }, []);

  return (
    <>
      <div className=" max-w-[1500px] sm:px-[53px] lg:px-16  pt-[140px]">
        <div className={`mx-auto `}>
          <div className="px-6 sm:px-0">
            <h2
              className="text-[45px] sm:text-[60px] ms:text-[65px] lm:text-[120px]
                        lg:text-[85px] xl:text-[100px] xxl:text-[120px] font-bold leading-[109%] sm:leading-[99%] tracking-tight"
            >
              Fluid minds, <br />
              solid digital experiences.
            </h2>
            <span ref={h3Ref}></span>
            <h3
              className={` mt-10 font-light mr-[50px] text-[24px] leading-[32px] text-[#B5B5B5] }`}
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
