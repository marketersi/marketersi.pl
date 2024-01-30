import React from 'react'

const UxVideo = () => {
  return (
    <>
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
    </>
  )
}

export default UxVideo