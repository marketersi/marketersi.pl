import React from "react";

const FormThree = () => {
  return (
    <div className="componentThree_section">
      <h2>Z kim mamy przyjemność?</h2>
      <div className="componentThree_input-container">
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefon" />
        <input type="text" placeholder="Strona internetowa" />
      </div>
      <div>
        <button className="cennikBtn">Zapisz się na konsultację</button>
      </div>
    </div>
  );
};

export default FormThree;
