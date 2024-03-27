import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = (index) => {
    if (index === 1) {
      setModalIsOpen(true);
    }
  };

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
                        {points?.map((point, i) => (
                          <li className="projects-includes-li" key={i}>
                            {/* {point} */}
                            {i === 1 ? (
                              <>
                                {point}{" "}
                                <div
                                  onClick={() => handleButtonClick(i)}
                                  className="orange_clickable"
                                >
                                  (Zobacz co to jest?)
                                </div>
                              </>
                            ) : (
                              point
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 projects-custom-espace"></div>
            </div>
          </div>

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

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <img
          src="https://www.logofirmowe.pl/Logofirmowe/projektowanie-logo-img/Responsywne.jpg"
          alt="Modal Image"
        />

        <div onClick={() => setModalIsOpen(false)} className="modal_close_btn">
          x
        </div>
      </Modal>
    </>
  );
};

export default Receive;
