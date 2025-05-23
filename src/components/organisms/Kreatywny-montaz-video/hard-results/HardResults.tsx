'use client';

import React from 'react';
import style from '../main.module.css';
import ReactPlayer from 'react-player';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useOsClass from '@/components/molecules/useOsClass';

const HardResult = () => {
  const { screenData } = useSelector((state) => state.videoEditing);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section4, section5, section6, section7 } =
    imageswithdescription || {};
    const osClass = useOsClass();
  return (
    <div>
      <Container>
        <div className={style.hardResult}>
          <div className={style.Content}>
            {/* <h2 className={style.hardMB}>{section4?.title}</h2>
            <h3 className={style.gradientBG}>- {section4?.subtitle}</h3> */}
            <h2 className={style.hardMB}>Celujemy w jedno</h2>
          <h3 className={style.gradientBG}>konkretne wyniki dla Twojej marki</h3>

            {/* <img src={section4?.image_url} alt="" className={style.hardImg} /> */}
            <p>{section4?.paragraph_1}</p>
            <p>{section4?.paragraph_2}</p>
          </div>

          <div className={style.Content}>

            <Row className="mb-0">
              <Col lg={12} className="order-lg-1 order-2">
                <p>{section5?.quote}</p>
              </Col>
              {/* <Col lg={6} className="order-lg-2 order-1">
              <div className={osClass}>
              <ReactPlayer
                  url={section5?.video_url}
                  playing={true}
                  loop={true}
                  width="100%"
                  height="auto"
                  muted={true}
                  pip={false}
                  playsinline
                />
              </div>
              </Col> */}
            </Row>
          </div>
          <div className={style.Content}>
            <p>{section5?.paragraph_1}</p>
            <p>{section5?.paragraph_2}</p>
          </div>

          <div className={style.Content}>
            <Row className="md:mt-5 md:pt-5 md:mb-0 pb-0">
              {/* <Col lg={7} className={osClass}>
                <ReactPlayer
                  url={section6?.video_url}
                  playing={true}
                  loop={true}
                  width="100%"
                  height="auto"
                  muted={true}
                  pip={false}
                  playsinline
                />
              </Col> */}
              <Col lg={12}>
                <p className="">{section6?.quote}</p>
              </Col>
            </Row>
          </div>

          <div className={osClass}>
          <div className={style.Content}>
            <p>
              {section6?.subtitle} {section6?.paragraph_1}
            </p>
            <p>{section6?.paragraph_2}</p>
            <p>{section6?.paragraph_3}</p>
            {/* <ReactPlayer
              url={section7?.video_url_1}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}
            {/* <h2 className={style.brandingHeading2}>{section7?.title}</h2> */}
            <h2 className={style.brandingHeading2}>Właśnie dlatego warto inwestować <br />w wysokiej jakości <br />materiały filmowe</h2>

            <p>{section7?.paragraph_1}</p>
            {/* <ReactPlayer
              url={section7?.video_url_3}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}
            <p>{section7?.paragraph_2}</p>
            <p>{section7?.paragraph_3}</p>
            {/* <ReactPlayer
              url={section7?.video_url_4}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}
            <p>{section7?.paragraph_4}</p>
            {/* <ReactPlayer
              url={section7?.video_url_5}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}

            <h2 className={style.brandingHeading2}>Jesteśmy tu po to, by <br />sprawić, że każdy kadr <br />w Twoim filmie <br />będzie miał znaczenie</h2>
            <p>Skontaktuj się z nami, aby dowiedzieć się <br />więcej o naszych usługach i umówić się <br />na konsultację.</p>
            <div className={`mb-3  ${style.ratingLogoImg}`}>
              <Image
                src={section7?.image_url_1}
                alt="rating image"
                width="100%"
                height="auto"
              />
              {/* <Image
                src={section7?.image_url_2}
                alt="rating image"
                width="auto"
                height="auto"
              /> */}
            </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HardResult;
