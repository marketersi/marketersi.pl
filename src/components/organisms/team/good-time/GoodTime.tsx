import React, { useEffect, useState } from "react";
import style from "../team.module.css";
import PersonalCard from "../personal/PersonalCard";
import { useSelector } from "react-redux";
<<<<<<< HEAD
=======
import { url } from "inspector";
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const GoodTime = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section8 } = screenData || {};
  const { card1, card2, card3, card4, card5 } = screenData?.section9 || {};

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
<<<<<<< HEAD
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="WidthContent1 container">
      <div className={`${style.teamContent}`}>
        <h1 className={style.goodHeadingMain}>
          {section8?.section8_title?.split(" ").slice(0, 2).join(" ")}{" "}
          <div className="d-inline-block mx-2 ">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>
          {section8?.section8_title?.split(" ").slice(2).join(" ")}
        </h1>
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_1}</p>
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_2}</p>
=======
    }, 1000); 

   
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className={style.teamContent}>
        <h2 className={style.goodHeadingMain}>{section8?.section8_title?.split(' ').slice(0, 2).join(' ')} <div className="d-inline-block mx-2 ">{time.toLocaleTimeString([] , { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
        {section8?.section8_title?.split(' ').slice(2).join(' ')}
         </h2>
        <p>{section8?.section8_discription_1}</p>
        <p>{section8?.section8_discription_2}</p>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card1} />
      </div>
      <div className={style.teamContent}>
<<<<<<< HEAD
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_3}</p>
      </div>
      <div
        className={style.cardCup}
        // style={{ backgroundImage: `url(${section8?.section8_image_1})` }}
=======
        <p>{section8?.section8_discription_3}</p>
      </div>
      <div
        className={style.cardCup}
        style={{ backgroundImage: `url(${section8?.section8_image_1})` }}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      >
        <PersonalCard {...card2} />
      </div>
      <div className={style.teamContent}>
<<<<<<< HEAD
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_4}</p>
=======
        <p>{section8?.section8_discription_4}</p>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card3} />
      </div>
      <div className={style.teamContent}>
<<<<<<< HEAD
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_5}</p>
      </div>
      <div
        className={style.hardWorkBG}
        // style={{ backgroundImage: `url(${section8?.section8_image_2})` }}
      >
=======
        <p>{section8?.section8_discription_5}</p>
      </div>
      <div className={style.hardWorkBG} style={{ backgroundImage: `url(${section8?.section8_image_2})` }}>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        <div className={style.cardDataSpace}>
          <PersonalCard {...card4} />
        </div>

        <div className={style.teamContent}>
<<<<<<< HEAD
          <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_6}</p>
          <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_7}</p>
        </div>
      </div>
      <div className={style.cardDataSpace1}>
        <PersonalCard {...card5} />
      </div>
      </section>
=======
          <p>{section8?.section8_discription_6}</p>
          <p>{section8?.section8_discription_7}</p>
        </div>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card5} />
      </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </>
  );
};

export default GoodTime;
