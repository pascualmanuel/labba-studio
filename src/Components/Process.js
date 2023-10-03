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
    <div className="process-container">
      <div className="process" id="process">
        <div className="w-1/2 ml-36 " style={{ marginBottom: "70px" }}>
          <p className="l-desk">PROCESS</p>
          <h3 className="b1-desk">This is how we roll</h3>
        </div>
      </div>

      <main className="flex justify-center">
        <ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
              <div className="card-inside">
                <div className="flex justify-center" style={{ width: "250px" }}>
                  <ReactSVG src={First} />
                </div>
                <div>
                  <h2 className="h3-desk">Hello 👋</h2>
                  <p
                    className="b3-desk mt-9"
                    style={{ fontSize: "16px", width: "500px" }}
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
                <div className="flex justify-center" style={{ width: "250px" }}>
                  <ReactSVG src={Second} />
                </div>
                <div>
                  <h2 className="h3-desk">Discovery 🔍</h2>
                  <p
                    className="b3-desk mt-9"
                    style={{ fontSize: "16px", width: "500px" }}
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
                <div className="flex justify-center" style={{ width: "250px" }}>
                  <ReactSVG src={Third} />
                </div>
                <div>
                  <h2 className="h3-desk">Design 🎨</h2>
                  <p
                    className="b3-desk mt-9"
                    style={{ fontSize: "16px", width: "500px" }}
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
                <div className="flex justify-center" style={{ width: "250px" }}>
                  <ReactSVG src={Fourth} />
                </div>
                <div>
                  <h2 className="h3-desk">Dev ⌨️</h2>
                  <p
                    className="b3-desk mt-9"
                    style={{ fontSize: "16px", width: "500px" }}
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
                <div className="flex justify-center" style={{ width: "250px" }}>
                  <ReactSVG src={Fifth} />
                </div>
                <div>
                  <h2 className="h3-desk">Launch 🚀</h2>
                  <p
                    className="b3-desk mt-9"
                    style={{ fontSize: "16px", width: "500px" }}
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
