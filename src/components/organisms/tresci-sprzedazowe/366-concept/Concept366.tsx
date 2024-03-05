import React from 'react'
import img from 'next/img';
import { useSelector } from 'react-redux';


const Concept366 = () => {

  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects} = screenData || {};
  const {projectSection4 } = projects || {};


  return (
    <>
<section className="thematic-section">

<img src={projectSection4?.logo_image} className="projects-bow-2" alt="" />

<div className="copywriter-text-center copywriter-standard-mt-80">
<img
  src="https://cdn.owocni.pl/img/single-copywriter/366concept-logo.png"
  className="smaller-logos"
  title="Przykład realizacji przez agencję reklamową dla klienta"
  alt="Reklama dla klienta Owocnych"
/>
</div>

<div className="container custom-container2">
  <div className="row">
    <div className="col-md-12 text-center">

      <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
        WARSZAWA
      </div>

      <div className="names-client-desc copywriter-client-desc-margin">
        Teksty wizerunkowe do katalogu <br />
        mebli vintage od najlepszych <br />
        polskich projektów z lat PRL
      </div>

    </div>

    <div className="col-md-12 copywriter-custom-margin-2">

      <p className="theme-desc">
        Studio 366 Concept oddaje hołd jednemu z najlepszych polskich mebli: <br />
        krzesłu „366” prof. Chierowskiego. Ponad pół miliona sztuk sprzedaży! <br />
        Legenda. Nasze teksty miały połączyć szacunek do tradycji i nowoczesne <br />
        spojrzenie na design, kreatywność i ekologię. Oto fragmenty tej treści.
      </p>

    </div>
  </div>
</div>

<div className="copywriter-custom-img-text text-center copywriter-standard-mtb-40">
        STYL Z LAT 60-TYCH, <br />
        WYKONANIE Z XXI WIEKU
      </div>

      <div className="container custom-container2">
        <div className="row">
          <div className="col-md-12">

            <div className="copywriter-ikony-subtheme copywriter-custom-font-size copywriter-rwd-mtb-40">
              Tworzymy produkty, które opierają <br />
              się chwilowym trendom.
            </div>

          </div>
        </div>
      </div>

      <div className="copywriter-text-center copywriter-rwd-mtb-40">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Reklama-mebli.jpg"
          title="Copywriterzy Owocnych przygotowali hasła reklamowe"
          alt="Przykład realizacji tekstów reklamowych dla klienta"
          layout='responsive'
        />
      </div>

      <div className="copywriter-text-center copywriter-standard-mtb-40">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Haslo-reklamowe-meble.jpg"
          title="Hasło reklamowe dla klienta Owocnych"
          alt="Jeden z tekstów reklamowych na strony internetowe"
          layout='responsive'
        />
      </div>

      <div className="container custom-container2">
        <div className="row">
          <div className="col-md-12">

            <div className="copywriter-ikony-theme">
              Meble się starzeją, <br />
              ikony pięknieją.
            </div>

          </div>
        </div>
      </div>

      <div className="copywriter-text-center">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Haslo-reklamowe-meble2.jpg"
          title="Zrealizowane teksty reklamowe dla klienta Owocnych"
          alt="Content marketing - przykład"
          layout='responsive'
        />
      </div>

      <div className="container custom-container2 copywriter-standard-mt-80">
        <div className="row">
          <div className="col-md-12">
            <div className="copywriter-custom-img-text">
              Polski design, <br />
              polski las.
            </div>

            <div className="copywriter-custom-img-text-sm copywriter-rwd-mtb-40 copywriter-custom-font-size">
              Staramy się oddawać naturze <br />
              więcej niż od niej bierzemy. <br />
              Dlatego gdy Ty klikasz 'kup', <br />
              my idziemy zasadzić drzewo.
            </div>
          </div>
        </div>
      </div>

      <div className="copywriter-bg-10" style={{position:'relative'}}>
        <img
          className="copywriter-fotel"
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Meble-fotel.jpg"
          title="Pisanie tekstów dla małych i średnich firm"
          alt="Przykładowe zrealizowane dotychczas teksty na stronę"
         
        />

        {/* <img
          className="copywriter-fotel-rwd"
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Meble-fotel.jpg"
          title="Pisanie tekstów dla małych i średnich firm"
          alt="Przykładowe zrealizowane dotychczas teksty na stronę"
          
        /> */}
      </div>

      <br />

      <div className="copywriter-text-center copywriter-standard-mt-40">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Logo-studio-fotografii.jpg"
          title="Własna firma - współpraca z agencją reklamową Owocni"
          alt="Slogany reklamowe przykład współpracy"
          
        />
      </div>

      <div className="container custom-container2">
        <div className="row">
          <div className="col-md-12 text-center">

            <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
              GDYNIA
            </div>

            <div className="names-client-desc copywriter-client-desc-margin">
              Artykuły na stronę internetową dla <br />
              studia fotografii dziecięcej. Czyli <br />
              content marketing o fotografii, <br />
              rodzinie i marzeniach. <br />
            </div>

          </div>

          <div className="col-md-12">

            <p className="theme-desc">
              Akuku potrzebowało tekstów, które wypozycjonują markę w Google
              i przyciągną do studia młode mamy. Precyzyjnie opracowane tematy
              okazały się hitem internetu. Łączą emocje z konkretami i zleceniami.
              Uczą i opowiadają o radości zatrzymania pięknych wspomnień.
            </p>

          </div>
        </div>
      </div>

      <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-standard-mb-80 copywriter-rwd-mtb-40 content-marketing">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Content-marketing.jpg"
          className="copywriter-seo-img"
          title="Copywriter oferta i przykład jednej z realizacji"
          alt="Zrealizowane teksty na stronę jednego z klientów"
          layout='responsive'
        />
      </div>

      <div className="container custom-container2 copywriter-standard-mtb-40">
        <div className="row">
          <div className="col-md-12">
            <div className="copywriter-custom-text-akuku copywriter-standard-mtb-40">
              Gwiazdorska sesja <br />
              w profesjonalnym studio
            </div>
            <div className="copywriter-custom-subtext-akuku">
              Prezent, który z roku na rok <br />
              ceni się coraz bardziej.
            </div>
          </div>
        </div>
      </div>

      <div className="copywriter-text-center copywriter-standard-mt-40">
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/seo-images/Reklama-studia-fotografii.jpg"
          title="Copywriterzy przygotowali teksty reklamowe dla studia"
          alt="Przykład prac klienta agencji marketingowej"
          layout='responsive'
        />
      </div>

      <div className="container custom-container2 copywriter-standard-mb-80">
        <div className="row">
          <div className="col-md-12">
            <div className="copywriter-custom-text-akuku-2 copywriter-standard-mb-40 copywriter-standard-mt-m80 new-mt-2">
              Na szczęście <br className="dont-delete" />
              te portrety już <br className="dont-delete" />
              nigdy nie dorosną
            </div>
            <div className="copywriter-custom-subtext-akuku-2">
              Dzieciństwo to tylko krótka chwila. <br className="dont-delete" />
              Zatrzymamy ją dla Was. Najpiękniej.
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
        alt=""
        className="projects-rotate-bow projects-bow-1"
        layout='responsive'
      />
</section>
    </>
  )
}

export default Concept366