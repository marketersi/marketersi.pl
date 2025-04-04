import React from "react";
import { useSelector } from "react-redux";

<<<<<<< HEAD
=======
const SystemicallyData = {
  hand1Img: "images",
  title: "title",
  description: "description",
  hand2Img: "images",
};
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
const Systemically = () => {
  const { screenData } = useSelector((state) => state.ux);
  const Systematically = screenData.Systematically || {};

  return (
    <>
      <section>
        <div id="guaranteeWrapper">
          <div id="guarantee">
            
<<<<<<< HEAD
            

            <div className="rowD">
              <div className="colm">
                <h2>{Systematically.title}</h2>
                <p>
                  <b> {Systematically.subtitle}</b>
                  
                  {Systematically.description}
                </p>
              </div>
              
            </div>
            <img src={Systematically.image} alt="" />
=======
            <img src={Systematically.image} alt="" className="desktop"/>

            <div className="rowD row">
              <div className="col-xxl-7 order-xxl-1 order-2">
                <h2>{Systematically.title}</h2>
                <p>
                  <b>- {Systematically.subtitle}</b>
                  <br />
                  {Systematically.description}
                </p>
              </div>
              <div className="imgs col-xxl-5 order-xxl-2 order-1">
                <img src={Systematically.right_image} alt="" />
                <img src={Systematically.image} alt=""  className="mobile"/>
              </div>
            </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          </div>
        </div>
      </section>
    </>
  );
};

export default Systemically;
