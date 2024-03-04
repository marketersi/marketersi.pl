"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardOne from "@/components/organisms/cennik/menu-one/CardOne";
import CardTwo from "@/components/organisms/cennik/menu-two/CardTwo";
import CardThree from "@/components/organisms/cennik/menu-three/CardThree";
import CardFour from "@/components/organisms/cennik/menu-four/CardFour";
import "./cennik.css";
import { FETCH_PRICELIST_SCREEN_DATA } from "@/redux/cennik/pricelistAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/organisms/animation/Loader";
import { useSearchParams } from "next/navigation";

const PriceListScreen = () => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { title, sub_title, card_title, card_subtitle, cardMenu } = screenData;
  const { Form } = screenData?.cardMenu?.MenuTwo || {};

  // const { screenData: consultingScreenData } = useSelector(
  //   (state) => state.consulting
  // );
  // const { Form } = consultingScreenData?.PricingOption || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_PRICELIST_SCREEN_DATA });
    // dispatch({ type: FETCH_CONSULTING_SCREEN_DATA });
  }, [dispatch]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleBtnClick = (value) => {
    setSelectedOption(value);
  };

  const cardStyle = {
    boxShadow:
      "4px 4px 15px rgba(0, 0, 0, 0.15), 0 0 0 #ffffff, 2px 2px 2px #ffffff inset, -2px -2px 2px #c7c7c7 inset",
    borderRadius: "30px",
    padding: "36px 0",
    backgroundColor: "rgba(247, 247, 247, 1)",
    width: "85%",
    margin: "24px auto",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 25px 10px 25px",
    borderRadius: "100px",
    backgroundColor: "rgb(255, 255, 255)",
    border: "1px solid rgb(201, 201, 201)",
    fontSize: "18px",
  };

  // check to query string and for type
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (type) {
      switch (type) {
        case "strony":
          handleBtnClick(1);
          break;
        default:
          break;
      }
    }
  }, [type]);

  return (
    <section className="container pb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mt-5 heading-style">{title}</h2>
          <div className="mt-3">
            <p className="subheading">
              <span>{sub_title}</span>
            </p>
          </div>

          <div className="card mt-4" style={cardStyle}>
            <div className="card-body">
              {selectedOption == null && (
                <div>
                  <div>
                    <h2 className="card-heading">{card_title}</h2>
                    <p className="card-subheading">{card_subtitle}</p>
                  </div>
                  <div className="btns_container mb-5">
                    <div className="row">
                      <div
                        className="col"
                        style={{ textAlign: "right" }}
                        onClick={() => handleBtnClick(1)}
                      >
                        <button style={buttonStyle}>
                          {" "}
                          {cardMenu?.menuOne?.menu_title}
                        </button>
                      </div>
                      <div
                        className="col"
                        style={{ textAlign: "left" }}
                        onClick={() => handleBtnClick(2)}
                      >
                        <button style={buttonStyle}>
                          {cardMenu?.MenuTwo?.Form?.menu_title}
                        </button>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div
                        className="col"
                        style={{ textAlign: "right" }}
                        onClick={() => handleBtnClick(3)}
                      >
                        <button style={buttonStyle}>
                          {cardMenu?.menuThree?.menuText}
                        </button>
                      </div>
                      <div
                        className="col"
                        style={{ textAlign: "left" }}
                        onClick={() => handleBtnClick(4)}
                      >
                        <button style={buttonStyle}>
                          {cardMenu?.menuFour?.menu_title}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedOption == 1 && (
                <>
                  <CardOne />
                </>
              )}

              {selectedOption == 2 && (
                <>
                  <CardTwo form={Form} />
                </>
              )}

              {selectedOption == 3 && (
                <>
                  <CardThree />
                </>
              )}

              {selectedOption == 4 && (
                <>
                  <CardFour />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceListScreen;
