const SliderSection = ({ setCurrentComponent }) => {
  return (
    <div className="slider_section">
      <div>
        <h2>Jakiej propozycji oczekujesz?</h2>
        <p>Przesuń suwak blisko potrzeb</p>
      </div>

      <div className="space-between"></div>
      <div>
        <div className="ss_input-container">
          <img
            src="https://www.owocni.pl/_next/static/media/persons.6bff2827.png"
            alt=""
          />
          <input type="range" />
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
