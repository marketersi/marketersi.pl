import React from "react";

const Warranty = () => {
  return (
    <>
      <section className="warranty">
        <h2>NASZA GWARANCJA</h2>
        <div className="warranty_card">
          <div className="warranty_card_content">
            <h3>Lepsze wyniki strony, albo 100% zwrotu pieniędzy!</h3>
            <p>
              W Owocnych jesteśmy tak pewni swoich kompetencji, że dajemy
              klientom, zuchwałą gwarancję.
            </p>
            <a href="/cennik">Zamów bezpłatną ofertę</a>
          </div>
          <div className="warranty_card_img">
            <img
              src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F23-B-min.0199023a.png&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Warranty;
