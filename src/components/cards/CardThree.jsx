import React from "react";
import next from "../../assets/whitenext.svg";
import whitedot from "../../assets/whitedot.svg";
import track from "../../assets/trackk.svg";
import timer from "../../assets/timerr.svg";
import progess from "../../assets/progresss.svg";

const CardThree = () => {
  return (
    <div className="w-[1300px] h-[652px]">
      <div className=" grid grid-cols-2 items-center w-[1300px] h-[652px] mr-l">
        <div className="ml-9">
          <h1 className="text-[54px] font-[700] leading-[64px] w-[279px] text-[#202229] ">
            Stay in the loop.
          </h1>

          <div className="w-[591px] mt-9 mb-[34px]">
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80 whitespace-nowrap ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={whitedot}
                  alt=""
                />
              </span>
              Track your staff activity down to every minute with screenshots.
            </p>
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80 whitespace-nowrap ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={whitedot}
                  alt=""
                />
              </span>
              Comprehensive timesheet data to process payments.
            </p>
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80 whitespace-nowrap ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={whitedot}
                  alt=""
                />
              </span>
              Create projects to organize and assign tasks more effectively.
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

        <div className=" w-[40%] relative ml-20">
          <img
            className=""
            src={timer}
          />
          <img
            className=" "
            src={track}
          />
          <img
            className=""
            src={progess}
          />
        </div>
      </div>
    </div>
  );
};

export default CardThree;
