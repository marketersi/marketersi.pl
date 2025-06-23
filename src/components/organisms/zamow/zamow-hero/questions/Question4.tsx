import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question4 = ({ handleNext }) => {
  const { formData } = useSelector((state) => state.examination);

  // Get the name user entered in Question 1
  const userName = formData?.formOneInputValue || "Użytkowniku"; // fallback name
  // Get the selection made in FormZero (Badanie strony or Badanie marketingu)
  const formZeroType = formData?.formZeroType;

  // Determine the correct phrase based on the formZeroType
  const examinationSubject =
    formZeroType === "marketing" ? "Twój marketing" : "Twoją stronę internetową";

  return (
    <div className="zh_question question_container">
      <h2>
        <strong>{userName},</strong> <span>zanim zdecydujesz się kontynuować,</span> <span>prosimy pamiętaj o tym, że:</span>
      </h2>

      <p className="FontChangeP">
        Jeśli Twoja firma nie zakwalifikuje się do bezpłatnych badań z ekspertami, wyślemy Ci ogólne wskazówki, które pomogą Ci usprawnić {examinationSubject}.{" "}
        <div className="textsecond">
          <span>Ale jeśli zdecydujemy się na badanie {examinationSubject}</span> to zrobimy to w ciągu 5-7 dni roboczych.
        </div>
      </p>
      <div className="zh_next_btn_container flex justify-center">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          Tak, wszystko jasne – kontynuuję
        </motion.button>
      </div>
    </div>
  );
};

export default Question4;