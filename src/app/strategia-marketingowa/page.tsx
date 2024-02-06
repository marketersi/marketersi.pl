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
import OurClients from "../../components/organisms/strategia-marketingowa/OurClients";
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
import "./strategiamarketingowa.css";

const StrategiaMarketingowa = () => {
  return (
    <>
      <div>
        {/* 1. MainHeading */}
        <MainHeading />

        {/* 2. MainContentOne */}
        <MainContentOne />

        {/* 3. MainNumber */}
        <MainNumber />

        {/* 4. MainContentTwo */}
        <MainContentTwo />

        {/* 5. ResultTable */}
        <ResultTable />

        {/* 6. Strategy */}
        <Strategy />

        {/* 7. Testimonial */}
        <Testimonial />

        {/* 8. ResultMax */}
        <ResultMax />

        {/* 9. Analysis */}
        <Analysis />

        {/* 10. WhatRecieve */}
        <WhatRecieve />

        {/* 11. ImageAdvantage */}
        <ImageAdvantage />

        {/* 12. InviteCustomer */}
        <InviteCustomer />

        {/* 13. QuoteOne */}
        <QuoteOne />

        {/* 14. Branding */}
        <Branding />

        {/* 15. QuoteTwo */}
        <QuoteTwo />

        {/* 16. OurClients */}
        <OurClients />

        {/* 17. Price */}
        <Price />

        {/* 18. StrategyAction */}
        <StrategyAction />

        {/* 19. AnswerAll */}
        <AnswerAll />

        {/* 20. Accordion */}
        <YesAccordion items={items} />
      </div>
    </>
  );
};

export default StrategiaMarketingowa;
