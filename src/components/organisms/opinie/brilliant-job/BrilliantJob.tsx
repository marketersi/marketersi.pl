"use client";

import React from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import {
  ClientCarousel,
  CarouselContext,
} from "../../strategia-marketingowa/ClientCarousel";
import { useContext } from "react";

// const BrilliantJob = () => {
//   return (
//     <>
//       <div className={style.brilliant}>
//         <div className={style.job}>
//           <Row>
//             <Col sm={3}>
//               <div className={style.jobImg}>
//                 <img
//                   src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdlabs.b3a31872.png&w=384&q=75"
//                   alt=""
//                 />
//               </div>
//             </Col>
//             <Col sm={9}>
//               <div className={style.jobContent}>
//                 <h3>
//                   Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy
//                   stronę. <span> Genialna robota.</span>
//                 </h3>
//                 <div className={style.jobReview}>
//                   <Row>
//                     <Col sm={2}>
//                       <ReactPlayer
//                         url="https://owocni.pl/assets/nasi-klienci/video/Iglarki-logo.mp4"
//                         playing={true}
//                         loop={true}
//                         autoplay={true}
//                         width="100%"
//                         height="auto"
//                         className={style.heroVideo}
//                       />
//                     </Col>
//                     <Col sm={10}>
//                       <div className={style.jobRating}>
//                         <h6>Agnieszka Marchewka</h6>
//                         <p>ubranka dziecięce</p>
//                         <div className={style.star}>
//                           <img
//                             src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                     </Col>
//                   </Row>
//                   <div className="OurClients_Slide_Button">
//                     <div className="OurClients_Slide_Button_Text">Następna</div>
//                     <div className="ArrowButton" onMouseEnter={handleNext}>
//                       <span className="ArrowButton_Arrow">&gt;</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </>
//   );
// };

const SlideOne = () => {
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      <Row>
        <Col sm={3}>
          <div className={style.jobImg}>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdlabs.b3a31872.png&w=384&q=75"
              alt=""
            />
          </div>
        </Col>
        <Col sm={9}>
          <div className={style.jobContent}>
            <h3>
              Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę.{" "}
              <span> Genialna robota.</span>
            </h3>
            <div className={style.jobReview}>
              <Row>
                <Col sm={2}>
                  <ReactPlayer
                    url="https://owocni.pl/assets/nasi-klienci/video/Iglarki-logo.mp4"
                    playing={true}
                    loop={true}
                    autoplay={true}
                    width="100%"
                    height="auto"
                    className={style.heroVideo}
                  />
                </Col>
                <Col sm={10}>
                  <div className={style.jobRating}>
                    <h6>Agnieszka Marchewka</h6>
                    <p>ubranka dziecięce</p>
                    <div className={style.star}>
                      <img
                        src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <div className="OurClients_Slide_Button">
        <div className="OurClients_Slide_Button_Text">Następna</div>
        <div className="ArrowButton" onMouseEnter={handleNext}>
          <span className="ArrowButton_Arrow">&gt;</span>
        </div>
      </div>
    </>
  );
};
const SlideTwo = () => {
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      <Row>
        <Col sm={3}>
          <div className={style.jobImg}>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdlabs.b3a31872.png&w=384&q=75"
              alt=""
            />
          </div>
        </Col>
        <Col sm={9}>
          <div className={style.jobContent}>
            <h3>
              Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę.{" "}
              <span> Genialna robota.</span>
            </h3>
            <div className={style.jobReview}>
              <Row>
                <Col sm={2}>
                  <ReactPlayer
                    url="https://owocni.pl/assets/nasi-klienci/video/Iglarki-logo.mp4"
                    playing={true}
                    loop={true}
                    autoplay={true}
                    width="100%"
                    height="auto"
                    className={style.heroVideo}
                  />
                </Col>
                <Col sm={10}>
                  <div className={style.jobRating}>
                    <h6>Agnieszka Marchewka</h6>
                    <p>ubranka dziecięce</p>
                    <div className={style.star}>
                      <img
                        src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
     
    </>
  );
};

export default function BrilliantJob() {
  const slides = [SlideOne, SlideTwo];
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      <div className={style.job}>
        <ClientCarousel slides={slides} options={{loop: true}} />
      </div>
      <div className="OurClients_Slide_Button">
        <div className="OurClients_Slide_Button_Text">Następna</div>
        <div className="ArrowButton" onMouseEnter={handleNext}>
          <span className="ArrowButton_Arrow">&gt;</span>
        </div>
      </div>

      
    </>
  );
}

// export default BrilliantJob;
