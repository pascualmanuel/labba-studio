import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";

function Works() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Selecciona el elemento que quieres animar
    const elemento = document.querySelector(".elemento-animado");

    // Crea una animación con GSAP para cambiar la posición de "fixed" a "absolute"
    const animacion = gsap.to(elemento, {
      y: 0, // Restaura la posición vertical original
      duration: 0.3, // Duración de la animación en segundos
      scrollTrigger: {
        trigger: elemento, // El elemento que desencadenará la animación
        start: "top top", // Comienza la animación cuando el elemento llega al límite superior
        end: "+=1800", // Finaliza la animación cuando el elemento se desplace hacia abajo en 1000px
        pin: true, // Fija el elemento
        pinSpacing: false, // Evita que se espacie automáticamente el contenido
        scrub: true, // Hace que la animación se sincronice con el desplazamiento
        markers: false,
      },
    });

    // Animación de los cuatro divs que pasan por encima de "inside-cont"
    const divs = document.querySelectorAll(".div-animado");
    divs.forEach((div, index) => {
      gsap.to(div, {
        y: 0, // Restaura la posición vertical original
        duration: 0.3, // Duración de la animación en segundos
        scrollTrigger: {
          trigger: div,
          start: "bottom center", // Comienza la animación cuando el div llega al centro de la ventana
          end: "top center", // Finaliza la animación cuando el div llega a la parte superior de la ventana
          scrub: true, // Hace que la animación se sincronice con el desplazamiento
          markers: false,
        },
      });
    });

    // Limpia la animación cuando el componente se desmonta
    return () => {
      animacion.kill();
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="elemento-animado">
        <div
          className="inside-cont"
          style={{ width: "100vw", height: "100vh" }}
        ></div>
      </div>
      <div className="scroll-content">
        <div className="div-animado">
          <div className="project-container">
            <div className="project first-pro"></div>
            <div className="project second-pro"></div>
          </div>
        </div>
        <div className="div-animado" style={{ marginTop: "40vh" }}>
          <div className="project-container">
            <div className="project first-pro"></div>
            <div className="project second-pro"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
