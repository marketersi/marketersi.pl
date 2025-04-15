"use client";
import React, { useEffect, useState } from "react";
import CardOne from "@/components/organisms/cennik/menu-one/CardOne";
import CardTwo from "@/components/organisms/cennik/menu-two/CardTwo";
import CardThree from "@/components/organisms/cennik/menu-three/CardThree";
import CardFour from "@/components/organisms/cennik/menu-four/CardFour";
import CardFive from "@/components/organisms/cennik/menu-five/CardFive";
import CardSix from "@/components/organisms/cennik/menu-six/CardSix";
import { FETCH_PRICELIST_SCREEN_DATA } from "@/redux/cennik/pricelistAction";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useSearchParams } from "next/navigation";
import "./cennik.css";
import { ToastContainer } from "react-toastify";
import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";
import BounceLoader from "react-spinners/BounceLoader";

const PriceListScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { title, sub_title, card_title, card_subtitle, cardMenu } = screenData;
  const { Form } = screenData?.cardMenu?.MenuTwo || {};

  const [isRed, setIsRed] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_PRICELIST_SCREEN_DATA });
    dispatch(clearPriceListFormData());
  }, [dispatch]);

  const handleBtnClick = (value) => {
    setIsRed(value);
    setTimeout(() => {
      setSelectedOption(value);
    }, 500);
  };

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (type) {
      switch (type) {
        case "Strone":
          handleBtnClick(1);
          break;
        case "Działania":
          handleBtnClick(2);
          break;
        default:
          break;
      }
    }
  }, [type]);

  const cardStyle = {
    boxShadow:
      "4px 4px 15px rgba(0, 0, 0, 0.15), 0 0 0 #ffffff, 2px 2px 2px #ffffff inset, -2px -2px 2px #c7c7c7 inset",
    borderRadius: "30px",
    padding: "25px 0 15px",
    backgroundColor: "rgba(247, 247, 247, 1)",
    width: "85%",
    margin: "24px auto",
  };

  const buttonStyle = {
    padding: "10px 25px 10px 25px",
    borderRadius: "100px",
    backgroundColor: "rgb(255, 255, 255)",
    border: "1px solid rgb(201, 201, 201)",
    fontSize: "18px",
    
    color: "black",
    width:"100%",
    transiction: "all 0.3s"
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <BounceLoader color="#00bfff" size={50} />
        </div>
      ) : (
        <section className="democontainer pb-3 text-center">
              <h2 className="mt-5 heading-style">{title}</h2>
              <div className="mt-3">
                <p className="subheading">
                  {sub_title
                    ? sub_title.split("/").map((part, index) => (
                        <span className="cennik_description" key={index}>
                          {part.trim()}
                        </span>
                      ))
                    : null}
                </p>
              </div>

              <div className="card cennikFormCard mt-4 0" style={cardStyle}>
                <div className="card-body">
             
                 
               <CardSix />
                  
                  
                </div>
              </div>
          <ToastContainer />
        </section>
      )}
    </>
  );
};

export default PriceListScreen;
