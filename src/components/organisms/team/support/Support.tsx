import React from "react";
import style from "../team.module.css";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { Col, Row } from "react-bootstrap";
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const Support = () => {
  
  const { isLoading, screenData } = useSelector((state) => state.team);
  const {  section2 } = screenData;

  return (
    <>
<<<<<<< HEAD
      <section className="container">
      <Row className={style.Support}>
        <Col md={7} className={style.teamContent}>
          <h4>
          Każdy projekt <br/>realizujemy kompleksowo.
          </h4>
          
        </Col>
        <Col md={5} className={style.imagebox}>
          <img src={section2?.section_two_image} alt="" />

        </Col>
      </Row>
      </section>
=======
      <div className={style.Support}  style={{ backgroundImage: `url(${section2?.section_two_image})` }}>
        <div className={style.teamContent}>
          <h4>
          {section2?.section_two_title}
          </h4>
          <p style={{marginTop: '100px'}}>
            <span>{section2?.section_two_subtitle}</span>
           {section2?.section_two_para}
          </p>
        </div>
      </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </>
  );
};

export default Support;
