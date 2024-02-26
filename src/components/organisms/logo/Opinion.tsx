import React from "react";
import { useSelector } from "react-redux";

const OpinionData = {
  image: "/assets/images/logo-design/Projektant-logo-grafik-Jakub.jpg.webp",
  imageText:
    "W Owocnych nie znajdziesz szablonów, czy gotowych grafik. Tworzymy wyłącznie unikalne marki. Dojrzale. Od czystej kartki papieru. Firmy naszych klientów wyróżniają się, już od pierwszego spojrzenia.",
};

const Opinion = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { OpinionData } = screenData || {};
  const { image, imageText } = OpinionData || {};

  return (
    <>
      <section className="projects-gray-opinion-1">
        <div className="container projects-opinion-box-container one-box-opinion-cont">
          <div className="row">
            <div className="col-md-12">
              <div className="opinion-box">
                <div className="opinion-box-image opinion-box-image-right right-image-opinion-fix custom-text-align-right">
                  {/* <img
                    src="/assets/images/logo-design/Projektant-logo-grafik-Jakub.jpg.webp"
                    className="opinion-box-inside-image"
                    alt="Grafik logo przy pracy"
                    title="Grafik logo Jakub z Owocnych"
                  /> */}
                  {image && (
                    <img
                      src={image}
                      className="opinion-box-inside-image"
                      alt="Grafik logo przy pracy"
                      title="Grafik logo Jakub z Owocnych"
                    />
                  )}
                </div>
                <div className="opinion-box-content opinion-box-content-fix rwd-opinion-image opinion-client-bg-jakub">
                  {/* <img
                    src="/assets/images/logo-design/Projektant-logo-grafik-Jakub.jpg.webp"
                    className="opinion-box-inside-image opinion-box-inside-image-rwd"
                    alt="Grafik logo przy pracy"
                    title="Grafik logo Jakub z Owocnych"
                  /> */}
                  {image && (
                    <img
                      src={image}
                      className="opinion-box-inside-image opinion-box-inside-image-rwd"
                      alt="Grafik logo przy pracy"
                      title="Grafik logo Jakub z Owocnych"
                    />
                  )}
                </div>
                <div className="opinion-box-content opinion-box-content-fix opinion-box-content-left projects-opinion-1">
                  <div className="opinion-box-text projects-custom-opinion projects-black-text-opinion">
                    {/* W Owocnych nie znajdziesz <br />
                    szablonów, czy gotowych grafik. <br />
                    Tworzymy wyłącznie unikalne marki. <br />
                    Dojrzale. Od czystej kartki papieru. <br />
                    Firmy naszych klientów wyróżniają <br />
                    się, już od pierwszego spojrzenia. */}
                    {imageText && imageText}
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-md-12 projects-empty-opinion-box"></div>
            <div className="col-md-12 projects-empty-opinion-box"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opinion;
