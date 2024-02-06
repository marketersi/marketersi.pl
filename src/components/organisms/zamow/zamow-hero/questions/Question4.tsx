import React from "react";
import { motion } from "framer-motion";

const Question4 = ({ handleNext }) => {
  return (
    <div className="zh_question question_container">
      <h2>
        <span>ftghjk,</span> zanim zdecydujesz się kontynuować, <br /> prosimy pamiętaj o tym, że:
      </h2>

      <p>
        Możemy wysłać Ci bezpłatny materiał edukacyjny (eBook) zamiast
        indywidualnej recenzji video, jeśli uznamy, że nasze usługi nie są na
        tym etapie idealnie dopasowane do potrzeb Twojej firmy.
      </p>
      <p>
        Jeśli zdecydujemy się na badanie Twojej strony internetowej, zrobimy to
        w ciągu 5-7 dni roboczych.
      </p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          Wporządku. Rozumiem i chcę kontynuować.
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question4;
