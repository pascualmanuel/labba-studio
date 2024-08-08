import React, { useState, useEffect } from "react";

import "swiper/swiper-bundle.css"; // Import the Swiper CSS
import { Swiper, SwiperSlide } from "swiper/react";

import "../Styles/Prueba.css"; // Importa tu archivo CSS personalizado
import Cliente1 from "../Assets/clientes/carousel-1.png";
import Cliente2 from "../Assets/clientes/carousel-2.png";
import Cliente3 from "../Assets/clientes/carousel-3.png";
import Cliente4 from "../Assets/clientes/carousel-4.png";
import Cliente5 from "../Assets/clientes/carousel-5.png";
import Cliente6 from "../Assets/clientes/carousel-6.png";
import Cliente7 from "../Assets/clientes/carousel-7.png";
import Cliente9 from "../Assets/clientes/carousel-8.png";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const images = [
  Cliente1,
  Cliente2,
  Cliente3,
  Cliente4,
  Cliente5,
  Cliente6,
  Cliente2,
  Cliente3,
  Cliente4,
  Cliente5,
  Cliente6,
  Cliente7,
  Cliente9,
];
const isMobile = window.innerWidth <= 768; // Adjust the width as needed

let slides = 6;
if (isMobile) {
  slides = 3;
}
const Carousel = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={slides}
          spaceBetween={20}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-24"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="caro-inside ">
                <img key={index} src={image} alt={`Slide ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="left-blur"></div>

        <div className="right-blur"></div>
      </div>
    </>
  );
};

export default Carousel;
