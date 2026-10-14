import ProjectuxQueryModal, { useOpenProjectUxModal } from "./ProjectuxQueryModal";
import React from "react";
import { useSelector } from "react-redux";

const IgnoreSites = () => {
  const { screenData } = useSelector((state) => state.ux);
  const IgnoreSites = screenData.IgnoreSites || {};


  // Determine if the modal should be open based on the URL search param
  const openModal = useOpenProjectUxModal("ModelB");

  return (
    <>
      <section>
        <div id="maciej">
          <div className="contentText">
            <h2>{IgnoreSites.title}</h2>
            <p>{IgnoreSites.descript1}</p>
            <p>{IgnoreSites.descript2}</p>
            <a
              className="btn-neon send-offer-button js--triggerAnimation"
              onClick={openModal}
            >
              Brzmi świetnie. Wyślijcie mi ofertę.
              <div
                className="light"
                style={{ transform: "rotate(120deg) scale(0.7, 0.7)" }}
              ></div>
            </a>
          </div>
        </div>
      </section>
      <ProjectuxQueryModal queryKey="ModelB" />
    </>
  );
};

export default IgnoreSites;