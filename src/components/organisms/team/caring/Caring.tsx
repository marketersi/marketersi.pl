"use client";

import React, { useRef } from "react";
import style from "../team.module.css";
import { Row, Col, Container } from "react-bootstrap";

const Caring = () => {
  return (
    <>
      <div className={style.caring}>
        <img
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWysoki-standard.2a68660f.png&w=1920&q=75"
          alt=""
        />
        <Container>
          <Row className={style.cartRow}>
            <Col sm={4}>
              <div className={style.caringCard}>
                <h4>Odpowiedzialni:</h4>
                <p>Działać uczciwie i dotrzymywać danego słowa.</p>
              </div>
            </Col>
            <Col sm={4} className={style.cartTop}>
              <div className={style.caringCard}>
                <h4>Troskliwi::</h4>
                <p>
                  Zawsze dawać ciut więcej niż to, czego się od nas oczekuje.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.caringCard}>
                <h4>Odpowiedzialni:</h4>
                <p>Działać uczciwie i dotrzymywać danego słowa.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Caring;
