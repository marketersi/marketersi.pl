import React from "react";
import "./logo.css";
import { useSelector } from "react-redux";

const SampleLogoData = {
  imageGroup1: [
    "/assets/images/logo-design/Projekt-loga-konto.jpg.webp",
    "/assets/images/logo-design/Projekt-logo-agencja-Kotwica.jpg.webp",
    "/assets/images/logo-design/Logo-firmy-Bohemia.jpg.webp",
    "/assets/images/logo-design/Projektu-logo-Leopard.jpg.webp",
    "/assets/images/logo-design/Projekt-logo-Przeznaczenie.jpg.webp",
  ],
  imageGroup2: [
    "/assets/images/logo-design/Projektowanie-logo-cena-Promor.jpg.webp",
    "/assets/images/logo-design/Projektowanie-logo-cena-Jaglanka.jpg.webp",
    "/assets/images/logo-design/logo-dla-firmy-appetime6.jpg.webp",
    "/assets/images/logo-design/Projekty-loga-Varsovie.jpg.webp",
  ],
  imageGroup3: [
    "/assets/images/logo-design/Logo-firmy-Ego.jpg.webp",
    "/assets/images/logo-design/Projekt-logo-Banda.jpg.webp",
    "/assets/images/logo-design/logo-firmy-aog13.jpg.webp",
  ],
};

const SampleLogo = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { imageGroup1, imageGroup2, imageGroup3 } = screenData;

  return (
    <>
      <section className="sampleLogo">
        <div className="container-fluid projects-top-logo-container text-center">
          {/* <img
            src="/assets/images/logo-design/Projekt-loga-konto.jpg.webp"
            className="projects-top-logo"
            alt="Elegancki branding firmy eKonto"
            title="Projekt loga dla Konto"
          />
          <img
            src="/assets/images/logo-design/Projekt-logo-agencja-Kotwica.jpg.webp"
            className="projects-top-logo"
            alt="Przykład do projektu logo, jakim jest wykonanie zadania dla firmy"
            title="Projekt logo - agencja wykonuje zadanie dla firmy"
          />
          <img
            src="/assets/images/logo-design/Logo-firmy-Bohemia.jpg.webp"
            className="projects-top-logo"
            alt="Logo przedstawiające firmę Bohemia"
            title="Logo firmy Bohemia"
          />
          <img
            src="/assets/images/logo-design/Projektu-logo-Leopard.jpg.webp"
            className="projects-top-logo"
            alt="Przykładowa realizacja logo dla firmy Leopard"
            title="Przykład projektu logo dla firmy Leopard"
          />
          <img
            src="/assets/images/logo-design/Tworzenie-logo-Angie.jpg.webp"
            className="projects-top-logo"
            alt="Tworzenie logo Angie"
            title="Grafika przedstawiająca tworzenie logo Angie"
          /> */}
          {imageGroup1 &&
            imageGroup1.map((image, index) => (
              <img
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>

        <div className="container-fluid projects-top-logo-container text-center">
          {/* <img
            src="/assets/images/logo-design/Projektowanie-logo-cena-Promor.jpg.webp"
            className="projects-top-logo"
            alt="Przykładowa realizacja jaką jest projektowanie logo dla Promor"
            title="Przykład procesu jakim jest projektowanie logo - cena włączona w proces - dla firmy Promor"
          />
          <img
            src="/assets/images/logo-design/Projektowanie-logo-cena-Jaglanka.jpg.webp"
            className="projects-top-logo"
            alt="Przykład do procesu jakim jest projektowanie logo"
            title="Projektowanie logo - cena - na przykładzie Jaglanki"
          />
          <img
            src="/assets/images/logo-design/logo-dla-firmy-appetime6.jpg.webp"
            className="projects-top-logo"
            alt="Przykład logotypu przedstawiającego pizzę"
            title="Logo dla firmy Appetime"
          />
          <img
            src="/assets/images/logo-design/Projekty-loga-Varsovie.jpg.webp"
            className="projects-top-logo"
            alt="Przykładowa realizacja projektu loga dla Varsovie"
            title="Przykład czynności, którą jest projekty loga dla Varsovie"
          /> */}
          {imageGroup2 &&
            imageGroup2.map((image, index) => (
              <img
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>

        <div className="container-fluid projects-top-logo-container text-center projects-bottom-push">
          {/* <img
            src="/assets/images/logo-design/Logo-firmy-Ego.jpg.webp"
            className="projects-top-logo"
            alt="Proste logo dla firmy Ego"
            title="Logo firmy Ego"
          />
          <img
            src="/assets/images/logo-design/Projekt-logo-Banda.jpg.webp"
            className="projects-top-logo"
            alt="Logo przedstawiające czcionkę i napis Banda"
            title="Projekt logo Banda"
          />
          <img
            src="/assets/images/logo-design/logo-firmy-aog13.jpg.webp"
            className="projects-top-logo"
            alt="Identyfikacja wizualna dla firmy AOG13"
            title="Grafika z logo dla firmy AOG13"
          /> */}
          {imageGroup3 &&
            imageGroup3.map((image, index) => (
              <img
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default SampleLogo;
