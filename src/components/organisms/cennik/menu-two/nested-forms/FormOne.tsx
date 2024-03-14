import React, { useState } from "react";
import Select, { components } from "react-select";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";

const FormOne = ({ setCurrentComponent, form }) => {
  console.log("form two", form);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const optionsOne = form?.Dropdown1.map((option) => ({
    value: option.value,
    label: option.value,
  }));
  const optionsTwo = form?.Dropdown2.map((option) => ({
    value: option.value,
    label: option.value,
  }));

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleSelectChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

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

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    let payload = {
      formOneDropdownValueOne: selectedOption?.value,
      formOneDropdownValueTwo: selectedOption2?.value,
    };
    dispatch(savePriceListFormData(payload));
    setCurrentComponent(2);
  };

  return (
    <>
      <div>
        <h2 className="card-heading">{form?.section_2_title_1}</h2>
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
        <h2 className="card-heading mt-5 mb-2">{form?.section_2_title_2}</h2>
        <p>{form?.section_2_subtitle}</p>
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
          onClick={handleButtonClick}
        >
          Dalej (Prawie koniec)
        </motion.button>
      </div>
    </>
  );
};

export default FormOne;
