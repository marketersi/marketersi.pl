"use client";

import React from "react";
import "./sales.css";
import { Form } from "react-bootstrap";
import Image from "next/image";
import Faq from "@/components/organisms/tresci-sprzedazowe/faq/Faq";

const page = () => {
  return (
    <>
      {/* ==============================sales banner==========================  */}

      <section className="sales_banner copywriter-page">
        <div className="container">
          <div className="top-section-banner copywriter-top-section-banner">
            <img
              style={{ maxWidth: "100%" }}
              src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Copywriter.jpg"
              className=""
              title="Owocni wiedzą, jak się pisze teksty na stronę"
              alt="Uśmiechnięci copywriterzy"
            />
          </div>
          <div className="top-section-banner-text">
            <div className="row">
              <div className="col-md-6 col-46 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text">
                  <h1 className="top-banner-title copywriter-top-banner-title">
                    <span className="copywriter-big">Copywriter,</span>{" "}
                    <br className="dont-delete" />
                    tyle, że{" "}
                    <span className="copywriter-green-number">100%</span>{" "}
                    lepszy.
                  </h1>
                  <h2 className="top-banner-long-text copywriter-top-banner-long-text">
                    100% gwarancji efektu tekstów <br className="dont-delete" />
                    albo zwrot 100% pieniędzy. <br className="dont-delete" />
                    Znasz pewniejszą ofertę?
                  </h2>
                </div>
              </div>
              <div className="col-md-12 part-sec old-btn">
                <a
                  href="#"
                  className="btn btn-green send-offer-button js--triggerAnimation"
                  data-toggle="modal"
                  data-target="#contactModal"
                >
                  O.K. wyślijcie mi niezobowiązującą ofertę.
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
      {/* ==============================sales banner-bottom-text==========================  */}
      <section className="sale_bottom_text copywriter-page">
        <div className="container copyuwriter-custom-push-1">
          <div className="row">
            <div className="col-md-12 text-center copywriter-custom-margin-1">
              <h1 className="copywriter-big-header">
                Lepszy biznes zaczyna <br />
                się od lepszych słów
              </h1>

              <span className="copywriter-big-subheader copywriter-cmargin-1">
                Nieważne czy to treści oferty czy treść strony.{" "}
                <br className="dont-delete" />
                2x skuteczniejszy tekst, to 2x większy zysk.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ==============================sales option box==========================  */}
      <section className="sales_option_box">
        <div className="container projects-opinion-box-container sec0">
          <div className="row">
            <div className="col-md-12">
              <div className="opinion-box copywriter-one-opinion">
                <div className="opinion-box-image">
                  <img
                    src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Senior-Copywriter.jpg"
                    className="opinion-box-inside-image"
                  />
                </div>
                {/* <div className="opinion-box-content rwd-opinion-image opinion-client-bg-senior copywriter-senior">
                  <img
                    src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Senior-Copywriter.jpg"
                    alt="Maciej - nasz copywriter"
                    title="Maciej - nasz copywriter"
                    className="opinion-box-inside-image"
                  />
                </div> */}
                <div className="opinion-box-content projects-opinion-2 text-center copywriter-senior-text">
                  <div className="copywriter-opinion-text-cont">
                    <div className="opinion-box-text projects-custom-opinion">
                      Większość copywriterów mierzy <br />
                      Twój tekst ilością znaków, <br />
                      a to jest największy błąd <br />
                      popełniany w branży!
                    </div>

                    <div className="opinion-box-text">
                      Właściciela firmy powinien <br />
                      obchodzić tylko efekt. Czyli finalna <br />
                      ilość transakcji, a nie ilość znaków.
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-12 projects-empty-opinion-box"></div>
          </div>
        </div>
      </section>
      {/* ==============================sales business tools==========================  */}
      <section className="business_tools">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center copywriter-cmargin-2">
              <h1 className="copywriter-big-header-2">
                To Twoje podstawowe narzędzia <br />
                biznesowe do zdobywania <br />
                nowych klientów. <br />
              </h1>
            </div>
          </div>
        </div>
        <div className="container text-center copywriter-custom-container-1 copywriter-rwd-mtb-40">
          <div className="copywriter-image-box">
            <div className="copywriter-image-box-1">
              <div className="copywriter-image-label">
                <strong>
                  Oferty <br />
                  handlowe
                </strong>
              </div>
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Tekst-oferty-handlowej.jpg"
                title="Pisanie tekstów oferty handlowej"
                alt="Owocni to numer 1 jeśli chodzi o skuteczny copywriting"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-2">
              <div className="copywriter-image-label">
                <strong>
                  Treści <br />
                  strony
                </strong>
              </div>
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Teksty-na-strone.jpg"
                title="Coptwriter oferta - przygotowywanie tekstów na stronę"
                alt="Dobrze przygotowane teksty na stronę to gwarancja wzrostu zysków"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-3">
              <div className="copywriter-image-label">
                <strong>
                  Skrypt <br />
                  reklam{" "}
                </strong>
              </div>
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Teskty-reklamowe.jpg"
                title="Usługi copywriterskie obejmują treści reklamowe"
                alt="Lekkie pióro to cecha charakterystyczna Owocnych"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-4">
              <div className="copywriter-image-label">
                <strong>
                  {" "}
                  Wyjątkowe <br />
                  artykuły{" "}
                </strong>
              </div>
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Teksty-artykul.jpg"
                title="Lekkie pióro pomaga w pisaniu artykułów"
                alt="Artykuł - nad takimi rzeczami pracuje copywriter"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-5">
              <div className="copywriter-image-label">
                <strong>
                  Katalogi <br />i broszury PDF
                </strong>
              </div>
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Teksty-katalogu.jpg"
                title="Copywriting katalogów i broszur"
                alt="Broszura i katalog to podstawa"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center copywriter-cmargin-3">
              <div className="copywriter-custom-text-1">
                Zmienimy złożoność w prostotę. <br />
                Zainteresowanie w działanie. <br />
                Czytających w kupujących.
              </div>

              <div className="copywriter-custom-text-2">
                Przechwycimy wyobraźnię. <br />
                Zaangażujemy umysły. <br />
                Wywołamy reakcję.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==============================sales section5==========================  */}
      <section className="section5">
        <div className="container copywriter-standard-mtb-40">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="copywriter-custom-gray-header-1">
                Jak to zadziała?
              </div>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mb-40">
          <img
            src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Jak-dziala-copywriter.jpg"
            title="Pisanie oferty dla klienta"
            alt="Proces pracy copywritera podzielony na etapy"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="copywriter-custom-text-2">
                Pomożemy Ci zdystansować konkurencję <br />w trzech prostych
                krokach.
              </div>
            </div>
          </div>
        </div>
        <div className="container copywriter-intro-whatwedo-container">
          <div className="row">
            <div className="col-md-6 copywriter-text-right">
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Skuteczny-copywriting-2.jpg"
                title="Teksty reklamowe Owocnych to gwarancja sukcesu"
                alt="Marketing, który osiąga zamierzony cel"
              />
            </div>

            <div className="col-md-6 copywriter-intro-box">
              <div className="copywriter-intro-header-right">
                <strong>Skupimy się na celu</strong> <br />
                damy Ci 100% Gwarancji efektu
              </div>
              <div className="copywriter-intro-description-right copywriter-rwd-mtb-40">
                Nasz copywriter pisze precyzyjnie. Gwarantuje <br />
                sukces lub zwrot pieniędzy. Jakość tekstów <br />
                oceniamy po transakcjach. Nie po znakach.
              </div>
            </div>

            <div className="col-md-6 copywriter-intro-box copywriting-hide-1">
              <div className="copywriter-intro-header-left">
                <strong>Zastosujemy prawa nauki</strong> <br />
                psychologii oraz perswazji
              </div>
              <div className="copywriter-intro-description-left copywriter-rwd-mtb-40">
                Copywriting to łączenie wiedzy z perswazji <br />
                psychologii, kognitywistyki oraz sprzedaży. <br />
                Wiemy jak sprawić, żeby klient powiedział TAK!
              </div>
            </div>

            <div className="col-md-6 copywriting-hide-1 copywriter-text-left">
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Dzialanie.jpg"
                title="Skuteczny copywriting wymaga odpowiedniej wiedzy"
                alt="Slogany reklamowe, które przyciągają użytkowników"
              />
            </div>
            <div className="col-md-6 copywriter-text-right">
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/Psychologia.jpg"
                title="Teksty reklamowe, które przekonają odbiorców do Twojej firmy"
                alt="Pisanie oferty musi trafić w rozum i serce klienta"
              />
            </div>

            <div className="col-md-6 copywriter-intro-box">
              <div className="copywriter-intro-header-right">
                <strong>Trafimy w rozum i serce.</strong> <br />
                Przyjemnie i przekonująco.
              </div>
              <div className="copywriter-intro-description-right copywriter-rwd-mtb-40">
                Będziemy pobudzać obie półkule mózgu. <br />
                Logiczną i emocjonalną. Sukces polega na <br />
                dobraniu trafnych emocji. Nie pięknych słów.
              </div>
            </div>
          </div>
        </div>
        <div className="container copywriter-container-custom">
          <div className="copywriting-white-text-cont">
            <div className="copywriting-bg-white-header">
              <strong>Lubisz wiedzieć więcej?</strong>
            </div>

            <div className="copywriting-bg-white-subheader">
              Napisaliśmy bardzo popularny <br />
              przewodnik po skutecznym pisaniu <br />
              dla właścicieli małych firm.
            </div>

            <div>
              <a
                className="copywriting-bg-white-subheader-link"
                href="https://www.copywriting.pl/jak-pisac-artykuly-zlote_zasady/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Otwórz tekst w nowym oknie
              </a>
            </div>
          </div>
          <img
            className="copywriter-ksiazka-img copywriter-rwd-mtb-40"
            src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Teksty-reklamowe-ktore-przekonaja-potencjalnych-klientow.jpg"
            title="Przewodnik Owocnych, który tłumaczy, jak napisać tekst"
            alt="Książka, którą przygotowali copywriterzy Owocnych"
          />
        </div>
        <div className="copywriter-intro-bg-5-label text-center">
          Na wszystkie pytania <br />
          odpowiedź brzmi:
        </div>
        <div className="copywriter-text-center copywriter-standard-mtb-40">
          <img
            src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Copywriter-FAQ.jpg"
            title="Owocni oferują usługi copywriterskie"
            alt="Reklama, której powiesz tak"
          />
        </div>
        <Faq />
        <div className="container copywriter-custom-container-2">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-custom-header copywriter-custom-push-2 text-center">
                100% gwarancji efektu
              </div>

              <p className="theme-desc text-center">
                W odróżnieniu od konkurencji, w Owocnych bierzemy pełną <br />
                odpowiedzialność za efekty tego, co piszemy. Gwarantujemy <br />
                napisać tekst, który będzie lepszy niż ten, który masz obecnie.
              </p>

              <p className="theme-desc copywriter-small-text text-center">
                Akceptujemy każdą formę statystycznie poprawnych danych. <br />
                Włącznie z danymi z darmowej platformy Google Optimize.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copywriter-custom-header text-center">Cennik</div>
          <div className="copywriter-custom-subheader text-center">
            Jak wyceniamy teksty?
          </div>
        </div>
        <div className="container copywriter-whatwedo-container">
          <div className="row">
            <div className="col-md-6 copywriter-what-we-do">
              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Skuteczny-copywriting.jpg"
                title="Copywriting cennik usług pisania tekstów reklamowych"
                alt="Sprzedażowe teksty na stronę internetową firmy"
              />
              <div className="copywriter-intro-sm-text">
                Piszemy treści, które skutecznie <br />
                realizują wyznaczone im zadania. <br />
                Motywują, przekonują i zarabiają.
              </div>
            </div>
            <div className="col-md-6 copywriter-what-we-do">
              <img
                className="custom-margin-bottom-5 nierobimy-max-width-100"
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/content-marketing-bez-niespodzianek-jpg.jpg"
                title="Usługi copywriterskie dla Twojej firmy"
                alt="Opracowanie tekstów dla jednej strony internetowej"
              />
              <div className="copywriter-intro-sm-text copywriter-intro-sm-mright">
                Nie tworzymy ,,bezmyślnych wypełniaczy” <br />
                mierzonych ilością znaków. Takich jak masowe <br />
                teksty dla SEO czy oklepane opisy produktów.
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 copywriter-custom-smaller">
              <p className="theme-desc">
                Nasz cennik zamknęliśmy w rozsądnym przedziale dla małych firm.{" "}
                <br />
                Każdy projekt jest inny. Każda cena podawana jest indywidualnie,{" "}
                <br />
                elastycznie i przyjaźnie. Tylko jakość nie podlega negocjacji.
              </p>

              <p className="theme-desc">
                90% pracy wykonamy dla Ciebie za 50% ceny. Drugą połowę <br />
                rozliczymy dopiero, gdy będziesz w pełni zadowolony.
              </p>

              <p className="theme-desc">
                <strong>
                  Możesz czuć się <br className="dont-delete" /> bezpiecznie.{" "}
                </strong>
              </p>

              <img
                src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Owocni.jpg"
                className="copywriter-owocni"
                title="Agencja reklamowa przygotuje teksty reklamowe dla Ciebie"
                alt="Logo firmy Owocni, która zajmuje się copywritingiem"
              />
            </div>
          </div>
        </div>
        <div className="copywriter-wierzymy-container">
          <img
            src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Wierzymy-w-male-firmy.jpg"
            title="Odpowiednie slogany reklamowe wzmocnią pozycję Twojej firmy"
            alt="Owocni oferują pisanie tekstów dla małych firm"
          />
        </div>
        <Form />
      </section>
    </>
  );
};

export default page;
