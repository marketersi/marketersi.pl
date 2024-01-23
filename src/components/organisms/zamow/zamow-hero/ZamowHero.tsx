import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./zamow-hero.css";
import { motion } from "framer-motion";
import Questions from "./questions/Questions";

const ZamowHero = () => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    // Assuming we have 14 questions
    const totalQuestions = 14;
    setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <section>
      <Row>
        <Col className="text-center zamow-hero">
          {progress ? (
            <>
              <Questions
                handleNext={handleNextQuestion}
                currentQuestion={currentQuestion}
              />
              {progress && (
                <div className="progress-bar-container">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
              )}
            </>
          ) : (
            <>
              <h1>
                <span className="custom-color">Bezpłatne</span> badanie strony{" "}
                <br /> i marketingu firmy.
              </h1>
              <p>
                Usuń wąskie gardła i usprawnij wyniki swojej firmy <br />
                dzięki praktycznym wskazówkom od ekspertów <br />w indywidualnej
                konsultacji lub wideo.
              </p>
              <p style={{ fontSize: "16px" }}>Zgłoszenie jest w 100% poufne</p>
              <div className="input-container">
                <input
                  placeholder="Wpisz tu adres strony www."
                  className="zemow-hero-input"
                />
                <motion.button
                  className="zamow-hero-btn"
                  whileHover={{ scale: 0.97 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNextQuestion}
                >
                  Rozpocznij.
                </motion.button>
              </div>
            </>
          )}
        </Col>
      </Row>
      <div className="line-container">
        <p className="mb-0 small">Nasi eksperci cytowani są przez:</p>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default ZamowHero;
