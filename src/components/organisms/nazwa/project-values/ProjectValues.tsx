import React from "react";
import { Col, Row } from "react-bootstrap";

const ProjectValues = () => {
  return (
    <section>
      <Row>
        <Col>
          <h1>Jak wyceniamy projekty?</h1>
          <p>
            Cały proces zamkamy w rozsądnej cenie dla małych firm. <br /> Każdy
            projekt jest inny. Każdy wyceniamy indywidualnie, <br /> elastycznie
            i przyjaźnie. Tylko jakość nie podlega negocjacji.
          </p>
          <div>
            <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/agencja-namingowa-wierzymy.jpg" />
            <p>90% pracy wykonamy za 50% ceny.</p>
          </div>
          <p>
            Drugą połowę rozliczymy, gdy będziesz w pełni zadowolony ze
            wszystkich efektów naszej pracy.
          </p>

          <div>
            <h1>Przykłady realizacji krok po kroku</h1>
            <p>
              Jak przebiega owocny proces? Poznaj ciekawe historie naszych
              klientów.
            </p>
          </div>
          <div>
            <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/wymyslanie-nazw-iglar.jpg" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ProjectValues;
