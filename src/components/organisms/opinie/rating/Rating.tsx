import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Rating = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const ratings = screenData.Ratings || {};

  return (
    <>
      <div className={style.rating}>
        <div className={style.ratingContainer}>
          <div className={style.faceMotion}>
            <img className={style.face} src={ratings.animated_image} alt="" />
            {/* <img className={style.eyes} src={ratings.banner_image} alt="" /> */}
          </div>
          <div className={style.ratingBlackCard}>
            <Row>
              <Col sm={6}>
                <img src={ratings.banner_image} alt="" />
              </Col>
              <Col sm={6}>
                <div className={style.ratingCardContent}>
                <h6>{ratings?.paragraph_1}</h6>
                <p>{ratings?.paragraph_2}</p>
                <p>{ratings?.paragraph_3}</p>
                </div>
              </Col>
            </Row>
            <div className={style.topBtn}>
              <h4>{ratings.title}</h4>
              <p>{ratings.highlighted_text}</p>
            </div>
            <p style={{ margin: "30px 0 0 " }}>{ratings.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
