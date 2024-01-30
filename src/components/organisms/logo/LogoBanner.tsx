import React from 'react'
import './logo.css'

const LogoBanner = () => {
  return (
    <>
    <section>
        <div className="container">
          <div className="top-section-banner projects-top-section-banner projects-fix-top-pos">
            <img
              src="/assets/images/logo-design/Projektowanie-logo-dla-firm1.jpg.webp"
              className="projects-main-image-logop"
              alt="Zespół, którego misja to projektowanie logo dla firm"
              title="Zespół, którego misja to projektowanie logo dla firm"
            />
          </div>

          <div className="col-md-6 col-46 projects-top-banner-container">
            <div className="top-banner-text projects-top-banner-text">
              <h1 className="top-banner-title projects-top-banner-title projects-top-title-mright">
                Projektowanie logo
                <br className="dont-delete" />
                które pokochasz
              </h1>
              <h2 className="top-banner-long-text projects-top-banner-long-text">
                Dajemy Ci{" "}
                <strong>
                  <span className="orange-big-underline">100% gwarancji.</span>
                </strong>
              </h2>
            </div>
          </div>

          <div className="col-md-6 col-46 projects-top-banner-container">
            <div className="projects-under-top-banner-text">
              <p className="p-0">
                Piękna, ręcznie stworzona marka — nawet w 5 dni. <br />
              </p>
              <p className="margin-top-0 p-0">
                Praca do pełnej satysfakcji — bez limitu projektów. <br />
              </p>
              <p className="margin-top-0 p-0">
                Nr 1 w Polsce — 1.000 zadowolonych klientów.
              </p>{" "}
            </div>
          </div>

          <div className="col-md-12 part-sec">
            <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
              <button
                className="download-catalog-button-2 projects-download-catalog-button send-offer-button js--triggerAnimation"
                type="button"
                fdprocessedid="k9dho"
              >
                <strong>OK. Wyślijcie mi niezobowiązującą ofertę</strong>
              </button>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </section>

    </>
  )
}

export default LogoBanner