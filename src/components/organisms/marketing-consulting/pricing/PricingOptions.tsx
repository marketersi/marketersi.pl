"use client";
import React from "react";
import "./pricing-option.css";
import { Container } from "react-bootstrap";
import CardTwo from "../../cennik/menu-two/CardTwo";

const PricingOption = () => {
  return (
    <section>
      <div className="container po_pricing_sec">
        <div className="row justify-content-center">
          <div>
            <h2 className="po_title">
              Zdobądź 3 różne opcje cenowe <br /> na marketing swojej firmy.
            </h2>
            <div className="mt-3">
              <p className="po_subtitle">
                Przejdź krótki formularz. Zobacz co dla Ciebie zrobimy, <br />{" "}
                ile za to policzymy i jak szybko Ci się to zwróci.
              </p>
            </div>

            <div className="po_card_custom">
              {/* <div>
                <h2>Jaki cel stawiasz przed swoją firmą?</h2>
                <select className="po_input">
                  <option value="option1">Opcja 1</option>
                  <option value="option2">Opcja 2</option>
                  <option value="option3">Opcja 3</option>
                </select>

                <h2>Jak się reklamujesz?</h2>
                <select className="po_input">
                  <option value="option1">Opcja 1</option>
                  <option value="option2">Opcja 2</option>
                  <option value="option3">Opcja 3</option>
                </select>

                <div className="po_btn_container">
                  <button>Rozpocznij kalkulację</button>
                </div>
              
              </div> */}
              <CardTwo />
            </div>
          </div>
        </div>
      </div>

      <div className="po_brands">
        <p>
          Nasi eksperci cytowani <br />
          są przez największe <br /> media w branży
        </p>
        <img
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogotypy.eed9b686.png&w=1080&q=75"
          alt="experts"
        />
      </div>
    </section>
  );
};

export default PricingOption;
