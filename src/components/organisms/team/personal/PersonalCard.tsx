import React from 'react';
import style from '../team.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const PersonalCard = (props) => {
  const { imageSrc, name, role, description } = props;

  return (
    <Container>
      <Row>
        <Col>
          <div className={style.personalCard}>
            <Row>
              <Col sm={3}>
                <img src={imageSrc} alt={name} />
                <h4>{name}</h4>
                <p>{role}</p>
              </Col>
              <Col sm={9}>
                <h6>
                  {description}
                </h6>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalCard;
