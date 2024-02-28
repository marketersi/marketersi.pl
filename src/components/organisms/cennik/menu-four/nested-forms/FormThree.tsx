import { useSelector } from "react-redux";
import FormContact from "../../FormContact";

const UserDetailsSection = () => {

  const {isLoading, screenData} = useSelector((state) => state.priceList);
  const {  formFour } = screenData?.cardMenu?.menuFour || "";

  return (
    <div className="user-details_section">
      <h2>{formFour?.section4_title}</h2>
      <p>{formFour?.section4_subtitle}</p>
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
           {formFour?.section4_buttonText}
          </span>
        </button>
      </div>

      <FormContact />
    </div>
  );
};

export default UserDetailsSection;
