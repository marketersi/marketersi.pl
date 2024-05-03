import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import { useSelector } from "react-redux";

const CoverFlowSlider = () => {

  const carousel =React.useRef(null);
  
  const { screenData } = useSelector((state) => state.ux);
  const slider = screenData.slider || {};

  const [slideIndex, setSlideIndex] = useState(0);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="arrow arrow-right">
        dalej »
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow arrow-left" onClick={onClick}>
        « cofnij
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    beforeChange: (current, next) => setSlideIndex(next),

  };

  return (
    <div className="slider-container">
      <div className="UxBtn">
            <button onClick={() => carousel?.current?.slickPrev()} className="leftBtn">
            « cofnij 
            </button>
            <button onClick={() => carousel?.current?.slickNext()} className="rightBtn">
            dalej » 
            </button>
          </div>
      <Slider {...settings} className="UxSlider" ref={carousel}>
        {slider?.images?.map((e, index) => {
          return (
            <div
              key={index}
              className={index === slideIndex ? "slide slide-active" : "slide"}
            >
              <img src={e.Image} alt={`image ${index + 1}`} />
            </div>
          );
        })}
      </Slider>
      
    </div>
  );
};

export default CoverFlowSlider;
