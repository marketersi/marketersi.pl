"use client";
import Analysis from "../../components/organisms/strategia-marketingowa/Analysis";
import AnswerAll from "../../components/organisms/strategia-marketingowa/AnswerAll";
import Branding from "../../components/organisms/strategia-marketingowa/Branding";
import ImageAdvantage from "../../components/organisms/strategia-marketingowa/ImageAdvantage";
import InviteCustomer from "../../components/organisms/strategia-marketingowa/InviteCustomer";
import MainContentOne from "../../components/organisms/strategia-marketingowa/MainContentOne";
import MainContentTwo from "../../components/organisms/strategia-marketingowa/MainContentTwo";
import MainHeading from "../../components/organisms/strategia-marketingowa/MainHeading";
import MainNumber from "../../components/organisms/strategia-marketingowa/MainNumber";
// import OurClients from "../../components/organisms/strategia-marketingowa/OurClients";
import Price from "../../components/organisms/strategia-marketingowa/Price";
import QuoteOne from "../../components/organisms/strategia-marketingowa/QuoteOne";
import QuoteTwo from "../../components/organisms/strategia-marketingowa/QuoteTwo";
import ResultMax from "../../components/organisms/strategia-marketingowa/ResultMax";
import ResultTable from "../../components/organisms/strategia-marketingowa/ResultTable";
import Strategy from "../../components/organisms/strategia-marketingowa/Strategy";
import StrategyAction from "../../components/organisms/strategia-marketingowa/StrategyAction";
import Testimonial from "../../components/organisms/strategia-marketingowa/Testimonial";
import WhatRecieve from "../../components/organisms/strategia-marketingowa/WhatRecieve";
import YesAccordion from "../../components/organisms/strategia-marketingowa/accordion/YesAccordion";
import items from "@/components/organisms/strategia-marketingowa/accordion/Data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STRATEGY_SCREEN_DATA } from "@/redux/strategia/strategyAction";
import OurClients from "../../components/organisms/main/ourclients/OurClients";
import "./strategiamarketingowa.css";
import { FETCH_HOME_SCREEN_DATA } from "@/redux/home/homeAction";
import Loader from "@/components/organisms/animation/Loader";
import { FETCH_CONSULTING_SCREEN_DATA } from "@/redux/konsultacje/consultingAction";
import { FETCH_PRICELIST_SCREEN_DATA } from "@/redux/cennik/pricelistAction";

const StrategiaMarketingowa = () => {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { FAQsection } = screenData || {};

  const { screenData: PriceListData } = useSelector((state) => state.priceList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_STRATEGY_SCREEN_DATA });
    dispatch({ type: FETCH_HOME_SCREEN_DATA });
    dispatch({ type: FETCH_PRICELIST_SCREEN_DATA });
  }, [dispatch]);

  return (
    <>
      <div>
        <MainHeading />

        <MainContentOne />

        <MainNumber />

        <MainContentTwo />

        <ResultTable />

        <Strategy />

        <Testimonial />

        <ResultMax />

        <Analysis />

        <WhatRecieve />

        <ImageAdvantage />

        <InviteCustomer />

        <QuoteOne />

        <Branding />

        <QuoteTwo />

        <OurClients />

        <Price />

        <StrategyAction />

        <AnswerAll />

        <YesAccordion />
      </div>
    </>
  );
};

export default StrategiaMarketingowa;
