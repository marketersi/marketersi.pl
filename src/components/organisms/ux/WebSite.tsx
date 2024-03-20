"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const WebSite = () => {
  const { screenData } = useSelector((state) => state.ux);
  const websites = screenData.websites || {};

  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rotationValue = window.scrollY / 10;
      setScrollRotation(rotationValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div id="ImageSection">
          <div>
            <h2>{websites?.title}</h2>
            <picture
              className="img1"
              style={{
                clipPath: "polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)",
                transform: `perspective(1298.7px) rotateX(${scrollRotation}deg)`,
              }}
            >
              <source
                srcSet="https://propozycje.owocni.pl/ux/3dB.320568f9.png"
                media="(max-width: 960px)"
              />
              <source
                srcSet="https://propozycje.owocni.pl/ux/Makieta-UX-strony.4f281932.1365da9d.png"
                type="image/jpg"
              />
              <img
                src="https://propozycje.owocni.pl/ux/Makieta-UX-strony.4f281932.1365da9d.png"
                alt="Image 1"
              />
            </picture>
            <picture
              className="img2"
              style={{
                clipPath: "polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)",
                transform: `perspective(1298.7px) rotateX(${scrollRotation}deg)`,
              }}
            >
              <source
                srcSet="https://propozycje.owocni.pl/ux/3dA.23d16a38.jpg"
                media="(max-width: 960px)"
              />
              <source
                srcSet="https://propozycje.owocni.pl/ux/Makieta-UX-strony.06297097.jpg"
                type="image/jpg"
              />
              <img
                src="https://propozycje.owocni.pl/ux/Makieta-UX-strony.06297097.jpg"
                alt="Image 2"
              />
            </picture>
            <div
              className=""
              style={{ transform: "perspective(1298.7px) rotateX(70deg)" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebSite;
