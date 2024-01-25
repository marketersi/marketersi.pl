import React from "react";
import Modal from "react-modal";
import "./cennik-modal.css";

const CennikModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal for Last Option"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          color: "white",
          borderRadius: "30px",
          border: "none",
          width: "50%",
          margin: "0 auto",
          maxHeight: "350px",
          padding: " 70px 50px",
          backgroundColor: "rgb(12 12 12)",
          overflow: "hidden",
        },
      }}
    >
      <div className="cennik-modal-content">
        <h2>Cennik jest indywidualny.</h2>
        <p>
          Potrzebujemy wielu szczegółowych odpowiedzi, aby sporządzić precyzyjny
          cennik projektu.
        </p>
        <p>
          Jeśli Twoje plany nie są jeszcze precyzyjne, to ustalenie ceny nie
          będzie możliwe.
        </p>
        <p>Wracam. Strona główna Rozumiem. Chcę kontynuować.</p>
      </div>
      <button onClick={onRequestClose} className="cennik-modal-close">
        x
      </button>
    </Modal>
  );
};

export default CennikModal;
