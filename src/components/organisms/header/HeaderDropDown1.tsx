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
                <h3>BĄDŹ widoczny</h3>
                <Link href="/tworzenie-stron-i-design-ux">
                  Tworzenie stron i design UX
                </Link>
                <Link href="/video-marketing">
                  Video marketing
                </Link>
                <Link href="/kreatywny-montaz-wideo">
                  Kreatywny montaż wideo
                </Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>ZOSTAŃ zapamiętany</h3>
                <Link href="/tresci-i-hasla-sprzedazowe">
                  Treści i hasła sprzedażowe
                </Link>
                <Link href="/projektowanie-logo">Projektowanie logo</Link>
                <Link href="/nazwa-dla-firmy">Nazwa dla firmy</Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>ODBLOKUJ zyski</h3>
                <Link href="/strategia-marketingowa">
                  Strategia marketingowa
                </Link>
                <Link href="/konsultacja-marketingu">Konsultacja marketingu</Link>
                <Link href="/">Marketing międzynarodowy</Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>ŻADNE zapytanie nie ginie</h3>
                <Link href="/asystent-ai-do-odbierania-telefonow">
                  Asystent AI do odbierania telefonów
                </Link>
                <Link href="/wizytowka-google">Wizytówka Google w abonamencie</Link>
                <Link href="/test-za-0-zl">Test za 0 zł: ile telefonów ginie</Link>
              </div>
            </Col>
            {/* <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Wydajny marketing</h3>
                <Link href="/strategia-marketingowa">
                  Strategia marketingowa
                </Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Przekonujące treści</h3>
                
              </div>
            </Col> */}

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeaderDropDown1;
