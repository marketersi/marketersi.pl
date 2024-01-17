"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./calculator.css";

const CalculatorScreen = () => {
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
    <section className="cal_sec">
      <Container>
        <Row className="first-row">
          <Col className="text-center">
            <h1>
              ROI - Kalkulator <br />
              Zwrot z inwestycji w nową stronę.
            </h1>
            <p>
              Uzupełnij niebieskie liczby, by zobaczyć jaką wartość <br />
              ma przeprojektowanie strony dla Twojej firmy.
            </p>
          </Col>
        </Row>

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

        <Row className="second-row">
          <Col className="text-center p-5">
            <h1>
              Co tu się wylicza? <br /> To proste
            </h1>
            <div className="w-75" style={{ margin: "auto" }}>
              <p className="mt-5">
                W tym przypadku 'Konwersja' to tylko skomplikowane słowo na to,
                ile osób, które wchodzą na stronę, zostaje płacącymi klientami.
                Jeśli zrobisz bardzo przekonującą stronę przekonującą, to więcej
                osób powie 'tak, biorę to!'
              </p>
              <p>
                Nie ma znaczenia czy Twoja aktualna strona konwertuje na
                poziomie 0% czy 10%. Nasz uproszczony kalkulator pokazuje,{" "}
                <strong> ile dodatkowej kasy zarobisz</strong>, jeśli sprawisz,
                że choć 1 dodatkowy procent odwiedzających zostanie prawdziwymi
                klientami.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CalculatorScreen;
