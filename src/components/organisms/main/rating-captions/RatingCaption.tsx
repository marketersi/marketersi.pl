import React from "react";
import style from "./rating.module.css";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const RatingCaption = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const { brandSection } = screenData;

  return (
    <div className={style.rating}>
      <Container>
        <div className={style.ratingImg}>
          <Image
            // src="/assets/images/RatingCaptain.svg"
            src={brandSection?.brand_image1}
            alt="rating image"
            width="auto"
            height="auto"
          />
          <Image
            // src="/assets/images/20lat2.svg"
            src={brandSection?.brand_image2}
            alt="rating image"
            width={300}
            height="auto"
          />
        </div>

        <div className={style.ratingMainImg}>
          <Image
            // src="/assets/images/homepage-Owocni-agencja-reklamowa.avif"
            src={brandSection?.banner_image}
            alt="rating image"
            width={500}
            height={300}
          />
          <p>
            <span>
              {/* Owocni eksperci cytowani są przez: */}
              {brandSection?.banner_text}
            </span>
          </p>
        </div>
        <div className={style.ratingLogoImg}>
          <Image
            // src="/assets/images/logo-A.png"
            src={brandSection?.brand_logo1}
            alt="rating image"
            width="auto"
            height="auto"
          />
          <Image
            // src="/assets/images/logo-B.avif"
            src={brandSection?.brand_logo2}
            alt="rating image"
            width="auto"
            height="auto"
          />
        </div>
        <div className={style.ratingCOntent}>
          <h2>
            Wszystko, czego potrzebujesz, <br /> by <span>rozwijać firmę</span>{" "}
            szybciej
          </h2>
          <p>
            To nie tylko zestaw świetnych kampanii reklamowych, <br />
            przyciągających obrazów i przekonujących treści.
          </p>
          <p>
            Wszystko, czego potrzebujesz, <br />
            by <span>rozwijać firmę</span> szybciej
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RatingCaption;
