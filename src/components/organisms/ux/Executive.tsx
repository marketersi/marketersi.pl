import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const Executive = () => {
  const { screenData } = useSelector((state) => state.ux);
  const executive = screenData.executive || {};

  return (
    <>
      <section>
        <video
          data-time="180"
          playsinline=""
          autoplay="true"
          loop=""
          muted=""
          data-vscid="d3xa7p0zx"
          className="mobileVideo"
        >
          <source src={executive?.video_url} type="video/mp4" />
        </video>
        {/* <ReactPlayer
                muted={true}
                playing={true}
                loop={true}
                width="auto"
                height="auto"
                className="mobileVideo"
                url={executive?.video_url}
              /> */}
        <div id="highResult">
          <h2>{executive.title}</h2>
          <div className="row">
            <div className="paraResult">
              <p>{executive.paragraph_1}</p>
              <p>{executive.paragraph_2}</p>
              <p>{executive.paragraph_3}</p>
              <p>{executive.paragraph_4}</p>
            </div>
            <div>
              <video
                data-time="180"
                playsinline=""
                autoplay="true"
                loop=""
                muted=""
                data-vscid="d3xa7p0zx"
                className="desktopVideo"
              >
                <source src={executive?.video_url} type="video/mp4" />
              </video>

              {/* <ReactPlayer
                muted={true}
                playing={true}
                loop={true}
                width="auto"
                height="auto"
                className="desktopVideo"
                url={executive?.video_url}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Executive;
