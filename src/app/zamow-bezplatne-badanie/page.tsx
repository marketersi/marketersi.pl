'use client';
import React, { useEffect, useState } from 'react';
import ZamowHero from '@/components/organisms/zamow/zamow-hero/ZamowHero';
import CustomerRating from '@/components/organisms/zamow/customer-rating/CustomerRating';
import Accordion from '@/components/organisms/zamow/accordion/Accordion';
import { Container } from 'react-bootstrap';
import Results from '@/components/organisms/zamow/results/Results';
import './zamow.css';
import { motion } from 'framer-motion';
import { FETCH_EXAMINATION_SCREEN_DATA } from '@/redux/zamow/zamowAction';
import { useDispatch, useSelector } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';

const BookExamination = () => {
  const { isLoading } = useSelector((state) => state.examination);
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = 14;

  useEffect(() => {
    dispatch({ type: FETCH_EXAMINATION_SCREEN_DATA });
  }, [dispatch]);

  const handleNextQuestion = () => {
    setProgress((prev) => prev + 100 / totalQuestions);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setProgress((prev) => prev - 100 / totalQuestions);
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );
  }

  return (
    <div>
      <div className="bg_sunset"></div>

      {currentQuestion > 0 && (
        <div className="progress-bar-container">
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
          <button className="back-button" onClick={handlePreviousQuestion}>
            COFNIJ
          </button>
        </div>
      )}

      <Container className="zamow-container">
        <ZamowHero
          progress={progress}
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
        <CustomerRating />
        <Results />
        <Accordion />
        <div className="btt_btn_container">
          <motion.button
            onClick={handleBackToTop}
            className="btt_btn"
            whileHover={{ translateY: 5 }}
          >
            Wróć na górę
          </motion.button>
        </div>
      </Container>
    </div>
  );
};

export default BookExamination;
