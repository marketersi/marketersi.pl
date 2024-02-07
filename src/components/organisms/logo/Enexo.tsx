import React from "react";

const EnexoData = {
  title: "ENEXO WROCŁAW",
  subtitle:
    "Historia logo konsultantów budowlanych. Marki, która ma wygrywać dzięki ludziom.",
  text: "Od początku było jasne, że stawiamy na korporacyjną przejrzystość. Marka miała być postrzegana na równi z międzynarodowymi gigantami. Charakterystyczny czynnik X znaleźliśmy w postaci gestu zwycięzcy. To był strzał w dziesiątkę! Byliśmy bardzo zadowoleni z tego efektu. Ostre wierzchołki ikony podkreślone zostały przez, litery. Wygląda to naprawdę świetnie na każdym firmowym materiale.",
  secondaryImage: "/img/Projektowanie-graficzne-logo.jpg.webp",
  image: "/assets/images/logo-design/Enexo-logo.jpg.webp",
  quote:
    "Super! Wyglądamy teraz lepiej niż duże zachodnie marki w naszej branży",
  quoteAuthor: "Michał Zaborowski - Właściciel",
  quoteText:
    "DACO błyskawicznie zdobyła sympatię docelowej grupy klientów. Dziś jest już rozpoznawalna w Anglii, Danii, Czechach, Słowacji i Rosji.",
};

const Enexo = () => {
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
                ENEXO <br />
                <strong>WROCŁAW</strong>
              </h5>

              <h3 className="projects-theme-title-2 text-left">
                Historia logo <br />
                konsultantów budowlanych. <br />
                Marki, która ma wygrywać dzięki ludziom.
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc projects-custom-margin-2">
                Od początku było jasne, że stawiamy na korporacyjną
                przejrzystość.
                <br />
                Marka miała być postrzegana na równi z międzynarodowymi
                gigantami.
              </p>
              <p className="theme-desc projects-theme-desc-p">
                Charakterystyczny czynnik X znaleźliśmy w postaci gestu
                zwycięzcy.
                <br />
              </p>
              <div className="custom-container1-image">
                <img
                  src="/assets/images/logo-design/Projekt-logo-agencja-pomysl.gif.webp"
                  className="mobile-810"
                  alt="Projekt logo - agencja czy własne wykonanie?"
                  title="Czy projekt logo agencja musi wykonać?"
                />
              </div>
              <p className="theme-desc projects-theme-desc-p">
                To był strzał w dziesiątkę! Byliśmy bardzo zadowoleni z tego
                efektu. <br />
                Ostre wierzchołki ikony podkreślone zostały przez, krągłe
                litery.
              </p>
              <p className="theme-desc projects-theme-desc-p">
                Wygląda to naprawdę świetnie na każdym firmowym materiale.
              </p>
            </div>
          </div>
        </div>
        <div className="image-810-container projects-image-810-container projects-mb-30">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src="/assets/images/logo-design/Projektowanie-logo-freelancer-Enexo.jpg"
              title="Projektowanie logo - freelancer wykonał je dla Enexo"
              alt="Wizerunek Twojej marki - freelancer czy zatrudnienie agencji?"
              style={{ left: "-76px", position: "relative", maxWidth: "none" }}
            />
            <img
              src="/assets/images/logo-design/Ksiega-znaku-pomysl-MOB.jpg.webp"
              className="mobile-810"
              alt="Wizerunek Twojej marki - freelancer czy zatrudnienie agencji?"
              title="Projektowanie logo - freelancer wykonał je dla Enexo"
            />
          </div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image">
              “<strong>Super!</strong> Wyglądamy teraz lepiej niż duże <br />
              zachodnie marki w naszej branży”
            </h5>
            <p className="signature">Michał Zaborowski - Właściciel</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enexo;
