import ImageSlider from "./CarouselImage";
<<<<<<< HEAD
// import { motion, Variants } from "framer-motion";
=======
import { motion, Variants } from "framer-motion";
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
import React from "react";
import style from "../team.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section2 } = screenData;
  const Team_image = screenData?.section2?.image.Team_image || [];

<<<<<<< HEAD
  // to be deleted
  // const springUp: Variants = {
  //   offscreen: {
  //     y: 100,
  //   },
  //   onscreen: {
  //     y: -100,
  //     transition: {
  //       type: "ease",
  //       bounce: 1,
  //       damping: 10,
  //       stiffness: 200,
  //       duration: 2,
  //     },
  //   },
  // };
=======
  const springUp: Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: -100,
      transition: {
        type: "ease",
        bounce: 1,
        damping: 10,
        stiffness: 200,
        duration: 2,
      },
    },
  };
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

  return (
    <div>
      <ImageSlider images={Team_image} />
<<<<<<< HEAD
      {/* <motion.img
=======
      <motion.img
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        className={style.slideAnimateImg}
        src={section2?.animated_small_image}
        alt=""
        initial="offscreen"
        whileInView="onscreen"
        variants={springUp}
<<<<<<< HEAD
      /> */}
      <div className={style.teamContent}>
        <h2>{section2?.section_two_title_2}</h2>
=======
      />
      <div className={style.teamContent}>
        <h2>
          {section2?.section_two_title_2}
        </h2>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          {section2?.description}
        </p>
      </div>
    </div>
  );
};

export default Home;
