import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Works() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger for scaling the animated element
    ScrollTrigger.create({
      trigger: ".elemento-animado",
      start: "top top",
      end: "+=1700",
      pin: true,
      pinSpacing: true,
      scrub: true,
      // markers: true,
    });

    // ScrollTrigger for updating scale based on scroll position
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

    // Animation for floating projects
    const floatingProjects = gsap.utils.toArray(".floating-project");
    floatingProjects.forEach((project, index) => {
      gsap.to(project, {
        y: index % 2 === 0 ? "+=40" : "-=40", // Move up or down alternatively
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        scrub: 2.5,
        delay: index * 0.2, // Delay each project animation slightly
      });
    });

    return () => {
      // Clean up animations
      floatingProjects.forEach((project) => {
        gsap.killTweensOf(project);
      });
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
              style={{ width: "100vw", height: "120vh" }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="absolute projects-container"
        style={{ marginTop: "-280vh", width: "100vw" }}
      >
        {!isMobile && (
          <>
            <a href="https://demo-daewoocl.onrender.com/" target="_blank">
              <div
                className="floating-project project first-pro absolute cursor-none"
                id="pasando"
                style={{
                  position: "absolute",
                  borderRadius: "10px",
                  // left: "10%",
                  zIndex: "1000",
                }}
              >
                <div
                  className=" project-info  w-[250px] sm:w-[325px] bg-[#FFFFFF33]  
                      rounded-[12px] absolute top-[25px] left-[30px] blur-bg h-[135px]"
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
                      Elevating Daewoo’s digital presence with a sophisticated
                      redesign, enhancing product exploration and brand appeal.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://inmobiliare.com/" target="_blank">
              <div
                className="floating-project project second-pro absolute cursor-none"
                id="pasando"
                style={{
                  position: "absolute",
                  borderRadius: "10px",

                  zIndex: "1000",
                }}
              >
                <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33]  rounded-[12px] absolute top-[25px] left-[30px] blur-bg h-[135px]">
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
                      Redesigning and engineering the user experience for
                      Mexico’s premier real estate news portal.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* <a href="https://demo-daewoocl.onrender.com/" target="_blank"> */}
            <div
              className="floating-project project third-pro absolute cursor-none"
              id=""
              style={{
                position: "absolute",
                borderRadius: "10px",
                // left: "10%",
                zIndex: "1000",
                top: "750px",
              }}
            >
              <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33]  rounded-[12px] absolute top-[25px] left-[30px] blur-bg h-[135px]">
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
                    {/* <p className="tags p-14 mr-[6px]">Design</p> */}
                    <p className="tags p-14">Development</p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="b4-desk text-[#ECECEC]">
                    Expertly crafted code to power redbee.io's institutional
                    site, enhancing functionality and user experience.
                  </p>
                </div>
              </div>
            </div>
            {/* </a> */}
            <a href="https://holamorgenstern.com/" target="_blank">
              <div
                className="floating-project project fourth-pro absolute cursor-none"
                id="pasando"
                style={{
                  position: "absolute",
                  borderRadius: "10px",
                  // right: "10%",
                  zIndex: "1000",
                  top: "750px",
                }}
              >
                <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33]  rounded-[12px] absolute top-[25px] left-[30px] blur-bg h-[135px]">
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
                      A creative and playful website for a creative and playful
                      illustrated project.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </>
        )}

        {isMobile && (
          <>
            <div className="flex flex-col items-center justify-items-center">
              <div
                className="floating-project first-pro "
                style={{
                  // position: "absolute",
                  borderRadius: "10px",

                  zIndex: "1000",
                }}
              ></div>

              <div
                className="floating-project second-pro "
                style={{
                  // position: "absolute",
                  borderRadius: "10px",

                  zIndex: "1000",
                }}
              ></div>

              <div
                className="floating-project third-pro "
                style={{
                  // position: "absolute",
                  borderRadius: "10px",

                  zIndex: "1000",
                  top: "750px",
                }}
              ></div>

              <div
                className="floating-project fourth-pro "
                style={{
                  // position: "absolute",
                  borderRadius: "10px",
                  // right: "10%",
                  zIndex: "1000",
                  top: "750px",
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Works;
