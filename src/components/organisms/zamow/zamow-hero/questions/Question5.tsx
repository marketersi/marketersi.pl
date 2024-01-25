import React from "react";
import { motion } from "framer-motion";

const Question5 = ({ handleNext }) => {
  return (
    <div className="zh_question question_container">
      <h2>Jakiej pomocy szukasz?</h2>
      <p className="question_description">Może to być tak ogólne jak: "Pomocy w budowaniu marki"</p>
        <div className="list_p">
        <p>- "Reklamy Facebook nie przynoszą rezultatów"</p>
        <p>- "Potrzebuję więcej zapytań / wyższej sprzedaży. "</p>
        <p>- etc</p>
        </div>
      <textarea rows={1}
      placeholder="Wpisz tu swoją odpowiedź"
    />
      <p className="input_bottom_content">Shift + Enter aby przejść do następnej linii</p>
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

export default Question5;
