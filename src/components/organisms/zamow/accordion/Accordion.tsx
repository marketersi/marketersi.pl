"use client";
import React, { useState } from "react";
import { accordionData } from "./data";
import SingleQuestion from "./SingleQuestion";
import "./accordion.css";

const Accordion = () => {
  const [questions, setQuestions] = useState(accordionData);
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const handleQuestionClick = (questionId) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
  };

  return (
    <div className="container mb-5">
      <h3 className="accordion-heading">Odpowiedzi na częste pytania:</h3>
      <section className="accordion-container w-75">
        {questions.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              {...question}
              isOpen={question.id === openQuestionId}
              onQuestionClick={() => handleQuestionClick(question.id)}
            ></SingleQuestion>
          );
        })}
      </section>
    </div>
  );
};

export default Accordion;
