import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Magnetic({ children }) {
  const magnetic = useRef(null);
  const [isMagnetic, setIsMagnetic] = useState(true);

  // Detect pointer type (fine = mouse, coarse = touch)
  const detectPointerType = () => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsMagnetic(hasFinePointer); // Only enable magnetic effect for fine pointers (e.g. mouse)
  };

  useEffect(() => {
    detectPointerType(); // Initial detection on component mount

    // Optional: Listen for pointer changes (e.g., docking/undocking touchscreen devices)
    const pointerChangeQuery = window.matchMedia("(pointer: fine)");
    pointerChangeQuery.addEventListener("change", detectPointerType);

    // Clean up listener on unmount
    return () => {
      pointerChangeQuery.removeEventListener("change", detectPointerType);
    };
  }, []);

  useEffect(() => {
    if (!isMagnetic) return; // If not magnetic, do nothing

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const element = magnetic.current;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMagnetic]); // Effect runs when isMagnetic changes

  return React.cloneElement(children, { ref: magnetic });
}

export default Magnetic;
