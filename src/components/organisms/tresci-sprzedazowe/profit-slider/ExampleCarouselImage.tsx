import React from "react";

const ExampleCarouselImage = ({ src, alt }) => {


  return (
    <>
      <img style={{margin: '0 auto'}}
        className="d-block "
        src={src}
        alt={alt}
      />
    </>
  );
};

export default ExampleCarouselImage;
