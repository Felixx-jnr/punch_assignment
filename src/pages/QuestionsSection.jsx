import React from "react";
import yellow from "../assets/yellownext.svg";

const QuestionsSection = () => {
  return (
    <div className=" flex-col relative h-[1442px] bg-[#F3F3F3] -skew-y-2 t-4 ">
      <div className=" skew-y-2 ">
        <h2 className=" text-center font-[700] text-[54px] leading-[54px] text-[#202229]  mb-[88px] pt-[134px]">
          Frequently asked questions
        </h2>

        <ul className="questions  ">
          <li className=" relative flex justify-center items-center h-[112px] border-y border-[#D6D6D6] text-[22px] leading-[24px] font-[400] opacity-80 w-[100%]">
            <p className="w-[20%] px-4 text-center border-r border-[#D6D6D6] py-11  hover:bg-[#E8E8E8]">
              General
            </p>
            <p className=" w-[100%] py-11 group hover:bg-[#E8E8E8] indent-[350px]">
              I want to work part-time, is that possible?
              <span>
                <img
                  className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  src={yellow}
                  alt=""
                />
              </span>
            </p>
          </li>

          <li className=" relative flex items-center h-[112px] border-y border-[#D6D6D6] text-[22px] leading-[24px] font-[400] opacity-80 hover:bg-[#E8E8E8] group indent-[580px]">
            How long are the average projects?
            <span>
              <img
                className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                src={yellow}
                alt=""
              />
            </span>
          </li>

          <li className=" relative flex items-center h-[112px] border-y border-[#D6D6D6] text-[22px] leading-[24px] font-[400] opacity-80 hover:bg-[#E8E8E8] group indent-[580px]">
            How does the payment work?{" "}
            <span>
              <img
                className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                src={yellow}
                alt=""
              />
            </span>
          </li>

          <li className=" relative flex items-center h-[112px] border-y border-[#D6D6D6] text-[22px] leading-[24px] font-[400] opacity-80 hover:bg-[#E8E8E8] group indent-[580px]">
            How much can I earn?
            <span>
              <img
                className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                src={yellow}
                alt=""
              />
            </span>
          </li>

          <li className=" relative flex justify-center items-center h-[112px] border-y text-[22px] leading-[24px] font-[400] opacity-80 w-[100%]">
            <p className="w-[20%] px-4 text-center border-r- border-[#D6D6D6] py-11  hover:bg-[#E8E8E8]">
              General
            </p>
            <p className="w-[20%] px-4 text-center border-x border-[#D6D6D6] py-11  hover:bg-[#E8E8E8]">
              Joining Process
            </p>
            <p className=" w-[100%] py-11 group hover:bg-[#E8E8E8] indent-[180px]">
              I want to work part-time, is that possible{" "}
              <span>
                <img
                  className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  src={yellow}
                  alt=""
                />
              </span>
            </p>
          </li>

          <li className=" relative flex justify-center items-center h-[112px] border-y border-[#D6D6D6] text-[22px] leading-[24px] font-[400] opacity-80 w-[100%]">
            <p className=" w-[100%] py-11 group hover:bg-[#E8E8E8] indent-[580px]">
              How long are the average projects?{" "}
              <span>
                <img
                  className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  src={yellow}
                  alt=""
                />
              </span>
            </p>
          </li>
          <li className=" relative flex items-center h-[112px] border-y border-[#D6D6D6] text-[22px] leading-[24px] font-[400] opacity-80 w-[100%]">
            <p className=" w-[100%]  py-11 group hover:bg-[#E8E8E8] indent-[580px]">
              How long are the average projects?{" "}
              <span>
                <img
                  className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  src={yellow}
                  alt=""
                />
              </span>
            </p>
          </li>
          <li className=" relative flex items-center h-[112px] border-y border-[#D6D6D6] text-[22px] leading-[24px] font-[400] opacity-80 w-[100%]">
            <p className=" w-[100%] py-11 group hover:bg-[#E8E8E8] indent-[580px]">
              How much can I earn?{" "}
              <span>
                <img
                  className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  src={yellow}
                  alt=""
                />
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionsSection;
