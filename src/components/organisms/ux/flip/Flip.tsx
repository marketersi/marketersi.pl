import Image from "next/image";
import "./flip.css";
import { useState, useEffect } from "react";

const FlipCard = ({
  frontImageUrl,
  backImageUrl,
  backTopImg,
  name,
  textColor,
  bgColor,
  isFlipping,
  typingText,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    if (isFlipping) {
      const timeoutId = setTimeout(() => {
        setIsFlipped(true);
      }, 500); // Flip after a small delay to allow the previous card to return

      return () => clearTimeout(timeoutId);
    } else {
      setIsFlipped(false);
      setAnimateImage(true); // Trigger the animation when flipping back to the front

      const animationTimeoutId = setTimeout(() => {
        setAnimateImage(false); // Remove the animation class after it finishes
      }, 500);

      return () => clearTimeout(animationTimeoutId);
    }
  }, [isFlipping]);

  return (
    <div className="card">
      <div className={`innerCard ${isFlipped ? "isFlipped" : ""}`}>
        <div className="front" style={{ backgroundColor: bgColor }}>
          <div className="imageContainer">
            <Image
              src={frontImageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              className={`image ${animateImage ? "animate" : ""}`}
            />
          </div>
          <div className="textContainer">
            <h3 className="name" style={{ color: textColor }}>
              {name}
            </h3>
          </div>
        </div>
        <div className="back" style={{ backgroundColor: bgColor }}>
          <div
            className={`backTopImg ${isFlipped ? "isFlipped" : "notFlipped"}`}
          >
            <Image src={backTopImg} alt={`${name} top image`} layout="fill" />
          </div>
          <div className="imageContainer">
            <Image
              src={backImageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="image"
            />
          </div>
          <h3 className="typingEffect">{typingText}</h3>
        </div>
      </div>
    </div>
  );
};

const Flip = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cardsData = [
    {
      frontImageUrl:
        "https://images.prismic.io/marketersi/ZkWX9Sol0Zci9L73_Marketer.400fbd82.webp?auto=format,compress",
      backImageUrl:
        "https://propozycje.owocni.pl/ux/Marketer-Back.5961d2f3.webp",
      backTopImg:
        "https://images.prismic.io/marketersi/ZkWajSol0Zci9L8Y_circal-4-.webp?auto=format,compress",
      name: "Marketer",
      role: "Role 1",
      typingText: "Marketing",
      bgColor: "#ff5000",
      textColor: "#ff5000",
    },
    {
      frontImageUrl:
        "https://images.prismic.io/marketersi/ZkWX-Col0Zci9L76_Handlowiec.a8d7a705.webp?auto=format,compress",
      backImageUrl:
        "https://propozycje.owocni.pl/ux/Handlowiec-Back.14c4f7d8.webp",
      backTopImg:
        "https://images.prismic.io/marketersi/ZkWajCol0Zci9L8X_circal-3-.webp?auto=format,compress",
      name: "Handlowiec",
      role: "Role 2",
      typingText: "Sprzedaz",
      bgColor: "#1ec19b",
      textColor: "#1ec19b",
    },
    {
      frontImageUrl:
        "https://images.prismic.io/marketersi/ZkWX9yol0Zci9L75_Przedsiebiorca.c53428cd.webp?auto=format,compress",
      backImageUrl:
        "https://propozycje.owocni.pl/ux/Wlasciciel-Back.1b7da54d.webp",
      backTopImg:
        "https://images.prismic.io/marketersi/ZkWakCol0Zci9L8Z_circal-1-.webp?auto=format,compress",
      name: "Właściciel",
      role: "Role 3",
      typingText: "Zysk",
      bgColor: "#ee8aa1",
      textColor: "#ee8aa1",
    },
    {
      frontImageUrl:
        "https://images.prismic.io/marketersi/ZkWX9iol0Zci9L74_Klient.b2b41d33.webp?auto=format,compress",
      backImageUrl: "https://propozycje.owocni.pl/ux/Klient-Back.fc7ec369.webp",
      backTopImg:
        "https://images.prismic.io/marketersi/ZkWaiyol0Zci9L8W_circal-2-.webp?auto=format,compress",
      name: "Klient",
      typingText: "Wybor",
      role: "Role 4",
      bgColor: "#ffc700",
      textColor: "#ffc700",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length); // Cycle through the cards
    }, 5000); // Change the interval time if needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [cardsData.length]);

  return (
    <>
      {/* <div className="headingEffect">
        {cardsData.map((card, index) => (
          <h2 key={index} className={currentCardIndex === index ? "" : "hidden"}>
            {card.typingText}
          </h2>
        ))}
      </div> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        className="flipCardContainer"
      >
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
