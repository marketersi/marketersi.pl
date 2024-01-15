"use client";
import React, { useState } from "react";
import { accordionData } from "./data";
import SingleQuestion from "./SingleQuestion";
import "./accordion.css";

const Accordion = () => {
  const [questions, setQuestions] = useState(accordionData);

  return (
    <div className="container mb-5">
      <h3 className="accordion-heading">Odpowiedzi na częste pytania:</h3>
      <section className="accordion-container w-75">
        {questions.map((question) => {
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          );
        })}
      </section>
    </div>
  );
};

export default Accordion;
