import React from "react";
import style from "../team.module.css";
import { Container } from "react-bootstrap";

const Culture = () => {
  return (
    <>
      <div className={style.teamContent}>
        <p>
          <span>Doskonalenie umiejętności to część owocnej kultury.</span>Nasi
          ludzie są regularnie cytowani przez najważniejsze tytuły: Forbes, Puls
          Biznesu czy Marketing w praktyce.
        </p>
      </div>
      <Container>
        <div className={style.cultureCard}>
          <img
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia-transformed.8980c418.png&w=640&q=75"
            alt=""
          />
          <h2>
            Chyba robimy coś <br />
            <span>naprawdę dobrze,</span> <br />
            skoro media uznają <br />
            nas za ekspertów.
          </h2>
        </div>
        <img className={style.cultureImg} src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMedia-owocni.a90ca738.png&w=640&q=75" alt="" />
      </Container>
      <div className={style.teamContent}>
        <p>
          <span>Oczywiście mamy słabości.</span>
          Choć każdemu zdarza się spóźnić do pracy, to raczej nie spóźniamy się z pracą.
        </p>
        <p>
          <span>esteśmy sumienni. </span>
          Nawet jeśli oznacza to, że nie możemy przyjąć wszystkich proponowanych zleceń.
        </p>
        <p>
        Niemal 30 osób, codziennie włącza komputer w innym miejscu. O innej godzinie. A jak jest w studio?
        </p>
      </div>
    </>
  );
};

export default Culture;
