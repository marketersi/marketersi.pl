import Stars from "@/components/molecules/Ratings";
import React from "react";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { useSelector } from "react-redux";
import "./reviewCard.css";
import useOsClass from "@/components/molecules/useOsClass";
import dynamic from 'next/dynamic';

const ReviewCard = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const BrilliantJob = screenData.BrilliantJob || [];
  const osClass = useOsClass();
  return (
    <div className="review">  
    
    <div className="review_container">
      
      <div className="rc_review webhide">{BrilliantJob[0]?.review}</div>

      <div className="FlexDiv">
        <div className="reviewer_image_container">
          <img src={BrilliantJob[0]?.image_url} alt="reviewer_image" />
        </div>
        
        

        <div className="review_content_container">

          <div className="OurClients_Slide_Media">
            <img className="ourClientImg" src="https://images.prismic.io/marketersi/Z1_G55bqstJ98hqp_ZrHFV0aF0TcGIs_p_Marketersi-2-1--2-.avif?auto=format,compress" alt="" />
          </div>
        

          <div className="rc_rating_container">
            {/* <img
              src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
              alt=""
            /> */}
            {/* Start Svg Start */}
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
              
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>

              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>

              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>

              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
            </div>
            {/* Start Svg Start */}

            <div>
              <div className="reviewer_name">{BrilliantJob[0]?.client_name}</div>
              <div className="reviewer_company">
                {BrilliantJob[0]?.client_designation}
              </div>
            </div>
          </div>
          <div className="rc_review mobilehide">{BrilliantJob[0]?.review}</div>
          <div className={`rc_video_container ${osClass}`}>
            <ReactPlayer
              muted={true}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              url={BrilliantJob[0]?.video_url}
              playsinline
            />
          </div>

        </div>
      </div>

    </div>
    </div>
  );
};

export default ReviewCard;
