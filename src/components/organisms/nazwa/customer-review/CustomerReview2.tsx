import React from "react";

const CustomerReview2 = () => {
  return (
    <section className="projects-gray-opinion-5">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image">
                <img
                  className="opinion-box-inside-image"
                  src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/zalozyciel-dobra-nazwa-dla-firmy-carmnik.jpg"
                  title="Założyciel Carmnik zadowolony z nowej nazwy"
                  alt="Klient przekonał się, że można stworzyć dobrą nazwę"
                />
              </div>
              <div className="opinion-box-content rwd-opinion-image opinion-client-bg-bohemia naming-no-bg naming-opinion-img">
                <img
                  src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/zalozyciel-dobra-nazwa-dla-firmy-carmnik.jpg"
                  title="Założyciel Carmnik zadowolony z nowej nazwy"
                  alt="Klient przekonał się, że można stworzyć dobrą nazwę"
                />
              </div>
              <div className="opinion-box-content projects-opinion-4 projects-opinion-1-new naming-opinion-text">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>OPINIA KLIENTA</strong>
                </p>
                <div className="opinion-box-text">
                  „Na stworzenie mobilnej jadłodajni postawiłem wszystkie
                  oszczędności. Owocni nie mieli wyjścia, <br />
                  to musiało się nam udać.
                  <br />
                  Pozdrawiam! :)))”
                </div>

                <button
                  className="download-catalog-button names-new-btn send-offer-button js--triggerAnimation pnazw-opinion-btn"
                  type="button"
                >
                  <strong>OK Podeślijcie mi tę ofertę.</strong>
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="col-md-12 projects-empty-opinion-box"></div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview2;
