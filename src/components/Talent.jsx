import React from "react";

const Talent = ({ name, icon }) => {
  return (
    <div className=" lg:h-[96px] lg:w-[96px] md:h-[70px] md:w-[70px] h-[70px] w-[70px] max-sm:w-[40px] max-sm:h-[40px] text-center">
      <div className="relative lg:h-[96px] lg:w-[96px]  h-[70px] w-[70px] max-sm:w-[45px] max-sm:h-[45px]  bg-[#F6F6F6]  rounded-full mb-[12px]">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-[30px] max-sm:h-[30px]"
          src={icon}
          alt={name}
        />
      </div>
      <p className="h-[36px] text-[14px] leading-[18px] text-center font-[600] mx-2 lg:px-2 md:px-0 max-xs:hidden ">
        {name}
      </p>
    </div>
  );
};

export default Talent;
