import React, { useEffect } from "react";
import "../Styles/Prueba.css";
import { ReactSVG } from "react-svg";
import First from "../Assets/numbers/01.svg";
import Second from "../Assets/numbers/02.svg";
import Third from "../Assets/numbers/03.svg";
import Fourth from "../Assets/numbers/04.svg";
import Fifth from "../Assets/numbers/05.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {
  return (
    <div className="process-container sm:pt-0 pt-12 pb-0 sm:pb-28 ">
      <main className="flex justify-center  sm:mb-0 mb-[-260px]">
        <ul id="cards">
          <li className="card w-[100vw] z-[10000] " id="card_2">
            <div className="absolute left-[0px] ml-[23px] sm:ml-36 top-[-72px] sm:top-[-120px]">
              <p className="l-desk ">PROCESS</p>
              <h3 className="b1-desk ">This is how we roll</h3>
            </div>
            <div className=" card-2 card__content card__animation ">
              <div className="card-inside">
                <div className="number-cont">
                  <ReactSVG
                    src={First}
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                    }}
                  />
                </div>
                <div>
                  <h2 className="h3-desk sm:mt-0 mt-2">Hello </h2>
                  <p
                    className="b3-desk sm:mt-9 sm:w-[500px] mt-2"
                    style={{ fontSize: "16px" }}
                  >
                    During the Hello phase we’ll get to know each other, have a
                    first approach of what you need, and determine if we are the
                    right fit for bringing your project to life.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="card z-[10001]" id="card_3">
            <div className=" card-3 card__content card__animation">
              <div className="card-inside">
                <div className="number-cont">
                  <ReactSVG
                    src={Second}
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                    }}
                  />
                </div>
                <div>
                  <h2 className="h3-desk sm:mt-0 mt-2">Discovery </h2>
                  <p
                    className="b3-desk sm:mt-9 sm:w-[500px] mt-2"
                    style={{ fontSize: "16px" }}
                  >
                    Here we get into a deep understanding of the users, the
                    context in which the product will be used, and their needs
                    to find insights and paint points in the journey.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card z-[10003]" id="card_4">
            <div className=" card-4 card__content card__animation">
              <div className="card-inside">
                <div className="number-cont">
                  <ReactSVG
                    src={Third}
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                    }}
                  />
                </div>
                <div>
                  <h2 className="h3-desk sm:mt-0 mt-2">Design </h2>
                  <p
                    className="b3-desk sm:mt-9 sm:w-[500px] mt-2"
                    style={{ fontSize: "16px" }}
                  >
                    We create and iterate on design solutions based on insights
                    gained in the discovery phase. Sketching, wireframes and
                    usability testing to validate effectiveness, ending in high
                    fidelity prototypes.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card z-[10004]" id="card_5">
            <div className=" card-5 card__content card__animation">
              <div className="card-inside">
                <div className="number-cont">
                  <ReactSVG
                    src={Fourth}
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                    }}
                  />
                </div>
                <div>
                  <h2 className="h3-desk sm:mt-0 mt-2">Dev </h2>
                  <p
                    className="b3-desk sm:mt-9 sm:w-[500px] mt-2"
                    style={{ fontSize: "16px" }}
                  >
                    We use high-speed back-end code to build exceptionally fast
                    sites, and optimize it for all screen sizes to ensure the
                    best experience in all devices.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card z-[10005]" id="card_6">
            <div className=" card-6 card__content card__animation">
              <div className="card-inside">
                <div className="number-cont">
                  <ReactSVG
                    src={Fifth}
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                    }}
                  />
                </div>
                <div>
                  <h2 className="h3-desk sm:mt-0 mt-2">Launch </h2>
                  <p
                    className="b3-desk sm:mt-9 sm:w-[500px] mt-2"
                    style={{ fontSize: "16px" }}
                  >
                    Before going live, the site will be meticulously checked to
                    ensure everything is just pixel perfect. Depending on the
                    project, we can either facilitate the launch or export the
                    code.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Services;
