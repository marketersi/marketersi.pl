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
    setConversionIncrease1(additionalRevenue1.toFixed(2));

    // Calculate additional revenue for a 5% increase in conversion
    const additionalRevenue5 = visitors * 0.05 * averageOrderValue;
    setConversionIncrease5(additionalRevenue5.toFixed(2));
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
    newValue = Math.min(newValue, 9999);
    setAverageOrderValue(newValue);
  };

  console.log(
    "conversionIncrease1.toLocaleString('pl-PL' ",
    conversionIncrease1.toLocaleString("pl-PL")
  );

  return (
    <>
      <Row className="p-lg-5 mt-lg-5">
        <Col
          lg={6}
          className="text-center d-flex flex-column align-items-center justify-content-center"
        >
          <div className="first-card card shadow">
            <Row className="mb-5">
              <Col sm={4}>
                <p>Stronę odwiedza</p>
              </Col>
              <Col sm={4}>
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
              <Col sm={4}>
                <input
                  value={averageOrderValue}
                  onChange={handleOrderValueChange}
                  type="number"
                  className="no-spinner calc_input"
                />
                <input
                  type="range"
                  min="1"
                  max="9999"
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

        <Col lg={6} className="car text-center p-5 second-card ">
          {/* <h2>Dodatkowy zysk</h2> */}
          <img
            src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZysk.923f65ad.png&w=750&q=75"
            alt=""
          />

          <div className="my-3">
            <h6>wzrost konwersji o 1%</h6>
            <Row>
              <Col className="text-end pe-4">
                <h3>{conversionIncrease1.toLocaleString("pl-PL")}zł</h3>
                <p>Miesięcznie</p>
              </Col>
              <Col className="text-start ps-4">
                <h3>{(conversionIncrease1 * 12).toLocaleString("pl-PL")}zł</h3>
                <p>Rocznie</p>
              </Col>
            </Row>
          </div>

          <div>
            <h6>wzrost konwersji o 5%</h6>
            <Row>
              <Col className="text-end pe-4">
                <h3>{conversionIncrease5.toLocaleString("pl-PL")}zł</h3>
                <p>Miesięcznie</p>
              </Col>
              <Col className="text-start ps-4">
                <h3>{(conversionIncrease5 * 12).toLocaleString("pl-PL")}zł</h3>
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
