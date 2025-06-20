// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";

// const CustomerReview4 = () => {
//   const { screenData } = useSelector((state) => state.anatomy);
//   const { implementation } = screenData || {};
//   const { example2 } = implementation || {};
//   console.log(implementation);

//   const [isModal, setIsModal] = useState(false);

//   const handleModalClose = () => {
//     setIsModal(!isModal);
//   };
//   return (
//     <section className="projects-gray-opinion-1">
//       <div className="container projects-opinion-box-container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="opinion-box">
//               <div className="opinion-box-image opinion-box-image-right right-image-opinion-fix custom-text-align-right">
//                 <img
//                   className="opinion-box-inside-image"
//                   src={example2?.[0].customer_image}
//                   title="Kobieta zadowolona z efektu tworzenia nazwy dla firm"
//                   alt="Klientka zadowolona z procesu jakim jest tworzenie nazw"
//                 />
//               </div>

//               <div className="opinion-box-content opinion-box-content-left projects-opinion-2 naming-opinion-text">
//                 <p className="theme-desc projects-client-opinion-p text-center">
//                   <strong>{example2?.[0].customer_quote}</strong>
//                 </p>
//                 <div className="opinion-box-text">
//                 "{example2?.[0].customer_description}"
//                 </div>
//                 {/* <div className="quoteBtn btn-hover"> */}
//                   <button
//                     className="download-catalog-button names-new-btn send-offer-button  js--triggerAnimation pnazw-opinion-btn"
//                     type="button"
//                     onClick={() => setIsModal(true)}
//                   >
//                     Brzmi świetnie. Wyślijcie mi ofertę
//                   </button>
//                 {/* </div> */}
//               </div>
//               <div className="clearfix"></div>
//             </div>
//           </div>
//           <div className="col-md-12 projects-empty-opinion-box"></div>
//         </div>
//       </div>
//       <ModalForm isOpen={isModal} onClose={handleModalClose} />
//     </section>
//   );
// };

// export default CustomerReview4;
import React, { useState, useEffect } from "react"; // Make sure to import useEffect
import { useSelector } from "react-redux";
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm"; // Ensure correct path

const CustomerReview4 = () => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example2 } = implementation || {};
  console.log(implementation); // You might want to remove this console.log in production

  const [isModal, setIsModal] = useState(false);

  // Function to open the modal and push a state to browser history
  const openModal = () => {
    setIsModal(true);
    // Push a new state to the history when the modal opens.
    // This allows us to intercept the back button and close the modal.
    // The URL remains the same (window.location.pathname) to avoid actual navigation.
    window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModal(false);
    // Optional: If you want to explicitly go back in history when the modal is closed
    // manually (e.g., by clicking the 'X' button inside the modal), you can uncomment
    // the following lines. However, be cautious with this as it can interfere with
    // natural browser navigation. The popstate listener below usually suffices.
    // if (window.history.state && window.history.state.modalOpen) {
    //   window.history.back();
    // }
  };

  // useEffect hook to manage browser history for the modal
  useEffect(() => {
    // This function handles the 'popstate' event, which fires when
    // the active history entry changes (e.g., user clicks browser's back/forward button).
    const handlePopState = (event) => {
      // Check if the state associated with the history entry contains our custom 'modalOpen' flag.
      if (event.state && event.state.modalOpen) {
        setIsModal(false); // Close the modal if our specific state is found
      } else if (isModal) {
        // If the modal is open but the popstate event isn't for our modal state,
        // it means the user clicked back to a state before the modal was opened.
        // In this scenario, if the modal is currently open, we should still close it.
        setIsModal(false);
      }
    };

    // Add the 'popstate' event listener when the component mounts
    window.addEventListener('popstate', handlePopState);

    // Return a cleanup function to remove the event listener when the
    // component unmounts or before the effect re-runs (if dependencies change).
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModal]); // Dependency array: Effect re-runs if 'isModal' state changes,
                  // ensuring 'handlePopState' always has access to the latest 'isModal' value.

  return (
    <section className="projects-gray-opinion-1">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image opinion-box-image-right right-image-opinion-fix custom-text-align-right">
                <img
                  className="opinion-box-inside-image"
                  src={example2?.[0].customer_image}
                  title="Kobieta zadowolona z efektu tworzenia nazwy dla firm"
                  alt="Klientka zadowolona z procesu jakim jest tworzenie nazw"
                />
              </div>

              <div className="opinion-box-content opinion-box-content-left projects-opinion-2 naming-opinion-text">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>{example2?.[0].customer_quote}</strong>
                </p>
                <div className="opinion-box-text">
                  "{example2?.[0].customer_description}"
                </div>
                {/* <div className="quoteBtn btn-hover"> */}
                <button
                  className="download-catalog-button names-new-btn send-offer-button js--triggerAnimation pnazw-opinion-btn"
                  type="button"
                  onClick={openModal} // Changed to call openModal
                >
                  Brzmi świetnie. Wyślijcie mi ofertę
                </button>
                {/* </div> */}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-12 projects-empty-opinion-box"></div>
        </div>
      </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </section>
  );
};

export default CustomerReview4;