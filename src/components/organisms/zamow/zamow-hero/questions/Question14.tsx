import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Question14 = () => {
  return (
    <div className="zh_question">
      <h2>Mamy to!</h2>
      <p>
        Zapoznamy się z Twoją sprawą i odezwiemy się. Wierzymy, że będziemy
        dobrym partnerem dla sytuacji w której znajduje się Twoja firma
      </p>
      <p>
        Jeśli tak. Zarezerwujemy dla Ciebie godzinę pracy wysokiej klasy
        specjalisty.
        <br /> Jeśli nie. Wyślemy Ci wartościowe materiały do realizacji we
        własnym zakresie.
      </p>

      <div>
        <div>
          <img
            src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMarketing-cyfrowy.c1c3e39a.jpg&w=750&q=75"
            alt=""
          />
        </div>
        <div>
          <h3>
            W ramach podziękowań mamy dla Ciebie przewodnik pełen
            najefektywniejszych strategii reklamowych dla firm.
          </h3>
          <div>
            <div className="zh_next_btn_container">
              <motion.button
                className="zh_next_btn"
                whileHover={{ translateY: 5 }}
              >
                Pobierz teraz
              </motion.button>
            </div>
            <div className="zh_next_btn_container">
              <Link href="/">
                <motion.button
                  className="zh_next_btn"
                  whileHover={{ translateY: 5 }}
                >
                  Poznaj Owocnych
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question14;
