import React from "react";

import ntts from "../../../public/img/ntts.svg";
import Image from "next/image";

export const SixthWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute left-[50%] top-[50%] h-[13vh] w-[20vw] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[13vh] w-[20vw]">
          <Image fill src={ntts} alt="ntts" priority />
        </div>
        <p className="relative left-[-9px] text-center text-[1.3vw] font-[400] leading-[2vw]">
          {"심부열을 효과적으로 전달하는 자체\n개발한 독특한 열전달 구조³"}
        </p>
      </div>
      <div className="relative flex h-screen w-screen justify-between px-[8vw] py-[6vh]">
        <div className="items flex h-full w-[25vw] justify-between">
          <div className="flex flex-col justify-between">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
        </div>
        <div className="items flex h-full w-[25vw] justify-between">
          <div className="flex flex-col justify-between">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
            <div className="h-[6vw] w-[6vw] bg-main-orange"></div>
          </div>
        </div>
      </div>
      <div className="flex-center relative top-[-40px] w-screen text-[1.3vw] font-[400] leading-[2vw] text-[#696969]">
        ³Non-pole Therma Transmission Structures 자사에서 직접 개발한 독특한
        열전달 구조로, 효과적으로 고주파 에너지를 표피와 진피에 전달합니다.
      </div>
    </section>
  );
};
