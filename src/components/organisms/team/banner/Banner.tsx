"use client";

import React from "react";
import style from "../team.module.css";
import ReactPlayer from "react-player";
import { Container, Image, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <ReactPlayer
        url="https://res.cloudinary.com/ddctmb3dk/video/upload/v1698077578/zxcacvh2xxu6vj3nbe1j.webm"
        playing={true}
        loop={true}
        autoplay={true}
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
            Jak to jest współpracować <br /> z nami?
          </h1>
        </div>
        <div className={style.img20}>
          <img
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20LAT-Dzialalnosci-Onas.ed8a06d9.svg&w=1080&q=75"
            alt=""
          />
        </div>
        <div className={style.bannerBottomContent}>
          <Row>
            <Col sm={6}>
              <h4>Mamy prostą misję:</h4>
              <h2>
                Pomagamy <br /> dobrym ludziom <br />
                <span> robićdobry biznes</span>
              </h2>
            </Col>
            <Col sm={6}>
              <img
                src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flampa.75f3a55b.png&w=750&q=75"
                alt=""
              />
            </Col>
          </Row>
          <div className={style.teamContent} style={{ marginTop: "-60px" }}>
            <p>
              Owszem, robimy fajne rzeczy, ale tym, co naprawdę nas wyróżnia,
              jest sposób, w jaki to robimy. Tworzymy dobrą atmosferę:
              wyrozumiałą, serdeczną i troskliwą.
            </p>
            <p>
              Wierzymy, że troszcząc się o interesy klientów lepiej niż
              ktokolwiek inny, zawsze będziemy mieli kolejne zlecenia. - Ta
              wiara przynosi świetne rezultaty już od 20 lat!
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
