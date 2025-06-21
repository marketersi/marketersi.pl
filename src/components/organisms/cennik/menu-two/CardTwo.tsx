// import React, { useState } from "react";
// import FormOne from "./nested-forms/FormOne";
// import FormTwo from "./nested-forms/FormTwo";
// import FormThree from "./nested-forms/FormThree";
// import "../cennikCards.css";
// import FormZero from "./nested-forms/FormZero";
// import { useSelector } from "react-redux";

// const CardTwo = ({ form }) => {
//   const { Section1, Section2, Section3, Section4 } = form || {};

//   const { isLoading, screenData } = useSelector((state) => state.priceList);
//   const { Form1 } = screenData?.cardMenu?.MenuTwo || {};
//   console.log(Form1 , 'Form1Form1')
//   console.log(Section2 , 'Section2Section2')

//   const [currentComponent, setCurrentComponent] = useState(0);

//   return (
//     <>
//       {currentComponent === 0 && (
//         <FormZero setCurrentComponent={setCurrentComponent} form={Section1} />
//       )}

//       {currentComponent === 1 && (
//         <FormOne setCurrentComponent={setCurrentComponent} form={Section2} />
//       )}
//       {currentComponent === 2 && (
//         <FormTwo setCurrentComponent={setCurrentComponent} form={Section3} />
//       )}
//       {currentComponent === 3 && <FormThree form={Section4} />}
//     </>
//   );
// };

// export default CardTwo;
// CardTwo.js
import React, { useState, useEffect } from "react";
import FormOne from "./nested-forms/FormOne";
import FormTwo from "./nested-forms/FormTwo";
import FormThree from "./nested-forms/FormThree";
import "../cennikCards.css";
import FormZero from "./nested-forms/FormZero";
import { useSelector } from "react-redux";

const CardTwo = ({ form }) => {
  const { Section1, Section2, Section3, Section4 } = form || {};

  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { Form1 } = screenData?.cardMenu?.MenuTwo || {};

  // Initialize currentComponent based on URL hash or default to 0
  const [currentComponent, setCurrentComponent] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      switch (hash) {
        case '#step1':
          return 1;
        case '#step2':
          return 2;
        case '#step3':
          return 3;
        default:
          return 0;
      }
    }
    return 0;
  });

  // Function to update currentComponent and browser history
  const navigateToComponent = (componentIndex) => {
    setCurrentComponent(componentIndex);
    let hash = '';
    switch (componentIndex) {
      case 0:
        hash = ''; // No hash for the first step
        break;
      case 1:
        hash = '#step1';
        break;
      case 2:
        hash = '#step2';
        break;
      case 3:
        hash = '#step3';
        break;
      default:
        hash = '';
    }
    // Update the URL without reloading the page
    window.history.pushState({ component: componentIndex }, '', window.location.pathname + hash);
  };

  useEffect(() => {
    // Listen for browser's popstate event (back/forward button)
    const handlePopState = (event) => {
      if (event.state && typeof event.state.component !== 'undefined') {
        setCurrentComponent(event.state.component);
      } else {
        // Fallback if state is not available (e.g., initial load or direct navigation)
        const hash = window.location.hash;
        switch (hash) {
          case '#step1':
            setCurrentComponent(1);
            break;
          case '#step2':
            setCurrentComponent(2);
            break;
          case '#step3':
            setCurrentComponent(3);
            break;
          default:
            setCurrentComponent(0);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial push state for the current component if not already set
    // This ensures that hitting back from another page correctly lands on the current step
    if (!window.history.state || typeof window.history.state.component === 'undefined') {
      navigateToComponent(currentComponent);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentComponent]); // Add currentComponent to dependency array

  return (
    <>
      {currentComponent === 0 && (
        <FormZero setCurrentComponent={navigateToComponent} form={Section1} />
      )}

      {currentComponent === 1 && (
        <FormOne setCurrentComponent={navigateToComponent} form={Section2} />
      )}
      {currentComponent === 2 && (
        <FormTwo setCurrentComponent={navigateToComponent} form={Section3} />
      )}
      {currentComponent === 3 && <FormThree form={Section4} />}
    </>
  );
};

export default CardTwo;