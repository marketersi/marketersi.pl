import { useSelector } from "react-redux";

const FeedbackSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuThree || "";

  return (
    <div className="feedback_section">
      <h2>{formThree?.form3_textareaTitle}</h2>
      <p>{formThree?.form3_textareaSubtitle}</p>
      <textarea rows="5" cols="50" className="fs_textarea"></textarea>
      <p className="mt-2">{formThree?.form3_inputTitle}</p>
      <input type="text" className="fs_input" />
      <button onClick={() => setCurrentComponent(3)} className="cennikBtn">
        {formThree?.form3_buttonText}
      </button>
      
    </div>
  );
};

export default FeedbackSection;
