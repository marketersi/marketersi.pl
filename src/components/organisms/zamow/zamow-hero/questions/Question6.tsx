import React from "react";
import { motion } from "framer-motion";

const Question6 = ({ handleNext }) => {
  return (
    <div className="zh_question Thanks">
      <h2>Dzięki</h2>
      <p>
        Mamy jeszcze kilka ostatnich pytań, które pomogą nam dobrać odpowiednią
        strategię dla Ciebie.
      </p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          Okej, lecimy
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question6;
