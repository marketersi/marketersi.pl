// import React, { useState ,useEffect } from "react";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { saveExaminationFormData } from "@/redux/zamow/zamowSlice"; 

// const Question1 = ({ handleNext }) => {
//   const { screenData } = useSelector((state) => state.examination);
//   const { formOne } = screenData?.surveyQuestions || {};

//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [])
//   const dispatch = useDispatch();

//   const handleButtonClick = () => {
//     const payload = {
//       formOneInputValue: inputValue,
//     };

//     dispatch(saveExaminationFormData(payload));
//     handleNext();
//   };

//   return (
//     <div className="zh_question">
//       {/* <h2>{formOne?.title}</h2> */}
//        {/* <h2>Nazwa Twojej firmy?</h2>  */}
//        <h2>Jak masz na imię?</h2> 
//       <textarea
//         rows={1}
//         placeholder="Wpisz odpowiedź tutaj"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <div className="zh_next_btn_container flex justify-center">
//         <motion.button
//           onClick={handleButtonClick}
//           className="zh_next_btn"
//           whileHover={{ translateY: 5 }}
//           style={{ cursor: !inputValue ? "not-allowed" : "pointer" }}
//           disabled={!inputValue}
//         >
//           Zatwierdź
//         </motion.button>
//         {/* <p>Wciśnij Enter</p> */}
//       </div>
//     </div>
//   );
// };

// export default Question1;
import React, { useState ,useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice"; 

const Question1 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formOne } = screenData?.surveyQuestions || {};

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
   window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formOneInputValue: inputValue,
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question">
      {/* <h2>{formOne?.title}</h2> */}
        {/* <h2>Nazwa Twojej firmy?</h2>  */}
        <h2>Jak masz na imię?</h2> 
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

export default Question1;