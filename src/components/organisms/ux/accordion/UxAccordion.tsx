import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import ProjectuxModal from "../../modals/ProjectuxModal";
// import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";

=======
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const UXAccordion = () => {
  const { screenData } = useSelector((state) => state.ux);
  const FAQ = screenData.FAQ || {};

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  
<<<<<<< HEAD
  // const [isModal, setIsModal] = useState(false);

  // const handleModalClose = () => {
  //   setIsModal(!isModal);
  // };

   const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
=======
  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936


  return (
    <>
<<<<<<< HEAD
      <div className="faqContainer ">
=======
      <div className="faqContainer">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        <div className="header__top__left">
          <h2
            className="textAnimation"
            style={{
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
<<<<<<< HEAD
            Odpowiedź jest <br/> zawsze jedna:
            {/* {FAQ?.FAQTitle?.title} */}
          </h2>
          <img src="https://images.prismic.io/marketersi/Z35wjZbqstJ99K0__TAK!-1-.png?auto=format,compress" alt="" className="takImages"/>
        </div>
        {FAQ.FAQCard &&
          FAQ.FAQCard.map((item, index) => (
            <div
      key={index}
      className={`accordion-item ${index === activeIndex ? "active" : ""}`}
    >
              <div
        className="accordion-title"
        onClick={() => handleClick(index)}
      >
=======
            {FAQ?.FAQTitle?.title}
          </h2>
        </div>
        {FAQ.FAQCard &&
          FAQ.FAQCard.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
                {item.question}
                {index === activeIndex ? (
                  <FontAwesomeIcon icon={faMinus} className="icon" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="icon" />
                )}
              </div>
              {index === activeIndex && (
<<<<<<< HEAD
                <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                
              )}

            </div>







          ))}
        <a className="send-offer-button js--triggerAnimation" onClick={openModal}>
          
            Brzmi świetnie. Wyślijcie mi ofertę 
          
        </a>
      </div>
            {/* <ModalForm isOpen={isModal} onClose={handleModalClose} /> */}
            <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal}/>
=======
                <div className="accordion-content">{item.answer}</div>
              )}
            </div>
          ))}
        <a className="send-offer-button js--triggerAnimation">
          <span>
            <span onClick={() => setIsModal(true)}>OK Wyślijcie mi niezobowiązującą ofertę </span>
          </span>
        </a>
      </div>
            <ModalForm isOpen={isModal} onClose={handleModalClose} />
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </>
  );
};

export default UXAccordion;
