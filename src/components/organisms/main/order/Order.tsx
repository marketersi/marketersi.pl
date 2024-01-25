"use client";
import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import style from "../main.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Order = () => {
  return (
    <div className={style.pinkBG}>
      <Container>
        <div className={style.order}>
          <div className={style.orderContent}>
            <h2>
              Zamów bezpłatne badanie strony, by otrzymać porady od ekspertów
            </h2>
            <p>
              Usprawnij to na stronie firmy <br /> i przygotuj więcej miejsca na
              nowych klientów.
            </p>

            <Link href="/zamow">
              <motion.button whileHover={{ translateY: 5 }}>
                Zamów badanie teraz
              </motion.button>
            </Link>
          </div>
          <div className={style.orderImg}>
            <Image
              src="/assets/images/Badanie-marketingu-owocni.avif"
              alt="My Image"
              width="auto"
              height="auto"
            />
            <div className={style.ratingContent}>
              <p>
                Serwis oceniany przez klientów jako <br /> DOSKONAŁY! w ankiecie
                badania opinii.
              </p>
              <div className={style.rating}>
                <div className={style.star}>
                  <Image
                    src="/assets/images/star.avif"
                    alt="My Image"
                    width="auto"
                    height="auto"
                  />
                  <Image
                    src="/assets/images/star.avif"
                    alt="My Image"
                    width="auto"
                    height="auto"
                  />
                  <Image
                    src="/assets/images/star.avif"
                    alt="My Image"
                    width="auto"
                    height="auto"
                  />
                  <Image
                    src="/assets/images/star.avif"
                    alt="My Image"
                    width="auto"
                    height="auto"
                  />
                  <Image
                    src="/assets/images/star.avif"
                    alt="My Image"
                    width="auto"
                    height="auto"
                  />
                </div>
                <div className={style.ratingNumber}>
                  <p>
                    <span>4.98</span>/5
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
