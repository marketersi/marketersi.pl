import React from "react";
import FormContact from "../../FormContact";

const FormThree = ({ form }) => {
  return (
    <div className="componentThree_section">
      <h2>
        {form?.section_4_title}
      </h2>
      <div className="componentThree_input-container">
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefon" />
        <input type="text" placeholder="Strona internetowa" />
      </div>
      <div>
        <button className="cennikBtn">Zapisz się na konsultację</button>
      </div>
      <FormContact />
    </div>
  );
};

export default FormThree;
