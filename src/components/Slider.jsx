import React, { useState, useEffect } from "react";
import CardOne from "./cards/CardOne";
import CardTwo from "./cards/CardTwo";
import CardThree from "./cards/CardThree";

const cardArray = [
  <CardOne key="1" />,
  <CardTwo key="2" />,
  <CardThree key="3" />,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardArray.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {cardArray.map((card, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
