import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WorkMobile() {
  const secondSectionRef = useRef(null);

  useEffect(() => {
    const secondSection = secondSectionRef.current;

    gsap.to(secondSection, {
      scrollTrigger: {
        trigger: secondSection,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <>
      <div
        className="second-section parallax mt-[-180px]"
        ref={secondSectionRef}
      >
        <div className="work work-mob h-[200vh] sm:h-[300px] mb-[-5px] sm:mb-[0px]"></div>
      </div>

      <div className="mob-project-1">mob-project-1</div>
      <div className="mob-project-2"></div>
      <div className="mob-project-3"></div>
      <div className="mob-project-4"></div>
    </>
  );
}

export default WorkMobile;
