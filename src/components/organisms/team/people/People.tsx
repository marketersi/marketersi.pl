"use client";

import React from "react";
import style from "../team.module.css";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const People = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section10, section11 } = screenData || {};
  if (screenData) {
    console.log("Team screen data from UI => ", section10);
  }

  return (
    <>
      <div className={style.teamContent}>
        <h2 style={{ margin: "0 0 100px" }}>
          {section10?.section10_title}
        </h2>
        <p style={{ margin: "0 0 100px" }}>
          {section10?.section10_subtitle}
        </p>
      </div>
      <div className={style.peopleCard}>
        <h3>
          {section10?.section10_card_text}
        </h3>
      </div>
      <div className={style.dogImg}>
        <img
          alt=""
          src={section10?.section10_card_image}
        />
      </div>
      <div className={style.teamContent}>
        <h2 style={{ margin: "0 0 40px" }}>
          {section11?.section11_title}
        </h2>
        <p style={{ textAlign: "center" }}>
          {section11?.section11_subtitle}
        </p>
      </div>
      <div className={style.peopleVideo}>
        <svg
          className="absolute top-0 z-10 mt-[-70px] hidden h-auto w-[400px] scale-x-150 lg:block"
          width="889"
          height="418"
          viewBox="0 0 889 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M442.938 417.297L886.961 0.507812H444.125H1.28906L442.938 417.297Z"
            fill="#E3E3E3"
            stroke="#E3E3E3"
          ></path>
        </svg>
        <ReactPlayer
          url={section11?.section11_video}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="auto"
          className={style.heroVideo}
        />
        <div className={style.peopleVideoContent}>
          <a className={style.projectBtn} href="/">
            {section11?.section11_button_text}
          </a>
          <a className={style.scheduleBtn} href="/">
           {section11?.section11_button_text2}
            <div>
              <img src="/assets/images/play_arrow.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default People;
