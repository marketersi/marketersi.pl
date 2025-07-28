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

  const MODAL_HASH = "#surveyModal"; // Define it here for consistency

  // Initialize currentComponent based on URL hash or default to 0
  const [currentComponent, setCurrentComponent] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith(MODAL_HASH)) {
        if (hash.includes("&step1")) return 1;
        if (hash.includes("&step2")) return 2;
        if (hash.includes("&step3")) return 3;
        return 0; // If #surveyModal is present but no specific step, it's FormZero
      }
    }
    return 0; // Default if no modal hash or not in browser environment
  });

  // Function to determine the hash for a given component index
  const getHashForComponent = (componentIndex) => {
    // When inside the modal, we append step hashes to the modal's hash
    switch (componentIndex) {
      case 0:
        return MODAL_HASH; // FormZero is the "initial" state of the modal, so just the modal hash
      case 1:
        return `${MODAL_HASH}&step1`; // Use query params style for sub-hashes
      case 2:
        return `${MODAL_HASH}&step2`;
      case 3:
        return `${MODAL_HASH}&step3`;
      default:
        return MODAL_HASH; // Default fallback
    }
  };

  const navigateToComponent = (componentIndex) => {
    const targetHash = getHashForComponent(componentIndex);
    const currentHash = window.location.hash;

    // Only update history if the target hash is different from the current hash
    // This prevents adding duplicate entries when navigating to the same step
    if (currentHash !== targetHash) {
      setCurrentComponent(componentIndex); // Update the state
      window.history.pushState({ component: componentIndex }, '', window.location.pathname + targetHash);
    } else {
      // If navigating to the same component, still set state and replace history
      // This is crucial if for some reason the state and hash are out of sync,
      // and it prevents adding an extra entry when the user re-clicks the current step.
      setCurrentComponent(componentIndex);
      window.history.replaceState({ component: componentIndex }, '', window.location.pathname + targetHash);
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      const currentHash = window.location.hash;
      let newComponent = 0; // Default to FormZero

      if (currentHash.startsWith(MODAL_HASH)) {
        if (currentHash.includes("&step1")) {
          newComponent = 1;
        } else if (currentHash.includes("&step2")) {
          newComponent = 2;
        } else if (currentHash.includes("&step3")) {
          newComponent = 3;
        } else {
          newComponent = 0; // Back to initial modal state (FormZero)
        }
      } else {
        // If #surveyModal is no longer in the hash, this instance of CardTwo
        // should ideally not be visible or handle its state appropriately.
        // If it remains mounted, we default to 0.
        newComponent = 0; // If the modal is closing, revert to step 0
      }
      setCurrentComponent(newComponent);
    };

    window.addEventListener('popstate', handlePopState);

    // Initial URL hash synchronization on mount for CardTwo's internal steps
    // This ensures that when the component first loads, the URL hash correctly reflects
    // the initial component determined by the `useState` initializer.
    if (typeof window !== 'undefined') {
      const initialHash = window.location.hash;
      const expectedHash = getHashForComponent(currentComponent);

      // Only adjust hash if the modal hash is present or if we are setting the initial modal hash (step 0)
      if (initialHash.startsWith(MODAL_HASH) || (currentComponent === 0 && initialHash === '')) {
         if (initialHash !== expectedHash) {
            window.history.replaceState({ component: currentComponent }, '', window.location.pathname + expectedHash);
         }
      }
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

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