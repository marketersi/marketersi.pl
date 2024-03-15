import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FeedbackSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuThree || "";

  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();
    const payload = {
      formTwoTextAreaValue: textAreaValue,
      formTwoInputValue: inputValue,
    };

    console.log("payload pp", payload);
    dispatch(savePriceListFormData(payload));
    setCurrentComponent(3);
  };

  return (
    <div className="feedback_section">
      <form onSubmit={handleNext}>
        <h2>{formThree?.form3_textareaTitle}</h2>
        <p>{formThree?.form3_textareaSubtitle}</p>
        <textarea
          rows="5"
          cols="50"
          className="fs_textarea"
          required
          onChange={(e) => setTextAreaValue(e.target.value)}
          value={textAreaValue}
        ></textarea>
        <p className="mt-2">{formThree?.form3_inputTitle}</p>
        <input
          type="text"
          className="fs_input"
          required
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" className="cennikBtn">
          {formThree?.form3_buttonText}
        </button>
      </form>
    </div>
  );
};

export default FeedbackSection;
