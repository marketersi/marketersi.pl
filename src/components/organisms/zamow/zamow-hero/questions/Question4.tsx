import React from "react";
import { motion } from "framer-motion";

const Question4 = ({ handleNext }) => {
  return (
    <div className="zh_question">
      <h2>Jak masz na imię? 4</h2>
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

export default Question4;
