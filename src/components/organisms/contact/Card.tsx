import React from "react";
import { Image } from "react-bootstrap";

const ContactCard = ({ title, name, phone, email, image, id }) => {
  return (
    <div className="card">
      <div className="tital">{title}</div>
      <div className="name_Image">
        <div className="Image">
          <Image src={image} alt="" className="project_dp" />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="mail_id">
        <a href="mailto:">{email}</a>
      </div>
      <a href="tel:" id={id === 1 ? "card_btn_active" : ""} className="card_btn">
        <span>Zadzwoń lub napisz do nas</span> <br /> {phone}
      </a>
    </div>
  );
};

export default ContactCard;
