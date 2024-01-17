import React from "react";
import { Col, Row } from "react-bootstrap";
import { FACTS_DATA } from "./facts";
import "./factsContainer.css";
import FactsCard from "./FactsCard";

const FactsContainer = () => {
  return (
    <section className="fc_sec">
      <Row>
        {FACTS_DATA.map((e, i) => {
          return (
            <Col key={e.id} md={6}>
              <FactsCard {...e} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default FactsContainer;
