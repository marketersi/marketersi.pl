import React from "react";

const AicoData = {
  title: "AICO WARSZAWA",
  subtitle:
    "Krótka historia przytulaśnego znaku dla rodzinnej hurtowni artykułów dziecięcych.",
  text: "Pomysł mamy opiekującej się dzieckiem budził wiele entuzjazmu. Poszukiwania nabrały emocji, gdy ktoś zasugerował, by były to misie. Kto powiedział, że dojrzała marka nie może być słodka? Do zadania trzeba było podejść ostrożnie, by ominąć pułapki Sprytna technika ustawienia małego misia w odwróceniu kolorów znacząco zmniejsza ilość detali i nadała dojrzałego charakteru. W finale symbol jest dobrze zbalansowany. Prosty, radosny i bardzo profesjonalny",
  secondaryImage: "/img/Projektowanie-graficzne-logo.jpg.webp",
  image: "/assets/images/logo-design/daco-logo.webp",
  quote:
    "o jest po prostu świetne! Całe szczęście, że zdecydowaliśmy się na wasze studio!",
  quoteAuthor: "Iwona i Andrzej Ziółkowscy - właściciele.",
  quoteText:
    "DACO błyskawicznie zdobyła sympatię docelowej grupy klientów. Dziś jest już rozpoznawalna w Anglii, Danii, Czechach, Słowacji i Rosji.",
};

const Aico = () => {
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd">
                AICO <br />
                <strong>WARSZAWA</strong>
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                Krótka historia <br />
                przytulaśnego znaku dla rodzinnej <br />
                hurtowni artykułów dziecięcych.
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc">
                Pomysł mamy opiekującej się dzieckiem budził wiele entuzjazmu.
                <br />
                Poszukiwania nabrały emocji, gdy ktoś zasugerował, by były to
                misie.
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container1-image">
          <img
            src="/assets/images/logo-design/Ksiega-znaku-pomysl.jpg.webp"
            alt="Księga znaku - użycie w celu zaprojektowania nowego logo"
            title="Księga znaku dająca pomysł na znak firmowy"
          />
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top">
                <strong>
                  Kto powiedział, że dojrzała marka nie może być słodka?
                </strong>
                <br />
                Do zadania trzeba było podejść ostrożnie, by ominąć pułapki.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                Sprytna technika ustawienia małego misia w odwróceniu kolorów
                <br />
                znacząco zmniejsza ilość detali i nadała dojrzałego charakteru.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                W finale symbol jest dobrze zbalansowany. <br />
                Prosty, radosny i bardzo profesjonalny.
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src="https://www.logofirmowe.pl/files/multimedias/519/Projektowaniu-logo-Aico.jpg"
              title="Przykład pracy przy projektowaniu logo na bazie Aico"
              alt="Aico jako przykład procesu w projektowaniu logo"
              style={{ left: "-224px", position: "relative", maxWidth: "none" }}
            />
            <img
              src="/files/multimedias/520/Projektowaniu-logo-Aico-MOB.jpg.webp"
              className="mobile-810"
              alt="Aico jako przykład procesu w projektowaniu logo"
              title="Przykład pracy przy projektowaniu logo na bazie Aico"
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image margin-right-74">
                <strong>„To jest po prostu świetne!</strong> Całe szczęście, że
                zdecydowaliśmy się na wasze studio!”
              </h5>
            </div>
          </div>
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="signature">
                Iwona i Andrzej Ziółkowscy - właściciele.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aico;
