import React from "react";
import { motion } from "framer-motion";
import {Row, Col} from 'react-bootstrap'
import { useSelector } from "react-redux";

const Question8 = ({ handleNext }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formEight } = screenData?.surveyQuestions || {};


  return (
    <div className="zh_marketing_container">
      <h2>{formEight?.title}</h2>
      <p>
        {formEight?.description_1}
      </p>
      <p className="range_description">
       {formEight?.description_2}
      </p>
      <div className="checkBOxContainer">
      <Row>
                {formEight?.selectOptions.map((option, index) => (
                    <Col key={index} sm={6}>
                        <label className="checkbox style-d" onClick={handleNext}>
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">{option}</div>
                        </label>
                    </Col>
                ))}
            </Row>
      </div>
      
      {/* <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          OK
        </motion.button>
      </div> */}
    </div>
  );
};

export default Question8;
