import Image from "next/image";
import React, { useEffect, useState } from "react";

export const SeventhWebSlide = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <section className="relative h-screen w-screen overflow-hidden bg-[#F9F9F9] font-sans  text-[80px] font-[700]">
      <div className="pl-[8vw] pt-[14vh]">
        <div className="text-[30px] font-[400]">Specifications</div>
        <div className="mb-[6vh] mt-[16vh]">
          <Image
            priority
            width={249}
            height={53}
            src="img/therfect_logo_black.svg"
            alt="therfect_logo_black"
          />
        </div>
      </div>
      <div className="flex items-start gap-[6vw] px-[8vw]">
        <table className="w-[90%] text-[1.2vw] leading-[2.5vh]">
          <tbody>
            <tr>
              <td className="">Type</td>
              <td className="w-[63%]">
                <div className="mb-[22px]">
                  Thermal tips - Mono-polar Radiofrequency
                </div>
                <div>Fractional tips - Bi-polar Radiofrequency</div>
              </td>
            </tr>
            <tr>
              <td>Frequency</td>
              <td>4MHz ± 20%</td>
            </tr>
            <tr>
              <td>Panel</td>
              <td>10.2 inch, touch screen</td>
            </tr>
            <tr>
              <td>Weight (kg)</td>
              <td>24 kg</td>
            </tr>
          </tbody>
        </table>
        <table className="w-[90%] text-[1.2vw] leading-[2.5vh]">
          <tbody>
            <tr>
              <td>Type of tip</td>
              <td className="w-[50%]">
                <div className="mb-[22px]">3 Thermal tips</div>
                <div>2 Fractional tips</div>
              </td>
            </tr>
            <tr>
              <td>Consumption power</td>
              <td>250 VA</td>
            </tr>
            <tr>
              <td>Dimension (W × D × H mm)</td>
              <td>390 × 495 × 1,230</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="absolute bottom-0 h-[17px] w-screen bg-main-orange" />
    </section>
  ) : (
    <></>
  );
};
