<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';

const PriceList = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { pricingSection } = screenData || {};
  return (
    <>
      <div className="WidthContent">
      <div className="WidthContent">
        <div className="copywriter-custom-headerOne text-center">
          {pricingSection?.title}
        </div>
        <div className="copywriter-custom-subheader text-center font-bold">
          {pricingSection?.sub_title} 
        </div>
      </div>
      <div className="container copywriter-whatwedo-container">
        <div className="row">
          <div className="col-lg-6 copywriter-what-we-do">
            {/* <img
                src={pricingSection?.image_left}
                title="Copywriting cennik usług pisania tekstów reklamowych"
                alt="Sprzedażowe teksty na stronę internetową firmy"
              /> */}
            <div className="copywriter-intro-sm-text">
            <b style={{display: "block"}}>Indywidualne Podejście</b> Tworzymy treści idealnie dopasowane do Twojej marki, które realizują Twoje cele i wyróżnią Cię na rynku, przyciągając uwagę potencjalnych klientów oraz budując długotrwałe relacje z odbiorcami.
            </div>
          </div>
          <div className="col-lg-6 copywriter-what-we-do">
            {/* <img
=======
import React from 'react'
import { useSelector } from 'react-redux'

const PriceList = () => {

  const {screenData} = useSelector((state) => state.sales);
  const {pricingSection} =screenData || {};
  return (
    <>
    <div className="container">
          <div className="copywriter-custom-header text-center">{pricingSection?.title}</div>
          <div className="copywriter-custom-subheader text-center">
            {pricingSection?.sub_title}
          </div>
        </div>
        <div className="container copywriter-whatwedo-container">
          <div className="row">
            <div className="col-lg-6 copywriter-what-we-do">
              <img
                src={pricingSection?.image_left}
                title="Copywriting cennik usług pisania tekstów reklamowych"
                alt="Sprzedażowe teksty na stronę internetową firmy"
              />
              <div className="copywriter-intro-sm-text">
               {pricingSection?.image_left_desc}
              </div>
            </div>
            <div className="col-lg-6 copywriter-what-we-do">
              <img
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
                className="custom-margin-bottom-5 nierobimy-max-width-100"
                src={pricingSection?.image_right}
                title="Usługi copywriterskie dla Twojej firmy"
                alt="Opracowanie tekstów dla jednej strony internetowej"
<<<<<<< HEAD
              /> */}
            <div className="copywriter-intro-sm-text copywriter-intro-sm-mright">
              {/* {pricingSection?.image_right_desc} */}
              <b style={{display: "block"}}>100% Gwarancji Satysfakcji</b>  Nielimitowane poprawki, aż osiągniesz pełne zadowolenie. Treści, które nie tylko przyciągają uwagę, ale także SKUTECZNIE zwiększają sprzedaż
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container1">
        <div className="row">
          <div className="col-md-12 copywriter-custom-smaller">
            <p className="theme-desc1 mobileTextLayout">{pricingSection?.para_1}</p>

            <p className="theme-desc1 mobileTextLayout2">{pricingSection?.para_2}</p>

            <p className="theme-desc2">
              <strong>{pricingSection?.bottom_text}</strong>
            </p>

            <img
              src={pricingSection?.brand_logo}
              className="copywriter-owocni"
              title="Agencja reklamowa przygotuje teksty reklamowe dla Ciebie"
              alt="Logo firmy Owocni, która zajmuje się copywritingiem"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      </div>
      {/* to be deleted */}
      {/* <div className="copywriter-wierzymy-container">
        <img
          src={pricingSection?.banner_img}
          title="Odpowiednie slogany reklamowe wzmocnią pozycję Twojej firmy"
          alt="Owocni oferują pisanie tekstów dla małych firm"
        />
      </div> */}
    </>
  );
};

export default PriceList;
=======
              />
              <div className="copywriter-intro-sm-text copywriter-intro-sm-mright">
               {pricingSection?.image_right_desc}
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 copywriter-custom-smaller">
              <p className="theme-desc">
               {pricingSection?.para_1}
              </p>

              <p className="theme-desc">
                {pricingSection?.para_2}
              </p>

              <p className="theme-desc">
                <strong>
                  {pricingSection?.bottom_text}
                </strong>
              </p>

              <img
                src={pricingSection?.brand_logo}
                className="copywriter-owocni"
                title="Agencja reklamowa przygotuje teksty reklamowe dla Ciebie"
                alt="Logo firmy Owocni, która zajmuje się copywritingiem"
              />
            </div>
          </div>
        </div>
        <div className="copywriter-wierzymy-container">
          <img
            src={pricingSection?.banner_img}
            title="Odpowiednie slogany reklamowe wzmocnią pozycję Twojej firmy"
            alt="Owocni oferują pisanie tekstów dla małych firm"
          />
        </div>
    </>
  )
}

export default PriceList
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
