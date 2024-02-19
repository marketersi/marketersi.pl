import React from "react";
import { useSelector } from "react-redux";

const ReceiveData = {
  title: "Co otrzymasz?",
  subtitle:
    "Każdy podstawowy pakiet zawiera komplet materiałów niezbędnych do prowadzenia Twojej firmy.",
  image: "/assets/images/logo-design/Projekt-logo-dla-firm-anatomia.jpg.webp",
  points: [
    "Unikalne, własne logo - tworzone od czystej kartki",
    "Projekty logo w wersji responsywnej. (Zobacz co to jest?)",
    "Pliki profesjonalnej ekspozycji. - Wersja biała, wersja jednokolorowa, przezroczysty znak wodny ikony, bitmapy oraz krzywe (Wektory).",
    "Spójny z wizerunkiem projekt firmowych wizytówek.",
    "Profesjonalny papier firmowy do druku ofert oraz faktur.",
    "Grafikę firmową na Facebook lub do innej społeczności.",
  ],
};

const Receive = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { ReceiveData } = screenData || {};
  const { title, subtitle, image, points } = ReceiveData || {};

  return (
    <>
      <section className="receive" id="sec1">
        <div className="container projects-custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h3 className="projects-co-otrzymasz no-after">
                {/* Co otrzymam? */}
                {title && title}
              </h3>

              <div className="projects-empty-20px"></div>
              <div className="projects-empty-20px"></div>
            </div>
          </div>
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="projets-custom-theme-desc projects-co-otrzymasz-sub2 text-center projects-margin-b-60">
                {/* Każdy podstawowy pakiet zawiera <br />
                komplet materiałów niezbędnych <br />
                do prowadzenia Twojej firmy. */}
                {subtitle && subtitle}
              </p>

              <div className="projects-empty-20px"></div>
            </div>
          </div>
        </div>

        <div className="projects-oferta-veggo-cont">
          <div className="container custom-container2">
            <div className="row">
              <div className="col-md-12 projects-theme-desc-p">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12 projects-includes">
                      <ul className="projects-includes-ul">
                        {/* <li className="projects-includes-li">
                          Unikalne, własne logo <br />- tworzone od czystej
                          kartki
                        </li>
                        <li className="projects-includes-li">
                          Projekty logo w wersji responsywnej. <br />(
                          <a
                            className="orange-link"
                            href="./img/projektowanie-logo-img/Responsywne.jpg"
                            data-lity=""
                            data-lity-desc="Photo of a flower"
                          >
                            Zobacz co to jest?
                          </a>
                          )
                        </li>
                        <li className="projects-includes-li">
                          Pliki profesjonalnej ekspozycji. <br />
                          - Wersja biała, wersja jednokolorowa, <br />
                          przezroczysty znak wodny ikony, <br />
                          bitmapy oraz krzywe (Wektory).
                        </li>
                        <li className="projects-includes-li">
                          Spójny z wizerunkiem projekt <br />
                          firmowych wizytówek.
                        </li>
                        <li className="projects-includes-li">
                          Profesjonalny papier firmowy <br />
                          do druku ofert oraz faktur.
                        </li>
                        <li className="projects-includes-li">
                          Grafikę firmową na Facebook <br />
                          lub do innej społeczności.
                        </li> */}
                        {points?.map((point) => (
                          <li className="projects-includes-li">{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 projects-custom-espace"></div>
            </div>
          </div>
          {/* <img
            src="/assets/images/logo-design/Oferta-projektowania-logo-cennik.jpg.webp"
            className="projects-oferta-veggo-bg"
            alt="Znak Veggo na materiałach drukowanych"
            title="Znak Veggo na materiałach drukowanych"
          /> */}
          {image && (
            <img
              src={image}
              className="projects-oferta-veggo-bg"
              alt="Znak Veggo na materiałach drukowanych"
              title="Znak Veggo na materiałach drukowanych"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Receive;
