import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question11 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formEleven } = screenData?.surveyQuestions || {};

  const dispatch = useDispatch();

  const handleButtonClick = (option) => {
    const payload = {
      selectedOptionTwo: option,
    };

    console.log("payload selected option 2 exam ui", payload);
    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_marketing_container">
      <h2><span>Już prawie gotowe!</span> Kiedy chcesz zacząć działać<br/>
i wprowadzić zmiany, które przełożą się na Twoje zyski?
</h2>
      <div className="checkBOxContainer">
        {/* <Row>
          {formEleven?.options.map((option, index) => (
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
         
            <Col  xs={6} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('Od razu')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">Od razu</div>
              </label>
            </Col>
            <Col  xs={6} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('W ciągu 2 tygodni')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">W ciągu 2 tygodni</div>
              </label>
            </Col>
            <Col  xs={6} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('W ciągu 1 miesiąca')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">W ciągu 1 miesiąca</div>
              </label>
            </Col>
            <Col  xs={6} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('W ciągu 3 miesięcy')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">W ciągu 3 miesięcy</div>
              </label>
            </Col>
            <Col  xs={6} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('W ciągu 6 miesięcy')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">W ciągu 6 miesięcy</div>
              </label>
            </Col>
            <Col  xs={6} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick('Na razie nieokreślone')}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">Na razie nieokreślone</div>
              </label>
            </Col>
          
        </Row> 
      </div>
    </div>
  );
};

export default Question11;
