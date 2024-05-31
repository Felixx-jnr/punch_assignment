import React from "react";
import Accordion from "../components/Accordion";

const SectionD = () => {
  return (
    <div className="flex justify-left relative mt-5 h-[998px] w-[80%] lg:w-[60%] bg-[#fff] -skew-y-2">
      <div className=" grid skew-2 text-left skew-y-2">
        <div className="mx-4">
          <h2 className=" text-center font-[700] text-5xl md:text-5xl text-[#202229] mb-[20px] pt-[134px]">
            How we ensure you’re in good hands.
          </h2>

          <p className="font-[400] text-2xl md:text-3xl leading-[32px] mb-[30px]">
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
