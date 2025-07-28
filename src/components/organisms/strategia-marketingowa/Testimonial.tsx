import Image from "next/image";
import { useState, useEffect } from "react"; // Import useEffect
import SurveyModal from "./SurveyModal";
import { useSelector } from "react-redux";

export default function Testimonial() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { testimonial } = screenData;

  const [showModal, setShowModal] = useState(false);
  const MODAL_HASH = "#surveyModal"; // Define the modal hash here as well

  const handleOpenModal = () => {
    setShowModal(true);
    // Push the modal hash to history only if it's not already there
    // This prevents creating duplicate history entries if the modal is already open
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

  // useEffect to handle browser back/forward button clicks for the modal
  useEffect(() => {
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
    <div className="Testimonial">
      <div className="Testimonial_Card feature">
        <div>
          <img
            src={testimonial?.image_url}
            alt="TestimonialImage"
            style={{ width: "700px", height: "auto" }}
          />
        </div>
        <div className="Testimonial_Card_Content">
          <div className="Testimonial_Card_Content_Title">
            {testimonial?.opinion}
          </div>
          <div>
            <button
              className="Testimonial_Card_Content_Button"
              onClick={handleOpenModal}
            >
              Brzmi świetnie. Wyślijcie mi ofertę
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