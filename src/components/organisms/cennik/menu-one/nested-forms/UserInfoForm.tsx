// import { SUBMIT_MENU_STOR_FORM } from "@/redux/cennik/pricelistAction";
// import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const UserInfoForm = ({ formFour }) => {
//   const { formData, isMenuSubmitSuccess, isMenuSubmitFail } = useSelector(
//     (state) => state.priceList
//   );

//   const [showValidationError, setShowValidationError] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isInvalid = !name || !email || !phone;

//     if (isInvalid) {
//       setShowValidationError(true);
//       setTimeout(() => {
//         setShowValidationError(false);
//       }, 1000);
//       return;
//     }

//     const payload = {
//       type: 1,
//       tbl_firstpricecard_dropdwonoption_id: formData.formZeroDropdownValueOne,
//       tbl_first_price_range_id: formData.formOneSelectedRangeValue,
//       tbl_firstpricecardsecond_dropdownoption_id: formData.formOneDropdownValueTwo,
//       section3_textarea: formData.formTwoTextAreaValue,
//       section3_inputbox: formData.formTwoInputValue,
//       section4_name: name,
//       section4_email: email,
//       section4_phone: phone,
//     };

//     // Dispatch the form submission action
//     dispatch({ type: SUBMIT_MENU_STOR_FORM, payload });

//     // IMPORTANT CHANGE: Redirect immediately after dispatching the action
//     // This makes the transition feel instant to the user.
//     router.push("/dziekujemy");

//     // IMPORTANT CHANGE: Clear the local form state immediately here
//     // as the user is already being redirected.
//     setName("");
//     setEmail("");
//     setPhone("");

//     // IMPORTANT CHANGE: Also clear the Redux form data immediately
//     // since we are optimistically redirecting.
//     dispatch(clearPriceListFormData());
//   };

//   // The useEffect for success/fail is now primarily for potential error handling
//   // or if you had follow-up actions that absolutely *must* wait for server confirmation.
//   // For immediate redirect, this useEffect won't be responsible for navigation anymore.
//   useEffect(() => {
//     if (isMenuSubmitFail) {
//       // You might want to add error handling here, e.g., a toast notification
//       // that the submission failed, or redirect back if the thank you page
//       // needs to be dynamic based on success.
//       console.error("Form submission failed!");
//       // Example: router.push("/error-page"); or display a message
//     }
//   }, [isMenuSubmitFail]); // Only dependency needed now is for failure

//   const isValidEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div className="user-details_section">
//       <form onSubmit={handleSubmit}>
//         <h2 className={showValidationError ? "red-title" : ""}>
//           {formFour?.section4_title}
//         </h2>
//         <p className={`mt-1 mb-4 ${showValidationError ? "red-title" : ""}`}>
//           {formFour?.section4_subtitle}
//         </p>
//         <div className="uds_input-container">
//           <input
//             type="text"
//             placeholder="Imię"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{
//               backgroundColor: name ? "#effeeb" : "",
//               outline: name ? "1px solid #effeeb" : "",
//             }}
//           />

//           <input
//             type="text"
//             placeholder="Nr telefonu i pora kontaktu"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             style={{
//               backgroundColor: phone ? "#effeeb" : "",
//               outline: phone ? "1px solid #effeeb" : "",
//             }}
//           />

//           <input
//             type="email"
//             placeholder="Adres email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               backgroundColor: email && isValidEmail(email) ? "#effeeb" : "",
//               outline: email && isValidEmail(email) ? "1px solid #effeeb" : "",
//             }}
//             pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
//           />
//         </div>
//         <div className="buttonBox">
//           <button type="submit" className="cennikBtn form4Btn">
//             <span>{formFour?.section4_buttonText}</span>
//           </button>
//         </div>
//       </form>

//       <div className="contact">
//         <div className="top-part">
//           <h5>{formFour?.contact?.contact_title}</h5>
//           <p>{formFour?.contact?.contact_info}</p>
//         </div>

//         <img src={formFour?.contact?.contact_image} alt="" />
//         <div className="whiteBox"></div>
//         <div className="bottom-part">
//           <h5>{formFour?.contact?.contact_contactText}</h5>
//           <a href="tel:+48660970980">{formFour?.contact?.contact_tel}</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInfoForm;

import { SUBMIT_MENU_STOR_FORM } from "@/redux/cennik/pricelistAction";
import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserInfoForm = ({ formFour }) => {
  const { formData, isMenuSubmitSuccess, isMenuSubmitFail } = useSelector(
    (state) => state.priceList
  );

  const [showValidationError, setShowValidationError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInvalid = !name || !email || !phone;

    if (isInvalid) {
      setShowValidationError(true);
      setTimeout(() => {
        setShowValidationError(false);
      }, 1000);
      return;
    }

    const payload = {
      type: 1,
      tbl_firstpricecard_dropdwonoption_id: formData.formZeroDropdownValueOne,
      tbl_first_price_range_id: formData.formOneSelectedRangeValue,
      tbl_firstpricecardsecond_dropdownoption_id: formData.formOneDropdownValueTwo,
      section3_textarea: formData.formTwoTextAreaValue,
      section3_inputbox: formData.formTwoInputValue,
      section4_name: name,
      section4_email: email,
      section4_phone: phone,
    };

    // Dispatch the form submission action
    dispatch({ type: SUBMIT_MENU_STOR_FORM, payload });

    // IMPORTANT CHANGE: Redirect immediately after dispatching the action
    // This makes the transition feel instant to the user.
    router.push("/dziekujemy");

    // IMPORTANT CHANGE: Clear the local form state immediately here
    // as the user is already being redirected.
    setName("");
    setEmail("");
    setPhone("");

    // IMPORTANT CHANGE: Also clear the Redux form data immediately
    // since we are optimistically redirecting.
    dispatch(clearPriceListFormData());
  };

  // The useEffect for success/fail is now primarily for potential error handling
  // or if you had follow-up actions that absolutely *must* wait for server confirmation.
  // For immediate redirect, this useEffect won't be responsible for navigation anymore.
  useEffect(() => {
    if (isMenuSubmitFail) {
      // You might want to add error handling here, e.g., a toast notification
      // that the submission failed, or redirect back if the thank you page
      // needs to be dynamic based on success.
      console.error("Form submission failed!");
      // Example: router.push("/error-page"); or display a message
    }
  }, [isMenuSubmitFail]); // Only dependency needed now is for failure

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="user-details_section">
      <form onSubmit={handleSubmit}>
        <h2 className={showValidationError ? "red-title" : ""}>
          {formFour?.section4_title}
        </h2>
        <p className={`mt-1 mb-4 ${showValidationError ? "red-title" : ""}`}>
          {formFour?.section4_subtitle}
        </p>
        <div className="uds_input-container">
          <input
            type="text"
            placeholder="Imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: name ? "#effeeb" : "",
              outline: name ? "1px solid #effeeb" : "",
            }}
          />

          <input
            type="text"
            placeholder="Nr telefonu i pora kontaktu"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              backgroundColor: phone ? "#effeeb" : "",
              outline: phone ? "1px solid #effeeb" : "",
            }}
          />

          <input
            type="email"
            placeholder="Adres email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              backgroundColor: email && isValidEmail(email) ? "#effeeb" : "",
              outline: email && isValidEmail(email) ? "1px solid #effeeb" : "",
            }}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />
        </div>
        <div className="buttonBox">
          <button type="submit" className="cennikBtn form4Btn">
            <span>{formFour?.section4_buttonText}</span>
          </button>
        </div>
      </form>

      <div className="contact">
        <div className="top-part">
          <h5>{formFour?.contact?.contact_title}</h5>
          <p>{formFour?.contact?.contact_info}</p>
        </div>

        <img src={formFour?.contact?.contact_image} alt="" />
        <div className="whiteBox"></div>
        <div className="bottom-part">
          <h5>{formFour?.contact?.contact_contactText}</h5>
          <a href="tel:+48660970980">{formFour?.contact?.contact_tel}</a>
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;