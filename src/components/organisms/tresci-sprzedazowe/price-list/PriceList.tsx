import React from 'react'

const PriceList = () => {
  return (
    <>
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
    </>
  )
}

export default PriceList