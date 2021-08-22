import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./img/slide1.jpg"
import slide2 from "./img/slide2.jpg"
import slide3 from "./img/slide3.jpg"
import slide4 from "./img/slide4.jpg"


function Slidersection() {
    return (
      <div>
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}

export default Slidersection
