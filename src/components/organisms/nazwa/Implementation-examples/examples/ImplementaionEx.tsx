import React from "react";
import { useSelector } from "react-redux";

const ImplementationExample1 = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation, bnc_implementation } = screenData || {};
  const { example1 } = implementation || {};
  return (
    <section className="projects-thematic-section-gray menu-target" id="sec3">
      <div className="iglarki-section-main-header text-center pnazw-custom-lineheight">
        <span>
          <strong>
            {bnc_implementation?.title}
          </strong>
        </span>{" "}
        <br />
        <div className="iglarki-section-submain">
         {bnc_implementation?.subtitle}
        </div>
      </div>

      <div className="naming-seo-img">
        <img
          src={bnc_implementation?.image}
          title="Przykład tego jak fajna nazwa pomaga małym biznesom"
          alt="Iglarki jako sukces biorąc pod uwagę propozycje nazw"
        />
      </div>

      <div className="names-client-name copywriter-cname names-iglarki-name iglarki-cname">
        {/* GDYNIA */}
        {example1?.title}
      </div>

      <div className="names-client-desc names-client-iglarki">
        {/* Dwie kreatywne mamy, <br />
        które w wolnym czasie <br />
        szyją piękne rzeczy. */}
        {example1?.subtitle}
      </div>
    </section>
  );
};

export default ImplementationExample1;
