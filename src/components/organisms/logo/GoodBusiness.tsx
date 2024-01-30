import React from 'react'

const GoodBusiness = () => {
  return (
    <>
    <section>
        <div className="container projects-custom-container1 mt-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="theme-title1 projects-big-header">
                Dobry biznes zaczyna <br />
                się od dobrego logo
              </h1>

              <p className="theme-desc text-center p-0 projects-under-big-header">
                <strong>
                  Dobre logo pomaga rozwijać firmę znacznie szybciej.
                </strong>
                <br />
                Właściwy projekt przyciąga porządanych klientów i łatwo <br />
                zapada im w pamięć. Wyróżnia Cię na tle konkurencji <br />i
                czyni Twoją markę niemożliwą do zignorowania.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/assets/images/logo-design/Projektowanie-logo-dla-firm-anatomia.jpg.webp"
          className="img-background-logop"
          alt="Obrazek przedstawiający anatomię projektowania logo"
          title="Projektowanie logo firmy - przekrój działań"
        />
      </section>
    </>
  )
}

export default GoodBusiness