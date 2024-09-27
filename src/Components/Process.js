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
    <div className="process-container sm:pt-0 pt-12 pb-10 sm:pb-28  ">
      <main className="flex justify-center mb-6 sm:mb-0">
        <ul id="cards">
          <li className="card w-[100vw] z-[10000] " id="card_2">
            <div className="absolute left-[0px] ml-[23px] sm:ml-[150px] top-[-72px] sm:top-[-120px]">
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
                    During the Hello phase we’ll get to know each other. We’ll
                    discuss your goals, project expectations, and determine if
                    we are the right team to bring your idea to the next level.
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
                    This is where we dive deep into research, exploring your
                    brand, your audience, and the context in which your product
                    or service operates. We analyze your users and market to
                    identify opportunities, pain points, and key areas to focus
                    on.
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
                    With the insights from the discovery phase, we begin
                    developing strategic and creative solutions. Whether it's a
                    digital marketing plan, a new visual identity, or the design
                    of a digital product, we generate ideas, create prototypes,
                    and iterate until we find the perfect solution.
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
                    This is where the magic happens. In this phase, our
                    technical and creative teams work together to bring the
                    strategy and design to life, ensuring everything is
                    optimized for the best results.
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
                    Before delivering anything, we ensure every detail is
                    perfect. We run thorough reviews and tests, and once
                    everything is approved, we launch. But it doesn’t end
                    there—we continue monitoring and optimizing the project to
                    ensure it performs at its best.
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
