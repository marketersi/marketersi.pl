"use client";
import React from "react";
import "./uxDesign.css";
import UxBanner from "@/components/organisms/ux/UxBanner";
import Counter from "@/components/organisms/ux/Counter";
import Competitions from "@/components/organisms/ux/Competitions";
import Market from "@/components/organisms/ux/Market";
import IgnoreSites from "@/components/organisms/ux/IgnoreSites";
import Complex from "@/components/organisms/ux/Complex";
import Systemically from "@/components/organisms/ux/Systemically";
import UxVideo from "@/components/organisms/ux/UxVideo";
import GoodProcess from "@/components/organisms/ux/GoodProcess";
import WebSite from "@/components/organisms/ux/WebSite";
import Slider from "@/components/organisms/ux/UxSlider/Slider";
import Executive from "@/components/organisms/ux/Executive";
import UxAccordion from "@/components/organisms/ux/accordion/UxAccordion";
import items from "@/components/organisms/ux/accordion/Data";

const UXDesignScreen = () => {
  return (
    <>
      {/* section 1 */}
      <UxBanner />

      {/* section 2 */}
      <Counter />

      {/* section 3 */}
      <Competitions />

      {/* section 4 */}
      <Market />

      {/* section 5 */}
      <IgnoreSites />
      {/* section 6 */}
      <Complex />

      {/* section 7 */}
      <Systemically />

      {/* section 8 (--time)*/}
      <UxVideo />

      {/* section 9 */}

      <GoodProcess />
      {/* section 10 */}
      <WebSite />
      {/* section 11 */}
      <Slider />
      {/* section 12 */}
      <Executive />

      {/* section 13 */}
      <UxAccordion items={items} />
    </>
  );
};

export default UXDesignScreen;
