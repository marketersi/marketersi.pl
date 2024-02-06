"use client";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Calculator from "@/components/organisms/calculator/Calculator";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_CALCULATOR_SCREEN_DATA } from "@/redux/kalkulator/calculatorAction";
import Loader from "@/components/organisms/animation/Loader";
import "./calculator.css";

const CalculatorScreen = () => {
  const { isLoading, screenData } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  if (screenData) {
    console.log("calculator screen data from UI => ", screenData);
  }

  useEffect(() => {
    dispatch({ type: FETCH_CALCULATOR_SCREEN_DATA });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="cal_sec">
          <Container>
            <Row className="first-row">
              <Col className="text-center">
                <h1>
                  {/* ROI - Kalkulator <br />
                  Zwrot z inwestycji w nową stronę. */}
                  {screenData?.first_heading}
                </h1>
                <p>
                  {/* Uzupełnij niebieskie liczby, by zobaczyć jaką wartość <br />
                  ma przeprojektowanie strony dla Twojej firmy. */}
                  {screenData?.sub_heading}
                </p>
              </Col>
            </Row>

            {/* Calculator */}
            <Calculator />

            <Row className="second-row">
              <Col className="text-center p-sm-5 p-4">
                <h1>
                  {/* Co tu się wylicza? <br /> To proste */}
                  {screenData?.second_heading}
                </h1>
                <div className="w-lg-75" style={{ margin: "auto" }}>
                  <p className="mt-5">
                    {/* W tym przypadku 'Konwersja' to tylko skomplikowane słowo na
                    to, ile osób, które wchodzą na stronę, zostaje płacącymi
                    klientami. Jeśli zrobisz bardzo przekonującą stronę
                    przekonującą, to więcej osób powie 'tak, biorę to!' */}
                    {screenData?.first_paragraph}
                  </p>
                  <p>
                    {/* Nie ma znaczenia czy Twoja aktualna strona konwertuje na
                    poziomie 0% czy 10%. Nasz uproszczony kalkulator pokazuje,{" "}
                    <strong> ile dodatkowej kasy zarobisz</strong>, jeśli
                    sprawisz, że choć 1 dodatkowy procent odwiedzających
                    zostanie prawdziwymi klientami. */}
                    {screenData?.second_paragraph}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default CalculatorScreen;
