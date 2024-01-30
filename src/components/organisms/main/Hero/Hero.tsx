"use client";

import React, { useEffect } from "react";
import style from "./hero.module.css";
import { Container, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useSelector } from "react-redux";

const Hero = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const { heroSection } = screenData;

  if (screenData) {
    console.log("screen data from hero ", screenData);
  }

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animationVariantsLeft = {
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
    hidden: { opacity: 0.5, x: -200, y: 200, transition: { duration: 2 } },
  };
  const animationVariantsRight = {
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
    hidden: { opacity: 0.5, x: 200, y: 200, transition: { duration: 2 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div>
      <ReactPlayer
        // url="/assets/videos/desktopTop.mp4"
        url={heroSection?.background_video}
        playing={true}
        loop={true}
        autoplay={true}
        width="100%"
        height="auto"
        className={style.heroVideo}
      />
      <div className={style.hero}>
        <Container>
          <h1>
            {/* Agencja <br />
            marketingowa,
            <br />
            która robi robotę */}
            {heroSection?.title}
          </h1>
          <h6>Rozwijanie biznesu jest trudne.</h6>
          <p>
            {/* Z Owocnymi jest łatwiej. <br /> Przyjemnie i przewidywalnie. */}
            {heroSection?.subtitle}
          </p>
          <div className={style.heroBtn}>
            <Link href="/cennik">
              <button>Wyceń projekt</button>
            </Link>
            <Link href="/zamow">
              <span>Umów konsultację</span>
              <motion.div
                className={style.heroPlay}
                initial="initial"
                animate="animate"
                variants={animationVariantsLeft}
              >
                <Image
                  src="/assets/images/play_arrow.svg"
                  alt="My Image"
                  width="auto"
                  height="auto"
                />
              </motion.div>
            </Link>
          </div>
          <div className={style.heroBottomImg}>
            <div className={style.leftImg} ref={ref}>
              <motion.img
                // src="/assets/images/Ania-Owocni.avif"
                src={heroSection?.image_left1}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg1}
                variants={animationVariantsLeft}
                initial="hidden"
                animate={controls}
              />
              <motion.img
                // src="/assets/images/Fredi-Owocni.avif"
                src={heroSection?.image_left2}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg2}
                variants={animationVariantsLeft}
                initial="hidden"
                animate={controls}
              />
            </div>
            <div className={style.rightImg}>
              <motion.img
                // src="/assets/images/Gandalf-Owocni.avif"
                src={heroSection?.image_right1}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg3}
                variants={animationVariantsRight}
                initial="hidden"
                animate={controls}
              />
              <motion.img
                // src="/assets/images/Strony-Owocni.avif"
                src={heroSection?.image_right2}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg4}
                variants={animationVariantsRight}
                initial="hidden"
                animate={controls}
              />
            </div>
            {/* <motion.div
              className={style.orangeBG}
              initial={{ scale: 1 }}
              animate={{ scale: [10, 1.2, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <img
                src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FObraz-tla.917e6d2f.png&w=256&q=75"
                alt=""
              />
            </motion.div> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
