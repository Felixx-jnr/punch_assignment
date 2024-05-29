import React, { useState } from "react";
import paused from "../assets/paused.svg";
import play from "../assets/play.svg";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const lists = [
    {
      title: "Step 1",
      desc: "Resume Screening",
      content:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      title: "Step 2",
      desc: "Video Interview",
      content:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      title: "Step 3",
      desc: "Technical Evaluation",
      content:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      title: "Step 4",
      desc: "Application Review",
      content:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      title: "Step 5",
      desc: "Let's get to work",
      content:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
  ];

  return (
    <div className="w-[646px] h-[64px] ">
      {lists.map((list, index) => (
        <div
          key={index}
          className={` border rounded-[15px] mb-2 transition-all duration-300 ease-in-out ${
            activeIndex === index ? "shadow-lg" : ""
          }`}
        >
          <div
            className="flex items-center py-2 cursor-pointer "
            onClick={() => handleClick(index)}
          >
            <span className="mx-5">
              {activeIndex === index ? (
                <img
                  src={play}
                  alt=""
                />
              ) : (
                <img
                  src={paused}
                  alt=""
                />
              )}
            </span>
            <h3 className="font-[600] text-[16px] leading-[17.83px]">
              {list.title} <span className="font-[400]">:{list.desc}</span>
            </h3>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-screen p-4" : "max-h-0"
            }`}
          >
            {activeIndex === index && (
              <p className="font-[400] text-[16px] text-[#202229] leading-[26px] opacity-80">
                {" "}
                {list.content}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
