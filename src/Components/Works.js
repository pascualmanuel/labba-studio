import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";

function Works() {
  const isMobile = window.innerWidth <= 768; //  width as needed

  let scrubDesk = 2.5;

  let positions = {
    firstPro: -100,
    secondPro: -680,
    thirdPro: -800,
    fourthPro: -980,
  };

  let marginTopMob = "40vh";
  if (isMobile) {
    scrubDesk = true;
    positions = {
      firstPro: -100,
      secondPro: -200,
      thirdPro: -400,
      fourthPro: -600,
    };
    marginTopMob = "1000px";
  }

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const animacion = gsap.to(".elemento-animado", {
  //     y: 0,
  //     duration: 0.3,
  //     scrollTrigger: {
  //       trigger: ".elemento-animado",
  //       start: "top top",
  //       end: "+=1200",
  //       pin: true,
  //       pinSpacing: false,
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  //   // const firstProAnimation = gsap.to(".first-pro", {
  //   //   y: -600,
  //   //   ease: "none",
  //   //   scrollTrigger: {
  //   //     trigger: ".project-container",
  //   //     start: "top top",
  //   //     end: "bottom bottom",
  //   //     scrub: 16,
  //   //   },
  //   // });

  //   // const secondProAnimation = gsap.to(".second-pro", {
  //   //   y: 170,
  //   //   ease: "none",
  //   //   scrollTrigger: {
  //   //     trigger: ".project-container",
  //   //     start: "top top",
  //   //     end: "bottom bottom",
  //   //     scrub: 10,
  //   //   },
  //   // });

  //   // const thirdProAnimation = gsap.to(".third-pro", {
  //   //   y: -280,
  //   //   ease: "none",
  //   //   scrollTrigger: {
  //   //     trigger: ".project-container",
  //   //     start: "top top",
  //   //     end: "bottom bottom",
  //   //     scrub: 8,
  //   //   },
  //   // });

  //   // const fourthProAnimation = gsap.to(".fourth-pro", {
  //   //   y: -280,
  //   //   ease: "none",
  //   //   scrollTrigger: {
  //   //     trigger: ".project-container",
  //   //     start: "top top",
  //   //     end: "bottom bottom",
  //   //     scrub: 8,
  //   //   },
  //   // });

  //   return () => {
  //     // Limpia las animaciones cuando el componente se desmonta
  //     animacion.kill();
  //     // firstProAnimation.kill();
  //     // secondProAnimation.kill();
  //     // thirdProAnimation.kill();
  //     // fourthProAnimation.kill();
  //   };
  // }, []);

  useEffect(() => {
    // Set up GSAP animations
    gsap.to(".first-pro", {
      y: positions.firstPro, //  distance of the movement for the first project
      scrollTrigger: {
        trigger: ".first-pro",
        start: "top bottom",
        end: "bottom top",
        scrub: scrubDesk,
      },
    });

    gsap.to(".second-pro", {
      y: positions.secondPro, //  distance of the movement for the second project
      scrollTrigger: {
        // ease: "3s",
        trigger: ".second-pro",
        start: "top bottom",
        end: "bottom top",
        scrub: scrubDesk,
      },
    });

    gsap.to(".third-pro", {
      y: positions.thirdPro, //  distance of the movement for the third project
      scrollTrigger: {
        trigger: ".third-pro",
        start: "top bottom",
        // end: "bottom top",
        scrub: scrubDesk,
      },
    });

    gsap.to(".fourth-pro", {
      y: positions.fourthPro, //  distance of the movement for the fourth project
      scrollTrigger: {
        trigger: ".fourth-pro",
        start: "top bottom",
        // end: "bottom top",
        scrub: scrubDesk,
      },
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Start the pinning animation when the top of the element reaches the top of the viewport
    ScrollTrigger.create({
      trigger: ".elemento-animado",
      start: "top top",
      end: "+=1200",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    // Dynamically adjust scale during scroll
    ScrollTrigger.create({
      trigger: ".elemento-animado",
      start: "top center+=400",
      end: "+=1200",
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        const scale = 0.7 + (1.8 - 0.7) * self.progress;
        gsap.set(".elemento-animado", { scale: scale });
      },
    });

    // Start the scaling animation when the user starts scrolling
    const scaleAnim = gsap.from(".elemento-animado", {
      scale: 4, // Start scale
      to: { scale: 0.8 }, // Target scale
      duration: 0, // Animation duration
      ease: "power1.out", // Easing function
    });

    return () => {
      scaleAnim.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="w-[100vw] overflow-hidden " id="">
        <div className="scroll-container ">
          <div className="elemento-animado">
            <div
              className="inside-cont"
              style={{ width: "100vw", height: "100vh" }}
            ></div>
          </div>
          <div className="scroll-content ">
            <div className="div-animado">
              <div className="project-container">
                <a href="https://demo-daewoocl.onrender.com/" target="_blank">
                  <div className="project first-pro mb-[220px] " id="pasando">
                    <div
                      className=" project-info  w-[250px] sm:w-[325px] bg-[#FFFFFF33]  
                      rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]"
                    >
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            Daewoo
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14 mr-[6px]">Design</p>
                          <p className="tags p-14">Development</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">
                          Pendiente descripción
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://cokrea.inmobiliare.com" target="_blank">
                  <div className="project second-pro" id="pasando">
                    <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33]  rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            Inmobiliare
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14 mr-[6px]">Design</p>
                          <p className="tags p-14">Development</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">
                          Redesigning the experience of the largest real estate
                          news portal in Mexico
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="div-animado" style={{ marginTop: marginTopMob }}>
              <div className="project-container">
                <a>
                  <div className="project third-pro" id="pasando">
                    <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33]  rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            redbee
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14">Development</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">Soon...</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://holamorgenstern.com" target="_blank">
                  <div className="project fourth-pro" id="pasando">
                    <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33]  rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            Morgenstern
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14 mr-[6px]">Design</p>
                          <p className="tags p-14">Development</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">
                          A creative and playful website for a creative and
                          playful illustrated project.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
