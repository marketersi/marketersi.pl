import React from "react";
import Modal from "react-modal";
import "./cennik-modal.css";
import Link from "next/link";

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
          width: "40%",
          margin: "50px auto",
          maxHeight: "450px",
          padding: " 90px 50px",
          backgroundColor: "rgb(12 12 12)",
          overflow: "hidden",
        },
      }}
    >
      <div className="cennik-modal-content">
        <h2 className="cennik-modal-title">Cennik jest indywidualny.</h2>
        <p>
          Potrzebujemy wielu szczegółowych odpowiedzi, aby sporządzić precyzyjny
          cennik projektu.
        </p>
        <p>
          Jeśli Twoje plany nie są jeszcze precyzyjne, to ustalenie ceny nie
          będzie możliwe.
        </p>
        <div>
          <button className="cennik-modal-btn">
            <Link href="/">
              Wracam. <br /> Strona główna
            </Link>
          </button>
          <button className="cennik-modal-btn" onClick={onRequestClose}>
            Rozumiem. <br /> Chcę kontynuować.
          </button>
        </div>
      </div>

      <button onClick={onRequestClose} className="cennik-modal-close">
        x
      </button>
    </Modal>
  );
};

export default CennikModal;
