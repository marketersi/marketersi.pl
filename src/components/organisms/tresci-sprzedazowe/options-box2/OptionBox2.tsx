// import React, { useState } from "react";
// import "../tresci.css";
// import { ModalForm } from "../ModalForm";

// const OptionBox2 = ({ optionBox2 }) => {
//   const {
//     background_image = "",
//     description = "",
//     title = "",
//     btn_title = "",
//   } = optionBox2 || {};

//   const [isModal, setIsModal] = useState(false);

//   const handleModalClose = () => {
//     setIsModal(!isModal);
//   };
//   return (
//     <div>
//       <section className="projects-gray-opinion-2">
//         <div className="container projects-opinion-box-container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="opinion-box">
//                 <div className="opinion-box-image">
//                   <img
//                     className="opinion-box-inside-image"
//                     src={background_image}
//                     title="Usługi copywriterskie dla różnych branż"
//                     alt="Opinia klienta jest bardzo ważna dla agencji marketingowej"
//                   />
//                 </div>
//                 <div className="opinion-box-content projects-opinion-2 copywriter-prawo-text">
//                   <p className="text-center optonsahgasds review-card-text">
//                     {/* {title} */}
//                     <strong>Gwarantowane rezultaty albo zwrot pieniędzy</strong>
//                   </p>
//                   <div className="opinion-box-text copywriter-opinion-box-text">
//                     {/* {description} */}
//                     Nie obiecujemy Ci tylko słów - obiecujemy rezultaty.
//                     Gwarantujemy, że nasze treści przyniosą wymierne efekty,
//                     albo zwrócimy Ci 100% inwestycji. Tak, jesteśmy aż tak pewni
//                     skuteczności naszych tekstów.
//                   </div>

//                   <button
//                     onClick={() => setIsModal(true)}
//                     className=" download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
//                     type="button"
//                   >
//                     {/* <strong>{btn_title}</strong> */}
//                     Brzmi świetnie. Wyślijcie mi ofertę.
//                   </button>
//                 </div>
//                 <div className="clearfix"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ModalForm isOpen={isModal} onClose={handleModalClose} />
//     </div>
//   );
// };

// export default OptionBox2;
import React, { useState, useEffect } from "react"; // Make sure useEffect is imported
import "../tresci.css";
import { ModalForm } from "../ModalForm";

const OptionBox2 = ({ optionBox2 }) => {
  const {
    background_image = "",
    description = "",
    title = "",
    btn_title = "",
  } = optionBox2 || {};

  const [isModal, setIsModal] = useState(false);

  // Function to open the modal and push a state to browser history
  const openModal = () => {
    setIsModal(true);
    // Push a new state to the history when the modal opens.
    // The state object ({ modalOpen: true }) helps us identify this history entry.
    // window.location.pathname keeps the URL the same, preventing actual navigation.
    window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModal(false);
    // Optional: If you want to explicitly go back in history when the modal is closed
    // manually (e.g., by clicking the 'X' button inside the modal), you can uncomment
    // the following lines. However, be cautious as it can create unexpected navigation
    // behavior if not handled carefully. The `popstate` listener generally handles
    // the browser's back button action effectively.
    // if (window.history.state && window.history.state.modalOpen) {
    //   window.history.back();
    // }
  };

  // useEffect hook to manage browser history for the modal
  useEffect(() => {
    // This function handles the 'popstate' event, which fires when the active history
    // entry changes (e.g., user clicks browser's back or forward button).
    const handlePopState = (event) => {
      // Check if the state associated with the history entry contains our custom 'modalOpen' flag.
      if (event.state && event.state.modalOpen) {
        setIsModal(false); // If our specific state is found, close the modal.
      } else if (isModal) {
        // This handles cases where the modal is open, but the 'popstate' event
        // is not for an entry we specifically pushed (e.g., user clicked back
        // to a state before the modal was ever opened on this session).
        // If the modal is currently open, we still want to close it.
        setIsModal(false);
      }
    };

    // Add the 'popstate' event listener when the component mounts.
    window.addEventListener('popstate', handlePopState);

    // Return a cleanup function to remove the event listener when the
    // component unmounts or before the effect re-runs (if dependencies change).
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModal]); // Dependency array: Effect re-runs if 'isModal' state changes,
                  // ensuring 'handlePopState' always has access to the latest 'isModal' value.

  return (
    <div>
      <section className="projects-gray-opinion-2">
        <div className="container projects-opinion-box-container">
          <div className="row">
            <div className="col-md-12">
              <div className="opinion-box">
                <div className="opinion-box-image">
                  <img
                    className="opinion-box-inside-image"
                    src={background_image}
                    title="Usługi copywriterskie dla różnych branż"
                    alt="Opinia klienta jest bardzo ważna dla agencji marketingowej"
                  />
                </div>
                <div className="opinion-box-content projects-opinion-2 copywriter-prawo-text">
                  <p className="text-center optonsahgasds review-card-text">
                    {/* {title} */}
                    <strong>Gwarantowane rezultaty albo zwrot pieniędzy</strong>
                  </p>
                  <div className="opinion-box-text copywriter-opinion-box-text">
                    {/* {description} */}
                    Nie obiecujemy Ci tylko słów - obiecujemy rezultaty.
                    Gwarantujemy, że nasze treści przyniosą wymierne efekty,
                    albo zwrócimy Ci 100% inwestycji. Tak, jesteśmy aż tak pewni
                    skuteczności naszych tekstów.
                  </div>

                  <button
                    onClick={openModal} // Changed to call the new openModal function
                    className=" download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
                    type="button"
                  >
                    {/* <strong>{btn_title}</strong> */}
                    Brzmi świetnie. Wyślijcie mi ofertę.
                  </button>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </div>
  );
};

export default OptionBox2;