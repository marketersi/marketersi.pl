import React from "react";
import "./pricing-option.css";

const PricingOption = () => {
  const cardStyle = {
    boxShadow:
      "4px 4px 15px rgba(0, 0, 0, 0.15), 0 0 0 #ffffff, 2px 2px 2px #ffffff inset, -2px -2px 2px #c7c7c7 inset",
    borderRadius: "30px",
    minHeight: "400px",
    padding: "20px",
    backgroundColor: "rgba(247, 247, 247, 1)",
  };

  return (
    <section>
      <div className="row justify-content-center">
        <div>
          <h2>Zdobądź 3 różne opcje cenowe na marketing swojej firmy.</h2>
          <div className="mt-3">
            <p>
              Przejdź krótki formularz. Zobacz co dla Ciebie zrobimy, ile za to
              policzymy i jak szybko Ci się to zwróci.
            </p>
          </div>

          <div className="card mt-4" style={cardStyle}>
            <div className="card-body">
              <div>
                <h2>Dla jakiej firmy jest ta strona?</h2>
                <p>Wybierz jedną z opcji.</p>
                <select>
                  <option value="option1">Opcja 1</option>
                  <option value="option2">Opcja 2</option>
                  <option value="option3">Opcja 3</option>
                </select>

                <button>Rozpocznij kalkulację</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>
          Our experts <br />
          are quoted by the largest <br />
          media in the industry
        </p>
        <img
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogotypy.eed9b686.png&w=1080&q=75"
          alt="experts"
        />
      </div>
    </section>
  );
};

export default PricingOption;
