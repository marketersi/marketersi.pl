import { useState } from "react";
import SurveyModal from "./SurveyModal";

export default function Price() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="Price content">
      <div className="Price_Title popout">
        Jak wyceniamy projekty strategii marketingowej?
      </div>
      <div className="Price_Container full">
        <div className="Price_Card_Container">
          {/* Card 1 */}
          <div className="Price_Card">
            <div className="Price_Card_Number">5k</div>
            <div className="Price_Card_Main">
              <div>
                <div className="Price_Card_Main_Title">Strategia 5k</div>
                <div className="Price_Card_Main_TextOne">
                  Masz plan na marketing w budżecie od 0 – 5,000 PLN
                  miesięcznie.
                </div>
                <div className="Price_Card_Main_ContentOne">
                  Prowadzisz małą firmę, lub jesteś jeszcze na etapie pomysłu,
                  więc wszystko trzeba zaplanować od zera. Pracujesz w
                  pojedynkę, lub posiadasz mały zespół. Nie masz wiele czasu na
                  prowadzenie marketingu.
                </div>
                <div className="Price_Card_Main_TextTwo">Co otrzymasz:</div>
                <div className="Price_Card_Main_ContentTwo">
                  50-100 stronicowa strategia, opisująca jak efektywnie
                  rozporządzać miesięcznym budżetem w wysokości 0 - 5,000 PLN
                </div>
                <div className="Price_Card_Main_Footer">
                  Jednorazowa inwestycja: 7500 PLN netto Płatne w 2 ratach po
                  3750 PLN
                </div>
              </div>
              <div>
                <button
                  className="Price_Card_Main_Button"
                  onClick={handleOpenModal}
                >
                  Zaplanuj rozmowę
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="Price_Card">
            <div className="Price_Card_Number">10k</div>
            <div className="Price_Card_Main">
              <div>
                <div className="Price_Card_Main_Title">Strategia 10k</div>
                <div className="Price_Card_Main_TextOne">
                  Gdy na marketing planujesz od 5,000 – 10,000 PLN miesięcznie.
                </div>
                <div className="Price_Card_Main_ContentOne">
                  Twój budżet jest większy, więc musimy poświęcić więcej czasu
                  na rozdysponowanie go w najbardziej korzystny sposób.
                  Posiadasz zespół pracowników, chcesz znacznie zwiększyć
                  rozmiar swojej firmy w ciągu 6-12 miesięcy.
                </div>
                <div className="Price_Card_Main_TextTwo">Co otrzymasz:</div>
                <div className="Price_Card_Main_ContentTwo">
                  50-100 stronicowa strategia, opisująca jak efektywnie
                  rozporządzać miesięcznym budżetem w wysokości 5,000 - 10,000
                  PLN
                </div>
                <div className="Price_Card_Main_Footer">
                  Jednorazowa inwestycja: 7500 PLN netto Płatne w 2 ratach po
                  3750 PLN
                </div>
              </div>
              <div>
                <button
                  className="Price_Card_Main_Button"
                  onClick={handleOpenModal}
                >
                  Zaplanuj rozmowę
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="Price_Card">
            <div className="Price_Card_Number">open</div>
            <div className="Price_Card_Main">
              <div>
                <div className="Price_Card_Main_Title">Strategia +</div>
                <div className="Price_Card_Main_TextOne">
                  Jeśli na marketing przeznaczasz ponad 10,000 PLN miesięcznie.
                </div>
                <div className="Price_Card_Main_ContentOne">
                  Masz ambitne plany i pokaźny budżet marketingowy. Jeśli jeteś
                  startupem technolgicznym lub startupem z branży blockchain to
                  wariant dla Ciebie niezależnie od Twojego budżetu.
                </div>
                <div className="Price_Card_Main_TextTwo">Co otrzymasz:</div>
                <div className="Price_Card_Main_ContentTwo">
                  50-100 stronicowa strategia, opisująca jak efektywnie
                  rozporządzać miesięcznym budżetem większym niż 10,000 PLN
                </div>
                <div className="Price_Card_Main_Footer">
                  Jednorazowa inwestycja: 20000 PLN netto Płatne w 2 ratach po
                  10,000 PLN
                </div>
              </div>
              <div>
                <button
                  className="Price_Card_Main_Button"
                  onClick={handleOpenModal}
                >
                  Zaplanuj rozmowę
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <SurveyModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        options={options}
      />
    </div>
  );
}
