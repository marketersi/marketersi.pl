import React from "react";
import { motion } from "framer-motion";

const Question7 = ({ handleNext }) => {
  return (
    <div className="zh_question">
      <h2>Ile w przybliżeniu wynosi obecny miesięczny przychód?</h2>
      <p>Potrzebujemy tych informacji, aby właściwie ocenić Twoją sytuację.</p>
      <p>(Wszystkie informacje są ściśle poufne.)</p>
      <input />
      <input type="range"/>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          Kontynuuj >>
        </motion.button>
      </div>
    </div>
  );
};

export default Question7;
