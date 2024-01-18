import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./zamow-hero.css";
import { motion } from "framer-motion";

const ZamowHero = () => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress((prevProgress) => prevProgress + 20);
  };

  return (
    <section>
      <Row>
        <Col className="text-center zamow-hero">
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
              onClick={handleClick}
            >
              Rozpocznij.
            </motion.button>
          </div>
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
