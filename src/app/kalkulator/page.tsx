"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./calculator.css";
import Calculator from "@/components/organisms/calculator/Calculator";

const CalculatorScreen = () => {
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

        {/* Calculator */}
        <Calculator />

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
