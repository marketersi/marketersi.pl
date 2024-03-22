import React from "react";
import { useSelector } from "react-redux";

const IgnoreSitesData = {
  image:
    "https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.webp",
  title: "Ludzie ignorują strony, które ignorują ludzi...",
  description1: "descriptions",
  description2: "descriptions",
};

const IgnoreSites = () => {
  const { screenData } = useSelector((state) => state.ux);
  const IgnoreSites = screenData.IgnoreSites || {};

  return (
    <>
      <section>
        <div id="maciej">
          <div className="imgs">
            <img src={IgnoreSites.image} />
          </div>
          <div className="contentText">
            <h2>{IgnoreSites.title}</h2>
            <p>
              {IgnoreSites.descript1}
            </p>
            <p>
              {IgnoreSites.descript2}
            </p>
            <a className="btn-neon send-offer-button js--triggerAnimation">
              Zapytaj o makietę dla siebie
              <div
                className="light"
                style={{ transform: "rotate(120deg) scale(0.7, 0.7)" }}
              ></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default IgnoreSites;
