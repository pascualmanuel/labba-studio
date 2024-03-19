import React, { useEffect, useState, useRef } from "react";
import Icon1 from "../Assets/icons/design-icon.svg";
// import Icon2 from "../Assets/icons/code-icon.svg";
import Icon3 from "../Assets/icons/headset-icon.svg";
import { ReactSVG } from "react-svg";
function Services() {
  const [strokeDesign, setStrokeDesign] = useState("black");
  const [strokeCode, setstrokeCode] = useState("black");
  const [strokeSupport, setstrokeSupport] = useState("black");
  const [expDesign, setExpDesign] = useState(false);
  const [expCode, setExpCode] = useState(false);
  const [expSupport, setExpSupport] = useState(false);

  const toggleDesign = () => {
    setExpDesign(!expDesign);
    setStrokeDesign(expDesign ? "black" : "white");
  };

  const toggleCode = () => {
    setExpCode(!expCode);
    setstrokeCode(expCode ? "black" : "white");
  };

  const toggleSupport = () => {
    setExpSupport(!expSupport);
    setstrokeSupport(expSupport ? "black" : "white");
  };

  return (
    <>
      <div className="flex sm:flex-row mx-11 flex-col mt-24 sm:mt-72 sm:ml-36 ">
        <div className="sm:w-1/2 md:w-[580px]  w-full ">
          <p className="l-desk">SERVICES</p>
          <h3 className="b1-desk">
            We unleash our creativity, embrace curiosity, connect ideas and push
            the limits of design to reach new horizons.
          </h3>
        </div>
        <div className="sm:w-1/2 w-full flex flex-col sm:pl-72 md:pl-24 xl:pl-[15rem] items-center mt-[60px] sm:mt-0 ">
          <div
            className={`sm:w-1/2 w-full flex flex-col sm:pl-72 justify-center plusCursor services service-box ${
              expDesign ? "expDesign" : ""
            }`}
            onClick={toggleDesign}
          >
            <p
              className="sp1-desk  flex flex-col pt-[20px] px-[24px]  plusCursor relative"
              id="pasando2"
            >
              <span id="pasando2" className="small-numb  mb-[15px]">
                01
              </span>
              DESIGN
              <span class="absolute right-[24px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 4.875H3.375C2.96079 4.875 2.625 5.21079 2.625 5.625V12.375C2.625 12.7892 2.96079 13.125 3.375 13.125H6.75V14.25H3.375C2.33947 14.25 1.5 13.4105 1.5 12.375V5.625C1.5 4.58947 2.33947 3.75 3.375 3.75H14.625C15.6605 3.75 16.5 4.58947 16.5 5.625V12.375C16.5 13.2887 15.8464 14.0498 14.9813 14.2162C14.925 13.8882 14.7449 13.5853 14.4637 13.3791L14.2096 13.125H14.625C15.0392 13.125 15.375 12.7892 15.375 12.375V5.625C15.375 5.21079 15.0392 4.875 14.625 4.875ZM8.46023 8.41477C8.29935 8.2539 8.0574 8.20577 7.84725 8.29283C7.63703 8.3799 7.5 8.58502 7.5 8.8125V16.6875C7.5 16.9339 7.66035 17.1516 7.89563 17.2247C8.13098 17.2978 8.38643 17.2092 8.526 17.0062L10.3761 14.3152L13.5716 14.9879C13.8152 15.0392 14.0635 14.9243 14.1821 14.7055C14.3006 14.4865 14.2613 14.2158 14.0852 14.0398L8.46023 8.41477ZM8.625 14.8765V10.1705L11.9518 13.4973L10.2409 13.1371C10.0187 13.0903 9.79012 13.1817 9.6615 13.3688L8.625 14.8765Z"
                    fill={strokeDesign}
                  />
                </svg>
              </span>
            </p>
            {expDesign ? (
              <>
                <p
                  id="pasando2"
                  className="small-numb  pl-[24px] pr-[24px] pt-[16px] h-[100%] "
                >
                  Creating visually stunning web layouts, apps and brands.
                </p>
              </>
            ) : null}
          </div>

          <div
            className={`sm:w-1/2 flex flex-col pl-72 justify-center plusCursorDos services service-box ${
              expCode ? "expCode" : ""
            }`}
            onClick={toggleCode}
          >
            <p
              className="sp1-desk  flex flex-col pt-[20px] px-[24px] plusCursorDos relative"
              id="pasando2"
            >
              <span id="pasando2" className="small-numb  mb-[15px]">
                02
              </span>
              CODE
              <span class="absolute right-[24px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_710_18)">
                    <path
                      d="M0.197703 9.57285L4.02271 5.74782C4.28631 5.48421 4.7137 5.48421 4.9773 5.74782C5.21694 5.98745 5.23872 6.36245 5.04266 6.6267L4.9773 6.70241L1.6296 10.0501L4.9773 13.3979C5.2409 13.6614 5.2409 14.0888 4.9773 14.3524C4.73766 14.5921 4.36266 14.6138 4.09841 14.4177L4.02271 14.3524L0.197703 10.5274C-0.0419397 10.2877 -0.0637198 9.91279 0.132345 9.64854L0.197703 9.57285ZM13.0227 5.74782C13.2623 5.50817 13.6373 5.48639 13.9016 5.68246L13.9773 5.74782L17.8023 9.57285C18.042 9.81244 18.0637 10.1875 17.8676 10.4517L17.8023 10.5274L13.9773 14.3524C13.7137 14.616 13.2863 14.616 13.0227 14.3524C12.7831 14.1128 12.7613 13.7378 12.9574 13.4735L13.0227 13.3979L16.3704 10.0501L13.0227 6.70241C12.7591 6.4388 12.7591 6.01142 13.0227 5.74782Z"
                      fill={strokeCode}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_710_18">
                      <rect width="18" height="18" fill={strokeCode} />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </p>
            {expCode ? (
              <>
                <p
                  id="pasando2"
                  className="small-numb  pl-[24px] pr-[24px] pt-[16px] h-[100%]"
                >
                  Developing reliable, maintainable, and scalable tech solutions
                  with clean code.
                </p>
              </>
            ) : null}
          </div>
          <div
            className={`sm:w-1/2 flex flex-col pl-72 justify-center plusCursorDos services service-box ${
              expSupport ? "expSupport" : ""
            }`}
            onClick={toggleSupport}
          >
            <p
              className="sp1-desk  flex flex-col pt-[20px] px-[24px]  plusCursorDos relative"
              id="pasando2"
            >
              <span id="pasando2" className="small-numb  mb-[15px]">
                03
              </span>
              SUPPORT
              <span class="absolute right-[24px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 15.375C8.68935 15.375 8.4375 15.6269 8.4375 15.9375C8.4375 16.2481 8.68935 16.5 9 16.5C9.31065 16.5 9.5625 16.2481 9.5625 15.9375C9.5625 15.6269 9.31065 15.375 9 15.375ZM13.125 9V8.25C13.125 5.97182 11.2782 4.125 9 4.125C6.72182 4.125 4.875 5.97182 4.875 8.25V9H6.75C7.16421 9 7.5 9.33577 7.5 9.75V12.75C7.5 13.1642 7.16421 13.5 6.75 13.5H4.875V13.6875C4.875 14.5807 5.56887 15.3117 6.44696 15.3711L6.5625 15.375L7.40859 15.3748C7.64033 14.7195 8.2653 14.25 9 14.25C9.93195 14.25 10.6875 15.0056 10.6875 15.9375C10.6875 16.8694 9.93195 17.625 9 17.625C8.265 17.625 7.6398 17.1551 7.40832 16.4994L6.5625 16.5C5.0593 16.5 3.83155 15.3207 3.7539 13.8369L3.75 13.6875V8.25C3.75 5.35051 6.10051 3 9 3C11.8995 3 14.25 5.35051 14.25 8.25V12C14.25 12.7908 13.6381 13.4387 12.862 13.4959L12.75 13.5H11.25C10.8654 13.5 10.5484 13.2105 10.505 12.8375L10.5 12.75V9.75C10.5 9.3654 10.7895 9.04837 11.1625 9.00502L11.25 9H13.125ZM6.375 10.125H4.875V12.375H6.375V10.125ZM13.125 10.125H11.625V12.375H12.75C12.9341 12.375 13.0872 12.2423 13.1189 12.0674L13.125 12V10.125Z"
                    fill={strokeSupport}
                  />
                </svg>
              </span>
            </p>
            {expSupport ? (
              <>
                <p
                  id="pasando2"
                  className="small-numb  pl-[24px] pr-[24px] pt-[16px] h-[100%]"
                >
                  We’ll join your journey and assist you on maintenance, and
                  design and code iterations.
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
