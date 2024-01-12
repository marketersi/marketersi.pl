import React from 'react'
import '../tresci.css'

const OptionBox2 = () => {
  return (
    <div>
        <section className="projects-gray-opinion-2">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image">
                <img
                  className="opinion-box-inside-image"
                  src="https://cdn.owocni.pl/img/single-copywriter/seo-images/klient-agencji-reklamowej-owocni.jpg"
                  title="Usługi copywriterskie dla różnych branż"
                  alt="Opinia klienta jest bardzo ważna dla agencji marketingowej"
                />
              </div>
              {/* <div className="opinion-box-content rwd-opinion-image opinion-client-bg-prawo copywriter-prawo">
                <img
                  className="opinion-box-inside-image"
                  src="https://cdn.owocni.pl/img/single-copywriter/seo-images/klient-agencji-reklamowej-owocni.jpg"
                  title="Usługi copywriterskie dla różnych branż"
                  alt="Opinia klienta jest bardzo ważna dla agencji marketingowej"
                />
              </div> */}
              <div className="opinion-box-content projects-opinion-2 copywriter-prawo-text">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>OPINIA KLIENTA</strong>
                </p>
                <div className="opinion-box-text copywriter-opinion-box-text">
                  „Reklamy kancelarii muszą być <br />
                  zgodne z rygorystycznymi przepisami. <br />
                  Na szczęście Owocnym i tak udało <br />
                  się napisać bardzo przekonujące treści. <br />
                  Są godni polecenia.”
                </div>
                <button className="download-catalog-button projects-opinion-button copywriter-green-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation" type="button">
                  <strong>Wyślijcie mi niezobowiązującą ofertę.</strong>
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-12 projects-empty-opinion-box"></div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default OptionBox2