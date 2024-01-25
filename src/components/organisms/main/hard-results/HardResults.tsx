"use client";

import React from "react";
import style from "../main.module.css";
import ReactPlayer from "react-player";
import { Container, Image, Row, Col } from "react-bootstrap";

const Entrepreneur = () => {
  return (
    <div>
      <Container>
        <div className={style.hardResult}>
          <div className={style.Content}>
            <h2 className={style.hardMB}>
              Nasz cel <br />
              jest prosty
            </h2>
            <h3 className={style.gradientBG}>- dostarczyć twarde rezultaty</h3>
            <img style={{margin: '0 0 50px'}} src="/assets/images/name.svg" alt="" />
            <p>
              Stworzyć skuteczne kampanie reklamowe i pokazać je właściwym
              ludziom we właściwym czasie. Proste?
            </p>
            <p>Proste, ale nie łatwe.</p>
          </div>

          <Row className="mb-5">
            <Col sm={6}>
              <h4>
                Możesz mieć dobrą firmę, fajne produkty i świetne usługi, ale
                jeśli nie przekonasz ludzi, by <span>kupili od Ciebie</span>-
                leżysz.
              </h4>
            </Col>
            <Col sm={6}>
              <ReactPlayer
                url="/assets/videos/Copywriting_f9kslo_1_vm8ypc.webm"
                playing={true}
                loop={true}
                width="100%"
                height="auto"
                autoplay={true}
              />
            </Col>
          </Row>
          <div className={style.Content}>
            <p>
              Zawartość materiałów reklamowych, takich jak strona z ofertą, ma
              większy wpływ na to, ile zarobisz niż cokolwiek innego. To
              najważniejszy element każdego marketingu.
            </p>
            <p>
              Mamy największą stronę internetową o copywritingu w Polsce -
              copywriting.pl i widzieliśmy już sytuację, w której lepsze teksty
              dawały 8 razy większe zyski.
            </p>
          </div>
          <Row className="mt-5 pt-5 mb-5 pb-5">
            <Col sm={7}>
              <ReactPlayer
                url="/assets/videos/Konwersja_dvdhzl.webm"
                playing={true}
                loop={true}
                width="100%"
                height="auto"
              />
            </Col>
            <Col sm={5}>
              <h4 className="text-end">
                Poprawa konwersji to
                <span>najszybszy sposób,</span> <br />
                by podwoić ilość <br /> zamówień bez <br /> zwiększania <br />{" "}
                budżetu na <br /> reklamy.
              </h4>
            </Col>
          </Row>

          <div className={style.Content}>
            <p>
              <span>Sekret brutalnej skuteczności tkwi w konwersji.</span>I nie
              chodzi tu o poprawę prędkości ładowania strony internetowej.
              Chodzi o rzetelne testowanie każdej obiecującej hipotezy testem
              A/B.
            </p>
            <p>
              W Owocnych uważnie projektujemy świat, do którego zapraszasz
              swoich nowych klientów. Pomyśl przez chwilę.
            </p>
            <p>
              Biznes prowadzi się prościej, gdy klient ufa firmie od pierwszego
              spojrzenia. Dojrzała marka łatwo wybija się przed całą
              „szablonową“ konkurencję.
            </p>
            <ReactPlayer
              url="/assets/videos/Marketing_szeptany_-_zauważalne_wyniki_qo4t3j.webm"
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <h2>
              Projektujemy marki, o których ludzie nie mogą przestać myśleć!
            </h2>
            <p>
              Świetne marki od zawsze przyciągają najlepszych pracowników,
              uwodzą klientów i napędzają zyski.
            </p>
            <ReactPlayer
              url="/assets/videos/Zespół_dzięki_któremu_zareklamujesz_twoją_markę_up2zxw.webm"
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <p>
              Kim jesteśmy, by mówić te rzeczy? Jesteśmy Owocni. Nasze kampanie
              przynoszą klientom przychody liczone w milionach euro (dosłownie!)
            </p>
            <p>
              Budujemy marketing klientów w Polsce, Niemczech, Włoszech, Anglii
              i Hiszpanii pod marką Hello Juicy.
            </p>
            <ReactPlayer
              url="/assets/videos/Zagraniczna_agencja_reklamowa_qbn7wq.webm"
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <p>
              Gdy masz doświadczenie z obserwacji tysięcy kampanii, wiesz co
              działa, co nie działa i co działa nawet lepiej. Nasi marketerzy
              cytowani są przez największe media w branży. Min. magazyn Forbes
              czy Marketing w Praktyce.
            </p>
            <ReactPlayer
              url="/assets/videos/Bajkowe_strony_internetowe_guzhlz.webm"
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <h3>
              Nasze wysokowydajne materiały edukacyjne cytowane są przez
              największe media w branży
            </h3>
            <h4 className={style.hardBottomContent}>
              Owocni eksperci cytowani są przez:
            </h4>
            <div className={`mb-5 pb-5  ${style.ratingLogoImg}`}>
              <Image
                src="/assets/images/logo-A.png"
                alt="rating image"
                width="auto"
                height="auto"
              />
              <Image
                src="/assets/images/logo-B.avif"
                alt="rating image"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entrepreneur;
