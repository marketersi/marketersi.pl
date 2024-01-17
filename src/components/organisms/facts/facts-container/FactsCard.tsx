import React from "react";
import "./factsContainer.css";

const FactsCard = ({ id, title, img, info }) => {
  return (
    <div className="fact_container">
      <div>
        <div className="facts_img_card">
          <img src={img} alt="" />
        </div>
        <div className="facts_title_card">
          <h2>{title}</h2>
        </div>
      </div>
      <div>
        {info?.map((e, i) => {
          return (
            <p key={i} style={{ fontWeight: i === 0 ? "400" : "" }}>
              {e}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FactsCard;
