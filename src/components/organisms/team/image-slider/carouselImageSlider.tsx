import React from "react";
import style from "../team.module.css";

const carouselImageSlider = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <>
      <img
        style={{ margin: "0 auto" }}
        className="d-block "
        src={src}
        alt={alt}
      />
    </>
  );
};

export default carouselImageSlider;


// import React from 'react';
// import Slider from 'react-slick';

// const carouselImageSlider = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image} alt={`Slide ${index + 1}`} />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default carouselImageSlider;

