<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
=======
import React, { useState } from "react";
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { ModalForm } from "../tresci-sprzedazowe/ModalForm";

<<<<<<< HEAD
const UxVideo = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
=======
const UXVideoData = {
  title: "UX Video",
  description1: "UX Video",
  description2: ["firmy", "firmy", "firmy", "dfghjk"],
  image: "images/",
  tabVideo1: "video/",
  tabVideo2: "video/",
  tabVideo3: "video/",
  tabTitle1: "title1",
  tabTitle2: "title2",
  tabTitle3: "title3",
  imgSprings: "http",
  dotImg1: "http://",
  dotImg2: "http://",
  dotImg3: "http://",
  dotImg4: "http://",
  description4: "http://",
  description5: "http://",
  description6: "http://",
};
const UxVideo = () => {
  const { screenData } = useSelector((state) => state.ux);
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  const UXVideo = screenData["UX-Video"] || {};

  const Videotab = UXVideo.Videotab || [];

  const [selectedTab, setSelectedTab] = useState(1);
<<<<<<< HEAD
  const [isModal, setIsModal] = useState(false);
  const [progress, setProgress] = useState(0);

  const playerRef = useRef(null);
=======

  
  const [isModal, setIsModal] = useState(false);
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

<<<<<<< HEAD
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

=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
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
<<<<<<< HEAD
        
      </section>
      <section className="img-block">
      <div className="row align-items-end">
      <div id="WhatGet" className="col-md-6">
          <p className="textAnimation">Obiecujemy nie tylko piękno formy, ale przede wszystkim <span style={{fontStyle: "italic", display: "block"}}>rezultaty.</span></p>
          {/* <p className="textAnimation underlineText">{UXVideo?.paragraph_4}</p> */}
          <p className="textAnimation"><span style={{fontStyle: "italic"}}>Jeśli Twoja strona nie przyniesie oczekiwanych wyników</span>  <span style={{fontWeight: "bold"}}>– zwrócimy Ci 100% inwestycji.</span></p>
          <p className="textAnimation">{UXVideo?.paragraph_5}</p>
          <a className="send-offer-button js--triggerAnimation">
            <span>
              <span onClick={() => setIsModal(true)} className="">
                {" "}
                {UXVideo?.button_text}
              </span>
            </span>
          </a>
          
        </div>
      <div className="col-md-6">
          
          <img src="https://images.prismic.io/marketersi/Zs63VEaF0TcGJcxA_Marketersi-10.png?auto=format,compress" alt="" className="uxvideoImg"/>
        </div>
        
      </div>
      <h2 className="uxVideoTitle ">{GoodProcess.title}</h2>
          <p className="uxVideoPara">Jak tworzymy prototyp,<br/> który napędzi wydajność Twojej strony?</p>
=======
        <div>

          <div className="row">
            <div id="videos" className="col-lg-8">
              <img
                className="videoBg"
                src="https://propozycje.owocni.pl/ux/VideoUX.98555e54.46666926.png"
              />
              {Videotab.map((video) => (
                <React.Fragment key={video.id}>
                  {selectedTab === video.id && (
                    <ReactPlayer
                      url={video.video}
                      playing={true}
                      loop={true}
                      muted={true}
                      width="auto"
                      height="auto"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="textWithArrow col-lg-4">
              <div className="textVideo">
                {Videotab.map((video) => (
                  <div
                    key={video.id}
                    className={selectedTab === video.id ? "active" : ""}
                    onClick={() => setSelectedTab(video.id)}
                  >
                    <h3>{video.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="para">
            <img
              className="sp"
              src="https://propozycje.owocni.pl/ux/sp.995a6077.webp"
              alt=""
              style={{ transform: "translate3d(0px, -2.9487px, 0px)" }}
            />
            <img
              className="dot1"
              src="https://propozycje.owocni.pl/ux/dot1.7781bcc1.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot2"
              src="https://propozycje.owocni.pl/ux/dot2.e99cba48.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot3"
              src="https://propozycje.owocni.pl/ux/dot3.1e955529.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot4"
              src="https://propozycje.owocni.pl/ux/dot2.e99cba48.webp"
              alt=""
              style={{ transform: "scale(0.5, 0.5)" }}
            />
          </div>
        </div>
      </section>
      <section>
        <div id="WhatGet">
          <p className="textAnimation">{UXVideo?.paragraph_3}</p>
          <p className="textAnimation">{UXVideo?.paragraph_4}</p>
          <p className="textAnimation">{UXVideo?.paragraph_5}</p>
          <a className="send-offer-button js--triggerAnimation">
            <span>
              <span onClick={() => setIsModal(true)}> {UXVideo?.button_text}</span>
            </span>
          </a>
        </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </section>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default UxVideo;
