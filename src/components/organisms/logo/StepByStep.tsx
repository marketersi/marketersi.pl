import React from "react";
import { useSelector } from "react-redux";

const StepBystepData = {
  title: "Przykłady realizacji krok po kroku",
  subtitle:
    "Jak dokładnie przebiega owocny proces projektowania logo? Poznaj ciekawe historie naszych klientów.",
  image: "/assets/images/logo-design/Wlasne-logo-Appetime.jpg.webp",
  imageTitle: "APPETIME POZNAŃ",
  imageSubTitle:
    "Projekt logo dla nowo powstającej sieci lokali gastronomicznych.",
  secondaryImage: "./img/Projektowanie-graficzne-logo.jpg.webp",
  secondaryImageTitle:
    "W większości przypadków faworyt wyłania się w pierwszej odsłonie. Tak było i w tym przypadku. Zwycięska koncepcja nawiązywała do świeżego jedzenia i czasu. Ukrojonego 'kwadransu' z pizzy.",
  secondaryImageSubtitle:
    "Mąż Pani Anny chciał zobaczyć jeszcze znak z wizerunkiem kucharza lub czapki kucharskiej. Stworzyliśmy tę koncepcję, ale utwierdziły nas w przekonaniu, że pomysł z pizzą, który zrodziłsię w pierwszych rozmowach, jest właściwym rozwiązaniem. Projekt stał się początkiem długiej i udanej współpracy. 2018 r., marka została kupiona przez wiodącą polską sieć pizzerii.",
  bannerImage: "/assets/images/logo-design/Wlasne-logo-Appetime.jpg.webp",
  bannerImageTitle: "Współpraca z Owocnymito był strzał w 10!",
  bannerImageSubtitle: "Wojciech Rzepka - właściciel.",
};

const StepByStep = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const {
    title,
    subtitle,
    image,
    imageTitle,
    imageSubTitle,
    secondaryImage,
    secondaryImageTitle,
    secondaryImageSubtitle,
    bannerImage,
    bannerImageTitle,
    bannerImageSubtitle,
  } = screenData;

  return (
    <>
      <section className="thematic-section projects-gray-background" id="sec4">
        <div className="container projects-custom-container1 menu-target">
          <div className="row">
            <div className="col-md-12">
              <h3 className="projects-krok-po-kroku no-after p-bottom-10">
                {/* Przykłady realizacji <br />
                krok po kroku */}
                {title && title}
              </h3>

              <p className="theme-desc text-center p-0 projects-under-big-header3">
                {/* Jak dokładnie przebiega owocny <br />
                proces projektowania logo? <br />
                Poznaj ciekawe historie <br />
                naszych klientów. */}
                {subtitle && subtitle}
              </p>
            </div>
          </div>
          <div className="container custom-container1"></div>
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
                {/* APPETIME <br />
                <strong>POZNAŃ</strong> */}
                {imageTitle && imageTitle}
              </h5>
            </div>
          </div>
        </div>

        {/* <img
          src="/assets/images/logo-design/Projektant-logo-Appetime.jpg.webp"
          className="img-background-logop"
          alt="Identyfikacja wizualna, którą stworzył projektant"
          title="Projektant logo stworzył wizualizację dla Appetime"
        /> */}
        {image && (
          <img
            src={image}
            className="img-background-logop"
            alt="Projekt logo dla nowo powstącej sieci lokali gastronomicznych"
            title="Projekt logo dla nowo powstącej sieci lokali gastronomicznych"
          />
        )}

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {/* Projekt logo dla nowo powstającej <br />
                sieci lokali gastronomicznych. */}
                {imageSubTitle && imageSubTitle}
              </h3>
            </div>

            <div className="col-md-12 projects-push-content-top">
              <p className="theme-desc projects-theme-desc-p projects-push-top-50">
                {/* W większości przypadków faworyt wyłania się w pierwszej
                odsłonie.
                <br />
                Tak było i w tym przypadku. Zwycięska koncepcja nawiązywała do
                <br />
                świeżego jedzenia i czasu. Ukrojonego "kwadransu" z pizzy.{" "}
                <br /> */}
                {secondaryImageTitle && secondaryImageTitle}
              </p>
              <div>
                {/* <img
                  src="./img/Projektowanie-graficzne-logo.jpg.webp"
                  className="appetime-img-p appetime-img"
                  alt="Wykonanie specjalnego projektu logo"
                  title="Przykłady tego, co potrafi projektowanie graficzne w przypadku logo"
                /> */}
                {secondaryImage && (
                  <img
                    src={secondaryImage}
                    className="appetime-img-p appetime-img"
                    alt="Wykonanie specjalnego projektu logo"
                    title="Przykłady tego, co potrafi projektowanie graficzne w przypadku logo"
                  />
                )}
              </div>
              {/* <p className="theme-desc projects-theme-desc-p">
                Mąż Pani Anny chciał zobaczyć jeszcze znak z wizerunkiem <br />
                kucharza lub czapki kucharskiej. Stworzyliśmy tę koncepcję, ale
                <br />
                utwierdziły nas w przekonaniu, że pomysł z pizzą, który zrodził
                się <br />
                w pierwszych rozmowach, jest właściwym rozwiązaniem. <br />
              </p>
              <p className="theme-desc projects-theme-desc-p">
                Projekt stał się początkiem długiej i udanej współpracy. 2018
                r.,
                <br />
                marka została kupiona przez wiodącą polską sieć pizzerii.
              </p> */}
              <p className="theme-desc projects-theme-desc-p">
                {secondaryImageSubtitle && secondaryImageSubtitle}
              </p>
            </div>

            <div
              className="col-md-12 projects-custom-text-inside-img-2 projects-appetime-hide-img z-index-2"
              style={{ marginBottom: "-430px" }}
            >
              <h5 className="theme-quote signed-quote signed-quote-image margin-right-74">
                {/* Współpraca z Owocnymi <br />
                to był strzał w 10! */}
                {bannerImageTitle && bannerImageTitle}
              </h5>

              <p className="signature projects-rwd-push">
                {/* Wojciech Rzepka - właściciel. */}
                {bannerImageSubtitle && bannerImageSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div
          className="image-810-container"
          style={{ zIndex: 1, marginTop: 0 }}
        >
          <div className="image-810">
            {/* <img
              src="/assets/images/logo-design/Wlasne-logo-Appetime.jpg.webp"
              className="desktop-810 position-relative"
              alt="Tworzenie identyfikacji wizualnej i wizytówki"
              title="Jak stworzyć własne logo na przykładzie Appetime"
              style={{ position: "relative", left: "-450px", maxWidth: "none" }}
            /> */}
            {bannerImage && (
              <img
                src={bannerImage}
                className="desktop-810 position-relative"
                alt="Tworzenie identyfikacji wizualnej i wizytówki"
                title="Jak stworzyć własne logo na przykładzie Appetime"
                style={{
                  position: "relative",
                  left: "-450px",
                  maxWidth: "none",
                }}
              />
            )}
            <img
              src="/assets/images/logo-design/Wlasne-logo-Appetime-MOB.jpg.webp"
              className="mobile-810"
              alt="Tworzenie identyfikacji wizualnej i wizytówki"
              title="Jak stworzyć własne logo na przykładzie Appetime"
            />
          </div>
        </div>

        <div className="clearfix"></div>
      </section>
    </>
  );
};

export default StepByStep;
