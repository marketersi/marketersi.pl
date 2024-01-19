"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Variants, motion } from "framer-motion";
import style from "./video.module.css";

const Video = () => {
  const slideAnimationTop: Variants = {
    offscreen: {
      scale: 0.5,
      rotate: -10,
    },
    onscreen: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "ease",
        // bounce: 0.4,
        damping: 25,
        stiffness: 70,
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      className={style.mainVideoDiv}
      initial="offscreen"
      whileInView="onscreen"
      variants={slideAnimationTop}
    >
      <ReactPlayer
        url="https://owocni.pl/assets/homepage/video/popupVideo.mp4"
        playing={true}
        loop={true}
        autoplay={true}
        width="100%"
        height="auto"
      />
    </motion.div>
  );
};

export default Video;
