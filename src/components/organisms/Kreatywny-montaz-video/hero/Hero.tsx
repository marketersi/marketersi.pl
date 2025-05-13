"use client";
import React, { useState, useRef } from "react";
import dynamic from 'next/dynamic';
import { useSelector } from "react-redux";

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Hero = () => {
  const { screenData } = useSelector((state) => state.videoEditing);
  const { heroSection } = screenData;
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPauseIcon, setShowPauseIcon] = useState(false);
  const playerRef = useRef(null);

  const handlePlayVideo = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    setShowPauseIcon(false);

    if (nextState && playerRef.current) {
      playerRef.current.seekTo(0); // Restart video on first play
    }

    const iframe = document.querySelector("iframe");
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe?.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe?.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
      onMouseEnter={() => setShowPauseIcon(true)}
      onMouseLeave={() => setShowPauseIcon(false)}
    >
      <ReactPlayer
        ref={playerRef}
        url="https://marketersi.cdn.prismic.io/marketersi/Z3zMopbqstJ99Gc4_MARKETERSI-16-9-2-.mp4"
        playing={isPlaying}
        loop
        muted={!isPlaying}
        width="100%"
        height="auto"
        className="react-player"
        pip={false}
        playsinline
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              fs: 1,
            },
          },
        }}
      />

      {!isPlaying && (
        <div
          onClick={handlePlayVideo}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "10px 20px",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
            zIndex: 10,
            fontSize: "16px",
            maxWidth: "100%",
            display:"flex",
            alignItems:"center",
          }}
        >
         
          <div style={{}}>
            <svg
              viewBox="0 0 256 256"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "24px", height: "100%" ,marginRight:"10px"}}
            >
              <path d="M240 128C240.007 130.716 239.31 133.388 237.978 135.756C236.647 138.123 234.725 140.105 232.4 141.51L88.32 229.65C85.8909 231.138 83.1087 231.95 80.2608 232.002C77.4129 232.055 74.6025 231.347 72.12 229.95C69.6611 228.575 67.6128 226.57 66.1856 224.141C64.7585 221.712 64.0041 218.947 64 216.13V39.8701C64.0041 37.053 64.7585 34.2877 66.1856 31.8588C67.6128 29.4299 69.6611 27.4249 72.12 26.0501C74.6025 24.6536 77.4129 23.9451 80.2608 23.9979C83.1087 24.0506 85.8909 24.8626 88.32 26.3501L232.4 114.49C234.725 115.895 236.647 117.877 237.978 120.245C239.31 122.612 240.007 125.284 240 128Z" />
            </svg>
          </div>
           Kliknij, by obejrzeć z dźwiękiem
        </div>
      )}

      {isPlaying && showPauseIcon && (
        <div
          onClick={handlePlayVideo}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "24px", height: "24px" }}
          >
            <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Hero;
