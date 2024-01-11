"use client";

import React from "react";
import style from "../main.module.css";
import ReactPlayer from "react-player";
import { Container, Image } from "react-bootstrap";

const Entrepreneur = () => {
  return (
    <div>
      <Container>
        <div className={style.numbers}>
          <div className={style.Content}>
            <h2>
              Co nas <br />
              wyróżnia?
              <br />
              <span>-Proste liczby!</span>
            </h2>
            <p>
              Czym różnimy się od innych? Można to sprowadzić do jednego: dajemy
              klientom duuużo większy zysk z inwestycji w marketing niż inne
              agencje reklamowe.
            </p>
            <p>
              Pracownicy agencji marketingowych często mówią niezrozumiałym
              językiem. Wyświetlenia, kliknięcia, CTR, CPC, CPM i całe to BHP.
            </p>
            <h4>
              Nas interesują <span>proste liczby.</span>
            </h4>
            <p className={style.numberMB}>- Ile razy zadzwonił Twój telefon?</p>
            <p className={style.numberMB}>
              - Ile płacisz za pozyskanie klienta?
            </p>
            <p>- Ile dokładnie produktów sprzedajesz?</p>
            <p>
              Nasz biznes polega na budowaniu biznesu naszych klientów i
              traktujemy to serio. Mamy obsesję na punkcie zwrotu z inwestycji
              (ROI). Dlatego systemy pozyskiwania klientów opieramy zawsze o
              najprostsze liczby.
            </p>
            <p>
              Klient wkłada w digital marketing złotówkę, a wyciąga 5, 15, a
              nawet 50 złotych przychodów. Jak to robimy?
            </p>
            <ReactPlayer
              url="/assets/videos/Strategia_qvvzcq.webm"
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              className={style.numberVideo}
            />
            <p>
              Większość agencji reklamowych koncentruje się na wąskim obszarze.
              Jedne agencje chwalą Facebooka, inne mówią, że tylko Google Ads
              albo SEO dają zyski.
            </p>
            <p>
              <span>W Owocnych jest inaczej.</span>Tu wnikliwie badamy to, co
              dostarczy najwyższe zwroty w przypadku Twojej firmy, jeszcze zanim
              wydamy pierwszą złotówkę na reklamy.
            </p>
            <p>
              Czy to będzie SEO, social media, Google Adwords, e-mail marketing,
              a może Instagram? Nie chodzi o platformę.
            </p>
            <p>
              Liczy się wyłącznie{" "}
              <span className={style.gradient}>Liczy się wyłącznie</span>
            </p>
            <p>
              Już dawno zrozumieliśmy, że klienci nigdy nie zmieniają agencji na
              słabszą, ale każdy chętnie przejdzie do lepszej.
            </p>
            <p>
              Mamy obsesję dostarczania klientom wyższych zysków z inwestycji w
              marketing internetowy niż inne agencje.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entrepreneur;
