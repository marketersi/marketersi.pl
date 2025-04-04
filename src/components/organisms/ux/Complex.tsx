import React from "react";
import { useSelector } from "react-redux";

<<<<<<< HEAD
=======
const ComplexData = {
  title: "title",
  description1: "description",
  DStyle1: ["description", "description"],
  description2: "description",
  DStyle2: ["description", "description", "description"],
  description3: "description",
  DStyle3: ["description", "description"],
};
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const Complex = () => {
  const { screenData } = useSelector((state) => state.ux);
  const complex = screenData.complex || {};

  return (
    <>
<<<<<<< HEAD
      <section className="arrowContainer mobilelefttext">
=======
      <section className="arrowContainer">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        <div id="textArrow">
          <h2>
            {complex.title}
          </h2>
          <div className="rowD">
<<<<<<< HEAD
            
            
              <p>
                {complex.paragraph_2}
              </p>
=======
            <div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              <p>
                {
                  complex.paragraph_1
                }
              </p>
<<<<<<< HEAD
              <p>
              {complex.paragraph_3}
            </p>
            
          </div>



          
=======
            </div>
            <img
              src="https://propozycje.owocni.pl/ux/Strzalka-Grafik-Marketer.f87779c7.jpg"
              alt=""
            />
            <div>
              <p>
                {complex.paragraph_2}
              </p>
            </div>
          </div>
          <div className="one">
            <p>
              {complex.paragraph_3}
            </p>
          </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        </div>
      </section>
    </>
  );
};

export default Complex;
