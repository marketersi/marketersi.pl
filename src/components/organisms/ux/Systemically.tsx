import React from 'react'

const Systemically = () => {
  return (
    <>
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
    </>
  )
}

export default Systemically