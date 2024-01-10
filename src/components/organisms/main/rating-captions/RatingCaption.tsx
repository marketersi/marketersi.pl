import React from "react";
import style from "./rating.module.css";
import { Container, Image } from "react-bootstrap";

const RatingCaption = () => {
  return (
    <div className={style.rating}>
      <Container>
        <div className={style.ratingImg}>
          <Image
            src="/assets/images/RatingCaptain.svg"
            alt="rating image"
            width="auto"
            height="auto"
          />
          <Image
            src="/assets/images/20lat2.svg"
            alt="rating image"
            width={300}
            height="auto"
          />
        </div>

        <div className={style.ratingMainImg}>
          <Image
            src="/assets/images/homepage-Owocni-agencja-reklamowa.avif"
            alt="rating image"
            width={500}
            height={300}
          />
          <p>
            <span>Owocni eksperci cytowani są przez:</span>
          </p>
        </div>
        <div className={style.ratingLogoImg}>
          <Image
            src="/assets/images/logo-A.png"
            alt="rating image"
            width="auto"
            height="auto"
          />
          <Image
            src="/assets/images/logo-B.avif"
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
