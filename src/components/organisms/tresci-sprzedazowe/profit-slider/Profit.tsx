<<<<<<< HEAD
import React from 'react';
import ProfitSlider from './ProfitSlider';
import { useSelector } from 'react-redux';

const Profit = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { sliderSection } = screenData || {};
  const { images } = sliderSection || {};

  return (
    <div>
      {/* <section className="thematic-nr-section thematic-bg-section copywriter-ending-white-bg copywriter-standard-pt-40">
=======
import React from "react";
import ProfitSlider from "./ProfitSlider";
import { useSelector } from "react-redux";

const Profit = () => {

  const {  screenData } = useSelector((state) => state.sales);
  const { sliderSection } = screenData || {};
  const { images } = sliderSection || {};


  return (
    <div>
      <section className="thematic-nr-section thematic-bg-section copywriter-ending-white-bg copywriter-standard-pt-40">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        <img
          src="https://cdn.owocni.pl/img/copywriting-main-img/bg-black-top.png"
          alt="Image"
          className="white-bg"
        />
<<<<<<< HEAD
      </section> */}
=======
      </section>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      <section className="names-thematic-section-black names-thematic-section-black-fix copywriter-ending-padding copywriter-standard-pt-40">
        <div className="copywriter-ending-big text-center">
          {sliderSection?.main_title}
        </div>

        <div className="copywriter-ending-big-2 text-center">
          {sliderSection?.sub_title}
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc text-center copywriter-ending-white">
                {sliderSection?.para_1}
              </p>

              <p className="theme-desc text-center copywriter-ending-white">
                {sliderSection?.para_2}
              </p>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </section>
<<<<<<< HEAD

      {/*  to be deleted */}
      {/* <ProfitSlider images={images} /> */}
=======
      <ProfitSlider images={images} />
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </div>
  );
};

export default Profit;
