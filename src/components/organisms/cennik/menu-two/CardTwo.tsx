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

// nested components/cards
// const ComponentOne = ({ setCurrentComponent }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [selectedOption2, setSelectedOption2] = useState(null);

//   const options1 = [
//     { value: "Chcę podnieść ceny", label: "Chcę podnieść ceny" },
//     { value: "Zdobyć więcej klientów", label: "Zdobyć więcej klientów" },
//     {
//       value: "Obniżyć koszty pozyskania klienta",
//       label: "Obniżyć koszty pozyskania klienta",
//     },
//     {
//       value: "Zwiększyć ilość rozmów handlowych",
//       label: "Zwiększyć ilość rozmów handlowych",
//     },
//   ];

//   const options2 = [
//     { value: "Chcę podnieść ceny", label: "Chcę podnieść ceny" },
//     { value: "Zdobyć więcej klientów", label: "Zdobyć więcej klientów" },
//     {
//       value: "Obniżyć koszty pozyskania klienta",
//       label: "Obniżyć koszty pozyskania klienta",
//     },
//     {
//       value: "Zwiększyć ilość rozmów handlowych",
//       label: "Zwiększyć ilość rozmów handlowych",
//     },
//   ];

//   const handleSelectChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };
//   const handleSelectChange2 = (selectedOption) => {
//     setSelectedOption2(selectedOption);
//   };

//   const DropdownIndicator = (props) => {
//     const { selectProps } = props;
//     const { value } = selectProps;

//     return (
//       <components.DropdownIndicator {...props}>
//         {value ? (
//           <Image
//             src={"/assets/images/strategiamarketingowa/dropdownok.png"}
//             alt="arrow"
//             width={30}
//             height={30}
//           />
//         ) : (
//           <Image
//             src={"/assets/images/strategiamarketingowa/dropdownarrow.png"}
//             alt="arrow"
//             width={30}
//             height={30}
//           />
//         )}
//       </components.DropdownIndicator>
//     );
//   };
//   return (
//     <>
//       <div>
//         <h2 className="card-heading mb-3">Na jakim etapie jest Twój biznes?</h2>
//         <div style={{ textAlign: "left" }} className="select-input">
//           <Select
//             options={options1}
//             placeholder="Wybierz"
//             isSearchable={false}
//             components={{ DropdownIndicator }}
//             onChange={handleSelectChange}
//             styles={{
//               clearIndicator: (baseStyles, state) => ({
//                 ...baseStyles,
//                 display: "none",
//               }),
//               indicatorSeparator: (baseStyles, state) => ({
//                 ...baseStyles,
//                 display: "none",
//               }),
//               control: (baseStyles, state) => ({
//                 ...baseStyles,
//                 paddingLeft: "10px",
//                 borderRadius: "20px",
//                 paddingBlock: "3px",
//                 backgroundColor: selectedOption
//                   ? "#effeeb"
//                   : baseStyles.backgroundColor,
//                 outline: selectedOption ? "2px solid #effeeb" : "none",
//               }),
//               dropdownIndicator: (provided, state) => ({
//                 ...provided,
//                 padding: "0",
//                 paddingLeft: "3px",
//                 paddingRight: "3px",
//               }),
//             }}
//           />
//         </div>
//         <h2 className="card-heading mt-5">
//           Ile miesięcznie inwestujesz w marketing?
//         </h2>
//         <p>Lub ile planujesz inwestować?</p>
//         <div style={{ textAlign: "left" }} className="select-input">
//           <Select
//             options={options2}
//             placeholder="Wybierz"
//             isSearchable={false}
//             components={{ DropdownIndicator }}
//             onChange={handleSelectChange2}
//             styles={{
//               clearIndicator: (baseStyles, state) => ({
//                 ...baseStyles,
//                 display: "none",
//               }),
//               indicatorSeparator: (baseStyles, state) => ({
//                 ...baseStyles,
//                 display: "none",
//               }),
//               control: (baseStyles, state) => ({
//                 ...baseStyles,
//                 paddingLeft: "10px",
//                 borderRadius: "20px",
//                 paddingBlock: "3px",
//                 backgroundColor: selectedOption2
//                   ? "#effeeb"
//                   : baseStyles.backgroundColor,
//                 outline: selectedOption2 ? "2px solid #effeeb" : "none",
//               }),
//               dropdownIndicator: (provided, state) => ({
//                 ...provided,
//                 padding: "0",
//                 paddingLeft: "3px",
//                 paddingRight: "3px",
//               }),
//             }}
//           />
//         </div>
//         <motion.button
//           className="cennikBtn mt-5"
//           whileHover={{ translateY: 5 }}
//           onClick={() => setCurrentComponent(2)}
//         >
//           Dalej (Prawie koniec)
//         </motion.button>
//       </div>
//     </>
//   );
// };

// const ComponentTwo = ({ setCurrentComponent }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [projectDescription, setProjectDescription] = useState("");

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleNext = () => {
//     if (!projectDescription) {
//       setIsModalOpen(true);
//       console.log("no project description");
//       console.log("modal", isModalOpen);
//     } else {
//       setCurrentComponent(3);
//     }
//   };

//   return (
//     <div className="component-two_section">
//       <h2>Napisz kilka stów o tym projekcie i swoim pomyśle</h2>
//       <p>Im więcej wiemy, tym lepiej się dopasujemy.</p>
//       <textarea rows="5" cols="50"></textarea>
//       <div className="mt-5">
//         <button className="cennikBtn" onClick={handleNext}>
//           Ostatnie pytanie
//         </button>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Example Modal"
//         className="Modal"
//         overlayClassName="Overlay"
//       >
//         <p>
//           Przepraszamy, nie jesteśmy w stanie przedstawić sensownej oferty na
//           bazie tak znikomych informacji. Napisz ciut więcej. Dzięki temu
//           będziemy mogli pomóc Ci lepiej.
//         </p>
//         <div>
//           <button onClick={closeModal}>Rozumiem</button>
//         </div>

//         {/* x btn */}
//         <div className="close" onClick={closeModal}>
//           <FontAwesomeIcon icon={faXmark} />
//         </div>
//       </Modal>
//     </div>
//   );
// };

// const ComponentThree = () => {
//   return (
//     <div className="componentThree_section">
//       <h2>Z kim mamy przyjemność?</h2>
//       <div className="componentThree_input-container">
//         <input type="text" placeholder="Imię" />
//         <input type="text" placeholder="Email" />
//         <input type="text" placeholder="Telefon" />
//         <input type="text" placeholder="Strona internetowa" />
//       </div>
//       <div>
//         <button className="cennikBtn">Zapisz się na konsultację</button>
//       </div>
//     </div>
//   );
// };
