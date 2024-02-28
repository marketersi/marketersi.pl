import { useState } from "react";
import { useSelector } from "react-redux";

const SliderSection = ({ setCurrentComponent }) => {

  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const {  formTwo } = screenData?.cardMenu?.menuFour || "";
  const {  rangeArray } = screenData?.cardMenu?.menuFour?.formTwo || {};


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
        <p  style={{
            backgroundColor:
            rangeArray[currentSection]?.backgroundColor,
          }}>{rangeArray[currentSection]?.label}</p>
        <div>{rangeArray[currentSection]?.description}</div>
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
            style={{
              backgroundColor:
              rangeArray[currentSection]?.backgroundColor,
            }}
          />
          <img
            src="https://www.owocni.pl/_next/static/media/person.a15d0f85.png"
            alt=""
          />
        </div>
        <div className="ss_btn-container">
          <button onClick={() => setCurrentComponent(2)} className="cennikBtn">
            {formTwo?.section2_buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
