import react, { useState, useEffect } from "react"; // Add useEffect
import Link from "next/link";
import "./TesciFooter.css";
import { usePathname } from "next/navigation";
// import Modal from "react-modal"; // Not needed if using ModalForm
// import Form from "../../tresci-sprzedazowe/form/Form"; // Not needed if using ModalForm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";
import { ModalForm } from "../ModalForm"; // Ensure this path is correct

const TresciFooter = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const pathname = usePathname();

  const [isSelected, setIsSelected] = useState(null);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const [isModal, setIsModal] = useState(false);

  // Function to open the modal and push a state to history
  const openModal = () => {
    setIsModal(true);
    // Push a new state to the history when the modal opens
    // This allows us to intercept the back button
    window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModal(false);
    // When the modal closes (e.g., via its close button),
    // if the last history state was for the modal, we want to go back
    // one step in history to effectively remove that modal state.
    // This ensures the browser's back button works intuitively after manual close.
    // However, be cautious with this as it can interfere with natural browser navigation.
    // A more robust solution might involve checking if the current state is the modal state
    // before calling history.back(). For simplicity and consistency with the SalesBanner,
    // we'll primarily rely on popstate to close it.
    // If you explicitly need to go back in history on manual close, uncomment below:
    // if (window.history.state && window.history.state.modalOpen) {
    //   window.history.back();
    // }
  };

  // useEffect hook to manage browser history for the modal
  useEffect(() => {
    const handlePopState = (event) => {
      // Check if the state was pushed by our modal logic
      if (event.state && event.state.modalOpen) {
        setIsModal(false); // Close the modal
      } else if (isModal) {
        // If modal is open and popstate happens for another reason, close it
        setIsModal(false);
      }
    };

    // Add event listener for popstate
    window.addEventListener('popstate', handlePopState);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModal]); // Depend on isModal to correctly handle state

  return (
    <>
      <div className="nazwa_footer_bottom">
        <div className="nazwa_footer_bottom_left">
          <Link
            href="#sec1"
            className={isSelected == 1 ? "activeLink" : ""}
            onClick={() => setIsSelected(1)}
          >
            Jak to wygląda?
          </Link>
          <Link
            href="#sec2"
            className={isSelected == 2 ? "activeLink" : ""}
            onClick={() => setIsSelected(2)}
          >
            {" "}
            Przykładowe realizacje
          </Link>
        </div>
        <div className="nazwa_footer_bottom_right">
          <button
            className="tersci_footer_bottom_btn"
            onClick={openModal} // Changed to call openModal
          >
            Otrzymaj ofertę
          </button>
        </div>

        <div className="tresci_contact_footer_btn">
          <a href="tel:570964200">
            <strong>Zadzwoń</strong>
            <br />
            (8<sup>00</sup>-16
            <sup>00</sup>)
          </a>
        </div>
      </div>

      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default TresciFooter;