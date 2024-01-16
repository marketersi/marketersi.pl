import React from "react";
import "./customers-review.css";
import { Container } from "react-bootstrap";

const CustomersReview = () => {
  return (
    <Container className="cr_sec">
      <div className="cr_header">
        <h2>
          Co mówią <br /> nasi klienci?
        </h2>
        <p>
          <em>
            Chcesz wiedzieć jak możemy pomóc? <br /> Najlepiej zobacz jak
            pomogliśmy innym.
          </em>
        </p>
      </div>
      <div>
        <img
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOpinie.d276a76a.jpg&w=1920&q=75"
          alt=""
          className="w-100"
        />
      </div>
    </Container>
  );
};

export default CustomersReview;
