import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactMap = () => {
  const { isLoading, screenData } = useSelector((state) => state.contact);
  const { feedback } = screenData || {};

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedback.length);
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

      {feedback &&
        feedback.map((item, index) => {
          const isCurrent = index === currentIndex;
          return (
            <div
              className={`map_content ${isCurrent ? "visible" : "hidden"}`}
              key={index}
            >
              {isCurrent && (
                <>
                  <p>Województwo</p>
                  <h3>{item.feedback_title}</h3>
                  <h4>{item.feedback_content}</h4>
                  <p>{item.feedback_subtitle}</p>
                  <p className="map_bottom_p">
                    {/* <span>Tomasz Kopacz,</span> MoneyWell, Rzeszów */}
                    {item.feedback_address}
                  </p>
                </>
              )}
            </div>
          );
        })}

      <div className="map_button">
        <button>Nasi klienci</button>
        <a className="map_play" onClick={showNextFeedback}>
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
