import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Calculator = () => {
  const [visitors, setVisitors] = useState(442);
  const [averageOrderValue, setAverageOrderValue] = useState(192);

  const handleVisitorsChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setVisitors(newValue);
  };

  const handleOrderValueChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setAverageOrderValue(newValue);
  };

  return (
    <>
      <Row className="p-5">
        <Col className="text-center d-flex flex-column align-items-center justify-content-center">
          <div className="first-card card shadow">
            <Row className="mb-3">
              <Col>
                <p>Stronę odwiedza</p>
              </Col>
              <Col>
                <input
                  value={visitors}
                  onChange={handleVisitorsChange}
                  type="number"
                  className="no-spinner"
                />

                <input
                  type="range"
                  min="10"
                  max="9999"
                  step="1"
                  value={visitors}
                  onChange={handleVisitorsChange}
                  className="custom-range"
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
                  className="no-spinner"
                />
                <input
                  type="range"
                  min="1"
                  max="9999"
                  step="1"
                  value={averageOrderValue}
                  onChange={handleOrderValueChange}
                  className="custom-range"
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
                <h3>1.925zł</h3>
                <p>Miesięcznie</p>
              </Col>
              <Col className="text-start">
                <h3>23.109zł</h3>
                <p>Rocznie</p>
              </Col>
            </Row>
          </div>

          <div>
            <p>wzrost konwersji o 5%</p>
            <Row>
              <Col className="text-end">
                <h3>9.628zł</h3>
                <p>Miesięcznie</p>
              </Col>
              <Col className="text-start">
                <h3>115.545zł</h3>
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
