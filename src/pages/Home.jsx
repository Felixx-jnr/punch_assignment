import React from "react";
import face from "../assets/zwilt-tba-1-01 2.svg";
import search from "../assets/Frame 626624.svg";

const home = () => {
  return (
    <div className="home flex place-items-center mt-[144px] flex-col">
      <h2 className=" font-[700] font text-[54px] leading-[64px] w-[641px] text-center text-[#202229]">
        Finding the right fit{" "}
        <span>
          <img
            className="inline"
            src={face}
            alt=""
          />
        </span>
        has never been easier.
      </h2>

      <p className=" w-[582px] h-[64px] mt-[20px] font-[400] opacity-80 text-[22px] text-center text-[#202229] ">
        With our rigorous pre-vetting process, you'll never have to worry about
        finding the ideal candidate ever again.
      </p>

      <div className="relative mt-[30px]">
        <input
          className=" w-[570px] h-[74px] border-[2px] border-[#F0F0F0] rounded-[15px] py-[29px] px-[27px]"
          type="text"
        ></input>
        <span className=" w-[75px] h-[75px]">
          <img
            className="absolute top-0 right-0"
            src={search}
            alt=""
          />
        </span>
      </div>

      <div className=" w-[920px] h-[230px] rounded-[15px] mt-[40px] bg-[#F8F8F8]">
        <div className=" w-[391px] h-[44px] rounded-[15px] ">
          <span className=" bg-[#C7F4C2] py-[10px]">IT & Development</span>
          <span className=" bg-[#D2D2D2] py-[10px]">Design and Creative</span>
        </div>
      </div>
    </div>
  );
};

export default home;
