import React from "react";
import ProfitSlider from "./ProfitSlider";

const Profit = () => {
  return (
    <div>
      <section className="thematic-nr-section thematic-bg-section copywriter-ending-white-bg copywriter-standard-pt-40">
        <img
          src="https://cdn.owocni.pl/img/copywriting-main-img/bg-black-top.png"
          alt="Image"
          className="white-bg"
        />
      </section>
      <section className="names-thematic-section-black names-thematic-section-black-fix copywriter-ending-padding copywriter-standard-pt-40">
        <div className="copywriter-ending-big text-center">
          Taki zysk, <br />
          jaki tekst
        </div>

        <div className="copywriter-ending-big-2 text-center">
          Taki tekst jaki copywriter
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc text-center copywriter-ending-white">
                Lubisz ten kreatywny klimat porozumienia <br />
                panujący w małym zespole projektowym? <br />W Owocnych poczujesz
                się jak w domu.
              </p>

              <p className="theme-desc text-center copywriter-ending-white">
                Podejrzyj nas podczas pracy. <br />
                Przewiń fotografie w bok.
              </p>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </section>
      <ProfitSlider />
    </div>
  );
};

export default Profit;
