import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const GoodProcess = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const { stage_1, stage_2, stage_3 } = screenData.GoodProcess?.Stages || {};

  return (
    <>
      

      <section className="goodProcess">
        <div className="one order2">
          <ReactPlayer
            url={stage_1?.video_url}
            playing={true}
            loop={true}
            muted={true}
            className="processVideo"
            playsinline
          />

          <h3>{stage_1?.title}</h3>
          <p className="subtitle">{stage_1?.subtitle}</p>
          <p>{stage_1?.description}</p>
        </div>
        <div className="one order1">
        <div className="number">1</div>
        </div>
        <div className="two order3">
        <div className="number">2</div>
        </div>
        <div className="two order4">
          <ReactPlayer
            url={stage_2?.video_url}
            playing={true}
            loop={true}
            muted={true}
            className="processVideo"
            playsinline
          />

          <h3>{stage_2?.title}</h3>
          <p className="subtitle">{stage_2?.subtitle}</p>
          <p>{stage_2?.description}</p>
        </div>
        <div className="three order6">
          <ReactPlayer
            url={stage_3?.video_url}
            playing={true}
            loop={true}
            muted={true}
            className="processVideo"
            playsinline
          />

          <h3>{stage_3?.title}</h3>
          <p className="subtitle">{stage_3?.subtitle}</p>
          <p>{stage_3?.description}</p>
        </div>
        <div className="three order5">
          <div className="number">3</div>
        </div>
      </section>
    </>
  );
};

export default GoodProcess;
