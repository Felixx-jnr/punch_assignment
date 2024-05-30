import React from "react";
import Slider from "../components/Slider";

const SectionD = () => {
  return (
    <div className=" flex bg-[#FDFDFD] h-[1025px]  ">
      <div className="relative flex justify-center items-center mt-[144px]"></div>

      <div className="card-grid max-lg:grid-cols-1 max-lg:items-center items-center  ">
        <div className="flex  flex-col justify-start max-lg:items-center ml-8 ">
          <p className="text-3xl lg:text-5xl font-[700] text-[#202229] mb-8 max-lg:w-[100%]">
            Why Choose Zwilt?
          </p>
          <p className=" text-[#202229] opacity-80 font-[400] text-lg lg:text w-[30vw] max-lg:w-[100%] ">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
        <div className="w-[70vw]">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default SectionD;
