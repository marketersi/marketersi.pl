"use client";

import React from "react";
import style from "../team.module.css";
import { Carousel, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

const Review = () => {
  return (
    <>
      <div className={style.teamReview}>
        <div className={style.card}>
          <div className={style.whiteCard}>
            <Carousel indicators={false}>
              <Carousel.Item>
                <Carousel.Caption>
                  <Row>
                    <Col sm={3}>
                      <img
                        src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcarmik.77a3358f.png&w=384&q=75"
                        alt=""
                      />
                    </Col>
                    <Col sm={9}>
                      <h3>
                        „Na mobilną jadłodajnię <br />
                        postawiłem oszczędności. <br />
                        Owocni nie mieli wyjścia,
                        <br />
                        <span>to musiało się nam udać.</span>
                      </h3>
                      <Row>
                        <Col sm={3}>
                          <ReactPlayer
                            url="https://owocni.pl/assets/nasi-klienci/video/Carmnik.mp4"
                            playing={true}
                            loop={true}
                            autoplay={true}
                            width="100%"
                            height="auto"
                            className={style.Video}
                          />
                        </Col>
                        <Col sm={9}>
                          <div className={style.ReviewStar}>
                            <div>
                              <h6>Przemek Majewski</h6>
                              <p>Software house</p>
                            </div>
                            <div></div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className={style.grayCard}></div>
        </div>
      </div>
    </>
  );
};

export default Review;
