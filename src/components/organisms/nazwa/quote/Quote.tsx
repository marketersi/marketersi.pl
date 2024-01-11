import React from "react";
import styles from "./quote.module.css";
import { Col, Row } from "react-bootstrap";

const Quote = () => {
  return (
    <section className={styles.section}>
      <Row>
        <Col>
          <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/owocni-copywriter.png" />
        </Col>
        <Col>
          <div className={styles.containerWhite}>
            <p className={styles.title}>
              Świetna marka nie powstaje z <br />
              szablonu, czy z automatycznego <br /> generatora przypadkowych
              liter.
            </p>
            <p className={styles.subtitle}>
              W Owocnych wierzymy, że warto się trochę wysilić. To właśnie
              indywidualne, sumienne podejście odróżnia nasze prace od całej tej
              “generycznej konkurencji”. Świetne nazwy słychać z daleka!
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Quote;
