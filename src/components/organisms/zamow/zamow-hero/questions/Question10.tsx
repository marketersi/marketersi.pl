// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

// const Question10 = ({ handleNext }) => {
//   const { isLoading, screenData } = useSelector((state) => state.examination);
//   const { formTen } = screenData?.surveyQuestions || {};

//   const [inputValue, setInputValue] = useState("");

//   const dispatch = useDispatch();

//   const handleButtonClick = () => {
//     const payload = {
//       formFiveInputValue: inputValue,
//     };

//     dispatch(saveExaminationFormData(payload));
//     handleNext();
//   };

//   return (
//     <div className="zh_question working_container">
//       {/* <h2>Jak oceniasz skuteczność<br/>
// swojej obecnej strony?
// </h2> */}
// <h2>Jak oceniasz skuteczność swojego obecnego marketingu?</h2>
//       <p className="lineheight34px"><span className="fontweight400">Bądź szczery –</span> im więcej wiemy, tym lepiej dopasujemy rozwiązania.
//       </p>
//       <textarea
//         rows={1}
//         placeholder="Wpisz tu swoją odpowiedź"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       {/* <p className="input_description">
//         Shift + Enter aby przejść do następnej linii
//       </p> */}
//       <div className="zh_next_btn_container flex justify-center">
//         <motion.button
//           onClick={handleButtonClick}
//           className="zh_next_btn"
//           whileHover={{ translateY: 5 }}
//           style={{ cursor: !inputValue ? "not-allowed" : "pointer" }}
//           disabled={!inputValue}
//         >
//                Zatwierdź
//         </motion.button>
//         {/* <p>Wciśnij Enter</p> */}
//       </div>
//     </div>
//   );
// };

// export default Question10;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question10 = ({ handleNext }) => {
  const { isLoading, screenData, formData } = useSelector((state) => state.examination); // Destructure formData
  const { formTen } = screenData?.surveyQuestions || {};

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formTenInputValue: inputValue, // Changed to formTenInputValue for consistency
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  // Determine the heading based on the initial selection in FormZero
  const getHeading = () => {
    if (formData?.formZeroType === "strona") {
      return (
        <>
          Jak skuteczne są obecne rozwiązania na Twojej stronie?
        </>
      );
    } else if (formData?.formZeroType === "marketing") {
      return (
        <>
          Jak oceniasz skuteczność swojego obecnego marketingu?
        </>
      );
    }
    // Fallback if formZeroType is not set or is unexpected
    return (
      <>
        Jak oceniasz skuteczność swojego obecnego marketingu?
      </>
    );
  };

  // Determine the placeholder text based on the initial selection in FormZero
  const getPlaceholder = () => {
    if (formData?.formZeroType === "strona") {
      return "Napisz swoją odpowiedź tutaj";
    } else if (formData?.formZeroType === "marketing") {
      return "Wpisz tu swoją odpowiedź";
    }
    // Fallback
    return "Wpisz tu swoją odpowiedź";
  };


  return (
    <div className="zh_question working_container">
      <h2>{getHeading()}</h2>
      <p className="lineheight34px">
        <span className="fontweight400">Bądź szczery –</span> im więcej wiemy, tym lepiej dopasujemy rozwiązania.
      </p>
      <textarea
        rows={1}
        placeholder={getPlaceholder()} // Use dynamic placeholder
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
      </div>
    </div>
  );
};

export default Question10;