"use client";
import React, { useEffect } from "react";
import "./opinion.css";
import Banner from "@/components/organisms/opinie/banner/Banner";
import BrilliantJob from "@/components/organisms/opinie/brilliant-job/BrilliantJob";
import Review from "@/components/organisms/opinie/review/Review";
import Teams from "@/components/organisms/opinie/teams/Teams";
import Brands from "@/components/organisms/opinie/brands/Brands";
import Rating from "@/components/organisms/opinie/rating/Rating";
import Accordion from "@/components/organisms/opinie/accordion/Accordion";
import GoogleReview from "@/components/organisms/opinie/google-review/GoogleReview";
import References from "@/components/organisms/opinie/references/References";
import Personally from "@/components/organisms/opinie/personally/Personally";
import Experts from "@/components/organisms/opinie/expert/Experts";
import OurClients from "@/components/organisms/strategia-marketingowa/OurClients";
import "./opinion.css";
import Order from "@/components/organisms/main/order/Order";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_OPINION_SCREEN_DATA } from "@/redux/opinie/opinionAction";

const CustomersOpinion = () => {
  const { screenData } = useSelector((state) => state.opinion);
  console.log("optinie screen data from ui", screenData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_OPINION_SCREEN_DATA });
  }, [dispatch]);

  return (
    <>
      <Banner />
      <OurClients />
      <BrilliantJob />
      <div className="review">
        <Review />
      </div>
      <Teams />
      <Brands />
      <Rating />
      <Accordion />
      <GoogleReview />
      <Accordion />
      <References />
      <Personally />
      <Experts />
      <Order />
    </>
  );
};

export default CustomersOpinion;
