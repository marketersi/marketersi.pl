import React from "react";
import ProfitSlider from "../tresci-sprzedazowe/profit-slider/ProfitSlider";

const NewCompany = () => {
  return (
    <>
      <div className="halfc-bottom"></div>
      <section className="names-thematic-section-black names-thematic-section-black-fix">
        <div className="copywriter-ending-main-theme text-center">
          Niech Twoja nowa <br />
          firma zachwyca już <br />
          od pierwszego <br />
          spojrzenia <br />
        </div>
        <div className="copywriter-ending-3 text-center copywriter-ending-a copywriting-ending-text">
          Jeśli lubisz ten kreatywny klimat zrozumienia <br />
          panujący w małych zespołach projektowych, <br />
          to w Owocnych poczujesz się jak w domu.
        </div>
        <div className="projects-typed-label text-center copywriter-ending-a copywriting-ending-subtext">
          Mamy prosty sposób na świetne projekty. <br />
          Nazywa się świetni ludzie.
        </div>
        <div
          className="TypeMe typeme1 text-center projects-custom-typed-text"
          data-items="Utalentowani,Doświadczeni,Kreatywni,Rzetelni"
        >
          Doświad
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
