"use client";

import React from "react";
import "./sales.css";
// import { Form } from "react-bootstrap";
import Image from "next/image";
// import Faq from "@/components/organisms/tresci-sprzedazowe/faq/Faq";
import Form from "@/components/organisms/tresci-sprzedazowe/form/Form";
import OptionBox2 from "@/components/organisms/tresci-sprzedazowe/options-box2/OptionBox2";
import Concept366 from "@/components/organisms/tresci-sprzedazowe/366-concept/Concept366";
import Robo from "@/components/organisms/tresci-sprzedazowe/robo/Robo";
import Mako from "@/components/organisms/tresci-sprzedazowe/mako/Mako";
import InkBook from "@/components/organisms/tresci-sprzedazowe/ink-book/InkBook";
import Profit from "@/components/organisms/tresci-sprzedazowe/profit-slider/Profit";
import Motus from "@/components/organisms/tresci-sprzedazowe/motus/Motus";
import Orange from "@/components/organisms/tresci-sprzedazowe/orange/Orange";
import Section5 from "@/components/organisms/tresci-sprzedazowe/section5/Section5";
import BusinessTools from "@/components/organisms/tresci-sprzedazowe/business_tools/BusinessTools";
import SalesBanner from "@/components/organisms/tresci-sprzedazowe/sales_banner/SalesBanner";

const page = () => {
  return (
    <>

     <SalesBanner />
      {/* ==============================sales banner-bottom-text==========================  */}
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
      <Section5 />
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
    </>
  );
};

export default page;
