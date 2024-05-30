import React from "react";
import Accordion from "../components/Accordion";

const SectionD = () => {
  return (
    <div className="flex justify-left relative mt-5 h-[998px] lg:w-[70%] bg-[#fff] -skew-y-2">
      <div className=" grid skew-2 text-left skew-y-2">
        <div className="mx-[70px]">
          <h2 className=" font-[700] lg:text-[54px] md:text-[34px] text-[24px] lg:leading-[64px] md:leading-[32px] leading-[20px] mt-[149px] mb-[30px] text-[#202229]">
            How we ensure you’re in good hands.
          </h2>

          <p className="font-[400] ] text-[16px] md:text-[24px] leading-[32px] mb-[30px]">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default SectionD;
