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

  const [glowIndex, setGlowIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomGlowIndex = Math.floor(Math.random() * 16) + 1;
      setGlowIndex(randomGlowIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

  // --------------------

  // ----------------------------------------------------------------

  return (
    <div className="map_container">
      <Image src="/assets/images/contact/mapakontakt.avif" alt="" />

      {/* Icon Container */}
      <>
        <div
          className={`icon1 plus_icon_container ${
            activeFeedback === "Zachodniopomorskie" ? "active" : ""
          }  ${glowIndex === 1 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Zachodniopomorskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon2 plus_icon_container ${
            activeFeedback === "Pomorskie" ? "active" : ""
          } ${glowIndex === 2 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Pomorskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon3 plus_icon_container ${
            activeFeedback === "Warmińsko-Mazurskie" ? "active" : ""
          } ${glowIndex === 3 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Warmińsko-Mazurskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon4 plus_icon_container ${
            activeFeedback === "Lubuskie" ? "active" : ""
          } ${glowIndex === 4 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Lubuskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon5 plus_icon_container ${
            activeFeedback === "Wielkopolskie" ? "active" : ""
          } ${glowIndex === 5 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Wielkopolskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon6 plus_icon_container ${
            activeFeedback === "Kujawsko-Pomorskie" ? "active" : ""
          } ${glowIndex === 6 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Kujawsko-Pomorskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon7 plus_icon_container ${
            activeFeedback === "Mazowieckie" ? "active" : ""
          } ${glowIndex === 7 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Mazowieckie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon8 plus_icon_container ${
            activeFeedback === "Podlaskie" ? "active" : ""
          } ${glowIndex === 8 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Podlaskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon9 plus_icon_container ${
            activeFeedback === "Dolnośląskie" ? "active" : ""
          } ${glowIndex === 9 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Dolnośląskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon10 plus_icon_container ${
            activeFeedback === "Łódzkie" ? "active" : ""
          } ${glowIndex === 10 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Łódzkie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon11 plus_icon_container ${
            activeFeedback === "Opolskie" ? "active" : ""
          } ${glowIndex === 11 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Opolskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon12 plus_icon_container ${
            activeFeedback === "Śląskie" ? "active" : ""
          } ${glowIndex === 12 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Śląskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon13 plus_icon_container ${
            activeFeedback === "Małopolskie" ? "active" : ""
          } ${glowIndex === 13 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Małopolskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon14 plus_icon_container ${
            activeFeedback === "Świętokrzyskie" ? "active" : ""
          } ${glowIndex === 14 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Świętokrzyskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon15 plus_icon_container ${
            activeFeedback === "Lubelskie" ? "active" : ""
          } ${glowIndex === 15 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Lubelskie")}
        >
          <span>+</span>
        </div>

        <div
          className={`icon16 plus_icon_container ${
            activeFeedback === "Podkarpackie" ? "active" : ""
          } ${glowIndex === 16 ? "glow" : ""}`}
          onClick={() => handleShowFeedback("Podkarpackie")}
        >
          <span>+</span>
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
