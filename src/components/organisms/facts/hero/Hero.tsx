"use client";
import React from "react";
import dynamic from 'next/dynamic';
import "./hero.css";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { useSelector } from "react-redux";

const Hero = () => {
  const { isLoading, screenData } = useSelector((state) => state.facts);

  return (
    <section className="facts_hero_sec">
      <div className="facts_hero_container">
        <div>
          <h1>
            <span>{screenData?.title && screenData.title.split(" ")[0]}</span>
            {screenData?.title &&
              screenData.title.split(" ").slice(1).join(" ")}
          </h1>
          <p>{screenData?.subtitle}</p>
        </div>
        <div className="factowBannerVideo">
          <ReactPlayer
            muted={true}
            playing={true}
            loop={true}
            width="100%"
            height="auto"
            url={screenData?.video_url}
            pip={false}
            preload="metadata"
            playsinline
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
