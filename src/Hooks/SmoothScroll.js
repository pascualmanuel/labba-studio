// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const SmoothScroll = () => {
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const html = document.documentElement;
//     const body = document.body;

//     const scroller = {
//       target: scrollContainerRef.current,
//       ease: 0.05, // <= scroll speed
//       endY: 0,
//       y: 0,
//       resizeRequest: 1,
//       scrollRequest: 0,
//     };

//     let requestId = null;

//     gsap.set(scroller.target, {
//       rotation: 0.01,
//       force3D: true,
//       // markers: true,
//     });

//     const updateScroller = () => {
//       const resized = scroller.resizeRequest > 0;

//       if (resized) {
//         const height = scroller.target.clientHeight;
//         body.style.height = height + "px";
//         scroller.resizeRequest = 0;
//       }

//       const scrollY =
//         window.pageYOffset || html.scrollTop || body.scrollTop || 0;

//       scroller.endY = scrollY;
//       scroller.y += (scrollY - scroller.y) * scroller.ease;

//       if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
//         scroller.y = scrollY;
//         scroller.scrollRequest = 0;
//       }

//       gsap.set(scroller.target, {
//         y: -scroller.y,
//       });

//       requestId =
//         scroller.scrollRequest > 0
//           ? requestAnimationFrame(updateScroller)
//           : null;
//     };

//     const onScroll = () => {
//       scroller.scrollRequest++;
//       if (!requestId) {
//         requestId = requestAnimationFrame(updateScroller);
//       }
//     };

//     const onResize = () => {
//       scroller.resizeRequest++;
//       if (!requestId) {
//         requestId = requestAnimationFrame(updateScroller);
//       }
//     };

//     window.addEventListener("load", () => {
//       updateScroller();
//       window.focus();
//       window.addEventListener("resize", onResize);
//       document.addEventListener("scroll", onScroll);
//     });

//     return () => {
//       // Cleanup listeners when the component unmounts
//       window.removeEventListener("resize", onResize);
//       document.removeEventListener("scroll", onScroll);
//     };
//   }, []); // empty dependency array to run the effect only once

//   return <div ref={scrollContainerRef} className=""></div>;
// };

// export default SmoothScroll;
