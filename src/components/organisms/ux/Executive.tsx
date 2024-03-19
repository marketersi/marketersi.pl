import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const Executive = () => {
  const { screenData } = useSelector((state) => state.ux);
  const executive = screenData.executive || {};

  return (
    <>
      <section>
        <div id="highResult">
          <h2>{executive.title}</h2>
          <div className="row">
            <div>
              <p>{executive.paragraph_1}</p>
              <p>{executive.paragraph_1}</p>
              <p>{executive.paragraph_1}</p>
              <p>{executive.paragraph_1}</p>
            </div>
            <div>
              <video
                data-time="180"
                playsinline=""
                autoplay="true"
                loop=""
                muted=""
                data-vscid="d3xa7p0zx"
              >
                <source
                  src="https://propozycje.owocni.pl/ux/Co-otrzymam.3d0d4083.mp4"
                  type="video/mp4"
                />
              </video>

              {/* <ReactPlayer
                muted={true}
                playing={true}
                loop={true}
                width="100%"
                height="auto"
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
