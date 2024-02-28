import { useState } from "react";
import { useSelector } from "react-redux";

const SliderForm = ({ setCurrentComponent }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const {  formTwo } = screenData?.cardMenu?.menuThree || "";
  const {  rangeArray } = screenData?.cardMenu?.menuThree?.formTwo || {};

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
          Dalej (Prawie koniec)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderForm;
