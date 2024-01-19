import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";

const Review = () => {
  return (
    <>
      <div className={style.review}>
        <div className={style.opinionContainer}>
          <Row>
            <Col sm={4}>
              <div className={style.cardReview}>
                <img
                  className={style.reviewMainImg}
                  src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5a.f65a0a00.png&w=384&q=75"
                  alt=""
                />
                <img
                  className={style.reviewLogoImg}
                  src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5b.13bba4d4.png&w=256&q=75"
                  alt=""
                />
                <div className={style.star}>
                  <img
                    src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
                    alt=""
                  />
                  <div>
                    <h6>Anna i Maciej Dobosz</h6>
                    <p>stomatologia</p>
                  </div>
                </div>
                <p>
                    „Owocni zrobili nam takie projekty, jakie chcieliśmy mieć,{" "}
                    <span>i jakie podobają się</span> naszym pacjentom. Teraz to
                    my jesteśmy 'tą firmą od ładnej strony'.”
                  </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.cardReview}>
                <img
                  className={style.reviewMainImg}
                  src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5a.f65a0a00.png&w=384&q=75"
                  alt=""
                />
                <img
                  className={style.reviewLogoImg}
                  src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5b.13bba4d4.png&w=256&q=75"
                  alt=""
                />
                <div className={style.star}>
                  <img
                    src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
                    alt=""
                  />
                  <div>
                    <h6>Anna i Maciej Dobosz</h6>
                    <p>stomatologia</p>
                  </div>
                </div>
                <p>
                    „Owocni zrobili nam takie projekty, jakie chcieliśmy mieć,{" "}
                    <span>i jakie podobają się</span> naszym pacjentom. Teraz to
                    my jesteśmy 'tą firmą od ładnej strony'.”
                  </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.cardReview}>
                <img
                  className={style.reviewMainImg}
                  src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5a.f65a0a00.png&w=384&q=75"
                  alt=""
                />
                <img
                  className={style.reviewLogoImg}
                  src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5b.13bba4d4.png&w=256&q=75"
                  alt=""
                />
                <div className={style.star}>
                  <img
                    src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
                    alt=""
                  />
                  <div>
                    <h6>Anna i Maciej Dobosz</h6>
                    <p>stomatologia</p>
                  </div>
                </div>
                <p>
                    „Owocni zrobili nam takie projekty, jakie chcieliśmy mieć,{" "}
                    <span>i jakie podobają się</span> naszym pacjentom. Teraz to
                    my jesteśmy 'tą firmą od ładnej strony'.”
                  </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Review;
