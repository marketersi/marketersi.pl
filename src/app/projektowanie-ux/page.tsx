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
      <UxBanner />
      <Counter />
      <Competitions />
      <Market />
      <IgnoreSites />
      <Complex />
      <Systemically />
      <UxVideo />
      <GoodProcess />
      <WebSite />
      <Slider />
      <Executive />
      <UxAccordion items={items} />
    </>
  );
};

export default UXDesignScreen;
