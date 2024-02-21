import React from "react";
import style from "../team.module.css";
import PersonalCard from "../personal/PersonalCard";
import { useSelector } from "react-redux";

const GoodTime = () => {

  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section8 } = screenData || {};
  const { card1, card2, card3, card4, card5  } = screenData?.section9 || {};

  

  return (
    <>
      <div className={style.teamContent}>
        <h2 className={style.goodHeadingMain}>
          {section8?.section8_title}
        </h2>
        <p>
          {section8?.section8_discription_1}
        </p>
        <p>
        {section8?.section8_discription_2}
        </p>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card1} />
      </div>
      <div className={style.teamContent}>
        <p>
        {section8?.section8_discription_3}
        </p>
      </div>
      <div className={style.cardCup}>
        <PersonalCard {...card2} />
      </div>
      <div className={style.teamContent}>
        <p>
        {section8?.section8_discription_4}
        </p>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card3} />
      </div>
      <div className={style.teamContent}>
        <p>
        {section8?.section8_discription_5}
        </p>
      </div>
      <div className={style.hardWorkBG}>
        <div className={style.cardDataSpace}>
          <PersonalCard {...card4} />
        </div>

        <div className={style.teamContent}>
          <p>
          {section8?.section8_discription_6}
          </p>
          <p>{section8?.section8_discription_7}</p>
        </div>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card5} />
      </div>
    </>
  );
};

export default GoodTime;
