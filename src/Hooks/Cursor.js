// import React, { useEffect, useRef, useState } from "react";
// import "./Cursor.css";

// const Cursor = () => {
//   const [state, setState] = useState({
//     delay: 8,
//     _x: 0,
//     _y: 0,
//     endX: window.innerWidth / 2,
//     endY: window.innerHeight / 2,
//     cursorVisible: true,
//     cursorEnlarged: false,
//   });

//   const dotRef = useRef(null);
//   const outlineRef = useRef(null);

//   useEffect(() => {
//     const setupEventListeners = () => {
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseenter", handleMouseEnter);
//       document.addEventListener("mouseleave", handleMouseLeave);
//     };

//     const handleMouseMove = (e) => {
//       setState((prev) => ({
//         ...prev,
//         cursorVisible: true,
//         endX: e.pageX,
//         endY: e.pageY,
//       }));
//     };

//     const handleMouseEnter = () => {
//       setState((prev) => ({
//         ...prev,
//         cursorVisible: true,
//       }));
//     };

//     const handleMouseLeave = () => {
//       setState((prev) => ({
//         ...prev,
//         cursorVisible: false,
//       }));
//     };

//     const animateDotOutline = () => {
//       setState((prev) => ({
//         ...prev,
//         _x: prev._x + (prev.endX - prev._x) / prev.delay,
//         _y: prev._y + (prev.endY - prev._y) / prev.delay,
//       }));

//       if (outlineRef.current) {
//         outlineRef.current.style.top = state._y + "px";
//         outlineRef.current.style.left = state._x + "px";
//       }

//       requestAnimationFrame(animateDotOutline);
//     };

//     const init = () => {
//       setupEventListeners();
//       animateDotOutline();
//     };

//     init();

//     return () => {
//       // Cleanup event listeners when component unmounts
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseenter", handleMouseEnter);
//       document.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [state]);

//   useEffect(() => {
//     const toggleCursorSize = () => {
//       const { cursorEnlarged } = state;

//       if (dotRef.current && outlineRef.current) {
//         if (cursorEnlarged) {
//           dotRef.current.style.transform = "translate(-50%, -50%) scale(0.75)";
//           outlineRef.current.style.transform =
//             "translate(-50%, -50%) scale(1.5)";
//         } else {
//           dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
//           outlineRef.current.style.transform = "translate(-50%, -50%) scale(1)";
//         }
//       }
//     };

//     const toggleCursorVisibility = () => {
//       const { cursorVisible } = state;

//       if (dotRef.current && outlineRef.current) {
//         if (cursorVisible) {
//           dotRef.current.style.opacity = 1;
//           outlineRef.current.style.opacity = 1;
//         } else {
//           dotRef.current.style.opacity = 0;
//           outlineRef.current.style.opacity = 0;
//         }
//       }
//     };

//     toggleCursorSize();
//     toggleCursorVisibility();
//   }, [state.cursorEnlarged, state.cursorVisible]);

//   return (
//     <>
//       <div className="cursor-dot" ref={dotRef}></div>
//       <div className="cursor-dot-outline" ref={outlineRef}></div>
//     </>
//   );
// };

// export default Cursor;
