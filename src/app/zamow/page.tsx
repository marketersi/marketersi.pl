"use client";
import React from "react";
import ZamowHero from "@/components/organisms/zamow/zamow-hero/ZamowHero";
import CustomerRating from "@/components/organisms/zamow/customer-rating/CustomerRating";
import Accordion from "@/components/organisms/zamow/accordion/Accordion";
import { Container } from "react-bootstrap";
import Results from "@/components/organisms/zamow/results/Results";
import "./zamow.css";

const BookExamination = () => {
  return (
    <>
      <Container>
        <ZamowHero />
        <CustomerRating />
        <Results />
        <Accordion />
        <div className="btt_btn_container">
          <button
            onClick={() => console.log("back to top")}
            className="btt_btn"
          >
            Powrót na górę
          </button>
        </div>
      </Container>
    </>
  );
};

export default BookExamination;
