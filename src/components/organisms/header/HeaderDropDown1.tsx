import React from 'react';
import { Container, Col, Row, Image, Nav } from 'react-bootstrap';
import style from './header.module.css';
import Link from 'next/link';

const HeaderDropDown1 = () => {
  return (
    <div>
      <div className={style.headerDrop1}>
        <Container>
          <Row>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Fajne marki</h3>
                <Link href="/nazwa-dla-firmy">Nazwa dla firmy</Link>
                <Link href="/projektowanie-logo">Projektowanie logo</Link>
                <Link href="/Kreatywny-montaz-video">
                  Kreatywny montaż video
                </Link>
                <Link href="/profesjonalne-nagrywanie-filmow">
                  Profesjonalne nagrywanie filmów
                </Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Sprawne strony</h3>
                {/* <a href="/">Tworzenie stron</a> */}
                <Link href="/projektowanie-ux">Projektowanie UX</Link>
              </div>
            </Col>
            {/* <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Przykłady realizacji:</h3>
                <a href="/">Strony internetowe</a>
                <a href="/">Katalog realizacji logo</a>
              </div>
            </Col> */}
          </Row>
          <Row className="mt-4">
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Wydajny marketing</h3>
                {/* <a href="#">Strategia marketingowa</a> */}
                <Link href="/strategia-marketingowa">
                  Strategia marketingowa
                </Link>
                {/* <a href="/">Działania marketingowe</a> */}
                {/* <a href="/">Konsultacja marketingu HIT</a> */}
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Przekonujące treści</h3>
                <Link href="/tresci-sprzedazowe">Treści sprzedażowe</Link>
                {/* <a href="/">Jakościowe</a>
                <a href="/">artykuły</a> */}
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Klienci i opinie</h3>
                <Link href="/marketersi-opinie">Opinie klientów</Link>
                {/* <a href="/">Nasi klienci</a> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeaderDropDown1;
