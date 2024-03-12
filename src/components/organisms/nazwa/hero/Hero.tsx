import React from "react";
import ReactPlayer from "react-player";
import "./nazwa-hero.css";
import { useSelector } from "react-redux";

const NazwaHero = () => {
  const { isLoading, screenData } = useSelector((state) => state.anatomy);
  const { heroSection } = screenData || {};
  console.log("dla :", heroSection);
  return (
    <section className="pnazw-page">
      <div className="container ">
        <div className="top-section-banner names-top-section-banner naming-no-bg naming-no-after naming-top-section-banner">
          <ReactPlayer
            url={heroSection?.background_video}
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="auto"
            className="heroVideo"
          />
        </div>
        <div className="top-section-banner-text">
          <div className="row">
            <div className="col-md-6 col-46 names-top-banner-container">
              <div className="top-banner-text projects-top-banner-text naming-top-banner-text">
                <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
                  {/* Dobry biznes <br className="dont-delete" /> zaczyna się od{" "}
                  <br className="dont-delete" /> dobrej nazwy.{" "} */}
                  {heroSection?.title}
                </h1>
                <h2 className="top-banner-long-text names-top-banner-long-text">
                 {heroSection?.subtitle1}
                </h2>
                <h2 className="top-banner-long-text names-top-banner-long-text pnazw-second-maintext">
                {heroSection?.subtitle2}
                </h2>
              </div>
            </div>

            <div className="col-md-12 part-sec">
              <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
                <button className="download-catalog-button" type="button">
                  <strong>Wyślijcie mi niezobowiązującą ofertę</strong>
                </button>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NazwaHero;
