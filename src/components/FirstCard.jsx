import React from "react";

const FirstCard = ({ bgcolor, person, name, desc }) => {
  return (
    <div>
      <div className="w-[220.74px] h-[247.71px] rounded-[21.15px] bg-white">
        <div>
          <img
            src={person}
            alt={person}
            style={{ background: `${bgcolor}` }}
            className="w-[220.74px] h-[141.43px] rounded-[21.15px]"
          />
        </div>

        <p className="text-[18px] font-[400] leading-[18px] text-[#202229] mt-[12.56px] ml-[24px]">
          {name}
        </p>
        <p className="text-[12px] font-[400] leading-[14px] text-[#202229] mt-[28px] ml-[28px] w-[143px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FirstCard;
