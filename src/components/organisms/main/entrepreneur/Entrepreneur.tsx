import React from "react";
import style from "../main.module.css";
import ReactPlayer from "react-player";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const Entrepreneur = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section1 } = imageswithdescription || {};

  console.log("section1", section1);

  return (
    <div>
      <Container>
        <div className={style.enter}>
          {/* <Image
            // src="/assets/images/Kurs-na-social-media.avif"
            src={section1?.image_url}
            alt="rating image"
            width="auto"
            height="auto"
          /> */}
          <ReactPlayer
        // url="/assets/videos/desktopTop.mp4"
        url={section1?.image_url}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="auto"
        className={style.socialVideo}
      />
          <div className={style.Content}>
            <h2>
              {/* Drogi <br /> Przedsiębiorco! */}
              {section1?.title}
            </h2>
            <p>
              {/* <span>Rozwijanie firmy jest trudne.</span> <br />
              Naprawdę trudne. */}
              {section1?.subtitle_1}
            </p>
            <p>
              {/* Martwisz się, skąd przyjdzie kolejny klient. <br />A do tego…
              Ciągnie Cię w milion różnych stron. */}
              {section1?.paragraph_1}
            </p>

            <p>
              {/* Blogować? Dokumentować życie na Instagramie?
              <br />
              Publikować na LinkedIn pięć razy dziennie?
              <br />
              Może wystartować reklamy Google? */}
              {section1?.paragraph_2}
            </p>
            <p>
              {/* <span>A co ze sztuczną inteligencją?</span> <br />
              Wszyscy o niej mówią. Spróbuję. */}
              {section1?.paragraph_3}
            </p>
            <p>{section1?.subtitle_2}</p>
            <p>
              {/* Większość przedsiębiorców skupia się na nowościach. <br />
              Kończą robiąc trochę tego... trochę tamtego. Bez efektów. */}
              {section1?.paragraph_4}
            </p>
            <p>
              {/* Czytasz to, bo w pewien sposób Twoja firma nie jest tam, <br />{" "}
              gdzie chcesz. Mimo, że wkładasz w to ogrom wysiłku. */}
              {section1?.paragraph_5}
            </p>
            <p>
              {/* Zmęczyło Cię wydawanie ciężko zarobionych pieniędzy <br />
              na marketing, który generuje więcej kosztów niż zysku? <br /> Masz
              dość wymówek zamiast rezultatów? Dobrze trafiłeś! */}
              {section1?.paragraph_6}
            </p>
            <p>
              {/* Jak by to było czuć pewność, że Twoja firma ma stały dopływ nowych
              klientów i nie musisz już zarywać weekendów, martwiąc się o pracę? */}
              {section1?.paragraph_7}
            </p>
            <p>
              {/* Jesteśmy agencją marketingową skoncentrowaną na br zwrocie z
              inwestycji (ROI). Tworzymy zautomatyzowane <br /> kampanie
              pozyskiwania nowych klientów dla firm <br /> działających w wielu
              krajach i różnych branżach. */}
              {section1?.paragraph_8}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entrepreneur;
