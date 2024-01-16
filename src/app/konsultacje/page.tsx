import React from "react";
import "./consulting.css";
import PricingOption from "@/components/organisms/marketing-consulting/pricing/PricingOptions";
import StandOut from "@/components/organisms/marketing-consulting/stand-out/StandOut";
import SelectedProjects from "@/components/organisms/marketing-consulting/selected-projects/SelectedProjects";
import CustomersReview from "@/components/organisms/marketing-consulting/customers-review/CustomersReview";
import WhatToExpect from "@/components/organisms/marketing-consulting/expectation/WhatToExpect";

const MarketingConsulting = () => {
  return (
    <div>
      <PricingOption />
      <StandOut />
      <SelectedProjects />
      <CustomersReview />
      <WhatToExpect />
    </div>
  );
};

export default MarketingConsulting;
