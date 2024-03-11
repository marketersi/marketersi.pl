import React from "react";
import { useSelector } from "react-redux";

const SalesBanner = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { heroSection } = screenData || {};
  return (
    <>
      <section className="sales_banner copywriter-page">
        <div className="container">
          <div className="top-section-banner copywriter-top-section-banner">
            <img
              style={{ maxWidth: "100%" }}
              src={heroSection?.image}
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
                    {/* <span className="copywriter-big">Copywriter,</span>{" "}
                    <br className="dont-delete" />
                    tyle, że{" "}
                    <span className="copywriter-green-number">100%</span>{" "}
                    lepszy. */}
                    {heroSection?.main_title}
                  </h1>
                  <h2 className="top-banner-long-text copywriter-top-banner-long-text">
                    {heroSection?.sub_title}
                  </h2>
                </div>
                <div className=" part-sec old-btn">
                  <a
                    href="#"
                    className="btn btn-green send-offer-button js--triggerAnimation"
                    data-toggle="modal"
                    data-target="#contactModal"
                  >
                    O.K. wyślijcie mi niezobowiązującą ofertę.
                  </a>
                </div>
              </div>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesBanner;
