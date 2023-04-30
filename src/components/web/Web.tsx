import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination } from "swiper";
import { FirstWebSlide } from "./FirstWebSlide";

export function Web() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
        speed={800}
      >
        <SwiperSlide>
          <FirstWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
