import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const GoodProcess = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const { stage_1, stage_2, stage_3 } = screenData.GoodProcess?.Stages || {};

  return (
    <>
      <section id="stage">
        <div>
          <h2
            className="textAnimation titleAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {GoodProcess.title}
          </h2>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {GoodProcess?.paragraph}
          </p>
        </div>
        <div className="dots">
          <div
            className="number1 number"
            style={{ left: "390.62px", top: "0.110352px" }}
          >
            <div>
              <svg id="svg1"></svg>
              <p
                className="text"
                id="text1"
                style={{
                  fontSize: "330px",
                  height: "330px",
                  lineHeight: "330px",
                }}
              >
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  {stage_1?.number}
                </span>
              </p>
            </div>
          </div>
          <div
            className="number2 number"
            style={{ left: "467.194px", top: "1685.24px" }}
          >
            <div>
              <svg id="svg2"></svg>
              <p
                className="text"
                id="text2"
                style={{
                  fontSize: "330px",
                  height: "330px",
                  lineHeight: "330px",
                }}
              >
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  {stage_2?.number}
                </span>
              </p>
            </div>
          </div>
          <div
            className="number3 number"
            style={{ left: "241.131px", top: "3294.04px" }}
          >
            <div>
              <svg id="svg3"></svg>
              <p
                className="text"
                id="text3"
                style={{
                  fontSize: "330px",
                  height: "330px",
                  lineHeight: "330px",
                }}
              >
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  {stage_3?.number}
                </span>
              </p>
            </div>
          </div>

          <img
            className="dotEnd"
            src="https://propozycje.owocni.pl/ux/monophy.e1100757.gif"
            alt=""
            style={{ left: "390.62px", top: "5487px" }}
          />
        </div>
        <div className="stageD stage1">
          <div className="right texts">
            <ReactPlayer
              url={stage_1?.video_url}
              playing={true}
              loop={true}
              muted={true}
              className="bg_video"
            />

            <h3>{stage_1?.title}</h3>
            <p className="subtitle">{stage_1?.subtitle}</p>
            <p>{stage_1?.description}</p>
          </div>
        </div>
        <div className="stageD stage2">
          <div className="texts">
            <ReactPlayer
              url={stage_2?.video_url}
              playing={true}
              loop={true}
              muted={true}
              className="bg_video"
            />

            <h3>{stage_2?.title}</h3>
            <p className="subtitle">{stage_2?.subtitle}</p>
            <p>{stage_2?.description}</p>
          </div>
        </div>
        <p className="mobilenumber">3</p>
        <div className="stageD stage3">
          <div className="right texts">
            <ReactPlayer
              url={stage_3?.video_url}
              playing={true}
              loop={true}
              muted={true}
              className="bg_video"
            />

            <h3>{stage_3?.title}</h3>
            <p className="subtitle">{stage_3?.subtitle}</p>
            <p>{stage_3?.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoodProcess;
