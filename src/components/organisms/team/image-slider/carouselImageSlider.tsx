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
