import React from "react";

const IgnoreSitesData ={
  image: "https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.webp",
  title: "Ludzie ignorują strony, które ignorują ludzi...",
  description1: "descriptions",
  description2: "descriptions",
}

const IgnoreSites = () => {
  return (
    <>
      <section>
        <div id="maciej">
          <div className="imgs">
            <img
              className="maciejImg1"
              // src="https://propozycje.owocni.pl/ux/Projektant-Aureola.3b8da20b.jpg"
              // src={IgnoreSitesData.image}
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
              <img src={IgnoreSitesData.image}/>
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
    </>
  );
};

export default IgnoreSites;
