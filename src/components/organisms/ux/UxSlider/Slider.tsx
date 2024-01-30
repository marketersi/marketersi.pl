import React from 'react'

const Slider = () => {
  return (
    <>
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
    </>
  )
}

export default Slider