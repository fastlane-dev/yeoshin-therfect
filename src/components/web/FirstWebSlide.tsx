import Image from "next/image";
import React from "react";

export const FirstWebSlide = () => {
  return (
    <section className="relative h-screen w-screen font-futura text-[80px]  font-[500] text-white">
      <nav className="flex-center mt-[64px] justify-between px-[162px]">
        <div>
          <Image
            src="/img/therfect_logo.png"
            height={33}
            width={160}
            alt="therfect_logo"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-[20px] tracking-[0.02em]">KR</span>
          <span className="text-[20px] opacity-40">|</span>
          <span className="text-[20px] tracking-[0.02em] opacity-40">EN</span>
        </div>
      </nav>
    </section>
  );
};
