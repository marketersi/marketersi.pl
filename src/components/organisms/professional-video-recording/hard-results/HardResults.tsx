'use client';

import React from 'react';
import style from '../main.module.css';
import ReactPlayer from 'react-player';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useOsClass from '@/components/molecules/useOsClass';

const HardResult = () => {
  const { screenData } = useSelector((state) => state.videoRecording);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section4, section5, section6, section7 } =
    imageswithdescription || {};
    const osClass = useOsClass();
    
  return (
    <div className={style.hardResulth2}>
      <Container>
        <div className={style.hardResult}>
          <div className={style.Content}>
            {/* <h2 className={style.hardMB}>{section4?.title}</h2> */}
            <h2 className={style.hardMB}>Przekaz,<br/> który działa.</h2>
            <h3 className={style.gradientBG}>Wyniki, które mówią <br/>
               same za siebie</h3>
            {/* <h3 className={style.gradientBG}>- {section4?.subtitle}</h3> */}
            {/* <img src={section4?.image_url} alt="" className={style.hardImg} /> */}
            <p>{section4?.paragraph_1}</p>
            <p>{section4?.paragraph_2}</p>
          </div>

          <div className={style.Content}>
            <Row className="mb-0">
              <Col lg={12} className="order-lg-1 order-2">
                <p>{section5?.quote}</p>
              </Col>
              {/* <Col lg={6} className={`order-lg-2 order-1 ${osClass}`}> */}
                {/* <ReactPlayer
                  url={section5?.video_url}
                  playing={true}
                  loop={true}
                  width="100%"
                  height="auto"
                  muted={true}
                  pip={false}
                  playsinline
                /> */}
              {/* </Col> */}
            </Row>
          </div>
          <div className={style.Content}>
            <p>{section5?.paragraph_1}</p>
            <p>{section5?.paragraph_2}</p>
          </div>

          <div className={style.Content}>
          <Row className="md:mt-5 md:pt-5 md:mb-0 pb-0 row">
            {/* <Col lg={7} className={osClass}> */}
              {/* <ReactPlayer
                url={section6?.video_url}
                playing={true}
                loop={true}
                width="100%"
                height="auto"
                muted={true}
                pip={false}
                playsinline
              /> */}
            {/* </Col> */}
            <Col lg={12}>
              <p className="">{section6?.quote}</p>
            </Col>
          </Row>

          </div>

          <div className={style.Content}>
            <p>{section6?.subtitle}</p>
            <p>{section6?.paragraph_1}</p>
            
            <p>{section6?.paragraph_2}</p>
            <p>{section6?.paragraph_3}</p>
            <div className={osClass}>
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
            </div>
            <div className={style.customDivCont}>
              <h2 className={style.brandingHeading}>{section7?.title}</h2>
            </div>
            <p>{section7?.paragraph_1}</p>
            <div className={osClass}>
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
            </div>
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
            <div className={style.fontCustomAdd}>
              {/* <h3>{section7?.bottom_title}</h3> */}
            <h3>
              Czas działać – <br/>
              stwórz z nami <br/>
              wideo, które <br/>
              robi różnicę
            </h3>
              <h4 className={style.hardBottomContent} style={{ textAlign: "center" }}>
                {section7?.quoted_title}
              </h4>
            </div>
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
      </Container>
    </div>
  );
};

export default HardResult;
