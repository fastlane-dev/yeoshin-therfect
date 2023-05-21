import Image from "next/image";
import React, { useEffect, useState } from "react";

export const EighthMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <section
      className="relative w-screen overflow-hidden bg-[#F9F9F9] font-sans  text-[80px] font-[700]"
      style={{ height: innerHeight }}
    >
      <div className="mt-[80px] pl-[30px]">
        <div className="text-[30px] font-[400]">Specifications</div>
        <div className="my-[60px]">
          <Image
            priority
            width={122}
            height={26}
            src="img/therfect_logo_black.svg"
            alt="therfect_logo_black"
          />
        </div>
      </div>
      <div className="flex items-start gap-[6dvw] px-[30px]">
        <table className="mobile w-screen table-fixed text-[2.6dvw] leading-[11.5px] mmd:text-[2dvw]">
          <tbody>
            <tr>
              <td width={"30%"}>Type</td>
              <td>
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
            <tr>
              <td>Type of tip</td>
              <td>
                <div className="mb-[22px]">3 Thermal tips</div>
                <div>2 Fractional tips</div>
              </td>
            </tr>
            <tr>
              <table className="mobile w-screen text-[2.6dvw] leading-[11.5px] mmd:text-[2dvw]">
                <tr>
                  <td width={"45%"}>Consumption power</td>
                  <td>3250 VA</td>
                </tr>
              </table>
            </tr>
            <tr>
              <table className="mobile w-screen text-[2.6dvw] leading-[11.5px] mmd:text-[2dvw]">
                <tr>
                  <td width={"45%"}>Dimension (W × D × H mm)</td>
                  <td>390 × 495 × 1,230</td>
                </tr>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="absolute bottom-0 w-screen bg-main-orange"
        style={{ height: "calc(10px + env(safe-area-inset-bottom))" }}
      />
    </section>
  ) : (
    <></>
  );
};
