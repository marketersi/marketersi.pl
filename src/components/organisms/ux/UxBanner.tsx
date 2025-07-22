// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
// import useOsClass from "@/components/molecules/useOsClass";
// import ProjectuxModal from "../modals/ProjectuxModal";
// import dynamic from 'next/dynamic';

// const UxBanner = () => {
//   const uxScreenData = useSelector((state) => state.ux.screenData);

//   const HeroSection = uxScreenData?.HeroSection || {};
//   // Using priceListData here

//   const osClass = useOsClass();
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <>
//       <section>
//         <div id="header" className="UXBannerContainer">
//           <div className="row m-0">
//             <div className="col-xl-5 col-xxl-6">
//               {/* <h1 className="titleHead">
//                 <span>
//                   {HeroSection?.title1}
                  
//                 </span>
//                 <br />
//                 {HeroSection?.title2}
//               </h1>  */}
//               <h1 className="titleHead">
//                 Tworzenie <br/> stron <br/> i design UX <br/>z Marketersi.
//               </h1>
//               {/* <p className="subitle">{HeroSection.description1}</p> */}
//               <p className="subitle">
//                 Tworzymy strony i design UX, <br /> które 
//                 przekładają się na sukces.
//               </p>
//               <p className="subitle">{HeroSection.description2} </p>

//               <button className="buttonux" onClick={openModal}>
//                 Brzmi świetnie. Wyślijcie mi ofertę.
//               </button>
//             </div>
//             <div className={`col-xl-7 col-xxl-6 ${osClass}`}>
//               <ReactPlayer
//                 muted={true}
//                 playing={true}
//                 loop={true}
//                 width="100%"
//                 height="auto"
//                 url={HeroSection?.video_url}
//                 className="UXheroVideo"
//                 playsinline
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
//     </>
//   );
// };

// export default UxBanner;
// UXbanner.js
"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter and useSearchParams
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import useOsClass from "@/components/molecules/useOsClass";
import ProjectuxModal from "../modals/ProjectuxModal";

const UxBanner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const uxScreenData = useSelector((state) => state.ux.screenData);
  const HeroSection = uxScreenData?.HeroSection || {};

  const osClass = useOsClass();

  // Check if the modal should be open based on a URL query parameter
  const isModalOpen = searchParams.get("uxModal") === "open";

  const openModal = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("uxModal", "open");
    router.push(`?${newSearchParams.toString()}`, undefined, { shallow: true });
  };

  const closeModal = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("uxModal"); // Remove the 'uxModal' parameter
    router.push(`?${newSearchParams.toString()}`, undefined, { shallow: true });
  };

  return (
    <>
      <section>
        <div id="header" className="UXBannerContainer">
          <div className="row m-0">
            <div className="col-xl-5 col-xxl-6">
              <h1 className="titleHead">
                Tworzenie <br /> stron <br /> i design UX <br />z Marketersi.
              </h1>
              <p className="subitle">
                Tworzymy strony i design UX, <br /> które przekładają się na sukces.
              </p>
              <p className="subitle">{HeroSection.description2} </p>

              <button className="buttonux" onClick={openModal}>
                Brzmi świetnie. Wyślijcie mi ofertę.
              </button>
            </div>
            <div className={`col-xl-7 col-xxl-6 ${osClass}`}>
              <ReactPlayer
                muted={true}
                playing={true}
                loop={true}
                width="100%"
                height="auto"
                url={HeroSection?.video_url}
                className="UXheroVideo"
                playsinline
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

export default UxBanner;