import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question13 = ({ handleNext }) => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formThirteen } = screenData?.surveyQuestions || {};

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formSevenInputValue: inputValue,
    };

    console.log("payload 7 exam ui", payload);
    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question working_container">
      <h2>{formThirteen?.title} </h2>
      <p>{formThirteen?.description_1}</p>
      <p>{formThirteen?.description_2}</p>
      <textarea
        rows={1}
        placeholder="Wpisz tu swoją odpowiedź"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="input_description">
        Shift + Enter aby przejść do następnej linii
      </p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleButtonClick}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
          style={{ cursor: !inputValue ? "not-allowed" : "pointer" }}
          disabled={!inputValue}
        >
          OK
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question13;
