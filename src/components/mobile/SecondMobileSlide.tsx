import React from "react";
import { InView } from "react-intersection-observer";
import { InviewComponent } from "../common/InviewComponent";

import therfectRobot from "../../../public/img/entire_robot.svg";
import Image from "next/image";

export const SecondMobileSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white">
      <div className="">
        <div className="self-start pl-[30px] pt-[80px]">
          <div className="mb-[8.7vh] flex items-center justify-start gap-[12px]">
            <p className="font-sans text-[20px] font-[400] leading-[23px]">
              Product
            </p>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div ref={ref} className="flex h-[34px] w-full items-center ">
                  <div className="relative h-[13px] w-[21px]">
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearFirst" : ""
                      }  bottom-0 left-0 inline-block h-[3.2px] w-[3.2px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearSecond" : ""
                      }  left-[6px] top-[3px] inline-block h-[4.2px] w-[4.2px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearThird" : ""
                      }  right-0 top-0 inline-block h-[6.4px] w-[6.4px] rounded-full bg-black opacity-0`}
                    ></span>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <InviewComponent animationClassName="animate-smoothUpFirst">
            <div>
              <p className="mb-[0.1vh] font-futura text-[30px] font-[500]">
                4MHz
              </p>
              <p className="mb-[36px] font-pretendard text-[30px] font-[500]">
                고성능 고주파
              </p>
            </div>
          </InviewComponent>
          <InviewComponent animationClassName="animate-smoothUpSecond">
            <div>
              <p
                className={`mt-[4.3vh] pr-[30px] font-pretendard text-[16px] font-[400] leading-[30px]`}
              >
                {
                  "식약처 허가와 논문, 그리고 12년간 검증¹된 고성능 고주파 열 에너지.¹자사 장비를 전세계 12개국에서 12년 동안 유통하며 효과적인 고주파를 연구, 개발하였습니다."
                }
              </p>
            </div>
          </InviewComponent>
        </div>
        <InviewComponent animationClassName={"animate-smoothUpThird"}>
          <div className="relative bottom-[-8vw] mx-auto h-[75vh] w-[100vw] msm:bottom-[-6vw] msm:h-[90vh] mmd:bottom-[-3vw] mmd:h-[94vh]">
            <Image src={therfectRobot} priority fill alt="therfect_robot" />
          </div>
        </InviewComponent>
      </div>
    </section>
  );
};
