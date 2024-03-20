"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CompetitionsData = {
  title: "Konkurencja w wersji ",
  titleStyle: "hiper",
  image:
    "https://propozycje.owocni.pl/ux/Podkreslenie-konkurencja.0db36d83.png",
  description1: "Oto internet. Tu walutą jest ludzka uwaga. Walczy o nią",
  description2: "Oto internet. Tu walutą jest ludzka uwaga. Walczy o nią",
  description3: "Oto internet. Tu walutą jest ludzka uwaga. Walczy o nią",
  description4: "Oto internet. Tu walutą jest ludzka uwaga. Walczy o nią",
};

const Competitions = () => {
  const { screenData } = useSelector((state) => state.ux);
  const CompetitionData = screenData.CompetitionData || {};

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 101);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const words = ["Netflix", "Spotify", "Philips", "Adidas"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="messagesSection">
        <h2
          className="textAnimation"
          style={{
            opacity: 1,
            transform: "translate(0px, 0px)",
          }}
        >
          {CompetitionData.compt_title}
          <span>
            {/* {CompetitionData.titleStyle} */}
            <img src={CompetitionData.compt_image} alt="" />
          </span>
        </h2>
        <div className="text2">
          <div>
            {CompetitionData.compt_description1}
            {/* <span className="slotContainer ani1">
              <span className="animated-words">
                <span className="word">{words[currentWordIndex]}</span>
              </span>
            </span>
            i <br className="mobile" />
            <div className="timer timerNumber">
              <div className="cell"> {count} </div>
            </div> */}

            {CompetitionData.compt_description3}
          </div>
          <p>
            {/* Łatwo jest być innym,
            <br className="mobile" />
            ale trudno tu być lepszym.
            <br />
            Skończyły się czasy klonów
            <br className="mobile" />i sztampowych szablonów. */}
            {CompetitionData.compt_description2}
          </p>
          <p>
            {/* Dziś wygrywają ci, którzy
            <br className="mobile" />
            odnajdują lepsze odpowiedzi
            <span className="loading">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span> */}
            {CompetitionData.compt_description3}...
          </p>
        </div>
      </section>
    </>
  );
};

export default Competitions;
