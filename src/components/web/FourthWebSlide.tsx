import Image from "next/image";
import React from "react";

export const FourthWebSlide = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#F9F9F9] text-center font-pretendard font-[600]">
      <div className="flex-center items-start gap-[11vw]">
        <div className="flex-center-column">
          <div className="relative  mb-[50px] h-[25vh] w-[15vw]">
            <Image fill src="/img/first_nozzle.png" alt="first_nozzle" />
          </div>
          <div className="mb-[20px] text-[40px] leading-[47.73px]">
            써말아이
          </div>
          <div className="text-[26px] leading-[31.03px]">
            팔자, 눈가주름을 타이트닝
          </div>
        </div>
        <div>
          <div className="flex-center-column">
            <div className="relative mb-[50px] h-[25vh] w-[15vw]">
              <Image fill src="/img/second_nozzle.png" alt="second_nozzle" />
            </div>
            <div className="mb-[20px] text-[40px] leading-[47.73px]">
              써말 러빙
            </div>
            <div className="text-[26px] leading-[31.03px]">
              처짐, 얼굴윤곽을 자극하여 얼굴선 정리
            </div>
          </div>
        </div>
        <div>
          <div className="flex-center-column">
            <div className="relative mb-[50px] h-[25vh] w-[15vw]">
              <Image fill src="/img/third_nozzle.png" alt="third_nozzle" />
            </div>
            <div className="mb-[20px] text-[40px] leading-[47.73px]">
              써말 스탬프
            </div>
            <div className="text-[26px] leading-[31.03px]">
              강력한 고주파 에너지를 깊게
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center mt-[15vh] gap-[10vw]">
        <div className="flex-center-column">
          <div className="relative  mb-[50px] h-[15vw] w-[15vw]">
            <Image fill src="/img/fourth_nozzle.png" alt="first_nozzle" />
          </div>
          <div className="mb-[20px] text-[40px] leading-[47.73px]">
            프락셔널 64P
          </div>
          <div className="text-[26px] leading-[31.03px]">
            비교적 깊은 모공과 흉터에 시술
          </div>
        </div>
        <div className="flex-center-column">
          <div className="relative  mb-[50px] h-[15vw] w-[15vw]">
            <Image fill src="/img/fifth_nozzle.png" alt="first_nozzle" />
          </div>
          <div className="mb-[20px] text-[40px] leading-[47.73px]">
            프락셔널 100P
          </div>
          <div className="text-[26px] leading-[31.03px]">
            비교적 깊은 모공과 흉터에 시술
          </div>
        </div>
      </div>
    </div>
  );
};
