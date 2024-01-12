import React from "react";
import "./uxDesign.css";

const UXDesignScreen = () => {
  return (
    <>
      {/* section 1 */}
      <section>
        <div id="header">
          <div>
            <div>
              <h1 className="titleHead">
                {" "}
                <span>
                  Makieta<span className="UX">UX</span>
                </span>
                <br />
                wykonawcza
              </h1>
              <p className="subitle">To klikalny prototyp projektu strony.</p>
              <p className="subitle">Przemyślany, by wygrać konkurencję. </p>
              <p className="subitle">
                Dla tych, co
                <span className="underLine">
                  <span>m</span>
                  <span>y</span>
                  <span>ś</span>
                  <span>l</span>
                  <span>ą</span>
                  <span className="space"></span>
                  <span>p</span>
                  <span>r</span>
                  <span>z</span>
                  <span>y</span>
                  <span>s</span>
                  <span>z</span>
                  <span>ł</span>
                  <span>o</span>
                  <span>ś</span>
                  <span>c</span>
                  <span>i</span>
                  <span>o</span>
                  <span>w</span>
                  <span>o</span>
                </span>
              </p>
              <p className="subitle">na temat obecności firmy w internecie.</p>
            </div>
            <video
              playsinline=""
              id="phoneMove"
              loop="true"
              autoplay="true"
              muted=""
              data-vscid="d3xa7p0zx"
            >
              <source
                src="	https://copywriting.pl/files/resources/Projekt-Makiety-UX.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section>
        <div id="numbers">
          <div>
            <img
              src="https://propozycje.owocni.pl/ux/Projekt-UX-korzysci.98e41101.png"
              alt=""
            />
            <p>
              Intuicyjny, przemyślany, <br />
              projekt UX usprawnia <br />
              konwersję nawet 400%.
            </p>
          </div>
          <div>
            <img
              src="https://propozycje.owocni.pl/ux/Wyglad-strony-internetowej.c02f8711.png"
              alt=""
            />
            <p>
              Tylu klientów oceni firmę
              <br />
              na podstawie wyglądu&nbsp;
              <br />i działania jej strony
            </p>
          </div>
          <div>
            <img
              src="https://propozycje.owocni.pl/ux/Opuszanie-strony-www.54cfdaa4.png"
              alt=""
            />
            <p>
              Tyle czasu trwa decyzja&nbsp;
              <br />
              klienta o tym czy zostać,&nbsp;
              <br />
              czy opuścić Twoją stronę.
            </p>
          </div>
          <div>
            <img
              src="https://propozycje.owocni.pl/ux/Zwrot-z-inwestycji.189224ae.png"
              alt=""
            />
            <p>
              Tyle wynosi średni zwrot <br />z inwestycji 1 dolara w UX
              <br />w największych firmach USA.
            </p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section id="messagesSection">
        <h2
          className="textAnimation"
          style={{
            opacity: 1,
            transform: "translate(0px, 0px)",
          }}
        >
          Konkurencja
          <br />w wersji
          <span>
            hiper
            <img
              src="https://propozycje.owocni.pl/ux/Podkreslenie-konkurencja.0db36d83.png"
              alt=""
            />
          </span>
        </h2>
        <div className="text2">
          <div>
            Oto internet.
            <br className="mobile" />
            Tu walutą jest ludzka uwaga.
            <br />
            Walczy o nią
            <span className="slotContainer ani1">
              <span className="animated-words">
                <span className="word">Netflix</span>
                <span className="word">Spotify</span>
                <span className="word">Philips</span>
                <span className="word">Adidas</span>
              </span>
            </span>
            i <br className="mobile" />
            <div className="timer timerNumber">
              <div className="cell">
                <div
                  style={{
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    opacity: 1,
                    transform: "translate(0px, -52.8875px)",
                  }}
                >
                  9
                </div>
              </div>
              <div className="cell">
                <div
                  style={{
                    opacity: 1,
                    transform: "translate(0px, -52.8875px)",
                  }}
                >
                  6
                </div>
                <div
                  style={{
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                  }}
                >
                  7
                </div>
              </div>
            </div>
            twoich konkurentów.
          </div>
          <p>
            Łatwo jest być innym,
            <br className="mobile" />
            ale trudno tu być lepszym.
            <br />
            Skończyły się czasy klonów
            <br className="mobile" />i sztampowych szablonów.
          </p>
          <p>
            Dziś wygrywają ci, którzy
            <br className="mobile" />
            odnajdują lepsze odpowiedzi
            <span className="loading">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        </div>
      </section>

      {/* section 4 */}
      <section>
        <div id="boxySection">
          <div className="hiddenOverflow">
            <h1
              className="writeText"
              id="writeText"
              style={{ transform: "translate(0px, 0px" }}
            >
              <a
                className="typewrite"
                data-period="2000"
                data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
                style={{ color: "rgb(255, 80, 0)" }}
              >
                <span className="wrap">Jak zainteresować ludzi</span>
              </a>
            </h1>
            <div className="section over-hide content">
              <div className="container2">
                <div className="row2 justify-content-center">
                  <div className="text-center align-self-center py-5">
                    <div className="section text-center py-5 py-md-0">
                      <input
                        className="pricing"
                        id="pricing"
                        type="checkbox"
                        name="pricing"
                      />
                      <label for="pricing">
                        <span className="block-diff">
                          kayaking<span className="float-right">camping</span>
                        </span>
                      </label>
                      <div className="card-3d-wrap mx-auto">
                        <div
                          className="cursor"
                          id="cursor1"
                          style={{
                            transform: "translate(130.5px, -194px)",
                          }}
                        >
                          <picture>
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor1.a0126395.webp
                            "
                              type="image/webp"
                            />
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor1.a0126395.eb664af9.png
                            "
                              type="image/png"
                            />
                            <img src="https://propozycje.owocni.pl/ux/Kursor1.a0126395.webp" />
                          </picture>

                          <div className="name">Maciej</div>
                          <div className="lottie" id="effect1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 500 500"
                              width="500"
                              height="500"
                              preserveAspectRatio="xMidYMid meet"
                              style={{
                                width: "100%",
                                height: "100%",
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <defs>
                                <clipPath id="__lottie_element_2">
                                  <rect
                                    width="500"
                                    height="500"
                                    x="0"
                                    y="0"
                                  ></rect>
                                </clipPath>
                                <clipPath id="__lottie_element_4">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                              </defs>
                              <g clip-path="url(#__lottie_element_2)">
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(3.2850000858306885,0,0,3.2850000858306885,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(0,3.2850000858306885,-3.2850000858306885,0,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-3.2850000858306885,0,0,-3.2850000858306885,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(0,-3.2850000858306885,3.2850000858306885,0,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(2.322845935821533,-2.322845935821533,2.322845935821533,2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(2.322845935821533,2.322845935821533,-2.322845935821533,2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-2.322845935821533,2.322845935821533,-2.322845935821533,-2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-2.322845935821533,-2.322845935821533,2.322845935821533,-2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(3.0457990169525146,-1.2305827140808105,1.2305827140808105,3.0457990169525146,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(1.2305827140808105,3.0457990169525146,-3.0457990169525146,1.2305827140808105,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-3.0457990169525146,1.2305827140808105,-1.2305827140808105,-3.0457990169525146,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-1.2305827140808105,-3.0457990169525146,3.0457990169525146,-1.2305827140808105,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(1.283551812171936,-3.0238585472106934,3.0238585472106934,1.283551812171936,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(3.0238585472106934,1.283551812171936,-1.283551812171936,3.0238585472106934,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-1.283551812171936,3.0238585472106934,-3.0238585472106934,-1.283551812171936,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-3.0238585472106934,-1.283551812171936,1.283551812171936,-3.0238585472106934,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d=" M51.21099853515625,-51.21099853515625 C51.23699951171875,-51.23699951171875 51.25,-51.25 51.25,-51.25"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_4)"
                                  transform="matrix(1,0,0,1,0,0)"
                                  opacity="1"
                                  style={{ display: "block" }}
                                ></g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <svg
                          id="cursorPath1"
                          width="236"
                          height="394"
                          viewBox="0 0 236 394"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M204.5 224.5C91.8333 205.5 -94.9 155.7 59.5 108.5C213.9 61.3 164.5 17.1667 120.5 1"></path>
                        </svg>
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="pricing-wrap">
                              <picture className="person">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Marketer.400fbd82.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Marketer.400fbd82.ef6f5343.gif
                                "
                                  type="image/gif"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Marketer.400fbd82.webp" />
                              </picture>
                              <div className="bottomText">Marketer</div>
                              <svg
                                className="circleDraw"
                                id="circle1"
                                viewBox="0 0 58 58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  className=""
                                  cx="29.5"
                                  cy="29.5"
                                  r="29"
                                ></circle>
                              </svg>
                              <svg
                                className="arrow"
                                id="arrow1"
                                viewBox="0 0 83 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="line"
                                  id="line1"
                                  d="M80,106C79.8331,100.845 78.6882,87.5241 68.8555,76.1867C56.6241,62.0831 34.4017,55.0284 18.7051,63.0133C10.0724,67.4044 1.01747,77.5632 3.38133,85.5467C5.31421,92.0712 11.2478,95.5668 21.1429,95.6C39.7171,95.6636 58.5221,42.7102 38.9046,2"
                                ></path>
                                <path
                                  className="arrowHead"
                                  id="arrowHead1"
                                  d="M63.2518 25.4465L69.2573 26.2116L65.4577 30.4575L63.2518 25.4465V25.4465Z"
                                  data-svg-origin="63.251800537109375 25.446500778198242"
                                  style={{ transformOrigin: "0px 0px" }}
                                  transform="matrix(0.07486,-0.99719,0.99719,0.07486,7.66981,63.17919)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="card-back">
                            <div className="pricing-wrap">
                              <picture className="gif">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Marketer-Back.5961d2f3.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Marketer-Back.5961d2f3.0bd863ab.gif
                                "
                                  type="image/gif"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Marketer-Back.5961d2f3.webp" />
                              </picture>
                              <div className="boxText">
                                <p
                                  id="text"
                                  className="text"
                                  style={{
                                    fontSize: "38px",
                                    height: "50px",
                                    lineHeight: "50px",
                                  }}
                                >
                                  <span
                                    style={{
                                      transform: "translate(-119px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      M
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      M
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      M
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      M
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(-82px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      A
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(-54px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      R
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      R
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      R
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      R
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(-28px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      K
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      K
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      K
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      K
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(-1px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      E
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      E
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      E
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      E
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(24px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      T
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      T
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      T
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      T
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(50px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      I
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      I
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      I
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      I
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(63px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      N
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      N
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      N
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      N
                                    </span>
                                  </span>
                                  <span
                                    style={{
                                      transform: "translate(93px, 0px)",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "rgb(249, 186, 16)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      G
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 126, 53)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      G
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(117, 114, 114)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      G
                                    </span>
                                    <span
                                      style={{
                                        color: "rgb(255, 253, 255)",
                                        transform: "translate(0px, 0%)",
                                      }}
                                    >
                                      G
                                    </span>
                                  </span>
                                </p>
                              </div>
                              <div className="circle">
                                <picture className="head">
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Marketer-HEAD.e57077ff.webp
                                  "
                                    type="image/webp"
                                  />
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Marketer-HEAD.e57077ff.6f42b0a1.png
                                  "
                                    type="image/png"
                                  />
                                  <img src="https://propozycje.owocni.pl/ux/Marketer-HEAD.e57077ff.webp" />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container2">
                <div className="row2 justify-content-center">
                  <div className="text-center align-self-center py-5">
                    <div className="section text-center py-5 py-md-0">
                      <input
                        className="pricing"
                        id="pricing3"
                        type="checkbox"
                        name="pricing"
                      />
                      <label for="pricing3">
                        <span className="block-diff">
                          kayaking<span className="float-right">camping</span>
                        </span>
                      </label>
                      <div className="card-3d-wrap mx-auto">
                        <div
                          className="cursor"
                          id="cursor2"
                          style={{ transform: "translate(215.94px, 27.016px)" }}
                        >
                          <picture>
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor2.1ce77838.webp
                            "
                              type="image/webp"
                            />
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor2.1ce77838.8553179c.png
                            "
                              type="image/png"
                            />
                            <img src="https://propozycje.owocni.pl/ux/Kursor2.1ce77838.webp" />
                          </picture>

                          <div className="name">Gosia</div>
                          <div className="lottie" id="effect2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 500 500"
                              width="500"
                              height="500"
                              preserveAspectRatio="xMidYMid meet"
                              style={{
                                width: "100%",
                                height: "100%",
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <defs>
                                <clipPath id="__lottie_element_59">
                                  <rect
                                    width="500"
                                    height="500"
                                    x="0"
                                    y="0"
                                  ></rect>
                                </clipPath>
                                <clipPath id="__lottie_element_61">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_67">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_75">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_83">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_91">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_99">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_107">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_115">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_123">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                              </defs>
                              <g clip-path="url(#__lottie_element_59)">
                                <g
                                  clip-path="url(#__lottie_element_123)"
                                  style={{ display: "none" }}
                                  transform="matrix(0.008727061562240124,-0.1998095065355301,-0.1998095065355301,-0.008727061562240124,497.6027526855469,220.2628631591797)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_115)"
                                  style={{ display: "none" }}
                                  transform="matrix(0.008727061562240124,-0.1998095065355301,-0.1998095065355301,-0.008727061562240124,528.2117919921875,385.133056640625)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_107)"
                                  style={{ display: "none" }}
                                  transform="matrix(0.008727061562240124,-0.1998095065355301,-0.1998095065355301,-0.008727061562240124,482.79083251953125,522.18896484375)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_99)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008727061562240124,-0.1998095065355301,0.1998095065355301,-0.008727061562240124,2.397216796875,220.2628631591797)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_91)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008727061562240124,-0.1998095065355301,0.1998095065355301,-0.008727061562240124,-28.198440551757812,385.09307861328125)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_83)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008727061562240124,-0.1998095065355301,0.1998095065355301,-0.008727061562240124,17.214752197265625,522.1741333007812)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_75)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008727061562240124,-0.1998095065355301,0.1998095065355301,-0.008727061562240124,199.4043426513672,523.6852416992188)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_67)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008727061562240124,-0.1998095065355301,0.1998095065355301,-0.008727061562240124,199.9477996826172,163.15870666503906)"
                                  opacity="0.024466840661022643"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1.9846400022506714,0,0,1.9846400022506714,250,250)"
                                    opacity="1"
                                  >
                                    <path
                                      fill="rgb(51,51,51)"
                                      fill-opacity="1"
                                      d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M41.41299819946289,4.2729997634887695 C47.125,-1.4390000104904175 49.99399948120117,-8.930999755859375 49.99399948120117,-16.410999298095703 C49.99399948120117,-23.902999877929688 47.125,-31.395000457763672 41.41299819946289,-37.106998443603516 C36.53799819946289,-41.98699951171875 30.3700008392334,-44.78499984741211 24.01099967956543,-45.5 C15.468000411987305,-46.46099853515625 6.584000110626221,-43.66299819946289 0.03400000184774399,-37.106998443603516 C0.03400000184774399,-37.106998443603516 -0.0010000000474974513,-37.071998596191406 -0.0010000000474974513,-37.071998596191406 C-0.0010000000474974513,-37.071998596191406 -0.03700000047683716,-37.106998443603516 -0.03700000047683716,-37.106998443603516 C-5.749000072479248,-42.819000244140625 -13.241000175476074,-45.6879997253418 -20.72100067138672,-45.6879997253418 C-28.21299934387207,-45.6879997253418 -35.70399856567383,-42.819000244140625 -41.41600036621094,-37.106998443603516 C-52.85300064086914,-25.68199920654297 -52.85300064086914,-7.1519999504089355 -41.41600036621094,4.2729997634887695 C-41.41600036621094,4.2729997634887695 -0.0010000000474974513,45.6879997253418 -0.0010000000474974513,45.6879997253418 C-0.0010000000474974513,45.6879997253418 41.41299819946289,4.2729997634887695 41.41299819946289,4.2729997634887695z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_61)"
                                  transform="matrix(1,0,0,1,0,0)"
                                  opacity="1"
                                  style={{ display: "block" }}
                                ></g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <svg
                          id="cursorPath2"
                          width="236"
                          height="394"
                          viewBox="0 0 236 394"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M185.94 217.016C198.02 242.101 198.02 262.24 185.94 287.325C156.532 348.397 26.5814 343.526 7.7694 240.607C-11.0426 137.687 3.86602 83.7051 123.38 1"></path>
                        </svg>
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="pricing-wrap">
                              <picture className="person">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Handlowiec.a8d7a705.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Handlowiec.a8d7a705.b9d340ed.gif
                                "
                                  type="image/gif"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Handlowiec.a8d7a705.webp" />
                              </picture>
                              <div className="bottomText">Handlowiec</div>
                              <svg
                                className="circleDraw"
                                id="circle2"
                                viewBox="0 0 58 58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  className="animation"
                                  cx="29.5"
                                  cy="29.5"
                                  r="29"
                                ></circle>
                              </svg>
                              <svg
                                className="arrow"
                                id="arrow2"
                                viewBox="0 0 83 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="line animation"
                                  id="line2"
                                  d="M22.9884,111C39.1056,108.37 48.8245,91.5859 48.5876,77.316C48.2441,56.6135 26.9114,39.1518 16.2121,42.875C7.21003,46.0084 -4.24219,63.4386 9.05937,74.2882C18.521,82.0059 35.8617,77.0258 47.4583,72.3958C92.7024,54.3317 75.0919,5.18705 72.3046,2"
                                ></path>
                                <path
                                  className="arrowHead"
                                  id="arrowHead2"
                                  d="M63.2518 25.4465L69.2573 26.2116L65.4577 30.4575L63.2518 25.4465V25.4465Z"
                                  data-svg-origin="63.251800537109375 25.446500778198242"
                                  style={{ transformOrigin: "0px 0px" }}
                                  transform="matrix(-0.19351,-0.9811,0.9811,-0.19351,58.67615,68.99198)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="card-back">
                            <div className="pricing-wrap">
                              <picture className="gif">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Handlowiec-Back.14c4f7d8.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Handlowiec-Back.8a314983.9ed094f8.gif
                                "
                                  type="image/gif"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Handlowiec-Back.14c4f7d8.webp" />
                              </picture>
                              <div className="boxText"></div>
                              <div className="circle">
                                <picture className="head">
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Handlowiec-HEAD.59e53df6.webp
                                  "
                                    type="image/webp"
                                  />
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Klient-HEAD.118c9b41.aaad8f76.png
                                  "
                                    type="image/png"
                                  />
                                  <img src="https://propozycje.owocni.pl/ux/Handlowiec-HEAD.59e53df6.webp" />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container2">
                <div className="row2 justify-content-center">
                  <div className="text-center align-self-center py-5">
                    <div className="section text-center py-5 py-md-0">
                      <input
                        className="pricing"
                        id="pricing4"
                        type="checkbox"
                        name="pricing"
                      />
                      <label for="pricing4">
                        <span className="block-diff">
                          kayaking<span className="float-right">camping</span>
                        </span>
                      </label>
                      <div className="card-3d-wrap mx-auto">
                        <div
                          className="cursor"
                          id="cursor3"
                          style={{ transform: "translate(215.5px, 75.0001px)" }}
                        >
                          <picture>
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor3.6c095ea2.webp
                            "
                              type="image/webp"
                            />
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor3.6c095ea2.1a073baa.png
                            "
                              type="image/png"
                            />
                            <img src="https://propozycje.owocni.pl/ux/Kursor3.6c095ea2.webp" />
                          </picture>

                          <div className="name">Kuba</div>
                          <div className="lottie" id="effect3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 500 500"
                              width="500"
                              height="500"
                              preserveAspectRatio="xMidYMid meet"
                              style={{
                                width: "100%",
                                height: "100%",
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <defs>
                                <clipPath id="__lottie_element_131">
                                  <rect
                                    width="500"
                                    height="500"
                                    x="0"
                                    y="0"
                                  ></rect>
                                </clipPath>
                                <clipPath id="__lottie_element_133">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                              </defs>
                              <g clip-path="url(#__lottie_element_131)">
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(3.2850000858306885,0,0,3.2850000858306885,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(0,3.2850000858306885,-3.2850000858306885,0,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-3.2850000858306885,0,0,-3.2850000858306885,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(0,-3.2850000858306885,3.2850000858306885,0,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(2.322845935821533,-2.322845935821533,2.322845935821533,2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(2.322845935821533,2.322845935821533,-2.322845935821533,2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-2.322845935821533,2.322845935821533,-2.322845935821533,-2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  style={{ display: "none" }}
                                  transform="matrix(-2.322845935821533,-2.322845935821533,2.322845935821533,-2.322845935821533,250,250)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(18,19,49)"
                                      fill-opacity="1"
                                      d="M0 0"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill-opacity="0"
                                      stroke="rgb(51,51,51)"
                                      stroke-opacity="1"
                                      stroke-width="0"
                                      d="M0 0"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_133)"
                                  transform="matrix(1,0,0,1,0,0)"
                                  opacity="1"
                                  style={{ display: "block" }}
                                ></g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <svg
                          id="cursorPath3"
                          width="236"
                          height="394"
                          viewBox="0 0 236 394"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M205.5 255C189.167 317 140.1 410.9 74.4999 290.5C-7.50008 140 170 183 165.5 219C161 255 -49.5 252.5 12.5 145C62.0999 58.9999 116.5 66.1667 137.5 80.5C159.5 96.6666 189.385 122.546 170.5 145C132.5 190.181 -45.5 79.5 28.5 0.5"></path>
                        </svg>
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="pricing-wrap">
                              <picture className="person">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Przedsiebiorca.c53428cd.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Przedsiebiorca.c53428cd.f3080f96.png
                                "
                                  type="image/png"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Przedsiebiorca.c53428cd.webp" />
                              </picture>
                              <div className="bottomText">Właściciel</div>
                              <svg
                                className="circleDraw"
                                id="circle3"
                                viewBox="0 0 58 58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  className="animation"
                                  cx="29.5"
                                  cy="29.5"
                                  r="29"
                                ></circle>
                              </svg>
                              <svg
                                className="arrow"
                                id="arrow3"
                                viewBox="0 0 83 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="line animation"
                                  id="line3"
                                  d="M110.219 38.2786C107.752 35.4059 102.684 30.5748 95.2746 30.2802C92.1087 30.154 83.4511 30.562 80.3846 35.3919C77.9072 39.2936 80.2762 45.767 82.7957 47.0408C86.6362 48.9814 92.5091 45.322 93.6515 40.5061C94.7595 35.8382 90.0635 26.9587 72.5035 18.8469C64.2119 15.0166 38.6829 12.7037 41.0991 35.0706C42.0656 44.024 47.111 50.8838 57.9527 50.9348C64.2183 50.9641 71.4873 39.189 68.4106 28.5615C63.9429 13.1219 46.4288 0.118974 29.1749 7.01571C26.4641 8.0995 16.5812 12.5507 10.1817 25.1342C8.78301 27.8857 3.48645 38.2978 5.41943 50.7116C7.59849 64.7117 17.2213 70.0133 18.5894 70.7299"
                                ></path>
                                <path
                                  className="arrowHead"
                                  id="arrowHead3"
                                  d="M63.2518 25.4465L69.2573 26.2116L65.4577 30.4575L63.2518 25.4465V25.4465Z"
                                  data-svg-origin="63.251800537109375 25.446500778198242"
                                  style={{ transformOrigin: "0px 0px" }}
                                  transform="matrix(0.536,0.84422,-0.84422,0.536,5.58052,4.1418)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="card-back">
                            <div className="pricing-wrap">
                              <picture className="gif">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Wlasciciel-Back.1b7da54d.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Wlasciciel-Back.1b7da54d.0977440d.gif
                                "
                                  type="image/gif"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Wlasciciel-Back.1b7da54d.webp" />
                              </picture>
                              <div className="boxText"></div>
                              <div className="circle">
                                <picture className="head">
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Przedsiebiorca-HEAD.28dc33ad.webp
                                  "
                                    type="image/webp"
                                  />
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Przedsiebiorca-HEAD.28dc33ad.2fa63beb.png
                                  "
                                    type="image/png"
                                  />
                                  <img src="https://propozycje.owocni.pl/ux/Przedsiebiorca-HEAD.28dc33ad.webp" />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container2">
                <div className="row2 justify-content-center">
                  <div className="text-center align-self-center py-5">
                    <div className="section text-center py-5 py-md-0">
                      <input
                        className="pricing"
                        id="pricing2"
                        type="checkbox"
                        name="pricing"
                      />
                      <label for="pricing2">
                        <span className="block-diff">
                          kayaking<span className="float-right">camping</span>
                        </span>
                      </label>
                      <div className="card-3d-wrap mx-auto">
                        <div
                          className="cursor"
                          id="cursor4"
                          style={{ transform: "translate(213.645px, 137.5px)" }}
                        >
                          <picture>
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor4.63bae5a3.webp
                            "
                              type="image/webp"
                            />
                            <source
                              srcset="
                              https://propozycje.owocni.pl/ux/Kursor4.63bae5a3.39eb62bd.png
                            "
                              type="image/png"
                            />
                            <img src="https://propozycje.owocni.pl/ux/Kursor4.63bae5a3.webp" />
                          </picture>

                          <div className="name">Iza</div>
                          <div className="lottie" id="effect4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 500 500"
                              width="500"
                              height="500"
                              preserveAspectRatio="xMidYMid meet"
                              style={{
                                width: "100%",
                                height: "100%",
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <defs>
                                <clipPath id="__lottie_element_164">
                                  <rect
                                    width="500"
                                    height="500"
                                    x="0"
                                    y="0"
                                  ></rect>
                                </clipPath>
                                <clipPath id="__lottie_element_166">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_172">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_179">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_186">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_193">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_200">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_207">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_214">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                                <clipPath id="__lottie_element_221">
                                  <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                                </clipPath>
                              </defs>
                              <g clip-path="url(#__lottie_element_164)">
                                <g
                                  clip-path="url(#__lottie_element_221)"
                                  style={{ display: "none" }}
                                  transform="matrix(0.008853653445839882,-0.1998039335012436,-0.1998039335012436,-0.008853653445839882,497.58087158203125,220.3135986328125)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_214)"
                                  style={{ display: "none" }}
                                  transform="matrix(0.008853653445839882,-0.1998039335012436,-0.1998039335012436,-0.008853653445839882,528.1875,385.1895751953125)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_207)"
                                  style={{ display: "none" }}
                                  transform="matrix(0.008853653445839882,-0.1998039335012436,-0.1998039335012436,-0.008853653445839882,482.7662353515625,522.2415771484375)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_200)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008853653445839882,-0.1998039335012436,0.1998039335012436,-0.008853653445839882,2.41912841796875,220.3135986328125)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_193)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008853653445839882,-0.1998039335012436,0.1998039335012436,-0.008853653445839882,-28.174468994140625,385.15057373046875)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_186)"
                                  style={{ display: "block" }}
                                  transform="matrix(-0.008853653445839882,-0.1998039335012436,0.1998039335012436,-0.008853653445839882,17.239242553710938,522.22705078125)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_179)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008853653445839882,-0.1998039335012436,0.1998039335012436,-0.008853653445839882,199.4375457763672,523.73046875)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_172)"
                                  style={{ display: "none" }}
                                  transform="matrix(-0.008853653445839882,-0.1998039335012436,0.1998039335012436,-0.008853653445839882,199.9813232421875,163.2135009765625)"
                                  opacity="0.024136249458736218"
                                >
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(2.200000047683716,0,0,2.200000047683716,250,250)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,5)"
                                    >
                                      <path
                                        fill="rgb(51,51,51)"
                                        fill-opacity="1"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(51,51,51)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.3677786460858646e-15,-55 C3.3677786460858646e-15,-55 16.164094924926758,-22.247966766357422 16.164094924926758,-22.247966766357422 C16.164094924926758,-22.247966766357422 52.308109283447266,-16.995935440063477 52.308109283447266,-16.995935440063477 C52.308109283447266,-16.995935440063477 26.154054641723633,8.497967720031738 26.154054641723633,8.497967720031738 C26.154054641723633,8.497967720031738 32.328189849853516,44.495933532714844 32.328189849853516,44.495933532714844 C32.328189849853516,44.495933532714844 1.6838893230429323e-15,27.5 1.6838893230429323e-15,27.5 C1.6838893230429323e-15,27.5 -32.328189849853516,44.495933532714844 -32.328189849853516,44.495933532714844 C-32.328189849853516,44.495933532714844 -26.154054641723633,8.497967720031738 -26.154054641723633,8.497967720031738 C-26.154054641723633,8.497967720031738 -52.308109283447266,-16.995935440063477 -52.308109283447266,-16.995935440063477 C-52.308109283447266,-16.995935440063477 -16.164094924926758,-22.247966766357422 -16.164094924926758,-22.247966766357422 C-16.164094924926758,-22.247966766357422 3.3677786460858646e-15,-55 3.3677786460858646e-15,-55z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  clip-path="url(#__lottie_element_166)"
                                  transform="matrix(1,0,0,1,0,0)"
                                  opacity="1"
                                  style={{ display: "block" }}
                                ></g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <svg
                          id="cursorPath4"
                          width="236"
                          height="394"
                          viewBox="0 0 236 394"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M173.645 312.5C254.812 188.333 299.645 27 177.645 97.5C-1.5305 201.04 -66.3548 128 87.1452 1"></path>
                        </svg>
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="pricing-wrap">
                              <picture className="person">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Klient.b2b41d33.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Klient.b2b41d33.2c51aeec.gif
                                "
                                  type="image/gif"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Klient.b2b41d33.webp" />
                              </picture>
                              <div className="bottomText">Klient</div>
                              <svg
                                className="circleDraw"
                                id="circle4"
                                viewBox="0 0 58 58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  className="animation"
                                  cx="29.5"
                                  cy="29.5"
                                  r="29"
                                ></circle>
                              </svg>
                            </div>
                          </div>
                          <div className="card-back">
                            <div className="pricing-wrap">
                              <picture className="gif">
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Klient-Back.fc7ec369.webp
                                "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                  https://propozycje.owocni.pl/ux/Klient-Back.fc7ec369.5299a7ed.gif
                                "
                                  type="image/gif"
                                />
                                <img src="https://propozycje.owocni.pl/ux/Klient-Back.fc7ec369.webp" />
                              </picture>
                              <div className="boxText"></div>
                              <div className="circle">
                                <picture className="head">
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Klient-HEAD.118c9b41.webp
                                  "
                                    type="image/webp"
                                  />
                                  <source
                                    srcset="
                                    https://propozycje.owocni.pl/ux/Klient-HEAD.118c9b41.aaad8f76.png
                                  "
                                    type="image/png"
                                  />
                                  <img src="https://propozycje.owocni.pl/ux/Klient-HEAD.118c9b41.webp" />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            className="offscreen-text"
            id="offscreen-text"
            style={{ fontSize: "38px" }}
          >
            <span>M</span>
            <span>A</span>
            <span>R</span>
            <span>K</span>
            <span>E</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </p>
          <svg id="svg" height="396" width="1536" viewBox="0 0 1536 396"></svg>
          <div className="controls">
            <input
              className="input"
              id="input"
              type="text"
              placeholder="Type Here"
              autocomplete="off"
            />
            <button id="btn">
              <svg></svg>
            </button>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section>
        <div id="maciej">
          <div className="imgs">
            <img
              className="maciejImg1"
              src="https://propozycje.owocni.pl/ux/Projektant-Aureola.3b8da20b.jpg"
              alt=""
              style={{
                transform: "translate3d(0px, -94.2179px, 0px) scale(1.3, 1.3)",
              }}
            />
            <picture className="maciejImg2">
              <source
                srcset="
                https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.webp
              "
                type="image/webp"
              />
              <source
                srcset="
                https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.c342bc32.png
              "
                type="image/gif"
              />
              <img src="https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.webp" />
            </picture>

            <picture className="maciejImg3">
              <source
                srcset="
                https://propozycje.owocni.pl/ux/Head-of-copywriting.f6360b28.webp
              "
                type="image/webp"
              />
              <source
                srcset="
                https://propozycje.owocni.pl/ux/Head-of-copywriting.f6360b28.ef0edbaa.png
              "
                type="image/png"
              />
              <img src="https://propozycje.owocni.pl/ux/Head-of-copywriting.f6360b28.webp" />
            </picture>
          </div>
          <div className="contentText">
            <h2>
              Ludzie ignorują strony, <br />
              które ignorują ludzi...
            </h2>
            <p>
              Przedsiębiorca dosłownie traci zyski, skupiając <br />
              się na firmie zamiast na doświadczeniu
              <br />
              użytkownika. I tu pojawiamy się my...
            </p>
            <p>
              Owocni są od tego, by myśleć <br />
              tak, jak myślą Twoi klienci.
            </p>
            <a className="btn-neon send-offer-button js--triggerAnimation">
              Zapytaj o makietę dla siebie
              <div
                className="light"
                style={{ transform: "rotate(120deg) scale(0.7, 0.7)" }}
              ></div>
            </a>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section>
        <div id="textArrow">
          <h2>
            Przekształcamy złożone <br />
            problemy biznesowe w proste,
            <br />
            intuicyjne i skuteczne interfejsy.
          </h2>
          <div className="rowD">
            <div>
              <p>
                W agencji stronę projektuje grafik
                <br />
                <span className="underLine orange">
                  <span>-</span>
                  <span className="space"></span>
                  <span>t</span>
                  <span>o</span>
                  <span className="space"></span>
                  <span>b</span>
                  <span>ł</span>
                  <span>ą</span>
                  <span>d</span>
                  <span>!</span>
                </span>
                Takie strony ładnie
                <br />
                wyglądają, ale słabo działają.
              </p>
            </div>
            <img
              src="https://propozycje.owocni.pl/ux/Strzalka-Grafik-Marketer.f87779c7.jpg"
              alt=""
            />
            <div>
              <p>
                U nas pracę rozpoczyna marketer, <br />
                który ma
                <span className="underLine green">
                  <span>k</span>
                  <span>o</span>
                  <span>m</span>
                  <span>p</span>
                  <span>e</span>
                  <span>t</span>
                  <span>e</span>
                  <span>n</span>
                  <span>c</span>
                  <span>j</span>
                  <span>e</span>
                </span>
                by głęboko
                <br />
                analizować twarde dane z sieci
              </p>
            </div>
          </div>
          <div className="one">
            <p>
              Na bazie tych danych copywriter <br className="mobile" />
              tworzy przekonującą narrację.
              <br />
              Grafik ma za zadanie wzmocnić <br className="mobile" />
              ten przekaz na samym końcu.
              <br />
              <br className="mobile" />
              Działa to tak dobrze, że możemy dać
              <br className="mobile" />
              <span className="underLine">
                <span>z</span>
                <span>u</span>
                <span>c</span>
                <span>h</span>
                <span>w</span>
                <span>a</span>
                <span>ł</span>
                <span>ą</span>
                <span className="space"></span>
                <span>g</span>
                <span>w</span>
                <span>a</span>
                <span>r</span>
                <span>a</span>
                <span>n</span>
                <span>c</span>
                <span>j</span>
                <span>ę</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* section 7 */}
      <section>
        <div id="guaranteeWrapper">
          <div id="guarantee">
            <div className="mobileImg">
              <img
                src="https://propozycje.owocni.pl/ux/Projektantka-UX.ae39040d.995c06ff.png"
                alt=""
              />
              <img
                className="hand1Img"
                src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-PRAWA.10fe6d37.png"
                alt=""
                style={{ transform: "translate3d(10.0154px, -10.0154px, 0px)" }}
              />
              <img
                className="hand2Img"
                src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-LEWA.5795952e.3993493a.png"
                alt=""
                style={{ transform: "translate3d(10.0154px, -10.0154px, 0px)" }}
              />
            </div>
            <img
              src="https://propozycje.owocni.pl/ux/Gwarancja.e6e5fa2c.jpg"
              alt=""
              srcset="
              https://propozycje.owocni.pl/ux/Gwarancja-650.5c4aedce.jpg  960w,
              https://propozycje.owocni.pl/ux/Gwarancja.e6e5fa2c.jpg     1060w
            "
              sizes="(max-width: 900px) 650px, 1150px"
            />
            <div className="rowD">
              <div>
                <h2>
                  Gwarantujemy dowieźć Ci
                  <br />
                  duużo wyższe wyniki niż <br />
                  ma Twoja obecna strona, <br />
                  albo nic nie zapłacisz.
                </h2>
                <p>
                  <b>- zwrot 100% środków!</b>
                  <br />
                  Szczegółowy opis gwarancji znajdziesz <br />w sekcji pytania
                  na dole strony.
                </p>
              </div>
              <div className="imgs">
                <img
                  src="https://propozycje.owocni.pl/ux/Projektantka-UX.ae39040d.995c06ff.png"
                  alt=""
                />
                <img
                  className="hand1"
                  src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-PRAWA.10fe6d37.png"
                  alt=""
                  style={{
                    transform: "translate3d(-26.7078px, -26.7078px, 0px)",
                  }}
                />
                <img
                  className="hand2"
                  src="https://propozycje.owocni.pl/ux/Projektantka-UX-Dlon-LEWA.5795952e.3993493a.png"
                  alt=""
                  style={{
                    transform: "translate3d(-26.7078px, -26.7078px, 0px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 8 (--time)*/}
      <section id="videoSection">
        <div>
          <h2
            className="textAnimation titleAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            Jeśli myślisz systemowo
            <br />
            <br className="mobile" />
            możesz sięgać gwiazd!
          </h2>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            Miej na względzie realizację
            <br className="mobile" />
            ambitnych celów Twojej firmy,
            <br className="mobile" />
            <br />
            ale koncentruj się na tym, jakie <br className="mobile" />
            są cele Twoich klientów.
          </p>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            Makieta <span className="italy">user experience </span>to
            <br className="mobile" />
            narzędzie, które pozwoli <br />
            <br className="mobile" />
            Ci
            <span className="underLine underLine2">
              <span>u</span>
              <span>p</span>
              <span>o</span>
              <span>r</span>
              <span>z</span>
              <span>ą</span>
              <span>d</span>
              <span>k</span>
              <span>o</span>
              <span>w</span>
              <span>a</span>
              <span>ć</span>
              <span className="space"></span>
              <span>o</span>
              <span>f</span>
              <span>e</span>
              <span>r</span>
              <span>t</span>
              <span>ę</span>
            </span>
            <br className="mobile" />
            firmy w internecie
          </p>
        </div>
        <div>
          <div id="videos">
            <img
              className="videoBg"
              src="https://propozycje.owocni.pl/ux/VideoUX.98555e54.46666926.png"
              srcset="https://propozycje.owocni.pl/ux/VideoUX-650.280ddf04.png 960w ./img/VideoUX.98555e54.png 1000w"
            />
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
              style={{ display: "none" }}
            >
              <source
                src="https://propozycje.owocni.pl/ux/UX-JEDEN.4766b5b5.mp4"
                type="video/mp4"
              />
            </video>
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
              style={{ display: "block" }}
            >
              <source
                src="https://propozycje.owocni.pl/ux/UX-DWA.917254d4.mp4"
                type="video/mp4"
              />
            </video>
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
              style={{ display: "none" }}
            >
              <source
                src="https://propozycje.owocni.pl/ux/UX-TRZY.54e91b3f.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="textWithArrow">
            <div className="textVideo">
              <div className="">
                <h3>
                  CELE KLIENTÓW
                  <br />I UŻYTKONIKÓW
                </h3>
              </div>
              <div
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                className="active"
              >
                <h3>
                  Twoje cele
                  <br />
                  biznesowe
                </h3>
              </div>
              <div
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                className=""
              >
                <h3>
                  Rezultaty
                  <br />
                  są tutaj
                </h3>
              </div>
            </div>
          </div>
          <div className="para">
            <img
              className="sp"
              src="https://propozycje.owocni.pl/ux/sp.995a6077.webp"
              alt=""
              style={{ transform: "translate3d(0px, -2.9487px, 0px)" }}
            />
            <img
              className="dot1"
              src="https://propozycje.owocni.pl/ux/dot1.7781bcc1.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot2"
              src="https://propozycje.owocni.pl/ux/dot2.e99cba48.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot3"
              src="https://propozycje.owocni.pl/ux/dot3.1e955529.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot4"
              src="https://propozycje.owocni.pl/ux/dot2.e99cba48.webp"
              alt=""
              style={{ transform: "scale(0.5, 0.5)" }}
            />
          </div>
        </div>
      </section>

      {/* section 9 */}
      <section>
        <div id="WhatGet">
          <p className="textAnimation">
            Prowadzimy odwiedzających przez proces sprzedaży tak,
            <br />
            aby nie byli znudzeni, zdezorientowani i nie odeszli.
          </p>
          <p className="textAnimation">
            Kierujemy klientów do jednego produktu/usługi, <br />
            której potrzebuje, by rozwiązać swój problem.
          </p>
          <p className="textAnimation">
            Pozyskamy namiar, by móc się kontaktować
            <br />
            nawet, jeśli klient opuści Twoją stronę.
          </p>
          <a className="send-offer-button js--triggerAnimation">
            <span>
              <span>OK Wyślijcie mi niezobowiązującą ofertę </span>
            </span>
          </a>
        </div>
      </section>

      {/* section 10 */}
      <section id="stage">
        <div>
          <h2
            className="textAnimation titleAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            Wszystko zaczyna się
            <br />
            od dobrego procesu
          </h2>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            3 sprawdzone kroki do klikalnego prototypu <br />
            Twojej nowej,
            <span className="underLine underLine2">
              <span>w</span>
              <span>y</span>
              <span>s</span>
              <span>o</span>
              <span>k</span>
              <span>o</span>
              <span>w</span>
              <span>y</span>
              <span>d</span>
              <span>a</span>
              <span>j</span>
              <span>n</span>
              <span>e</span>
              <span>j</span>
            </span>
            strony
          </p>
        </div>
        <div className="dots">
          <div
            className="number1 number"
            style={{ left: "390.62px", top: "0.110352px" }}
          >
            <div>
              <svg id="svg1"></svg>
              <p
                className="text"
                id="text1"
                style={{
                  fontSize: "330px",
                  height: "330px",
                  lineHeight: "330px",
                }}
              >
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  1
                </span>
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  1
                </span>
              </p>
              <input className="input" id="input1" type="text" />
              <p
                className="offscreen-text"
                id="offscreen-text1"
                style={{ fontSize: "330px" }}
              >
                <span>1</span>
                <span>1</span>
              </p>
            </div>
          </div>
          <div
            className="number2 number"
            style={{ left: "467.194px", top: "1685.24px" }}
          >
            <div>
              <svg id="svg2"></svg>
              <p
                className="text"
                id="text2"
                style={{
                  fontSize: "330px",
                  height: "330px",
                  lineHeight: "330px",
                }}
              >
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  2
                </span>
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  2
                </span>
              </p>
              <input className="input" id="input2" type="text" />
              <p
                className="offscreen-text"
                id="offscreen-text2"
                style={{ fontSize: "330px" }}
              >
                <span>2</span>
                <span>2</span>
              </p>
            </div>
          </div>
          <div
            className="number3 number"
            style={{ left: "241.131px", top: "3294.04px" }}
          >
            <div>
              <svg id="svg3"></svg>
              <p
                className="text"
                id="text3"
                style={{
                  fontSize: "330px",
                  height: "330px",
                  lineHeight: "330px",
                }}
              >
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  3
                </span>
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  3
                </span>
              </p>
              <input className="input" id="input3" type="text" />
              <p
                className="offscreen-text"
                id="offscreen-text3"
                style={{ fontSize: "330px" }}
              >
                <span>3</span>
                <span>3</span>
              </p>
            </div>
          </div>

          <img
            className="dotEnd"
            src="https://propozycje.owocni.pl/ux/monophy.e1100757.gif"
            alt=""
            style={{ left: "390.62px", top: "5487px" }}
          />
        </div>
        <p className="mobilenumber">1</p>
        <div className="stageD stage1">
          <div className="right texts">
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
            >
              <source src="./img/Psychologia.3e94c83a.mp4" type="video/mp4" />
            </video>

            <h3>Badanie rynku</h3>
            <p className="subtitle">
              Badamy liderów rynku.
              <br />
              Diagnozujemy zasady <br />
              konkurowania.
            </p>
            <p>
              Jak wygrywają liderzy w tej branży?
              <br />
              Co możemy zrobić lepiej od nich?
              <br />
              Na czym zbudujemy przewagę?
            </p>
          </div>
        </div>
        <p className="mobilenumber">2</p>
        <div className="stageD stage2">
          <div className="texts">
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
            >
              <source
                src="https://propozycje.owocni.pl/ux/Strategia-UX.79843a8b.mp4"
                type="video/mp4"
              />
            </video>

            <h3>Budowanie wartości</h3>
            <p className="subtitle">
              Ustalamy biznesowe cele i planujemy
              <br />
              fundamenty propozycji wartości
              <br />w ofercie nie do odrzucenia.
            </p>
            <p>
              Od rozpoznania okazji do szybkiego rozwoju, <br />
              aż po efektywny plan realizacji – strategia
              <br />
              to paliwo rakietowe nowoczesnej strony.
            </p>
          </div>
        </div>
        <p className="mobilenumber">3</p>
        <div className="stageD stage3">
          <div className="right texts">
            <video
              data-time="180"
              playsinline=""
              autoplay="true"
              loop=""
              muted=""
              data-vscid="d3xa7p0zx"
            >
              <source
                src="https://propozycje.owocni.pl/ux/Marketing-UX.7454d829.mp4"
                type="video/mp4"
              />
            </video>

            <h3>Makiety &amp; przepływy</h3>
            <p className="subtitle">
              Tworzymy unikalne prototypy dobrych
              <br />
              doświadczeń klienta i zmieniamy je <br />w topowe rezultaty
              biznesowe.
            </p>
            <p>
              Od pierwszego spojrzenia, przez głębokie
              <br />
              zainteresowanie aż do finalnej konwersji.
              <br />
              Twoja ofertam, tyle, że na sterydach.
            </p>
          </div>
        </div>
      </section>

      {/* section 11 */}
      <section>
        <div id="ImageSection">
          <div>
            <h2>
              PROTOTYP
              <br />
              STRONY
            </h2>
            <picture
              className="img1"
              style={{
                clipPath: "polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)",
                transform: "perspective(1298.7px) rotateX(70deg)",
              }}
            >
              <source
                srcset="https://propozycje.owocni.pl/ux/3dB.320568f9.png"
                media="(max-width: 960px)"
              />
              <source
                srcset="
                https://propozycje.owocni.pl/ux/Makieta-UX-strony.4f281932.1365da9d.png
              "
                type="image/jpg"
              />
              <img src="https://propozycje.owocni.pl/ux/Makieta-UX-strony.4f281932.1365da9d.png" />
            </picture>
            <picture
              className="img2"
              style={{
                clipPath: "polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)",
                transform: "perspective(1298.7px) rotateX(70deg)",
              }}
            >
              <source
                srcset="https://propozycje.owocni.pl/ux/3dA.23d16a38.jpg"
                media="(max-width: 960px)"
              />
              <source
                srcset="
                https://propozycje.owocni.pl/ux/Makieta-UX-strony.06297097.jpg
              "
                type="image/jpg"
              />
              <img src="https://propozycje.owocni.pl/ux/Makieta-UX-strony.06297097.jpg" />
            </picture>
            <div
              className="shadow"
              style={{ transform: "perspective(1298.7px) rotateX(70deg)" }}
            ></div>
          </div>
        </div>
      </section>

      {/* section 12 */}
      <section>
        <div id="makiety" style={{ height: "3995px" }}>
          <h2>
            Funkcjonalna makieta <br />
            <b>user experience</b>
          </h2>
          <div className="arrow">
            <div className="next">dalej »</div>
            <div className="prev">« cofnij</div>
          </div>
          <div className="mockupsWrapper" style={{ height: "3995px" }}>
            <div className="mockups">
              <img
                src="https://propozycje.owocni.pl/ux/1.06f8af9e.png"
                style={{ opacity: 0 }}
              />
              <img
                src="https://propozycje.owocni.pl/ux/2.ec21867c.png"
                style={{
                  opacity: 0,
                  transform: "translate(-1550px, 200px) scale(0.5, 0.7)",
                  filter: "blur(5px)",
                }}
              />
              <img
                src="https://propozycje.owocni.pl/ux/4.defeea9e.png"
                style={{
                  opacity: 0.3,
                  transform:
                    "translate(-775px, 200px) rotateY(10deg) scale(0.5, 0.7)",
                  filter: "blur(5px)",
                }}
              />
              <img
                src="https://propozycje.owocni.pl/ux/1.06f8af9e.png"
                style={{
                  opacity: 1,
                  transform: "rotateY(360deg)",
                  filter: "blur(0px)",
                }}
              />
              <img
                src="https://propozycje.owocni.pl/ux/2.ec21867c.png"
                style={{
                  opacity: 0.3,
                  transform:
                    "translate(775px, 200px) rotateY(350deg) scale(0.5, 0.7)",
                  filter: "blur(5px)",
                }}
              />
              <img
                src="https://propozycje.owocni.pl/ux/4.defeea9e.png"
                style={{ opacity: 0 }}
              />
              <img
                src="https://propozycje.owocni.pl/ux/3.5d1f2f90.png"
                style={{ opacity: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 13 */}
      <section>
        <div id="highResult">
          <video
            className="mobile"
            data-time="180"
            playsinline=""
            autoplay="true"
            loop=""
            muted=""
            data-vscid="d3xa7p0zx"
          >
            <source
              src="https://propozycje.owocni.pl/ux/Co-otrzymam.3d0d4083.mp4"
              type="video/mp4"
            />
          </video>

          <h2>
            Zdobądź gwiazdorski
            <br className="mobile" />
            projekt wykonawczy
            <br />
            zorientowany na <br className="mobile" />
            <span className="underLine">
              <span>w</span>
              <span>y</span>
              <span>s</span>
              <span>o</span>
              <span>k</span>
              <span>i</span>
              <span>e</span>
              <span className="space"></span>
              <span>r</span>
              <span>e</span>
              <span>z</span>
              <span>u</span>
              <span>l</span>
              <span>t</span>
              <span>a</span> <span>t</span>
              <span>y</span>
            </span>
          </h2>
          <div className="row">
            <div>
              <p>
                Przemyślana architektura informacji
                <br />
                uporządkuje ofertę firmy w internecie.
              </p>
              <p>
                Modele szkieletowe podstron <br />
                organizują całą zawartość.
              </p>
              <p>
                Lista pomysłów oraz idei
                <br />
                na 2x wyższą skuteczność.
              </p>
              <p>
                100% satysfakcji <br />
                lub zwrot środków
              </p>
            </div>
            <div>
              <video
                data-time="180"
                playsinline=""
                autoplay="true"
                loop=""
                muted=""
                data-vscid="d3xa7p0zx"
              >
                <source
                  src="https://propozycje.owocni.pl/ux/Co-otrzymam.3d0d4083.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* section 14 */}
      <section className="section" id="faq" data-v-14d6d6bc="">
        <div data-v-14d6d6bc="">
          <div className="header" data-v-3721cfae="" data-v-14d6d6bc="">
            <div className="header__top" data-v-3721cfae="">
              <div className="header__top__left" data-v-3721cfae="">
                <h2
                  className="textAnimation"
                  style={{
                    fontWeight: 400,
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Na wszystkie pytania <br />
                  odpowiedź brzmi TAK!
                </h2>
              </div>
            </div>
          </div>
          <div className="section__content" data-v-14d6d6bc="">
            <div className="faq-item" data-v-7b10b9fb="" data-v-14d6d6bc="">
              <div
                className="faq-item__header"
                data-v-7b10b9fb=""
                style={{ backgroundColor: "transparent" }}
              >
                <p className="h6" data-v-7b10b9fb="">
                  Możemy pracować przez mail, telefon, video, zoom, skype?
                </p>
                <div className="faq-item__handle" data-v-7b10b9fb=""></div>
              </div>
              <div
                className="faq-item__content"
                data-v-7b10b9fb=""
                style={{
                  height: "0px",
                  visibility: "hidden",
                  overflow: "hidden",
                  transition: "height 0.1s ease-in-out 0s",
                  backgroundColor: "transparent",
                }}
              >
                <p data-v-7b10b9fb="">
                  Jasne. Każdy z naszych klientów ma wyjątkowy styl pracy. Kim
                  jesteśmy żeby temu przeszkodzić? <br />
                  <br />
                  Zamiast mówić ludziom jak pracować stworzyliśmy narzędzia
                  wystarczająco uniwersalne, aby dodawać wartość do czyjegoś
                  systemu pracy.
                  <br />
                  <br />
                  Jedyna forma, której nie prowadzimy to głuchy telefon. Dlatego
                  wszystkie osoby decyzyjne muszą być na pokładzie podczas
                  ustalania wytycznych oraz celów projektowych.
                  <br />
                  <br />
                  Pierwsza rozmowa odbywa się telefonicznie bądź w ramach
                  konferencji (Jak Państwu wygodniej).
                  <br />
                  <br />
                  Efekty prac i ich iteracje możemy prowadzić mailowo.
                </p>
              </div>
            </div>
            <div className="faq-item" data-v-7b10b9fb="" data-v-14d6d6bc="">
              <div
                className="faq-item__header"
                data-v-7b10b9fb=""
                style={{ backgroundColor: "transparent" }}
              >
                <p className="h6" data-v-7b10b9fb="">
                  Jak wygląda proces? Rozumiem, że działacie samodzielnie.
                </p>
                <div className="faq-item__handle" data-v-7b10b9fb=""></div>
              </div>
              <div
                className="faq-item__content"
                data-v-7b10b9fb=""
                style={{
                  height: "0px",
                  visibility: "hidden",
                  overflow: "hidden",
                  transition: "height 0.1s ease-in-out 0s",
                  backgroundColor: "transparent",
                }}
              >
                <p data-v-7b10b9fb="">
                  Proces w pierwszej części polega na zdefiniowaniu konkretnych
                  wytycznych I dających się zmierzyć celów, która będziemy
                  realizować za pomocą strony. W kolejnych krokach ustalana jest
                  najlepsza droga do realizacji tych celów. <br />
                  <br />
                  Jeśli po Państwa stronie model biznesowy jest znany to całość
                  nie powinna zająć dłużej niż tydzień. <br />
                  <br />
                  Po zdefiniowaniu wytycznych w większości przypadków możemy
                  działać samodzielnie. Kontaktując się tylko w celach
                  akceptacji.
                </p>
              </div>
            </div>
            <div className="faq-item" data-v-7b10b9fb="" data-v-14d6d6bc="">
              <div
                className="faq-item__header"
                data-v-7b10b9fb=""
                style={{ backgroundColor: "transparent" }}
              >
                <p className="h6" data-v-7b10b9fb="">
                  Ile to trwa? Czy można przeprowadzić proces szybko?
                </p>
                <div className="faq-item__handle" data-v-7b10b9fb=""></div>
              </div>
              <div
                className="faq-item__content"
                data-v-7b10b9fb=""
                style={{
                  height: "0px",
                  visibility: "hidden",
                  overflow: "hidden",
                  transition: "height 0.1s ease-in-out 0s",
                  backgroundColor: "transparent",
                }}
              >
                <p data-v-7b10b9fb="">
                  Jeśli po Państwa stronie model biznesowy jest znany to całość
                  prac związana z opracowaniem makiety nie powinna zająć dłużej
                  niż 7 - 14 dni. <br />
                  <br />
                  Następnie opracowanie treści i grafik to ok. 14-20 dni
                  roboczych.
                </p>
              </div>
            </div>
            <div className="faq-item" data-v-7b10b9fb="" data-v-14d6d6bc="">
              <div
                className="faq-item__header"
                data-v-7b10b9fb=""
                style={{ backgroundColor: "transparent" }}
              >
                <p className="h6" data-v-7b10b9fb="">
                  Czy bierzecie pod uwagę wszystkie źródła ruchu?
                </p>
                <div className="faq-item__handle" data-v-7b10b9fb=""></div>
              </div>
              <div
                className="faq-item__content"
                data-v-7b10b9fb=""
                style={{
                  height: "0px",
                  visibility: "hidden",
                  overflow: "hidden",
                  transition: "height 0.1s ease-in-out 0s",
                  backgroundColor: "transparent",
                }}
              >
                <p data-v-7b10b9fb="">
                  Oczywiście. Źródło ruchu to najważniejszy parametr podczas
                  budowania wysokiego współczynnika konwersji. Skuteczna strona
                  musi być dopasowana do prawdziwego świata.
                </p>
              </div>
            </div>
            <div className="faq-item" data-v-7b10b9fb="" data-v-14d6d6bc="">
              <div
                className="faq-item__header"
                data-v-7b10b9fb=""
                style={{ backgroundColor: "transparent" }}
              >
                <p className="h6" data-v-7b10b9fb="">
                  Czy mogę zobaczyć przykładowy prototyp UX?
                </p>
                <div className="faq-item__handle" data-v-7b10b9fb=""></div>
              </div>
              <div
                className="faq-item__content"
                data-v-7b10b9fb=""
                style={{
                  height: "0px",
                  visibility: "hidden",
                  overflow: "hidden",
                  transition: "height 0.1s ease-in-out 0s",
                  backgroundColor: "transparent",
                }}
              >
                <p data-v-7b10b9fb="">
                  Oczywiście. Napisz na adres studio małpa owocni.pl lub użyj
                  formularza na samym dole tej strony. Napisz kilka słów o swoim
                  projekcie. Postaramy się wysłać Ci najbardziej zbliżony jaki
                  mamy.
                </p>
              </div>
            </div>
            <div className="faq-item" data-v-7b10b9fb="" data-v-14d6d6bc="">
              <div
                className="faq-item__header"
                data-v-7b10b9fb=""
                style={{ backgroundColor: "transparent" }}
              >
                <p className="h6" data-v-7b10b9fb="">
                  Czy dajecie na to 100% gwarancji satysfakcji?
                </p>
                <div className="faq-item__handle" data-v-7b10b9fb=""></div>
              </div>
              <div
                className="faq-item__content"
                data-v-7b10b9fb=""
                style={{
                  height: "0px",
                  visibility: "hidden",
                  overflow: "hidden",
                  transition: "height 0.1s ease-in-out 0s",
                  backgroundColor: "transparent",
                }}
              >
                <p data-v-7b10b9fb="">
                  Oczywiście. Pracujemy do skutku. Musisz być zadowolony. Masz
                  czas na namysł. <br />
                  <br />
                  Natomiast 100% zwrot przysługuje nawet do 14 dni od otrzymania
                  makiety. <br />
                  <br />
                  Natomiast jeśli chcesz przebić wyniki swojej obecnej strony
                  koniecznie powiedz nam o tym przed realizacją. Dane z obecnej
                  witryny są niezbędną częścią tworzenia lepszego modelu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="send-offer-button js--triggerAnimation">
          <span>
            <span>OK Wyślijcie mi niezobowiązującą ofertę </span>
          </span>
        </a>
      </section>
    </>
  );
};

export default UXDesignScreen;
