import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import BackIcon from "../Assets/Back.svg";
import { useLocation } from "react-router-dom";

const MagneticButton = ({ text, link }) => {
  const buttonRef = useRef(null);
  const [isMagnetic, setIsMagnetic] = useState(true);

  const detectPointerType = () => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    // Set magnetic behavior based on the pointer type
    if (hasFinePointer) {
      setIsMagnetic(true); // Enable magnetic behavior for devices with a fine pointer (cursor)
    } else if (hasCoarsePointer) {
      setIsMagnetic(false); // Disable magnetic behavior for devices with a coarse pointer (touch)
    }
  };

  useEffect(() => {
    // Detect pointer type when the component mounts
    detectPointerType();

    // Optional: listen for changes in the pointer type, e.g., when docking/undocking a touchscreen device
    const pointerChangeQuery = window.matchMedia("(pointer: fine)");
    pointerChangeQuery.addEventListener("change", detectPointerType);

    // Clean up the event listener on unmount
    return () => {
      pointerChangeQuery.removeEventListener("change", detectPointerType);
    };
  }, []);

  useEffect(() => {
    if (!isMagnetic) {
      return; // If it's not magnetic, don't add any mouse-related behavior
    }

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
  }, [isMagnetic]);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="z-[10000] overflow-visible">
      {link ? (
        <Link to={link}>
          <div className={`button-magnetic button-contact`} ref={buttonRef}>
            <div className="button">
              <span className="text flex flex-row items-center">{text}</span>
            </div>
          </div>
        </Link>
      ) : (
        <div className={`button-contact`} ref={buttonRef}>
          <div className="button">
            <span
              className="text flex flex-row items-center"
              style={{ fontSize: "16px" }}
            >
              {text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagneticButton;
