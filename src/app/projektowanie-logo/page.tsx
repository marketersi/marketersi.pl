"use client";
import React, { useEffect } from "react";
import "./logoDesign.css";
import LogoBanner from "@/components/organisms/logo/LogoBanner";
import SampleLogo from "@/components/organisms/logo/SampleLogo";
import GoodBusiness from "@/components/organisms/logo/GoodBusiness";
import PDFCopy from "@/components/organisms/logo/PDFCopy";
import Opinion from "@/components/organisms/logo/Opinion";
import Receive from "@/components/organisms/logo/Receive";
import Guarantee from "@/components/organisms/logo/Guarantee";
import LogoAccordion from "@/components/organisms/logo/accordion/LogoAccordion";
import items from "@/components/organisms/logo/accordion/LogoData";
import ProjectValue from "@/components/organisms/logo/ProjectsValue";
import Gallery from "@/components/organisms/logo/Gallery";
import StepByStep from "@/components/organisms/logo/StepByStep";
import FreeShops from "@/components/organisms/logo/FreeShops";
import Enexo from "@/components/organisms/logo/Enexo";
import Daco from "@/components/organisms/logo/Daco";
import Aico from "@/components/organisms/logo/Aico";
import ZooGarden from "@/components/organisms/logo/ZooGarden";
import Construction from "@/components/organisms/logo/Construction";
import Restaurant from "@/components/organisms/logo/Restaurant";
import Park from "@/components/organisms/logo/Park";
import GPN from "@/components/organisms/logo/GPN";
import NewCompany from "@/components/organisms/logo/NewCompany";
import Form from "@/components/organisms/tresci-sprzedazowe/form/Form";
import LogoFooter from "@/components/organisms/logo/logo-footer/LogoFooter";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_LOGO_SCREEN_DATA } from "@/redux/projektowanie-logo/logoAction";
import Loader from "@/components/organisms/animation/Loader";

const LogoAccordionData = {
  accordionData: [
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet",
    },
  ],
};

const LogoDesignScreen = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const dispatch = useDispatch();

  if (screenData) {
    console.warn("🟢logo screen data ui 👉👉👉", screenData);
  }

  const { LogoAccordionData } = screenData || {};
  const { accordionData } = LogoAccordionData || {};

  useEffect(() => {
    dispatch({ type: FETCH_LOGO_SCREEN_DATA });
  }, [dispatch]);

  useEffect(() => {
    console.warn("accordionData👉✅", accordionData);
  }, [accordionData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* section 1 */}
          <LogoBanner />
          {/* section 2 */}
          <SampleLogo />
          {/* section 3 */}
          <GoodBusiness />
          {/* section 4 */}
          <PDFCopy />
          {/* section 5 */}
          <Opinion />
          {/* section 6 */}
          <Receive />
          {/* section 7 */}
          <Guarantee />
          {/* section 8 */}
          <LogoAccordion items={accordionData} />
          {/* section 9 */}
          <ProjectValue />
          {/* section 10 */}
          <Gallery />
          {/* section 11 */}
          {/* <StepByStep /> */}
          {/* section 12 */}
          {/* <FreeShops /> */}
          {/* section 13 */}
          {/* <Enexo /> */}
          {/* section 14 */}
          {/* <Daco /> */}
          {/* section 15 */}
          {/* <Aico /> */}
          {/* section 16 */}
          {/* <ZooGarden /> */}
          {/* section 17 */}
          {/* <Construction /> */}
          {/* section 18 */}
          {/* <Restaurant /> */}
          {/* section 19 */}
          {/* <Park /> */}
          {/* section 20 */}
          {/* <GPN /> */}
          {/* section 21 */}
          {/* <NewCompany /> */}
          {/* section 22 */}
          {/* <section className="black-sec-form">
            <div className="copywriter-ending-1 text-center">
              Zróbmy razem <br />
              coś fajnego
            </div>
            <Form />
          </section> */}
          {/* <LogoFooter /> */}
        </>
      )}
    </>
  );
};

export default LogoDesignScreen;
