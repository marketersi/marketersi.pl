import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./footer.module.css";
import Link from "next/link";

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
                  src="https://images.prismic.io/marketersi/Zn0rnpbWFbowe74p_Marketersi-logo.png?auto=format,compress"
                  alt="My Image"
                  width="100%"
                  height="auto"
                />
              </div>
              <div className={style.footerBrandLogo}>
                <Image
                  src="https://images.prismic.io/marketersi/Zok7Ex5LeNNTw2Za_Marketersi-2.png?auto=format,compress"
                  alt="My Image"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div className={style.footerCol}>
              <Row className="mb-sm-5">
                <Col sm={3} xs={6}>
                  <div className={style.footerRightMenu}>
                    <h3>Fajne marki</h3>
                    <Link href="/nazwa-dla-firmy">Nazwa dla firmy</Link>
                    <Link href="/projektowanie-logo">Projektowanie logo</Link>
                    {/* <Link href="/#">Identyfikacja spółki</Link> */}
                  </div>
                </Col>
                <Col sm={3} xs={6}>
                  <div
                    className={`${style.footerRightMenu} ${style.mobileRightMenu}`}
                  >
                    <h3>Sprawne strony</h3>
                    {/* <Link href="/#">Tworzenie stron</Link> */}
                    <Link href="/projektowanie-ux">Projektowanie UX</Link>
                    {/* <Link href="/#">Audyt strony www</Link> */}
                  </div>
                </Col>
                <Col sm={3} xs={6}>
                  <div className={style.footerRightMenu}>
                    <h3>Wydajny marketing</h3>
                    <Link href="/strategia-marketingowa">
                      Strategia marketingowa
                    </Link>
                    {/* <Link href="/#">Działania marketingowe</Link> */}
                    <Link href="/konsultacje">Konsultacja marketingu</Link>
                  </div>
                </Col>
                <Col sm={3} xs={6}>
                  <div
                    className={`${style.footerRightMenu} ${style.mobileRightMenu}`}
                  >
                    <h3>Przekonujące treści</h3>
                    <Link href="/tresci-sprzedazowe">Treści sprzedażowe</Link>
                    {/* <Link href="/#">Jakościowe artykuły</Link> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>
                  <div className={style.footerRightMenu}>
                    <h3>Marketersi</h3>
                    <div className={style.footerCennik}>
                      <Link href="/Zespol">Zespół</Link>
                      {/* <Link href="/#">Klienci</Link> */}
                      {/* <Link href="/#">Kariera</Link> */}
                      <Link href="/kontakt-marketersi">Kontakt</Link>
                      <Link href="/cennik" className={style.CennikBrn}>
                        Cennik
                      </Link>
                      {/* <Link href="/#">Realizacje</Link> */}
                    </div>
                  </div>
                </Col>
                <Col sm={9}>
                  <div className={style.footerRightMenu}>
                    <h3>Przydatne rzeczy</h3>
                    {/* <Link href="/#">
                      Badanie strony i marketingu przez ekspertów [Bezpłatne]
                    </Link> */}
                    <Link href="/czy-oplaca-sie-agencja-marketingowa">
                      Policz czy Ci się to opłaca?
                    </Link>
                    {/* <Link href="/#">Test skuteczności strony (Krótki)</Link> */}
                    {/* <Link href="/#">Konsultacja marketingu</Link> */}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className={style.copyright}>
            <div className={style.copyrightText}>
              <p>
                &copy; {currentYear} - marketersi.pl | Tak się robi marketing!
              </p>
            </div>
            <div className={style.copyrightMenu}>
              <p>
                <Link href="/#">Regulamin |</Link>
                <Link href="/#"> Polityka prywatnosci | </Link>
                <Link href="/#">Mapav</Link>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
