import React from "react";
import { useSelector } from "react-redux";

const UxBanner = () => {
  const { isLoading, screenData } = useSelector((state) => state.ux);
  const HeroSection = screenData.HeroSection || {};

  console.log("screenData from uxBanner", HeroSection);

  return (
    <>
      <section>
        <div id="header">
          <div>
            <div>
              <h1 className="titleHead">
                <span>
                  {HeroSection?.title1}
                  <span className="UX"> {HeroSection?.styled_title}</span>
                </span>
                <br />
                {HeroSection?.title2}
              </h1>
              <p className="subitle">{HeroSection.description1}</p>
              <p className="subitle">{HeroSection.description2} </p>
              <p className="subitle">
                Dla tych, co
                <span className="underLine">
                  <span>m</span>
                  <span>y</span>
                  <span>ś</span>
                  <span>l</span>
                  <span>ą</span>
                  <span className="space"></span>
                  <span>p</span>
                  <span>r</span>
                  <span>z</span>
                  <span>y</span>
                  <span>s</span>
                  <span>z</span>
                  <span>ł</span>
                  <span>o</span>
                  <span>ś</span>
                  <span>c</span>
                  <span>i</span>
                  <span>o</span>
                  <span>w</span>
                  <span>o</span>
                </span>
              </p>
              <p className="subitle"></p>
            </div>
            <video
              playsinline=""
              id="phoneMove"
              loop="true"
              autoplay="true"
              data-vscid="d3xa7p0zx"
            >
              <source src={HeroSection?.video_url} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxBanner;
