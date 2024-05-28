import React from "react";
import groove from "../assets/groove.svg";
import jason from "../assets/face2.svg";
import bordergroove from "../assets/bordergroove.svg";
import bluenext from "../assets/bluenext.svg";
import blueprevious from "../assets/blueprevious.svg";
import apostrophe from "../assets/apostrophe.svg";

const SectionC = () => {
  return (
    <div className="relative flex justify-center items-center bg-[#202229] text-[#FFF] w-[110%] -left-4 h-[840px] -rotate-2 text-center ">
      <img
        className="absolute top-0 right-[130px]"
        src={apostrophe}
        alt=""
      />
      <div className="flex flex-col justify-l items-center mr-28 rotate-2 text-left">
        <div className=" flex gap-40 items-end ">
          <div className="mr-">
            <h1 className="text-[54px] w-[379px] h-[192px] font-[700] leading-[64px] mb-[44px]">
              How it worked for Jason{" "}
              <img
                className="inline rounded-full"
                src={jason}
                alt="jason"
              />{" "}
              at{" "}
              <img
                className="inline"
                src={groove}
                alt="groove"
              />
            </h1>
            <p className="w-[461px] h-[64px] text-[22px] leading-[32px] font-[400] opacity-80 ">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
            <div className="flex mt-4">
              <div className="relative rotate-180 bg-white w-[49.79px] h-[49.79px] rounded-[20.19px] mr-[16px]">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={blueprevious}
                  alt="previous"
                />
              </div>
              <div className="relative bg-white w-[49.79px] h-[49.79px] rounded-[20.19px]">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={bluenext}
                  alt="next"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex gap-[16.21px] items-center mb-[56px]">
              <img
                className="bg-[#AF7CFF] w-[98.79px] h-[98.79px] rounded-[40.05px] px-[11px] py-[40px]"
                src={bordergroove}
                alt="groove"
              />
              <div>
                <h3 className="text-[34px] font-[600] leading-[44px]">
                  Jason Makki
                </h3>
                <p className="text-[#C6C4C4] text-[16px] leading-[18px] opacity-40 h-[18px] font-[400] tracking-wider my-[3px]">
                  Engineer at{" "}
                  <span className="font-[500] text-[16px] leading-[18px]">
                    GROOVE
                  </span>
                </p>
                <p className="text-[#fff] text-[16px] font-[300] tracking-wider leading-[18px] opacity-40 my-[10px]">
                  San Francisco
                </p>
              </div>
            </div>
            <p className="w-[499px] text-[#fff] text-[22px] font-[400] leading-[32px] opacity-80">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since. Zwilt enabled us
              to deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionC;
