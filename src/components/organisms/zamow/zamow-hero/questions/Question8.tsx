import React, { useState } from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question8 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formEight } = screenData?.surveyQuestions || {};

  const dispatch = useDispatch();

  const handleButtonClick = (option) => {
    const payload = {
      selectedOption: option,
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_marketing_container">
      {/* <h2>{formEight?.title}</h2> */}
      <h2>Ile możesz maksymalnie przeznaczyć<br/>
na marketing miesięcznie?
</h2>
      {/* <p>{formEight?.description_1}</p> */}
      {/* <p>Im precyzyjniejsza kwota, tym skuteczniejszą<br/>
strategię możemy zaproponować
</p>  */}
      <p className="range_description">{formEight?.description_2}</p>
      <div className="checkBOxContainer">
        {/* <Row>
          {formEight?.selectOptions.map((option, index) => (
            <Col key={index} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick(option)}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">{option}</div>
              </label>
            </Col>
          ))}
        </Row> */}
         <Row>
       
            <Col  sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('0 - 5 000 zł')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">0 - 5 000 zł</div>
              </label>
            </Col>

            <Col  sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('5 000 - 10 000 zł')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">5 000 - 10 000 zł</div>
              </label>
            </Col>

            <Col  sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('10 000 - 30 000 zł')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">10 000 - 30 000 zł</div>
              </label>
            </Col>

            <Col  sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('30 000 - 100 000 zł')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">30 000 - 100 000 zł</div>
              </label>
            </Col>

            <Col  sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('100 000 - 500 000 ')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">100 000 - 500 000 </div>
              </label>
            </Col>

            <Col  sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('Powyżej 500 000 zł')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">Powyżej 500 000 zł</div>
              </label>
            </Col>
          
        </Row> 
      </div>
    </div>
  );
};

export default Question8;
