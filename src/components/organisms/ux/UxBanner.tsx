// UXbanner.js
"use client";

import React from "react";
import Link from "next/link";
import ProjectuxQueryModal, { useOpenProjectUxModal } from "./ProjectuxQueryModal";
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import useOsClass from "@/components/molecules/useOsClass";

const UxBanner = () => {

  const uxScreenData = useSelector((state) => state.ux.screenData);
  const HeroSection = uxScreenData?.HeroSection || {};

  const osClass = useOsClass();

  // Check if the modal should be open based on a URL query parameter
  const openModal = useOpenProjectUxModal("ModalA");

  return (
    <>
      <section>
        <div id="header" className="UXBannerContainer">
          <div className="row m-0">
            <div className="col-xl-5 col-xxl-6">
              <h1 className="titleHead">
                Strona internetowa <br /> dla firmy, która <br /> przynosi klientów.
              </h1>
              <p className="subitle">
                Pomóż klientowi zrozumieć ofertę i łatwo się z Tobą skontaktować.
              </p>
              <p className="subitle">Planujesz stronę? Sprawdź <Link href="/poradniki/co-powinna-zawierac-strona-malej-firmy">listę elementów strony małej firmy</Link>.</p>

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

      <ProjectuxQueryModal queryKey="ModalA" />
    </>
  );
};

export default UxBanner;