import React from "react";
import style from "../opinie.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className={style.opinionBanner}>
        <Container>
          <Row>
            <Col sm={4}>
              <div className={style.opinionContent}>
                <h1>
                  Opinie <br />
                  o firmie <br />
                  Owocni.pl
                </h1>
              </div>
            </Col>
            <Col sm={4}>
              <img src="/assets/images/Frame.svg" alt="" />
            </Col>
            <Col sm={4}>
              <img className={style.opinionBnnaerImg}
                src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20latDzialalnosciPLbiel.be533f8b.svg&w=640&q=75"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
