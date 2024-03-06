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
  const { NewCompanyData, NewCompanyProfitSliderData } = screenData || {};
  const { title, subtitle, cursorChangingText } = NewCompanyData || {};
  const { images } = NewCompanyProfitSliderData || {};

  return (
    <>
      <div className="halfc-bottom"></div>
      <section className="names-thematic-section-black names-thematic-section-black-fix">
        <div className="copywriter-ending-main-theme text-center">
          {title && title}
        </div>
       
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
        <ProfitSlider images={images} />
      </section>
    </>
  );
};

export default NewCompany;
