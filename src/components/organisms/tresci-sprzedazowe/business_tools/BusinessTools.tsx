import React from "react";
import { useSelector } from "react-redux";

const BusinessTools = () => {
<<<<<<< HEAD
  const { screenData } = useSelector((state) => state.sales);
  const { buisnessToolsSection } = screenData || {};
=======

  const {screenData} = useSelector((state) => state.sales);
  const {buisnessToolsSection} = screenData || {};
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

  return (
    <>
      <section className="business_tools">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center copywriter-cmargin-2">
              <h1 className="copywriter-big-header-2">
<<<<<<< HEAD
                {/* {buisnessToolsSection?.title} */}
                Skupiamy Się <br /> Na Wynikach, <br /> Nie Na Ilości Znaków
=======
                {buisnessToolsSection?.title}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              </h1>
            </div>
          </div>
        </div>
        <div className="container text-center copywriter-custom-container-1 copywriter-rwd-mtb-40">
          <div className="copywriter-image-box">
            <div className="copywriter-image-box-1">
              <div className="copywriter-image-label">
<<<<<<< HEAD
                {/* <strong>{buisnessToolsSection?.img_1_text}</strong> */}
                <strong>
                  Treści <br />
                  sprzedażowe
=======
                <strong>
                  {buisnessToolsSection?.img_1_text}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
                </strong>
              </div>
              <img
                src={buisnessToolsSection?.image_1}
                title="Pisanie tekstów oferty handlowej"
                alt="Owocni to numer 1 jeśli chodzi o skuteczny copywriting"
<<<<<<< HEAD
                className="businessToolImage"
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-2">
              <div className="copywriter-image-label">
<<<<<<< HEAD
                {/* <strong>{buisnessToolsSection?.img_2_text}</strong> */}
                <strong>
                  Treści <br /> na stronę
=======
                <strong>
                {buisnessToolsSection?.img_2_text}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
                </strong>
              </div>
              <img
                src={buisnessToolsSection?.image_2}
                title="Coptwriter oferta - przygotowywanie tekstów na stronę"
                alt="Dobrze przygotowane teksty na stronę to gwarancja wzrostu zysków"
<<<<<<< HEAD
                className="businessToolImage"
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-3">
              <div className="copywriter-image-label">
<<<<<<< HEAD
                <strong>{buisnessToolsSection?.img_3_text}</strong>
=======
                <strong>
                {buisnessToolsSection?.img_3_text}
                </strong>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              </div>
              <img
                src={buisnessToolsSection?.image_3}
                title="Usługi copywriterskie obejmują treści reklamowe"
                alt="Lekkie pióro to cecha charakterystyczna Owocnych"
<<<<<<< HEAD
                className="businessToolImage"
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-4">
              <div className="copywriter-image-label">
<<<<<<< HEAD
                {/* <strong>{buisnessToolsSection?.img_4_text}</strong> */}
                <strong>
                  Unikalne <br /> artykuły
=======
                <strong>
                {buisnessToolsSection?.img_4_text}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
                </strong>
              </div>
              <img
                src={buisnessToolsSection?.image_4}
                title="Lekkie pióro pomaga w pisaniu artykułów"
                alt="Artykuł - nad takimi rzeczami pracuje copywriter"
<<<<<<< HEAD
                className="businessToolImage"
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-5">
              <div className="copywriter-image-label">
<<<<<<< HEAD
                <strong>{buisnessToolsSection?.img_5_text}</strong>
=======
                <strong>
                {buisnessToolsSection?.img_5_text}
                </strong>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              </div>
              <img
                src={buisnessToolsSection?.image_5}
                title="Copywriting katalogów i broszur"
                alt="Broszura i katalog to podstawa"
<<<<<<< HEAD
                className="businessToolImage"
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
<<<<<<< HEAD
            <div className="col-md-12 text-center copywriter-cmargin-3 ">
              <div className="copywriter-custom-text-1 mobileLefttext">
                {/* {buisnessToolsSection?.para_1} */}
                Zbyt wiele agencji liczy słowa, <br/> zapominając, że prawdziwą
                wartość <br/> stanowi ich wpływ na Twoje cele biznesowe.
              </div>
              <div className="copywriter-custom-text-2 para-2 mobileLefttext">
                {buisnessToolsSection?.para_2}
=======
            <div className="col-md-12 text-center copywriter-cmargin-3">
              <div className="copywriter-custom-text-1">
              {buisnessToolsSection?.para_1}
              </div>

              <div className="copywriter-custom-text-2">
              {buisnessToolsSection?.para_2}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessTools;
