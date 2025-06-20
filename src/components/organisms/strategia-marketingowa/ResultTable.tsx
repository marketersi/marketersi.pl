// ResultTable.tsx
import { useState, useEffect } from "react";
import SurveyModal from "./SurveyModal";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function ResultTable() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { ResultTable } = screenData;

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    // Push a new state to the history when the modal opens
    // This allows the back button to trigger a popstate event that we can listen for
    window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Listen for popstate events to close the modal when the back button is pressed
  useEffect(() => {
    const handlePopState = (event) => {
      // Check if the state indicates the modal was open (or simply close if any popstate occurs when modal is visible)
      if (showModal) {
        handleCloseModal();
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showModal]); // Dependency on showModal to re-attach listener if showModal changes

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="ResultTable WidthContent">
      <div className="ResultTable_Title mt-0 manage-space">Nasze strategie<br/> napędzają biznesy<br/> – zobacz je w akcji:</div>
      <div className="ResultTable_Table feature">
        {ResultTable?.resultCard.map((item) => (
          <div className="ResultTable_Table_Row" key={item.id}>
            <div className="ResultTable_Table_Row_Content">{item.title}</div>
            <div>
              <img
                src={item.image_url}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div>
              <div
                className="ResultTable_Table_Row_Button"
                onClick={() => handleOpenModal(item.id)}
              >
                Poznaj ofertę
              </div>
            </div>
          </div>
        ))}
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