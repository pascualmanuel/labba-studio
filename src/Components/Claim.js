// import React, { useEffect, useState, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Claim = () => {
//   const [xAnimation, setXAnimation] = useState(0); // Animation distance
//   const claimRef = useRef(null); // Reference to measure the text width

//   useEffect(() => {
//     if (claimRef.current) {
//       const claimWidth = claimRef.current.scrollWidth; // Total width of the text
//       const sectionWidth = claimRef.current.parentElement.offsetWidth; // Width of the parent section

//       // Calculate the required translation distance to fully reveal the text
//       const distanceToRevealText = claimWidth - sectionWidth;

//       // Adding a larger buffer to ensure full visibility
//       const buffer = 300; // Example buffer in pixels
//       setXAnimation(distanceToRevealText + buffer); // Set the animation distance with the buffer
//     }

//     // Animation trigger
//     const animationTrigger = ScrollTrigger.create({
//       trigger: ".claim-section",
//       start: "top 65%", // Start the animation when 90% of the section is visible
//       end: "top 10%", // Stop when 10% is visible (adjust as needed)
//       scrub: 1, // Smooth animation
//       onUpdate: (self) => {
//         gsap.to(".claim-inside", {
//           x: -xAnimation * self.progress, // Animate based on scroll progress
//           duration: 0.3,
//         });
//       },
//     });

//     // Pinning trigger
//     const pinTrigger = ScrollTrigger.create({
//       trigger: ".claim-section",
//       start: "top", // Pinning starts when 30% of the section is visible
//       end: "+=1800", // Pinning duration
//       // pin: true,
//       pinSpacing: true,
//       scrub: true,

//     });

//     return () => {
//       animationTrigger.kill();
//       pinTrigger.kill(); // Clean up on unmount
//     };
//   }, [xAnimation]);

//   return (
//     <div className="h-[100vh] bg-sky-700 claim-section  flex items-center">
//       <div
//         ref={claimRef} // Reference to measure the text element
//         className="claim-inside"
//         style={{
//           overflowX: "visible",
//           whiteSpace: "nowrap",
//         }}
//       >
//         <p className="h2-desk claim" style={{ transform: "translateX(50%)" }}>
//           We craft memorable digital experiences that resonate, inspire and
//           endure.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Claim;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Claim() {
  const screen = window.innerWidth / 2;
  const claimSectionRef = useRef(null);
  const isMobile = window.innerWidth < 768; // Check for mobile screens
  let startX = `-${2160 - screen}px`;

  if (isMobile) {
    startX = `-${1160 - screen}px`;
  }
  // const endX =
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set the initial position of the claim section to be off-screen on the rightpookokokok ok ok ok
    gsap.set(claimSectionRef.current, {
      x: "50vw", // Start from the right side of the screen
      y: "150px",
    });

    // Animate the section from the right to the left
    const claimAnimation = gsap.to(claimSectionRef.current, {
      x: startX, // Move it to the left as the user scrolls
      y: "-50px",
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: claimSectionRef.current,
        start: "top-=500", // Start as soon as it reaches the top of the viewport
        end: "+=700", // Control the scroll length for smoothness
        scrub: true,
        pin: true, // Pin the section during the animation
        pinSpacing: true, // Prevent vertical space while pinning
        // markers: true, // Remove for production
      },
    });

    return () => {
      claimAnimation.kill(); // Clean up the animation
    };
  }, []);

  return (
    <div className="claim-wrapper mt-[]  mb-[400PX]">
      <div
        ref={claimSectionRef}
        className="claim-section h-[] flex items-center "
      >
        <div className="claim-content w-[] whitespace-nowrap ">
          <p className="h2-desk text-LaBlack">
            We craft memorable digital experiences that resonate, inspire and
            endure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Claim;
