import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useSelector } from "react-redux";

const NewCompanyProfitSliderData = {
  sliderImages: [
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/1-Copywriting-teksty.jpg",
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/2-Teksty-dla-firm.jpg",
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/3-Marketing-internetowy.jpg",
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/4-Dobry-Copywriter.jpg",
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/4-Dobry-Copywriter.jpg",
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/7-Teksty-Reklamowe.jpg",
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/8-Copywriter-Krzysztof.jpg",
    "https://cdn.owocni.pl/img/single-copywriting/zaloga/10-Halinka-Piesek.jpg",
  ],
};

const ProfitSlider = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { NewCompanyProfitSliderData } = screenData || {};
  const { sliderImages } = NewCompanyProfitSliderData || {};

  return (
    <>
      <section className="profit-sec">
        <Carousel>
          {/* <Carousel.Item>
            <ExampleCarouselImage
              src="https://cdn.owocni.pl/img/single-copywriting/zaloga/1-Copywriting-teksty.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://cdn.owocni.pl/img/single-copywriting/zaloga/2-Teksty-dla-firm.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://cdn.owocni.pl/img/single-copywriting/zaloga/3-Marketing-internetowy.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://cdn.owocni.pl/img/single-copywriting/zaloga/4-Dobry-Copywriter.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://cdn.owocni.pl/img/single-copywriting/zaloga/7-Teksty-Reklamowe.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://cdn.owocni.pl/img/single-copywriting/zaloga/8-Copywriter-Krzysztof.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://cdn.owocni.pl/img/single-copywriting/zaloga/10-Halinka-Piesek.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item> */}
          {sliderImages?.map((image, index) => (
            <Carousel.Item>
              <ExampleCarouselImage src={image} alt="Second slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default ProfitSlider;
