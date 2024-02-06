import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";

const Personally = () => {
  return (
    <>
      <div className={style.Personally}>
        <div className={style.personallyContainer}>
          <div className={style.personallyCard}>
            <Row>
              <Col sm={4}>
                <img className={style.personallMan} src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMariusz-Slowik-Owocni%20(1).0c24cf4e.jpg&w=750&q=75" alt="" />
                <img className={style.personallHand} src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDlon.b654ef95.png&w=828&q=75" alt="" />
              </Col>
              <Col sm={8}>
                <h2>
                  W Owocnych <br />
                  Twoja opina ma <br />
                  osobiste znaczenie!
                </h2>
                <p>Hej! Tu Mariusz - założyciel marki.</p>
                <p>
                  Wierzę, że możliwość bezpośredniego kontaktu z właścicielem
                  mocno podnosi standard usług w każdej firmie.
                </p>
                <p>
                  Choć dziś zarządzanie firmą nie jest już moich rękach, to
                  wciąż czuję osobistą odpowiedzialność za jakość jej usług.
                </p>
                <div className={style.contact}>
                    <h4>Kontakt prywatny.</h4>
                    <p>Mariusz Słowik</p>
                    <p>Tel. 531 521 501</p>
                    <a href="mailto:">Napisz wiadomość</a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personally;
