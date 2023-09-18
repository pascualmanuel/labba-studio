import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [cursorScaleElements, setCursorScaleElements] = useState([]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorScale = document.querySelectorAll(".cursor-scale");
    setCursorScaleElements(Array.from(cursorScale));

    gsap.to(
      {},
      {
        repeat: -1,
        duration: 0.016,
        onRepeat: function () {
          gsap.set(cursor, {
            left: mouseX,
            top: mouseY,
          });
        },
      }
    );

    const handleMouseMove = (e) => {
      setIsMoving(true);
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`cursor ${isMoving ? "is-moving" : ""}`}>
      {cursorScaleElements.map((link, index) => (
        <div
          key={index}
          className="cursor-scale"
          onMouseMove={() => {}}
          onMouseLeave={() => {}}
        ></div>
      ))}
    </div>
  );
};

export default CustomCursor;

let mouseX = 0;
let mouseY = 0;
