import React from "react";
import style from "../main.module.css";
import { Container, Image } from "react-bootstrap";

const Entrepreneur = () => {
  return (
    <div>
      <Container>
        <div className={style.enter}>
          <Image
            src="/assets/images/Kurs-na-social-media.avif"
            alt="rating image"
            width="auto"
            height="auto"
          />
          <div className={style.Content}>
          <h2>
            Drogi <br /> Przedsiębiorco!
          </h2>
          <p>
            <span>Rozwijanie firmy jest trudne.</span> <br />
            Naprawdę trudne.
          </p>
          <p>
            Martwisz się, skąd przyjdzie kolejny klient. <br />A do tego…
            Ciągnie Cię w milion różnych stron.
          </p>

          <p>
            Blogować? Dokumentować życie na Instagramie?
            <br />
            Publikować na LinkedIn pięć razy dziennie?
            <br />
            Może wystartować reklamy Google?
          </p>
          <p>
            <span>A co ze sztuczną inteligencją?</span> <br />
            Wszyscy o niej mówią. Spróbuję.
          </p>
          <p>
            Większość przedsiębiorców skupia się na nowościach. <br />
            Kończą robiąc trochę tego... trochę tamtego. Bez efektów.
          </p>
          <p>
            Czytasz to, bo w pewien sposób Twoja firma nie jest tam, <br />{" "}
            gdzie chcesz. Mimo, że wkładasz w to ogrom wysiłku.
          </p>
          <p>
            Zmęczyło Cię wydawanie ciężko zarobionych pieniędzy <br />
            na marketing, który generuje więcej kosztów niż zysku? <br /> Masz
            dość wymówek zamiast rezultatów? Dobrze trafiłeś!
          </p>
          <p>
            Jak by to było czuć pewność, że Twoja firma ma stały dopływ nowych
            klientów i nie musisz już zarywać weekendów, martwiąc się o pracę?
          </p>
          <p>
            Jesteśmy agencją marketingową skoncentrowaną na br
             zwrocie z inwestycji
            (ROI). Tworzymy zautomatyzowane <br /> kampanie pozyskiwania nowych
            klientów dla firm <br /> działających w wielu krajach i różnych branżach.
          </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entrepreneur;
