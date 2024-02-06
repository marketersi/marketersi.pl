"use client";
import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import style from "../main.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Stars from "@/components/molecules/Ratings";

const Order = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const { ratingSection } = screenData;

  return (
    <div className={style.pinkBG}>
      <Container>
        <div className={style.order}>
          <div className={style.orderContent}>
            <h2>
              {/* Zamów bezpłatne badanie strony, by otrzymać porady od ekspertów */}
              {ratingSection?.main_title}
            </h2>
            <p>
              {/* Usprawnij to na stronie firmy <br /> i przygotuj więcej miejsca na
              nowych klientów. */}
              {ratingSection?.subtitle_1}
            </p>

            <Link href="/zamow">
              <motion.button whileHover={{ translateY: 5 }}>
                Zamów badanie teraz
              </motion.button>
            </Link>
          </div>
          <div className={style.orderImg}>
            <Image
              // src="/assets/images/Badanie-marketingu-owocni.avif"
              src={ratingSection?.image_url}
              alt="My Image"
              width="auto"
              height="auto"
            />
            <div className={style.ratingContent}>
              <p>
                {/* Serwis oceniany przez klientów jako <br /> DOSKONAŁY! w ankiecie
                badania opinii. */}
                {ratingSection?.subtitle_2}
              </p>
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
