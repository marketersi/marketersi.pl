import { useState, useEffect } from "react";
import SurveyModal from "./SurveyModal"; // Assuming SurveyModal contains CardTwo
import Image from "next/image";
import { useSelector } from "react-redux";

export default function ResultTable() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { ResultTable } = screenData;
  const [showModal, setShowModal] = useState(false);

  // Define a constant for the modal's hash
  const MODAL_HASH = "#surveyModal";

  const handleOpenModal = () => {
    setShowModal(true);
    // Push the modal hash to history
    // Check if the hash is already present to avoid duplicate history entries
    if (window.location.hash !== MODAL_HASH && !window.location.hash.startsWith(`${MODAL_HASH}&`)) {
        window.history.pushState({ modalOpen: true }, '', window.location.pathname + MODAL_HASH);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // When closing, remove any modal-related hash if it's currently in the URL
    if (window.location.hash.startsWith(MODAL_HASH)) {
      window.history.replaceState({}, '', window.location.pathname); // Clear the specific hash
    }
  };

  useEffect(() => {
    // This effect handles browser back/forward buttons for the modal
    const handlePopState = (event) => {
      const currentHash = window.location.hash;
      if (currentHash.startsWith(MODAL_HASH)) {
        // If the hash is #surveyModal or #surveyModal&stepX
        setShowModal(true); // Ensure modal is open
      } else {
        // If the hash is anything else or empty (e.g., user clicked back from modal hash)
        if (showModal) { // Only close if it's currently open
           setShowModal(false);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);

    // Initial check on mount: if the modal hash is already present, open the modal
    if (window.location.hash.startsWith(MODAL_HASH)) {
      setShowModal(true);
    } else {
      // If no modal hash on initial load, ensure modal is closed.
      // This helps if a user navigates directly without the hash or refreshes with a different hash.
      setShowModal(false);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showModal]); // Dependency on showModal ensures the effect updates if showModal changes internally

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
                onClick={handleOpenModal}
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