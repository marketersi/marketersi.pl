import React from "react";
import { motion } from "framer-motion";

const Question5 = ({ handleNext }) => {
  return (
    <div className="zh_question">
      <h2>Jakiej pomocy szukasz?</h2>
      <p>Może to być tak ogólne jak: "Pomocy w budowaniu marki"</p>
      <ul>
        <li>"Reklamy Facebook nie przynoszą rezultatów"</li>
        <li>"Potrzebuję więcej zapytań / wyższej sprzedaży. "</li>
        <li>etc</li>
      </ul>
      <input />
      <p>Shift + Enter aby przejść do następnej linii</p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          OK
        </motion.button>
      </div>
    </div>
  );
};

export default Question5;
