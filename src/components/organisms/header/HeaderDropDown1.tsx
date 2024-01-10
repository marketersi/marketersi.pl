import React from "react";
import { Container, Col, Row, Image, Nav } from "react-bootstrap";
import style from "./header.module.css";
import Link from "next/link";

const HeaderDropDown1 = () => {
  return (
    <div>
      <div className={style.headerDrop1}>
        <Container>
          <Row>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Fajne marki</h3>
                <a href="/">Nazwa dla firmy</a>
                <Link href="/projektowanie-logo">Projektowanie logo</Link>
                <a href="/">Identyfikacja spółki</a>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Sprawne strony</h3>
                <a href="/">Tworzenie stron</a>
                <a href="/">Projektowanie UX</a>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Przykłady realizacji:</h3>
                <a href="/">Strony internetowe</a>
                <a href="/">Katalog realizacji logo</a>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Wydajny marketing</h3>
                <a href="/">Strategia marketingowa</a>
                <a href="/">Działania marketingowe</a>
                <a href="/">Konsultacja marketingu HIT</a>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Przekonujące treści</h3>
                <a href="/">Treści sprzedażowe</a>
                <a href="/">Jakościowe</a>
                <a href="/">artykuły</a>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Klienci i opinie</h3>
                <a href="/">Opinie klientów</a>
                <a href="/">Nasi klienci</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeaderDropDown1;
