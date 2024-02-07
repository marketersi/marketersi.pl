import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContactMap = () => {
  const { isLoading, screenData } = useSelector((state) => state.contact);
  const { feedback } = screenData || {};

  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <>
      <Image src="/assets/images/contact/mapakontakt.avif" alt="" />

      {[...Array(16)].map((_, index) => (
        <PlusIconContainer
          key={index}
          onClick={() => console.log(`btn ${index + 1} clicked`)}
          className={`icon${index + 1}`}
        />
      ))}

      {feedback && (
        <Slider {...settings} initialSlide={currentSlide}>
          {feedback.map((item, index) => (
            <div className="map_content" key={index}>
              <p>Województwo</p>
              <h3>{item.feedback_title}</h3>
              <h4>{item.feedback_content}</h4>
              <p>{item.feedback_subtitle}</p>
              <p className="map_bottom_p">{item.feedback_address}</p>
            </div>
          ))}
        </Slider>
      )}

      <div className="map_button">
        <button>Nasi klienci</button>
        <a href="/" className="map_play">
          <span>Następna opinia</span>
          <div className="play">
            <Image src="/assets/images/play_arrow.svg" />
          </div>
        </a>
      </div>
    </>
  );
};

export default ContactMap;

const PlusIconContainer = ({ onClick, className }) => {
  return (
    <div className={`plus_icon_container ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};
