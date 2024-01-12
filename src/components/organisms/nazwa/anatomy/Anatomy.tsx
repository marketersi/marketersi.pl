import React from "react";
import styles from "./anatomy.module.css";
import { Row, Col } from "react-bootstrap";

const Anatomy = () => {
  return (
    <section className={styles.section}>
      <Row>
        <Col>
          <h2 className={styles.title}>
            Owocna nazwa pomoże Ci <br />
            rozwinąć firmę szybciej.
          </h2>
          <p className={styles.subtitle}>
            Świetne marki od zawsze przyciągają najlepszych <br />
            pracowników, uwodzą klientów i napędzają zyski.
          </p>

          <p className={styles.subtitle2}>
            Pomożemy Ci stworzyć świetną markę. Zaprojektujemy nazwę,
            <br /> która wyśle czytelny komunikat i wywoła skojarzenia,
            <br /> które będą miały duży wpływ na decyzje klientów.
          </p>

          <p className={styles.subtitleWithImg}>
            <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/Anatomia-tworzenia-nazw.png" />
            <br />
            owocnych nazw
          </p>

          <div className={styles.anatomyImgContainer}>
            <img
              className={styles.anatomyImg}
              src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/Tworzenie-nazwy-firmy.jpg"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Anatomy;
