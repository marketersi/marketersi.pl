import React from "react";

const Construction = () => {
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-espace"></div>
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd">
                CORE CONSTRUCTION <br />
                <strong>Poznań</strong>
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc projects-custom-mright">
                Dzień dobry Owocni. Potrzebujemy czegoś <br />
                prostego i genialnego. Minimalistycznego <br />
                symbolu naszej jakości.
              </h3>

              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc">
                To nie było łatwe zadanie. Szukaliśmy pomysłu, który zda
                egzamin.
                <br />
                Sukcesem okazał się zapis typograficzny zawierający w sobie
                klucz.
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container1-image">
          <img
            src="/assets/images/logo-design/Logo-firmy-pomysl.jpg.webp"
            alt="Szczegółowy pomysł na logo firmy wykonany przez grafików"
            title="Przykładowe logo firmy na podstawie pomysłu"
          />
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                Wyzwanie polegało na tym, by symbol nie zakłócał czytelności
                nazwy. <br />
                Wyraz, który będzie rozpoznawany bez wysiłku, wymagał masy
                pracy.
              </p>
              <p className="theme-desc projects-theme-desc-p">
                Niezliczona ilość prób przynosi w końcu piękny, czytelny balans.
                <br />
                Wszystko za sprawą typograficznej linii o równej grubości.
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src="https://www.logofirmowe.pl/files/multimedias/525/Projekt-logo-core.jpg"
              title="Przykładowy projekt logo firmy Core"
              alt="Nowy branding zapewni firmie Core nowych klientów"
              style={{ left: "-165px", position: "relative", maxWidth: "none" }}
            />
            <img
              src="/files/multimedias/526/Projekt-logo-core-MOB.jpg.webp"
              className="mobile-810"
              alt="Nowy branding zapewni firmie Core nowych klientów"
              title="Przykładowy projekt logo firmy Core"
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image">
                Współpracowaliśmy z wieloma firmami, ale <br />
                <strong>Owocni są nie do podrobienia. Polecam!</strong>
              </h5>
            </div>
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="signature">Krystian Sadowski - prezes zarządu.</p>
              <p className="theme-desc projects-theme-desc-p">
                Po tak ciężkiej pracy miło będzie wybrać się na piwo.
                <br />
                Zwłaszcza, że Bohemia jest już tak blisko...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Construction;
