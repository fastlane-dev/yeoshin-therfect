import Image from "next/image";
import React from "react";

import logoSvg from "../../../public/img/therfect_logo.svg";
import therfectRobot from "../../../public/img/entire_robot.svg";
import ball from "../../../public/img/ball.svg";

// NOTE: 로고 비율
{
  /* <div className="relative ml-[8vw] mt-[5vh] h-[4.8vh] w-[23vw]">
  <Image src={logoSvg} fill alt="therfect_logo" />
</div> */
}

export const FirstMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  return (
    <section
      className="relative w-screen overflow-hidden font-futura text-[80px]  font-[500] text-white"
      style={{ height: innerHeight }}
    >
      <div className="absolute right-[16vw] top-[78px] -z-10 h-[9.3vw] w-[9.3vw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute left-[17vw] top-[273px] -z-10 h-[9.3vw] w-[9.3vw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute right-[0] top-[273px] -z-10 h-[20vw] w-[20vw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[25px] left-[-9vw] -z-10 h-[62vw] w-[62vw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="relative ml-[8vw] mt-[5vh] h-[18px] w-[87px]">
        <Image src={logoSvg} fill alt="therfect_logo" />
      </div>
      <div className="relative ml-[8vw] mt-[10vh]  h-[30vh] w-screen font-pretendard text-[13vw] leading-[13vw]">
        <div className="absolute animate-mobileMainLogoDisappear">
          <p className="mb-[10px] font-[400]">정교하고</p>
          <p className="font-[600]">효과적으로</p>
        </div>

        <div className="absolute animate-mobileMainLogoAppear opacity-0">
          <p className="mb-[10px] font-[400]">열 에너지를</p>
          <p className="font-[600]">전달하다</p>
        </div>
      </div>

      <div className="relative bottom-[4vw] mx-auto h-[105vh] w-[100vw] msm:bottom-[5vw] msm:h-[145vh] mmd:bottom-[-3vw] mmd:h-[160vh]">
        <Image src={therfectRobot} priority fill alt="therfect_robot" />
      </div>
    </section>
  );
};
