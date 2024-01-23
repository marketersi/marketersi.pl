import React from "react";
import { motion } from "framer-motion";

const CardFour = () => {
  return (
    <div>
      <h2 className="card-heading">Dla jakiej firmy jest ta strona?</h2>
      <p className="card-subheading">Wybierz jedną z opcji.</p>
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

export default CardFour;
