import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";
import ReferenceCard from "./ReferenceCard";

const References = () => {
  return (
    <>
      <div className={style.google}>
        <div className={style.opinionContainer}>
          <div className={style.opinionContent}>
            <h3>Wiesz, że:</h3>
            <h2>
              Niektórzy, klienci są <br />z nami już od dekady.
            </h2>
            <h4>
              To były czasy, kiedy <span>referencje od klientów</span> zbierało się na
              papierze firmowym z pieczątką i wieszało w ramkę.
            </h4>
          </div>
          <Row>
            <Col sm={4}>
              <div className={style.tesco}>
                <img src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FReferencje1.f883c230.png&w=640&q=75" alt="" />
                <h4>Tesco</h4>
                <p>2014</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.tesco}>
                <img src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FReferencje1.f883c230.png&w=640&q=75" alt="" />
                <h4>Tesco</h4>
                <p>2014</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.tesco}>
                <img src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FReferencje1.f883c230.png&w=640&q=75" alt="" />
                <h4>Tesco</h4>
                <p>2014</p>
              </div>
            </Col>
          </Row>
          <div className={style.referenceCardSec}>
            <Row>
              <Col sm={4}><ReferenceCard /></Col>
              <Col sm={4}><ReferenceCard /></Col>
              <Col sm={4}><ReferenceCard /></Col>
            </Row>
          </div>
          <div className={style.referenceCardSec}>
            <Row>
              <Col sm={4}><ReferenceCard /></Col>
              <Col sm={4}><ReferenceCard /></Col>
              <Col sm={4}><ReferenceCard /></Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default References;
