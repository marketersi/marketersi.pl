import React, { useState, useEffect } from "react";
import FlipCard from "./FlipCard";
import { cardsData } from "./cardsData";
import "./flip.css";



const Flip = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

      <div className="flipCardContainer">
        {cardsData.map((card, index) => (
          <FlipCard
            key={index}
            frontImageUrl={card.frontImageUrl}
            backImageUrl={card.backImageUrl}
            backTopImg={card.backTopImg}
            name={card.name}
            textColor={card.textColor}
            bgColor={card.bgColor}
            typingText={card.typingText}
            isFlipping={currentCardIndex === index}
          />
        ))}
      </div>
    </>
  );
};

export default Flip;
