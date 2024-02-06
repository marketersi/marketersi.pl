import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const Question14 = () => {
  return (
    <>
    <div className="question_14">
      <h2>Mamy to!</h2>
      <p>
        Zapoznamy się z Twoją sprawą i odezwiemy się. Wierzymy, że będziemy
        dobrym partnerem dla sytuacji w której znajduje się Twoja firma
      </p>
      
       <h6> <span>Jeśli tak.</span> Zarezerwujemy dla Ciebie godzinę pracy wysokiej klasy
        specjalisty.</h6>
        <h6> <span>Jeśli nie.</span> Wyślemy Ci wartościowe materiały do realizacji we
        własnym zakresie.</h6>
    </div>
    <div className="marketing_book">
    <Row>
    <Col sm={6}>
      <img
        src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMarketing-cyfrowy.c1c3e39a.jpg&w=750&q=75"
        alt=""
      />
    </Col>
    <Col>
      <h3>
        W ramach podziękowań mamy dla Ciebie przewodnik pełen
        najefektywniejszych strategii reklamowych dla firm.
      </h3>
      <div>
        <div className="zh_next_btn_container">
          <motion.button
            className="zh_next_btn"
            whileHover={{ translateY: 5 }}
          >
            Pobierz teraz
          </motion.button>
          <Link href="/">
            <motion.button
              className="zh_preview_btn"
              whileHover={{ translateY: 5 }}
            >
              Poznaj Owocnych
            </motion.button>
          </Link>
        </div>
        <div className="zh_next_btn_container">
          
        </div>
      </div>
    </Col>
  </Row>
    </div>
    </>
  );
};

export default Question14;
