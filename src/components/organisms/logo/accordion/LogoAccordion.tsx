// components/Accordion.js

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './accordion.css'

// Define a type for the items prop
type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const LogoAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="copywriter-intro-bg-5-label text-center" id="sec2">
          Na wszystkie pytania <br />
          odpowiedź brzmi:
        </div>

        <img
          src="/assets/images/logo-design/Projekt-loga-tak.jpg.webp"
          className="img-background-logop"
          alt="Projekt prostego loga"
          title="Projekt loga przedstawiający słowo “TAK”"
        />
     
      <div className="faqContainer">
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
