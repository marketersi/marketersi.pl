import React from "react";
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

const CustomersOpinion = () => {
  return (
    <>
    <Banner />
    <BrilliantJob />
    <Review />
    <Teams />
    <Brands />
    <Rating />
    <Accordion />
    <GoogleReview />
    <Accordion />
    <References />
    <Personally />
    <Experts />
    {/* TO ADD: Review section (already created) */}
    </>
  );
};

export default CustomersOpinion;
