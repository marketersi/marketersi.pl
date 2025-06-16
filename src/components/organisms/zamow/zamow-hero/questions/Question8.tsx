import React, { useState } from "react"; // Corrected this line
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question8 = ({ handleNext }) => {
  const { screenData, formData } = useSelector((state) => state.examination);
  const { formEight } = screenData?.surveyQuestions || {};

  const dispatch = useDispatch();

  const handleButtonClick = (option) => {
    const payload = {
      selectedOption: option,
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  // Determine the heading based on the initial selection in FormZero
  const getHeading = () => {
    if (formData?.formZeroType === "strona") {
      return (
        <>
          Ile możesz maksymalnie przeznaczyć<br />
          na stronę miesięcznie?
        </>
      );
    } else if (formData?.formZeroType === "marketing") {
      return (
        <>
          Ile możesz maksymalnie przeznaczyć<br />
          na marketing miesięcznie?
        </>
      );
    }
    // Fallback if formZeroType is not set or is unexpected
    return (
      <>
        Ile możesz maksymalnie przeznaczyć<br />
        na marketing miesięcznie?
      </>
    );
  };

  return (
    <div className="zh_marketing_container">
      <h2>{getHeading()}</h2>
      {/* Existing content for description and checkboxes remains */}
      <div className="checkBOxContainer">
        <Row>
          <Col xs={6} sm={6}>
            <label
              className="checkbox style-d"
              onClick={() => handleButtonClick('0 - 5 000 zł')}
            >
              <input type="checkbox" />
              <div className="checkbox__checkmark"></div>
              <div className="checkbox__body">0 - 5 000 zł</div>
            </label>
          </Col>

          <Col xs={6} sm={6}>
            <label
              className="checkbox style-d"
              onClick={() => handleButtonClick('5 000 - 10 000 zł')}
            >
              <input type="checkbox" />
              <div className="checkbox__checkmark"></div>
              <div className="checkbox__body">5 000 - 10 000 zł</div>
            </label>
          </Col>

          <Col xs={6} sm={6}>
            <label
              className="checkbox style-d"
              onClick={() => handleButtonClick('10 000 - 30 000 zł')}
            >
              <input type="checkbox" />
              <div className="checkbox__checkmark"></div>
              <div className="checkbox__body">10 000 - 30 000 zł</div>
            </label>
          </Col>

          <Col xs={6} sm={6}>
            <label
              className="checkbox style-d"
              onClick={() => handleButtonClick('30 000 - 100 000 zł')}
            >
              <input type="checkbox" />
              <div className="checkbox__checkmark"></div>
              <div className="checkbox__body">30 000 - 100 000 zł</div>
            </label>
          </Col>

          <Col xs={6} sm={6}>
            <label
              className="checkbox style-d"
              onClick={() => handleButtonClick('100 000 - 500 000 ')}
            >
              <input type="checkbox" />
              <div className="checkbox__checkmark"></div>
              <div className="checkbox__body">100 000 - 500 000 </div>
            </label>
          </Col>

          <Col xs={6} sm={6}>
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