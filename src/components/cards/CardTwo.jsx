import React from "react";
import next from "../../assets/whitenext.svg";
import yellowdot from "../../assets/yellowdot.svg";
import chatbar from "../../assets/chatbar.png";

const CardTwo = () => {
  return (
    <div className="w-[100vw]">
      <div className=" grid grid-cols-2 max-md:grid-cols-1 items-center w-[90vw] mr-l">
        <div className="ml-9">
          <h1 className=" font-[700] text-3xl lg:text-5xl text-[#202229] mt-8 ">
            An open book
          </h1>

          <div className="w-[90%] mt-9 mb-[34px]">
            <p className="text-lg lg:text-2xl text-[#202229] opacity-80  ">
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
            <p className="text-lg lg:text-2xl font-[400] text-[#202229] opacity-80">
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
            <p className="text-lg lg:text-2xl text-[#202229] opacity-80  ">
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
            <div className="relative w-[30px] h-[30px] md:w-[49.79px] md:h-[49.79px]  bg-[#202229] rounded-[20.19px] mr-2">
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max:md-8"
                src={next}
                alt="zwilt"
              />
            </div>
            <p className="font-[500] text-2xl md:text-lg ">Learn Now</p>
          </div>
        </div>

        <div className="w-[100%]">
          <img
            className="w-[50%]"
            src={chatbar}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
