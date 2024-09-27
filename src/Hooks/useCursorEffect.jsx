import { useEffect } from "react";

const useCursorEffect = () => {
  const svgCode = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3137 0.686267L0.686292 23.3137M23.3137 0.686267H0.686292M23.3137 0.686267V23.3137" stroke="#ECECEC"/>
  </svg>
`;

  const svgPlus = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_b_2501_3)">
  <path d="M19 10L3.57628e-07 10" stroke="#212121"/>
  </g>
  <g filter="url(#filter1_b_2501_3)">
  <path d="M9.5 19.5L9.5 0.5" stroke="#212121"/>
  </g>
  <defs>
  <filter id="filter0_b_2501_3" x="-4" y="5.5" width="27" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
  </filter>
  <filter id="filter1_b_2501_3" x="5" y="-3.5" width="9" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
  </filter>
  </defs>
  </svg>  
`;

  const svgMinus = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_2501_3)">
<path d="M19 10L3.57628e-07 10" stroke="#212121"/>
</g>
<g filter="url(#filter1_b_2501_3)">
<path d="M9.5 19.5L9.5 0.5" stroke="transparent"/>
</g>
<defs>
<filter id="filter0_b_2501_3" x="-4" y="5.5" width="27" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
</filter>
<filter id="filter1_b_2501_3" x="5" y="-3.5" width="9" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
</filter>
</defs>
</svg>  
`;

  useEffect(() => {
    const circleCursor = document.getElementById("circleCursor");

    if (!circleCursor) {
      return;
    }

    const cursorWidth = 20;
    const cursorHeight = 20;
    const mitiWidth = cursorWidth / 2;
    const mitiHeight = cursorHeight / 2;

    let targetX = 0;
    let targetY = 0;
    let isMoving = false;

    const handleMouseMove = (e) => {
      const cursorElement = document.getElementById("circleCursor");
      if (!cursorElement) return; // Previene el error si no existe el cursor

      targetX = e.clientX - mitiWidth;
      targetY = e.clientY - mitiHeight;

      if (!isMoving) {
        isMoving = true;
        updateCursor();
      }
    };

    const handleResize = () => {
      const cursorElement = document.getElementById("circleCursor");
      if (!cursorElement) return; // Previene el error durante el resize si el cursor no existe
      // Opcional: Ajustar la posición del cursor si es necesario después del resize
      targetX = window.innerWidth / 2 - mitiWidth;
      targetY = window.innerHeight / 2 - mitiHeight;
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize); // Añadir listener para resize

    function isCursorOverLink(element) {
      return element?.id === "pasando";
    }

    function isCursorOverLinkTwo(element) {
      return element?.id === "pasando2";
    }

    function isCursorOverLinkThree(element) {
      return element?.id === "pasando3";
    }

    function updateCursorStyle(isOverLink, isOverLinkTwo, isOverLinkThree) {
      const transitionDuration = "0.5s";
      const transitionDuration2 = "0.2s";

      if (isOverLink) {
        circleCursor.style.width = "100px";
        circleCursor.style.height = "100px";
        circleCursor.style.fontSize = "50px";
        circleCursor.style.fontWeight = "400";
        circleCursor.style.transition = `width ${transitionDuration}, height ${transitionDuration}`;
        circleCursor.style.setProperty(
          "--before-content",
          `url('data:image/svg+xml,${encodeURIComponent(svgCode)}')`
        );
        circleCursor.style.setProperty("--before-margin-top", "-7px");
      } else if (isOverLinkTwo) {
        circleCursor.style.width = "56px";
        circleCursor.style.height = "56px";
        circleCursor.style.fontSize = "50px";
        circleCursor.style.fontWeight = "400";
        circleCursor.style.transition = `width ${transitionDuration2}, height ${transitionDuration2}`;
        circleCursor.style.setProperty(
          "--before-content",
          `url('data:image/svg+xml,${encodeURIComponent(svgPlus)}')`
        );
        circleCursor.style.setProperty("--before-margin-top", "-7px");
      } else if (isOverLinkThree) {
        circleCursor.style.width = "56px";
        circleCursor.style.height = "56px";
        circleCursor.style.fontSize = "50px";
        circleCursor.style.fontWeight = "400";
        circleCursor.style.transition = `width ${transitionDuration2}, height ${transitionDuration2}`;
        circleCursor.style.setProperty(
          "--before-content",
          `url('data:image/svg+xml,${encodeURIComponent(svgMinus)}')`
        );
        circleCursor.style.setProperty("--before-margin-top", "-7px");
      } else {
        circleCursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        circleCursor.style.width = "35px";
        circleCursor.style.height = "35px";
        circleCursor.style.transition = `width ${transitionDuration}, height ${transitionDuration}`;
        circleCursor.style.setProperty("--before-content", "''");
      }
    }

    function updateCursor() {
      const circleCursor = document.getElementById("circleCursor");
      if (!circleCursor) return; // Verifica que el cursor exista

      const currentX = parseFloat(circleCursor.style.left) || 0;
      const currentY = parseFloat(circleCursor.style.top) || 0;

      const deltaX = Math.round((targetX - currentX) * 0.1);
      const deltaY = Math.round((targetY - currentY) * 0.1);

      circleCursor.style.left = Math.round(currentX + deltaX) + "px";
      circleCursor.style.top = Math.round(currentY + deltaY) + "px";

      const isOverLink = isCursorOverLink(
        document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
      );
      const isOverLinkTwo = isCursorOverLinkTwo(
        document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
      );
      const isOverLinkThree = isCursorOverLinkThree(
        document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
      );

      updateCursorStyle(isOverLink, isOverLinkTwo, isOverLinkThree);

      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        requestAnimationFrame(updateCursor);
      } else {
        isMoving = false;
      }
    }

    // Limpieza de los event listeners al desmontar el componente
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useCursorEffect;
