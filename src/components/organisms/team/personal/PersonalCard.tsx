import React from 'react';
import style from '../team.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const PersonalCard = (props) => {
  const { image, name, designation, quate_one } = props;

  return (
    <Container>
      <Row>
        <Col>
          <div className={style.personalCard}>
<<<<<<< HEAD
            <Row className='align-items-center'>
=======
            <Row>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              <Col lg={3}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{designation}</p>
              </Col>
              <Col lg={9}>
<<<<<<< HEAD
                <h6>{quate_one}</h6>
=======
                <h6>
                  {quate_one}
                </h6>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalCard;
