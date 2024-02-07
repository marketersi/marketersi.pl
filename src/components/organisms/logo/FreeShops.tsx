import React from "react";

const FreeShopsData = {
  title: "SKLEPY WOLNE OD FUTER EUROPA",
  subtitle: "Zwiększmy efektywność logo kampanii Sklepy Wolne Od Futer",
  mainImageText:
    "Kampania wspiera wysiłki zmierzające do zakazania hodowli zwierząt na futro poprzez promowanie firm, które nie sprzedają naturalnych futer.. Obecne logo ma postać emblematu, a to mocno redukuje czytelność. Wizerunek lisa jest skomplikowany, a gdy logo jest małe - tekst znika. Nasza propozycja uproszczenia tego rozwiązania powoduje, że tekst jest 8 razy większy podczas ekspozycji na powierzchni o tej samej wysokości.",
  mainImage: "/assets/images/logo-design/FreeShopsLogo.webp",
  bannerImageTextAbove:
    "Logo jest teraz dobrze widoczne z daleka. Ma 8 razy mniej linii i przynajmniej 2 razy więcej miłości. Prosta, piękna forma sprawia, że dużo łatwiej zapadnie w pamięć. Mały, słodki, śpiący lisek budzi więcej empatii niż przestraszony lis.",
  bannerimage:
    "/assets/images/logo-design/Studio-graficzne-sklepy-MOB.jpg.webp",
  bannerImageTextBelow:
    "Forma zapisu symbolizuje „ruch społeczny”. Sprzeciw - wypisany farbą. Tak mocny emocjonalnie krzyk świetnie rezonuje ze śpiącym liskiem. Aktualnie logo jest w procesie konsultacji z fundacją Otwarte Klatki.",
};

const FreeShops = () => {
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd projects-custom-mtop-0">
                SKLEPY WOLNE OD FUTER <br />
                <strong>EUROPA</strong>
              </h5>
              <h3 className="projects-theme-title-2 text-left">
                Zwiększmy <br />
                efektywność logo kampanii <br />
                Sklepy Wolne Od Futer
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-push-top-td projects-custom-margin-2">
                Kampania wspiera wysiłki zmierzające do zakazania hodowli
                zwierząt
                <br />
                na futro poprzez promowanie firm, które nie sprzedają
                naturalnych futer..
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                Obecne logo ma postać emblematu, a to mocno redukuje czytelność.
                <br />
                Wizerunek lisa jest skomplikowany, a gdy logo jest małe - tekst
                znika.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-margin-2">
                Nasza propozycja uproszczenia tego rozwiązania powoduje, że
                tekst jest <br />8 razy większy podczas ekspozycji na
                powierzchni o tej samej wysokości.
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container1-image">
          <img
            src="/assets/images/logo-design/Projektowanie-logo-grafik-stare-logo.jpg.webp"
            alt="Projektowanie logo przez profesjonalnego grafika"
            title="Projektowanie logo - grafik powinien się tym zająć"
          />
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top">
                Logo jest teraz dobrze widoczne z daleka. <br />
                Ma 8 razy mniej linii i przynajmniej 2 razy więcej miłości.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                Prosta, piękna forma sprawia, że dużo łatwiej zapadnie w pamięć.
                <br />
                Mały, słodki, śpiący lisek budzi więcej empatii niż
                przestraszony lis.
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src="/assets/images/logo-design/Studio-graficzne-sklepy.jpg"
              alt="Projekt marki dla sklepów stworzonego przez studio graficzne"
              title="Profesjonalne logo wykonane przez studio graficzne"
              style={{ left: "-363px", position: "relative", maxWidth: "none" }}
            />
            <img
              src="/assets/images/logo-design/Studio-graficzne-sklepy-MOB.jpg.webp"
              className="mobile-810"
              alt="Projekt marki dla sklepów stworzonego przez studio graficzne"
              title="Prezentacja logo dla sklepów stworzonego przez studio graficzne"
            />
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top">
                Forma zapisu symbolizuje „ruch społeczny”. Sprzeciw - wypisany
                farbą. <br />
                Tak mocny emocjonalnie krzyk świetnie rezonuje ze śpiącym
                liskiem.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                Aktualnie logo jest w procesie konsultacji z fundacją Otwarte
                Klatki. <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeShops;
