"use client";
import React from 'react'
import style from '../main.module.css'
import { Container, Image } from "react-bootstrap";
import Slider from 'react-slick';


const Reviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.reviews}>
        <Container>
          <div className={style.reviewsCard}>
            <AutoSlider />
          </div>
        </Container>
    </div>
  )
}

export default Reviews;

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


   return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
   )
}