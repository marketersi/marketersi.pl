// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import "../tresci.css";
// import { SEND_ME_A_QUOTE } from "@/redux/tresci/salescontentAction";
// import { useRouter } from "next/navigation";
// import emailjs from "@emailjs/browser";
// import dotenv from "dotenv";
// import { toast } from "react-toastify";
// dotenv.config();

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { isFormSubmitted } = useSelector((state) => state.sales);

//   const dispatch = useDispatch();
//   const router = useRouter();

//   // const onSubmit = (data) => {
//   //   dispatch({ type: SEND_ME_A_QUOTE, payload: data });
//   //   reset();
//   // };

//   const onSubmit = (data) => {
//     console.log("Submitted form data:", data);
//     const templateParams = {
//       from_name: data.name,
//       from_email: data.email,
//       to_name: "Marketersi",
//       message: data.message,
//       from_phone: data.phone,
//     };

//     emailjs
//       .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
//         publicKey: process.env.PUBLIC_KEY,
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!", emailjs);
//           toast.success(
//             "Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku)."
//           );
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//           toast.error("Ups! Coś poszło nie tak. Spróbuj ponownie później.");
//         }
//       );
//     reset();
//   };

//   useEffect(() => {
//     if (isFormSubmitted) {
//       router.push("/dziekujemy");
//     }
//   }, [isFormSubmitted, router]);

//   return (
//     <>
//       <div className="sendQuote sentquote-form">
//         <h2>
//           Wypełnij i otrzymaj ofertę dopasowaną do Ciebie. Całkowicie bez
//           zobowiązań.
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="inputLayout">
//             <input
//               required
//               placeholder="Twoje imię"
//               {...register("name", { required: true })}
//             />
//             <input
//               required
//               placeholder="Email"
//               type="email"
//               {...register("email", { required: true })}
//             />
//             <input
//               placeholder="Nr telefonu"
//             //  pattern="\d{7,15}"
//               {...register("phone")}
//               Nr telefonu
//             />
//           </div>
//           <textarea
//             {...register("message")}
//             placeholder="Opowiedz nam o swoim projekcie. Czego potrzebujesz? Zajmiemy się resztą!"
//           />

//           <div className="d-flex wrapper-btn justify-content-between align-items-center">
//             <button
//               type="submit"
//               className="mi-btn download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
//             >
//               Prześlijcie mi niezobowiązującą ofertę
//             </button>
//             {/* <img
//               src="https://images.prismic.io/marketersi/ZfL0JUmNsf2sHk-N_Group1.png?auto=format,compress"
//               alt=""
//             /> */}

//             <img
//               src="https://images.prismic.io/marketersi/Z5xxjpbqstJ9-Emr_NEWSHIELDGRAPHIC.png?auto=format,compress"
//               alt="shield"
//               className="sheildPng"
//             />
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import "../tresci.css";
// import { SEND_ME_A_QUOTE } from "@/redux/tresci/salescontentAction";
// import { useRouter } from "next/navigation";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { isFormSubmitted } = useSelector((state) => state.sales);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const onSubmit = (data) => {
//     const templateParams = {
//       from_name: data.name,
//       from_email: data.email,
//       to_name: "Marketersi",
//       message: data.message,
//       from_phone: data.phone,
//     };

//     emailjs
//       .send(
//         process.env.NEXT_PUBLIC_SERVICE_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         templateParams,
//         {
//           publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
//         }
//       )
//       .then(
//         () => {
//           toast.success(
//             "Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku)."
//           );
//         },
//         (error) => {
//           toast.error("Ups! Coś poszło nie tak. Spróbuj ponownie później.");
//           console.error("FAILED...", error);
//         }
//       );
//     reset();
//   };

//   useEffect(() => {
//     if (isFormSubmitted) {
//       router.push("/dziekujemy");
//     }
//   }, [isFormSubmitted, router]);

//   return (
//     <>
//       <div className="sendQuote sentquote-form">
//         <h2>
//           Wypełnij i otrzymaj ofertę dopasowaną do Ciebie. Całkowicie bez
//           zobowiązań.
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="inputLayout">
//             <input
//               required
//               placeholder="Twoje imię"
//               {...register("name", { required: true })}
//             />
//             <input
//               required
//               placeholder="Email"
//               type="email"
//               {...register("email", { required: true })}
//             />
//             <input
//               placeholder="Nr telefonu"
//               {...register("phone")}
//             />
//           </div>
//           <textarea
//             {...register("message")}
//             placeholder="Opowiedz nam o swoim projekcie. Czego potrzebujesz? Zajmiemy się resztą!"
//           />

//           <div className="d-flex wrapper-btn justify-content-between align-items-center">
//             <button
//               type="submit"
//               className="mi-btn download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
//             >
//               Prześlijcie mi niezobowiązującą ofertę
//             </button>
//             <img
//               src="https://images.prismic.io/marketersi/Z5xxjpbqstJ9-Emr_NEWSHIELDGRAPHIC.png?auto=format,compress"
//               alt="shield"
//               className="sheildPng"
//             />
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;

// 'use client';

// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import emailjs from '@emailjs/browser';
// import '../tresci.css';
// import { SEND_ME_A_QUOTE } from '@/redux/tresci/salescontentAction';

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { isFormSubmitted } = useSelector((state) => state.sales);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const onSubmit = (data) => {
//     const templateParams = {
//       from_name: data.name,
//       from_email: data.email,
//       to_name: 'Marketersi',
//       message: data.message,
//       from_phone: data.phone,
//     };

//     emailjs
//       .send(
//         process.env.SERVICE_ID,
//         process.env.TEMPLATE_ID,
//         templateParams,
//         {
//           publicKey: process.env.PUBLIC_KEY,
//         }
//       )
//       .then(() => {
//         console.log('Email sent successfully');
//       })
//       .catch((error) => {
//         console.error('Email sending failed:', error);
//       })
//       .finally(() => {
//         toast.success(
//           'Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku).'
//         );
//       });

//     dispatch({ type: SEND_ME_A_QUOTE, payload: data });
//     reset();
//   };

//   useEffect(() => {
//     if (isFormSubmitted) {
//       router.push('/dziekujemy');
//     }
//   }, [isFormSubmitted, router]);

//   return (
//     <div className="sendQuote sentquote-form">
//       <h2>
//         Wypełnij i otrzymaj ofertę dopasowaną do Ciebie. Całkowicie bez
//         zobowiązań.
//       </h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="inputLayout">
//           <input
//             required
//             placeholder="Twoje imię"
//             {...register('name', { required: true })}
//           />
//           <input
//             required
//             placeholder="Email"
//             type="email"
//             {...register('email', { required: true })}
//           />
//           <input
//             placeholder="Nr telefonu"
//             {...register('phone')}
//           />
//         </div>
//         <textarea
//           {...register('message')}
//           placeholder="Opowiedz nam o swoim projekcie. Czego potrzebujesz? Zajmiemy się resztą!"
//         />
//         <div className="d-flex wrapper-btn justify-content-between align-items-center">
//           <button
//             type="submit"
//             className="mi-btn download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
//           >
//             Prześlijcie mi niezobowiązującą ofertę
//           </button>
//           <img
//             src="https://images.prismic.io/marketersi/Z5xxjpbqstJ9-Emr_NEWSHIELDGRAPHIC.png?auto=format,compress"
//             alt="shield"
//             className="sheildPng"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

// 'use client';

// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import emailjs from '@emailjs/browser';
// import '../tresci.css';
// import { SEND_ME_A_QUOTE } from '@/redux/tresci/salescontentAction';

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { isFormSubmitted } = useSelector((state) => state.sales);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const onSubmit = (data) => {
//     const templateParams = {
//       from_name: data.name,
//       from_email: data.email,
//       to_name: 'Marketersi',
//       message: data.message,
//       from_phone: data.phone,
//     };

//     // emailjs
//     //   .send(
//     //     process.env.SERVICE_ID,
//     //     process.env.TEMPLATE_ID,
//     //     templateParams,
//     //     {
//     //       publicKey: process.env.PUBLIC_KEY,
//     //     }
//     //   )
//     emailjs.send(
//         process.env.NEXT_PUBLIC_SERVICE_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         templateParams,
//         {
//           publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
//         }
//       )

//       .then(() => {
//         toast.success(
//           'Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku).'
//         );
//       })
//       .catch(() => {
//         // Silent fail – no error toast
//       });

//     dispatch({ type: SEND_ME_A_QUOTE, payload: data });
//     reset();
//   };

//   useEffect(() => {
//     if (isFormSubmitted) {
//       router.push('/dziekujemy');
//     }
//   }, [isFormSubmitted, router]);

//   return (
//     <div className="sendQuote sentquote-form">
//       <h2>
//         Wypełnij i otrzymaj ofertę dopasowaną do Ciebie. Całkowicie bez
//         zobowiązań.
//       </h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="inputLayout">
//           <input
//             required
//             placeholder="Twoje imię"
//             {...register('name', { required: true })}
//           />
//           <input
//             required
//             placeholder="Email"
//             type="email"
//             {...register('email', { required: true })}
//           />
//           <input
//             placeholder="Nr telefonu"
//             {...register('phone')}
//           />
//         </div>
//         <textarea
//           {...register('message')}
//           placeholder="Opowiedz nam o swoim projekcie. Czego potrzebujesz? Zajmiemy się resztą!"
//         />
//         <div className="d-flex wrapper-btn justify-content-between align-items-center">
//           <button
//             type="submit"
//             className="mi-btn download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
//           >
//             Prześlijcie mi niezobowiązującą ofertę
//           </button>
//           <img
//             src="https://images.prismic.io/marketersi/Z5xxjpbqstJ9-Emr_NEWSHIELDGRAPHIC.png?auto=format,compress"
//             alt="shield"
//             className="sheildPng"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;


'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'; // Ensure ToastContainer is in your root layout/component
import emailjs from '@emailjs/browser';
import '../tresci.css';
import { SEND_ME_A_QUOTE } from '@/redux/tresci/salescontentAction';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isFormSubmitted } = useSelector((state) => state.sales); // Keep this for potential future advanced handling
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: 'Marketersi',
      message: data.message,
      from_phone: data.phone,
    };

    // 1. Dispatch the Redux action immediately
    // This starts the backend process (e.g., saving to DB)
    dispatch({ type: SEND_ME_A_QUOTE, payload: data });

    // 2. Send email via EmailJS
    emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(() => {
        // This toast confirms the *email* was sent.
        // We'll rely on the redirect for overall form submission confirmation.
        // If you want to show a toast *before* redirect, you can keep this.
        // For immediate redirect, this toast might not be seen.
        // toast.success(
        //   'Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku).'
        // );
        console.log("Email sent successfully!"); // For debugging
      })
      .catch((error) => {
        console.error("EmailJS failed:", error); // Log the error for debugging
        // Silent fail for the user, as per your original code
      });

    // 3. Immediately redirect the user to the thank you page
    // This provides the desired instant feedback and transition.
    router.push('/dziekujemy');

    // 4. Reset the form fields immediately
    // Since we're redirecting, the user won't see the cleared fields on this page.
    reset();
  };

  // The useEffect can now primarily be used for potential error handling
  // from the Redux state, if the Redux action (SEND_ME_A_QUOTE)
  // has a failure state that needs to be handled *after* redirect.
  // For standard success, it's no longer needed for navigation.
  useEffect(() => {
    // If you had an isFormSubmitFailed state, you'd handle it here.
    // For now, we'll assume optimistic success and let emailjs handle its own errors silently.
  }, []); // No dependencies needed for navigation anymore

  return (
    <div className="sendQuote sentquote-form">
      <h2>
        Wypełnij i otrzymaj ofertę dopasowaną do Ciebie. Całkowicie bez
        zobowiązań.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputLayout">
          <input
            required
            placeholder="Twoje imię"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="error-message">Imię jest wymagane.</span>}
          <input
            required
            placeholder="Email"
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="error-message">Poprawny email jest wymagany.</span>}
          <input
            placeholder="Nr telefonu"
            {...register('phone')}
          />
        </div>
        <textarea
          {...register('message')}
          placeholder="Opowiedz nam o swoim projekcie. Czego potrzebujesz? Zajmiemy się resztą!"
        />
        <div className="d-flex wrapper-btn justify-content-between align-items-center">
          <button
            type="submit"
            className="mi-btn download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
          >
            Prześlijcie mi niezobowiązującą ofertę
          </button>
          <img
            src="https://images.prismic.io/marketersi/Z5xxjpbqstJ9-Emr_NEWSHIELDGRAPHIC.png?auto=format,compress"
            alt="shield"
            className="sheildPng"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;