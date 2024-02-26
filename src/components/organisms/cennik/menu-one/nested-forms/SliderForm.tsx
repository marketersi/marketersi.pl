import { useState } from "react";
import { useSelector } from "react-redux";

const SliderForm = ({ setCurrentComponent }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const {  formTwo } = screenData?.cardMenu?.menuOne || "";
  const {  rangeArray } = screenData?.cardMenu?.menuOne?.formTwo || {};

  // const sectionDescriptions = [
  //   {
  //     main: "Przesuń suwak blisko potrzeb",
  //     additional: "",
  //     backgroundColor: "#9b8993",
  //   },
  //   {
  //     main: "Strategiczna - Duża marka",
  //     additional: "programista + projektant UX",
  //     backgroundColor: "#7e9680",
  //   },
  //   {
  //     main: "Wiodąca - Pod marketing.",
  //     additional: "programista + projektant UX",
  //     backgroundColor: "#eab595",
  //   },
  //   {
  //     main: "Klasyczna - Firmowa. Fajna.",
  //     additional: "programista + projektant ",
  //     backgroundColor: "#d87f81",
  //   },
  //   {
  //     main: "Najtańsza – bardzo prosta",
  //     additional: "programista + projektant",
  //     backgroundColor: "#ae6378",
  //   },
  // ];

  const totalSections = rangeArray.length;

  const handleSliderChange = (e) => {
    const sliderValue = e.target.value;
    const calculatedSection = Math.floor((sliderValue / 100) * totalSections);
    setCurrentSection(calculatedSection);
  };
  return (
    <div className="slider_section">
      <div>
        <h2>{formTwo?.section2_title}</h2>
        <p
          style={{
            backgroundColor:
            rangeArray[currentSection]?.backgroundColor,
          }}
        >
          {rangeArray[currentSection]?.label}
        </p>
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
            className="slider-input"
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

export default SliderForm;
