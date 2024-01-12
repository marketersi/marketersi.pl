import React from 'react'

const SalesBanner = () => {
  return (
    <>
     <section className="sales_banner copywriter-page">
        <div className="container">
          <div className="top-section-banner copywriter-top-section-banner">
            <img
              style={{ maxWidth: "100%" }}
              src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Copywriter.jpg"
              className=""
              title="Owocni wiedzą, jak się pisze teksty na stronę"
              alt="Uśmiechnięci copywriterzy"
            />
          </div>
          <div className="top-section-banner-text">
            <div className="row">
              <div className="col-md-6 col-46 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text">
                  <h1 className="top-banner-title copywriter-top-banner-title">
                    <span className="copywriter-big">Copywriter,</span>{" "}
                    <br className="dont-delete" />
                    tyle, że{" "}
                    <span className="copywriter-green-number">100%</span>{" "}
                    lepszy.
                  </h1>
                  <h2 className="top-banner-long-text copywriter-top-banner-long-text">
                    100% gwarancji efektu tekstów <br className="dont-delete" />
                    albo zwrot 100% pieniędzy. <br className="dont-delete" />
                    Znasz pewniejszą ofertę?
                  </h2>
                </div>
              </div>
              <div className="col-md-12 part-sec old-btn">
                <a
                  href="#"
                  className="btn btn-green send-offer-button js--triggerAnimation"
                  data-toggle="modal"
                  data-target="#contactModal"
                >
                  O.K. wyślijcie mi niezobowiązującą ofertę.
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SalesBanner