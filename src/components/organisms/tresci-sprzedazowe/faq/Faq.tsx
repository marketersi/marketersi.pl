<<<<<<< HEAD
=======
// components/Accordion.js
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
=======
// Define a type for the items prop
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Faq: React.FC<AccordionProps> = ({ faq }) => {
  const {faqAQ} = faq || [];


  const {faq_ques, faq_ans} = faqAQ || [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

<<<<<<< HEAD
  return (
    <div>
      <div className="copywriter-intro-bg-5-label text-center text-change">
        {/* {faq?.main_title}  */}
        Odpowiedź jest zawsze jedna 
=======
  // Check if items is defined before mapping over it
  return (
    <div>
      <div className="copywriter-intro-bg-5-label text-center">
        {faq?.main_title}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </div>
      <div className="copywriter-text-center copywriter-standard-mtb-40">
        <img
          src={faq?.image}
          title="Owocni oferują usługi copywriterskie"
          alt="Reklama, której powiesz tak"
        />
      </div>
<<<<<<< HEAD
      <div className="faqContainer ">
      {faqAQ &&
        faqAQ?.map((item, index) => (
          <div key={index} className={`accordion-item ${index === activeIndex ? "active" : ""}`}>
            <div
              className="accordion-title"
=======
      <div className="faqContainer">
      {faqAQ &&
        faqAQ?.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${
                index === activeIndex ? "active" : ""
              }`}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
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
<<<<<<< HEAD
              <div className="accordion-content faqcontent" dangerouslySetInnerHTML={{ __html: item.faq_ans }}></div>
              
            )}
          </div>
          
=======
              <div className="accordion-content">{item.faq_ans}</div>
            )}
          </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        ))}
      </div>
    </div>
  );
};

export default Faq;
