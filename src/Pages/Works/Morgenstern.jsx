import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MorgensternImg from "../../Assets/work/work-1.webp";
import Work1 from "../../Assets/work/work-1.webp";
import Work2 from "../../Assets/work/work-2.webp";
import Work3 from "../../Assets/work/work-3.webp";
import Work4 from "../../Assets/work/work-4.webp";
import Work5 from "../../Assets/work/work-5.webp";
import Work6 from "../../Assets/work/work-6.webp";
import BgMorg from "../../Assets/work/Morgenstern/bg-morg.png";
import Video1 from "../../Assets/work/Morgenstern/Home1.mp4";
import Video2 from "../../Assets/work/Morgenstern/About2.mp4";
import Video3 from "../../Assets/work/Morgenstern/Comunidad3.mp4";
import NewWork from "../../Components/NewWork";
const Morgenstern = () => {
  let isDesktop = window.innerWidth > 1024;
  useEffect(() => {
    document.title = "Morgenstern - Labba Studio";
  }, []);
  return (
    <>
      <div
        className="h-[590px] w-[100vw] bg-cover bg-center mt-[-77px] md:mt-[-8rem]"
        style={{ backgroundImage: `url(${MorgensternImg})` }}
      ></div>
      <h2 className="work-title py-20 hidden md:block px-6 max-w-[1200px] center">
        Morgenstern
      </h2>
      <div className="max-w-[500px] sm:max-w-[768px] center px-4 sm:px-6">
        <h2 className="work-title mt-8 mb-12 md:hidden">Morgenstern</h2>
        <p className="work-p">
          We designed a digital space for a transmedia project that blends
          various artistic mediums, including drawing, animation, sound, text,
          and interactive games. This project serves as an artistic essay that
          explores how we connect with others, the world, and the flow of
          information.
        </p>{" "}
        <p className="work-p mt-8">
          We created a visually dynamic and interactive website that allows
          users to engage with the character Morgenstern in different forms. The
          design was centered around immersing the audience in a fluid
          narrative, where Morgenstern evolves and takes on different shapes to
          address contemporary issues.
        </p>
        <div className="mt-8 ssm:flex ssm:flex-row ssm:justify-between">
          <div className="w-[] ">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">Service</p>
            <p className=" text-lg sm:text-2xl ">UX/UI Design </p>
            <p className=" text-lg sm:text-2xl ">Development</p>
            <p className=" text-lg sm:text-2xl ">SEO</p>
          </div>
          <div className="hidden ssm:block">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
            <p className=" text-lg sm:text-2xl ">2023 </p>
          </div>
          <div className="hidden ssm:block">
            <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
            <p className=" text-lg sm:text-2xl ">website</p>
          </div>

          <div className="flex justify-between mt-8 ssm:hidden">
            <div>
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">year</p>
              <p className=" text-lg sm:text-2xl ">2023 </p>
            </div>
            <div className="mr-14">
              <p className="l-desk text-[#b5b5b5] uppercase mb-4">link</p>
              <p className=" text-lg sm:text-2xl ">website</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:h-[590px] w-[100vw] bg-cover bg-center mt-28 md:mt-40 flex justify-center"
        style={{ backgroundImage: `url(${BgMorg})` }}
      >
        <div className="w-full max-w-[1060px] p-4 sm:p-6">
          <div className="w-full md:h-full rounded-[8px] overflow-hidden">
            <video
              src={Video1}
              muted
              autoPlay
              loop
              playsInline
              className="w-full md:h-full"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[500px] sm:max-w-[768px] center py-20 px-4 sm:px-6">
        <p className="work-p">
          The site integrated multimedia elements, making the user experience
          both reflective and engaging. Animation, soundscapes, and interactive
          components were seamlessly woven into the storytelling, creating a
          unique and thought-provoking digital environment.
        </p>
      </div>
      <div className="sm:h-[590px] w-[100vw] bg-cover bg-center  flex justify-center">
        <div className="w-full max-w-[1060px] p-4 sm:p-6">
          <div
            className="w-full sm:h-full rounded-[8px] overflow-hidden"
            style={{ border: "solid black 1px" }}
          >
            <video
              src={Video3}
              muted
              autoPlay
              loop
              playsInline
              className="w-full sm:h-full"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="sm:h-[590px] w-[100vw] bg-cover bg-center mt-1 sm:mt-10 flex justify-center">
        <div className="w-full max-w-[1060px] p-4 sm:p-6">
          <div
            className="sm:w-full h-full rounded-[8px] overflow-hidden"
            style={{ border: "solid black 1px" }}
          >
            <video
              src={Video2}
              muted
              autoPlay
              loop
              playsInline
              className="w-full sm:h-full"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {!isDesktop && (
        <p className=" text-xl font-light b-4 pl-6 pb-5 pt-20 text-[#b5b5b5]">
          Other work
        </p>
      )}

      {isDesktop && (
        <span
          className="vertical-text text-xl font-light text-[#b5b5b5]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            position: "sticky",
            top: "250px",
            left: "60px",
            zIndex: "10",
          }}
        >
          Other work
        </span>
      )}

      <section className="works-section relative  mx-auto px-6 sm:px-[53px] lg:px-[150px] max-w-[1500px] flex flex-col-reverse  ">
        <Link
          to="https://holamorgenstern.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="work-item relative mb-2 cursor-none sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px] mt-6  "
            style={{ backgroundImage: `url(${Work6})` }}
            id="pasando"
          >
            <div className="project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
              <div className="flex flex-row justify-between">
                <div>
                  <p
                    className="l-desk text-[#ECECEC]"
                    style={{ fontWeight: 500 }}
                  >
                    Manno
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="tags p-12 mr-[6px]">Design</p>
                  <p className="tags p-12">Development</p>
                </div>
              </div>
              <div className="mt-[10px]">
                <p className="b4-desk text-[#ECECEC]">
                  A trusted community app that connects people who need to
                  outsource tasks and find local services, with people looking
                  to earn money and ready to work.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* Segunda fila de trabajos - Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-[24px]">
          <Link
            to="https://inmobiliare.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
              style={{ backgroundImage: `url(${Work2})` }}
              id="pasando"
            >
              <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                {" "}
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
                    <p className="tags p-12 mr-[6px]">Design</p>
                    <p className="tags p-12">Development</p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="b4-desk text-[#ECECEC]">
                    Redesigning the experience of the largest real estate news
                    portal in Mexico
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="https://ephimero.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
              style={{ backgroundImage: `url(${Work3})` }}
              id="pasando"
            >
              <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                <div className="flex flex-row justify-between">
                  <div>
                    <p
                      className="l-desk text-[#ECECEC]"
                      style={{ fontWeight: 500 }}
                    >
                      Ephimero
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="tags p-12 mr-[6px]">Design</p>
                    <p className="tags p-12">Development</p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="b4-desk text-[#ECECEC]">
                    Candles ecommerce with ethics & aesthetics
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Morgenstern;
