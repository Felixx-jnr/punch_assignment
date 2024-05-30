import React from "react";
import next from "../assets/whitenext.svg";
import picone from "../assets/1.png";
import pictwo from "../assets/2.png";
import picthree from "../assets/3.png";
import numone from "../assets/one.svg";
import numtwo from "../assets/two.svg";
import numthree from "../assets/three.svg";

const SectionE = () => {
  return (
    <div className=" h-[1225.5px] mt-[104px] flex flex-col items-center ">
      <h2 className=" font-[700] text-4xl lg:text-[54px] lg:leading-[64px] mb-[50px] w-[82.4vw] text-center text-[#202229] ">
        Start your journey today.
      </h2>

      <div className="relative flex justify-between w-[98%] h-[387.5px] mx-auto bg-[#EDEFFF] overflow-hidden -skew-y-2 my-3 max-md:justify-center">
        <div className="relative my-[30px] items-center -skew-y-[-2deg] inline-flex">
          <img
            className=" mx-5 mb-[130px]"
            src={numone}
            alt=""
          />

          <div>
            <h1 className=" text-[32px] lg:text-[34px] font-[600] leading-[44px] text-[#202229] ">
              Find your next star performer.
            </h1>
            <p className="text-[20px] font-[400] leading-[24px] text-[#202229] opacity-80 my-[24px]">
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs
            </p>
            <div className="flex items-center">
              <div className="relative w-[49.79px] h-[49.79px] bg-[#202229] rounded-[20.19px] mr-2">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={next}
                  alt="zwilt"
                />
              </div>
              <p className="">Join now</p>
            </div>
          </div>
        </div>

        <div className="relative -skew-y-[-2deg] max-lg:hidden">
          <img
            src={picone}
            alt=""
          />
        </div>
      </div>

      <div className="relative flex justify-between w-[98%] h-[387.5px] mx-auto bg-[#FFF7E1] overflow-hidden -skew-y-2 my-3 -mt-1 max-md:justify-center">
        <div className="relative my-[30px] items-center -skew-y-[-2deg] inline-flex">
          <img
            className=" mx-5 mb-[130px]"
            src={numtwo}
            alt=""
          />

          <div>
            <h1 className=" text-[32px] lg:text-[34px] font-[600] leading-[44px] text-[#202229] ">
              Evaluate to your heart’s content.
            </h1>
            <p className="text-[20px] font-[400] leading-[24px] text-[#202229] opacity-80 my-[24px]">
              Assess the candidate through work history, transparent tests and
              video interviews.
            </p>
            <div className="flex items-center">
              <div className="relative w-[49.79px] h-[49.79px] bg-[#202229] rounded-[20.19px] mr-2">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={next}
                  alt="zwilt"
                />
              </div>
              <p className="">Join now</p>
            </div>
          </div>
        </div>

        <div className="relative -skew-y-[-2deg] max-lg:hidden">
          <img
            src={pictwo}
            alt=""
          />
        </div>
      </div>

      <div className="relative flex justify-between w-[98%] h-[387.5px] mx-auto bg-[#F3F3F3] overflow-hidden -skew-y-2 my-3 -mt-1 max-md:justify-center">
        <div className="relative my-[30px] items-center -skew-y-[-2deg] inline-flex">
          <img
            className=" mx-5 mb-[130px]"
            src={numthree}
            alt=""
          />

          <div>
            <h1 className=" text-[32px] lg:text-[34px] font-[600] leading-[44px] text-[#202229] ">
              Start building your team.
            </h1>
            <p className="text-[20px] font-[400] leading-[24px] text-[#202229] opacity-80 my-[24px]">
              Onboard your candidate right away and start creating the next big
              thing.
            </p>
            <div className="flex items-center">
              <div className="relative w-[49.79px] h-[49.79px] bg-[#202229] rounded-[20.19px] mr-2">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={next}
                  alt="zwilt"
                />
              </div>
              <p className="">Join now</p>
            </div>
          </div>
        </div>

        <div className="relative -skew-y-[-2deg] max-lg:hidden">
          <img
            src={picthree}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionE;
