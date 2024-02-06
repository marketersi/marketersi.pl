import React from "react";
import "./selected-projects.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SelectedProjects = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);

  const { Projects } = screenData || {};
  const { subtitle, title, Cards } = Projects || {};

  console.log("cards", Cards);

  return (
    <Container className="sp_sec">
      <div className="sp_header">
        <h2>
          {/* Wybrane <br />
          realizacje */}
          {title}
        </h2>
        <p>
          <em>
            {/* Chcesz wiedzieć jak możemy pomóc? <br /> Najlepiej zobacz jak
            pomogliśmy innym. */}
            {subtitle}
          </em>
        </p>
      </div>

      {/* cards */}
      {Cards?.map((item, index) => {
        const {
          id,
          title,
          info,
          catagory,
          flag_logo_1,
          flag_logo_2,
          banner_image,
        } = item || {};

        if (index % 2 !== 0) {
          return (
            <div className="my-5" key={index}>
              <Row>
                <Col>
                  <img src={banner_image} alt="project-banner-image" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <div className="sp_card_right text-center">
                    <p>{title}</p>
                    <h2>{info}</h2>
                    <div>
                      <p>{catagory}</p>
                      <div>
                        <img
                          src={flag_logo_1}
                          alt="flag logo 1"
                          className="me-1"
                        />
                        <img src={flag_logo_2} alt="flag logo 2" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          );
        } else {
          return (
            <div className="sp_card_container" key={index}>
              <Row>
                <Col className="d-flex justify-content-center align-items-center">
                  <div className="sp_card_left text-center">
                    <p>{title}</p>
                    <h2>{info}</h2>
                    <div>
                      <p>{catagory}</p>
                      <div>
                        <img src={flag_logo_1} alt="" className="me-1" />
                        <img src={flag_logo_2} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <img src={banner_image} alt="project-banner-image" />
                </Col>
              </Row>
            </div>
          );
        }
      })}
    </Container>
  );
};

export default SelectedProjects;

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
</div>;

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
</div>;
