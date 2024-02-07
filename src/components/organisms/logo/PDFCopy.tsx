import React from "react";
import { useSelector } from "react-redux";

const PDFCopyData = {
  normalText:
    "Jak wywołać właściwe emocje, zdobyć zaufanie i sympatię? Jakie kształty i które kolory sprawdzą się najlepiej w branży? To tylko kilka części układanki, które pomożemy Ci rozwiązać.",
  image: "/assets/images/logo-design/Ksiega-znaku-projektowanie-logo.jpg.webp",
  imageTitle:
    "Owocny przewodnik po mądrym projektowaniu logo dla właścicieli małych firm stał się tak popularny, że cytuje go cała fachowa prasa.",
  imageSubtitle: "Możesz pobrać darmowy egzemplarz.",
  imageLinkText: "Kliknij tutaj(PDF)",
  imageLink:
    "https://drive.google.com/uc?authuser=0&amp;id=1bU_jwyc1R4WqXkZDaDmuMPj-U30pZUwm&amp;export=download",
};

const PDFCopy = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const {
    normalText,
    image,
    imageTitle,
    imageSubtitle,
    imageLinkText,
    imageLink,
  } = screenData;

  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-push-content-top">
              <p className="theme-desc projects-theme-desc-p projects-mq-book-fix">
                {/* Jak wywołać właściwe emocje, zdobyć zaufanie i sympatię? <br />
                Jakie kształty i które kolory sprawdzą się najlepiej w branży?
                <br />
                To tylko kilka części układanki, które pomożemy Ci rozwiązać. */}
                {normalText && normalText}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 projects-lprasa-container">
              {/* <img
                src="/assets/images/logo-design/Ksiega-znaku-projektowanie-logo.jpg.webp"
                className="projects-ksiazka-projektowanie-logo"
                alt="Zdjęcie okładki książki Owocnych"
                title="Księga znaku przedstawiająca projektowanie logo"
              /> */}
              {image && (
                <img
                  src={image}
                  className="projects-ksiazka-projektowanie-logo"
                  alt="Zdjęcie okładki książki Owocnych"
                  title="Księga znaku przedstawiająca projektowanie logo"
                />
              )}
            </div>
            <div className="col-md-6">
              <p className="theme-desc projects-custom-lineheight projects-custom-margin">
                {/* Owocny przewodnik po mądrym <br />
                projektowaniu logo dla właścicieli <br />
                małych firm stał się tak popularny, <br />
                że cytuje go cała fachowa prasa. <br /> */}
                {imageTitle && imageTitle}
              </p>
              <p className="projects-custom-lineheight projects-prasa-margin">
                <img
                  src="/assets/images/logo-design/Logotyp-dla-firmy-prasa.gif.webp"
                  className="projects-hide-img"
                  alt=""
                  title="Logotyp dla firmy prasa"
                />
              </p>
              <p className="theme-desc projects-custom-lineheight">
                {/* Możesz pobrać darmowy egzemplarz. <br /> */}
                {imageSubtitle && imageSubtitle} <br />
                {/* <a
                  href="https://drive.google.com/uc?authuser=0&amp;id=1bU_jwyc1R4WqXkZDaDmuMPj-U30pZUwm&amp;export=download"
                  style={{ textDecoration: "none" }}
                >
                  <span className="orange-link">
                    <strong>Kliknij tutaj</strong>
                    <span className="projects-custom-italic">(PDF)</span>
                  </span>
                </a> */}
                {imageLink && imageLinkText && (
                  <a href={imageLink} style={{ textDecoration: "none" }}>
                    <span className="orange-link">
                      {/* <strong>Kliknij tutaj</strong>
                      <span className="projects-custom-italic">(PDF)</span> */}
                      <strong>{imageLinkText}</strong>
                    </span>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PDFCopy;
