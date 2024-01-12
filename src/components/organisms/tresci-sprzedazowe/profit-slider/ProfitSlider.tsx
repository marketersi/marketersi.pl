import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';


const ProfitSlider = () => {
  return (
    <>
   
    <section className='profit-sec'>
    <Carousel>
    <Carousel.Item>
      <ExampleCarouselImage
          src="https://cdn.owocni.pl/img/single-copywriting/zaloga/1-Copywriting-teksty.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage
          src="https://cdn.owocni.pl/img/single-copywriting/zaloga/2-Teksty-dla-firm.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <ExampleCarouselImage
          src="https://cdn.owocni.pl/img/single-copywriting/zaloga/3-Marketing-internetowy.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage
          src="https://cdn.owocni.pl/img/single-copywriting/zaloga/4-Dobry-Copywriter.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage
          src="https://cdn.owocni.pl/img/single-copywriting/zaloga/7-Teksty-Reklamowe.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage
          src="https://cdn.owocni.pl/img/single-copywriting/zaloga/8-Copywriter-Krzysztof.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage
          src="https://cdn.owocni.pl/img/single-copywriting/zaloga/10-Halinka-Piesek.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    </>
  )
}



export default ProfitSlider


