import { useDispatch, useSelector } from "react-redux";
import FormContact from "../../FormContact";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";
import { SUBMIT_MENU_STOR_FORM } from "@/redux/cennik/pricelistAction";

const UserDetailsSection = () => {
  const { isLoading, screenData, formData, isMenuSubmitSuccess } = useSelector(
    (state) => state.priceList
  );
  const { formFour } = screenData?.cardMenu?.menuFour || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      type: 4,
      tbl_fourthpricecard_dropdwonoption_id: formData.formZeroDropdownValueOne,
      tbl_fourth_price_range_id: formData.formOneSelectedRangeValue,
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
        <h2>{formFour?.section4_title}</h2>
        <p>{formFour?.section4_subtitle}</p>
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
            <span>{formFour?.section4_buttonText}</span>
          </button>
        </div>
      </form>

      <FormContact />
    </div>
  );
};

export default UserDetailsSection;
