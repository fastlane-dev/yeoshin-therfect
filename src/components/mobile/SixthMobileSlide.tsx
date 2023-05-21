import React from "react";

import ntts from "../../../public/img/ntts.svg";
import Image from "next/image";
import { InviewComponent } from "../common/InviewComponent";

export const SixthMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  return (
    <section
      className="relative flex w-screen flex-col justify-between overflow-hidden bg-black px-[47px] pt-[30px] font-pretendard font-[400] text-white"
      style={{
        paddingBottom: "calc(30px + env(safe-area-inset-bottom))",
        height: innerHeight,
      }}
    >
      <div className="absolute  left-[50%] top-[50%] h-[5.3dvh] w-[79dvw] -translate-x-1/2 -translate-y-[350%]">
        <InviewComponent
          threshold={0}
          animationClassName={"animate-smoothUpFirst"}
        >
          <div className="flex-center mb-[32px]">
            <Image width={157} height={40} src={ntts} alt="ntts" priority />
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond"}>
          <p className="relative mb-[19px] text-center font-pretendard text-[16px] font-[400] leading-[30px]">
            {"심부열을 효과적으로 전달하는 자체\n개발한 독특한 열전달 구조"}
          </p>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpThird"}>
          <p className="mshs:leading-[24px] relative font-pretendard text-[13px] font-[400] leading-[30px] text-[#696969]">
            {
              "Non-pole Therma Transmission Structures 자사에서 직접 개발한 독특한 열전달 구조로, 효과적으로 고주파 에너지를 표피와 진피에 전달합니다."
            }
          </p>
        </InviewComponent>
      </div>
      <div className="flex  flex-col gap-[34px]">
        <div className="flex justify-between">
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
        </div>
      </div>

      <div className="flex flex-col  gap-[34px]">
        <div className="flex justify-between">
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
          <div className="h-[11dvw] w-[11dvw] bg-main-orange mmd:h-[9dvw] mmd:w-[9dvw]"></div>
        </div>
      </div>
    </section>
  );
};
