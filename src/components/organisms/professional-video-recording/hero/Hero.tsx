// "use client";
// import React from "react";
// import { Container } from "react-bootstrap";
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
// import Link from "next/link";
// import { useSelector } from "react-redux";
// import Image from "next/image";
// import style from "./hero.module.css";
// import useOsClass from "@/components/molecules/useOsClass";
// import dynamic from 'next/dynamic';

// const Hero = () => {
//   const { screenData } = useSelector((state) => state.videoRecording);
//   const { heroSection } = screenData;
//     const [isPlaying, setIsPlaying] = React.useState(false);
//       const playerRef = React.useRef(null);


//   const osClass = useOsClass();
//   const handlePlayVideo = () => {
//     const iframe = document.querySelector("iframe");
  
//     if (!isPlaying) {
//       setIsPlaying(true);
  
//       // Fullscreen on first play
//       if (iframe?.requestFullscreen) {
//         iframe.requestFullscreen();
//       } else if (iframe?.webkitRequestFullscreen) {
//         iframe.webkitRequestFullscreen();
//       } else if (iframe?.msRequestFullscreen) {
//         iframe.msRequestFullscreen();
//       }
//     } else {
//       setIsPlaying(false);
//     }
//   };  
//   return (
//     <div className={style.heroSection}>
//     <ReactPlayer
//   ref={playerRef}
//   url={heroSection?.background_video}
//   playing={isPlaying}
//   loop={true}
//   width="100%"
//   height="auto"
//   className={style.heroVideo}
//   muted={false}
//   pip={false}
//   playsinline
//   //controls={true}
//   config={{
//     youtube: {
//       playerVars: {
//         autoplay: 1,
//         controls: 1,
//         modestbranding: 1,
//         rel: 0,
//         fs: 1,
//       },
//     },
//   }}
// />

//       <div className={style.videoButtonFix}>
//       <p>Kliknij,
//         <div className={style.youtubeIconSort} onClick={handlePlayVideo}>
//           <svg
//               className="h-[60%] w-full"
//               viewBox="0 0 256 256"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M240 128C240.007 130.716 239.31 133.388 237.978 135.756C236.647 138.123 234.725 140.105 232.4 141.51L88.32 229.65C85.8909 231.138 83.1087 231.95 80.2608 232.002C77.4129 232.055 74.6025 231.347 72.12 229.95C69.6611 228.575 67.6128 226.57 66.1856 224.141C64.7585 221.712 64.0041 218.947 64 216.13V39.8701C64.0041 37.053 64.7585 34.2877 66.1856 31.8588C67.6128 29.4299 69.6611 27.4249 72.12 26.0501C74.6025 24.6536 77.4129 23.9451 80.2608 23.9979C83.1087 24.0506 85.8909 24.8626 88.32 26.3501L232.4 114.49C234.725 115.895 236.647 117.877 237.978 120.245C239.31 122.612 240.007 125.284 240 128Z"
//                 fill="white"
//               ></path>
//             </svg>
//         </div>
//         by obejrzeć z dźwiękiem</p>
//       <div className={style.youtubeIcon} onClick={handlePlayVideo}>


//       {!isPlaying ? (
//   // ▶️ Play icon
//   <svg
//     className="h-[60%] w-full"
//     viewBox="0 0 256 256"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M240 128C240.007 130.716 239.31 133.388 237.978 135.756C236.647 138.123 234.725 140.105 232.4 141.51L88.32 229.65C85.8909 231.138 83.1087 231.95 80.2608 232.002C77.4129 232.055 74.6025 231.347 72.12 229.95C69.6611 228.575 67.6128 226.57 66.1856 224.141C64.7585 221.712 64.0041 218.947 64 216.13V39.8701C64.0041 37.053 64.7585 34.2877 66.1856 31.8588C67.6128 29.4299 69.6611 27.4249 72.12 26.0501C74.6025 24.6536 77.4129 23.9451 80.2608 23.9979C83.1087 24.0506 85.8909 24.8626 88.32 26.3501L232.4 114.49C234.725 115.895 236.647 117.877 237.978 120.245C239.31 122.612 240.007 125.284 240 128Z"
//       fill="white"
//     ></path>
//   </svg>
// ) : (
//   // ⏸️ Pause icon
//   <svg
//     className="h-[60%] w-full"
//     viewBox="0 0 24 24"
//     fill="white"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" />
//   </svg>
// )}

//       </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import useOsClass from "@/components/molecules/useOsClass";
import style from "./hero.module.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Hero = () => {
  const { screenData } = useSelector((state) => state.videoRecording);
  const { heroSection } = screenData;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const playerRef = React.useRef(null);
  const osClass = useOsClass();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const handlePlayVideo = () => {
    const iframe = document.querySelector("iframe");

    if (!isPlaying) {
      if (playerRef.current) playerRef.current.seekTo(0);
      setIsPlaying(true);

      if (iframe?.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe?.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe?.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <div
      className={style.heroSection}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      <ReactPlayer
        ref={playerRef}
        url={
          isMobile
            ? "https://marketersi.cdn.prismic.io/marketersi/aC8FuydWJ-7kSb33_marketersi2_Video_1-FHD6.5mbps-1-.mp4"
            : heroSection?.background_video
        }
        playing={true}
        loop={true}
        muted={!isPlaying}
        width="100%"
        height="100%"
        className={style.heroVideo}
        pip={false}
        playsinline
        controls={false}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              fs: 0,
            },
          },
        }}
      />

      {/* ✅ Correct overlay image on bottom-left */}
      {!isPlaying && (
        <div
          onClick={handlePlayVideo}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <img
            src="/assets/images/Kliknij,-aby-obejrzec-z-dziekiem.png"
            alt="Kliknij, aby obejrzeć z dźwiękiem"
            style={{
              width: "130px",  // You can adjust size here if needed
              height: "auto",
              maxWidth: "100%",
            }}
          />
        </div>
      )}

      {/* Pause button if hovered & playing */}
      {isPlaying && hovered && (
        <div
          onClick={() => setIsPlaying(false)}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            zIndex: 10,
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

