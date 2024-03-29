import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./yes.css";
import { useSelector } from "react-redux";

const YesAccordion = () => {
  const { screenData } = useSelector((state) => state.strategy);
  const { FAQsection } = screenData;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="faqContainer">
        <div className="header__top__left">
          {/* <h2
          className="textAnimation"
          style={{
            opacity: 1,
            transform: "translate(0px, 0px)",
          }}
        >
          {FAQsection?.title}
        </h2> */}
        </div>
        {FAQsection?.FAQcard.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div style={{ flex: 1 }}>{item.question}</div>

              {/* Animated Text */}
              <div className="yes_accordion_animated_text">
                <span>T</span>
                <span>A</span>
                <span>K</span>
              </div>

              {index === activeIndex ? (
                <FontAwesomeIcon icon={faMinus} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faPlus} className="icon" />
              )}
            </div>
            {index === activeIndex && (
              <div className="accordion-content">{item.answer}</div>
            )}
          </div>
        ))}
        {/* <a className="send-offer-button js--triggerAnimation">
          <span>
            <span>OK Wyślijcie mi niezobowiązującą ofertę </span>
          </span>
        </a> */}
      </div>
    </>
  );
};

export default YesAccordion;
