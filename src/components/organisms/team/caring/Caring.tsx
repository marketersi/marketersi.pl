"use client";

import React, { useRef } from "react";
import style from "../team.module.css";
import { Row, Col, Container } from "react-bootstrap";
import {motion, Variants} from 'framer-motion'

const Caring = () => {

  const slideAnimationTop: Variants = {
    offscreen: {
      y: 100,
      opacity: 0.5,
    },
    onscreen: {
     y: 0,
     opacity: 1,
      transition: {
        type: 'ease',
        bounce: 0.4,
        duration: 2,
        delay: 0.5,
      },
    },
  };

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
              <motion.div
                className={style.caringCard}
                initial="offscreen"
                whileInView="onscreen"
                variants={slideAnimationTop}
              >
                <img src="/assets/images/zespol/responsible.svg" alt="" />
                <h4>Odpowiedzialni:</h4>
                <p>Działać uczciwie i dotrzymywać danego słowa.</p>
              </motion.div>
            </Col>
            <Col sm={4} className={style.cartTop}>
            <motion.div
                className={style.caringCard}
                initial="offscreen"
                whileInView="onscreen"
                variants={slideAnimationTop}
              >
                <img src="/assets/images/zespol/caring.svg" alt="" />
                <h4>Troskliwi::</h4>
                <p>
                  Zawsze dawać ciut więcej niż to, czego się od nas oczekuje.
                </p>
              </motion.div>
            </Col>
            <Col sm={4}>
            <motion.div
                className={style.caringCard}
                initial="offscreen"
                whileInView="onscreen"
                variants={slideAnimationTop}
              >
                <img src="/assets/images/zespol/special.svg" alt="" />
                <h4>Odpowiedzialni:</h4>
                <p>Działać uczciwie i dotrzymywać danego słowa.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Caring;
