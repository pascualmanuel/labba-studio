import React, { useEffect } from "react";
import gsap from "gsap";
// import "./styles.css"; // Ensure your styles are imported

const ComponentName = () => {
  useEffect(() => {
    const words = document.querySelectorAll(".words-li");

    words.forEach((items) => {
      const charts = gsap.timeline({ paused: true });
      charts
        .to(items.querySelectorAll(".single-chart1"), {
          yPercent: -100,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.in",
        })
        .from(
          items.querySelectorAll(".single-chart2"),
          {
            yPercent: 100,
            duration: 0.4,
            stagger: 0.04,
            ease: "power1.in",
          },
          "<0.001"
        );

      items.addEventListener("mouseenter", () => {
        charts.play();
      });

      items.addEventListener("mouseleave", () => {
        charts.reverse();
      });
    });
  }, []);

  return (
    <main>
      <div className="container-fluid">
        <div className="nav-list">
          <ul>
            <li className="words-li ">
              <h3>
                <div className="words">
                  <div className="first-word">
                    <div className="single-word">
                      <div className="uno">
                        {[
                          "D",
                          "E",
                          "V",
                          "E",
                          "L",
                          "O",
                          "P",
                          "M",
                          "E",
                          "N",
                          "p",
                        ].map((letter, index) => (
                          <div key={index} className="single-chart1">
                            {letter}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="second-word">
                    <div className="single-word">
                      <div className="dos">
                        {[
                          "D",
                          "E",
                          "V",
                          "E",
                          "L",
                          "O",
                          "P",
                          "M",
                          "E",
                          "N",
                          "T",
                        ].map((letter, index) => (
                          <div key={index} className="single-chart2">
                            {letter}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ComponentName;
