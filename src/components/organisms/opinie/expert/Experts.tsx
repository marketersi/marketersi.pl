import React from 'react';
import style from '../opinie.module.css';
import { useSelector } from 'react-redux';

const Experts = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const experts = screenData.experts || {};

  return (
    <>
      <div className={style.expert}>
        <div className={style.opinionContainer}>
          <div className={style.expertContent}>
            <h2>{experts.title}</h2>
            <div className={style.expertLogo}>
              <img src={experts.image_1} alt="" />
              <img src={experts.image_2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experts;
