import React from "react";
import next from "../../assets/whitenext.svg";
import yellowdot from "../../assets/yellowdot.svg";
import chatbar from "../../assets/chatbar.png";
import faceone from "../../assets/chatbarfaceone.svg";

const CardTwo = () => {
  return (
    <div className="w-[1300px] h-[652px]">
      <div className=" grid grid-cols-2 items-center w-[1300px] h-[652px] mr-l">
        <div className="ml-9">
          <h1 className="text-[54px] font-[700] leading-[64px] w-[239px] text-[#202229] ">
            An open book
          </h1>

          <div className="w-[591px] mt-9 mb-[34px]">
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80  ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={yellowdot}
                  alt=""
                />
              </span>
              Easy and transparent one-to-one chat with candidates.
            </p>
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80 whitespace-nowrap ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={yellowdot}
                  alt=""
                />
              </span>
              Simple and convenient payment methods.
            </p>
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80  ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={yellowdot}
                  alt=""
                />
              </span>
              Review past ratings.
            </p>
          </div>

          <div className="flex items-center">
            <div className="relative w-[49.79px] h-[49.79px] bg-[#202229] rounded-[20.19px] mr-2">
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                src={next}
                alt="zwilt"
              />
            </div>
            <p className="font-[500] text-[22px] leading-[18px] ">Learn Now</p>
          </div>
        </div>

        <div className="relative w-[60%]">
          <img
            className="relative ml-9 w-[70%]"
            src={chatbar}
          />
          <img
            className=" absolute top-0"
            src={faceone}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
