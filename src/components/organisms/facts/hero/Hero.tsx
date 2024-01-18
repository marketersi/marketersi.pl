"use client";
import React from "react";
import "./hero.css";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <section className="facts_hero_sec">
      <div className="facts_hero_container">
        <div>
          <h1>
            <span>50</span> faktów <br />
            psychologii <br />
            sprzedaży
          </h1>
          <p>
            Dowiedz się jak zdobyć nieuczciwą <br /> przewagę dzięki nauce
            perswazji <br /> i zaprojektuj stronę internetową, <br /> która
            konwertuje jak szalona.
          </p>
        </div>
        <div>
          <ReactPlayer
            autoplay={true}
            playing={true}
            loop={true}
            width="100%"
            height="auto"
            url="https://res.cloudinary.com/ddctmb3dk/video/upload/f_auto:video,q_auto/v1698065556/pizdcstdavcvcc3zt9sy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
