import React from "react";
import style from "../opinie.module.css";
import BrandSlide from "./BrandSlide";

const Brands = () => {
  return (
    <>
      <div className={style.brands}>
        <div className={style.opinionContainer}>
          <h2>
            Firmy, które <span> na pewno znasz,</span> <br />
            dla których pracowaliśmy.
          </h2>
          <BrandSlide />
          <BrandSlide />
          <BrandSlide />
        </div>
      </div>
    </>
  );
};

export default Brands;
