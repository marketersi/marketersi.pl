// // ZamowHero.tsx
// import React, { useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import "./zamow-hero.css";
// import { motion } from "framer-motion";
// import Questions from "./questions/Questions";
// import { useDispatch, useSelector } from "react-redux";
// import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

// const ZamowHero = ({ progress, currentQuestion, handleNextQuestion }) => {
//   const { isLoading, screenData } = useSelector((state) => state.examination);
//   const { heroSection, ratingSection } = screenData || {};

//   return (
//     <section>
//       <Row>
//         <Col className="text-center zamow-hero">
//           {progress ? (
//             <Questions
//               handleNext={handleNextQuestion}
//               currentQuestion={currentQuestion}
//             />
//           ) : (
//             <FormZero
//               heroSection={heroSection}
//               handleNextQuestion={handleNextQuestion}
//             />
//           )}
//         </Col>
//       </Row>
//       <div className="line-container">
//         <p className="mb-0 small">{ratingSection?.label} :</p>
//         <div className="line"></div>
//       </div>
//     </section>
//   );
// };

// export default ZamowHero;

// // ---------- FORM ZERO ----------------
// const FormZero = ({ heroSection, handleNextQuestion }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [selection, setSelection] = useState(null); // 'strona' or 'marketing'

//   const dispatch = useDispatch();

//   const handleButtonClick = () => {
//     const payload = {
//       formZeroInputValue: inputValue,
//       formZeroType: selection,
//     };
//     console.log("payload 0 exam ui", payload);
//     dispatch(saveExaminationFormData(payload));
//     handleNextQuestion();
//   };

//   const clickButton = (type) => {
//     setSelection(type);
//   };

//   // This function determines the heading based on the selection
//   const getHeading = () => {
//     if (selection === "strona") return "Bezpłatne badanie strony firmowej.";
//     if (selection === "marketing") return "Bezpłatne badanie marketingu firmy.";
//     return heroSection?.title; // Default title if no selection
//   };

//   // This function determines the placeholder text based on the selection
//   const getPlaceholder = () => {
//     if (selection === "strona") return "Podaj adres swojej strony www.";
//     if (selection === "marketing") return "Opisz krótko swoją działalność lub działania marketingowe.";
//     return ""; // Default placeholder if no selection
//   };


//   return (
//     <>
//       <h1>{getHeading()}</h1>
//       <p className="mbCustom">
//         Odkryj nowe horyzonty rozwoju Twojej firmy <br />
//         W Marketersi oferujemy Ci unikalną możliwość spojrzenia
//         <br />
//         na Twoją stronę internetową <br className="showmobilebr" />
//         i strategie marketingowe
//         <br />
//         z nowej perspektywy
//       </p>
//       <p className="smalltextp">
//         100% poufności – Twoje zgłoszenie jest bezpieczne.
//       </p>

//       {selection ? (
//         <div className="input-container">
//           <input
//             placeholder={getPlaceholder()}
//             className="zemow-hero-input"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <motion.button
//             className="zamow-hero-btn"
//             whileHover={{ scale: 0.97 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={handleButtonClick}
//           >
//             Start
//           </motion.button>
//         </div>
//       ) : (
//         <div className="banner-buttons">
//           <motion.button
//             className="banner-btn"
//             whileHover={{ scale: 0.97 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => clickButton("strona")}
//           >
//             Badanie strony
//           </motion.button>
//           <motion.button
//             className="banner-btn"
//             whileHover={{ scale: 0.97 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => clickButton("marketing")}
//           >
//             Badanie marketingu
//           </motion.button>
//         </div>
//       )}
//     </>
//   );
// };

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./zamow-hero.css";
import { motion } from "framer-motion";
import Questions from "./questions/Questions";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const ZamowHero = ({ currentQuestion, handleNextQuestion }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { heroSection, ratingSection } = screenData || {};

  return (
    <section>
      <Row>
        <Col className="text-center zamow-hero">
          {currentQuestion === 0 ? (
            <FormZero
              heroSection={heroSection}
              handleNextQuestion={handleNextQuestion}
            />
          ) : (
            <Questions
              handleNext={handleNextQuestion}
              currentQuestion={currentQuestion}
            />
          )}
        </Col>
      </Row>
      <div className="line-container">
        <p className="mb-0 small">{ratingSection?.label} :</p>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default ZamowHero;

// ---------- FORM ZERO ----------------
const FormZero = ({ heroSection, handleNextQuestion }) => {
  const [inputValue, setInputValue] = useState("");
  const [selection, setSelection] = useState(null);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formZeroInputValue: inputValue,
      formZeroType: selection,
    };
    dispatch(saveExaminationFormData(payload));
    handleNextQuestion();
  };

  const clickButton = (type) => {
    setSelection(type);
  };

  const getHeading = () => {
    if (selection === "strona") return "Bezpłatne badanie strony firmowej.";
    if (selection === "marketing") return "Bezpłatne badanie marketingu firmy.";
    return heroSection?.title;
  };

  const getPlaceholder = () => {
    if (selection === "strona") return "Podaj adres swojej strony www.";
    if (selection === "marketing") return "Opisz krótko swoją działalność lub działania marketingowe.";
    return "";
  };

  return (
    <>
      <h1>{getHeading()}</h1>
      <p className="mbCustom">
        Odkryj nowe horyzonty rozwoju Twojej firmy <br />
        W Marketersi oferujemy Ci unikalną możliwość spojrzenia
        <br />
        na Twoją stronę internetową <br className="showmobilebr" />
        i strategie marketingowe
        <br />
        z nowej perspektywy
      </p>
      <p className="smalltextp">
        100% poufności – Twoje zgłoszenie jest bezpieczne.
      </p>

      {selection ? (
        <div className="input-container">
          <input
            placeholder={getPlaceholder()}
            className="zemow-hero-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <motion.button
            className="zamow-hero-btn"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleButtonClick}
          >
            Start
          </motion.button>
        </div>
      ) : (
        <div className="banner-buttons">
          <motion.button
            className="banner-btn"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => clickButton("strona")}
          >
            Badanie strony
          </motion.button>
          <motion.button
            className="banner-btn"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => clickButton("marketing")}
          >
            Badanie marketingu
          </motion.button>
        </div>
      )}
    </>
  );
};
