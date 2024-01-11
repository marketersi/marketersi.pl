import Anatomy from "@/components/organisms/nazwa/anatomy/Anatomy";
import Demo from "@/components/organisms/nazwa/demo/Demo";
import FAQ from "@/components/organisms/nazwa/faq/FAQ";
import Hero from "@/components/organisms/nazwa/hero/Hero";
import Impact from "@/components/organisms/nazwa/impact/Impact";
import LaunchEssentials from "@/components/organisms/nazwa/launch-essentials/LaunchEssentials";
import ProjectValues from "@/components/organisms/nazwa/project-values/ProjectValues";
import Quote from "@/components/organisms/nazwa/quote/Quote";
import React from "react";
import { Container } from "react-bootstrap";
import "./nazwa.css";

const NazwaDlaFirmy = () => {
  return (
    <>
      {/* <Hero />
      <Anatomy />
      <Impact />
      <Quote />
      <LaunchEssentials />
      <FAQ />
      <ProjectValues /> */}

      <Container>
        <Hero />
      </Container>

      {/* section 1 */}
      {/* <section>
        <div className="container">
          <div className="top-section-banner names-top-section-banner naming-no-bg naming-no-after naming-top-section-banner">
            <video
              className="copywriter-mainlogo naming-mainlogo"
              src="https://www.copywriting.pl/files/resources/Nazwy-landing.mp4"
              autoplay=""
              loop=""
              muted=""
              playsinline=""
            ></video>
          </div>
          <div className="top-section-banner-text">
            <div className="row">
              <div className="col-md-6 col-46 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text naming-top-banner-text">
                  <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
                    Dobry biznes <br className="dont-delete" /> zaczyna się od{" "}
                    <br className="dont-delete" /> dobrej nazwy.{" "}
                  </h1>
                  <h2 className="top-banner-long-text names-top-banner-long-text">
                    Projektujemy nazwy, które mówią wyraźnie.{" "}
                    <br className="dont-delete" />
                    Robią dobre wrażenie i zapadają w pamięci.{" "}
                    <br className="dont-delete" />
                  </h2>
                  <h2 className="top-banner-long-text names-top-banner-long-text pnazw-second-maintext">
                    Dajemy 100% gwarancji satysfakcji.{" "}
                    <br className="dont-delete" />- Bez limitu propozycji.
                  </h2>
                </div>
              </div>

              <div className="col-md-12 part-sec">
                <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
                  <button
                    className="download-catalog-button projects-download-catalog-button red-download-button naming-main-btn send-offer-button  js--triggerAnimation"
                    type="button"
                  >
                    <strong>Wyślijcie mi niezobowiązującą ofertę</strong>
                  </button>
                </div>
              </div>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* section 2 */}
      <section className="top-section-ending projects-over-hid">
        <div className="container projects-custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h2 className="theme-title1 projects-big-header custom-projects-margin-top">
                Owocna nazwa pomoże Ci <br className="dont-delete" /> rozwinąć
                firmę szybciej.
              </h2>

              <p className="theme-desc text-center p-0 projects-under-big-header2 ">
                Świetne marki od zawsze przyciągają najlepszych
                <br />
                pracowników, uwodzą klientów i napędzają zyski.
              </p>

              <p className="theme-desc text-center p-0 projects-under-big-header">
                Pomożemy Ci stworzyć świetną markę. Zaprojektujemy nazwę,
                <br />
                która wyśle czytelny komunikat i wywoła skojarzenia, <br />
                które będą miały duży wpływ na decyzje klientów.
              </p>

              <p className="theme-desc text-center p-0 names-features-image naming-tm-100">
                <img
                  className="owocnych-nazw-text"
                  src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/Anatomia-tworzenia-nazw.png"
                  title="anatomia-naming"
                  alt="Anatomia - projektowanie nazw"
                />
                <br className="dont-delete" />
                owocnych&nbsp;nazw
              </p>
            </div>
          </div>
        </div>

        <div className="naming-seo-img">
          <img
            src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/Tworzenie-nazwy-firmy.jpg"
            title="Składowe tworzenia nazwy"
            alt="Przepis na dobrą nazwę"
          />
        </div>
      </section>

      {/* section 3 */}
      <section id="sec0">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-push-content-top">
              <p className="theme-desc projects-theme-desc-p projects-mq-book-fix">
                Już za chwilę nazwa stanie się centrum marketingu Twojej firmy.
                <br />
                Będzie wpływać na to, jak cię widzą klienci, pracownicy i
                partnerzy.
              </p>
            </div>
          </div>
        </div>

        <div className="container custom-container-4 custom-margin-bottom-30">
          <div className="row">
            <div className="col-md-3 stats-image-cont p-0">
              <img
                src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/statystyki-projektowanie-nazw.png"
                title="Dobra nazwa dla firmy - statystyki"
                alt="Statystyki, czyli jak ważne jest zastrzeżenie nazwy firmy"
              />
            </div>

            <div className="col-md-9">
              <p className="theme-desc projects-theme-desc-p projects-mq-book-fix custom-margin-bottom-20">
                Nazwy jako aktywa niematerialne stanowią średnio <br />
                3/4 całej wartości firmy. Warto wybrać je mądrze.
              </p>
            </div>
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-mq-book-fix">
                Dlaczego jedne nazwy chwytają, a inne zostają niezauważone?{" "}
                <br />
                Jak wywołać właściwe emocje, zdobyć zaufanie i sympatię?
                <br />
                To tylko niektóre części układanki, którą pomożemy Ci rozwiązać.
              </p>
            </div>
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-container-second-prasa">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-md-6 p-0">
                    <p className="theme-desc projects-mq-book-fix">
                      Nasz poradnik dotyczący mądrego <br />
                      projektowania nazw dla właścicieli <br />
                      małych firm stał się tak popularny, <br />
                      że cytuje go cała fachowa prasa:
                    </p>

                    <img
                      className="projects-logotypy-prasa custom-bottom-margin2"
                      src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/Logotypy-prasa.png"
                      title="Logotypy prasy, opinie o firmie Owocni"
                      alt="Jak nazwać firmę? Prasa o naszych efektach"
                    />
                    <p className="projects-mq-book-fix projects-custom-gray-text projects-hide-810 text-center">
                      Jeśli chcesz możesz pobrać darmowy egzemplarz. <br />
                      <a
                        href="/files/resources/Broszura-NazwaB.pdf"
                        className="red-link"
                        target="_blank"
                      >
                        Kliknij tutaj (PDF)
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 projects-lprasa-container p-0">
                    <img
                      className="projects-logotypy-prasa custom-bottom-margin2"
                      src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/ksiazka-owocni-fajna-nazwa.jpg"
                      title="Książka o tym jak nazwać firmę"
                      alt="Książka przydatna przy tworzeniu nazwy"
                    />
                  </div>
                  <div className="col-xs-12 p-0 projects-show-810">
                    <p className="theme-desc projects-custom-gray-text projects-mq-book-fix">
                      Jeśli chcesz możesz pobrać darmowy egzemplarz. <br />
                      <a
                        href="/files/resources/Broszura-NazwaB.pdf"
                        className="red-link"
                        target="_blank"
                      >
                        Kliknij tutaj (PDF)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="projects-gray-opinion-5">
        <div className="container projects-opinion-box-container custom-opinion-1">
          <div className="row">
            <div className="col-md-12">
              <div className="opinion-box">
                <div className="opinion-box-image">
                  <img
                    className="opinion-box-inside-image"
                    src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/owocni-copywriter.png"
                    title="Copywriter, którego zadaniem jest wymyślanie nazw"
                    alt="Copywriter wie jak ważne jest odpowiednie tworzenie nazw marek "
                  />
                </div>
                <div className="opinion-box-content rwd-opinion-image opinion-client-bg-bohemia naming-no-bg naming-opinion-img">
                  <img
                    className="opinion-box-inside-image"
                    src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/owocni-copywriter.png"
                    title="Copywriter, którego zadaniem jest wymyślanie nazw"
                    alt="Copywriter wie jak ważne jest odpowiednie tworzenie nazw marek "
                  />
                </div>
                <div className="opinion-box-content opinion-box-content-2 projects-opinion-4 naming-opinion-text">
                  <div className="opinion-box-text-3">
                    Świetna marka nie powstaje z szablonu, czy z automatycznego
                    generatora przypadkowych liter.
                  </div>
                  <div className="opinion-box-text-2 naming-m-0">
                    W Owocnych wierzymy, że warto się trochę wysilić. To właśnie
                    indywidualne, sumienne podejście odróżnia nasze prace od
                    całej tej “generycznej konkurencji”. Świetne nazwy słychać z
                    daleka!
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-12 projects-empty-opinion-box"></div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="menu-target  sec0" id="sec1">
        <div className="container projects-custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h3 className="projects-theme-title2 no-after p-bottom-10 naming-what-you-get-header">
                Co dokładnie otrzymasz?
              </h3>

              <h5 className="projects-theme-subtitle1 theme-desc-list2">
                Wszystko to, czego potrzebujesz, by
                <br />
                rozkręcić nową markę na dobre.
              </h5>

              <p className="theme-desc text-center p-0 naming-project-includes">
                Każdy projekt zawiera:
              </p>

              <ul className="names-list-info theme-desc">
                <li>Dobrze brzmiącą nazwę, z której będziesz dumny.</li>
                <li>Propozycję wolnej polskiej domeny spójnej z nazwą.</li>
                <li>Slogan reklamowy wspomagający zapamiętanie nazwy.</li>
                <li>Pełne prawa autorskie do wybranej nazwy i sloganu.</li>
              </ul>

              <div className="container custom-container1">
                <div className="row">
                  <div className="col-md-12">
                    <p className="theme-desc projects-theme-desc-p projects-mq-book-fix after-li-ctext">
                      Nawet, jeśli nie wiesz, jakiego rodzaju nazwy firmy
                      oczekujesz, <br />
                      to na pewno ją rozpoznasz, gdy zobaczysz ją wśród
                      propozycji.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="naming-seo-img naming-tm-100 naming-new-tm-1">
          <img
            src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/naming-zastrzezenie-nazwy-firmy.jpg"
            title="Naming a zastrzeżenie nazwy firmy"
            alt="Naming czyli tworzenie nazw"
          />
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <div className="names-container-Litery">
                <div className="names-client-desc names-client-desc-litery">
                  100% gwarancji satysfakcji.
                </div>
                <p className="theme-desc pnazw-ctext-size">
                  Nie kończymy pracy bez uzyskania Twojego pełnego zadowolenia.{" "}
                  <br />
                  Przygotowujemy kolejne propozycje – bez ukrytych kosztów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section className="projects-thematic-section-gray projects-thematic-section-background-index">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p names-left-padding projects-thematic-section-background-index">
                Cały proces zamkamy w rozsądnej cenie dla małych firm. <br />
                Każdy projekt jest inny. Każdy wyceniamy indywidualnie, <br />
                elastycznie i przyjaźnie. Tylko jakość nie podlega negocjacji.
              </p>
            </div>
          </div>
        </div>

        <div className="projects-custom-container-gray new-wierzymy">
          <img
            className="img-wierzymy"
            src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/agencja-namingowa-wierzymy.jpg"
            title="Agencja namingowa - wierzymy w małe firmy"
            alt="Wierzymy, że dobry naming pomaga"
          />

          <p className="theme-desc text-center projects-gray-section-custom-font projects-gray-section-valuation projects-thematic-section-background-index projecs-big-wierzymy-label">
            90% pracy wykonamy
            <br /> za 50% ceny.
          </p>
        </div>

        <div className="opinion-box-image projects-thematic-section-gray-background"></div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p names-left-padding projects-thematic-section-background-index">
                Drugą połowę rozliczymy,
                <br />
                gdy będziesz w pełni zadowolony
                <br />
                ze wszystkich efektów naszej pracy.
              </p>
            </div>
          </div>
        </div>

        <div className="formulage">
          <img src="form.png" alt="" />
        </div>
      </section>

      {/* section 7 */}
      <section className="projects-thematic-section-gray menu-target" id="sec3">
        <div className="iglarki-section-main-header text-center pnazw-custom-lineheight">
          <span>
            <strong>
              Przykłady realizacji <br />
              krok po kroku
            </strong>
          </span>{" "}
          <br />
          <div className="iglarki-section-submain">
            Jak przebiega owocny proces?
            <br />
            Poznaj ciekawe historie <br />
            naszych klientów.
          </div>
        </div>

        <div className="naming-seo-img">
          <img
            src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/wymyslanie-nazw-iglar.jpg"
            title="Przykład tego jak fajna nazwa pomaga małym biznesom"
            alt="Iglarki jako sukces biorąc pod uwagę propozycje nazw"
          />
        </div>

        <div className="names-client-name copywriter-cname names-iglarki-name iglarki-cname">
          GDYNIA
        </div>

        <div className="names-client-desc names-client-iglarki">
          Dwie kreatywne mamy, <br />
          które w wolnym czasie <br />
          szyją piękne rzeczy.
        </div>
      </section>

      {/* section 8 */}
      <section className="projects-thematic-section-gray">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-push-content-top">
              <p className="theme-desc">
                Domowa manufaktura miała mieć na metkach słodką nazwę, <br />
                która od razu będzie kojarzyć się z ich branżą. Miało być prosto{" "}
                <br />i kreatywnie. Warunkiem sukcesu była wolna domena
                internetowa.
              </p>

              <p className="theme-desc projects-margin-bottom-10">
                Obie mamy to Agnieszki. Nazwa AGA-TKA wydawała się faworytem.
              </p>

              <div className="custom-text-align-center">
                <img
                  className="names-custom-image"
                  src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/propozycje-nazw-firm.jpg"
                  title="Projektowanie nazw dla Iglarek"
                  alt="Tworzenie nazw marek na przykładzie Iglarek"
                />
              </div>

              <p className="theme-desc">
                Poproszono nas o dodatkowe propozycje. Takie, które nawiązują do{" "}
                <br />
                zabawek i takie, które można by wprowadzić na rynek zagraniczny.
              </p>

              <p className="theme-desc projects-margin-bottom-10">
                W kolejnej odsłonie pojawił się miś Nitkacy, zabawne Uszytki
                oraz <br />
                wersja zagraniczna: Needlife (Od angielskiego słowa Neddle -
                szyć).
              </p>

              <div className="custom-text-align-center">
                <img
                  className="names-custom-image"
                  src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/propozycje-nazw-marek.jpg"
                  title="Projektowanie logo dla Iglarek"
                  alt="Tworzenie nazw firm na przykładzie Iglarek"
                />
              </div>

              <p className="theme-desc">
                Kolejne propozycje utwierdziły mamy w przekonaniu, że pomysł{" "}
                <br />z Iglarkami podoba się im najbardziej – i tak bywa
                najczęściej.
              </p>
            </div>
          </div>
        </div>

        <div className="naming-seo-img">
          <img
            src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/iglarki-znak-towarowy.jpg"
            title="Przykład tego jak stworzyć dobrą nazwę"
            alt="Projektowanie logo dla Iglarek"
          />
        </div>

        <div className="clearfix"></div>
      </section>
      <Demo />
    </>
  );
};

export default NazwaDlaFirmy;
