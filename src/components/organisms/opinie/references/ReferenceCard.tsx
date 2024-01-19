import React from "react";
import style from "../opinie.module.css";

const ReferenceCard = () => {
  return (
    <>
      <div className={style.referenceCard}>
        <div className={style.cardTop}>
          <img
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=100"
            alt=""
          />
          <div>
            <h6>Rafał Niewiadomski,</h6>
            <p>Rafał Niewiadomski,</p>
          </div>
        </div>
        <p>„Wszyscy obiecują, wielu nie dotrzymuje. Tu wszystko się zgadzało, jesteśmy zadowoleni, całość powstała w terminie i <span>działa tak, jak chcieliśmy.</span>”</p>
      </div>
    </>
  );
};

export default ReferenceCard;
