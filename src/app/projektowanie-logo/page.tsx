// 'use client';
// import React, { useEffect, useState } from 'react';
// import './logoDesign.css';
// import LogoBanner from '@/components/organisms/logo/LogoBanner';
// import SampleLogo from '@/components/organisms/logo/SampleLogo';
// import GoodBusiness from '@/components/organisms/logo/GoodBusiness';
// import PDFCopy from '@/components/organisms/logo/PDFCopy';
// import Opinion from '@/components/organisms/logo/Opinion';
// import Receive from '@/components/organisms/logo/Receive';
// import Guarantee from '@/components/organisms/logo/Guarantee';
// import LogoAccordion from '@/components/organisms/logo/accordion/LogoAccordion';
// import items from '@/components/organisms/logo/accordion/LogoData';
// import ProjectValue from '@/components/organisms/logo/ProjectsValue';
// import Gallery from '@/components/organisms/logo/Gallery';
// import StepByStep from '@/components/organisms/logo/StepByStep';
// import FreeShops from '@/components/organisms/logo/FreeShops';
// import Enexo from '@/components/organisms/logo/Enexo';
// import Daco from '@/components/organisms/logo/Daco';
// import Aico from '@/components/organisms/logo/Aico';
// import ZooGarden from '@/components/organisms/logo/ZooGarden';
// import Construction from '@/components/organisms/logo/Construction';
// import Restaurant from '@/components/organisms/logo/Restaurant';
// import Park from '@/components/organisms/logo/Park';
// import GPN from '@/components/organisms/logo/GPN';
// import NewCompany from '@/components/organisms/logo/NewCompany';
// import Form from '@/components/organisms/tresci-sprzedazowe/form/Form';
// import LogoFooter from '@/components/organisms/logo/logo-footer/LogoFooter';
// import { useDispatch, useSelector } from 'react-redux';
// import { FETCH_LOGO_SCREEN_DATA } from '@/redux/projektowanie-logo/logoAction';
// import { FETCH_SALES_SCREEN_DATA } from '@/redux/tresci/salescontentAction';
// import { ModalForm } from '@/components/organisms/tresci-sprzedazowe/ModalForm';
// import BounceLoader from 'react-spinners/BounceLoader';
// import Lex from '@/components/organisms/logo/Lex';

// const LogoDesignScreen = () => {
//   const { isLoading, screenData } = useSelector((state) => state.logo);
//   const dispatch = useDispatch();

//   const { LogoAccordionData } = screenData || {};
//   const { accordionData, title, description } = LogoAccordionData || {};

//   useEffect(() => {
//     dispatch({ type: FETCH_LOGO_SCREEN_DATA });
//     dispatch({ type: FETCH_SALES_SCREEN_DATA });
//   }, [dispatch]);

//   useEffect(() => {
//     console.warn('accordionData👉✅', accordionData);
//   }, [accordionData]);

//   const [isModal, setIsModal] = useState(false);

//   const handleModalClose = () => {
//     setIsModal(!isModal);
//   };

//   const openModal = () => {
//     setIsModal(true);
//   };

//   if (isLoading)
//     return (
//       <div className="loader-container">
//         <BounceLoader color="#00bfff" size={50} />
//       </div>
//     );

//   return (
//     <>
//       <LogoBanner openModal={openModal} />
//       {/* <SampleLogo /> */}
//       <GoodBusiness />
//       <PDFCopy />
//       <Opinion />
//       <Receive />
//       <Guarantee openModal={openModal} />
//       <LogoAccordion items={accordionData} title={title} image={description} />
//       <ProjectValue openModal={openModal} />
//       <Gallery openModal={openModal} />
//       <StepByStep />
//       <section className="logo-stef mb-4">
      
//       <FreeShops />
//       <Enexo />
//       <Daco />
//       <Aico />
//       <ZooGarden />
//       <Construction />
//       <Restaurant />
//       <Park />
//       <Lex />
//       </section>
//       {/* <GPN /> */}
//       {/* <NewCompany /> */}
//       <section className="black-sec-form">
//         <div className="copywriter-ending-1 text-center mt-0 mobilechangeFont">
//         Przekształćmy <br/> Twoje wizje <br />w sukcesy!
//         </div>
//         <Form />
//       </section>
//       <LogoFooter openModal={openModal} />

//       <ModalForm isOpen={isModal} onClose={handleModalClose} />
//     </>
//   );
// };

// export default LogoDesignScreen;
'use client';
import React, { useEffect, useState, useCallback } from 'react'; // Import useCallback
import './logoDesign.css';
import LogoBanner from '@/components/organisms/logo/LogoBanner';
import SampleLogo from '@/components/organisms/logo/SampleLogo';
import GoodBusiness from '@/components/organisms/logo/GoodBusiness';
import PDFCopy from '@/components/organisms/logo/PDFCopy';
import Opinion from '@/components/organisms/logo/Opinion';
import Receive from '@/components/organisms/logo/Receive';
import Guarantee from '@/components/organisms/logo/Guarantee';
import LogoAccordion from '@/components/organisms/logo/accordion/LogoAccordion';
import items from '@/components/organisms/logo/accordion/LogoData';
import ProjectValue from '@/components/organisms/logo/ProjectsValue';
import Gallery from '@/components/organisms/logo/Gallery';
import StepByStep from '@/components/organisms/logo/StepByStep';
import FreeShops from '@/components/organisms/logo/FreeShops';
import Enexo from '@/components/organisms/logo/Enexo';
import Daco from '@/components/organisms/logo/Daco';
import Aico from '@/components/organisms/logo/Aico';
import ZooGarden from '@/components/organisms/logo/ZooGarden';
import Construction from '@/components/organisms/logo/Construction';
import Restaurant from '@/components/organisms/logo/Restaurant';
import Park from '@/components/organisms/logo/Park';
import GPN from '@/components/organisms/logo/GPN';
import NewCompany from '@/components/organisms/logo/NewCompany';
import Form from '@/components/organisms/tresci-sprzedazowe/form/Form';
import LogoFooter from '@/components/organisms/logo/logo-footer/LogoFooter';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_LOGO_SCREEN_DATA } from '@/redux/projektowanie-logo/logoAction';
import { FETCH_SALES_SCREEN_DATA } from '@/redux/tresci/salescontentAction';
import { ModalForm } from '@/components/organisms/tresci-sprzedazowe/ModalForm';
import BounceLoader from 'react-spinners/BounceLoader';
import Lex from '@/components/organisms/logo/Lex';

const LogoDesignScreen = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const dispatch = useDispatch();

  const { LogoAccordionData } = screenData || {};
  const { accordionData, title, description } = LogoAccordionData || {};

  const [isModal, setIsModal] = useState(false);

  // Memoize handleModalClose to prevent unnecessary re-renders
  const handleModalClose = useCallback(() => {
    setIsModal(false);
    // When the modal closes, if there's a state for the modal in history, pop it
    if (window.history.state && window.history.state.modalOpen) {
      window.history.back();
    }
  }, []);

  const openModal = useCallback(() => {
    setIsModal(true);
    // Push a new state to the history when the modal opens
    // This state will indicate that the modal is open
    window.history.pushState({ modalOpen: true }, '', '#modal');
  }, []);

  useEffect(() => {
    dispatch({ type: FETCH_LOGO_SCREEN_DATA });
    dispatch({ type: FETCH_SALES_SCREEN_DATA });
  }, [dispatch]);

  useEffect(() => {
    console.warn('accordionData👉✅', accordionData);
  }, [accordionData]);

  useEffect(() => {
    const handlePopState = (event) => {
      // If the modal was open and we pop a state that doesn't have modalOpen
      // or if we pop the state we pushed, close the modal.
      if (isModal && (!event.state || !event.state.modalOpen)) {
        setIsModal(false);
      } else if (event.state && event.state.modalOpen) {
        // If the state indicates the modal should be open (e.g., if user navigates forward after closing)
        setIsModal(true);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModal]); // Depend on isModal to ensure the effect re-runs when modal state changes

  if (isLoading)
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );

  return (
    <>
      <LogoBanner openModal={openModal} />
      {/* <SampleLogo /> */}
      <GoodBusiness />
      <PDFCopy />
      <Opinion />
      <Receive />
      <Guarantee openModal={openModal} />
      <LogoAccordion items={accordionData} title={title} image={description} />
      <ProjectValue openModal={openModal} />
      <Gallery openModal={openModal} />
      <StepByStep />
      <section className="logo-stef mb-4">
        <FreeShops />
        <Enexo />
        <Daco />
        <Aico />
        <ZooGarden />
        <Construction />
        <Restaurant />
        <Park />
        <Lex />
      </section>
      {/* <GPN /> */}
      {/* <NewCompany /> */}
      <section className="black-sec-form">
        <div className="copywriter-ending-1 text-center mt-0 mobilechangeFont">
          Przekształćmy <br /> Twoje wizje <br />w sukcesy!
        </div>
        <Form />
      </section>
      <LogoFooter openModal={openModal} />

      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default LogoDesignScreen;