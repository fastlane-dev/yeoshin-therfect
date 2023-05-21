import Image from "next/image";
import React from "react";
import { InviewComponent } from "../common/InviewComponent";

export const FourthWebSlide = () => {
  return (
    <div className="flex-center relative h-screen w-screen overflow-hidden bg-[#F9F9F9] text-center font-pretendard font-[600]">
      <div className="flex h-[74dvh] w-[62dvw] flex-col justify-between">
        <div className="flex-center items-start gap-[11dvw]">
          <div className="flex-center-column">
            <div className="relative mb-[10px] h-[21dvh] w-[17dvw] lg:w-[13dvw] xlg:mb-[40px]">
              <Image
                className="object-contain"
                sizes="(max-width: 768px) 100dvw,
              (max-width: 1200px) 50dvw,
              33dvw"
                fill
                priority
                src="/img/first_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <InviewComponent animationClassName="animate-smoothUpSecond">
              <div className="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw]">
                써말아이
              </div>
            </InviewComponent>
            <InviewComponent animationClassName={"animate-smoothUpThird"}>
              <div className="text-[1.4dvw] lg:text-[1dvw]">
                팔자, 눈가주름을 타이트닝
              </div>
            </InviewComponent>
          </div>
          <div>
            <div className="flex-center-column">
              <div className="relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px]">
                <Image
                  className="object-contain"
                  sizes="(max-width: 768px) 100dvw,
              (max-width: 1200px) 50dvw,
              33dvw"
                  fill
                  priority
                  src="/img/second_nozzle.png"
                  alt="second_nozzle"
                />
              </div>
              <InviewComponent animationClassName={"animate-smoothUpSecond"}>
                <div className="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw]">
                  써말 러빙
                </div>
              </InviewComponent>
              <InviewComponent animationClassName={"animate-smoothUpThird"}>
                <div className="text-[1.5dvw] lg:text-[0.99dvw]">
                  처짐, 얼굴윤곽을 자극하여 얼굴선 정리
                </div>
              </InviewComponent>
            </div>
          </div>
          <div>
            <div className="flex-center-column">
              <div className="relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px]">
                <Image
                  className="object-contain"
                  sizes="(max-width: 768px) 100dvw,
              (max-width: 1200px) 50dvw,
              33dvw"
                  fill
                  priority
                  src="/img/third_nozzle.png"
                  alt="third_nozzle"
                />
              </div>
              <InviewComponent animationClassName={"animate-smoothUpSecond"}>
                <div className="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw]">
                  써말 스탬프
                </div>
              </InviewComponent>
              <InviewComponent animationClassName={"animate-smoothUpThird"}>
                <div className="text-[1.4dvw] lg:text-[1dvw]">
                  강력한 고주파 에너지를 깊게
                </div>
              </InviewComponent>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex-center-column">
            <div className="relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px]">
              <Image
                className="object-contain"
                sizes="(max-width: 768px) 100dvw,
              (max-width: 1200px) 50dvw,
              33dvw"
                fill
                priority
                src="/img/fourth_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <InviewComponent animationClassName={"animate-smoothUpSecond"}>
              <div className="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw]">
                프락셔널 64P
              </div>
            </InviewComponent>
            <InviewComponent animationClassName={"animate-smoothUpThird"}>
              <div className="text-[1.4dvw] lg:text-[1dvw]">
                비교적 깊은 모공과 흉터에 시술
              </div>
            </InviewComponent>
          </div>
          <div className="flex-center-column">
            <div className="relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px]">
              <Image
                className="object-contain"
                sizes="(max-width: 768px) 100dvw,
              (max-width: 1200px) 50dvw,
              33dvw"
                fill
                priority
                src="/img/fifth_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <InviewComponent animationClassName={"animate-smoothUpSecond"}>
              <div className="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw]">
                프락셔널 100P
              </div>
            </InviewComponent>
            <InviewComponent animationClassName={"animate-smoothUpThird"}>
              <div className="text-[1.4dvw] lg:text-[1dvw]">
                비교적 깊은 모공과 흉터에 시술
              </div>
            </InviewComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
