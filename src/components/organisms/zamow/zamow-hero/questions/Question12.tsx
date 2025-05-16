import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question12 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formTwelve } = screenData?.surveyQuestions || {};

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formSixInputValue: inputValue,
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question working_container">
      {/* <h2>Dzięki!<br/>Zostały już tylko 2 pytania.</h2> */}
      <h2>Świetnie<br/>Zostały już tylko 2 pytania.</h2>
      <p>Podaj e-mail do wysyłki wyników.</p>
      <textarea
        rows={1}
        placeholder="Wpisz tu swoją odpowiedź"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* <p className="input_description">
        Shift + Enter aby przejść do następnej linii
      </p> */}
      <div className="zh_next_btn_container flex justify-center">
        <motion.button
          onClick={handleButtonClick}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
          style={{ cursor: !inputValue ? "not-allowed" : "pointer" }}
          disabled={!inputValue}
        >
                Zatwierdź
        </motion.button>
        {/* <p>Wciśnij Enter</p> */}
      </div>
    </div>
  );
};

export default Question12;
