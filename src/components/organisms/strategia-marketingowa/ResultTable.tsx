// // ResultTable.tsx
// import { useState, useEffect } from "react";
// import SurveyModal from "./SurveyModal";
// import Image from "next/image";
// import { useSelector } from "react-redux";
// export default function ResultTable() {
//   const { isLoading, screenData } = useSelector((state) => state.strategy);
//   const { ResultTable } = screenData;
//   const [showModal, setShowModal] = useState(false);
//   const handleOpenModal = () => {
//     setShowModal(true);
//     window.history.pushState({ modalOpen: true }, '', window.location.pathname);
//   };
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
//   useEffect(() => {
//     const handlePopState = (event) => {
//       if (showModal) {
//         handleCloseModal();
//       }
//     };
//     window.addEventListener("popstate", handlePopState);
//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, [showModal]); 
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];
//   return (
//     <div className="ResultTable WidthContent">
//       <div className="ResultTable_Title mt-0 manage-space">Nasze strategie<br/> napędzają biznesy<br/> – zobacz je w akcji:</div>
//       <div className="ResultTable_Table feature">
//         {ResultTable?.resultCard.map((item) => (
//           <div className="ResultTable_Table_Row" key={item.id}>
//             <div className="ResultTable_Table_Row_Content">{item.title}</div>
//             <div>
//               <img
//                 src={item.image_url}
//                 alt={item.title}
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                 }}
//               />
//             </div>
//             <div>
//               <div
//                 className="ResultTable_Table_Row_Button"
//                 onClick={() => handleOpenModal(item.id)}
//               >
//                 Poznaj ofertę
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Modal */}
//       <SurveyModal
//         showModal={showModal}
//         handleCloseModal={handleCloseModal}
//         options={options}
//       />
//     </div>
//   );
// }

// ResultTable.tsx
import { useState, useEffect } from "react";
import SurveyModal from "./SurveyModal";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function ResultTable() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { ResultTable } = screenData;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    // You can still push a state here if you want to track modal open/close in history,
    // but ensure it doesn't trigger a close from within this component.
    // For now, let's remove the hash manipulation here to avoid conflicts.
    // window.history.pushState({ modalOpen: true }, '', window.location.pathname);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // When the modal closes, you might want to remove any hash related to the form steps.
    // However, if the modal opened and there was no hash, then there's no need to remove it.
    // Consider if you need to revert the URL hash when the modal closes.
    // If you initially opened the modal and then navigated steps,
    // closing the modal might mean reverting the hash.
    // For now, let's keep it simple and just close the modal.
    if (window.location.hash) {
      window.history.pushState({}, '', window.location.pathname); // Clear hash
    }
  };

  // Remove this useEffect from ResultTable.tsx
  // useEffect(() => {
  //   const handlePopState = (event) => {
  //     if (showModal) {
  //       handleCloseModal();
  //     }
  //   };
  //   window.addEventListener("popstate", handlePopState);
  //   return () => {
  //     window.removeEventListener("popstate", handlePopState);
  //   };
  // }, [showModal]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="ResultTable WidthContent">
      <div className="ResultTable_Title mt-0 manage-space">Nasze strategie<br/> napędzają biznesy<br/> – zobacz je w akcji:</div>
      <div className="ResultTable_Table feature">
        {ResultTable?.resultCard.map((item) => (
          <div className="ResultTable_Table_Row" key={item.id}>
            <div className="ResultTable_Table_Row_Content">{item.title}</div>
            <div>
              <img
                src={item.image_url}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div>
              <div
                className="ResultTable_Table_Row_Button"
                onClick={() => handleOpenModal()} // No need to pass item.id here unless SurveyModal uses it
              >
                Poznaj ofertę
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <SurveyModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        options={options}
      />
    </div>
  );
}