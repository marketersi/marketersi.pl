import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './results.css';
import { useSelector } from 'react-redux';

const Results = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { ResearchResult, howTestWorks } = screenData || {};
  const { PercentageCard } = ResearchResult || [];

  return (
    <section className="results-section">
      {/* <h2 className="result-title">{ResearchResult?.title}</h2> */}
      <h2 className="result-title">Realne rezultaty</h2>
      <p className="result-subtitle">{ResearchResult?.sub_title}</p>
      <Row>
        {PercentageCard?.map((e, i) => {
          return (
            <Col lg={3} sm={6} key={i}>
              <ResultsCard {...e} />
            </Col>
          );
        })}
      </Row>

      <div className="text-center free-test">
        {/* <h2>{howTestWorks?.title}</h2> */}
        <div className='SectionTitle'>Na czym polega bezpłatne badanie?</div>
        <div className="p-container">
          {/* <p>{howTestWorks?.para1}</p>
          <p>{howTestWorks?.para2}</p>
          <p>{howTestWorks?.para3}</p>
          <p>{howTestWorks?.para4}</p>
          <p>{howTestWorks?.para5}</p>
          <p>{howTestWorks?.para6}</p> */}
            <p>Twój biznes zasługuje na więcej <br className='mobileBR' />niż tylko obecność w sieci – <br className='mobileBR' />powinien przyciągać klientów <br className='mobileBR' />i generować realne wyniki. <span className='mobileP'>Czy w pełni wykorzystujesz jego potencjał? Nasze bezpłatne badanie pomoże Ci to sprawdzić.</span>
            </p>
          
          <p>Najpierw analizujemy Twoją działalność, cele biznesowe i strategię marketingową, aby wskazać, co działa, a gdzie tkwi niewykorzystany potencjał. <span className='mobileP'>Następnie nasi eksperci przeprowadzą szczegółowy audyt – zarówno Twojej strony internetowej, jak i działań marketingowych – pod kątem skuteczności w budowaniu widoczności, pozyskiwaniu klientów i zwiększaniu sprzedaży.</span></p>


          <p>Otrzymasz spersonalizowany raport oraz wideo-przegląd z jasnymi rekomendacjami, które pomogą Ci usprawnić działania, zoptymalizować strategię i maksymalnie zwiększyć efektywność Twojej firmy.
          </p>
          
          <p>Masz pełną swobodę – możesz wdrożyć wskazówki samodzielnie lub skorzystać z naszej pomocy. <span className='mobileP'>To nie tylko badanie, ale gotowy plan działania, który może przełożyć się na realne wyniki.</span></p>
          
          <p>Badanie jest w 100% darmowe i poufne.</p>

          <p>Sprawdź, jak możemy Ci pomóc. Nasi eksperci oferują rozwiązania oparte na dogłębnej wiedzy i doświadczeniu, które są doceniane przez liderów branży i prestiżowe media.
          </p>
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
      <div className="mt-3 text-center mb-lg-0  mb-5">
        <p>
          {website}
          <br />
          {category}
        </p>
      </div>
    </>
  );
};
