import React, { useState } from "react";
import { motion } from "framer-motion";
import Select, { components } from "react-select";
import Image from "next/image";
import Link from "next/link";
import FeedbackSection from "./nested-forms/FormTwo";
import SliderSection from "./nested-forms/FormOne";
import UserDetailsSection from "./nested-forms/FormThree";
import { useSelector } from "react-redux";
import FormZero from "./nested-forms/FormZero";

const CardThree = () => {
  const [currentComponent, setCurrentComponent] = useState(0);

  // const { isLoading, screenData } = useSelector((state) => state.priceList);
  // const { formOne } = screenData?.cardMenu?.menuThree || "";
  // const { dropdown } = screenData?.cardMenu?.menuThree?.formOne || {};

  // const DropdownIndicator = (props) => {
  //   const { selectProps } = props;
  //   const { value } = selectProps;

  //   return (
  //     <components.DropdownIndicator {...props}>
  //       {value ? (
  //         <Image
  //           src={"/assets/images/strategiamarketingowa/dropdownok.png"}
  //           alt="arrow"
  //           width={30}
  //           height={30}
  //         />
  //       ) : (
  //         <Image
  //           src={"/assets/images/strategiamarketingowa/dropdownarrow.png"}
  //           alt="arrow"
  //           width={30}
  //           height={30}
  //         />
  //       )}
  //     </components.DropdownIndicator>
  //   );
  // };

  return (
    <>
      {currentComponent === 0 && (
        // <div>
        //   <h2 className="card-heading">{formOne?.form1_title}</h2>
        //   <p className="card-subheading">{formOne?.form1_subtitle}</p>
        //   <div style={{ textAlign: "left" }} className="select-input">
        //     <Select
        //       options={dropdown}
        //       placeholder="Wybierz"
        //       isSearchable={false}
        //       components={{ DropdownIndicator }}
        //       styles={{
        //         clearIndicator: (baseStyles, state) => ({
        //           ...baseStyles,
        //           display: "none",
        //         }),
        //         indicatorSeparator: (baseStyles, state) => ({
        //           ...baseStyles,
        //           display: "none",
        //         }),
        //         control: (baseStyles, state) => ({
        //           ...baseStyles,
        //           paddingLeft: "10px",
        //           borderRadius: "20px",
        //           paddingBlock: "3px",
        //         }),
        //         dropdownIndicator: (provided, state) => ({
        //           ...provided,
        //           padding: "0",
        //           paddingLeft: "3px",
        //           paddingRight: "3px",
        //         }),
        //       }}
        //     />
        //   </div>
        //   <motion.button
        //     className="cennikBtn mt-5"
        //     whileHover={{ translateY: 5 }}
        //     onClick={() => setCurrentComponent(1)}
        //   >
        //     {formOne?.form1_buttonText}
        //   </motion.button>
        // </div>
        <FormZero setCurrentComponent={setCurrentComponent} />
      )}

      {currentComponent === 1 && (
        <SliderSection setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 2 && (
        <FeedbackSection setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 3 && <UserDetailsSection />}
    </>
  );
};

export default CardThree;
