"use client";
import React, {useState} from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";
import { accordionData } from "./data";
import SingleQuestion from "./Question";
import "./accordion.css"
// import Accordion from "react-bootstrap/Accordion";

const Accordion = () => {
    const [questions, setQuestions] = useState(accordionData);
  return (
    <>
      <div className={style.accordion}>
        <div className={style.accordionContainer}>
          <section className="accordion-container w-75">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Accordion;
