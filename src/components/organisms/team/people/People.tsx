"use client";

import React from "react";
import style from "../team.module.css";
// import { Row, Col, Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const People = () => {
  return (
    <>
      <div className={style.teamContent}>
        <h2 style={{ margin: "0 0 100px" }}>
          Nasi ludzie to <br />
          teraz
          <span> Twoi ludzie</span>
        </h2>
        <p style={{ margin: "0 0 100px" }}>
          <span>Och... zapomniałbym o kluczowej postaci.</span>To owocna
          kierowniczka działu towarzyskiego.
        </p>
      </div>
      <div className={style.peopleCard}>
        <h3>
          Halinka - przesympatyczna mała drożdżóweczka, dzięki której wszystko
          działa sprawniej.
        </h3>
      </div>
      <div className={style.dogImg}>
        <img
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhalinka.a6bc791a.png&w=1200&q=75"
          alt=""
        />
      </div>
      <div className={style.teamContent}>
        <h2 style={{ margin: "0 0 40px" }}>
          Zróbmy <span>razem</span>
          <br />
          coś fajnego!
        </h2>
        <p style={{ textAlign: "center" }}>Razem jesteśmy Owocni.</p>
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
          url="https://res.cloudinary.com/ddctmb3dk/video/upload/f_auto:video,q_auto/v1696941680/shnudykmh6eudqczxjav"
          playing={true}
          loop={true}
          autoplay={true}
          width="100%"
          height="auto"
          className={style.heroVideo}
        />
        <div className={style.peopleVideoContent}>
            <a className={style.projectBtn} href="/">Wyceń swój projekt</a>
            <a className={style.scheduleBtn} href="/">Umów konsultację 
            <div><img src="/assets/images/play_arrow.svg" alt="" /></div>
            </a>
        </div>
      </div>
    </>
  );
};

export default People;
