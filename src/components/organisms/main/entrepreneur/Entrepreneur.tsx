import React from "react";
import style from "../main.module.css";
import ReactPlayer from "react-player";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const Entrepreneur = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section1 } = imageswithdescription || {};

  return (
    <div>
      <Container>
        <div className={style.enter}>
          
          <ReactPlayer
        url={section1?.image_url}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="auto"
        className={style.socialVideo}
        pip={false}
      />
          <div className={style.Content}>
            <h2>
              {section1?.title}
            </h2>
            <p>
              {section1?.subtitle_1}
            </p>
            <p>
              {section1?.paragraph_1}
            </p>

            <p>
              {section1?.paragraph_2}
            </p>
            <p>
              {section1?.paragraph_3}
            </p>
            <h4>{section1?.subtitle_2}</h4>
            <p>
              {section1?.paragraph_4}
            </p>
            <p>
              {section1?.paragraph_5}
            </p>
            <p>
              {section1?.paragraph_6}
            </p>
            <p>
              {section1?.paragraph_7}
            </p>
            <p>
              {section1?.paragraph_8}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entrepreneur;
