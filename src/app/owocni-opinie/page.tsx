import React from "react";
import "./opinion.css";
import Banner from "@/components/organisms/opinie/banner/Banner";
import BrilliantJob from "@/components/organisms/opinie/brilliant-job/BrilliantJob";
import Review from "@/components/organisms/opinie/review/Review";
import Teams from "@/components/organisms/opinie/teams/Teams";
import Brands from "@/components/organisms/opinie/brands/Brands";
import Rating from "@/components/organisms/opinie/rating/Rating";

const CustomersOpinion = () => {
  return (
    <>
    <Banner />
    <BrilliantJob />
    <Review />
    <Teams />
    <Brands />
    <Rating />
    </>
  );
};

export default CustomersOpinion;
