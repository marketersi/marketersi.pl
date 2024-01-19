import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./results.css";

const cardData = [
  {
    value: 293,
    text: "Wzrost ruchu na stronie",
    name: "KocieKoszulki.pl",
    type: "eCommerce store",
  },
  {
    value: 108,
    text: "Większa sprzedaż",
    name: "Red-Rocket.pl",
    type: "Producent Kamperów",
  },
  {
    value: 65,
    text: "Wyższa konwersja",
    name: "Pragmile.com",
    type: "Softwarehouse",
  },
  {
    value: 73,
    text: "Niższy koszt reklam",
    name: "Dlabs.ai",
    type: "Medycyna B2B",
  },
];

const Results = () => {
  return (
    <section className="results-section">
      <h2 className="result-title">Rezultaty badań</h2>
      <p className="result-subtitle">
        Klika wyników, które osiągnęli przedsiębiorcy na podstawie wniosków z
        naszych badań.
      </p>
      <Row>
        {cardData.map((e, i) => {
          return (
            <Col key={i}>
              <ResultsCard {...e} />
            </Col>
          );
        })}
      </Row>

      <div className="text-center free-test">
        <h2>Jak działa bezpłatne badanie?</h2>
        <div className="p-container ">
          <p>
            Zadamy Ci kilka pytań na temat Twojej działalności, celów
            biznesowych i budżety marketingowe, aby dowiedzieć się czy nasza
            współpraca ma sens.
          </p>
          <p>
            Jeśli uznamy, że będziemy dla Ciebie świetnym partnerem,
            przeanalizujemy Twoją stronę internetową i Twój marketing. Nasi
            eksperci będą szukać możliwości wprowadzenia ulepszeń, aby zwiększyć
            ruch i konwersje.
          </p>

          <p>
            Nagramy wideo-przegląd, aby jak najlepiej wyjaśnić Ci, które części
            Twojej strony internetowej i które kanały marketingowe mogłyby
            najbardziej skorzystać z ulepszeń.
          </p>

          <p>
            Co naszym zdaniem pomoże w osiągnięciu celów związanych z ruchem na
            stronie, leadami i sprzedażą. Oczywiście przedstawimy też
            niezobowiązujący plan działania.
          </p>

          <p className="my-5">
            <span className="bg-white">
              <strong>Recenzja jest całkowicie bezpłatna.</strong>
            </span>{" "}
            Jeśli po zapoznaniu się z recenzją zdecydujesz się zostać naszym
            klientem, pomożemy Ci wdrożyć wszystkie zalecenia.
          </p>

          <p>
            Jeśli nie zdecydujesz się na skorzystanie z naszych usług, ale
            będziesz w pełni zadowolony ze swojej recenzji, możesz jej używać
            tak jak sobie zażyczysz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;

const ResultsCard = ({ text, value, name, type }) => {
  return (
    <>
      <Card className="results-card shadow">
        <h2>{value}%</h2>
        <p>{text}</p>
      </Card>
      <div className="mt-3 text-center">
        <p>
          {name}
          <br />
          {type}
        </p>
      </div>
    </>
  );
};
