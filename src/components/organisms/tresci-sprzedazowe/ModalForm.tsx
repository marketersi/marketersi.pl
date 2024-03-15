import React from "react";
import Form from "./form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const ModalForm = ({ isOpen, onClose }: ModalProps) => {

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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div onClick={handleOverlayClick} className="modalOverlay">
      <motion.div
          className="logo-form-container"
          initial="offscreen"
          whileInView="onscreen"
          variants={animateDown}
          viewport={{ once: true }}
        >
        <Form />
        <button className="formModalCloseBtn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} /> 
        </button>
        </motion.div>
    </div>
  );
};
