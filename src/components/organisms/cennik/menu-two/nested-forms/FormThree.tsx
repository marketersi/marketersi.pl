import React, { useEffect, useState } from "react";
import FormContact from "../../FormContact";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { SUBMIT_MENU_STOR_FORM } from "@/redux/cennik/pricelistAction";
import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";

const FormThree = ({ form }) => {
  const { formData, isMenuSubmitSuccess } = useSelector(
    (state) => state.priceList
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      type: 2,
      prlist_menu2_dropdown_1_id: formData?.formZeroDropdownValueOne,
      prlist_menu2_dropdown_2_id: formData?.formZeroDropdownValueTwo,
      prlist_menu2_dropdown_3_id: formData?.formOneDropdownValueOne,
      prlist_menu2_dropdown_4_id: formData?.formOneDropdownValueOne,
      section3_textarea: formData?.formTwoTextAreaValue,
      section4_name: name,
      section4_email: email,
      section4_phone: phone,
      section4_website: website,
    };

    console.log("menu 2 payload", payload);
    dispatch({ type: SUBMIT_MENU_STOR_FORM, payload });
    setName("");
    setEmail("");
    setPhone("");
    setWebsite("");
  };

  useEffect(() => {
    if (isMenuSubmitSuccess) {
      router.push("/dziekujemy");
      dispatch(clearPriceListFormData());
    }
  }, [isMenuSubmitSuccess]);

  return (
    <div className="componentThree_section">
      <h2>{form?.section_4_title}</h2>
      <div className="componentThree_input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Strona internetowa"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
          <div>
            <button className="cennikBtn" type="submit">
              Zapisz się na konsultację
            </button>
          </div>
        </form>
      </div>
      <FormContact />
    </div>
  );
};

export default FormThree;
