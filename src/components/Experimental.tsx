import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
// import required modules
import {
  FreeMode,
  Mousewheel,
  Pagination,
  Scrollbar,
  Controller,
} from "swiper";

const Container = ({ content }: { content: any }) => {
  return <div>{content}</div>;
};

export function Experimental() {
  const [swiperRef, setSwiperRef] = useState<any>();
  const [prevOuterNthSlide, setPrevOuterNthSlide] = useState(0);
  const [prvInnerNthSlide, setPrevInnerNthSlide] = useState(0);
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        className="mySwiper"
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
        modules={[Mousewheel]}
        // onTransitionEnd={(swiper)=>{
        //   const nthOfCurrentSlide = swiper.activeIndex + 1;
        //   const nthOfPriviouslyVisitedSlide = swiper.previousIndex + 1;
        // }}
        onTransitionEnd={(swiper) => {
          // console.log("swiper.activeIndex", swiper.activeIndex);
          const nthOfCurrentSlide = swiper.activeIndex + 1;
          const nthOfPriviouslyVisitedSlide = swiper.previousIndex + 1;
          setPrevOuterNthSlide(nthOfCurrentSlide);
          console.log("outer nthOfCurrentSlide", nthOfCurrentSlide);
          console.log("state outerNthSlide", prevOuterNthSlide);
          if (nthOfCurrentSlide == 3) {
            swiperRef.disable();
            // swiper.dis
          }
        }}
      >
        <SwiperSlide>
          <Container content={"가"} />
        </SwiperSlide>
        <SwiperSlide>
          <Container content={"나"} />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            mousewheel={true}
            modules={[Mousewheel]}
            // onTransitionEnd={(swiper)=>{
            //   const nthOfCurrentSlide = swiper.activeIndex + 1;
            //   const nthOfPriviouslyVisitedSlide = swiper.previousIndex + 1;
            // }}
            onBeforeTransitionStart={(swiper) => {
              console.log("trnasition start swiper", swiper.activeIndex);
            }}
            onTransitionEnd={(swiper) => {
              const nthOfCurrentSlide = swiper.activeIndex + 1;
              const nthOfPriviouslyVisitedSlide = swiper.previousIndex + 1;
              setPrevInnerNthSlide(nthOfCurrentSlide);
              console.log("inner nthOfCurrentSlide", nthOfCurrentSlide);
              console.log("state innerNthSlide", prvInnerNthSlide);
              // if()
              if (nthOfCurrentSlide == 5) {
                swiperRef.enable();
                // swiper.dis
              }
            }}
            // enabled={true}
          >
            <SwiperSlide>
              <Container content={1} />
            </SwiperSlide>
            <SwiperSlide>
              <Container content={2} />
            </SwiperSlide>
            <SwiperSlide>
              <Container content={3} />
            </SwiperSlide>
            <SwiperSlide>
              <Container content={4} />
            </SwiperSlide>
            <SwiperSlide>
              <Container content={5} />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Container content={"다"} />
        </SwiperSlide>
        <SwiperSlide>
          <Container content={"라"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
