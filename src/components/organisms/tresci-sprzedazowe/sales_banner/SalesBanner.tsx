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
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import useOsClass from "@/components/molecules/useOsClass";

const SalesBanner = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { heroSection } = screenData || {};
  const osClass = useOsClass();
  const [isModal, setIsModal] = useState(false);
  const openModal = () => {
    setIsModal(true);
    window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  const handleModalClose = () => {
    setIsModal(false);
  };
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.modalOpen) {
        setIsModal(false);
      } else if (isModal) {
        setIsModal(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModal]);
  return (
    <>
      <section className="sales_banner copywriter-page">
        <div className="container-fluid">
          <div className="top-section-banner-text">
            <div className="row align-items-center">
              <div className="col-md-6 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text">
                  <h1 className="top-banner-title copywriter-top-banner-title">
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
        <ModalForm isOpen={isModal} onClose={handleModalClose} />
      </section>
    </>
  );
};

export default SalesBanner;