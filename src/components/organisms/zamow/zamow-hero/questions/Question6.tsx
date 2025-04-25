import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question6 = ({ handleNext }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formSix } = screenData?.surveyQuestions || {};
  
  return (
    <div className="zh_question Thanks">
         <h2>Nazwa Twojej firmy?</h2> 
      <p>
       {/* {formSix?.description} */}
       Jeszcze moment<br/>
i wszystko dopniemy<br/>
na ostatni guzik.<br/>

      </p>
      <div className="zh_next_btn_container flex justify-center">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          {/* {formSix?.buttonText} */}
          Zatwierdź
        </motion.button>
        {/* <p>Wciśnij Enter</p> */}
      </div>
    </div>
  );
};

export default Question6;
