import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./logo-footer.css";
import Modal from "react-modal";
import Form from "../../tresci-sprzedazowe/form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";
import { useSelector } from "react-redux";

const LogoFooterData = {
  pagesLinks: [
    { id: 1, label: "1", content: "Co otrzymam" },
    { id: 2, label: "2", content: "Jak to działa" },
    { id: 3, label: "3", content: "Galeria" },
    { id: 4, label: "4", content: "Przykłady realizacji" },
  ],
  downloadButtonText: "Pobierz wersję PDF",
  formButtonText: "Otrzymaj ofertę",
};

const LogoFooter = ({ openModal }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const pathname = usePathname();

  const buttonsData = [
    { id: 1, label: "1", content: "Co otrzymam" },
    { id: 2, label: "2", content: "Jak to działa" },
    { id: 3, label: "3", content: "Galeria" },
    { id: 4, label: "4", content: "Przykłady realizacji" },
  ];

  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  //   ------------ modal------------
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  // const customStyles = {
  //   overlay: {
  //     backgroundColor: "rgba(0, 0, 0, 0.8)", // Set overlay background color to black with some opacity
  //   },
  //   content: {},
  // };

  // const animateDown: Variants = {
  //   offscreen: {
  //     y: -180,
  //     z: -100,
  //     opacity: 0,
  //     scale: 0.5,
  //   },
  //   onscreen: {
  //     y: 0,
  //     z: 0,
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.6,
  //       duration: 4,
  //     },
  //   },
  // };

  // const { isLoading, screenData } = useSelector((state) => state.logo);
  // const { pagesLinks, downloadButtonText, formButtonText } = screenData;

  return (
    <>
      <div className="nazwa_footer_bottom">
        <div className="nazwa_footer_bottom_left">
          {buttonsData.map((button) => (
            <Link
              key={button.id}
              href={`#sec${button.id}`}
              className={activeButton === button.id ? "activeLink" : ""}
              onClick={() => handleButtonClick(button.id)}
            >
              <button>{button.label}</button>
              {activeButton === button.id && <span>{button.content}</span>}
            </Link>
          ))}
        </div>
        <div className="nazwa_footer_bottom_right">
          <a href="https://drive.google.com/uc?authuser=0&id=1sXRhdpQRI228rKk2CcuDTtpnF8DhAj2Q&export=download">
            <button className="nazwa_footer_bottom_PDF">
              Pobierz wersję PDF
            </button>
          </a>

          <button className="nazwa_footer_bottom_Offer" onClick={openModal}>
            Otrzymaj ofertę
          </button>
        </div>
      </div>
      {/*    ------------ modal------------ */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <motion.div
          className="logo-form-container"
          initial="offscreen"
          whileInView="onscreen"
          variants={animateDown}
          viewport={{ once: true }}
        >
          <Form />
          <button className="modalCloseBtn" onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </motion.div>
      </Modal> */}
    </>
  );
};

export default LogoFooter;
