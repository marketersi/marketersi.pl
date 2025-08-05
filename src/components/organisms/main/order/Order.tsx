'use client';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import style from '../main.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Stars from '@/components/molecules/Ratings';

const Order = () => {
  const { screenData } = useSelector((state) => state.home);
  const { ratingSection } = screenData;

  useEffect(() => {
    // When the component mounts, set a unique history state
    history.pushState({ page: 'order-page' }, '', location.href);

    const handlePopState = (event) => {
      // Check if the state is the one we set
      if (event.state && event.state.page === 'order-page') {
        // Find the anchor div and scroll to it
        const anchor = document.getElementById('order-scroll-anchor');
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className={style.pinkBG}>
      <Container>
        <div className={style.order}>
          <div className={style.orderContent}>
            <h2>{ratingSection?.main_title}</h2>
            <p>{ratingSection?.subtitle_1}</p>

            {/* Anchor point to control scroll position */}
            <div id="order-scroll-anchor"></div>
            
            <Link href="/zamow-bezplatne-badanie" passHref>
              <motion.button whileHover={{ translateY: 5 }} id="order-button">
                Zamów badanie teraz
              </motion.button>
            </Link>
          </div>
          <div className={style.orderImg}>
            <img
              src={ratingSection?.image_url || "https://images.prismic.io/marketersi/Zs2kJ0aF0TcGJa3B_naukowiec.png?auto=format,compress"}
              alt="My Image"
              width="auto"
              height="auto"
            />
            <div className={style.ratingContent}>
              <p>{ratingSection?.subtitle_2}</p>
              <div className={style.rating}>
                <div className={style.star}>
                  <Stars rating={ratingSection?.rating_no} />
                </div>
                <div className={style.ratingNumber}>
                  <p>
                    <span>{ratingSection?.rating_no}</span>/5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Order;