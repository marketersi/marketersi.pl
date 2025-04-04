"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const WebSite = () => {
  const { screenData } = useSelector((state) => state.ux);
<<<<<<< HEAD
  const websites = screenData.websites || [];

  const [scrollRotation, setScrollRotation] = useState(0);
  const [perspective, setPerspective] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPerspective(window.innerWidth * 1.3);

      const handleResize = () => {
        setPerspective(window.innerWidth * 1.3);
      };

      const handleScroll = () => {
        const rotationValue = window.scrollY / 20;
        if (scrollRotation < 1450) {
          setScrollRotation(rotationValue);
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollRotation]);
=======
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
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

  return (
    <>
      <section>
<<<<<<< HEAD
        {/* <div id="ImageSection">
          <div>
            
            <div
              style={{
                clipPath: "polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)",
                transform: `perspective(${perspective}px) rotateX(${scrollRotation}deg)`,
              }}
            >
              <picture className="img1">
                <img
                  style={{ height: 700, width: 950 }}
                  src={
                    scrollRotation > 810
                      ? websites?.image_2
                      : websites?.image_1
                  }
                  alt="Image 1"
                />
              </picture>
            </div>
          </div>
        </div> */}
=======
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
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </section>
    </>
  );
};

export default WebSite;
