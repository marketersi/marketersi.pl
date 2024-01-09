import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className={style.footer}>
        <Container fluid>
          <div className={style.footerRow}>
            <div className={style.footerCol}>
              <div className={style.footerLogo}>
                <Image
                  src="/assets/images/logo.avif"
                  alt="My Image"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className={style.footerBrandLogo}>
                <Image
                  src="/assets/images/Logosy-Footer.svg"
                  alt="My Image"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className={style.copyright}>
                <div className={style.copyrightText}>
                <p>&copy; {currentYear} - Owocni.pl | Tak się robi marketing!</p>
                </div>
                <div className={style.copyrightMenu}>
                  <p><a href="/">Regulamin |</a>
                  <a href="/"> Polityka prywatnosci | </a>
                  <a href="/">Mapav</a></p>
                </div>
              </div>
            </div>
            <div className={style.footerCol}>
              <Row className="mb-5">
                <Col sm={3}>
                  <div className={style.footerRightMenu}>
                    <h3>Fajne marki</h3>
                    <a href="/">Nazwa dla firmy</a>
                    <a href="/">Projektowanie logo</a>
                    <a href="/">Identyfikacja spółki</a>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className={style.footerRightMenu}>
                    <h3>Sprawne strony</h3>
                    <a href="/">Tworzenie stron</a>
                    <a href="/">Projektowanie UX</a>
                    <a href="/">Audyt strony www</a>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className={style.footerRightMenu}>
                    <h3>Wydajny marketing</h3>
                    <a href="/">Strategia marketingowa</a>
                    <a href="/">Działania marketingowe</a>
                    <a href="/">Konsultacja marketingu</a>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className={style.footerRightMenu}>
                    <h3>Przekonujące treści</h3>
                    <a href="/">Treści sprzedażowe</a>
                    <a href="/">Jakościowe artykuły</a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>
                  <div className={style.footerRightMenu}>
                    <h3>Owocni</h3>
                    <a href="/">Zespół</a>
                    <a href="/">Klienci</a>
                    <a href="/">Kariera</a>
                    <a href="/">Kontakt</a>
                    <a href="/">Cennik</a>
                    <a href="/">Realizacje</a>
                  </div>
                </Col>
                <Col sm={9}>
                  <div className={style.footerRightMenu}>
                    <h3>Przydatne rzeczy</h3>
                    <a href="/">
                      Badanie strony i marketingu przez ekspertów [Bezpłatne]
                    </a>
                    <a href="/">Kalkulator zysku z nowej strony (ROI)</a>
                    <a href="/">Test skuteczności strony (Krótki)</a>
                    <a href="/">Konsultacja marketingu</a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
