import React from "react";
import "./cennik.css";

const PriceListScreen = () => {
  const cardStyle = {
    boxShadow:
      "4px 4px 15px rgba(0, 0, 0, 0.15), 0 0 0 #ffffff, 2px 2px 2px #ffffff inset, -2px -2px 2px #c7c7c7 inset",
    borderRadius: "30px",
    minHeight: "400px",
    padding: "20px",
    backgroundColor: "rgba(247, 247, 247, 1)",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 25px 10px 25px",
    borderRadius: "100px",
    backgroundColor: "rgb(255, 255, 255)",
    border: "1px solid rgb(201, 201, 201)",
    fontSize: "18px",
  };

  return (
    <section className="container pb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mt-5 heading-style">Zdobądź 3 różne opcje cenowe</h2>
          <div className="mt-3">
            <p className="subheading">
              <span>
                Przejdź krótki formularz. Zobacz co dla Ciebie zrobimy,
                <br />
                ile za to policzymy i jak szybko Ci się to zwróci.
              </span>
            </p>
          </div>

          <div className="card mt-4 card-narrow" style={cardStyle}>
            <div className="card-body">
              <div>
                <h2 className="card-heading">Na co chcesz wycenę?</h2>
                <p className="card-subheading">Wybierz jedną z opcji.</p>
              </div>
              <div className="btns_container mb-5">
                <div className="row">
                  <div className="col">
                    <button style={buttonStyle}>Strona internetowa</button>
                  </div>
                  <div className="col">
                    <button style={buttonStyle}>Działania marketingowe</button>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <button style={buttonStyle}>Nazwa dla firmy</button>
                  </div>
                  <div className="col">
                    <button style={buttonStyle}>Logo lub identyfikacja</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceListScreen;
