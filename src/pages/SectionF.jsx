import React from "react";
import Slider from "../components/Slider";

const SectionD = () => {
  return (
    <div className=" flex bg-[#FDFDFD] h-[1025px] -skew-y-2">
      <div className="relative flex justify-center items-center mt-[144px]"></div>

      <div className="card-grid skew-y-2 items-center  ">
        <div className="flex flex-col justify-start ml-8">
          <p className="text-[54px] font-[700] leading-[64px] text-[#202229] mb-8">
            Why Choose Zwilt?
          </p>
          <p className=" text-[#202229] opacity-80 font-[400] text-[22px] leading-[32px] w-[326px]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default SectionD;
