import React, { useState } from "react";
import Image from "next/image";
import Select, { components } from "react-select";
import { motion } from "framer-motion";
import FormOne from "./nested-forms/FormOne";
import FormTwo from "./nested-forms/FormTwo";
import FormThree from "./nested-forms/FormThree";
import "../cennikCards.css";

const CardTwo = ({ form }) => {
  console.log("forms", form);
  const { Section1, Section2, Section3, Section4 } = form || {};


  const [currentComponent, setCurrentComponent] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const optionsOne = Section1?.Dropdown1.map((option) => ({
    value: option.value,
    label: option.value,
  }));
  const optionsTwo = Section1?.Dropdown2.map((option) => ({
    value: option.value,
    label: option.value,
  }));

  const DropdownIndicator = (props) => {
    const { selectProps } = props;
    const { value } = selectProps;

    return (
      <components.DropdownIndicator {...props}>
        {value ? (
          <Image
            src={"/assets/images/strategiamarketingowa/dropdownok.png"}
            alt="arrow"
            width={30}
            height={30}
          />
        ) : (
          <Image
            src={"/assets/images/strategiamarketingowa/dropdownarrow.png"}
            alt="arrow"
            width={30}
            height={30}
          />
        )}
      </components.DropdownIndicator>
    );
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleSelectChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  return (
    <>
      {currentComponent === 0 && (
        <div className="formTwo">
          <h2 className="card-heading mb-3">{Section1?.section_1_title_1}</h2>
          <div style={{ textAlign: "left" }} className="select-input">
            <Select
              options={optionsOne}
              placeholder="Wybierz"
              isSearchable={false}
              components={{ DropdownIndicator }}
              onChange={handleSelectChange}
              styles={{
                clearIndicator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: "none",
                }),
                indicatorSeparator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: "none",
                }),
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  paddingLeft: "10px",
                  borderRadius: "20px",
                  paddingBlock: "3px",
                  backgroundColor: selectedOption
                    ? "#effeeb"
                    : baseStyles.backgroundColor,
                  outline: selectedOption ? "2px solid #effeeb" : "none",
                }),
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  padding: "0",
                  paddingLeft: "3px",
                  paddingRight: "3px",
                }),
              }}
            />
          </div>
          <h2 className="card-heading mt-5">{Section1?.section_1_title_2}</h2>
          <div style={{ textAlign: "left" }} className="select-input">
            <Select
              options={optionsTwo}
              placeholder="Wybierz"
              isSearchable={false}
              components={{ DropdownIndicator }}
              onChange={handleSelectChange2}
              styles={{
                clearIndicator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: "none",
                }),
                indicatorSeparator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: "none",
                }),
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  paddingLeft: "10px",
                  borderRadius: "20px",
                  paddingBlock: "3px",
                  backgroundColor: selectedOption2
                    ? "#effeeb"
                    : baseStyles.backgroundColor,
                  outline: selectedOption2 ? "2px solid #effeeb" : "none",
                }),
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  padding: "0",
                  paddingLeft: "3px",
                  paddingRight: "3px",
                }),
              }}
            />
          </div>
          <motion.button
            className="cennikBtn mt-5"
            whileHover={{ translateY: 5 }}
            onClick={() => setCurrentComponent(1)}
          >
            Rozpocznij kalkulację
          </motion.button>
        </div>
      )}

      {currentComponent === 1 && (
        <FormOne setCurrentComponent={setCurrentComponent} form={Section2} />
      )}
      {currentComponent === 2 && (
        <FormTwo setCurrentComponent={setCurrentComponent} form={Section3} />
      )}
      {currentComponent === 3 && <FormThree form={Section4} />}
    </>
  );
};

export default CardTwo;
