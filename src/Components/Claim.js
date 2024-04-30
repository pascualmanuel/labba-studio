import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Claim() {
  const claimSectionRef = useRef(null); // Ref to store the DOM element reference

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let xAnimation = "-80%";

  let vwClaim = "300vw";
  if (viewportWidth < 1415) {
    xAnimation = "-90%";
  }

  // if (viewportWidth < 1380) {
  //   xAnimation = "-45%";
  // }

  // if (viewportWidth < 1280) {
  //   xAnimation = "-50%";
  // }

  if (viewportWidth < 1196) {
    xAnimation = "-97%";
  }
  // if (viewportWidth < 1090) {
  //   xAnimation = "-65%";
  //   vwClaim = "340vw";
  // }

  if (viewportWidth < 1080) {
    xAnimation = "-100%";
  }

  if (viewportWidth < 1020) {
    xAnimation = "-105%";
    vwClaim = "400vw";
  }
  if (viewportWidth < 930) {
    xAnimation = "-110%";
    vwClaim = "450vw";
  }
  if (viewportWidth < 850) {
    xAnimation = "-120%";
    vwClaim = "450vw";
  }

  if (viewportWidth < 690) {
    xAnimation = "-125%";
    vwClaim = "450vw";
  }

  if (viewportWidth < 641) {
    xAnimation = "-100%";
    vwClaim = "450vw";
  }
  if (viewportWidth < 540) {
    xAnimation = "-105%";
    vwClaim = "400vw";
  }

  if (viewportWidth < 490) {
    xAnimation = "-108%";
    vwClaim = "400vw";
  }

  if (viewportWidth < 465) {
    xAnimation = "-110%";
    vwClaim = "400vw";
  }

  if (viewportWidth < 435) {
    xAnimation = "-114%";
    vwClaim = "400vw";
  }

  if (viewportWidth < 410) {
    xAnimation = "-118%";
    vwClaim = "400vw";
  }

  if (viewportWidth < 380) {
    xAnimation = "-121%";
    vwClaim = "400vw";
  }

  if (viewportWidth < 350) {
    xAnimation = "-125%";
    vwClaim = "400vw";
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger to pin the section at the top
    ScrollTrigger.create({
      trigger: ".claim-section",
      start: "top top+=300",
      end: "+=1000",
      pin: true,
      pinSpacing: true,
    });

    // ScrollTrigger to start the animation with a 400px offset
    const claimAnimation = gsap.to(".claim-section", {
      x: xAnimation,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".claim-section",
        start: "top top+=600", // Animation starts 400px down
        end: "+=1400", // Adjust this if needed
        // markers: true,
        scrub: true,
      },
    });

    return () => {
      claimAnimation.kill();
      // ScrollTrigger.getById("pinTrigger").kill(); // Clean up the pinning trigger
    };
  }, []);

  return (
    <>
      <div>
        <div className="h-[100vh] claim-section bg-[#121212] flex items-center">
          <div
            className="claim-inside claim-section bg-[#121212] "
            style={{
              marginBottom: "0",
              width: vwClaim,
              zIndex: "-1",
              overflowX: "visible",
              whiteSpace: "nowrap",
            }}
          >
            <p
              className="h2-desk claim"
              style={{
                transform: "translateX(80%)", // Initially hides the phrase
              }}
            >
              At <span style={{ color: "white" }}> Labba,</span> we craft
              digital products that balance users and business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Claim;

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
//       start: "top 90%", // Start the animation when 90% of the section is visible
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
//       start: "top 85%", // Pinning starts when 30% of the section is visible
//       end: "+=1800", // Pinning duration
//       pin: true,
//       pinSpacing: true,
//       scrub: true,
//       markers: true,
//     });

//     return () => {
//       animationTrigger.kill();
//       pinTrigger.kill(); // Clean up on unmount
//     };
//   }, [xAnimation]);

//   return (
//     <div className="h-[110vh] claim-section bg-[#121212] flex items-center">
//       <div
//         ref={claimRef} // Reference to measure the text element
//         className="claim-inside"
//         style={{
//           overflowX: "visible",
//           whiteSpace: "nowrap",
//         }}
//       >
//         <p className="h2-desk claim" style={{ transform: "translateX(50%)" }}>
//           At <span style={{ color: "white" }}> Labba,</span> we craft digital
//           products that balance users and business needs.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Claim;
