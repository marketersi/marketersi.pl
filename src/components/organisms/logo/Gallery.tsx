import React from "react";
import { useSelector } from "react-redux";

const GalleryData = {
  buttonText: "OK. Wyślijcie mi niezobowiązującą ofertę",
  image: "/assets/images/logo-design/Galeria-logo.jpg.webp",
  title: "Galeria Realizacji",
  subtitle:
    "Zobacz, jakiej dokładnie jakości możesz oczekiwać we współpracy z nami.",
  imageGroup: [
    { id: 1, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
    { id: 2, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
    { id: 3, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
    { id: 4, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
    { id: 5, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
    { id: 6, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
    { id: 7, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
    { id: 8, image: "/assets/images/logo-design/Galeria-logo.jpg.webp" },
  ],
};

const Gallery = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { GalleryData } = screenData || {};
  const { buttonText, image, title, subtitle, imageGroup } = GalleryData || {};

  return (
    <>
      <section
        className="thematic-section projects-gray-background menu-target"
        id="sec3"
      >
        <div className="catalog-submit-button projects-catalog-submit-buttom logo-button-box during-page-offer">
          <button
            className="download-catalog-button projects-download-catalog-button send-offer-button rwd-logo-button-box js--triggerAnimation"
            type="button"
            fdprocessedid="bcd6ip"
          >
            <strong>
              {/* OK. Wyślijcie mi niezobowiązującą ofertę */}
              {buttonText && buttonText}
            </strong>
          </button>
        </div>

        {/* <img
          src="/assets/images/logo-design/Galeria-logo.jpg.webp"
          className="img-background-logop galeria-logo-style"
          alt="Obraz galerii - Dłonie które projektują znak graficzny. Białego niedzwiedzia."
          title="Jak projektuje się dobre logo? Zobacz galerię"
        /> */}
        {image && (
          <img
            src={image}
            className="img-background-logop galeria-logo-style"
            alt="Obraz galerii - Dłonie można projektują znak graficzny. Białego niedzwiedzia."
            title="Jak projektuje się dobre logo? Zobacz galerję"
          />
        )}

        <div
          className="container projects-custom-container1 project-pbottom-30 galeria-margin-top"
          id="sec3"
        >
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="projects-galeria-theme">
                {/* Galeria
                <br />
                Realizacji */}
                {title && title}
              </h3>

              <p className="theme-desc text-center projects-co-otrzymasz-sub">
                {/* Zobacz, jakiej dokładnie jakości możesz <br />
                oczekiwać we współpracy z nami. */}
                {subtitle && subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="container projects-custom-container1">
          <div className="row">
            <div className="col-md-12 part-sec text-center">
              {/* <img
                src="/assets/images/logo-design/Projekt-logo-voyage.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Przykładowy projekt logo Voyage"
                title="Projekt logo na przykładzie Voyage"
              />
              <img
                src="/assets/images/logo-design/Projektowanie-Aspigo.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Projektowanie logo firmy na profesjonalnym przygotowaniu dla Aspigo"
                title="Projektowanie logo firmy przy przykładzie Aspigo"
              />
              <img
                src="/assets/images/logo-design/Projekty-logo-green2.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Projektowanie logo dla firm na przykładzie koloru zielonego"
                title="Przykład z katalogu pod projekty logo - Green"
              />
              <img
                src="/assets/images/logo-design/Tanie-logo-Morinex.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Przykład na projekcie logo jak stworzyć logotyp firmy"
                title="Jak stworzyć tanie logo na przykładzie Morinex"
              />
              <img
                src="/assets/images/logo-design/Projektowanie-loga-freelancer.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Taste Time z zaprojektowanym nowym logo"
                title="Taste Time z zaprojektowanym nowym logo"
              />
              <img
                src="/assets/images/logo-design/Cena-projektu-logoprzyklad-POS.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Logotyp, na który składa się cena projektu logo"
                title="Cena projektu logo w przypadku POS"
              />
              <img
                src="/assets/images/logo-design/Cennik-logo-ECO.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Branding firmy Ecosfera"
                title="Cennik logo na przykładzie logo Ecosfera"
              />
              <img
                src="/assets/images/logo-design/Projektowanie-logo-dla-firmy-randevu.jpg.webp"
                className="projects-logotyp-fix-size projects-logotyp"
                alt="Przykładowy proces jakim jest projektowanie logo dla firmy Rendez Vous"
                title="Projektowanie logo dla firmy Rendez Vous"
              /> */}
              {imageGroup &&
                imageGroup.map((image) => (
                  <img
                    src={image}
                    className="projects-logotyp-fix-size projects-logotyp"
                    alt="Przykładowy projekt logo Voyage"
                    title="Projekt logo na przykładzie Voyage"
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
