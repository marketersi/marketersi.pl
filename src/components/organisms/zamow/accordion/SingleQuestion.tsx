import React, { useState } from "react";
import "./accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const SingleQuestion = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={`question ${showInfo ? "showBorder" : ""}`}>
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faPlusCircle} className="icon" />
          )}
        </button>
      </header>
      {showInfo && <p className="info">{answer}</p>}
    </article>
  );
};

export default SingleQuestion;
