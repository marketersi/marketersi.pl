import React from "react";
import { motion } from "framer-motion";

const Question8 = ({ handleNext }) => {
  return (
    <div className="zh_question">
      <h2>Jaki jest Twój maksymalny miesięczny budżet marketingowy?</h2>
      <p>
        Prosimy o jak najdokładniejsze informacje. Tylko znając potencjalną
        skalę Twoich
      </p>
      <p>
        działań marketingowych będziemy w stanie dopasować odpowiednią
        strategię.
      </p>
      <input />
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

export default Question8;
