import React from "react";
import { motion } from "framer-motion";

const CardTwo = () => {
  return (
    <div>
      <h2 className="card-heading mb-3">
        Jaki cel stawiasz przed swoją firmą?
      </h2>
      <select className="selectInputStyle mb-4">
        <option value="option1">Opcja 1</option>
        <option value="option2">Opcja 2</option>
        <option value="option3">Opcja 3</option>
      </select>
      <h2 className="card-heading">Jak się reklamujesz?</h2>
      <select className="selectInputStyle">
        <option value="option1">Opcja 1</option>
        <option value="option2">Opcja 2</option>
        <option value="option3">Opcja 3</option>
      </select>
      <motion.button className="cennikBtn mt-5" whileHover={{ translateY: 5 }}>
        Rozpocznij kalkulację
      </motion.button>
    </div>
  );
};

export default CardTwo;
