import React from "react";
import ProfitSlider from "../tresci-sprzedazowe/profit-slider/ProfitSlider";
import { useSelector } from "react-redux";

const NewCompanyData = {
  title: "Niech Twoja nowa firma zachwyca już od pierwszego spojrzenia",
  subtitle:
    "Jeśli lubisz ten kreatywny klimat zrozumienia panujący w małych zespołach projektowych, to w Owocnych poczujesz się jak w domu. Mamy prosty sposób na świetne projekty. Nazywa się świetni ludzie.",
  cursorChangingText: "Doświad",
};

const NewCompany = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { NewCompanyData } = screenData || {};
  const { title, subtitle, cursorChangingText } = NewCompanyData || {};

  return (
    <>
      <div className="halfc-bottom"></div>
      <section className="names-thematic-section-black names-thematic-section-black-fix">
        <div className="copywriter-ending-main-theme text-center">
          {/* Niech Twoja nowa <br />
          firma zachwyca już <br />
          od pierwszego <br />
          spojrzenia <br /> */}
          {title && title}
        </div>
        {/* <div className="copywriter-ending-3 text-center copywriter-ending-a copywriting-ending-text">
          Jeśli lubisz ten kreatywny klimat zrozumienia <br />
          panujący w małych zespołach projektowych, <br />
          to w Owocnych poczujesz się jak w domu.
        </div>
        <div className="projects-typed-label text-center copywriter-ending-a copywriting-ending-subtext">
          Mamy prosty sposób na świetne projekty. <br />
          Nazywa się świetni ludzie.
        </div> */}
        {subtitle && (
          <div className="copywriter-ending-3 text-center copywriter-ending-a copywriting-ending-text">
            {subtitle}
          </div>
        )}
        <div
          className="TypeMe typeme1 text-center projects-custom-typed-text"
          data-items="Utalentowani,Doświadczeni,Kreatywni,Rzetelni"
        >
          {/* Doświad */}
          {cursorChangingText && cursorChangingText}
        </div>
        <span className="typed-cursor">|</span>

        <div className="copywriter-ending-3 text-center copywriter-ending-a-italic"></div>

        <div className="clearfix"></div>
        <ProfitSlider />
      </section>
    </>
  );
};

export default NewCompany;
