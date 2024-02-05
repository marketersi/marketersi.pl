import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./results.css";
import { useSelector } from "react-redux";

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
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { ResearchResult, howTestWorks } = screenData || {};
  const { PercentageCard } = ResearchResult || [];

  return (
    <section className="results-section">
      <h2 className="result-title">
        {/* Rezultaty badań */}
        {ResearchResult?.title}
      </h2>
      <p className="result-subtitle">
        {/* Klika wyników, które osiągnęli przedsiębiorcy na podstawie wniosków z
        naszych badań. */}
        {ResearchResult?.sub_title}
      </p>
      <Row>
        {PercentageCard?.map((e, i) => {
          return (
            <Col key={i}>
              <ResultsCard {...e} />
            </Col>
          );
        })}
      </Row>

      {/* how test works */}

      <div className="text-center free-test">
        <h2>
          {/* Jak działa bezpłatne badanie? */}
          {howTestWorks?.title}
        </h2>
        <div className="p-container ">
          {/* <p>
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
          </p> */}

          <p>{howTestWorks?.para1}</p>
          <p>{howTestWorks?.para2}</p>
        </div>
      </div>
    </section>
  );
};

export default Results;

const ResultsCard = ({ Percentage_value, title, website, category }) => {
  return (
    <>
      <Card className="results-card shadow">
        <h2>{Percentage_value}%</h2>
        <p>{title}</p>
      </Card>
      <div className="mt-3 text-center">
        <p>
          {website}
          <br />
          {category}
        </p>
      </div>
    </>
  );
};
