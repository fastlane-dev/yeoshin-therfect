import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination } from "swiper";
import { FirstWebSlide } from "./FirstWebSlide";
import { SecondWebSlide } from "./SecondWebSlide";
import { ThirdWebSlide } from "./ThirdWebSlide";
import { FourthWebSlide } from "./FourthWebSlide";
import { FifthWebSlide } from "./FifthWebSlide";
import { SixthWebSlide } from "./SixthWebSlide";
import { SeventhWebSlide } from "./SeventhWebSlide";
import { EighthWebSlide } from "./EighthWebSlide";

export function Web() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
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
          <SecondWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ThirdWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FourthWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FifthWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SixthWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SeventhWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <EighthWebSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
