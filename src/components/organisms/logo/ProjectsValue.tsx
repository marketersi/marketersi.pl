import React from 'react'

const ProjectsValue = () => {
  return (
    <>
    <section>
        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              
            </div>
            <div className="col-md-12">
              <h3 className="projects-theme-title3 no-after p-bottom-10">
                Jak wyceniamy projekty?
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-margin-left">
                Proces zamknięty jest w rozsądnej cenie dla małych firm. <br />
                Każdy projekt jest inny. Każdy wyceniamy indywidualnie, <br />
                elastycznie i przyjaźnie. Tylko jakość nie podlega negocjacji.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="thematic-section projects-gray-background">
        <div className="projects-wierzymy-container">
          <div className="projects-wierzymy">
            <img
              src="/assets/images/logo-design/Logo-projekt-wierzymy.jpg.webp"
              className="projects-wierzymy-img"
              alt="Logo projekt wizytówki"
              title="Logo - projekt z napisem “wierzymy”"
            />
          </div>
        </div>

        <img
          src="/assets/images/logo-design/Logo-projekt-wierzymy.jpg.webp"
          className="img-background-logop img-background-logop-rwd"
          alt="Logo projekt wizytówki"
          title="Logo - projekt z napisem “wierzymy”"
        />
        <div className="projects-custom-container3">
          <div className="projects-container-textright projects-rwd-tcenter">
            <h5 className="projects-custom-h5">
              90% pracy wykonamy dla <br />
              Ciebie za 50% ceny.
            </h5>

            <p className="theme-desc projects-theme-desc-p">
              Drugą połowę <br />
              rozliczymy dopiero, gdy <br />
              będziesz w pełni zadowolony <br />z wszystkich efektów naszej
              pracy.
            </p>

            <p className="theme-desc text-center projects-co-otrzymasz-sub projects-happy-clients-margin">
              Galeria
              <br />
              Realizacji
            </p>
          </div>
        </div>

        <img
          src="/assets/images/logo-design/Przyklady-logo-firmy.jpg.webp"
          className="img-background-logop"
          alt="Jakie są najlepsze przykłady logo?"
          title="Przykłady logo dla firm o różnej działalności"
        />
      </section>
    </>
  )
}

export default ProjectsValue