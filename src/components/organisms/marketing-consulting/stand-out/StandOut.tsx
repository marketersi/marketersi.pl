import React from "react";
import "./stand-out.css";
import { Container } from "react-bootstrap";

const StandOut = () => {
  return (
    <div className="so_sec">
      <Container className="text-center">
        <div className="so_header">
          <h1>
            Co nas <br /> wyróżnia?
          </h1>
          <p>
            <em>
              Obsesyjna koncentracja na <br /> wysokim zwrocie z inwestycji.
            </em>
          </p>
        </div>
        <div className="so_paras">
          <p>
            Agencje zazwyczaj dostarczają odwiedzin na Twoją stronę i tyle.
            Zdajesz sobie sprawę jak dużo Twoich pieniędzy zostaje na stole?
          </p>
          <p>
            Z każdej reklamowej złotówki można wycisnąć 2-3 razy więcej.
            Wystarczy zadbać o to, co wydarza się w dalszej części odwiedzin:
          </p>
          <p>
            Jak sprawić by treści i obrazy, lepiej przekonywały odwiedzających?
            W jaki sposób skutecznie zwiększyć wartość każdego zamówienia? Co
            zrobić, by klienci chętniej wrócili do Ciebie ponownie?
          </p>
          <p>
            Podwójne wzrosty pochodzą z wielu małych usprawnień, na wielu
            etapach procesu marketingowego. Dla przykładu - dwukrotny wzrost
            może być sumą poprawy tylko trzech elementów zaledwie o 25%
          </p>
          <div className="so_img">
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWzrost%20dochodu.005fd7ea.jpg&w=750&q=75"
              alt=""
            />
          </div>
        </div>

        <div className="so_flex">
          <div>
            <h2>
              Jak dobrze zarządzamy <br /> kampaniami AdWords?
            </h2>
            <p>
              Tak dobrze, że Google opublikował artykuł <br /> o tym, jak
              obniżamy koszty pozyskiwania <br /> klientów na tej platformie.
            </p>
          </div>
          <div>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSkuteczne%20reklamy%20w%20google.90f4a3e0.jpg&w=384&q=75"
              alt=""
            />
          </div>
        </div>

        <div className="so_flex">
          <div>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMagazyny%20o%20nas.a119f925.jpg&w=384&q=75"
              alt=""
            />
          </div>
          <div>
            <h2>
              Jak dobrze znamy <br /> się na marketingu?
            </h2>
            <p>
              Tak dobrze, że nasza agencja reklamowa <br /> była zapraszana na
              łamy TVP, TVN, Forbes, <br /> Pulsu Biznesu, czy Marketingu w
              Praktyce.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StandOut;
