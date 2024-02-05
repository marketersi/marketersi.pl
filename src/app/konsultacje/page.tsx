"use client";
import React, { useEffect } from "react";
import "./consulting.css";
import PricingOption from "@/components/organisms/marketing-consulting/pricing/PricingOptions";
import StandOut from "@/components/organisms/marketing-consulting/stand-out/StandOut";
import SelectedProjects from "@/components/organisms/marketing-consulting/selected-projects/SelectedProjects";
import CustomersReview from "@/components/organisms/marketing-consulting/customers-review/CustomersReview";
import WhatToExpect from "@/components/organisms/marketing-consulting/expectation/WhatToExpect";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_CONSULTING_SCREEN_DATA } from "@/redux/konsultacje/consultingAction";
import Loader from "@/components/organisms/animation/Loader";

const MarketingConsulting = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);

  if (screenData) {
    console.log("consulting screen data from UI => ", screenData);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_CONSULTING_SCREEN_DATA });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <PricingOption />
          <StandOut />
          <SelectedProjects />
          <CustomersReview />
          <WhatToExpect />
        </div>
      )}
    </>
  );
};

export default MarketingConsulting;
