"use client";
import React from "react";
import NazwaHero from "@/components/organisms/nazwa/hero/Hero";
import Anatomy from "@/components/organisms/nazwa/anatomy/Anatomy";
import AnatomyGuide from "@/components/organisms/nazwa/anatomy/AnatomyGuide";
import LaunchEssentials from "@/components/organisms/nazwa/launch-essentials/LaunchEssentials";
import ProjectValue from "@/components/organisms/nazwa/project-value/ProjectValue";
import ImplementationExamples from "@/components/organisms/nazwa/Implementation-examples/ImplementationExamples";
import "./nazwa.css";

const NazwaDlaFirmy = () => {
  return (
    <>
      {/* section 1 */}
      <NazwaHero />

      {/* section 2 */}
      <Anatomy />

      {/* section 3 */}
      <AnatomyGuide />

      {/* section 4 */}
      {/* TO ADD :REVIEW CARD */}

      {/* section 5 */}
      <LaunchEssentials />

      {/* section 6 */}
      {/* TO ADD: ACCORDION */}

      {/* section 7 */}
      <ProjectValue />

      <ImplementationExamples />
    </>
  );
};

export default NazwaDlaFirmy;
