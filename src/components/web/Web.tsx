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
import { SixthWebSlideBlue } from "./SixthWebSlideBlue";

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
        onSlidePrevTransitionStart={(swiper) => {
          const nthOfCurrentSlide = swiper.activeIndex + 1;
          // console.log("swiper.activeIndex", swiper.activeIndex);

          console.log("backward");
          console.log("nthOfCurrentSlide", nthOfCurrentSlide);
          if (nthOfCurrentSlide === 6) {
            // swiper.changeDirection("horizontal");
            // swiper.disable();
            // setTimeout(() => {
            //   swiper.enable();
            //   // swiper.slideTo(nthOfCurrentSlide - 1, 800);
            // }, 850);
          }
        }}
        onSlideNextTransitionStart={(swiper) => {
          const nthOfCurrentSlide = swiper.activeIndex + 1;
          console.log("forward");
          console.log("nthOfCurrentSlide", nthOfCurrentSlide);
          // console.log("forward");
          // console.log("nthOfCurrentSlide", nthOfCurrentSlide);
          // if (nthOfCurrentSlide === 6) {

          //   swiper.disable();
          //   setTimeout(() => {
          //     swiper.changeDirection("vertical");
          //     swiper.enable();
          //     // swiper.slideTo(nthOfCurrentSlide + 1, 800);
          //   }, 10);
          // }
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          const nthOfCurrentSlide = swiper.activeIndex + 1;
          const nthOfPriviouslyVisitedSlide = swiper.previousIndex + 1;
          if (nthOfPriviouslyVisitedSlide === 5 && nthOfCurrentSlide === 6) {
            swiper.changeDirection("horizontal");
          }
          if (nthOfPriviouslyVisitedSlide === 7 && nthOfCurrentSlide === 6) {
            swiper.changeDirection("vertical");
          }
          if (nthOfPriviouslyVisitedSlide === 6 && nthOfCurrentSlide === 7) {
            swiper.changeDirection("vertical");
          }
          if (nthOfPriviouslyVisitedSlide === 8 && nthOfCurrentSlide === 7) {
            swiper.changeDirection("horizontal");
          }
          if (nthOfCurrentSlide === 8) {
            swiper.changeDirection("vertical");
          }
        }}
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
          <SixthWebSlideBlue />
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
