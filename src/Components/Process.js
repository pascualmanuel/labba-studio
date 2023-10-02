import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll(".custom-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cards[0], // Trigger animation when the first card enters the viewport
        start: "top center", // Adjust this value to your preference
        end: "bottom center", // Adjust this value to your preference
        scrub: true,
        markers: true,
      },
    });

    cards.forEach((card, index) => {
      tl.to(card, {
        opacity: 1,
        y: 0,
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <div className="cards">
                <ul className="nav">
                  {Array.from({ length: 3 }, (_, index) => (
                    <li key={index}>
                      <a href={`#card${index + 1}`}>
                        <div
                          className={`circle ${index === 0 ? "active" : ""}`}
                        >
                          {index + 1}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    className={`custom-card card${index + 1}`}
                    id={`card${index + 1}`}
                  >
                    <h1>Slide {index + 1}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="next_block">
              <h1>End content</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
