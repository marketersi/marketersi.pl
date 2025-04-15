"use client";
import React from 'react';
import Slider from 'react-slick';
import style from './afterbanner.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const steps = [
  {
    number: "01",
    title: "Analiza Twojej wizji",
    img: "https://images.prismic.io/marketersi/Z-0nEndAxsiBwODl_step-1.png?auto=format,compress",
    desc: "Rozmawiamy, analizujemy, słuchamy. Chcemy w pełni zrozumieć Twoją wizję i cele. Omówimy szczegóły surowego materiału..."
  },
  {
    number: "02",
    title: "Przygotowanie koncepcji",
    img: "https://images.prismic.io/marketersi/Z-0nkndAxsiBwOD8_step-2.png?auto=format,compress",
    desc: "Na podstawie Twoich wskazówek i naszych analiz opracowujemy plan montażu..."
  },
  {
    number: "03",
    title: "Postprodukcja",
    img: "https://images.prismic.io/marketersi/Z-0nyHdAxsiBwOEK_step-3.png?auto=format,compress",
    desc: "Zaczynamy proces łącząc surowy materiał w spójną całość..."
  },
  {
    number: "04",
    title: "Postprodukcja",
    img: "https://images.prismic.io/marketersi/Z-0nx3dAxsiBwOEJ_step-4.png?auto=format,compress",
    desc: "Każdy detal jest dopracowany, aby rezultat był zgodny z Twoją wizją..."
  },
  {
    number: "05",
    title: "Postprodukcja",
    img: "https://images.prismic.io/marketersi/Z-0nx3dAxsiBwOEI_step-5.png?auto=format,compress",
    desc: "Poprzez staranny montaż, dopracowane przejścia, efekty wizualne i dźwiękowe..."
  }
];

const sliderSettings = {
  
  dots: true,
  arrows: true,
  infinite: true, // Autoplay ke liye infinite true hona chahiye
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // 3 seconds delay
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};


const StepperSlider = () => {
  return (
      <Slider {...sliderSettings} className={style.SteperSection}>
        {steps.map((step, index) => (
          <div key={index} className={style.SteperBox}>
            <div className={style.SteperNumber}>{step.number}</div>
            <div className={style.SteperImage}>
              <img src={step.img} alt={`Step ${step.number}`} />
            </div>
            <h4 className={style.SteperTitle}>{step.title}</h4>
            <p className={style.SteperCont}>{step.desc}</p>
          </div>
        ))}
      </Slider>
  );
};

export default StepperSlider;
