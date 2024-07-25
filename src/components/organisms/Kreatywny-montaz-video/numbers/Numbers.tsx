'use client';

import React from 'react';
import style from '../main.module.css';
import ReactPlayer from 'react-player';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Numbers = () => {
  const { screenData } = useSelector((state) => state.home);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section2, section3 } = imageswithdescription || {};

  return (
    <div>
      <Container>
        <div className={style.numbers}>
          <div className={style.Content}>
            <h2>{section2?.title}</h2>
            <p>{section2?.paragraph_1}</p>
            <p>{section2?.paragraph_2}</p>
            <h4>{section2?.subtitle}</h4>
            <p className={style.numberMB}>{section2?.line_1}</p>
            <p className={style.numberMB}>{section2?.line_2}</p>
            <p>{section2?.line_3}</p>
            <p>{section2?.paragraph_3}</p>
            <p>{section2?.paragraph_4}</p>
            <ReactPlayer
              url={section3?.video_url}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              className={style.numberVideo}
              pip={false}
              playsinline
            />
            <p>{section3?.paragraph_1}</p>
            <p>{section3?.paragraph_2}</p>
            <p>{section3?.paragraph_3}</p>
            <p>{section3?.paragraph_4}</p>
            <p>{section3?.paragraph_5}</p>
            <p>{section3?.paragraph_6}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Numbers;
