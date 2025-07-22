// import React, { useState, useEffect, useRef } from "react";
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
// import { useSelector } from "react-redux";
// import { ModalForm } from "../tresci-sprzedazowe/ModalForm";
// import dynamic from 'next/dynamic';

// const UxVideo = () => {
//   const { screenData } = useSelector((state) => state.ux);
//   const GoodProcess = screenData.GoodProcess || {};
//   const UXVideo = screenData["UX-Video"] || {};

//   const Videotab = UXVideo.Videotab || [];

//   const [selectedTab, setSelectedTab] = useState(1);
//   const [isModal, setIsModal] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const playerRef = useRef(null);

//   const handleModalClose = () => {
//     setIsModal(!isModal);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (playerRef.current) {
//         const duration = playerRef.current.getDuration();
//         const currentTime = playerRef.current.getCurrentTime();
//         const progress = (currentTime / duration) * 100;
//         setProgress(progress);
//         document.documentElement.style.setProperty(
//           "--progress",
//           `${progress}%`
//         );
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [selectedTab]);

//   return (
//     <>
//       <section id="videoSection">
//         <div>
//           <h2
//             className="textAnimation titleAnimation"
//             style={{ opacity: 1, transform: "translate(0px, 0px)" }}
//           >
//             {UXVideo?.title}
//           </h2>
//           <p
//             className="textAnimation"
//             style={{ opacity: 1, transform: "translate(0px, 0px)" }}
//           >
//             {UXVideo?.paragraph_1}
//           </p>
//           <p
//             className="textAnimation"
//             style={{ opacity: 1, transform: "translate(0px, 0px)" }}
//           >
//             {UXVideo?.paragraph_2}
//           </p>
//         </div>
        
//       </section>
//       <section className="img-block">
//       <div className="row align-items-end">
//       <div id="WhatGet" className="col-md-6">
//           <p className="textAnimation">Obiecujemy nie tylko piękno formy, ale przede wszystkim <span style={{fontStyle: "italic", display: "block"}}>rezultaty.</span></p>
//           {/* <p className="textAnimation underlineText">{UXVideo?.paragraph_4}</p> */}
//           <p className="textAnimation"><span style={{fontStyle: "italic"}}>Jeśli Twoja strona nie przyniesie oczekiwanych wyników</span>  <span style={{fontWeight: "bold"}}>– zwrócimy Ci 100% inwestycji.</span></p>
//           <p className="textAnimation">{UXVideo?.paragraph_5}</p>
//           <a className="send-offer-button js--triggerAnimation">
//             <span>
//               <span onClick={() => setIsModal(true)} className="">
//                 {" "}
//                 {UXVideo?.button_text}
//               </span>
//             </span>
//           </a>
          
//         </div>
//       <div className="col-md-6">
          
//           <img src="https://images.prismic.io/marketersi/Zs63VEaF0TcGJcxA_Marketersi-10.png?auto=format,compress" alt="" className="uxvideoImg"/>
//         </div>
        
//       </div>
//       <h2 className="uxVideoTitle ">{GoodProcess.title}</h2>
//           <p className="uxVideoPara">Jak tworzymy prototyp,<br/> który napędzi wydajność Twojej strony?</p>
//       </section>
//       <ModalForm isOpen={isModal} onClose={handleModalClose} />
//     </>
//   );
// };

// export default UxVideo;

import React, { useState, useEffect, useRef } from "react";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { useSelector } from "react-redux";
import { ModalForm } from "../tresci-sprzedazowe/ModalForm";
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation"; // Correct import for Next.js App Router

const UxVideo = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const UXVideo = screenData["UX-Video"] || {};

  const Videotab = UXVideo.Videotab || [];

  const [selectedTab, setSelectedTab] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [progress, setProgress] = useState(0);

  const playerRef = useRef(null);
  const router = useRouter(); // Initialize useRouter

  const handleModalClose = () => {
    setIsModal(false); // Close the modal
    // When the modal closes, remove the hash from the URL
    if (window.location.hash === "#open-modal") {
      router.back(); // Go back in history, which removes the hash
    }
  };

  const handleModalOpen = () => {
    setIsModal(true);
    // Add a hash to the URL when the modal opens
    // { shallow: true } is not supported with router.push in App Router for URL changes
    // It's mainly for params/query changes without full page reload.
    // However, pushing a hash doesn't trigger a full reload anyway.
    router.push(`${window.location.pathname}#open-modal`);
  };

  useEffect(() => {
    // Function to check and update modal state based on URL hash
    const checkHashAndSetModal = () => {
      setIsModal(window.location.hash === "#open-modal");
    };

    // Set initial modal state when component mounts
    checkHashAndSetModal();

    // Listen for the 'hashchange' event directly on the window
    // This event fires when the URL hash changes (e.g., from browser back/forward buttons)
    window.addEventListener('hashchange', checkHashAndSetModal);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', checkHashAndSetModal);
    };
  }, []); // Empty dependency array as we only need to set up/teardown listener once

  // Original useEffect for video progress (no changes needed here)
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const duration = playerRef.current.getDuration();
        const currentTime = playerRef.current.getCurrentTime();
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
        document.documentElement.style.setProperty(
          "--progress",
          `${progress}%`
        );
      }
    }, 100);

    return () => clearInterval(interval);
  }, [selectedTab]);

  return (
    <>
      <section id="videoSection">
        <div>
          <h2
            className="textAnimation titleAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {UXVideo?.title}
          </h2>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {UXVideo?.paragraph_1}
          </p>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {UXVideo?.paragraph_2}
          </p>
        </div>
      </section>
      <section className="img-block">
        <div className="row align-items-end">
          <div id="WhatGet" className="col-md-6">
            <p className="textAnimation">Obiecujemy nie tylko piękno formy, ale przede wszystkim <span style={{ fontStyle: "italic", display: "block" }}>rezultaty.</span></p>
            <p className="textAnimation"><span style={{ fontStyle: "italic" }}>Jeśli Twoja strona nie przyniesie oczekiwanych wyników</span>  <span style={{ fontWeight: "bold" }}>– zwrócimy Ci 100% inwestycji.</span></p>
            <p className="textAnimation">{UXVideo?.paragraph_5}</p>
            <a className="send-offer-button js--triggerAnimation">
              <span>
                <span onClick={handleModalOpen} className="">
                  {" "}
                  {UXVideo?.button_text}
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-6">
            <img src="https://images.prismic.io/marketersi/Zs63VEaF0TcGJcxA_Marketersi-10.png?auto=format,compress" alt="" className="uxvideoImg" />
          </div>
        </div>
        <h2 className="uxVideoTitle ">{GoodProcess.title}</h2>
        <p className="uxVideoPara">Jak tworzymy prototyp,<br /> który napędzi wydajność Twojej strony?</p>
      </section>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default UxVideo;