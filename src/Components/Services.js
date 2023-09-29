import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {
  return (
    <>
      <div className="flex mt-40 ml-36 ">
        <div className="w-1/2">
          <p className="l-desk">SERVICES</p>
          <h3 className="b1-desk">
            We unleash our creativity, embrace curiosity, connect ideas and push
            the limits of design to reach new horizons.
          </h3>
        </div>
        <div className="w-1/2 flex flex-col pl-72 justify-center ">
          <p className="sp1-desk flex mb-8 specific-div">
            DESIGN <span className="small-numb">5</span>
          </p>
          <p className="sp1-desk flex ">
            BUILD <span className="small-numb">4</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
