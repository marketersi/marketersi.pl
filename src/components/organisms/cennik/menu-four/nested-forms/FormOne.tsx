import { useState } from "react";

const SliderSection = ({ setCurrentComponent }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const sectionDescriptions = [
    {
      main: "Przesuń suwak blisko potrzeb",
      additional: "",
    },
    {
      main: "Strategiczna - Duża marka",
      additional: "programista + projektant UX",
    },
    {
      main: "Wiodąca - Pod marketing.",
      additional: "programista + projektant UX",
    },
    {
      main: "Klasyczna - Firmowa. Fajna.",
      additional: "programista + projektant ",
    },
    {
      main: "Najtańsza – bardzo prosta",
      additional: "programista + projektant",
    },
  ];

  const totalSections = sectionDescriptions.length;

  const handleSliderChange = (e) => {
    // Calculate the current section based on the slider value
    const sliderValue = e.target.value;
    const calculatedSection = Math.floor((sliderValue / 100) * totalSections);
    setCurrentSection(calculatedSection);
  };
  return (
    <div className="slider_section">
      <div>
        <h2>Jakiej propozycji oczekujesz?</h2>
        <p>{sectionDescriptions[currentSection]?.main}</p>
        <div>{sectionDescriptions[currentSection]?.additional}</div>
      </div>

      <div className="space-between"></div>
      <div>
        <div className="ss_input-container">
          <img
            src="https://www.owocni.pl/_next/static/media/persons.6bff2827.png"
            alt=""
          />
          <input
            type="range"
            onChange={handleSliderChange}
            value={(currentSection / (totalSections - 1)) * 100}
          />
          <img
            src="https://www.owocni.pl/_next/static/media/person.a15d0f85.png"
            alt=""
          />
        </div>
        <div className="ss_btn-container">
          <button onClick={() => setCurrentComponent(2)} className="cennikBtn">
            Dalej (Prawie koniec)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
