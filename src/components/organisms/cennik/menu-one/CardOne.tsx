import React, { useState } from "react";
import { motion } from "framer-motion";
import Select, { components } from "react-select";
import Image from "next/image";
import CennikModal from "../../modals/CennikModal";
import UserInfoForm from "./nested-forms/UserInfoForm";
import SliderForm from "./nested-forms/SliderForm";
import FeedbackForm from "./nested-forms/FeedbackForm";
import "../cennikCards.css";

const CardOne = () => {
  const [currentComponent, setCurrentComponent] = useState(0);

  const options = [
    {
      value: "Rozwijamy biznes i zmieniamy stronę.",
      label: "Rozwijamy biznes i zmieniamy stronę.",
    },
    {
      value: "To nowa strona, ale firma jest dojrzała.",
      label: "To nowa strona, ale firma jest dojrzała.",
    },
    {
      value: "To nowa strona i mój pierwszy biznes.",
      label: "To nowa strona i mój pierwszy biznes.",
    },
    {
      value: "Bez planu. Pytam z ciekawości.",
      label: "Bez planu. Pytam z ciekawości.",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (
      selectedOption &&
      selectedOption.value === options[options.length - 1].value
    ) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {currentComponent === 0 && (
        <div>
          <h2 className="card-heading">Dla jakiej firmy jest ta strona?</h2>
          <p className="card-subheading">Wybierz jedną z opcji.</p>
          <div style={{ textAlign: "left" }} className="select-input">
            <Select
              options={options}
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

          {selectedOption && selectedOption.value === options[0].value && (
            <div className="additional-input-container">
              <h2>Podaj adres strony:</h2>
              <input type="text" />
            </div>
          )}

          <motion.button
            className="cennikBtn mt-5"
            whileHover={{ translateY: 5 }}
            onClick={() => setCurrentComponent(1)}
          >
            Rozpocznij kalkulację
          </motion.button>

          {/* Modal */}
          <CennikModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      )}
      {currentComponent === 1 && (
        <SliderForm setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 2 && (
        <FeedbackForm setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 3 && <UserInfoForm />}
    </>
  );
};

export default CardOne;
