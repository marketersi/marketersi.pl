import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CoverFlowSlider = () => {
  const carousel = React.useRef(null);

=======

const CoverFlowSlider = () => {

  const carousel =React.useRef(null);
  
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  const { screenData } = useSelector((state) => state.ux);
  const slider = screenData.slider || {};

  const [slideIndex, setSlideIndex] = useState(0);

<<<<<<< HEAD
  const NextArrow = ({ onClick }) => {
    return <FaArrowRight className="custom-arrow next" onClick={onClick} />;
  };
  
  const PrevArrow = ({ onClick }) => {
    return <FaArrowLeft className="custom-arrow prev" onClick={onClick} />;
  };

  
=======
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

>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
<<<<<<< HEAD
    autoplay: true,
    speed: 500,
    dots: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true, // Enable arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
=======
    speed: 500,
    dots: false,
    beforeChange: (current, next) => setSlideIndex(next),

>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  };

  return (
    <div className="slider-container">
<<<<<<< HEAD
      
      <Slider {...settings} className="UxSlider" ref={carousel}>
  {slider?.images?.map((e, index) => {
    return (
      <div key={index} className={index === slideIndex ? "slide slide-active" : "slide"}>
        <a href={e.image_link} target="blank">
          <img src={e.Image} alt={`image ${index + 1}`} />
        </a>
      </div>
    );
  })}
</Slider>;
=======
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
      
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </div>
  );
};

export default CoverFlowSlider;
