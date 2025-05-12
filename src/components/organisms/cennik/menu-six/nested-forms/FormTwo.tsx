import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FeedbackSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuSixth || "";
  const { modalInfo } = formThree || "";

  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  // Ref for scroll to top
  const topRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Count the number of letters (excluding spaces) in the textarea and input field
  const textAreaLetterCount = textAreaValue.replace(/\s+/g, "").length;
  const inputLetterCount = inputValue.replace(/\s+/g, "").length;

  const handleNext = (e) => {
    e.preventDefault();

    // Scroll to top div
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const payload = {
      formTwoTextAreaValue: textAreaValue,
      formTwoInputValue: inputValue,
    };

    if (textAreaLetterCount < 50 || inputLetterCount < 10) {
      setIsModalOpen(true);
    } else {
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(3);
    }
  };

  return (
    <div className="feedback_section" style={{ padding: "20px" }}>
      {/* Scroll target */}
      <div ref={topRef} style={{ height: "1px" }}></div>

      <form onSubmit={handleNext}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          <span style={{ color: "#00bbff" }}>Napisz w kilku słowach</span> czym zajmuje się Twój biznes i co jest dla Ciebie ważne?
        </h2>
        <p style={{ fontSize: "14px", marginBottom: "10px" }}>{formThree?.section3_subtitle1}</p>

        <textarea
          rows="5"
          cols="50"
          onChange={(e) => setTextAreaValue(e.target.value)}
          value={textAreaValue}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: textAreaValue.length > 10 ? "#effeeb" : "#fff",
            outline: "none",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        ></textarea>

        <h2 style={{ marginTop: "20px", fontSize: "18px" }}>{formThree?.section3_title_2}</h2>
        <p style={{ marginTop: "10px", marginBottom: "10px" }}>{formThree?.section3_subtitle2}</p>

        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: inputValue.length > 10 ? "#effeeb" : "#fff",
            outline: "none",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#00bbff",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Ostatni krok
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="CenikModal"
        overlayClassName="Overlay"
      >
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>{modalInfo?.modal_info}</p>
        <div className="cenikBtnDiv" style={{ textAlign: "right" }}>
          <button
            onClick={closeModal}
            style={{
              backgroundColor: "#00bbff",
              color: "#fff",
              padding: "10px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {modalInfo?.modal_button1Text}
          </button>
        </div>

        <div
          className="close"
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackSection;
