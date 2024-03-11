import React from "react";
import { useSelector } from "react-redux";

const ImplementationEx3 = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example2 } = implementation || {};
  return (
    <section className="projects-thematic-section-gray">
      {
  example2?.map((item, index) => {
    return (
      <div className="container names-custom-container" key={index}>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="underline-down names-client-name copywriter-cname cname-big-mtop">
              {item?.title}
            </div>
            <div className="names-client-desc">
              {item?.subtitle}
            </div>
          </div>
        </div>
      
        <div className="naming-seo-img">
          <img
            className="custom-image-margin"
            src={item?.image}
            title="Przykład logo i hasła reklamowego dla firmy Nevel"
            alt="Hasła reklamowe są dobre dla Nevel"
          />
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image names-quote-fsize pnazw-names-quote-margin">
                {item?.quote}
              </h5>
              <p className="signature newsignmargin">{item?.quote_name}</p>
            </div>
          </div>
        </div>
      
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc">
                {item?.para_1}
              </p>
              <p className="theme-desc">
                {item?.para_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  })
}


      {/* <div className="container names-custom-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="names-client-name copywriter-cname cname-big-mtop underline-down">
              GDYNIA
            </div>

            <div className="names-client-desc">
              Mobilna restauracja w miejskim <br />
              stylu, czyli nazwa dla food-trucka.
            </div>
          </div>
        </div>
      </div>

      <div className="naming-seo-img">
        <img
          src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/naming-tworzenie-carmnik.jpg"
          title="Naming dla nowej firmy - foodtrucka"
          alt="Dobranie dobrego hasła reklamowego dla foodtrucka Carmnik"
        />
      </div>

      <div className="container custom-container1 names-custom-push-container">
        <div className="row">
          <div className="col-md-12">
            <p className="theme-desc">
              Chcieliśmy, by nazwa brzmiała przystępnie i działała „na ulicy”.
            </p>

            <p className="theme-desc names-custom-mright">
              Carmnik, czyli car (ang. samochód) + karmnik tworzy konkretny
              przekaz <br />w zabawnym, działającym na wyobraźnię wydaniu. Karma
              wraca!
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ImplementationEx3;
