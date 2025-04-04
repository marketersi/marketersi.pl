<<<<<<< HEAD
import React from 'react';
import '../tresci.css';
import { useSelector } from 'react-redux';

const Mako = () => {
=======
import React from "react";
import '../tresci.css'
import { useSelector } from "react-redux";

const Mako = () => {

>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects } = screenData || {};
  const { projectSection7 } = projects || {};

<<<<<<< HEAD
  return (
    <>
      <section className="thematic-section">
        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-bow-2"
          alt=""
        /> */}

        {/* <div className="copywriter-text-center copywriter-standard-mt-80">
=======
  
  return (
    <>
      <section className="thematic-section">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-bow-2"
          alt=""
        />

        <div className="copywriter-text-center copywriter-standard-mt-80">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          <img
            src={projectSection7?.logo_image}
            title="Copywriting cennik i przykłady stworzonych haseł"
            alt="Marketing Owocnych zrealizowane przykłady"
          />
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
<<<<<<< HEAD
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname uppercase">
              Piaseczno
              </div>

              <div className="names-client-desc name-client-text-2 copywriter-client-desc-margin">
              Luksus w słowach: Jak „Rytuał Urody” podbił serca klientek?
=======
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection7?.underlined_label}
              </div>

              <div className="names-client-desc copywriter-client-desc-margin">
                {projectSection7?.title_1}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              </div>
            </div>

            <div className="col-md-12">
<<<<<<< HEAD
              <p className="theme-desc copywriter-custom-mright mobileLefttext">
              Pani Kamila pragnęła, by jej salon wyróżniał się na tle konkurencji jako miejsce, gdzie elegancja spotyka się z perfekcją. Powierzyła nam misję stworzenia tekstów, które nie tylko opiszą usługi, ale staną się ich przedłużeniem – pełnym luksusu i niezapomnianych emocji. Efekt? Wyjątkowe treści, które podkreśliły prestiż marki, przyciągnęły nowe klientki i na nowo zdefiniowały pojęcie holistycznego piękna. Rytuał Urody stał się nie tylko salonem, ale symbolem doświadczenia, które pozostaje w pamięci na długo.
=======
              <p className="theme-desc copywriter-custom-mright">
                {projectSection7?.description}
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
              </p>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mt-80 copywriter-standard-mb-140">
          <img
<<<<<<< HEAD
            className="copywriter-seo-img lingu"
=======
            className="copywriter-seo-img"
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            src={projectSection7?.bannar_image_1}
            title="W jaki sposób copywriter pracuje nad hasłem reklamowym"
            alt="Przykłady warsztatu pracy copywritera "
          />
        </div>

<<<<<<< HEAD
        {/* <div className="copywriter-border-870">
          <span className="copywriter-custom-text-3 text-center">
            {projectSection7?.text_btwn_borders}
          </span>
        </div> */}

        <div className="container custom-container2 copywriter-after-img-2">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="copywriter-custom-text-4 turbokids-text-1 text-center">
              Rytuał Urody — luksus, który czuje się w każdej chwili.
              </div>
              {/* <div className="copywriter-custom-subtext-4">
                {projectSection7?.info}
              </div> */}
=======
        <div className="copywriter-border-870">
          <span className="copywriter-custom-text-3 text-center">
            {projectSection7?.text_btwn_borders}
          </span>
        </div>

        <div className="container custom-container2 copywriter-after-img-2">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-custom-text-4">
                {projectSection7?.quote}
              </div>
              <div className="copywriter-custom-subtext-4">
                {projectSection7?.info}
              </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-standard-mb-80">
=======
        <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-standard-mb-80">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          <img
            src={projectSection7?.divider_image}
            title=""
            alt=""
          />
<<<<<<< HEAD
        </div> */}

        <div className="copywriter-custom-header-3 text-center copywriter-rwd-mtb-40 turbokids-text-2">
          {/* {projectSection7?.bannar_img_title_2} */}
          Daj sobie chwilę, która podkreśli to, co w Tobie najpiękniejsze.
        </div>

        {/* <div className="copywriter-text-center copywriter-standard-mtb-40">
=======
        </div>

        <div className="copywriter-custom-header-3 text-center copywriter-rwd-mtb-40">
          {projectSection7?.bannar_img_title_2}
        </div>

        <div className="copywriter-text-center copywriter-standard-mtb-40">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          <img
            src={projectSection7?.bannar_image_2}
            title="Skuteczność to podstawa jeśli chodzi o usługi copywriterskie"
            alt="Przykład hasła reklamowego dla firmy"
          />
        </div>

        <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-standard-mb-140 mako-big-img">
          <img
            src={projectSection7?.bckgrnd_image_2}
            className="copywriter-seo-img-dnone"
            title="Tworzenie haseł reklamowych na przykładzie Mako"
            alt="Przykłądowa realizacja agencji Owocni"
          />
<<<<<<< HEAD
        </div> */}

        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-rotate-bow projects-bow-1"
          alt=""
        /> */}
=======
        </div>

        <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-rotate-bow projects-bow-1"
          alt=""
        />
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </section>
    </>
  );
};

export default Mako;
