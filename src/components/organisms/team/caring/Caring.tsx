"use client";

import React, { useRef } from "react";
import style from "../team.module.css";
import { Row, Col, Container } from "react-bootstrap";
import Lottie from "lottie-react";
import clock from "/public/assets/animations/zegar_anim.json";
import Care from "/public/assets/animations/dopasowane_anim.json";
import Special from "/public/assets/animations/wyjotkowe_anim.json";

const Caring = () => {
  const lottieRef = useRef<Lottie | null>(null);
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
                <div
                  onMouseEnter={() => lottieRef.current.play()}
                  onMouseLeave={() => lottieRef.current.stop()}
                  style={{ opacity: 0.5, width: "60%", margin: "0 auto 20px" }}
                >
                  <Lottie
                    animationData={clock}
                    loop={true}
                    autoplay={false}
                    lottieRef={lottieRef}
                  />
                </div>
                <h4>Odpowiedzialni:</h4>
                <p>Działać uczciwie i dotrzymywać danego słowa.</p>
              </div>
            </Col>
            <Col sm={4} className={style.cartTop}>
              <div className={style.caringCard}>
                <div
                  onMouseEnter={() => lottieRef.current.play()}
                  onMouseLeave={() => lottieRef.current.stop()}
                  style={{ opacity: 0.5, width: "60%", margin: "0 auto 20px" }}
                >
                  <Lottie
                    animationData={Care}
                    loop={true}
                    autoplay={false}
                    lottieRef={lottieRef}
                  />
                </div>
                <h4>Troskliwi::</h4>
                <p>
                  Zawsze dawać ciut więcej niż to, czego się od nas oczekuje.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.caringCard}>
                <div
                  onMouseEnter={() => lottieRef.current.play()}
                  onMouseLeave={() => lottieRef.current.stop()}
                  style={{ opacity: 0.5, width: "60%", margin: "0 auto 20px" }}
                >
                  <Lottie
                    animationData={Special}
                    loop={true}
                    autoplay={false}
                    lottieRef={lottieRef}
                  />
                </div>
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
