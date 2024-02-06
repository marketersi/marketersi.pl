import React from "react";
import "./stand-out.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const StandOut = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);

  const { WhyUs } = screenData || {};
  const {
    info_image_url_2,
    info_2,
    question_2,
    info_image_url_1,
    info_1,
    question_1,
    image_url_1,
    paragraph_4,
    paragraph_3,
    paragraph_2,
    paragraph_1,
    subtitle,
    title,
  } = WhyUs || {};

  return (
    <div className="so_sec">
      <Container className="text-center">
        <div className="so_header">
          <h1>
            {/* Co nas <br /> wyróżnia? */}
            {title}
          </h1>
          <p>
            <em>
              {/* Obsesyjna koncentracja na <br /> wysokim zwrocie z inwestycji. */}
              {subtitle}
            </em>
          </p>
        </div>
        <div className="so_paras">
          <p>
            {/* Agencje zazwyczaj dostarczają odwiedzin na Twoją stronę i tyle.
            Zdajesz sobie sprawę jak dużo Twoich pieniędzy zostaje na stole? */}
            {paragraph_1}
          </p>
          <p>
            {/* Z każdej reklamowej złotówki można wycisnąć 2-3 razy więcej.
            Wystarczy zadbać o to, co wydarza się w dalszej części odwiedzin: */}
            {paragraph_2}
          </p>
          <p>
            {/* Jak sprawić by treści i obrazy, lepiej przekonywały odwiedzających?
            W jaki sposób skutecznie zwiększyć wartość każdego zamówienia? Co
            zrobić, by klienci chętniej wrócili do Ciebie ponownie? */}
            {paragraph_3}
          </p>
          <p>
            {/* Podwójne wzrosty pochodzą z wielu małych usprawnień, na wielu
            etapach procesu marketingowego. Dla przykładu - dwukrotny wzrost
            może być sumą poprawy tylko trzech elementów zaledwie o 25% */}
            {paragraph_4}
          </p>
          <div className="so_img">
            <img
              // src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWzrost%20dochodu.005fd7ea.jpg&w=750&q=75"
              src={image_url_1}
              alt="graph image"
            />
          </div>
        </div>

        <div className="so_flex">
          <div>
            <h2>
              {/* Jak dobrze zarządzamy <br /> kampaniami AdWords? */}
              {question_1}
            </h2>
            <p>
              {/* Tak dobrze, że Google opublikował artykuł <br /> o tym, jak
              obniżamy koszty pozyskiwania <br /> klientów na tej platformie. */}
              {info_1}
            </p>
          </div>
          <div>
            <img
              // src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSkuteczne%20reklamy%20w%20google.90f4a3e0.jpg&w=384&q=75"
              src={info_image_url_1}
              alt="info_image1"
            />
          </div>
        </div>

        <div className="so_flex">
          <div>
            <img
              // src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMagazyny%20o%20nas.a119f925.jpg&w=384&q=75"
              src={info_image_url_2}
              alt="info_image2"
            />
          </div>
          <div>
            <h2>
              {/* Jak dobrze znamy <br /> się na marketingu? */}
              {question_2}
            </h2>
            <p>
              {/* Tak dobrze, że nasza agencja reklamowa <br /> była zapraszana na
              łamy TVP, TVN, Forbes, <br /> Pulsu Biznesu, czy Marketingu w
              Praktyce. */}
              {info_2}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StandOut;
