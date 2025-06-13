import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question7 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formSeven } = screenData?.surveyQuestions || {};

  // Start range from 1
  const [rangeValue, setRangeValue] = useState(1);
  const dispatch = useDispatch();

  const handleRangeChange = (e) => {
    setRangeValue(Number(e.target.value));
  };

  const handleButtonClick = () => {
    const payload = {
      selectedRangeValue: rangeValue,
    };
    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question range_container">
      <h2 className="lineheight34px">
        Jaki jest szacunkowy miesięczny<br />przychód Twojej firmy?
      </h2>

      <p className="goal_description lineheight34px">
        Te informacje pozwolą nam dokładnie ocenić<br />
        Twoją sytuację i dobrać najlepsze rozwiązania.
      </p>
      <p className="range_description lineheight34px">
        (Wszystkie dane są poufne.)
      </p>

      {/* Display selected amount */}
      <div className="income_show">{rangeValue.toLocaleString("pl-PL")} zł</div>

      {/* Optional visual cue when starting at 1 zł */}
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

      {/* Precise slider */}
      <input
        type="range"
        min={1}
        max={20000} // Set max to something practical
        step={1}
        value={rangeValue}
        onChange={handleRangeChange}
        inputMode="numeric"
        className="income_range"
      />

      {/* Optional scale display */}
      <div className="range_labels">
        <span>1 zł</span>
        <span>{rangeValue.toLocaleString("pl-PL")} zł</span>
        <span>20 000 zł</span>
      </div>

      {/* Next button */}
      <div className="zh_next_btn_container flex justify-center zh_next_btn_Center">
        <motion.button
          onClick={handleButtonClick}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          Dalej
        </motion.button>
      </div>
    </div>
  );
};

export default Question7;
