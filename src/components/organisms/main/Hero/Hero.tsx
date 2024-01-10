"use client";

import React from "react";
import style from "./hero.module.css";
import { Container, Image } from "react-bootstrap";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div>
      <ReactPlayer
        url="/assets/videos/desktopTop.mp4"
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
            Agencja <br />
            marketingowa,
            <br />
            która robi robotę
          </h1>
          <h6>Rozwijanie biznesu jest trudne.</h6>
          <p>
            Z Owocnymi jest łatwiej. <br /> Przyjemnie i przewidywalnie.
          </p>
          <div className={style.heroBtn}>
            <button>Wyceń projekt</button>
            <a href="/">
              <span>Umów konsultację</span>
              <div className={style.heroPlay}>
                <Image
                  src="/assets/images/play_arrow.svg"
                  alt="My Image"
                  width="auto"
                  height="auto"
                />
              </div>
            </a>
          </div>
          <div className={style.heroBottomImg}>
            <div className={style.leftImg}>
            <Image
              src="/assets/images/Ania-Owocni.avif"
              alt="My Image"
              width="auto"
              height="auto"
              className={style.heroImg1}
            />
            <Image
              src="/assets/images/Fredi-Owocni.avif"
              alt="My Image"
              width="auto"
              height="auto"
              className={style.heroImg2}
            />
            </div>
            <div className={style.rightImg}>
            <Image
              src="/assets/images/Gandalf-Owocni.avif"
              alt="My Image"
              width="auto"
              height="auto"
              className={style.heroImg3}
            />
            <Image
              src="/assets/images/Strony-Owocni.avif"
              alt="My Image"
              width="auto"
              height="auto"
              className={style.heroImg4}
            />
            </div>
            
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
