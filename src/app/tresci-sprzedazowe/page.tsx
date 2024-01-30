"use client";
import Concept366 from "@/components/organisms/tresci-sprzedazowe/366-concept/Concept366";
import BusinessTools from "@/components/organisms/tresci-sprzedazowe/business_tools/BusinessTools";
import items from "@/components/organisms/tresci-sprzedazowe/faq/Data";
import FAQ from "@/components/organisms/tresci-sprzedazowe/faq/Faq";
import Form from "@/components/organisms/tresci-sprzedazowe/form/Form";
import Guarantee from "@/components/organisms/tresci-sprzedazowe/guarantee/Guarantee";
import InkBook from "@/components/organisms/tresci-sprzedazowe/ink-book/InkBook";
import Mako from "@/components/organisms/tresci-sprzedazowe/mako/Mako";
import Motus from "@/components/organisms/tresci-sprzedazowe/motus/Motus";
import OptionBox2 from "@/components/organisms/tresci-sprzedazowe/options-box2/OptionBox2";
import Orange from "@/components/organisms/tresci-sprzedazowe/orange/Orange";
import PriceList from "@/components/organisms/tresci-sprzedazowe/price-list/PriceList";
import ProfitCard from "@/components/organisms/tresci-sprzedazowe/profit-card/ProfitCard";
import Profit from "@/components/organisms/tresci-sprzedazowe/profit-slider/Profit";
import Robo from "@/components/organisms/tresci-sprzedazowe/robo/Robo";
import SalesBanner from "@/components/organisms/tresci-sprzedazowe/sales_banner/SalesBanner";
import Section5 from "@/components/organisms/tresci-sprzedazowe/section5/Section5";
import "./sales.css";
import TresciFooter from "@/components/organisms/tresci-sprzedazowe/tresci-footer/TresciFooter";

const page = () => {
  return (
    <>
      <SalesBanner />
      <section className="sale_bottom_text copywriter-page">
        <div className="container copyuwriter-custom-push-1">
          <div className="row">
            <div className="col-md-12 text-center copywriter-custom-margin-1">
              <h1 className="copywriter-big-header">
                Lepszy biznes zaczyna <br />
                się od lepszych słów
              </h1>

              <span className="copywriter-big-subheader copywriter-cmargin-1">
                Nieważne czy to treści oferty czy treść strony.{" "}
                <br className="dont-delete" />
                2x skuteczniejszy tekst, to 2x większy zysk.
              </span>
            </div>
          </div>
        </div>
      </section>
      <OptionBox2 />
      <BusinessTools />
      <ProfitCard />
      <Section5 />
      <FAQ items={items} />
      <Guarantee />
      <PriceList />
      <Form />
      <div
        className="copywriter-custom-header-2 text-center copywriter-cmargin-4 menu-target"
        id="sec2"
      >
        Wybrane fragmenty <br />
        naszych realizacji
      </div>
      <div className="copywriter-custom-subheader-2 text-center">
        Oferty handlowe, strony sprzedażowe, maile. <br />
        Sprawdź, jakiej jakości możesz oczekiwać <br />
        po współpracy znami.
      </div>
      <Orange />
      <Motus />
      <OptionBox2 />
      <Concept366 />
      <OptionBox2 />
      <Robo />
      <Mako />
      <OptionBox2 />
      <InkBook />
      <Profit />
      <section className="black-sec-form">
        <div className="copywriter-ending-1 text-center">
          Zróbmy razem <br />
          coś fajnego
        </div>
        <Form />
      </section>
      <TresciFooter />
    </>
  );
};

export default page;
