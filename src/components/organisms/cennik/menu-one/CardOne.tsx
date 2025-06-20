// import React, { useState } from "react";
// import UserInfoForm from "./nested-forms/UserInfoForm";
// import SliderForm from "./nested-forms/SliderForm";
// import FeedbackForm from "./nested-forms/FeedbackForm";
// import "../cennikCards.css";
// import { useSelector } from "react-redux";
// import FormZero from "./nested-forms/FormZero";

// const CardOne = () => {
//   const [currentComponent, setCurrentComponent] = useState(0);
//   const { screenData } = useSelector((state) => state.priceList);
//   const { formOne, formTwo, formThree, formFour } =
//     screenData?.cardMenu?.menuOne || "";
//   console.log(screenData, "Data received by CardOne");

//   return (
//     <>
//       {currentComponent === 0 && (
//         <FormZero setCurrentComponent={setCurrentComponent} form={formOne} />
//       )}
//       {currentComponent === 1 && (
//         <SliderForm
//           setCurrentComponent={setCurrentComponent}
//           formTwo={formTwo}
//         />
//       )}
//       {currentComponent === 2 && (
//         <FeedbackForm
//           setCurrentComponent={setCurrentComponent}
//           formThree={formThree}
//         />
//       )}
//       {currentComponent === 3 && <UserInfoForm formFour={formFour} />}
//     </>
//   );
// };

// export default CardOne;
"use client"; // Important for client-side hooks

import React, { useEffect } from "react";
import UserInfoForm from "./nested-forms/UserInfoForm";
import SliderForm from "./nested-forms/SliderForm";
import FeedbackForm from "./nested-forms/FeedbackForm";
import "../cennikCards.css";
import { useSelector } from "react-redux";
import FormZero from "./nested-forms/FormZero";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter and useSearchParams

const CardOne = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current step from the URL query parameter, default to 0
  const currentStep = searchParams.get("step") ? parseInt(searchParams.get("step"), 10) : 0;

  const { screenData } = useSelector((state) => state.priceList);
  const { formOne, formTwo, formThree, formFour } =
    screenData?.cardMenu?.menuOne || "";
  console.log(screenData, "Data received by CardOne");

  // Function to navigate to a specific step by updating the URL
  const navigateToStep = (step) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("step", step.toString());
    router.push(`?${newSearchParams.toString()}`, undefined, { shallow: true }); // Use shallow: true for client-side routing
  };

  return (
    <>
      {currentStep === 0 && (
        <FormZero setCurrentComponent={navigateToStep} form={formOne} />
      )}
      {currentStep === 1 && (
        <SliderForm
          setCurrentComponent={navigateToStep}
          formTwo={formTwo}
        />
      )}
      {currentStep === 2 && (
        <FeedbackForm
          setCurrentComponent={navigateToStep}
          formThree={formThree}
        />
      )}
      {currentStep === 3 && <UserInfoForm formFour={formFour} />}
    </>
  );
};

export default CardOne;