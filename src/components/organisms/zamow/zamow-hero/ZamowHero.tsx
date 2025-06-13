import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./zamow-hero.css";
import { motion } from "framer-motion";
import Questions from "./questions/Questions";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const ZamowHero = ({ progress, currentQuestion, handleNextQuestion }) => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { heroSection, ratingSection } = screenData || {};

  return (
    <section>
      <Row>
        <Col className="text-center zamow-hero">
          {progress ? (
            <Questions
              handleNext={handleNextQuestion}
              currentQuestion={currentQuestion}
            />
          ) : (
            <FormZero
              heroSection={heroSection}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </Col>
      </Row>
      <div className="line-container">
        <p className="mb-0 small">{ratingSection?.label} :</p>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default ZamowHero;

const FormZero = ({ heroSection, handleNextQuestion }) => {
  const [inputValue, setInputValue] = useState("");
  const [toggle, settoggle] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formZeroInputValue: inputValue,
    };
    console.log("payload 0 exam ui", payload);
    dispatch(saveExaminationFormData(payload));
    handleNextQuestion();
  };

  const clickButton = () => {
    settoggle(true);
  };

  return (
    <>
      <h1>{heroSection?.title}</h1>
      <p className="mbCustom">
        Odkryj nowe horyzonty rozwoju Twojej firmy <br />
        W Marketersi oferujemy Ci unikalną możliwość spojrzenia
        <br />
        na Twoją stronę internetową <br className="showmobilebr" />
        i strategie marketingowe
        <br />
        z nowej perspektywy
      </p>
      <p className="smalltextp">
        100% poufności – Twoje zgłoszenie jest bezpieczne.
      </p>

      {toggle ? (
        <div className="input-container">
          <input
            placeholder="Podaj adres swojej strony www."
            className="zemow-hero-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <motion.button
            className="zamow-hero-btn"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleButtonClick}
          >
            Start
          </motion.button>
        </div>
      ) : (
        <div className="banner-buttons">
          <motion.button
            className="banner-btn"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            onClick={clickButton}
          >
            Badanie strony
          </motion.button>
          <motion.button
            className="banner-btn"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            onClick={clickButton}
          >
            Badanie marketingu
          </motion.button>
        </div>
      )}
    </>
  );
};
