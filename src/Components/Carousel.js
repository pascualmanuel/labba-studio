// LogoMarquee.jsx
import React from "react";
import "../Styles/App.css";

import Cliente1 from "../Assets/clientes/marca-1.svg";
import Cliente2 from "../Assets/clientes/marca-2.svg";
import Cliente3 from "../Assets/clientes/marca-3.svg";
import Cliente4 from "../Assets/clientes/marca-4.svg";
import Cliente5 from "../Assets/clientes/marca-5.svg";
import Cliente6 from "../Assets/clientes/marca-6.svg";
import Cliente7 from "../Assets/clientes/marca-7.svg";

export default function LogoMarquee() {
  const logos = [
    Cliente1,
    Cliente2,
    Cliente5,
    Cliente3,
    Cliente4,
    Cliente6,
    Cliente7,
  ];

  const Track = (props) => (
    <div className="lm-track" {...props}>
      {logos.map((src, i) => (
        <div className="lm-item" key={i}>
          <img src={src} alt={`Marca ${i + 1}`} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="lm-wrap" role="presentation">
      <Track />
      <Track aria-hidden="true" />
    </div>
  );
}
