// components/Accordion.js

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// Define a type for the items prop
type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Faq: React.FC<AccordionProps> = ({ faqAQ }) => {


  const {faq_ques, faq_ans} = faqAQ || [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Check if items is defined before mapping over it
  return (
    <div>
      <div className="copywriter-intro-bg-5-label text-center">
        Na wszystkie pytania <br />
        odpowiedź brzmi:
      </div>
      <div className="copywriter-text-center copywriter-standard-mtb-40">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Copywriter-FAQ.jpg"
          title="Owocni oferują usługi copywriterskie"
          alt="Reklama, której powiesz tak"
        />
      </div>
      <div className="faqContainer">
      {faqAQ &&
        faqAQ?.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {item.faq_ques}
              {index === activeIndex ? (
                <FontAwesomeIcon icon={faMinus} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faPlus} className="icon" />
              )}
            </div>
            {index === activeIndex && (
              <div className="accordion-content">{item.faq_ans}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
