import React from 'react'

const UxBanner = () => {
  return (
    <>
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
    </>
  )
}

export default UxBanner