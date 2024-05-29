import React from "react";
import Accordion from "../components/Accordion";

const SectionD = () => {
  return (
    <div className="flex justify-left relative h-[998px] w-[1440px] bg-[#fff] -rotate-2 -mt-4">
      <div className=" grid rotate-2 text-left ">
        <div className="mx-[70px]">
          <h2 className=" font-[700] text-[54px] leading-[64px] w-[570px] mt-[149px] mb-[30px]   text-[#202229]">
            How we ensure you’re in good hands.
          </h2>

          <p className="font-[400] text-[22px] leading-[32px] w-[646px] mb-[30px]">
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
