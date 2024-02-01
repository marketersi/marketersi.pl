// components/Accordion.js

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./yes.css";

// Define a type for the items prop
type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const YesAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      
      <div className="faqContainer">
        <div className="header__top__left" >
        <h2
          className="textAnimation"
          style={{
            opacity: 1,
            transform: "translate(0px, 0px)",
          }}
        >
          Na wszystkie pytania 
          odpowiedź brzmi TAK!
        </h2>
        </div>
        {items &&
          items.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item.title}
                {index === activeIndex ? (
                  <FontAwesomeIcon icon={faMinus} className="icon" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="icon" />
                )}
              </div>
              {index === activeIndex && (
                <div className="accordion-content">{item.content}</div>
              )}
            </div>
          ))}
        <a className="send-offer-button js--triggerAnimation">
          <span>
            <span>OK Wyślijcie mi niezobowiązującą ofertę </span>
          </span>
        </a>
      </div>
    </>
  );
};

export default YesAccordion;
