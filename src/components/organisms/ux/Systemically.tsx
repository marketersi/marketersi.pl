import React from "react";
import { useSelector } from "react-redux";

const SystemicallyData = {
  hand1Img: "images",
  title: "title",
  description: "description",
  hand2Img: "images",
};
const Systemically = () => {
  const { screenData } = useSelector((state) => state.ux);
  const Systematically = screenData.Systematically || {};

  return (
    <>
      <section>
        <div id="guaranteeWrapper">
          <div id="guarantee">
            
            <img src={Systematically.image} alt="" />

            <div className="rowD">
              <div>
                <h2>{Systematically.title}</h2>
                <p>
                  <b>- {Systematically.subtitle}</b>
                  <br />
                  {Systematically.description}
                </p>
              </div>
              <div className="imgs">
                <img src={Systematically.right_image} alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Systemically;
