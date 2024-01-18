"use client";
import React from "react";
import ZamowHero from "@/components/organisms/zamow/zamow-hero/ZamowHero";
import CustomerRating from "@/components/organisms/zamow/customer-rating/CustomerRating";
import Accordion from "@/components/organisms/zamow/accordion/Accordion";
import { Container } from "react-bootstrap";
import Results from "@/components/organisms/zamow/results/Results";
import "./zamow.css";
import { motion } from "framer-motion";

const BookExamination = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg_sunset">
      <Container>
        <ZamowHero />
        <CustomerRating />
        <Results />
        <Accordion />
        <div className="btt_btn_container">
          <motion.button
            onClick={handleBackToTop}
            className="btt_btn"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
          >
            Powrót na górę
          </motion.button>
        </div>
      </Container>
    </div>
  );
};

export default BookExamination;
