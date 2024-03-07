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
  const { SampleLogoData } = screenData || {};
  const { imageGroup1, imageGroup2, imageGroup3, imageGroup4} = SampleLogoData || {};

  return (
    <>
      <section className="sampleLogo">
        <div className="container-fluid projects-top-logo-container text-center desktopLogo">
          {imageGroup1 &&
            imageGroup1.map((image, index) => (
              <img
                key={index}
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>

        <div className="container-fluid projects-top-logo-container text-center desktopLogo">
          {imageGroup2 &&
            imageGroup2.map((image, index) => (
              <img
              key={index}
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>

        <div className="container-fluid projects-top-logo-container text-center projects-bottom-push desktopLogo">
          
          {imageGroup3 &&
            imageGroup3.map((image, index) => (
              <img
              key={index}
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>
        <div className="container-fluid projects-top-logo-container text-center projects-bottom-push mobileLogo">
          
          {imageGroup4 &&
            imageGroup4.map((image, index) => (
              <img
              key={index}
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
