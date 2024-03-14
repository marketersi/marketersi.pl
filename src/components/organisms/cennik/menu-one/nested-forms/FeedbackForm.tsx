import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FeedbackForm = ({ setCurrentComponent, formThree }) => {
  const { formData } = useSelector((state) => state.priceList);

  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  // const { formThree } = screenData?.cardMenu?.menuOne || "";

  console.log("formData", formData);

  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();
    const payload = {
      formTwoTextAreaValue: textAreaValue,
      formTwoInputValue: inputValue,
    };
    dispatch(savePriceListFormData(payload));
    setCurrentComponent(3);
  };

  return (
    <div className="feedback_section">
      <form onSubmit={handleNext}>
        <h2>{formThree?.section3_title}</h2>
        <p>{formThree?.section3_subtitle1}</p>
        <textarea
          rows="5"
          cols="50"
          className="fs_textarea"
          required
          onChange={(e) => setTextAreaValue(e.target.value)}
          value={textAreaValue}
        ></textarea>
        <p className="mt-2">{formThree?.section3_textareaTitle}</p>
        <input
          type="text"
          className="fs_input"
          required
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" className="cennikBtn">
          Ostatnie pytanie
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
