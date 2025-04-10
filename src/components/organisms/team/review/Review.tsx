"use client";

import React from "react";
import style from "../team.module.css";
import { Carousel, Row, Col } from "react-bootstrap";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import dynamic from 'next/dynamic';

const Review = () => {
  return (
    <>
      <div className={style.teamReview}>
        <div className={style.card}>
          <div className={style.whiteCard}>
            
          </div>
          <div className={style.grayCard}></div>
        </div>
      </div>
    </>
  );
};

export default Review;
