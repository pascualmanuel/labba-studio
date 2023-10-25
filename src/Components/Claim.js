import React, { useEffect } from "react";
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
    <div className="claim-cont">
      <div className="text">
        <p
          className="h2-desk claim"
          style={{
            whiteSpace: "nowrap",
            transform: "translateX(10%)", // Initially hides the phrase
          }}
        >
          At <span style={{ color: "white" }}> Labba,</span> we craft digital
          products that balance users and business needs.
        </p>
      </div>
    </div>
  );
}
export default Claim;
