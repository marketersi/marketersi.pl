import React from "react";
import "./customer-rating.css";

const CustomerRating = () => {
  return (
    <section className="container">
      <div className="brand-img-container">
        <img src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-A.83958f8c.png&w=640&q=75" />
        <img src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-B.eb7ea4b5.png&w=640&q=75" />
      </div>
      <p
        className="text-center my-5"
        style={{ fontSize: "24px", fontWeight: 300 }}
      >
        Ta usługa jest oceniana średnio na <br />
        przez firmy, które mówią takie rzeczy jak:
      </p>

      <div className="d-flex justify-content-center align-items-center">
        <p className="emphasized-text">
          <em>
            “poziom szczegółowości <br />
            był niesamowity!”
          </em>
        </p>
        <div className="mx-5">
          <p>
            <strong className="text-color">Monika Marchewka </strong>
            <br />
            Marketing Manager <br />
            Systegra S.A.{" "}
          </p>
          <p></p>
        </div>
      </div>

      <div className="image-container">
        <img
          src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpercent.5bb59584.gif&w=384&q=75"
          alt=""
        />
        <img
          src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTak.1d7786af.png&w=384&q=75"
          alt=""
          className="img-left-merge"
        />
      </div>

      <p
        className="text-center my-5"
        style={{ fontSize: "24px", fontWeight: 300 }}
      >
        Na pytanie: Czy po wdrożeniu wskazówek od naszego <br />
        eksperta wzrost wyników był zauważalny/mierzalny? <br />{" "}
        <b>93% klientów odpowiada, że TAK!</b>
      </p>
    </section>
  );
};

export default CustomerRating;
