import Image from "next/image";
import React from "react";

import entireRobot from "../../../public/img/therfect_entire_robot.png";

export const SecondWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white">
      <div className="flex justify-between">
        <div className="self-start pl-[8.3vw] pt-[15vh]">
          <div className="mb-[110px] flex items-center justify-start gap-[20px]">
            <p className="font-futura text-[30px] font-[500] leading-[40px]">
              Product
            </p>
            <div>
              <Image
                alt="three_dots_black"
                src={"/img/three_dots_black.svg"}
                width={31}
                height={18}
              />
            </div>
          </div>
          <div>
            <p className="font-futura text-[4vw] leading-[8vh]">4MHz</p>
            <p className="mb-[36px] font-pretendard text-[4vw] leading-[8.7vh]">
              고성능 고주파
            </p>
          </div>
          <p className="font-pretendard text-[1.3vw] leading-[4.5vh]">
            {
              "식약처 허가와 논문, 그리고 12년간 검증¹된 고성능 고주파 열 에너지.\n¹자사 장비를 전세계 12개국에서 12년 동안 유통하며 효과적인 고주파를\n연구, 개발하였습니다."
            }
          </p>
        </div>
        <div className="relative h-screen w-[55vw]">
          <Image src={entireRobot} priority fill alt="entire_robot" />
        </div>
      </div>
    </section>
  );
};
