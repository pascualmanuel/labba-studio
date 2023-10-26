import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Asset from "../Assets/plus.svg";
import AssetTwo from "../Assets/mnius.svg";

function Services() {
  const [expDesign, setExpanded] = useState(false);

  const toggleDesign = () => {
    setExpanded(!expDesign);
  };

  const [expBuild, setExpBuild] = useState(false);

  const toggleBuild = () => {
    setExpBuild(!expBuild);
  };

  useEffect(() => {
    const plusCursorParagraphs = document.querySelectorAll(".plusCursorDos");

    const handleMouseEnter = () => {
      // Change cursor behavior when entering the plusCursor
      // For example, you can change the cursor style or add animations here

      // Change the cursor's background based on the state
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.backgroundImage = `url(${expBuild ? AssetTwo : Asset})`;
        cursor.style.backgroundSize = "70%";
        cursor.style.backgroundRepeat = "no-repeat";
        cursor.style.backgroundPosition = "center";
      }
    };

    const handleMouseLeave = () => {
      // Restore default cursor behavior when leaving the plusCursor

      // Reset the cursor's background image to none
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.backgroundImage = "none";
      }
    };

    plusCursorParagraphs.forEach((paragraph) => {
      paragraph.addEventListener("mouseenter", handleMouseEnter);
      paragraph.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      plusCursorParagraphs.forEach((paragraph) => {
        paragraph.removeEventListener("mouseenter", handleMouseEnter);
        paragraph.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [expBuild]);
  useEffect(() => {
    const plusCursorParagraphs = document.querySelectorAll(".plusCursor");

    const handleMouseEnter = () => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.backgroundImage = `url(${expDesign ? AssetTwo : Asset})`;
        cursor.style.backgroundSize = "70%";
        cursor.style.backgroundRepeat = "no-repeat";
        cursor.style.backgroundPosition = "center";
      }
    };

    const handleMouseLeave = () => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.backgroundImage = "none";
      }
    };

    plusCursorParagraphs.forEach((paragraph) => {
      paragraph.addEventListener("mouseenter", handleMouseEnter);
      paragraph.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      plusCursorParagraphs.forEach((paragraph) => {
        paragraph.removeEventListener("mouseenter", handleMouseEnter);
        paragraph.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [expDesign, expBuild]);

  return (
    <>
      <div className="flex sm:flex-row mx-11 flex-col mt-24 sm:mt-72 sm:ml-36  ">
        <div className="sm:w-1/2  w-full ">
          <p className="l-desk">SERVICES</p>
          <h3 className="b1-desk">
            We unleash our creativity, embrace curiosity, connect ideas and push
            the limits of design to reach new horizons.
          </h3>
        </div>
        <div className="sm:w-1/2 w-full flex flex-col sm:pl-72 md:pl-24 xl:pl-72 justify-center ">
          <div
            className={`sm:w-1/2 w-full  flex flex-col sm:pl-72 justify-center plusCursor services  ${
              expDesign ? "expDesign" : ""
            }`}
            onClick={toggleDesign}
          >
            <p className="sp1-desk flex mt-12 sm:mt-0 mb-2 sm:mb-2 sm:mb-2 plusCursor ">
              DESIGN <span className="small-numb">5</span>
            </p>
            {expDesign ? (
              <>
                <ul className="list-disc ml-5 plusCursor sm:pb-0 pb-2">
                  <li>UX Research</li>
                  <li>UX Design</li>
                  <li>UI Design</li>
                  <li>Brand Design</li>
                  <li>Graphic Design</li>
                </ul>
              </>
            ) : null}
          </div>

          <div
            className={`sm:w-1/2 flex flex-col pl-72 justify-center plusCursorDos services  ${
              expBuild ? "expBuild" : ""
            }`}
            onClick={toggleBuild}
          >
            <p className="sp1-desk flex mb-2 plusCursorDos ">
              BUILD <span className="small-numb">4</span>
            </p>
            {expBuild ? (
              <>
                <ul className="list-disc ml-5 plusCursorDos ">
                  <li className="">Full-stack development</li>
                  <li>Responsive web development</li>
                  <li>No-code development</li>
                  <li>App development</li>
                </ul>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
