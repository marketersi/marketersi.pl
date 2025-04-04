import react, { useState } from "react";
import Link from "next/link";
import "./TesciFooter.css";
import { usePathname } from "next/navigation";
import Modal from "react-modal";
import Form from "../../tresci-sprzedazowe/form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";
import { ModalForm } from "../ModalForm";

const TresciFooter = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const pathname = usePathname();

  const [isSelected, setIsSelected] = useState(null);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

<<<<<<< HEAD
=======
  //   ------------ modal------------
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <div className="nazwa_footer_bottom">
        <div className="nazwa_footer_bottom_left">
          <Link
            href="#sec1"
            className={isSelected == 1 ? "activeLink" : ""}
            onClick={() => setIsSelected(1)}
          >
<<<<<<< HEAD
            Jak to wygląda?
=======
            Jak to działa?
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          </Link>
          <Link
            href="#sec2"
            className={isSelected == 2 ? "activeLink" : ""}
            onClick={() => setIsSelected(2)}
          >
            {" "}
<<<<<<< HEAD
            Przykładowe realizacje
=======
            Przykłady realizacji
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          </Link>
        </div>
        <div className="nazwa_footer_bottom_right">
          <button
            className="tersci_footer_bottom_btn"
            onClick={() => setIsModal(true)}
          >
<<<<<<< HEAD
            Otrzymaj ofertę
=======
            Zdobądź wycenę
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
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

<<<<<<< HEAD
=======
      {/* -------------------------------------modal---------------------------------- */}

>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default TresciFooter;
