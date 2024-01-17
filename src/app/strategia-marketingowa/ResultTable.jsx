import { useState } from "react";
import SurveyModal from "./SurveyModal";
import Image from "next/image";

export default function ResultTable() {
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
    <div className="ResultTable content">
      <div className="ResultTable_Title">
        Rezultaty, które mówią same za siebie
      </div>
      <div className="ResultTable_Table feature">
        <div className="ResultTable_Table_Row">
          <div className="ResultTable_Table_Row_Content">
            Od 0 do 40zł milionów rocznego obrotu w 5 lat
          </div>
          <div>
            <Image
              src={
                "/assets/images/strategiamarketingowa/ResultTableImage1.avif"
              }
              alt="ResultTableImage1"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div>
            <button
              className="ResultTable_Table_Row_Button"
              onClick={handleOpenModal}
            >
              Zapytaj o szczegóły (Case study)
            </button>
          </div>
        </div>
        <hr />
        <div className="ResultTable_Table_Row">
          <div className="ResultTable_Table_Row_Content">
            Od 10 do 26 milionów złotych rocznego obrotu
          </div>
          <div>
            <Image
              src={
                "/assets/images/strategiamarketingowa/ResultTableImage2.avif"
              }
              alt="ResultTableImage2"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div>
            <button
              className="ResultTable_Table_Row_Button"
              onClick={handleOpenModal}
            >
              Zapytaj o szczegóły (Case study)
            </button>
          </div>
        </div>
        <hr />
        <div className="ResultTable_Table_Row">
          <div className="ResultTable_Table_Row_Content">
            153 nowe spotkania biznesowe w 8 miesięcy
          </div>
          <div>
            <Image
              src={
                "/assets/images/strategiamarketingowa/ResultTableImage3.avif"
              }
              alt="ResultTableImage3"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div>
            <button
              className="ResultTable_Table_Row_Button"
              onClick={handleOpenModal}
            >
              Zapytaj o szczegóły (Case study)
            </button>
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
