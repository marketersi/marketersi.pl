import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ThickPlus } from "./ThickPlus";

const ContactMap = () => {
  const { isLoading, screenData } = useSelector((state) => state.contact);
  const { feedback } = screenData || {};

  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [activeFeedback, setActiveFeedback] = useState(null);

  useEffect(() => {
    if (feedback && feedback.length > 0) {
      setSelectedFeedback(feedback[0]);
      setActiveFeedback(feedback[0].provinces);
    }
  }, [feedback]);

  const handleShowFeedback = (province) => {
    const matchedFeedback = feedback.find((item) => {
      return item.provinces.toLowerCase() === province.toLowerCase();
    });

    if (matchedFeedback) {
      setSelectedFeedback(matchedFeedback);
      setActiveFeedback(province);
    }
  };

  return (
    <div className="map_container">
      <Image src="/assets/images/contact/mapakontakt.avif" alt="" />

      {/* Icon Container */}
      <>
        <div
          className={`icon1 plus_icon_container ${
            activeFeedback === "Zachodniopomorskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Zachodniopomorskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon2 plus_icon_container ${
            activeFeedback === "Pomorskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Pomorskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon3 plus_icon_container ${
            activeFeedback === "Warmińsko-Mazurskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Warmińsko-Mazurskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon4 plus_icon_container ${
            activeFeedback === "Lubuskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Lubuskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon5 plus_icon_container ${
            activeFeedback === "Wielkopolskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Wielkopolskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon6 plus_icon_container ${
            activeFeedback === "Kujawsko-Pomorskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Kujawsko-Pomorskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon7 plus_icon_container ${
            activeFeedback === "Mazowieckie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Mazowieckie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon8 plus_icon_container ${
            activeFeedback === "Podlaskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Podlaskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon9 plus_icon_container ${
            activeFeedback === "Dolnośląskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Dolnośląskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon10 plus_icon_container ${
            activeFeedback === "Łódzkie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Łódzkie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon11 plus_icon_container ${
            activeFeedback === "Opolskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Opolskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon12 plus_icon_container ${
            activeFeedback === "Śląskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Śląskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon13 plus_icon_container ${
            activeFeedback === "Małopolskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Małopolskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon14 plus_icon_container ${
            activeFeedback === "Świętokrzyskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Świętokrzyskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon15 plus_icon_container ${
            activeFeedback === "Lubelskie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Lubelskie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div
          className={`icon16 plus_icon_container ${
            activeFeedback === "Podkarpackie" ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Podkarpackie")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </>
      {/* Icon container ends */}

      {selectedFeedback && (
        <div className="map_content">
          <p>Województwo</p>
          <h3>{selectedFeedback?.feedback_title}</h3>
          <h4>{selectedFeedback?.feedback_content}</h4>
          <p>{selectedFeedback?.feedback_subtitle}</p>
          <p className="map_bottom_p">
            {selectedFeedback?.company_name}, {selectedFeedback?.capital_city}
          </p>
        </div>
      )}

      <div className="map_button">
        <Link className="nasiBtn" href="/owocni-opinie">
          Nasi klienci
        </Link>
        <Link href="" className="map_play">
          <span>Następna opinia</span>
          <div className="play">
            <Image src="/assets/images/play_arrow.svg" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactMap;
