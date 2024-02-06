import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";
import GoogleCard from "./GoogleCard";
import {
  ClientCarousel,
  CarouselContext,
} from "../../strategia-marketingowa/ClientCarouselNext";
import { useContext } from "react";

const SlideOne = () => {
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      <div className={style.googleReview}>
        <Row>
          <Col sm={8}>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.1ad8cd13.jpg&w=750&q=75"
              alt=""
            />
          </Col>
          <Col sm={4}>
            <GoogleCard />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <GoogleCard />
          </Col>
          <Col sm={4}>
            <GoogleCard />
          </Col>
          <Col sm={4}>
            <GoogleCard />
          </Col>
        </Row>
      </div>
    </>
  );
};
const SlideTwo = () => {
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      <div className={style.googleReview}>
        <Row>
          <Col sm={8}>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.1ad8cd13.jpg&w=750&q=75"
              alt=""
            />
          </Col>
          <Col sm={4}>
            <GoogleCard />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <GoogleCard />
          </Col>
          <Col sm={4}>
            <GoogleCard />
          </Col>
          <Col sm={4}>
            <GoogleCard />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default function GoogleReview() {
  const slides = [SlideOne, SlideTwo];
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      <div className={style.google}>
        <div className={style.opinionContainer}>
          <div className={style.opinionContent}>
            <h2>
              127 <span> pozytywnych opinii</span> <br />w Google- Dziękujemy!
            </h2>
            <div className={style.googleMenu}>
              <ul>
                <li>Sortuj</li>
                <li>
                  <div className={style.playBG}>
                    <img src="/assets/images/play_arrow.svg" alt="" />
                  </div>
                </li>
                <li className={style.googleHover}>
                  <p>Najnowsze</p>
                  <div className={style.hoverMenu}>
                    <a href="#">Najwyżej oceniane</a>
                    <a href="#">Najniżej oceniane</a>
                  </div>
                </li>
              </ul>
            </div>
            <ClientCarousel slides={slides} options={{ loop: true }} />
          </div>
        </div>
      </div>
    </>
  );
}
