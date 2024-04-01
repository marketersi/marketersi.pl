import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const UxBanner = () => {
  const { screenData } = useSelector((state) => state.ux);
  const HeroSection = screenData.HeroSection || {};

  return (
    <>
      <section>
        <div id="header" className="UXBannerContainer">
          <div className="row">
            <div className="col-lg-6 order-lg-1 order-2">
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
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
            <ReactPlayer
              muted={true}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              url={HeroSection?.video_url}
              className="UXheroVideo"
            />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxBanner;
