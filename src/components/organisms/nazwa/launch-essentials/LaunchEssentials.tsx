import React from "react";
import styles from "./essentials.module.css";
import { Col, Row } from "react-bootstrap";

const LaunchEssentials = () => {
  return (
    <section>
      <Row>
        <Col>
          <h3>Co dokładnie otrzymasz?</h3>
          <h5>
            Wszystko to, czego potrzebujesz, by <br /> rozkręcić nową markę na
            dobre.
          </h5>
          <p>Każdy projekt zawiera:</p>

          <ul>
            <li>Dobrze brzmiącą nazwę, z której będziesz dumny.</li>
            <li>Propozycję wolnej polskiej domeny spójnej z nazwą.</li>
            <li>Slogan reklamowy wspomagający zapamiętanie nazwy.</li>
            <li>Pełne prawa autorskie do wybranej nazwy i sloganu.</li>
          </ul>

          <p>
            Nawet, jeśli nie wiesz, jakiego rodzaju nazwy firmy oczekujesz,
            <br />
            to na pewno ją rozpoznasz, gdy zobaczysz ją wśród propozycji.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/naming-zastrzezenie-nazwy-firmy.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>100% gwarancji satysfakcji.</div>
          <p>
            Nie kończymy pracy bez uzyskania Twojego pełnego zadowolenia. <br />
            Przygotowujemy kolejne propozycje – bez ukrytych kosztów.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default LaunchEssentials;
