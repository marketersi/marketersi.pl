import React from "react";
import "./stand-out.css";
import { Container } from "react-bootstrap";

const StandOut = () => {
  return (
    <Container>
      <h1>
        What makes us <br /> stand out?
      </h1>
      <p>
        Obsessive focus on <br />
        high return on investment.
      </p>
      <p>
        Agencies usually bring traffic to your website and that's it. Do you
        realize how much of your money is left on the table?
      </p>
      <p>
        You can get 2-3 times more out of every advertising dollar. You just
        need to take care of what happens later in your visit:
      </p>
      <p>
        How to make content and images more convincing to visitors? How to
        effectively increase the value of each order? What can you do to make
        your customers come back to you more willingly?
      </p>
      <p>
        Double increases come from many small improvements at many stages of the
        marketing process. For example - a two-fold increase may be the sum of
        an improvement of only three elements by only 25%
      </p>
      <div>
        <img
          src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWzrost%20dochodu.005fd7ea.jpg&w=750&q=75"
          alt=""
        />
      </div>
      <div>
        <div>
          <h2>How well do we manage AdWords campaigns?</h2>
          <p>
            So good that Google published an article on how we reduce customer
            acquisition costs on this platform.
          </p>
        </div>
        <div>
          <img
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSkuteczne%20reklamy%20w%20google.90f4a3e0.jpg&w=384&q=75"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMagazyny%20o%20nas.a119f925.jpg&w=384&q=75"
            alt=""
          />
        </div>
        <div>
          <h2>How well do we know about marketing?</h2>
          <p>
            So good that our advertising agency was invited to the pages of TVP,
            TVN, Forbes, Puls Biznesu and Marketing w Praktyce.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default StandOut;
