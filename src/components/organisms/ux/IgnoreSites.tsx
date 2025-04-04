"use client"
import React, { useState } from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import ProjectuxModal from "../modals/ProjectuxModal";
=======
import { ModalForm } from "../tresci-sprzedazowe/ModalForm";
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const IgnoreSitesData = {
  image:
    "https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.webp",
  title: "Ludzie ignorują strony, które ignorują ludzi...",
  description1: "descriptions",
  description2: "descriptions",
};

const IgnoreSites = () => {
  const { screenData } = useSelector((state) => state.ux);
  const IgnoreSites = screenData.IgnoreSites || {};
<<<<<<< HEAD
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
=======
  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

  return (
    <>
      <section>
        <div id="maciej">
<<<<<<< HEAD

=======
          {/* <div className="imgs">
            <img src={IgnoreSites.image} />
          </div> */}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          <div className="contentText">
            <h2>{IgnoreSites.title}</h2>
            <p>{IgnoreSites.descript1}</p>
            <p>{IgnoreSites.descript2}</p>
<<<<<<< HEAD
             <a
              className="btn-neon send-offer-button js--triggerAnimation"
              onClick={openModal}
            >
              Brzmi świetnie. Wyślijcie mi ofertę.
=======
            <a
              className="btn-neon send-offer-button js--triggerAnimation"
              onClick={() => setIsModal(true)}
            >
              Zapytaj o makietę dla siebie
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              <div
                className="light"
                style={{ transform: "rotate(120deg) scale(0.7, 0.7)" }}
              ></div>
<<<<<<< HEAD
            </a> 

{/* <button className="buttonux" onClick={openModal}>
                Brzmi świetnie. Wyślijcie mi ofertę.
              </button> */}
=======
            </a>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* <ModalForm isOpen={isModal} onClose={handleModalClose} /> */}
      <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
=======
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </>
  );
};

export default IgnoreSites;
