// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// import "./accordion.css";
// import { useSelector } from "react-redux";
// import ProjectuxModal from "../../modals/ProjectuxModal";
// // import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";


// const UXAccordion = () => {
//   const { screenData } = useSelector((state) => state.ux);
//   const FAQ = screenData.FAQ || {};

//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleClick = (index: number) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

  
//   // const [isModal, setIsModal] = useState(false);

//   // const handleModalClose = () => {
//   //   setIsModal(!isModal);
//   // };

//    const [isModalOpen, setModalOpen] = useState(false);
  
//     const openModal = () => setModalOpen(true);
//     const closeModal = () => setModalOpen(false);


//   return (
//     <>
//       <div className="faqContainer ">
//         <div className="header__top__left">
//           <h2
//             className="textAnimation"
//             style={{
//               opacity: 1,
//               transform: "translate(0px, 0px)",
//             }}
//           >
//             Odpowiedź jest <br/> zawsze jedna:
//             {/* {FAQ?.FAQTitle?.title} */}
//           </h2>
//           <img src="https://images.prismic.io/marketersi/Z35wjZbqstJ99K0__TAK!-1-.png?auto=format,compress" alt="" className="takImages"/>
//         </div>
//         {FAQ.FAQCard &&
//           FAQ.FAQCard.map((item, index) => (
//             <div
//       key={index}
//       className={`accordion-item ${index === activeIndex ? "active" : ""}`}
//     >
//               <div
//         className="accordion-title"
//         onClick={() => handleClick(index)}
//       >
//                 {item.question}
//                 {index === activeIndex ? (
//                   <FontAwesomeIcon icon={faMinus} className="icon" />
//                 ) : (
//                   <FontAwesomeIcon icon={faPlus} className="icon" />
//                 )}
//               </div>
//               {index === activeIndex && (
//                 <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                
//               )}

//             </div>







//           ))}
//         <a className="send-offer-button js--triggerAnimation" onClick={openModal}>
          
//             Brzmi świetnie. Wyślijcie mi ofertę 
          
//         </a>
//       </div>
//             {/* <ModalForm isOpen={isModal} onClose={handleModalClose} /> */}
//             <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal}/>
//     </>
//   );
// };

// export default UXAccordion;

"use client"; // This directive is necessary in Next.js 13+ App Router for client-side components

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css"; // Ensure this CSS file exists and is correctly styled
import { useSelector } from "react-redux";
import ProjectuxModal from "../../modals/ProjectuxModal"; // Path to your modal component
import { useSearchParams, useRouter } from "next/navigation"; // Next.js specific hooks

const UXAccordion = () => {
  // Redux state for FAQ data
  const { screenData } = useSelector((state) => state.ux);
  const FAQ = screenData.FAQ || {};

  // State for controlling which accordion item is open
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle accordion item visibility
  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Next.js hooks for URL manipulation and reading search parameters
  const searchParams = useSearchParams();
  const router = useRouter();

  // Determine if the modal should be open based on the 'uxModal' search parameter in the URL
  const isModalOpen = searchParams.get("uxModal") === "open";

  // Function to open the modal by adding 'uxModal=open' to the URL
  const openModal = () => {
    // router.push changes the URL without a full page reload and adds to browser history
    router.push("?uxModal=open", { scroll: false }); // { scroll: false } prevents page from jumping to top
  };

  // Function to close the modal by removing 'uxModal' from the URL
  const closeModal = () => {
    // This pushes the current pathname (without search params) to the history, effectively closing the modal
    router.push(window.location.pathname, { scroll: false });
  };

  // Optional: useEffect to handle initial state or other side effects if the modal is opened/closed via URL
  useEffect(() => {
    if (isModalOpen) {
      // You can add any specific logic here that should run when the modal becomes visible
      // (e.g., body scroll lock, analytics events)
    } else {
      // Logic for when the modal closes
    }
  }, [isModalOpen]); // Rerun this effect whenever isModalOpen changes

  return (
    <>
      <div className="faqContainer ">
        <div className="header__top__left">
          <h2
            className="textAnimation"
            style={{
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            Odpowiedź jest <br /> zawsze jedna:
            {/* You can uncomment this if FAQTitle is part of your Redux state */}
            {/* {FAQ?.FAQTitle?.title} */}
          </h2>
          <img
            src="https://images.prismic.io/marketersi/Z35wjZbqstJ99K0__TAK!-1-.png?auto=format,compress"
            alt="TAK!"
            className="takImages"
          />
        </div>
        {/* Render FAQ accordion items if FAQ.FAQCard data exists */}
        {FAQ.FAQCard &&
          FAQ.FAQCard.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="accordion-title" onClick={() => handleClick(index)}>
                {item.question}
                {/* Toggle plus/minus icon based on active state */}
                {index === activeIndex ? (
                  <FontAwesomeIcon icon={faMinus} className="icon" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="icon" />
                )}
              </div>
              {/* Render content only if accordion item is active */}
              {index === activeIndex && (
                <div
                  className="accordion-content"
                  // Using dangerouslySetInnerHTML if the answer contains HTML content
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></div>
              )}
            </div>
          ))}
        {/* Button to open the modal */}
        <a className="send-offer-button js--triggerAnimation" onClick={openModal}>
          Brzmi świetnie. Wyślijcie mi ofertę
        </a>
      </div>
      {/* ProjectuxModal component, controlled by the isModalOpen state derived from URL */}
      <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

export default UXAccordion;