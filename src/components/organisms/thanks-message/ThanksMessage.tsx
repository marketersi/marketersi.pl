"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "./thanks.module.css";

import useWindowSize from "react-use/lib/useWindowSize";
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const ThanksMessage = () => {
  const { width, height } = useWindowSize();
  const router = useRouter();

  const [isShowingConfetti, setIsShowingConfetti] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowingConfetti(false);
    }, 3000);

    document.body.style.overflowX = "hidden";

    return () => {
      clearTimeout(timeout);
      document.body.style.overflowX = "";
    };
  }, []);

  const handleGoToOpinie = () => {
    router.push("/marketersi-opinie");
  };

  return (
    <div className={style.thanks}>
      {isShowingConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={1200}
          tweenDuration={3000}
          recycle={false}
        />
      )}
      <div className={style.thanksContainer}>
        <img
          className={style.maiImg}
          src="/assets/images/Thanks/envolope.png"
          alt="Envelope"
        />
        <img
          className={style.profileImg}
          src="/assets/images/Thanks/girl.jpg"
          alt="Profile"
        />
        <h2>Dziękujemy za wiadomość</h2>
        <h4>
          Właśnie zaczynamy działać, by przygotować dla Ciebie coś wyjątkowego.{" "}
          <br /> Skontaktujemy się z Tobą w ciągu 24 godzin w dni robocze
          (poniedziałek - piątek)
        </h4>

        <h5>
          <span>W międzyczasie… </span>
          Zobacz, jak pomogliśmy innym. I jakie efekty osiągnęli dzięki
          współpracy z nami.
        </h5>

        <button onClick={handleGoToOpinie}>Poznaj opinie klientów</button>
      </div>
    </div>
  );
};

export default ThanksMessage;
