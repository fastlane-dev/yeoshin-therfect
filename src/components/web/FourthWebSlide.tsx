import Image from "next/image";
import React from "react";

export const FourthWebSlide = () => {
  return (
    <div className="flex-center relative h-screen w-screen overflow-hidden bg-[#F9F9F9] text-center font-pretendard font-[600]">
      <div className="flex h-[74vh] w-[62vw] flex-col justify-between">
        <div className="flex-center items-start gap-[11vw]">
          <div className="flex-center-column">
            <div className="relative  mb-[50px] h-[21vh] w-[13vw]">
              <Image
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                priority
                src="/img/first_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <div className="mb-[20px] text-[1.5vw] leading-[3.2vh]">
              써말아이
            </div>
            <div className="text-[1vw] leading-[2.3vh]">
              팔자, 눈가주름을 타이트닝
            </div>
          </div>
          <div>
            <div className="flex-center-column">
              <div className="relative mb-[50px] h-[21vh] w-[12vw]">
                <Image
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  fill
                  priority
                  src="/img/second_nozzle.png"
                  alt="second_nozzle"
                />
              </div>
              <div className="mb-[20px] text-[1.5vw] leading-[3.2vh]">
                써말 러빙
              </div>
              <div className="text-[0.99vw] leading-[2.3vh]">
                처짐, 얼굴윤곽을 자극하여 얼굴선 정리
              </div>
            </div>
          </div>
          <div>
            <div className="flex-center-column">
              <div className="relative mb-[50px] h-[21vh] w-[12vw]">
                <Image
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  fill
                  priority
                  src="/img/third_nozzle.png"
                  alt="third_nozzle"
                />
              </div>
              <div className="mb-[20px] text-[1.5vw] leading-[3.2vh]">
                써말 스탬프
              </div>
              <div className="text-[1vw] leading-[2.3vh]">
                강력한 고주파 에너지를 깊게
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex-center-column">
            <div className="relative  mb-[50px] h-[21vh] w-[12vw]">
              <Image
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                priority
                src="/img/fourth_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <div className="mb-[20px] text-[1.5vw] leading-[3.2vh]">
              프락셔널 64P
            </div>
            <div className="text-[1vw] leading-[2.3vh]">
              비교적 깊은 모공과 흉터에 시술
            </div>
          </div>
          <div className="flex-center-column">
            <div className="relative  mb-[50px] h-[21vh] w-[12vw]">
              <Image
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                priority
                src="/img/fifth_nozzle.png"
                alt="first_nozzle"
              />
            </div>
            <div className="mb-[20px] text-[1.5vw] leading-[3.2vh]">
              프락셔널 100P
            </div>
            <div className="text-[1vw] leading-[2.3vh]">
              비교적 깊은 모공과 흉터에 시술
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
