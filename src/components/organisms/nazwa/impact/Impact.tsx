import React from "react";
import styles from "./impact.module.css";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const Impact = () => {
  return (
    <section className={styles.section}>
      <Row>
        <Col>
          <p>
            Już za chwilę nazwa stanie się centrum marketingu Twojej firmy.
            <br />
            Będzie wpływać na to, jak cię widzą klienci, pracownicy i partnerzy.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/statystyki-projektowanie-nazw.png" />
        </Col>
        <Col>
          <p>
            Nazwy jako aktywa niematerialne stanowią średnio <br /> 3/4 całej
            wartości firmy. Warto wybrać je mądrze.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Dlaczego jedne nazwy chwytają, a inne zostają niezauważone?
            <br /> Jak wywołać właściwe emocje, zdobyć zaufanie i sympatię?
            <br />
            To tylko niektóre części układanki, którą pomożemy Ci rozwiązać.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Nasz poradnik dotyczący mądrego <br /> projektowania nazw dla
            właścicieli <br /> małych firm stał się tak popularny, <br /> że
            cytuje go cała fachowa prasa:
          </p>
          <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/Logotypy-prasa.png" />

          <p>
            Jeśli chcesz możesz pobrać darmowy egzemplarz. <br />
            <Link href="#" target="_blank">
              Kliknij tutaj (PDF)
            </Link>
          </p>
        </Col>
        <Col>
          <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/ksiazka-owocni-fajna-nazwa.jpg" />
        </Col>
      </Row>
    </section>
  );
};

export default Impact;
