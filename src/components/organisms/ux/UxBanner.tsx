<<<<<<< HEAD
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import useOsClass from "@/components/molecules/useOsClass";
import ProjectuxModal from "../modals/ProjectuxModal";

const UxBanner = () => {
  const uxScreenData = useSelector((state) => state.ux.screenData);

  const HeroSection = uxScreenData?.HeroSection || {};
  // Using priceListData here

  const osClass = useOsClass();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
=======
import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const UxBanner = () => {
  const { screenData } = useSelector((state) => state.ux);
  const HeroSection = screenData.HeroSection || {};
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

  return (
    <>
      <section>
        <div id="header" className="UXBannerContainer">
<<<<<<< HEAD
          <div className="row m-0">
            <div className="col-xl-5 col-xxl-6">
              {/* <h1 className="titleHead">
                <span>
                  {HeroSection?.title1}
                  
                </span>
                <br />
                {HeroSection?.title2}
              </h1>  */}
              <h1 className="titleHead">
                Tworzenie <br/> stron <br/> i design UX <br/>z Marketersi.
              </h1>
              {/* <p className="subitle">{HeroSection.description1}</p> */}
              <p className="subitle">
                Tworzymy strony i design UX, <br /> które 
                przekładają się na sukces.
              </p>
              <p className="subitle">{HeroSection.description2} </p>

              <button className="buttonux" onClick={openModal}>
                Brzmi świetnie. Wyślijcie mi ofertę.
              </button>
            </div>
            <div className={`col-xl-7 col-xxl-6 ${osClass}`}>
=======
          <div className="row">
            <div className="col-xxl-6 order-xxl-1 order-2">
              <h1 className="titleHead">
                <span>
                  {HeroSection?.title1}
                  <span className="UX"> {HeroSection?.styled_title}</span>
                </span>
                <br />
                {HeroSection?.title2}
              </h1>
              <p className="subitle">{HeroSection.description1}</p>
              <p className="subitle mt-4">{HeroSection.description2} </p>
              <p className="subitle"></p>
              {/* <span className="underLine underLine2">
                <span>u</span>
                <span>p</span>
                <span>o</span>
                <span>r</span>
                <span>z</span>
                <span>ą</span>
                <span>d</span>
                <span>k</span>
                <span>o</span>
                <span>w</span>
                <span>a</span>
                <span>ć</span>
                <span className="space"></span>
                <span>o</span>
                <span>f</span>
                <span>e</span>
                <span>r</span>
                <span>t</span>
                <span>ę</span>
              </span> */}
            </div>
            <div className="col-xxl-6 order-xxl-2 order-1">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              <ReactPlayer
                muted={true}
                playing={true}
                loop={true}
<<<<<<< HEAD
                width="100%"
                height="auto"
                url={HeroSection?.video_url}
                className="UXheroVideo"
                playsinline
=======
                width="80%"
                height="auto"
                url={HeroSection?.video_url}
                className="UXheroVideo"
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              />
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </>
  );
};

export default UxBanner;
