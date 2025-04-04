import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import Flip from "./flip/Flip";

const intervalDuration = 5000; 
const typingSpeed = 150;

function Market() {
  // const { screenData } = useSelector((state) => state.ux);
  // const { cardOne, cardTwo, cardThree, cardFour } = screenData.market || {};
  
  // const cards = [
  //   { title: cardOne?.title, color: "#FF5000" },
  //   { title: cardTwo?.title, color: "#1EC19B" },
  //   { title: cardThree?.title, color: "#EE8AA1" },
  //   { title: cardFour?.title, color: "#FFC700" }
  // ];

  // const [currentCardIndex, setCurrentCardIndex] = useState(0);
  // const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  // const [sentence, setSentence] = useState("");
  // const [color, setColor] = useState("#FF5000");

  // useEffect(() => {
  //   if (cards[currentCardIndex]?.title) {
  //     setSentence(cards[currentCardIndex].title);
  //     setColor(cards[currentCardIndex].color);
  //     setCurrentLetterIndex(0);
  //   }
  // }, [currentCardIndex]);

  // useEffect(() => {
  //   let typingTimeout;

  //   const type = () => {
  //     setCurrentLetterIndex((prevIndex) => prevIndex + 1);
  //     typingTimeout = setTimeout(type, typingSpeed);
  //   };

  //   type();

  //   return () => {
  //     clearTimeout(typingTimeout);
  //   };
  // }, [sentence]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  //   }, intervalDuration);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [cards.length]);

  return (
    <>
      {/* <div className="TypeMe typeme1 text-center projects-custom-typed-text">
        <span className="typed-cursor active" style={{ color: color }}>
          {sentence.substring(0, currentLetterIndex)}|
        </span>
      </div> */}
      <Flip />
      
=======

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
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </>
  );
}

<<<<<<< HEAD

=======
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
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

export default Market;
