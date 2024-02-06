import React from "react";
import "./customers-review.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const CustomersReview = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);

  const { CustomeReview } = screenData || {};
  const { image_url, subtitle, title } = CustomeReview || {};

  return (
    <Container className="cr_sec">
      <div className="cr_header">
        <h2>
          {/* Co mówią <br /> nasi klienci? */}
          {title}
        </h2>
        <p>
          <em>
            {/* Chcesz wiedzieć jak możemy pomóc? <br /> Najlepiej zobacz jak
            pomogliśmy innym. */}
            {subtitle}
          </em>
        </p>
      </div>
      <div>
        <img
          // src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOpinie.d276a76a.jpg&w=1920&q=75"
          src={image_url}
          alt="reviews collage"
          className="w-100"
        />
      </div>
    </Container>
  );
};

export default CustomersReview;
