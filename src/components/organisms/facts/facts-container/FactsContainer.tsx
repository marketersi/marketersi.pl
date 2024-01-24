import React from "react";
import { Col, Row } from "react-bootstrap";
import { FACTS_DATA } from "./facts";
import "./factsContainer.css";
import FactsCard from "./FactsCard";
import { useSelector } from "react-redux";

const FactsContainer = () => {
  const { isLoading, screenData } = useSelector((state) => state.facts);

  return (
    <section className="fc_sec">
      <Row>
        {screenData?.factoCard?.map((e, i) => {
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
