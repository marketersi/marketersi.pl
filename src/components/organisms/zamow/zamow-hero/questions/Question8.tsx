import React from "react";
import { motion } from "framer-motion";
import {Row, Col} from 'react-bootstrap'

const Question8 = ({ handleNext }) => {
  return (
    <div className="zh_marketing_container">
      <h2>Jaki jest Twój maksymalny miesięczny budżet marketingowy?</h2>
      <p>
        Prosimy o jak najdokładniejsze informacje. Tylko znając potencjalną
        skalę Twoich
      </p>
      <p className="range_description">
        działań marketingowych będziemy w stanie dopasować odpowiednią
        strategię.
      </p>
      <div className="checkBOxContainer">
      <Row>
        <Col sm={6}>
        <label className="checkbox style-d" onClick={handleNext}>
        <input type="checkbox"/>
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">Poniżej 5 tysięcy zł </div>
      </label>
        </Col>
        <Col sm={6}>
        <label className="checkbox style-d" onClick={handleNext}>
        <input type="checkbox"/>
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">5.000 - 10.000 zł</div>
      </label>
        </Col>
        <Col sm={6}>
        <label className="checkbox style-d" onClick={handleNext}>
        <input type="checkbox"/>
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">10.000 - 25.000 zł </div>
      </label>
        </Col>
        <Col sm={6}>
        <label className="checkbox style-d" onClick={handleNext}>
        <input type="checkbox"/>
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">25.000 - 100.000 zł</div>
      </label>
        </Col>
        <Col sm={6}>
        <label className="checkbox style-d" onClick={handleNext}>
        <input type="checkbox"/>
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">100.000 - 1000.000 zł </div>
      </label>
        </Col>
        <Col sm={6}>
        <label className="checkbox style-d" onClick={handleNext}>
        <input type="checkbox"/>
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">Powyżej miliona zł</div>
      </label>
        </Col>
      </Row>
      </div>
      
      {/* <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          OK
        </motion.button>
      </div> */}
    </div>
  );
};

export default Question8;
