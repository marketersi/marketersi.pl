import React, { useState } from "react";
import Image from "next/image";
import Select, { components } from "react-select";
import { motion } from "framer-motion";
import FormOne from "./nested-forms/FormOne";
import FormTwo from "./nested-forms/FormTwo";
import FormThree from "./nested-forms/FormThree";
import "../cennikCards.css";

const CardTwo = () => {
  const [currentComponent, setCurrentComponent] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options1 = [
    { value: "Chcę podnieść ceny", label: "Chcę podnieść ceny" },
    { value: "Zdobyć więcej klientów", label: "Zdobyć więcej klientów" },
    {
      value: "Obniżyć koszty pozyskania klienta",
      label: "Obniżyć koszty pozyskania klienta",
    },
    {
      value: "Zwiększyć ilość rozmów handlowych",
      label: "Zwiększyć ilość rozmów handlowych",
    },
  ];
  const options2 = [
    { value: "Międzynarodowo", label: "Międzynarodowo" },
    { value: "Na terenie kraju", label: "Na terenie kraju" },
    { value: "Lokalnie", label: "Lokalnie" },
    {
      value: "Inaczej",
      label: "Inaczej",
    },
  ];

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
        <div>
          <h2 className="card-heading mb-3">
            Jaki cel stawiasz przed swoją firmą?
          </h2>
          <div style={{ textAlign: "left" }} className="select-input">
            <Select
              options={options1}
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
          <h2 className="card-heading mt-5">Jak się reklamujesz?</h2>
          <div style={{ textAlign: "left" }} className="select-input">
            <Select
              options={options2}
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
        <FormOne setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 2 && (
        <FormTwo setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 3 && <FormThree />}
    </>
  );
};

export default CardTwo;
