import React, { useState } from "react";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const images = [
    { img: "https://propozycje.owocni.pl/ux/1.06f8af9e.png" },
    {
      img: "https://propozycje.owocni.pl/ux/3.5d1f2f90.png",
    },
    { img: "https://propozycje.owocni.pl/ux/1.06f8af9e.png" },
  ];

  const imageStyle = (index) => {
    const translateX = `translateX(${(index - currentImage) * 100}%)`;
    return {
      display: currentImage === index ? "block" : "none",
      transform: translateX,
      transition: "transform 0.5s ease-in-out",
    };
  };

  return (
    <>
      <section>
        <div id="makiety" style={{ height: "3995px" }}>
          <h2>
            Funkcjonalna makieta <br />
            <b>user experience</b>
          </h2>
          <div className="arrow">
            <div className="next" onClick={nextSlide}>
              dalej »
            </div>
            <div className="prev" onClick={prevSlide}>
              « cofnij
            </div>
          </div>
          <div
            className="mockupsWrapper"
            style={{ height: "3995px", overflow: "hidden" }}
          >
            <div className="mockups" style={{ display: "flex" }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.img}
                  alt={`Slide ${index + 1}`}
                  style={imageStyle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
