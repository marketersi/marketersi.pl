import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";

const Rating = () => {
  return (
    <>
      <div className={style.rating}>
        <div className={style.ratingContainer}>
          <div className={style.faceMotion}>
          <img className={style.face}
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSmiley1.c4ad8d4d.png&w=640&q=100"
            alt=""
          />
          <img className={style.eys}
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSmiley-oczy.e0329c27.png&w=640&q=100"
            alt=""
          />
          </div>
          <div className={style.ratingBlackCard}>
            <Row>
              <Col sm={6}>
                <img
                  src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frc.f68d6b7c.png&w=640&q=75"
                  alt=""
                />
              </Col>
              <Col sm={6}>
                <h6>Międzynarodowy raport badania opinii</h6>
                <p>10 najlepszych agencji reklamowych w Polsce.</p>
                <p>Ranking na podstawie realnych opinii w Google.</p>
              </Col>
            </Row>
            <div className={style.topBtn}>
                <h4>Owocni</h4>
                <p>TOP 10 Poland</p>
            </div>
            <p style={{margin: '30px 0 0 '}}>Pod uwagę zostały wzięte firmy z Polski z największą liczbą opinii oraz najwyższą średnią oceną według opinii klientów. Wszystkim agencjom serdecznie gratulujemy i życzymy dalszych sukcesów.   </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Rating;
