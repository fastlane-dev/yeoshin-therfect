import Image from "next/image";
import React from "react";
import { InviewComponent } from "../common/InviewComponent";

type NozzleType = {
  imageMb?: string;
  imageWidth: string;
  imageHeight: string;
  titleSize?: string;
  subTitleSize?: string;
  subTitleHeight?: string;
  title: string;
  subTitle: string;
  imgSrc: string;
};

const Nozzle = ({
  imageMb = "28px",
  imageWidth,
  imageHeight,
  titleSize = "18px",
  subTitleSize = "13px",
  subTitleHeight = "20px",
  title,
  subTitle,
  imgSrc,
}: NozzleType) => {
  return (
    <div className="flex-center-column">
      <div
        className="relative"
        style={{
          marginBottom: imageMb,
          width: imageWidth,
          height: imageHeight,
        }}
      >
        <img
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          className="h-full w-full object-contain"
          src={imgSrc}
          alt="first_nozzle"
        />
      </div>
      <InviewComponent animationClassName="animate-smoothUpFirst">
        <div className="mb-[0.8vh]" style={{ fontSize: titleSize }}>
          {title}
        </div>
      </InviewComponent>
      <InviewComponent animationClassName={"animate-smoothUpSecond"}>
        <div
          className="text-[4vw] font-[600] leading-[3vh]"
          style={{ lineHeight: subTitleHeight, fontSize: subTitleSize }}
        >
          {subTitle}
        </div>
      </InviewComponent>
    </div>
  );
};

export const FourthMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  return (
    <section
      className="flex-center relative w-screen overflow-hidden bg-[#F9F9F9] text-center font-pretendard font-[700]"
      style={{ height: innerHeight }}
    >
      <div className="h-screen w-screen px-[31px]">
        <div className="mb-[34px] flex justify-center gap-[60px]">
          <Nozzle
            imageWidth="115px"
            imageHeight="104px"
            imgSrc="/img/first_nozzle.png"
            title="써말아이"
            subTitle={"팔자, 눈가주름을\n타이트닝"}
          />
          <Nozzle
            imageWidth="107px"
            imageHeight="104px"
            imgSrc="/img/fourth_nozzle.png"
            title="프락셔널 64P"
            subTitle={"비교적 깊은 모공과\n흉터에 시술"}
          />
        </div>
        <div className="mb-[34px] flex justify-center gap-[60px]">
          <Nozzle
            imageWidth="107px"
            imageHeight="105px"
            imgSrc="/img/second_nozzle.png"
            title="써말 러빙"
            subTitle={"처짐, 얼굴윤곽을\n자극하여 얼굴선 정리"}
          />
          <Nozzle
            imageWidth="107px"
            imageHeight="105px"
            imgSrc="/img/fifth_nozzle.png"
            title="프락셔널 100P"
            subTitle={"비교적 깊은 모공과\n흉터에 시술"}
          />
        </div>
        <div className="flex justify-center gap-[60px]">
          <Nozzle
            imageWidth="115px"
            imageHeight="113px"
            imgSrc="/img/third_nozzle.png"
            title="써말 스탬프"
            subTitle={"강력한 고주파\n에너지를 깊게"}
          />

          <div className="w-[115px]"></div>
        </div>
      </div>
    </section>
  );
};

{
  /* <div className="mb-[34px] flex justify-center gap-[60px]">
<div className="flex-center-column">
  <div className="relative  mb-[20px] w-[31vw]">
    <img
      sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
      className="h-full w-full object-contain"
      src="/img/first_nozzle.png"
      alt="first_nozzle"
    />
  </div>
  <InviewComponent animationClassName="animate-smoothUpFirst">
    <div className="mb-[0.8vh] text-[5vw]">써말아이</div>
  </InviewComponent>
  <InviewComponent animationClassName={"animate-smoothUpSecond"}>
    <div className="text-[4vw] font-[600] leading-[3vh]">
      {"팔자, 눈가주름을\n타이트닝"}
    </div>
  </InviewComponent>
</div>
<div className="flex-center-column">
  <div className="relative  mb-[20px] w-[31vw]">
    <img
      sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
      className="h-full w-full object-contain"
      src="/img/fourth_nozzle.png"
      alt="first_nozzle"
    />
  </div>
  <InviewComponent animationClassName={"animate-smoothUpFirst"}>
    <div className="mb-[0.8vh] text-[5vw]">프락셔널 64P</div>
  </InviewComponent>
  <InviewComponent animationClassName={"animate-smoothUpSecond"}>
    <div className="text-[4vw] font-[600] leading-[3vh]">
      {"비교적 깊은 모공과\n흉터에 시술"}
    </div>
  </InviewComponent>
</div>
</div>
<div className="mb-[34px] flex justify-center gap-[60px]">
<div className="flex-center-column">
  <div className="relative mb-[20px] w-[29vw]">
    <img
      sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
      className="h-full w-full object-contain"
      src="/img/second_nozzle.png"
      alt="second_nozzle"
    />
  </div>
  <InviewComponent animationClassName={"animate-smoothUpFirst"}>
    <div className="mb-[0.8vh] text-[5vw]">써말 러빙</div>
  </InviewComponent>
  <InviewComponent animationClassName={"animate-smoothUpSecond"}>
    <div className="text-[4vw] font-[600] leading-[3vh]">
      {"처짐, 얼굴윤곽을\n자극하여 얼굴선 정리"}
    </div>
  </InviewComponent>
</div>
<div className="flex-center-column">
  <div className="relative  mb-[20px] w-[31vw]">
    <img
      sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
      className="h-full w-full object-contain"
      src="/img/fifth_nozzle.png"
      alt="first_nozzle"
    />
  </div>
  <InviewComponent animationClassName={"animate-smoothUpFirst"}>
    <div className="mb-[0.8vh] text-[5vw]">프락셔널 100P</div>
  </InviewComponent>
  <InviewComponent animationClassName={"animate-smoothUpSecond"}>
    <div className="text-[4vw] font-[600] leading-[3vh]">
      {"비교적 깊은 모공과\n흉터에 시술"}
    </div>
  </InviewComponent>
</div>
</div>
<div className="flex justify-center gap-[60px]">
<div className="flex-center-column">
  <div className="relative mb-[20px] w-[31vw]">
    <img
      sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
      className="h-full w-full object-contain"
      src="/img/third_nozzle.png"
      alt="third_nozzle"
    />
  </div>
  <InviewComponent animationClassName={"animate-smoothUpFirst"}>
    <div className="mb-[0.8vh] text-[5vw]">써말 스탬프</div>
  </InviewComponent>
  <InviewComponent animationClassName={"animate-smoothUpSecond"}>
    <div className="text-[4vw] font-[600] leading-[3vh]">
      {"강력한 고주파\n에너지를 깊게"}
    </div>
  </InviewComponent>
</div>
<div className="w-[31vw]"></div>
</div> */
}
