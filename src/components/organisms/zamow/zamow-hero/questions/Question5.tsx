import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question5 = ({ handleNext }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formFive } = screenData?.surveyQuestions || {};


  return (
    <div className="zh_question question_container">
      <h2>{formFive?.title}</h2>
      <p className="question_description">{formFive?.listHeading}</p>
        <div className="list_p">
        {formFive?.listItems.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
        </div>
      <textarea rows={1}
      placeholder="Wpisz tu swoją odpowiedź"
    />
      <p className="input_bottom_content">{formFive?.textbelowInput}</p>
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

export default Question5;
