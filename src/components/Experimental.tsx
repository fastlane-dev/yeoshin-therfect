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

const Container = ({
  content,
  setOnlyNestedSwiperEnabled,
}: {
  content: any;
  setOnlyNestedSwiperEnabled?: any;
}) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  // setOnlyNestedSwiperEnabled(false);
  useEffect(() => {
    if (swiperSlide.isActive && content === 1) {
      console.log("content");
    }
  }, [content]);

  return <div>{content}</div>;
};

export function Experimental() {
  const [onlyNestedSwiperEnabled, setOnlyNestedSwiperEnabled] = useState(true);

  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        direction={"vertical"}
        mousewheel={true}
        modules={[Mousewheel]}
        enabled={true}
      >
        <SwiperSlide>
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            mousewheel={true}
            modules={[Mousewheel]}
            enabled={true}
          >
            <SwiperSlide>
              <Container
                content={1}
                setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Container
                content={2}
                setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Container
                content={3}
                setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Container
                content={4}
                setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Container
                content={5}
                setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
              />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Container
            content={"가"}
            setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Container
            content={"나"}
            setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Container
            content={"다"}
            setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Container
            content={"라"}
            setOnlyNestedSwiperEnabled={setOnlyNestedSwiperEnabled}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
