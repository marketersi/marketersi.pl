import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

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
  const UXVideo = screenData["UX-Video"] || {};

  const Videotab = UXVideo.Videotab || [];

  const [selectedTab, setSelectedTab] = useState(1);
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
              <span> {UXVideo?.button_text}</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default UxVideo;
