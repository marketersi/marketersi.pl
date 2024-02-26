import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question10 = ({ handleNext }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formTen } = screenData?.surveyQuestions || {};


  return (
    <div className="zh_question working_container">
      <h2>{formTen?.title}</h2>
      <p>{formTen?.description}</p>
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
