import React from "react";
import "./selected-projects.css";
import { Col, Container, Row } from "react-bootstrap";

const SelectedProjects = () => {
  return (
    <Container>
      <div>
        <h2>
          Wybrane <br />
          realizacje
        </h2>
        <p>
          Chcesz wiedzieć jak możemy pomóc? Najlepiej zobacz jak pomogliśmy
          innym. The Book of Everyone Podwojenie obrotów do 26 000 000 PLN w
          ciągu roku. eCommerce Wielka BrytaniaAustralia
        </p>
      </div>

      {/* 1 */}
      <div>
        <Row>
          <Col>
            <div>
              <p>The Book of Everyone</p>
              <h2>Podwojenie obrotów do 26 000 000 PLN w ciągu roku.</h2>
              <div>
                <p>eCommerce</p>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthe-book-of-everyone.92e58d1e.jpg&w=750&q=75"
              alt=""
            />
          </Col>
        </Row>
      </div>

      {/* 2 */}
      <div>
        <Row>
          <Col>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdlabs.3b6a1f2f.jpg&w=750&q=75"
              alt=""
            />
          </Col>
          <Col>
            <div>
              <p>D-labs</p>
              <h2>
                153 nowe spotkania biznesowe w 8 miesięcy? Normalnie było by ich
                9.
              </h2>
              <div>
                <p>Usługi IT / B2B</p>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* 3 */}
      <div>
        <Row>
          <Col>
            <div>
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
      <div>
        <Row>
          <Col>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcupsell.e2c17028.jpg&w=750&q=75"
              alt=""
            />
          </Col>
          <Col>
            <div>
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
