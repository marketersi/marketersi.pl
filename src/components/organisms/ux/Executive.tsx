import React from "react";
import { useSelector } from "react-redux";

const Executive = () => {
  const { screenData } = useSelector((state) => state.ux);
  const executive = screenData.executive || {};

  return (
    <section>
      <div id="highResult">
        <h2>{executive.title}</h2>
        <div className="row">
          <div className="paraResult">
            <p>{executive.paragraph_1}</p>
            <p>{executive.paragraph_2}</p>
            <p>{executive.paragraph_3}</p>
            <p>{executive.paragraph_4}</p>
          </div>
          <div>
            {executive.video_url && (
              <video muted={true} loop={true} autoPlay className="desktopVideo">
                <source src={executive.video_url} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Executive;

// import ReactPlayer from "react-player";
// import { useSelector } from "react-redux";

// const Executive = () => {
//   const { screenData } = useSelector((state) => state.ux);
//   const executive = screenData.executive || {};
//   return (
//     <div className="executive_section">
//       <h2>{executive.title}</h2>
//       <div className="executive_flex">
//         <div className="executive_content">
//           <p>{executive.paragraph_1}</p>
//           <p>{executive.paragraph_2}</p>
//           <p>{executive.paragraph_3}</p>
//           <p>{executive.paragraph_4}</p>
//         </div>
//         <div className="executive_video_container">
//           {/* <ReactPlayer
//             muted={true}
//             playing={true}
//             loop={true}
//             className="executive_video"
//             url={executive?.video_url}
//           /> */}
//           {executive.video_url && (
//             <video
//               className="executive_video"
//               muted={true}
//               loop={true}
//               autoPlay
//             >
//               <source src={executive.video_url} type="video/mp4" />
//             </video>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Executive;
