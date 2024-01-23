import React from "react";

const ProjectValue = () => {
  return (
    <div className="pnazw-page">
      <section className="projects-thematic-section-gray projects-thematic-section-background-index ">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <div
                className="projects-custom-container-gray menu-target"
                id="sec2"
              >
                <h1 className="theme-title1 projects-big-header names-big-header naming-padding-valuation pnazw-custom-header">
                  Jak wyceniamy projekty?
                </h1>
              </div>
              <p className="theme-desc projects-theme-desc-p names-left-padding projects-thematic-section-background-index">
                Cały proces zamkamy w rozsądnej cenie dla małych firm. <br />
                Każdy projekt jest inny. Każdy wyceniamy indywidualnie, <br />
                elastycznie i przyjaźnie. Tylko jakość nie podlega negocjacji.
              </p>
            </div>
          </div>
        </div>

        <div className="projects-custom-container-gray new-wierzymy">
          <img
            className="img-wierzymy"
            src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/agencja-namingowa-wierzymy.jpg"
            title="Agencja namingowa - wierzymy w małe firmy"
            alt="Wierzymy, że dobry naming pomaga"
          />

          <p className="theme-desc text-center projects-gray-section-custom-font projects-gray-section-valuation projects-thematic-section-background-index projecs-big-wierzymy-label">
            90% pracy wykonamy
            <br /> za 50% ceny.
          </p>
        </div>

        <div className="opinion-box-image projects-thematic-section-gray-background"></div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p names-left-padding projects-thematic-section-background-index">
                Drugą połowę rozliczymy,
                <br />
                gdy będziesz w pełni zadowolony
                <br />
                ze wszystkich efektów naszej pracy.
              </p>
            </div>
          </div>
        </div>

        <div className="formulage">
          <img src="form.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default ProjectValue;
