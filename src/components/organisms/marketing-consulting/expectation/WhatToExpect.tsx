import React from "react";
import "./expect.css";
import { Container } from "react-bootstrap";
import "./expect.css";
import { useSelector } from "react-redux";

const WhatToExpect = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);
  const { WhatToExpect } = screenData || {};

  const {
    brand_logo,
    paragraph_6,
    paragraph_5,
    paragraph_4,
    paragraph_3,
    paragraph_2,
    image_url_right,
    image_url_left,
    paragraph_1,
    title,
  } = WhatToExpect || {};

  return (
    <Container className="text-center wte">
      <div className="wte_header">
        <h2>
          {/* Czego dokładnie <br /> możesz oczekiwać? */}
          {title}
        </h2>
        <p>
          {/* <strong>W Owocnych działamy zupełnie inaczej. Dlaczego?</strong>{" "}
          <br /> To proste. Nasze wynagrodzenie jest związane z Twoim zyskiem,
          więc koncentrujemy się na tym co ma prawdziwe znaczenie. */}
          {paragraph_1}
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <img
          // src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaur-lewy.b7365a35.jpg&w=128&q=75"
          src={image_url_left}
          alt="feather image left"
        />
        <div className="w-50 mx-5">
          <p>
            {/* Nie rozliczamy pozycji w Google, czy wejść na stronę, bo ważna jest
            tylko ilość klientów. */}
            {paragraph_2}
          </p>
          <p>
            {/* Nie zawracamy Ci głowy ilością lajków, bo prawdziwe znaczenie ma
            ilość transakcji. */}
            {paragraph_3}
          </p>
        </div>
        <img
          // src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaur-prawy.27b40e46.jpg&w=128&q=75"
          src={image_url_right}
          alt="feather image right"
        />
      </div>

      <div className="wte_end">
        <p>
          {/* Klienci przychodzą do nas najczęściej właśnie dlatego, że zamiast
          zysków marketing przynosi same straty albo ledwie się opłaca. */}
          {paragraph_4}
        </p>
        <p>
          {/* Obsługujemy wszystkie cyfrowe kanały reklamowe, więc zawsze działamy
          precyzyjnie. Wyłącznie tam, gdzie ma to finansowy sens.Owocne
          podejście zakłada, że rośniemy razem z naszymi klientami. */}
          {paragraph_5}
        </p>
        <p className="my-5">
          {/* <strong>Nasze intencje są jasne i szczere. </strong>
          <br /> Szukamy partnerów na całe życie. */}
          {paragraph_6}
        </p>

        <img
          // src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fowocni-nazwa-animowana.9707f9df.gif&w=640&q=75"
          src={brand_logo}
          alt="brand logo"
        />
      </div>
    </Container>
  );
};

export default WhatToExpect;
