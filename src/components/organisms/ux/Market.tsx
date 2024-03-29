import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// const sentence = "Jak zainteresować ludzi";
const intervalDuration = 300;
const typingSpeed = 50;

function Market() {
  const { screenData } = useSelector((state) => state.ux);
  const { cardOne, cardTwo, cardThree, cardFour } = screenData.market || {};

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const [sentence, setSentence] = useState("");
  const [color, setColor] = useState();

  useEffect(() => {
    const animatedSentence = cardOne?.title || "";
    setSentence(animatedSentence);
    setColor("#FF5000");
    setCurrentLetterIndex(0);
  }, [cardOne]);

  useEffect(() => {
    let timeout;

    const type = () => {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      timeout = setTimeout(type, typingSpeed);
    };

    const interval = setInterval(() => {
      if (currentLetterIndex === sentence.length) {
        setCurrentLetterIndex(0);
      } else {
        type();
      }
    }, intervalDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentLetterIndex, sentence]);

  const handleCardClick = (title, color) => {
    setSentence(title);
    setColor(color);
  };

  return (
    <>
      <div className="TypeMe typeme1 text-center projects-custom-typed-text">
        <span className="typed-cursor active" style={{ color: color }}>
          {sentence.substring(0, currentLetterIndex)}|
        </span>
      </div>
      <section className="dCard">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <CardD
              {...cardOne}
              color="#FF5000"
              onClick={() => handleCardClick(cardOne.title, "#FF5000")}
            />
          </div>
          <div className="col-lg-3 col-sm-6">
            <CardD
              {...cardTwo}
              color="#1EC19B"
              onClick={() => handleCardClick(cardTwo.title, "#1EC19B")}
            />
          </div>
          <div className="col-lg-3 col-sm-6">
            <CardD
              {...cardThree}
              color="#EE8AA1"
              onClick={() => handleCardClick(cardThree.title, "#EE8AA1")}
            />
          </div>
          <div className="col-lg-3 col-sm-6">
            <CardD
              {...cardFour}
              color="#FFC700"
              onClick={() => handleCardClick(cardFour.title, "#FFC700")}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const CardD = (props) => {
  const { title, image, text, cursor_image, cursor_text, color, onClick } =
    props;

  return (
    <div className="cardBox" onClick={onClick}>
      <div className="cardBG" style={{ background: color }}>
        <img className="cardMainImg" src={image} alt="" />
        <div className="cursor">
          <img src={cursor_image} alt="" />
          <h6>{cursor_text}</h6>
        </div>
      </div>
      <div className="cardHeading">
        <h3 style={{ color: color }}>{text}</h3>
      </div>
    </div>
  );
};

export default Market;
