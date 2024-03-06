"use client";

import React from "react";
import style from "../team.module.css";
import ReactPlayer from "react-player";
import { Container, Image, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const BannerData = {
  video: "",
  videoOverlaytext: "",
  title: "",
  subtitle: "",
  text: "",
  imageLeft: "",
  imageRight: "",
};

const Banner = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { herosection } = screenData;

  return (
    <>
      <div className={style.zespolVideo}>
        <ReactPlayer
        url={herosection?.background_video}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="auto"
        playsinline
        className={style.bannerVideo}
      />
        
      </div>
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
          <img src={herosection?.left_image} alt="" />
        </div>
        <div className={style.bannerBottomContent}>
          <Row>
            <Col xxl={6} lg={7} className="order-lg-1 order-2">
              <div className={style.BannerBotHeading}>
                <h4>{herosection?.sub_title}</h4>
                <h2>{herosection?.title_2}</h2>
              </div>
            </Col>
            <Col xxl={6} lg={5} className="order-lg-2 order-1">
              <div className={style.BannerBotImg}>
                <img src={herosection?.right_image} alt="" />
              </div>
            </Col>
          </Row>
          <div className={`${style.teamContent} ${style.bannerContent}`}>
            <p>{herosection?.para_one}</p>
            <p>{herosection?.para_two}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
