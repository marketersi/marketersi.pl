import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Calculator = () => {
  const [visitors, setVisitors] = useState(10);
  const [averageOrderValue, setAverageOrderValue] = useState(1);
  const [conversionIncrease1, setConversionIncrease1] = useState(0);
  const [conversionIncrease5, setConversionIncrease5] = useState(0);

  useEffect(() => {
    // Calculate additional revenue for a 1% increase in conversion
    const additionalRevenue1 = visitors * 0.01 * averageOrderValue;

    setConversionIncrease1(additionalRevenue1);

    // Calculate additional revenue for a 5% increase in conversion
    const additionalRevenue5 = visitors * 0.05 * averageOrderValue;

    setConversionIncrease5(additionalRevenue5);
  }, [visitors, averageOrderValue]);

  const handleVisitorsChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = Math.max(newValue, 0);
    newValue = Math.min(newValue, 9999);
    setVisitors(newValue);
  };

  const handleOrderValueChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = Math.max(newValue, 0);
    newValue = Math.min(newValue, 99999);
    setAverageOrderValue(newValue);
  };

  function formatNumberForPortugueseLocale(number) {
    if (typeof number !== "string") {
      number = number.toString();
    }

    // Replace dots with commas and vice versa
    return number.replace(/[.,]/g, function (match) {
      return match === "." ? "," : ".";
    });
  }

  return (
    <>
      <Row className="p-lg-5 mt-lg-5">
        <Col
          xxl={5}
          className="text-center d-flex flex-column align-items-center justify-content-center"
        >
          <div className="first-card card shadow">
            <Row className="mb-5">
              <Col sm={4}>
                <p>Stronę odwiedza</p>
              </Col>
              <Col sm={4} className="CalTopInput">
                <input
                  value={visitors}
                  onChange={handleVisitorsChange}
                  type="number"
                  className="no-spinner calc_input"
                />

                <input
                  type="range"
                  min="10"
                  max="9999"
                  step="1"
                  value={visitors}
                  onChange={handleVisitorsChange}
                  className="custom-range"
                  style={{ "--value": visitors }}
                />
              </Col>
              <Col sm={4}>
                <p>osób w miesiącu</p>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <p className="inputHeading">Średni zysk z zamówienia to</p>
              </Col>
              <Col sm={4} className="CalBotInput">
                <input
                  value={averageOrderValue}
                  onChange={handleOrderValueChange}
                  type="number"
                  className="no-spinner calc_input"
                />
                <input 
                  type="range"
                  min="1"
                  max="99999"
                  step="1"
                  value={averageOrderValue}
                  onChange={handleOrderValueChange}
                  className="custom-range"
                  style={{ "--value": averageOrderValue }}
                />
              </Col>
              <Col sm={4}>
                <p>złotych</p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xxl={7}  className="car text-center p-5 second-card ">
          <img
            src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZysk.923f65ad.png&w=750&q=75"
            alt=""
          />

          <div className="my-3">
            <h6>wzrost konwersji o 1%</h6>
            <Row>
              <Col sm={6} className="text-sm-end text-start pe-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    conversionIncrease1.toLocaleString("en-US")
                  )}
                  zł
                </h3>
                <p>Miesięcznie</p>
              </Col>
              <Col sm={6} className="text-start ps-sm-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    (conversionIncrease1 * 12).toLocaleString("en-US")
                  )}{" "}
                  zł
                </h3>
                <p>Rocznie</p>
              </Col>
            </Row>
          </div>

          <div>
            <h6>wzrost konwersji o 5%</h6>
            <Row>
              <Col sm={6} className="text-sm-end text-start pe-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    conversionIncrease5.toLocaleString("en-US")
                  ).toLocaleString("en-US")}{" "}
                  zł
                </h3>
                <p>Miesięcznie</p>
              </Col>
              <Col sm={6} className="text-start ps-sm-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    (conversionIncrease5 * 12).toLocaleString("en-US")
                  ).toLocaleString("en-US")}{" "}
                  zł
                </h3>
                <p>Rocznie</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Calculator;
