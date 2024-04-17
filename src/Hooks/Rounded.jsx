// Updated Rounded.jsx
import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "./Magnetic";

function Rounded({
  children,
  backgroundImage = `linear-gradient(
    126.48deg,
    #f62a4b -2.96%,
    #d42374 47.65%,
    #a0378b 103.59%
  )`,
  heightButton,
  widthButton,
  buttonBorderColor,
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{
          overflow: "hidden",
          width: widthButton,
          height: heightButton,
          borderColor: buttonBorderColor,
        }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundImage }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}

export default Rounded;
