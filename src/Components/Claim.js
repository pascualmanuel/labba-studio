import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Claim() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElement = document.querySelector(".claim");

    gsap.to(textElement, {
      x: () => -(textElement.offsetWidth - window.innerWidth),
      // duration: 0, // Aumenta la duración para hacer la animación más lenta (por ejemplo, 1 segundo)
      ease: "linear",
      scrollTrigger: {
        trigger: textElement,
        start: "top center+=200px",
        end: "bottom center",
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          textElement.style.transform = `translateX(${progress * -95}%)`;
        },
      },
    });
  }, []);

  return (
    <>
      <div className="claim-cont">
        <div className="text">
          <p
            className="h2-desk claim"
            style={{
              whiteSpace: "nowrap",
              transform: "translateX(100%)", // Inicialmente oculta la frase
            }}
          >
            At <span style={{ color: "white" }}> Labba,</span> we craft digital
            products that balance users and business needs.
          </p>
        </div>
      </div>
    </>
  );
}
export default Claim;

// // Slow down the scroll behavior
// const handleScroll = (event) => {
//   event.preventDefault();
//   window.scrollTo(0, window.scrollY + event.deltaY * 0.1); // Adjust the factor to control scroll speed
// };

// window.addEventListener("wheel", handleScroll, { passive: false });

// return () => {
//   // Clean up the event listener when the component unmounts
//   window.removeEventListener("wheel", handleScroll);
// };
