import React from "react";

const Talent = ({ name, icon }) => {
  return (
    <div className="w-[96px] h-[96px] text-center">
      <div className="relative h-[96px] bg-[#F6F6F6] rounded-full mb-[12px]">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          src={icon}
          alt={name}
        />
      </div>
      <p className="h-[36px] w-[81px] text-[14px] leading-[18px] text-center font-[600] mx-2 px-2 ">
        {name}
      </p>
    </div>
  );
};

export default Talent;
