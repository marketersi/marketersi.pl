"use client";

import React from "react";
import style from "../main.module.css";
import ReactPlayer from "react-player";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const Entrepreneur = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section2, section3 } = imageswithdescription || {};

  return (
    <div>
      <Container>
        <div className={style.numbers}>
          <div className={style.Content}>
            <h2>
              {/* Co nas <br />
              wyróżnia?
              <br />
              <span>-Proste liczby!</span> */}
              {section2?.title}
            </h2>
            <p>
              {/* Czym różnimy się od innych? Można to sprowadzić do jednego: dajemy
              klientom duuużo większy zysk z inwestycji w marketing niż inne
              agencje reklamowe. */}
              {section2?.paragraph_1}
            </p>
            <p>
              {/* Pracownicy agencji marketingowych często mówią niezrozumiałym
              językiem. Wyświetlenia, kliknięcia, CTR, CPC, CPM i całe to BHP. */}
              {section2?.paragraph_2}
            </p>
            <h4>
              {/* Nas interesują <span>proste liczby.</span> */}
              {section2?.subtitle}
            </h4>
            <p className={style.numberMB}>
              {/* - Ile razy zadzwonił Twój telefon? */}
              {section2?.line_1}
            </p>
            <p className={style.numberMB}>
              {/* - Ile płacisz za pozyskanie klienta? */}
              {section2?.line_2}
            </p>
            <p>
              {/* - Ile dokładnie produktów sprzedajesz? */}
              {section2?.line_3}
            </p>
            <p>
              {/* Nasz biznes polega na budowaniu biznesu naszych klientów i
              traktujemy to serio. Mamy obsesję na punkcie zwrotu z inwestycji
              (ROI). Dlatego systemy pozyskiwania klientów opieramy zawsze o
              najprostsze liczby. */}
              {section2?.paragraph_3}
            </p>
            <p>
              {/* Klient wkłada w digital marketing złotówkę, a wyciąga 5, 15, a
              nawet 50 złotych przychodów. Jak to robimy? */}
              {section2?.paragraph_4}
            </p>
            <ReactPlayer
              // url="/assets/videos/Strategia_qvvzcq.webm"
              url={section3?.video_url}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              className={style.numberVideo}
            />
            <p>
              {/* Większość agencji reklamowych koncentruje się na wąskim obszarze.
              Jedne agencje chwalą Facebooka, inne mówią, że tylko Google Ads
              albo SEO dają zyski. */}
              {section3?.paragraph_1}
            </p>
            <p>
              {/* <span>W Owocnych jest inaczej.</span>Tu wnikliwie badamy to, co
              dostarczy najwyższe zwroty w przypadku Twojej firmy, jeszcze zanim
              wydamy pierwszą złotówkę na reklamy. */}
              {section3?.paragraph_2}
            </p>
            <p>
              {/* Czy to będzie SEO, social media, Google Adwords, e-mail marketing,
              a może Instagram? Nie chodzi o platformę. */}
              {section3?.paragraph_3}
            </p>
            <p>
              {/* Liczy się wyłącznie{" "}
              <span className={style.gradient}>Liczy się wyłącznie</span> */}
              {section3?.paragraph_4}
            </p>
            <p>
              {/* Już dawno zrozumieliśmy, że klienci nigdy nie zmieniają agencji na
              słabszą, ale każdy chętnie przejdzie do lepszej. */}
              {section3?.paragraph_5}
            </p>
            <p>
              {/* Mamy obsesję dostarczania klientom wyższych zysków z inwestycji w
              marketing internetowy niż inne agencje. */}
              {section3?.paragraph_6}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entrepreneur;
