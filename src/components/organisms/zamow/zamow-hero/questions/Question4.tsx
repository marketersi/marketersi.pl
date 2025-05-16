// import React from "react";
// import { motion } from "framer-motion";
// import { useSelector } from "react-redux";

// const Question4 = ({ handleNext }) => {

//   const { isLoading, screenData } = useSelector((state) => state.examination);
//   const { formFour } = screenData?.surveyQuestions || {};
//   return (
//     <div className="zh_question question_container">
//       {/* <h2>
//         {formFour?.title}
//       </h2> */}

//       <h2 className="">
//         <strong>Anna,</strong> <span>zanim zdecydujesz się kontynuować,</span> <span>prosimy pamiętaj o tym, że:</span>
//       </h2>

//       {/* <p>
//        {formFour?.descriptionOne}
//       </p>
//       <p>
//         {formFour?.descriptionTwo}
//       </p> */}

//       <p className="FontChangeP">Jeśli Twoja firma nie zakwalifikuje się do bezpłatnych badań z ekspertami, wyślemy Ci ogólne wskazówki, które pomogą Ci usprawnić Twoją stronę internetową.</p>
//       <p className="FontChangeP"><span>Ale jeśli zdecydujemy się na badanie Twojej strony</span> to zrobimy to w ciągu 5-7 dni roboczych.</p>

//       <div className="zh_next_btn_container flex justify-center">
//         <motion.button
//           onClick={handleNext}
//           className="zh_next_btn"
//           whileHover={{ translateY: 5 }}
//         >
//          {/* {formFour?.buttonText} */}
//          Zatwierdź
//         </motion.button>
//         {/* <p>Wciśnij Enter</p> */}
//       </div>
//     </div>
//   );
// };

// export default Question4;
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question4 = ({ handleNext }) => {
  const { isLoading, screenData, formData } = useSelector((state) => state.examination);
  const { formFour } = screenData?.surveyQuestions || {};

  // Get the name user entered in Question 1
  const userName = formData?.formOneInputValue || "Użytkowniku"; // fallback name

  return (
    <div className="zh_question question_container">
      {/* <h2>{formFour?.title}</h2> */}

      <h2 className="">
        <strong>{userName},</strong> <span>zanim zdecydujesz się kontynuować,</span> <span>prosimy pamiętaj o tym, że:</span>
      </h2>

      {/* <p>{formFour?.descriptionOne}</p>
      <p>{formFour?.descriptionTwo}</p> */}

      <p className="FontChangeP">
        Jeśli Twoja firma nie zakwalifikuje się do bezpłatnych badań z ekspertami,
        wyślemy Ci ogólne wskazówki, które pomogą Ci usprawnić Twoją stronę internetową.
      </p>
      <p className="FontChangeP">
        <span>Ale jeśli zdecydujemy się na badanie Twojej strony</span> to zrobimy to w ciągu 5-7 dni roboczych.
      </p>

      <div className="zh_next_btn_container flex justify-center">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          {/* {formFour?.buttonText} */}
          Zatwierdź
        </motion.button>
        {/* <p>Wciśnij Enter</p> */}
      </div>
    </div>
  );
};

export default Question4;
