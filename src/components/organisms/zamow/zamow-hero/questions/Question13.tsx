import React from "react";
import { motion } from "framer-motion";

const Question10 = ({ handleNext }) => {
  return (
    <div className="zh_question working_container">
      <h2>Mamy to! Dzięki. <br />
      Ostatnie pytanie: Jaki jest twój numer telefonu?</h2>
      <p>Dlaczego tego potrzebujemy? Możemy mieć ważne pytania, które wymagają odpowiedzi zanim rozpoczniemy indywidualną recenzję dla Ciebie.</p>
      <p>Nie użyjemy Twojego numeru w innym celu niż pytania do analizy Twojej strony.</p>
      <textarea rows={1}
      placeholder="Wpisz tu swoją odpowiedź"
    />
    <p className="input_description">Shift + Enter aby przejść do następnej linii</p>
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

export default Question10;
