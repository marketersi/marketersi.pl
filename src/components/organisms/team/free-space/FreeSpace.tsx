"use client";
import React from "react";
import style from "../team.module.css";
import { motion } from "framer-motion";

const FreeSpace = () => {
  return (
    <>
      <div className={style.free}>
        <div className={style.teamContent}>
          <p >
            <span>Umówmy się. Samotna praca jest do kitu.</span>Połączyliśmy
            więc siły, aby wymiatać razem. Kolektyw tworzy 36 wysokiej klasy
            specjalistów z Polski i Europy.
          </p>
          <p>
            Łączymy tych, co projektują na długo po tym, gdy inni dawno już się
            poddali. Masz w sobie taką pasję?
          </p>

          <div className={style.mainHeading}>
            <h2>
              Zawsze jest tu
              <span>wolne miejsce</span>
            </h2>
            <motion.div whileHover={{ translateY: 5 }}>
            <a target="_blank" href="https://docs.google.com/document/d/1xMLse-SaH8O0qUs4j3S7JlEbR2YGRhsUO6Dgt7_DC2U/edit">
            <button >Rekrutacja</button>
            </a>
            </motion.div>
          </div>
          <p style={{marginTop: '150px'}}>Większość z nas zdobywała doświadczenie w pracy dla korporacji. Dziś wiedzą od największych często służymy tym najmniejszym. To bardzo wdzięczna robota.</p>
        </div>
      </div>
    </>
  );
};

export default FreeSpace;
