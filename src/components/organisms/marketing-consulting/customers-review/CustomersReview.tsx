import React from "react";
import "./customers-review.css";
import { Container } from "react-bootstrap";

const CustomersReview = () => {
  return (
    <Container>
      <div>
        <h2>Co mówią nasi klienci?</h2>
        <p>
          Chcesz wiedzieć jak możemy pomóc? Najlepiej zobacz jak pomogliśmy
          innym.
        </p>
      </div>
      <div>
        <img
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOpinie.d276a76a.jpg&w=1920&q=75"
          alt=""
        />
      </div>
    </Container>
  );
};

export default CustomersReview;
