import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";

const BrandSlide = () => {
  return (
    <>
      <div className={style.brandSlide}>
        <h4>Światowe marki:</h4>

        <div className={style.brandSlideItem}>
          <Row>
            <Col sm={9}>
              <img
                src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMiedzynarodowe1.3cca2e4d.jpg&w=1080&q=75"
                alt=""
              />
            </Col>
            <Col sm={3}>
              <div className={style.brandNextBtn}>
                <p>Więcej</p>
                <div></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default BrandSlide;
