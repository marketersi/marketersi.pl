"use client";

import React from "react";
import style from "../team.module.css";
import { motion, Variants,  } from "framer-motion";

const Creative = () => {
  


  return (
    <>
      <section className={style.creative}>
        <div className={style.teamContent}>
          <h2>
            Kreatywne <br />
            <span>supertalenty</span> <br />
            to wolne duchy.
          </h2>
          <motion.div
              className={style.orangeBG} // Add your existing class
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
          <svg
            className="ml-[-63px] mt-[-107px] min-w-[130rem] translate-x-[9rem] translate-y-[60px] lg:min-w-[1167px] lg:translate-x-0"
            viewBox="0 0 500 500"
            
          >
            <defs>
              <linearGradient
                id="grad-shape-heartbeat"
                gradientUnits="objectBoundingBox"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <stop stop-color="#ffd041" offset="0%"></stop>
                <stop stop-color="#ffdc6d" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#grad-shape-heartbeat)"
              d="M227.1178,126.0227C273.8306,105.1876,341.3589,105.6227,371.2515,157.4354C387.9983,192.034,362.9646,244.39,355.2669,283.6577C343.3375,319.612,332.9582,353.9591,306.6056,362.1756C257.2465,397.0951,174.451,375.3158,144.4145,321.3943C127.0877,289.7503,141.9952,233.7849,159.3361,195.3707C175.488,164.3507,198.896,133.3978,227.1178,126.0227Z"
            ></path>
          </svg>
          </motion.div>
          <img
            className={style.CreativeHeart}
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSerce.5c1a3248.png&w=640&q=75"
            alt=""
          />
          <img
            className={style.CreativeOnar}
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FO-Nas-Ania.3838a4a4.png&w=1080&q=75"
            alt=""
          />

          <p style={{ margin: "100px 0" }}>
            Dawno zrozumieliśmy, że najlepsze projekty nie powstają od 8 do 16.
            Supertalenty, to najczęściej cyfrowi nomadzi, którzy do twórczości{" "}
            <span style={{ display: "inline", margin: "100px 0" }}>
              {" "}
              potrzebują wolności.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Creative;
