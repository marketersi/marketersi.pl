import React from "react";

const UserInfoForm = () => {
  return (
    <div className="user-details_section">
      <h2>Zaczynamy składać opcje cenowe.</h2>
      <p>Komu mamy je wysłać?</p>
      <div className="uds_input-container">
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Tel: (Opcjonalnie)" />
      </div>
      <div>
        <button
          onClick={() => console.log("cennik form submitted")}
          className="cennikBtn"
        >
          <span>
            Wyślijcie mi <br /> 3 propozycje cenowe
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserInfoForm;
