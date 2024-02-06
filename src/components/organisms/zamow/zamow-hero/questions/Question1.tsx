import React, {useState} from "react";
import { motion } from "framer-motion";

const Question1 = ({ handleNext }) => {

 

  return (
    <div className="zh_question">
      <h2>Jak masz na imię?</h2>
      <textarea rows={1}
      placeholder="Wpisz tu swoją odpowiedź"
    />
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

export default Question1;
