import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./zamow-hero.css";
import { motion } from "framer-motion";

const ZamowHero = () => {
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
              whileTap={{ scale: 0.95 }}
            >
              Rozpocznij.
            </motion.button>
          </div>
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
