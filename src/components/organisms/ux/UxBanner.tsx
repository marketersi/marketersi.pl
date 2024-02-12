import React from 'react'

const UxBannerData = {
  title1: "Makieta",
  titleStyle: "UX",
  title2: "wykonawcza",
  description1: "To klikalny prototyp projektu strony.",
  description2: "Przemyślany, by wygrać konkurencję.",
  description3: ["Dla tych, co","myślą", "przyszłościowo"],
  description4: "na temat obecności firmy w internecie.",
  video:"https://copywriting.pl/files/resources/Projekt-Makiety-UX.mp4",
}

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
                {UxBannerData.title1}<span className="UX">{UxBannerData.titleStyle}</span>
                </span>
                <br />
                {UxBannerData.title2}
              </h1>
              <p className="subitle">{UxBannerData.description1}</p>
              <p className="subitle">{UxBannerData.description2} </p>
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
              <p className="subitle">{UxBannerData.description4}</p>
            </div>
            <video
              playsinline=""
              id="phoneMove"
              loop="true"
              autoplay="true"
              data-vscid="d3xa7p0zx"
            >
              <source
                src={UxBannerData.video}
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