import React from "react";
import ServAccordion from "./ServAccordion";
import MButton from "./MagenticButton";
import Rounded from "../Hooks/Rounded";
import Magnetic from "../Hooks/Magnetic";
import TextAnimated from "../Hooks/AnimatedWord";
import { Link } from "react-router-dom";
const NewServices = () => {
  return (
    <>
      <section className="mx-auto px-6 sm:px-[53px] lg:px-[150px] max-w-[1500px]">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-[30px] lg:w-[50%]">
            <h2 className="l-desk uppercase">Services</h2>
            <h3 className="text-[30px] font-light leading-10 lg:text-[37px]  xl:text-[45px] lg:leading-[61px] md:mb-[20px]">
              We love what we do
            </h3>
            <Link to={"/contact"}>
              <Magnetic>
                <div className="mt-2 bg-[#D42374] text-white w-[108px] h-[38px] text-[16px] font-normal sm:w-[162px] sm:h-[59px] rounded-[12px] flex items-center justify-center sm:font-medium sm:text-[20px]">
                  Contact Us
                </div>
              </Magnetic>
            </Link>
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
