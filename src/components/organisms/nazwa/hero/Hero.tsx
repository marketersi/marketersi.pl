import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <Row>
        <Col md={6}>
          <div>
            <h1 className={styles.topBannerTitle}>
              <span>Dobry biznes</span>
              <br />
              <span>zaczyna się od</span>
              <br />
              <span>dobrej nazwy.</span>
            </h1>
            <h2 className={styles.topBannerSubtitle}>
              <span>Projektujemy nazwy, które mówią wyraźnie.</span>
              <br />
              <span> Robią dobre wrażenie i zapadają w pamięci.</span>
            </h2>
            <h2 className={styles.topBannerSubtitle}>
              <span>Dajemy 100% gwarancji satysfakcji.</span>
              <br />
              <span>- Bez limitu propozycji.</span>
            </h2>

            <button className={styles.bannerBtn}>
              Wyślijcie mi niezobowiązującą ofertę
            </button>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <video width="100%" height="auto" autoPlay loop muted>
              <source
                src="https://www.copywriting.pl/files/resources/Nazwy-landing.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
