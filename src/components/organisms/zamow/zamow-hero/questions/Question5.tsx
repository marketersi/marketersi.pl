import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question5 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formFive } = screenData?.surveyQuestions || {};

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formFourInputValue: inputValue,
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question question_container">
    <h2 className="threeTitle">Jak możemy Ci pomóc?</h2>

      {/* <p className="question_description">{formFive?.listHeading}</p> */}
      {/* <p className="question_description BrRemoveMobile">
        Możesz napisać krótko, np. “Moja strona nie przyciąga klientów” <span className="webgap"></span> - “Nie wiem, jak wyróżnić moją ofertę”<br /> - “Nie wiem, co zmienić, żeby strona działała lepiej”<br /> - itp.
      </p>  */}
      <p className="question_description BrRemoveMobile">
          Jak możemy Ci pomóc?<br />
          Możesz napisać krótko, np. “Nie wiem, czy moja strategia marketingowa działa”<br />
          – “Nie wiem, jak pozyskać więcej klientów”<br />
          – “Moja marka nie wyróżnia się na rynku”<br />
          – itp.
        </p>

      {/* <div className="list_p">
        {formFive?.listItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div> */}

        {/* <ul className="list_p">
       
          <li><p>“Nie wiem, jak wyróżnić moją ofertę”</p></li>
          <li><p>“Nie wiem, co zmienić, żeby strona działała lepiej”</p></li>
          <li><p>itp.</p></li>
        
      </ul> */}

      <textarea
        rows={1}
        placeholder="Wpisz odpowiedź tutaj"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
 
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

export default Question5;
