import Image from "next/image";
import React from "react";

import bigNozzle from "../../../public/img/big_nozzle.png";
import { InView } from "react-intersection-observer";

export const ThirdWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-[#F9F9F9]">
      <div className="flex justify-between">
        <div className="self-start pl-[8.3vw] pt-[15vh]">
          <div className="mb-[110px] flex items-center justify-start gap-[20px]">
            <p className="font-sans text-[30px] font-[400] leading-[40px]">
              Catridge
            </p>

            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className="mt-[8px] flex h-[34px] w-full items-center "
                >
                  <div className="relative h-[18px] w-[31px]">
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearFirst" : ""
                      }  bottom-0 left-0 inline-block h-[5px] w-[5px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearSecond" : ""
                      }  left-[9px] top-[4px] inline-block h-[6.3px] w-[6.3px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearThird" : ""
                      }  right-0 top-0 inline-block h-[9.5px] w-[9.5px] rounded-full bg-black opacity-0`}
                    ></span>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref}>
                <div
                  className={`${
                    inView ? "animate-smoothUpFirst" : ""
                  } opacity-0`}
                >
                  <p className="mb-[36px] font-pretendard text-[4vw] leading-[8.7vh]">
                    {"5가지 팁,\n3가지 시술방법"}
                  </p>
                </div>
                <p
                  className={`font-pretendard text-[1.3vw] font-[300] leading-[4.5vh] sm:text-[1.5vw] sm:leading-[3vh] md:leading-[3.5vh] lg:leading-[4.5vh] xlg:leading-[5vh] ${
                    inView ? "animate-smoothUpSecond" : ""
                  } opacity-0`}
                >
                  {
                    "목적에 따라 원하는 팁과 시술방법 선택할 수 있습니다.\n부위와 목적에 따라 5가지 팁을 제공하며, 스템프 방식,\n러빙 방식, 프락셔널 방식 총 3가지 방식으로 개인별\n피부 고민에 맞춰 시술할 수 있습니다."
                  }
                </p>
              </div>
            )}
          </InView>
        </div>
        <div className="absolute right-0 top-[30vh] h-[60vh] w-[66vw] lg:w-[50vw]">
          <Image
            src={bigNozzle}
            priority
            fill
            alt="bigNozzle"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
