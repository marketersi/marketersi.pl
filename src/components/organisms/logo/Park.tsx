import React from 'react'

const Park = () => {
  return (
    <>
    <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-espace"></div>
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
                GPNT <br />
                <strong>GDAŃSK</strong>
              </h5>
              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                Odświeżyliśmy <br />
                wizerunek Gdańskiego <br />
                Parku Naukowo-Technologicznego
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-margin-2">
                Praca nad nowym wizerunkiem Parku Naukowo-Technologicznego
                polegała <br />
                na przeniesieniu logo z poprzedniej epoki do technologicznej
                współczesności. <br />
                Wyglądać nowocześnie, ale zachowując ciągłość i spójność.
              </p>
            </div>

            <div className="col-md-12 text-center projects-h-50">
              <p className="projects-new-blue-logo text-center">
                <strong>Stare logo</strong>
              </p>
            </div>

            <div className="col-md-12 text-center custom-margin-bottom-40">
              <img
                src="/assets/images/logo-design/przyklad-starego-projektu-logo.png.webp"
                className="starelogo"
                alt="Prezentacja projektu logo, starego"
                title="Przykład starego projektu logo Gdańskiego Parku"
              />
            </div>

            <div className="col-md-12 text-center projects-h-100">
              <p className="projects-new-blue-text text-center">
                <strong>Nowe logo</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <img
        src="/assets/images/logo-design/nowy-logotyp-dla-firmy-park.jpg.webp"
        className="img-background-logop park-img w-100"
        alt="Nowe logo Gdańskiego Parku wykonane przez profesjonalistów"
        title="Nowy logotyp dla firmy na przykładzie nowego logo Gdańskiego Parku"
      />
    </>
  )
}

export default Park