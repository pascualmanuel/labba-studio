// import React, { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";

// const CustomCursor = () => {
//   const [isMoving, setIsMoving] = useState(false);
//   const [cursorScaleElements, setCursorScaleElements] = useState([]);
//   const [isInsideHello, setIsInsideHello] = useState(false);

//   const isMobile = window.innerWidth <= 768; // Adjust the width as needed

//   let cursorStyle = {
//     zIndex: 9999,
//     position: "fixed",
//     width: "34px",
//     height: "34px",
//     border: "1px solid #000000",
//     borderRadius: isInsideHello ? "10px" : "100px",
//     backgroundColor: "rgba(255, 255, 255, 0.2)",
//     pointerEvents: "none",
//     transition: "transform 0.3s ease-out, border-radius 0.3s ease-out",
//     backdropFilter: "blur(2px)",
//   };

//   const plusCursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = document.querySelector(".cursor");
//     const cursorScale = document.querySelectorAll(".cursor-scale");
//     setCursorScaleElements(Array.from(cursorScale));

//     gsap.to(
//       {},
//       {
//         repeat: -1,
//         duration: 0.016,
//         onRepeat: function () {
//           gsap.set(cursor, {
//             left: mouseX,
//             top: mouseY,
//           });
//         },
//       }
//     );

//     const handleMouseMove = (e) => {
//       setIsMoving(true);
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     const handleMouseLeave = () => {
//       setIsMoving(false);
//     };

//     const plusCursor = plusCursorRef.current;

//     if (plusCursor) {
//       plusCursor.addEventListener("mouseenter", () => {
//         setIsInsideHello(true);
//       });

//       plusCursor.addEventListener("mouseleave", () => {
//         setIsInsideHello(false);
//       });
//     }

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);

//       if (plusCursor) {
//         plusCursor.removeEventListener("mouseenter", () => {
//           setIsInsideHello(true);
//         });

//         plusCursor.removeEventListener("mouseleave", () => {
//           setIsInsideHello(false);
//         });
//       }
//     };
//   }, [plusCursorRef]);

//   return (
//     <div
//       className={`cursor ${isMoving ? "is-moving" : ""} sm:block hidden`}
//       style={cursorStyle}
//     >
//       {cursorScaleElements.map((link, index) => (
//         <div
//           key={index}
//           className="cursor-scale"
//           onMouseMove={() => {}}
//           onMouseLeave={() => {}}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default CustomCursor;

// let mouseX = 0;
// let mouseY = 0;
