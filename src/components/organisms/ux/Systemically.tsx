import React from "react";
import { useSelector } from "react-redux";

const SystemicallyData = {
  hand1Img: "images",
  title: "title",
  description: "description",
  hand2Img: "images",
};
const Systemically = () => {
  const { screenData } = useSelector((state) => state.ux);
  const Systematically = screenData.Systematically || {};

  return (
    <>
      <section>
        <div id="guaranteeWrapper">
          <div id="guarantee">
            <div className="mobileImg">
              {/* <img src={Systematically.image} alt="" /> */}
              {/* <img
                className="hand1Img"
                src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-PRAWA.10fe6d37.png"
                alt=""
                style={{ transform: "translate3d(10.0154px, -10.0154px, 0px)" }}
              />
              <img
                className="hand2Img"
                src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-LEWA.5795952e.3993493a.png"
                alt=""
                style={{ transform: "translate3d(10.0154px, -10.0154px, 0px)" }}
              /> */}
            </div>
            {/* <img
              src="https://propozycje.owocni.pl/ux/Gwarancja.e6e5fa2c.jpg"
              alt=""
              srcset="
              https://propozycje.owocni.pl/ux/Gwarancja-650.5c4aedce.jpg  960w,
              https://propozycje.owocni.pl/ux/Gwarancja.e6e5fa2c.jpg     1060w
            "
              sizes="(max-width: 900px) 650px, 1150px"
            /> */}
            <img src={Systematically.image} alt="" />

            <div className="rowD">
              <div>
                <h2>{Systematically.title}</h2>
                <p>
                  <b>- {Systematically.subtitle}</b>
                  <br />
                  {Systematically.description}
                </p>
              </div>
              <div className="imgs">
                <img src={Systematically.right_image} alt="" />
                {/* <img
                  className="hand1"
                  src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-PRAWA.10fe6d37.png"
                  alt=""
                  style={{
                    transform: "translate3d(-26.7078px, -26.7078px, 0px)",
                  }}
                />
                <img
                  className="hand2"
                  src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-LEWA.5795952e.3993493a.png"
                  alt=""
                  style={{
                    transform: "translate3d(-26.7078px, -26.7078px, 0px)",
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Systemically;
