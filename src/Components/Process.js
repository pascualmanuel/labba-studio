import React, { useEffect } from "react";
import "../Styles/Prueba.css";
import { ReactSVG } from "react-svg";
import First from "../Assets/numbers/01.svg";
import Second from "../Assets/numbers/02.svg";
import Third from "../Assets/numbers/03.svg";
import Fourth from "../Assets/numbers/04.svg";
import Fifth from "../Assets/numbers/05.svg";
function Services() {
  useEffect(() => {
    // Aquí puedes agregar cualquier código JavaScript personalizado si es necesario
  }, []);

  return (
    <div className="process-container sm:pt-0 pt-12">
      <div className="process" id="process">
        <div className=" w-full" style={{ marginBottom: "70px" }}>
          <p className="l-desk ml-11 sm:ml-36">PROCESS</p>
          <h3 className="b1-desk ml-11 sm:ml-36">This is how we roll</h3>
        </div>
      </div>

      <main className="flex justify-center">
        <ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
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
                  <h2 className="h3-desk sm:mt-0 mt-2">Hello 👋</h2>
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
          <li className="card" id="card_2">
            <div className="card__content">
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
                  <h2 className="h3-desk sm:mt-0 mt-2">Discovery 🔍</h2>
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

          <li className="card" id="card_3">
            <div className="card__content">
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
                  <h2 className="h3-desk sm:mt-0 mt-2">Design 🎨</h2>
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

          <li className="card" id="card_4">
            <div className="card__content">
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
                  <h2 className="h3-desk sm:mt-0 mt-2">Dev ⌨️</h2>
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

          <li className="card" id="card_5">
            <div className="card__content">
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
                  <h2 className="h3-desk sm:mt-0 mt-2">Launch 🚀</h2>
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
