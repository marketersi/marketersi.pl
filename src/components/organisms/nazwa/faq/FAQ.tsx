"use client";
import React from "react";
import styles from "./faq.module.css";
import { Row, Col, Accordion, Card } from "react-bootstrap";

const FAQ = () => {
  return (
    <section>
      <Row>
        <Col>
          <h1>
            Na wszystkie pytania <br /> odpowiedź brzmi:
          </h1>

          <img src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/tak-fajna-nazwa.png" />
        </Col>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Czy naprawdę dajecie 100% gwarancji satysfakcji?
            </Accordion.Header>
            <Accordion.Body>
              Tak — w Owocnych zawsze dajemy 100% gwarancji satysfakcji na
              projekt nazwy. Z całkowitą pewności i z uśmiechem na twarzy.
              Współpraca z nami ma być dla klienta przyjemnością nie tylko na
              samym początku, ale również, gdy dopracowanie właściwego rezultatu
              wymaga więcej czasu. Wiemy dobrze, że doskonała nazwa jest tego
              warta. Sami jesteśmy często chwaleni za nazwę naszej agencji, ale
              i za wiele koncepcji, które znajdziesz w naszym portfolio. Każda z
              nich to wiele godzin pracy utalentowanych osób. To nie tylko
              „pomysły”, to prawdziwe projekty! Komercyjne konstrukcje
              zwiększające naszym klientom biznes za pomocą słów, symboli i
              skojarzeń. Jak działa nasza gwarancja satysfakcji? Oznacza to brak
              limitu ilości projektów w czasie i w budżecie, na jaki się
              umówimy. Klient płaci drugą ratę tylko wtedy, gdy jest z nas
              zadowolony. Wszystkie warunki są dokładnie opisane we
              wcześniejszej wycenie, tak, aby zawsze było wiadomo, jak będą
              wyglądać kolejne etapy prac. Wielu klientom podoba się tak wiele
              prezentowanych nazw, że często decydują się na wykupienie dwóch,
              by mieć jedną dobrą markę na zapas, na potrzeby przyszłych
              pomysłów bądź innej swojej działalności. Dziękujemy!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Czy przedstawicie zupełnie nowe propozycje, jeśli aktualne mi się
              nie spodobają?
            </Accordion.Header>
            <Accordion.Body>
              Tak — jeśli nie zdecydujesz się na jedną z nazw przedstawianych
              przez projektanta, przedstawimy następny wybór koncepcji. Będą to
              całkowicie nowe nazwy, chyba, że poprosisz, by w nowych
              propozycjach nawiązać do jednej z wcześniejszych. Czasem jest tak,
              że mamy już np. dwóch lub trzech liderów, ale klient nie może
              podjąć decyzji lub jest ciekaw jeszcze innych opcji. Wtedy bez
              problemu Możliwość nazwania nowej marki są niezliczone. Jako że w
              praktyce większość klientów wraca do nazw z pierwszej selekcji,
              radzimy, jeśli projekt jest pilny, by jak najbardziej skupić się
              na szybkiej i dobrej decyzji. Poszukiwania nazwy są fascynujące, i
              zawsze można stworzyć coś jeszcze innego — ale trzeba też
              pamiętać, że nowa marka ma jak najszybciej zacząć zarabiać.
              Przedstawiamy nazwy w 100% gotowe. Klient w Owocnych nie dostaje
              rozwiązań tymczasowych, na próbę ani szkiców. Szkice i próby to
              etap projektowania. Klient zaś dostaje od owocnego copywritera
              gotowe rozwiązania wraz z dokładnym opisem, opracowane w każdym
              detalu pod jego potrzeby.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Czy udaje wam się kończyć projekty w ciągu kilku dni?
            </Accordion.Header>
            <Accordion.Body>
              Tak — bardzo wiele (mniej więcej połowa) nazw jest wybieranych w
              dniu przedstawienia projektów. Można też zamówić realizację
              ekspresową, skracając termin przedstawienia nazw o parę dni
              roboczych. Regularnie kończymy nazwy w 2-3 dni od uruchomienia
              projektu. Zdarzają nam się prace wykonywane na następny dzień,
              bardzo ekspresowe, ale to klient składając odpowiednie zamówienie
              decyduje, jak szybko mamy pracować, i oczywiście to on wybiera
              nazwę. Każdy klient, któremu tworzymy nazwę, może liczyć na rabat
              przy realizacji tekstów reklamowych na stronę, do ofert,
              komunikacji z klientami albo na portale społecznościowe. Gdy nad
              nazwą, hasłami i całym copywritingiem marki pracuje jedna osoba,
              kreuje to dużą wartość dodaną dla firmy. Warto działać spójnie już
              od samego początku.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </section>
  );
};

export default FAQ;
