import React from "react";
import { motion } from "framer-motion";

const Question13 = ({ handleNext }) => {
  return (
    <div className="zh_question">
      <h2>Jak masz na imię? 13</h2>
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

export default Question13;
