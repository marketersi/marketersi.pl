// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import "./NazwaFooter.css";
// import { useState } from "react";
// import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";

// const NazwaFooter = () => {
//   const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
//   const pathname = usePathname();

//   const [isSelected, setIsSelected] = useState(null);

//   const handleNavbarToggle = () => {
//     setIsNavbarCollapsed(!isNavbarCollapsed);
//   };

//   const [isModal, setIsModal] = useState(false);

//   const handleModalClose = () => {
//     setIsModal(!isModal);
//   };

//   return (
//     <div className="nazwa_footer_bottom">
//       <div className="nazwa_footer_bottom_left">
//         <Link
//           href="#sec1"
//           className={isSelected == 1 ? "activeLink" : ""}
//           onClick={() => setIsSelected(1)}
//         >
//           Co zyskam?
//         </Link>

//         <Link
//           href="#sec2"
//           className={isSelected == 2 ? "activeLink" : ""}
//           onClick={() => setIsSelected(2)}
//         >
//           Jak to wygląda?
//         </Link>
//         <Link
//           href="#sec3"
//           className={isSelected == 3 ? "activeLink" : ""}
//           onClick={() => setIsSelected(3)}
//         >
//           Przykładowe realizacje
//         </Link>
//       </div>
//       <div className="nazwa_footer_bottom_right">
//         <button className="nazwa_footer_bottom_btn" onClick={() => setIsModal(true)}>Otrzymaj ofertę</button>
//         <a href="tel:570964200" className="nazwa_footer_Time_btn">Zadzwoń(8 <sup>00</sup> - 16 <sup>00</sup> ) </a>
//       </div>
//       <ModalForm isOpen={isModal} onClose={handleModalClose} />
//     </div>
//   );
// };

// export default NazwaFooter;
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./NazwaFooter.css";
import React, { useState, useEffect } from "react"; // Ensure useEffect is imported
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm"; // Ensure correct path

const NazwaFooter = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const pathname = usePathname();

  const [isSelected, setIsSelected] = useState(null);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const [isModal, setIsModal] = useState(false);

  // Function to open the modal and push a state to browser history
  const openModal = () => {
    setIsModal(true);
    // Push a new state to the history when the modal opens.
    // This allows us to intercept the back button and close the modal.
    // The URL remains the same (window.location.pathname) to avoid actual navigation.
    window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModal(false);
    // Optional: If you want to explicitly go back in history when the modal is closed
    // manually (e.g., by clicking the 'X' button inside the modal), you can uncomment
    // the following lines. However, be cautious with this as it can interfere with
    // natural browser navigation. The popstate listener below usually suffices.
    // if (window.history.state && window.history.state.modalOpen) {
    //   window.history.back();
    // }
  };

  // useEffect hook to manage browser history for the modal
  useEffect(() => {
    // This function handles the 'popstate' event, which fires when
    // the active history entry changes (e.g., user clicks browser's back/forward button).
    const handlePopState = (event) => {
      // Check if the state associated with the history entry contains our custom 'modalOpen' flag.
      if (event.state && event.state.modalOpen) {
        setIsModal(false); // Close the modal if our specific state is found
      } else if (isModal) {
        // If the modal is open but the popstate event isn't for our modal state,
        // it means the user clicked back to a state before the modal was opened.
        // In this scenario, if the modal is currently open, we should still close it.
        setIsModal(false);
      }
    };

    // Add the 'popstate' event listener when the component mounts
    window.addEventListener('popstate', handlePopState);

    // Return a cleanup function to remove the event listener when the
    // component unmounts or before the effect re-runs (if dependencies change).
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModal]); // Dependency array: Effect re-runs if 'isModal' state changes,
                  // ensuring 'handlePopState' always has access to the latest 'isModal' value.

  return (
    <div className="nazwa_footer_bottom">
      <div className="nazwa_footer_bottom_left">
        <Link
          href="#sec1"
          className={isSelected == 1 ? "activeLink" : ""}
          onClick={() => setIsSelected(1)}
        >
          Co zyskam?
        </Link>

        <Link
          href="#sec2"
          className={isSelected == 2 ? "activeLink" : ""}
          onClick={() => setIsSelected(2)}
        >
          Jak to wygląda?
        </Link>
        <Link
          href="#sec3"
          className={isSelected == 3 ? "activeLink" : ""}
          onClick={() => setIsSelected(3)}
        >
          Przykładowe realizacje
        </Link>
      </div>
      <div className="nazwa_footer_bottom_right">
        <button
          className="nazwa_footer_bottom_btn"
          onClick={openModal} // Changed to call openModal
        >
          Otrzymaj ofertę
        </button>
        <a href="tel:570964200" className="nazwa_footer_Time_btn">
          Zadzwoń(8 <sup>00</sup> - 16 <sup>00</sup> )
        </a>
      </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </div>
  );
};

export default NazwaFooter;