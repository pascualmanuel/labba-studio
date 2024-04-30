import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Claim = () => {
  const [xAnimation, setXAnimation] = useState(0); // Animation distance
  const claimRef = useRef(null); // Reference to measure the text width

  useEffect(() => {
    if (claimRef.current) {
      const claimWidth = claimRef.current.scrollWidth; // Total width of the text
      const sectionWidth = claimRef.current.parentElement.offsetWidth; // Width of the parent section

      // Calculate the required translation distance to fully reveal the text
      const distanceToRevealText = claimWidth - sectionWidth;

      // Adding a larger buffer to ensure full visibility
      const buffer = 300; // Example buffer in pixels
      setXAnimation(distanceToRevealText + buffer); // Set the animation distance with the buffer
    }

    // Animation trigger
    const animationTrigger = ScrollTrigger.create({
      trigger: ".claim-section",
      start: "top 90%", // Start the animation when 90% of the section is visible
      end: "top 10%", // Stop when 10% is visible (adjust as needed)
      scrub: 1, // Smooth animation
      onUpdate: (self) => {
        gsap.to(".claim-inside", {
          x: -xAnimation * self.progress, // Animate based on scroll progress
          duration: 0.3,
        });
      },
    });

    // Pinning trigger
    const pinTrigger = ScrollTrigger.create({
      trigger: ".claim-section",
      start: "top 85%", // Pinning starts when 30% of the section is visible
      end: "+=1800", // Pinning duration
      pin: true,
      pinSpacing: true,
      scrub: true,
      markers: true,
    });

    return () => {
      animationTrigger.kill();
      pinTrigger.kill(); // Clean up on unmount
    };
  }, [xAnimation]);

  return (
    <div className="h-[110vh] claim-section bg-[#121212] flex items-center">
      <div
        ref={claimRef} // Reference to measure the text element
        className="claim-inside"
        style={{
          overflowX: "visible",
          whiteSpace: "nowrap",
        }}
      >
        <p className="h2-desk claim" style={{ transform: "translateX(50%)" }}>
          At <span style={{ color: "white" }}> Labba,</span> we craft digital
          products that balance users and business needs.
        </p>
      </div>
    </div>
  );
};
export default Claim;
