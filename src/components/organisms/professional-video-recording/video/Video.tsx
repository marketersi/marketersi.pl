'use client';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Variants, motion } from 'framer-motion';
import style from './video.module.css';
import { useSelector } from 'react-redux';

const Video = () => {
  const { screenData } = useSelector((state) => state.videoRecording);
  const { brandSection } = screenData;

  const slideAnimationTop: Variants = {
    offscreen: {
      scale: 0.7,
      rotate: -10,
      transition: {
        type: 'ease',
        damping: 25,
        stiffness: 70,
        duration: 3,
      },
    },
    onscreen: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'ease',
        damping: 25,
        stiffness: 70,
        duration: 3,
      },
    },
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <motion.div
        className={style.mainVideoDiv}
        initial="offscreen"
        whileInView="onscreen"
        variants={slideAnimationTop}
      >
        <ReactPlayer
          url={brandSection?.banner_video}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="auto"
          pip={false}
          playsinline
        />
        <div className={style.youtubeIcon} onClick={openPopup}>
          <svg
            className="h-[60%] w-full"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M240 128C240.007 130.716 239.31 133.388 237.978 135.756C236.647 138.123 234.725 140.105 232.4 141.51L88.32 229.65C85.8909 231.138 83.1087 231.95 80.2608 232.002C77.4129 232.055 74.6025 231.347 72.12 229.95C69.6611 228.575 67.6128 226.57 66.1856 224.141C64.7585 221.712 64.0041 218.947 64 216.13V39.8701C64.0041 37.053 64.7585 34.2877 66.1856 31.8588C67.6128 29.4299 69.6611 27.4249 72.12 26.0501C74.6025 24.6536 77.4129 23.9451 80.2608 23.9979C83.1087 24.0506 85.8909 24.8626 88.32 26.3501L232.4 114.49C234.725 115.895 236.647 117.877 237.978 120.245C239.31 122.612 240.007 125.284 240 128Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </motion.div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <ReactPlayer
              url={brandSection?.banner_video}
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="auto"
              className="popupVideo"
              style={{ borderRadius: '30px' }}
              pip={false}
              playsinline
            />
          </div>
        </div>
      )}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1111;
        }

        .popup-content {
          overflow: auto;
        }
      `}</style>
    </>
  );
};

export default Video;
