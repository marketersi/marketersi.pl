import React from "react";
import "./happyCustomers.css";
import { customerReplies } from "./data";
import Slider from "react-slick";

const HappyCustomers = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="brand_Slide_ButtonNext">
        <div className="OurClients_Slide_Button_Text">Następna</div>
        <div className="ArrowButton" onMouseEnter={onClick}>
          <span className="ArrowButton_Arrow">&gt;</span>
        </div>
      </div>
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="customer_replies_container">
      <h1>
        Zapytaliśmy setkę klientów za co uwielbiają współpracę , z nami oto co
        odpowiedzieli...
      </h1>
      <div>
        <Slider {...settings}>
          {customerReplies.map((customerReply, index) => (
            <div key={index}>
              {customerReply.map((reply, idx) => (
                <div key={idx} className="single_review_card">
                  {reply}
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HappyCustomers;
