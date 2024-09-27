import React, { useState } from "react";
import Select, { components } from "react-select";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import CennikModal from "@/components/organisms/modals/CennikModal";
import CustomModal from "@/components/organisms/modals/CustomModal";

const FormOne = ({ setCurrentComponent, form }) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (
      selectedOption &&
      selectedOption.value === optionsTwo[0].value
    ) {
      setIsModalOpen(true);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const DropdownIndicator = (props) => {
    const { selectProps } = props;
    const { value } = selectProps;

    return (
      <components.DropdownIndicator {...props}>
        {value ? (
          <Image
            src={"https://images.prismic.io/marketersi/ZufV4LVsGrYSvYfY_dropdownok.png?auto=format,compress"}
            alt="arrow"
            width={30}
            height={30}
          />
        ) : (
          <Image
            src={"https://images.prismic.io/marketersi/ZufUa7VsGrYSvYfJ_dropdownarrow.png?auto=format,compress"}
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
    // let payload = {
    //   formOneDropdownValueOne: selectedOption?.value,
    //   formOneDropdownValueTwo: selectedOption2?.value,
    // };
    // dispatch(savePriceListFormData(payload));
    // setCurrentComponent(2);

    let payload;
    setIsButtonClicked(true);
    if (!selectedOption || !selectedOption2) {
      setTimeout(() => {
        setIsButtonClicked(false);
      }, 500);
    } else {
      payload = {
        formOneDropdownValueOne: selectedOption?.value,
        formOneDropdownValueTwo: selectedOption2?.value,
      };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(2);
    }
  };

  return (
    <>
      <div>
        <h2
          className={`card-heading ${
            isButtonClicked && !selectedOption ? "red-title" : ""
          }`}
        >
          {form?.section_2_title_1}
        </h2>
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
              menu: (provided, state) => ({
                ...provided,
                backgroundColor: selectedOption ? "#effeeb" : "#fff",
              }),
            }}
          />
        </div>
        <h2
          className={`card-heading mt-4 mb-2 ${
            isButtonClicked && !selectedOption2 ? "red-title" : ""
          }`}
        >
          {form?.section_2_title_2}
        </h2>
        {/* <p className={isButtonClicked && !selectedOption2 ? "red-title" : ""}>
          {form?.section_2_subtitle}
        </p> */}
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
              menu: (provided, state) => ({
                ...provided,
                backgroundColor: selectedOption2 ? "#effeeb" : "#fff",
              }),
            }}
          />
          <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
        <motion.button
          className="cennikBtn"
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
