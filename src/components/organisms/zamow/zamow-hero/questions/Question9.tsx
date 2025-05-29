// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

// const Question9 = ({ handleNext }) => {
//   const { screenData } = useSelector((state) => state.examination);
//   const { formNine } = screenData?.surveyQuestions || {};

//   const [rangeValue, setRangeValue] = useState(0);

//   const handleRangeChange = (event) => {
//     setRangeValue(parseInt(event.target.value, 10));
//   };

//   const dispatch = useDispatch();

//   const handleButtonClick = () => {
//     const payload = {
//       selectedRangeValueTwo: rangeValue,
//     };
//     dispatch(saveExaminationFormData(payload));
//     handleNext();
//   };

//   return (
//     <div className="zh_question range_container">
//       {/* <h2>{formNine?.title}</h2> */}
//       <h2>Jaki jest Twój cel?Jaki byłby idealny,<br/>
// miesięczny przychód Twojej firmy?
// </h2>
//       <p className="goal_description">Weź pod uwagę aktualne <br className="showmobilebr" />możliwości operacyjne <br className="showmobilebr" />swojej firmy. <br />
// Te informacje pomogą nam <br className="showmobilebr" />dopasować strategię <br className="showmobilebr" />do Twoich potrzeb.
// </p>

//       <div className="income_show martop30">{rangeValue} zł</div>

//       {rangeValue === 0 && (
//         <>
//           <div className="CircleAnimation"></div>
//           <img
//             className="tri_arrow"
//             // src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.2faecaee.png&w=256&q=75"
//             src="https://images.prismic.io/marketersi/aAtQ4_IqRLdaBm2v_preze2.png?auto=format,compress"
//             alt=""
//           />
//         </>
//       )}
//       <input
//         min={0}
//         max={100000}
//         type="range"
//         step={1000}
//         value={rangeValue}
//         onChange={handleRangeChange}
//         className="income_range"
//       />

//       <div className="zh_next_btn_container flex justify-center zh_next_btn_Center">
//         <motion.button
//           onClick={handleButtonClick}
//           className="zh_next_btn"
//           whileHover={{ translateY: 5 }}
//         >
//                Zatwierdź
//         </motion.button>
//         {/* <p>Wciśnij Enter</p> */}
//       </div>
//     </div>
//   );
// };


// export default Question9;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question9 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formNine } = screenData?.surveyQuestions || {};

  // Start from 1 instead of 0
  const [rangeValue, setRangeValue] = useState(1);

  const handleRangeChange = (event) => {
    setRangeValue(Number(event.target.value));
  };

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      selectedRangeValueTwo: rangeValue,
    };
    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question range_container">
      {/* <h2>{formNine?.title}</h2> */}
      <h2>Jaki jest Twój cel? Jaki byłby idealny,<br />
        miesięczny przychód Twojej firmy?
      </h2>
      {/* <p className="goal_description">
        Weź pod uwagę aktualne <br className="showmobilebr" />możliwości operacyjne <br className="showmobilebr" />swojej firmy. <br />
        Te informacje pomogą nam <br className="showmobilebr" />dopasować strategię <br className="showmobilebr" />do Twoich potrzeb.
      </p> */}
        <p className="goal_description">
          Weź pod uwagę aktualne możliwości operacyjne swojej firmy.<br />
          Te informacje pomogą nam dopasować strategię do Twoich potrzeb.
        </p>

      <div className="income_show martop30">
        {rangeValue.toLocaleString("pl-PL")} zł
      </div>

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
        type="range"
        min={1}
        max={100000}
        step={1}
        value={rangeValue}
        onChange={handleRangeChange}
        className="income_range"
      />

      <div className="zh_next_btn_container flex justify-center zh_next_btn_Center">
        <motion.button
          onClick={handleButtonClick}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          Zatwierdź
        </motion.button>
      </div>
    </div>
  );
};

export default Question9;
