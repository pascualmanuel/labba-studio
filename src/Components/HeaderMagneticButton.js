import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import BackIcon from "../Assets/Back.svg";
const HeaderMagneticButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const callParallax = (e) => {
      parallaxIt(e, buttonRef.current, 60);
      parallaxIt(e, buttonRef.current.querySelector(".text"), 40);
    };

    const parallaxIt = (e, target, movement) => {
      const boundingRect = target.getBoundingClientRect();
      const relX = e.pageX - boundingRect.left;
      const relY = e.pageY - boundingRect.top;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      gsap.to(target, 0.3, {
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y:
          ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.width) *
          movement,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e) => {
      gsap.to(buttonRef.current, 0.3, { transformOrigin: "0 0", scale: 1 });
      gsap.to(buttonRef.current.querySelector(".button"), 0.3, { scale: 1.1 });
    };

    // const handleMouseLeave = (e) => {
    //   gsap.to(buttonRef.current, 0.3, { scale: 1 });
    //   gsap.to(
    //     [
    //       buttonRef.current.querySelector(".button"),
    //       buttonRef.current.querySelector(".text"),
    //     ],
    //     0.3,
    //     { scale: 1, x: 0, y: 0 }
    //   );
    // };

    const handleMouseLeave = (e) => {
      gsap.to(buttonRef.current, 0.3, { scale: 1, x: 0, y: 0 });
      gsap.to(
        [
          buttonRef.current.querySelector(".button"),
          buttonRef.current.querySelector(".text"),
        ],
        0.3,
        { scale: 1, x: 0, y: 0 }
      );
    };

    const handleMouseMove = (e) => {
      callParallax(e);
    };

    const buttonElement = buttonRef.current;

    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);
    buttonElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
      buttonElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Link to="/">
      <div className="button-magnetic" ref={buttonRef}>
        <div className="button button--primary">
          <span
            className="text b3-desk flex flex-row items-center"
            style={{ fontSize: "16px" }}
          >
            Contact
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HeaderMagneticButton;
