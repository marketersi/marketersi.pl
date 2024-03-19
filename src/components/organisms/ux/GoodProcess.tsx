import React from "react";
import { useSelector } from "react-redux";

const GoodProcessData = {
  title: "Good Process",
  description: ["Good Process", "Good Process", "Good Process"],
  proVideo1: "goodProcess",
  proTitle1: "Good Process",
  proSubTitle1: "Good Process",
  proDescription1: "Good Process",
  proVideo2: "goodProcess",
  proTitle2: "Good Process",
  proSubTitle2: "Good Process",
  proDescription2: "Good Process",
  proVideo3: "goodProcess",
  proTitle3: "Good Process",
  proSubTitle3: "Good Process",
  proDescription3: "Good Process",
};

const GoodProcess = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};

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
            {/* 3 sprawdzone kroki do klikalnego prototypu <br />
            Twojej nowej,
            <span className="underLine underLine2">
              <span>w</span>
              <span>y</span>
              <span>s</span>
              <span>o</span>
              <span>k</span>
              <span>o</span>
              <span>w</span>
              <span>y</span>
              <span>d</span>
              <span>a</span>
              <span>j</span>
              <span>n</span>
              <span>e</span>
              <span>j</span>
            </span>
            strony */}

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
                  1
                </span>
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  1
                </span>
              </p>
              <input className="input" id="input1" type="text" />
              <p
                className="offscreen-text"
                id="offscreen-text1"
                style={{ fontSize: "330px" }}
              >
                <span>1</span>
                <span>1</span>
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
                  2
                </span>
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  2
                </span>
              </p>
              <input className="input" id="input2" type="text" />
              <p
                className="offscreen-text"
                id="offscreen-text2"
                style={{ fontSize: "330px" }}
              >
                <span>2</span>
                <span>2</span>
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
                  3
                </span>
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  3
                </span>
              </p>
              <input className="input" id="input3" type="text" />
              <p
                className="offscreen-text"
                id="offscreen-text3"
                style={{ fontSize: "330px" }}
              >
                <span>3</span>
                <span>3</span>
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

        <p className="mobilenumber">1</p>
        <div className="stageD stage1">
          <div className="right texts">
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
            >
              <source src="./img/Psychologia.3e94c83a.mp4" type="video/mp4" />
            </video>

            <h3>Badanie rynku</h3>
            <p className="subtitle">
              Badamy liderów rynku.
              <br />
              Diagnozujemy zasady <br />
              konkurowania.
            </p>
            <p>
              Jak wygrywają liderzy w tej branży?
              <br />
              Co możemy zrobić lepiej od nich?
              <br />
              Na czym zbudujemy przewagę?
            </p>
          </div>
        </div>
        <p className="mobilenumber">2</p>
        <div className="stageD stage2">
          <div className="texts">
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
            >
              <source
                src="https://propozycje.owocni.pl/ux/Strategia-UX.79843a8b.mp4"
                type="video/mp4"
              />
            </video>

            <h3>Budowanie wartości</h3>
            <p className="subtitle">
              Ustalamy biznesowe cele i planujemy
              <br />
              fundamenty propozycji wartości
              <br />w ofercie nie do odrzucenia.
            </p>
            <p>
              Od rozpoznania okazji do szybkiego rozwoju, <br />
              aż po efektywny plan realizacji – strategia
              <br />
              to paliwo rakietowe nowoczesnej strony.
            </p>
          </div>
        </div>
        <p className="mobilenumber">3</p>
        <div className="stageD stage3">
          <div className="right texts">
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
            >
              <source
                src="https://propozycje.owocni.pl/ux/Marketing-UX.7454d829.mp4"
                type="video/mp4"
              />
            </video>

            <h3>Makiety &amp; przepływy</h3>
            <p className="subtitle">
              Tworzymy unikalne prototypy dobrych
              <br />
              doświadczeń klienta i zmieniamy je <br />w topowe rezultaty
              biznesowe.
            </p>
            <p>
              Od pierwszego spojrzenia, przez głębokie
              <br />
              zainteresowanie aż do finalnej konwersji.
              <br />
              Twoja ofertam, tyle, że na sterydach.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoodProcess;
