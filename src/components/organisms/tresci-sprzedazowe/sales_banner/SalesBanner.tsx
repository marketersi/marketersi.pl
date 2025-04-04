import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ModalForm } from "../ModalForm";
<<<<<<< HEAD
import ReactPlayer from "react-player";
import useOsClass from "@/components/molecules/useOsClass";
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const SalesBanner = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { heroSection } = screenData || {};

<<<<<<< HEAD
  const osClass = useOsClass();

=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <section className="sales_banner copywriter-page">
<<<<<<< HEAD
        <div className="container-fluid">
          <div className="top-section-banner-text">
            <div className="row align-items-center">
              <div className="col-md-6 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text">
                  <h1 className="top-banner-title copywriter-top-banner-title">
                    {/* {heroSection?.main_title}  */}
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
                    {heroSection?.sub_title}
                  </h2>
                </div>
                <div className="part-sec old-btn">
                  <button
                    onClick={() => setIsModal(true)}
                    className="btn btn-green send-offer-button js--triggerAnimation"
                  >
                    Brzmi świetnie. Wyślijcie mi ofertę.
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                {/* <img
              style={{ maxWidth: '100%' }}
=======
        <div className="container">
          <div className="top-section-banner copywriter-top-section-banner">
            <img
              style={{ maxWidth: "100%" }}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              src={heroSection?.image}
              className=""
              title="Owocni wiedzą, jak się pisze teksty na stronę"
              alt="Uśmiechnięci copywriterzy"
<<<<<<< HEAD
            /> */}
                <ReactPlayer
                  url={heroSection?.image}
                  playing={true}
                  loop={true}
                  width="100%"
                  height="100%"
                  muted={true}
                  pip={false}
                  playsinline
                  style={{ margin: "0 auto" }}
                />
              </div>
=======
            />
          </div>
          <div className="top-section-banner-text">
            <div className="row">
              <div className="col-md-6 col-46 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text">
                  <h1 className="top-banner-title copywriter-top-banner-title">
                    
                    {heroSection?.main_title}
                  </h1>
                  <h2 className="top-banner-long-text copywriter-top-banner-long-text">
                    {heroSection?.sub_title}
                  </h2>
                </div>
                <div
                  className=" part-sec old-btn"
                  
                >
                  <button onClick={() => setIsModal(true)} className="btn btn-green send-offer-button js--triggerAnimation">
                    O.K. wyślijcie mi niezobowiązującą ofertę.
                  </button>
                </div>
              </div>

              <div className="clearfix"></div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            </div>
          </div>
        </div>
        <ModalForm isOpen={isModal} onClose={handleModalClose} />
      </section>
    </>
  );
};

export default SalesBanner;
<<<<<<< HEAD

=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
