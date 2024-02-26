import React, {useState} from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question1 = ({ handleNext }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formOne } = screenData?.surveyQuestions || {};


  return (
    <div className="zh_question">
      <h2>{formOne?.title}</h2>
      <textarea rows={1}
      placeholder="Wpisz tu swoją odpowiedź"
    />
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

export default Question1;
