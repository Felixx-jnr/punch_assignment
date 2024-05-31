import React from "react";
import groove from "../assets/groove.svg";
import jason from "../assets/face2.svg";
import bordergroove from "../assets/bordergroove.svg";
import bluenext from "../assets/bluenext.svg";
import blueprevious from "../assets/blueprevious.svg";
import apostrophe from "../assets/apostrophe.svg";

const SectionC = () => {
  return (
    <div className=" flex items-center relative -mt-10 bg-[#202229] py-20 text-[#FFF] text-center -skew-y-2 ">
      <img
        className="absolute top-0 right-0"
        src={apostrophe}
        alt=""
      />
      <div className=" relative left-1/2 -translate-x-1/2 text-left max-w-[90%] skew-y-2">
        <div className="grid grid-cols-2 max-md:block gap-10 mx-2">
          <div className=" 2xl:w-[60%] lg:w-[80%] mb-12">
            <h1 className="  text-[42px] font-[700] ">
              How it worked for Jason{" "}
              <img
                className="inline rounded-full"
                src={jason}
                alt="jason"
              />{" "}
              at{" "}
              <img
                className="groove"
                src={groove}
                alt="groove"
              />
            </h1>
            <p className=" basis-40 text-[#fff] font-[400] lg:leading-[32.003px] text-[21.997px] leading-[32.003px] opacity-80  ">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
            <div className="flex mt-4">
              <div className="relative rotate-180 bg-white w-[49.793px] h-[49.793px] rounded-[20.19px] mr-[15.998px]">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={blueprevious}
                  alt="previous"
                />
              </div>
              <div className="relative bg-white w-[49.793px] h-[49.793px] rounded-[20.19px]">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={bluenext}
                  alt="next"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className=" flex gap-[16.207px] items-center md:my-[56.002px] max-md:justify-end">
              <img
                className="bg-[#AF7CFF] w-[98.79px] h-[98.79px] rounded-[40.05px] px-[11.003px] py-[39.998px] max-md:"
                src={bordergroove}
                alt="groove"
              />
              <div>
                <h3 className="text-[33.998px] font-[600] leading-[44.002px]">
                  Jason Makki
                </h3>
                <p className="text-[#C6C4C4] text-[15.998px] leading-[18px] opacity-40 font-[400] tracking-wider ">
                  Engineer at{" "}
                  <span className="font-[500] text-[15.998px] leading-[18px]">
                    GROOVE
                  </span>
                </p>
                <p className="text-[#fff] text-[15.998px] font-[300] tracking-wider leading-[18px] opacity-40 my-[9.998px]">
                  San Francisco
                </p>
              </div>
            </div>
            <p className=" basis-40 text-[#fff] text-[21.997px] font-[400] leading-[32.003px] opacity-80">
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
