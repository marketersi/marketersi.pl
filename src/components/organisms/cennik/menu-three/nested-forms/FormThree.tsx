import { useDispatch, useSelector } from "react-redux";
import FormContact from "../../FormContact";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SUBMIT_MENU_STOR_FORM } from "@/redux/cennik/pricelistAction";
import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";

const UserDetailsSection = () => {
  const { screenData, formData, isMenuSubmitSuccess } = useSelector(
    (state) => state.priceList
  );
  const { formFour } = screenData?.cardMenu?.menuThree || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      type: 3,
      tbl_thirdpricecard_dropdwonoption_id: formData.formZeroDropdownValueOne,
      tbl_third_price_range_id: formData.formOneSelectedRangeValue,
      section3_textarea: formData.formTwoTextAreaValue,
      section3_inputbox: formData.formTwoInputValue,
      section4_name: name,
      section4_email: email,
      section4_phone: phone,
    };
    console.log("paylaod", payload);
    dispatch({ type: SUBMIT_MENU_STOR_FORM, payload });
  };

  useEffect(() => {
    if (isMenuSubmitSuccess) {
      router.push("/dziekujemy");
      dispatch(clearPriceListFormData());
    }
  }, [isMenuSubmitSuccess]);

  return (
    <div className="user-details_section">
      <form onSubmit={handleSubmit}>
        <h2>{formFour?.form4_title}</h2>
        <p>{formFour?.form4_subtitle}</p>
        <div className="uds_input-container">
          <input
            type="text"
            placeholder="Imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tel: (Opcjonalnie)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="cennikBtn">
            <span>{formFour?.form4_buttonText}</span>
          </button>
        </div>
      </form>
      <FormContact />
    </div>
  );
};

export default UserDetailsSection;
