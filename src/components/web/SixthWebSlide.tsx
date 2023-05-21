import React from "react";

import ntts from "../../../public/img/ntts.svg";
import Image from "next/image";
import { InviewComponent } from "../common/InviewComponent";

export const SixthWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute  left-[50%] top-[50%] h-fit w-fit -translate-x-1/2 -translate-y-[80%]">
        <InviewComponent animationClassName={"animate-smoothUpFirst"}>
          <div className="relative mx-auto h-[13vh] sm:w-[29vw] md:w-[20vw]">
            <Image fill src={ntts} alt="ntts" priority />
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond"}>
          <p className="relative left-[-9px] text-center font-pretendard font-[400] sm:text-[2vw] sm:leading-[4vw] md:text-[1.3vw] md:leading-[2vw]">
            {"심부열을 효과적으로 전달하는 자체\n개발한 독특한 열전달 구조"}
          </p>
        </InviewComponent>
      </div>
      <div className="relative flex h-screen w-screen justify-between px-[8vw] py-[2vh]">
        <div className="items flex h-full w-[25vw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
        </div>
        <div className="items flex h-full w-[25vw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
        </div>
      </div>
      <InviewComponent animationClassName={"animate-smoothUpThird"}>
        <div className="flex-center relative top-[-80px] w-screen font-pretendard text-[1.3vw] font-[400] leading-[2vw] text-[#696969]">
          Non-pole Therma Transmission Structures 자사에서 직접 개발한 독특한
          열전달 구조로, 효과적으로 고주파 에너지를 표피와 진피에 전달합니다.
        </div>
      </InviewComponent>
    </section>
  );
};
