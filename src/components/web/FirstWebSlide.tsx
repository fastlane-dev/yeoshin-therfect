import React from "react";

import Image from "next/image";

import logoSvg from "../../../public/img/therfect_logo.svg";
import therfectRobot from "../../../public/img/therfect_robot_half.svg";
import ball from "../../../public/img/ball.svg";

export const FirstWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden font-futura text-[80px]  font-[500] text-white">
      <div className="absolute left-[26vw] top-[78px] -z-10 h-[2vw] w-[2vw]">
        <Image
          src={ball}
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute left-[52vw] top-[66.04px] -z-10 h-[4vw] w-[4vw]">
        <Image
          src={ball}
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>

      <div className="absolute left-[9vw] top-[229px] -z-10 h-[6.3vw] w-[6.3vw]">
        <Image
          src={ball}
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute left-[70vw] top-[250px] -z-10 h-[6.5vw] w-[6.5vw]">
        <Image
          src={ball}
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[85px] left-[15vw] -z-10 h-[14.5vw] w-[14.5vw]">
        <Image
          src={ball}
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[-13vw] left-[60vw] -z-10 h-[27vw] w-[27vw]">
        <Image
          src={ball}
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <nav className="flex-center mt-[64px] justify-between px-[162px]">
        <div>
          <Image src={logoSvg} height={33} width={160} alt="therfect_logo" />
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-[20px] tracking-[0.02em]">KR</span>
          <span className="text-[20px] opacity-40">|</span>
          <span className="text-[20px] tracking-[0.02em] opacity-40">EN</span>
        </div>
      </nav>
      <div className="flex-center absolute bottom-0 w-screen font-pretendard text-[4vw] leading-[4vw]">
        <div className="relative top-[-10vh] flex flex-col gap-[17px]">
          <p className="font-[400]">정교하고</p>
          <p className="font-[600]">효과적으로</p>
        </div>
        <div className="relative h-[83vh] w-[41vw]">
          <Image src={therfectRobot} priority fill alt="therfect_robot" />
        </div>
        <div className="relative top-[-10vh] flex flex-col gap-[17px]">
          <p className="font-[400]">열 에너지를</p>
          <p className="font-[600]">전달하다</p>
        </div>
      </div>
    </section>
  );
};
