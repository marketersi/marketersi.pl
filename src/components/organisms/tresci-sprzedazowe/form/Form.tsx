import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "../tresci.css";
import { SEND_ME_A_QUOTE } from "@/redux/tresci/salescontentAction";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch({ type: SEND_ME_A_QUOTE, payload: data });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            required
            placeholder="Imię"
            {...register("name", { required: true })}
          />
          <input
            required
            placeholder="Mail"
            type="email"
            {...register("email", { required: true })}
          />
          <input
            placeholder="Telefon"
            pattern="\d{7,15}"
            {...register("phone")}
          />
          <textarea {...register("message")} />

          <div>
            <button type="submit">send a quote</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
