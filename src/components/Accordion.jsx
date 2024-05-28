import React, { useState } from "react";
import paused from "../assets/paused.svg";
import play from "../assets/play.svg";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const lists = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
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
            <span className="mx-3">
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
            <h3 className="text-lg font-medium">{list.title}</h3>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-screen p-4" : "max-h-0"
            }`}
          >
            {activeIndex === index && <p>{list.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
