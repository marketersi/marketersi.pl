import React from "react";
import { useSelector } from "react-redux";

const FeedbackForm = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const {  formThree } = screenData?.cardMenu?.menuOne || "";

  return (
    <div className="feedback_section">
      <h2>{formThree?.section3_title}</h2>
      <p>{formThree?.section3_subtitle1}</p>
      <textarea rows="5" cols="50" className="fs_textarea"></textarea>
      <p className="mt-2">
       {formThree?.section3_textareaTitle}
      </p>
      <input type="text" className="fs_input" />
      <button onClick={() => setCurrentComponent(3)} className="cennikBtn">
        Ostatnie pytanie
      </button>
    </div>
  );
};

export default FeedbackForm;
