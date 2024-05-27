import React from "react";
import face from "../assets/zwilt-tba-1-01 2.svg";
import search from "../assets/Frame 626624.svg";
import bars from "../assets/Union.png";

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
            alt="zwilt"
          />
        </span>
      </div>

      <div className=" w-[920px] h-[230px] rounded-[15px] mt-[40px] bg-[#F8F8F8]">
        <div className=" flex h-[44px] max-w-[391px] mx-auto rounded-[15px] mt-[15px] bg-[#D2D2D2] ">
          <p className=" inline-block p-[10px] w-[192px] bg-[#C7F4C2] rounded-[15px] font-[600] text-[16px] text-center leading-[23.78px] ">
            IT & Development
          </p>

          <p className="  inline-block p-[10px] w-[192px] rounded-[15px] bg-[#D2D2D2] font-[500] text-[16px] text-center opacity-80 ">
            Design and Creative
          </p>
        </div>

        <div className="grid grid-cols-3 mt-[23px] ml-[65px] font-[400] text-[16px] leading-[16px] text-[#959595]">
          <ul>
            <li className="mb-[18px] "> Phython Developer</li>
            <li className="mb-[18px] ">Shopify Developer</li>
            <li className="mb-[18px] text-[#202229] font-[500]">
              MERN Stack Developer
            </li>
            <li className="mb-[18px] ">Full Stack Developer</li>
          </ul>
          <ul>
            <li className="mb-[18px] ">Data Scientist</li>
            <li className="mb-[18px] ">Front End Developer</li>
            <li className="mb-[18px] ">Shopify Developer</li>
            <li className="mb-[18px] ">Phython Developer</li>
          </ul>
          <ul>
            <li className="mb-[18px] ">Shopify Developer</li>
            <li className="mb-[18px] ">Phython Developer</li>
            <li className="mb-[18px] ">Full Stack Developer</li>
            <li className="mb-[18px] text-[#202229] text-[500] font-[500] ">
              Explore More
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img
          className=" w-screen "
          src={bars}
        />
      </div>

      <div className=" flex justify-center relative h-[1130px] w-[4000px] bg-[#EDEFFF] -rotate-2 left-8 -mt-4 text-center">
        <div className=" mt-[183px] rotate-2 text-center">
          <h2 className=" font-[700] text-[54px] leading-[64px] w-[977px] h-[128px] text-center text-[#202229]">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h2>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default home;
