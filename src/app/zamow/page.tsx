import React from "react";
import ZamowHero from "@/components/organisms/zamow/zamow-hero/ZamowHero";
import "./zamow.css";
import CustomerRating from "@/components/organisms/zamow/customer-rating/CustomerRating";
import Accordion from "@/components/organisms/zamow/accordion/Accordion";
import { Container } from "react-bootstrap";
import Results from "@/components/organisms/zamow/results/Results";

const BookExamination = () => {
  return (
    <>
      <Container>
        <ZamowHero />
        <CustomerRating />
        <Results />
        <Accordion />
      </Container>
    </>
  );
};

export default BookExamination;
