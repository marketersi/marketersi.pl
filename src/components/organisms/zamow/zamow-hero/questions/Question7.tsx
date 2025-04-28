import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question7 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formSeven } = screenData?.surveyQuestions || {};

  const [rangeValue, setRangeValue] = useState(1);

  const handleRangeChange = (e) => {
    setRangeValue(Number(e.target.value));
  };

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      selectedRangeValue: rangeValue,
    };
    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question range_container">
      <h2 className="lineheight34px">Jaki jest szacunkowy miesięczny przychód<br/>
      Twojej firmy generowany dzięki stronie?</h2>
      {/* <h2>{formSeven?.title}</h2> */}
      <p className="goal_description lineheight34px">Te informacje pozwolą nam dokładnie ocenić<br/>
Twoją sytuację i dobrać najlepsze rozwiązania.
</p>
      {/* <p className="goal_description">{formSeven?.subtitle}</p> */}
      <p className="range_description lineheight34px">(Wszystkie dane są poufne.)</p>
      {/* <p className="range_description">{formSeven?.info}</p> */}
      


      <div className="income_show">{rangeValue} zł</div>

      {rangeValue === 1 && (
        <>
          <div className="CircleAnimation"></div>
          <img
            className="tri_arrow"
            src="https://images.prismic.io/marketersi/aAtQ4_IqRLdaBm2v_preze2.png?auto=format,compress"
            alt=""
          />
        </>
      )}

      <input
        min={1}
        max={100000}
        type="range"
        step={1}
        value={rangeValue}
        onChange={handleRangeChange}
        className="income_range"
        
      />


      <div className="zh_next_btn_container flex justify-center">
        <motion.button
          onClick={handleButtonClick}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
               Dalej
        </motion.button>
        {/* <p>Wciśnij Enter</p> */}
      </div>
    </div>
  );
};

export default Question7;
