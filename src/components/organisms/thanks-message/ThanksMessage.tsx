<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "./thanks.module.css";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ThanksMessage = () => {
  const { width, height } = useWindowSize();
  const router = useRouter();

  const [isShowingCoffit, setIsShowingConfeeti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timeout = setTimeout(() => {
      setIsShowingConfetti(false);
    }, 3000);

    // Ensure no horizontal scrolling due to confetti
    document.body.style.overflowX = "hidden";

    return () => {
      clearTimeout(timeout); // Cleanup timeout on unmount
      document.body.style.overflowX = ""; // Reset overflow style
    };
  }, []);

  

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };
  const handleGoToOpinie = () => {
    router.push("/marketersi-opinie"); // Navigate to the desired page
  };

  return (
    <div className={style.thanks}>
      <Confetti width={width} height={height} numberOfPieces={1200} tweenDuration={3000} recycle={false} />
      <div className={style.thanksContainer}>
        <img
          className={style.maiImg}
          src="/assets/images/Thanks/envolope.png"
=======
"use client"
import React from "react";
import { useRouter } from "next/navigation";
import style from "./thanks.module.css";

const ThanksMessage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };

  return (
    <div className={style.thanks}>
      <div className={style.thanksContainer}>
        <img
          className={style.maiImg}
          src="/assets/images/Thanks/mail-animation.svg"
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          alt=""
        />
        <img
          className={style.profileImg}
<<<<<<< HEAD
          src="/assets/images/Thanks/girl.jpg"
          alt=""
        />
        <h2>Dziękujemy za wiadomość</h2>
        <h4>
          Właśnie zaczynamy działać, by przygotować dla Ciebie coś wyjątkowego.{" "}
          <br /> Skontaktujemy się z Tobą w ciągu 24 godzin w dni robocze
          (poniedziałek - piątek)
        </h4>
        {/* <div className={style.likeButton}>
          <img src="/assets/images/Thanks/FEppCFCt76d.png" alt="" />
          <p>Obserwuj</p>
        </div> */}
        <h5>
          <span>W międzyczasie… </span>
          Zobacz, jak pomogliśmy innym. I jakie efekty osiągnęli dzięki
          współpracy z nami.
        </h5>

        <button onClick={handleGoToOpinie}>Poznaj opinie klientów</button>
=======
          src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMarta-owocni.08d79858.png&w=128&q=75"
          alt=""
        />
        <h2>Dzięki za wiadomość</h2>
        <h4>
          Hej tu Marta. O ile nie jest to weekend i jest przed godziną 16,
          odpiszę na Twoją wiadomość jeszcze dziś.
        </h4>
        <div className={style.likeButton}>
          <img src="/assets/images/Thanks/FEppCFCt76d.png" alt="" />
          <p>Obserwuj</p>
        </div>
        <h5>
          <span>Tymczasem kliknij “lubię to”.</span>
          Warto mieć fajne towarzystwo na fejsie.
        </h5>
        <p>
          11 tys. użytkowników obserwuje to. <br />
          Wyprzedź swoich znajomych i obserwuj to.
        </p>
        <button onClick={handleGoBack}>Wróć na poprzednią stronę</button>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </div>
    </div>
  );
};

export default ThanksMessage;
