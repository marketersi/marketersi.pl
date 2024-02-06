import React from "react";
import { motion } from "framer-motion";

const Question10 = ({ handleNext }) => {
  return (
    <div className="zh_question working_container">
      <h2>Jak dobrze działał dla Ciebie dotychczasowy marketing?</h2>
      <p>Prosimy o szczerość. Im więcej się dowiemy, tym lepiej Ci pomożemy.</p>
      <textarea rows={1}
      placeholder="Wpisz tu swoją odpowiedź"
    />
    <p className="input_description">Shift + Enter aby przejść do następnej linii</p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          OK
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question10;
