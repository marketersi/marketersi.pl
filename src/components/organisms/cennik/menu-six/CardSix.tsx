// // import React, { useState } from "react";
// // import SliderSection from "./nested-forms/FormOne";
// // import FeedbackSection from "./nested-forms/FormTwo";
// // import UserDetailsSection from "./nested-forms/FormThree";
// // import FormZero from "./nested-forms/FormZero";

// // const CardSix = () => {
// //   const [currentComponent, setCurrentComponent] = useState(0);

// //   return (
// //     <>
// //       {currentComponent === 0 && (
// //         <FormZero setCurrentComponent={setCurrentComponent} />
// //       )}

// //       {currentComponent === 1 && (
// //         <SliderSection setCurrentComponent={setCurrentComponent} />
// //       )}
// //       {currentComponent === 2 && (
// //         <FeedbackSection setCurrentComponent={setCurrentComponent} />
// //       )}
// //       {currentComponent === 3 && <UserDetailsSection />}
// //     </>
// //   );
// // };

// // export default CardSix;
// // CardSix.jsx
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Import useRouter for Next.js

// import FormZero from "./nested-forms/FormZero";
// import SliderSection from "./nested-forms/FormOne"; // Renamed to SliderSection based on your code
// import FeedbackSection from "./nested-forms/FormTwo"; // Renamed to FeedbackSection
// import UserDetailsSection from "./nested-forms/FormThree"; // Renamed to UserDetailsSection

// const CardSix = () => {
//   const router = useRouter();
//   // Initialize currentComponent based on URL query parameter or default to 0
//   const [currentComponent, setCurrentComponent] = useState(() => {
//     const step = parseInt(router.query.step, 10);
//     return isNaN(step) ? 0 : step;
//   });

//   // Effect to update URL and history when currentComponent changes
//   useEffect(() => {
//     // Only push state if the component has actually changed from the URL's initial state
//     // or if the URL doesn't match the current component state.
//     const currentStepInUrl = parseInt(router.query.step, 10);
//     if (isNaN(currentStepInUrl) || currentStepInUrl !== currentComponent) {
//       router.push(
//         {
//           pathname: router.pathname,
//           query: { ...router.query, step: currentComponent },
//         },
//         undefined,
//         { shallow: true }
//       );
//     }
//   }, [currentComponent, router]);

//   // Effect to handle browser back/forward buttons
//   useEffect(() => {
//     const handlePopState = () => {
//       const step = parseInt(router.query.step, 10);
//       setCurrentComponent(isNaN(step) ? 0 : step);
//     };

//     window.addEventListener("popstate", handlePopState);

//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, [router.query.step]);

//   // Function to navigate to the next step
//   const goToNextStep = (nextStep) => {
//     setCurrentComponent(nextStep);
//   };

//   return (
//     <>
//       {currentComponent === 0 && (
//         <FormZero setCurrentComponent={goToNextStep} />
//       )}

//       {currentComponent === 1 && (
//         <SliderSection setCurrentComponent={goToNextStep} />
//       )}
//       {currentComponent === 2 && (
//         <FeedbackSection setCurrentComponent={goToNextStep} />
//       )}
//       {currentComponent === 3 && <UserDetailsSection />}
//     </>
//   );
// };

// export default CardSix;

import React, { useState, useEffect } from "react";
import SliderSection from "./nested-forms/FormOne";
import FeedbackSection from "./nested-forms/FormTwo";
import UserDetailsSection from "./nested-forms/FormThree";
import FormZero from "./nested-forms/FormZero";

const CardSix = ({ initialComponent = 0 }) => {
  const [currentComponent, setCurrentComponentInternal] = useState(initialComponent);
  useEffect(() => {
    setCurrentComponentInternal(initialComponent);
  }, [initialComponent]);
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && typeof event.state.componentIndex === 'number') {
        setCurrentComponentInternal(event.state.componentIndex);
      } else {
        setCurrentComponentInternal(0);
        if (window.location.search.includes('?form=')) {
          window.history.replaceState({ componentIndex: 0 }, '', window.location.pathname);
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [initialComponent]);
  const handleNavigation = (nextComponentIndex) => {
    setCurrentComponentInternal(nextComponentIndex);
    window.history.pushState({ componentIndex: nextComponentIndex }, '', `?form=${nextComponentIndex}`);
  };

  return (
    <>
      {/* Render the appropriate form component based on currentComponent state */}
      {currentComponent === 0 && (
        <FormZero setCurrentComponent={handleNavigation} />
      )}
      {currentComponent === 1 && (
        <SliderSection setCurrentComponent={handleNavigation} />
      )}
      {currentComponent === 2 && (
        <FeedbackSection setCurrentComponent={handleNavigation} />
      )}
      {/* UserDetailsSection is typically the last step, so it might not need setCurrentComponent */}
      {currentComponent === 3 && <UserDetailsSection />}
    </>
  );
};
export default CardSix;