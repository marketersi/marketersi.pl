"use client";

import React from "react";
import style from "../team.module.css";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./CarouselImageSlider";
import "./imageslider.css";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const ImageSlider = () => {

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

  
  // const images = [
  //   'https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.95c40610.jpg&w=1920&q=75',
  //   'https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.b7a94977.jpg&w=1920&q=75',
  //   'https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.aa0277f1.jpg&w=1920&q=75',
   
  // ];

  return (
    <>
      <section className={style.imageSlider}>
        <Carousel indicators={false} className="image-slider">
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.95c40610.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.b7a94977.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.aa0277f1.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.607a7992.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.67f20c73.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.16146c68.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.b7a94977.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e6d0e7e3.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.1e9d84fe.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.8c3cf7dd.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.350adefb.jpg&w=1920&q=75"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <ImageSlider images={images} /> */}
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
      </section>
    </>
  );
};



export default ImageSlider;
