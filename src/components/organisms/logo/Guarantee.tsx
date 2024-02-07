import React from "react";
import { useSelector } from "react-redux";

const GuaranteeData = {
  title: "100% gwarancja satysfakcji",
  subtitle:
    "Nielimitowane zmiany u konkurencji to tylko poprawki w ramach jednej koncepcji, jak kolor  czy kształt. W Owocnych jest inaczej. Tworzymy kolejne projekty od podstaw - bez  ukrytych kosztów. Kończymy pracę, dopiero gdy klient jest w pełni zadowolony!",
  buttonText: "OK. Wyślijcie mi niezobowiązającą ofertę",
};

const Guarantee = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { title, subtitle, buttonText } = screenData;

  return (
    <>
      <section>
        <div className="container projects-custom-white-container menu-target text-center">
          {/* <div className="projects-big-100">100%</div>
          <div className="projects-big-sub100">gwarancji satysfakcji</div> */}
          {title && <div className="projects-big-100">{title}</div>}
          {/* <div className="projects-big-text100">
            Nielimitowane zmiany u konkurencji to tylko poprawki w ramach jednej
            koncepcji, jak kolor czy kształt. W Owocnych jest inaczej. Tworzymy
            kolejne projekty od podstaw - bez ukrytych kosztów. Kończymy pracę,
            dopiero gdy klient jest w pełni zadowolony!
          </div> */}
          {subtitle && <div className="projects-big-sub100">{subtitle}</div>}

          <button
            className="download-catalog-button-2 projects-download-catalog-button projects-button-margin send-offer-button js--triggerAnimation"
            type="button"
            fdprocessedid="jeqyl"
          >
            <strong>
              {/* OK. Wyślijcie mi niezobowiązującą ofertę */}
              {buttonText && buttonText}
            </strong>
          </button>
        </div>
      </section>
    </>
  );
};

export default Guarantee;
