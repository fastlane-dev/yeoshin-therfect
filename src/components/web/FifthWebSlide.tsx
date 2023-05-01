import Image from "next/image";
import React from "react";

export const FifthWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white bg-[url('/img/skin_structure.png')] bg-cover bg-center bg-no-repeat font-pretendard font-[600] text-white">
      <div className="pl-[160px] pt-[160px]">
        <div className="flex-center justify-start gap-[20px]">
          <p className="font-futura text-[30px] font-[500] leading-[39.84px]">
            Principle
          </p>
          <div>
            <Image
              src={"/img/three_dots_white.svg"}
              alt="three_dots_white"
              width={31}
              height={18}
            />
          </div>
        </div>
        <p className="text-shadow mt-[106px] text-[80px] leading-[95.47px]">
          {"피부 속까지\n고주파 에너지를 전달"}
        </p>
        <p className="text-shadow mt-[316px] text-[26px] leading-[52px]">
          {
            "강력한 고주파 에너지로 조직의 응고를 일으켜 피부탄력에 도움을 줍니다.\n고주파 전달 > 피부속 깊이 고주파 전달 > 피부 저항 및 열 발생 > 피부응고 및 재생 > 피부탄력 도움"
          }
        </p>
      </div>
    </section>
  );
};
