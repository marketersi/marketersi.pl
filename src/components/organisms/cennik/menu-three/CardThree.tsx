import React, { useState } from "react";
import { motion } from "framer-motion";
import Select, { components } from "react-select";
import Image from "next/image";
import Link from "next/link";
import FeedbackSection from "./nested-forms/FormTwo";
import SliderSection from "./nested-forms/FormOne";
import UserDetailsSection from "./nested-forms/FormThree";

const CardThree = () => {
  const [currentComponent, setCurrentComponent] = useState(0);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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

// Nested components for card one
// const SliderSection = ({ setCurrentComponent }) => {
//   return (
//     <div className="slider_section">
//       <div>
//         <h2>Jakiej propozycji oczekujesz?</h2>
//         <p>Przesuń suwak blisko potrzeb</p>
//       </div>

//       <div className="space-between"></div>
//       <div>
//         <div className="ss_input-container">
//           <img
//             src="https://www.owocni.pl/_next/static/media/persons.6bff2827.png"
//             alt=""
//           />
//           <input type="range" />
//           <img
//             src="https://www.owocni.pl/_next/static/media/person.a15d0f85.png"
//             alt=""
//           />
//         </div>
//         <div className="ss_btn-container">
//           <button onClick={() => setCurrentComponent(2)} className="cennikBtn">
//             Dalej (Prawie koniec)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeedbackSection = ({ setCurrentComponent }) => {
//   return (
//     <div className="feedback_section">
//       <h2>Na koniec, napisz coś o tym biznesie.</h2>
//       <p>Jaki masz na to pomysł? Co chcesz umieścić na stronie?</p>
//       <textarea rows="5" cols="50" className="fs_textarea"></textarea>
//       <p className="mt-2">
//         Ważne: Wymień produkty/usługi w ofercie. Od najważniejszej.
//       </p>
//       <input type="text" className="fs_input" />
//       <button onClick={() => setCurrentComponent(3)} className="cennikBtn">
//         Ostatnie pytanie
//       </button>
//     </div>
//   );
// };

// const UserDetailsSection = () => {
//   return (
//     <div className="user-details_section">
//       <h2>Zaczynamy składać opcje cenowe.</h2>
//       <p>Komu mamy je wysłać?</p>
//       <div className="uds_input-container">
//         <input type="text" placeholder="Imię" />
//         <input type="text" placeholder="Email" />
//         <input type="text" placeholder="Tel: (Opcjonalnie)" />
//       </div>
//       <div>
//         <button
//           onClick={() => console.log("cennik form submitted")}
//           className="cennikBtn"
//         >
//           <span>
//             Wyślijcie mi <br /> 3 propozycje cenowe
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };
