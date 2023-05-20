import Image from "next/image";
import React from "react";
import { InviewComponent } from "../common/InviewComponent";

export const FourthWebSlide = () => {
  return (
    <div className="flex-center relative h-screen w-screen overflow-hidden bg-[#F9F9F9] text-center font-pretendard font-[600]">
      <div className="flex h-[74vh] w-[62vw] flex-col justify-between">
        <div className="flex-center items-start gap-[11vw]">
          <div className="flex-center-column">
            <div className="relative mb-[10px] h-[21vh] w-[17vw] lg:w-[13vw] xlg:mb-[40px]">
              <Image
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                priority
                src="/img/first_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <InviewComponent animationClassName="animate-smoothUpSecond">
              <div className="mb-[12px] text-[2.5vw] lg:text-[1.5vw]">
                써말아이
              </div>
            </InviewComponent>
            <InviewComponent animationClassName={"animate-smoothUpThird"}>
              <div className="text-[1.4vw] lg:text-[1vw]">
                팔자, 눈가주름을 타이트닝
              </div>
            </InviewComponent>
          </div>
          <div>
            <div className="flex-center-column">
              <div className="relative mb-[10px] h-[21vh] w-[16vw] lg:w-[12vw] xlg:mb-[40px]">
                <Image
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  fill
                  priority
                  src="/img/second_nozzle.png"
                  alt="second_nozzle"
                />
              </div>
              <InviewComponent animationClassName={"animate-smoothUpSecond"}>
                <div className="mb-[12px] text-[2.5vw] lg:text-[1.5vw]">
                  써말 러빙
                </div>
              </InviewComponent>
              <InviewComponent animationClassName={"animate-smoothUpThird"}>
                <div className="text-[1.5vw] lg:text-[0.99vw]">
                  처짐, 얼굴윤곽을 자극하여 얼굴선 정리
                </div>
              </InviewComponent>
            </div>
          </div>
          <div>
            <div className="flex-center-column">
              <div className="relative mb-[10px] h-[21vh] w-[16vw] lg:w-[12vw] xlg:mb-[40px]">
                <Image
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  fill
                  priority
                  src="/img/third_nozzle.png"
                  alt="third_nozzle"
                />
              </div>
              <InviewComponent animationClassName={"animate-smoothUpSecond"}>
                <div className="mb-[12px] text-[2.5vw] lg:text-[1.5vw]">
                  써말 스탬프
                </div>
              </InviewComponent>
              <InviewComponent animationClassName={"animate-smoothUpThird"}>
                <div className="text-[1.4vw] lg:text-[1vw]">
                  강력한 고주파 에너지를 깊게
                </div>
              </InviewComponent>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex-center-column">
            <div className="relative mb-[10px] h-[21vh] w-[16vw] lg:w-[12vw] xlg:mb-[40px]">
              <Image
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                priority
                src="/img/fourth_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <InviewComponent animationClassName={"animate-smoothUpSecond"}>
              <div className="mb-[12px] text-[2.5vw] lg:text-[1.5vw]">
                프락셔널 64P
              </div>
            </InviewComponent>
            <InviewComponent animationClassName={"animate-smoothUpThird"}>
              <div className="text-[1.4vw] lg:text-[1vw]">
                비교적 깊은 모공과 흉터에 시술
              </div>
            </InviewComponent>
          </div>
          <div className="flex-center-column">
            <div className="relative mb-[10px] h-[21vh] w-[16vw] lg:w-[12vw] xlg:mb-[40px]">
              <Image
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                priority
                src="/img/fifth_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <InviewComponent animationClassName={"animate-smoothUpSecond"}>
              <div className="mb-[12px] text-[2.5vw] lg:text-[1.5vw]">
                프락셔널 100P
              </div>
            </InviewComponent>
            <InviewComponent animationClassName={"animate-smoothUpThird"}>
              <div className="text-[1.4vw] lg:text-[1vw]">
                비교적 깊은 모공과 흉터에 시술
              </div>
            </InviewComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
