import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "../tresci.css";
import { SEND_ME_A_QUOTE } from "@/redux/tresci/salescontentAction";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
import { toast } from "react-toastify";
dotenv.config();
=======
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { isFormSubmitted } = useSelector((state) => state.sales);

  const dispatch = useDispatch();
  const router = useRouter();

<<<<<<< HEAD
  // const onSubmit = (data) => {
  //   dispatch({ type: SEND_ME_A_QUOTE, payload: data });
  //   reset();
  // };

  const onSubmit = (data) => {
    console.log("Submitted form data:", data);
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Marketersi",
      message: data.message,
      from_phone: data.phone,
    };

    emailjs
      .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
        publicKey: process.env.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!", emailjs);
          toast.success(
            "Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku)."
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Ups! Coś poszło nie tak. Spróbuj ponownie później.");
        }
      );
=======
  const onSubmit = (data) => {
    console.log(data);
    dispatch({ type: SEND_ME_A_QUOTE, payload: data });
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
    reset();
  };

  useEffect(() => {
    if (isFormSubmitted) {
      router.push("/dziekujemy");
    }
  }, [isFormSubmitted, router]);

  return (
    <>
<<<<<<< HEAD
      <div className="sendQuote sentquote-form">
        <h2>
          Wypełnij i otrzymaj ofertę dopasowaną do Ciebie. Całkowicie bez
          zobowiązań.
=======
      <div className="sendQuote">
        <h2>
          Napisz kilka słów o swoim projekcie i otrzymaj niezobowiązującą
          ofertę.
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputLayout">
            <input
              required
<<<<<<< HEAD
              placeholder="Twoje imię"
=======
              placeholder="Imię"
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              {...register("name", { required: true })}
            />
            <input
              required
<<<<<<< HEAD
              placeholder="Email"
=======
              placeholder="Mail"
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              type="email"
              {...register("email", { required: true })}
            />
            <input
<<<<<<< HEAD
              placeholder="Nr telefonu"
            //  pattern="\d{7,15}"
              {...register("phone")}
              Nr telefonu
=======
              placeholder="Tel."
              pattern="\d{7,15}"
              {...register("phone")}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            />
          </div>
          <textarea
            {...register("message")}
<<<<<<< HEAD
            placeholder="Opowiedz nam o swoim projekcie. Czego potrzebujesz? Zajmiemy się resztą!"
          />

          <div className="d-flex wrapper-btn justify-content-between align-items-center">
            <button
              type="submit"
              className="mi-btn download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
            >
              Prześlijcie mi niezobowiązującą ofertę
            </button>
            {/* <img
              src="https://images.prismic.io/marketersi/ZfL0JUmNsf2sHk-N_Group1.png?auto=format,compress"
              alt=""
            /> */}

            <img
              src="https://images.prismic.io/marketersi/Z5xxjpbqstJ9-Emr_NEWSHIELDGRAPHIC.png?auto=format,compress"
              alt="shield"
              className="sheildPng"
=======
            placeholder="Napisz kilka słów o swoim projekcie"
          />

          <div className="quoteBtn">
            <button type="submit">Wyślijcie mi niezobowiązującą ofertę</button>
            <img
              src="https://images.prismic.io/marketersi/ZfL0JUmNsf2sHk-N_Group1.png?auto=format,compress"
              alt=""
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
