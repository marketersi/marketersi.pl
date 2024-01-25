import React from "react";
import Modal from "react-modal";
import "./cennik-modal-content.css";

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
          backgroundColor: "black",
          borderRadius: "30px",
          padding: "20px",
          border: "none",
          width: "50%",
          margin: "0 auto",
          height: "auto",
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
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default CennikModal;
