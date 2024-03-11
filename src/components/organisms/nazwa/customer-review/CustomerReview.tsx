import React from "react";
import { useSelector } from "react-redux";

const CustomerReview = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example1 } = implementation || {};
  return (
    <section className="projects-gray-opinion-1">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image opinion-box-image-right right-image-opinion-fix custom-text-align-right">
                <img
                  className="opinion-box-inside-image"
                  src={example1?.image_4}
                  title="Kobieta zadowolona z efektu tworzenia nazwy dla firm"
                  alt="Klientka zadowolona z procesu jakim jest tworzenie nazw"
                />
              </div>
              <div className="opinion-box-content rwd-opinion-image opinion-client-bg-iglarki naming-no-bg naming-opinion-img">
                <img
                  src={example1?.customer_image}
                  title="Kobieta zadowolona z efektu tworzenia nazwy dla firm"
                  alt="Klientka zadowolona z procesu jakim jest tworzenie nazw"
                />
              </div>
              <div className="opinion-box-content opinion-box-content-left projects-opinion-1 projects-opinion-1-new naming-opinion-text">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>{example1?.customer_quote}</strong>
                </p>
                <div className="opinion-box-text">
                  {example1?.customer_description}
                </div>

                <button
                  className="download-catalog-button names-new-btn send-offer-button  js--triggerAnimation pnazw-opinion-btn"
                  type="button"
                >
                  <strong>{example1?.review_buttonText}</strong>
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-12 projects-empty-opinion-box"></div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;


