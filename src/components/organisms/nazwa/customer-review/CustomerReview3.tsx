import React from "react";

const CustomerReview3 = () => {
  return (
    <section className="projects-gray-opinion-4">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image">
                <img
                  className="opinion-box-inside-image"
                  src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/mezczyzna-stolarstwo.jpg"
                  title="Mężczyzna-stolarstwo-robisz to"
                  alt="Mężczyzna i stolarstwo"
                />
              </div>
              <div className="opinion-box-content rwd-opinion-image opinion-client-bg-core naming-no-bg pnazw-rwd-opinion-text">
                <img
                  src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/mezczyzna-stolarstwo.jpg"
                  title="Mężczyzna-stolarstwo-robisz to"
                  alt="Mężczyzna i stolarstwo"
                />
              </div>
              <div className="opinion-box-content projects-opinion-5 projects-opinion-1-new naming-opinion-text naming-opinion-img">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>OPINIA KLIENTA</strong>
                </p>
                <div className="opinion-box-text">
                  „Nasze stowarzyszenie dopiero <br />
                  startuje. Nie stoją za nami <br />
                  osiągnięcia ani wielki budżet, ale <br />
                  Owocni uwierzyli w nas i stworzyli <br />
                  nam markę, która wygląda, jakby <br />
                  była na rynku od lat. Dzięki.”
                </div>
                <button
                  className="download-catalog-button names-new-btn send-offer-button  js--triggerAnimation pnazw-opinion-btn"
                  type="button"
                >
                  <strong>OK Podeślijcie mi tę ofertę.</strong>
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview3;
