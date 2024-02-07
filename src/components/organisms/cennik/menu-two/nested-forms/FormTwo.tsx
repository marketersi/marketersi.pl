import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

const FormTwo = ({ setCurrentComponent, form }) => {
  console.log("form three", form);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (!projectDescription) {
      setIsModalOpen(true);
      console.log("no project description");
      console.log("modal", isModalOpen);
    } else {
      setCurrentComponent(3);
    }
  };

  return (
    <div className="component-two_section">
      <h2>
        {/* Napisz kilka stów o tym projekcie i swoim pomyśle */}
        {form?.title}
      </h2>
      <p>
        {/* Im więcej wiemy, tym lepiej się dopasujemy. */}
        {form?.subtitle}
      </p>
      <textarea
        rows="5"
        cols="50"
        onChange={(e) => setProjectDescription(e.target.value)}
      ></textarea>
      <div className="mt-5">
        <button className="cennikBtn" onClick={handleNext}>
          Ostatnie pytanie
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <p>
          Przepraszamy, nie jesteśmy w stanie przedstawić sensownej oferty na
          bazie tak znikomych informacji. Napisz ciut więcej. Dzięki temu
          będziemy mogli pomóc Ci lepiej.
        </p>
        <div>
          <button onClick={closeModal}>Rozumiem</button>
        </div>

        {/* x btn */}
        <div className="close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </Modal>
    </div>
  );
};

export default FormTwo;
