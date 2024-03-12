"use client";
import React, { useEffect } from "react";
import NazwaHero from "@/components/organisms/nazwa/hero/Hero";
import Anatomy from "@/components/organisms/nazwa/anatomy/Anatomy";
import AnatomyGuide from "@/components/organisms/nazwa/anatomy/AnatomyGuide";
import LaunchEssentials from "@/components/organisms/nazwa/launch-essentials/LaunchEssentials";
import ProjectValue from "@/components/organisms/nazwa/project-value/ProjectValue";
import ImplementationExamples from "@/components/organisms/nazwa/Implementation-examples/ImplementationExamples";
import "./nazwa.css";
import NazwaFooter from "@/components/organisms/nazwa/nazwa-footer/NazwaFooter";
import Accordion from "@/components/organisms/opinie/accordion/Accordion";
import YesAccordion from "@/components/organisms/strategia-marketingowa/accordion/YesAccordion";
import items from "@/components/organisms/strategia-marketingowa/accordion/Data";
import LogoAccordion from "@/components/organisms/logo/accordion/LogoAccordion";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ANATOMY_SCREEN_DATA } from "@/redux/nazwa-dla-firmy/anatomyAction";
import OptionBox2 from "@/components/organisms/tresci-sprzedazowe/options-box2/OptionBox2";
import { FETCH_SALES_SCREEN_DATA } from "@/redux/tresci/salescontentAction";

const NazwaDlaFirmy = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const {  launch_essentials, faq } = screenData || {};
  const { accordion } = faq || {};
  const dispatch = useDispatch();

  if (screenData) {
    // console.log("home screen data from UI => ", screenData);
  }

  useEffect(() => {
    dispatch({ type: FETCH_ANATOMY_SCREEN_DATA });
    dispatch({ type: FETCH_SALES_SCREEN_DATA });
  }, [dispatch]);

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
      <OptionBox2 optionBox2={launch_essentials} />

      {/* section 5 */}
      <LaunchEssentials />

      {/* section 6 */}
      {/* TO ADD: ACCORDION */}
      <LogoAccordion items={accordion} />

      {/* section 7 */}
      <ProjectValue />

      <ImplementationExamples />

      <NazwaFooter />
    </>
  );
};

export default NazwaDlaFirmy;
