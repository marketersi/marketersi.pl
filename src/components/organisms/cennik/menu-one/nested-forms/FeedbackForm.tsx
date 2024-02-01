import React from "react";

const FeedbackForm = ({ setCurrentComponent }) => {
  return (
    <div className="feedback_section">
      <h2>Na koniec, napisz coś o tym biznesie.</h2>
      <p>Jaki masz na to pomysł? Co chcesz umieścić na stronie?</p>
      <textarea rows="5" cols="50" className="fs_textarea"></textarea>
      <p className="mt-2">
        Ważne: Wymień produkty/usługi w ofercie. Od najważniejszej.
      </p>
      <input type="text" className="fs_input" />
      <button onClick={() => setCurrentComponent(3)} className="cennikBtn">
        Ostatnie pytanie
      </button>
    </div>
  );
};

export default FeedbackForm;
