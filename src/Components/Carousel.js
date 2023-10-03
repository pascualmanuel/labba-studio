import React, { useState, useEffect } from "react";

import "swiper/swiper-bundle.css"; // Import the Swiper CSS
import { Swiper, SwiperSlide } from "swiper/react";

import "../Styles/Prueba.css"; // Importa tu archivo CSS personalizado
import Cliente1 from "../Assets/clientes/cliente1.png";
import Cliente2 from "../Assets/clientes/cliente2.png";
import Cliente3 from "../Assets/clientes/cliente3.png";
import Cliente4 from "../Assets/clientes/cliente4.png";
import Cliente5 from "../Assets/clientes/cliente5.png";
import Cliente6 from "../Assets/clientes/cliente6.png";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
// import SwiperCore, { Autoplay, Pagination } from "swiper/core";

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

  // Agrega aquí tus rutas de imágenes
];

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      //   pagination={{
      //     clickable: true,
      //   }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper mt-24"
    >
      {images.map((image, index) => (
        <SwiperSlide>
          <div className="caro-inside">
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              //   width={"auto"}
              //   height={30}
              //   height={50}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
