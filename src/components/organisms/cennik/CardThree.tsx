import React from "react";
import { motion } from "framer-motion";
import Select, { components } from "react-select";
import Image from "next/image";

const CardThree = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image
          src={"/assets/images/strategiamarketingowa/dropdownarrow.png"}
          alt="arrow"
          width={20}
          height={20}
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <div>
      <h2 className="card-heading">Dla jakiej firmy jest ta strona?</h2>
      <p className="card-subheading">Wybierz jedną z opcji.</p>
      <div style={{ textAlign: "left" }}>
        <Select
          options={options}
          placeholder="Wybierz"
          isSearchable={false}
          components={{ DropdownIndicator }}
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
            }),
          }}
        />
      </div>
      <motion.button className="cennikBtn mt-5" whileHover={{ translateY: 5 }}>
        Rozpocznij kalkulację
      </motion.button>
    </div>
  );
};

export default CardThree;
