import React from "react";
import { useSelector } from "react-redux";

const UserInfoForm = () => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formFour } = screenData?.cardMenu?.menuOne || "";

  return (
    <div className="user-details_section">
      <h2>{formFour?.section4_title}</h2>
      <p>{formFour?.section4_subtitle}</p>
      <div className="uds_input-container">
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Tel: (Opcjonalnie)" />
      </div>
      <div>
        <button
          onClick={() => console.log("cennik form submitted")}
          className="cennikBtn"
        >
          <span>{formFour?.section4_buttonText}</span>
        </button>
      </div>

      <div className="contact">
        <h5>{formFour?.contact?.contact_title}</h5>
        <p>{formFour?.contact?.contact_info}</p>

        <img src={formFour?.contact?.contact_image} alt="" />
        <div className="whiteBox"></div>
        <h5>{formFour?.contact?.contact_contactText}</h5>
        <a href="tel:+48660970980">{formFour?.contact?.contact_tel}</a>
      </div>
    </div>
  );
};

export default UserInfoForm;
