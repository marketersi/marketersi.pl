// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { ModalForm } from "../ModalForm";
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
// import useOsClass from "@/components/molecules/useOsClass";
// import dynamic from 'next/dynamic';

// const SalesBanner = () => {
//   const { screenData } = useSelector((state) => state.sales);
//   const { heroSection } = screenData || {};

//   const osClass = useOsClass();

//   const [isModal, setIsModal] = useState(false);

//   const handleModalClose = () => {
//     setIsModal(!isModal);
//   };

//   return (
//     <>
//       <section className="sales_banner copywriter-page">
//         <div className="container-fluid">
//           <div className="top-section-banner-text">
//             <div className="row align-items-center">
//               <div className="col-md-6 names-top-banner-container">
//                 <div className="top-banner-text projects-top-banner-text">
//                   <h1 className="top-banner-title copywriter-top-banner-title">
//                     {/* {heroSection?.main_title}  */}
//                     Zmień słowa <br />
//                     w magnes
//                     <br />
//                     na klientów:
//                     <br />
//                     Od Słów
//                     <br />
//                     do Wyników
//                   </h1>
//                   <h2 className="top-banner-long-text copywriter-top-banner-long-text ">
//                     {heroSection?.sub_title}
//                   </h2>
//                 </div>
//                 <div className="part-sec old-btn">
//                   <button
//                     onClick={() => setIsModal(true)}
//                     className="btn btn-green send-offer-button js--triggerAnimation"
//                   >
//                     Brzmi świetnie. Wyślijcie mi ofertę.
//                   </button>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 {/* <img
//               style={{ maxWidth: '100%' }}
//               src={heroSection?.image}
//               className=""
//               title="Owocni wiedzą, jak się pisze teksty na stronę"
//               alt="Uśmiechnięci copywriterzy"
//             /> */}
//                 <ReactPlayer
//                   url={heroSection?.image}
//                   playing={true}
//                   loop={true}
//                   width="100%"
//                   height="100%"
//                   muted={true}
//                   pip={false}
//                   playsinline
//                   style={{ margin: "0 auto" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <ModalForm isOpen={isModal} onClose={handleModalClose} />
//       </section>
//     </>
//   );
// };

// export default SalesBanner;

// sales_banner/SalesBanner.tsx
"use client"; // This directive is important for Next.js Client Components

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ModalForm } from "../ModalForm"; // Assuming ModalForm is correctly imported
import dynamic from 'next/dynamic';

// Dynamically import ReactPlayer to ensure it's only loaded on the client-side
// This prevents issues with ReactPlayer trying to access browser APIs during SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

// Assuming useOsClass is a custom hook you have that determines OS class
import useOsClass from "@/components/molecules/useOsClass";

const SalesBanner = () => {
  // Accessing screenData from the Redux store's 'sales' slice
  const { screenData } = useSelector((state) => state.sales);
  // Destructuring heroSection from screenData, with a fallback for safety
  const { heroSection } = screenData || {};

  // Custom hook usage (if needed, otherwise can be removed if not used in JSX)
  const osClass = useOsClass();

  // State to control the visibility of the modal form
  const [isModal, setIsModal] = useState(false);

  // Function to open the modal and push a state to browser history
  const openModal = () => {
    setIsModal(true);
    // Push a new state to the browser's session history stack.
    // This state object ({ modalOpen: true }) helps us identify our modal's history entry.
    // The URL remains the same (window.location.pathname) to avoid actual navigation.
    window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModal(false);
  };

  // useEffect hook to manage browser history for the modal
  useEffect(() => {
    // This function handles the 'popstate' event, which fires when
    // the active history entry changes (e.g., user clicks browser's back/forward button).
    const handlePopState = (event) => {
      // Check if the state associated with the history entry contains our custom 'modalOpen' flag.
      if (event.state && event.state.modalOpen) {
        // If our specific state is found, it means the user went back from
        // an entry we pushed for the modal, so we close the modal.
        setIsModal(false);
      } else if (isModal) {
        // This condition handles cases where the modal is open, but the 'popstate'
        // event is not for a history entry specifically pushed by our modal (e.g.,
        // user clicked back to a page before the modal was ever opened on this session).
        // In such scenarios, if the modal is currently open, we still want to close it.
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
                  // ensuring 'handlePopState' always has the latest 'isModal' value.

  return (
    <>
      <section className="sales_banner copywriter-page">
        <div className="container-fluid">
          <div className="top-section-banner-text">
            <div className="row align-items-center">
              <div className="col-md-6 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text">
                  <h1 className="top-banner-title copywriter-top-banner-title">
                    {/* The content below is hardcoded as per your original Sales.tsx,
                        but can be replaced with {heroSection?.main_title} if available in data */}
                    Zmień słowa <br />
                    w magnes
                    <br />
                    na klientów:
                    <br />
                    Od Słów
                    <br />
                    do Wyników
                  </h1>
                  <h2 className="top-banner-long-text copywriter-top-banner-long-text ">
                    {/* This subtitle is dynamically pulled from Redux state */}
                    {heroSection?.sub_title}
                  </h2>
                </div>
                <div className="part-sec old-btn">
                  <button
                    onClick={openModal} // Call the openModal function to trigger modal and history push
                    className="btn btn-green send-offer-button js--triggerAnimation"
                  >
                    Brzmi świetnie. Wyślijcie mi ofertę.
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                {/* ReactPlayer for displaying video, URL comes from Redux state */}
                <ReactPlayer
                  url={heroSection?.image} // Assuming heroSection.image is a video URL
                  playing={true}
                  loop={true}
                  width="100%"
                  height="100%"
                  muted={true}
                  pip={false}
                  playsinline // Important for mobile browsers to play inline
                  style={{ margin: "0 auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Render the ModalForm component, passing its visibility state and close handler */}
        <ModalForm isOpen={isModal} onClose={handleModalClose} />
      </section>
    </>
  );
};

export default SalesBanner;