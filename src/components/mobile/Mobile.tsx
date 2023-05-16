import React, { useEffect, useState } from "react";

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
import { NinethMobileSlide } from "./NinethMobileSlide";

const Mobile = () => {
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
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
      height={innerHeight}
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
      <SwiperSlide>
        <NinethMobileSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default Mobile;
