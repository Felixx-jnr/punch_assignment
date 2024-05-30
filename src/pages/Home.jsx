import React from "react";
import face from "../assets/face.gif";
import search from "../assets/Frame 626624.svg";
import bars from "../assets/Union.png";

const home = () => {
  return (
    <div className="home flex place-items-center mt-[144px] flex-col">
      <h2 className="font-bold text-5xl leading-tight sm:leading-snug md:leading-tight lg:leading-[64px] w-full max-w-[90%] md:max-w-[70%] lg:max-w-[641px] text-center text-[#202229] mx-auto">
        Finding the right fit{" "}
        <span>
          <img
            className="inline w-[70px] sm:w-[50px] md:w-[60px] lg:w-[68px] h-auto"
            src={face}
            alt="face"
          />
        </span>
        has never been easier.
      </h2>

      <p className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[582px] mt-5 font-normal opacity-80 text-lg sm:text-xl md:text-2xl text-center text-[#202229] mx-auto">
        With our rigorous pre-vetting process, you'll never have to worry about
        finding the ideal candidate ever again.
      </p>

      <div className="relative mt-[30px]">
        <div className="relative mt-8 max-md:mt-3 max-[80%]">
          <input
            className=" w-[200px] mx-4 sm:w-[400px] md:w-[570px] h-[50px] md:h-[60px] border border-[#F0F0F0] rounded-[15px] py-2 px-4 md:py-3 md:px-5"
            type="text"
          />
          <span className="absolute top-1/2 transform -translate-y-1/2 -right-2">
            <img
              className="w-[58px] h-[58px] md:w-[60px] md:h-[60px]"
              src={search}
              alt="zwilt"
            />
          </span>
        </div>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto rounded-[15px] mt-10 bg-[#F8F8F8] p-4">
        <div className="flex justify-center h-[44px] max-w-[300px] sm:max-w-[360px] md:max-w-[391px] mx-auto rounded-[15px] mt-4 bg-[#D2D2D2]">
          <p className="inline-block py-2 px-3 sm:py-2 sm:px-4 md:p-[10px] w-[150px sm:w-[180px] md:w-[192px] bg-[#C7F4C2] rounded-[15px] font-[600] text-[12px] sm:text-[14px] md:text-[16px] text-center leading-[1.5] md:leading-[23.78px]">
            IT & Development
          </p>
          <p className="inline-block py-2 px-3 sm:py-2 sm:px-4 md:p-[10px] w-[150px] sm:w-[180px] md:w-[192px] rounded-[15px] bg-[#D2D2D2] font-[500] text-[12px] sm:text-[14px] md:text-[16px] text-center opacity-80 leading-[1.5] md:leading-[23.78px]">
            Design and Creative
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 md:mt-[23px] mx-auto font-[400] text-[12px] sm:text-[14px] md:text-[16px] leading-[1.5] text-[#959595] mb-0">
          <ul className="text-center">
            <li className="mb-4 md:mb-[18px]">Python Developer</li>
            <li className="mb-4 md:mb-[18px]">Shopify Developer</li>
            <li className="mb-4 md:mb-[18px] text-[#202229] font-[500]">
              MERN Stack Developer
            </li>
            <li className="mb-4 md:mb-[18px]">Full Stack Developer</li>
          </ul>
          <ul className="text-center">
            <li className="mb-4 md:mb-[18px]">Data Scientist</li>
            <li className="mb-4 md:mb-[18px]">Front End Developer</li>
            <li className="mb-4 md:mb-[18px]">Shopify Developer</li>
            <li className="mb-4 md:mb-[18px]">Python Developer</li>
          </ul>
          <ul className="text-center">
            <li className="mb-4 md:mb-[18px]">Shopify Developer</li>
            <li className="mb-4 md:mb-[18px]">Python Developer</li>
            <li className="mb-4 md:mb-[18px]">Full Stack Developer</li>
            <li className="mb-4 md:mb-[18px] text-[#202229] font-[500]">
              Explore More
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img
          className="w-[3000px] mt-[74px]"
          src={bars}
          alt="zwilt"
        />
      </div>
    </div>
  );
};

export default home;
