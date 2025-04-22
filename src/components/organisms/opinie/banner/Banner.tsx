import React from "react";
import style from "../opinie.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Banner = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const banner = screenData.Banner || {};

  return (
    <>
      <div className={style.opinionBanner}>
        <Container className="customContainer">
          <div className="bannerflex">
            <div className="customWidth">
              <div className={style.opinionContent}>
                {/* <h1>{banner.title}</h1> */}
                <h1>Opinie <br />klientów  <br />o Marketersi.pl</h1>
              </div>
            </div>
            <div className="customWidth2">
            <img
                className={style.opinionBnnaerImg}
                src={banner.image_2}
                alt=""
              />
              
            </div>
            <div className="customWidth3">
              <img src={banner.image_1} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
