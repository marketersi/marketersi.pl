import React from "react";
import { useSelector } from "react-redux";

const RestaurantData = {
  title: "BOHEMIA GDAŃSK",
  subtitle:
    "Logo mojej knajpy musi być w starym klimacie. Tak, by chciało się przy nim posiedzieć z przyjaciółmi.",
  text: "Bohemia to autentyczny gdański browar rzemieślniczy. Choć w lokalu znajduje się kuchnia, to chmiel gra pierwsze skrzypce. Kraftowe piwo bazuje na starej recepturze, stąd pomysł pieczęci. Chmielowe szyszki będą przyjemną częścią rozpoznawalności. Jednak prawdziwy sekret drzemie w zapisie typograficznym. Wyrafinowany, elegancki, nadaje całości legendarnego wydźwięku Żaden fan rzemieślniczego browaru nie przechodzi obok tego obojętnie.",
  secondaryImage: "/img/Projektowanie-graficzne-logo.jpg.webp",
  image: "/assets/images/logo-design/daco-logo.webp",
  quote: "Idealne! Czuć, że was to obchodzi.Z wami naprawdę chce się pracować.",
  quoteAuthor: "Tomasz Salawa - Właściciel",
  quoteText:
    "Po tak ciężkiej pracy miło będzie wybrać się na piwo. Zwłaszcza, że Bohemia jest już tak blisko...",
};

const Restaurant = () => {
  const {isLoading, screenData} = useSelector((state) => state.logo);
  const {RestaurantData} = screenData || {};
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-espace"></div>
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
                {RestaurantData?.title}
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {RestaurantData?.subtitle}
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc">
                {RestaurantData?.text1}
              </p>
              <p className="theme-desc projects-theme-desc-p">
                {RestaurantData?.text2}
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src={RestaurantData?.image_1}
              title="Projektowanie logo - cena nie musi być wysoka, a pomysł jest dobry"
              alt="Projektowanie logo - cena w ogólnym ujęciu"
              style={{ left: "-65px", position: "relative", maxWidth: "none" }}
            />
            {/* <img
              src="/files/multimedias/528/Projektowanie-logo-cena.jpg.webp"
              className="mobile-810"
              alt="Projektowanie logo - cena w ogólnym ujęciu"
              title="Projektowanie logo - cena nie musi być wysoka, a pomysł jest dobry"
            /> */}
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-m0-top">
              {RestaurantData?.text3}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
              {RestaurantData?.text4}
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container position-relative">
          <div className="image-810">
            <a href="https://www.youtube.com/watch?v=9C-ZNDm0Ziw" data-lity="">
              <img
                className="desktop-810 position-relative"
                src={RestaurantData?.image_2}
                title="Rzeczy ważne przy projektu logo na przykładzie Bohemii"
                alt="Profesjonalny znak wyróżni Twoją markę "
                style={{ left: "-75px" }}
              />
            </a>
            {/* <a href="https://www.youtube.com/watch?v=9C-ZNDm0Ziw" data-lity="">
              <img
                src="/files/multimedias/530/Przyklad-przy-projektowaniu-logo-Bohemia-MOB.jpg.webp"
                className="mobile-810"
                alt="Profesjonalny znak wyróżni Twoją markę "
                title="Rzeczy ważne przy projektu logo na przykładzie Bohemii"
              />
            </a> */}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image">
               {RestaurantData?.quote}
                
              </h5>
              <p className="signature">{RestaurantData?.quoteAuthor}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
