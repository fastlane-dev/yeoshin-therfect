import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Mousewheel, Scrollbar } from "swiper";

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
  const [scrollSectionHeight, setScrollSectionHeight] = useState(0);

  useEffect(() => {
    const viewWidth = window.innerHeight;
    if (viewWidth <= 500) {
      setScrollSectionHeight(800);
    } else if (viewWidth > 500 && viewWidth <= 600) {
      setScrollSectionHeight(1000);
    } else if (viewWidth > 600 && viewWidth <= 700) {
      setScrollSectionHeight(1200);
    } else if (viewWidth > 700 && viewWidth <= 800) {
      setScrollSectionHeight(1400);
    } else if (viewWidth > 800 && viewWidth <= 900) {
      setScrollSectionHeight(1600);
    } else if (viewWidth > 900) {
      setScrollSectionHeight(1800);
    }
    window.addEventListener("resize", () => {
      const viewHeight = window.innerHeight;
      if (viewHeight <= 500) {
        setScrollSectionHeight(800);
      } else if (viewHeight > 500 && viewHeight <= 600) {
        setScrollSectionHeight(1000);
      } else if (viewHeight > 600 && viewHeight <= 700) {
        setScrollSectionHeight(1200);
      } else if (viewHeight > 700 && viewHeight <= 800) {
        setScrollSectionHeight(1400);
      } else if (viewHeight > 800 && viewHeight <= 900) {
        setScrollSectionHeight(1600);
      } else if (viewHeight > 900) {
        setScrollSectionHeight(1800);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        const viewHeight = window.innerHeight;
        if (viewHeight <= 500) {
          setScrollSectionHeight(800);
        } else if (viewHeight > 500 && viewHeight <= 600) {
          setScrollSectionHeight(1000);
        } else if (viewHeight > 600 && viewHeight <= 700) {
          setScrollSectionHeight(1200);
        } else if (viewHeight > 700 && viewHeight <= 800) {
          setScrollSectionHeight(1400);
        } else if (viewHeight > 800 && viewHeight <= 900) {
          setScrollSectionHeight(1600);
        } else if (viewHeight > 900) {
          setScrollSectionHeight(1800);
        }
      });
    };
  }, [window.innerWidth]);
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
        <FirstMobileSlide innerHeight={innerHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <SecondMobileSlide innerHeight={innerHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <Swiper
          className="bg-[#F9F9F9]"
          direction={"vertical"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar]}
          height={innerHeight + 100}
        >
          <SwiperSlide className="flex-center">
            <ThirdMobileSlide innerHeight={innerHeight} />
          </SwiperSlide>
          <SwiperSlide className="flex-center bg-[#F9F9F9]">
            <FourthMobileSlide innerHeight={innerHeight} />
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <FifthMobileSlide innerHeight={innerHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <SixthMobileSlide innerHeight={innerHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <SeventhMobileSlide innerHeight={innerHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <EighthMobileSlide innerHeight={innerHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <NinethMobileSlide innerHeight={innerHeight} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Mobile;
