// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// function Works() {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline();

//     tl.from(".project", {
//       opacity: 0,
//       y: 100,
//       stagger: 0.2,
//       duration: 0.5,
//     });

//     ScrollTrigger.create({
//       trigger: ".parallax",
//       start: "top",
//       endTrigger: ".third-section",
//       end: "top top+=10vh",
//       animation: tl,
//       scrub: 1,
//       pin: true, // Cambiar a true para hacer pegajosa la segunda sección
//       markers: true,
//       onEnter: () => {
//         gsap.to(".projects-container", {
//           y: 0,
//           duration: 0.5,
//         });
//       },
//       onLeaveBack: () => {
//         gsap.to(".projects-container", {
//           y: 100,
//           duration: 0.5,
//         });
//       },
//     });
//   }, []);

//   return (
//     <>
//       <div
//         className="second-section parallax"
//         style={{
//           position: "sticky",
//           top: 0,
//           maxHeight: "80vh", // Definir una altura máxima
//           overflow: "auto", // Agregar desplazamiento si es necesario
//           background: "#121212",
//           zIndex: 1,
//         }}
//       >
//         <div className="work"></div>
//         <div className="projects-container">
//           <div className="project">
//             <p style={{ color: "white" }}>Proyecto 1 </p>
//           </div>
//           <div className="project">
//             <p style={{ color: "white" }}>Proyecto 2 </p>
//           </div>
//           <div className="project">
//             <p style={{ color: "white" }}>Proyecto 3 </p>
//           </div>
//           <div className="project">
//             <p style={{ color: "white" }}>Proyecto 4 </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Works;
