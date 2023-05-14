import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel } from "swiper";

import { FirstMobileSlide } from "./FirstMobileSlide";
import { SecondMobileSlide } from "./SecondMobileSlide";
import { ThirdMobileSlide } from "./ThirdMobileSlide";
import { FourthMobileSlide } from "./FourthMobileSlide";
import { FifthMobileSlide } from "./FifthMobileSlide";
import { SixthMobileSlide } from "./SixthMobileSlide";
import { SeventhMobileSlide } from "./SeventhMobileSlide";
import { EighthMobileSlide } from "./EighthMobileSlide";

export const Mobile = () => {
  return (
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
        <FirstMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SecondMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <ThirdMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FourthMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FifthMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SixthMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SeventhMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <EighthMobileSlide />
      </SwiperSlide>
    </Swiper>
  );
};
