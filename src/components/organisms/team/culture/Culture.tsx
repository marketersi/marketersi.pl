import React from "react";
import style from "../team.module.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
<<<<<<< HEAD

const Culture = () => {
=======
import Section5 from "../../tresci-sprzedazowe/section5/Section5";

const Culture = () => {

>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section6, section7 } = screenData;

  return (
    <>
<<<<<<< HEAD
     <div className="WidthContent1 container">
     <div className={`${style.teamContent1} additionalSpace`}>
        <p className={style.textContentBg}>
        Marketersi wybrały firmy, które osiągają sukcesy.
=======
      <div className={style.teamContent}>
        <p>
          <span>{section6?.sub_title_6}</span>{section6?.sub_title_discription_6}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        </p>
      </div>
      <Container>
        <div className={style.cultureCard}>
<<<<<<< HEAD
          <img src={section7?.card7_image_1} alt="" />
          <h2>Kiedy branżowe media <br/> sięgają po nasze opinie</h2>
          <h3>wiemy, że nasze podejście działa.</h3>
        </div>
        {/* <img className={style.cultureImg} src={section7?.card7_image_2} alt="" /> */}
      </Container>
      <div className={`${style.teamContent} ${style.culturedContent}`}>
        <p className={`${style.mobilelefttext}`}>
          <span className="d-inline-block me-2">{section7?.subtitle_1}</span>
          {section7?.paragraph_1}
        </p>
        <p className={`${style.mobilelefttext}`}>
          <span className="d-inline-block me-2"> {section7?.subtitle_2}</span>
          {section7?.paragraph_2}
        </p>
        <p className={`${style.mobilelefttext}`}>{section7?.paragraph_3}</p>
      </div>
     </div>
=======
          <img
            src={section7?.card7_image_1}
            alt=""
          />
          <h2>
            {section7?.card_title_7}
          </h2>
        </div>
        <img className={style.cultureImg} src={section7?.card7_image_2} alt="" />
      </Container>
      <div className={`${style.teamContent} ${style.culturedContent}`}>
        <p>
          <span className="d-inline-block me-2">{section7?.subtitle_1}</span>
          {section7?.paragraph_1}
        </p>
        <p>
          <span className="d-inline-block me-2"> {section7?.subtitle_2}</span>
          {section7?.paragraph_2}
        </p>
        <p>
        {section7?.paragraph_3}
        </p>
      </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    </>
  );
};

export default Culture;
