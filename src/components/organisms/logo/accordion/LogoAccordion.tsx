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
  const { screenData: logoData } = useSelector((state) => state.logo);
  const { LogoAccordionData } = logoData || {};

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="sec2">
      <div className="copywriter-intro-bg-5-label text-center">
        {LogoAccordionData?.title}
      </div>

      <img
        src={LogoAccordionData?.description}
        className="img-background-logop"
        alt="tak_image"
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
                <div className="accordion-content">{item.content}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LogoAccordion;
