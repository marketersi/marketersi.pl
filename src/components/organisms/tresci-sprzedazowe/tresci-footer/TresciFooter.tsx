import react, {useState} from "react"
import Link from "next/link";
import "./TesciFooter.css";
import { usePathname } from "next/navigation";
import Modal from "react-modal";
import Form from "../../tresci-sprzedazowe/form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

const TresciFooter = () => {

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const pathname = usePathname();

  const [isSelected, setIsSelected] = useState(null);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };


  //   ------------ modal------------
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
    <div className="nazwa_footer_bottom">
      <div className="nazwa_footer_bottom_left">
        
        <Link
          href="#sec1"
          className={isSelected == 1 ? "activeLink" : ""}
          onClick={() => setIsSelected(1)}
        >Jak to działa?
        </Link>
        <Link
          href="#sec2"
          className={isSelected == 2 ? "activeLink" : ""}
          onClick={() => setIsSelected(2)}
        >
          {" "}Przykłady realizacji
        </Link>
      </div>
      <div className="nazwa_footer_bottom_right">
        <button className="tersci_footer_bottom_btn" onClick={openModal}>Zdobądź wycenę</button>
      </div>
    </div>


{/* -------------------------------------modal---------------------------------- */}
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

export default TresciFooter;
