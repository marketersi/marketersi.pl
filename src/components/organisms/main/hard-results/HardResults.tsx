"use client";

import React from "react";
import style from "../main.module.css";
import ReactPlayer from "react-player";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Entrepreneur = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section4, section5, section6, section7 } =
    imageswithdescription || {};

  return (
    <div>
      <Container>
        <div className={style.hardResult}>
          <div className={style.Content}>
            <h2 className={style.hardMB}>
              {/* Nasz cel <br />
              jest prosty */}
              {section4?.title}
            </h2>
            <h3 className={style.gradientBG}>- {section4?.subtitle}</h3>
            <img
              style={{ margin: "0 0 50px" }}
              // src="/assets/images/name.svg"
              src={section4?.image_url}
              alt=""
            />
            <p>
              {/* Stworzyć skuteczne kampanie reklamowe i pokazać je właściwym
              ludziom we właściwym czasie. Proste? */}
              {section4?.paragraph_1}
            </p>
            <p>
              {/* Proste, ale nie łatwe. */}
              {section4?.paragraph_2}
            </p>
          </div>

          <Row className="mb-5">
            <Col sm={6}>
              <h4>
                {/* Możesz mieć dobrą firmę, fajne produkty i świetne usługi, ale
                jeśli nie przekonasz ludzi, by <span>kupili od Ciebie</span>-
                leżysz. */}
                {section5?.quote}
              </h4>
            </Col>
            <Col sm={6}>
              <ReactPlayer
                // url="/assets/videos/Copywriting_f9kslo_1_vm8ypc.webm"
                url={section5?.video_url}
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
              {/* Zawartość materiałów reklamowych, takich jak strona z ofertą, ma
              większy wpływ na to, ile zarobisz niż cokolwiek innego. To
              najważniejszy element każdego marketingu. */}
              {section5?.paragraph_1}
            </p>
            <p>
              {/* Mamy największą stronę internetową o copywritingu w Polsce -
              copywriting.pl i widzieliśmy już sytuację, w której lepsze teksty
              dawały 8 razy większe zyski. */}
              {section5?.paragraph_2}
            </p>
          </div>
          <Row className="mt-5 pt-5 mb-5 pb-5">
            <Col sm={7}>
              <ReactPlayer
                // url="/assets/videos/Konwersja_dvdhzl.webm"
                url={section6?.video_url}
                playing={true}
                loop={true}
                width="100%"
                height="auto"
              />
            </Col>
            <Col sm={5}>
              <h4 className="text-end">
                {/* Poprawa konwersji to
                <span>najszybszy sposób,</span> <br />
                by podwoić ilość <br /> zamówień bez <br /> zwiększania <br />{" "}
                budżetu na <br /> reklamy. */}
                {section6?.quote}
              </h4>
            </Col>
          </Row>

          <div className={style.Content}>
            <p>
              <span>{section6?.subtitle}</span>
              {/* I nie chodzi tu o poprawę
              prędkości ładowania strony internetowej. Chodzi o rzetelne
              testowanie każdej obiecującej hipotezy testem A/B. */}
              {section6?.paragraph_1}
            </p>
            <p>
              {/* W Owocnych uważnie projektujemy świat, do którego zapraszasz
              swoich nowych klientów. Pomyśl przez chwilę. */}
              {section6?.paragraph_2}
            </p>
            <p>
              {/* Biznes prowadzi się prościej, gdy klient ufa firmie od pierwszego
              spojrzenia. Dojrzała marka łatwo wybija się przed całą
              „szablonową“ konkurencję. */}
              {section6?.paragraph_3}
            </p>
            <ReactPlayer
              // url="/assets/videos/Marketing_szeptany_-_zauważalne_wyniki_qo4t3j.webm"
              url={section7?.video_url_1}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <h2>
              {/* Projektujemy marki, o których ludzie nie mogą przestać myśleć! */}
              {section7?.title}
            </h2>
            <p>
              {/* Świetne marki od zawsze przyciągają najlepszych pracowników,
              uwodzą klientów i napędzają zyski. */}
              {section7?.paragraph_1}
            </p>
            <ReactPlayer
              // url="/assets/videos/Zespół_dzięki_któremu_zareklamujesz_twoją_markę_up2zxw.webm"
              url={section7?.video_url_3}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <p>
              {/* Kim jesteśmy, by mówić te rzeczy? Jesteśmy Owocni. Nasze kampanie
              przynoszą klientom przychody liczone w milionach euro (dosłownie!) */}
              {section7?.paragraph_2}
            </p>
            <p>
              {/* Budujemy marketing klientów w Polsce, Niemczech, Włoszech, Anglii
              i Hiszpanii pod marką Hello Juicy. */}
              {section7?.paragraph_3}
            </p>
            <ReactPlayer
              // url="/assets/videos/Zagraniczna_agencja_reklamowa_qbn7wq.webm"
              url={section7?.video_url_4}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <p>
              {/* Gdy masz doświadczenie z obserwacji tysięcy kampanii, wiesz co
              działa, co nie działa i co działa nawet lepiej. Nasi marketerzy
              cytowani są przez największe media w branży. Min. magazyn Forbes
              czy Marketing w Praktyce. */}

              {section7?.paragraph_4}
            </p>
            <ReactPlayer
              // url="/assets/videos/Bajkowe_strony_internetowe_guzhlz.webm"
              url={section7?.video_url_5}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              autoplay={true}
            />
            <h3>
              {/* Nasze wysokowydajne materiały edukacyjne cytowane są przez
              największe media w branży */}
              {section7?.bottom_title}
            </h3>
            <h4 className={style.hardBottomContent}>
              {/* Owocni eksperci cytowani są przez: */}
              {section7?.quoted_title}
            </h4>
            <div className={`mb-5 pb-5  ${style.ratingLogoImg}`}>
              <Image
                // src="/assets/images/logo-A.png"
                src={section7?.image_url_1}
                alt="rating image"
                width="auto"
                height="auto"
              />
              <Image
                // src="/assets/images/logo-B.avif"
                src={section7?.image_url_2}
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
