
import ImageSlider from './CarouselImage';
import {motion, Variants} from 'framer-motion'
import React from "react";
import style from "../team.module.css";


const images = [
    'https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.95c40610.jpg&w=1920&q=75',
    'https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.b7a94977.jpg&w=1920&q=75',
    'https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.aa0277f1.jpg&w=1920&q=75',
   
  ];

const Home = () => {

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
      <ImageSlider images={images} />
      <motion.img
          className={style.slideAnimateImg}
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOwocni-Film.4c8c215f.png&w=640&q=75"
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
            Zapytaliśmy o to setkę naszych klientów. <br /> Oto, co
            odpowiedzieli:
          </p>
        </div>
    </div>
  );
};

export default Home;
