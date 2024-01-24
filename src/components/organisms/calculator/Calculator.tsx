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
    newValue = Math.min(newValue, 9999);
    setAverageOrderValue(newValue);
  };

  return (
    <>
      <Row className="p-5">
        <Col className="text-center d-flex flex-column align-items-center justify-content-center">
          <div className="first-card card shadow">
            <Row className="mb-5">
              <Col>
                <p>Stronę odwiedza</p>
              </Col>
              <Col>
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
              <Col>
                <p>osób w miesiącu</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Średni zysk z zamówienia to</p>
              </Col>
              <Col>
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
              <Col>
                <p>złotych</p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col className="card text-center p-5 second-card shadow">
          <h2>Dodatkowy zysk</h2>

          <div className="my-3">
            <p>wzrost konwersji o 1%</p>
            <Row>
              <Col className="text-end">
                <h3>{conversionIncrease1.toLocaleString()}zł</h3>
                <p>Miesięcznie</p>
              </Col>
              <Col className="text-start">
                <h3>{(conversionIncrease1 * 12).toLocaleString()}zł</h3>
                <p>Rocznie</p>
              </Col>
            </Row>
          </div>

          <div>
            <p>wzrost konwersji o 5%</p>
            <Row>
              <Col className="text-end">
                <h3>{conversionIncrease5.toLocaleString()}zł</h3>
                <p>Miesięcznie</p>
              </Col>
              <Col className="text-start">
                <h3>{(conversionIncrease5 * 12).toLocaleString()}zł</h3>
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
