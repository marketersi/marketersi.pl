// import React, { useState } from "react";
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
// import "./nazwa-hero.css";
// import { useSelector } from "react-redux";
// import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";
// import dynamic from 'next/dynamic';

// const NazwaHero = () => {
//   const { screenData } = useSelector((state) => state.anatomy);
//   const { heroSection } = screenData || {};

//   const [isModal, setIsModal] = useState(false);

//   const handleModalClose = () => {
//     setIsModal(!isModal);
//   };
//   return (
//     <section className="pnazw-page">
//       <div className="nazwaContainer">
//         <div className="top-section-banner-text container-fluid1 UXBannerContainer banner-nazwa">
//           <div className="row align-items-center">
//             <div className="col-md-7">
//               <div className="top-banner-text projects-top-banner-text naming-top-banner-text">
//                 {/* <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
//                 Nazwij Swoją <span className="indent-20">
//                 Przyszłość z</span> 
//                 <span className="indent-40">
//                 Marketersi:</span> <span className="indent-60">
//                 Nazwy, Które</span> <span className="indent-80">
//                 Definiują</span> 
//                 <span className="underlineText indent-100">
//                 Sukces
//                 </span>
//                 </h1> */}
//                 <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
//                   {/* Nazwij Swoją
//                   <br />
//                   Przyszłość
//                   <br /> */}
//                   Stwórzmy nazwę, <br />która wyrazi <br />charakter <br />Twojej firmy.
//                   {/* z Marketersi. <br /> Nazwy, Które <br /> Definiują Sukces. */}
//                 </h1>
//                 <h2 className="nazwa-heading">
//                 Nazwy, które realnie wspierają wzrost marki.<br/>
//                 Nasze propozycje pozostają w pamięci na lata.
//                 </h2>
//                 <h2 className="nazwa-heading">
//                 Gwarantujemy 100% satysfakcji
//                 <br/>
//                 tworzymy, aż Cię zachwycimy.

//                 </h2>
//               </div>
//               <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
//                 <button
//                   className="download-catalog-button nazwaHeroBtn banner-btn"
//                   type="button"
//                   onClick={() => setIsModal(true)}
//                 >
//                   Brzmi świetnie. Wyślijcie mi ofertę
//                 </button>
//               </div>
//             </div>
//             <div className="col-md-5">
          
//               {/* <ReactPlayer
//                 url={heroSection?.background_video}
//                 playing={true}
//                 loop={true}
//                 muted={true}
//                 width="100%"
//                 height="auto"
//                 className="heroVideo"
//                 playsinline
//               /> */}
//               <img
//                 src={heroSection?.background_video}
//                 alt=""
//                 className="nazwaHeroImg"
//               />
//             </div>
//           </div>

//           <div className="row align-items-start">

//               <div className="col-md-12 part-sec"></div>

//             <div className="clearfix"></div>
//           </div>
//         </div>
//       </div>
//       <ModalForm isOpen={isModal} onClose={handleModalClose} />
//     </section>
//   );
// };

// export default NazwaHero;
import React, { useState, useEffect } from "react"; // Added useEffect
import "./nazwa-hero.css";
import { useSelector } from "react-redux";
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";
import dynamic from 'next/dynamic'; // Keep this import

// Dynamically import ReactPlayer to ensure it's only loaded on the client-side
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const NazwaHero = () => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { heroSection } = screenData || {};

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
    <section className="pnazw-page">
      <div className="nazwaContainer">
        <div className="top-section-banner-text container-fluid1 UXBannerContainer banner-nazwa">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="top-banner-text projects-top-banner-text naming-top-banner-text">
                <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
                  Stwórzmy nazwę, <br />która wyrazi <br />charakter <br />Twojej firmy.
                </h1>
                <h2 className="nazwa-heading">
                  Nazwy, które realnie wspierają wzrost marki.<br/>
                  Nasze propozycje pozostają w pamięci na lata.
                </h2>
                <h2 className="nazwa-heading">
                  Gwarantujemy 100% satysfakcji
                  <br/>
                  tworzymy, aż Cię zachwycimy.
                </h2>
              </div>
              <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
                <button
                  className="download-catalog-button nazwaHeroBtn banner-btn"
                  type="button"
                  onClick={openModal} // Changed to call openModal
                >
                  Brzmi świetnie. Wyślijcie mi ofertę
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src={heroSection?.background_video} // Assuming this is an image URL now
                alt=""
                className="nazwaHeroImg"
              />
            </div>
          </div>

          <div className="row align-items-start">
            <div className="col-md-12 part-sec"></div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </section>
  );
};

export default NazwaHero;