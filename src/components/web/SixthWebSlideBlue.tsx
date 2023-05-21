import React from "react";
import { InviewComponent } from "../common/InviewComponent";

export const SixthWebSlideBlue = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute  left-[50%] top-[50%] -translate-x-1/2 -translate-y-[50%]">
        <InviewComponent animationClassName={"animate-smoothUpFirst"}>
          <div className="mx-auto h-fit w-fit">
            <p className="font-futura text-[6.2vw]">ACTIVE</p>
            <p className="relative top-[-15px] mb-[1vh] text-center font-futura text-[2.1vw] font-[500]">
              온도 컨트롤
            </p>
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond"}>
          <p className="left-[-9px] text-center font-pretendard font-[400] leading-[2.5vw] sm:text-[1.6vw] md:text-[1.3vw] ">
            <p>시술 목적에 따라 피부 온도</p>
            <p>실시간으로 체크해 빈틈없이 시술</p>
          </p>
        </InviewComponent>
      </div>
      <div className="relative flex h-screen w-screen justify-between px-[8vw] py-[2vh]">
        <div className="items flex h-full w-[25vw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
          </div>
        </div>
        <div className="items flex h-full w-[25vw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
            <div className="h-[6vw] w-[6vw] bg-[#CBF9FF]"></div>
          </div>
        </div>
      </div>
      <InviewComponent
        threshold={0.4}
        animationClassName={"animate-smoothUpThird"}
      >
        <div className="flex-center relative top-[-80px] w-screen font-pretendard text-[1.3vw] font-[400] leading-[2vw] text-[#696969]">
          부드럽고 강력한 4MHz 고주파를 롱펄스 패턴으로 조사하여 통증은 줄이고,
          즉각적으로 피부 온도를 측정하여 화상의 위험을 줄였습니다.
        </div>
      </InviewComponent>
    </section>
  );
};
