// "use client"
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import ProjectuxModal from "../modals/ProjectuxModal";

// const IgnoreSitesData = {
//   image:
//     "https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.webp",
//   title: "Ludzie ignorują strony, które ignorują ludzi...",
//   description1: "descriptions",
//   description2: "descriptions",
// };

// const IgnoreSites = () => {
//   const { screenData } = useSelector((state) => state.ux);
//   const IgnoreSites = screenData.IgnoreSites || {};
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <>
//       <section>
//         <div id="maciej">

//           <div className="contentText">
//             <h2>{IgnoreSites.title}</h2>
//             <p>{IgnoreSites.descript1}</p>
//             <p>{IgnoreSites.descript2}</p>
//              <a
//               className="btn-neon send-offer-button js--triggerAnimation"
//               onClick={openModal}
//             >
//               Brzmi świetnie. Wyślijcie mi ofertę.
//               <div
//                 className="light"
//                 style={{ transform: "rotate(120deg) scale(0.7, 0.7)" }}
//               ></div>
//             </a> 

// {/* <button className="buttonux" onClick={openModal}>
//                 Brzmi świetnie. Wyślijcie mi ofertę.
//               </button> */}
            
//           </div>
//         </div>
//       </section>
//       {/* <ModalForm isOpen={isModal} onClose={handleModalClose} /> */}
//       <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
//     </>
//   );
// };

// export default IgnoreSites;

"use client";
import React, { useEffect } from "react"; // Import useEffect
import { useSelector } from "react-redux";
import ProjectuxModal from "../modals/ProjectuxModal";
import { useSearchParams, useRouter } from "next/navigation"; // Import useSearchParams and useRouter

const IgnoreSites = () => {
  const { screenData } = useSelector((state) => state.ux);
  const IgnoreSites = screenData.IgnoreSites || {};

  const searchParams = useSearchParams();
  const router = useRouter();

  // Determine if the modal should be open based on the URL search param
  const isModalOpen = searchParams.get("ModelB") === "open";

  const openModal = () => {
    // Add 'uxModal=open' to the URL without reloading the page
    router.push("?ModelB=open", { scroll: false });
  };

  const closeModal = () => {
    // Remove 'uxModal' from the URL without reloading the page
    // This effectively closes the modal and adds a new entry to browser history
    router.push(window.location.pathname, { scroll: false });
  };

  // Optional: If you want to handle cases where the user directly navigates to a URL with uxModal=open
  // and ensure the modal state is consistent
  useEffect(() => {
    if (isModalOpen) {
      // You might want to do something here if the modal needs to initialize based on URL
      // For a simple modal, the `isModalOpen` prop is usually sufficient.
    }
  }, [isModalOpen]);

  return (
    <>
      <section>
        <div id="maciej">
          <div className="contentText">
            <h2>{IgnoreSites.title}</h2>
            <p>{IgnoreSites.descript1}</p>
            <p>{IgnoreSites.descript2}</p>
            <a
              className="btn-neon send-offer-button js--triggerAnimation"
              onClick={openModal}
            >
              Brzmi świetnie. Wyślijcie mi ofertę.
              <div
                className="light"
                style={{ transform: "rotate(120deg) scale(0.7, 0.7)" }}
              ></div>
            </a>
          </div>
        </div>
      </section>
      <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

export default IgnoreSites;