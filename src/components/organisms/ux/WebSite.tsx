"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const WebSite = () => {
  const { screenData } = useSelector((state) => state.ux);
  const websites = screenData.websites || {};

  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rotationValue = window.scrollY / 20;
      if (scrollRotation < 1450) {
        setScrollRotation(rotationValue);
      }
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
            <div
              style={{
                clipPath: "polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)",
                transform: `perspective(1298.7px) rotateX(${scrollRotation}deg)`,
                
              }}
            >
              <picture className="img1">
                <img
                  style={{ height: 700, width: 950 }}
                  src={
                    scrollRotation > 650
                      ? "https://propozycje.owocni.pl/ux/Makieta-UX-strony.06297097.jpg"
                      : "https://propozycje.owocni.pl/ux/Makieta-UX-strony.4f281932.1365da9d.png"
                  }
                  alt="Image 1"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebSite;