import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";

const Experts = () => {
  return (
    <>
      <div className={style.expert}>
        <div className={style.opinionContainer}>
          <div className={style.expertContent}>
            <h2>Owocni eksperci cytowani są przez:</h2>
            <div className={style.expertLogo}>
                <img src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-B.812d6c4b.webp&w=640&q=75" alt="" />
                <img src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-B.812d6c4b.webp&w=640&q=75" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experts;
