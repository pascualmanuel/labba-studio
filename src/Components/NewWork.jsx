import React from "react";

import Work1 from "../Assets/work/Hyundai/hyundai-site.webp";
import Work2 from "../Assets/work/Flora/flora-app.webp";
import Work3 from "../Assets/work/Dbs/dbs-site.webp";
import Work4 from "../Assets/work/Scouting/scounting-site.webp";

import PlusIcon from "../Assets/icons/PlusIcon.svg";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import MagneticButton from "./MagenticButton";
import { Link } from "react-router-dom";
const Works = () => {
  const [showMoreWorks, setShowMoreWorks] = useState(false);
  const [test, setTest] = useState("auto");

  let isDesktop = window.innerWidth > 1024;
  const handleShowMoreWorks = () => {
    setShowMoreWorks(true);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <>
      <div>
        <section className="works-section relative  mx-auto px-6 sm:px-[53px]  lg:px-16 max-w-[1900px] ">
          {/* Segunda fila de trabajos - Dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-[24px] mb-3">
            <Link to="/works/inmobiliare" rel="noopener noreferrer">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work1})` }}
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
                        Scouting Labs
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 mr-[6px]">Website</p>
                      <p className="tags p-12">AI</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      Connecting amateur sports passion with analysis
                      technology, empowering player development and visibility
                      in the sports world.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/works/ephimero">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work2})` }}
                id="pasando"
              >
                <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p
                        className="l-desk text-[#ECECEC]"
                        style={{ fontWeight: 500 }}
                      >
                        Flora Plus
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 mr-[6px]">Digital product</p>
                      <p className="tags p-12">AI</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      Offering a powerful tool to manage experiences, streamline
                      operations, and enhance the journey for both providers and
                      travelers.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* col 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-[24px]">
            <Link to="/works/inmobiliare" rel="noopener noreferrer">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work3})` }}
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
                        Hyundai
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 mr-[6px]">Website</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      Showcasing models, promotions, and services while
                      improving user experience and digital presence of Hyundai
                      Costa Rica.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/works/ephimero">
              <div
                className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${Work4})` }}
                id="pasando"
              >
                <div className="project-info w-[359px] md:w-[300px] mg:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p
                        className="l-desk text-[#ECECEC]"
                        style={{ fontWeight: 500 }}
                      >
                        De Blas Serrano
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="tags p-12 ">Ecommerce</p>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">
                      Elegant and functional ecommerce for a winery in Spain,
                      enhancing the shopping experience and reflecting the
                      premium character of its products.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Tercer trabajo - Full width */}

        <div className="flex justify-center mt-10 mb-20">
          <div className=" w-[147px] h-[48px]">
            <MagneticButton
              text={
                <span className="flex flex-row items-center font-medium text-base">
                  View all work
                </span>
              }
              link=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
