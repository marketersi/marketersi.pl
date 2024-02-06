import React from "react";
import "./customer-rating.css";
import { Variants, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Stars from "@/components/molecules/Ratings";

const CustomerRating = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { ratingSection } = screenData || {};
  const { CustomerReview } = ratingSection || {};

  const slideAnimationTop: Variants = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "ease",
        bounce: 0.4,
        damping: 25,
        stiffness: 70,
        duration: 0.9,
      },
    },
  };
  return (
    <section className="container">
      <div className="brand-img-container">
        {/* <img src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-A.83958f8c.png&w=640&q=75" />
        <img src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-B.eb7ea4b5.png&w=640&q=75" /> */}
        <img src={ratingSection?.brand_image_1} alt="" />
        <img src={ratingSection?.barnd_image_2} alt="" />
      </div>
      <p
        className="text-center my-5"
        style={{ fontSize: "24px", fontWeight: 300 }}
      >
        {/* Ta usługa jest oceniana średnio na <br />
        przez firmy, które mówią takie rzeczy jak: */}
        {ratingSection?.rating_text}
        {<Stars rating={ratingSection?.rating} />}
      </p>

      <div className="d-flex justify-content-center align-items-center">
        <p className="emphasized-text">
          <em>
            {/* “poziom szczegółowości <br />
            był niesamowity!” */}
            {CustomerReview?.review}
          </em>
        </p>
        <div className="mx-5">
          <p>
            <strong className="text-color">
              {/* Monika Marchewka  */}
              {CustomerReview?.name}
            </strong>
            <br />
            {/* Marketing Manager  */}
            {CustomerReview?.designation}
            <br />
            {/* Systegra S.A.{" "} */}
            {CustomerReview?.company}
          </p>
          <p></p>
        </div>
      </div>

      <div className="image-container">
        <img
          // src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpercent.5bb59584.gif&w=384&q=75"
          src={ratingSection?.rating_image_1}
          alt=""
        />
        <motion.img
          // src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTak.1d7786af.png&w=384&q=75"4
          src={ratingSection?.rating_image_2}
          alt=""
          className="img-left-merge"
          initial="offscreen"
          whileInView="onscreen"
          variants={slideAnimationTop}
        />
      </div>

      <p
        className="text-center my-5"
        style={{ fontSize: "24px", fontWeight: 300 }}
      >
        {/* Na pytanie: Czy po wdrożeniu wskazówek od naszego <br />
        eksperta wzrost wyników był zauważalny/mierzalny?*/}
        {ratingSection?.question} <br />{" "}
        <b>
          {/* 93% klientów odpowiada, że TAK! */}
          {ratingSection?.answer}
        </b>
      </p>
    </section>
  );
};

export default CustomerRating;
