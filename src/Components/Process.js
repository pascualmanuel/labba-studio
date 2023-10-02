import React, { useEffect } from "react";
import "../Styles/Prueba.css";
function Services() {
  useEffect(() => {
    // Aquí puedes agregar cualquier código JavaScript personalizado si es necesario
  }, []);

  return (
    <div className="process">
      <div className="w-1/2 ml-36 " style={{ marginBottom: "70px" }}>
        <p className="l-desk">PROCESS</p>
        <h3 className="b1-desk">This is how we roll</h3>
      </div>
      <main className="flex justify-center">
        <ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <h2>Card One</h2>
                <p>{/* Contenido de la tarjeta uno */}</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card_2">
            <div className="card__content">
              <div>
                <h2>Card One</h2>
                <p>{/* Contenido de la tarjeta uno */}</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </li>

          <li className="card" id="card_3">
            <div className="card__content">
              <div>
                <h2>Card One</h2>
                <p>{/* Contenido de la tarjeta uno */}</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </li>

          <li className="card" id="card_4">
            <div className="card__content">
              <div>
                <h2>Card One</h2>
                <p>{/* Contenido de la tarjeta uno */}</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </li>

          <li className="card" id="card_5">
            <div className="card__content">
              <div>
                <h2>Card One</h2>
                <p>{/* Contenido de la tarjeta uno */}</p>
                <p>
                  <a href="#top" className="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </li>
          {/* Repite esta estructura para las demás tarjetas */}
        </ul>
      </main>
    </div>
  );
}

export default Services;
