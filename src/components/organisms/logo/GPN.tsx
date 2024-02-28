import React from "react";
import { useSelector } from "react-redux";

const GPNData = {
  title:
    "Po pierwsze, rozdzieliliśmy symbol od sygnatury. Tak, aby nie stanowiło całości. Logo wymaga stanowiło całości. Logo wymaga zapisów międzynarodowych, a dzięki takiemu zabiegowi będziemożna eksponować jew zależności od kontekstu w pionie i w poziomie.",
  companyLogo: [
    "/assets/images/logo-design/cennik-logo-gpnt.jpg.webp",
    "/assets/images/logo-design/projekt-logo-gpnt2.jpg.webp",
    "/assets/images/logo-design/projekt-logo-gpnt.jpg.webp",
  ],
  productLogo: [
    "/assets/images/logo-design/cennik-logo-gpnt.jpg.webp",
    "/assets/images/logo-design/projekt-logo-gpnt2.jpg.webp",
    "/assets/images/logo-design/projekt-logo-gpnt.jpg.webp",
  ],
};

const GPN = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { GPNData } = screenData || {};

  const { title, companyLogo, productLogo } = GPNData || {};

  return (
    <>
      <section className="projects-thematic-section-blue">
        <div className="container custom-container-blue projects-over-hid">
          <div className="row">
            <div className="col-md-12 projects-h-100"></div>
            {/* ignore */}
            <div className="col-md-12 projects-blue-section-m-text projects-rwd-hide-text2">
              <p className="theme-desc text-center projects-blue-text2">
                Po pierwsze, rozdzieliliśmy symbol od sygnatury. Tak, aby nie
                stanowiło całości. Logo wymaga <br />
                zapisów międzynarodowych, a dzięki takiemu zabiegowi będzie
                można eksponować je <br />
                w zależności od kontekstu w pionie i w poziomie. <br />
              </p>
            </div>

            <div className="col-md-4 text-center projects-rwd-hide-img1">
              <img
                src={companyLogo && companyLogo.length > 0  ? companyLogo[0] : ''}
                alt="Wycena projektu logo na przykładzie profesjonalnej realizacji dla GPNT"
                title="Cennik logo na przykładzie logo GPNT"
              />
            </div>

            <div className="col-md-4 text-center">
              <img
                src={companyLogo && companyLogo.length > 1  ? companyLogo[1] : ''}
                alt="Profesjonalny projekt logo wykonany przez specjalistów"
                title="Projekt logo na przykładzie GPN-T"
              />
            </div>

            <div className="col-md-4 text-center">
              <img
                src={companyLogo && companyLogo.length > 2  ? companyLogo[2] : ''}
                alt="Dwa szczegółowe przykłady projektu logo na przykładzie GPN-T"
                title="Projekty loga na przykładzie GPN-T"
              />
            </div>

            <div className="col-xs-12 text-center projects-rwd-hide-img2">
              <img
                src={companyLogo && companyLogo.length > 3 ? companyLogo[3] : ''}
                alt="Wycena projektu logo na przykładzie profesjonalnej realizacji dla GPNT"
                title="Cennik logo na przykładzie logo GPNT"
              />
            </div>

            <div className="col-md-12 projects-blue-section-m-text projects-rwd-hide-text1">
              <p className="theme-desc text-center projects-blue-text2">
                {/* Po pierwsze, rozdzieliliśmy symbol od sygnatury. Tak, aby nie
                stanowiło całości. Logo wymaga <br />
                zapisów międzynarodowych, a dzięki takiemu zabiegowi będzie
                można eksponować je <br />
                w zależności od kontekstu w pionie i w poziomie. <br /> */}
                {title && title}
              </p>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 projects-blue-img-rwd z-index-2">
              <a
                href=" https://www.youtube.com/watch?v=a6h9eJTJmCw"
                data-lity=""
              >
                <div className="projects-blue-video">
                  <div className="projects-blue-video-desc">
                    <strong>Zobacz krótkie video</strong> <br />
                    <p className="projects-blue-video-desc2">
                      <strong>Mniej niż 30 sekund</strong>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-2 col-sm-6 col-xs-12 projects-blue-img-rwd">
              <div className="projects-blue-cont-image1">
                <img
                  src={productLogo && productLogo.length > 0 ? productLogo[0] : ''}
                  className="projects-blue-image1"
                  alt="Identyfikacja wizualna stworzona za pomocą tego, co stworzył grafik logo"
                  title="Grafik logo prezentuje czcionki, których można użyć w logo"
                />
              </div>
            </div>

            <div className="col-md-6 projects-blue-img-rwd">
              <div className="">
                <img
                  src={productLogo && productLogo.length > 1 ? productLogo[1] : ''}
                  className="projects-blue-cont-image2 z-index-1"
                  alt="Materiały firmowe z przykładami identyfikacji wizualnej"
                  title="Przykładowe loga do których użyty został papier firmowy"
                />
              </div>
            </div>

            <div className="col-md-12 projects-h-50"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GPN;
