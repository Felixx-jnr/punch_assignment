import React from "react";
import next from "../../assets/whitenext.svg";
import bluedot from "../../assets/bluedot.svg";
import cardone from "../../assets/cardone.png";

const CardOne = () => {
  return (
    <div className="w-[1300px] h-[652px]">
      <div className=" grid grid-cols-2 items-center w-[1300px] h-[652px] mr-l">
        <div className="ml-9">
          <h1 className="text-[54px] font-[700] leading-[64px] w-[464px] text-[#202229] ">
            Onboard without the risk.
          </h1>

          <div className="w-[591px] mt-9 mb-[34px]">
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80  ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={bluedot}
                  alt=""
                />
              </span>
              We pick the best for you to select.
            </p>
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80 whitespace-nowrap ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={bluedot}
                  alt=""
                />
              </span>
              Thousands of vetted candidates in dozens of categories.
            </p>
            <p className="text-[22px] font-[400] leading-[32px] text-[#202229] opacity-80  ">
              {" "}
              <span>
                <img
                  className="inline mx-3"
                  src={bluedot}
                  alt=""
                />
              </span>
              Risk-free resource swapping for the best fit.
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

        <div className="w-[60%]">
          <img
            src={cardone}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardOne;
