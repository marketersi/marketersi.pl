// components/Accordion.js

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";
import { useSelector } from "react-redux";

// Define a type for the items prop
type AccordionItem = {
  title: string;
  description: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const LogoAccordion: React.FC<AccordionProps> = ({ items }) => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { faq } = screenData || {};
  // const { accordion } = faq || {};

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="sec2">
      <div className="copywriter-intro-bg-5-label text-center">
        {faq?.title}
      </div>

      <img
        src={faq?.image}
        className="img-background-logop"
        alt="Projekt prostego loga"
        title="Projekt loga przedstawiający słowo “TAK”"
      />

      <div className="faqContainer">
        {items &&
          items?.map((item, index) => (
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
                <div className="accordion-content">{item.description}</div>
              )}
            </div>
          ))}
      </div>
      <p className="theme-desc projects-theme-desc-p text-center">
        Nawet jeśli nie wiesz, jak powinno wyglądać Twoje <br />
        wymarzone logo, to na pewno je rozpoznasz, <br />
        gdy zobaczysz je wśród propozycji.
      </p>
    </div>
  );
};

export default LogoAccordion;
