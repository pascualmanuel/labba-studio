import React from "react";
import ServAccordion from "./ServAccordion";
import MButton from "./MagenticButton";
import Rounded from "../Hooks/Rounded";
import Magnetic from "../Hooks/Magnetic";
import TextAnimated from "../Hooks/AnimatedWord";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Marca1 from "../Assets/clientes/marca-1.svg";
import Marca2 from "../Assets/clientes/marca-2.svg";
import Marca3 from "../Assets/clientes/marca-3.svg";
import Marca4 from "../Assets/clientes/marca-4.svg";
import Marca5 from "../Assets/clientes/marca-5.svg";
import Marca6 from "../Assets/clientes/marca-6.svg";
import Marca7 from "../Assets/clientes/marca-7.svg";

const NewServices = () => {
  return (
    <>
      <div className="marcas flex flex-row gap-4 justify-between mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] pt-[100px] items-center">
        <ReactSVG src={Marca1} />
        <ReactSVG src={Marca2} />
        <ReactSVG src={Marca3} />
        <ReactSVG src={Marca4} />
        <ReactSVG src={Marca5} />
        <ReactSVG src={Marca6} />
        <ReactSVG src={Marca7} />
      </div>
      <section className="mx-auto px-6 sm:px-[53px] lg:px-16 max-w-[1500px] py-[200px] ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-[30px] lg:w-[50%]">
            <h3 className="text-[20px] text-[#cacaca] font-light leading-[32px]   xl:text-[24px]  md:mb-[40px]">
              We are digital essence inspired by natural behavior of lava.
            </h3>
            <h3 className="text-[20px] text-[#cacaca] font-light leading-[32px]   xl:text-[24px]  md:mb-[20px] ">
              We flow. We are powerful. We are malleable <br /> —
              <span className="font-bold text-white">
                {" "}
                shaping ideas into solid digital solutions.
              </span>
            </h3>
          </div>
          <div className="lg:w-[50%]">
            <ServAccordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewServices;
