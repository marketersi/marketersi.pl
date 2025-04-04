<<<<<<< HEAD
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const ProfitSlider = ({ images }) => {
=======
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useSelector } from "react-redux";



const ProfitSlider = ({ images}) => {


>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  return (
    <>
      <section className="profit-sec">
        <Carousel>
<<<<<<< HEAD
          {images?.map((image) => (
            <Carousel.Item>
              <ExampleCarouselImage src={image} alt="Second slide" />
=======
          {images?.map((image, index) => (
            <Carousel.Item>
              <ExampleCarouselImage src={image} alt="Second slide"/>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default ProfitSlider;
