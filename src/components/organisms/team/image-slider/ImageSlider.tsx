import ImageSlider from "./CarouselImage";
import { motion, Variants } from "framer-motion";
import React from "react";
import style from "../team.module.css";
import { useSelector } from "react-redux";



const Home = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section2 } = screenData;
  const Team_image = screenData?.section2?.image.Team_image || [];
  console.log("array imahes", Team_image);

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
  return (
    <div>
      <ImageSlider images={Team_image} />
      <motion.img
        className={style.slideAnimateImg}
        src={section2?.animated_small_image}
        alt=""
        initial="offscreen"
        whileInView="onscreen"
        variants={springUp}
      />
      <div className={style.teamContent}>
        <h2>
          No więc, <span> jak to jest</span>
          współpracować z nami?
        </h2>
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Zapytaliśmy o to setkę naszych klientów. <br /> Oto, co odpowiedzieli:
        </p>
      </div>
    </div>
  );
};

export default Home;
