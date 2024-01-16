import React from "react";
import "./selected-projects.css";
import { Col, Container, Row } from "react-bootstrap";

const SelectedProjects = () => {
  return (
    <Container className="sp_sec">
      <div className="sp_header">
        <h2>
          Wybrane <br />
          realizacje
        </h2>
        <p>
          <em>
            Chcesz wiedzieć jak możemy pomóc? <br /> Najlepiej zobacz jak
            pomogliśmy innym.
          </em>
        </p>
      </div>

      {/* 3 */}
      <div className="sp_card_container">
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="sp_card_left text-center">
              <p>XCEED</p>
              <h2>od zera do 40 000 000 PLN rocznego obrotu w 5 lat.</h2>
              <div>
                <p>Aplikacja / B2C</p>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FXceed%20app.c37538a7.jpg&w=750&q=75"
              alt=""
            />
          </Col>
        </Row>
      </div>

      {/* 4 */}
      <div className="my-5">
        <Row>
          <Col>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcupsell.e2c17028.jpg&w=750&q=75"
              alt=""
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="sp_card_right text-center">
              <p>ClickSell</p>
              <h2>Sklep dla graczy od zera do 3 000 000 PLN w 2 lata.</h2>
              <div>
                <p>eCommerce / Startup</p>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SelectedProjects;
