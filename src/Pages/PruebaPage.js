// import React, { useRef } from "react";
// import TextAnimated from "../Hooks/AnimatedWord";

// function PruebaPage() {
//   const textAnimatedRefs = useRef([]);

//   const handleMouseEnter = (index) => {
//     console.log(`Mouse entered the area ${index + 1}`);
//     // Llama a la animación del texto animado correspondiente
//     if (textAnimatedRefs.current[index]) {
//       textAnimatedRefs.current[index].playAnimation();
//     }
//   };

//   const handleMouseLeave = (index) => {
//     console.log(`Mouse left the area ${index + 1}`);
//     // Reversa la animación del texto animado correspondiente
//     if (textAnimatedRefs.current[index]) {
//       textAnimatedRefs.current[index].reverseAnimation();
//     }
//   };

//   return (
//     <>
//       {/* <div className="flex justify-center pt-[100px]">
//         <div className="w-[50vw]">
//           <TextAnimated
//             ref={(el) => (textAnimatedRefs.current[0] = el)}
//             firstWord="DEVELOPMENT"
//             secondWord="DEVELOPMENT"
//           />
//           <br />
//           <TextAnimated
//             ref={(el) => (textAnimatedRefs.current[1] = el)}
//             firstWord="UX/UI DESIGN"
//             secondWord="UX/UI DESIGN"
//           />
//           <br />
//           <TextAnimated
//             ref={(el) => (textAnimatedRefs.current[2] = el)}
//             firstWord="GROWTH AND ADS"
//             secondWord="GROWTH AND ADS"
//           />
//         </div>
//         <div
//           className="w-[100px] h-[100px] bg-violet-900"
//           onMouseEnter={() => handleMouseEnter(0)}
//           onMouseLeave={() => handleMouseLeave(0)}
//         >
//           Touch 1
//         </div>

//         <div
//           className="w-[100px] h-[100px] bg-emerald-900"
//           onMouseEnter={() => handleMouseEnter(1)}
//           onMouseLeave={() => handleMouseLeave(1)}
//         >
//           Touch 2
//         </div>

//         <div
//           className="w-[100px] h-[100px] bg-rose-600"
//           onMouseEnter={() => handleMouseEnter(2)}
//           onMouseLeave={() => handleMouseLeave(2)}
//         >
//           Touch 3
//         </div>
//       </div> */}

//     </>
//   );
// }

// export default PruebaPage;

import React, { useEffect, useRef } from "react";

const PruebaPage = () => {
  const blackDivRef = useRef(null);
  const redDivRef = useRef(null);
  const yellowDivRef = useRef(null);
  const greenDivRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Usar el viewport como raíz
      rootMargin: "0px",
      threshold: 1.0, // 1.0 significa que el 100% del div debe estar visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(
            `El div negro pasó por encima del ${entry.target.className}`
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observamos los divs de colores
    observer.observe(redDivRef.current);
    observer.observe(yellowDivRef.current);
    observer.observe(greenDivRef.current);

    // Limpieza al desmontar el componente
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 h-[300vh] w-full overflow-hidden">
        <div
          className="fixed h-[100vh] bg-black w-[100px] top-0 left-[50%] transform -translate-x-1/2"
          ref={blackDivRef}
        >
          {/* Aquí puedes poner el contenido que necesites */}
          rsdizfsndkszl rsdizfsndkszl rsdizfsndkszl rsdizfsndkszl rsdizfsndkszl
          rsdizfsndkszl rsdizfsndkszl rsdizfsndkszl rsdizfsndkszl rsdizfsndkszl
          rsdizfsndkszl rsdizfsndkszl
        </div>
      </div>

      <div
        className="fixed h-[100px] bg-red-500 w-[100px] top-[100px] left-[50%] transform -translate-x-1/2"
        ref={redDivRef}
      >
        Rojo
      </div>
      <div
        className="fixed h-[100px] bg-yellow-300 w-[100px] top-[200px] left-[50%] transform -translate-x-1/2"
        ref={yellowDivRef}
      >
        Amarillo
      </div>
      <div
        className="fixed h-[100px] bg-green-600 w-[100px] top-[300px] left-[50%] transform -translate-x-1/2"
        ref={greenDivRef}
      >
        Verde
      </div>
    </>
  );
};

export default PruebaPage;
