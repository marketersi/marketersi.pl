import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, Variants } from "framer-motion";
import Modal from "react-modal";
import Form from "../tresci-sprzedazowe/form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";




const Guarantee = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { GuaranteeData } = screenData || {};
  const { title, subtitle, buttontext } = GuaranteeData || {};


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Set overlay background color to black with some opacity
    },
    content: {},
  };

  const animateDown: Variants = {
    offscreen: {
      y: -180,
      z: -100,
      opacity: 0,
      scale: 0.5,
    },
    onscreen: {
      y: 0,
      z: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 4,
      },
    },
  };

  return (
    <>
      <section>
        <div className="container projects-custom-white-container menu-target text-center">
          <div className="projects-big-100">100%</div>
          {title && <div className="projects-big-sub100">{title}</div>}
          {subtitle && <div className="projects-big-text100">{subtitle}</div>}

          <button
            className="download-catalog-button-2 projects-download-catalog-button projects-button-margin send-offer-button js--triggerAnimation"
            type="button"
            fdprocessedid="jeqyl"
            onClick={openModal}
          >
            <strong>
              {buttontext && buttontext}
            </strong>
          </button>
        </div>
      </section>

      {/* ---------------------modal-------------------- */}
      <Modal
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
      </Modal>
    </>
  );
};

export default Guarantee;
