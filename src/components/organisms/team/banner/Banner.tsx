"use client";

import React from "react";
import style from "../team.module.css";
import ReactPlayer from "react-player";
import { Container, Image, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Banner = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { herosection } = screenData;

  return (
    <>
      <ReactPlayer
        url={herosection?.background_video}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="auto"
        className={style.bannerVideo}
      />
      <div className={style.overlay}></div>
      <motion.button
        className="arrowAnimation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="arrow arrow-1"
          animate={{ opacity: [0, 1, 0], rotate: -45 }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.span>
        <motion.span
          className="arrow arrow-2"
          animate={{ opacity: [0, 1, 0], rotate: -45 }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.15 }}
        ></motion.span>
        <motion.span
          className="arrow arrow-3"
          animate={{ opacity: [0, 1, 0], rotate: -45 }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        ></motion.span>
      </motion.button>
      <Container>
        <div className={style.bannerHeading}>
          <h1>
            {herosection?.main_title}
            {/* Jak to jest współpracować <br /> z nami? */}
          </h1>
        </div>
        <div className={style.img20}>
          <img
            src={herosection?.left_image}
            alt=""
          />
        </div>
        <div className={style.bannerBottomContent}>
          <Row>
            <Col sm={6}>
              <h4>{herosection?.sub_title}</h4>
              <h2>
                {herosection?.title_2}
              </h2>
            </Col>
            <Col sm={6}>
              <img
                src={herosection?.right_image}
                alt=""
              />
            </Col>
          </Row>
          <div className={style.teamContent} style={{ marginTop: "-60px" }}>
            <p>
              {herosection?.para_one}
            </p>
            <p>
            {herosection?.para_two}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
